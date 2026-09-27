/**
 * Diagnostic Assessment View
 * Evaluates 10 skills with CEFR scoring & adaptive question delivery
 */
import { api } from '../api.js';
import { state } from '../state.js';
import { speech } from '../speech.js';

export class AssessmentView {
  constructor() {
    this.container = null;
    this.assessmentId = null;
    this.skills = [
      'grammar', 'vocabulary', 'reading', 'listening', 
      'writing', 'speaking', 'pronunciation', 'sentence_formation', 
      'comprehension', 'communication'
    ];
    this.currentSkillIndex = 0;
    this.currentQuestions = [];
    this.currentQuestionIndex = 0;
    this.questionStartTime = Date.now();
    this.selectedOption = null;
    this.assessmentResults = null;
  }

  async render(viewport) {
    this.container = viewport;
    this.renderIntro();
  }

  renderIntro() {
    this.container.innerHTML = `
      <div class="assessment-intro-wrapper">
        <div class="card assessment-intro-card">
          <div class="assessment-badge-pill">CEFR Diagnostic & Placement</div>
          <h1 class="assessment-title">10-Skill Comprehensive Diagnostic Audit</h1>
          <p class="assessment-desc">
            Unlike superficial multiple-choice quizzes, this diagnostic rigorously benchmarks your receptive and productive English across 10 vital proficiencies:
          </p>
          <div class="skills-preview-grid">
            <div class="skill-tag-pill">📖 Grammar</div>
            <div class="skill-tag-pill">📚 Vocabulary</div>
            <div class="skill-tag-pill">📰 Reading</div>
            <div class="skill-tag-pill">🎧 Listening</div>
            <div class="skill-tag-pill">✍️ Writing</div>
            <div class="skill-tag-pill">🗣️ Speaking</div>
            <div class="skill-tag-pill">🎙️ Pronunciation</div>
            <div class="skill-tag-pill">🧩 Sentence Syntax</div>
            <div class="skill-tag-pill">💡 Comprehension</div>
            <div class="skill-tag-pill">🤝 Real Communication</div>
          </div>
          <div class="assessment-notice">
            <span class="notice-icon">ℹ️</span>
            <span>Takes ~5-10 minutes. Evaluates grammar accuracy, collocations, Turkish-interference traps, and pragmatic fluency.</span>
          </div>
          <button class="btn btn-primary btn-lg" id="start-assessment-btn">
            Begin Diagnostic Assessment →
          </button>
        </div>
      </div>
    `;

    document.getElementById('start-assessment-btn')?.addEventListener('click', () => this.startAssessment());
  }

  async startAssessment() {
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Initializing diagnostic assessment engine...</p>
      </div>
    `;

    try {
      const res = await api.startAssessment();
      this.assessmentId = res.assessmentId;
      this.currentSkillIndex = 0;
      await this.loadSkillQuestions();
    } catch (err) {
      state.showToast('Failed to start assessment: ' + err.message, 'error');
      this.renderIntro();
    }
  }

  async loadSkillQuestions() {
    const currentSkill = this.skills[this.currentSkillIndex];
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading questions for ${currentSkill.toUpperCase()}...</p>
      </div>
    `;

    try {
      const data = await api.getAssessmentQuestions(this.assessmentId, currentSkill);
      this.currentQuestions = data.questions || [];
      this.currentQuestionIndex = 0;
      if (this.currentQuestions.length === 0) {
        // Skip to next skill if no questions found
        this.nextSkill();
      } else {
        this.renderQuestion();
      }
    } catch (err) {
      state.showToast(`Error loading questions for ${currentSkill}: ` + err.message, 'error');
      this.nextSkill();
    }
  }

