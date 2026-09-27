/**
 * LinguaForge Main Application Entrypoint
 * Router, View Orchestrator, Multi-User Auth, and Lifecycle Manager
 */

import { api } from './api.js';
import { state } from './state.js';
import { AuthModal } from './views/AuthModal.js';
import { DashboardView } from './views/DashboardView.js';
import { AssessmentView } from './views/AssessmentView.js';
import { GrammarView } from './views/GrammarView.js';
import { VocabularyView } from './views/VocabularyView.js';
import { ReadingView } from './views/ReadingView.js';
import { ListeningView } from './views/ListeningView.js';
import { WritingView } from './views/WritingView.js';
import { SpeakingView } from './views/SpeakingView.js';
import { PronunciationView } from './views/PronunciationView.js';
import { ErrorBankView } from './views/ErrorBankView.js';
import { ProgressView } from './views/ProgressView.js';
import { wordInspector } from './word-inspector.js';

class App {
  constructor() {
    this.viewport = document.getElementById('viewport');
    this.pageTitle = document.getElementById('page-title');
    this.authModal = null;

    this.views = {
      dashboard: new DashboardView(),
      assessment: new AssessmentView(),
      grammar: new GrammarView(),
      vocabulary: new VocabularyView(),
      reading: new ReadingView(),
      listening: new ListeningView(),
      writing: new WritingView(),
      speaking: new SpeakingView(),
      pronunciation: new PronunciationView(),
      errors: new ErrorBankView(),
      progress: new ProgressView()
    };

    this.titles = {
      dashboard: 'Genel Bakış & Günlük Rutin',
      assessment: '10 Becerili Seviye Belirleme Sınavı',
      grammar: 'Gramer Akademisi & Kurallar',
      vocabulary: 'Akıllı Kelime Kartları (SRS)',
      reading: 'Okuma & Anlama Laboratuvarı',
      listening: 'Dinleme & Telaffuz Laboratuvarı',
      writing: 'Yazma Stüdyosu & Anlık Değerlendirme',
      speaking: 'Konuşma & Diyalog Simülatörü',
      pronunciation: 'Telaffuz & Aksan Eğitimi',
      errors: 'Kişisel Hata Defteri',
      progress: 'Gelişim Analizi & Beceriler'
    };
  }

  async init() {
    this.bindNavigation();
    this.bindSessionTimer();
    this.bindSidebarToggle();
    this.bindLogout();

    // Enable global double-click & selection instant translator
    wordInspector.initGlobalListener();

    // Listen to state view changes
    state.on('view:change', (viewName) => {
      this.navigateTo(viewName);
    });

    // Check user session or show AuthModal
    await this.ensureUserSession();
  }

  async ensureUserSession() {
    const user = api.getCurrentUser();
    if (!user) {
      this.showLoginModal();
    } else {
      state.setUser(user);
      this.updateUserDisplay(user);
      this.navigateTo('dashboard');
    }
  }

  showLoginModal() {
    this.authModal = new AuthModal((user) => {
      state.setUser(user);
      this.updateUserDisplay(user);
      this.navigateTo('dashboard');
    });
    this.authModal.show();
  }

  bindLogout() {
    document.getElementById('btn-logout')?.addEventListener('click', () => {
      api.logout();
      state.setUser(null);
      this.updateUserDisplay(null);
      state.showToast('Oturum kapatıldı. Yeni bir kullanıcı ile giriş yapabilirsiniz.', 'info');
      this.showLoginModal();
    });
  }

  updateUserDisplay(user) {
    const nameEl = document.getElementById('header-username');
    const avatarEl = document.getElementById('header-user-avatar');
    const statusEl = document.getElementById('header-user-status');
    const cefrBadge = document.getElementById('sidebar-cefr-badge');

    if (!user) {
      if (nameEl) nameEl.textContent = 'Giriş Yapılmadı';
      if (avatarEl) avatarEl.textContent = 'A1';
      if (statusEl) statusEl.textContent = "0'dan Başlangıç Yolu";
      if (cefrBadge) cefrBadge.textContent = 'A1';
      return;
    }

    if (nameEl) nameEl.textContent = user.displayName || user.username;
    if (avatarEl) {
      const initials = (user.displayName || user.username || 'A1').slice(0, 2).toUpperCase();
      avatarEl.textContent = initials;
    }
    if (statusEl) statusEl.textContent = "0'dan Başlangıç (A1)";
    if (cefrBadge) cefrBadge.textContent = user.cefr_level || 'A1';
  }

  bindNavigation() {
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        if (view) this.navigateTo(view);
      });
    });

    // Quick practice header button
    document.getElementById('btn-quick-practice')?.addEventListener('click', () => {
      this.navigateTo('dashboard');
    });
  }

  navigateTo(viewName) {
    if (!api.getCurrentUser()) {
      this.showLoginModal();
      return;
    }

    if (!this.views[viewName]) return;

    // Update active nav button
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    // Update topbar title
    if (this.pageTitle) {
      this.pageTitle.textContent = this.titles[viewName] || 'LinguaForge';
    }

    // Scroll viewport to top
    if (this.viewport) this.viewport.scrollTop = 0;

    // Render view
    this.views[viewName].render(this.viewport);

    // On mobile, close sidebar after clicking nav
    const sidebar = document.getElementById('sidebar');
    if (sidebar && window.innerWidth <= 768) {
      sidebar.classList.remove('open');
    }
  }

  bindSessionTimer() {
    state.startSessionTimer();
    const timerEl = document.getElementById('session-timer');
    state.on('timer:tick', (seconds) => {
      if (timerEl) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
    });
  }

  bindSidebarToggle() {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }
  }
}

// Bootstrap
window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
