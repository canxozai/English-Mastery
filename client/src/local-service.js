/**
 * Client-Side Standalone Service for LinguaForge
 * Enables 100% offline & GitHub Pages static execution without requiring Express server
 */
import { staticData } from './static-data.js';

class LocalService {
  constructor() {
    this.storageKeyPrefix = 'linguaforge_local_';
    this.initStorage();
  }

  initStorage() {
    if (!this.get('stats')) {
      this.set('stats', {
        xp: 120,
        level: 1,
        current_streak: 1,
        longest_streak: 1,
        total_study_minutes: 15,
        total_words_learned: 10,
        total_grammar_mastered: 4,
        total_errors_resolved: 2,
        last_study_date: new Date().toISOString().slice(0, 10)
      });
    }

    if (!this.get('skills')) {
      this.set('skills', {
        grammar: { level: 'A2', sublevel: '+', score: 65 },
        vocabulary: { level: 'A2', sublevel: '', score: 55 },
        reading: { level: 'B1', sublevel: '-', score: 68 },
        listening: { level: 'A2', sublevel: '+', score: 62 },
        writing: { level: 'A2', sublevel: '', score: 50 },
        speaking: { level: 'A2', sublevel: '', score: 48 },
        pronunciation: { level: 'A2', sublevel: '', score: 52 },
        sentence_formation: { level: 'A2', sublevel: '+', score: 60 },
        comprehension: { level: 'B1', sublevel: '', score: 70 },
        communication: { level: 'A2', sublevel: '', score: 54 }
      });
    }

    if (!this.get('errors')) {
      this.set('errors', [
        {
          id: 1,
          skill: 'grammar',
          error_text: 'She don\'t like coffee.',
          correction: 'She doesn\'t like coffee.',
          explanation: 'Third-person singular requires "doesn\'t" in the Present Simple, not "don\'t".',
          occurrence_count: 2,
          resolved: 0
        },
        {
          id: 2,
          skill: 'vocabulary',
          error_text: 'I made my homework.',
          correction: 'I did my homework.',
          explanation: 'Collocation error: in English we "do homework" and "make a mistake".',
          occurrence_count: 3,
          resolved: 0
        }
      ]);
    }

    if (!this.get('srs_items')) {
      const vocab = staticData.vocabulary_items.map((v, i) => ({
        ...v,
        id: v.id || i + 1,
        examples: typeof v.examples === 'string' ? JSON.parse(v.examples || '[]') : v.examples,
        synonyms: typeof v.synonyms === 'string' ? JSON.parse(v.synonyms || '[]') : v.synonyms,
        antonyms: typeof v.antonyms === 'string' ? JSON.parse(v.antonyms || '[]') : v.antonyms,
        collocations: typeof v.collocations === 'string' ? JSON.parse(v.collocations || '[]') : v.collocations,
        interval: 1,
        ease_factor: 2.5,
        repetitions: 1,
        due: true
      }));
      this.set('srs_items', vocab);
    }
  }

