import { getDb } from './db.js';

export function createSchema() {
  const db = getDb();
  db.exec(`
    -- =============================================
    -- USERS
    -- =============================================
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      display_name TEXT NOT NULL,
      password_hash TEXT DEFAULT '',
      native_language TEXT DEFAULT 'tr',
      created_at TEXT DEFAULT (datetime('now')),
      last_active TEXT DEFAULT (datetime('now')),
      settings TEXT DEFAULT '{}',
      onboarding_complete INTEGER DEFAULT 0
    );

    -- =============================================
    -- CEFR SKILL PROFILES
    -- =============================================
    CREATE TABLE IF NOT EXISTS skill_profiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      skill TEXT NOT NULL, -- grammar, vocabulary, reading, listening, writing, speaking, pronunciation, sentence_formation, comprehension, communication
      cefr_level TEXT DEFAULT 'unknown', -- A1, A2, B1, B2, C1, C2, unknown
      cefr_sublevel TEXT DEFAULT '', -- e.g. A2+, B1-
      score REAL DEFAULT 0, -- 0-100 numeric score within the level
      confidence REAL DEFAULT 0, -- 0-1 how confident we are in this assessment
      assessed_at TEXT DEFAULT (datetime('now')),
      UNIQUE(user_id, skill)
    );

    -- =============================================
    -- ASSESSMENTS
    -- =============================================
    CREATE TABLE IF NOT EXISTS assessments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      type TEXT NOT NULL, -- diagnostic, monthly, weekly, skill_check
      status TEXT DEFAULT 'in_progress', -- in_progress, completed, abandoned
      started_at TEXT DEFAULT (datetime('now')),
      completed_at TEXT,
      results TEXT, -- JSON with detailed results
      overall_cefr TEXT
    );

    CREATE TABLE IF NOT EXISTS assessment_questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      assessment_id INTEGER NOT NULL REFERENCES assessments(id),
      skill TEXT NOT NULL,
      question_type TEXT NOT NULL, -- multiple_choice, fill_blank, error_correction, sentence_transform, free_response, listening, speaking
      cefr_target TEXT NOT NULL, -- target difficulty level
      question_data TEXT NOT NULL, -- JSON with question content
      user_answer TEXT,
      correct_answer TEXT,
      is_correct INTEGER,
      score REAL, -- partial credit possible
      response_time_ms INTEGER,
      answered_at TEXT,
      order_index INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS assessment_question_bank (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      skill TEXT NOT NULL,
      question_type TEXT NOT NULL, -- multiple_choice, fill_blank, error_correction, sentence_transform
      cefr_level TEXT NOT NULL, -- A1, A2, B1, B2, C1, C2
      topic TEXT,
      question TEXT NOT NULL,
      options TEXT, -- JSON array for multiple choice
      correct_answer TEXT NOT NULL,
      explanation TEXT,
      explanation_tr TEXT
    );

    -- =============================================
    -- GRAMMAR SYSTEM
    -- =============================================
    CREATE TABLE IF NOT EXISTS grammar_topics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      slug TEXT NOT NULL UNIQUE,
      category TEXT NOT NULL, -- tenses, modals, clauses, articles, etc.
      cefr_level TEXT NOT NULL,
      description TEXT,
      explanation_en TEXT, -- English explanation
      explanation_tr TEXT, -- Turkish explanation
      examples TEXT, -- JSON array of example sentences
      rules TEXT, -- JSON array of grammar rules
      common_mistakes TEXT, -- JSON array of common mistakes
      order_index INTEGER DEFAULT 0,
      prerequisite_topics TEXT DEFAULT '[]' -- JSON array of prerequisite topic slugs
    );

    CREATE TABLE IF NOT EXISTS grammar_exercises (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      topic_id INTEGER NOT NULL REFERENCES grammar_topics(id),
      exercise_type TEXT NOT NULL, -- fill_blank, multiple_choice, error_correction, sentence_transform, sentence_creation, reorder
      cefr_level TEXT NOT NULL,
      difficulty INTEGER DEFAULT 1, -- 1-5 within the level
      question TEXT NOT NULL,
      options TEXT, -- JSON array for multiple choice
      correct_answer TEXT NOT NULL,
      explanation TEXT,
      explanation_tr TEXT,
      hint TEXT,
      context TEXT -- situational context for the exercise
    );

    CREATE TABLE IF NOT EXISTS user_grammar_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      topic_id INTEGER NOT NULL REFERENCES grammar_topics(id),
      mastery_level INTEGER DEFAULT 0, -- 0=unknown, 1=introduced, 2=practicing, 3=familiar, 4=proficient, 5=mastered
      recognition_score REAL DEFAULT 0, -- can recognize correct usage
      production_score REAL DEFAULT 0, -- can produce correct usage
      total_attempts INTEGER DEFAULT 0,
      correct_attempts INTEGER DEFAULT 0,
      last_practiced TEXT,
      next_review TEXT,
      review_interval_days REAL DEFAULT 1,
      ease_factor REAL DEFAULT 2.5, -- SM-2 ease factor
      consecutive_correct INTEGER DEFAULT 0,
      UNIQUE(user_id, topic_id)
    );

    -- =============================================
    -- VOCABULARY SYSTEM
    -- =============================================
    CREATE TABLE IF NOT EXISTS vocabulary_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word TEXT NOT NULL,
      part_of_speech TEXT, -- noun, verb, adjective, adverb, etc.
      cefr_level TEXT NOT NULL,
      frequency_rank INTEGER, -- word frequency rank
      definition_en TEXT NOT NULL,
      definition_tr TEXT,
      phonetic TEXT,
      pronunciation_audio_url TEXT,
      example_sentences TEXT, -- JSON array
      synonyms TEXT, -- JSON array
      antonyms TEXT, -- JSON array
      collocations TEXT, -- JSON array
      word_family TEXT, -- JSON array
      common_phrases TEXT, -- JSON array
      formal_informal TEXT, -- formal, informal, neutral
      notes TEXT,
      category TEXT -- daily_life, academic, business, etc.
    );

    CREATE TABLE IF NOT EXISTS user_vocabulary (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      vocabulary_id INTEGER NOT NULL REFERENCES vocabulary_items(id),
      mastery_level INTEGER DEFAULT 0, -- 0-5 same as grammar
      recognition_score REAL DEFAULT 0,
      production_score REAL DEFAULT 0,
      spelling_score REAL DEFAULT 0,
      usage_score REAL DEFAULT 0,
      total_reviews INTEGER DEFAULT 0,
      correct_reviews INTEGER DEFAULT 0,
      last_reviewed TEXT,
      next_review TEXT,
      review_interval_days REAL DEFAULT 1,
      ease_factor REAL DEFAULT 2.5,
      consecutive_correct INTEGER DEFAULT 0,
      first_learned TEXT DEFAULT (datetime('now')),
      personal_note TEXT,
      UNIQUE(user_id, vocabulary_id)
    );

    -- =============================================
    -- SPACED REPETITION QUEUE
    -- =============================================
    CREATE TABLE IF NOT EXISTS review_queue (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      item_type TEXT NOT NULL, -- vocabulary, grammar, error, collocation, phrasal_verb, sentence_pattern
      item_id INTEGER NOT NULL,
      due_date TEXT NOT NULL,
      priority INTEGER DEFAULT 5, -- 1=highest, 10=lowest
      review_count INTEGER DEFAULT 0,
      last_quality INTEGER, -- 0-5 last review quality
      interval_days REAL DEFAULT 1,
      ease_factor REAL DEFAULT 2.5,
      created_at TEXT DEFAULT (datetime('now'))
    );

    -- =============================================
    -- ERROR DATABASE
    -- =============================================
    CREATE TABLE IF NOT EXISTS user_errors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      skill TEXT NOT NULL, -- grammar, vocabulary, pronunciation, etc.
      topic TEXT, -- specific grammar topic, vocabulary word, etc.
      error_type TEXT NOT NULL, -- grammar_error, vocabulary_misuse, pronunciation, spelling, word_order, etc.
      my_text TEXT NOT NULL, -- what the user said/wrote
      correct_text TEXT NOT NULL, -- what it should have been
      explanation TEXT,
      explanation_tr TEXT,
      context TEXT, -- where the error occurred (assessment, lesson, conversation, etc.)
      occurrence_count INTEGER DEFAULT 1, -- how many times this error pattern occurred
      last_occurred TEXT DEFAULT (datetime('now')),
      resolved INTEGER DEFAULT 0, -- has the user shown mastery over this error
      resolved_at TEXT,
      review_priority INTEGER DEFAULT 5 -- 1=highest
    );

    -- =============================================
    -- READING SYSTEM
    -- =============================================
    CREATE TABLE IF NOT EXISTS reading_materials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      cefr_level TEXT NOT NULL,
      category TEXT, -- daily_life, science, technology, history, etc.
      word_count INTEGER,
      estimated_reading_time INTEGER, -- minutes
      key_vocabulary TEXT, -- JSON array of vocabulary ids
      comprehension_questions TEXT, -- JSON array of questions
      summary TEXT,
      source TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS user_reading_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      material_id INTEGER NOT NULL REFERENCES reading_materials(id),
      started_at TEXT DEFAULT (datetime('now')),
      completed_at TEXT,
      reading_time_seconds INTEGER,
      comprehension_score REAL,
      vocabulary_identified TEXT, -- JSON: new words found
      answers TEXT, -- JSON: answers to comprehension questions
      notes TEXT
    );

    -- =============================================
    -- WRITING SYSTEM
    -- =============================================
    CREATE TABLE IF NOT EXISTS writing_prompts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL, -- sentence, paragraph, email, essay, summary, opinion, report
      cefr_level TEXT NOT NULL,
      prompt TEXT NOT NULL,
      instructions TEXT,
      example_response TEXT,
      evaluation_criteria TEXT, -- JSON
      category TEXT,
      word_limit_min INTEGER,
      word_limit_max INTEGER
    );

    CREATE TABLE IF NOT EXISTS user_writing_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      prompt_id INTEGER REFERENCES writing_prompts(id),
      type TEXT NOT NULL,
      prompt_text TEXT NOT NULL,
      user_text TEXT NOT NULL,
      submitted_at TEXT DEFAULT (datetime('now')),
      feedback TEXT, -- JSON with detailed feedback
      grammar_score REAL,
      vocabulary_score REAL,
      structure_score REAL,
      coherence_score REAL,
      overall_score REAL,
      errors_found TEXT, -- JSON array of errors
      suggestions TEXT, -- JSON array of improvement suggestions
      corrected_version TEXT,
      reviewed INTEGER DEFAULT 0
    );

    -- =============================================
    -- SPEAKING SYSTEM
    -- =============================================
    CREATE TABLE IF NOT EXISTS speaking_scenarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      cefr_level TEXT NOT NULL,
      category TEXT, -- restaurant, airport, interview, etc.
      situation TEXT NOT NULL, -- detailed scenario description
      ai_role TEXT, -- what role the AI plays
      user_role TEXT, -- what role the user plays
      starter_message TEXT, -- first message from AI
      key_vocabulary TEXT, -- JSON
      key_phrases TEXT, -- JSON
      objectives TEXT -- JSON: what the user should try to accomplish
    );

    CREATE TABLE IF NOT EXISTS user_speaking_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      scenario_id INTEGER REFERENCES speaking_scenarios(id),
      type TEXT DEFAULT 'conversation', -- conversation, pronunciation, reading_aloud, description
      started_at TEXT DEFAULT (datetime('now')),
      completed_at TEXT,
      transcript TEXT, -- JSON array of exchanges
      feedback TEXT, -- JSON with detailed feedback
      grammar_score REAL,
      vocabulary_score REAL,
      fluency_score REAL,
      pronunciation_score REAL,
      overall_score REAL,
      errors TEXT -- JSON array of errors detected
    );

    -- =============================================
    -- LISTENING SYSTEM
    -- =============================================
    CREATE TABLE IF NOT EXISTS listening_materials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      cefr_level TEXT NOT NULL,
      category TEXT,
      audio_text TEXT NOT NULL, -- text for TTS
      speech_rate TEXT DEFAULT 'normal', -- slow, normal, fast
      accent TEXT DEFAULT 'american', -- american, british, australian
      duration_seconds INTEGER,
      transcript TEXT NOT NULL,
      comprehension_questions TEXT, -- JSON array
      key_vocabulary TEXT, -- JSON array
      difficulty_notes TEXT
    );

    CREATE TABLE IF NOT EXISTS user_listening_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      material_id INTEGER NOT NULL REFERENCES listening_materials(id),
      started_at TEXT DEFAULT (datetime('now')),
      completed_at TEXT,
      times_listened INTEGER DEFAULT 1,
      comprehension_score REAL,
      answers TEXT, -- JSON
      missed_words TEXT, -- JSON: words user couldn't catch
      notes TEXT
    );

    -- =============================================
    -- PRONUNCIATION
    -- =============================================
    CREATE TABLE IF NOT EXISTS user_pronunciation_issues (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      sound TEXT, -- th, r, w, v, etc.
      word TEXT,
      phonetic TEXT,
      issue_type TEXT, -- sound, stress, intonation
      occurrence_count INTEGER DEFAULT 1,
      last_occurred TEXT DEFAULT (datetime('now')),
      resolved INTEGER DEFAULT 0,
      practice_count INTEGER DEFAULT 0
    );

    -- =============================================
    -- CURRICULUM & LEARNING PLANS
    -- =============================================
    CREATE TABLE IF NOT EXISTS learning_plans (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      active INTEGER DEFAULT 1,
      overall_goal TEXT,
      daily_minutes INTEGER DEFAULT 60,
      priority_skills TEXT, -- JSON: ordered list of skills to focus on
      current_focus TEXT, -- JSON: current learning focus areas
      short_term_goals TEXT, -- JSON
      long_term_goals TEXT, -- JSON
      skill_distribution TEXT -- JSON: how time should be distributed
    );

    CREATE TABLE IF NOT EXISTS daily_tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      plan_id INTEGER REFERENCES learning_plans(id),
      date TEXT NOT NULL,
      tasks TEXT NOT NULL, -- JSON array of tasks
      completed_tasks TEXT DEFAULT '[]', -- JSON array of completed task ids
      total_time_minutes INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      completed INTEGER DEFAULT 0
    );

    -- =============================================
    -- PROGRESS TRACKING
    -- =============================================
    CREATE TABLE IF NOT EXISTS progress_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      date TEXT NOT NULL,
      skill TEXT NOT NULL,
      metric TEXT NOT NULL, -- score, level, accuracy, speed, etc.
      value REAL NOT NULL,
      context TEXT, -- what activity produced this data point
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS study_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      date TEXT NOT NULL DEFAULT (date('now')),
      skill TEXT NOT NULL,
      activity_type TEXT NOT NULL,
      duration_minutes REAL DEFAULT 0,
      items_practiced INTEGER DEFAULT 0,
      items_correct INTEGER DEFAULT 0,
      started_at TEXT DEFAULT (datetime('now')),
      completed_at TEXT,
      notes TEXT
    );

    CREATE TABLE IF NOT EXISTS weekly_reports (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      week_start TEXT NOT NULL,
      week_end TEXT NOT NULL,
      report_data TEXT NOT NULL, -- JSON with all weekly metrics
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS monthly_assessments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      month TEXT NOT NULL, -- YYYY-MM
      assessment_id INTEGER REFERENCES assessments(id),
      comparison_data TEXT, -- JSON comparing with previous months
      created_at TEXT DEFAULT (datetime('now'))
    );

    -- =============================================
    -- STREAKS & GAMIFICATION
    -- =============================================
    CREATE TABLE IF NOT EXISTS user_stats (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id) UNIQUE,
      xp INTEGER DEFAULT 0,
      level INTEGER DEFAULT 1,
      current_streak INTEGER DEFAULT 0,
      longest_streak INTEGER DEFAULT 0,
      total_study_minutes INTEGER DEFAULT 0,
      total_words_learned INTEGER DEFAULT 0,
      total_grammar_mastered INTEGER DEFAULT 0,
      total_errors_resolved INTEGER DEFAULT 0,
      last_study_date TEXT,
      achievements TEXT DEFAULT '[]' -- JSON array of earned achievements
    );

    -- =============================================
    -- INDEXES
    -- =============================================
    CREATE INDEX IF NOT EXISTS idx_review_queue_due ON review_queue(user_id, due_date);
    CREATE INDEX IF NOT EXISTS idx_user_errors_user ON user_errors(user_id, skill);
    CREATE INDEX IF NOT EXISTS idx_progress_history ON progress_history(user_id, date, skill);
    CREATE INDEX IF NOT EXISTS idx_study_sessions_date ON study_sessions(user_id, date);
    CREATE INDEX IF NOT EXISTS idx_user_vocab_review ON user_vocabulary(user_id, next_review);
    CREATE INDEX IF NOT EXISTS idx_user_grammar_review ON user_grammar_progress(user_id, next_review);
    CREATE INDEX IF NOT EXISTS idx_assessment_questions ON assessment_questions(assessment_id);
  `);

  // Schema migrations for existing databases
  try {
    db.exec('ALTER TABLE users ADD COLUMN password_hash TEXT DEFAULT ""');
  } catch (e) {
    // Column already exists or table was freshly created
  }

  console.log('✓ Database schema created successfully');
}
