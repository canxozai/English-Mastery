/**
 * Dashboard & Daily Routine View
 * Turkish-first interface for beginner learners starting from Level 0 (A1)
 */
import { api } from '../api.js';
import { state } from '../state.js';
import { achievementManager, ACHIEVEMENTS } from '../achievements.js';

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
      // Evaluate gamified achievements
      await achievementManager.checkAll(this.data);
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
      { id: 'task-vocab', skill: 'vocabulary', description: 'Kelime Kartlarından en az 5 tanesini tekrar et veya yeni kelime öğren', targetView: 'vocabulary' },
      { id: 'task-grammar', skill: 'grammar', description: 'Gramer Akademisinden 1 konuyu ve interaktif alıştırmasını tamamla', targetView: 'grammar' },
      { id: 'task-reading', skill: 'reading', description: '1 okuma metnini incele ve anlama sorularını yanıtla', targetView: 'reading' },
      { id: 'task-speaking', skill: 'speaking', description: '1 konuşma senaryosunda sesli pratik yap veya diyalog kur', targetView: 'speaking' }
    ];

    const completedTaskIds = new Set(dailyTasks?.completed_tasks || []);
    const completedCount = completedTaskIds.size;
    const totalTasks = tasks.length;
    const percentDone = Math.round((completedCount / Math.max(totalTasks, 1)) * 100);
    const nextIncompleteTask = tasks.find(t => !completedTaskIds.has(t.id));
    this.nextTargetView = nextIncompleteTask ? (nextIncompleteTask.targetView || nextIncompleteTask.skill) : 'vocabulary';

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
                <span>⚡ ${completedCount >= totalTasks ? 'Günün Rutini Tamamlandı! 🎉' : `Günün Rutinine Başla (${totalTasks - completedCount} görev kaldı)`}</span>
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

            <!-- Routine Progress Widget -->
            <div class="routine-progress-widget">
              <div class="routine-progress-header">
                <span class="routine-progress-title">
                  <strong>İlerleme:</strong> ${completedCount} / ${totalTasks} Görev Tamamlandı (%${percentDone})
                </span>
                <span class="routine-reward-tag">${percentDone === 100 ? '🎉 +50 XP Bonus Eklendi!' : '+20 XP / Görev'}</span>
              </div>
              <div class="routine-bar-outer">
                <div class="routine-bar-inner" style="width: ${percentDone}%;"></div>
              </div>
              ${percentDone === 100 ? `
                <div class="routine-celebration">
                  ✨ <strong>Tebrikler!</strong> Bugünün tüm hedeflerini tamamlayarak serinizi korudunuz ve günlük bonusu kazandınız!
                </div>
              ` : ''}
            </div>

            <div class="tasks-list">
              ${tasks.map((task) => {
                const isDone = completedTaskIds.has(task.id);
                return `
                  <div class="task-item ${isDone ? 'completed' : ''}" data-task-id="${task.id}" data-view="${task.targetView || task.skill}">
                    <div class="task-checkbox ${isDone ? 'checked' : ''}" title="${isDone ? 'Tamamlandı olarak işaretlendi (kaldırmak için tıkla)' : 'Tamamlandı olarak işaretle'}">
                      ${isDone ? '✓' : ''}
                    </div>
                    <div class="task-content">
                      <div class="task-title ${isDone ? 'text-strikethrough' : ''}">${task.description}</div>
                      <div class="task-skill-tag cefr-tag A1">${task.skill.toUpperCase()}</div>
                    </div>
                    <button class="btn ${isDone ? 'btn-secondary' : 'btn-primary'} btn-sm task-action-btn">
                      ${isDone ? 'Tekrar Aç' : 'Başla →'}
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
          <div class="grid-4 labs-grid">
            <div class="lab-card card" data-view="grammar">
              <div class="lab-icon">📖</div>
              <div class="lab-title">Gramer Akademisi</div>
              <div class="lab-desc">Türkçe açıklamalı, kuralların mantığını anlatan A1-C1 dilbilgisi dersleri.</div>
              <button class="btn btn-secondary btn-sm">Derslere Git →</button>
            </div>
            <div class="lab-card card" data-view="vocabulary">
              <div class="lab-icon">🗂️</div>
              <div class="lab-title">Kelime Kartları (SRS)</div>
              <div class="lab-desc">155+ kelimelik CEFR arşivi ve sınırsız canlı internet sözlüğü ile kalıcı öğrenim.</div>
              <button class="btn btn-secondary btn-sm">Kelimeleri Aç →</button>
            </div>
            <div class="lab-card card" data-view="syntax">
              <div class="lab-icon">🧩</div>
              <div class="lab-title">Cümle Kurma (Syntax)</div>
              <div class="lab-desc">S-V-O-M-P-T dizilim laboratuvarı ile İngilizce düşünme refleksinizi güçlendirin.</div>
              <button class="btn btn-secondary btn-sm">Cümle Kur →</button>
            </div>
            <div class="lab-card card" data-view="speaking">
              <div class="lab-icon">🗣️</div>
              <div class="lab-title">Konuşma & Diyalog</div>
              <div class="lab-desc">Günlük hayattaki durumlar için sesli rol yapma ve akıcılık simülatörü.</div>
              <button class="btn btn-secondary btn-sm">Konuşmaya Başla →</button>
            </div>
          </div>

          <!-- Achievements Banner -->
          <div class="card dashboard-achievements-banner" id="dash-achievements-banner" style="cursor: pointer;">
            <div class="dash-ach-left">
              <div class="dash-ach-icon">🏆</div>
              <div class="dash-ach-text">
                <h3>Rozetler & Başarımlar (${achievementManager.getUnlockedAchievements().length} / ${ACHIEVEMENTS.length} Açıldı)</h3>
                <p>Kazanılan rozetlerini incelemek ve kilitleri açmak için Rozet Vitrinini ziyaret et.</p>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm" id="btn-view-all-badges">Rozet Vitrini →</button>
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
      state.setView(this.nextTargetView || 'vocabulary');
    });

    document.getElementById('goto-assessment-btn')?.addEventListener('click', () => {
      state.setView('assessment');
    });

    document.getElementById('dash-achievements-banner')?.addEventListener('click', () => {
      state.setView('progress');
    });

    document.getElementById('btn-view-all-badges')?.addEventListener('click', (e) => {
      e.stopPropagation();
      state.setView('progress');
    });

    document.getElementById('refresh-tasks-btn')?.addEventListener('click', async () => {
      await this.render(this.container);
      state.showToast('Görevler güncellendi.', 'info');
    });

    // Checkbox click: toggle completion
    document.querySelectorAll('.task-checkbox').forEach(cb => {
      cb.addEventListener('click', async (e) => {
        e.stopPropagation();
        const item = cb.closest('.task-item');
        if (!item) return;
        const taskId = item.dataset.taskId;
        const wasDone = cb.classList.contains('checked');
        const willBeDone = !wasDone;
        
        try {
          await api.completeDailyTask(taskId, willBeDone);
          state.showToast(willBeDone ? '🎯 Görev tamamlandı! +20 XP eklendi.' : 'Görev işareti kaldırıldı.', willBeDone ? 'success' : 'info');
          await this.render(this.container);
        } catch (err) {
          state.showToast('Görev durumu güncellenemedi: ' + err.message, 'error');
        }
      });
    });

    // Action button click
    document.querySelectorAll('.task-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = btn.closest('.task-item');
        const view = item?.dataset.view;
        if (view) state.setView(view);
      });
    });

    // Task row click
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
      row.style.cursor = 'pointer';
      row.addEventListener('click', () => {
        const skill = row.dataset.skill;
        const skillToViewMap = {
          grammar: 'grammar',
          vocabulary: 'vocabulary',
          reading: 'reading',
          listening: 'listening',
          writing: 'writing',
          speaking: 'speaking',
          pronunciation: 'pronunciation',
          sentence_formation: 'syntax',
          comprehension: 'reading',
          communication: 'speaking'
        };
        const targetView = skillToViewMap[skill] || skill;
        if (targetView) state.setView(targetView);
      });
    });
  }
}
