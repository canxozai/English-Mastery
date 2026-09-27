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
        <p>Dinleme parçaları yükleniyor...</p>
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
          <h3>Dinleme parçaları yüklenemedi</h3>
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
      state.showToast('Parça yüklenemedi: ' + err.message, 'error');
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
            <h3>Dinleme Parçaları</h3>
            <span class="catalog-count">${this.materials.length} Parça</span>
          </div>

          <div class="tracks-list">
            ${this.materials.map(m => `
              <div class="track-item ${mat && mat.id === m.id ? 'active' : ''}" data-id="${m.id}">
                <div class="track-top">
                  <span class="cefr-tag ${m.cefr_level || 'A1'}">${m.cefr_level || 'A1'}</span>
                  <span class="track-accent">${m.accent === 'british' ? '🇬🇧 İngiliz' : '🇺🇸 Amerikan'}</span>
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
                  <span class="cefr-tag ${mat.cefr_level || 'A1'}">${mat.cefr_level || 'A1'}</span>
                  <span class="topic-category-badge">${(mat.category || '').toUpperCase()}</span>
                </div>
                <h1 class="track-main-title">${mat.title}</h1>
                <p class="track-desc">${mat.description || ''}</p>
              </div>

              <!-- Interactive Controls -->
              <div class="player-controls-strip">
                <button class="btn btn-primary btn-lg" id="play-audio-btn">
                  ▶️ Parçayı Dinle
                </button>
                <button class="btn btn-secondary btn-lg" id="pause-audio-btn">
                  ⏹️ Durdur
                </button>

                <div class="speed-selector">
                  <span class="control-label">Hız:</span>
                  <button class="speed-btn ${this.speed === 0.75 ? 'active' : ''}" data-speed="0.75">0.75x (Yavaş)</button>
                  <button class="speed-btn ${this.speed === 1.0 ? 'active' : ''}" data-speed="1.0">1.0x (Normal)</button>
                </div>

                <div class="accent-selector">
                  <span class="control-label">Aksan:</span>
                  <button class="accent-btn ${this.accent === 'en-US' ? 'active' : ''}" data-accent="en-US">🇺🇸 Amerikan</button>
                  <button class="accent-btn ${this.accent === 'en-GB' ? 'active' : ''}" data-accent="en-GB">🇬🇧 İngiliz</button>
                </div>
              </div>

              <div class="listen-count-indicator">
                Dinleme Sayısı: <strong id="listen-count-val">${this.listenCount}</strong> kez
              </div>

              <!-- Transcript Reveal Toggle -->
              <div class="transcript-box">
                <button class="btn btn-secondary btn-sm" id="toggle-transcript-btn">
                  ${this.showTranscript ? 'Transkripti Gizle' : '👁️ İngilizce Transkripti Göster'}
                </button>
                <div class="transcript-content" id="transcript-content" style="display: ${this.showTranscript ? 'block' : 'none'};">
                  <p>${(mat.transcript || mat.audio_text || '').replace(/\n/g, '<br>')}</p>
                </div>
              </div>
            </section>

            <!-- Comprehension Questions -->
            <section class="card listening-questions-card">
              <div class="card-header">
                <h3 class="card-title">🎧 Dinlediğini Anlama Soruları</h3>
                <span class="card-subtitle">Yalnızca duyduklarınıza dayanarak soruları cevaplayın</span>
              </div>

              <div class="listening-questions-list">
                ${questions.map((q, idx) => `
                  <div class="l-question-item">
                    <div class="l-question-title">${idx + 1}. ${q.question}</div>
                    <div class="l-options-grid">
                      ${q.options.map((opt, i) => `
                        <button class="l-opt-btn ${this.userAnswers[idx] === opt ? 'selected' : ''}" data-q-idx="${idx}" data-val="${opt}">
                          <span class="opt-prefix">${String.fromCharCode(65 + i)}</span>
                          <span class="opt-text">${opt}</span>
                        </button>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="listening-actions">
                <button class="btn btn-primary btn-lg" id="submit-listening-btn">
                  Cevapları Kontrol Et →
                </button>
              </div>

              <div class="listening-results" id="l-results" style="display: none;"></div>
            </section>
          ` : `
            <div class="card empty-state">
              <p>Dinleme alıştırmasına başlamak için sol menüden bir parça seçin.</p>
            </div>
          `}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    this.container.querySelectorAll('.track-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        if (id) this.loadMaterial(id);
      });
    });

    document.getElementById('play-audio-btn')?.addEventListener('click', () => {
      if (this.selectedMaterial) {
        const text = this.selectedMaterial.audio_text || this.selectedMaterial.transcript || '';
        this.listenCount++;
        const countEl = document.getElementById('listen-count-val');
        if (countEl) countEl.textContent = this.listenCount;

        speech.speak(text, {
          rate: this.speed,
          lang: this.accent
        });
      }
    });

    document.getElementById('pause-audio-btn')?.addEventListener('click', () => {
      speech.stop();
    });

    document.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.speed = parseFloat(btn.dataset.speed);
        document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    document.querySelectorAll('.accent-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.accent = btn.dataset.accent;
        document.querySelectorAll('.accent-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    document.getElementById('toggle-transcript-btn')?.addEventListener('click', () => {
      this.showTranscript = !this.showTranscript;
      const transEl = document.getElementById('transcript-content');
      const toggleBtn = document.getElementById('toggle-transcript-btn');
      if (transEl) transEl.style.display = this.showTranscript ? 'block' : 'none';
      if (toggleBtn) toggleBtn.textContent = this.showTranscript ? 'Transkripti Gizle' : '👁️ İngilizce Transkripti Göster';
    });

    document.querySelectorAll('.l-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = btn.dataset.qIdx;
        const val = btn.dataset.val;
        this.userAnswers[qIdx] = val;
        btn.parentElement.querySelectorAll('.l-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    document.getElementById('submit-listening-btn')?.addEventListener('click', () => {
      this.submitListeningAnswers();
    });
  }

  async submitListeningAnswers() {
    const submitBtn = document.getElementById('submit-listening-btn');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await api.submitListening(this.selectedMaterial.id, this.userAnswers, this.listenCount);
      const resBox = document.getElementById('l-results');
      if (resBox) {
        resBox.innerHTML = `
          <div class="results-header">
            <h4>Dinleme Skoru: %${res.score}</h4>
            <span>${res.correctCount} / ${res.totalCount} Doğru • ${res.listenCount} Dinleme</span>
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
      state.showToast(`Dinleme testi bitti! Skorunuz: %${res.score}`, res.score >= 70 ? 'success' : 'info');
    } catch (err) {
      state.showToast('Cevaplar kaydedilemedi: ' + err.message, 'error');
      if (submitBtn) submitBtn.disabled = false;
    }
  }
}
