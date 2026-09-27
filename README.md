# LinguaForge — Adaptive Personal English Mastery System

LinguaForge is a serious, long-term personal English learning and cognitive fluency system designed according to applied linguistics, CEFR assessment standards, and second-language acquisition (SLA) research.

Unlike generic flashcard or quiz apps, LinguaForge evaluates and trains **10 independent dimensions of communicative competence** to foster authentic real-world fluency and spontaneous English thinking.

---

## 🌟 The 10 Competency Domains

1. **📖 Grammar Academy:** Full curriculum (A1 → C1) with English explanations, Turkish comparative linguistics (addressing L1 syntax interference), rules, formulas, and interactive error-checking sandboxes.
2. **📚 Spaced Repetition (SRS) Vocabulary Studio:** SuperMemo SM-2 memory consolidation engine with IPA phonetic transcription, collocations, false friends alerts, and 3D flashcards.
3. **📰 Reading Comprehension Lab:** Graded real-world articles with instant word-click pronunciation, speed (WPM) tracking, and deep inference questions.
4. **🎧 Listening & Phonics Lab:** Audio dialogues with British & American accent toggles, speech rate tuning (0.75x - 1.25x), dictation ear-training, and interactive transcripts.
5. **✍️ Writing Studio:** Multi-dimensional formative writing evaluation measuring grammatical accuracy, lexical variety, sentence length distribution, and stylistic suggestions.
6. **🗣️ Speaking & Roleplay Simulator:** Real-life situational turn-taking (restaurant, job interview, travel, social) with Web Speech voice recognition and conversational objectives.
7. **🎙️ Pronunciation & Accent Lab:** Minimal pairs acoustic training (/ɪ/ vs /iː/, /θ/ vs /s/, /w/ vs /v/), silent letter workshops, regular past tense "-ed" pronunciation rules, and microphone accuracy scoring.
8. **🧩 Sentence Syntax & Formation:** Word order (SVO), cleft sentences, indirect questions, and inversion drills.
9. **💡 Pragmatic Comprehension & English Thinking:** Idioms, context clues, conversational tone, and shifting from direct Turkish translation to intuitive English thinking.
10. **🎯 Personal Error Bank (Hata Defteri):** Longitudinal logging of habitual mistakes, frequency tracking, root-cause linguistic diagnostics, and targeted eradication drills.

---

## 🏗️ System Architecture

- **Backend:** Node.js, Express, `sql.js` (WebAssembly SQLite)
- **Frontend:** Vanilla JavaScript (ES Modules), Vite, Modern Glassmorphism CSS design system
- **Speech Engine:** Web Speech API (SpeechSynthesis & SpeechRecognition)
- **Database:** SQLite with automated seed data covering 20+ grammar modules, 40+ diagnostic assessment items, reading texts, listening dialogues, and writing prompts.

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- Git

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone <YOUR_GITHUB_REPO_URL>
cd english-mastery
npm install
```

### 3. Initialize & Seed Database
Create the database schema and populate full curriculum seed data:
```bash
npm run seed
```

### 4. Run Development Servers
Start both the backend API server (`localhost:3001`) and the Vite client UI (`localhost:3000`):
```bash
npm run dev
```

Visit **`http://localhost:3000`** in your browser to begin learning!

---

## 📜 Available Scripts

- `npm run dev`: Runs both backend and frontend concurrently in development mode.
- `npm run server:dev`: Runs the Express API server with file watching (`--watch`).
- `npm run client:dev`: Runs the Vite frontend development server.
- `npm run build`: Compiles and bundles production frontend assets into `/dist`.
- `npm run seed`: Re-initializes and seeds the SQLite database.
- `npm run setup`: One-step installation and database seeding.

---

## 📄 License
MIT License. Created for personal English mastery and lifelong learning.
