/**
 * Spaced Repetition (SRS) Vocabulary Studio
 * SuperMemo / Anki spaced recall algorithm with Turkish meanings & IPA phonetics
 */
import { api } from '../api.js';
import { state } from '../state.js';
import { speech } from '../speech.js';

export class VocabularyView {
  constructor() {
    this.container = null;
    this.mode = 'review'; // 'review' or 'dictionary'
    this.reviewItems = [];
    this.currentIndex = 0;
    this.isCardFlipped = false;
    this.dictionaryItems = [];
    this.searchQuery = '';
    this.levelFilter = 'all';
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Aralıklı tekrar kelime kuyruğunuz yükleniyor...</p>
      </div>
    `;

    try {
      const queueData = await api.getReviewQueue();
      this.reviewItems = queueData.items || [];
      this.currentIndex = 0;
      this.isCardFlipped = false;

      // Also pre-fetch dictionary
      const dictData = await api.getVocabularyItems();
      this.dictionaryItems = dictData.items || [];

      this.renderContent();
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Kelimeler yüklenemedi</h3>
          <p>${err.message}</p>
        </div>
      `;
    }
  }

  renderContent() {
    this.container.innerHTML = `
      <div class="vocab-layout">
        <!-- Mode Switcher & Stats Header -->
        <div class="vocab-header card">
          <div class="vocab-header-left">
            <h1 class="vocab-title">Akıllı Kelime Kartları (SRS)</h1>
            <p class="vocab-subtitle">Unutma eğrisini kıran SM-2 hafıza algoritması ile kalıcı kelime öğrenimi</p>
          </div>
          <div class="vocab-mode-toggles">
            <button class="btn ${this.mode === 'review' ? 'btn-primary' : 'btn-secondary'}" id="toggle-review-mode">
              <span>🗂️ Tekrar Bekleyenler</span>
              <span class="btn-badge">${this.reviewItems.length}</span>
            </button>
            <button class="btn ${this.mode === 'dictionary' ? 'btn-primary' : 'btn-secondary'}" id="toggle-dict-mode">
              <span>📖 Tüm Kelime Sözlüğü</span>
            </button>
          </div>
        </div>

        <div class="vocab-body" id="vocab-body">
          ${this.mode === 'review' ? this.renderReviewArea() : this.renderDictionaryArea()}
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
          <p>Şu anda tekrar etmeniz gereken kelime bulunmuyor. Algoritma kelimeleri hafızanıza en uygun zamanda tekrar getirecektir.</p>
          <button class="btn btn-primary" id="switch-to-dict-btn">Tüm Kelime Sözlüğünü İncele →</button>
        </div>
      `;
    }

    const item = this.reviewItems[this.currentIndex];
    if (!item) {
      return `
        <div class="card empty-review-card">
          <div class="empty-icon">✅</div>
          <h2>Oturum Tamamlandı!</h2>
          <p>Harika odaklanma! Bu oturumdaki tüm kelime kartlarını gözden geçirdiniz.</p>
          <button class="btn btn-primary" id="refresh-queue-btn">Kelimeleri Yenile</button>
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
          <input type="text" class="dict-search-input" id="dict-search-input" placeholder="İngilizce kelime veya Türkçe anlam ara..." value="${this.searchQuery}">
          
          <div class="level-filter-tabs">
            ${levels.map(l => `
              <button class="level-tab ${this.levelFilter === l ? 'active' : ''}" data-level="${l}">${l === 'all' ? 'Tümü' : l}</button>
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
                <th>İngilizce Tanım</th>
                <th>Ses</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.map(item => `
                <tr>
                  <td class="dict-word-cell">
                    <strong>${item.word}</strong>
                    <span class="dict-pos">${item.part_of_speech || ''}</span>
                  </td>
                  <td><span class="cefr-tag ${item.cefr_level || 'A1'}">${item.cefr_level || 'A1'}</span></td>
                  <td class="dict-phonetic">${item.phonetic || '-'}</td>
                  <td class="dict-def-tr"><strong>${item.definition_tr || '-'}</strong></td>
                  <td class="dict-def-en">${item.definition_en || '-'}</td>
                  <td>
                    <button class="tts-play-btn dict-tts" data-text="${item.word}">🔊</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
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

    document.getElementById('switch-to-dict-btn')?.addEventListener('click', () => {
      this.mode = 'dictionary';
      this.renderContent();
    });

    document.getElementById('refresh-queue-btn')?.addEventListener('click', () => {
      this.render(this.container);
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
      if (body) body.innerHTML = this.renderDictionaryArea();
      this.bindEvents();
    });

    document.querySelectorAll('.level-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.levelFilter = tab.dataset.level;
        const body = document.getElementById('vocab-body');
        if (body) body.innerHTML = this.renderDictionaryArea();
        this.bindEvents();
      });
    });

    document.querySelectorAll('.dict-tts').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.text;
        if (text) speech.speak(text);
      });
    });
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
