import express from 'express';
import { getDb } from '../database/db.js';
import { ensureUser } from '../middleware/auth.js';
import * as spacedRepetition from '../engines/spaced-repetition.js';

const router = express.Router();

router.get('/api/grammar/topics', ensureUser, (req, res) => {
  try {
    const db = getDb();
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

router.get('/api/grammar/topic/:slug', ensureUser, (req, res) => {
  try {
    const db = getDb();
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
        prompt: e.question || e.prompt || '',
        question: e.question || e.prompt || '',
        options: e.options ? JSON.parse(e.options) : null
      })),
      progress: progress || { mastery_level: 0, total_attempts: 0, correct_attempts: 0 }
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get topic' });
  }
});

router.post('/api/grammar/exercise/:id/submit', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const exercise = db.prepare('SELECT * FROM grammar_exercises WHERE id = ?').get(parseInt(req.params.id));
    if (!exercise) return res.status(404).json({ error: 'Exercise not found' });

    const { answer, responseTimeMs } = req.body;
    const normalizedAnswer = (answer || '').trim().toLowerCase();
    const normalizedCorrect = (exercise.correct_answer || '').trim().toLowerCase();

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

export default router;
