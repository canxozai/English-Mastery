import { initDb, getDb, dbRun, dbGet, dbAll, dbExec, closeDb } from './db.js';
import { createSchema } from './schema.js';
import { assessmentQuestions } from './assessment-questions.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

async function seed() {
  console.log('🌱 Seeding database...');

  await initDb();
  createSchema();

  // =============================================
  // GRAMMAR TOPICS — Full curriculum A1 → C1
  // =============================================
  const grammarTopics = [
    // A1 Topics
    {
      name: 'Present Simple', slug: 'present-simple', category: 'tenses', cefr_level: 'A1', order_index: 1,
      description: 'Actions that happen regularly, facts, and routines.',
      explanation_en: 'We use the Present Simple for habits, routines, general truths, and permanent situations. Add -s/-es for he/she/it.',
      explanation_tr: 'Geniş zaman. Alışkanlıklar, rutin eylemler, genel doğrular ve kalıcı durumlar için kullanılır. He/she/it için fiile -s/-es eklenir.',
      examples: JSON.stringify([
        { sentence: 'I work every day.', translation: 'Her gün çalışırım.' },
        { sentence: 'She plays tennis on Sundays.', translation: 'Pazar günleri tenis oynar.' },
        { sentence: 'Water boils at 100 degrees.', translation: 'Su 100 derecede kaynar.' },
        { sentence: 'They don\'t like coffee.', translation: 'Kahve sevmezler.' },
        { sentence: 'Does he speak English?', translation: 'İngilizce konuşur mu?' }
      ]),
      rules: JSON.stringify([
        'Affirmative: Subject + V1 (he/she/it + V1+s/es)',
        'Negative: Subject + do/does + not + V1',
        'Question: Do/Does + Subject + V1?',
        'Time expressions: always, usually, often, sometimes, rarely, never, every day/week/month',
        'Third person singular: add -s (works), -es (watches, goes), -ies (studies)'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'He work every day.', correct: 'He works every day.', explanation: 'He/she/it requires -s on the verb.' },
        { wrong: 'She don\'t like it.', correct: 'She doesn\'t like it.', explanation: 'Use "doesn\'t" for he/she/it negatives.' },
        { wrong: 'Does she works here?', correct: 'Does she work here?', explanation: 'After does/doesn\'t, use the base form.' },
        { wrong: 'I am go to school.', correct: 'I go to school.', explanation: 'Don\'t use "am" with Present Simple verbs.' }
      ]),
      prerequisite_topics: '[]'
    },
    {
      name: 'Present Continuous', slug: 'present-continuous', category: 'tenses', cefr_level: 'A1', order_index: 2,
      description: 'Actions happening right now or temporary actions.',
      explanation_en: 'We use the Present Continuous for actions happening now, temporary situations, and future arrangements. Form: am/is/are + verb-ing.',
      explanation_tr: 'Şimdiki zaman. Şu anda olan eylemler, geçici durumlar ve gelecek planları için kullanılır. Yapı: am/is/are + fiil-ing.',
      examples: JSON.stringify([
        { sentence: 'I am reading a book right now.', translation: 'Şu anda bir kitap okuyorum.' },
        { sentence: 'She is working from home this week.', translation: 'Bu hafta evden çalışıyor.' },
        { sentence: 'They are not watching TV.', translation: 'Televizyon izlemiyorlar.' },
        { sentence: 'Are you listening to me?', translation: 'Beni dinliyor musun?' },
        { sentence: 'We are meeting them tomorrow.', translation: 'Yarın onlarla buluşuyoruz.' }
      ]),
      rules: JSON.stringify([
        'Affirmative: Subject + am/is/are + V-ing',
        'Negative: Subject + am/is/are + not + V-ing',
        'Question: Am/Is/Are + Subject + V-ing?',
        'Time expressions: now, right now, at the moment, currently, today, this week',
        'Spelling: drop -e (make→making), double consonant (run→running), -ie→ying (lie→lying)'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'I reading a book.', correct: 'I am reading a book.', explanation: 'You need am/is/are before the -ing verb.' },
        { wrong: 'She is work now.', correct: 'She is working now.', explanation: 'Add -ing to the main verb.' },
        { wrong: 'I am knowing the answer.', correct: 'I know the answer.', explanation: 'Stative verbs (know, like, want) are usually not used in continuous.' }
      ]),
      prerequisite_topics: '["present-simple"]'
    },
    {
      name: 'Past Simple', slug: 'past-simple', category: 'tenses', cefr_level: 'A2', order_index: 3,
      description: 'Completed actions in the past.',
      explanation_en: 'We use Past Simple for finished actions at a specific time in the past. Regular verbs add -ed. Irregular verbs have special forms.',
      explanation_tr: 'Geçmiş zaman. Geçmişte belirli bir zamanda tamamlanmış eylemler için kullanılır. Düzenli fiillere -ed eklenir. Düzensiz fiillerin özel halleri vardır.',
      examples: JSON.stringify([
        { sentence: 'I visited London last year.', translation: 'Geçen yıl Londra\'yı ziyaret ettim.' },
        { sentence: 'She went to the store yesterday.', translation: 'Dün mağazaya gitti.' },
        { sentence: 'They didn\'t come to the party.', translation: 'Partiye gelmediler.' },
        { sentence: 'Did you see the movie?', translation: 'Filmi gördün mü?' },
        { sentence: 'He bought a new car.', translation: 'Yeni bir araba aldı.' }
      ]),
      rules: JSON.stringify([
        'Affirmative: Subject + V2 (regular: +ed, irregular: special form)',
        'Negative: Subject + did + not + V1',
        'Question: Did + Subject + V1?',
        'Time expressions: yesterday, last week/month/year, ago, in 2020, when I was young',
        'Regular -ed: worked, played, studied, stopped'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'I goed to school.', correct: 'I went to school.', explanation: '"Go" is irregular. Past form is "went".' },
        { wrong: 'Did you went there?', correct: 'Did you go there?', explanation: 'After did/didn\'t, use base form (V1).' },
        { wrong: 'She didn\'t went.', correct: 'She didn\'t go.', explanation: 'After didn\'t, always use base form.' }
      ]),
      prerequisite_topics: '["present-simple"]'
    },
    {
      name: 'Past Continuous', slug: 'past-continuous', category: 'tenses', cefr_level: 'A2', order_index: 4,
      description: 'Actions in progress at a specific time in the past.',
      explanation_en: 'We use Past Continuous for actions that were in progress at a specific moment in the past, or for background actions when something else happened.',
      explanation_tr: 'Geçmişte devam eden zaman. Geçmişte belirli bir anda devam eden eylemler veya başka bir olay olduğunda arka planda olan eylemler için kullanılır.',
      examples: JSON.stringify([
        { sentence: 'I was reading when the phone rang.', translation: 'Telefon çaldığında kitap okuyordum.' },
        { sentence: 'They were playing football at 3 PM.', translation: 'Saat 3\'te futbol oynuyorlardı.' },
        { sentence: 'She wasn\'t sleeping when I called.', translation: 'Aradığımda uyumuyordu.' },
        { sentence: 'Were you working yesterday evening?', translation: 'Dün akşam çalışıyor muydun?' }
      ]),
      rules: JSON.stringify([
        'Affirmative: Subject + was/were + V-ing',
        'Negative: Subject + was/were + not + V-ing',
        'Question: Was/Were + Subject + V-ing?',
        'Often used with Past Simple: "While I was walking, I saw a friend."',
        'Time expressions: while, when, at that time, at 3 PM yesterday'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'I was watch TV.', correct: 'I was watching TV.', explanation: 'Use V-ing after was/were.' },
        { wrong: 'While I studied, the phone rang.', correct: 'While I was studying, the phone rang.', explanation: 'Use Past Continuous for the ongoing action, Past Simple for the interruption.' }
      ]),
      prerequisite_topics: '["past-simple", "present-continuous"]'
    },
    {
      name: 'Present Perfect', slug: 'present-perfect', category: 'tenses', cefr_level: 'B1', order_index: 5,
      description: 'Past actions connected to the present, experiences, and recent events.',
      explanation_en: 'We use Present Perfect for experiences, recent actions with present results, and actions from a period that hasn\'t finished. Form: have/has + past participle (V3).',
      explanation_tr: 'Geçmişte başlayıp etkisi hâlâ devam eden eylemler, deneyimler ve yakın zamandaki olaylar için kullanılır. Yapı: have/has + geçmiş ortaç (V3). Türkçede doğrudan karşılığı yoktur.',
      examples: JSON.stringify([
        { sentence: 'I have visited Paris three times.', translation: 'Paris\'i üç kez ziyaret ettim. (Deneyim)' },
        { sentence: 'She has lost her keys.', translation: 'Anahtarlarını kaybetti. (Şu an anahtarları yok)' },
        { sentence: 'Have you ever eaten sushi?', translation: 'Hiç suşi yedin mi?' },
        { sentence: 'They haven\'t finished yet.', translation: 'Henüz bitirmediler.' },
        { sentence: 'I have lived here since 2010.', translation: '2010\'dan beri burada yaşıyorum.' }
      ]),
      rules: JSON.stringify([
        'Affirmative: Subject + have/has + V3 (past participle)',
        'Negative: Subject + have/has + not + V3',
        'Question: Have/Has + Subject + V3?',
        'Key words: ever, never, already, yet, just, since, for, recently, so far',
        'Use "since" for a point in time (since Monday), "for" for a duration (for two years)',
        'Don\'t use with specific past times (yesterday, last week, in 2019) — use Past Simple instead'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'I have went there.', correct: 'I have gone there.', explanation: 'Use the past participle (V3), not the past simple (V2). go→went→gone' },
        { wrong: 'I have visited Paris yesterday.', correct: 'I visited Paris yesterday.', explanation: 'Don\'t use Present Perfect with specific past times.' },
        { wrong: 'She has lose her keys.', correct: 'She has lost her keys.', explanation: 'Use the past participle: lose→lost→lost' },
        { wrong: 'I live here since 2010.', correct: 'I have lived here since 2010.', explanation: 'Use Present Perfect with "since" and "for" for continuing actions.' }
      ]),
      prerequisite_topics: '["past-simple"]'
    },
    {
      name: 'Present Perfect Continuous', slug: 'present-perfect-continuous', category: 'tenses', cefr_level: 'B1', order_index: 6,
      description: 'Actions that started in the past and are still continuing, emphasizing duration.',
      explanation_en: 'We use Present Perfect Continuous to emphasize the duration of an action that started in the past and continues now, or has recently stopped with visible results.',
      explanation_tr: 'Geçmişte başlayıp hâlâ devam eden eylemin süresini vurgular. Yapı: have/has + been + V-ing. Eylemin ne kadar süredir devam ettiğini anlatır.',
      examples: JSON.stringify([
        { sentence: 'I have been studying for three hours.', translation: 'Üç saattir ders çalışıyorum.' },
        { sentence: 'It has been raining all day.', translation: 'Bütün gün yağmur yağıyor.' },
        { sentence: 'She has been working here since January.', translation: 'Ocak\'tan beri burada çalışıyor.' },
        { sentence: 'How long have you been waiting?', translation: 'Ne kadar süredir bekliyorsun?' }
      ]),
      rules: JSON.stringify([
        'Affirmative: Subject + have/has + been + V-ing',
        'Negative: Subject + have/has + not + been + V-ing',
        'Question: How long + have/has + Subject + been + V-ing?',
        'Emphasizes DURATION, while Present Perfect emphasizes RESULT',
        'Compare: "I have read the book." (finished) vs "I have been reading the book." (still reading or just stopped)'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'I have been know him for years.', correct: 'I have known him for years.', explanation: 'Stative verbs (know, like, love) don\'t use continuous form.' },
        { wrong: 'She has been working here since three months.', correct: 'She has been working here for three months.', explanation: 'Use "for" with durations, "since" with points in time.' }
      ]),
      prerequisite_topics: '["present-perfect", "present-continuous"]'
    },
    {
      name: 'Past Perfect', slug: 'past-perfect', category: 'tenses', cefr_level: 'B1', order_index: 7,
      description: 'An action that happened before another action in the past.',
      explanation_en: 'We use Past Perfect to show that one action happened BEFORE another action in the past. Form: had + past participle (V3).',
      explanation_tr: 'Geçmişteki bir eylemden önce tamamlanmış olan bir eylemi anlatır. "Geçmişin geçmişi" olarak düşünülebilir. Yapı: had + V3.',
      examples: JSON.stringify([
        { sentence: 'I had already eaten when she arrived.', translation: 'O geldiğinde ben çoktan yemiştim.' },
        { sentence: 'They had left before the rain started.', translation: 'Yağmur başlamadan önce gitmişlerdi.' },
        { sentence: 'She realized she had forgotten her wallet.', translation: 'Cüzdanını unuttuğunu fark etti.' }
      ]),
      rules: JSON.stringify([
        'Affirmative: Subject + had + V3',
        'Negative: Subject + had + not + V3',
        'Question: Had + Subject + V3?',
        'Key words: before, after, already, when, by the time, until',
        'The earlier action uses Past Perfect, the later action uses Past Simple'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'When I arrived, she left.', correct: 'When I arrived, she had already left.', explanation: 'Use Past Perfect for the action that happened first.' },
        { wrong: 'I had went to school.', correct: 'I had gone to school.', explanation: 'Use V3 (past participle) after had.' }
      ]),
      prerequisite_topics: '["past-simple", "present-perfect"]'
    },
    {
      name: 'Future Forms', slug: 'future-forms', category: 'tenses', cefr_level: 'A2', order_index: 8,
      description: 'Different ways to talk about the future: will, going to, Present Continuous.',
      explanation_en: 'English has multiple ways to talk about the future: "will" for predictions/decisions, "going to" for plans/intentions, Present Continuous for arrangements.',
      explanation_tr: 'İngilizcede gelecek zaman için birden fazla yapı kullanılır: "will" anlık kararlar ve tahminler için, "going to" planlar ve niyetler için, Present Continuous düzenlenmiş planlar için.',
      examples: JSON.stringify([
        { sentence: 'I will help you.', translation: 'Sana yardım edeceğim. (Anlık karar)' },
        { sentence: 'I\'m going to study medicine.', translation: 'Tıp okuyacağım. (Önceden planlanmış)' },
        { sentence: 'We are meeting them at 7.', translation: 'Onlarla 7\'de buluşuyoruz. (Düzenlenmiş)' },
        { sentence: 'It will probably rain tomorrow.', translation: 'Yarın muhtemelen yağmur yağacak. (Tahmin)' },
        { sentence: 'Look at the clouds! It\'s going to rain.', translation: 'Bulutlara bak! Yağmur yağacak. (Kanıt var)' }
      ]),
      rules: JSON.stringify([
        '"will" + V1: spontaneous decisions, promises, predictions (without evidence)',
        '"be going to" + V1: plans made before, intentions, predictions (with evidence)',
        'Present Continuous: fixed arrangements with other people',
        '"will" is often used in offers: "I\'ll carry that for you."',
        '"going to" is often used for intentions: "I\'m going to learn English."'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'I will to go there.', correct: 'I will go there.', explanation: 'Don\'t use "to" after "will".' },
        { wrong: 'I go to London next week.', correct: 'I\'m going to London next week.', explanation: 'Use a future form, not Present Simple, for future plans.' }
      ]),
      prerequisite_topics: '["present-simple", "present-continuous"]'
    },
    {
      name: 'Modal Verbs', slug: 'modal-verbs', category: 'modals', cefr_level: 'A2', order_index: 9,
      description: 'Can, could, should, must, may, might, would — expressing ability, possibility, permission, obligation.',
      explanation_en: 'Modal verbs modify the meaning of the main verb to express ability, possibility, permission, obligation, advice, etc. They don\'t change form.',
      explanation_tr: 'Yardımcı fiiller ana fiilin anlamını değiştirir: yetenek, olasılık, izin, zorunluluk, tavsiye vb. ifade eder. Çekimlenmezler.',
      examples: JSON.stringify([
        { sentence: 'I can swim.', translation: 'Yüzebilirim. (Yetenek)' },
        { sentence: 'You should see a doctor.', translation: 'Bir doktora görünmelisin. (Tavsiye)' },
        { sentence: 'You must wear a seatbelt.', translation: 'Emniyet kemeri takmalısın. (Zorunluluk)' },
        { sentence: 'It might rain today.', translation: 'Bugün yağmur yağabilir. (Olasılık)' },
        { sentence: 'Could you help me?', translation: 'Bana yardım edebilir misiniz? (Rica)' }
      ]),
      rules: JSON.stringify([
        'Modal + base verb (V1): She can speak French.',
        'No -s for third person: He can (NOT cans)',
        'can = ability/permission, could = past ability/polite requests',
        'should = advice, must = obligation/strong probability',
        'may/might = possibility, would = hypothetical/polite requests'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'He cans swim.', correct: 'He can swim.', explanation: 'Modals don\'t take -s.' },
        { wrong: 'I must to go.', correct: 'I must go.', explanation: 'Don\'t use "to" after modals.' },
        { wrong: 'She can to drive.', correct: 'She can drive.', explanation: 'After modals, use the base form directly.' }
      ]),
      prerequisite_topics: '["present-simple"]'
    },
    {
      name: 'Conditionals', slug: 'conditionals', category: 'conditionals', cefr_level: 'B1', order_index: 10,
      description: 'If-clauses: Zero, First, Second, and Third conditionals.',
      explanation_en: 'Conditionals express hypothetical situations and their results. Each type uses different tenses depending on how real or likely the situation is.',
      explanation_tr: 'Koşul cümleleri varsayımsal durumları ve sonuçlarını ifade eder. Her tür, durumun ne kadar gerçek veya olası olduğuna göre farklı zamanlar kullanır.',
      examples: JSON.stringify([
        { sentence: 'If you heat water, it boils.', translation: 'Suyu ısıtırsan kaynar. (Zero — genel doğru)' },
        { sentence: 'If it rains, I will stay home.', translation: 'Yağmur yağarsa evde kalacağım. (First — olası)' },
        { sentence: 'If I had money, I would travel.', translation: 'Param olsa seyahat ederdim. (Second — hayal)' },
        { sentence: 'If I had studied, I would have passed.', translation: 'Çalışsaydım geçerdim. (Third — geçmişte olmadı)' }
      ]),
      rules: JSON.stringify([
        'Zero: If + Present Simple, Present Simple (facts)',
        'First: If + Present Simple, will + V1 (real possibility)',
        'Second: If + Past Simple, would + V1 (unreal present)',
        'Third: If + Past Perfect, would + have + V3 (unreal past)',
        'Don\'t use "will" in the if-clause for First Conditional'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'If I will see him, I will tell him.', correct: 'If I see him, I will tell him.', explanation: 'Don\'t use "will" in the if-clause.' },
        { wrong: 'If I would have money, I would travel.', correct: 'If I had money, I would travel.', explanation: 'Use Past Simple in the if-clause for Second Conditional.' }
      ]),
      prerequisite_topics: '["present-simple", "past-simple", "future-forms"]'
    },
    {
      name: 'Passive Voice', slug: 'passive-voice', category: 'voice', cefr_level: 'B1', order_index: 11,
      description: 'When the focus is on the action or the receiver, not the doer.',
      explanation_en: 'We use Passive Voice when the action or its receiver is more important than who does it. Form: be + past participle (V3).',
      explanation_tr: 'Eylemi yapan kişi değil, eylemin kendisi veya eylemi alan önemli olduğunda Edilgen Çatı kullanılır. Yapı: be + V3.',
      examples: JSON.stringify([
        { sentence: 'The book was written by J.K. Rowling.', translation: 'Kitap J.K. Rowling tarafından yazıldı.' },
        { sentence: 'English is spoken worldwide.', translation: 'İngilizce dünya çapında konuşulur.' },
        { sentence: 'The window was broken.', translation: 'Cam kırıldı.' },
        { sentence: 'The project will be completed next month.', translation: 'Proje gelecek ay tamamlanacak.' }
      ]),
      rules: JSON.stringify([
        'Present: am/is/are + V3 (English is spoken here.)',
        'Past: was/were + V3 (The car was stolen.)',
        'Future: will be + V3 (The work will be finished.)',
        'Perfect: have/has/had been + V3 (The letter has been sent.)',
        'Use "by" to mention the agent: "It was made by Apple."'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'The book written by her.', correct: 'The book was written by her.', explanation: 'You need a form of "be" in passive sentences.' },
        { wrong: 'The window was broke.', correct: 'The window was broken.', explanation: 'Use the past participle (V3), not the past simple.' }
      ]),
      prerequisite_topics: '["present-simple", "past-simple"]'
    },
    {
      name: 'Reported Speech', slug: 'reported-speech', category: 'speech', cefr_level: 'B2', order_index: 12,
      description: 'Reporting what someone said without quoting them directly.',
      explanation_en: 'Reported Speech (Indirect Speech) is used to tell someone what another person said. Tenses usually shift back.',
      explanation_tr: 'Dolaylı Anlatım, başka birinin söylediğini aktarmak için kullanılır. Zamanlar genellikle bir adım geriye kayar.',
      examples: JSON.stringify([
        { sentence: '"I am tired." → She said (that) she was tired.', translation: '"Yorgunum." → Yorgun olduğunu söyledi.' },
        { sentence: '"I will come." → He said he would come.', translation: '"Geleceğim." → Geleceğini söyledi.' },
        { sentence: '"Do you like it?" → She asked if I liked it.', translation: '"Beğendin mi?" → Beğenip beğenmediğimi sordu.' }
      ]),
      rules: JSON.stringify([
        'Present Simple → Past Simple',
        'Present Continuous → Past Continuous',
        'Past Simple → Past Perfect',
        'will → would, can → could, may → might',
        'this → that, here → there, now → then, today → that day'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'She said she is tired.', correct: 'She said she was tired.', explanation: 'Shift the tense back when reporting.' },
        { wrong: 'He asked do I like it.', correct: 'He asked if I liked it.', explanation: 'Use "if/whether" for yes/no questions and change word order.' }
      ]),
      prerequisite_topics: '["past-simple", "present-perfect"]'
    },
    {
      name: 'Relative Clauses', slug: 'relative-clauses', category: 'clauses', cefr_level: 'B1', order_index: 13,
      description: 'Using who, which, that, where, when to add information about nouns.',
      explanation_en: 'Relative clauses give extra information about a noun. We use "who" for people, "which" for things, "that" for both, "where" for places, "when" for times.',
      explanation_tr: 'Sıfat cümlecikleri bir isim hakkında ek bilgi verir. İnsanlar için "who", şeyler için "which", her ikisi için "that", yerler için "where", zamanlar için "when" kullanılır.',
      examples: JSON.stringify([
        { sentence: 'The woman who lives next door is a teacher.', translation: 'Yan komşuda yaşayan kadın bir öğretmendir.' },
        { sentence: 'The book which I read was interesting.', translation: 'Okuduğum kitap ilginçti.' },
        { sentence: 'That\'s the restaurant where we met.', translation: 'Tanıştığımız restoran orası.' }
      ]),
      rules: JSON.stringify([
        'who = for people (subject/object)',
        'which = for things (subject/object)',
        'that = for people or things (informal)',
        'where = for places, when = for times',
        'Defining clauses: essential info (no commas)',
        'Non-defining clauses: extra info (with commas)'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'The man which called you is my brother.', correct: 'The man who called you is my brother.', explanation: 'Use "who" for people.' },
        { wrong: 'The car who I bought is red.', correct: 'The car which I bought is red.', explanation: 'Use "which" or "that" for things.' }
      ]),
      prerequisite_topics: '["present-simple", "past-simple"]'
    },
    {
      name: 'Articles', slug: 'articles', category: 'determiners', cefr_level: 'A2', order_index: 14,
      description: 'Using a, an, the, or no article correctly.',
      explanation_en: 'Articles (a/an/the) come before nouns. "A/an" is indefinite (any one), "the" is definite (specific one), and sometimes no article is needed.',
      explanation_tr: 'Artikeller (a/an/the) isimlerden önce gelir. "A/an" belirsiz (herhangi bir), "the" belirli (bilinen, spesifik), bazen hiç artikel gerekmez.',
      examples: JSON.stringify([
        { sentence: 'I saw a dog in the park.', translation: 'Parkta bir köpek gördüm.' },
        { sentence: 'The dog was very friendly.', translation: 'Köpek çok cana yakındı. (Bildiğimiz köpek)' },
        { sentence: 'She is an engineer.', translation: 'O bir mühendis.' },
        { sentence: 'I love music.', translation: 'Müziği seviyorum. (Genel — artikel yok)' }
      ]),
      rules: JSON.stringify([
        '"a" before consonant sounds: a book, a university',
        '"an" before vowel sounds: an apple, an hour',
        '"the" = both speakers know which one, unique things, superlatives',
        'No article: general/uncountable concepts (I like coffee), plural generalizations (Dogs are loyal)',
        'No article with: most countries, languages, meals, sports'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'I like the music.', correct: 'I like music.', explanation: 'Don\'t use "the" when speaking generally.' },
        { wrong: 'She is engineer.', correct: 'She is an engineer.', explanation: 'Use a/an with jobs.' },
        { wrong: 'I went to the home.', correct: 'I went home.', explanation: '"Go home" doesn\'t use an article.' }
      ]),
      prerequisite_topics: '[]'
    },
    {
      name: 'Prepositions', slug: 'prepositions', category: 'prepositions', cefr_level: 'A2', order_index: 15,
      description: 'In, on, at, for, with, by, about, to, from — location, time, movement, and more.',
      explanation_en: 'Prepositions show relationships between words — location, time, direction, cause, etc. They are often unpredictable and must be learned in context.',
      explanation_tr: 'Edatlar kelimeler arasındaki ilişkileri gösterir — yer, zaman, yön, neden vb. Çoğu zaman tahmin edilemez ve bağlam içinde öğrenilmelidir.',
      examples: JSON.stringify([
        { sentence: 'I live in Istanbul.', translation: 'İstanbul\'da yaşıyorum.' },
        { sentence: 'The meeting is on Monday at 3 PM.', translation: 'Toplantı Pazartesi saat 3\'te.' },
        { sentence: 'She\'s good at mathematics.', translation: 'Matematikte iyidir.' },
        { sentence: 'I\'m interested in science.', translation: 'Bilimle ilgileniyorum.' }
      ]),
      rules: JSON.stringify([
        'Time: at (specific time), on (days/dates), in (months/years/seasons/parts of day)',
        'Place: at (specific point), on (surface), in (enclosed space)',
        'at school/work/home, on the bus/train, in a car/taxi',
        'Verb + preposition combos must be memorized: listen TO, look AT, wait FOR, depend ON',
        'Adjective + preposition combos: good AT, interested IN, afraid OF, responsible FOR'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'I\'m interested for science.', correct: 'I\'m interested in science.', explanation: '"Interested" takes "in", not "for".' },
        { wrong: 'I arrived to school.', correct: 'I arrived at school.', explanation: '"Arrive" takes "at" (place) or "in" (city/country).' },
        { wrong: 'I listen music.', correct: 'I listen to music.', explanation: '"Listen" requires "to".' }
      ]),
      prerequisite_topics: '[]'
    },
    {
      name: 'Gerunds and Infinitives', slug: 'gerunds-infinitives', category: 'verb_forms', cefr_level: 'B1', order_index: 16,
      description: 'When to use V-ing and when to use to + V after certain verbs.',
      explanation_en: 'Some verbs are followed by gerund (V-ing), some by infinitive (to + V), and some can take both. This must mostly be memorized.',
      explanation_tr: 'Bazı fiillerden sonra isim-fiil (V-ing), bazılarından sonra mastar (to + V) gelir. Bazıları her ikisini de alabilir. Çoğunlukla ezberlenmesi gerekir.',
      examples: JSON.stringify([
        { sentence: 'I enjoy reading books.', translation: 'Kitap okumaktan hoşlanırım. (enjoy + V-ing)' },
        { sentence: 'I want to learn English.', translation: 'İngilizce öğrenmek istiyorum. (want + to V)' },
        { sentence: 'I stopped smoking.', translation: 'Sigara içmeyi bıraktım. (V-ing = eylemi bıraktı)' },
        { sentence: 'I stopped to smoke.', translation: 'Sigara içmek için durdum. (to V = amaç)' }
      ]),
      rules: JSON.stringify([
        'Gerund (V-ing) after: enjoy, finish, mind, avoid, keep, suggest, consider, practice, imagine',
        'Infinitive (to V) after: want, need, decide, hope, plan, expect, agree, refuse, learn, promise',
        'Both (different meaning): stop, remember, forget, try, regret',
        'After prepositions, always use gerund: interested in learning, good at cooking',
        'As subject, use gerund: "Swimming is good exercise."'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'I enjoy to read.', correct: 'I enjoy reading.', explanation: '"Enjoy" is always followed by V-ing.' },
        { wrong: 'I want learning.', correct: 'I want to learn.', explanation: '"Want" is followed by "to + verb".' }
      ]),
      prerequisite_topics: '["present-simple", "present-continuous"]'
    },
    {
      name: 'Comparatives and Superlatives', slug: 'comparatives-superlatives', category: 'adjectives', cefr_level: 'A2', order_index: 17,
      description: 'Comparing things: bigger, the biggest, more interesting, the most interesting.',
      explanation_en: 'Comparatives compare two things (-er/more). Superlatives show the extreme (the -est/the most). Irregular forms exist.',
      explanation_tr: 'Karşılaştırma sıfatları iki şeyi karşılaştırır (-er/more). Üstünlük sıfatları en üst dereceyi gösterir (the -est/the most).',
      examples: JSON.stringify([
        { sentence: 'She is taller than me.', translation: 'Benden uzun.' },
        { sentence: 'This is the most interesting book.', translation: 'Bu en ilginç kitap.' },
        { sentence: 'He is better than his brother at chess.', translation: 'Satrançta kardeşinden iyidir.' }
      ]),
      rules: JSON.stringify([
        'Short adj (1 syllable): -er/-est (tall→taller→tallest)',
        'Adj ending in -y: -ier/-iest (happy→happier→happiest)',
        'Long adj (2+ syllables): more/most (interesting→more interesting→most interesting)',
        'Irregular: good→better→best, bad→worse→worst, far→farther→farthest',
        'Comparatives use "than": She is older than me.'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'She is more tall than me.', correct: 'She is taller than me.', explanation: 'Short adjectives use -er, not "more".' },
        { wrong: 'He is the most good.', correct: 'He is the best.', explanation: '"Good" is irregular: good→better→best.' }
      ]),
      prerequisite_topics: '[]'
    },
    {
      name: 'Question Formation', slug: 'question-formation', category: 'sentence_structure', cefr_level: 'A1', order_index: 18,
      description: 'How to form questions in English: yes/no questions, Wh-questions, tag questions.',
      explanation_en: 'English questions change word order. Yes/no questions invert the subject and auxiliary. Wh-questions start with a question word.',
      explanation_tr: 'İngilizce sorularda sözcük sırası değişir. Evet/hayır soruları yardımcı fiili öne alır. Wh-soruları soru kelimesiyle başlar.',
      examples: JSON.stringify([
        { sentence: 'Do you like coffee?', translation: 'Kahve sever misin?' },
        { sentence: 'Where do you live?', translation: 'Nerede yaşıyorsun?' },
        { sentence: 'What are you doing?', translation: 'Ne yapıyorsun?' },
        { sentence: 'You\'re coming, aren\'t you?', translation: 'Geliyorsun, değil mi?' }
      ]),
      rules: JSON.stringify([
        'Yes/No: Auxiliary + Subject + Main verb? (Do you work?)',
        'Wh-: Wh-word + Auxiliary + Subject + Main verb? (Where do you work?)',
        'Who/What as subject: Who works here? (no auxiliary needed)',
        'Tag questions: positive → negative tag, negative → positive tag'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'Where you live?', correct: 'Where do you live?', explanation: 'You need "do/does" in Present Simple questions.' },
        { wrong: 'What means this?', correct: 'What does this mean?', explanation: 'Use "does" and base form for Wh-questions.' }
      ]),
      prerequisite_topics: '[]'
    },
    {
      name: 'Word Order', slug: 'word-order', category: 'sentence_structure', cefr_level: 'A2', order_index: 19,
      description: 'The standard English sentence structure: Subject-Verb-Object and adverb placement.',
      explanation_en: 'English follows SVO (Subject-Verb-Object) word order. Adverbs and adjectives have specific positions in the sentence.',
      explanation_tr: 'İngilizce ÖYN (Özne-Yüklem-Nesne) sözcük sırasını takip eder. Zarflar ve sıfatlar cümlede belirli yerlere konur.',
      examples: JSON.stringify([
        { sentence: 'I always drink coffee in the morning.', translation: 'Sabahları her zaman kahve içerim.' },
        { sentence: 'She quickly finished her homework.', translation: 'Ödevini hızlıca bitirdi.' }
      ]),
      rules: JSON.stringify([
        'Basic order: Subject + Verb + Object (I read books)',
        'Adverbs of frequency before main verb: I always eat breakfast',
        'Adverbs of frequency after "be": She is always late',
        'Adjectives before nouns: a big red car',
        'Time expressions usually at end: I work every day'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'I drink always coffee.', correct: 'I always drink coffee.', explanation: 'Frequency adverbs go before the main verb.' },
        { wrong: 'She is late always.', correct: 'She is always late.', explanation: 'Frequency adverbs go after "be".' }
      ]),
      prerequisite_topics: '["present-simple"]'
    },
    {
      name: 'Subject-Verb Agreement', slug: 'subject-verb-agreement', category: 'sentence_structure', cefr_level: 'B1', order_index: 20,
      description: 'Making sure the subject and verb match in number.',
      explanation_en: 'The verb must agree with its subject in number. Singular subjects take singular verbs, plural subjects take plural verbs.',
      explanation_tr: 'Fiil, öznesiyle sayı bakımından uyumlu olmalıdır. Tekil özneler tekil fiiller, çoğul özneler çoğul fiiller alır.',
      examples: JSON.stringify([
        { sentence: 'The team works hard.', translation: 'Takım çok çalışır.' },
        { sentence: 'The students are studying.', translation: 'Öğrenciler ders çalışıyor.' },
        { sentence: 'Everyone has a different opinion.', translation: 'Herkesin farklı bir görüşü var.' }
      ]),
      rules: JSON.stringify([
        'Singular: he/she/it + V-s (The dog runs.)',
        'Plural: they/we/you + V (The dogs run.)',
        'everyone/everybody/someone/nobody = singular verb',
        'The news IS (uncountable nouns are singular)',
        'Neither...nor/Either...or: verb agrees with the nearest subject'
      ]),
      common_mistakes: JSON.stringify([
        { wrong: 'Everyone have a phone.', correct: 'Everyone has a phone.', explanation: '"Everyone" is singular and takes "has".' },
        { wrong: 'The news are bad.', correct: 'The news is bad.', explanation: '"News" is uncountable and takes singular verb.' }
      ]),
      prerequisite_topics: '["present-simple"]'
    }
  ];

  const insertTopic = `INSERT OR IGNORE INTO grammar_topics (name, slug, category, cefr_level, description, explanation_en, explanation_tr, examples, rules, common_mistakes, order_index, prerequisite_topics) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  for (const topic of grammarTopics) {
    dbRun(insertTopic, [
      topic.name, topic.slug, topic.category, topic.cefr_level,
      topic.description, topic.explanation_en, topic.explanation_tr,
      topic.examples, topic.rules, topic.common_mistakes,
      topic.order_index, topic.prerequisite_topics
    ]);
  }
  console.log(`✓ ${grammarTopics.length} grammar topics seeded`);

  // =============================================
  // GRAMMAR EXERCISES
  // =============================================
  const grammarExercises = [
    { topic_slug: 'present-simple', exercise_type: 'fill_blank', cefr_level: 'A1', difficulty: 1,
      question: 'She ___ (go) to school every day.', correct_answer: 'goes',
      explanation: 'Third person singular: add -es to "go".', explanation_tr: 'Üçüncü tekil şahıs: "go" fiiline -es eklenir.' },
    { topic_slug: 'present-simple', exercise_type: 'fill_blank', cefr_level: 'A1', difficulty: 1,
      question: 'They ___ (not/like) cold weather.', correct_answer: "don't like",
      explanation: 'For plural subjects, use "don\'t" + base verb.', explanation_tr: 'Çoğul özneler için "don\'t" + yalın fiil kullanılır.' },
    { topic_slug: 'present-simple', exercise_type: 'multiple_choice', cefr_level: 'A1', difficulty: 1,
      question: 'He ___ breakfast every morning.',
      options: JSON.stringify(['eat', 'eats', 'eating', 'is eat']),
      correct_answer: 'eats', explanation: 'He/she/it + verb-s in Present Simple.' },
    { topic_slug: 'present-simple', exercise_type: 'error_correction', cefr_level: 'A1', difficulty: 2,
      question: 'Find and correct the error: "She don\'t like swimming."',
      correct_answer: "She doesn't like swimming.",
      explanation: 'Use "doesn\'t" for he/she/it.' },
    { topic_slug: 'present-simple', exercise_type: 'sentence_transform', cefr_level: 'A1', difficulty: 2,
      question: 'Make this negative: "He plays tennis."',
      correct_answer: "He doesn't play tennis.",
      explanation: 'Negative: doesn\'t + base verb.' },
    { topic_slug: 'present-simple', exercise_type: 'sentence_creation', cefr_level: 'A1', difficulty: 3,
      question: 'Write a sentence about your daily routine using Present Simple.',
      correct_answer: '[free response]' },
    { topic_slug: 'present-continuous', exercise_type: 'fill_blank', cefr_level: 'A1', difficulty: 1,
      question: 'Look! The children ___ (play) in the garden.',
      correct_answer: 'are playing',
      explanation: 'Use am/is/are + V-ing for actions happening now.' },
    { topic_slug: 'present-continuous', exercise_type: 'multiple_choice', cefr_level: 'A1', difficulty: 1,
      question: 'What ___ you ___ right now?',
      options: JSON.stringify(['are...doing', 'do...do', 'is...doing', 'are...do']),
      correct_answer: 'are...doing' },
    { topic_slug: 'present-continuous', exercise_type: 'error_correction', cefr_level: 'A1', difficulty: 2,
      question: 'Find and correct the error: "I am know the answer."',
      correct_answer: 'I know the answer.',
      explanation: 'Stative verbs like "know" are not used in continuous form.' },
    { topic_slug: 'present-perfect', exercise_type: 'fill_blank', cefr_level: 'B1', difficulty: 1,
      question: 'I ___ never ___ (be) to Japan.',
      correct_answer: 'have...been',
      explanation: 'Present Perfect for experiences: have/has + V3.' },
    { topic_slug: 'present-perfect', exercise_type: 'multiple_choice', cefr_level: 'B1', difficulty: 1,
      question: 'She ___ her homework yet.',
      options: JSON.stringify(["hasn't finished", "didn't finish", "doesn't finish", "isn't finishing"]),
      correct_answer: "hasn't finished",
      explanation: '"Yet" signals Present Perfect.' },
    { topic_slug: 'present-perfect', exercise_type: 'error_correction', cefr_level: 'B1', difficulty: 2,
      question: 'Find and correct: "I have went to London."',
      correct_answer: 'I have gone to London.',
      explanation: 'go → went → gone. Use V3 after have/has.' },
    { topic_slug: 'conditionals', exercise_type: 'fill_blank', cefr_level: 'B1', difficulty: 1,
      question: 'If it ___ (rain), I will take an umbrella.',
      correct_answer: 'rains',
      explanation: 'First Conditional: If + Present Simple, will + V1.' },
    { topic_slug: 'conditionals', exercise_type: 'multiple_choice', cefr_level: 'B1', difficulty: 2,
      question: 'If I ___ rich, I would travel the world.',
      options: JSON.stringify(['am', 'was/were', 'will be', 'had been']),
      correct_answer: 'was/were',
      explanation: 'Second Conditional: If + Past Simple, would + V1.' },
    { topic_slug: 'articles', exercise_type: 'fill_blank', cefr_level: 'A2', difficulty: 1,
      question: 'She is ___ engineer at ___ big company.',
      correct_answer: 'an...a',
      explanation: '"An" before vowel sounds, "a" before consonant sounds.' },
    { topic_slug: 'articles', exercise_type: 'multiple_choice', cefr_level: 'A2', difficulty: 1,
      question: 'I love ___ music.',
      options: JSON.stringify(['a', 'an', 'the', 'no article']),
      correct_answer: 'no article',
      explanation: 'No article with general/abstract nouns.' },
    { topic_slug: 'modal-verbs', exercise_type: 'fill_blank', cefr_level: 'A2', difficulty: 1,
      question: "You ___ wear a seatbelt. It's the law.",
      correct_answer: 'must',
      explanation: '"Must" for strong obligation/rules.' },
    { topic_slug: 'modal-verbs', exercise_type: 'multiple_choice', cefr_level: 'A2', difficulty: 1,
      question: 'She ___ speak three languages.',
      options: JSON.stringify(['can', 'cans', 'can to', 'is can']),
      correct_answer: 'can',
      explanation: 'Modal verbs don\'t change form.' },
  ];

  const insertExercise = `INSERT INTO grammar_exercises (topic_id, exercise_type, cefr_level, difficulty, question, options, correct_answer, explanation, explanation_tr) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  let exerciseCount = 0;
  for (const ex of grammarExercises) {
    const topic = dbGet('SELECT id FROM grammar_topics WHERE slug = ?', [ex.topic_slug]);
    if (topic) {
      dbRun(insertExercise, [
        topic.id, ex.exercise_type, ex.cefr_level, ex.difficulty,
        ex.question, ex.options || null, ex.correct_answer,
        ex.explanation, ex.explanation_tr || null
      ]);
      exerciseCount++;
    }
  }
  console.log(`✓ ${exerciseCount} grammar exercises seeded`);

  // =============================================
  // VOCABULARY
  // =============================================
  const vocabularyItems = [
    { word: 'make', pos: 'verb', cefr: 'A1', freq: 50,
      def_en: 'To create, produce, or cause something to happen.',
      def_tr: 'Yapmak, üretmek, oluşturmak.',
      phonetic: '/meɪk/',
      examples: ['I make breakfast every morning.', 'She made a mistake.', 'Can you make a decision?'],
      synonyms: ['create', 'produce', 'build'], antonyms: ['destroy', 'break'],
      collocations: ['make a decision', 'make a mistake', 'make progress', 'make money', 'make sure', 'make an effort', 'make a difference', 'make friends'],
      word_family: ['maker', 'making', 'made'],
      phrases: ['make up your mind', 'make it on time', 'make the most of'],
      register: 'neutral', category: 'daily_life' },
    { word: 'take', pos: 'verb', cefr: 'A1', freq: 60,
      def_en: 'To get, carry, or accept something; to require time or effort.',
      def_tr: 'Almak, götürmek, kabul etmek.',
      phonetic: '/teɪk/',
      examples: ['Take this book.', 'It takes two hours.', 'She took the bus.'],
      synonyms: ['grab', 'carry', 'seize'], antonyms: ['give', 'put', 'leave'],
      collocations: ['take a photo', 'take a break', 'take time', 'take a look', 'take care', 'take part', 'take place'],
      word_family: ['taker', 'taking', 'taken', 'took'],
      phrases: ['take it easy', 'take your time', 'take for granted'],
      register: 'neutral', category: 'daily_life' },
    { word: 'get', pos: 'verb', cefr: 'A1', freq: 30,
      def_en: 'To obtain, receive, or become. One of the most versatile verbs in English.',
      def_tr: 'Almak, elde etmek, olmak.',
      phonetic: '/ɡet/',
      examples: ['I need to get some milk.', 'She got angry.', 'Did you get my message?'],
      synonyms: ['obtain', 'receive', 'acquire'], antonyms: ['give', 'lose'],
      collocations: ['get ready', 'get used to', 'get married', 'get along', 'get rid of', 'get up', 'get better'],
      word_family: ['getting', 'got', 'gotten'],
      phrases: ['get the hang of', 'get over it', 'get out of hand'],
      register: 'neutral', category: 'daily_life' },
    { word: 'opportunity', pos: 'noun', cefr: 'B1', freq: 800,
      def_en: 'A chance or favorable situation for doing something.',
      def_tr: 'Fırsat, uygun durum.',
      phonetic: '/ˌɒpəˈtjuːnɪti/',
      examples: ['This is a great opportunity.', "Don't miss this opportunity.", 'We had the opportunity to travel.'],
      synonyms: ['chance', 'possibility', 'occasion'], antonyms: ['obstacle'],
      collocations: ['take the opportunity', 'miss an opportunity', 'golden opportunity', 'job opportunity'],
      word_family: ['opportunistic', 'opportunist'],
      phrases: ['opportunity knocks', 'window of opportunity', 'seize the opportunity'],
      register: 'neutral', category: 'general' },
    { word: 'despite', pos: 'preposition', cefr: 'B1', freq: 1200,
      def_en: 'Without being affected by; in spite of.',
      def_tr: 'Rağmen, karşın.',
      phonetic: '/dɪˈspaɪt/',
      examples: ['Despite the rain, we went outside.', 'She succeeded despite the difficulties.'],
      synonyms: ['in spite of', 'regardless of'], antonyms: ['because of'],
      collocations: ['despite the fact that', 'despite everything', 'despite difficulties'],
      word_family: [], phrases: ['despite all odds'],
      register: 'neutral', category: 'academic' },
    { word: 'achieve', pos: 'verb', cefr: 'B1', freq: 900,
      def_en: 'To successfully reach a goal or result through effort.',
      def_tr: 'Başarmak, elde etmek.',
      phonetic: '/əˈtʃiːv/',
      examples: ['She achieved her goal.', 'They achieved great success.'],
      synonyms: ['accomplish', 'attain', 'reach'], antonyms: ['fail', 'lose'],
      collocations: ['achieve a goal', 'achieve success', 'achieve results'],
      word_family: ['achievement', 'achievable', 'achiever'],
      phrases: ['achieve the impossible', 'sense of achievement'],
      register: 'neutral', category: 'academic' },
    { word: 'environment', pos: 'noun', cefr: 'B1', freq: 700,
      def_en: 'The natural world; the conditions around a person or thing.',
      def_tr: 'Çevre, ortam.',
      phonetic: '/ɪnˈvaɪrənmənt/',
      examples: ['We must protect the environment.', 'A good working environment is important.'],
      synonyms: ['surroundings', 'setting', 'atmosphere'], antonyms: [],
      collocations: ['protect the environment', 'natural environment', 'working environment'],
      word_family: ['environmental', 'environmentally', 'environmentalist'],
      phrases: ['environmentally friendly'],
      register: 'neutral', category: 'science' },
    { word: 'comfortable', pos: 'adjective', cefr: 'A2', freq: 1500,
      def_en: 'Providing physical ease; feeling at ease.',
      def_tr: 'Rahat, konforlu.',
      phonetic: '/ˈkʌmftəbl/',
      examples: ['This chair is very comfortable.', 'I feel comfortable speaking English.'],
      synonyms: ['cozy', 'relaxed', 'pleasant'], antonyms: ['uncomfortable', 'uneasy'],
      collocations: ['feel comfortable', 'make comfortable', 'comfortable with'],
      word_family: ['comfort', 'comfortably', 'uncomfortable', 'discomfort'],
      phrases: ['make yourself comfortable'],
      register: 'neutral', category: 'daily_life' },
    { word: 'increase', pos: 'verb/noun', cefr: 'B1', freq: 500,
      def_en: 'To become or make greater in size, amount, or degree.',
      def_tr: 'Artmak, artırmak (fiil); artış (isim).',
      phonetic: '/ɪnˈkriːs/',
      examples: ['Sales have increased by 20%.', 'There was a significant increase in temperature.'],
      synonyms: ['grow', 'rise', 'expand'], antonyms: ['decrease', 'decline', 'reduce'],
      collocations: ['increase significantly', 'sharp increase', 'steady increase'],
      word_family: ['increasing', 'increasingly', 'increased'],
      phrases: ['on the increase'],
      register: 'neutral', category: 'academic' },
    { word: 'suggest', pos: 'verb', cefr: 'B1', freq: 600,
      def_en: 'To put forward an idea for consideration.',
      def_tr: 'Önermek, tavsiye etmek.',
      phonetic: '/səˈdʒest/',
      examples: ['I suggest we leave early.', 'Can you suggest a good restaurant?'],
      synonyms: ['recommend', 'propose', 'advise'], antonyms: ['demand'],
      collocations: ['suggest an idea', 'strongly suggest', 'suggest that'],
      word_family: ['suggestion', 'suggestive'],
      phrases: ['I would suggest', 'what do you suggest?'],
      register: 'neutral', category: 'general' }
  ];

  const insertVocab = `INSERT OR IGNORE INTO vocabulary_items (word, part_of_speech, cefr_level, frequency_rank, definition_en, definition_tr, phonetic, example_sentences, synonyms, antonyms, collocations, word_family, common_phrases, formal_informal, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  for (const v of vocabularyItems) {
    dbRun(insertVocab, [
      v.word, v.pos, v.cefr, v.freq, v.def_en, v.def_tr, v.phonetic,
      JSON.stringify(v.examples), JSON.stringify(v.synonyms), JSON.stringify(v.antonyms),
      JSON.stringify(v.collocations), JSON.stringify(v.word_family), JSON.stringify(v.phrases),
      v.register, v.category
    ]);
  }
  console.log(`✓ ${vocabularyItems.length} vocabulary items seeded`);

  // =============================================
  // READING MATERIALS
  // =============================================
  const readingMaterials = [
    {
      title: 'My Daily Routine', cefr_level: 'A1', category: 'daily_life',
      content: `Every morning, I wake up at 7 o'clock. First, I wash my face and brush my teeth. Then I have breakfast. I usually eat bread and cheese and drink tea.\n\nAfter breakfast, I get dressed and go to work. I take the bus to the office. I work from 9 AM to 6 PM. During lunch break, I eat at a small restaurant near the office.\n\nIn the evening, I come home and cook dinner. After dinner, I watch TV or read a book. Sometimes I call my friends. I usually go to bed at 11 PM.\n\nOn weekends, I like to spend time with my family. We sometimes go to the park or visit relatives. I also like playing football on Saturdays.`,
      word_count: 120, estimated_reading_time: 3,
      comprehension_questions: JSON.stringify([
        { question: 'What time does the person wake up?', options: ["6 o'clock", "7 o'clock", "8 o'clock", "9 o'clock"], correct: "7 o'clock", type: 'detail' },
        { question: 'How does the person go to work?', options: ['By car', 'By bus', 'On foot', 'By train'], correct: 'By bus', type: 'detail' },
        { question: "What is the main topic of this text?", options: ["A person's hobbies", "A person's daily life", "A person's work problems", "A person's family"], correct: "A person's daily life", type: 'main_idea' }
      ]),
      key_vocabulary: JSON.stringify(['routine', 'breakfast', 'relatives', 'weekend']),
      summary: "A simple description of a person's daily routine."
    },
    {
      title: 'The History of the Internet', cefr_level: 'B1', category: 'technology',
      content: `The Internet has changed the world more than almost any other invention. But how did it start?\n\nThe idea of connecting computers began in the 1960s. The United States military wanted a communication system that could survive a nuclear attack. They created ARPANET in 1969, which connected four university computers.\n\nThroughout the 1970s and 1980s, more computers joined the network. Scientists and researchers used it to share information. However, it was difficult for ordinary people to use.\n\nEverything changed in 1991 when Tim Berners-Lee invented the World Wide Web. The Web made it easy to create and access web pages using links.\n\nBy the mid-1990s, millions of people were using the Internet. Companies like Amazon and Google were founded during this period.\n\nToday, the Internet connects billions of people worldwide. We use it for communication, entertainment, education, shopping, and much more.`,
      word_count: 160, estimated_reading_time: 5,
      comprehension_questions: JSON.stringify([
        { question: 'When was ARPANET created?', options: ['1959', '1969', '1979', '1991'], correct: '1969', type: 'detail' },
        { question: 'Who invented the World Wide Web?', options: ['Bill Gates', 'Steve Jobs', 'Tim Berners-Lee', 'Mark Zuckerberg'], correct: 'Tim Berners-Lee', type: 'detail' },
        { question: 'What is the main idea of this text?', options: ['The dangers of the Internet', 'How to use the Internet', 'The history and development of the Internet', 'The future of technology'], correct: 'The history and development of the Internet', type: 'main_idea' }
      ]),
      key_vocabulary: JSON.stringify(['invention', 'network', 'browser', 'transform']),
      summary: 'A historical overview of how the Internet developed.'
    }
  ];

  const insertReading = `INSERT INTO reading_materials (title, content, cefr_level, category, word_count, estimated_reading_time, key_vocabulary, comprehension_questions, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  for (const r of readingMaterials) {
    dbRun(insertReading, [r.title, r.content, r.cefr_level, r.category, r.word_count, r.estimated_reading_time, r.key_vocabulary, r.comprehension_questions, r.summary]);
  }
  console.log(`✓ ${readingMaterials.length} reading materials seeded`);

  // =============================================
  // WRITING PROMPTS
  // =============================================
  const writingPrompts = [
    { type: 'sentence', cefr: 'A1', prompt: 'Write 5 sentences about your family using Present Simple.', instructions: 'Use Present Simple tense.', min: 20, max: 60, cat: 'daily_life' },
    { type: 'paragraph', cefr: 'A2', prompt: 'Write a short paragraph about your favorite food.', instructions: 'Describe the food, why you like it.', min: 50, max: 120, cat: 'daily_life' },
    { type: 'email', cefr: 'B1', prompt: 'Write an email to your friend inviting them to your birthday party.', instructions: 'Include: date, time, place.', min: 60, max: 150, cat: 'daily_life' },
    { type: 'opinion', cefr: 'B1', prompt: 'Do you think social media is good or bad for young people? Why?', instructions: 'Give your opinion with at least 2 reasons.', min: 100, max: 200, cat: 'technology' },
    { type: 'essay', cefr: 'B2', prompt: 'Some people think that remote work is the future. Others believe offices are essential. Discuss both views.', instructions: 'Write a balanced essay.', min: 200, max: 350, cat: 'work' }
  ];

  const insertWriting = `INSERT INTO writing_prompts (type, cefr_level, prompt, instructions, word_limit_min, word_limit_max, category) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  for (const w of writingPrompts) {
    dbRun(insertWriting, [w.type, w.cefr, w.prompt, w.instructions, w.min, w.max, w.cat]);
  }
  console.log(`✓ ${writingPrompts.length} writing prompts seeded`);

  // =============================================
  // SPEAKING SCENARIOS
  // =============================================
  const speakingScenarios = [
    { title: 'At a Restaurant', cefr: 'A1', cat: 'restaurant',
      desc: 'Order food and drinks at a restaurant.',
      situation: 'You are at a restaurant and want to order food.',
      ai_role: 'Friendly waiter', user_role: 'Customer',
      starter: "Good evening! Welcome to The Garden Restaurant. What would you like to order?",
      vocab: ['menu', 'order', 'appetizer', 'main course', 'dessert', 'bill'],
      phrases: ['I would like...', 'Can I have...', 'The bill, please.'],
      objectives: ['Order food', 'Ask about a dish', 'Request the bill'] },
    { title: 'Job Interview', cefr: 'B1', cat: 'work',
      desc: 'Practice a job interview.',
      situation: 'You are interviewing for a position at a tech company.',
      ai_role: 'HR manager', user_role: 'Job candidate',
      starter: "Hello! Thank you for coming in today. Tell me a little about yourself.",
      vocab: ['experience', 'qualification', 'skill', 'strength', 'weakness'],
      phrases: ['I have experience in...', 'My strengths include...'],
      objectives: ['Introduce yourself', 'Describe your experience', 'Ask about the position'] },
    { title: 'Casual Conversation', cefr: 'A2', cat: 'social',
      desc: 'Have a friendly conversation about hobbies.',
      situation: 'You are meeting someone new at a social event.',
      ai_role: 'Friendly person', user_role: 'Someone making friends',
      starter: "Hi there! I'm Alex. What brings you here today?",
      vocab: ['hobby', 'interest', 'free time', 'enjoy', 'favorite'],
      phrases: ['Nice to meet you!', "I'm interested in...", 'What do you do for fun?'],
      objectives: ['Introduce yourself', 'Talk about hobbies', 'Ask questions'] }
  ];

  const insertScenario = `INSERT INTO speaking_scenarios (title, description, cefr_level, category, situation, ai_role, user_role, starter_message, key_vocabulary, key_phrases, objectives) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  for (const s of speakingScenarios) {
    dbRun(insertScenario, [s.title, s.desc, s.cefr, s.cat, s.situation, s.ai_role, s.user_role, s.starter, JSON.stringify(s.vocab), JSON.stringify(s.phrases), JSON.stringify(s.objectives)]);
  }
  console.log(`✓ ${speakingScenarios.length} speaking scenarios seeded`);

  // =============================================
  // LISTENING MATERIALS
  // =============================================
  const listeningMaterials = [
    { title: 'Introducing Yourself', cefr: 'A1', cat: 'daily_life',
      desc: 'A person introduces themselves.',
      audio_text: "Hello! My name is Sarah. I am 28 years old. I am from London, but I live in Istanbul now. I work as a teacher at an international school. In my free time, I like reading books and cooking.",
      rate: 'slow', accent: 'british',
      transcript: "Hello! My name is Sarah. I am 28 years old. I am from London, but I live in Istanbul now. I work as a teacher at an international school. In my free time, I like reading books and cooking.",
      questions: JSON.stringify([
        { question: 'Where is Sarah from?', options: ['Istanbul', 'London', 'Paris', 'Berlin'], correct: 'London', type: 'detail' },
        { question: 'What is her job?', options: ['Doctor', 'Teacher', 'Engineer', 'Chef'], correct: 'Teacher', type: 'detail' }
      ]),
      vocab: JSON.stringify(['introduce', 'international', 'free time']),
      notes: 'Slow, clear British English.' },
    { title: 'A Phone Conversation', cefr: 'A2', cat: 'daily_life',
      desc: 'Two friends making plans.',
      audio_text: "Mark: Hey Lisa, are you free this Saturday? Lisa: Yes, I think so. Why? Mark: I was thinking we could go to that new Italian restaurant downtown. Lisa: Oh yes! My colleague went there last week. She said the pasta was amazing. Mark: Great! How about 7 o'clock? Lisa: That works for me. See you Saturday!",
      rate: 'normal', accent: 'american',
      transcript: "Mark: Hey Lisa, are you free this Saturday?\nLisa: Yes, I think so. Why?\nMark: I was thinking we could go to that new Italian restaurant downtown.\nLisa: Oh yes! My colleague went there last week. She said the pasta was amazing.\nMark: Great! How about 7 o'clock?\nLisa: That works for me. See you Saturday!",
      questions: JSON.stringify([
        { question: 'What day are they planning to meet?', options: ['Friday', 'Saturday', 'Sunday', 'Monday'], correct: 'Saturday', type: 'detail' },
        { question: 'What type of restaurant?', options: ['Chinese', 'Mexican', 'Italian', 'Turkish'], correct: 'Italian', type: 'detail' },
        { question: "What time will they meet?", options: ["6 o'clock", "7 o'clock", "8 o'clock", "9 o'clock"], correct: "7 o'clock", type: 'detail' }
      ]),
      vocab: JSON.stringify(['downtown', 'colleague', 'amazing']),
      notes: 'Natural dialogue with common conversational phrases.' }
  ];

  const insertListening = `INSERT INTO listening_materials (title, description, cefr_level, category, audio_text, speech_rate, accent, transcript, comprehension_questions, key_vocabulary, difficulty_notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  for (const l of listeningMaterials) {
    dbRun(insertListening, [l.title, l.desc, l.cefr, l.cat, l.audio_text, l.rate, l.accent, l.transcript, l.questions, l.vocab, l.notes]);
  }
  console.log(`✓ ${listeningMaterials.length} listening materials seeded`);

  // =============================================
  // ASSESSMENT QUESTION BANK
  // =============================================
  const insertQuestion = `INSERT INTO assessment_question_bank (skill, question_type, cefr_level, topic, question, options, correct_answer, explanation, explanation_tr) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  for (const q of assessmentQuestions) {
    dbRun(insertQuestion, [
      q.skill, q.question_type, q.cefr_level, q.topic,
      q.question, q.options, q.correct_answer,
      q.explanation, q.explanation_tr
    ]);
  }
  console.log(`✓ ${assessmentQuestions.length} diagnostic assessment questions seeded`);

  console.log('\n✅ Database seeding complete!');
  closeDb();
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
