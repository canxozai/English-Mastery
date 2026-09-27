/**
 * Dashboard & Daily Routine View
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
        <p>Loading your personalized learning path...</p>
      </div>
    `;

    try {
      this.data = await api.getDashboard();
      state.setDashboard(this.data);
      this.renderContent();
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Failed to load dashboard</h3>
          <p>${err.message}</p>
          <button class="btn btn-primary" id="retry-dashboard-btn">Retry</button>
        </div>
      `;
      document.getElementById('retry-dashboard-btn')?.addEventListener('click', () => this.render(viewport));
    }
  }

  renderContent() {
    const { user, stats, skills, dailyTasks, recentErrors, reviewStats, learningPlan, latestAssessment } = this.data;

    // Update topbar & sidebar stats
    const streakEl = document.getElementById('sidebar-streak');
    if (streakEl) streakEl.textContent = `${stats.current_streak || 0} days`;
    const xpEl = document.getElementById('sidebar-xp');
    if (xpEl) xpEl.textContent = `${stats.xp || 0} XP`;
    const dueBadge = document.getElementById('review-due-badge');
    if (dueBadge) dueBadge.textContent = reviewStats ? reviewStats.dueToday : 0;
    const errorsBadge = document.getElementById('errors-count-badge');
    if (errorsBadge) errorsBadge.textContent = recentErrors ? recentErrors.length : 0;

    // Calculate overall CEFR level
    const overallLevel = latestAssessment?.overall_cefr || 'A2';
    const badgeEl = document.getElementById('sidebar-cefr-badge');
    if (badgeEl) badgeEl.textContent = overallLevel;

    const skillList = [
      { key: 'grammar', name: 'Grammar', icon: '📖' },
      { key: 'vocabulary', name: 'Vocabulary', icon: '📚' },
      { key: 'reading', name: 'Reading', icon: '📰' },
      { key: 'listening', name: 'Listening', icon: '🎧' },
      { key: 'writing', name: 'Writing', icon: '✍️' },
      { key: 'speaking', name: 'Speaking', icon: '🗣️' },
      { key: 'pronunciation', name: 'Pronunciation', icon: '🎙️' },
      { key: 'sentence_formation', name: 'Sentence Syntax', icon: '🧩' },
      { key: 'comprehension', name: 'Comprehension', icon: '💡' },
      { key: 'communication', name: 'Communication', icon: '🤝' },
    ];

    const tasks = dailyTasks?.tasks || [
      { id: 'task-vocab', skill: 'vocabulary', description: 'Review 10 vocabulary cards in Spaced Repetition queue', targetView: 'vocabulary' },
      { id: 'task-grammar', skill: 'grammar', description: 'Complete 1 exercise in Grammar Academy', targetView: 'grammar' },
      { id: 'task-reading', skill: 'reading', description: 'Read 1 graded article and answer comprehension questions', targetView: 'reading' },
      { id: 'task-speaking', skill: 'speaking', description: 'Practice 1 conversational speaking scenario', targetView: 'speaking' }
    ];

    const completedTaskIds = new Set(dailyTasks?.completed_tasks || []);

    this.container.innerHTML = `
      <div class="dashboard-grid">
        <!-- Welcome & Goal Hero -->
        <section class="hero-card card">
          <div class="hero-content">
            <div class="hero-badge">Daily Focus • Long-Term Fluency</div>
            <h1 class="hero-title">Welcome back, <span class="gradient-text">${user.displayName}</span></h1>
            <p class="hero-desc">
              Your personalized system trains all 10 dimensions of English proficiency for natural thinking and effortless real-world communication.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary" id="hero-diagnostic-btn">
                <span>${latestAssessment ? 'Retake CEFR Assessment' : 'Take Diagnostic Assessment'}</span>
                <span class="btn-badge">10 Skills</span>
              </button>
              <button class="btn btn-secondary" id="hero-routine-btn">
                <span>Start Today's Routine (${tasks.length - completedTaskIds.size} remaining)</span>
              </button>
            </div>
          </div>
          <div class="hero-stat-box">
            <div class="hero-cefr-circle">
              <span class="hero-cefr-label">CEFR TARGET</span>
              <span class="hero-cefr-val">${overallLevel}</span>
              <span class="hero-cefr-sub">Trajectory: B2+</span>
            </div>
          </div>
        </section>

        <!-- Stats Overview Row -->
        <div class="grid-4 stats-row">
          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Study Streak</span>
              <span class="stat-icon-pill">🔥</span>
            </div>
            <div class="stat-number">${stats.current_streak || 0} <span class="stat-unit">days</span></div>
            <div class="stat-sub">Longest: ${stats.longest_streak || 0} days</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Study Time</span>
              <span class="stat-icon-pill">⏱️</span>
            </div>
            <div class="stat-number">${stats.total_study_minutes || 0} <span class="stat-unit">min</span></div>
            <div class="stat-sub">Active learning hours</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Words Mastered</span>
              <span class="stat-icon-pill">📚</span>
            </div>
            <div class="stat-number">${stats.total_words_learned || 0}</div>
            <div class="stat-sub">${reviewStats?.dueToday || 0} cards due today</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Resolved Errors</span>
              <span class="stat-icon-pill">🎯</span>
            </div>
            <div class="stat-number">${stats.total_errors_resolved || 0}</div>
            <div class="stat-sub">${recentErrors?.length || 0} patterns to fix</div>
          </div>
        </div>

        <div class="grid-2 dashboard-main-grid">
          <!-- Today's Routine / Daily Tasks -->
          <section class="card daily-routine-card">
            <div class="card-header">
              <div>
                <h2 class="card-title">📅 Today's Personalized Routine</h2>
                <div class="card-subtitle">Scientifically distributed across receptive and productive skills</div>
              </div>
              <button class="btn btn-secondary btn-sm" id="refresh-tasks-btn" title="Regenerate dynamic tasks">
                ↻ Refresh
              </button>
            </div>

            <div class="tasks-list">
              ${tasks.map((task, idx) => {
                const isDone = completedTaskIds.has(task.id);
                return `
                  <div class="task-item ${isDone ? 'completed' : ''}" data-task-id="${task.id}" data-view="${task.targetView || task.skill}">
                    <div class="task-checkbox ${isDone ? 'checked' : ''}">
                      ${isDone ? '✓' : ''}
                    </div>
                    <div class="task-content">
                      <div class="task-title">${task.description}</div>
                      <div class="task-skill-tag cefr-tag ${task.skill ? 'A2' : 'B1'}">${task.skill.toUpperCase()}</div>
                    </div>
                    <button class="btn btn-secondary btn-sm task-action-btn">
                      ${isDone ? 'Redo' : 'Start'}
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
                <h2 class="card-title">📊 10-Dimensional Skill Matrix</h2>
                <div class="card-subtitle">Independent CEFR diagnostic evaluation</div>
              </div>
              <button class="btn btn-secondary btn-sm" id="goto-assessment-btn">Full Audit</button>
            </div>

            <div class="skill-bars-list">
              ${skillList.map(s => {
                const prof = skills[s.key] || { level: 'A1', sublevel: '', score: 35 };
                const lvl = prof.level || 'A1';
                const score = prof.score || 30;
                return `
                  <div class="skill-row" data-skill="${s.key}">
                    <div class="skill-label">
                      <span class="skill-icon">${s.icon}</span>
                      <span class="skill-name">${s.name}</span>
                    </div>
                    <div class="skill-bar-container">
                      <div class="skill-bar-fill" style="width: ${Math.max(score, 15)}%;"></div>
                    </div>
                    <span class="cefr-tag ${lvl}">${lvl}${prof.sublevel || ''}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
        </div>

        <!-- Quick Launchers Row -->
        <section class="quick-launchers-section">
          <h2 class="section-heading">Quick Practice Hub</h2>
          <div class="grid-4 launcher-grid">
            <div class="launcher-card card" data-view="vocabulary">
              <div class="launcher-icon-box" style="background: rgba(16, 185, 129, 0.15); color: #34d399;">
                📚
              </div>
              <h3 class="launcher-title">SRS Vocabulary</h3>
              <p class="launcher-desc">${reviewStats?.dueToday || 0} words due for spaced recall review.</p>
              <span class="launcher-link">Review Now →</span>
            </div>

            <div class="launcher-card card" data-view="grammar">
              <div class="launcher-icon-box" style="background: rgba(99, 102, 241, 0.15); color: #818cf8;">
                📖
              </div>
              <h3 class="launcher-title">Grammar Academy</h3>
              <p class="launcher-desc">Master tenses, clauses, modals with Turkish comparative tips.</p>
              <span class="launcher-link">Study Grammar →</span>
            </div>

            <div class="launcher-card card" data-view="speaking">
              <div class="launcher-icon-box" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24;">
                🗣️
              </div>
              <h3 class="launcher-title">Speaking Roleplay</h3>
              <p class="launcher-desc">Simulate real-life dialogues with speech recognition.</p>
              <span class="launcher-link">Start Dialogue →</span>
            </div>

            <div class="launcher-card card" data-view="errors">
              <div class="launcher-icon-box" style="background: rgba(244, 63, 94, 0.15); color: #fb7185;">
                🎯
              </div>
              <h3 class="launcher-title">Error Bank</h3>
              <p class="launcher-desc">Eradicate fossilized mistakes and L1 Turkish interference.</p>
              <span class="launcher-link">Fix Mistakes →</span>
            </div>
          </div>
        </section>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    // Diagnostic assessment buttons
    document.getElementById('hero-diagnostic-btn')?.addEventListener('click', () => {
      state.setView('assessment');
    });

    document.getElementById('goto-assessment-btn')?.addEventListener('click', () => {
      state.setView('assessment');
    });

    // Routine button
    document.getElementById('hero-routine-btn')?.addEventListener('click', () => {
      const firstTask = document.querySelector('.task-item:not(.completed)');
      if (firstTask) {
        const view = firstTask.dataset.view;
        state.setView(view);
      } else {
        state.showToast("All daily tasks completed! Great work!", "success");
      }
    });

    // Task items click
    this.container.querySelectorAll('.task-item').forEach(item => {
      item.addEventListener('click', () => {
        const view = item.dataset.view;
        if (view) state.setView(view);
      });
    });

    // Refresh tasks
    document.getElementById('refresh-tasks-btn')?.addEventListener('click', async () => {
      try {
        state.showToast('Generating fresh daily tasks...', 'info');
        await api.generateDailyTasks();
        this.render(this.container);
      } catch (err) {
        state.showToast('Failed to regenerate tasks: ' + err.message, 'error');
      }
    });

    // Quick launchers
    this.container.querySelectorAll('.launcher-card').forEach(card => {
      card.addEventListener('click', () => {
        const view = card.dataset.view;
        if (view) state.setView(view);
      });
    });
  }
}
