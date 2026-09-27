/**
 * Grammar Academy View
 * Pedagogical grammar mastery from A1 to C1 with Turkish comparative linguistics
 */
import { api } from '../api.js';
import { state } from '../state.js';
import { speech } from '../speech.js';

export class GrammarView {
  constructor() {
    this.container = null;
    this.topics = [];
    this.selectedTopic = null;
    this.activeCategory = 'all';
    this.currentExerciseIndex = 0;
    this.exercises = [];
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading Grammar Academy curriculum...</p>
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
          <h3>Failed to load grammar topics</h3>
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
      this.renderLayout();
    } catch (err) {
      state.showToast('Failed to load topic details: ' + err.message, 'error');
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
            <h3>Grammar Curriculum</h3>
            <span class="topic-count">${this.topics.length} Modules</span>
          </div>

          <!-- Category filter tabs -->
          <div class="category-tabs">
            ${categories.map(c => `
              <button class="cat-tab ${this.activeCategory === c ? 'active' : ''}" data-cat="${c}">
                ${c.replace('_', ' ')}
              </button>
            `).join('')}
          </div>

          <div class="topics-list">
            ${filteredTopics.map(topic => `
              <div class="topic-nav-item ${t && t.id === topic.id ? 'active' : ''}" data-slug="${topic.slug}">
                <div class="topic-nav-left">
                  <span class="cefr-tag ${topic.cefr_level}">${topic.cefr_level}</span>
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
                <span class="cefr-tag ${t.cefr_level}">${t.cefr_level}</span>
                <span class="topic-category-badge">${(t.category || '').toUpperCase()}</span>
              </div>
              <h1 class="topic-title">${t.name}</h1>
              <p class="topic-description">${t.description || ''}</p>

              <!-- Linguistic & Comparative Explanations -->
              <div class="explanation-grid">
                <div class="explanation-col english-col">
                  <h4>🇬🇧 In English</h4>
                  <p>${t.explanation_en || ''}</p>
                </div>
                <div class="explanation-col turkish-col">
                  <h4>🇹🇷 Türkçe Karşılaştırma & Mantık</h4>
                  <p>${t.explanation_tr || ''}</p>
                </div>
              </div>
            </div>

            <!-- Rules & Formulas -->
            <div class="card topic-rules-card">
              <h3 class="section-title">📐 Key Rules & Structure</h3>
              <ul class="rules-list">
                ${rules.map(rule => `<li>${rule}</li>`).join('')}
              </ul>
            </div>

            <!-- Contextual Examples with TTS -->
            <div class="card topic-examples-card">
              <div class="card-header">
                <h3 class="card-title">💬 Real Context Examples</h3>
                <span class="card-subtitle">Click speaker icon to listen</span>
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
                <h3 class="section-title">⚠️ Common Mistakes & L1 Interference</h3>
                <div class="mistakes-grid">
                  ${mistakes.map(m => `
                    <div class="mistake-item">
                      <div class="mistake-wrong">❌ ${m.wrong}</div>
                      <div class="mistake-correct">✅ ${m.correct}</div>
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
                  <h3 class="card-title">✏️ Interactive Practice Sandbox</h3>
                  <div class="card-subtitle">Test and consolidate this grammar structure</div>
                </div>
                <span class="exercise-progress">
                  ${this.exercises.length > 0 ? `Exercise ${this.currentExerciseIndex + 1} of ${this.exercises.length}` : 'No exercises'}
                </span>
              </div>

              ${this.exercises.length > 0 ? this.renderExerciseSandbox() : '<p>No exercises available for this topic yet.</p>'}
            </div>
          ` : `
            <div class="card empty-state">
              <p>Select a grammar topic from the sidebar to begin.</p>
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
      <div class="exercise-box" id="exercise-box">
        <div class="exercise-prompt">
          <span class="exercise-type-tag">${ex.exercise_type.replace('_', ' ').toUpperCase()}</span>
          <div class="exercise-question">${ex.question}</div>
        </div>

        ${options ? `
          <div class="exercise-options" id="ex-options">
            ${options.map(opt => `
              <button class="exercise-opt-btn" data-val="${opt}">${opt}</button>
            `).join('')}
          </div>
        ` : `
          <div class="exercise-input-wrap">
            <input type="text" class="exercise-input" id="ex-text-input" placeholder="Type your answer here..." autocomplete="off">
          </div>
        `}

        <div class="exercise-feedback" id="ex-feedback" style="display: none;"></div>

        <div class="exercise-actions">
          <button class="btn btn-primary" id="submit-exercise-btn">Submit Answer</button>
          <button class="btn btn-secondary" id="next-exercise-btn" style="display: none;">Next Exercise →</button>
        </div>
      </div>
    `;
  }

  bindEvents() {
    // Category tabs
    this.container.querySelectorAll('.cat-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeCategory = btn.dataset.cat;
        this.renderLayout();
      });
    });

    // Topic selection
    this.container.querySelectorAll('.topic-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const slug = item.dataset.slug;
        if (slug) this.loadTopic(slug);
      });
    });

    // Example TTS buttons
    this.container.querySelectorAll('.tts-play-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        speech.speak(btn.dataset.text);
      });
    });

    // Option selection for multiple choice
    let selectedAnswer = '';
    this.container.querySelectorAll('.exercise-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.container.querySelectorAll('.exercise-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedAnswer = btn.dataset.val;
      });
    });

    // Submit Exercise
    const submitBtn = document.getElementById('submit-exercise-btn');
    const nextBtn = document.getElementById('next-exercise-btn');
    const feedbackBox = document.getElementById('ex-feedback');
    const inputEl = document.getElementById('ex-text-input');

    submitBtn?.addEventListener('click', async () => {
      const currentEx = this.exercises[this.currentExerciseIndex];
      const answer = inputEl ? inputEl.value.trim() : selectedAnswer;

      if (!answer) {
        state.showToast('Please provide an answer first.', 'error');
        return;
      }

      submitBtn.disabled = true;

      try {
        const res = await api.submitGrammarExercise(currentEx.id, answer);
        feedbackBox.style.display = 'block';
        feedbackBox.className = `exercise-feedback ${res.isCorrect ? 'correct' : 'incorrect'}`;

        feedbackBox.innerHTML = `
          <div class="feedback-head">${res.isCorrect ? '🎉 Correct!' : '❌ Not quite right'}</div>
          <div class="feedback-body">${res.feedback || (res.isCorrect ? 'Great job.' : `Correct answer: <strong>${res.correctAnswer}</strong>`)}</div>
          ${res.explanation ? `<div class="feedback-expl">${res.explanation}</div>` : ''}
          ${res.explanationTr ? `<div class="feedback-expl-tr">Türkçe: ${res.explanationTr}</div>` : ''}
        `;

        submitBtn.style.display = 'none';
        nextBtn.style.display = 'inline-flex';
      } catch (err) {
        state.showToast('Submission error: ' + err.message, 'error');
        submitBtn.disabled = false;
      }
    });

    // Next Exercise
    nextBtn?.addEventListener('click', () => {
      this.currentExerciseIndex = (this.currentExerciseIndex + 1) % this.exercises.length;
      this.renderLayout();
    });
  }
}
