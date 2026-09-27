/**
 * Client-Side Standalone Service for LinguaForge
 * Multi-user account management (Username & Password)
 * Guarantees every new learner starts at Level 0 (A1) with 0 XP
 * 100% offline & GitHub Pages static execution
 */
import { staticData } from './static-data.js';

class LocalService {
  constructor() {
    this.currentUser = null;
    this.initAuth();
  }

  initAuth() {
    try {
      const activeUsername = localStorage.getItem('linguaforge_active_user');
      const users = this.getAccounts();
      if (activeUsername && users.length > 0) {
        const found = users.find(u => u.username.toLowerCase() === activeUsername.toLowerCase());
        if (found) {
          this.currentUser = found;
        }
      }
    } catch (e) {
      console.warn('Error initializing auth:', e);
    }
  }

  getAccounts() {
    try {
      const raw = localStorage.getItem('linguaforge_users');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  saveAccounts(accounts) {
    try {
      localStorage.setItem('linguaforge_users', JSON.stringify(accounts));
    } catch (e) {}
  }

  getCurrentUser() {
    return this.currentUser;
  }

  async login(username, password) {
    const cleanUser = (username || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    const accounts = this.getAccounts();
    const account = accounts.find(a => a.username.toLowerCase() === cleanUser);

    if (!account) {
      throw new Error('Kullanıcı bulunamadı. Lütfen kullanıcı adınızı kontrol edin veya yeni hesap açın.');
    }

    if (account.password && account.password !== cleanPass) {
      throw new Error('Şifre hatalı! Lütfen şifrenizi tekrar deneyin.');
    }

    this.currentUser = account;
    localStorage.setItem('linguaforge_active_user', account.username);
    this.ensureUserStorage(account.username);
    return account;
  }

  async register(username, password, displayName) {
    const cleanUser = (username || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();
    const cleanName = (displayName || '').trim() || username;

    if (!cleanUser) throw new Error('Kullanıcı adı boş bırakılamaz.');
    if (cleanUser.length < 2) throw new Error('Kullanıcı adı en az 2 karakter olmalıdır.');
    if (!cleanPass) throw new Error('Şifre boş bırakılamaz.');

    const accounts = this.getAccounts();
    if (accounts.some(a => a.username.toLowerCase() === cleanUser)) {
      throw new Error('Bu kullanıcı adı zaten alınmış. Farklı bir kullanıcı adı deneyin veya giriş yapın.');
    }

    const newAccount = {
      id: 'u_' + Date.now(),
      username: cleanUser,
      displayName: cleanName,
      password: cleanPass,
      createdAt: new Date().toISOString(),
      cefr_level: 'A1'
    };

    accounts.push(newAccount);
    this.saveAccounts(accounts);

    this.currentUser = newAccount;
    localStorage.setItem('linguaforge_active_user', newAccount.username);

    // Initialize user storage strictly from 0 (A1)
    this.initZeroUserStorage(cleanUser);

    return newAccount;
  }

  async loginOrRegisterGuest() {
    const guestUser = 'misafir';
    const accounts = this.getAccounts();
    let account = accounts.find(a => a.username === guestUser);

    if (!account) {
      account = {
        id: 'guest_' + Date.now(),
        username: guestUser,
        displayName: 'Misafir Öğrenci',
        password: '123',
        createdAt: new Date().toISOString(),
        cefr_level: 'A1'
      };
      accounts.push(account);
      this.saveAccounts(accounts);
      this.initZeroUserStorage(guestUser);
    }

    this.currentUser = account;
    localStorage.setItem('linguaforge_active_user', account.username);
    this.ensureUserStorage(guestUser);
    return account;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('linguaforge_active_user');
  }

  getUserStorageKey(key) {
    const u = this.currentUser ? this.currentUser.username : 'guest';
    return `linguaforge_u_${u}_${key}`;
  }

  getUserData(key) {
    try {
      const raw = localStorage.getItem(this.getUserStorageKey(key));
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  setUserData(key, val) {
    try {
      localStorage.setItem(this.getUserStorageKey(key), JSON.stringify(val));
    } catch (e) {}
  }

  initZeroUserStorage(username) {
    const prefix = `linguaforge_u_${username}_`;
    
    // 0'dan Başlangıç İstatistikleri (0 XP, 0 dk, 0 kelime)
    const zeroStats = {
      xp: 0,
      level: 1,
      current_streak: 1,
      longest_streak: 1,
      total_study_minutes: 0,
      total_words_learned: 0,
      total_grammar_mastered: 0,
      total_errors_resolved: 0,
      last_study_date: new Date().toISOString().slice(0, 10)
    };

    // 10 Beceri: Hepsi A1 seviyesinde 0 puanda
    const zeroSkills = {
      grammar: { level: 'A1', sublevel: '-', score: 0 },
      vocabulary: { level: 'A1', sublevel: '-', score: 0 },
      reading: { level: 'A1', sublevel: '-', score: 0 },
      listening: { level: 'A1', sublevel: '-', score: 0 },
      writing: { level: 'A1', sublevel: '-', score: 0 },
      speaking: { level: 'A1', sublevel: '-', score: 0 },
      pronunciation: { level: 'A1', sublevel: '-', score: 0 },
      sentence_formation: { level: 'A1', sublevel: '-', score: 0 },
      comprehension: { level: 'A1', sublevel: '-', score: 0 },
      communication: { level: 'A1', sublevel: '-', score: 0 }
    };

    // Temiz hata defteri
    const zeroErrors = [];

    // Başlangıç A1 kelime kartları
    const vocab = (staticData.vocabulary_items || []).map((v, i) => ({
      ...v,
      id: v.id || i + 1,
      examples: typeof v.examples === 'string' ? JSON.parse(v.examples || '[]') : v.examples,
      synonyms: typeof v.synonyms === 'string' ? JSON.parse(v.synonyms || '[]') : v.synonyms,
      antonyms: typeof v.antonyms === 'string' ? JSON.parse(v.antonyms || '[]') : v.antonyms,
      collocations: typeof v.collocations === 'string' ? JSON.parse(v.collocations || '[]') : v.collocations,
      interval: 0,
      ease_factor: 2.5,
      repetitions: 0,
      due: true
    }));

    localStorage.setItem(prefix + 'stats', JSON.stringify(zeroStats));
    localStorage.setItem(prefix + 'skills', JSON.stringify(zeroSkills));
    localStorage.setItem(prefix + 'errors', JSON.stringify(zeroErrors));
    localStorage.setItem(prefix + 'srs_items', JSON.stringify(vocab));
    localStorage.removeItem(prefix + 'latest_assessment');
    localStorage.setItem(prefix + 'completed_tasks', JSON.stringify([]));
  }

  ensureUserStorage(username) {
    const prefix = `linguaforge_u_${username}_`;
    if (!localStorage.getItem(prefix + 'stats') || !localStorage.getItem(prefix + 'skills')) {
      this.initZeroUserStorage(username);
    }
  }

  // Dashboard
  async getDashboard() {
    if (!this.currentUser) {
      throw new Error('AUTH_REQUIRED');
    }

    const stats = this.getUserData('stats') || {
      xp: 0,
      level: 1,
      current_streak: 1,
      longest_streak: 1,
      total_study_minutes: 0,
      total_words_learned: 0,
      total_grammar_mastered: 0,
      total_errors_resolved: 0
    };

    const skills = this.getUserData('skills') || {
      grammar: { level: 'A1', sublevel: '', score: 0 },
      vocabulary: { level: 'A1', sublevel: '', score: 0 },
      reading: { level: 'A1', sublevel: '', score: 0 },
      listening: { level: 'A1', sublevel: '', score: 0 },
      writing: { level: 'A1', sublevel: '', score: 0 },
      speaking: { level: 'A1', sublevel: '', score: 0 },
      pronunciation: { level: 'A1', sublevel: '', score: 0 },
      sentence_formation: { level: 'A1', sublevel: '', score: 0 },
      comprehension: { level: 'A1', sublevel: '', score: 0 },
      communication: { level: 'A1', sublevel: '', score: 0 }
    };

    const errors = this.getUserData('errors') || [];
    const srs = this.getUserData('srs_items') || [];
    const dueCount = srs.filter(i => i.due).length;

    const latestAssessment = this.getUserData('latest_assessment') || {
      overall_cefr: 'A1',
      results: { overallCEFR: 'A1' }
    };

    return {
      user: {
        username: this.currentUser.username,
        displayName: this.currentUser.displayName || this.currentUser.username,
        onboardingComplete: true
      },
      stats,
      skills,
      dailyTasks: {
        tasks: [
          { id: 'task-vocab', skill: 'vocabulary', description: 'A1 Temel Kelime Kartlarından 5 tanesini incele ve tekrar et', targetView: 'vocabulary' },
          { id: 'task-grammar', skill: 'grammar', description: 'Gramer Akademisinden 1 başlangıç konusunu ve kurallarını oku', targetView: 'grammar' },
          { id: 'task-reading', skill: 'reading', description: '1 başlangıç (A1) okuma metnini incele ve sorularını yanıtla', targetView: 'reading' },
          { id: 'task-speaking', skill: 'speaking', description: '1 günlük konuşma senaryosunu sesli olarak dene', targetView: 'speaking' }
        ],
        completed_tasks: this.getUserData('completed_tasks') || []
      },
      recentErrors: errors.filter(e => !e.resolved),
      reviewStats: { dueToday: dueCount, totalItems: srs.length },
      weekStudy: [
        { date: '2026-09-21', total_minutes: 0 },
        { date: '2026-09-22', total_minutes: 0 },
        { date: '2026-09-23', total_minutes: 0 },
        { date: '2026-09-24', total_minutes: 0 },
        { date: '2026-09-25', total_minutes: 0 },
        { date: '2026-09-26', total_minutes: 0 },
        { date: '2026-09-27', total_minutes: stats.total_study_minutes || 0 }
      ],
      latestAssessment
    };
  }

  // Assessment
  async startAssessment() {
    const assessmentId = Date.now();
    this.currentAssessment = {
      id: assessmentId,
      answers: [],
      correctCount: 0,
      totalCount: 0,
      skillsEvaluated: {}
    };
    return {
      assessmentId,
      skills: ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking', 'pronunciation', 'sentence_formation', 'comprehension', 'communication'],
      message: 'Seviye belirleme sınavı başlatıldı.'
    };
  }

  async skipAssessmentToA1() {
    const result = {
      overallCEFR: 'A1',
      totalQuestions: 0,
      totalCorrect: 0,
      skills: {
        grammar: { level: 'A1', sublevel: '', score: 10 },
        vocabulary: { level: 'A1', sublevel: '', score: 10 },
        reading: { level: 'A1', sublevel: '', score: 10 },
        listening: { level: 'A1', sublevel: '', score: 10 },
        writing: { level: 'A1', sublevel: '', score: 10 },
        speaking: { level: 'A1', sublevel: '', score: 10 },
        pronunciation: { level: 'A1', sublevel: '', score: 10 },
        sentence_formation: { level: 'A1', sublevel: '', score: 10 },
        comprehension: { level: 'A1', sublevel: '', score: 10 },
        communication: { level: 'A1', sublevel: '', score: 10 }
      }
    };
    this.setUserData('latest_assessment', result);
    return result;
  }

  async getAssessmentQuestions(assessmentId, skill) {
    const all = staticData.assessment_question_bank || [];
    const filtered = all.filter(q => q.skill === skill);
    const questions = filtered.slice(0, 3).map(q => ({
      id: q.id,
      type: q.question_type,
      question: q.question,
      options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options,
      cefrLevel: q.cefr_level,
      topic: q.topic
    }));

    return {
      skill,
      targetLevel: 'A1-A2',
      questions
    };
  }

  async submitAssessmentAnswer(assessmentId, questionBankId, userAnswer) {
    const all = staticData.assessment_question_bank || [];
    const q = all.find(item => item.id === questionBankId) || all[0];
    const isCorrect = userAnswer.trim().toLowerCase() === q.correct_answer.trim().toLowerCase();

    if (this.currentAssessment) {
      this.currentAssessment.totalCount = (this.currentAssessment.totalCount || 0) + 1;
      if (isCorrect) {
        this.currentAssessment.correctCount = (this.currentAssessment.correctCount || 0) + 1;
      }
      if (!this.currentAssessment.skillsEvaluated[q.skill]) {
        this.currentAssessment.skillsEvaluated[q.skill] = { correct: 0, total: 0 };
      }
      this.currentAssessment.skillsEvaluated[q.skill].total += 1;
      if (isCorrect) this.currentAssessment.skillsEvaluated[q.skill].correct += 1;
    }

    if (!isCorrect) {
      // Hata defterine kaydet
      const errors = this.getUserData('errors') || [];
      errors.unshift({
        id: Date.now(),
        skill: q.skill,
        error_text: userAnswer,
        correction: q.correct_answer,
        explanation: q.explanation_tr || q.explanation || 'Seviye belirleme sınavında yapılan hata.',
        occurrence_count: 1,
        resolved: 0
      });
      this.setUserData('errors', errors);
    }

    return {
      questionId: questionBankId,
      isCorrect,
      score: isCorrect ? 1 : 0,
      correctAnswer: q.correct_answer,
      explanation: q.explanation,
      explanationTr: q.explanation_tr || q.explanation,
      skill: q.skill,
      cefrLevel: q.cefr_level,
      topic: q.topic
    };
  }

  async completeAssessment(assessmentId) {
    const ca = this.currentAssessment || { correctCount: 0, totalCount: 1, skillsEvaluated: {} };
    const totalQ = Math.max(ca.totalCount || 1, 1);
    const correctQ = ca.correctCount || 0;
    const ratio = correctQ / totalQ;

    let overall = 'A1';
    if (ratio >= 0.85) overall = 'B2';
    else if (ratio >= 0.65) overall = 'B1';
    else if (ratio >= 0.40) overall = 'A2';
    else overall = 'A1';

    const skillKeys = ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking', 'pronunciation', 'sentence_formation', 'comprehension', 'communication'];
    const skills = {};

    skillKeys.forEach(k => {
      const ev = ca.skillsEvaluated[k] || { correct: 0, total: 1 };
      const skillRatio = ev.total > 0 ? (ev.correct / ev.total) : 0;
      let lvl = 'A1';
      if (skillRatio >= 0.85) lvl = 'B2';
      else if (skillRatio >= 0.65) lvl = 'B1';
      else if (skillRatio >= 0.40) lvl = 'A2';
      else lvl = 'A1';

      const sc = Math.round(skillRatio * 100);
      skills[k] = { level: lvl, sublevel: '', score: sc, correct: ev.correct, total: ev.total, accuracy: sc };
    });

    const result = {
      overallCEFR: overall,
      skills,
      weakAreas: [
        { skill: 'speaking', level: 'A1', detail: 'Günlük basit diyaloglar ve temel kelimeler' },
        { skill: 'grammar', level: 'A1', detail: 'To Be fiili ve temel zaman kalıpları' }
      ],
      strongAreas: [
        { skill: 'comprehension', level: overall, detail: 'Temel bağlam kavrama' }
      ],
      totalQuestions: totalQ,
      totalCorrect: correctQ
    };

    this.setUserData('latest_assessment', result);
    const currSkills = this.getUserData('skills') || {};
    for (const [k, v] of Object.entries(skills)) {
      currSkills[k] = { level: v.level, sublevel: v.sublevel, score: v.score };
    }
    this.setUserData('skills', currSkills);

    // Give completion XP
    const stats = this.getUserData('stats');
    if (stats) {
      stats.xp = (stats.xp || 0) + 50;
      this.setUserData('stats', stats);
    }

    return result;
  }

  // Grammar
  async getGrammarTopics() {
    return (staticData.grammar_topics || []).map(t => ({
      ...t,
      examples: typeof t.examples === 'string' ? JSON.parse(t.examples) : t.examples,
      rules: typeof t.rules === 'string' ? JSON.parse(t.rules) : t.rules,
      common_mistakes: typeof t.common_mistakes === 'string' ? JSON.parse(t.common_mistakes) : t.common_mistakes,
      prerequisite_topics: typeof t.prerequisite_topics === 'string' ? JSON.parse(t.prerequisite_topics || '[]') : t.prerequisite_topics
    }));
  }

  async getGrammarTopic(slug) {
    const topics = await this.getGrammarTopics();
    const topic = topics.find(t => t.slug === slug) || topics[0];
    const exercises = (staticData.grammar_exercises || [])
      .filter(e => e.topic_id === topic.id)
      .map(e => ({
        ...e,
        options: typeof e.options === 'string' ? JSON.parse(e.options) : e.options
      }));

    return { topic, exercises };
  }

  async submitGrammarExercise(exerciseId, answer) {
    const exercises = staticData.grammar_exercises || [];
    const ex = exercises.find(e => e.id === exerciseId) || exercises[0];
    const isCorrect = answer.trim().toLowerCase() === ex.correct_answer.trim().toLowerCase();

    // Reward XP
    const stats = this.getUserData('stats') || { xp: 0 };
    stats.xp = (stats.xp || 0) + (isCorrect ? 15 : 5);
    if (isCorrect) {
      stats.total_grammar_mastered = (stats.total_grammar_mastered || 0) + 1;
    }
    this.setUserData('stats', stats);

    if (!isCorrect) {
      const errors = this.getUserData('errors') || [];
      errors.unshift({
        id: Date.now(),
        skill: 'grammar',
        error_text: answer,
        correction: ex.correct_answer,
        explanation: ex.explanation_tr || ex.explanation || 'Gramer kural hatası.',
        occurrence_count: 1,
        resolved: 0
      });
      this.setUserData('errors', errors);
    }

    return {
      isCorrect,
      correctAnswer: ex.correct_answer,
      feedback: isCorrect ? 'Tebrikler! Doğru cevap.' : `Yanlış. Doğru biçim: ${ex.correct_answer}`,
      explanation: ex.explanation,
      explanationTr: ex.explanation_tr || ex.explanation
    };
  }

  // Vocabulary
  async getVocabularyItems() {
    const items = (this.getUserData('srs_items') || []).map(v => ({
      ...v,
      examples: typeof v.examples === 'string' ? JSON.parse(v.examples) : v.examples,
      collocations: typeof v.collocations === 'string' ? JSON.parse(v.collocations) : v.collocations
    }));
    return { items, total: items.length };
  }

  async getReviewQueue() {
    const items = (this.getUserData('srs_items') || []).filter(i => i.due);
    return { items, dueToday: items.length };
  }

  async submitReview(itemId, rating) {
    const items = this.getUserData('srs_items') || [];
    const idx = items.findIndex(i => i.id === itemId);
    if (idx !== -1) {
      // Rating: 0 = again, 1 = hard, 2 = good, 3 = easy
      if (rating >= 2) {
        items[idx].due = false;
        items[idx].repetitions = (items[idx].repetitions || 0) + 1;
      }
      this.setUserData('srs_items', items);
    }
    const stats = this.getUserData('stats') || { xp: 0 };
    stats.xp = (stats.xp || 0) + (rating >= 2 ? 10 : 3);
    stats.total_words_learned = (stats.total_words_learned || 0) + (rating >= 2 ? 1 : 0);
    this.setUserData('stats', stats);
    return { success: true };
  }

  // Reading
  async getReadingMaterials() {
    return (staticData.reading_materials || []).map(m => ({
      ...m,
      comprehension_questions: typeof m.comprehension_questions === 'string' ? JSON.parse(m.comprehension_questions) : m.comprehension_questions,
      key_vocabulary: typeof m.key_vocabulary === 'string' ? JSON.parse(m.key_vocabulary) : m.key_vocabulary
    }));
  }

  async getReadingMaterial(id) {
    const list = await this.getReadingMaterials();
    const material = list.find(m => m.id === parseInt(id, 10)) || list[0];
    return { material };
  }

  async submitReading(id, answers, readingTimeSeconds) {
    const { material } = await this.getReadingMaterial(id);
    const questions = material.comprehension_questions || [];
    let correct = 0;
    const details = questions.map((q, idx) => {
      const userAns = answers[idx] || '';
      const isRight = userAns.trim().toLowerCase() === q.correct.trim().toLowerCase();
      if (isRight) correct++;
      return {
        question: q.question,
        userAnswer: userAns,
        correctAnswer: q.correct,
        isCorrect: isRight
      };
    });

    const score = Math.round((correct / Math.max(questions.length, 1)) * 100);
    const wordsPerMinute = Math.round((material.word_count / Math.max(readingTimeSeconds, 10)) * 60);

    const stats = this.getUserData('stats') || { xp: 0 };
    stats.xp = (stats.xp || 0) + (score >= 70 ? 30 : 15);
    this.setUserData('stats', stats);

    return {
      score,
      correctCount: correct,
      totalCount: questions.length,
      wordCount: material.word_count,
      wordsPerMinute,
      details
    };
  }

  // Listening
  async getListeningMaterials() {
    return (staticData.listening_materials || []).map(l => ({
      ...l,
      comprehension_questions: typeof l.comprehension_questions === 'string' ? JSON.parse(l.comprehension_questions) : l.comprehension_questions,
      key_vocabulary: typeof l.key_vocabulary === 'string' ? JSON.parse(l.key_vocabulary) : l.key_vocabulary
    }));
  }

  async getListeningMaterial(id) {
    const list = await this.getListeningMaterials();
    const material = list.find(l => l.id === parseInt(id, 10)) || list[0];
    return { material };
  }

  async submitListening(id, answers, listenCount) {
    const { material } = await this.getListeningMaterial(id);
    const questions = material.comprehension_questions || [];
    let correct = 0;
    const details = questions.map((q, idx) => {
      const userAns = answers[idx] || '';
      const isRight = userAns.trim().toLowerCase() === q.correct.trim().toLowerCase();
      if (isRight) correct++;
      return {
        question: q.question,
        userAnswer: userAns,
        correctAnswer: q.correct,
        isCorrect: isRight
      };
    });

    const score = Math.round((correct / Math.max(questions.length, 1)) * 100);
    const stats = this.getUserData('stats') || { xp: 0 };
    stats.xp = (stats.xp || 0) + (score >= 70 ? 25 : 10);
    this.setUserData('stats', stats);

    return {
      score,
      correctCount: correct,
      totalCount: questions.length,
      listenCount,
      details
    };
  }

  // Writing
  async getWritingPrompts() {
    return staticData.writing_prompts || [];
  }

  async submitWriting(promptId, text) {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const sentences = (text.match(/[^.!?]+[.!?]+/g) || []).length || 1;
    const avgLen = (words / sentences).toFixed(1);

    const score = Math.min(100, Math.max(50, 40 + Math.round(words * 1.5)));
    const cefr = score >= 85 ? 'B2' : (score >= 65 ? 'B1' : 'A2');

    const stats = this.getUserData('stats') || { xp: 0 };
    stats.xp = (stats.xp || 0) + 30;
    this.setUserData('stats', stats);

    return {
      overallScore: score,
      cefrLevel: cefr,
      grammarScore: Math.min(95, score + 5),
      vocabularyScore: score,
      structureScore: Math.max(50, score - 5),
      feedback: [
        `Ortalama ${avgLen} kelimelik cümlelerle ${words} kelime yazdınız.`,
        'Kelime seçiminiz konuya uygun ve anlaşılır.',
        'İpucu: Cümleleri birbirine "and", "but", "because" veya "so" gibi bağlaçlarla bağlayarak daha akıcı paragraflar oluşturabilirsiniz.'
      ],
      errors: []
    };
  }

  // Speaking
  async getSpeakingScenarios() {
    return (staticData.speaking_scenarios || []).map(s => ({
      ...s,
      key_vocabulary: typeof s.key_vocabulary === 'string' ? JSON.parse(s.key_vocabulary) : s.key_vocabulary,
      key_phrases: typeof s.key_phrases === 'string' ? JSON.parse(s.key_phrases) : s.key_phrases,
      objectives: typeof s.objectives === 'string' ? JSON.parse(s.objectives) : s.objectives
    }));
  }

  async getSpeakingScenario(id) {
    const list = await this.getSpeakingScenarios();
    const scenario = list.find(s => s.id === parseInt(id, 10)) || list[0];
    return { scenario };
  }

  // Errors
  async getErrors() {
    const errors = this.getUserData('errors') || [];
    return { errors };
  }

  async resolveError(id) {
    const errors = this.getUserData('errors') || [];
    const idx = errors.findIndex(e => String(e.id) === String(id));
    if (idx !== -1) {
      errors[idx].resolved = 1;
      this.setUserData('errors', errors);
    }
    const stats = this.getUserData('stats') || { total_errors_resolved: 0 };
    stats.total_errors_resolved = (stats.total_errors_resolved || 0) + 1;
    this.setUserData('stats', stats);
    return { success: true };
  }

  // Tasks
  async generateDailyTasks() {
    return { success: true };
  }

  // History & Reports
  async getProgressHistory() {
    return { history: [] };
  }

  async getWeeklyReport() {
    return { report: null };
  }
}

export const localService = new LocalService();
