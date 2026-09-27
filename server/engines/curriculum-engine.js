/**
 * Curriculum Engine
 * Generates personalized learning paths based on assessment results
 * and adapts them based on ongoing performance.
 */

const SKILL_WEIGHTS = {
  grammar: 1.0,
  vocabulary: 1.0,
  reading: 0.9,
  listening: 1.0,
  writing: 0.8,
  speaking: 1.0,
  pronunciation: 0.7,
  sentence_formation: 0.8,
  comprehension: 0.9,
  communication: 0.9
};

const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/**
 * Generate a personalized learning plan based on assessment results
 */
export function generateLearningPlan(db, userId) {
  // Get skill profiles
  const profiles = db.prepare('SELECT * FROM skill_profiles WHERE user_id = ?').all(userId);

  if (profiles.length === 0) {
    return createDefaultPlan(db, userId);
  }

  // Determine priority skills (weakest first, weighted by importance)
  const skillPriorities = profiles.map(p => {
    const levelIndex = CEFR_ORDER.indexOf(p.cefr_level);
    const weight = SKILL_WEIGHTS[p.skill] || 1.0;
    return {
      skill: p.skill,
      level: p.cefr_level,
      score: p.score,
      priority: (6 - levelIndex) * weight, // Lower level = higher priority
      confidence: p.confidence
    };
  }).sort((a, b) => b.priority - a.priority);

  // Calculate time distribution
  const totalPriority = skillPriorities.reduce((sum, s) => sum + s.priority, 0);
  const skillDistribution = {};
  for (const sp of skillPriorities) {
    skillDistribution[sp.skill] = Math.round((sp.priority / totalPriority) * 100);
  }

  // Ensure minimum 5% for each assessed skill
  for (const sp of skillPriorities) {
    if (skillDistribution[sp.skill] < 5) {
      skillDistribution[sp.skill] = 5;
    }
  }

  // Generate goals
  const shortTermGoals = [];
  const longTermGoals = [];
  const currentFocus = [];

  // Top 3 weakest skills get short-term focus
  const weakest = skillPriorities.slice(0, 3);
  for (const w of weakest) {
    const nextLevel = CEFR_ORDER[Math.min(CEFR_ORDER.indexOf(w.level) + 1, 5)];
    shortTermGoals.push({
      skill: w.skill,
      goal: `Improve ${w.skill} from ${w.level} to ${nextLevel}`,
      targetLevel: nextLevel,
      currentLevel: w.level
    });
    currentFocus.push(w.skill);
  }

  // Long-term: reach B2 in all skills
  for (const p of profiles) {
    if (CEFR_ORDER.indexOf(p.cefr_level) < CEFR_ORDER.indexOf('B2')) {
      longTermGoals.push({
        skill: p.skill,
        goal: `Reach B2 level in ${p.skill}`,
        currentLevel: p.cefr_level,
        targetLevel: 'B2'
      });
    }
  }

  // Deactivate existing plans
  db.prepare('UPDATE learning_plans SET active = 0 WHERE user_id = ?').run(userId);

  // Create new plan
  const planResult = db.prepare(`
    INSERT INTO learning_plans (user_id, overall_goal, daily_minutes, priority_skills, current_focus, short_term_goals, long_term_goals, skill_distribution)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    userId,
    'Improve English comprehensively to B2+ level',
    60,
    JSON.stringify(skillPriorities.map(s => s.skill)),
    JSON.stringify(currentFocus),
    JSON.stringify(shortTermGoals),
    JSON.stringify(longTermGoals),
    JSON.stringify(skillDistribution)
  );

  return {
    planId: planResult.lastInsertRowid,
    prioritySkills: skillPriorities,
    skillDistribution,
    shortTermGoals,
    longTermGoals,
    currentFocus,
    dailyMinutes: 60
  };
}

/**
 * Create a default plan for users who haven't been assessed
 */
function createDefaultPlan(db, userId) {
  const defaultDistribution = {
    grammar: 15,
    vocabulary: 15,
    reading: 15,
    listening: 15,
    writing: 10,
    speaking: 15,
    pronunciation: 5,
    sentence_formation: 5,
    comprehension: 5
  };

  db.prepare('UPDATE learning_plans SET active = 0 WHERE user_id = ?').run(userId);

  const result = db.prepare(`
    INSERT INTO learning_plans (user_id, overall_goal, daily_minutes, priority_skills, current_focus, short_term_goals, long_term_goals, skill_distribution)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    userId,
    'Complete diagnostic assessment and begin personalized learning',
    60,
    JSON.stringify(['grammar', 'vocabulary', 'listening', 'speaking', 'reading']),
    JSON.stringify(['assessment']),
    JSON.stringify([{ goal: 'Complete diagnostic assessment' }]),
    JSON.stringify([{ goal: 'Determine learning priorities' }]),
    JSON.stringify(defaultDistribution)
  );

  return {
    planId: result.lastInsertRowid,
    skillDistribution: defaultDistribution,
    shortTermGoals: [{ goal: 'Complete diagnostic assessment' }],
    needsAssessment: true
  };
}

