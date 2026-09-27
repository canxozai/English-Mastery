/**
 * Error Bank (Hata Defteri) View
 * Systematic error eradication, root-cause diagnosis, and personalized error drills
 */
import { api } from '../api.js';
import { state } from '../state.js';

export class ErrorBankView {
  constructor() {
    this.container = null;
    this.errors = [];
    this.filterSkill = 'all';
    this.showResolved = false;
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading personal error registry...</p>
      </div>
    `;

    try {
      const data = await api.getErrors({ resolved: this.showResolved ? 1 : 0 });
      this.errors = data.errors || [];
      this.renderContent();
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Failed to load error bank</h3>
          <p>${err.message}</p>
        </div>
      `;
    }
  }

  renderContent() {
    const skills = ['all', 'grammar', 'vocabulary', 'writing', 'speaking', 'sentence_formation'];

    const filtered = this.errors.filter(err => {
      if (this.filterSkill === 'all') return true;
      return err.skill === this.filterSkill;
    });

    this.container.innerHTML = `
      <div class="errorbank-layout">
        <!-- Header -->
        <div class="card errorbank-header">
          <div class="errorbank-header-left">
            <h1 class="errorbank-title">Personal Error Bank (Hata Defteri)</h1>
            <p class="errorbank-subtitle">
              Every mistake is diagnostic data. LinguaForge catalogs your habitual errors, exposes the underlying linguistic interference, and trains you until the pattern is eradicated.
            </p>
          </div>
          <div class="errorbank-header-right">
            <button class="btn ${this.showResolved ? 'btn-primary' : 'btn-secondary'}" id="toggle-resolved-btn">
              ${this.showResolved ? 'Showing Resolved' : 'Showing Active'} (${this.errors.length})
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        <div class="errorbank-filters card">
          <span class="filter-label">Filter by Domain:</span>
          <div class="skill-filter-tabs">
            ${skills.map(s => `
              <button class="skill-tab ${this.filterSkill === s ? 'active' : ''}" data-skill="${s}">
                ${s.replace('_', ' ').toUpperCase()}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Errors List -->
        <div class="errors-grid">
          ${filtered.length > 0 ? filtered.map(err => `
            <div class="card error-item-card ${err.resolved ? 'is-resolved' : ''}">
              <div class="error-item-top">
                <span class="error-skill-badge">${(err.skill || '').toUpperCase()}</span>
                <span class="error-freq-badge">Occurred: <strong>${err.occurrence_count || 1}x</strong></span>
              </div>

              <div class="error-contrast-box">
                <div class="error-produced">
                  <span class="contrast-label">Your Production:</span>
                  <div class="produced-text">❌ "${err.error_text || 'Error'}"</div>
                </div>
                <div class="error-target">
                  <span class="contrast-label">Natural Target:</span>
                  <div class="target-text">✅ "${err.correction || 'Target'}"</div>
                </div>
              </div>

              ${err.explanation ? `
                <div class="error-explanation">
                  <strong>Why this happens:</strong> ${err.explanation}
                </div>
              ` : ''}

              <div class="error-item-actions">
                ${!err.resolved ? `
                  <button class="btn btn-success btn-sm resolve-err-btn" data-id="${err.id}">
                    ✓ Mark as Mastered
                  </button>
                ` : `
                  <span class="resolved-label">🎉 Mastered & Cleared</span>
                `}
              </div>
            </div>
          `).join('') : `
            <div class="card empty-errors-card">
              <div class="empty-icon">🛡️</div>
              <h3>No Unresolved Errors</h3>
              <p>Your error bank is clean in this category. Continue practicing grammar exercises and writing prompts; any persistent mistakes will automatically be caught and logged here.</p>
            </div>
          `}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    this.container.querySelectorAll('.skill-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.filterSkill = tab.dataset.skill;
        this.renderContent();
      });
    });

    document.getElementById('toggle-resolved-btn')?.addEventListener('click', async () => {
      this.showResolved = !this.showResolved;
      await this.render(this.container);
    });

    this.container.querySelectorAll('.resolve-err-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id;
        try {
          await api.resolveError(id);
          state.showToast('Error pattern marked as resolved!', 'success');
          await this.render(this.container);
        } catch (e) {
          state.showToast('Failed to resolve error: ' + e.message, 'error');
        }
      });
    });
  }
}
