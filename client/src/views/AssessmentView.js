/**
 * Diagnostic Assessment View
 * 10-skill CEFR diagnostic test with Turkish instructions
 * Includes direct option to skip test and start from Level 0 (A1)
 */
import { api } from '../api.js';
import { state } from '../state.js';
import { speech } from '../speech.js';
import { wordInspector } from '../word-inspector.js';

export class AssessmentView {
  constructor() {
    this.container = null;
    this.assessmentId = null;
    this.skills = [
      'grammar', 'vocabulary', 'reading', 'listening', 
      'writing', 'speaking', 'pronunciation', 'sentence_formation', 
      'comprehension', 'communication'
    ];
    this.skillNamesTr = {
      grammar: 'Dilbilgisi (Grammar)',
      vocabulary: 'Kelime Haznesi (Vocabulary)',
      reading: 'Okuma & Anlama (Reading)',
      listening: 'Dinleme & Algılama (Listening)',
      writing: 'Yazma Becerisi (Writing)',
      speaking: 'Konuşma & Akıcılık (Speaking)',
      pronunciation: 'Telaffuz & Aksan (Pronunciation)',
      sentence_formation: 'Cümle Kurma (Syntax)',
      comprehension: 'Kavrama Hızı (Comprehension)',
      communication: 'Doğal İletişim (Communication)'
    };
    this.currentSkillIndex = 0;
    this.currentQuestions = [];
    this.currentQuestionIndex = 0;
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
          <div class="assessment-badge-pill">CEFR Seviye Belirleme & Teşhis</div>
          <h1 class="assessment-title">10 Becerili Kapsamlı Seviye Sınavı</h1>
          <p class="assessment-desc">
            Bu değerlendirme; sadece çoktan seçmeli ezber testi değil, İngilizceyi anlama ve üretme kapasitenizi 10 temel boyutta analiz eder:
          </p>
          <div class="skills-preview-grid">
            <div class="skill-tag-pill">📖 Dilbilgisi</div>
            <div class="skill-tag-pill">📚 Kelime</div>
            <div class="skill-tag-pill">📰 Okuma</div>
            <div class="skill-tag-pill">🎧 Dinleme</div>
            <div class="skill-tag-pill">✍️ Yazma</div>
            <div class="skill-tag-pill">🗣️ Konuşma</div>
            <div class="skill-tag-pill">🎙️ Telaffuz</div>
            <div class="skill-tag-pill">🧩 Cümle Kurma</div>
            <div class="skill-tag-pill">💡 Kavrama</div>
            <div class="skill-tag-pill">🤝 Doğal İletişim</div>
          </div>
          <div class="assessment-notice">
            <span class="notice-icon">💡</span>
            <span>Yaklaşık 5-10 dakika sürer. İsterseniz sınava girebilir, isterseniz doğrudan A1 (Sıfırdan) başlayabilirsiniz.</span>
          </div>
          <div class="assessment-actions-row">
            <button class="btn btn-primary btn-lg" id="start-assessment-btn">
              🎯 Sınava Başla (5-10 Dk) →
            </button>
            <button class="btn btn-secondary btn-lg" id="skip-assessment-btn">
              🚀 Sınavı Atla, Doğrudan 0'dan (A1) Başla
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('start-assessment-btn')?.addEventListener('click', () => this.startAssessment());
    document.getElementById('skip-assessment-btn')?.addEventListener('click', async () => {
      await api.skipAssessmentToA1();
      state.showToast("Başlangıç seviyeniz A1 olarak ayarlandı. 0'dan eğitime hazırsınız! 🚀", 'success');
      state.setView('dashboard');
    });
  }

