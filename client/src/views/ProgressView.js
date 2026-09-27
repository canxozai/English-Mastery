/**
 * Progress & Long-Term Analytics View
 * Tracks CEFR trajectories, study time consistency, and multi-skill velocity
 */
import { api } from '../api.js';
import { state } from '../state.js';

export class ProgressView {
  constructor() {
    this.container = null;
    this.history = [];
    this.dashboardData = null;
    this.weeklyReport = null;
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Synthesizing long-term progress metrics...</p>
      </div>
    `;

    try {
      const [dash, hist, rep] = await Promise.all([
        api.getDashboard(),
        api.getProgressHistory(),
        api.getWeeklyReport()
      ]);

      this.dashboardData = dash;
      this.history = hist.history || [];
      this.weeklyReport = rep.report;
      this.renderContent();
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Failed to load progress analytics</h3>
          <p>${err.message}</p>
        </div>
      `;
    }
  }

  renderContent() {
    const { stats, skills, weekStudy, latestAssessment } = this.dashboardData;

    const skillKeys = [
      { key: 'grammar', name: 'Grammar' },
      { key: 'vocabulary', name: 'Vocabulary' },
      { key: 'reading', name: 'Reading' },
      { key: 'listening', name: 'Listening' },
      { key: 'writing', name: 'Writing' },
      { key: 'speaking', name: 'Speaking' },
      { key: 'pronunciation', name: 'Pronunciation' },
      { key: 'sentence_formation', name: 'Sentence Syntax' },
      { key: 'comprehension', name: 'Comprehension' },
      { key: 'communication', name: 'Communication' }
    ];

    const totalWeekMins = (weekStudy || []).reduce((acc, curr) => acc + (curr.total_minutes || 0), 0);

    this.container.innerHTML = `
      <div class="progress-layout">
        <!-- Header -->
        <div class="card progress-header">
          <div class="progress-header-left">
            <h1 class="progress-title">Mastery Trajectory & Analytics</h1>
            <p class="progress-subtitle">Longitudinal analysis of your language acquisition curve across CEFR bands</p>
          </div>
          <div class="current-cefr-pill">
            <span class="cefr-pill-label">CURRENT BENCHMARK</span>
            <span class="cefr-pill-val">${latestAssessment?.overall_cefr || 'A2'}</span>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="grid-4 progress-stats-grid">
          <div class="card p-stat-card">
            <span class="p-stat-title">Study Streak</span>
            <div class="p-stat-val">${stats.current_streak || 0} 🔥</div>
            <span class="p-stat-sub">Longest: ${stats.longest_streak || 0} days</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Past 7 Days Time</span>
            <div class="p-stat-val">${totalWeekMins} min</div>
            <span class="p-stat-sub">Active engagement</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Total XP</span>
            <div class="p-stat-val">${stats.xp || 0} ⚡</div>
            <span class="p-stat-sub">Level ${stats.level || 1} Scholar</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Vocabulary Size</span>
            <div class="p-stat-val">${stats.total_words_learned || 0}</div>
            <span class="p-stat-sub">In permanent memory</span>
          </div>
        </div>

        <div class="grid-2 progress-charts-grid">
          <!-- 10 Skills Detailed Breakdown -->
          <div class="card skills-audit-card">
            <h2 class="card-title">🎯 CEFR Level by Domain</h2>
            <div class="card-subtitle">Granular performance mapping across communicative competencies</div>

            <div class="domain-bars-list">
              ${skillKeys.map(s => {
                const prof = skills[s.key] || { level: 'A1', sublevel: '', score: 30 };
                const lvl = prof.level || 'A1';
                const score = prof.score || 35;
                return `
                  <div class="domain-row">
                    <div class="domain-label">
                      <span>${s.name}</span>
                      <span class="cefr-tag ${lvl}">${lvl}${prof.sublevel || ''}</span>
                    </div>
                    <div class="domain-bar-track">
                      <div class="domain-bar-fill" style="width: ${Math.max(score, 10)}%;"></div>
                    </div>
                    <span class="domain-score">${score}%</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Weekly Consistency Distribution -->
          <div class="card weekly-activity-card">
            <h2 class="card-title">📅 7-Day Study Consistency</h2>
            <div class="card-subtitle">Daily practice distribution (minutes per day)</div>

            <div class="week-chart-bars">
              ${(weekStudy && weekStudy.length > 0) ? weekStudy.map(day => `
                <div class="day-bar-col">
                  <div class="day-bar-track">
                    <div class="day-bar-fill" style="height: ${Math.min(100, (day.total_minutes || 0) * 2)}%;"></div>
                  </div>
                  <span class="day-label">${day.date.slice(5)}</span>
                  <span class="day-min">${day.total_minutes || 0}m</span>
                </div>
              `).join('') : `
                <div class="empty-chart-note">Start practicing today to populate your 7-day activity chart!</div>
              `}
            </div>

            <!-- Learning Insights Box -->
            <div class="insights-box">
              <h4>🧠 Cognitive Acquisition Tip</h4>
              <p>Short, daily 20-30 minute focused sessions yield 3x higher long-term neural consolidation compared to infrequent 3-hour marathon cramming sessions.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
