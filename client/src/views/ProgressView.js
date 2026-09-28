/**
 * Progress & Long-Term Analytics View
 * Tracks CEFR trajectories, study time consistency, multi-skill velocity, and Gamified Achievements Showcase
 */
import { api } from '../api.js';
import { ACHIEVEMENTS, achievementManager } from '../achievements.js';

export class ProgressView {
  constructor() {
    this.container = null;
    this.dashboardData = null;
    this.activeFilter = 'all'; // 'all' | 'unlocked' | 'locked' | 'vocab' | 'grammar' | 'skills' | 'streak'
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Gelişim, rozetler ve istatistik verileriniz hesaplanıyor...</p>
      </div>
    `;

    try {
      this.dashboardData = await api.getDashboard();
      // Check for any newly eligible achievements
      await achievementManager.checkAll(this.dashboardData);
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

    // Unlocked achievements from manager
    const unlockedList = achievementManager.getUnlockedAchievements();
    const unlockedMap = new Map(unlockedList.map(a => [a.id, a]));
    const totalAchievements = ACHIEVEMENTS.length;
    const unlockedCount = unlockedList.length;
    const completionRate = Math.round((unlockedCount / totalAchievements) * 100);

    // Filter achievements
    const filteredAchievements = ACHIEVEMENTS.filter(ach => {
      const isUnl = unlockedMap.has(ach.id);
      if (this.activeFilter === 'unlocked') return isUnl;
      if (this.activeFilter === 'locked') return !isUnl;
      if (this.activeFilter === 'vocab') return ach.category === 'vocab';
      if (this.activeFilter === 'grammar') return ach.category === 'grammar';
      if (this.activeFilter === 'skills') return ach.category === 'skills';
      if (this.activeFilter === 'streak') return ach.category === 'streak';
      return true;
    });

    this.container.innerHTML = `
      <div class="progress-layout">
        <!-- Header -->
        <div class="card progress-header">
          <div class="progress-header-left">
            <h1 class="progress-title">Gelişim Analizi & Başarımlar</h1>
            <p class="progress-subtitle">CEFR standartlarında 10 farklı beceri boyutu, rozetler ve çalışma disiplini</p>
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
            <span class="p-stat-title">Kazanılan Rozetler</span>
            <div class="p-stat-val">${unlockedCount} / ${totalAchievements} 🏆</div>
            <span class="p-stat-sub">Başarım oranı: %${completionRate}</span>
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
                <p style="color: #64748b; font-size: 13px; text-align: center; margin-top: 30px;">Henüz haftalık çalışma verisi oluşmadı.</p>
              `}
            </div>
          </div>
        </div>

        <!-- =============================================
             ACHIEVEMENTS SHOWCASE
             ============================================= -->
        <div class="card achievements-showcase-card">
          <div class="achievements-top-bar">
            <div class="achievements-headline">
              <h2>🏆 Başarımlar & Rozet Vitrini</h2>
              <p>Öğrenme yolculuğunda tamamladığın her dönüm noktası sana özel rozetler ve bonus XP kazandırır</p>
            </div>
            <div class="achievements-overall-badge">
              <div>
                <div class="achievements-meter-label">${unlockedCount} / ${totalAchievements} Açıldı (%${completionRate})</div>
              </div>
              <div class="achievements-meter-bar">
                <div class="achievements-meter-fill" style="width: ${completionRate}%;"></div>
              </div>
            </div>
          </div>

          <!-- Filter Tabs -->
          <div class="achievements-filter-tabs">
            <button class="ach-tab ${this.activeFilter === 'all' ? 'active' : ''}" data-filter="all">Tümü (${totalAchievements})</button>
            <button class="ach-tab ${this.activeFilter === 'unlocked' ? 'active' : ''}" data-filter="unlocked">Kazanılanlar (${unlockedCount})</button>
            <button class="ach-tab ${this.activeFilter === 'locked' ? 'active' : ''}" data-filter="locked">Kilitliler (${totalAchievements - unlockedCount})</button>
            <button class="ach-tab ${this.activeFilter === 'vocab' ? 'active' : ''}" data-filter="vocab">Kelime & SRS</button>
            <button class="ach-tab ${this.activeFilter === 'grammar' ? 'active' : ''}" data-filter="grammar">Gramer</button>
            <button class="ach-tab ${this.activeFilter === 'skills' ? 'active' : ''}" data-filter="skills">Dört Beceri</button>
            <button class="ach-tab ${this.activeFilter === 'streak' ? 'active' : ''}" data-filter="streak">Seri & Disiplin</button>
          </div>

          <!-- Badges Grid -->
          <div class="achievements-grid">
            ${filteredAchievements.map(ach => {
              const unlockedRecord = unlockedMap.get(ach.id);
              const isUnlocked = !!unlockedRecord;
              const prog = ach.progress ? ach.progress(this.dashboardData) : null;
              const unlockDate = unlockedRecord ? new Date(unlockedRecord.unlocked_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }) : null;

              return `
                <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
                  <div class="ach-icon-box">
                    ${isUnlocked ? ach.icon : '🔒'}
                  </div>
                  <div class="ach-details">
                    <div class="ach-title-row">
                      <span class="ach-title">${ach.title}</span>
                      <span class="ach-xp-tag">+${ach.xp} XP</span>
                    </div>
                    <div class="ach-desc">${ach.description}</div>

                    ${isUnlocked ? `
                      <div class="ach-unlocked-date">
                        <span>✓ Açıldı (${unlockDate})</span>
                      </div>
                    ` : (prog ? `
                      <div class="ach-progress-row">
                        <div class="ach-mini-track">
                          <div class="ach-mini-fill" style="width: ${Math.min(100, Math.round((prog.current / prog.max) * 100))}%;"></div>
                        </div>
                        <span class="ach-progress-txt">${prog.current} / ${prog.max}</span>
                      </div>
                    ` : `
                      <span class="ach-progress-txt">Henüz tamamlanmadı</span>
                    `)}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    this.container.querySelectorAll('.ach-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.activeFilter = tab.dataset.filter;
        this.renderContent();
      });
    });
  }
}
