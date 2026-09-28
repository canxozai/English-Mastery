import express from 'express';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '../database/db.js';
import { ensureUser } from '../middleware/auth.js';

const router = express.Router();

// Helper: Hash password with SHA-256 and salt
function hashPassword(password) {
  if (!password) return '';
  return crypto.createHash('sha256').update(password + '_linguaforge_salt').digest('hex');
}

router.post('/api/auth/register', (req, res) => {
  try {
    const db = getDb();
    const { username, password, displayName } = req.body;
    if (!username || !displayName) {
      return res.status(400).json({ error: 'Username and display name are required' });
    }

    const cleanUser = username.trim();
    const cleanDisplay = displayName.trim();
    const existing = db.prepare('SELECT id FROM users WHERE LOWER(username) = LOWER(?)').get(cleanUser);
    if (existing) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    const userId = uuidv4();
    const passwordHash = password ? hashPassword(password) : '';
    db.prepare(`
      INSERT INTO users (id, username, display_name, password_hash) VALUES (?, ?, ?, ?)
    `).run(userId, cleanUser, cleanDisplay, passwordHash);

    // Create initial stats
    db.prepare(`
      INSERT INTO user_stats (user_id) VALUES (?)
    `).run(userId);

    res.json({ userId, username: cleanUser, displayName: cleanDisplay });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/api/auth/login', (req, res) => {
  try {
    const db = getDb();
    const { username, password } = req.body;
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    const cleanUser = username.trim();
    const user = db.prepare('SELECT * FROM users WHERE LOWER(username) = LOWER(?)').get(cleanUser);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify password if user has password_hash configured
    if (user.password_hash) {
      if (!password || hashPassword(password) !== user.password_hash) {
        return res.status(401).json({ error: 'Invalid password' });
      }
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

router.get('/api/user/profile', ensureUser, (req, res) => {
  try {
    const db = getDb();
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
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
});

export default router;
