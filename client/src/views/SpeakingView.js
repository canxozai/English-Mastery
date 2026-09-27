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
        <p>Loading speaking scenarios...</p>
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
          <h3>Failed to load speaking scenarios</h3>
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
          name: this.selectedScenario.ai_role || 'AI Partner',
          text: this.selectedScenario.starter_message || 'Hello! Ready to practice?'
        }
      ];
      this.renderContent();
      // Auto-speak starter message
      if (this.selectedScenario.starter_message) {
        speech.speak(this.selectedScenario.starter_message);
      }
    } catch (err) {
      state.showToast('Failed to load scenario: ' + err.message, 'error');
    }
  }

  renderContent() {
    const s = this.selectedScenario;
    const vocab = s && s.key_vocabulary ? (typeof s.key_vocabulary === 'string' ? JSON.parse(s.key_vocabulary) : s.key_vocabulary) : [];
    const phrases = s && s.key_phrases ? (typeof s.key_phrases === 'string' ? JSON.parse(s.key_phrases) : s.key_phrases) : [];
    const objectives = s && s.objectives ? (typeof s.objectives === 'string' ? JSON.parse(s.objectives) : s.objectives) : [];

    this.container.innerHTML = `
      <div class="speaking-layout">
        <!-- Sidebar: Scenario List -->
        <aside class="speaking-sidebar card">
          <div class="speaking-sidebar-header">
            <h3>Speaking Scenarios</h3>
            <span class="catalog-count">${this.scenarios.length} Scenarios</span>
          </div>

          <div class="scenarios-list">
            ${this.scenarios.map(sc => `
              <div class="scenario-item ${s && s.id === sc.id ? 'active' : ''}" data-id="${sc.id}">
                <div class="scenario-top">
                  <span class="cefr-tag ${sc.cefr_level}">${sc.cefr_level}</span>
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
                <span class="cefr-tag ${s.cefr_level}">${s.cefr_level}</span>
                <span class="topic-category-badge">${s.category}</span>
                <span class="role-badge">You: <strong>${s.user_role}</strong> • AI: <strong>${s.ai_role}</strong></span>
              </div>
              <h1 class="dialogue-title">${s.title}</h1>
              <p class="dialogue-situation">📌 <em>Situation: ${s.situation}</em></p>

              <!-- Objectives Checklist -->
              ${objectives.length > 0 ? `
                <div class="objectives-strip">
                  <span class="obj-label">Objectives:</span>
                  <div class="obj-pills-list">
                    ${objectives.map((obj, i) => `
                      <span class="obj-pill ${this.completedObjectives.has(obj) ? 'completed' : ''}" data-obj="${obj}">
                        ${this.completedObjectives.has(obj) ? '✅' : '⭕'} ${obj}
                      </span>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>

            <!-- Dialogue Chat Window -->
            <div class="card dialogue-window card" id="dialogue-chat-window">
              <div class="chat-messages-scroll" id="chat-messages-container">
                ${this.messages.map((m, i) => `
                  <div class="chat-bubble ${m.sender === 'ai' ? 'ai-bubble' : 'user-bubble'}">
                    <div class="bubble-sender">${m.name}</div>
                    <div class="bubble-text">${m.text}</div>
                    ${m.sender === 'ai' ? `<button class="tts-bubble-btn" data-text="${m.text}">🔊</button>` : ''}
                  </div>
                `).join('')}
              </div>

              <!-- Suggested Phrases Helpers -->
              ${phrases.length > 0 ? `
                <div class="phrases-helper-strip">
                  <span class="phrases-label">💡 Suggested Phrases:</span>
                  <div class="phrases-chips">
                    ${phrases.map(p => `<button class="phrase-chip-btn" data-phrase="${p}">${p}</button>`).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Input Strip with Mic / Text -->
              <div class="dialogue-input-strip">
                <button class="mic-toggle-btn ${this.isRecording ? 'recording' : ''}" id="mic-toggle-btn" title="Speak with microphone">
                  ${this.isRecording ? '🔴 Listening...' : '🎙️ Mic'}
                </button>

                <input type="text" class="dialogue-input" id="dialogue-text-input" placeholder="Type or speak your conversational turn..." autocomplete="off">

                <button class="btn btn-primary" id="send-dialogue-btn">
                  Send Turn ➔
                </button>
              </div>
            </div>
          ` : `
            <div class="card empty-state">
              <p>Select a speaking scenario from the list to start conversing.</p>
            </div>
          `}
        </div>
      </div>
    `;

    this.bindEvents();
    this.scrollChatToBottom();
  }

  scrollChatToBottom() {
    const el = document.getElementById('chat-messages-container');
    if (el) el.scrollTop = el.scrollHeight;
  }

  bindEvents() {
    this.container.querySelectorAll('.scenario-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.dataset.id, 10);
        if (id) this.loadScenario(id);
      });
    });

    // Phrase chips click
    this.container.querySelectorAll('.phrase-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = document.getElementById('dialogue-text-input');
        if (input) {
          input.value = btn.dataset.phrase;
          input.focus();
        }
      });
    });

    // TTS in bubbles
    this.container.querySelectorAll('.tts-bubble-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        speech.speak(btn.dataset.text);
      });
    });

    // Microphone toggle
    const micBtn = document.getElementById('mic-toggle-btn');
    const textInput = document.getElementById('dialogue-text-input');

    micBtn?.addEventListener('click', () => {
      if (this.isRecording) {
        speech.stopListening();
        this.isRecording = false;
        micBtn.classList.remove('recording');
        micBtn.textContent = '🎙️ Mic';
      } else {
        if (!speech.isSttSupported()) {
          state.showToast('Speech recognition is not supported in this browser. You can type your turns directly!', 'error');
          return;
        }

        this.isRecording = true;
        micBtn.classList.add('recording');
        micBtn.textContent = '🔴 Listening...';

        speech.startListening({
          onResult: (res) => {
            if (textInput) textInput.value = res.final || res.interim;
          },
          onError: () => {
            this.isRecording = false;
            micBtn.classList.remove('recording');
            micBtn.textContent = '🎙️ Mic';
          },
          onEnd: (final) => {
            this.isRecording = false;
            micBtn.classList.remove('recording');
            micBtn.textContent = '🎙️ Mic';
            if (final && textInput) textInput.value = final;
          }
        });
      }
    });

    // Send Turn
    const sendBtn = document.getElementById('send-dialogue-btn');
    sendBtn?.addEventListener('click', () => this.handleUserTurn());
    textInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.handleUserTurn();
    });
  }

  handleUserTurn() {
    const input = document.getElementById('dialogue-text-input');
    const userText = input ? input.value.trim() : '';
    if (!userText) return;

    input.value = '';

    // Add user message
    this.messages.push({
      sender: 'user',
      name: this.selectedScenario.user_role || 'You',
      text: userText
    });

    // Update objectives if matching keywords found
    const s = this.selectedScenario;
    const objectives = s && s.objectives ? (typeof s.objectives === 'string' ? JSON.parse(s.objectives) : s.objectives) : [];
    for (const obj of objectives) {
      const words = obj.toLowerCase().split(' ');
      if (words.some(w => userText.toLowerCase().includes(w) && w.length > 3)) {
        this.completedObjectives.add(obj);
      }
    }

    this.renderContent();

    // Generate responsive simulated AI turn
    setTimeout(() => {
      const aiReply = this.generateAiResponse(userText, s);
      this.messages.push({
        sender: 'ai',
        name: s.ai_role || 'AI Partner',
        text: aiReply
      });
      this.renderContent();
      speech.speak(aiReply);
    }, 800);
  }

  generateAiResponse(userInput, scenario) {
    const lower = userInput.toLowerCase();
    const title = scenario.title.toLowerCase();

    if (title.includes('restaurant')) {
      if (lower.includes('water') || lower.includes('drink') || lower.includes('wine')) {
        return "Right away! Would you also like to see today's chef specials for your main course?";
      }
      if (lower.includes('bill') || lower.includes('check')) {
        return "Certainly! Here is your bill. Would you prefer paying with card or cash today?";
      }
      if (lower.includes('menu') || lower.includes('order')) {
        return "Our handmade pasta and grilled salmon are very popular tonight. What can I get started for you?";
      }
      return "Excellent choice! I've noted that down. Is there anything else I can get you at the moment?";
    }

    if (title.includes('interview')) {
      if (lower.includes('experience') || lower.includes('worked') || lower.includes('year')) {
        return "That sounds like valuable experience. How do you usually handle tight deadlines or difficult technical roadblocks?";
      }
      if (lower.includes('strength') || lower.includes('skill')) {
        return "Those are definitely key qualities for our team. Could you give a specific example of when you applied that in a project?";
      }
      return "Thank you for sharing that. Now, what interests you most about working at our company?";
    }

    if (lower.includes('how are you') || lower.includes('nice to meet you')) {
      return "I'm doing very well, thank you! It's wonderful meeting you. What do you enjoy doing most in your free time?";
    }

    return "That's very interesting! Tell me more about how you got into that.";
  }
}
