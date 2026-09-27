/**
 * Reading Comprehension & Extensive Reading Lab
 * Interactive reader with vocabulary definitions and comprehension checks
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
        <p>Okuma metinleri yükleniyor...</p>
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
          <h3>Metinler yüklenemedi</h3>
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
      state.showToast('Metin yüklenemedi: ' + err.message, 'error');
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
            <h3>Okuma Kütüphanesi</h3>
            <span class="catalog-count">${this.materials.length} Metin</span>
          </div>

          <div class="reading-catalog-list">
            ${this.materials.map(m => `
              <div class="catalog-item ${mat && mat.id === m.id ? 'active' : ''}" data-id="${m.id}">
                <div class="catalog-item-top">
                  <span class="cefr-tag ${m.cefr_level || 'A1'}">${m.cefr_level || 'A1'}</span>
                  <span class="catalog-cat">${(m.category || '').toUpperCase()}</span>
                </div>
                <div class="catalog-title">${m.title}</div>
                <div class="catalog-meta">
                  <span>⏱️ ~${m.estimated_reading_time || 2} dk</span>
                  <span>📝 ${m.word_count || 120} kelime</span>
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
                  <span class="cefr-tag ${mat.cefr_level || 'A1'}">${mat.cefr_level || 'A1'}</span>
                  <span class="topic-category-badge">${mat.category}</span>
                  <span class="article-stats-pill">${mat.word_count} kelime • ~${mat.estimated_reading_time} dk okuma</span>
                </div>
                <h1 class="article-title">${mat.title}</h1>
                <div class="article-controls">
                  <button class="btn btn-secondary btn-sm" id="read-aloud-btn">
                    🔊 Sesli Oku (TTS)
                  </button>
                  <button class="btn btn-secondary btn-sm" id="stop-read-btn">
                    ⏹️ Durdur
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
                  <h4>Metindeki Temel Kelimeler (Dinlemek için tıklayın):</h4>
                  <div class="vocab-pills-list">
                    ${keyVocab.map(v => `<span class="vocab-pill" data-word="${v}">🔊 ${v}</span>`).join('')}
                  </div>
                </div>
              ` : ''}
            </article>

            <!-- Comprehension Questions -->
            <section class="card comprehension-card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">🧠 Okuduğunu Anlama Soruları</h3>
                  <div class="card-subtitle">Metni ne kadar iyi anladığınızı test edin</div>
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
                  Cevapları Kontrol Et →
                </button>
              </div>

              <!-- Results Box -->
              <div class="comp-results-box" id="comp-results-box" style="display: none;"></div>
            </section>
          ` : `
            <div class="card empty-state">
              <p>Okumaya başlamak için sol menüden bir metin seçin.</p>
            </div>
          `}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    this.container.querySelectorAll('.catalog-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        if (id) this.loadMaterial(id);
      });
    });

    document.getElementById('read-aloud-btn')?.addEventListener('click', () => {
      if (this.selectedMaterial) {
        speech.speak(this.selectedMaterial.content, { rate: 0.9 });
      }
    });

    document.getElementById('stop-read-btn')?.addEventListener('click', () => {
      speech.stop();
    });

    document.querySelectorAll('.vocab-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const w = pill.dataset.word;
        if (w) speech.speak(w);
      });
    });

    document.querySelectorAll('.comp-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.idx;
        const val = btn.dataset.val;
        this.userAnswers[idx] = val;
        btn.parentElement.querySelectorAll('.comp-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    document.getElementById('submit-reading-btn')?.addEventListener('click', () => {
      this.submitComprehension();
    });
  }

  async submitComprehension() {
    const elapsedSeconds = Math.round((Date.now() - this.readingStartTime) / 1000);
    const submitBtn = document.getElementById('submit-reading-btn');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await api.submitReading(this.selectedMaterial.id, this.userAnswers, elapsedSeconds);
      const resBox = document.getElementById('comp-results-box');
      if (resBox) {
        resBox.innerHTML = `
          <div class="results-header">
            <h4>Anlama Skoru: %${res.score}</h4>
            <span>${res.correctCount} / ${res.totalCount} Doğru • Okuma Hızı: ${res.wordsPerMinute} kelime/dk</span>
          </div>
          <div class="details-list">
            ${res.details.map(d => `
              <div class="result-detail-item ${d.isCorrect ? 'correct' : 'incorrect'}">
                <span class="detail-icon">${d.isCorrect ? '✅' : '❌'}</span>
                <div>
                  <div class="detail-q">${d.question}</div>
                  <div class="detail-ans">Cevabınız: <strong>${d.userAnswer || '(Boş)'}</strong> | Doğru: <strong>${d.correctAnswer}</strong></div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
        resBox.style.display = 'block';
      }
      state.showToast(`Okuma tamamlandı! Skorunuz: %${res.score}`, res.score >= 70 ? 'success' : 'info');
    } catch (err) {
      state.showToast('Sonuçlar kaydedilemedi: ' + err.message, 'error');
      if (submitBtn) submitBtn.disabled = false;
    }
  }
}
