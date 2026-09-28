import express from 'express';
import { getDb } from '../database/db.js';
import { ensureUser } from '../middleware/auth.js';
import { SYNTAX_CATEGORIES, SYNTAX_EXERCISES } from '../../client/src/syntax-data.js';

const router = express.Router();

// =============================================
// READING ROUTES
// =============================================
router.get('/api/reading/materials', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const { level } = req.query;
    let materials;
    if (level && level !== 'all') {
      materials = db.prepare(`
        SELECT rm.*, urs.comprehension_score, urs.completed_at
        FROM reading_materials rm
        LEFT JOIN user_reading_sessions urs ON rm.id = urs.material_id AND urs.user_id = ?
        WHERE rm.cefr_level = ?
        ORDER BY rm.id
      `).all(req.user.id, level);
    } else {
      materials = db.prepare(`
        SELECT rm.*, urs.comprehension_score, urs.completed_at
        FROM reading_materials rm
        LEFT JOIN user_reading_sessions urs ON rm.id = urs.material_id AND urs.user_id = ?
        ORDER BY rm.id
      `).all(req.user.id);
    }

    res.json(materials.map(m => ({
      ...m,
      comprehension_questions: JSON.parse(m.comprehension_questions || '[]'),
      key_vocabulary: JSON.parse(m.key_vocabulary || '[]'),
      completed: !!m.completed_at
    })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to get reading materials' });
  }
});

router.get('/api/reading/:id', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const material = db.prepare('SELECT * FROM reading_materials WHERE id = ?').get(parseInt(req.params.id));
    if (!material) return res.status(404).json({ error: 'Material not found' });

    res.json({
      ...material,
      comprehension_questions: JSON.parse(material.comprehension_questions || '[]'),
      key_vocabulary: JSON.parse(material.key_vocabulary || '[]')
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get material' });
  }
});

router.post('/api/reading/:id/submit', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const { answers, readingTimeSeconds } = req.body;
    const material = db.prepare('SELECT * FROM reading_materials WHERE id = ?').get(parseInt(req.params.id));
    if (!material) return res.status(404).json({ error: 'Material not found' });

    const questions = JSON.parse(material.comprehension_questions || '[]');
    let correct = 0;
    const results = [];

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const userAnswer = answers ? answers[i] : undefined;
      const isCorrect = userAnswer === q.answer;
      if (isCorrect) correct++;
      results.push({ question: q.question, userAnswer, correctAnswer: q.answer, isCorrect, type: q.type });
    }

    const score = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;

    db.prepare(`
      INSERT INTO user_reading_sessions (user_id, material_id, completed_at, reading_time_seconds, comprehension_score, answers)
      VALUES (?, ?, datetime('now'), ?, ?, ?)
    `).run(req.user.id, material.id, readingTimeSeconds || 0, score, JSON.stringify(results));

    // Record progress
    db.prepare(`
      INSERT INTO progress_history (user_id, date, skill, metric, value, context)
      VALUES (?, date('now'), 'reading', 'comprehension_score', ?, ?)
    `).run(req.user.id, score, material.title);

    db.prepare('UPDATE user_stats SET xp = xp + 25 WHERE user_id = ?').run(req.user.id);

    db.prepare(`
      INSERT INTO study_sessions (user_id, skill, activity_type, duration_minutes, items_practiced, items_correct, completed_at)
      VALUES (?, 'reading', 'comprehension', ?, ?, ?, datetime('now'))
    `).run(req.user.id, Math.round((readingTimeSeconds || 0) / 60), questions.length, correct);

    res.json({ score, correct, total: questions.length, results });
  } catch (err) {
    console.error('Reading submit error:', err);
    res.status(500).json({ error: 'Failed to submit reading' });
  }
});

