/**
 * Spaced Repetition (SRS) Vocabulary Studio & Massive 1,000+ Dictionary
 * SuperMemo SM-2 spaced recall algorithm + 1,000+ CEFR master archive + Live Internet Dictionary
 */
import { api } from '../api.js';
import { state } from '../state.js';
import { speech } from '../speech.js';
import { achievementManager } from '../achievements.js';

export class VocabularyView {
  constructor() {
    this.container = null;
    this.mode = 'review'; // 'review' | 'dictionary' | 'online'
    this.reviewItems = [];
    this.currentIndex = 0;
    this.isCardFlipped = false;
    this.reviewLevel = 'all'; // 'all' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
    this.dueByLevel = { all: 0, A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
    this.totalByLevel = { all: 0, A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
    this.dictionaryItems = [];
    this.searchQuery = '';
    this.levelFilter = 'all';
    this.onlineSearchResult = null;
    this.isSearchingOnline = false;
    this.onlineSearchError = null;
    this.audioElement = null;
    this.keyHandler = null;
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>1.000+ kelimelik CEFR kütüphanesi ve çalışma kartlarınız yükleniyor...</p>
      </div>
    `;

    try {
      await this.loadQueueData();
      const dictData = await api.getVocabularyItems();
      this.dictionaryItems = dictData.items || [];

      this.renderContent();
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Kelimeler yüklenemedi</h3>
          <p>${err.message}</p>
          <button class="btn btn-primary" id="retry-vocab-btn">Tekrar Dene</button>
        </div>
      `;
      document.getElementById('retry-vocab-btn')?.addEventListener('click', () => this.render(viewport));
    }
  }

  async loadQueueData() {
    const queueData = await api.getReviewQueue(this.reviewLevel);
    this.reviewItems = queueData.items || [];
    this.dueByLevel = queueData.dueByLevel || { all: 0, A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
    this.totalByLevel = queueData.totalByLevel || { all: 0, A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
  }

  getActiveReviewItems() {
    if (!this.reviewLevel || this.reviewLevel === 'all') {
      return this.reviewItems;
    }
    return this.reviewItems.filter(i => (i.cefr_level || '').toUpperCase() === this.reviewLevel.toUpperCase());
  }

  renderContent() {
    const totalLibraryCount = this.dictionaryItems.length || this.totalByLevel.all || 1002;
    const totalDueCount = this.dueByLevel.all || this.reviewItems.length;

    this.container.innerHTML = `
      <div class="vocab-layout">
        <!-- Mode Switcher & Stats Header -->
        <div class="vocab-header card">
          <div class="vocab-header-left">
            <h1 class="vocab-title">Akıllı Kelime Kartları & Sözlük Arşivi</h1>
            <p class="vocab-subtitle">1.000+ kelimelik devasa CEFR arşivi, seviye bazlı çalışma & canlı internet sözlüğü</p>
          </div>
          <div class="vocab-mode-toggles">
            <button class="btn ${this.mode === 'review' ? 'btn-primary' : 'btn-secondary'}" id="toggle-review-mode">
              <span>🗂️ Tekrar Bekleyenler</span>
              <span class="btn-badge">${totalDueCount}</span>
            </button>
            <button class="btn ${this.mode === 'dictionary' ? 'btn-primary' : 'btn-secondary'}" id="toggle-dict-mode">
              <span>📖 Kelime Kütüphanesi</span>
              <span class="btn-badge">${totalLibraryCount}</span>
            </button>
            <button class="btn ${this.mode === 'online' ? 'btn-primary' : 'btn-secondary'}" id="toggle-online-mode">
              <span>🌐 İnternet Sözlüğü</span>
            </button>
          </div>
        </div>

        <!-- Quick Level Pack Loader Bar -->
        <div class="vocab-pack-toolbar card">
          <div class="pack-toolbar-info">
            <span class="pack-toolbar-icon">⚡</span>
            <div>
              <strong>Hızlı Seviye Paketi Çek:</strong>
              <span class="pack-toolbar-sub">Arşivden dilediğiniz seviyeden 25 taze kelimeyi anında çalışma kuyruğuna alın</span>
            </div>
          </div>
          <div class="pack-btn-group">
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="A1" title="25 Temel A1 Kelimesi Çek">📥 +A1 Temel (25)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="A2" title="25 Günlük Yaşam Kelimesi Çek">📥 +A2 Günlük (25)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="B1" title="25 Orta Seviye Kelimesi Çek">📥 +B1 Orta (25)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="B2" title="25 İleri Seviye Kelimesi Çek">📥 +B2 İleri (25)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="C1" title="25 Uzman Seviye Kelimesi Çek">📥 +C1 Uzman (25)</button>
            <button class="btn btn-primary btn-sm pack-load-btn" data-level="all" title="Her Seviyeden Karışık 25 Kelime Çek">🌟 +Karışık (25)</button>
          </div>
        </div>

        <div class="vocab-body" id="vocab-body">
          ${this.mode === 'review' ? this.renderReviewArea() : (this.mode === 'dictionary' ? this.renderDictionaryArea() : this.renderOnlineArea())}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  renderReviewArea() {
    const levels = [
      { key: 'all', label: 'Tümü', icon: '🌟' },
      { key: 'A1', label: 'A1 Temel', icon: '🌱' },
      { key: 'A2', label: 'A2 Günlük', icon: '🌿' },
      { key: 'B1', label: 'B1 Orta', icon: '🚀' },
      { key: 'B2', label: 'B2 İleri', icon: '💎' },
      { key: 'C1', label: 'C1 Uzman', icon: '👑' }
    ];

    const activeItems = this.getActiveReviewItems();

    // 1. Toolbar with strict level filter tabs and shuffle / draw actions
    const toolbarHtml = `
      <div class="review-toolbar card">
        <div class="review-level-tabs">
          ${levels.map(lvl => {
            const count = this.dueByLevel[lvl.key] !== undefined ? this.dueByLevel[lvl.key] : 0;
            const isActive = this.reviewLevel === lvl.key;
            return `
              <button class="review-level-btn ${isActive ? 'active' : ''}" data-review-level="${lvl.key}" title="${lvl.label} seviyesindeki kelimeleri göster">
                <span>${lvl.icon} ${lvl.label}</span>
                <span class="badge-count">${count}</span>
              </button>
            `;
          }).join('')}
        </div>

        <div class="review-actions-group">
          <button class="btn btn-secondary btn-sm btn-shuffle" id="btn-shuffle-cards" title="Kartların sırasını rastgele karıştır">
            🔀 Karıştır (Shuffle)
          </button>
          <button class="btn btn-secondary btn-sm btn-draw-fresh" id="btn-draw-fresh" title="${this.reviewLevel === 'all' ? 'Tüm arşivden' : this.reviewLevel + ' seviyesinden'} 15 yeni kelime getir">
            ✨ +15 Yeni Kelime
          </button>
          <button class="btn btn-secondary btn-sm" id="btn-reset-level" title="${this.reviewLevel === 'all' ? 'Tüm kelimeleri' : this.reviewLevel + ' seviyesini'} sıfırlayıp baştan çalış">
            🔄 Sıfırla
          </button>
        </div>
      </div>
    `;

    // 2. If no words are due for this specific active level
    if (activeItems.length === 0) {
      const levelTitle = this.reviewLevel === 'all' ? 'Tüm Seviyelerde' : `${this.reviewLevel} Seviyesinde`;
      const libraryCount = this.totalByLevel[this.reviewLevel] || this.totalByLevel.all || 0;

      return `
        ${toolbarHtml}
        <div class="card empty-review-card">
          <div class="empty-icon">🎉</div>
          <h2>${levelTitle} Tekrar Bekleyen Kart Kalmadı!</h2>
          <p>Harika ilerleme! ${this.reviewLevel === 'all' ? 'Kuyruktaki tüm kartları gözden geçirdiniz.' : `${this.reviewLevel} seviyesindeki tüm aktif kartlarınızı tamamladınız.`}</p>
          <p style="color: var(--text-muted); font-size: 13.5px; margin-top: 4px;">
            ${this.reviewLevel === 'all' ? '1.000+' : libraryCount} kelimelik kütüphanemizden hemen yeni kelimeler çekebilir veya çalıştığınız kelimeleri sıfırlayarak baştan tekrar edebilirsiniz.
          </p>

          <div class="empty-pack-picker" style="margin-top: 1.5rem;">
            <h4>Hemen Çalışmaya Devam Edin:</h4>
            <div class="empty-pack-buttons" style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
              <button class="btn btn-primary" id="btn-empty-draw-fresh">
                ✨ Arşivden 15 Yeni ${this.reviewLevel === 'all' ? '' : this.reviewLevel} Kelimesi Getir
              </button>
              <button class="btn btn-secondary" id="btn-empty-reset-level">
                🔄 ${this.reviewLevel === 'all' ? 'Tüm Kelimeleri' : this.reviewLevel + ' Seviyesini'} Baştan Sıfırla
              </button>
            </div>
          </div>

          <div class="empty-actions-row">
            <button class="btn btn-secondary" id="switch-to-dict-btn">📖 Tüm Kelime Kütüphanesini Gör (${this.dictionaryItems.length} Kelime) →</button>
            <button class="btn btn-secondary" id="switch-to-online-btn">🌐 İnternetten Yeni Kelime Bul →</button>
          </div>
        </div>
      `;
    }

    if (this.currentIndex >= activeItems.length) {
      this.currentIndex = 0;
    }

    const item = activeItems[this.currentIndex];
    const examples = item.examples ? (typeof item.examples === 'string' ? JSON.parse(item.examples) : item.examples) : (item.example_sentences || []);
    const collocations = item.collocations ? (typeof item.collocations === 'string' ? JSON.parse(item.collocations) : item.collocations) : [];

    return `
      ${toolbarHtml}
      <div class="flashcard-container">
        <!-- Progress Counter -->
        <div class="flashcard-counter">
          <span>${this.reviewLevel === 'all' ? 'Tüm Seviyeler' : `${this.reviewLevel} Seviyesi`}: Kelime <strong>${this.currentIndex + 1}</strong> / ${activeItems.length}</span>
          <span class="cefr-tag ${item.cefr_level || 'A1'}">${item.cefr_level || 'A1'}</span>
        </div>

        <!-- 3D Flippable Flashcard -->
        <div class="flashcard ${this.isCardFlipped ? 'flipped' : ''}" id="flashcard-element">
          <!-- FRONT FACE -->
          <div class="flashcard-face flashcard-front">
            <div class="card-meta">
              <span class="pos-badge">${item.part_of_speech || 'kelime'}</span>
              <button class="tts-play-btn" id="card-tts-btn" title="Telaffuzu dinle">🔊 Dinle</button>
            </div>

            <div class="target-word">${item.word}</div>
            <div class="phonetic-ipa">${item.phonetic || ''}</div>
            
            <div class="card-prompt-hint">Karta tıklayarak veya Boşluk (Space) tuşuna basarak Türkçe anlamını görün 🔄</div>
          </div>

          <!-- BACK FACE -->
          <div class="flashcard-face flashcard-back">
            <div class="card-meta">
              <span class="pos-badge">${item.part_of_speech || 'kelime'}</span>
              <button class="tts-play-btn" id="card-back-tts-btn" title="Tekrar dinle">🔊 Dinle</button>
            </div>

            <div class="target-word">${item.word}</div>
            <div class="phonetic-ipa">${item.phonetic || ''}</div>

            <div class="def-box">
              <div class="def-tr"><strong>🇹🇷 Türkçe Anlamı:</strong> ${item.definition_tr || item.definition || ''}</div>
              ${item.definition_en ? `<div class="def-en"><strong>İngilizce Açıklama:</strong> ${item.definition_en}</div>` : ''}
            </div>

            ${collocations.length > 0 ? `
              <div class="collocations-box">
                <span class="box-label">Sık Kullanılan Birliktelikler (Collocations):</span>
                <div class="collocation-tags">
                  ${collocations.slice(0, 5).map(c => `<span class="colloc-tag">${c}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            ${examples.length > 0 ? `
              <div class="example-box">
                <span class="box-label">Örnek Cümle:</span>
                <div class="example-sentence">"${examples[0]}"</div>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Card flip helper button -->
        <button class="btn btn-secondary btn-sm" id="btn-manual-flip" style="margin: 0 auto; display: block;">
          🔄 ${this.isCardFlipped ? 'Kartın Önünü Gör' : 'Kartı Çevir (Anlamı Gör)'}
        </button>

        <!-- Rating Buttons (Only visible when card is flipped) -->
        <div class="rating-bar" id="rating-bar" style="visibility: ${this.isCardFlipped ? 'visible' : 'hidden'};">
          <div class="rating-prompt">Bu kelimeyi ne kadar iyi hatırladınız? (Klavye: 1, 2, 3, 4)</div>
          <div class="rating-buttons-group">
            <button class="rating-btn again" data-rating="0">
              <span class="rating-title">🔄 Tekrar Et</span>
              <span class="rating-interval">Kuyruğun sonuna ekle</span>
            </button>
            <button class="rating-btn hard" data-rating="1">
              <span class="rating-title">⚠️ Zorlandım</span>
              <span class="rating-interval">1-2 gün</span>
            </button>
            <button class="rating-btn good" data-rating="2">
              <span class="rating-title">👍 İyi Hatırladım</span>
              <span class="rating-interval">3-4 gün</span>
            </button>
            <button class="rating-btn easy" data-rating="3">
              <span class="rating-title">🌟 Çok Kolaydı</span>
              <span class="rating-interval">7+ gün</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderDictionaryArea() {
    const levels = ['all', 'A1', 'A2', 'B1', 'B2', 'C1'];

    const filtered = this.dictionaryItems.filter(item => {
      const matchesSearch = !this.searchQuery ||
        item.word.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (item.definition_tr && item.definition_tr.toLowerCase().includes(this.searchQuery.toLowerCase()));
      const matchesLevel = this.levelFilter === 'all' || (item.cefr_level || '').toUpperCase() === this.levelFilter.toUpperCase();
      return matchesSearch && matchesLevel;
    });

    return `
      <div class="dict-container card">
        <div class="dict-toolbar">
          <div class="dict-search-row">
            <input type="text" class="dict-search-input" id="dict-search-input" placeholder="1.000+ kelimelik kütüphanede ara (İngilizce veya Türkçe)..." value="${this.searchQuery}">
            <button class="btn btn-primary btn-sm" id="btn-quick-online-search" title="Bu kelimeyi internet sözlüğünde ara">
              🌐 İnternette Ara
            </button>
          </div>
          
          <div class="level-filter-tabs">
            ${levels.map(l => {
              const count = l === 'all' ? this.dictionaryItems.length : this.dictionaryItems.filter(x => (x.cefr_level || '').toUpperCase() === l).length;
              return `
                <button class="level-tab ${this.levelFilter === l ? 'active' : ''}" data-level="${l}">
                  ${l === 'all' ? `Tümü (${count})` : `${l} (${count})`}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="dict-table-wrap">
          <table class="dict-table">
            <thead>
              <tr>
                <th>Kelime</th>
                <th>Seviye</th>
                <th>Okunuş (IPA)</th>
                <th>Türkçe Anlamı</th>
                <th>İngilizce Tanım & Örnek</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="6" style="text-align: center; padding: 2rem;">
                    <p style="color: var(--text-muted); margin-bottom: 1rem;">"${this.searchQuery}" arşivde bulunamadı.</p>
                    <button class="btn btn-primary" id="btn-search-online-now">🌐 İnternet Sözlüğünden Ara & Ekle</button>
                  </td>
                </tr>
              ` : filtered.slice(0, 150).map(item => {
                const ex = item.examples ? (typeof item.examples === 'string' ? JSON.parse(item.examples) : item.examples) : (item.example_sentences || []);
                return `
                  <tr>
                    <td class="dict-word-cell">
                      <strong>${item.word}</strong>
                      <span class="dict-pos">${item.part_of_speech || ''}</span>
                    </td>
                    <td><span class="cefr-tag ${item.cefr_level || 'A1'}">${item.cefr_level || 'A1'}</span></td>
                    <td class="dict-phonetic">${item.phonetic || '-'}</td>
                    <td class="dict-def-tr"><strong>${item.definition_tr || '-'}</strong></td>
                    <td class="dict-def-en">
                      <div>${item.definition_en || '-'}</div>
                      ${ex.length > 0 ? `<div class="dict-row-example">"${ex[0]}"</div>` : ''}
                    </td>
                    <td>
                      <div class="dict-actions-cell">
                        <button class="dict-tts-btn" data-word="${item.word}" title="Telaffuz Dinle">🔊</button>
                        <button class="btn btn-secondary btn-xs add-to-due-btn" data-word="${item.word}" title="Bu kelimeyi çalışma kartlarına ekle">
                          ➕ Çalış
                        </button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
          ${filtered.length > 150 ? `
            <div style="text-align: center; padding: 12px; font-size: 13px; color: var(--text-muted);">
              Toplam ${filtered.length} kelimeden ilk 150 tanesi gösteriliyor. Aramayı daraltmak için yukarıdaki kutuyu kullanabilirsiniz.
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  renderOnlineArea() {
    return `
      <div class="online-dict-container card">
        <div class="online-search-header">
          <h2>🌐 Canlı İnternet Sözlüğü (500.000+ Kelime)</h2>
          <p>Dünya çapındaki Oxford & Cambridge uyumlu API ile dilediğiniz herhangi bir İngilizce kelimenin sesli telaffuzunu, detaylı anlamlarını ve örneklerini anında getirin.</p>
          
          <div class="online-search-bar">
            <input type="text" class="dict-search-input online-input" id="online-word-input" placeholder="Aramak istediğiniz İngilizce kelimeyi yazın (ör: serendipity, resilient, accomplish)..." value="${this.searchQuery}">
            <button class="btn btn-primary" id="btn-submit-online-search">
              🔍 Sözlükte Bul
            </button>
          </div>
        </div>

        <div id="online-search-status">
          ${this.isSearchingOnline ? `
            <div class="online-loading-spinner">
              <div class="spinner"></div>
              <p>"${this.searchQuery}" internet sözlük arşivinden getiriliyor...</p>
            </div>
          ` : ''}
        </div>

        ${this.onlineSearchError ? `
          <div class="card error-card" style="margin-top: 1rem;">
            <p>${this.onlineSearchError}</p>
          </div>
        ` : ''}

        ${this.onlineSearchResult ? this.renderOnlineResultCard(this.onlineSearchResult) : `
          <div class="online-suggestions card" style="margin-top: 1.5rem; background: rgba(255, 255, 255, 0.02);">
            <h4>💡 Popüler Arama Önerileri:</h4>
            <div class="suggestion-chips">
              <span class="suggestion-chip" data-word="resilient">resilient</span>
              <span class="suggestion-chip" data-word="accomplish">accomplish</span>
              <span class="suggestion-chip" data-word="serendipity">serendipity</span>
              <span class="suggestion-chip" data-word="innovative">innovative</span>
              <span class="suggestion-chip" data-word="eloquent">eloquent</span>
              <span class="suggestion-chip" data-word="perseverance">perseverance</span>
              <span class="suggestion-chip" data-word="comprehensive">comprehensive</span>
              <span class="suggestion-chip" data-word="phenomenon">phenomenon</span>
            </div>
          </div>
        `}
      </div>
    `;
  }

  renderOnlineResultCard(result) {
    return `
      <div class="online-result-card card">
        <div class="online-result-top">
          <div>
            <div class="online-word-name">
              <span>${result.word}</span>
              <span class="pos-badge">${result.part_of_speech}</span>
              <span class="online-phonetic-badge">${result.phonetic || ''}</span>
            </div>
          </div>

          <div class="online-actions-group">
            <button class="tts-play-btn" id="play-online-audio-btn" data-audio="${result.audioUrl || ''}" data-word="${result.word}">
              🔊 Telaffuzu Dinle
            </button>
            <button class="btn btn-primary" id="btn-save-online-word">
              ➕ Kartlarıma Ekle (+ Flashcard)
            </button>
          </div>
        </div>

        <div class="online-result-body">
          <div class="online-field-group">
            <label class="online-field-label">🇹🇷 Türkçe Anlamı (Düzenleyebilirsiniz):</label>
            <input type="text" class="dict-search-input online-tr-input" id="online-tr-value" value="${result.definition_tr || ''}" />
          </div>

          <div class="online-field-group">
            <label class="online-field-label">📖 İngilizce Tanım:</label>
            <div class="online-def-text">${result.definition_en}</div>
          </div>

          ${result.example ? `
            <div class="online-field-group">
              <label class="online-field-label">💬 Örnek Cümle:</label>
              <div class="online-example-text">"${result.example}"</div>
            </div>
          ` : ''}

          ${result.meanings && result.meanings.length > 1 ? `
            <div class="online-other-meanings">
              <label class="online-field-label">📚 Ek Tanımlar ve Anlamlar:</label>
              <ul>
                ${result.meanings.slice(1, 4).map(m => `
                  <li>
                    <strong>(${m.partOfSpeech})</strong> ${m.definition}
                    ${m.example ? `<div style="font-size: 0.85rem; color: var(--text-muted);">Örnek: "${m.example}"</div>` : ''}
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  bindEvents() {
    // Mode toggles
    document.getElementById('toggle-review-mode')?.addEventListener('click', () => {
      this.mode = 'review';
      this.renderContent();
    });

    document.getElementById('toggle-dict-mode')?.addEventListener('click', () => {
      this.mode = 'dictionary';
      this.renderContent();
    });

    document.getElementById('toggle-online-mode')?.addEventListener('click', () => {
      this.mode = 'online';
      this.renderContent();
    });

    document.getElementById('switch-to-dict-btn')?.addEventListener('click', () => {
      this.mode = 'dictionary';
      this.renderContent();
    });

    document.getElementById('switch-to-online-btn')?.addEventListener('click', () => {
      this.mode = 'online';
      this.renderContent();
    });

    // Review Level Filter Tabs (Strict Level Selection)
    document.querySelectorAll('.review-level-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const lvl = btn.dataset.reviewLevel || 'all';
        this.reviewLevel = lvl;
        this.currentIndex = 0;
        this.isCardFlipped = false;
        await this.loadQueueData();
        const body = document.getElementById('vocab-body');
        if (body) body.innerHTML = this.renderReviewArea();
        this.bindEvents();
      });
    });

    // Shuffle active cards
    document.getElementById('btn-shuffle-cards')?.addEventListener('click', () => {
      this.shuffleActiveCards();
    });

    // Draw Fresh Words button (+15)
    document.getElementById('btn-draw-fresh')?.addEventListener('click', async () => {
      await this.handleDrawFreshWords(15);
    });

    document.getElementById('btn-empty-draw-fresh')?.addEventListener('click', async () => {
      await this.handleDrawFreshWords(15);
    });

    // Reset Level Queue button
    document.getElementById('btn-reset-level')?.addEventListener('click', async () => {
      await this.handleResetLevel();
    });

    document.getElementById('btn-empty-reset-level')?.addEventListener('click', async () => {
      await this.handleResetLevel();
    });

    // Pack load buttons (from top toolbar)
    document.querySelectorAll('.pack-load-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const level = btn.dataset.level || 'all';
        try {
          const res = await api.drawFreshWords(level, 25);
          state.showToast(`✅ ${level === 'all' ? 'Arşivden karışık' : level + ' seviyesinden'} ${res.activatedCount || 25} kelime çalışma kartlarınıza eklendi!`, 'success');
          this.reviewLevel = level;
          this.currentIndex = 0;
          this.isCardFlipped = false;
          await this.loadQueueData();
          this.mode = 'review';
          this.renderContent();
        } catch (e) {
          state.showToast('Paket çekilemedi: ' + e.message, 'error');
        }
      });
    });

    // Add to due button in dictionary table
    document.querySelectorAll('.add-to-due-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const word = btn.dataset.word;
        try {
          await api.addCustomWord(word, '', 'A1');
          state.showToast(`"${word}" kelime kartlarına eklendi!`, 'success');
          await this.loadQueueData();
          const badge = document.querySelector('#toggle-review-mode .btn-badge');
          if (badge) badge.textContent = this.dueByLevel.all || this.reviewItems.length;
        } catch (e) {
          state.showToast('Eklenemedi: ' + e.message, 'error');
        }
      });
    });

    // Card Flip & Rating Events
    const flashcard = document.getElementById('flashcard-element');
    flashcard?.addEventListener('click', () => this.toggleFlip());

    document.getElementById('btn-manual-flip')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFlip();
    });

    document.querySelectorAll('.rating-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const rating = parseInt(btn.dataset.rating, 10);
        this.submitRating(rating);
      });
    });

    // TTS Pronunciation Buttons
    document.getElementById('card-tts-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const activeItems = this.getActiveReviewItems();
      const item = activeItems[this.currentIndex];
      if (item) speech.speak(item.word);
    });

    document.getElementById('card-back-tts-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const activeItems = this.getActiveReviewItems();
      const item = activeItems[this.currentIndex];
      if (item) speech.speak(item.word);
    });

    // Dictionary TTS buttons
    document.querySelectorAll('.dict-tts-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const w = btn.dataset.word;
        if (w) speech.speak(w);
      });
    });

    // Dictionary Level filter tabs
    document.querySelectorAll('.level-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.levelFilter = tab.dataset.level;
        const body = document.getElementById('vocab-body');
        if (body) body.innerHTML = this.renderDictionaryArea();
        this.bindEvents();
      });
    });

    // Dictionary Search Input
    const searchInput = document.getElementById('dict-search-input');
    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      const body = document.getElementById('vocab-body');
      if (body) body.innerHTML = this.renderDictionaryArea();
      this.bindEvents();
      const newIn = document.getElementById('dict-search-input');
      if (newIn) {
        newIn.focus();
        newIn.setSelectionRange(newIn.value.length, newIn.value.length);
      }
    });

    // Quick online search button from dictionary toolbar
    document.getElementById('btn-quick-online-search')?.addEventListener('click', () => {
      const q = (document.getElementById('dict-search-input')?.value || this.searchQuery || '').trim();
      if (!q) {
        state.showToast('Lütfen aranacak bir kelime girin.', 'info');
        return;
      }
      this.mode = 'online';
      this.searchQuery = q;
      this.renderContent();
      this.performOnlineSearch(q);
    });

    document.getElementById('btn-search-online-now')?.addEventListener('click', () => {
      this.mode = 'online';
      this.renderContent();
      if (this.searchQuery) this.performOnlineSearch(this.searchQuery);
    });

    // Online Search Input & Button
    document.getElementById('btn-submit-online-search')?.addEventListener('click', () => {
      const val = (document.getElementById('online-word-input')?.value || '').trim();
      if (!val) {
        state.showToast('Lütfen aranacak bir kelime girin.', 'info');
        return;
      }
      this.performOnlineSearch(val);
    });

    document.getElementById('online-word-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = (e.target.value || '').trim();
        if (val) this.performOnlineSearch(val);
      }
    });

    // Suggestion chips in online mode
    document.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const w = chip.dataset.word;
        this.performOnlineSearch(w);
      });
    });

    // Play online audio
    document.getElementById('play-online-audio-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const audioUrl = e.currentTarget.dataset.audio;
      const word = e.currentTarget.dataset.word;

      if (audioUrl) {
        try {
          if (!this.audioElement) {
            this.audioElement = new Audio();
          }
          this.audioElement.src = audioUrl;
          this.audioElement.play().catch(() => {
            if (word) speech.speak(word);
          });
        } catch (err) {
          if (word) speech.speak(word);
        }
      } else if (word) {
        speech.speak(word);
      }
    });

    // Save online word to flashcards
    document.getElementById('btn-save-online-word')?.addEventListener('click', async () => {
      if (!this.onlineSearchResult) return;
      const trInput = document.getElementById('online-tr-value');
      const trText = trInput ? trInput.value.trim() : this.onlineSearchResult.definition_tr;
      const res = this.onlineSearchResult;

      try {
        await api.addCustomWord(res.word, trText, 'B1', res.example || '', res.phonetic, res.part_of_speech);
        state.showToast(`🎉 "${res.word}" kelimesi başarıyla kartlarınıza eklendi ve aktif edildi!`, 'success');
        
        await this.loadQueueData();
        const dictData = await api.getVocabularyItems();
        this.dictionaryItems = dictData.items || [];
        
        this.mode = 'review';
        this.renderContent();
      } catch (err) {
        state.showToast('Kelime eklenirken hata: ' + err.message, 'error');
      }
    });

    // Bind Keyboard Shortcuts for Review
    if (this.keyHandler) {
      window.removeEventListener('keydown', this.keyHandler);
    }
    this.keyHandler = (e) => {
      if (this.mode !== 'review') return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        this.toggleFlip();
      } else if (this.isCardFlipped) {
        if (e.key === '1') this.submitRating(0);
        else if (e.key === '2') this.submitRating(1);
        else if (e.key === '3') this.submitRating(2);
        else if (e.key === '4') this.submitRating(3);
      }
    };
    window.addEventListener('keydown', this.keyHandler);
  }

  shuffleActiveCards() {
    const active = this.getActiveReviewItems();
    if (active.length === 0) return;

    // Fisher-Yates shuffle
    for (let i = active.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [active[i], active[j]] = [active[j], active[i]];
    }

    this.currentIndex = 0;
    this.isCardFlipped = false;
    const body = document.getElementById('vocab-body');
    if (body) body.innerHTML = this.renderReviewArea();
    this.bindEvents();
    state.showToast('🔀 Kartların sırası rastgele karıştırıldı!', 'info');
  }

  async handleDrawFreshWords(count = 15) {
    try {
      const lvl = this.reviewLevel || 'all';
      const res = await api.drawFreshWords(lvl, count);
      state.showToast(`✨ ${lvl === 'all' ? 'Arşivden' : lvl + ' seviyesinden'} ${res.activatedCount} yeni kelime kuyruğunuza eklendi!`, 'success');
      await this.loadQueueData();
      this.currentIndex = 0;
      this.isCardFlipped = false;
      const body = document.getElementById('vocab-body');
      if (body) body.innerHTML = this.renderReviewArea();
      this.bindEvents();
    } catch (e) {
      state.showToast('Yeni kelime çekilemedi: ' + e.message, 'error');
    }
  }

  async handleResetLevel() {
    const lvl = this.reviewLevel || 'all';
    const msg = lvl === 'all'
      ? 'Tüm seviyelerdeki kelimeleri baştan çalışmak üzere sıfırlamak istiyor musunuz?'
      : `${lvl} seviyesindeki tüm kelimeleri baştan çalışmak üzere sıfırlamak istiyor musunuz?`;

    if (!confirm(msg)) return;

    try {
      const res = await api.resetLevelQueue(lvl);
      state.showToast(`🔄 ${lvl === 'all' ? 'Tüm seviyeler' : lvl + ' seviyesi'} baştan çalışmaya hazırlandı! (${res.resetCount} kelime aktif)`, 'success');
      await this.loadQueueData();
      this.shuffleActiveCards();
    } catch (e) {
      state.showToast('Sıfırlama başarısız: ' + e.message, 'error');
    }
  }

  async performOnlineSearch(word) {
    this.searchQuery = word;
    this.isSearchingOnline = true;
    this.onlineSearchError = null;
    this.onlineSearchResult = null;

    const statusEl = document.getElementById('online-search-status');
    if (statusEl) {
      statusEl.innerHTML = `
        <div class="online-loading-spinner">
          <div class="spinner"></div>
          <p>"${word}" internet sözlük arşivinden getiriliyor...</p>
        </div>
      `;
    }

    try {
      const data = await api.searchOnlineDictionary(word);
      this.onlineSearchResult = data;
      this.isSearchingOnline = false;
      this.renderContent();
    } catch (e) {
      this.isSearchingOnline = false;
      this.onlineSearchError = `"${word}" internet sözlüğünde bulunamadı veya bağlantı hatası oluştu.`;
      this.renderContent();
    }
  }

  toggleFlip() {
    this.isCardFlipped = !this.isCardFlipped;
    const flashcard = document.getElementById('flashcard-element');
    const ratingBar = document.getElementById('rating-bar');
    const manualBtn = document.getElementById('btn-manual-flip');

    if (flashcard) flashcard.classList.toggle('flipped', this.isCardFlipped);
    if (ratingBar) ratingBar.style.visibility = this.isCardFlipped ? 'visible' : 'hidden';
    if (manualBtn) manualBtn.textContent = this.isCardFlipped ? '🔄 Kartın Önünü Gör' : '🔄 Kartı Çevir (Anlamı Gör)';

    if (this.isCardFlipped) {
      const activeItems = this.getActiveReviewItems();
      const item = activeItems[this.currentIndex];
      if (item) speech.speak(item.word);
    }
  }

  async submitRating(rating) {
    const activeItems = this.getActiveReviewItems();
    const item = activeItems[this.currentIndex];
    if (!item) return;

    try {
      await api.submitReview(item.id, rating);
      this.isCardFlipped = false;
      // Trigger achievement check
      achievementManager.checkAll().catch(() => {});

      // If user rated 0 (Tekrar Et), push this item to the end of the active list
      // so they can see and practice it again at the end of this session!
      if (rating === 0) {
        activeItems.push(item);
      }

      this.currentIndex++;

      // If we finished the active list, reload queue to update counters
      if (this.currentIndex >= activeItems.length) {
        await this.loadQueueData();
        this.currentIndex = 0;
      }

      const body = document.getElementById('vocab-body');
      if (body) body.innerHTML = this.renderReviewArea();
      this.bindEvents();
    } catch (err) {
      state.showToast('Değerlendirme kaydedilemedi: ' + err.message, 'error');
    }
  }

  destroy() {
    if (this.keyHandler) {
      window.removeEventListener('keydown', this.keyHandler);
      this.keyHandler = null;
    }
    if (this.audioElement) {
      try {
        this.audioElement.pause();
        this.audioElement = null;
      } catch (e) {}
    }
  }
}
