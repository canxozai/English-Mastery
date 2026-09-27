/**
 * Spaced Repetition (SRS) Vocabulary Studio & Massive Dictionary
 * SuperMemo SM-2 spaced recall algorithm + 155+ CEFR master archive + Live Internet Dictionary
 */
import { api } from '../api.js';
import { state } from '../state.js';
import { speech } from '../speech.js';

export class VocabularyView {
  constructor() {
    this.container = null;
    this.mode = 'review'; // 'review' | 'dictionary' | 'online'
    this.reviewItems = [];
    this.currentIndex = 0;
    this.isCardFlipped = false;
    this.dictionaryItems = [];
    this.searchQuery = '';
    this.levelFilter = 'all';
    this.onlineSearchResult = null;
    this.isSearchingOnline = false;
    this.onlineSearchError = null;
    this.audioElement = null;
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Aralıklı tekrar kelime kuyruğunuz ve 155+ kelimelik arşiv yükleniyor...</p>
      </div>
    `;

    try {
      const queueData = await api.getReviewQueue();
      this.reviewItems = queueData.items || [];
      this.currentIndex = 0;
      this.isCardFlipped = false;

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

  renderContent() {
    this.container.innerHTML = `
      <div class="vocab-layout">
        <!-- Mode Switcher & Stats Header -->
        <div class="vocab-header card">
          <div class="vocab-header-left">
            <h1 class="vocab-title">Akıllı Kelime Kartları & Sözlük Arşivi</h1>
            <p class="vocab-subtitle">155+ kelimelik CEFR kütüphanesi & canlı internet sözlüğü ile kalıcı kelime hafızası</p>
          </div>
          <div class="vocab-mode-toggles">
            <button class="btn ${this.mode === 'review' ? 'btn-primary' : 'btn-secondary'}" id="toggle-review-mode">
              <span>🗂️ Tekrar Bekleyenler</span>
              <span class="btn-badge">${this.reviewItems.length}</span>
            </button>
            <button class="btn ${this.mode === 'dictionary' ? 'btn-primary' : 'btn-secondary'}" id="toggle-dict-mode">
              <span>📖 Kelime Kütüphanesi</span>
              <span class="btn-badge">${this.dictionaryItems.length}</span>
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
              <strong>Hızlı Kelime Paketi Yükle:</strong>
              <span class="pack-toolbar-sub">Dilediğiniz seviyedeki kelimeleri anında çalışma kartlarınıza ekleyin</span>
            </div>
          </div>
          <div class="pack-btn-group">
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="A1" title="35 Temel A1 Kelimesi">📥 +A1 Temel (35)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="A2" title="35 Günlük Yaşam Kelimesi">📥 +A2 Günlük (35)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="B1" title="35 Orta Seviye Kelimesi">📥 +B1 Orta (35)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="B2" title="30 İleri Seviye Kelimesi">📥 +B2 İleri (30)</button>
            <button class="btn btn-primary btn-sm pack-load-btn" data-level="all" title="Tüm 155 Kelimelik Arşivi Yükle">🌟 +Tüm Arşivi Yükle (155)</button>
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
    if (this.reviewItems.length === 0) {
      return `
        <div class="card empty-review-card">
          <div class="empty-icon">🎉</div>
          <h2>Tebrikler! Tekrar Kuyruğu Temizlendi</h2>
          <p>Şu anda tekrar etmeniz gereken kelime kartı kalmadı. Öğrenmeye devam etmek için yeni bir seviye paketi yükleyebilir veya internet sözlüğünden dilediğiniz kelimeyi aratıp ekleyebilirsiniz.</p>
          
          <div class="empty-pack-picker">
            <h4>Hemen Yeni Kelimelerle Çalışmaya Devam Et:</h4>
            <div class="empty-pack-buttons">
              <button class="btn btn-secondary pack-load-btn" data-level="A1">📥 +A1 Temel Kelimeler (35)</button>
              <button class="btn btn-secondary pack-load-btn" data-level="A2">📥 +A2 Günlük Yaşam (35)</button>
              <button class="btn btn-secondary pack-load-btn" data-level="B1">📥 +B1 Orta Seviye (35)</button>
              <button class="btn btn-secondary pack-load-btn" data-level="B2">📥 +B2 İleri Seviye (30)</button>
              <button class="btn btn-primary pack-load-btn" data-level="all">🌟 +Tüm 155 Kelimelik Arşivi Yükle</button>
            </div>
          </div>

          <div class="empty-actions-row">
            <button class="btn btn-secondary" id="switch-to-dict-btn">📖 Tüm Kelime Kütüphanesini Gör (${this.dictionaryItems.length} Kelime) →</button>
            <button class="btn btn-secondary" id="switch-to-online-btn">🌐 İnternetten Yeni Kelime Bul →</button>
          </div>
        </div>
      `;
    }

    const item = this.reviewItems[this.currentIndex];
    if (!item) {
      return `
        <div class="card empty-review-card">
          <div class="empty-icon">✅</div>
          <h2>Oturum Başarıyla Tamamlandı!</h2>
          <p>Harika odaklanma! Bu oturumdaki tüm kelime kartlarını gözden geçirdiniz.</p>
          <div class="empty-actions-row">
            <button class="btn btn-primary" id="refresh-queue-btn">Kelimeleri Yenile</button>
            <button class="btn btn-secondary pack-load-btn" data-level="all">Tüm Arşivden Daha Fazla Kelime Aç</button>
          </div>
        </div>
      `;
    }

    const examples = item.examples ? (typeof item.examples === 'string' ? JSON.parse(item.examples) : item.examples) : [];
    const collocations = item.collocations ? (typeof item.collocations === 'string' ? JSON.parse(item.collocations) : item.collocations) : [];

    return `
      <div class="flashcard-container">
        <!-- Progress Counter -->
        <div class="flashcard-counter">
          <span>Kelime ${this.currentIndex + 1} / ${this.reviewItems.length}</span>
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
            
            <div class="card-prompt-hint">Karta tıklayarak veya Boşluk tuşuna basarak Türkçe anlamını görün 🔄</div>
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
          <div class="rating-prompt">Bu kelimeyi ne kadar iyi hatırladınız?</div>
          <div class="rating-buttons-group">
            <button class="rating-btn again" data-rating="0">
              <span class="rating-title">🔄 Tekrar Et</span>
              <span class="rating-interval">&lt; 1 gün</span>
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
      const matchesLevel = this.levelFilter === 'all' || item.cefr_level === this.levelFilter;
      return matchesSearch && matchesLevel;
    });

    return `
      <div class="dict-container card">
        <div class="dict-toolbar">
          <div class="dict-search-row">
            <input type="text" class="dict-search-input" id="dict-search-input" placeholder="Kütüphanede kelime ara (İngilizce veya Türkçe)..." value="${this.searchQuery}">
            <button class="btn btn-primary btn-sm" id="btn-quick-online-search" title="Bu kelimeyi internet sözlüğünde ara">
              🌐 İnternette Ara
            </button>
          </div>
          
          <div class="level-filter-tabs">
            ${levels.map(l => `
              <button class="level-tab ${this.levelFilter === l ? 'active' : ''}" data-level="${l}">${l === 'all' ? `Tümü (${this.dictionaryItems.length})` : l}</button>
            `).join('')}
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
                    <p style="color: var(--text-muted); margin-bottom: 1rem;">"${this.searchQuery}" yerel arşivde bulunamadı.</p>
                    <button class="btn btn-primary" id="btn-search-online-now">🌐 İnternet Sözlüğünden Ara & Ekle</button>
                  </td>
                </tr>
              ` : filtered.map(item => {
                const ex = item.examples ? (typeof item.examples === 'string' ? JSON.parse(item.examples) : item.examples) : [];
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
                    <td class="dict-actions-cell">
                      <button class="tts-play-btn dict-tts" data-text="${item.word}" title="Telaffuzu Dinle">🔊</button>
                      <button class="btn btn-secondary btn-xs add-to-due-btn" data-word="${item.word}" title="Kartlarıma Tekrar Olarak Ekle">➕ Kart</button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderOnlineArea() {
    return `
      <div class="online-dict-container card">
        <div class="online-dict-header">
          <h2>🌐 Canlı İnternet Sözlüğü (Free Dictionary API)</h2>
          <p>Dünyadaki tüm İngilizce kelimeleri gerçek zamanlı olarak aratın, IPA telaffuzunu ve sesli okunuşunu dinleyin, tek tıkla hafıza kartlarınıza ekleyin.</p>
        </div>

        <div class="online-search-bar">
          <input type="text" class="dict-search-input" id="online-search-input" placeholder="Aramak istediğiniz İngilizce kelimeyi yazın (örn: resilient, serendipity, achieve, phenomenon)..." value="${this.searchQuery}" />
          <button class="btn btn-primary" id="btn-trigger-online-search">
            🔍 İnternette Ara
          </button>
        </div>

        <div class="online-search-status" id="online-search-status">
          ${this.isSearchingOnline ? `
            <div class="online-loading-spinner">
              <div class="spinner"></div>
              <p>İnternet sözlük arşivinden veriler ve sesli telaffuz getiriliyor...</p>
            </div>
          ` : ''}

          ${this.onlineSearchError ? `
            <div class="alert alert-warning">
              ⚠️ ${this.onlineSearchError}
            </div>
          ` : ''}
        </div>

        ${this.onlineSearchResult ? this.renderOnlineResultCard(this.onlineSearchResult) : `
          <div class="online-suggestions">
            <h4>💡 Popüler Arama Örnekleri:</h4>
            <div class="suggestion-tags">
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

    document.getElementById('refresh-queue-btn')?.addEventListener('click', () => {
      this.render(this.container);
    });

    // Pack load buttons
    document.querySelectorAll('.pack-load-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const level = btn.dataset.level || 'A1';
        try {
          const res = await api.loadWordPack(level);
          state.showToast(`✅ ${level === 'all' ? 'Tüm 155 kelime' : level + ' seviyesi'} kelime kartlarına yüklendi! (${res.totalDue} kelime tekrar bekliyor)`, 'success');
          await this.render(this.container);
        } catch (e) {
          state.showToast('Paket yüklenemedi: ' + e.message, 'error');
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
          const queue = await api.getReviewQueue();
          this.reviewItems = queue.items || [];
          const badge = document.querySelector('#toggle-review-mode .btn-badge');
          if (badge) badge.textContent = this.reviewItems.length;
        } catch (e) {
          state.showToast('Eklenemedi: ' + e.message, 'error');
        }
      });
    });

    // Flip card
    const flashcard = document.getElementById('flashcard-element');
    flashcard?.addEventListener('click', () => this.toggleFlip());

    document.getElementById('btn-manual-flip')?.addEventListener('click', () => this.toggleFlip());

    // TTS on card
    document.getElementById('card-tts-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = this.reviewItems[this.currentIndex];
      if (item) speech.speak(item.word);
    });

    document.getElementById('card-back-tts-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = this.reviewItems[this.currentIndex];
      if (item) speech.speak(item.word);
    });

    // Rating buttons
    document.querySelectorAll('.rating-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const rating = parseInt(btn.dataset.rating, 10);
        this.submitRating(rating);
      });
    });

    // Dictionary search & filter
    const searchInput = document.getElementById('dict-search-input');
    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      const body = document.getElementById('vocab-body');
      if (body && this.mode === 'dictionary') body.innerHTML = this.renderDictionaryArea();
      this.bindEvents();
    });

    document.getElementById('btn-quick-online-search')?.addEventListener('click', () => {
      this.mode = 'online';
      this.renderContent();
      if (this.searchQuery) {
        this.performOnlineSearch(this.searchQuery);
      }
    });

    document.getElementById('btn-search-online-now')?.addEventListener('click', () => {
      this.mode = 'online';
      this.renderContent();
      if (this.searchQuery) {
        this.performOnlineSearch(this.searchQuery);
      }
    });

    document.querySelectorAll('.level-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.levelFilter = tab.dataset.level;
        const body = document.getElementById('vocab-body');
        if (body && this.mode === 'dictionary') body.innerHTML = this.renderDictionaryArea();
        this.bindEvents();
      });
    });

    document.querySelectorAll('.dict-tts').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.text;
        if (text) speech.speak(text);
      });
    });

    // Online Search Handlers
    const onlineInput = document.getElementById('online-search-input');
    onlineInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = onlineInput.value.trim();
        if (val) this.performOnlineSearch(val);
      }
    });

    document.getElementById('btn-trigger-online-search')?.addEventListener('click', () => {
      const val = document.getElementById('online-search-input')?.value.trim();
      if (val) this.performOnlineSearch(val);
    });

    document.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const word = chip.dataset.word;
        if (word) {
          const input = document.getElementById('online-search-input');
          if (input) input.value = word;
          this.performOnlineSearch(word);
        }
      });
    });

    // Play online audio
    document.getElementById('play-online-audio-btn')?.addEventListener('click', () => {
      const btn = document.getElementById('play-online-audio-btn');
      const audioUrl = btn?.dataset.audio;
      const word = btn?.dataset.word;
      if (audioUrl) {
        try {
          if (this.audioElement) {
            this.audioElement.pause();
          }
          this.audioElement = new Audio(audioUrl);
          this.audioElement.play().catch(() => {
            if (word) speech.speak(word);
          });
        } catch (e) {
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
        
        // Refresh queue
        const queueData = await api.getReviewQueue();
        this.reviewItems = queueData.items || [];
        const dictData = await api.getVocabularyItems();
        this.dictionaryItems = dictData.items || [];
        
        // Auto-switch to review or update badge
        this.mode = 'review';
        this.renderContent();
      } catch (err) {
        state.showToast('Kelime eklenirken hata: ' + err.message, 'error');
      }
    });
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
      const item = this.reviewItems[this.currentIndex];
      if (item) speech.speak(item.word);
    }
  }

  async submitRating(rating) {
    const item = this.reviewItems[this.currentIndex];
    if (!item) return;

    try {
      await api.submitReview(item.id, rating);
      this.isCardFlipped = false;
      this.currentIndex++;
      const body = document.getElementById('vocab-body');
      if (body) body.innerHTML = this.renderReviewArea();
      this.bindEvents();
    } catch (err) {
      state.showToast('Değerlendirme kaydedilemedi: ' + err.message, 'error');
    }
  }
}
