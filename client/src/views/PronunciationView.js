/**
 * Pronunciation & Accent Training Lab
 * Minimal pairs, silent letters, past -ed ending rules, and voice recording feedback
 */
import { state } from '../state.js';
import { speech } from '../speech.js';

export class PronunciationView {
  constructor() {
    this.container = null;
    this.activeTab = 'minimal_pairs';
    this.isRecording = false;
    this.currentScore = null;
  }

  render(viewport) {
    this.container = viewport;
    this.renderContent();
  }

  renderContent() {
    this.container.innerHTML = `
      <div class="pronunciation-layout">
        <!-- Header -->
        <div class="card pron-header">
          <div class="pron-header-left">
            <h1 class="pron-title">Pronunciation & Accent Lab</h1>
            <p class="pron-subtitle">Train acoustic phonetics, reduce Turkish accent interference, and master natural English rhythm</p>
          </div>
          <div class="pron-tabs">
            <button class="btn ${this.activeTab === 'minimal_pairs' ? 'btn-primary' : 'btn-secondary'}" data-tab="minimal_pairs">
              Minimal Pairs
            </button>
            <button class="btn ${this.activeTab === 'silent_letters' ? 'btn-primary' : 'btn-secondary'}" data-tab="silent_letters">
              Silent Letters
            </button>
            <button class="btn ${this.activeTab === 'ed_endings' ? 'btn-primary' : 'btn-secondary'}" data-tab="ed_endings">
              Past "-ed" Endings
            </button>
            <button class="btn ${this.activeTab === 'sentence_stress' ? 'btn-primary' : 'btn-secondary'}" data-tab="sentence_stress">
              Sentence Stress
            </button>
          </div>
        </div>

        <div class="pron-body" id="pron-body">
          ${this.renderActiveTabContent()}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  renderActiveTabContent() {
    switch (this.activeTab) {
      case 'minimal_pairs':
        return this.renderMinimalPairs();
      case 'silent_letters':
        return this.renderSilentLetters();
      case 'ed_endings':
        return this.renderEdEndings();
      case 'sentence_stress':
        return this.renderSentenceStress();
      default:
        return '';
    }
  }

  renderMinimalPairs() {
    const pairs = [
      { soundA: '/ɪ/ (short)', wordA: 'Ship', soundB: '/iː/ (long)', wordB: 'Sheep', tip: 'Turkish only has one /i/ sound. In English, /ɪ/ is relaxed and short, while /iː/ is smiled and long.' },
      { soundA: '/æ/ (open)', wordA: 'Bat', soundB: '/e/ (mid)', wordB: 'Bet', tip: 'Open your jaw wide for /æ/ as in "apple" or "cat".' },
      { soundA: '/θ/ (unvoiced th)', wordA: 'Think', soundB: '/s/ (sibilant)', wordB: 'Sink', tip: 'Place your tongue between your upper and lower teeth for /θ/. Do not say /s/!' },
      { soundA: '/w/ (rounded)', wordA: 'Wet', soundB: '/v/ (labiodental)', wordB: 'Vet', tip: 'For /w/, round your lips into an "O" shape without touching teeth to lips.' }
    ];

    return `
      <div class="card minimal-pairs-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🎧 Minimal Pairs Discrimination</h2>
            <div class="card-subtitle">Train your ears and vocal cords to contrast confusing vowel and consonant sounds</div>
          </div>
        </div>

        <div class="pairs-grid">
          ${pairs.map(p => `
            <div class="pair-card">
              <div class="pair-contrast-row">
                <div class="word-box word-a">
                  <span class="sound-tag">${p.soundA}</span>
                  <div class="word-title">${p.wordA}</div>
                  <button class="tts-play-btn pron-tts" data-text="${p.wordA}">🔊 Listen</button>
                </div>

                <div class="contrast-symbol">vs</div>

                <div class="word-box word-b">
                  <span class="sound-tag">${p.soundB}</span>
                  <div class="word-title">${p.wordB}</div>
                  <button class="tts-play-btn pron-tts" data-text="${p.wordB}">🔊 Listen</button>
                </div>
              </div>

              <div class="pair-tip">
                💡 <strong>Linguistic Tip:</strong> ${p.tip}
              </div>

              <div class="mic-practice-box">
                <button class="btn btn-secondary btn-sm test-mic-btn" data-target="${p.wordA}">
                  🎙️ Practice "${p.wordA}"
                </button>
                <button class="btn btn-secondary btn-sm test-mic-btn" data-target="${p.wordB}">
                  🎙️ Practice "${p.wordB}"
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderSilentLetters() {
    const silentWords = [
      { word: 'Doubt', phonetic: '/daʊt/', silent: 'b', note: 'The letter "b" is silent (also in debt, subtle).' },
      { word: 'Receipt', phonetic: '/rɪˈsiːt/', silent: 'p', note: 'The letter "p" is completely silent.' },
      { word: 'Knight', phonetic: '/naɪt/', silent: 'k & gh', note: '"k" and "gh" are silent, rhyming with night.' },
      { word: 'Island', phonetic: '/ˈaɪ.lənd/', silent: 's', note: 'Never pronounce the "s" in island!' },
      { word: 'Honest', phonetic: '/ˈɒn.ɪst/', silent: 'h', note: 'Silent "h", requiring the article "an honest person".' },
      { word: 'Wednesday', phonetic: '/ˈwenz.deɪ/', silent: 'd', note: 'The first "d" and second "e" are silent.' }
    ];

    return `
      <div class="card silent-letters-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🤫 The English Silent Letters Workshop</h2>
            <div class="card-subtitle">English spelling reflects history, not phonetic 1:1 spelling like Turkish</div>
          </div>
        </div>

        <div class="silent-grid">
          ${silentWords.map(w => `
            <div class="silent-word-card">
              <div class="silent-word-header">
                <div class="silent-word-title">${w.word}</div>
                <button class="tts-play-btn pron-tts" data-text="${w.word}">🔊</button>
              </div>
              <div class="phonetic-ipa">${w.phonetic}</div>
              <div class="silent-letter-badge">Silent: <strong>${w.silent}</strong></div>
              <p class="silent-note">${w.note}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderEdEndings() {
    return `
      <div class="card ed-endings-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">⏱️ Regular Past Tense "-ed" Pronunciation</h2>
            <div class="card-subtitle">Master the 3 distinct sounds of regular past tense verbs</div>
          </div>
        </div>

        <div class="ed-rules-grid">
          <div class="ed-rule-col rule-id">
            <div class="rule-badge">/ɪd/ or /əd/ (Extra Syllable)</div>
            <p class="rule-condition">Used ONLY after verbs ending in <strong>/t/</strong> or <strong>/d/</strong> sounds.</p>
            <div class="ed-examples-list">
              <div class="ed-ex-item" data-text="Wanted">Wanted (want-ed) 🔊</div>
              <div class="ed-ex-item" data-text="Needed">Needed (need-ed) 🔊</div>
              <div class="ed-ex-item" data-text="Decided">Decided (de-cid-ed) 🔊</div>
            </div>
          </div>

          <div class="ed-rule-col rule-t">
            <div class="rule-badge">/t/ (Voiceless Ending)</div>
            <p class="rule-condition">After voiceless consonants: /p/, /k/, /s/, /ʃ/, /tʃ/, /f/.</p>
            <div class="ed-examples-list">
              <div class="ed-ex-item" data-text="Worked">Worked (workt) 🔊</div>
              <div class="ed-ex-item" data-text="Watched">Watched (watcht) 🔊</div>
              <div class="ed-ex-item" data-text="Laughed">Laughed (lafft) 🔊</div>
            </div>
          </div>

          <div class="ed-rule-col rule-d">
            <div class="rule-badge">/d/ (Voiced Ending)</div>
            <p class="rule-condition">After voiced sounds: vowels and /b/, /g/, /v/, /z/, /m/, /n/, /l/, /r/.</p>
            <div class="ed-examples-list">
              <div class="ed-ex-item" data-text="Played">Played (playd) 🔊</div>
              <div class="ed-ex-item" data-text="Opened">Opened (opend) 🔊</div>
              <div class="ed-ex-item" data-text="Called">Called (calld) 🔊</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderSentenceStress() {
    const drillSentences = [
      { text: "I didn't say he stole the money.", stress: "NEUTRAL", note: "Baseline statement without marked emphasis." },
      { text: "I didn't say HE stole the money.", stress: "EMPHASIS ON 'HE'", note: "Someone else stole it, not him." },
      { text: "I didn't say he STOLE the money.", stress: "EMPHASIS ON 'STOLE'", note: "Maybe he borrowed it or received it." },
      { text: "I didn't say he stole the MONEY.", stress: "EMPHASIS ON 'MONEY'", note: "He stole something else (e.g. jewelry)." }
    ];

    return `
      <div class="card sentence-stress-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🎵 Sentence Stress & Pragmatic Meaning</h2>
            <div class="card-subtitle">In English, changing WHICH word you stress completely changes the underlying meaning</div>
          </div>
        </div>

        <div class="stress-drills-list">
          ${drillSentences.map(d => `
            <div class="stress-item">
              <div class="stress-top">
                <span class="stress-badge">${d.stress}</span>
                <button class="tts-play-btn pron-tts" data-text="${d.text}">🔊 Listen</button>
              </div>
              <div class="stress-sentence">${d.text}</div>
              <div class="stress-meaning">👉 Implication: ${d.note}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  bindEvents() {
    this.container.querySelectorAll('.pron-tabs .btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeTab = btn.dataset.tab;
        this.renderContent();
      });
    });

    // TTS speaker buttons
    this.container.querySelectorAll('.pron-tts').forEach(btn => {
      btn.addEventListener('click', () => {
        speech.speak(btn.dataset.text);
      });
    });

    this.container.querySelectorAll('.ed-ex-item').forEach(item => {
      item.addEventListener('click', () => {
        speech.speak(item.dataset.text);
      });
    });

    // Mic practice buttons
    this.container.querySelectorAll('.test-mic-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetWord = btn.dataset.target;
        if (!speech.isSttSupported()) {
          state.showToast('Speech recognition not supported in this browser.', 'error');
          return;
        }

        state.showToast(`Say "${targetWord}" into your microphone now...`, 'info', 4000);
        btn.textContent = '🔴 Listening...';

        speech.startListening({
          onResult: (res) => {
            const spoken = res.final || res.interim;
            const score = speech.calculateSimilarity(spoken, targetWord);
            if (score >= 80) {
              state.showToast(`Excellent! You said "${spoken}" (${score}% accurate)`, 'success');
            } else {
              state.showToast(`Detected: "${spoken}" (${score}% match). Try listening and repeating again.`, 'error');
            }
          },
          onEnd: () => {
            btn.textContent = `🎙️ Practice "${targetWord}"`;
          },
          onError: () => {
            btn.textContent = `🎙️ Practice "${targetWord}"`;
          }
        });
      });
    });
  }
}
