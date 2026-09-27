/**
 * API Client for LinguaForge
 * Manages communication with Express backend on /api/*
 * Automatically falls back to in-browser localService on GitHub Pages or offline mode
 */
import { localService } from './local-service.js';

const isStaticHosting = typeof window !== 'undefined' && (
  window.location.hostname.includes('github.io') ||
  window.location.protocol === 'file:'
);

const BASE_URL = '/api';

class ApiClient {
  constructor() {
    this.userId = localStorage.getItem('linguaforge_user_id') || 'local_learner';
    this.username = localStorage.getItem('linguaforge_username') || 'learner';
    this.useLocal = isStaticHosting;
  }

  setSession(userId, username) {
    this.userId = userId;
    this.username = username;
    if (userId) {
      localStorage.setItem('linguaforge_user_id', userId);
    } else {
      localStorage.removeItem('linguaforge_user_id');
    }
    if (username) {
      localStorage.setItem('linguaforge_username', username);
    } else {
      localStorage.removeItem('linguaforge_username');
    }
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    if (this.userId) {
      headers['x-user-id'] = this.userId;
    }
    return headers;
  }

  async request(endpoint, options = {}) {
    if (this.useLocal) {
      throw new Error('Using local service');
    }

    const url = `${BASE_URL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...(options.headers || {})
      }
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (err) {
      // Switch to local mode on failure
      this.useLocal = true;
      throw err;
    }
  }

  // Auth & Profile
  async register(username, displayName) {
    localStorage.setItem('linguaforge_display_name', displayName);
    if (this.useLocal) return { userId: 'local_' + Date.now(), username, displayName };
    try {
      const data = await this.request('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, displayName })
      });
      this.setSession(data.userId, data.username);
      return data;
    } catch (e) {
      return { userId: 'local_' + Date.now(), username, displayName };
    }
  }

  async login(username) {
    if (this.useLocal) return { userId: 'local_user', username, displayName: 'English Learner' };
    try {
      const data = await this.request('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username })
      });
      this.setSession(data.userId, data.username);
      return data;
    } catch (e) {
      return { userId: 'local_user', username, displayName: 'English Learner' };
    }
  }

  async getProfile() {
    if (this.useLocal) return { user: { displayName: localStorage.getItem('linguaforge_display_name') || 'English Learner' } };
    try {
      return await this.request('/user/profile');
    } catch (e) {
      return { user: { displayName: localStorage.getItem('linguaforge_display_name') || 'English Learner' } };
    }
  }

  async getDashboard() {
    if (this.useLocal) return localService.getDashboard();
    try {
      return await this.request('/dashboard');
    } catch (e) {
      return localService.getDashboard();
    }
  }

  // Diagnostic Assessment
  async startAssessment() {
    if (this.useLocal) return localService.startAssessment();
    try {
      return await this.request('/assessment/start', { method: 'POST' });
    } catch (e) {
      return localService.startAssessment();
    }
  }

  async getAssessmentQuestions(assessmentId, skill) {
    if (this.useLocal) return localService.getAssessmentQuestions(assessmentId, skill);
    try {
      return await this.request(`/assessment/${assessmentId}/questions/${skill}`);
    } catch (e) {
      return localService.getAssessmentQuestions(assessmentId, skill);
    }
  }

  async submitAssessmentAnswer(assessmentId, questionBankId, userAnswer, responseTimeMs = 3000) {
    if (this.useLocal) return localService.submitAssessmentAnswer(assessmentId, questionBankId, userAnswer, responseTimeMs);
    try {
      return await this.request(`/assessment/${assessmentId}/answer`, {
        method: 'POST',
        body: JSON.stringify({ questionBankId, userAnswer, responseTimeMs })
      });
    } catch (e) {
      return localService.submitAssessmentAnswer(assessmentId, questionBankId, userAnswer, responseTimeMs);
    }
  }

  async completeAssessment(assessmentId) {
    if (this.useLocal) return localService.completeAssessment(assessmentId);
    try {
      return await this.request(`/assessment/${assessmentId}/complete`, { method: 'POST' });
    } catch (e) {
      return localService.completeAssessment(assessmentId);
    }
  }

  async getAssessmentProgress(assessmentId) {
    if (this.useLocal) return { completedSkills: 10, totalSkills: 10 };
    try {
      return await this.request(`/assessment/${assessmentId}/progress`);
    } catch (e) {
      return { completedSkills: 10, totalSkills: 10 };
    }
  }

  async getLatestAssessment() {
    if (this.useLocal) return (await localService.getDashboard()).latestAssessment;
    try {
      return await this.request('/assessment/latest');
    } catch (e) {
      return (await localService.getDashboard()).latestAssessment;
    }
  }

  // Grammar
  async getGrammarTopics() {
    if (this.useLocal) return localService.getGrammarTopics();
    try {
      return await this.request('/grammar/topics');
    } catch (e) {
      return localService.getGrammarTopics();
    }
  }

  async getGrammarTopic(slug) {
    if (this.useLocal) return localService.getGrammarTopic(slug);
    try {
      return await this.request(`/grammar/topic/${slug}`);
    } catch (e) {
      return localService.getGrammarTopic(slug);
    }
  }

  async submitGrammarExercise(exerciseId, answer, responseTimeMs = 3000) {
    if (this.useLocal) return localService.submitGrammarExercise(exerciseId, answer);
    try {
      return await this.request(`/grammar/exercise/${exerciseId}/submit`, {
        method: 'POST',
        body: JSON.stringify({ answer, responseTimeMs })
      });
    } catch (e) {
      return localService.submitGrammarExercise(exerciseId, answer);
    }
  }

  // Vocabulary & Spaced Repetition (SRS)
  async getVocabularyItems(params = {}) {
    if (this.useLocal) return localService.getVocabularyItems(params);
    try {
      const query = new URLSearchParams(params).toString();
      return await this.request(`/vocabulary/items${query ? `?${query}` : ''}`);
    } catch (e) {
      return localService.getVocabularyItems(params);
    }
  }

  async getReviewQueue() {
    if (this.useLocal) return localService.getReviewQueue();
    try {
      return await this.request('/vocabulary/review');
    } catch (e) {
      return localService.getReviewQueue();
    }
  }

  async submitReview(itemId, rating) {
    if (this.useLocal) return localService.submitReview(itemId, rating);
    try {
      return await this.request(`/vocabulary/${itemId}/review`, {
        method: 'POST',
        body: JSON.stringify({ rating })
      });
    } catch (e) {
      return localService.submitReview(itemId, rating);
    }
  }

  // Reading Comprehension
  async getReadingMaterials(params = {}) {
    if (this.useLocal) return localService.getReadingMaterials();
    try {
      const query = new URLSearchParams(params).toString();
      return await this.request(`/reading/materials${query ? `?${query}` : ''}`);
    } catch (e) {
      return localService.getReadingMaterials();
    }
  }

  async getReadingMaterial(id) {
    if (this.useLocal) return localService.getReadingMaterial(id);
    try {
      return await this.request(`/reading/${id}`);
    } catch (e) {
      return localService.getReadingMaterial(id);
    }
  }

  async submitReading(id, answers, readingTimeSeconds) {
    if (this.useLocal) return localService.submitReading(id, answers, readingTimeSeconds);
    try {
      return await this.request(`/reading/${id}/submit`, {
        method: 'POST',
        body: JSON.stringify({ answers, readingTimeSeconds })
      });
    } catch (e) {
      return localService.submitReading(id, answers, readingTimeSeconds);
    }
  }

  // Listening & Phonics
  async getListeningMaterials(params = {}) {
    if (this.useLocal) return localService.getListeningMaterials();
    try {
      const query = new URLSearchParams(params).toString();
      return await this.request(`/listening/materials${query ? `?${query}` : ''}`);
    } catch (e) {
      return localService.getListeningMaterials();
    }
  }

  async getListeningMaterial(id) {
    if (this.useLocal) return localService.getListeningMaterial(id);
    try {
      return await this.request(`/listening/${id}`);
    } catch (e) {
      return localService.getListeningMaterial(id);
    }
  }

  async getListeningTranscript(id) {
    const { material } = await this.getListeningMaterial(id);
    return { transcript: material?.transcript || material?.audio_text || '' };
  }

  async submitListening(id, answers, listenCount = 1) {
    if (this.useLocal) return localService.submitListening(id, answers, listenCount);
    try {
      return await this.request(`/listening/${id}/submit`, {
        method: 'POST',
        body: JSON.stringify({ answers, listenCount })
      });
    } catch (e) {
      return localService.submitListening(id, answers, listenCount);
    }
  }

  // Writing Studio
  async getWritingPrompts(params = {}) {
    if (this.useLocal) return localService.getWritingPrompts();
    try {
      const query = new URLSearchParams(params).toString();
      return await this.request(`/writing/prompts${query ? `?${query}` : ''}`);
    } catch (e) {
      return localService.getWritingPrompts();
    }
  }

  async submitWriting(promptId, text, timeSpentSeconds) {
    if (this.useLocal) return localService.submitWriting(promptId, text, timeSpentSeconds);
    try {
      return await this.request('/writing/submit', {
        method: 'POST',
        body: JSON.stringify({ promptId, text, timeSpentSeconds })
      });
    } catch (e) {
      return localService.submitWriting(promptId, text, timeSpentSeconds);
    }
  }

  // Speaking & Roleplay
  async getSpeakingScenarios(params = {}) {
    if (this.useLocal) return localService.getSpeakingScenarios();
    try {
      const query = new URLSearchParams(params).toString();
      return await this.request(`/speaking/scenarios${query ? `?${query}` : ''}`);
    } catch (e) {
      return localService.getSpeakingScenarios();
    }
  }

  async getSpeakingScenario(id) {
    if (this.useLocal) return localService.getSpeakingScenario(id);
    try {
      return await this.request(`/speaking/scenario/${id}`);
    } catch (e) {
      return localService.getSpeakingScenario(id);
    }
  }

  // Error Bank & Patterns
  async getErrors(params = {}) {
    if (this.useLocal) return localService.getErrors(params);
    try {
      const query = new URLSearchParams(params).toString();
      return await this.request(`/errors${query ? `?${query}` : ''}`);
    } catch (e) {
      return localService.getErrors(params);
    }
  }

  async resolveError(id) {
    if (this.useLocal) return localService.resolveError(id);
    try {
      return await this.request(`/errors/${id}/resolve`, { method: 'POST' });
    } catch (e) {
      return localService.resolveError(id);
    }
  }

  // Daily Tasks & Routine
  async generateDailyTasks() {
    if (this.useLocal) return localService.generateDailyTasks();
    try {
      return await this.request('/daily-tasks/generate', { method: 'POST' });
    } catch (e) {
      return localService.generateDailyTasks();
    }
  }

  async completeDailyTask(tasksId, taskId) {
    return { success: true };
  }

  // Progress History & Reports
  async getProgressHistory() {
    if (this.useLocal) return localService.getProgressHistory();
    try {
      return await this.request('/progress/history');
    } catch (e) {
      return localService.getProgressHistory();
    }
  }

  async getWeeklyReport() {
    if (this.useLocal) return localService.getWeeklyReport();
    try {
      return await this.request('/reports/weekly');
    } catch (e) {
      return localService.getWeeklyReport();
    }
  }
}

export const api = new ApiClient();
