import express from 'express';
import { getDb } from '../database/db.js';
import { ensureUser } from '../middleware/auth.js';
import * as assessmentEngine from '../engines/assessment-engine.js';
import * as curriculumEngine from '../engines/curriculum-engine.js';

const router = express.Router();

router.post('/api/assessment/start', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const result = assessmentEngine.startAssessment(db, req.user.id);
    res.json(result);
  } catch (err) {
    console.error('Assessment start error:', err);
    res.status(500).json({ error: 'Failed to start assessment' });
  }
});

router.get('/api/assessment/:id/questions/:skill', ensureUser, (req, res) => {
  try {
    const db = getDb();
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

router.post('/api/assessment/:id/answer', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const { questionBankId, answer, userAnswer, responseTimeMs } = req.body;
    const finalAnswer = userAnswer !== undefined ? userAnswer : (answer !== undefined ? answer : '');
    const result = assessmentEngine.submitAnswer(db, parseInt(req.params.id), questionBankId, finalAnswer, responseTimeMs || 0);
    res.json(result);
  } catch (err) {
    console.error('Answer submission error:', err);
    res.status(500).json({ error: 'Failed to submit answer' });
  }
});

router.post('/api/assessment/:id/complete', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const result = assessmentEngine.completeAssessment(db, req.user.id, parseInt(req.params.id));

    // Generate learning plan after assessment
    const plan = curriculumEngine.generateLearningPlan(db, req.user.id);

    res.json({ assessment: result, learningPlan: plan });
  } catch (err) {
    console.error('Assessment complete error:', err);
    res.status(500).json({ error: 'Failed to complete assessment' });
  }
});

router.get('/api/assessment/:id/progress', ensureUser, (req, res) => {
  try {
    const db = getDb();
    const progress = assessmentEngine.getAssessmentProgress(db, parseInt(req.params.id));
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get progress' });
  }
});

router.get('/api/assessment/latest', ensureUser, (req, res) => {
  try {
    const db = getDb();
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

export default router;
