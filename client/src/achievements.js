/**
 * LinguaForge Gamified Achievement & Badge System
 * 24 comprehensive CEFR competency & habit achievements
 * Multi-user local/online storage, celebratory modal, and XP grants
 */

import { api } from './api.js';
import { state } from './state.js';

export const ACHIEVEMENTS = [
  // --- STARTER & ONBOARDING ---
  {
    id: 'first_step',
    category: 'starter',
    title: 'İlk Adım',
    description: 'İlk kelime tekrarını veya gramer alıştırmanı başarıyla tamamla.',
    icon: '🌱',
    xp: 25,
    check: (ctx) => (ctx.stats?.total_words_learned > 0 || ctx.stats?.total_grammar_mastered > 0 || ctx.stats?.xp > 15)
  },
  {
    id: 'compass',
    category: 'starter',
    title: 'Kutup Yıldızı',
    description: '10 Becerili CEFR Seviye Tespit Sınavını tamamla.',
    icon: '🧭',
    xp: 150,
    check: (ctx) => Boolean(ctx.latestAssessment && (ctx.latestAssessment.status === 'completed' || ctx.latestAssessment.overall_cefr))
  },
  {
    id: 'level_5',
    category: 'starter',
    title: 'Hızla Yükselen',
    description: 'Öğrenci seviyeni 5. seviyeye ulaştır.',
    icon: '🚀',
    xp: 100,
    check: (ctx) => (ctx.stats?.level >= 5 || (ctx.stats?.xp || 0) >= 500)
  },
  {
    id: 'level_10',
    category: 'starter',
    title: 'İngilizce Yolcusu',
    description: 'Öğrenci seviyeni 10. seviyeye ulaştır.',
    icon: '👑',
    xp: 250,
    check: (ctx) => (ctx.stats?.level >= 10 || (ctx.stats?.xp || 0) >= 2000)
  },

  // --- VOCABULARY & SRS ---
  {
    id: 'vocab_10',
    category: 'vocab',
    title: 'Kelime Çırağı',
    description: 'Kalıcı hafızaya 10 İngilizce kelime kaydet.',
    icon: '📖',
    xp: 50,
    target: 10,
    progress: (ctx) => ({ current: Math.min(10, ctx.stats?.total_words_learned || 0), max: 10 }),
    check: (ctx) => (ctx.stats?.total_words_learned >= 10)
  },
  {
    id: 'vocab_50',
    category: 'vocab',
    title: 'Kelime Avcısı',
    description: 'Kalıcı hafızaya 50 İngilizce kelime kaydet.',
    icon: '📚',
    xp: 150,
    target: 50,
    progress: (ctx) => ({ current: Math.min(50, ctx.stats?.total_words_learned || 0), max: 50 }),
    check: (ctx) => (ctx.stats?.total_words_learned >= 50)
  },
  {
    id: 'vocab_100',
    category: 'vocab',
    title: 'Kelime Ustası',
    description: '100 kelimeyi hafızana kazı.',
    icon: '🧠',
    xp: 300,
    target: 100,
    progress: (ctx) => ({ current: Math.min(100, ctx.stats?.total_words_learned || 0), max: 100 }),
    check: (ctx) => (ctx.stats?.total_words_learned >= 100)
  },
  {
    id: 'vocab_250',
    category: 'vocab',
    title: 'Canlı Sözlük',
    description: '250 kelimelik geniş bir CEFR dağarcığına ulaş.',
    icon: '🏛️',
    xp: 600,
    target: 250,
    progress: (ctx) => ({ current: Math.min(250, ctx.stats?.total_words_learned || 0), max: 250 }),
    check: (ctx) => (ctx.stats?.total_words_learned >= 250)
  },
  {
    id: 'vocab_custom',
    category: 'vocab',
    title: 'Kişisel Arşivci',
    description: 'Sisteme kendine özel en az 1 özel kelime kartı ekle.',
    icon: '🏷️',
    xp: 40,
    check: (ctx) => Boolean(ctx.hasCustomWord)
  },

  // --- GRAMMAR & SYNTAX ---
  {
    id: 'grammar_first',
    category: 'grammar',
    title: 'Kural Bilgesi',
    description: 'Gramer Akademisinden ilk konuyu ve alıştırmayı bitir.',
    icon: '📐',
    xp: 50,
    check: (ctx) => (ctx.stats?.total_grammar_mastered >= 1 || (ctx.skills?.grammar?.score || 0) > 10)
  },
  {
    id: 'grammar_5',
    category: 'grammar',
    title: 'Gramer Mimarı',
    description: '5 farklı dilbilgisi konusunu kavra ve alıştırmalarını geç.',
    icon: '🏛️',
    xp: 150,
    target: 5,
    progress: (ctx) => ({ current: Math.min(5, ctx.stats?.total_grammar_mastered || 0), max: 5 }),
    check: (ctx) => (ctx.stats?.total_grammar_mastered >= 5)
  },
  {
    id: 'grammar_a1_master',
    category: 'grammar',
    title: 'A1 Gramer Şampiyonu',
    description: 'A1 seviyesindeki temel zaman ve yapıları tamamen bitir.',
    icon: '🥇',
    xp: 250,
    check: (ctx) => ((ctx.skills?.grammar?.score || 0) >= 70 && ctx.skills?.grammar?.level !== 'A1-')
  },

  // --- SKILLS: READING, LISTENING, WRITING, SPEAKING ---
  {
    id: 'reader_first',
    category: 'skills',
    title: 'Kitap Kurdu I',
    description: 'İlk okuma parçasını oku ve anlama testini tamamla.',
    icon: '📰',
    xp: 50,
    check: (ctx) => Boolean(ctx.completedReadingCount >= 1 || (ctx.skills?.reading?.score || 0) > 0)
  },
  {
    id: 'reader_perfect',
    category: 'skills',
    title: 'Derin Kavrama',
    description: 'Bir okuma anlama testinde tüm soruları eksiksiz doğru yanıtla.',
    icon: '🎯',
    xp: 100,
    check: (ctx) => Boolean(ctx.hasPerfectReading)
  },
  {
    id: 'listener_first',
    category: 'skills',
    title: 'İyi Dinleyici',
    description: 'İlk dinleme laboratuvarı egzersizini tamamla.',
    icon: '🎧',
    xp: 50,
    check: (ctx) => Boolean(ctx.completedListeningCount >= 1 || (ctx.skills?.listening?.score || 0) > 0)
  },
  {
    id: 'writer_first',
    category: 'skills',
    title: 'Akıcı Kalem',
    description: 'Yazma stüdyosuna ilk İngilizce kompozisyonunu gönder.',
    icon: '✍️',
    xp: 75,
    check: (ctx) => Boolean(ctx.completedWritingCount >= 1 || (ctx.skills?.writing?.score || 0) > 0)
  },
  {
    id: 'speaker_first',
    category: 'skills',
    title: 'Sesini Duyur',
    description: 'İlk konuşma simülasyonunu veya sesli diyalog pratiğini yap.',
    icon: '🗣️',
    xp: 60,
    check: (ctx) => Boolean(ctx.completedSpeakingCount >= 1 || (ctx.skills?.speaking?.score || 0) > 0)
  },
  {
    id: 'pronunciation_first',
    category: 'skills',
    title: 'Fonetik Avcısı',
    description: 'İlk telaffuz ve fonetik analiz çalışmanı gerçekleştir.',
    icon: '🎙️',
    xp: 50,
    check: (ctx) => Boolean((ctx.skills?.pronunciation?.score || 0) > 0)
  },
  {
    id: 'syntax_first',
    category: 'skills',
    title: 'Cümle Mimarı',
    description: 'S-V-O-M-P-T dizilim laboratuvarında ilk cümleni kur ve doğrula.',
    icon: '🧩',
    xp: 60,
    check: (ctx) => Boolean((ctx.skills?.sentence_formation?.score || 0) > 0)
  },
  {
    id: 'syntax_master',
    category: 'skills',
    title: 'Sözdizimi Ustası',
    description: 'Cümle Kurma (Syntax) becerisinde en az %40 başarı seviyesine ulaş.',
    icon: '⚡',
    xp: 180,
    target: 40,
    progress: (ctx) => ({ current: Math.min(40, ctx.skills?.sentence_formation?.score || 0), max: 40 }),
    check: (ctx) => ((ctx.skills?.sentence_formation?.score || 0) >= 40)
  },

  // --- HABIT & STREAK ---
  {
    id: 'streak_3',
    category: 'streak',
    title: 'Kıvılcım',
    description: '3 gün aralıksız her gün İngilizce çalış.',
    icon: '🔥',
    xp: 100,
    target: 3,
    progress: (ctx) => ({ current: Math.min(3, ctx.stats?.current_streak || 1), max: 3 }),
    check: (ctx) => ((ctx.stats?.current_streak || 1) >= 3 || (ctx.stats?.longest_streak || 1) >= 3)
  },
  {
    id: 'streak_7',
    category: 'streak',
    title: 'Alev Serisi',
    description: '7 günlük kesintisiz çalışma serisi yakala.',
    icon: '⚡',
    xp: 250,
    target: 7,
    progress: (ctx) => ({ current: Math.min(7, ctx.stats?.current_streak || 1), max: 7 }),
    check: (ctx) => ((ctx.stats?.current_streak || 1) >= 7 || (ctx.stats?.longest_streak || 1) >= 7)
  },
  {
    id: 'streak_30',
    category: 'streak',
    title: 'Demir İrade',
    description: '30 günlük destansı bir çalışma disiplini oluştur.',
    icon: '🛡️',
    xp: 1000,
    target: 30,
    progress: (ctx) => ({ current: Math.min(30, ctx.stats?.current_streak || 1), max: 30 }),
    check: (ctx) => ((ctx.stats?.current_streak || 1) >= 30 || (ctx.stats?.longest_streak || 1) >= 30)
  },
  {
    id: 'error_slayer',
    category: 'streak',
    title: 'Hata Avcısı',
    description: 'Hata defterinden en az 5 yanlışı tekrar edip çöz.',
    icon: '⚔️',
    xp: 120,
    target: 5,
    progress: (ctx) => ({ current: Math.min(5, ctx.stats?.total_errors_resolved || 0), max: 5 }),
    check: (ctx) => ((ctx.stats?.total_errors_resolved || 0) >= 5)
  },
  {
    id: 'daily_hero',
    category: 'streak',
    title: 'Günün Kahramanı',
    description: 'Bir günde tüm Günlük Rutin görevlerinin tamamını bitir.',
    icon: '⭐',
    xp: 80,
    check: (ctx) => Boolean(ctx.completedAllDailyTasks)
  },
  {
    id: 'night_owl',
    category: 'streak',
    title: 'Gece Kuşu',
    description: 'Gece 22:00 sonrasında bir çalışma seansı tamamla.',
    icon: '🦉',
    xp: 40,
    check: () => {
      const hr = new Date().getHours();
      return hr >= 22 || hr < 4;
    }
  }
];

