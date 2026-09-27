/**
 * LinguaForge Main Application Entrypoint
 * Router, View Orchestrator, and Lifecycle Manager
 */

import { api } from './api.js';
import { state } from './state.js';
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

class App {
  constructor() {
    this.viewport = document.getElementById('viewport');
    this.pageTitle = document.getElementById('page-title');
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
      dashboard: 'Personal Dashboard & Routine',
      assessment: '10-Skill Diagnostic Assessment',
      grammar: 'Grammar Academy & Rules',
      vocabulary: 'Spaced Repetition (SRS) Studio',
      reading: 'Reading Comprehension Lab',
      listening: 'Listening & Phonics Lab',
      writing: 'Writing Studio & Live Evaluator',
      speaking: 'Speaking & Conversational Simulator',
      pronunciation: 'Pronunciation & Accent Training',
      errors: 'Personal Error Bank (Hata Defteri)',
      progress: 'Mastery Trajectory & Analytics'
    };
  }

  async init() {
    this.bindNavigation();
    this.bindSessionTimer();
    this.bindSidebarToggle();

    // Check session or prompt onboarding
    await this.ensureUserSession();

    // Listen to state view changes
    state.on('view:change', (viewName) => {
      this.navigateTo(viewName);
    });

    // Initial navigation
    this.navigateTo('dashboard');
  }

  async ensureUserSession() {
    if (!api.userId) {
      // Auto-register or prompt
      try {
        const defaultUser = await api.register('learner', 'English Learner');
        state.setUser(defaultUser);
        this.updateUserDisplay(defaultUser);
      } catch (err) {
        try {
          const loggedIn = await api.login('learner');
          state.setUser(loggedIn);
          this.updateUserDisplay(loggedIn);
        } catch (e) {
          console.error('Session init error:', e);
        }
      }
    } else {
      try {
        const profile = await api.getProfile();
        this.updateUserDisplay(profile.user);
      } catch (e) {
        // If user not found, register new
        try {
          const fresh = await api.register('learner_' + Math.floor(Math.random() * 10000), 'English Learner');
          state.setUser(fresh);
          this.updateUserDisplay(fresh);
        } catch (regErr) {
          console.error('Registration fallback failed:', regErr);
        }
      }
    }
  }

  updateUserDisplay(user) {
    if (!user) return;
    const nameEl = document.getElementById('header-username');
    if (nameEl) nameEl.textContent = user.displayName || user.username || 'Learner';
    const avatarEl = document.getElementById('header-user-avatar');
    if (avatarEl) {
      const initials = (user.displayName || 'EN').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
      avatarEl.textContent = initials;
    }
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
    toggleBtn?.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
    });
  }
}

// Bootstrap
window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
