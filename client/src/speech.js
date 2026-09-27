/**
 * Speech Services for LinguaForge
 * Web Speech Synthesis (TTS) & Web Speech Recognition (STT)
 */

class SpeechService {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.recognition = null;
    this.voices = [];
    this.preferredAccent = 'en-US'; // or 'en-GB'
    this.preferredRate = 1.0;

    if (this.synth) {
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices().filter(v => v.lang.startsWith('en'));
  }

  isTtsSupported() {
    return !!this.synth;
  }

  isSttSupported() {
    return !!this.recognition;
  }

  /**
   * Speak English text with customizable accent and speed
   */
  speak(text, options = {}) {
    if (!this.synth) {
      console.warn('Speech synthesis not supported in this browser');
      return Promise.resolve();
    }

    this.cancel();

    return new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = options.rate || this.preferredRate || 1.0;
      utterance.pitch = options.pitch || 1.0;

      // Select matching voice
      const targetLang = options.lang || this.preferredAccent || 'en-US';
      const voice = this.voices.find(v => v.lang.includes(targetLang)) || this.voices[0];
      if (voice) utterance.voice = voice;

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
