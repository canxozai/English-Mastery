/**
 * Grammar Academy View
 * Pedagogical grammar mastery from A1 to C1 with Turkish comparative linguistics
 */
import { api } from '../api.js';
import { state } from '../state.js';
import { speech } from '../speech.js';
import { wordInspector } from '../word-inspector.js';

export class GrammarView {
  constructor() {
    this.container = null;
    this.topics = [];
    this.selectedTopic = null;
    this.activeCategory = 'all';
    this.currentExerciseIndex = 0;
    this.exercises = [];
    this.selectedOption = null;
    this.categoryLabelsTr = {
      all: 'Tüm Konular',
      tenses: 'Zamanlar',
      modals: 'Kipler (Modals)',
      clauses: 'Yan Cümleler',
      determiners: 'Belirteçler',
      prepositions: 'Edatlar',
      sentence_structure: 'Cümle Yapısı'
    };
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Gramer Akademisi müfredatı yükleniyor...</p>
      </div>
    `;

    try {
      const data = await api.getGrammarTopics();
      this.topics = Array.isArray(data) ? data : (data.topics || []);
      if (this.topics.length > 0 && !this.selectedTopic) {
        await this.loadTopic(this.topics[0].slug);
      } else {
        this.renderLayout();
      }
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Gramer konuları yüklenemedi</h3>
          <p>${err.message}</p>
        </div>
      `;
    }
  }

  async loadTopic(slug) {
    try {
      const data = await api.getGrammarTopic(slug);
      this.selectedTopic = data.topic;
      this.exercises = data.exercises || [];
      this.currentExerciseIndex = 0;
      this.selectedOption = null;
      this.renderLayout();
    } catch (err) {
      state.showToast('Konu detayları yüklenemedi: ' + err.message, 'error');
    }
  }

  renderLayout() {
    const t = this.selectedTopic;
    const examples = t && t.examples ? (typeof t.examples === 'string' ? JSON.parse(t.examples) : t.examples) : [];
    const rules = t && t.rules ? (typeof t.rules === 'string' ? JSON.parse(t.rules) : t.rules) : [];
    const mistakes = t && t.common_mistakes ? (typeof t.common_mistakes === 'string' ? JSON.parse(t.common_mistakes) : t.common_mistakes) : [];

    const categories = ['all', 'tenses', 'modals', 'clauses', 'determiners', 'prepositions', 'sentence_structure'];

    const filteredTopics = this.activeCategory === 'all'
      ? this.topics
      : this.topics.filter(top => top.category === this.activeCategory);

    this.container.innerHTML = `
      <div class="grammar-layout">
        <!-- Sidebar: Topics List -->
        <aside class="grammar-sidebar card">
          <div class="grammar-sidebar-header">
            <h3>Gramer Müfredatı</h3>
            <span class="topic-count">${this.topics.length} Konu</span>
          </div>

          <!-- Category filter tabs -->
          <div class="category-tabs">
            ${categories.map(c => `
              <button class="cat-tab ${this.activeCategory === c ? 'active' : ''}" data-cat="${c}">
                ${this.categoryLabelsTr[c] || c}
              </button>
            `).join('')}
          </div>

          <div class="topics-list">
            ${filteredTopics.map(topic => `
              <div class="topic-nav-item ${t && t.id === topic.id ? 'active' : ''}" data-slug="${topic.slug}">
                <div class="topic-nav-left">
                  <span class="cefr-tag ${topic.cefr_level || 'A1'}">${topic.cefr_level || 'A1'}</span>
                  <span class="topic-nav-name">${topic.name}</span>
                </div>
                <span class="topic-nav-arrow">›</span>
              </div>
            `).join('')}
          </div>
        </aside>

        <!-- Main Content Area: Topic Detail & Practice Sandbox -->
        <div class="grammar-main">
          ${t ? `
            <div class="card topic-header-card">
              <div class="topic-header-top">
                <span class="cefr-tag ${t.cefr_level || 'A1'}">${t.cefr_level || 'A1'}</span>
                <span class="topic-category-badge">${(t.category || '').toUpperCase()}</span>
              </div>
              <h1 class="topic-title">${t.name}</h1>
              <p class="topic-description">${t.description || ''}</p>

              <!-- Linguistic & Comparative Explanations -->
              <div class="explanation-grid">
                <div class="explanation-col english-col">
                  <h4>🇬🇧 İngilizce Kural</h4>
                  <p>${t.explanation_en || ''}</p>
                </div>
                <div class="explanation-col turkish-col">
                  <h4>🇹🇷 Türkçe Mantık & Karşılaştırma</h4>
                  <p>${t.explanation_tr || ''}</p>
                </div>
              </div>
            </div>

            <!-- Rules & Formulas -->
            <div class="card topic-rules-card">
              <h3 class="section-title">📐 Temel Formül ve Kurallar</h3>
              <ul class="rules-list">
                ${rules.map(rule => `<li>${rule}</li>`).join('')}
              </ul>
            </div>

            <!-- Contextual Examples with TTS -->
            <div class="card topic-examples-card">
              <div class="card-header">
                <h3 class="card-title">💬 Günlük Hayattan Örnek Cümleler</h3>
                <span class="card-subtitle">Cümleyi dinlemek için hoparlör simgesine tıklayın</span>
              </div>
              <div class="examples-list">
                ${examples.map(ex => `
                  <div class="example-item">
                    <button class="tts-play-btn" data-text="${ex.sentence}">🔊</button>
                    <div class="example-texts">
                      <div class="example-en">${ex.sentence}</div>
                      <div class="example-tr">${ex.translation}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Common Mistakes & Turkish Interference -->
            ${mistakes.length > 0 ? `
              <div class="card topic-mistakes-card">
                <h3 class="section-title">⚠️ Sık Yapılan Hatalar & Türkçeden Kaynaklanan Yanılgılar</h3>
                <div class="mistakes-grid">
                  ${mistakes.map(m => `
                    <div class="mistake-item">
                      <div class="mistake-wrong">❌ Yanlış: ${m.wrong}</div>
                      <div class="mistake-correct">✅ Doğru: ${m.correct}</div>
                      <div class="mistake-expl">${m.explanation}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Interactive Exercise Sandbox -->
            <div class="card topic-sandbox-card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">✏️ Alıştırma ve Pekiştirme</h3>
                  <div class="card-subtitle">Bu gramer yapısını pratik yaparak pekiştirin</div>
                </div>
                <span class="exercise-progress">
                  ${this.exercises.length > 0 ? `Alıştırma ${this.currentExerciseIndex + 1} / ${this.exercises.length}` : 'Alıştırma bulunamadı'}
                </span>
              </div>

              ${this.exercises.length > 0 ? this.renderExerciseSandbox() : '<p>Bu konu için henüz alıştırma eklenmemiş.</p>'}
            </div>
          ` : `
            <div class="card empty-state">
              <p>Başlamak için sol menüden bir gramer konusu seçin.</p>
            </div>
          `}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  renderExerciseSandbox() {
    const ex = this.exercises[this.currentExerciseIndex];
    if (!ex) return '';

    const options = ex.options ? (typeof ex.options === 'string' ? JSON.parse(ex.options) : ex.options) : null;

    return `
      <div class="exercise-sandbox">
        <div class="exercise-prompt-wrap">
          <div class="exercise-instruction">Aşağıdaki cümleyi uygun seçenekle tamamlayın:</div>
          <div class="exercise-prompt">${ex.prompt}</div>
        </div>

        <!-- Vocabulary & Structure Hints -->
        ${wordInspector.renderQuestionVocabBar({ question: ex.prompt, options: options, id: ex.id })}

        ${options ? `
          <div class="exercise-options-grid">
            ${options.map((opt, i) => `
              <button class="exercise-opt-btn" data-opt-idx="${i}" data-value="${opt}">
                <span class="opt-prefix">${String.fromCharCode(65 + i)}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `).join('')}
          </div>
        ` : `
          <div class="fill-blank-wrap">
            <input type="text" class="form-input exercise-input" id="exercise-input" placeholder="Cevabınızı buraya yazın..." />
          </div>
        `}

        <div class="exercise-actions">
          <button class="btn btn-primary" id="btn-check-exercise" disabled>
            Cevabı Kontrol Et →
          </button>
        </div>

        <div class="exercise-feedback-box" id="exercise-feedback" style="display: none;"></div>
      </div>
    `;
  }

  bindEvents() {
    // Topic navigation click
    document.querySelectorAll('.topic-nav-item').forEach(el => {
      el.addEventListener('click', () => {
        const slug = el.dataset.slug;
        if (slug) this.loadTopic(slug);
      });
    });

    // Category filter tabs
    document.querySelectorAll('.cat-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeCategory = btn.dataset.cat;
        this.renderLayout();
      });
    });

    // TTS buttons for examples
    document.querySelectorAll('.tts-play-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.text;
        if (text) speech.speak(text);
      });
    });

    // Bind WordInspector drawer events
    wordInspector.bindVocabDrawerEvents(this.container);

    // Exercise options
    document.querySelectorAll('.exercise-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.exercise-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedOption = btn.dataset.value;
        const checkBtn = document.getElementById('btn-check-exercise');
        if (checkBtn) checkBtn.disabled = false;
      });
    });

    // Exercise input change
    const exInput = document.getElementById('exercise-input');
    exInput?.addEventListener('input', (e) => {
      this.selectedOption = e.target.value.trim();
      const checkBtn = document.getElementById('btn-check-exercise');
      if (checkBtn) checkBtn.disabled = !this.selectedOption;
    });

    // Check exercise
    document.getElementById('btn-check-exercise')?.addEventListener('click', () => {
      if (this.selectedOption) {
        this.checkExerciseAnswer();
      }
    });
  }

  async checkExerciseAnswer() {
    const ex = this.exercises[this.currentExerciseIndex];
    if (!ex) return;

    const checkBtn = document.getElementById('btn-check-exercise');
    if (checkBtn) checkBtn.disabled = true;

    try {
      const res = await api.submitGrammarExercise(ex.id, this.selectedOption);
      const fbBox = document.getElementById('exercise-feedback');
      if (!fbBox) return;

      fbBox.className = `exercise-feedback-box ${res.isCorrect ? 'correct' : 'incorrect'}`;
      fbBox.innerHTML = `
        <div class="feedback-title">${res.isCorrect ? '✅ Harika! Doğru Cevap (+15 XP)' : '❌ Yanlış Cevap'}</div>
        <div class="feedback-desc">${res.feedback}</div>
        ${res.explanationTr ? `<div class="feedback-tr">${res.explanationTr}</div>` : ''}
        ${this.currentExerciseIndex + 1 < this.exercises.length ? `
          <button class="btn btn-primary btn-sm" id="btn-next-exercise" style="margin-top: 10px;">
            Sonraki Alıştırma →
          </button>
        ` : `
          <p style="margin-top: 10px; color: #a5b4fc; font-weight: 600;">🎉 Bu konudaki tüm alıştırmaları tamamladınız!</p>
        `}
      `;
      fbBox.style.display = 'block';

      document.getElementById('btn-next-exercise')?.addEventListener('click', () => {
        this.currentExerciseIndex++;
        this.selectedOption = null;
        const sb = document.querySelector('.topic-sandbox-card');
        if (sb) {
          sb.innerHTML = `
            <div class="card-header">
              <div>
                <h3 class="card-title">✏️ Alıştırma ve Pekiştirme</h3>
                <div class="card-subtitle">Bu gramer yapısını pratik yaparak pekiştirin</div>
              </div>
              <span class="exercise-progress">Alıştırma ${this.currentExerciseIndex + 1} / ${this.exercises.length}</span>
            </div>
            ${this.renderExerciseSandbox()}
          `;
          this.bindEvents();
        }
      });
    } catch (err) {
      state.showToast('Cevap kontrol edilemedi: ' + err.message, 'error');
      if (checkBtn) checkBtn.disabled = false;
    }
  }
}
