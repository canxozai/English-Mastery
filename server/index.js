import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { initDb, getDb } from './database/db.js';
import { createSchema } from './database/schema.js';
import * as assessmentEngine from './engines/assessment-engine.js';
import * as curriculumEngine from './engines/curriculum-engine.js';
import * as spacedRepetition from './engines/spaced-repetition.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Initialize database
let db;
async function initServer() {
  db = await initDb();
  createSchema();

// =============================================
// MIDDLEWARE: Simple user session (cookie-based for simplicity)
// =============================================
function ensureUser(req, res, next) {
  const userId = req.headers['x-user-id'];
  if (!userId) {
    return res.status(401).json({ error: 'No user ID provided' });
  }
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  req.user = user;
  // Update last active
  db.prepare('UPDATE users SET last_active = datetime(\'now\') WHERE id = ?').run(userId);
  next();
}

// =============================================
// AUTH / USER ROUTES
// =============================================
app.post('/api/auth/register', (req, res) => {
  try {
    const { username, displayName } = req.body;
    if (!username || !displayName) {
      return res.status(400).json({ error: 'Username and display name are required' });
    }

    const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
    if (existing) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    const userId = uuidv4();
    db.prepare(`
      INSERT INTO users (id, username, display_name) VALUES (?, ?, ?)
    `).run(userId, username, displayName);

    // Create initial stats
    db.prepare(`
      INSERT INTO user_stats (user_id) VALUES (?)
    `).run(userId);

    res.json({ userId, username, displayName });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/auth/login', (req, res) => {
  try {
    const { username } = req.body;
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({
      userId: user.id,
      username: user.username,
      displayName: user.display_name,
      onboardingComplete: user.onboarding_complete === 1
    });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

app.get('/api/user/profile', ensureUser, (req, res) => {
  const stats = db.prepare('SELECT * FROM user_stats WHERE user_id = ?').get(req.user.id);
  const profiles = db.prepare('SELECT * FROM skill_profiles WHERE user_id = ?').all(req.user.id);

  res.json({
    user: {
      id: req.user.id,
      username: req.user.username,
      displayName: req.user.display_name,
      onboardingComplete: req.user.onboarding_complete === 1,
      createdAt: req.user.created_at
    },
    stats: stats || { xp: 0, level: 1, current_streak: 0, longest_streak: 0 },
    skills: profiles.reduce((acc, p) => {
      acc[p.skill] = { level: p.cefr_level, sublevel: p.cefr_sublevel, score: p.score };
      return acc;
    }, {})
  });
});

// =============================================
// ASSESSMENT ROUTES
// =============================================
app.post('/api/assessment/start', ensureUser, (req, res) => {
  try {
    const result = assessmentEngine.startAssessment(db, req.user.id);
    res.json(result);
  } catch (err) {
    console.error('Assessment start error:', err);
    res.status(500).json({ error: 'Failed to start assessment' });
  }
});

app.get('/api/assessment/:id/questions/:skill', ensureUser, (req, res) => {
  try {
    const { id, skill } = req.params;
    const performance = assessmentEngine.getSkillPerformance(db, parseInt(id), skill);

    // Determine current level based on performance
    let currentLevel = 'A2'; // Start at A2
    if (performance.total >= 3) {
      const accuracy = performance.correct / performance.total;
      if (accuracy >= 0.8) {
        const levels = assessmentEngine.CEFR_LEVELS;
        // Find highest successful level and go one above
        for (const level of Object.keys(performance.byLevel).sort()) {
          const lp = performance.byLevel[level];
          if (lp.total > 0 && lp.correct / lp.total >= 0.7) {
            const idx = levels.indexOf(level);
            if (idx < levels.length - 1) currentLevel = levels[idx + 1];
          }
        }
      } else if (accuracy < 0.4) {
        currentLevel = 'A1';
      }
    }

    const questions = assessmentEngine.getQuestionsForSkill(db, parseInt(id), skill, currentLevel, performance);
    res.json(questions);
  } catch (err) {
    console.error('Questions error:', err);
    res.status(500).json({ error: 'Failed to get questions' });
  }
});

app.post('/api/assessment/:id/answer', ensureUser, (req, res) => {
  try {
    const { questionBankId, answer, responseTimeMs } = req.body;
    const result = assessmentEngine.submitAnswer(db, parseInt(req.params.id), questionBankId, answer, responseTimeMs || 0);
    res.json(result);
  } catch (err) {
    console.error('Answer submission error:', err);
    res.status(500).json({ error: 'Failed to submit answer' });
  }
});

app.post('/api/assessment/:id/complete', ensureUser, (req, res) => {
  try {
    const result = assessmentEngine.completeAssessment(db, req.user.id, parseInt(req.params.id));

    // Generate learning plan after assessment
    const plan = curriculumEngine.generateLearningPlan(db, req.user.id);

    res.json({ assessment: result, learningPlan: plan });
  } catch (err) {
    console.error('Assessment complete error:', err);
    res.status(500).json({ error: 'Failed to complete assessment' });
  }
});

app.get('/api/assessment/:id/progress', ensureUser, (req, res) => {
  try {
    const progress = assessmentEngine.getAssessmentProgress(db, parseInt(req.params.id));
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get progress' });
  }
});

app.get('/api/assessment/latest', ensureUser, (req, res) => {
  try {
    const assessment = db.prepare(`
      SELECT * FROM assessments WHERE user_id = ? ORDER BY started_at DESC LIMIT 1
    `).get(req.user.id);

    if (!assessment) {
      return res.json({ assessment: null });
    }

    res.json({
      assessment: {
        ...assessment,
        results: assessment.results ? JSON.parse(assessment.results) : null
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get assessment' });
  }
});

// =============================================
// GRAMMAR ROUTES
// =============================================
app.get('/api/grammar/topics', ensureUser, (req, res) => {
  try {
    const topics = db.prepare(`
      SELECT gt.*, ugp.mastery_level, ugp.recognition_score, ugp.production_score, ugp.total_attempts, ugp.correct_attempts
      FROM grammar_topics gt
      LEFT JOIN user_grammar_progress ugp ON gt.id = ugp.topic_id AND ugp.user_id = ?
      ORDER BY gt.order_index
    `).all(req.user.id);

    res.json(topics.map(t => ({
      ...t,
      examples: JSON.parse(t.examples || '[]'),
      rules: JSON.parse(t.rules || '[]'),
      common_mistakes: JSON.parse(t.common_mistakes || '[]'),
      prerequisite_topics: JSON.parse(t.prerequisite_topics || '[]'),
      mastery_level: t.mastery_level || 0
    })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to get grammar topics' });
  }
});

app.get('/api/grammar/topic/:slug', ensureUser, (req, res) => {
  try {
    const topic = db.prepare('SELECT * FROM grammar_topics WHERE slug = ?').get(req.params.slug);
    if (!topic) return res.status(404).json({ error: 'Topic not found' });

    const exercises = db.prepare('SELECT * FROM grammar_exercises WHERE topic_id = ? ORDER BY difficulty, exercise_type').all(topic.id);
    const progress = db.prepare('SELECT * FROM user_grammar_progress WHERE user_id = ? AND topic_id = ?').get(req.user.id, topic.id);

    res.json({
      topic: {
        ...topic,
        examples: JSON.parse(topic.examples || '[]'),
        rules: JSON.parse(topic.rules || '[]'),
        common_mistakes: JSON.parse(topic.common_mistakes || '[]')
      },
      exercises: exercises.map(e => ({
        ...e,
        options: e.options ? JSON.parse(e.options) : null
      })),
      progress: progress || { mastery_level: 0, total_attempts: 0, correct_attempts: 0 }
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get topic' });
  }
});

app.post('/api/grammar/exercise/:id/submit', ensureUser, (req, res) => {
  try {
    const exercise = db.prepare('SELECT * FROM grammar_exercises WHERE id = ?').get(parseInt(req.params.id));
    if (!exercise) return res.status(404).json({ error: 'Exercise not found' });

    const { answer, responseTimeMs } = req.body;
    const normalizedAnswer = answer.trim().toLowerCase();
    const normalizedCorrect = exercise.correct_answer.trim().toLowerCase();

    let isCorrect;
    if (exercise.exercise_type === 'multiple_choice') {
      isCorrect = normalizedAnswer === normalizedCorrect;
    } else {
      const cleanAnswer = normalizedAnswer.replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
      const cleanCorrect = normalizedCorrect.replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
      isCorrect = cleanAnswer === cleanCorrect;
    }

    // Update grammar progress
    const existing = db.prepare(
      'SELECT * FROM user_grammar_progress WHERE user_id = ? AND topic_id = ?'
    ).get(req.user.id, exercise.topic_id);

    if (existing) {
      const quality = spacedRepetition.scoreToQuality(isCorrect ? 100 : 0, responseTimeMs);
      const nextReview = spacedRepetition.calculateNextReview(
        quality, existing.consecutive_correct, existing.ease_factor, existing.review_interval_days
      );

      let newMastery = existing.mastery_level;
      const totalAttempts = existing.total_attempts + 1;
      const correctAttempts = existing.correct_attempts + (isCorrect ? 1 : 0);
      const accuracy = correctAttempts / totalAttempts;

      // Update mastery level based on accumulated performance
      if (accuracy >= 0.9 && totalAttempts >= 10) newMastery = 5;
      else if (accuracy >= 0.8 && totalAttempts >= 7) newMastery = 4;
      else if (accuracy >= 0.7 && totalAttempts >= 5) newMastery = 3;
      else if (accuracy >= 0.5 && totalAttempts >= 3) newMastery = 2;
      else if (totalAttempts >= 1) newMastery = 1;

      db.prepare(`
        UPDATE user_grammar_progress SET
          mastery_level = ?, total_attempts = ?, correct_attempts = ?,
          last_practiced = datetime('now'),
          next_review = ?, review_interval_days = ?, ease_factor = ?,
          consecutive_correct = ?,
          recognition_score = CASE WHEN ? = 'multiple_choice' THEN ? ELSE recognition_score END,
          production_score = CASE WHEN ? != 'multiple_choice' THEN ? ELSE production_score END
        WHERE id = ?
      `).run(
        newMastery, totalAttempts, correctAttempts,
        spacedRepetition.calculateDueDate(nextReview.interval), nextReview.interval, nextReview.easeFactor,
        isCorrect ? existing.consecutive_correct + 1 : 0,
        exercise.exercise_type, isCorrect ? Math.min(100, existing.recognition_score + 5) : Math.max(0, existing.recognition_score - 10),
        exercise.exercise_type, isCorrect ? Math.min(100, existing.production_score + 5) : Math.max(0, existing.production_score - 10),
        existing.id
      );
    } else {
      db.prepare(`
        INSERT INTO user_grammar_progress (user_id, topic_id, mastery_level, total_attempts, correct_attempts, last_practiced, next_review, recognition_score, production_score)
        VALUES (?, ?, 1, 1, ?, datetime('now'), ?, ?, ?)
      `).run(
        req.user.id, exercise.topic_id,
        isCorrect ? 1 : 0,
        spacedRepetition.calculateDueDate(isCorrect ? 1 : 0.25),
        exercise.exercise_type === 'multiple_choice' ? (isCorrect ? 10 : 0) : 0,
        exercise.exercise_type !== 'multiple_choice' ? (isCorrect ? 10 : 0) : 0
      );
    }

    // If incorrect, store in error database
    if (!isCorrect) {
      const topic = db.prepare('SELECT name FROM grammar_topics WHERE id = ?').get(exercise.topic_id);
      db.prepare(`
        INSERT INTO user_errors (user_id, skill, topic, error_type, my_text, correct_text, explanation, explanation_tr, context)
        VALUES (?, 'grammar', ?, 'grammar_error', ?, ?, ?, ?, 'grammar_exercise')
      `).run(
        req.user.id, topic?.name || 'Unknown',
        answer, exercise.correct_answer, exercise.explanation, exercise.explanation_tr
      );
    }

    // Add XP
    if (isCorrect) {
      db.prepare('UPDATE user_stats SET xp = xp + 10 WHERE user_id = ?').run(req.user.id);
    }

    // Record study session
    db.prepare(`
      INSERT INTO study_sessions (user_id, skill, activity_type, items_practiced, items_correct)
      VALUES (?, 'grammar', ?, 1, ?)
    `).run(req.user.id, exercise.exercise_type, isCorrect ? 1 : 0);

    res.json({
      isCorrect,
      correctAnswer: exercise.correct_answer,
      explanation: exercise.explanation,
      explanationTr: exercise.explanation_tr,
      hint: exercise.hint
    });
  } catch (err) {
    console.error('Exercise submit error:', err);
    res.status(500).json({ error: 'Failed to submit exercise' });
  }
});

// =============================================
// VOCABULARY ROUTES
// =============================================
app.get('/api/vocabulary/items', ensureUser, (req, res) => {
  try {
    const { level, category, limit = 20, offset = 0 } = req.query;
    let query = `
      SELECT vi.*, uv.mastery_level, uv.total_reviews, uv.correct_reviews, uv.next_review
      FROM vocabulary_items vi
      LEFT JOIN user_vocabulary uv ON vi.id = uv.vocabulary_id AND uv.user_id = ?
    `;
    const params = [req.user.id];
    const conditions = [];

    if (level) { conditions.push('vi.cefr_level = ?'); params.push(level); }
    if (category) { conditions.push('vi.category = ?'); params.push(category); }
    if (conditions.length > 0) query += ' WHERE ' + conditions.join(' AND ');
    query += ` ORDER BY vi.frequency_rank ASC LIMIT ? OFFSET ?`;
    params.push(parseInt(limit), parseInt(offset));

    const items = db.prepare(query).all(...params);

    res.json(items.map(v => ({
      ...v,
      example_sentences: JSON.parse(v.example_sentences || '[]'),
      synonyms: JSON.parse(v.synonyms || '[]'),
      antonyms: JSON.parse(v.antonyms || '[]'),
      collocations: JSON.parse(v.collocations || '[]'),
      word_family: JSON.parse(v.word_family || '[]'),
      common_phrases: JSON.parse(v.common_phrases || '[]'),
      mastery_level: v.mastery_level || 0
    })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to get vocabulary' });
  }
});

app.get('/api/vocabulary/review', ensureUser, (req, res) => {
  try {
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const dueItems = db.prepare(`
      SELECT vi.*, uv.*
      FROM user_vocabulary uv
      JOIN vocabulary_items vi ON vi.id = uv.vocabulary_id
      WHERE uv.user_id = ? AND uv.next_review <= ?
      ORDER BY uv.next_review ASC
      LIMIT 20
    `).all(req.user.id, now);

    // If no due items, get new items to learn
    let newItems = [];
    if (dueItems.length < 5) {
      const profile = db.prepare('SELECT * FROM skill_profiles WHERE user_id = ? AND skill = ?').get(req.user.id, 'vocabulary');
      const level = profile?.cefr_level || 'A2';

      newItems = db.prepare(`
        SELECT vi.* FROM vocabulary_items vi
        LEFT JOIN user_vocabulary uv ON vi.id = uv.vocabulary_id AND uv.user_id = ?
        WHERE uv.id IS NULL AND vi.cefr_level = ?
        ORDER BY vi.frequency_rank ASC
        LIMIT ?
      `).all(req.user.id, level, 5 - dueItems.length);
    }

    res.json({
      dueItems: dueItems.map(v => ({
        ...v,
        example_sentences: JSON.parse(v.example_sentences || '[]'),
        synonyms: JSON.parse(v.synonyms || '[]'),
        collocations: JSON.parse(v.collocations || '[]')
      })),
      newItems: newItems.map(v => ({
        ...v,
        example_sentences: JSON.parse(v.example_sentences || '[]'),
        synonyms: JSON.parse(v.synonyms || '[]'),
        collocations: JSON.parse(v.collocations || '[]'),
        word_family: JSON.parse(v.word_family || '[]'),
        common_phrases: JSON.parse(v.common_phrases || '[]')
      }))
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get review items' });
  }
});

app.post('/api/vocabulary/:id/review', ensureUser, (req, res) => {
  try {
    const vocabId = parseInt(req.params.id);
    const { quality, reviewType } = req.body; // quality 0-5

    const existing = db.prepare(
      'SELECT * FROM user_vocabulary WHERE user_id = ? AND vocabulary_id = ?'
    ).get(req.user.id, vocabId);

    if (existing) {
      const result = spacedRepetition.calculateNextReview(
        quality, existing.consecutive_correct, existing.ease_factor, existing.review_interval_days
      );
      const dueDate = spacedRepetition.calculateDueDate(result.interval);

      let mastery = existing.mastery_level;
      if (quality >= 4 && existing.consecutive_correct >= 5) mastery = Math.min(5, mastery + 1);
      if (quality < 3) mastery = Math.max(0, mastery - 1);

      db.prepare(`
        UPDATE user_vocabulary SET
          mastery_level = ?, total_reviews = total_reviews + 1,
          correct_reviews = correct_reviews + ?,
          last_reviewed = datetime('now'),
          next_review = ?, review_interval_days = ?, ease_factor = ?,
          consecutive_correct = ?
        WHERE id = ?
      `).run(
        mastery, quality >= 3 ? 1 : 0,
        dueDate, result.interval, result.easeFactor,
        quality >= 3 ? existing.consecutive_correct + 1 : 0,
        existing.id
      );

      res.json({ nextReview: dueDate, interval: result.interval, mastery });
    } else {
      // First time learning this word
      const result = spacedRepetition.calculateNextReview(quality, 0, 2.5, 1);
      const dueDate = spacedRepetition.calculateDueDate(result.interval);

      db.prepare(`
        INSERT INTO user_vocabulary (user_id, vocabulary_id, mastery_level, total_reviews, correct_reviews, last_reviewed, next_review, review_interval_days, ease_factor, consecutive_correct)
        VALUES (?, ?, 1, 1, ?, datetime('now'), ?, ?, ?, ?)
      `).run(
        req.user.id, vocabId, quality >= 3 ? 1 : 0,
        dueDate, result.interval, result.easeFactor, quality >= 3 ? 1 : 0
      );

      db.prepare('UPDATE user_stats SET total_words_learned = total_words_learned + 1, xp = xp + 15 WHERE user_id = ?').run(req.user.id);

      res.json({ nextReview: dueDate, interval: result.interval, mastery: 1, isNew: true });
    }
  } catch (err) {
    console.error('Vocab review error:', err);
    res.status(500).json({ error: 'Failed to process review' });
  }
});

// =============================================
// READING ROUTES
// =============================================
app.get('/api/reading/materials', ensureUser, (req, res) => {
  try {
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

app.get('/api/reading/:id', ensureUser, (req, res) => {
  try {
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

app.post('/api/reading/:id/submit', ensureUser, (req, res) => {
  try {
    const { answers, readingTimeSeconds } = req.body;
    const material = db.prepare('SELECT * FROM reading_materials WHERE id = ?').get(parseInt(req.params.id));
    if (!material) return res.status(404).json({ error: 'Material not found' });

    const questions = JSON.parse(material.comprehension_questions || '[]');
    let correct = 0;
    const results = [];

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const userAnswer = answers[i];
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
app.get('/api/listening/materials', ensureUser, (req, res) => {
  try {
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

app.get('/api/listening/:id', ensureUser, (req, res) => {
  try {
    const material = db.prepare('SELECT * FROM listening_materials WHERE id = ?').get(parseInt(req.params.id));
    if (!material) return res.status(404).json({ error: 'Material not found' });

    // Don't send transcript initially (user should listen first)
    res.json({
      id: material.id,
      title: material.title,
      description: material.description,
      cefr_level: material.cefr_level,
      audio_text: material.audio_text, // For TTS
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

app.get('/api/listening/:id/transcript', ensureUser, (req, res) => {
  try {
    const material = db.prepare('SELECT transcript FROM listening_materials WHERE id = ?').get(parseInt(req.params.id));
    if (!material) return res.status(404).json({ error: 'Material not found' });
    res.json({ transcript: material.transcript });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get transcript' });
  }
});

app.post('/api/listening/:id/submit', ensureUser, (req, res) => {
  try {
    const { answers, timesListened } = req.body;
    const material = db.prepare('SELECT * FROM listening_materials WHERE id = ?').get(parseInt(req.params.id));
    if (!material) return res.status(404).json({ error: 'Material not found' });

    const questions = JSON.parse(material.comprehension_questions || '[]');
    let correct = 0;
    const results = [];

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const userAnswer = answers[i];
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
app.get('/api/writing/prompts', ensureUser, (req, res) => {
  try {
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

app.post('/api/writing/submit', ensureUser, (req, res) => {
  try {
    const { promptId, text, promptText } = req.body;

    const prompt = promptId ? db.prepare('SELECT * FROM writing_prompts WHERE id = ?').get(promptId) : null;

    // Basic writing analysis (without AI)
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const avgWordsPerSentence = sentences.length > 0 ? words.length / sentences.length : 0;

    // Basic error detection
    const errors = [];
    const suggestions = [];

    // Check for common errors
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
      const matches = text.match(check.pattern);
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

    // Scoring
    const grammarScore = Math.max(0, 100 - errors.filter(e => e.type === 'grammar').length * 15);
    const spellingScore = Math.max(0, 100 - errors.filter(e => e.type === 'spelling').length * 10);
    const overallScore = Math.round((grammarScore + spellingScore) / 2);

    // Store submission
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

    // Store errors in error database
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
      needsAI: true, // Flag that AI would provide better feedback
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
app.get('/api/speaking/scenarios', ensureUser, (req, res) => {
  try {
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

app.get('/api/speaking/scenario/:id', ensureUser, (req, res) => {
  try {
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
// ERROR DATABASE ROUTES
// =============================================
app.get('/api/errors', ensureUser, (req, res) => {
  try {
    const { skill, resolved } = req.query;
    let query = 'SELECT * FROM user_errors WHERE user_id = ?';
    const params = [req.user.id];

    if (skill) { query += ' AND skill = ?'; params.push(skill); }
    if (resolved !== undefined) { query += ' AND resolved = ?'; params.push(parseInt(resolved)); }

    query += ' ORDER BY occurrence_count DESC, last_occurred DESC LIMIT 50';

    const errors = db.prepare(query).all(...params);
    res.json(errors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get errors' });
  }
});

app.post('/api/errors/:id/resolve', ensureUser, (req, res) => {
  try {
    db.prepare(`
      UPDATE user_errors SET resolved = 1, resolved_at = datetime('now') WHERE id = ? AND user_id = ?
    `).run(parseInt(req.params.id), req.user.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to resolve error' });
  }
});

// =============================================
// PROGRESS & DASHBOARD ROUTES
// =============================================
app.get('/api/dashboard', ensureUser, (req, res) => {
  try {
    const userId = req.user.id;

    // User stats
    const stats = db.prepare('SELECT * FROM user_stats WHERE user_id = ?').get(userId);

    // Skill profiles
    const skills = db.prepare('SELECT * FROM skill_profiles WHERE user_id = ?').all(userId);

    // Today's tasks
    const today = new Date().toISOString().slice(0, 10);
    let dailyTasks = db.prepare('SELECT * FROM daily_tasks WHERE user_id = ? AND date = ?').get(userId, today);

    // Recent errors (unresolved)
    const recentErrors = db.prepare(`
      SELECT * FROM user_errors WHERE user_id = ? AND resolved = 0
      ORDER BY occurrence_count DESC LIMIT 5
    `).all(userId);

    // Review stats
    const reviewStats = spacedRepetition.getReviewStats(db, userId);

    // Recent progress
    const recentProgress = db.prepare(`
      SELECT * FROM progress_history WHERE user_id = ?
      ORDER BY date DESC, created_at DESC LIMIT 20
    `).all(userId);

    // Study sessions this week
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekStudy = db.prepare(`
      SELECT date, SUM(duration_minutes) as total_minutes, SUM(items_practiced) as total_items, SUM(items_correct) as total_correct
      FROM study_sessions WHERE user_id = ? AND date >= ?
      GROUP BY date ORDER BY date
    `).all(userId, weekAgo.toISOString().slice(0, 10));

    // Latest assessment
    const latestAssessment = db.prepare(`
      SELECT * FROM assessments WHERE user_id = ? AND status = 'completed' ORDER BY completed_at DESC LIMIT 1
    `).get(userId);

    // Learning plan
    const plan = db.prepare('SELECT * FROM learning_plans WHERE user_id = ? AND active = 1').get(userId);

    res.json({
      user: {
        displayName: req.user.display_name,
        onboardingComplete: req.user.onboarding_complete === 1
      },
      stats: stats || { xp: 0, level: 1, current_streak: 0, longest_streak: 0, total_words_learned: 0, total_study_minutes: 0 },
      skills: skills.reduce((acc, s) => {
        acc[s.skill] = { level: s.cefr_level, sublevel: s.cefr_sublevel, score: s.score };
        return acc;
      }, {}),
      dailyTasks: dailyTasks ? {
        ...dailyTasks,
        tasks: JSON.parse(dailyTasks.tasks || '[]'),
        completed_tasks: JSON.parse(dailyTasks.completed_tasks || '[]')
      } : null,
      recentErrors,
      reviewStats,
      recentProgress,
      weekStudy,
      latestAssessment: latestAssessment ? {
        ...latestAssessment,
        results: JSON.parse(latestAssessment.results || '{}')
      } : null,
      learningPlan: plan ? {
        ...plan,
        skill_distribution: JSON.parse(plan.skill_distribution || '{}'),
        current_focus: JSON.parse(plan.current_focus || '[]'),
        short_term_goals: JSON.parse(plan.short_term_goals || '[]')
      } : null
    });
  } catch (err) {
    console.error('Dashboard error:', err);
    res.status(500).json({ error: 'Failed to load dashboard' });
  }
});

app.post('/api/daily-tasks/generate', ensureUser, (req, res) => {
  try {
    const tasks = curriculumEngine.generateDailyTasks(db, req.user.id);
    res.json(tasks);
  } catch (err) {
    console.error('Generate tasks error:', err);
    res.status(500).json({ error: 'Failed to generate tasks' });
  }
});

app.post('/api/daily-tasks/:id/complete/:taskId', ensureUser, (req, res) => {
  try {
    const result = curriculumEngine.completeTask(db, req.user.id, parseInt(req.params.id), parseInt(req.params.taskId));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to complete task' });
  }
});

// =============================================
// PROGRESS HISTORY
// =============================================
app.get('/api/progress/history', ensureUser, (req, res) => {
  try {
    const { skill, days = 30 } = req.query;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(days));

    let query = `SELECT * FROM progress_history WHERE user_id = ? AND date >= ?`;
    const params = [req.user.id, startDate.toISOString().slice(0, 10)];

    if (skill) { query += ' AND skill = ?'; params.push(skill); }
    query += ' ORDER BY date ASC';

    const history = db.prepare(query).all(...params);
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get progress history' });
  }
});

// =============================================
// WEEKLY REPORT
// =============================================
app.get('/api/reports/weekly', ensureUser, (req, res) => {
  try {
    const userId = req.user.id;
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay());
    const weekStartStr = weekStart.toISOString().slice(0, 10);

    // Study sessions this week
    const sessions = db.prepare(`
      SELECT skill, SUM(duration_minutes) as total_minutes, SUM(items_practiced) as items, SUM(items_correct) as correct
      FROM study_sessions WHERE user_id = ? AND date >= ?
      GROUP BY skill
    `).all(userId, weekStartStr);

    // Errors this week
    const errors = db.prepare(`
      SELECT skill, COUNT(*) as count FROM user_errors
      WHERE user_id = ? AND last_occurred >= ?
      GROUP BY skill
    `).all(userId, weekStartStr);

    // Vocabulary learned
    const vocabLearned = db.prepare(`
      SELECT COUNT(*) as count FROM user_vocabulary
      WHERE user_id = ? AND first_learned >= ?
    `).get(userId, weekStartStr);

    // Skills
    const skills = db.prepare('SELECT * FROM skill_profiles WHERE user_id = ?').all(userId);

    res.json({
      weekStart: weekStartStr,
      studySessions: sessions,
      errors,
      vocabularyLearned: vocabLearned.count,
      skills: skills.reduce((acc, s) => {
        acc[s.skill] = { level: s.cefr_level + (s.cefr_sublevel || ''), score: s.score };
        return acc;
      }, {}),
      totalStudyMinutes: sessions.reduce((sum, s) => sum + s.total_minutes, 0)
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate report' });
  }
});

// =============================================
// START SERVER
// =============================================
  app.listen(PORT, () => {
    console.log(`\n🚀 English Mastery API server running on http://localhost:${PORT}`);
    console.log(`📚 Database: ${process.env.DB_PATH || './data/english-mastery.db'}`);
    console.log('');
  });
}

initServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