/**
 * Generate daily tasks based on the learning plan
 */
export function generateDailyTasks(db, userId) {
  const today = new Date().toISOString().slice(0, 10);

  // Check if tasks already exist for today
  const existing = db.prepare('SELECT * FROM daily_tasks WHERE user_id = ? AND date = ?').get(userId, today);
  if (existing) {
    return {
      ...existing,
      tasks: JSON.parse(existing.tasks),
      completed_tasks: JSON.parse(existing.completed_tasks)
    };
  }

  // Get active plan
  const plan = db.prepare('SELECT * FROM learning_plans WHERE user_id = ? AND active = 1').get(userId);
  if (!plan) {
    const newPlan = generateLearningPlan(db, userId);
    return generateDailyTasks(db, userId);
  }

  const distribution = JSON.parse(plan.skill_distribution);
  const dailyMinutes = plan.daily_minutes || 60;
  const tasks = [];
  let taskId = 1;

  // Get due reviews
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const dueReviews = db.prepare(
    'SELECT COUNT(*) as count FROM review_queue WHERE user_id = ? AND due_date <= ?'
  ).get(userId, now);

  // Always start with reviews if there are due items
  if (dueReviews.count > 0) {
    tasks.push({
      id: taskId++,
      type: 'review',
      skill: 'mixed',
      title: 'Spaced Repetition Review',
      titleTr: 'Aralıklı Tekrar',
      description: `Review ${Math.min(dueReviews.count, 20)} items that are due`,
      duration: Math.min(10, Math.ceil(dueReviews.count / 2)),
      priority: 1,
      itemCount: Math.min(dueReviews.count, 20)
    });
  }

  // Generate skill-specific tasks based on distribution
  const skillTasks = {
    grammar: () => {
      const profiles = db.prepare('SELECT * FROM skill_profiles WHERE user_id = ? AND skill = ?').get(userId, 'grammar');
      const level = profiles?.cefr_level || 'A1';

      // Find next grammar topic to study
      const progress = db.prepare(`
        SELECT gt.*, ugp.mastery_level FROM grammar_topics gt
        LEFT JOIN user_grammar_progress ugp ON gt.id = ugp.topic_id AND ugp.user_id = ?
        WHERE gt.cefr_level = ? AND (ugp.mastery_level IS NULL OR ugp.mastery_level < 4)
        ORDER BY gt.order_index
        LIMIT 1
      `).get(userId, level);

      if (progress) {
        return {
          type: 'grammar',
          title: `Grammar: ${progress.name}`,
          titleTr: `Dilbilgisi: ${progress.name}`,
          description: progress.mastery_level === null ? 'Learn new grammar topic' : 'Continue practicing this topic',
          topicId: progress.id,
          topicSlug: progress.slug,
          mastery: progress.mastery_level || 0
        };
      }
      return null;
    },
    vocabulary: () => {
      return {
        type: 'vocabulary',
        title: 'Vocabulary Practice',
        titleTr: 'Kelime Çalışması',
        description: 'Learn new words and review existing ones'
      };
    },
    reading: () => {
      const profiles = db.prepare('SELECT * FROM skill_profiles WHERE user_id = ? AND skill = ?').get(userId, 'reading');
      const level = profiles?.cefr_level || 'A1';

      const material = db.prepare(`
        SELECT rm.* FROM reading_materials rm
        LEFT JOIN user_reading_sessions urs ON rm.id = urs.material_id AND urs.user_id = ?
        WHERE rm.cefr_level = ? AND urs.id IS NULL
        ORDER BY RANDOM()
        LIMIT 1
      `).get(userId, level);

      return {
        type: 'reading',
        title: material ? `Read: ${material.title}` : 'Reading Practice',
        titleTr: 'Okuma Çalışması',
        description: material ? `${material.word_count} words, ~${material.estimated_reading_time} min` : 'Practice reading comprehension',
        materialId: material?.id
      };
    },
    listening: () => {
      return {
        type: 'listening',
        title: 'Listening Practice',
        titleTr: 'Dinleme Çalışması',
        description: 'Improve your listening comprehension'
      };
    },
    writing: () => {
      return {
        type: 'writing',
        title: 'Writing Practice',
        titleTr: 'Yazma Çalışması',
        description: 'Practice writing in English'
      };
    },
    speaking: () => {
      return {
        type: 'speaking',
        title: 'Speaking Practice',
        titleTr: 'Konuşma Çalışması',
        description: 'Practice speaking and pronunciation'
      };
    },
    pronunciation: () => {
      return {
        type: 'pronunciation',
        title: 'Pronunciation Practice',
        titleTr: 'Telaffuz Çalışması',
        description: 'Work on problematic sounds and words'
      };
    }
  };

  // Add tasks based on distribution
  const activeSkills = Object.entries(distribution)
    .filter(([_, pct]) => pct >= 5)
    .sort((a, b) => b[1] - a[1]);

  for (const [skill, pct] of activeSkills) {
    const duration = Math.round((pct / 100) * dailyMinutes);
    if (duration < 3) continue;

    const generator = skillTasks[skill];
    if (generator) {
      const task = generator();
      if (task) {
        tasks.push({
          id: taskId++,
          ...task,
          skill,
          duration,
          priority: taskId,
          completed: false
        });
      }
    }
  }

  // Save daily tasks
  const result = db.prepare(`
    INSERT INTO daily_tasks (user_id, plan_id, date, tasks, completed_tasks)
    VALUES (?, ?, ?, ?, '[]')
  `).run(userId, plan.id, today, JSON.stringify(tasks));

  return {
    id: result.lastInsertRowid,
    date: today,
    tasks,
    completed_tasks: [],
    total_time_minutes: tasks.reduce((sum, t) => sum + (t.duration || 0), 0)
  };
}

