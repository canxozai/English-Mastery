/**
 * WordInspector - Instant Vocabulary & Grammar Structure Inspector
 * Enables instant in-context lookup, audio pronunciation, and 1-click SRS card creation
 */
import { staticData } from './static-data.js';
import { speech } from './speech.js';
import { api } from './api.js';
import { state } from './state.js';

// Comprehensive bilingual quick-lookup dictionary for questions, tests, and real-world expressions
const BUILTIN_DICT = {
  // Common question words & testing vocabulary
  'umbrella': { tr: 'Şemsiye', pos: 'noun', cefr: 'A1', note: 'Yağmurdan korunma aracı' },
  'cloud': { tr: 'Bulut', pos: 'noun', cefr: 'A1', note: 'Gökyüzündeki su buharı kümesi' },
  'clouds': { tr: 'Bulutlar', pos: 'noun', cefr: 'A1', note: 'Kara bulutlar: dark clouds' },
  'dark': { tr: 'Karanlık, koyu', pos: 'adj', cefr: 'A1', note: 'Dark clouds = kara bulutlar' },
  'fill': { tr: 'Doldurmak', pos: 'verb', cefr: 'A1', note: 'Filled = doldurdu' },
  'filled': { tr: 'Dolu, doldurmuş', pos: 'verb', cefr: 'A1', note: 'Filled the sky = gökyüzünü kapladı' },
  'sky': { tr: 'Gökyüzü', pos: 'noun', cefr: 'A1', note: 'The sky = gök' },
  'expect': { tr: 'Ummak, beklemek', pos: 'verb', cefr: 'A2', note: 'Beklenti içinde olmak' },
  'expected': { tr: 'Bekledi, umdu', pos: 'verb', cefr: 'A2', note: 'Beklenen durum' },
  'take out': { tr: 'Çıkarmak, dışarı almak', pos: 'phrasal verb', cefr: 'A2', note: 'Cebinden veya çantasından çıkarmak' },
  'took out': { tr: 'Çıkardı', pos: 'phrasal verb', cefr: 'A2', note: 'Take out fiilinin geçmiş hali' },
  'rain': { tr: 'Yağmur / Yağmur yağmak', pos: 'noun/verb', cefr: 'A1', note: 'Hava durumu' },
  'under the weather': { tr: 'Keyifsiz, biraz hasta', pos: 'idiom', cefr: 'B1', note: 'Deyim: Kendini kırgın/halsiz hissetmek' },
  'unwell': { tr: 'Rahatsız, hasta', pos: 'adj', cefr: 'A2', note: 'Sağlığı bozuk' },
  'sick': { tr: 'Hasta', pos: 'adj', cefr: 'A1', note: 'Hastalanmış' },
  'born': { tr: 'Doğmuş, dünyaya gelmiş', pos: 'adj/verb', cefr: 'A1', note: 'To be born = doğmak' },
  'happy birthday': { tr: 'İyi ki doğdun / Doğum günün kutlu olsun', pos: 'phrase', cefr: 'A1', note: 'Kalıp ifade' },
  'reflection': { tr: 'Düşünme, yansıma', pos: 'noun', cefr: 'B2', note: 'Derin düşünme' },
  'reflect': { tr: 'Düşünmek, yansıtmak', pos: 'verb', cefr: 'B2', note: 'Let me reflect = Bir düşüneyim' },
  'thoughtful': { tr: 'Düşünceli, özenli', pos: 'adj', cefr: 'B1', note: 'İyi düşünülmüş soru' },
  'question': { tr: 'Soru', pos: 'noun', cefr: 'A1', note: 'Cevap bekleyen cümle' },
  'interview': { tr: 'Mülakat, röportaj', pos: 'noun', cefr: 'A2', note: 'İş veya soru-cevap görüşmesi' },
  'hesitation': { tr: 'Tereddüt, duraksama', pos: 'noun', cefr: 'B2', note: 'Konuşurken duraklama' },
  'hesitate': { tr: 'Tereddüt etmek', pos: 'verb', cefr: 'B1', note: 'Duraksamak' },
  'filler': { tr: 'Doldurucu kelime (ör. well, you know)', pos: 'noun', cefr: 'B2', note: 'Düşünme süresi kazandıran sözcükler' },
  'directive': { tr: 'Talimat, direktif, yönerge', pos: 'noun', cefr: 'B2', note: 'Yapılması istenen resmi talimat' },
  'pragmatic': { tr: 'Edimbilimsel, pratik amaca yönelik', pos: 'adj', cefr: 'B2', note: 'Sosyal iletişimdeki gerçek anlam' },
  'implicature': { tr: 'Örtük anlam, ima', pos: 'noun', cefr: 'C1', note: 'Doğrudan söylenmeyip ima edilen şey' },
  'review': { tr: 'Gözden geçirmek, incelemek', pos: 'verb', cefr: 'A2', note: 'Tekrar okumak' },
  'presentation': { tr: 'Sunum', pos: 'noun', cefr: 'A2', note: 'İş veya okul sunumu' },
  'compliment': { tr: 'İltifat, övgü', pos: 'noun', cefr: 'B1', note: 'Güzel söz' },
  'stranger': { tr: 'Yabancı (tanınmayan kişi)', pos: 'noun', cefr: 'A2', note: 'Tanımadığınız sokaktaki insan' },
  'excuse me': { tr: 'Affedersiniz, bakar mısınız?', pos: 'phrase', cefr: 'A1', note: 'Kibarca dikkat çekme kalıbı' },
  'clarify': { tr: 'Netleştirmek, açıklığa kavuşturmak', pos: 'verb', cefr: 'B1', note: 'Daha açık anlatmak' },
  'clarification': { tr: 'Açıklama, netleştirme', pos: 'noun', cefr: 'B1', note: 'Anlaşılmayan yeri netleştirme' },
  'interrupt': { tr: 'Sözünü kesmek, araya girmek', pos: 'verb', cefr: 'B1', note: 'Konuşmayı bölmek' },
  'interruption': { tr: 'Araya girme, kesinti', pos: 'noun', cefr: 'B1', note: 'Bölünme' },
  'turn-taking': { tr: 'Konuşma sırası alma', pos: 'phrase', cefr: 'B2', note: 'Diyalogda sırayla konuşma' },
  'electricity': { tr: 'Elektrik', pos: 'noun', cefr: 'A2', note: 'Enerji' },
  'suddenly': { tr: 'Aniden, birdenbire', pos: 'adv', cefr: 'A2', note: 'Beklenmedik bir anda' },
  'went out': { tr: 'Söndü, kesildi (elektrik/ışık)', pos: 'phrasal verb', cefr: 'A2', note: 'Go out geçmiş hali' },
  'closure': { tr: 'Kapanma, kapalı olma', pos: 'noun', cefr: 'B1', note: 'Yolun kapalı olması' },
  'route': { tr: 'Güzergah, rota, yol', pos: 'noun', cefr: 'A2', note: 'Gidilecek yol' },
  'manager': { tr: 'Müdür, yönetici', pos: 'noun', cefr: 'A2', note: 'Yönetimden sorumlu kişi' },
  'submit': { tr: 'Teslim etmek, sunmak', pos: 'verb', cefr: 'B1', note: 'Rapor veya ödev teslim etmek' },
  'report': { tr: 'Rapor', pos: 'noun', cefr: 'A2', note: 'Yazılı bilgilendirme' },
  'meal': { tr: 'Öğün, yemek', pos: 'noun', cefr: 'A1', note: 'Yemek vakti' },
  'middle': { tr: 'Orta, ortası', pos: 'noun/adj', cefr: 'A2', note: 'İki şeyin veya günün ortası' },
  'breakfast': { tr: 'Kahvaltı', pos: 'noun', cefr: 'A1', note: 'Sabah öğünü' },
  'lunch': { tr: 'Öğle yemeği', pos: 'noun', cefr: 'A1', note: 'Günün ortasındaki öğün' },
  'dinner': { tr: 'Akşam yemeği', pos: 'noun', cefr: 'A1', note: 'Akşam yenilen ana öğün' },
  'supper': { tr: 'Gece atıştırmalığı, hafif akşam yemeği', pos: 'noun', cefr: 'B1', note: 'Geç saatte yenen hafif yemek' },
  'collocation': { tr: 'Birlikte kullanılan kelimeler (Kalıp eşleşme)', pos: 'noun', cefr: 'B1', note: 'Örn: make a mistake, take a break' },
  'conditional': { tr: 'Şart/Koşul cümlesi (If...', pos: 'grammar', cefr: 'B1', note: 'Eğer ile başlayan olasılık cümleleri' },
  'passive': { tr: 'Edilgen çatı (Yapıldı, sunulmalı)', pos: 'grammar', cefr: 'B1', note: 'Özne değil yapılan iş ön planda' },
  'inversion': { tr: 'Devrik yapı', pos: 'grammar', cefr: 'B2', note: 'Vurgu için yardımcı fiilin başa gelmesi (Had I known)' },
  'since': { tr: '-den beri', pos: 'preposition', cefr: 'A2', note: 'Geçmişteki bir başlangıç noktasından beri' },
  'while': { tr: '-iken, sırasında', pos: 'conjunction', cefr: 'A2', note: 'İki olay aynı anda devam ederken' },
  'although': { tr: '-e rağmen, karşın', pos: 'conjunction', cefr: 'B1', note: 'Zıtlık bildiren bağlaç' },
  'flaw': { tr: 'Hata, kusur, eksiklik', pos: 'noun', cefr: 'B2', note: 'Düzeltilmesi gereken eksik' },
  'decision': { tr: 'Karar', pos: 'noun', cefr: 'A2', note: 'Make a decision = karar vermek' },
  'mistake': { tr: 'Hata, yanlış', pos: 'noun', cefr: 'A1', note: 'Make a mistake = hata yapmak' },
  'progress': { tr: 'Gelişme, ilerleme', pos: 'noun', cefr: 'A2', note: 'Make progress = ilerleme kaydetmek' },
  'effort': { tr: 'Çaba, gayret', pos: 'noun', cefr: 'B1', note: 'Make an effort = çaba sarf etmek' },
  'routine': { tr: 'Rutin, günlük alışkanlık', pos: 'noun', cefr: 'A1', note: 'Her gün yapılan şeyler' },
  'habit': { tr: 'Alışkanlık', pos: 'noun', cefr: 'A2', note: 'Tekrarlanan davranış' },
  'colleague': { tr: 'İş arkadaşı, meslektaş', pos: 'noun', cefr: 'A2', note: 'Birlikte çalışılan kişi' },
  'relatives': { tr: 'Akrabalar', pos: 'noun', cefr: 'A2', note: 'Aile fertleri' }
};

