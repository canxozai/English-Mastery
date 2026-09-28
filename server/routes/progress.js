import express from 'express';
import { getDb } from '../database/db.js';
import { ensureUser } from '../middleware/auth.js';
import * as spacedRepetition from '../engines/spaced-repetition.js';
import * as curriculumEngine from '../engines/curriculum-engine.js';

const router = express.Router();

// =============================================
// ERROR DATABASE ROUTES
// =============================================
router.get('/api/errors', ensureUser, (req, res) => {
  try {
    const db = getDb();
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

router.post('/api/errors/:id/resolve', ensureUser, (req, res) => {
  try {
    const db = getDb();
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
router.get('/api/dashboard', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const userId = req.user.id;

    // User stats
    const stats = db.prepare('SELECT * FROM user_stats WHERE user_id = ?').get(userId);

    // Skill profiles
    const skills = db.prepare('SELECT * FROM skill_profiles WHERE user_id = ?').all(userId);

    // Today's tasks
    const today = new Date().toISOString().slice(0, 10);
    const dailyTasks = db.prepare('SELECT * FROM daily_tasks WHERE user_id = ? AND date = ?').get(userId, today);

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

router.post('/api/daily-tasks/generate', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const tasks = curriculumEngine.generateDailyTasks(db, req.user.id);
    res.json(tasks);
  } catch (err) {
    console.error('Generate tasks error:', err);
    res.status(500).json({ error: 'Failed to generate tasks' });
  }
});

router.post('/api/daily-tasks/:id/complete/:taskId', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const result = curriculumEngine.completeTask(db, req.user.id, parseInt(req.params.id), parseInt(req.params.taskId));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to complete task' });
  }
});

// =============================================
// PROGRESS HISTORY
// =============================================
router.get('/api/progress/history', ensureUser, (req, res) => {
  try {
    const db = getDb();
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
router.get('/api/reports/weekly', ensureUser, (req, res) => {
  try {
    const db = getDb();
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

export default router;
