import { getDb } from '../database/db.js';

/**
 * Middleware: Simple user session validation via x-user-id header
 */
export function ensureUser(req, res, next) {
  const userId = req.headers['x-user-id'];
  if (!userId) {
    return res.status(401).json({ error: 'No user ID provided' });
  }

  const db = getDb();
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  req.user = user;

  // Update last active timestamp
  db.prepare("UPDATE users SET last_active = datetime('now') WHERE id = ?").run(userId);
  next();
}
