/**
 * Dashboard & Daily Routine View
 * Turkish-first interface for beginner learners starting from Level 0 (A1)
 */
import { api } from '../api.js';
import { state } from '../state.js';

export class DashboardView {
  constructor() {
    this.container = null;
    this.data = null;
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Kişiselleştirilmiş öğrenme paneliniz yükleniyor...</p>
      </div>
    `;

    try {
      this.data = await api.getDashboard();
      state.setDashboard(this.data);
      this.renderContent();
    } catch (err) {
      if (err.message === 'AUTH_REQUIRED') {
        return; // Auth modal will handle
      }
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Panel yüklenemedi</h3>
          <p>${err.message}</p>
          <button class="btn btn-primary" id="retry-dashboard-btn">Tekrar Dene</button>
        </div>
      `;
      document.getElementById('retry-dashboard-btn')?.addEventListener('click', () => this.render(viewport));
    }
  }

  renderContent() {
    const { user, stats, skills, dailyTasks, recentErrors, reviewStats, latestAssessment } = this.data;

    // Update topbar & sidebar stats
    const streakEl = document.getElementById('sidebar-streak');
    if (streakEl) streakEl.textContent = `${stats.current_streak || 1} gün`;
    const xpEl = document.getElementById('sidebar-xp');
    if (xpEl) xpEl.textContent = `${stats.xp || 0} XP`;
    const dueBadge = document.getElementById('review-due-badge');
    if (dueBadge) dueBadge.textContent = reviewStats ? reviewStats.dueToday : 0;
    const errorsBadge = document.getElementById('errors-count-badge');
    if (errorsBadge) errorsBadge.textContent = recentErrors ? recentErrors.length : 0;

    // Current CEFR Level (Default A1)
    const overallLevel = latestAssessment?.overall_cefr || latestAssessment?.overallCEFR || 'A1';
    const badgeEl = document.getElementById('sidebar-cefr-badge');
    if (badgeEl) badgeEl.textContent = overallLevel;

    const skillList = [
      { key: 'grammar', name: 'Dilbilgisi (Grammar)', icon: '📖' },
      { key: 'vocabulary', name: 'Kelime Haznesi (Vocabulary)', icon: '📚' },
      { key: 'reading', name: 'Okuma & Anlama (Reading)', icon: '📰' },
      { key: 'listening', name: 'Dinleme & Algılama (Listening)', icon: '🎧' },
      { key: 'writing', name: 'Yazma Becerisi (Writing)', icon: '✍️' },
      { key: 'speaking', name: 'Konuşma & Akıcılık (Speaking)', icon: '🗣️' },
      { key: 'pronunciation', name: 'Telaffuz & Aksan (Pronunciation)', icon: '🎙️' },
      { key: 'sentence_formation', name: 'Cümle Kurma (Syntax)', icon: '🧩' },
      { key: 'comprehension', name: 'Kavrama Hızı (Comprehension)', icon: '💡' },
      { key: 'communication', name: 'Doğal İletişim (Communication)', icon: '🤝' },
    ];

    const tasks = dailyTasks?.tasks || [
      { id: 'task-vocab', skill: 'vocabulary', description: 'A1 Temel Kelime Kartlarından 5 tanesini incele ve tekrar et', targetView: 'vocabulary' },
      { id: 'task-grammar', skill: 'grammar', description: 'Gramer Akademisinden 1 başlangıç konusunu ve kurallarını oku', targetView: 'grammar' },
      { id: 'task-reading', skill: 'reading', description: '1 başlangıç (A1) okuma metnini incele ve sorularını yanıtla', targetView: 'reading' },
      { id: 'task-speaking', skill: 'speaking', description: '1 günlük konuşma senaryosunu sesli olarak dene', targetView: 'speaking' }
    ];

    const completedTaskIds = new Set(dailyTasks?.completed_tasks || []);

    this.container.innerHTML = `
      <div class="dashboard-grid">
        <!-- Welcome & Goal Hero -->
        <section class="hero-card card">
          <div class="hero-content">
            <div class="hero-badge">Günün Odağı • Sıfırdan Akıcı İngilizceye</div>
            <h1 class="hero-title">Hoş geldin, <span class="gradient-text">${user.displayName || user.username}</span>!</h1>
            <p class="hero-desc">
              Bu sistem İngilizceyi kural ezberletmeden; dinleme, konuşma, yazma ve İngilizce düşünme yetinizi 10 farklı boyutta sıfırdan geliştirmek için hazırlandı.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary" id="hero-diagnostic-btn">
                <span>🎯 Seviye Belirleme Sınavı (CEFR)</span>
                <span class="btn-badge">10 Beceri</span>
              </button>
              <button class="btn btn-secondary" id="hero-routine-btn">
                <span>⚡ Günün Rutinine Başla (${tasks.length - completedTaskIds.size} görev kaldı)</span>
              </button>
            </div>
          </div>
          <div class="hero-stat-box">
            <div class="hero-cefr-circle">
              <span class="hero-cefr-label">MEVCUT SEVİYE</span>
              <span class="hero-cefr-val">${overallLevel}</span>
              <span class="hero-cefr-sub">Hedef: B2+ Akıcılık</span>
            </div>
          </div>
        </section>

        <!-- Stats Overview Row -->
        <div class="grid-4 stats-row">
          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Çalışma Serisi</span>
              <span class="stat-icon-pill">🔥</span>
            </div>
            <div class="stat-number">${stats.current_streak || 1} <span class="stat-unit">gün</span></div>
            <div class="stat-sub">En uzun seri: ${stats.longest_streak || 1} gün</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Çalışma Süresi</span>
              <span class="stat-icon-pill">⏱️</span>
            </div>
            <div class="stat-number">${stats.total_study_minutes || 0} <span class="stat-unit">dk</span></div>
            <div class="stat-sub">Toplam aktif öğrenme</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Öğrenilen Kelime</span>
              <span class="stat-icon-pill">📚</span>
            </div>
            <div class="stat-number">${stats.total_words_learned || 0}</div>
            <div class="stat-sub">${reviewStats?.dueToday || 0} kart tekrar bekliyor</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Düzeltilen Hata</span>
              <span class="stat-icon-pill">🎯</span>
            </div>
            <div class="stat-number">${stats.total_errors_resolved || 0}</div>
            <div class="stat-sub">${recentErrors?.length || 0} hata defterinde kayıtlı</div>
          </div>
        </div>

        <div class="grid-2 dashboard-main-grid">
          <!-- Today's Routine / Daily Tasks -->
          <section class="card daily-routine-card">
            <div class="card-header">
              <div>
                <h2 class="card-title">📅 Bugünün Mikro-Müfredatı</h2>
                <div class="card-subtitle">Anlama ve üretme becerileri için dengeli günlük plan</div>
              </div>
              <button class="btn btn-secondary btn-sm" id="refresh-tasks-btn" title="Görevleri yenile">
                ↻ Yenile
              </button>
            </div>

            <div class="tasks-list">
              ${tasks.map((task) => {
                const isDone = completedTaskIds.has(task.id);
                return `
                  <div class="task-item ${isDone ? 'completed' : ''}" data-task-id="${task.id}" data-view="${task.targetView || task.skill}">
                    <div class="task-checkbox ${isDone ? 'checked' : ''}">
                      ${isDone ? '✓' : ''}
                    </div>
                    <div class="task-content">
                      <div class="task-title">${task.description}</div>
                      <div class="task-skill-tag cefr-tag A1">${task.skill.toUpperCase()}</div>
                    </div>
                    <button class="btn btn-secondary btn-sm task-action-btn">
                      ${isDone ? 'Tekrar Et' : 'Başla →'}
                    </button>
                  </div>
                `;
              }).join('')}
            </div>
          </section>

          <!-- 10-Skill CEFR Matrix -->
          <section class="card skill-matrix-card">
            <div class="card-header">
              <div>
                <h2 class="card-title">📊 10 Boyutlu Beceri Durumu</h2>
                <div class="card-subtitle">CEFR Standartlarında Bağımsız Seviye Dağılımı</div>
              </div>
              <button class="btn btn-secondary btn-sm" id="goto-assessment-btn">Seviye Testi</button>
            </div>

            <div class="skill-bars-list">
              ${skillList.map(s => {
                const prof = skills[s.key] || { level: 'A1', sublevel: '', score: 0 };
                const lvl = prof.level || 'A1';
                const score = prof.score || 0;
                return `
                  <div class="skill-row" data-skill="${s.key}">
                    <div class="skill-label">
                      <span class="skill-icon">${s.icon}</span>
                      <span class="skill-name">${s.name}</span>
                    </div>
                    <div class="skill-bar-wrap">
                      <div class="skill-bar-bg">
                        <div class="skill-bar-fill" style="width: ${Math.max(score, 5)}%;"></div>
                      </div>
                    </div>
                    <div class="skill-score">
                      <span class="cefr-tag ${lvl}">${lvl}</span>
                      <span class="score-percent">%${score}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
        </div>

        <!-- Quick Access to Skill Labs -->
        <section class="card labs-overview-card">
          <div class="card-header">
            <div>
              <h2 class="card-title">🚀 Öğrenme Laboratuvarları</h2>
              <div class="card-subtitle">Hangi alanda pratik yapmak istiyorsanız hemen başlayın</div>
            </div>
          </div>
          <div class="grid-3 labs-grid">
            <div class="lab-card card" data-view="grammar">
              <div class="lab-icon">📖</div>
              <div class="lab-title">Gramer Akademisi</div>
              <div class="lab-desc">Türkçe açıklamalı, kuralların mantığını anlatan A1-C1 dilbilgisi dersleri.</div>
              <button class="btn btn-secondary btn-sm">Derslere Git →</button>
            </div>
            <div class="lab-card card" data-view="vocabulary">
              <div class="lab-icon">🗂️</div>
              <div class="lab-title">Kelime Kartları (SRS)</div>
              <div class="lab-desc">Aralıklı tekrar algoritmasıyla kalıcı kelime ezberi ve örnek cümleler.</div>
              <button class="btn btn-secondary btn-sm">Kelimeleri Aç →</button>
            </div>
            <div class="lab-card card" data-view="speaking">
              <div class="lab-icon">🗣️</div>
              <div class="lab-title">Konuşma & Diyalog</div>
              <div class="lab-desc">Günlük hayattaki durumlar için sesli rol yapma ve akıcılık simülatörü.</div>
              <button class="btn btn-secondary btn-sm">Konuşmaya Başla →</button>
            </div>
          </div>
        </section>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    document.getElementById('hero-diagnostic-btn')?.addEventListener('click', () => {
      state.setView('assessment');
    });

    document.getElementById('hero-routine-btn')?.addEventListener('click', () => {
      state.setView('grammar');
    });

    document.getElementById('goto-assessment-btn')?.addEventListener('click', () => {
      state.setView('assessment');
    });

    document.querySelectorAll('.task-item').forEach(item => {
      item.addEventListener('click', () => {
        const view = item.dataset.view;
        if (view) state.setView(view);
      });
    });

    document.querySelectorAll('.lab-card').forEach(card => {
      card.addEventListener('click', () => {
        const view = card.dataset.view;
        if (view) state.setView(view);
      });
    });

    document.querySelectorAll('.skill-row').forEach(row => {
      row.addEventListener('click', () => {
        const skill = row.dataset.skill;
        if (skill && state.currentView !== skill) {
          state.setView(skill);
        }
      });
    });
  }
}
