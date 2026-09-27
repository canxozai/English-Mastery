/**
 * Reading Comprehension & Extensive Reading Lab
 * Interactive reader with inline word dictionary lookup and comprehension assessment
 */
import { api } from '../api.js';
import { state } from '../state.js';
import { speech } from '../speech.js';

export class ReadingView {
  constructor() {
    this.container = null;
    this.materials = [];
    this.selectedMaterial = null;
    this.readingStartTime = Date.now();
    this.userAnswers = {};
    this.submissionResult = null;
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading reading materials...</p>
      </div>
    `;

    try {
      const data = await api.getReadingMaterials();
      this.materials = Array.isArray(data) ? data : (data.materials || []);
      if (this.materials.length > 0 && !this.selectedMaterial) {
        await this.loadMaterial(this.materials[0].id);
      } else {
        this.renderContent();
      }
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Failed to load reading materials</h3>
          <p>${err.message}</p>
        </div>
      `;
    }
  }

  async loadMaterial(id) {
    try {
      const data = await api.getReadingMaterial(id);
      this.selectedMaterial = data.material;
      this.readingStartTime = Date.now();
      this.userAnswers = {};
      this.submissionResult = null;
      this.renderContent();
    } catch (err) {
      state.showToast('Failed to load text: ' + err.message, 'error');
    }
  }

  renderContent() {
    const mat = this.selectedMaterial;
    const questions = mat && mat.comprehension_questions ?
      (typeof mat.comprehension_questions === 'string' ? JSON.parse(mat.comprehension_questions) : mat.comprehension_questions) : [];
    const keyVocab = mat && mat.key_vocabulary ?
      (typeof mat.key_vocabulary === 'string' ? JSON.parse(mat.key_vocabulary) : mat.key_vocabulary) : [];

    this.container.innerHTML = `
      <div class="reading-layout">
        <!-- Sidebar: Library Catalog -->
        <aside class="reading-sidebar card">
          <div class="reading-sidebar-header">
            <h3>Reading Library</h3>
            <span class="catalog-count">${this.materials.length} Articles</span>
          </div>

          <div class="reading-catalog-list">
            ${this.materials.map(m => `
              <div class="catalog-item ${mat && mat.id === m.id ? 'active' : ''}" data-id="${m.id}">
                <div class="catalog-item-top">
                  <span class="cefr-tag ${m.cefr_level}">${m.cefr_level}</span>
                  <span class="catalog-cat">${(m.category || '').toUpperCase()}</span>
                </div>
                <div class="catalog-title">${m.title}</div>
                <div class="catalog-meta">
                  <span>⏱️ ${m.estimated_reading_time || 3} min</span>
                  <span>📝 ${m.word_count || 150} words</span>
                </div>
              </div>
            `).join('')}
          </div>
        </aside>

        <!-- Main Reading Area -->
        <div class="reading-main">
          ${mat ? `
            <article class="card reading-article-card">
              <div class="article-header">
                <div class="article-meta-tags">
                  <span class="cefr-tag ${mat.cefr_level}">${mat.cefr_level}</span>
                  <span class="topic-category-badge">${mat.category}</span>
                  <span class="article-stats-pill">${mat.word_count} words • ~${mat.estimated_reading_time} min read</span>
                </div>
                <h1 class="article-title">${mat.title}</h1>
                <div class="article-controls">
                  <button class="btn btn-secondary btn-sm" id="read-aloud-btn">
                    🔊 Read Aloud (TTS)
                  </button>
                  <button class="btn btn-secondary btn-sm" id="stop-read-btn">
                    ⏹️ Stop
                  </button>
                </div>
              </div>

              <!-- Article Content with Clickable Words -->
              <div class="article-text-body" id="article-body">
                ${mat.content.split('\n\n').map(p => `<p class="article-p">${p}</p>`).join('')}
              </div>

              <!-- Key Vocabulary Pills -->
              ${keyVocab.length > 0 ? `
                <div class="key-vocab-section">
                  <h4>Key Vocabulary in This Text:</h4>
                  <div class="vocab-pills-list">
                    ${keyVocab.map(v => `<span class="vocab-pill" data-word="${v}">${v}</span>`).join('')}
                  </div>
                </div>
              ` : ''}
            </article>

            <!-- Comprehension Questions -->
            <section class="card comprehension-card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">🧠 Comprehension Questions</h3>
                  <div class="card-subtitle">Verify your understanding and inference accuracy</div>
                </div>
              </div>

              <div class="questions-list">
                ${questions.map((q, idx) => `
                  <div class="comp-question-item" data-q-idx="${idx}">
                    <div class="comp-question-title">${idx + 1}. ${q.question}</div>
                    <div class="comp-options-list">
                      ${q.options.map(opt => `
                        <button class="comp-opt-btn ${this.userAnswers[idx] === opt ? 'selected' : ''}" data-idx="${idx}" data-val="${opt}">
                          ${opt}
                        </button>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="reading-submit-wrap">
                <button class="btn btn-primary btn-lg" id="submit-reading-btn">
                  Check Comprehension Answers
                </button>
              </div>

              <!-- Results Box -->
              <div class="comp-results-box" id="comp-results-box" style="display: none;"></div>
            </section>
          ` : `
            <div class="card empty-state">
              <p>Select an article from the library to begin reading.</p>
            </div>
          `}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    // Select catalog item
    this.container.querySelectorAll('.catalog-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        if (id) this.loadMaterial(id);
      });
    });

    // Read Aloud TTS
    document.getElementById('read-aloud-btn')?.addEventListener('click', () => {
      if (this.selectedMaterial) {
        speech.speak(this.selectedMaterial.content, { rate: 0.9 });
      }
    });

    document.getElementById('stop-read-btn')?.addEventListener('click', () => {
      speech.cancel();
    });

    // Word click TTS
    this.container.querySelectorAll('.vocab-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        speech.speak(pill.dataset.word);
      });
    });

    // Select comprehension option
    this.container.querySelectorAll('.comp-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.idx;
        const val = btn.dataset.val;
        this.userAnswers[idx] = val;

        const parent = btn.closest('.comp-options-list');
        parent.querySelectorAll('.comp-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    // Submit Comprehension
    document.getElementById('submit-reading-btn')?.addEventListener('click', async () => {
      const mat = this.selectedMaterial;
      const questions = mat && mat.comprehension_questions ?
        (typeof mat.comprehension_questions === 'string' ? JSON.parse(mat.comprehension_questions) : mat.comprehension_questions) : [];

      if (Object.keys(this.userAnswers).length < questions.length) {
        state.showToast('Please answer all comprehension questions first.', 'error');
        return;
      }

      const readingSeconds = Math.round((Date.now() - this.readingStartTime) / 1000);

      try {
        const res = await api.submitReading(mat.id, this.userAnswers, readingSeconds);
        const resultsBox = document.getElementById('comp-results-box');
        resultsBox.style.display = 'block';

        resultsBox.innerHTML = `
          <div class="results-banner ${res.score >= 70 ? 'good' : 'warning'}">
            <h3>Comprehension Score: ${res.score}% (${res.correctCount} of ${res.totalCount} correct)</h3>
            <p>Words read: ${res.wordCount} • Speed: ${res.wordsPerMinute} words per minute</p>
          </div>
          <div class="detailed-answers">
            ${(res.details || []).map((d, i) => `
              <div class="answer-eval-item ${d.isCorrect ? 'correct' : 'wrong'}">
                <div><strong>Question ${i + 1}:</strong> ${d.question}</div>
                <div>Your answer: <em>${d.userAnswer}</em> ${d.isCorrect ? '✅' : `❌ (Correct: <strong>${d.correctAnswer}</strong>)`}</div>
              </div>
            `).join('')}
          </div>
        `;

        state.showToast(`Reading submitted! Score: ${res.score}%`, res.score >= 70 ? 'success' : 'info');
      } catch (err) {
        state.showToast('Submission error: ' + err.message, 'error');
      }
    });
  }
}