class AchievementManager {
  constructor() {
    this.modalEl = null;
  }

  getUnlockedAchievements() {
    try {
      const activeUser = localStorage.getItem('linguaforge_active_user') || 'misafir';
      const raw = localStorage.getItem(`linguaforge_u_${activeUser}_achievements`);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  saveUnlockedAchievements(list) {
    try {
      const activeUser = localStorage.getItem('linguaforge_active_user') || 'misafir';
      localStorage.setItem(`linguaforge_u_${activeUser}_achievements`, JSON.stringify(list));
    } catch (e) {}
  }

  isUnlocked(id) {
    const unlocked = this.getUnlockedAchievements();
    return unlocked.some(a => a.id === id);
  }

  /**
   * Evaluate all achievements against the latest context.
   * If any new achievement is unlocked, save it, grant XP, and display celebration.
   */
  async checkAll(context = {}) {
    const unlocked = this.getUnlockedAchievements();
    const unlockedIds = new Set(unlocked.map(a => a.id));
    const newlyUnlocked = [];

    // Augment context with stats and localStorage flags
    const activeUser = localStorage.getItem('linguaforge_active_user') || 'misafir';
    const prefix = `linguaforge_u_${activeUser}_`;

    let stats = context.stats;
    if (!stats) {
      try {
        const rawStats = localStorage.getItem(prefix + 'stats');
        stats = rawStats ? JSON.parse(rawStats) : {};
      } catch (e) {
        stats = {};
      }
    }

    let skills = context.skills;
    if (!skills) {
      try {
        const rawSkills = localStorage.getItem(prefix + 'skills');
        skills = rawSkills ? JSON.parse(rawSkills) : {};
      } catch (e) {
        skills = {};
      }
    }

    let customWords = [];
    try {
      const rawCustom = localStorage.getItem(prefix + 'custom_words');
      customWords = rawCustom ? JSON.parse(rawCustom) : [];
    } catch (e) {}

    const evalCtx = {
      ...context,
      stats,
      skills,
      hasCustomWord: customWords.length > 0
    };

    for (const ach of ACHIEVEMENTS) {
      if (!unlockedIds.has(ach.id)) {
        try {
          if (ach.check(evalCtx)) {
            const entry = {
              id: ach.id,
              title: ach.title,
              description: ach.description,
              icon: ach.icon,
              xp: ach.xp,
              unlocked_at: new Date().toISOString()
            };
            unlocked.push(entry);
            unlockedIds.add(ach.id);
            newlyUnlocked.push(ach);

            // Award bonus XP to user stats
            if (stats) {
              stats.xp = (stats.xp || 0) + ach.xp;
              try {
                localStorage.setItem(prefix + 'stats', JSON.stringify(stats));
              } catch (e) {}
            }
          }
        } catch (err) {
          console.warn(`Error checking achievement ${ach.id}:`, err);
        }
      }
    }

    if (newlyUnlocked.length > 0) {
      this.saveUnlockedAchievements(unlocked);

      // Trigger celebratory popup for newly unlocked achievements sequentially
      newlyUnlocked.forEach((ach, index) => {
        setTimeout(() => {
          this.showCelebration(ach);
        }, index * 1200);
      });
    }

    return newlyUnlocked;
  }

  /**
   * Display a celebratory modal with confetti animation & sound
   */
  showCelebration(achievement) {
    // Play celebratory chime if Web Audio API is available
    this.playCelebrationSound();

    // Create celebration modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'achievement-modal-overlay';
    overlay.innerHTML = `
      <div class="achievement-modal-card">
        <div class="achievement-confetti-host"></div>
        <div class="achievement-ribbon">🏆 YENİ BAŞARIM AÇILDI!</div>
        <div class="achievement-badge-glow">
          <div class="achievement-badge-icon">${achievement.icon}</div>
        </div>
        <h2 class="achievement-badge-title">${achievement.title}</h2>
        <p class="achievement-badge-desc">${achievement.description}</p>
        <div class="achievement-badge-reward">
          <span class="reward-xp">+${achievement.xp} XP KAZANDIN! ⚡</span>
        </div>
        <button class="btn btn-primary btn-block btn-lg btn-achievement-claim">
          Harika, Devam Et! →
        </button>
      </div>
    `;

    document.body.appendChild(overlay);

    // Trigger confetti particles
    this.spawnConfetti(overlay.querySelector('.achievement-confetti-host'));

    const close = () => {
      overlay.classList.add('closing');
      setTimeout(() => overlay.remove(), 250);
    };

    overlay.querySelector('.btn-achievement-claim')?.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
  }

  playCelebrationSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      // Play joyful major chord progression (C5, E5, G5, C6)
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.65);
      });
    } catch (e) {}
  }

  spawnConfetti(host) {
    if (!host) return;
    const colors = ['#f59e0b', '#10b981', '#6366f1', '#ec4899', '#3b82f6', '#8b5cf6'];
    for (let i = 0; i < 30; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.backgroundColor = colors[i % colors.length];
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.animationDelay = `${Math.random() * 0.4}s`;
      piece.style.animationDuration = `${0.8 + Math.random() * 0.8}s`;
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      host.appendChild(piece);
    }
  }
}

export const achievementManager = new AchievementManager();

export function checkAndUnlockBadges(stats, skills, extra = {}) {
  return achievementManager.checkAndAward({ stats, skills, ...extra });
}