// =============================================
// LISTENING ROUTES
// =============================================
router.get('/api/listening/materials', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const { level } = req.query;
    let materials;
    if (level && level !== 'all') {
      materials = db.prepare(`
        SELECT lm.*, uls.comprehension_score, uls.completed_at
        FROM listening_materials lm
        LEFT JOIN user_listening_sessions uls ON lm.id = uls.material_id AND uls.user_id = ?
        WHERE lm.cefr_level = ?
        ORDER BY lm.id
      `).all(req.user.id, level);
    } else {
      materials = db.prepare(`
        SELECT lm.*, uls.comprehension_score, uls.completed_at
        FROM listening_materials lm
        LEFT JOIN user_listening_sessions uls ON lm.id = uls.material_id AND uls.user_id = ?
        ORDER BY lm.id
      `).all(req.user.id);
    }

    res.json(materials.map(m => ({
      ...m,
      comprehension_questions: JSON.parse(m.comprehension_questions || '[]'),
      key_vocabulary: JSON.parse(m.key_vocabulary || '[]'),
      completed: !!m.completed_at
    })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to get listening materials' });
  }
});

router.get('/api/listening/:id', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const material = db.prepare('SELECT * FROM listening_materials WHERE id = ?').get(parseInt(req.params.id));
    if (!material) return res.status(404).json({ error: 'Material not found' });

    res.json({
      id: material.id,
      title: material.title,
      description: material.description,
      cefr_level: material.cefr_level,
      audio_text: material.audio_text,
      speech_rate: material.speech_rate,
      accent: material.accent,
      duration_seconds: material.duration_seconds,
      comprehension_questions: JSON.parse(material.comprehension_questions || '[]'),
      key_vocabulary: JSON.parse(material.key_vocabulary || '[]')
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get material' });
  }
});

router.get('/api/listening/:id/transcript', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const material = db.prepare('SELECT transcript FROM listening_materials WHERE id = ?').get(parseInt(req.params.id));
    if (!material) return res.status(404).json({ error: 'Material not found' });
    res.json({ transcript: material.transcript });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get transcript' });
  }
});

router.post('/api/listening/:id/submit', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const { answers, timesListened } = req.body;
    const material = db.prepare('SELECT * FROM listening_materials WHERE id = ?').get(parseInt(req.params.id));
    if (!material) return res.status(404).json({ error: 'Material not found' });

    const questions = JSON.parse(material.comprehension_questions || '[]');
    let correct = 0;
    const results = [];

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const userAnswer = answers ? answers[i] : undefined;
      const isCorrect = userAnswer === q.answer;
      if (isCorrect) correct++;
      results.push({ question: q.question, userAnswer, correctAnswer: q.answer, isCorrect });
    }

    const score = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;

    db.prepare(`
      INSERT INTO user_listening_sessions (user_id, material_id, completed_at, times_listened, comprehension_score, answers)
      VALUES (?, ?, datetime('now'), ?, ?, ?)
    `).run(req.user.id, material.id, timesListened || 1, score, JSON.stringify(results));

    db.prepare(`
      INSERT INTO progress_history (user_id, date, skill, metric, value, context)
      VALUES (?, date('now'), 'listening', 'comprehension_score', ?, ?)
    `).run(req.user.id, score, material.title);

    db.prepare('UPDATE user_stats SET xp = xp + 20 WHERE user_id = ?').run(req.user.id);

    res.json({ score, correct, total: questions.length, results, transcript: material.transcript });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit listening' });
  }
});

// =============================================
// WRITING ROUTES
// =============================================
router.get('/api/writing/prompts', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const { level } = req.query;
    let prompts;
    if (level && level !== 'all') {
      prompts = db.prepare('SELECT * FROM writing_prompts WHERE cefr_level = ? ORDER BY type').all(level);
    } else {
      prompts = db.prepare('SELECT * FROM writing_prompts ORDER BY cefr_level, type').all();
    }
    res.json(prompts.map(p => ({
      ...p,
      evaluation_criteria: JSON.parse(p.evaluation_criteria || '[]')
    })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to get writing prompts' });
  }
});

