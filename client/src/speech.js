/**
 * Speech Services for LinguaForge
 * Web Speech Synthesis (TTS) & Web Speech Recognition (STT)
 */

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? (window.speechSynthesis || null) : null;
    this.recognition = null;
    this.voices = [];
    this.preferredAccent = 'en-US'; // or 'en-GB'
    this.preferredRate = 1.0;

    if (typeof window !== 'undefined' && this.synth) {
      this.loadVoices();
      if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }

    const SpeechRecognition = typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition || null) : null;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
    }
  }

  loadVoices() {
    if (!this.synth) return;
    const all = this.synth.getVoices() || [];
    this.voices = all.filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
  }

  isTtsSupported() {
    return !!this.synth;
  }

  isSttSupported() {
    return !!this.recognition;
  }

  /**
   * Cleans text to prevent TTS voices from reciting raw punctuation symbols
   * (e.g. "underscore", "alt çizgi", "quote", "tırnak", "parenthesis", "colon", "slash", "tire")
   */
  sanitizeForSpeech(text) {
    if (!text) return '';
    let s = String(text);

    // 1. Replace fill-in-the-blank underscores (one or more) with "blank"
    s = s.replace(/_+/g, ' blank ');

    // 2. Replace slash choices (e.g. he/she, either/or) with natural English "or"
    s = s.replace(/(\b\w+)\s*\/\s*(\w+\b)/g, '$1 or $2');
    s = s.replace(/\//g, ' ');

    // 3. Strip HTML tags if any
    s = s.replace(/<[^>]+>/g, ' ');

    // 4. Strip quotation marks, apostrophe-wrappers, backticks, backslashes
    // Keep internal apostrophes for contractions (don't, I'm) by only removing quotes that wrap words
    s = s.replace(/["“”«»`\\]/g, ' ');
    s = s.replace(/(^|\s)['‘](.*?)['’](\s|$)/g, '$1 $2 $3'); // remove surrounding quotes
    s = s.replace(/['’]{2,}/g, ' ');

    // 5. Replace colons and semicolons with a gentle pause (comma) so voices never say "colon" or "iki nokta"
    s = s.replace(/[:;]/g, ', ');

    // 6. Replace parentheses, brackets, and braces with commas for natural phrasing
    s = s.replace(/[()[\]{}]/g, ', ');

    // 7. Replace dashes / hyphens with a space or comma so voices never say "hyphen" or "tire"
    s = s.replace(/\s+[-—–]+\s+/g, ', ');
    s = s.replace(/[-—–]{2,}/g, ', ');
    // Hyphenated compound words like "turn-taking", "fill-in": replace with space for smooth pronunciation
    s = s.replace(/(\b\w+)-(\w+\b)/g, '$1 $2');
    s = s.replace(/[-—–]/g, ' ');

    // 8. Replace multiple dots / ellipses with a single sentence stop
    s = s.replace(/\.{2,}/g, '. ');

    // 9. Remove miscellaneous symbols that voices pronounce literally
    s = s.replace(/[*#^~<>@$%&+=|_]/g, ' ');

    // 10. Clean up multiple punctuation marks (e.g. ",,", ".,", "?!")
    s = s.replace(/,\s*,+/g, ', ');
    s = s.replace(/,\s*\./g, '.');
    s = s.replace(/\.\s*,/g, '.');
    // Remove space before punctuation marks
    s = s.replace(/\s+([.,!?;:])/g, '$1');

    // 11. Normalize whitespace
    s = s.replace(/\s+/g, ' ').trim();

    return s;
  }

  /**
   * Find best available English voice, strictly avoiding Turkish/system fallbacks
   */
  getBestVoice(targetLang = 'en-US') {
    if (!this.synth) return null;
    let list = this.voices;
    if (!list || list.length === 0) {
      list = (this.synth.getVoices() || []).filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
      this.voices = list;
    }

    if (list.length === 0) {
      // Re-fetch all voices directly from synthesis
      const allVoices = this.synth.getVoices() || [];
      list = allVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
      this.voices = list;
    }

    if (list.length === 0) return null;

    // 1. Try exact accent match
    const exact = list.find(v => v.lang.toLowerCase() === targetLang.toLowerCase());
    if (exact) return exact;

    // 2. Try prefix match (e.g. en-US, en-GB)
    const langPrefix = targetLang.slice(0, 5);
    const prefixMatch = list.find(v => v.lang.toLowerCase().startsWith(langPrefix.toLowerCase()));
    if (prefixMatch) return prefixMatch;

    // 3. Prefer natural / Google / Samantha / David / Jenny English voices
    const natural = list.find(v => {
      const n = (v.name || '').toLowerCase();
      return n.includes('natural') || n.includes('google') || n.includes('samantha') || n.includes('david') || n.includes('jenny') || n.includes('zira');
    });
    if (natural) return natural;

    // 4. Return any English voice
    return list[0];
  }

  /**
   * Speak English text with customizable accent, natural pauses, and sanitized punctuation
   */
  speak(text, options = {}) {
    if (!this.synth) {
      console.warn('Speech synthesis not supported in this browser');
      return Promise.resolve();
    }

    this.cancel();

    const cleanText = this.sanitizeForSpeech(text);
    if (!cleanText) return Promise.resolve();

    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = options.rate || this.preferredRate || 0.95;
      utterance.pitch = options.pitch || 1.0;

      const targetLang = options.lang || this.preferredAccent || 'en-US';
      utterance.lang = targetLang; // Enforce English phonetic rules

      // Select strict English voice to prevent Turkish Windows voice from reading punctuation
      const voice = this.getBestVoice(targetLang);
      if (voice) {
        utterance.voice = voice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = (err) => {
        console.warn('Speech synthesis error:', err);
        resolve(); // resolve gracefully
      };

      this.synth.speak(utterance);
    });
  }

  cancel() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  /**
   * Start listening for voice input
   */
  startListening({ onResult, onError, onEnd, lang = 'en-US' }) {
    if (!this.recognition) {
      if (onError) onError(new Error('Speech recognition not supported in this browser.'));
      return;
    }

    this.recognition.lang = lang;
    let finalTranscript = '';

    this.recognition.onresult = (event) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      if (onResult) {
        onResult({
          final: finalTranscript.trim(),
          interim: interim.trim(),
          confidence: event.results[0] ? event.results[0][0].confidence : 0
        });
      }
    };

    this.recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      if (onError) onError(event);
    };

    this.recognition.onend = () => {
      if (onEnd) onEnd(finalTranscript.trim());
    };

    try {
      this.recognition.start();
    } catch (e) {
      console.warn('Recognition already started or error:', e);
    }
  }

  stopListening() {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {}
    }
  }

  /**
   * Calculate speech accuracy compared to target sentence
   */
  calculateSimilarity(spoken, target) {
    const sWords = spoken.toLowerCase().replace(/[^\w\s]/g, '').trim().split(/\s+/);
    const tWords = target.toLowerCase().replace(/[^\w\s]/g, '').trim().split(/\s+/);

    if (tWords.length === 0) return 0;

    let matched = 0;
    const targetSet = [...tWords];

    for (const word of sWords) {
      const idx = targetSet.indexOf(word);
      if (idx !== -1) {
        matched++;
        targetSet.splice(idx, 1);
      }
    }

    const precision = matched / Math.max(sWords.length, 1);
    const recall = matched / tWords.length;
    const f1 = (precision + recall) > 0 ? (2 * precision * recall) / (precision + recall) : 0;

    return Math.round(f1 * 100);
  }
}

export const speech = new SpeechService();
