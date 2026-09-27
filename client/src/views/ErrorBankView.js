/**
 * Error Bank (Hata Defteri) View
 * Systematic error eradication, root-cause diagnosis, and personalized error drills with Turkish guidance
 */
import { api } from '../api.js';
import { state } from '../state.js';

export class ErrorBankView {
  constructor() {
    this.container = null;
    this.errors = [];
    this.filterSkill = 'all';
    this.showResolved = false;
    this.skillNamesTr = {
      all: 'Tümü',
      grammar: 'Dilbilgisi',
      vocabulary: 'Kelime',
      writing: 'Yazma',
      speaking: 'Konuşma',
      sentence_formation: 'Cümle Kurma'
    };
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Kişisel hata defteriniz yükleniyor...</p>
      </div>
    `;

    try {
      const data = await api.getErrors({ resolved: this.showResolved ? 1 : 0 });
      this.errors = data.errors || [];
      this.renderContent();
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Hata defteri yüklenemedi</h3>
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
            <h1 class="errorbank-title">Kişisel Hata Defteri</h1>
            <p class="errorbank-subtitle">
              Her hata bir öğrenme verisidir. Sistem alıştırmalarda yaptığınız hataları kaydeder, Türkçeden kaynaklanan dilsel yanılgıları gösterir ve kalıcı olarak düzeltmenize rehberlik eder.
            </p>
          </div>
          <div class="errorbank-header-right">
            <button class="btn ${this.showResolved ? 'btn-primary' : 'btn-secondary'}" id="toggle-resolved-btn">
              ${this.showResolved ? 'Çözülen Hatalar' : 'Aktif Hatalar'} (${this.errors.length})
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        <div class="errorbank-filters card">
          <span class="filter-label">Alana Göre Filtrele:</span>
          <div class="skill-filter-tabs">
            ${skills.map(s => `
              <button class="skill-tab ${this.filterSkill === s ? 'active' : ''}" data-skill="${s}">
                ${this.skillNamesTr[s] || s}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Errors List -->
        <div class="errors-grid">
          ${filtered.length > 0 ? filtered.map(err => `
            <div class="card error-item-card ${err.resolved ? 'is-resolved' : ''}">
              <div class="error-item-top">
                <span class="error-skill-badge">${this.skillNamesTr[err.skill] || (err.skill || '').toUpperCase()}</span>
                <span class="error-freq-badge">Tekrar Sayısı: <strong>${err.occurrence_count || 1}x</strong></span>
              </div>

              <div class="error-contrast-box">
                <div class="error-produced">
                  <span class="contrast-label">Sizin İfadeniz:</span>
                  <div class="produced-text">❌ "${err.error_text || 'Hata'}"</div>
                </div>
                <div class="error-target">
                  <span class="contrast-label">Doğru & Doğal Biçimi:</span>
                  <div class="target-text">✅ "${err.correction || 'Hedef'}"</div>
                </div>
              </div>

              ${err.explanation ? `
                <div class="error-explanation">
                  <strong>💡 Neden Yanlış? (Kural & Açıklama):</strong> ${err.explanation}
                </div>
              ` : ''}

              <div class="error-item-actions">
                ${!err.resolved ? `
                  <button class="btn btn-success btn-sm resolve-err-btn" data-id="${err.id}">
                    ✓ Öğrendim (Çözüldü Olarak İşaretle)
                  </button>
                ` : `
                  <span class="resolved-label">🎉 Öğrenildi & Çözüldü</span>
                `}
              </div>
            </div>
          `).join('') : `
            <div class="card empty-errors-card">
              <div class="empty-icon">🛡️</div>
              <h3>Kayıtlı Aktif Hata Bulunmuyor</h3>
              <p>Hata defteriniz şu an temiz! Gramer, okuma ve yazma alıştırmalarını çözmeye devam edin; sistem yaptığınız yanlışları otomatik olarak buraya kaydedecektir.</p>
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
          state.showToast('Hata başarıyla çözüldü olarak işaretlendi! (+10 XP)', 'success');
          await this.render(this.container);
        } catch (e) {
          state.showToast('Hata güncellenemedi: ' + e.message, 'error');
        }
      });
    });
  }
}
