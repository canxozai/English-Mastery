/**
 * Pronunciation & Accent Training Lab
 * Minimal pairs, silent letters, past -ed ending rules, and voice recording feedback with Turkish guidance
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
            <h1 class="pron-title">Telaffuz & Aksan Koçu</h1>
            <p class="pron-subtitle">Türkçe aksan etkisini azaltın, İngilizcenin fonetik seslerini ve doğal ritmini keşfedin</p>
          </div>
          <div class="pron-tabs">
            <button class="btn ${this.activeTab === 'minimal_pairs' ? 'btn-primary' : 'btn-secondary'}" data-tab="minimal_pairs">
              Benzer Sesler (Minimal Pairs)
            </button>
            <button class="btn ${this.activeTab === 'silent_letters' ? 'btn-primary' : 'btn-secondary'}" data-tab="silent_letters">
              Okunmayan Harfler (Silent)
            </button>
            <button class="btn ${this.activeTab === 'ed_endings' ? 'btn-primary' : 'btn-secondary'}" data-tab="ed_endings">
              Geçmiş Zaman (-ed) Kuralı
            </button>
            <button class="btn ${this.activeTab === 'sentence_stress' ? 'btn-primary' : 'btn-secondary'}" data-tab="sentence_stress">
              Cümle Vurgusu & Ritim
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
      { soundA: '/ɪ/ (Kısa i)', wordA: 'Ship (Gemi)', soundB: '/iː/ (Uzun i)', wordB: 'Sheep (Koyun)', tip: 'Türkçede tek bir /i/ sesi vardır. İngilizcede ise /ɪ/ gevşek ve çok kısadır; /iː/ ise dudaklar yana açılarak gülümser gibi uzatılır.' },
      { soundA: '/æ/ (Açık a/e)', wordA: 'Bat (Yarasa)', soundB: '/e/ (Düz e)', wordB: 'Bet (Bahis)', tip: '"Apple" veya "cat" derken çenenizi Türkçedeki "e" sesine göre daha aşağı açın (/æ/).' },
      { soundA: '/θ/ (Peltik th)', wordA: 'Think (Düşünmek)', soundB: '/s/ (Keskin s)', wordB: 'Sink (Batmak)', tip: 'Dilinizin ucunu ön dişlerinizin arasına hafifçe sıkıştırarak nefes verin (/θ/). Kesinlikle Türkçedeki "s" gibi okumayın!' },
      { soundA: '/w/ (Yuvarlak dudak)', wordA: 'Wet (Islak)', soundB: '/v/ (Diş-dudak)', wordB: 'Vet (Veteriner)', tip: '/w/ sesinde dişlerinizi asla alt dudağınıza değdirmeyin; dudaklarınızı ıslık çalar gibi "O" yapın.' }
    ];

    return `
      <div class="card minimal-pairs-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🎧 Karışan Sesleri Ayırt Etme (Minimal Pairs)</h2>
            <div class="card-subtitle">Kulaklarınızı ve dilinizi İngilizcenin kritik ses ayrımlarına alıştırın</div>
          </div>
        </div>

        <div class="pairs-grid">
          ${pairs.map(p => `
            <div class="pair-card">
              <div class="pair-contrast-row">
                <div class="word-box word-a">
                  <span class="sound-tag">${p.soundA}</span>
                  <div class="word-title">${p.wordA}</div>
                  <button class="tts-play-btn pron-tts" data-text="${p.wordA.split(' ')[0]}">🔊 Dinle</button>
                </div>

                <div class="contrast-symbol">vs</div>

                <div class="word-box word-b">
                  <span class="sound-tag">${p.soundB}</span>
                  <div class="word-title">${p.wordB}</div>
                  <button class="tts-play-btn pron-tts" data-text="${p.wordB.split(' ')[0]}">🔊 Dinle</button>
                </div>
              </div>

              <div class="pair-tip">
                💡 <strong>Türkçe İpucu:</strong> ${p.tip}
              </div>

              <div class="mic-practice-box">
                <button class="btn btn-secondary btn-sm test-mic-btn" data-target="${p.wordA.split(' ')[0]}">
                  🎙️ "${p.wordA.split(' ')[0]}" Telaffuz Et
                </button>
                <button class="btn btn-secondary btn-sm test-mic-btn" data-target="${p.wordB.split(' ')[0]}">
                  🎙️ "${p.wordB.split(' ')[0]}" Telaffuz Et
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
      { word: 'Doubt', meaning: 'Şüphe', phonetic: '/daʊt/', silent: 'b', note: '"b" harfi tamamen okunmaz (ayrıca debt, subtle).' },
      { word: 'Receipt', meaning: 'Fiş/Makbuz', phonetic: '/rɪˈsiːt/', silent: 'p', note: '"p" harfi okunmaz, "risiit" diye telaffuz edilir.' },
      { word: 'Knight', meaning: 'Şövalye', phonetic: '/naɪt/', silent: 'k & gh', note: '"k" ve "gh" harfleri okunmaz, "nayt" (night ile aynı).' },
      { word: 'Island', meaning: 'Ada', phonetic: '/ˈaɪ.lənd/', silent: 's', note: '"s" harfi kesinlikle okunmaz, "aylınd" diye okunur.' },
      { word: 'Honest', meaning: 'Dürüst', phonetic: '/ˈɒn.ɪst/', silent: 'h', note: '"h" okunmaz, bu yüzden "an honest person" denir.' },
      { word: 'Wednesday', meaning: 'Çarşamba', phonetic: '/ˈwenz.deɪ/', silent: 'd', note: 'İlk "d" ve ortadaki "e" okunmaz: "wenzdey".' }
    ];

    return `
      <div class="card silent-letters-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🤫 Okunmayan (Sessiz) Harfler</h2>
            <div class="card-subtitle">İngilizce Türkçedeki gibi yazıldığı gibi okunmaz; tarihi kökenleri vardır</div>
          </div>
        </div>

        <div class="silent-words-grid">
          ${silentWords.map(w => `
            <div class="silent-word-item">
              <div class="silent-top">
                <strong class="silent-word">${w.word}</strong>
                <span class="silent-phonetic">${w.phonetic}</span>
                <button class="tts-play-btn pron-tts" data-text="${w.word}">🔊</button>
              </div>
              <div class="silent-meaning">🇹🇷 Anlamı: ${w.meaning}</div>
              <div class="silent-rule">Okunmayan: <strong>${w.silent}</strong></div>
              <p class="silent-note">${w.note}</p>
              <button class="btn btn-secondary btn-sm test-mic-btn" data-target="${w.word}" style="margin-top: 8px;">
                🎙️ Mikrofona Söyle
              </button>
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
            <h2 class="card-title">📐 Geçmiş Zaman "-ed" Ekinin 3 Farklı Okunuşu</h2>
            <div class="card-subtitle">Türk öğrencilerin en çok yaptığı "her -ed ekini 'ıd' okuma" hatasını düzeltin</div>
          </div>
        </div>

        <div class="grid-3 ed-rules-grid">
          <div class="ed-rule-box">
            <div class="ed-tag">1. /ɪd/ veya /əd/</div>
            <div class="ed-condition">Sadece sonu <strong>T</strong> veya <strong>D</strong> ile biten fiillerde ekstra hece olur!</div>
            <ul class="ed-examples">
              <li>Wanted <button class="tts-play-btn pron-tts" data-text="Wanted">🔊</button></li>
              <li>Decided <button class="tts-play-btn pron-tts" data-text="Decided">🔊</button></li>
              <li>Started <button class="tts-play-btn pron-tts" data-text="Started">🔊</button></li>
            </ul>
          </div>

          <div class="ed-rule-box">
            <div class="ed-tag">2. /t/ (Sessiz)</div>
            <div class="ed-condition">Boğaz titremeyen seslerden sonra (p, k, s, sh, ch, f):</div>
            <ul class="ed-examples">
              <li>Worked (wörkt) <button class="tts-play-btn pron-tts" data-text="Worked">🔊</button></li>
              <li>Watched (woçt) <button class="tts-play-btn pron-tts" data-text="Watched">🔊</button></li>
              <li>Stopped (stopt) <button class="tts-play-btn pron-tts" data-text="Stopped">🔊</button></li>
            </ul>
          </div>

          <div class="ed-rule-box">
            <div class="ed-tag">3. /d/ (Sesli)</div>
            <div class="ed-condition">Diğer tüm sesli ve yumuşak harflerden sonra:</div>
            <ul class="ed-examples">
              <li>Played (pleyd) <button class="tts-play-btn pron-tts" data-text="Played">🔊</button></li>
              <li>Cleaned (kliind) <button class="tts-play-btn pron-tts" data-text="Cleaned">🔊</button></li>
              <li>Lived (livd) <button class="tts-play-btn pron-tts" data-text="Lived">🔊</button></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  renderSentenceStress() {
    return `
      <div class="card sentence-stress-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🎵 Cümle Vurgusu & İngilizcenin Doğal Müziği</h2>
            <div class="card-subtitle">İngilizce ritmik (stress-timed) bir dildir; Türkçedeki gibi her hece eşit okunmaz</div>
          </div>
        </div>

        <div class="stress-examples-list">
          <div class="stress-item">
            <div class="stress-sentence">
              "I <strong style="color: #6ee7b7;">WANT</strong> to <strong style="color: #6ee7b7;">GO</strong> to the <strong style="color: #6ee7b7;">STORE</strong>."
            </div>
            <div class="stress-explanation">
              Türkçe düşünerek her kelimeyi aynı güçle okumayın. Anlam taşıyan kelimeler (WANT, GO, STORE) vurgulanır; "to" ve "the" hızlıca ve zayıf söylenir.
            </div>
            <button class="btn btn-secondary btn-sm pron-tts" data-text="I want to go to the store.">🔊 Doğal Ritmi Dinle</button>
          </div>

          <div class="stress-item">
            <div class="stress-sentence">
              "She <strong style="color: #6ee7b7;">LIVES</strong> in a <strong style="color: #6ee7b7;">BIG</strong> <strong style="color: #6ee7b7;">HOUSE</strong>."
            </div>
            <div class="stress-explanation">
              Vurgulanan kelimeler daha yüksek ve belirgindir: "LIVES", "BIG", "HOUSE".
            </div>
            <button class="btn btn-secondary btn-sm pron-tts" data-text="She lives in a big house.">🔊 Doğal Ritmi Dinle</button>
          </div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    document.querySelectorAll('.pron-tabs .btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeTab = btn.dataset.tab;
        this.renderContent();
      });
    });

    document.querySelectorAll('.pron-tts').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.text;
        if (text) speech.speak(text);
      });
    });

    document.querySelectorAll('.test-mic-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        if (!speech.hasRecognition) {
          state.showToast('Mikrofon ses tanıma bu tarayıcıda desteklenmiyor.', 'error');
          return;
        }

        btn.textContent = '🎙️ Dinleniyor...';
        btn.classList.add('pulse');

        speech.listen((transcript) => {
          btn.classList.remove('pulse');
          const cleanTrans = transcript.trim().toLowerCase();
          const cleanTarget = target.trim().toLowerCase();
          const isMatch = cleanTrans.includes(cleanTarget) || cleanTarget.includes(cleanTrans);

          if (isMatch) {
            btn.textContent = `✅ Harika! "${transcript}"`;
            state.showToast(`Mükemmel telaffuz! Algılanan: "${transcript}"`, 'success');
          } else {
            btn.textContent = `Tekrar dene (Duyulan: "${transcript}")`;
            state.showToast(`Duyulan: "${transcript}". Hedef kelimeye tekrar çalışın.`, 'info');
          }
        }, () => {
          btn.classList.remove('pulse');
          btn.textContent = `🎙️ "${target}" Telaffuz Et`;
        });
      });
    });
  }
}
