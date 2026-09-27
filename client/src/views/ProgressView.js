/**
 * Progress & Long-Term Analytics View
 * Tracks CEFR trajectories, study time consistency, and multi-skill velocity in Turkish
 */
import { api } from '../api.js';

export class ProgressView {
  constructor() {
    this.container = null;
    this.dashboardData = null;
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Gelişim ve istatistik verileriniz hesaplanıyor...</p>
      </div>
    `;

    try {
      this.dashboardData = await api.getDashboard();
      this.renderContent();
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>İstatistikler yüklenemedi</h3>
          <p>${err.message}</p>
        </div>
      `;
    }
  }

  renderContent() {
    const { stats, skills, weekStudy, latestAssessment } = this.dashboardData;

    const skillKeys = [
      { key: 'grammar', name: 'Dilbilgisi (Grammar)' },
      { key: 'vocabulary', name: 'Kelime Haznesi (Vocabulary)' },
      { key: 'reading', name: 'Okuma Anlama (Reading)' },
      { key: 'listening', name: 'Dinleme Algılama (Listening)' },
      { key: 'writing', name: 'Yazma Becerisi (Writing)' },
      { key: 'speaking', name: 'Konuşma Akıcılığı (Speaking)' },
      { key: 'pronunciation', name: 'Telaffuz & Fonetik (Pronunciation)' },
      { key: 'sentence_formation', name: 'Cümle Kurma Mantığı (Syntax)' },
      { key: 'comprehension', name: 'Kavrama Hızı (Comprehension)' },
      { key: 'communication', name: 'Doğal İletişim (Communication)' }
    ];

    const totalWeekMins = (weekStudy || []).reduce((acc, curr) => acc + (curr.total_minutes || 0), 0);
    const overall = latestAssessment?.overall_cefr || latestAssessment?.overallCEFR || 'A1';

    this.container.innerHTML = `
      <div class="progress-layout">
        <!-- Header -->
        <div class="card progress-header">
          <div class="progress-header-left">
            <h1 class="progress-title">Gelişim Analizi & Beceriler</h1>
            <p class="progress-subtitle">CEFR standartlarında 10 farklı boyuttaki öğrenme eğrinizin ayrıntılı analizi</p>
          </div>
          <div class="current-cefr-pill">
            <span class="cefr-pill-label">MEVCUT SEVİYE</span>
            <span class="cefr-pill-val">${overall}</span>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="grid-4 progress-stats-grid">
          <div class="card p-stat-card">
            <span class="p-stat-title">Çalışma Serisi</span>
            <div class="p-stat-val">${stats.current_streak || 1} 🔥 <span style="font-size: 14px; font-weight: normal;">gün</span></div>
            <span class="p-stat-sub">En uzun seri: ${stats.longest_streak || 1} gün</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Son 7 Günlük Süre</span>
            <div class="p-stat-val">${totalWeekMins} <span style="font-size: 14px; font-weight: normal;">dk</span></div>
            <span class="p-stat-sub">Toplam aktif çalışma</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Toplam XP</span>
            <div class="p-stat-val">${stats.xp || 0} ⚡</div>
            <span class="p-stat-sub">Seviye ${stats.level || 1} Öğrenci</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Öğrenilen Kelime</span>
            <div class="p-stat-val">${stats.total_words_learned || 0}</div>
            <span class="p-stat-sub">Kalıcı hafızaya alınan</span>
          </div>
        </div>

        <div class="grid-2 progress-charts-grid">
          <!-- 10 Skills Detailed Breakdown -->
          <div class="card skills-audit-card">
            <h2 class="card-title">🎯 10 Becerideki Seviye Dağılımı</h2>
            <div class="card-subtitle">Her beceri alanı bağımsız olarak puanlanır ve takip edilir</div>

            <div class="domain-bars-list">
              ${skillKeys.map(s => {
                const prof = skills[s.key] || { level: 'A1', sublevel: '', score: 0 };
                const lvl = prof.level || 'A1';
                const score = prof.score || 0;
                return `
                  <div class="domain-row">
                    <div class="domain-label">
                      <span>${s.name}</span>
                      <span class="cefr-tag ${lvl}">${lvl}</span>
                    </div>
                    <div class="domain-bar-track">
                      <div class="domain-bar-fill" style="width: ${Math.max(score, 5)}%;"></div>
                    </div>
                    <span class="domain-score">%${score}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Weekly Consistency Distribution -->
          <div class="card weekly-activity-card">
            <h2 class="card-title">📅 Son 7 Günlük Çalışma Düzeni</h2>
            <div class="card-subtitle">Günlük pratik süresi dağılımı (dakika cinsinden)</div>

            <div class="week-chart-bars">
              ${(weekStudy && weekStudy.length > 0) ? weekStudy.map(day => {
                const heightPct = Math.min(100, Math.max(10, Math.round((day.total_minutes / 60) * 100)));
                return `
                  <div class="day-bar-col">
                    <div class="day-bar-track">
                      <div class="day-bar-fill" style="height: ${day.total_minutes > 0 ? heightPct : 6}%;"></div>
                    </div>
                    <span class="day-label">${day.date.slice(5)}</span>
                    <span class="day-mins">${day.total_minutes}m</span>
                  </div>
                `;
              }).join('') : `
                <p>Henüz haftalık çalışma verisi oluşmadı.</p>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