  async startAssessment() {
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Seviye belirleme sınav motoru başlatılıyor...</p>
      </div>
    `;

    try {
      const res = await api.startAssessment();
      this.assessmentId = res.assessmentId;
      this.currentSkillIndex = 0;
      await this.loadSkillQuestions();
    } catch (err) {
      state.showToast('Sınav başlatılamadı: ' + err.message, 'error');
      this.renderIntro();
    }
  }

  async loadSkillQuestions() {
    const currentSkill = this.skills[this.currentSkillIndex];
    const skillNameTr = this.skillNamesTr[currentSkill] || currentSkill;

    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>${skillNameTr} soruları hazırlanıyor...</p>
      </div>
    `;

    try {
      const data = await api.getAssessmentQuestions(this.assessmentId, currentSkill);
      this.currentQuestions = data.questions || [];
      this.currentQuestionIndex = 0;
      if (this.currentQuestions.length === 0) {
        this.nextSkill();
      } else {
        this.renderQuestion();
      }
    } catch (err) {
      state.showToast(`Hata: ` + err.message, 'error');
      this.nextSkill();
    }
  }

  renderQuestion() {
    const skill = this.skills[this.currentSkillIndex];
    const skillNameTr = this.skillNamesTr[skill] || skill;
    const q = this.currentQuestions[this.currentQuestionIndex];
    this.selectedOption = null;

    const progressPct = Math.round(
      ((this.currentSkillIndex * Math.max(this.currentQuestions.length, 1) + this.currentQuestionIndex) /
      (this.skills.length * 3)) * 100
    );

    this.container.innerHTML = `
      <div class="question-container">
        <!-- Header Progress -->
        <div class="assessment-topbar">
          <div class="assessment-skill-indicator">
            <span class="skill-name-badge">${skillNameTr}</span>
            <span class="skill-step">Beceri: ${this.currentSkillIndex + 1} / ${this.skills.length}</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: ${Math.min(progressPct, 100)}%;"></div>
          </div>
          <span class="progress-pct">%${Math.min(progressPct, 100)}</span>
        </div>

        <!-- Question Card -->
        <div class="card question-card">
          <div class="question-meta">
            <span class="cefr-tag ${q.cefrLevel || 'A1'}">${q.cefrLevel || 'A1'}</span>
            <span class="question-topic">${q.topic || 'Temel'}</span>
            <button class="btn btn-secondary btn-sm tts-btn" id="listen-question-btn" title="Soruyu sesli dinle">
              🔊 Sesli Oku
            </button>
          </div>

          <div class="question-instruction">
            <span>Aşağıdaki soruyu okuyun ve en doğru seçeneği işaretleyin:</span>
          </div>

          <div class="question-stem" id="question-text">
            ${q.question}
          </div>

          <!-- Instant Question Vocabulary & Structure Hints Drawer -->
          ${wordInspector.renderQuestionVocabBar(q)}

          <div class="question-options-list">
            ${(q.options || []).map((opt, i) => {
              const cleanOpt = (opt || '').toString().replace(/^["']|["']$/g, '');
              return `
                <div class="option-item" role="button" tabindex="0" data-index="${i}">
                  <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                  <span class="option-label">${cleanOpt}</span>
                </div>
              `;
            }).join('')}
          </div>

          <div class="question-footer">
            <button class="btn btn-primary btn-lg" id="submit-answer-btn" disabled>
              Cevabı Onayla →
            </button>
          </div>
        </div>

        <!-- Feedback Card (Initially Hidden) -->
        <div class="card feedback-card" id="feedback-card" style="display: none;"></div>
      </div>
    `;

    this.bindQuestionEvents(q);
  }