class WordInspectorEngine {
  constructor() {
    this.customCache = new Map();
    this.floatingEl = null;
    this.isListeningGlobal = false;
  }

  /**
   * Look up word or phrase in staticData vocabulary and built-in dictionary
   */
  lookup(rawQuery) {
    if (!rawQuery) return null;
    const clean = rawQuery.trim().toLowerCase().replace(/[.,!?;:"'()\[\]{}]/g, '');
    if (!clean || clean.length < 2) return null;

    // Check custom cache
    if (this.customCache.has(clean)) {
      return this.customCache.get(clean);
    }

    // 1. Direct hit in BUILTIN_DICT
    if (BUILTIN_DICT[clean]) {
      const res = { word: clean, ...BUILTIN_DICT[clean] };
      this.customCache.set(clean, res);
      return res;
    }

    // 2. Direct hit in staticData vocabulary_items
    const allVocab = staticData.vocabulary_items || [];
    const vocabMatch = allVocab.find(v => v.word.toLowerCase() === clean);
    if (vocabMatch) {
      const res = {
        word: vocabMatch.word,
        tr: vocabMatch.definition_tr || vocabMatch.definition_en,
        pos: vocabMatch.part_of_speech || 'word',
        cefr: vocabMatch.cefr_level || 'A1',
        phonetic: vocabMatch.phonetic,
        example: Array.isArray(vocabMatch.example_sentences) ? vocabMatch.example_sentences[0] : null,
        note: vocabMatch.collocations ? `Sık Kullanım: ${Array.isArray(vocabMatch.collocations) ? vocabMatch.collocations.slice(0, 3).join(', ') : ''}` : null
      };
      this.customCache.set(clean, res);
      return res;
    }

    // 3. Lemma / Stem match (remove plural -s, past -ed, gerund -ing, adverb -ly)
    const lemmas = this.generateLemmas(clean);
    for (const lemma of lemmas) {
      if (BUILTIN_DICT[lemma]) {
        const res = { word: clean, baseWord: lemma, ...BUILTIN_DICT[lemma] };
        this.customCache.set(clean, res);
        return res;
      }
      const lemmaMatch = allVocab.find(v => v.word.toLowerCase() === lemma);
      if (lemmaMatch) {
        const res = {
          word: clean,
          baseWord: lemmaMatch.word,
          tr: lemmaMatch.definition_tr || lemmaMatch.definition_en,
          pos: lemmaMatch.part_of_speech || 'word',
          cefr: lemmaMatch.cefr_level || 'A1',
          phonetic: lemmaMatch.phonetic,
          note: `Kök: ${lemmaMatch.word}`
        };
        this.customCache.set(clean, res);
        return res;
      }
    }

    return null;
  }

  generateLemmas(word) {
    const list = [];
    if (word.endsWith('ing') && word.length > 5) {
      list.push(word.slice(0, -3));
      list.push(word.slice(0, -3) + 'e');
    }
    if (word.endsWith('ed') && word.length > 4) {
      list.push(word.slice(0, -2));
      list.push(word.slice(0, -1));
    }
    if (word.endsWith('es') && word.length > 4) {
      list.push(word.slice(0, -2));
      list.push(word.slice(0, -1));
    }
    if (word.endsWith('s') && !word.endsWith('ss') && word.length > 3) {
      list.push(word.slice(0, -1));
    }
    if (word.endsWith('ly') && word.length > 4) {
      list.push(word.slice(0, -2));
    }
    return list;
  }

  /**
   * Extract key vocabulary hints for a question
   */
  extractQuestionKeywords(q) {
    if (!q) return [];
    const textToScan = `${q.question || ''} ${(q.options || []).join(' ')} ${q.topic || ''}`;
    const words = textToScan
      .toLowerCase()
      .replace(/[^a-z\s-]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 3);

    const foundMap = new Map();

    // Check idioms & phrases first
    const phrases = ['under the weather', 'happy birthday', 'take out', 'went out', 'turn-taking'];
    for (const phrase of phrases) {
      if (textToScan.toLowerCase().includes(phrase)) {
        foundMap.set(phrase, this.lookup(phrase));
      }
    }

    // Check individual words
    for (const word of words) {
      if (foundMap.size >= 6) break;
      const res = this.lookup(word);
      if (res && !foundMap.has(res.word)) {
        foundMap.set(res.word, res);
      }
    }

    return Array.from(foundMap.values()).filter(Boolean);
  }

  /**
   * Render collapsible vocabulary hints bar for a question
   */
  renderQuestionVocabBar(q) {
    const keywords = this.extractQuestionKeywords(q);
    if (!keywords || keywords.length === 0) return '';

    return `
      <div class="question-vocab-drawer" id="vocab-drawer-${q.id}">
        <button class="vocab-drawer-toggle" type="button" data-drawer-id="vocab-drawer-${q.id}" title="Bu sorudaki bilmeyebileceğiniz kelime ve yapıları inceleyin">
          <div class="drawer-toggle-left">
            <span class="vocab-lightbulb">💡</span>
            <span class="drawer-title">Bu Sorudaki Kelimeler & Yapı Rehberi</span>
            <span class="drawer-count-badge">${keywords.length} Anlam & İpucu</span>
          </div>
          <span class="drawer-chevron">▼</span>
        </button>

        <div class="vocab-drawer-body" style="display: none;">
          <div class="vocab-hints-grid">
            ${keywords.map(k => `
              <div class="vocab-hint-card" data-word="${k.word}">
                <div class="hint-card-top">
                  <div class="hint-word-wrap">
                    <strong class="hint-word">${k.word}</strong>
                    <span class="hint-cefr ${k.cefr || 'A1'}">${k.cefr || 'A1'}</span>
                  </div>
                  <div class="hint-actions">
                    <button class="hint-action-btn hint-tts" data-word="${k.word}" title="Sesli Dinle">🔊</button>
                    <button class="hint-action-btn hint-save" data-word="${k.word}" data-tr="${k.tr || ''}" data-cefr="${k.cefr || 'A1'}" title="Kelime Kartlarıma Ekle">⭐ Ekle</button>
                  </div>
                </div>
                <div class="hint-meaning">🇹🇷 ${k.tr}</div>
                ${k.note ? `<div class="hint-note">📌 ${k.note}</div>` : ''}
              </div>
            `).join('')}
          </div>
          <div class="vocab-hint-footer">
            <span>💡 İpucu: Sorudaki veya şıklardaki herhangi bir kelimenin üzerine çift tıklayarak da anında Türkçe anlamını görebilirsiniz.</span>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Bind events for vocabulary hints bar
   */
  bindVocabDrawerEvents(container) {
    container.querySelectorAll('.vocab-drawer-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const drawer = btn.closest('.question-vocab-drawer');
        const body = drawer?.querySelector('.vocab-drawer-body');
        const chevron = drawer?.querySelector('.drawer-chevron');
        if (body) {
          const isOpen = body.style.display !== 'none';
          body.style.display = isOpen ? 'none' : 'block';
          if (chevron) chevron.textContent = isOpen ? '▼' : '▲';
          drawer.classList.toggle('expanded', !isOpen);
        }
      });
    });

    container.querySelectorAll('.hint-tts').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = btn.dataset.word;
        if (word) speech.speak(word);
      });
    });

    container.querySelectorAll('.hint-save').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const word = btn.dataset.word;
        const tr = btn.dataset.tr;
        const cefr = btn.dataset.cefr;
        if (word) {
          await api.addCustomWord(word, tr, cefr);
          btn.textContent = '✓ Eklendi';
          btn.classList.add('saved');
          state.showToast(`"${word}" kelime kartlarınıza eklendi! 📚`, 'success');
        }
      });
    });
  }

  /**
   * Initialize global selection / double-click translator popover
   */
  initGlobalListener() {
    if (this.isListeningGlobal) return;
    this.isListeningGlobal = true;

    // Create floating popover element once
    if (!document.getElementById('floating-word-inspector')) {
      const popover = document.createElement('div');
      popover.id = 'floating-word-inspector';
      popover.className = 'floating-word-inspector';
      popover.style.display = 'none';
      document.body.appendChild(popover);
      this.floatingEl = popover;
    } else {
      this.floatingEl = document.getElementById('floating-word-inspector');
    }

    // Listen for text selection or double click
    const handleSelection = (e) => {
      // If clicking inside the popover itself, ignore
      if (this.floatingEl && this.floatingEl.contains(e.target)) return;

      const selection = window.getSelection();
      const selectedText = selection ? selection.toString().trim() : '';

      if (selectedText && selectedText.length >= 2 && selectedText.length <= 40) {
        const match = this.lookup(selectedText);
        if (match) {
          this.showFloatingPopover(match, selection);
          return;
        }
      }

      this.hideFloatingPopover();
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.hideFloatingPopover();
    });
  }

  showFloatingPopover(item, selection) {
    if (!this.floatingEl || !selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    this.floatingEl.innerHTML = `
      <div class="inspector-popover-content">
        <div class="popover-header">
          <div class="popover-word-title">
            <strong>${item.word}</strong>
            <span class="popover-cefr ${item.cefr || 'A1'}">${item.cefr || 'A1'}</span>
          </div>
          <button class="popover-close-btn" id="popover-close" title="Kapat">✕</button>
        </div>
        <div class="popover-meaning">🇹🇷 ${item.tr}</div>
        ${item.note ? `<div class="popover-note">${item.note}</div>` : ''}
        <div class="popover-actions">
          <button class="popover-btn popover-listen" id="popover-listen">🔊 Dinle</button>
          <button class="popover-btn popover-add" id="popover-add">⭐ Kelimelerime Ekle</button>
        </div>
      </div>
    `;

    // Position above the selected text
    const top = window.scrollY + rect.top - 120;
    const left = Math.max(10, Math.min(window.innerWidth - 300, window.scrollX + rect.left));

    this.floatingEl.style.top = `${Math.max(10, top)}px`;
    this.floatingEl.style.left = `${left}px`;
    this.floatingEl.style.display = 'block';

    document.getElementById('popover-close')?.addEventListener('click', () => this.hideFloatingPopover());
    document.getElementById('popover-listen')?.addEventListener('click', () => speech.speak(item.word));
    document.getElementById('popover-add')?.addEventListener('click', async () => {
      await api.addCustomWord(item.word, item.tr, item.cefr);
      state.showToast(`"${item.word}" kelime kartlarınıza kaydedildi! 📚`, 'success');
      const addBtn = document.getElementById('popover-add');
      if (addBtn) addBtn.textContent = '✓ Kaydedildi';
    });
  }

  hideFloatingPopover() {
    if (this.floatingEl) {
      this.floatingEl.style.display = 'none';
    }
  }
}

export const wordInspector = new WordInspectorEngine();
