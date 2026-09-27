/**
 * Spaced Repetition (SRS) Vocabulary Studio
 * SuperMemo / Anki spaced recall algorithm with IPA phonetics & collocations
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
        <p>Loading your spaced repetition vocabulary queue...</p>
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
          <h3>Failed to load vocabulary</h3>
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
            <h1 class="vocab-title">Spaced Repetition Studio</h1>
            <p class="vocab-subtitle">Optimized memory consolidation using the SM-2 adaptive spaced recall algorithm</p>
          </div>
          <div class="vocab-mode-toggles">
            <button class="btn ${this.mode === 'review' ? 'btn-primary' : 'btn-secondary'}" id="toggle-review-mode">
              <span>🗂️ Due Reviews</span>
              <span class="btn-badge">${this.reviewItems.length}</span>
            </button>
            <button class="btn ${this.mode === 'dictionary' ? 'btn-primary' : 'btn-secondary'}" id="toggle-dict-mode">
              <span>📖 Dictionary & Bank</span>
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
          <h2>Review Queue Cleared!</h2>
          <p>You have zero words due right now. The spaced repetition algorithm will automatically schedule your next reviews at the ideal time for long-term retention.</p>
          <button class="btn btn-primary" id="switch-to-dict-btn">Explore Full Dictionary →</button>
        </div>
      `;
    }

    const item = this.reviewItems[this.currentIndex];
    if (!item) {
      return `
        <div class="card empty-review-card">
          <div class="empty-icon">✅</div>
          <h2>Session Completed!</h2>
          <p>Great focus! You've reviewed all cards scheduled for this session.</p>
          <button class="btn btn-primary" id="refresh-queue-btn">Check for More Reviews</button>
        </div>
      `;
    }

    const examples = item.examples ? (typeof item.examples === 'string' ? JSON.parse(item.examples) : item.examples) : [];
    const collocations = item.collocations ? (typeof item.collocations === 'string' ? JSON.parse(item.collocations) : item.collocations) : [];

    return `
      <div class="flashcard-container">
        <!-- Progress Counter -->
        <div class="flashcard-counter">
          <span>Card ${this.currentIndex + 1} of ${this.reviewItems.length}</span>
          <span class="cefr-tag ${item.cefr_level || 'A1'}">${item.cefr_level || 'A1'}</span>
        </div>

        <!-- 3D Flippable Flashcard -->
        <div class="flashcard ${this.isCardFlipped ? 'flipped' : ''}" id="flashcard-element">
          <!-- FRONT FACE -->
          <div class="flashcard-face flashcard-front">
            <div class="card-meta">
              <span class="pos-badge">${item.part_of_speech || 'word'}</span>
              <button class="tts-play-btn" id="card-tts-btn" title="Listen to pronunciation">🔊</button>
            </div>

            <div class="target-word">${item.word}</div>
            <div class="phonetic-ipa">${item.phonetic || ''}</div>
            
            <div class="card-prompt-hint">Tap card or press Space to reveal meaning & collocations</div>
          </div>

          <!-- BACK FACE -->
          <div class="flashcard-face flashcard-back">
            <div class="card-meta">
              <span class="pos-badge">${item.part_of_speech || 'word'}</span>
              <button class="tts-play-btn" id="card-back-tts-btn" title="Listen again">🔊</button>
            </div>

            <div class="target-word">${item.word}</div>
            <div class="phonetic-ipa">${item.phonetic || ''}</div>

            <div class="def-box">
              <div class="def-en"><strong>Definition:</strong> ${item.definition_en || ''}</div>
              <div class="def-tr"><strong>Türkçe:</strong> ${item.definition_tr || ''}</div>
            </div>

            ${collocations.length > 0 ? `
              <div class="collocations-box">
                <span class="box-label">Key Collocations:</span>
                <div class="collocation-tags">
                  ${collocations.slice(0, 5).map(c => `<span class="colloc-tag">${c}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            ${examples.length > 0 ? `
              <div class="example-box">
                <span class="box-label">Context Sentence:</span>
                <div class="example-sentence">"${examples[0]}"</div>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Rating Buttons (Only visible when card is flipped) -->
        <div class="rating-bar" id="rating-bar" style="visibility: ${this.isCardFlipped ? 'visible' : 'hidden'};">
          <div class="rating-prompt">How well did you remember this word?</div>
          <div class="rating-buttons-group">
            <button class="rating-btn again" data-rating="1">
              <span class="rating-title">Again</span>
              <span class="rating-interval">&lt; 1 day</span>
            </button>
            <button class="rating-btn hard" data-rating="2">
              <span class="rating-title">Hard</span>
              <span class="rating-interval">1-2 days</span>
            </button>
            <button class="rating-btn good" data-rating="3">
              <span class="rating-title">Good</span>
              <span class="rating-interval">3-4 days</span>
            </button>
            <button class="rating-btn easy" data-rating="4">
              <span class="rating-title">Easy</span>
              <span class="rating-interval">7+ days</span>
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
          <input type="text" class="dict-search-input" id="dict-search-input" placeholder="Search words, English definitions, or Turkish meanings..." value="${this.searchQuery}">
          
          <div class="level-filter-tabs">
            ${levels.map(l => `
              <button class="level-tab ${this.levelFilter === l ? 'active' : ''}" data-level="${l}">${l}</button>
            `).join('')}
          </div>
        </div>

        <div class="dict-table-wrap">
          <table class="dict-table">
            <thead>
              <tr>
                <th>Word</th>
                <th>CEFR</th>
                <th>Phonetics</th>
                <th>English Definition</th>
                <th>Türkçe Anlam</th>
                <th>Audio</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.map(item => `
                <tr>
                  <td class="dict-word-cell">
                    <strong>${item.word}</strong>
                    <span class="dict-pos">${item.part_of_speech || ''}</span>
                  </td>
                  <td><span class="cefr-tag ${item.cefr_level}">${item.cefr_level}</span></td>
                  <td class="dict-phonetic">${item.phonetic || '-'}</td>
                  <td class="dict-def-en">${item.definition_en || '-'}</td>
                  <td class="dict-def-tr">${item.definition_tr || '-'}</td>
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

    // Card Flip
    const cardEl = document.getElementById('flashcard-element');
    cardEl?.addEventListener('click', (e) => {
      if (e.target.closest('.tts-play-btn')) return;
      this.isCardFlipped = !this.isCardFlipped;
      cardEl.classList.toggle('flipped', this.isCardFlipped);
      const ratingBar = document.getElementById('rating-bar');
      if (ratingBar) ratingBar.style.visibility = this.isCardFlipped ? 'visible' : 'hidden';
    });

    // TTS Buttons
    document.getElementById('card-tts-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentItem = this.reviewItems[this.currentIndex];
      if (currentItem) speech.speak(currentItem.word);
    });

    document.getElementById('card-back-tts-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentItem = this.reviewItems[this.currentIndex];
      if (currentItem) speech.speak(currentItem.word);
    });

    // Rating Submission
    this.container.querySelectorAll('.rating-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const rating = parseInt(btn.dataset.rating, 10);
        const item = this.reviewItems[this.currentIndex];
        if (!item) return;

        try {
          await api.submitReview(item.id, rating);
          state.showToast('Recall logged! Next review scheduled.', 'success', 2000);
          this.currentIndex++;
          this.isCardFlipped = false;
          this.renderContent();
        } catch (err) {
          state.showToast('Error recording review: ' + err.message, 'error');
        }
      });
    });

    // Dictionary Search & Filters
    const searchInput = document.getElementById('dict-search-input');
    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      const dictBody = document.querySelector('.dict-table tbody');
      if (dictBody) {
        this.renderContent();
        // Restore focus
        const newInput = document.getElementById('dict-search-input');
        if (newInput) {
          newInput.focus();
          newInput.setSelectionRange(this.searchQuery.length, this.searchQuery.length);
        }
      }
    });

    this.container.querySelectorAll('.level-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.levelFilter = tab.dataset.level;
        this.renderContent();
      });
    });

    this.container.querySelectorAll('.dict-tts').forEach(btn => {
      btn.addEventListener('click', () => {
        speech.speak(btn.dataset.text);
      });
    });
  }
}