  bindQuestionEvents(q) {
    document.getElementById('listen-question-btn')?.addEventListener('click', () => {
      speech.speak(q.question, { rate: 0.9 });
    });

    // Bind WordInspector drawer events
    wordInspector.bindVocabDrawerEvents(this.container);

    document.querySelectorAll('.option-item').forEach(el => {
      const selectHandler = () => {
        document.querySelectorAll('.option-item').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
        const optIndex = parseInt(el.dataset.index, 10);
        this.selectedOption = (q.options || [])[optIndex];
        const submitBtn = document.getElementById('submit-answer-btn');
        if (submitBtn) submitBtn.disabled = false;
      };

      el.addEventListener('click', selectHandler);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectHandler();
        }
      });
    });

    document.getElementById('submit-answer-btn')?.addEventListener('click', () => {
      if (this.selectedOption !== null && this.selectedOption !== undefined) {
        this.submitAnswer(q.id, this.selectedOption);
      }
    });
  }

  async submitAnswer(questionId, answer) {
    const submitBtn = document.getElementById('submit-answer-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Kontrol ediliyor...';
    }

    try {
      const result = await api.submitAssessmentAnswer(this.assessmentId, questionId, answer);
      this.showQuestionFeedback(result);
    } catch (err) {
      state.showToast('Cevap kaydedilemedi: ' + err.message, 'error');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Cevabı Onayla →';
      }
    }
  }

  showQuestionFeedback(result) {
    const card = document.getElementById('feedback-card');
    if (!card) return;

    // Hide submit button to avoid duplicate attempts or confusion
    const submitBtn = document.getElementById('submit-answer-btn');
    if (submitBtn) submitBtn.style.display = 'none';

    const isLastQuestion =
      this.currentSkillIndex === this.skills.length - 1 &&
      this.currentQuestionIndex === this.currentQuestions.length - 1;

    card.className = `card feedback-card ${result.isCorrect ? 'correct' : 'incorrect'}`;
    card.innerHTML = `
      <div class="feedback-header">
        <span class="feedback-icon">${result.isCorrect ? '✅' : '❌'}</span>
        <h3 class="feedback-title">${result.isCorrect ? 'Doğru Cevap!' : 'Yanlış Cevap'}</h3>
      </div>
      <div class="feedback-body">
        ${!result.isCorrect ? `<p class="correct-answer-text"><strong>Doğru seçenek:</strong> ${result.correctAnswer}</p>` : ''}
        <p class="explanation-text">${result.explanationTr || result.explanation || ''}</p>
      </div>
      <button class="btn btn-primary btn-lg" id="btn-next-question">
        ${isLastQuestion ? '🎉 Sınavı Bitir ve Seviyemi Belirle →' : 'Sonraki Soruya Geç →'}
      </button>
    `;
    card.style.display = 'block';
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    document.getElementById('btn-next-question')?.addEventListener('click', () => {
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
        <p>Seviye karneniz ve öğrenme haritanız hesaplanıyor...</p>
      </div>
    `;

    try {
      this.assessmentResults = await api.completeAssessment(this.assessmentId);
      this.renderResults();
    } catch (err) {
      state.showToast('Sonuçlar hesaplanırken hata: ' + err.message, 'error');
      this.renderIntro();
    }
  }

  renderResults() {
    const res = this.assessmentResults;
    const overall = res.overallCEFR || 'A1';

    this.container.innerHTML = `
      <div class="assessment-results-wrapper">
        <div class="card results-hero-card">
          <div class="results-badge">Sınav Tamamlandı! 🎉</div>
          <h1 class="results-title">Tebrikler! Seviye Teşhisiniz Belirlendi</h1>
          <p class="results-desc">
            10 temel becerideki yanıtlarınıza göre başlangıç profiliniz oluşturuldu:
          </p>

          <div class="results-cefr-circle">
            <span class="cefr-circle-val">${overall}</span>
            <span class="cefr-circle-lbl">BAŞLANGIÇ SEVİYESİ</span>
          </div>

          <div class="results-actions">
            <button class="btn btn-primary btn-lg" id="btn-go-dashboard">
              Öğrenme Yoluma Başla →
            </button>
          </div>
        </div>

        <div class="card results-breakdown-card">
          <h2 class="card-title">📊 10 Beceri Karnesi</h2>
          <div class="results-skills-grid">
            ${Object.entries(res.skills || {}).map(([key, data]) => {
              const nameTr = this.skillNamesTr[key] || key;
              return `
                <div class="result-skill-row">
                  <div class="result-skill-name">${nameTr}</div>
                  <div class="result-skill-bar">
                    <div class="result-skill-fill" style="width: ${Math.max(data.score, 10)}%;"></div>
                  </div>
                  <span class="cefr-tag ${data.level || 'A1'}">${data.level || 'A1'}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-go-dashboard')?.addEventListener('click', () => {
      state.setView('dashboard');
    });
  }
}
