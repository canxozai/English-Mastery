/**
 * Speaking & Roleplay View
 * Simulated conversational turn-taking with Web Speech Recognition & audio TTS
 */
import { api } from '../api.js';
import { state } from '../state.js';
import { speech } from '../speech.js';

export class SpeakingView {
  constructor() {
    this.container = null;
    this.scenarios = [];
    this.selectedScenario = null;
    this.messages = [];
    this.isRecording = false;
    this.completedObjectives = new Set();
  }

  async render(viewport) {
    this.container = viewport;
    this.container.innerHTML = `
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Konuşma senaryoları yükleniyor...</p>
      </div>
    `;

    try {
      const data = await api.getSpeakingScenarios();
      this.scenarios = Array.isArray(data) ? data : (data.scenarios || []);
      if (this.scenarios.length > 0 && !this.selectedScenario) {
        await this.loadScenario(this.scenarios[0].id);
      } else {
        this.renderContent();
      }
    } catch (err) {
      this.container.innerHTML = `
        <div class="card error-card">
          <h3>Konuşma senaryoları yüklenemedi</h3>
          <p>${err.message}</p>
        </div>
      `;
    }
  }

  async loadScenario(id) {
    try {
      const data = await api.getSpeakingScenario(id);
      this.selectedScenario = data.scenario;
      this.completedObjectives = new Set();
      this.messages = [
        {
          sender: 'ai',
          name: this.selectedScenario.ai_role || 'Diyalog Partneri',
          text: this.selectedScenario.starter_message || 'Hello! How can I help you today?'
        }
      ];
      this.renderContent();
      // Auto-speak starter message
      if (this.selectedScenario.starter_message) {
        speech.speak(this.selectedScenario.starter_message);
      }
    } catch (err) {
      state.showToast('Senaryo yüklenemedi: ' + err.message, 'error');
    }
  }

  renderContent() {
    const s = this.selectedScenario;
    const phrases = s && s.key_phrases ? (typeof s.key_phrases === 'string' ? JSON.parse(s.key_phrases) : s.key_phrases) : [];
    const objectives = s && s.objectives ? (typeof s.objectives === 'string' ? JSON.parse(s.objectives) : s.objectives) : [];

    this.container.innerHTML = `
      <div class="speaking-layout">
        <!-- Sidebar: Scenario List -->
        <aside class="speaking-sidebar card">
          <div class="speaking-sidebar-header">
            <h3>Konuşma Senaryoları</h3>
            <span class="catalog-count">${this.scenarios.length} Senaryo</span>
          </div>

          <div class="scenarios-list">
            ${this.scenarios.map(sc => `
              <div class="scenario-item ${s && s.id === sc.id ? 'active' : ''}" data-id="${sc.id}">
                <div class="scenario-top">
                  <span class="cefr-tag ${sc.cefr_level || 'A1'}">${sc.cefr_level || 'A1'}</span>
                  <span class="scenario-cat">${(sc.category || '').toUpperCase()}</span>
                </div>
                <div class="scenario-title">${sc.title}</div>
              </div>
            `).join('')}
          </div>
        </aside>

        <!-- Main Dialogue Simulator -->
        <div class="speaking-main">
          ${s ? `
            <div class="card speaking-header-card">
              <div class="dialogue-meta-strip">
                <span class="cefr-tag ${s.cefr_level || 'A1'}">${s.cefr_level || 'A1'}</span>
                <span class="dialogue-roles">Rolünüz: <strong>${s.user_role || 'Müşteri / Gezgin'}</strong> • Partner: <strong>${s.ai_role || 'Görevli'}</strong></span>
              </div>
              <h1 class="dialogue-title">${s.title}</h1>
              <p class="dialogue-description">${s.description || ''}</p>

              <!-- Objectives checklist -->
              ${objectives.length > 0 ? `
                <div class="objectives-strip">
                  <span class="objectives-label">Konuşma Hedefleri:</span>
                  <div class="objectives-tags">
                    ${objectives.map((obj, i) => `
                      <span class="obj-tag ${this.completedObjectives.has(i) ? 'completed' : ''}">
                        ${this.completedObjectives.has(i) ? '✓ ' : ''}${obj}
                      </span>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Useful Phrases -->
              ${phrases.length > 0 ? `
                <div class="phrases-strip">
                  <span class="phrases-label">Kullanabileceğiniz Örnek Kalıplar (Tıklayarak Dinleyin):</span>
                  <div class="phrases-tags">
                    ${phrases.map(ph => `<span class="phrase-tag" data-phrase="${ph}">🔊 ${ph}</span>`).join('')}
                  </div>
                </div>
              ` : ''}
            </div>

            <!-- Dialogue Chat History Box -->
            <div class="card dialogue-chat-card">
              <div class="dialogue-messages-wrap" id="dialogue-messages">
                ${this.messages.map(m => `
                  <div class="chat-bubble-row ${m.sender === 'user' ? 'user-row' : 'ai-row'}">
                    <div class="chat-bubble">
                      <div class="bubble-header">
                        <span class="bubble-name">${m.name}</span>
                        <button class="tts-play-btn bubble-tts" data-text="${m.text}">🔊</button>
                      </div>
                      <div class="bubble-body">${m.text}</div>
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Input Bar: Voice / Text -->
              <div class="dialogue-input-bar">
                <button class="btn ${this.isRecording ? 'btn-danger pulse' : 'btn-primary'} btn-record" id="btn-record-voice">
                  <span>${this.isRecording ? '⏹️ Dinleniyor...' : '🎙️ Konuşmaya Başla'}</span>
                </button>

                <input type="text" class="form-input dialogue-input" id="dialogue-text-input" placeholder="Veya İngilizce cevabınızı buraya yazın..." />
                
                <button class="btn btn-secondary" id="btn-send-message">
                  Gönder →
                </button>
              </div>
            </div>
          ` : `
            <div class="card empty-state">
              <p>Diyalog alıştırmasına başlamak için sol menüden bir senaryo seçin.</p>
            </div>
          `}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    this.container.querySelectorAll('.scenario-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = parseInt(el.dataset.id, 10);
        this.loadScenario(id);
      });
    });

