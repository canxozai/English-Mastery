import initSqlJs from 'sql.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = process.env.DB_PATH || path.join(__dirname, '..', '..', 'data', 'english-mastery.db');

let db = null;
let SQL = null;

export async function initDb() {
  if (db) return db;

  SQL = await initSqlJs();

  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  db.run('PRAGMA foreign_keys = ON');

  // Wrap db.prepare to provide better-sqlite3 API compatibility
  const origPrepare = db.prepare.bind(db);
  db.prepare = function(sql) {
    return {
      get(...params) {
        const pList = (params.length === 1 && Array.isArray(params[0])) ? params[0] : params;
        const clean = sanitizeParams(pList);
        const stmt = origPrepare(sql);
        if (clean.length) stmt.bind(clean);
        const res = stmt.step() ? stmt.getAsObject() : null;
        stmt.free();
        return res;
      },
      all(...params) {
        const pList = (params.length === 1 && Array.isArray(params[0])) ? params[0] : params;
        const clean = sanitizeParams(pList);
        const stmt = origPrepare(sql);
        if (clean.length) stmt.bind(clean);
        const res = [];
        while (stmt.step()) {
          res.push(stmt.getAsObject());
        }
        stmt.free();
        return res;
      },
      run(...params) {
        const pList = (params.length === 1 && Array.isArray(params[0])) ? params[0] : params;
        const clean = sanitizeParams(pList);
        const stmt = origPrepare(sql);
        if (clean.length) stmt.bind(clean);
        stmt.step();
        stmt.free();
        const changes = db.getRowsModified();
        const rowidRes = db.exec('SELECT last_insert_rowid() as id');
        const lastInsertRowid = (rowidRes[0] && rowidRes[0].values && rowidRes[0].values[0]) ? rowidRes[0].values[0][0] : 0;
        saveDb();
        return { changes, lastInsertRowid };
      }
    };
  };

  const origExec = db.exec.bind(db);
  db.exec = function(sql) {
    const res = origExec(sql);
    saveDb();
    return res;
  };

  db.transaction = function(fn) {
    return function(...args) {
      db.run('BEGIN TRANSACTION');
      try {
        const res = fn(...args);
        db.run('COMMIT');
        saveDb();
        return res;
      } catch (err) {
        db.run('ROLLBACK');
        throw err;
      }
    };
  };

  return db;
}

export function getDb() {
  if (!db) throw new Error('Database not initialized. Call initDb() first.');
  return db;
}

export function saveDb() {
  if (db) {
    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(DB_PATH, buffer);
  }
}

export function closeDb() {
  if (db) {
    saveDb();
    db.close();
    db = null;
  }
}

// Helper functions that wrap sql.js to provide a better-sqlite3-like API
function sanitizeParams(params) {
  return params.map(p => (p === undefined ? null : p));
}

export function dbRun(sql, params = []) {
  const d = getDb();
  return d.prepare(sql).run(...params);
}

export function dbGet(sql, params = []) {
  const d = getDb();
  return d.prepare(sql).get(...params);
}

export function dbAll(sql, params = []) {
  const d = getDb();
  return d.prepare(sql).all(...params);
}

export function dbExec(sql) {
  const d = getDb();
  d.exec(sql);
  saveDb();
}
