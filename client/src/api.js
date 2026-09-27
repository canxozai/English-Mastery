/**
 * API Client for LinguaForge
 * Manages communication with Express backend on /api/*
 */

const BASE_URL = '/api';

class ApiClient {
  constructor() {
    this.userId = localStorage.getItem('linguaforge_user_id') || null;
    this.username = localStorage.getItem('linguaforge_username') || null;
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
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! Status: ${response.status}`);
      }

      return data;
    } catch (err) {
      console.error(`[API Error] ${endpoint}:`, err);
      throw err;
    }
  }

  // Auth & Profile
  async register(username, displayName) {
    const data = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, displayName })
    });
    this.setSession(data.userId, data.username);
    return data;
  }

  async login(username) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username })
    });
    this.setSession(data.userId, data.username);
    return data;
  }

  async getProfile() {
    return this.request('/user/profile');
  }

  async getDashboard() {
    return this.request('/dashboard');
  }

  // Diagnostic Assessment
  async startAssessment() {
    return this.request('/assessment/start', { method: 'POST' });
  }

  async getAssessmentQuestions(assessmentId, skill) {
    return this.request(`/assessment/${assessmentId}/questions/${skill}`);
  }

  async submitAssessmentAnswer(assessmentId, questionBankId, userAnswer, responseTimeMs = 3000) {
    return this.request(`/assessment/${assessmentId}/answer`, {
      method: 'POST',
      body: JSON.stringify({ questionBankId, userAnswer, responseTimeMs })
    });
  }

  async completeAssessment(assessmentId) {
    return this.request(`/assessment/${assessmentId}/complete`, { method: 'POST' });
  }

  async getAssessmentProgress(assessmentId) {
    return this.request(`/assessment/${assessmentId}/progress`);
  }

  async getLatestAssessment() {
    return this.request('/assessment/latest');
  }

  // Grammar
  async getGrammarTopics() {
    return this.request('/grammar/topics');
  }

  async getGrammarTopic(slug) {
    return this.request(`/grammar/topic/${slug}`);
  }

  async submitGrammarExercise(exerciseId, answer, responseTimeMs = 3000) {
    return this.request(`/grammar/exercise/${exerciseId}/submit`, {
      method: 'POST',
      body: JSON.stringify({ answer, responseTimeMs })
    });
  }

  // Vocabulary & Spaced Repetition (SRS)
  async getVocabularyItems(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/vocabulary/items${query ? `?${query}` : ''}`);
  }

  async getReviewQueue() {
    return this.request('/vocabulary/review');
  }

  async submitReview(itemId, rating) {
    return this.request(`/vocabulary/${itemId}/review`, {
      method: 'POST',
      body: JSON.stringify({ rating })
    });
  }

  // Reading Comprehension
  async getReadingMaterials(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/reading/materials${query ? `?${query}` : ''}`);
  }

  async getReadingMaterial(id) {
    return this.request(`/reading/${id}`);
  }

  async submitReading(id, answers, readingTimeSeconds) {
    return this.request(`/reading/${id}/submit`, {
      method: 'POST',
      body: JSON.stringify({ answers, readingTimeSeconds })
    });
  }

  // Listening & Phonics
  async getListeningMaterials(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/listening/materials${query ? `?${query}` : ''}`);
  }

  async getListeningMaterial(id) {
    return this.request(`/listening/${id}`);
  }

  async getListeningTranscript(id) {
    return this.request(`/listening/${id}/transcript`);
  }

  async submitListening(id, answers, listenCount = 1) {
    return this.request(`/listening/${id}/submit`, {
      method: 'POST',
      body: JSON.stringify({ answers, listenCount })
    });
  }

  // Writing Studio
  async getWritingPrompts(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/writing/prompts${query ? `?${query}` : ''}`);
  }

  async submitWriting(promptId, text, timeSpentSeconds) {
    return this.request('/writing/submit', {
      method: 'POST',
      body: JSON.stringify({ promptId, text, timeSpentSeconds })
    });
  }

  // Speaking & Roleplay
  async getSpeakingScenarios(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/speaking/scenarios${query ? `?${query}` : ''}`);
  }

  async getSpeakingScenario(id) {
    return this.request(`/speaking/scenario/${id}`);
  }

  // Error Bank & Patterns
  async getErrors(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/errors${query ? `?${query}` : ''}`);
  }

  async resolveError(id) {
    return this.request(`/errors/${id}/resolve`, { method: 'POST' });
  }

  // Daily Tasks & Routine
  async generateDailyTasks() {
    return this.request('/daily-tasks/generate', { method: 'POST' });
  }

  async completeDailyTask(tasksId, taskId) {
    return this.request(`/daily-tasks/${tasksId}/complete/${taskId}`, { method: 'POST' });
  }

  // Progress History & Reports
  async getProgressHistory() {
    return this.request('/progress/history');
  }

  async getWeeklyReport() {
    return this.request('/reports/weekly');
  }
}

export const api = new ApiClient();
