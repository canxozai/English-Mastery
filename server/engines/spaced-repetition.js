/**
 * SM-2 Spaced Repetition Algorithm
 * Based on the SuperMemo SM-2 algorithm with modifications for language learning.
 * 
 * Quality ratings:
 * 0 - Complete blackout, no recognition
 * 1 - Wrong answer but recognized correct answer
 * 2 - Wrong answer, correct answer seemed easy to recall
 * 3 - Correct answer with serious difficulty
 * 4 - Correct answer with some hesitation
 * 5 - Perfect response with no hesitation
 */

/**
 * Calculate next review parameters based on SM-2 algorithm
 * @param {number} quality - Response quality 0-5
 * @param {number} repetition - Current consecutive correct count
 * @param {number} easeFactor - Current ease factor (minimum 1.3)
 * @param {number} interval - Current interval in days
 * @returns {{ interval: number, repetition: number, easeFactor: number }}
 */
export function calculateNextReview(quality, repetition, easeFactor, interval) {
  let newInterval;
  let newRepetition;
  let newEaseFactor;

  if (quality < 3) {
    // Failed review - reset repetition, short interval
    newRepetition = 0;
    newInterval = 0.25; // Review in 6 hours
    newEaseFactor = Math.max(1.3, easeFactor - 0.2);
  } else {
    // Successful review
    newRepetition = repetition + 1;

    if (newRepetition === 1) {
      newInterval = 1; // 1 day
    } else if (newRepetition === 2) {
      newInterval = 3; // 3 days
    } else if (newRepetition === 3) {
      newInterval = 7; // 1 week
    } else {
      newInterval = Math.round(interval * easeFactor);
    }

    // Adjust ease factor
    newEaseFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    newEaseFactor = Math.max(1.3, newEaseFactor);

    // Bonus for perfect scores
    if (quality === 5 && newRepetition > 3) {
      newInterval = Math.round(newInterval * 1.1);
    }
  }

  // Cap interval at 365 days
  newInterval = Math.min(newInterval, 365);

  return {
    interval: newInterval,
    repetition: newRepetition,
    easeFactor: Math.round(newEaseFactor * 100) / 100
  };
}

/**
 * Calculate due date from current date and interval
 * @param {number} intervalDays - Interval in days
 * @returns {string} ISO date string
 */
export function calculateDueDate(intervalDays) {
  const now = new Date();
  now.setTime(now.getTime() + intervalDays * 24 * 60 * 60 * 1000);
  return now.toISOString().slice(0, 19).replace('T', ' ');
}

/**
 * Convert a percentage score to SM-2 quality rating
 * @param {number} score - Score as percentage 0-100
 * @param {number} responseTimeMs - Response time in milliseconds
 * @returns {number} Quality rating 0-5
 */
export function scoreToQuality(score, responseTimeMs = 0) {
  if (score === 0) return 0;
  if (score < 30) return 1;
  if (score < 50) return 2;
  if (score < 70) return 3;
  if (score < 90) return 4;

  // Perfect score but slow response
  if (responseTimeMs > 30000) return 4;

  return 5;
}

/**
 * Get items due for review for a user
 * @param {import('better-sqlite3').Database} db
 * @param {string} userId
 * @param {number} limit
 * @returns {Array}
 */
export function getDueReviews(db, userId, limit = 20) {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

  return db.prepare(`
    SELECT * FROM review_queue
    WHERE user_id = ? AND due_date <= ?
    ORDER BY priority ASC, due_date ASC
    LIMIT ?
  `).all(userId, now, limit);
}

/**
 * Add or update an item in the review queue
 * @param {import('better-sqlite3').Database} db
 * @param {string} userId
 * @param {string} itemType
 * @param {number} itemId
 * @param {number} quality - SM-2 quality 0-5
 */
export function processReview(db, userId, itemType, itemId, quality) {
  const existing = db.prepare(
    'SELECT * FROM review_queue WHERE user_id = ? AND item_type = ? AND item_id = ?'
  ).get(userId, itemType, itemId);

  if (existing) {
    const result = calculateNextReview(
      quality,
      quality >= 3 ? (existing.review_count || 0) : 0,
      existing.ease_factor || 2.5,
      existing.interval_days || 1
    );

    const dueDate = calculateDueDate(result.interval);
    const priority = quality < 3 ? Math.max(1, existing.priority - 1) : Math.min(10, existing.priority + 1);

    db.prepare(`
      UPDATE review_queue SET
        due_date = ?, priority = ?, review_count = review_count + 1,
        last_quality = ?, interval_days = ?, ease_factor = ?
      WHERE id = ?
    `).run(dueDate, priority, quality, result.interval, result.easeFactor, existing.id);

    return { ...result, dueDate };
  } else {
    const result = calculateNextReview(quality, 0, 2.5, 1);
    const dueDate = calculateDueDate(result.interval);
    const priority = quality < 3 ? 2 : 5;

    db.prepare(`
      INSERT INTO review_queue (user_id, item_type, item_id, due_date, priority, review_count, last_quality, interval_days, ease_factor)
      VALUES (?, ?, ?, ?, ?, 1, ?, ?, ?)
    `).run(userId, itemType, itemId, dueDate, priority, quality, result.interval, result.easeFactor);

    return { ...result, dueDate };
  }
}

/**
 * Get review statistics for a user
 * @param {import('better-sqlite3').Database} db
 * @param {string} userId
 * @returns {Object}
 */
export function getReviewStats(db, userId) {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

  const dueCount = db.prepare(
    'SELECT COUNT(*) as count FROM review_queue WHERE user_id = ? AND due_date <= ?'
  ).get(userId, now);

  const totalCount = db.prepare(
    'SELECT COUNT(*) as count FROM review_queue WHERE user_id = ?'
  ).get(userId);

  const byType = db.prepare(`
    SELECT item_type, COUNT(*) as count
    FROM review_queue WHERE user_id = ? AND due_date <= ?
    GROUP BY item_type
  `).all(userId, now);

  return {
    dueNow: dueCount.count,
    total: totalCount.count,
    byType: byType.reduce((acc, r) => { acc[r.item_type] = r.count; return acc; }, {})
  };
}
