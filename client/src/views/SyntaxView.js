/**
 * Syntax & Sentence Formation Studio View (CEFR 8th Skill)
 * Interactive S-V-O-M-P-T word-order builder, comparative Turkish-English syntax explanations,
 * instant audio pronunciation, and gamified skill progression.
 */

import { api } from '../api.js';
import { state } from '../state.js';
import { speech } from '../speech.js';
import { checkAndUnlockBadges } from '../achievements.js';

export class SyntaxView {
  constructor() {
    this.container = null;
    this.categories = [];
    this.exercises = [];
    this.filteredExercises = [];
    this.activeCategory = 'all';
    this.activeLevel = 'all';
    this.currentIndex = 0;
    this.trayTokens = []; // Tokens placed in construction tray
    this.poolTokens = []; // Tokens remaining in available pool
    this.isSubmitted = false;
    this.isCorrect = false;
    this.resultData = null;
    this.firstAttempt = true;
    this.audioCtx = null;
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Cümle Kurma & Sözdizimi Laboratuvarı yükleniyor...</p>
      </div>
    `;

    try {
      const data = await api.getSyntaxExercises(this.activeCategory, this.activeLevel);
      this.categories = data.categories || [];
      this.exercises = data.exercises || [];
      this.applyFilter();
      this.renderLayout();
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Sözdizimi alıştırmaları yüklenemedi</h3>
          <p>${err.message}</p>
        </div>
      `;
    }
  }

  applyFilter() {
    this.filteredExercises = this.exercises.filter(ex => {
      const catMatch = this.activeCategory === 'all' || ex.category === this.activeCategory;
      const lvlMatch = this.activeLevel === 'all' || ex.cefr_level.toUpperCase() === this.activeLevel.toUpperCase();
      return catMatch && lvlMatch;
    });

    if (this.currentIndex >= this.filteredExercises.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentExercise();
  }

  loadCurrentExercise() {
    this.isSubmitted = false;
    this.isCorrect = false;
    this.resultData = null;
    this.firstAttempt = true;
    this.trayTokens = [];

    const current = this.filteredExercises[this.currentIndex];
    if (current) {
      // Scramble tokens
      const shuffled = [...current.tokens];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      // If by chance shuffled matches original, swap first two if length > 1
      if (shuffled.join(' ') === current.tokens.join(' ') && shuffled.length > 1) {
        [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
      }
      this.poolTokens = shuffled.map((text, idx) => ({ id: `token-${idx}-${Date.now()}`, text }));
    } else {
      this.poolTokens = [];
    }
  }

  renderLayout() {
    const current = this.filteredExercises[this.currentIndex];
    const totalCount = this.filteredExercises.length;
    const user = api.getCurrentUser();
    const skills = state.get('skills') || {};
    const syntaxSkill = skills.sentence_formation || { level: 'A1', score: 0 };

    this.container.innerHTML = `
      <div class="syntax-view-container">
        <!-- Studio Header & Level Radar -->
        <header class="syntax-header card">
          <div class="syntax-header-content">
            <div class="syntax-badge-pill">
              <span class="pulse-dot"></span>
              8. CEFR Beceri Boyutu • Cümle Dizilimi (Syntax Studio)
            </div>
            <h1 class="syntax-title">Cümle Kurma & Sözdizimi Laboratuvarı</h1>
            <p class="syntax-subtitle">
              Türkçe düşünme refleksini ("yüklem sonda" kalıbını) kırın; İngilizce 
              <strong>S-V-O-M-P-T</strong> (Özne-Fiil-Nesne-Tarz-Yer-Zaman) dizilim refleksini interaktif olarak kazanın.
            </p>
          </div>

          <div class="syntax-stat-card">
            <div class="syntax-stat-label">Cümle Kurma Seviyeniz</div>
            <div class="syntax-stat-val">
              <span class="cefr-tag ${syntaxSkill.level || 'A1'}">${syntaxSkill.level || 'A1'}</span>
              <span class="syntax-score-text">%${syntaxSkill.score || 0} Ustalık</span>
            </div>
            <div class="syntax-progress-bar">
              <div class="syntax-progress-fill" style="width: ${Math.max(syntaxSkill.score || 10, 8)}%;"></div>
            </div>
          </div>
        </header>

        <!-- S-V-O-M-P-T Quick Guide Drawer -->
        <div class="syntax-rule-banner">
          <div class="rule-banner-header">
            <span class="rule-icon">💡</span>
            <strong>Altın Formül: S - V - O - M - P - T</strong>
            <span class="rule-expand-text">(Detayları Gör)</span>
          </div>
          <div class="rule-banner-body">
            <div class="rule-chips-row">
              <span class="rule-chip chip-s"><strong>S</strong>ubject (Özne)</span>
              <span class="rule-arrow">→</span>
              <span class="rule-chip chip-v"><strong>V</strong>erb (Fiil/Yüklem)</span>
              <span class="rule-arrow">→</span>
              <span class="rule-chip chip-o"><strong>O</strong>bject (Nesne)</span>
              <span class="rule-arrow">→</span>
              <span class="rule-chip chip-m"><strong>M</strong>anner (Nasıl/Tarz)</span>
              <span class="rule-arrow">→</span>
              <span class="rule-chip chip-p"><strong>P</strong>lace (Nerede/Yer)</span>
              <span class="rule-arrow">→</span>
              <span class="rule-chip chip-t"><strong>T</strong>ime (Ne zaman)</span>
            </div>
            <p class="rule-note">
              ⚠️ <strong>Türkçe & İngilizce Farkı:</strong> Türkçede yüklem genellikle cümlenin en sonuna giderken, İngilizcede fiil öznenin hemen ardından gelir. Ayrıca yer zarfı (Place) daima zaman zarfından (Time) önce yer alır ("in the kitchen in the morning").
            </p>
          </div>
        </div>

        <!-- Filter Controls -->
        <div class="syntax-filters card">
          <div class="filter-group">
            <label class="filter-label">Seviye:</label>
            <div class="pill-tabs" id="level-tabs">
              ${['all', 'A1', 'A2', 'B1', 'B2'].map(lvl => `
                <button class="pill-tab ${this.activeLevel === lvl ? 'active' : ''}" data-level="${lvl}">
                  ${lvl === 'all' ? 'Tümü' : lvl}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="filter-group">
            <label class="filter-label">Kategori:</label>
            <select class="form-input form-select" id="category-select">
              ${this.categories.map(c => `
                <option value="${c.id}" ${this.activeCategory === c.id ? 'selected' : ''}>
                  ${c.name}
                </option>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- Exercise Workspace -->
        ${current ? this.renderExerciseCard(current, totalCount) : this.renderEmptyState()}
      </div>
    `;

    this.bindEvents();
  }

  renderExerciseCard(current, totalCount) {
    return `
      <div class="syntax-exercise-card card" id="current-exercise-card">
        <!-- Card Top: Meta & Progress -->
        <div class="exercise-card-header">
          <div class="exercise-meta">
            <span class="cefr-tag ${current.cefr_level}">${current.cefr_level}</span>
            <span class="exercise-cat-badge">${current.category_name_tr}</span>
          </div>
          <div class="exercise-counter">
            Cümle <strong>${this.currentIndex + 1}</strong> / ${totalCount}
          </div>
        </div>

        <!-- Turkish Prompt Box -->
        <div class="turkish-prompt-box">
          <div class="prompt-icon">🇹🇷</div>
          <div class="prompt-content">
            <div class="prompt-label">İngilizceye Çevrilip Sıralanacak Cümle:</div>
            <div class="prompt-text">${current.turkish_prompt}</div>
          </div>
          <button class="btn btn-icon btn-tts-prompt" id="speak-prompt-btn" title="Türkçe Cümleyi Dinle">
            🔊
          </button>
        </div>

        <!-- Sentence Construction Tray -->
        <div class="construction-tray-wrapper">
          <div class="tray-label-row">
            <span class="tray-title">🛠️ Cümlenizi Buraya Oluşturun:</span>
            <div class="tray-actions">
              <button class="btn btn-sm btn-ghost" id="undo-token-btn" ${this.trayTokens.length === 0 ? 'disabled' : ''} title="Son Eklenen Kelimeyi Geri Al">
                ↩ Geri Al
              </button>
              <button class="btn btn-sm btn-ghost" id="clear-tray-btn" ${this.trayTokens.length === 0 ? 'disabled' : ''} title="Tümünü Sıfırla">
                🗑️ Temizle
              </button>
            </div>
          </div>

          <div class="construction-tray ${this.trayTokens.length === 0 ? 'empty' : ''}" id="sentence-tray">
            ${this.trayTokens.length === 0 ? `
              <div class="tray-placeholder">
                <span class="placeholder-icon">👇</span>
                <span>Aşağıdaki kelime bloklarına tıklayarak cümlenizi kurun...</span>
              </div>
            ` : this.trayTokens.map((t, idx) => `
              <button class="word-chip placed animate-pop" data-token-id="${t.id}" data-tray-index="${idx}" title="Kaldırmak için tıklayın">
                <span class="chip-text">${t.text}</span>
                <span class="chip-remove">×</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Available Words Pool -->
        <div class="tokens-pool-wrapper">
          <div class="pool-label-row">
            <span class="pool-title">📦 Kullanılabilir Kelime Blokları:</span>
            <span class="pool-hint">Kelimelere tıklayarak yukarıya ekleyin</span>
          </div>
          <div class="tokens-pool" id="tokens-pool">
            ${this.poolTokens.length === 0 ? `
              <div class="pool-empty-note">Tüm kelimeler cümleye yerleştirildi ✨</div>
            ` : this.poolTokens.map(t => `
              <button class="word-chip available animate-scale" data-token-id="${t.id}">
                ${t.text}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="syntax-actions-bar">
          <button class="btn btn-primary btn-lg" id="check-sentence-btn" ${this.trayTokens.length === 0 ? 'disabled' : ''}>
            <span>✓ Kontrol Et</span>
          </button>
          <button class="btn btn-secondary" id="hint-sentence-btn" title="Bir sonraki doğru kelime için ipucu al">
            💡 İpucu
          </button>
          <button class="btn btn-ghost" id="next-sentence-skip-btn">
            Atla →
          </button>
        </div>

        <!-- Result Box (Hidden until checked) -->
        <div class="syntax-result-container" id="syntax-result-box" style="display: ${this.isSubmitted ? 'block' : 'none'};">
          ${this.isSubmitted ? this.renderResultBox(current) : ''}
        </div>
      </div>
    `;
  }

  renderResultBox(current) {
    if (this.isCorrect) {
      return `
        <div class="result-card success animate-slide-up">
          <div class="result-header">
            <span class="result-icon">🎉</span>
            <div>
              <h3 class="result-title">Tebrikler! Cümle Dizilimi Kusursuz!</h3>
              <div class="result-xp-gained">+${this.resultData?.xpGained || 15} XP Kazandınız! Cümle kurma yetiniz gelişti.</div>
            </div>
          </div>

          <!-- Target Sentence & Audio Controls -->
          <div class="correct-sentence-display">
            <div class="target-sentence-text">${current.correct_sentence}</div>
            <div class="audio-controls-row">
              <button class="btn btn-sm btn-audio" id="speak-correct-normal" title="Normal Hızda Dinle">
                🔊 Normal Hız (1.0x)
              </button>
              <button class="btn btn-sm btn-audio" id="speak-correct-slow" title="Yavaş ve Net Dinle">
                🐢 Yavaş Hız (0.8x)
              </button>
            </div>
          </div>

          <!-- Grammatical Syntax Breakdown Table / Chips -->
          <div class="syntax-breakdown-box">
            <div class="breakdown-title">📌 Cümlenin Gramer ve Sözdizimi Analizi:</div>
            <div class="breakdown-chips-grid">
              ${(current.grammar_breakdown || []).map(b => `
                <div class="breakdown-card">
                  <div class="breakdown-token">${b.token}</div>
                  <div class="breakdown-tag tag-${(b.tag || 'S').toLowerCase()}">${b.tag || 'S'}</div>
                  <div class="breakdown-role">${b.role}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Turkish Pedagogical Explanation -->
          <div class="explanation-box">
            <strong>📖 Neden Bu Sıralama?</strong>
            <p>${current.explanation_tr}</p>
          </div>

          <div class="result-actions">
            <button class="btn btn-primary btn-lg" id="next-sentence-btn">
              <span>Sonraki Cümleye Geç →</span>
            </button>
          </div>
        </div>
      `;
    } else {
      const userSentence = this.trayTokens.map(t => t.text).join(' ');
      return `
        <div class="result-card error animate-shake">
          <div class="result-header">
            <span class="result-icon">⚠️</span>
            <div>
              <h3 class="result-title">Sözdiziminde (Cümle Sırasında) Hata Var</h3>
              <div class="result-subtitle">Kişisel Hata Defterinize eklendi. Tekrar deneyerek düzeltebilirsiniz.</div>
            </div>
          </div>

          <div class="comparison-box">
            <div class="comparison-row">
              <span class="comp-label red">Sizin Diziliminiz:</span>
              <span class="comp-val">${userSentence || '(Boş)'}</span>
            </div>
          </div>

          <!-- Turkish Hint Explanation -->
          <div class="explanation-box warning">
            <strong>💡 İpucu & Dilbilgisi Kuralı:</strong>
            <p>${current.explanation_tr}</p>
          </div>

          <div class="result-actions">
            <button class="btn btn-secondary" id="retry-sentence-btn">
              🔄 Tekrar Dene (Yeniden Diz)
            </button>
            <button class="btn btn-ghost" id="reveal-solution-btn">
              👁️ Doğru Çözümü Göster
            </button>
            <button class="btn btn-primary" id="next-sentence-btn">
              Sonraki Cümleye Geç →
            </button>
          </div>
        </div>
      `;
    }
  }

  renderEmptyState() {
    return `
      <div class="card empty-state-card">
        <div class="empty-icon">🧩</div>
        <h3>Bu filtreye uygun cümle bulunamadı</h3>
        <p>Lütfen farklı bir seviye veya kategori seçin.</p>
        <button class="btn btn-primary" id="reset-filters-btn">Filtreleri Sıfırla</button>
      </div>
    `;
  }

  bindEvents() {
    // 1. Level Tab clicks
    const lvlTabs = this.container.querySelectorAll('#level-tabs .pill-tab');
    lvlTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.activeLevel = tab.dataset.level;
        this.currentIndex = 0;
        this.applyFilter();
        this.renderLayout();
      });
    });

    // 2. Category Select
    const catSelect = this.container.querySelector('#category-select');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        this.activeCategory = e.target.value;
        this.currentIndex = 0;
        this.applyFilter();
        this.renderLayout();
      });
    }

    // 3. Reset filters
    const resetBtn = this.container.querySelector('#reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.activeLevel = 'all';
        this.activeCategory = 'all';
        this.currentIndex = 0;
        this.applyFilter();
        this.renderLayout();
      });
    }

    // 4. Rule Banner Toggle
    const banner = this.container.querySelector('.syntax-rule-banner');
    if (banner) {
      banner.querySelector('.rule-banner-header')?.addEventListener('click', () => {
        banner.classList.toggle('expanded');
      });
    }

    // 5. Available word chip click (Pool -> Tray)
    const pool = this.container.querySelector('#tokens-pool');
    if (pool) {
      pool.addEventListener('click', (e) => {
        const chip = e.target.closest('.word-chip.available');
        if (!chip) return;
        const tokenId = chip.dataset.tokenId;
        const tokenIdx = this.poolTokens.findIndex(t => t.id === tokenId);
        if (tokenIdx !== -1) {
          const [moved] = this.poolTokens.splice(tokenIdx, 1);
          this.trayTokens.push(moved);
          this.playClickSound();
          this.refreshTrayAndPool();
        }
      });
    }

    // 6. Placed word chip click (Tray -> Pool)
    const tray = this.container.querySelector('#sentence-tray');
    if (tray) {
      tray.addEventListener('click', (e) => {
        const chip = e.target.closest('.word-chip.placed');
        if (!chip) return;
        const tokenId = chip.dataset.tokenId;
        const tokenIdx = this.trayTokens.findIndex(t => t.id === tokenId);
        if (tokenIdx !== -1) {
          const [moved] = this.trayTokens.splice(tokenIdx, 1);
          this.poolTokens.push(moved);
          this.playClickSound();
          this.refreshTrayAndPool();
        }
      });
    }

    // 7. Clear Tray
    const clearBtn = this.container.querySelector('#clear-tray-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (this.trayTokens.length === 0) return;
        this.poolTokens = [...this.poolTokens, ...this.trayTokens];
        this.trayTokens = [];
        this.refreshTrayAndPool();
      });
    }

    // 8. Undo Token
    const undoBtn = this.container.querySelector('#undo-token-btn');
    if (undoBtn) {
      undoBtn.addEventListener('click', () => {
        if (this.trayTokens.length === 0) return;
        const last = this.trayTokens.pop();
        this.poolTokens.push(last);
        this.refreshTrayAndPool();
      });
    }

    // 9. Speak Turkish Prompt
    const speakPromptBtn = this.container.querySelector('#speak-prompt-btn');
    if (speakPromptBtn) {
      speakPromptBtn.addEventListener('click', () => {
        const current = this.filteredExercises[this.currentIndex];
        if (current) {
          // Speak Turkish prompt or show hint
          state.toast('İngilizce karşılığını yukarıdaki kelimelerle oluşturun!', 'info');
        }
      });
    }

    // 10. Hint Button
    const hintBtn = this.container.querySelector('#hint-sentence-btn');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => {
        const current = this.filteredExercises[this.currentIndex];
        if (!current) return;

        // Find what the next correct token should be
        const currentCount = this.trayTokens.length;
        if (currentCount < current.tokens.length) {
          const nextTarget = current.tokens[currentCount];
          const foundInPool = this.poolTokens.find(t => t.text.toLowerCase() === nextTarget.toLowerCase());
          if (foundInPool) {
            state.toast(`💡 İpucu: Bir sonraki kelime "${nextTarget}" olmalı.`, 'info');
            // Highlight chip in pool
            const chipEl = this.container.querySelector(`[data-token-id="${foundInPool.id}"]`);
            if (chipEl) {
              chipEl.classList.add('hint-highlight');
              setTimeout(() => chipEl.classList.remove('hint-highlight'), 2000);
            }
          } else {
            state.toast('💡 İpucu: Şu ana kadar yerleştirdiğiniz kelimelerde bir sıra hatası olabilir.', 'warning');
          }
        } else {
          state.toast('Tüm kelimeleri yerleştirdiniz. "Kontrol Et" butonuna tıklayın!', 'info');
        }
      });
    }

    // 11. Check Sentence Button
    const checkBtn = this.container.querySelector('#check-sentence-btn');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => this.handleCheck());
    }

    // 12. Skip / Next Button
    const skipBtn = this.container.querySelector('#next-sentence-skip-btn');
    if (skipBtn) {
      skipBtn.addEventListener('click', () => this.goToNext());
    }

    // 13. Dynamic Result Box Buttons
    this.bindResultBoxEvents();
  }

  bindResultBoxEvents() {
    // Next Sentence Button
    const nextBtn = this.container.querySelector('#next-sentence-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.goToNext());
    }

    // Retry Sentence Button
    const retryBtn = this.container.querySelector('#retry-sentence-btn');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        this.firstAttempt = false;
        this.isSubmitted = false;
        this.loadCurrentExercise();
        this.renderLayout();
      });
    }

    // Reveal Solution Button
    const revealBtn = this.container.querySelector('#reveal-solution-btn');
    if (revealBtn) {
      revealBtn.addEventListener('click', () => {
        const current = this.filteredExercises[this.currentIndex];
        if (!current) return;
        this.trayTokens = current.tokens.map((text, idx) => ({ id: `token-sol-${idx}`, text }));
        this.poolTokens = [];
        this.handleCheck();
      });
    }

    // TTS Buttons
    const speakNormalBtn = this.container.querySelector('#speak-correct-normal');
    if (speakNormalBtn) {
      speakNormalBtn.addEventListener('click', () => {
        const current = this.filteredExercises[this.currentIndex];
        if (current) speech.speak(current.correct_sentence, { rate: 1.0 });
      });
    }

    const speakSlowBtn = this.container.querySelector('#speak-correct-slow');
    if (speakSlowBtn) {
      speakSlowBtn.addEventListener('click', () => {
        const current = this.filteredExercises[this.currentIndex];
        if (current) speech.speak(current.correct_sentence, { rate: 0.75 });
      });
    }
  }

  refreshTrayAndPool() {
    const current = this.filteredExercises[this.currentIndex];
    const trayEl = this.container.querySelector('#sentence-tray');
    const poolEl = this.container.querySelector('#tokens-pool');
    const checkBtn = this.container.querySelector('#check-sentence-btn');
    const undoBtn = this.container.querySelector('#undo-token-btn');
    const clearBtn = this.container.querySelector('#clear-tray-btn');

    if (trayEl) {
      if (this.trayTokens.length === 0) {
        trayEl.classList.add('empty');
        trayEl.innerHTML = `
          <div class="tray-placeholder">
            <span class="placeholder-icon">👇</span>
            <span>Aşağıdaki kelime bloklarına tıklayarak cümlenizi kurun...</span>
          </div>
        `;
      } else {
        trayEl.classList.remove('empty');
        trayEl.innerHTML = this.trayTokens.map((t, idx) => `
          <button class="word-chip placed animate-pop" data-token-id="${t.id}" data-tray-index="${idx}" title="Kaldırmak için tıklayın">
            <span class="chip-text">${t.text}</span>
            <span class="chip-remove">×</span>
          </button>
        `).join('');
      }
    }

    if (poolEl) {
      if (this.poolTokens.length === 0) {
        poolEl.innerHTML = `<div class="pool-empty-note">Tüm kelimeler cümleye yerleştirildi ✨</div>`;
      } else {
        poolEl.innerHTML = this.poolTokens.map(t => `
          <button class="word-chip available animate-scale" data-token-id="${t.id}">
            ${t.text}
          </button>
        `).join('');
      }
    }

    if (checkBtn) checkBtn.disabled = this.trayTokens.length === 0;
    if (undoBtn) undoBtn.disabled = this.trayTokens.length === 0;
    if (clearBtn) clearBtn.disabled = this.trayTokens.length === 0;
  }

  async handleCheck() {
    const current = this.filteredExercises[this.currentIndex];
    if (!current) return;

    const constructedSentence = this.trayTokens.map(t => t.text).join(' ');
    try {
      const res = await api.submitSyntaxExercise(current.id, constructedSentence, this.firstAttempt);
      this.isSubmitted = true;
      this.isCorrect = res.isCorrect;
      this.resultData = res;

      // Update state
      if (res.sentenceFormationSkill) {
        const skills = state.get('skills') || {};
        skills.sentence_formation = res.sentenceFormationSkill;
        state.set('skills', skills);
      }

      // Check achievements
      const stats = state.get('stats') || {};
      const skills = state.get('skills') || {};
      checkAndUnlockBadges(stats, skills);

      // Play audio feedback
      if (res.isCorrect) {
        this.playSuccessChime();
        // Automatically speak correct sentence
        speech.speak(current.correct_sentence, { rate: 1.0 });
      } else {
        this.playErrorSound();
      }

      // Re-render layout to display result card
      this.renderLayout();

      // Scroll smoothly to result
      const resultBox = this.container.querySelector('#syntax-result-box');
      if (resultBox) {
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } catch (err) {
      state.toast(`Hata: ${err.message}`, 'error');
    }
  }

  goToNext() {
    if (this.currentIndex + 1 < this.filteredExercises.length) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
      state.toast('Tebrikler! Bu kategorideki tüm cümleleri tamamladınız!', 'success');
    }
    this.loadCurrentExercise();
    this.renderLayout();
  }

  playClickSound() {
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.audioCtx = new AudioContext();
      }
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, this.audioCtx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch {}
  }

  playSuccessChime() {
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.audioCtx = new AudioContext();
      }
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const now = this.audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.35);
      });
    } catch {}
  }

  playErrorSound() {
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.audioCtx = new AudioContext();
      }
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(140, now + 0.18);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch {}
  }

  destroy() {
    if (this.audioCtx && this.audioCtx.state !== 'closed') {
      try {
        this.audioCtx.close();
      } catch {}
    }
  }
}
