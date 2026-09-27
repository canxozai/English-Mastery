/**
 * Writing Studio View
 * Multi-dimensional writing assessment: lexical variety, grammar check, and stylistic feedback
 */
import { api } from '../api.js';
import { state } from '../state.js';

export class WritingView {
  constructor() {
    this.container = null;
    this.prompts = [];
    this.selectedPrompt = null;
    this.writingStartTime = Date.now();
    this.evaluation = null;
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Yazma stüdyosu konuları yükleniyor...</p>
      </div>
    `;

    try {
      const data = await api.getWritingPrompts();
      this.prompts = Array.isArray(data) ? data : (data.prompts || []);
      if (this.prompts.length > 0 && !this.selectedPrompt) {
        this.selectedPrompt = this.prompts[0];
      }
      this.renderContent();
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Yazma konuları yüklenemedi</h3>
          <p>${err.message}</p>
        </div>
      `;
    }
  }

  renderContent() {
    const p = this.selectedPrompt;

    this.container.innerHTML = `
      <div class="writing-layout">
        <!-- Sidebar: Prompts List -->
        <aside class="writing-sidebar card">
          <div class="writing-sidebar-header">
            <h3>Yazma Konuları</h3>
            <span class="catalog-count">${this.prompts.length} Görev</span>
          </div>

          <div class="prompts-list">
            ${this.prompts.map(pr => {
              const shortText = pr.prompt.length > 70 ? pr.prompt.slice(0, 67) + '...' : pr.prompt;
              return `
                <div class="prompt-item ${p && p.id === pr.id ? 'active' : ''}" data-id="${pr.id}">
                  <div class="prompt-top">
                    <span class="cefr-tag ${pr.cefr_level || 'A1'}">${pr.cefr_level || 'A1'}</span>
                    <span class="prompt-type">${(pr.type || '').toUpperCase()}</span>
                  </div>
                  <div class="prompt-short">${shortText}</div>
                </div>
              `;
            }).join('')}
          </div>
        </aside>

        <!-- Main Studio Area -->
        <div class="writing-main">
          ${p ? `
            <div class="card prompt-detail-card">
              <div class="prompt-detail-header">
                <div class="prompt-meta-strip">
                  <span class="cefr-tag ${p.cefr_level || 'A1'}">${p.cefr_level || 'A1'}</span>
                  <span class="topic-category-badge">${p.type}</span>
                  <span class="word-limit-badge">Hedef: ${p.word_limit_min || 30} - ${p.word_limit_max || 100} kelime</span>
                </div>
                <h1 class="prompt-title">${p.prompt}</h1>
                <p class="prompt-instructions">${p.instructions || ''}</p>
              </div>

              <!-- Text Editor Area -->
              <div class="editor-wrapper">
                <textarea class="writing-textarea" id="writing-input" placeholder="İngilizce metninizi buraya yazın. Basit ve anlaşılır cümlelerle düşüncelerinizi aktarmaya çalışın..."></textarea>
                
                <div class="editor-stats-bar">
                  <div class="editor-stat-item">
                    <span>Kelime Sayısı:</span>
                    <strong id="word-count-val">0</strong>
                    <span class="stat-target">/ ${p.word_limit_min || 30}-${p.word_limit_max || 100}</span>
                  </div>
                  <div class="editor-stat-item">
                    <span>Cümle:</span>
                    <strong id="sentence-count-val">0</strong>
                  </div>
                  <div class="editor-stat-item">
                    <span>Ortalama Uzunluk:</span>
                    <strong id="avg-len-val">0 kelime</strong>
                  </div>
                </div>
              </div>

              <div class="writing-actions-strip">
                <button class="btn btn-primary btn-lg" id="submit-writing-btn">
                  Yazımı Analiz Et ve Puanla →
                </button>
              </div>
            </div>

            <!-- Deep Linguistic Evaluation Card (Appears after submission) -->
            <div class="card writing-eval-card" id="writing-eval-card" style="display: none;"></div>
          ` : `
            <div class="card empty-state">
              <p>Yazmaya başlamak için sol menüden bir konu seçin.</p>
            </div>
          `}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    this.container.querySelectorAll('.prompt-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.dataset.id, 10);
        this.selectedPrompt = this.prompts.find(pr => pr.id === id);
        this.writingStartTime = Date.now();
        this.renderContent();
      });
    });

    const textarea = document.getElementById('writing-input');
    const wordCountEl = document.getElementById('word-count-val');
    const sentenceCountEl = document.getElementById('sentence-count-val');
    const avgLenEl = document.getElementById('avg-len-val');

    textarea?.addEventListener('input', () => {
      const text = textarea.value.trim();
      const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
      const sentences = (text.match(/[^.!?]+[.!?]+/g) || []).length || (words > 0 ? 1 : 0);
      const avg = sentences > 0 ? (words / sentences).toFixed(1) : 0;

      if (wordCountEl) wordCountEl.textContent = words;
      if (sentenceCountEl) sentenceCountEl.textContent = sentences;
      if (avgLenEl) avgLenEl.textContent = `${avg} kelime`;
    });

    document.getElementById('submit-writing-btn')?.addEventListener('click', () => {
      this.submitWritingText();
    });
  }

  async submitWritingText() {
    const text = document.getElementById('writing-input')?.value.trim();
    if (!text || text.split(/\s+/).length < 5) {
      state.showToast('Lütfen değerlendirme için en az 5 kelimelik bir metin yazın.', 'error');
      return;
    }

    const btn = document.getElementById('submit-writing-btn');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'İnceleniyor...';
    }

    try {
      const res = await api.submitWriting(this.selectedPrompt.id, text);
      const evalCard = document.getElementById('writing-eval-card');
      if (evalCard) {
        evalCard.innerHTML = `
          <div class="eval-header">
            <div>
              <h3>Yazma Analiz Sonucu</h3>
              <span class="cefr-tag ${res.cefrLevel}">${res.cefrLevel} Seviyesi</span>
            </div>
            <div class="eval-overall-score">${res.overallScore} <span>/ 100</span></div>
          </div>

          <div class="eval-metrics-grid">
            <div class="eval-metric-box">
              <span class="metric-title">Dilbilgisi Doğruluğu</span>
              <strong class="metric-val">%${res.grammarScore}</strong>
            </div>
            <div class="eval-metric-box">
              <span class="metric-title">Kelime Çeşitliliği</span>
              <strong class="metric-val">%${res.vocabularyScore}</strong>
            </div>
            <div class="eval-metric-box">
              <span class="metric-title">Cümle Yapısı</span>
              <strong class="metric-val">%${res.structureScore}</strong>
            </div>
          </div>

          <div class="eval-feedback-section">
            <h4>Öğretmen Tavsiyeleri & İpuçları:</h4>
            <ul>
              ${res.feedback.map(fb => `<li>${fb}</li>`).join('')}
            </ul>
          </div>
        `;
        evalCard.style.display = 'block';
        evalCard.scrollIntoView({ behavior: 'smooth' });
      }
      state.showToast('Yazınız başarıyla değerlendirildi! (+30 XP)', 'success');
    } catch (err) {
      state.showToast('Değerlendirme yapılamadı: ' + err.message, 'error');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Yazımı Analiz Et ve Puanla →';
      }
    }
  }
}
