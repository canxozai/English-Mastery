import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { initDb } from './database/db.js';
import { createSchema } from './database/schema.js';

// Modular route handlers
import authRoutes from './routes/auth.js';
import assessmentRoutes from './routes/assessment.js';
import grammarRoutes from './routes/grammar.js';
import vocabularyRoutes from './routes/vocabulary.js';
import skillsRoutes from './routes/skills.js';
import progressRoutes from './routes/progress.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// Global Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Register Modular Routers
app.use(authRoutes);
app.use(assessmentRoutes);
app.use(grammarRoutes);
app.use(vocabularyRoutes);
app.use(skillsRoutes);
app.use(progressRoutes);

// System Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'English Mastery API', timestamp: new Date().toISOString() });
});

// Start Server
async function initServer() {
  await initDb();
  createSchema();

  app.listen(PORT, () => {
    console.log(`\n🚀 English Mastery API server running on http://localhost:${PORT}`);
    console.log(`📚 Database: ${process.env.DB_PATH || './data/english-mastery.db'}`);
    console.log('');
  });
}

initServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

export default app;
