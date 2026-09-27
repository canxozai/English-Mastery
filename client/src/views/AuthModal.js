/**
 * AuthModal Component
 * Multi-user login & registration modal with username & password
 * Guarantees all new accounts start strictly at Level 0 (A1)
 */
import { api } from '../api.js';
import { state } from '../state.js';

export class AuthModal {
  constructor(onSuccess) {
    this.onSuccess = onSuccess;
    this.mode = 'login'; // 'login' or 'register'
    this.element = null;
  }

  show() {
    this.remove();

    const overlay = document.createElement('div');
    overlay.className = 'auth-overlay';
    overlay.id = 'auth-modal-overlay';
    overlay.innerHTML = `
      <div class="auth-modal card">
        <div class="auth-header">
          <div class="auth-logo">
            <span class="logo-icon">✨</span>
            <span class="logo-text">Lingua<span class="gradient-text">Forge</span></span>
          </div>
          <h2 class="auth-title" id="auth-title">Hoş Geldiniz</h2>
          <p class="auth-subtitle" id="auth-subtitle">
            Kişiselleştirilmiş İngilizce Öğrenme Sistemi — Sıfırdan Akıcılığa
          </p>
        </div>

        <div class="auth-tabs">
          <button class="auth-tab ${this.mode === 'login' ? 'active' : ''}" id="tab-login">
            Giriş Yap
          </button>
          <button class="auth-tab ${this.mode === 'register' ? 'active' : ''}" id="tab-register">
            Kayıt Ol (0'dan Başla)
          </button>
        </div>

        <div class="auth-body">
          <div class="auth-alert" id="auth-alert" style="display: none;"></div>

          <form id="auth-form" class="auth-form" autocomplete="off">
            <div class="form-group" id="group-name" style="${this.mode === 'register' ? '' : 'display: none;'}">
              <label for="auth-display-name">Adınız Soyadınız / Takma Ad</label>
              <input type="text" id="auth-display-name" class="form-input" placeholder="Örn: Can veya Ahmet" />
            </div>

            <div class="form-group">
              <label for="auth-username">Kullanıcı Adı</label>
              <input type="text" id="auth-username" class="form-input" placeholder="Örn: can123" required />
            </div>

            <div class="form-group">
              <label for="auth-password">Şifre</label>
              <input type="password" id="auth-password" class="form-input" placeholder="Şifrenizi girin" required />
            </div>

            ${this.mode === 'register' ? `
              <div class="auth-info-note">
                <span class="note-icon">🌱</span>
                <span>Yeni hesabınız <strong>A1 (Başlangıç)</strong> seviyesinde, <strong>0 XP</strong> ile tertemiz başlatılacaktır.</span>
              </div>
            ` : ''}

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-submit-auth">
              ${this.mode === 'login' ? 'Giriş Yap →' : 'Hesap Oluştur ve 0\'dan Başla →'}
            </button>
          </form>

          <div class="auth-divider">
            <span>veya</span>
          </div>

          <button type="button" class="btn btn-secondary btn-block" id="btn-demo-login">
            🚀 Hızlı Deneme (Misafir Girişi - 0'dan Başla)
          </button>
        </div>

        <div class="auth-footer">
          <span class="auth-footer-text">
            ${this.mode === 'login' 
              ? 'Hesabınız yok mu? <a href="#" id="link-switch-register">Hemen 0\'dan Kayıt Olun</a>'
              : 'Zaten hesabınız var mı? <a href="#" id="link-switch-login">Giriş Yapın</a>'}
          </span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.element = overlay;
    this.bindEvents();

    // Auto-focus username
    setTimeout(() => {
      document.getElementById('auth-username')?.focus();
    }, 100);
  }

  remove() {
    const existing = document.getElementById('auth-modal-overlay');
    if (existing) existing.remove();
    this.element = null;
  }

  showAlert(message, isError = true) {
    const alertEl = document.getElementById('auth-alert');
    if (!alertEl) return;
    alertEl.textContent = message;
    alertEl.className = `auth-alert ${isError ? 'error' : 'success'}`;
    alertEl.style.display = 'block';
  }

  setMode(mode) {
    this.mode = mode;
    this.show();
  }

  bindEvents() {
    document.getElementById('tab-login')?.addEventListener('click', () => this.setMode('login'));
    document.getElementById('tab-register')?.addEventListener('click', () => this.setMode('register'));
    document.getElementById('link-switch-register')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.setMode('register');
    });
    document.getElementById('link-switch-login')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.setMode('login');
    });

    // Demo / Guest login
    document.getElementById('btn-demo-login')?.addEventListener('click', async () => {
      try {
        const guest = await api.loginOrRegisterGuest();
        this.remove();
        if (this.onSuccess) this.onSuccess(guest);
        state.showToast('Misafir girişi yapıldı! A1 seviyesinde sıfırdan başlandı.', 'success');
      } catch (err) {
        this.showAlert('Misafir girişi açılamadı: ' + err.message);
      }
    });

    // Form submit
    document.getElementById('auth-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('auth-username')?.value.trim();
      const password = document.getElementById('auth-password')?.value;
      const displayName = document.getElementById('auth-display-name')?.value.trim() || username;

      if (!username || !password) {
        this.showAlert('Lütfen kullanıcı adı ve şifre girin.');
        return;
      }

      if (this.mode === 'register' && password.length < 3) {
        this.showAlert('Şifre en az 3 karakter olmalıdır.');
        return;
      }

      const submitBtn = document.getElementById('btn-submit-auth');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'İşleniyor...';
      }

      try {
        let user;
        if (this.mode === 'register') {
          user = await api.register(username, password, displayName);
          state.showToast(`Hoş geldin ${user.displayName || user.username}! Hesabın A1 seviyesinde 0'dan oluşturuldu. 🎉`, 'success');
        } else {
          user = await api.login(username, password);
          state.showToast(`Tekrar hoş geldin, ${user.displayName || user.username}! 👋`, 'success');
        }

        this.remove();
        if (this.onSuccess) this.onSuccess(user);
      } catch (err) {
        this.showAlert(err.message || 'Giriş yapılırken bir hata oluştu.');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = this.mode === 'login' ? 'Giriş Yap →' : 'Hesap Oluştur ve 0\'dan Başla →';
        }
      }
    });
  }
}