  get(key) {
    try {
      const raw = localStorage.getItem(this.storageKeyPrefix + key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  set(key, val) {
    try {
      localStorage.setItem(this.storageKeyPrefix + key, JSON.stringify(val));
    } catch (e) {}
  }

  // Dashboard
  async getDashboard() {
    const stats = this.get('stats');
    const skills = this.get('skills');
    const errors = this.get('errors') || [];
    const srs = this.get('srs_items') || [];
    const dueCount = srs.filter(i => i.due).length;

    return {
      user: {
        displayName: localStorage.getItem('linguaforge_display_name') || 'English Learner',
        onboardingComplete: true
      },
      stats,
      skills,
      dailyTasks: {
        tasks: [
          { id: 'task-vocab', skill: 'vocabulary', description: 'Review 10 vocabulary cards in Spaced Repetition queue', targetView: 'vocabulary' },
          { id: 'task-grammar', skill: 'grammar', description: 'Complete 1 exercise in Grammar Academy', targetView: 'grammar' },
          { id: 'task-reading', skill: 'reading', description: 'Read 1 graded article and answer comprehension questions', targetView: 'reading' },
          { id: 'task-speaking', skill: 'speaking', description: 'Practice 1 conversational speaking scenario', targetView: 'speaking' }
        ],
        completed_tasks: this.get('completed_tasks') || []
      },
      recentErrors: errors.filter(e => !e.resolved),
      reviewStats: { dueToday: dueCount, totalItems: srs.length },
      weekStudy: [
        { date: '2026-09-21', total_minutes: 25 },
        { date: '2026-09-22', total_minutes: 30 },
        { date: '2026-09-23', total_minutes: 20 },
        { date: '2026-09-24', total_minutes: 35 },
        { date: '2026-09-25', total_minutes: 15 },
        { date: '2026-09-26', total_minutes: 40 },
        { date: '2026-09-27', total_minutes: 25 }
      ],
      latestAssessment: this.get('latest_assessment') || {
        overall_cefr: 'B1',
        results: { overallCEFR: 'B1' }
      }
    };
  }

  // Assessment
  async startAssessment() {
    const assessmentId = Date.now();
    this.currentAssessment = {
      id: assessmentId,
      answers: [],
      skillsEvaluated: {}
    };
    return {
      assessmentId,
      skills: ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking', 'pronunciation', 'sentence_formation', 'comprehension', 'communication'],
      message: 'Diagnostic assessment started.'
    };
  }

  async getAssessmentQuestions(assessmentId, skill) {
    const all = staticData.assessment_question_bank || [];
    const filtered = all.filter(q => q.skill === skill);
    const questions = filtered.slice(0, 4).map(q => ({
      id: q.id,
      type: q.question_type,
      question: q.question,
      options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options,
      cefrLevel: q.cefr_level,
      topic: q.topic
    }));

    return {
      skill,
      targetLevel: 'A2',
      questions
    };
  }

  async submitAssessmentAnswer(assessmentId, questionBankId, userAnswer, responseTimeMs) {
    const all = staticData.assessment_question_bank || [];
    const q = all.find(item => item.id === questionBankId) || all[0];
    const isCorrect = userAnswer.trim().toLowerCase() === q.correct_answer.trim().toLowerCase();

    if (!isCorrect) {
      // Log to error bank
      const errors = this.get('errors') || [];
      errors.unshift({
        id: Date.now(),
        skill: q.skill,
        error_text: userAnswer,
        correction: q.correct_answer,
        explanation: q.explanation || 'Question mistake in diagnostic test.',
        occurrence_count: 1,
        resolved: 0
      });
      this.set('errors', errors);
    }

    return {
      questionId: questionBankId,
      isCorrect,
      score: isCorrect ? 1 : 0,
      correctAnswer: q.correct_answer,
      explanation: q.explanation,
      explanationTr: q.explanation_tr,
      skill: q.skill,
      cefrLevel: q.cefr_level,
      topic: q.topic
    };
  }

  async completeAssessment(assessmentId) {
    const skills = {
      grammar: { level: 'B1', sublevel: '', score: 75, correct: 3, total: 4, accuracy: 75 },
      vocabulary: { level: 'A2', sublevel: '+', score: 70, correct: 3, total: 4, accuracy: 75 },
      reading: { level: 'B1', sublevel: '+', score: 80, correct: 4, total: 4, accuracy: 100 },
      listening: { level: 'A2', sublevel: '+', score: 65, correct: 3, total: 4, accuracy: 75 },
      writing: { level: 'A2', sublevel: '', score: 55, correct: 2, total: 4, accuracy: 50 },
      speaking: { level: 'A2', sublevel: '', score: 50, correct: 2, total: 4, accuracy: 50 },
      pronunciation: { level: 'A2', sublevel: '+', score: 60, correct: 3, total: 4, accuracy: 75 },
      sentence_formation: { level: 'B1', sublevel: '-', score: 65, correct: 3, total: 4, accuracy: 75 },
      comprehension: { level: 'B1', sublevel: '+', score: 85, correct: 4, total: 4, accuracy: 100 },
      communication: { level: 'A2', sublevel: '+', score: 60, correct: 3, total: 4, accuracy: 75 }
    };

    const result = {
      overallCEFR: 'B1',
      skills,
      weakAreas: [
        { skill: 'speaking', level: 'A2', detail: 'Hesitations and turn-taking strategies' },
        { skill: 'writing', level: 'A2', detail: 'Connector usage and formal register' }
      ],
      strongAreas: [
        { skill: 'reading', level: 'B1+', detail: 'High inference and speed accuracy' },
        { skill: 'comprehension', level: 'B1+', detail: 'Intuitive idiom comprehension' }
      ],
      totalQuestions: 40,
      totalCorrect: 29
    };

    this.set('latest_assessment', result);
    const currSkills = this.get('skills') || {};
    for (const [k, v] of Object.entries(skills)) {
      currSkills[k] = { level: v.level, sublevel: v.sublevel, score: v.score };
    }
    this.set('skills', currSkills);

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
    const stats = this.get('stats');
    stats.xp += isCorrect ? 15 : 5;
    this.set('stats', stats);

    return {
      isCorrect,
      correctAnswer: ex.correct_answer,
      feedback: isCorrect ? 'Excellent! Correct usage.' : `Incorrect. The target form is: ${ex.correct_answer}`,
      explanation: ex.explanation,
      explanationTr: ex.explanation_tr
    };
  }

  // Vocabulary
  async getVocabularyItems(params = {}) {
    const items = (this.get('srs_items') || []).map(v => ({
      ...v,
      examples: typeof v.examples === 'string' ? JSON.parse(v.examples) : v.examples,
      collocations: typeof v.collocations === 'string' ? JSON.parse(v.collocations) : v.collocations
    }));
    return { items, total: items.length };
  }

  async getReviewQueue() {
    const items = (this.get('srs_items') || []).filter(i => i.due);
    return { items, dueToday: items.length };
  }

  async submitReview(itemId, rating) {
    const items = this.get('srs_items') || [];
    const idx = items.findIndex(i => i.id === itemId);
    if (idx !== -1) {
      items[idx].due = false;
      items[idx].repetitions += 1;
      this.set('srs_items', items);
    }
    const stats = this.get('stats');
    stats.xp += 10;
    stats.total_words_learned += 1;
    this.set('stats', stats);
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

    const stats = this.get('stats');
    stats.xp += score >= 70 ? 30 : 15;
    this.set('stats', stats);

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

  async submitWriting(promptId, text, timeSpentSeconds) {
    const words = text.split(/\s+/).length;
    const sentences = (text.match(/[^.!?]+[.!?]+/g) || []).length || 1;
    const avgLen = (words / sentences).toFixed(1);

    const score = Math.min(100, Math.max(60, 50 + Math.round(words / 4)));
    const cefr = score >= 85 ? 'B2' : (score >= 70 ? 'B1' : 'A2');

    return {
      overallScore: score,
      cefrLevel: cefr,
      grammarScore: 82,
      vocabularyScore: 78,
      structureScore: 84,
      feedback: [
        `Good syntactic variety with an average sentence length of ${avgLen} words.`,
        'Strong use of contextual vocabulary aligned with the prompt requirements.',
        'Consider incorporating more cohesive discourse markers (e.g., "Furthermore", "In contrast", "Consequently") to boost narrative flow.'
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
  async getErrors(params = {}) {
    const errors = this.get('errors') || [];
    return { errors };
  }

  async resolveError(id) {
    const errors = this.get('errors') || [];
    const idx = errors.findIndex(e => String(e.id) === String(id));
    if (idx !== -1) {
      errors[idx].resolved = 1;
      this.set('errors', errors);
    }
    const stats = this.get('stats');
    stats.total_errors_resolved += 1;
    this.set('stats', stats);
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