    document.querySelectorAll('.phrase-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const phrase = tag.dataset.phrase;
        if (phrase) speech.speak(phrase);
      });
    });

    document.querySelectorAll('.bubble-tts').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.text;
        if (text) speech.speak(text);
      });
    });

    // Voice input
    const recordBtn = document.getElementById('btn-record-voice');
    recordBtn?.addEventListener('click', () => {
      this.toggleSpeechRecognition();
    });

    // Send text
    document.getElementById('btn-send-message')?.addEventListener('click', () => {
      this.sendUserMessage();
    });

    document.getElementById('dialogue-text-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.sendUserMessage();
      }
    });
  }

  toggleSpeechRecognition() {
    if (!speech.hasRecognition) {
      state.showToast('Tarayıcınız ses tanımayı desteklemiyor. Lütfen yazarak cevap verin.', 'error');
      return;
    }

    if (this.isRecording) {
      speech.stopListening();
      this.isRecording = false;
      this.renderContent();
    } else {
      this.isRecording = true;
      this.renderContent();
      speech.listen((transcript) => {
        this.isRecording = false;
        const input = document.getElementById('dialogue-text-input');
        if (input) input.value = transcript;
        this.sendUserMessage(transcript);
      }, () => {
        this.isRecording = false;
        this.renderContent();
      });
    }
  }

  sendUserMessage(explicitText) {
    const input = document.getElementById('dialogue-text-input');
    const text = explicitText || (input ? input.value.trim() : '');
    if (!text) return;

    if (input) input.value = '';

    // Add user bubble
    this.messages.push({
      sender: 'user',
      name: 'Siz',
      text
    });

    this.renderContent();

    // Scroll chat to bottom
    const box = document.getElementById('dialogue-messages');
    if (box) box.scrollTop = box.scrollHeight;

    // Simulate AI response
    setTimeout(() => {
      const aiReply = this.generateAiResponse(text);
      this.messages.push({
        sender: 'ai',
        name: this.selectedScenario?.ai_role || 'Partner',
        text: aiReply
      });
      this.renderContent();
      const b = document.getElementById('dialogue-messages');
      if (b) b.scrollTop = b.scrollHeight;
      speech.speak(aiReply);
    }, 800);
  }

  generateAiResponse(userText) {
    const lower = userText.toLowerCase();
    if (lower.includes('coffee') || lower.includes('tea') || lower.includes('water') || lower.includes('like')) {
      return 'Certainly! That sounds great. Would you like anything else to eat with that?';
    }
    if (lower.includes('how much') || lower.includes('bill') || lower.includes('check')) {
      return 'That will be 4 dollars, please. Are you paying by card or cash?';
    }
    if (lower.includes('hello') || lower.includes('hi')) {
      return 'Hello there! How can I assist you today?';
    }
    if (lower.includes('thank')) {
      return "You're very welcome! Have a wonderful day!";
    }
    return `That's clear. Thank you for telling me. Let's continue: what would you like to do next?`;
  }
}