router.post('/api/writing/submit', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const { promptId, text, promptText } = req.body;

    const prompt = promptId ? db.prepare('SELECT * FROM writing_prompts WHERE id = ?').get(promptId) : null;

    const words = (text || '').trim().split(/\s+/).filter(w => w.length > 0);
    const sentences = (text || '').split(/[.!?]+/).filter(s => s.trim().length > 0);
    const avgWordsPerSentence = sentences.length > 0 ? words.length / sentences.length : 0;

    const errors = [];
    const suggestions = [];

    const commonErrors = [
      { pattern: /\bi\b(?=[^'])/g, fix: 'I', type: 'capitalization', msg: '"I" should always be capitalized' },
      { pattern: /\bdont\b/gi, fix: "don't", type: 'spelling', msg: 'Use apostrophe: don\'t' },
      { pattern: /\bcant\b/gi, fix: "can't", type: 'spelling', msg: 'Use apostrophe: can\'t' },
      { pattern: /\bwont\b/gi, fix: "won't", type: 'spelling', msg: 'Use apostrophe: won\'t' },
      { pattern: /\bdoesnt\b/gi, fix: "doesn't", type: 'spelling', msg: 'Use apostrophe: doesn\'t' },
      { pattern: /\bim\b/gi, fix: "I'm", type: 'spelling', msg: 'Use apostrophe: I\'m' },
      { pattern: /\bive\b/gi, fix: "I've", type: 'spelling', msg: 'Use apostrophe: I\'ve' },
      { pattern: /\bthere is\s+\w+s\b/gi, fix: null, type: 'grammar', msg: 'Consider using "there are" for plural nouns' },
      { pattern: /\b(he|she|it)\s+(don't)\b/gi, fix: null, type: 'grammar', msg: 'Use "doesn\'t" with he/she/it' },
    ];

    for (const check of commonErrors) {
      const matches = (text || '').match(check.pattern);
      if (matches) {
        for (const match of matches) {
          errors.push({
            text: match,
            fix: check.fix,
            type: check.type,
            message: check.msg
          });
        }
      }
    }

    const grammarScore = Math.max(0, 100 - errors.filter(e => e.type === 'grammar').length * 15);
    const spellingScore = Math.max(0, 100 - errors.filter(e => e.type === 'spelling').length * 10);
    const overallScore = Math.round((grammarScore + spellingScore) / 2);

    db.prepare(`
      INSERT INTO user_writing_submissions (user_id, prompt_id, type, prompt_text, user_text, feedback, grammar_score, vocabulary_score, structure_score, overall_score, errors_found, suggestions)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      req.user.id, promptId || null,
      prompt?.type || 'free',
      promptText || prompt?.prompt || 'Free writing',
      text,
      JSON.stringify({ wordCount: words.length, sentenceCount: sentences.length, avgWordsPerSentence }),
      grammarScore, null, null, overallScore,
      JSON.stringify(errors), JSON.stringify(suggestions)
    );

    for (const error of errors) {
      if (error.type === 'grammar') {
        db.prepare(`
          INSERT INTO user_errors (user_id, skill, topic, error_type, my_text, correct_text, explanation, context)
          VALUES (?, 'writing', ?, ?, ?, ?, ?, 'writing_exercise')
        `).run(req.user.id, error.type, 'grammar_error', error.text, error.fix || 'see suggestion', error.message);
      }
    }

    db.prepare('UPDATE user_stats SET xp = xp + 30 WHERE user_id = ?').run(req.user.id);

    db.prepare(`
      INSERT INTO progress_history (user_id, date, skill, metric, value, context)
      VALUES (?, date('now'), 'writing', 'overall_score', ?, 'writing exercise')
    `).run(req.user.id, overallScore);

    res.json({
      score: overallScore,
      grammarScore,
      wordCount: words.length,
      sentenceCount: sentences.length,
      avgWordsPerSentence: Math.round(avgWordsPerSentence * 10) / 10,
      errors,
      suggestions,
      needsAI: true,
      message: errors.length > 0
        ? 'Some issues were found in your writing. Review the errors below.'
        : 'Good job! No common errors detected. AI analysis would provide deeper feedback.'
    });
  } catch (err) {
    console.error('Writing submit error:', err);
    res.status(500).json({ error: 'Failed to submit writing' });
  }
});

// =============================================
// SPEAKING ROUTES
// =============================================
router.get('/api/speaking/scenarios', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const { level } = req.query;
    let scenarios;
    if (level && level !== 'all') {
      scenarios = db.prepare('SELECT * FROM speaking_scenarios WHERE cefr_level = ? ORDER BY id').all(level);
    } else {
      scenarios = db.prepare('SELECT * FROM speaking_scenarios ORDER BY cefr_level, id').all();
    }
    res.json(scenarios.map(s => ({
      ...s,
      key_vocabulary: JSON.parse(s.key_vocabulary || '[]'),
      key_phrases: JSON.parse(s.key_phrases || '[]'),
      objectives: JSON.parse(s.objectives || '[]')
    })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to get scenarios' });
  }
});

router.get('/api/speaking/scenario/:id', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const scenario = db.prepare('SELECT * FROM speaking_scenarios WHERE id = ?').get(parseInt(req.params.id));
    if (!scenario) return res.status(404).json({ error: 'Scenario not found' });

    res.json({
      ...scenario,
      key_vocabulary: JSON.parse(scenario.key_vocabulary || '[]'),
      key_phrases: JSON.parse(scenario.key_phrases || '[]'),
      objectives: JSON.parse(scenario.objectives || '[]')
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get scenario' });
  }
});

// =============================================
// SYNTAX & SENTENCE FORMATION ROUTES
// =============================================
router.get('/api/syntax/exercises', ensureUser, (req, res) => {
  try {
    const { category, level } = req.query;
    let list = [...SYNTAX_EXERCISES];
    if (category && category !== 'all') {
      list = list.filter(item => item.category === category);
    }
    if (level && level !== 'all') {
      list = list.filter(item => item.cefr_level.toUpperCase() === level.toUpperCase());
    }
    res.json({
      categories: SYNTAX_CATEGORIES,
      exercises: list,
      total: list.length
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get syntax exercises' });
  }
});

router.post('/api/syntax/submit', ensureUser, (req, res) => {
  try {
    const { exerciseId, sentence, isFirstAttempt = true } = req.body;
    const exercise = SYNTAX_EXERCISES.find(e => e.id === exerciseId);
    if (!exercise) return res.status(404).json({ error: 'Exercise not found' });

    const clean = (s) => (s || '')
      .trim()
      .toLowerCase()
      .replace(/[.,!?;:\"'’]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const userClean = clean(sentence);
    const targetClean = clean(exercise.correct_sentence);
    const altClean = (exercise.acceptable_alternatives || []).map(clean);

    const isCorrect = userClean === targetClean || altClean.includes(userClean);
    const xpGained = isCorrect ? (isFirstAttempt ? 15 : 8) : 2;

    const db = getDb();
    // Update or insert skill profile for sentence_formation
    const existing = db.prepare('SELECT * FROM skill_profiles WHERE user_id = ? AND skill = ?').get(req.user.id, 'sentence_formation');
    let newScore = isCorrect ? Math.min(100, (existing ? existing.score : 0) + 4) : (existing ? existing.score : 0);
    let newLevel = 'A1';
    if (newScore >= 85) newLevel = 'B2';
    else if (newScore >= 65) newLevel = 'B1';
    else if (newScore >= 40) newLevel = 'A2';

    if (existing) {
      db.prepare('UPDATE skill_profiles SET score = ?, cefr_level = ?, assessed_at = datetime(\'now\') WHERE id = ?')
        .run(newScore, newLevel, existing.id);
    } else {
      db.prepare('INSERT INTO skill_profiles (user_id, skill, cefr_level, score, assessed_at) VALUES (?, ?, ?, ?, datetime(\'now\'))')
        .run(req.user.id, 'sentence_formation', newLevel, newScore);
    }

    // Record error if wrong
    if (!isCorrect) {
      db.prepare(`
        INSERT INTO user_errors (user_id, skill, topic, error_type, my_text, correct_text, explanation_tr, occurrence_count, resolved, last_occurred)
        VALUES (?, 'sentence_formation', 'Word Order', 'word_order', ?, ?, ?, 1, 0, datetime('now'))
      `).run(req.user.id, sentence, exercise.correct_sentence, exercise.explanation_tr || 'S-V-O-M-P-T dizilim hatası');
    }

    res.json({
      isCorrect,
      correctSentence: exercise.correct_sentence,
      grammarBreakdown: exercise.grammar_breakdown,
      explanationTr: exercise.explanation_tr,
      xpGained,
      sentenceFormationSkill: { level: newLevel, score: newScore }
    });
  } catch (err) {
    console.error('Syntax submit error:', err);
    res.status(500).json({ error: 'Failed to submit syntax exercise' });
  }
});

export default router;