/**
 * Mark a task as complete
 */
export function completeTask(db, userId, dailyTaskId, taskId) {
  const daily = db.prepare('SELECT * FROM daily_tasks WHERE id = ? AND user_id = ?').get(dailyTaskId, userId);
  if (!daily) throw new Error('Daily tasks not found');

  const completedTasks = JSON.parse(daily.completed_tasks);
  if (!completedTasks.includes(taskId)) {
    completedTasks.push(taskId);
  }

  const tasks = JSON.parse(daily.tasks);
  const allCompleted = tasks.every(t => completedTasks.includes(t.id));

  db.prepare(`
    UPDATE daily_tasks SET completed_tasks = ?, completed = ? WHERE id = ?
  `).run(JSON.stringify(completedTasks), allCompleted ? 1 : 0, dailyTaskId);

  // Update user stats
  if (allCompleted) {
    updateStreak(db, userId);
  }

  return { completedTasks, allCompleted };
}

/**
 * Update user streak
 */
function updateStreak(db, userId) {
  const stats = db.prepare('SELECT * FROM user_stats WHERE user_id = ?').get(userId);
  const today = new Date().toISOString().slice(0, 10);

  if (!stats) {
    db.prepare(`
      INSERT INTO user_stats (user_id, current_streak, longest_streak, last_study_date, xp)
      VALUES (?, 1, 1, ?, 50)
    `).run(userId, today);
    return;
  }

  if (stats.last_study_date === today) return; // Already counted

  const lastDate = new Date(stats.last_study_date);
  const todayDate = new Date(today);
  const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

  let newStreak;
  if (diffDays === 1) {
    newStreak = stats.current_streak + 1;
  } else if (diffDays === 0) {
    newStreak = stats.current_streak;
  } else {
    newStreak = 1;
  }

  const longestStreak = Math.max(stats.longest_streak, newStreak);

  db.prepare(`
    UPDATE user_stats SET
      current_streak = ?, longest_streak = ?,
      last_study_date = ?, xp = xp + 50
    WHERE user_id = ?
  `).run(newStreak, longestStreak, today, userId);
}

/**
 * Get learning plan with all details
 */
export function getLearningPlan(db, userId) {
  const plan = db.prepare('SELECT * FROM learning_plans WHERE user_id = ? AND active = 1').get(userId);
  if (!plan) return null;

  return {
    ...plan,
    priority_skills: JSON.parse(plan.priority_skills),
    current_focus: JSON.parse(plan.current_focus),
    short_term_goals: JSON.parse(plan.short_term_goals),
    long_term_goals: JSON.parse(plan.long_term_goals),
    skill_distribution: JSON.parse(plan.skill_distribution)
  };
}
