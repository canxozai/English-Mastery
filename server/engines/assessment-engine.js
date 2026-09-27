/**
 * Assessment Engine
 * Handles diagnostic assessments with adaptive difficulty.
 * Uses CEFR levels and evaluates multiple skills independently.
 */

const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const SKILLS = ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking', 'pronunciation', 'sentence_formation', 'comprehension', 'communication'];

/**
 * Start a new diagnostic assessment
 */
export function startAssessment(db, userId) {
  const result = db.prepare(`
    INSERT INTO assessments (user_id, type, status)
    VALUES (?, 'diagnostic', 'in_progress')
  `).run(userId);

  return {
    assessmentId: result.lastInsertRowid,
    skills: SKILLS,
    message: 'Diagnostic assessment started. We will evaluate each skill separately.'
  };
}

/**
 * Get adaptive questions for a specific skill
 * Starts at A2, adjusts based on performance
 */
export function getQuestionsForSkill(db, assessmentId, skill, currentLevel = 'A2', performance = null) {
  let targetLevel = currentLevel;

  // Adapt level based on performance
  if (performance) {
    const { correct, total } = performance;
    const accuracy = total > 0 ? correct / total : 0;

    if (accuracy >= 0.8 && total >= 3) {
      // Move up
      const idx = CEFR_LEVELS.indexOf(targetLevel);
      if (idx < CEFR_LEVELS.length - 1) {
        targetLevel = CEFR_LEVELS[idx + 1];
      }
    } else if (accuracy < 0.4 && total >= 3) {
      // Move down
      const idx = CEFR_LEVELS.indexOf(targetLevel);
      if (idx > 0) {
        targetLevel = CEFR_LEVELS[idx - 1];
      }
    }
  }

  // Get questions from the bank
  const questions = db.prepare(`
    SELECT * FROM assessment_question_bank
    WHERE skill = ? AND cefr_level = ?
    ORDER BY RANDOM()
    LIMIT 5
  `).all(skill, targetLevel);

  // If not enough questions at target level, also get adjacent levels
  if (questions.length < 3) {
    const idx = CEFR_LEVELS.indexOf(targetLevel);
    const adjacentLevels = [];
    if (idx > 0) adjacentLevels.push(CEFR_LEVELS[idx - 1]);
    if (idx < CEFR_LEVELS.length - 1) adjacentLevels.push(CEFR_LEVELS[idx + 1]);

    for (const level of adjacentLevels) {
      const moreQuestions = db.prepare(`
        SELECT * FROM assessment_question_bank
        WHERE skill = ? AND cefr_level = ?
        ORDER BY RANDOM()
        LIMIT ?
      `).all(skill, level, 5 - questions.length);
      questions.push(...moreQuestions);
      if (questions.length >= 5) break;
    }
  }

  return {
    skill,
    targetLevel,
    questions: questions.map(q => ({
      id: q.id,
      type: q.question_type,
      question: q.question,
      options: q.options ? JSON.parse(q.options) : null,
      cefrLevel: q.cefr_level,
      topic: q.topic
    }))
  };
}

/**
 * Submit an answer for an assessment question
 */
