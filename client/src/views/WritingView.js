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
        <p>Loading writing studio prompts...</p>
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
          <h3>Failed to load writing prompts</h3>
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
            <h3>Writing Prompts</h3>
            <span class="catalog-count">${this.prompts.length} Prompts</span>
          </div>

          <div class="prompts-list">
            ${this.prompts.map(pr => `
              <div class="prompt-item ${p && p.id === pr.id ? 'active' : ''}" data-id="${pr.id}">
                <div class="prompt-top">
                  <span class="cefr-tag ${pr.cefr_level}">${pr.cefr_level}</span>
                  <span class="prompt-type">${(pr.type || '').toUpperCase()}</span>
                </div>
                <div class="prompt-short">${pr.prompt.slice(0, 70)}...</div>
              </div>
            `).join('')}
          </div>
        </aside>

        <!-- Main Studio Area -->
        <div class="writing-main">
          ${p ? `
            <div class="card prompt-detail-card">
              <div class="prompt-detail-header">
                <div class="prompt-meta-strip">
                  <span class="cefr-tag ${p.cefr_level}">${p.cefr_level}</span>
                  <span class="topic-category-badge">${p.type}</span>
                  <span class="word-limit-badge">Target: ${p.word_limit_min} - ${p.word_limit_max} words</span>
                </div>
                <h1 class="prompt-title">${p.prompt}</h1>
                <p class="prompt-instructions">${p.instructions || ''}</p>
              </div>

              <!-- Text Editor Area -->
              <div class="editor-wrapper">
                <textarea class="writing-textarea" id="writing-input" placeholder="Draft your response here in English. Focus on natural sentence flow, connectors, and clear structure..."></textarea>
                
                <div class="editor-stats-bar">
                  <div class="editor-stat-item">
                    <span>Words:</span>
                    <strong id="word-count-val">0</strong>
                    <span class="stat-target">/ ${p.word_limit_min}-${p.word_limit_max}</span>
                  </div>
                  <div class="editor-stat-item">
                    <span>Sentences:</span>
                    <strong id="sentence-count-val">0</strong>
                  </div>
                  <div class="editor-stat-item">
                    <span>Avg Sentence Length:</span>
                    <strong id="avg-len-val">0 words</strong>
                  </div>
                </div>
              </div>

              <div class="writing-actions-strip">
                <button class="btn btn-primary btn-lg" id="submit-writing-btn">
                  Analyze & Evaluate Writing →
                </button>
              </div>
            </div>

            <!-- Deep Linguistic Evaluation Card (Appears after submission) -->
            <div class="card writing-eval-card" id="writing-eval-card" style="display: none;">
              <!-- Dynamic analysis results injected here -->
            </div>
          ` : `
            <div class="card empty-state">
              <p>Select a writing prompt to begin drafting.</p>
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
      const words = text ? text.split(/\s+/).length : 0;
      const sentences = text ? (text.match(/[^.!?]+[.!?]+/g) || []).length || 1 : 0;
      const avgLen = words > 0 && sentences > 0 ? (words / sentences).toFixed(1) : 0;

      if (wordCountEl) wordCountEl.textContent = words;
      if (sentenceCountEl) sentenceCountEl.textContent = sentences;
      if (avgLenEl) avgLenEl.textContent = `${avgLen} words`;
    });

    document.getElementById('submit-writing-btn')?.addEventListener('click', async () => {
      const text = textarea ? textarea.value.trim() : '';
      if (!text || text.split(/\s+/).length < 10) {
        state.showToast('Please write at least 10 words before submitting.', 'error');
        return;
      }

      const p = this.selectedPrompt;
      const timeSpent = Math.round((Date.now() - this.writingStartTime) / 1000);
      const submitBtn = document.getElementById('submit-writing-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Analyzing linguistic features...';

      try {
        const res = await api.submitWriting(p.id, text, timeSpent);
        const evalCard = document.getElementById('writing-eval-card');
        evalCard.style.display = 'block';

        evalCard.innerHTML = `
          <div class="eval-header">
            <div>
              <h2 class="card-title">🔬 Automated Linguistic Assessment</h2>
              <div class="card-subtitle">CEFR Estimated Band: <strong class="cefr-tag ${res.cefrLevel}">${res.cefrLevel}</strong> • Score: <strong>${res.overallScore}/100</strong></div>
            </div>
          </div>

          <div class="eval-metrics-grid">
            <div class="metric-box">
              <span class="metric-label">Grammar Accuracy</span>
              <span class="metric-val">${res.grammarScore || 80}%</span>
            </div>
            <div class="metric-box">
              <span class="metric-label">Lexical Diversity</span>
              <span class="metric-val">${res.vocabularyScore || 75}%</span>
            </div>
            <div class="metric-box">
              <span class="metric-label">Structure & Length</span>
              <span class="metric-val">${res.structureScore || 85}%</span>
            </div>
          </div>

          <!-- Constructive Feedback -->
          <div class="eval-feedback-section">
            <h4>💡 Formative Pedagogical Feedback</h4>
            <div class="feedback-points">
              ${(res.feedback || []).map(f => `<div class="feedback-bullet">• ${f}</div>`).join('')}
            </div>
          </div>

          ${res.errors && res.errors.length > 0 ? `
            <div class="eval-errors-section">
              <h4>⚠️ Detected Issues & Corrections</h4>
              <div class="writing-errors-list">
                ${res.errors.map(err => `
                  <div class="w-error-item">
                    <span class="w-error-type">${err.type}</span>
                    <span class="w-error-desc">${err.description}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        `;

        state.showToast(`Writing evaluated! Overall Score: ${res.overallScore}/100`, 'success');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Re-Analyze Writing →';
      } catch (err) {
        state.showToast('Evaluation failed: ' + err.message, 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Analyze & Evaluate Writing →';
      }
    });
  }
}