  renderQuestion() {
    const skill = this.skills[this.currentSkillIndex];
    const q = this.currentQuestions[this.currentQuestionIndex];
    this.questionStartTime = Date.now();
    this.selectedOption = null;

    const progressPct = Math.round(
      ((this.currentSkillIndex * this.currentQuestions.length + this.currentQuestionIndex) /
      (this.skills.length * 4)) * 100
    );

    this.container.innerHTML = `
      <div class="question-container">
        <!-- Header Progress -->
        <div class="assessment-topbar">
          <div class="assessment-skill-indicator">
            <span class="skill-name-badge">${skill.replace('_', ' ').toUpperCase()}</span>
            <span class="skill-step">Skill ${this.currentSkillIndex + 1} of ${this.skills.length}</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: ${progressPct}%;"></div>
          </div>
          <span class="progress-pct">${progressPct}%</span>
        </div>

        <!-- Question Card -->
        <div class="card question-card">
          <div class="question-meta">
            <span class="cefr-tag ${q.cefrLevel || 'A2'}">${q.cefrLevel || 'A2'}</span>
            <span class="question-topic">${q.topic || 'General'}</span>
            <button class="btn btn-secondary btn-sm tts-btn" id="listen-question-btn" title="Listen to sentence">
              🔊 Listen
            </button>
          </div>

          <div class="question-text">${q.question.replace(/\n/g, '<br>')}</div>

          <!-- Options -->
          <div class="options-grid" id="options-container">
            ${(q.options || []).map((opt, i) => `
              <button class="option-btn" data-option="${opt}">
                <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                <span class="option-val">${opt}</span>
              </button>
            `).join('')}
          </div>

          <!-- Feedback Box (Hidden initially) -->
          <div class="feedback-box" id="feedback-box" style="display: none;">
            <div class="feedback-status" id="feedback-status"></div>
            <div class="feedback-explanation" id="feedback-explanation"></div>
            <div class="feedback-tr" id="feedback-tr"></div>
          </div>

          <!-- Action Bar -->
          <div class="question-actions">
            <button class="btn btn-primary btn-lg" id="submit-answer-btn" disabled>
              Check Answer
            </button>
            <button class="btn btn-success btn-lg" id="next-question-btn" style="display: none;">
              Next Question →
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindQuestionEvents(q);
  }

  bindQuestionEvents(question) {
    const optionsContainer = document.getElementById('options-container');
    const submitBtn = document.getElementById('submit-answer-btn');
    const nextBtn = document.getElementById('next-question-btn');
    const feedbackBox = document.getElementById('feedback-box');
    const ttsBtn = document.getElementById('listen-question-btn');

    // TTS Speak Question
    ttsBtn?.addEventListener('click', () => {
      speech.speak(question.question);
    });

    // Select option
    optionsContainer?.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        optionsContainer.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedOption = btn.dataset.option;
        submitBtn.disabled = false;
      });
    });

    // Submit answer
    submitBtn?.addEventListener('click', async () => {
      if (!this.selectedOption) return;
      submitBtn.disabled = true;

      const responseTime = Date.now() - this.questionStartTime;
      try {
        const result = await api.submitAssessmentAnswer(
          this.assessmentId,
          question.id,
          this.selectedOption,
          responseTime
        );

        // Show feedback
        feedbackBox.style.display = 'block';
        const isCorrect = result.isCorrect;

        feedbackBox.className = `feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;
        document.getElementById('feedback-status').innerHTML = isCorrect
          ? '🎉 <strong>Correct!</strong> Well done.'
          : `❌ <strong>Incorrect.</strong> Correct answer: <em>${result.correctAnswer}</em>`;
        document.getElementById('feedback-explanation').textContent = result.explanation || '';
        document.getElementById('feedback-tr').textContent = result.explanationTr ? `Türkçe Açıklama: ${result.explanationTr}` : '';

        // Highlight selected & correct options
        optionsContainer.querySelectorAll('.option-btn').forEach(b => {
          b.disabled = true;
          if (b.dataset.option === result.correctAnswer) b.classList.add('is-correct');
          if (b.dataset.option === this.selectedOption && !isCorrect) b.classList.add('is-wrong');
        });

        submitBtn.style.display = 'none';
        nextBtn.style.display = 'inline-flex';
      } catch (err) {
        state.showToast('Error submitting answer: ' + err.message, 'error');
        submitBtn.disabled = false;
      }
    });

    // Next question
    nextBtn?.addEventListener('click', () => {
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.currentQuestions.length) {
        this.renderQuestion();
      } else {
        this.nextSkill();
      }
    });
  }

  async nextSkill() {
    this.currentSkillIndex++;
    if (this.currentSkillIndex < this.skills.length) {
      await this.loadSkillQuestions();
    } else {
      await this.finishAssessment();
    }
  }

  async finishAssessment() {
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Analyzing responses and synthesizing your CEFR mastery profile...</p>
      </div>
    `;

    try {
      this.assessmentResults = await api.completeAssessment(this.assessmentId);
      this.renderReport();
    } catch (err) {
      state.showToast('Failed to complete assessment: ' + err.message, 'error');
      this.renderIntro();
    }
  }

  renderReport() {
    const res = this.assessmentResults;
    const skills = res.skills || {};

    this.container.innerHTML = `
      <div class="report-wrapper">
        <div class="card report-card">
          <div class="report-header">
            <div class="report-badge">Diagnostic Assessment Complete</div>
            <h1 class="report-title">Your CEFR Baseline Proficiency Profile</h1>
            <p class="report-subtitle">Personalized analysis across all 10 communicative competencies</p>
          </div>

          <!-- Overall CEFR score hero -->
          <div class="report-hero-score">
            <div class="score-circle">
              <span class="score-label">OVERALL LEVEL</span>
              <span class="score-val">${res.overallCEFR}</span>
              <span class="score-pct">${Math.round((res.totalCorrect / Math.max(res.totalQuestions, 1)) * 100)}% Accuracy</span>
            </div>
            <div class="score-summary">
              <h3>Diagnostic Summary</h3>
              <p>You answered <strong>${res.totalCorrect} of ${res.totalQuestions}</strong> questions correctly across 10 skills.</p>
              ${res.weakAreas && res.weakAreas.length > 0 ? `
                <div class="weak-areas-box">
                  <strong>Priority Development Focus:</strong>
                  <ul>
                    ${res.weakAreas.map(w => `<li><strong>${w.skill.toUpperCase()}:</strong> ${w.detail}</li>`).join('')}
                  </ul>
                </div>
              ` : '<p>High competence demonstrated across evaluated areas.</p>'}
            </div>
          </div>

          <!-- Skill Breakdown Grid -->
          <h2 class="section-title">Competency Breakdown</h2>
          <div class="report-skills-grid">
            ${Object.entries(skills).map(([skill, data]) => `
              <div class="report-skill-item">
                <div class="report-skill-header">
                  <span class="report-skill-name">${skill.replace('_', ' ').toUpperCase()}</span>
                  <span class="cefr-tag ${data.level}">${data.display || data.level}</span>
                </div>
                <div class="report-skill-bar">
                  <div class="report-skill-fill" style="width: ${data.accuracy || 40}%;"></div>
                </div>
                <div class="report-skill-stat">${data.correct}/${data.total} correct (${data.accuracy || 0}%)</div>
              </div>
            `).join('')}
          </div>

          <div class="report-actions">
            <button class="btn btn-primary btn-lg" id="apply-plan-btn">
              Apply Adaptive Curriculum & Go to Dashboard →
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('apply-plan-btn')?.addEventListener('click', async () => {
      try {
        await api.generateDailyTasks();
        state.setView('dashboard');
        state.showToast('Personalized learning plan active!', 'success');
      } catch (e) {
        state.setView('dashboard');
      }
    });
  }
}