export function submitAnswer(db, assessmentId, questionBankId, userAnswer, responseTimeMs) {
  const question = db.prepare('SELECT * FROM assessment_question_bank WHERE id = ?').get(questionBankId);
  if (!question) throw new Error('Question not found');

  // Check correctness
  let isCorrect = false;
  let score = 0;

  const normalizedUserAnswer = (userAnswer || '').toString().trim().toLowerCase().replace(/^["']|["']$/g, '');
  const normalizedCorrect = (question.correct_answer || '').toString().trim().toLowerCase().replace(/^["']|["']$/g, '');

  if (question.question_type === 'multiple_choice') {
    isCorrect = normalizedUserAnswer === normalizedCorrect;
    score = isCorrect ? 1 : 0;
  } else if (question.question_type === 'fill_blank') {
    // Allow minor variations
    isCorrect = normalizedUserAnswer === normalizedCorrect;
    if (!isCorrect) {
      // Check for common acceptable variations
      const variations = [
        normalizedCorrect.replace(/'/g, "'"),
        normalizedCorrect.replace(/'/g, "'"),
        normalizedCorrect.replace(/\s+/g, ' '),
      ];
      isCorrect = variations.some(v => normalizedUserAnswer === v);
    }
    score = isCorrect ? 1 : 0;
  } else if (question.question_type === 'error_correction') {
    // More lenient matching
    const cleanUser = normalizedUserAnswer.replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
    const cleanCorrect = normalizedCorrect.replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
    isCorrect = cleanUser === cleanCorrect;
    score = isCorrect ? 1 : 0;
  } else if (question.question_type === 'sentence_transform' || question.question_type === 'reorder') {
    const cleanUser = normalizedUserAnswer.replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
    const cleanCorrect = normalizedCorrect.replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
    isCorrect = cleanUser === cleanCorrect;
    score = isCorrect ? 1 : 0;
  }

  // Store the answer
  const result = db.prepare(`
    INSERT INTO assessment_questions (assessment_id, skill, question_type, cefr_target, question_data, user_answer, correct_answer, is_correct, score, response_time_ms, answered_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
  `).run(
    assessmentId, question.skill, question.question_type, question.cefr_level,
    JSON.stringify({ question: question.question, options: question.options, topic: question.topic }),
    userAnswer, question.correct_answer, isCorrect ? 1 : 0, score, responseTimeMs
  );

  return {
    questionId: result.lastInsertRowid,
    isCorrect,
    score,
    correctAnswer: question.correct_answer,
    explanation: question.explanation,
    explanationTr: question.explanation_tr,
    skill: question.skill,
    cefrLevel: question.cefr_level,
    topic: question.topic
  };
}

/**
 * Get current performance for a skill within an assessment
 */
export function getSkillPerformance(db, assessmentId, skill) {
  const results = db.prepare(`
    SELECT cefr_target, is_correct, score
    FROM assessment_questions
    WHERE assessment_id = ? AND skill = ?
  `).all(assessmentId, skill);

  const total = results.length;
  const correct = results.filter(r => r.is_correct).length;

  const byLevel = {};
  for (const r of results) {
    if (!byLevel[r.cefr_target]) byLevel[r.cefr_target] = { correct: 0, total: 0 };
    byLevel[r.cefr_target].total++;
    if (r.is_correct) byLevel[r.cefr_target].correct++;
  }

  return { correct, total, byLevel };
}

/**
 * Determine CEFR level for a skill based on assessment performance
 */
export function determineCEFRLevel(performance) {
  const { byLevel } = performance;

  let determinedLevel = 'A1';
  let sublevel = '';
  let score = 0;

  for (const level of CEFR_LEVELS) {
    if (!byLevel[level]) continue;

    const { correct, total } = byLevel[level];
    if (total === 0) continue;

    const accuracy = correct / total;

    if (accuracy >= 0.7) {
      determinedLevel = level;
      score = accuracy * 100;

      if (accuracy >= 0.9) {
        sublevel = '+';
      } else if (accuracy < 0.8) {
        sublevel = '-';
      } else {
        sublevel = '';
      }
    } else if (accuracy >= 0.4) {
      // Partial understanding at this level
      const idx = CEFR_LEVELS.indexOf(level);
      if (idx > 0) {
        determinedLevel = CEFR_LEVELS[idx - 1];
        sublevel = '+';
        score = 50 + accuracy * 50;
      }
      break;
    } else {
      // Below this level
      break;
    }
  }

  return {
    level: determinedLevel,
    sublevel,
    score: Math.round(score),
    display: determinedLevel + sublevel
  };
}

/**
 * Complete the assessment and generate a full profile
 */
export function completeAssessment(db, userId, assessmentId) {
  const skillResults = {};
  let overallScore = 0;
  let skillCount = 0;

  for (const skill of SKILLS) {
    const performance = getSkillPerformance(db, assessmentId, skill);

    if (performance.total > 0) {
      const cefrResult = determineCEFRLevel(performance);
      skillResults[skill] = {
        ...cefrResult,
        correct: performance.correct,
        total: performance.total,
        accuracy: Math.round((performance.correct / performance.total) * 100),
        details: performance.byLevel
      };

      // Update skill profile
      db.prepare(`
        INSERT INTO skill_profiles (user_id, skill, cefr_level, cefr_sublevel, score, confidence, assessed_at)
        VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
        ON CONFLICT(user_id, skill) DO UPDATE SET
          cefr_level = excluded.cefr_level,
          cefr_sublevel = excluded.cefr_sublevel,
          score = excluded.score,
          confidence = excluded.confidence,
          assessed_at = excluded.assessed_at
      `).run(
        userId, skill, cefrResult.level, cefrResult.sublevel,
        cefrResult.score, Math.min(1, performance.total / 10)
      );

      overallScore += CEFR_LEVELS.indexOf(cefrResult.level);
      skillCount++;
    }
  }

  // Determine overall CEFR
  const avgLevelIndex = skillCount > 0 ? Math.round(overallScore / skillCount) : 0;
  const overallCEFR = CEFR_LEVELS[Math.min(avgLevelIndex, CEFR_LEVELS.length - 1)];

  // Identify weak areas, strong areas, etc.
  const weakAreas = [];
  const strongAreas = [];
  const forgottenTopics = [];

  for (const [skill, result] of Object.entries(skillResults)) {
    const levelIdx = CEFR_LEVELS.indexOf(result.level);
    if (levelIdx <= avgLevelIndex - 1) {
      weakAreas.push({ skill, level: result.display, detail: `${result.accuracy}% accuracy` });
    }
    if (levelIdx >= avgLevelIndex + 1) {
      strongAreas.push({ skill, level: result.display, detail: `${result.accuracy}% accuracy` });
    }
  }

  // Find questions where user recognized but couldn't produce
  const allQuestions = db.prepare(`
    SELECT * FROM assessment_questions WHERE assessment_id = ?
  `).all(assessmentId);

  const topicErrors = {};
  for (const q of allQuestions) {
    if (!q.is_correct) {
      const data = JSON.parse(q.question_data || '{}');
      const topic = data.topic || q.skill;
      if (!topicErrors[topic]) topicErrors[topic] = 0;
      topicErrors[topic]++;
    }
  }

  const repeatedMistakes = Object.entries(topicErrors)
    .filter(([_, count]) => count >= 2)
    .map(([topic, count]) => ({ topic, count }));

  // Save results
  const resultData = {
    overallCEFR,
    skills: skillResults,
    weakAreas,
    strongAreas,
    repeatedMistakes,
    totalQuestions: allQuestions.length,
    totalCorrect: allQuestions.filter(q => q.is_correct).length,
    timestamp: new Date().toISOString()
  };

  db.prepare(`
    UPDATE assessments SET
      status = 'completed',
      completed_at = datetime('now'),
      results = ?,
      overall_cefr = ?
    WHERE id = ?
  `).run(JSON.stringify(resultData), overallCEFR, assessmentId);

  // Mark onboarding complete
  db.prepare('UPDATE users SET onboarding_complete = 1 WHERE id = ?').run(userId);

  return resultData;
}

/**
 * Get assessment progress (how many skills assessed so far)
 */
export function getAssessmentProgress(db, assessmentId) {
  const assessed = db.prepare(`
    SELECT DISTINCT skill, COUNT(*) as count
    FROM assessment_questions
    WHERE assessment_id = ?
    GROUP BY skill
  `).all(assessmentId);

  const assessedSkills = {};
  for (const row of assessed) {
    assessedSkills[row.skill] = row.count;
  }

  return {
    assessedSkills,
    totalSkills: SKILLS.length,
    completedSkills: Object.keys(assessedSkills).length,
    remainingSkills: SKILLS.filter(s => !assessedSkills[s])
  };
}

export { CEFR_LEVELS, SKILLS };
