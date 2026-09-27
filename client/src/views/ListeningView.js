/**
 * Listening & Phonics Lab View
 * Audio dialogues, dictation exercises, and comprehension checks with accent & speed control
 */
import { api } from '../api.js';
import { state } from '../state.js';
import { speech } from '../speech.js';

export class ListeningView {
  constructor() {
    this.container = null;
    this.materials = [];
    this.selectedMaterial = null;
    this.speed = 1.0;
    this.accent = 'en-US';
    this.showTranscript = false;
    this.listenCount = 0;
    this.userAnswers = {};
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading listening tracks...</p>
      </div>
    `;

    try {
      const data = await api.getListeningMaterials();
      this.materials = Array.isArray(data) ? data : (data.materials || []);
      if (this.materials.length > 0 && !this.selectedMaterial) {
        await this.loadMaterial(this.materials[0].id);
      } else {
        this.renderContent();
      }
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Failed to load listening tracks</h3>
          <p>${err.message}</p>
        </div>
      `;
    }
  }

  async loadMaterial(id) {
    try {
      const data = await api.getListeningMaterial(id);
      this.selectedMaterial = data.material;
      this.speed = this.selectedMaterial.speech_rate === 'slow' ? 0.8 : 1.0;
      this.accent = this.selectedMaterial.accent === 'british' ? 'en-GB' : 'en-US';
      this.showTranscript = false;
      this.listenCount = 0;
      this.userAnswers = {};
      this.renderContent();
    } catch (err) {
      state.showToast('Failed to load track: ' + err.message, 'error');
    }
  }

  renderContent() {
    const mat = this.selectedMaterial;
    const questions = mat && mat.comprehension_questions ?
      (typeof mat.comprehension_questions === 'string' ? JSON.parse(mat.comprehension_questions) : mat.comprehension_questions) : [];

    this.container.innerHTML = `
      <div class="listening-layout">
        <!-- Sidebar -->
        <aside class="listening-sidebar card">
          <div class="listening-sidebar-header">
            <h3>Listening Tracks</h3>
            <span class="catalog-count">${this.materials.length} Audio Tracks</span>
          </div>

          <div class="tracks-list">
            ${this.materials.map(m => `
              <div class="track-item ${mat && mat.id === m.id ? 'active' : ''}" data-id="${m.id}">
                <div class="track-top">
                  <span class="cefr-tag ${m.cefr_level}">${m.cefr_level}</span>
                  <span class="track-accent">${m.accent === 'british' ? '🇬🇧 British' : '🇺🇸 American'}</span>
                </div>
                <div class="track-title">${m.title}</div>
              </div>
            `).join('')}
          </div>
        </aside>

        <!-- Main Player & Questions -->
        <div class="listening-main">
          ${mat ? `
            <!-- Audio Player Station -->
            <section class="card audio-player-card">
              <div class="player-top">
                <div class="track-meta">
                  <span class="cefr-tag ${mat.cefr_level}">${mat.cefr_level}</span>
                  <span class="topic-category-badge">${(mat.category || '').toUpperCase()}</span>
                </div>
                <h1 class="track-main-title">${mat.title}</h1>
                <p class="track-desc">${mat.description || ''}</p>
              </div>

              <!-- Interactive Controls -->
              <div class="player-controls-strip">
                <button class="btn btn-primary btn-lg" id="play-audio-btn">
                  ▶️ Play Audio Track
                </button>
                <button class="btn btn-secondary btn-lg" id="pause-audio-btn">
                  ⏹️ Stop
                </button>

                <div class="speed-selector">
                  <span class="control-label">Speed:</span>
                  <button class="speed-btn ${this.speed === 0.75 ? 'active' : ''}" data-speed="0.75">0.75x</button>
                  <button class="speed-btn ${this.speed === 1.0 ? 'active' : ''}" data-speed="1.0">1.0x</button>
                  <button class="speed-btn ${this.speed === 1.25 ? 'active' : ''}" data-speed="1.25">1.25x</button>
                </div>

                <div class="accent-selector">
                  <span class="control-label">Accent:</span>
                  <button class="accent-btn ${this.accent === 'en-US' ? 'active' : ''}" data-accent="en-US">🇺🇸 US</button>
                  <button class="accent-btn ${this.accent === 'en-GB' ? 'active' : ''}" data-accent="en-GB">🇬🇧 UK</button>
                </div>
              </div>

              <div class="listen-count-indicator">
                Listened: <strong id="listen-count-val">${this.listenCount}</strong> times
              </div>

              <!-- Transcript Reveal Toggle -->
              <div class="transcript-box">
                <button class="btn btn-secondary btn-sm" id="toggle-transcript-btn">
                  ${this.showTranscript ? 'Hide Transcript' : '👁️ Reveal English Transcript'}
                </button>
                <div class="transcript-content" id="transcript-content" style="display: ${this.showTranscript ? 'block' : 'none'};">
                  <p>${(mat.transcript || mat.audio_text || '').replace(/\n/g, '<br>')}</p>
                </div>
              </div>
            </section>

            <!-- Comprehension Questions -->
            <section class="card listening-questions-card">
              <div class="card-header">
                <h3 class="card-title">🎧 Comprehension & Ear Training</h3>
                <span class="card-subtitle">Answer based strictly on what you heard</span>
              </div>

              <div class="listening-questions-list">
                ${questions.map((q, idx) => `
                  <div class="l-question-item">
                    <div class="l-question-title">${idx + 1}. ${q.question}</div>
                    <div class="l-options-grid">
                      ${q.options.map(opt => `
                        <button class="l-opt-btn ${this.userAnswers[idx] === opt ? 'selected' : ''}" data-q-idx="${idx}" data-val="${opt}">
                          ${opt}
                        </button>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="listening-actions">
                <button class="btn btn-primary btn-lg" id="submit-listening-btn">
                  Check Listening Answers
                </button>
              </div>

              <div class="listening-results" id="l-results" style="display: none;"></div>
            </section>
          ` : `
            <div class="card empty-state">
              <p>Select a track to start listening practice.</p>
            </div>
          `}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    this.container.querySelectorAll('.track-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        if (id) this.loadMaterial(id);
      });
    });

    // Play Audio
    document.getElementById('play-audio-btn')?.addEventListener('click', () => {
      if (this.selectedMaterial) {
        this.listenCount++;
        const countEl = document.getElementById('listen-count-val');
        if (countEl) countEl.textContent = this.listenCount;
        speech.speak(this.selectedMaterial.audio_text, {
          rate: this.speed,
          lang: this.accent
        });
      }
    });

    document.getElementById('pause-audio-btn')?.addEventListener('click', () => {
      speech.cancel();
    });

    // Speed buttons
    this.container.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.speed = parseFloat(btn.dataset.speed);
        this.container.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Accent buttons
    this.container.querySelectorAll('.accent-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.accent = btn.dataset.accent;
        this.container.querySelectorAll('.accent-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Transcript toggle
    document.getElementById('toggle-transcript-btn')?.addEventListener('click', () => {
      this.showTranscript = !this.showTranscript;
      const transEl = document.getElementById('transcript-content');
      if (transEl) transEl.style.display = this.showTranscript ? 'block' : 'none';
      const btn = document.getElementById('toggle-transcript-btn');
      if (btn) btn.textContent = this.showTranscript ? 'Hide Transcript' : '👁️ Reveal English Transcript';
    });

    // Options select
    this.container.querySelectorAll('.l-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = btn.dataset.qIdx;
        const val = btn.dataset.val;
        this.userAnswers[qIdx] = val;
        const parent = btn.closest('.l-options-grid');
        parent.querySelectorAll('.l-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    // Submit
    document.getElementById('submit-listening-btn')?.addEventListener('click', async () => {
      const mat = this.selectedMaterial;
      const questions = mat && mat.comprehension_questions ?
        (typeof mat.comprehension_questions === 'string' ? JSON.parse(mat.comprehension_questions) : mat.comprehension_questions) : [];

      if (Object.keys(this.userAnswers).length < questions.length) {
        state.showToast('Please answer all questions first.', 'error');
        return;
      }

      try {
        const res = await api.submitListening(mat.id, this.userAnswers, this.listenCount);
        const resultsBox = document.getElementById('l-results');
        resultsBox.style.display = 'block';

        resultsBox.innerHTML = `
          <div class="results-banner ${res.score >= 70 ? 'good' : 'warning'}">
            <h3>Listening Score: ${res.score}% (${res.correctCount} of ${res.totalCount} correct)</h3>
            <p>Listened ${res.listenCount} times.</p>
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
        state.showToast(`Listening completed! Score: ${res.score}%`, 'success');
      } catch (err) {
        state.showToast('Submission error: ' + err.message, 'error');
      }
    });
  }
}
