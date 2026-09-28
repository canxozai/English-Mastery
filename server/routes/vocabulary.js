import express from 'express';
import { getDb } from '../database/db.js';
import { ensureUser } from '../middleware/auth.js';
import * as spacedRepetition from '../engines/spaced-repetition.js';

const router = express.Router();

router.get('/api/vocabulary/items', ensureUser, (req, res) => {
  try {
    const db = getDb();
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

router.get('/api/vocabulary/review', ensureUser, (req, res) => {
  try {
    const db = getDb();
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

router.post('/api/vocabulary/:id/review', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const vocabId = parseInt(req.params.id);
    let quality = req.body.quality;
    // Map 0-3 rating from client (0: Again, 1: Hard, 2: Good, 3: Easy) to SM-2 quality (0-5)
    if (quality === undefined && req.body.rating !== undefined) {
      const ratingMap = [0, 2, 4, 5];
      quality = ratingMap[req.body.rating] !== undefined ? ratingMap[req.body.rating] : Number(req.body.rating);
    }
    quality = Number(quality);
    if (isNaN(quality) || quality < 0 || quality > 5) {
      quality = 3;
    }
    const { reviewType } = req.body;

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

export default router;
