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
    const vocab = (staticData.vocabulary_items || []).map((v, i) => {
      const ex = (typeof v.examples === 'string' ? JSON.parse(v.examples || '[]') : v.examples) || v.example_sentences || [];
      return {
        ...v,
        id: v.id || i + 1,
        examples: ex,
        example_sentences: ex,
        synonyms: typeof v.synonyms === 'string' ? JSON.parse(v.synonyms || '[]') : (v.synonyms || []),
        antonyms: typeof v.antonyms === 'string' ? JSON.parse(v.antonyms || '[]') : (v.antonyms || []),
        collocations: typeof v.collocations === 'string' ? JSON.parse(v.collocations || '[]') : (v.collocations || []),
        interval: 0,
        ease_factor: 2.5,
        repetitions: 0,
        due: (v.cefr_level === 'A1' && i < 25)
      };
    });

    localStorage.setItem(prefix + 'stats', JSON.stringify(zeroStats));
    localStorage.setItem(prefix + 'skills', JSON.stringify(zeroSkills));
    localStorage.setItem(prefix + 'errors', JSON.stringify(zeroErrors));
    localStorage.setItem(prefix + 'srs_items', JSON.stringify(vocab));
    localStorage.removeItem(prefix + 'latest_assessment');
    localStorage.setItem(prefix + 'completed_tasks', JSON.stringify([]));
    localStorage.setItem(prefix + 'daily_tasks_date', new Date().toISOString().slice(0, 10));
  }

  syncVocabularyArchive(username) {
    const user = username || (this.currentUser ? this.currentUser.username : 'misafir');
    const prefix = `linguaforge_u_${user}_`;
    try {
      const raw = localStorage.getItem(prefix + 'srs_items');
      let currentItems = raw ? JSON.parse(raw) : [];
      const existingWordSet = new Set(currentItems.map(i => (i.word || '').toLowerCase()));
      
      const newItemsToAdd = [];
      const masterList = staticData.vocabulary_items || [];
      
      masterList.forEach((v, idx) => {
        if (!existingWordSet.has((v.word || '').toLowerCase())) {
          const ex = (typeof v.examples === 'string' ? JSON.parse(v.examples || '[]') : v.examples) || v.example_sentences || [];
          newItemsToAdd.push({
            ...v,
            id: v.id || 1000 + idx,
            examples: ex,
            example_sentences: ex,
            synonyms: typeof v.synonyms === 'string' ? JSON.parse(v.synonyms || '[]') : (v.synonyms || []),
            antonyms: typeof v.antonyms === 'string' ? JSON.parse(v.antonyms || '[]') : (v.antonyms || []),
            collocations: typeof v.collocations === 'string' ? JSON.parse(v.collocations || '[]') : (v.collocations || []),
            interval: 0,
            ease_factor: 2.5,
            repetitions: 0,
            due: (currentItems.length < 5) || (v.cefr_level === 'A1' && currentItems.filter(x => x.due).length < 20)
          });
        }
      });

      if (newItemsToAdd.length > 0) {
        currentItems = currentItems.concat(newItemsToAdd);
        localStorage.setItem(prefix + 'srs_items', JSON.stringify(currentItems));
      }
    } catch (e) {
      console.warn('Error syncing vocabulary archive:', e);
    }
  }

  ensureUserStorage(username) {
    const prefix = `linguaforge_u_${username}_`;
    if (!localStorage.getItem(prefix + 'stats') || !localStorage.getItem(prefix + 'skills')) {
      this.initZeroUserStorage(username);
      return;
    }
    this.syncVocabularyArchive(username);
  }

  recordDailyTaskProgress(taskId) {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const lastDailyDate = this.getUserData('daily_tasks_date');
      let completedTasks = this.getUserData('completed_tasks') || [];
      if (lastDailyDate !== today) {
        completedTasks = [];
        this.setUserData('daily_tasks_date', today);
      }

      if (!completedTasks.includes(taskId)) {
        completedTasks.push(taskId);
        this.setUserData('completed_tasks', completedTasks);

        const stats = this.getUserData('stats') || { xp: 0 };
        stats.xp = (stats.xp || 0) + 20;

        let bonusAwarded = false;
        if (completedTasks.length >= 4 && !this.getUserData('daily_bonus_claimed_' + today)) {
          stats.xp += 50;
          this.setUserData('daily_bonus_claimed_' + today, true);
          bonusAwarded = true;
        }

        this.setUserData('stats', stats);
        return { success: true, taskId, completedTasks, xpGained: bonusAwarded ? 70 : 20, bonusAwarded };
      }
      return { success: true, taskId, completedTasks, xpGained: 0 };
    } catch (e) {
      console.warn('Error recording daily task progress:', e);
      return { success: false };
    }
  }

  async completeDailyTask(taskId, completed = true) {
    const today = new Date().toISOString().slice(0, 10);
    const lastDailyDate = this.getUserData('daily_tasks_date');
    let completedTasks = this.getUserData('completed_tasks') || [];
    if (lastDailyDate !== today) {
      completedTasks = [];
      this.setUserData('daily_tasks_date', today);
    }

    const stats = this.getUserData('stats') || { xp: 0 };

    if (completed) {
      if (!completedTasks.includes(taskId)) {
        completedTasks.push(taskId);
        stats.xp = (stats.xp || 0) + 20;

        if (completedTasks.length >= 4 && !this.getUserData('daily_bonus_claimed_' + today)) {
          stats.xp += 50;
          this.setUserData('daily_bonus_claimed_' + today, true);
        }
      }
    } else {
      if (completedTasks.includes(taskId)) {
        completedTasks = completedTasks.filter(id => id !== taskId);
        stats.xp = Math.max(0, (stats.xp || 0) - 20);
      }
    }

    this.setUserData('completed_tasks', completedTasks);
    this.setUserData('stats', stats);

    return { success: true, completedTasks, stats };
  }

  // Dashboard
  async getDashboard() {
    if (!this.currentUser) {
      throw new Error('AUTH_REQUIRED');
    }

    this.syncVocabularyArchive();

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

    const today = new Date().toISOString().slice(0, 10);
    const lastDailyDate = this.getUserData('daily_tasks_date');
    let completedTasks = this.getUserData('completed_tasks') || [];
    if (lastDailyDate !== today) {
      completedTasks = [];
      this.setUserData('completed_tasks', completedTasks);
      this.setUserData('daily_tasks_date', today);
    }

    return {
      user: {
        username: this.currentUser.username,
        displayName: this.currentUser.displayName || this.currentUser.username,
        onboardingComplete: true
      },
      stats,
      skills,
      dailyTasks: {
        date: today,
        tasks: [
          { id: 'task-vocab', skill: 'vocabulary', description: 'Kelime Kartlarından en az 5 tanesini tekrar et veya yeni kelime öğren', targetView: 'vocabulary' },
          { id: 'task-grammar', skill: 'grammar', description: 'Gramer Akademisinden 1 konuyu ve interaktif alıştırmasını tamamla', targetView: 'grammar' },
          { id: 'task-reading', skill: 'reading', description: '1 okuma metnini incele ve anlama sorularını yanıtla', targetView: 'reading' },
          { id: 'task-speaking', skill: 'speaking', description: '1 konuşma senaryosunda sesli pratik yap veya diyalog kur', targetView: 'speaking' }
        ],
        completed_tasks: completedTasks
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
    const normalizedUser = (userAnswer || '').toString().trim().toLowerCase().replace(/^["']|["']$/g, '');
    const normalizedCorrect = (q.correct_answer || '').toString().trim().toLowerCase().replace(/^["']|["']$/g, '');
    const isCorrect = normalizedUser === normalizedCorrect;

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
        prompt: e.question || e.prompt || '',
        question: e.question || e.prompt || '',
        options: typeof e.options === 'string' ? JSON.parse(e.options) : e.options
      }));

    return { topic, exercises };
  }

  async submitGrammarExercise(exerciseId, answer) {
    const exercises = staticData.grammar_exercises || [];
    const ex = exercises.find(e => e.id === exerciseId) || exercises[0];

    const normalize = (str) => (str || '')
      .trim()
      .toLowerCase()
      .replace(/[.,!?;:"'’]/g, '')
      .replace(/\.{2,}/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\bdon't\b|\bdont\b/g, 'do not')
      .replace(/\bdoesn't\b|\bdoesnt\b/g, 'does not')
      .replace(/\bdidn't\b|\bdidnt\b/g, 'did not')
      .replace(/\bcan't\b|\bcant\b/g, 'cannot')
      .replace(/\bisn't\b|\bisnt\b/g, 'is not')
      .replace(/\baren't\b|\barent\b/g, 'are not')
      .replace(/\bwasn't\b|\bwasnt\b/g, 'was not')
      .replace(/\bweren't\b|\bwerent\b/g, 'were not')
      .replace(/\bwon't\b|\bwont\b/g, 'will not')
      .replace(/\bhasn't\b|\bhasnt\b/g, 'has not')
      .replace(/\bhaven't\b|\bhavent\b/g, 'have not')
      .trim();

    const userClean = normalize(answer);
    const correctClean = normalize(ex.correct_answer);

    const isFreeResponse = ex.correct_answer === '[free response]' || ex.exercise_type === 'sentence_creation';
    const isCorrect = isFreeResponse ? (userClean.length >= 3) : (userClean === correctClean);

    // Reward XP
    const stats = this.getUserData('stats') || { xp: 0 };
    stats.xp = (stats.xp || 0) + (isCorrect ? 15 : 5);
    if (isCorrect) {
      stats.total_grammar_mastered = (stats.total_grammar_mastered || 0) + 1;
    }
    this.setUserData('stats', stats);
    this.recordDailyTaskProgress('task-grammar');

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
      feedback: isCorrect ? 'Tebrikler! Doğru cevap (+15 XP).' : `Yanlış. Doğru biçim: ${ex.correct_answer}`,
      explanation: ex.explanation,
      explanationTr: ex.explanation_tr || ex.explanation
    };
  }

  // Vocabulary
  async getVocabularyItems() {
    this.syncVocabularyArchive();
    const items = (this.getUserData('srs_items') || []).map(v => {
      const ex = (typeof v.examples === 'string' ? JSON.parse(v.examples) : v.examples) || v.example_sentences || [];
      const col = (typeof v.collocations === 'string' ? JSON.parse(v.collocations) : v.collocations) || [];
      return {
        ...v,
        examples: ex,
        example_sentences: ex,
        collocations: col
      };
    });
    return { items, total: items.length };
  }

  async getReviewQueue(level = 'all') {
    this.syncVocabularyArchive();
    const allSrs = this.getUserData('srs_items') || [];
    
    // Calculate due count breakdown for each level
    const dueByLevel = {
      all: allSrs.filter(i => i.due).length,
      A1: allSrs.filter(i => i.due && (i.cefr_level || '').toUpperCase() === 'A1').length,
      A2: allSrs.filter(i => i.due && (i.cefr_level || '').toUpperCase() === 'A2').length,
      B1: allSrs.filter(i => i.due && (i.cefr_level || '').toUpperCase() === 'B1').length,
      B2: allSrs.filter(i => i.due && (i.cefr_level || '').toUpperCase() === 'B2').length,
      C1: allSrs.filter(i => i.due && (i.cefr_level || '').toUpperCase() === 'C1').length
    };

    // Calculate total library count breakdown for each level
    const totalByLevel = {
      all: allSrs.length,
      A1: allSrs.filter(i => (i.cefr_level || '').toUpperCase() === 'A1').length,
      A2: allSrs.filter(i => (i.cefr_level || '').toUpperCase() === 'A2').length,
      B1: allSrs.filter(i => (i.cefr_level || '').toUpperCase() === 'B1').length,
      B2: allSrs.filter(i => (i.cefr_level || '').toUpperCase() === 'B2').length,
      C1: allSrs.filter(i => (i.cefr_level || '').toUpperCase() === 'C1').length
    };

    let filtered = allSrs.filter(i => i.due);
    if (level && level !== 'all') {
      filtered = filtered.filter(i => (i.cefr_level || '').toUpperCase() === level.toUpperCase());
    }

    const items = filtered.map(v => {
      const ex = (typeof v.examples === 'string' ? JSON.parse(v.examples) : v.examples) || v.example_sentences || [];
      const col = (typeof v.collocations === 'string' ? JSON.parse(v.collocations) : v.collocations) || [];
      return {
        ...v,
        examples: ex,
        example_sentences: ex,
        collocations: col
      };
    });

    return { items, dueToday: items.length, dueByLevel, totalByLevel, currentLevel: level || 'all' };
  }

  async submitReview(itemId, rating) {
    const items = this.getUserData('srs_items') || [];
    const idx = items.findIndex(i => i.id === itemId);
    if (idx !== -1) {
      // Rating: 0 = again, 1 = hard, 2 = good, 3 = easy
      if (rating >= 2) {
        items[idx].due = false;
        items[idx].repetitions = (items[idx].repetitions || 0) + 1;
        items[idx].interval = rating === 3 ? (items[idx].interval ? items[idx].interval * 2 : 4) : 2;
      } else {
        items[idx].due = true;
        // Keep in queue for re-review
      }
      this.setUserData('srs_items', items);
    }
    const stats = this.getUserData('stats') || { xp: 0 };
    stats.xp = (stats.xp || 0) + (rating >= 2 ? 10 : 3);
    stats.total_words_learned = (stats.total_words_learned || 0) + (rating >= 2 ? 1 : 0);
    this.setUserData('stats', stats);
    this.recordDailyTaskProgress('task-vocab');
    return { success: true };
  }

  async drawFreshWords(level = 'all', count = 15) {
    this.syncVocabularyArchive();
    const items = this.getUserData('srs_items') || [];
    
    // Find candidate words for the specified level that are NOT currently due
    let candidates = items.filter(item => {
      const match = (level === 'all') || (item.cefr_level && item.cefr_level.toUpperCase() === level.toUpperCase());
      return match && !item.due;
    });

    // Sort candidates: unstudied (repetitions == 0) first, then least studied
    candidates.sort((a, b) => (a.repetitions || 0) - (b.repetitions || 0));

    // Shuffle the top candidates so order is not predictable
    const pool = candidates.slice(0, Math.max(count * 3, 30));
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const selected = pool.slice(0, count);
    const selectedIds = new Set(selected.map(s => s.id));

    items.forEach(item => {
      if (selectedIds.has(item.id)) {
        item.due = true;
      }
    });

    this.setUserData('srs_items', items);
    return { success: true, activatedCount: selected.length, level };
  }

  async resetLevelQueue(level = 'all') {
    this.syncVocabularyArchive();
    const items = this.getUserData('srs_items') || [];
    let resetCount = 0;

    items.forEach(item => {
      const match = (level === 'all') || (item.cefr_level && item.cefr_level.toUpperCase() === level.toUpperCase());
      if (match) {
        item.due = true;
        item.repetitions = 0;
        item.interval = 0;
        resetCount++;
      }
    });

    this.setUserData('srs_items', items);
    return { success: true, resetCount, level };
  }

  async loadWordPack(level = 'A1') {
    return await this.drawFreshWords(level, 25);
  }

  async fetchOnlineWord(rawWord) {
    const clean = (rawWord || '').trim().toLowerCase().replace(/[^a-z-]/g, '');
    if (!clean) throw new Error('Lütfen geçerli bir İngilizce kelime girin.');

    // 1. Fetch comprehensive definitions, phonetics, audio, examples from Free Dictionary API
    let dictData = null;
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(clean)}`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json) && json.length > 0) {
          dictData = json[0];
        }
      }
    } catch (e) {
      console.warn('Free Dictionary API call failed or timed out:', e);
    }

    // 2. Fetch Turkish Translation (Google Translate)
    let trTranslation = '';
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURIComponent(clean)}`;
      const trRes = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (trRes.ok) {
        const data = await trRes.json();
        trTranslation = data?.[0]?.[0]?.[0] || '';
      }
    } catch (e) {}

    let phonetic = dictData?.phonetic || '';
    let audioUrl = '';
    if (dictData?.phonetics && Array.isArray(dictData.phonetics)) {
      for (const p of dictData.phonetics) {
        if (!phonetic && p.text) phonetic = p.text;
        if (!audioUrl && p.audio) audioUrl = p.audio;
      }
    }

    let primaryPos = 'kelime';
    let definitionEn = '';
    let exampleEn = '';
    const allMeanings = [];

    if (dictData?.meanings && Array.isArray(dictData.meanings)) {
      primaryPos = dictData.meanings[0]?.partOfSpeech || 'kelime';
      dictData.meanings.forEach(m => {
        const defObj = m.definitions?.[0];
        if (defObj) {
          if (!definitionEn) definitionEn = defObj.definition || '';
          if (!exampleEn && defObj.example) exampleEn = defObj.example;
          allMeanings.push({
            partOfSpeech: m.partOfSpeech,
            definition: defObj.definition,
            example: defObj.example || null,
            synonyms: (m.synonyms || []).slice(0, 4)
          });
        }
      });
    }

    return {
      word: clean,
      phonetic: phonetic || `/${clean}/`,
      audioUrl: audioUrl || null,
      part_of_speech: primaryPos,
      definition_tr: trTranslation || 'Türkçe karşılığı',
      definition_en: definitionEn || 'English definition not found',
      example: exampleEn || '',
      meanings: allMeanings,
      foundOnline: !!dictData
    };
  }

  async addCustomWord(word, translation, cefrLevel = 'A1', example = '', phonetic = '', partOfSpeech = 'kelime') {
    const items = this.getUserData('srs_items') || [];
    const cleanWord = (word || '').trim();
    if (!cleanWord) return null;
    const existing = items.find(i => (i.word || '').toLowerCase() === cleanWord.toLowerCase());
    if (existing) {
      existing.due = true;
      if (translation && (!existing.definition_tr || existing.definition_tr === '-')) {
        existing.definition_tr = translation;
      }
      if (phonetic && !existing.phonetic) existing.phonetic = phonetic;
      if (example && (!existing.examples || existing.examples.length === 0)) existing.examples = [example];
      this.setUserData('srs_items', items);
      this.recordDailyTaskProgress('task-vocab');
      return existing;
    }
    const newItem = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      word: cleanWord,
      definition_tr: translation || 'Tanım eklenmedi',
      definition_en: '',
      phonetic: phonetic || '',
      cefr_level: cefrLevel || 'A1',
      examples: example ? [example] : [],
      collocations: [],
      due: true,
      repetitions: 0,
      ease_factor: 2.5,
      interval: 1,
      part_of_speech: partOfSpeech || 'kelime',
      created_at: new Date().toISOString()
    };
    items.unshift(newItem);
    this.setUserData('srs_items', items);
    this.recordDailyTaskProgress('task-vocab');
    return newItem;
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
    this.recordDailyTaskProgress('task-reading');

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
    this.recordDailyTaskProgress('task-writing');

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
    this.recordDailyTaskProgress('task-speaking');
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
