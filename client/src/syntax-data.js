/**
 * Syntax & Sentence Formation Exercise Bank
 * Pedagogical word-order dataset teaching English S-V-O-M-P-T and advanced syntactic structures
 * with Turkish comparative grammar explanations.
 */

export const SYNTAX_CATEGORIES = [
  { id: 'all', name: 'Tüm Konular', desc: 'A1-B2 tüm seviyelerden karışık cümle kurma pratikleri' },
  { id: 'basic_svo', name: 'Temel S-V-O Dizilimi', desc: 'Özne + Yüklem + Nesne mantığı ve fiil-nesne bağı' },
  { id: 'adverb_placement', name: 'Zarflar & SVOMPT', desc: 'Sıklık, tarz, yer ve zaman zarflarının doğru sıralanışı' },
  { id: 'questions_negatives', name: 'Soru & Olumsuz Yapılar', desc: 'Yardımcı fiiller, soru kelimeleri ve vurgular' },
  { id: 'indirect_questions', name: 'Dolaylı Sorular (Indirect)', desc: 'İngilizcede soru sırasının düz cümleye dönüşmesi' },
  { id: 'connectors_clauses', name: 'Yan Cümleler & Bağlaçlar', desc: 'Relative clauses (who/which) ve neden-sonuç bağlaçları' },
  { id: 'inversion_emphasis', name: 'Devrik Cümleler (Inversion)', desc: 'Seldom, Rarely gibi zarflarla devrik B2 yapıları' }
];

export const SYNTAX_EXERCISES = [
  // --- A1: Temel S-V-O Dizilimi ---
  {
    id: 'syn-1',
    cefr_level: 'A1',
    category: 'basic_svo',
    category_name_tr: 'Temel S-V-O Dizilimi',
    turkish_prompt: 'Her sabah kahve içerim.',
    tokens: ['I', 'drink', 'coffee', 'every morning'],
    correct_sentence: 'I drink coffee every morning.',
    acceptable_alternatives: ['Every morning I drink coffee.'],
    grammar_breakdown: [
      { token: 'I', role: 'Özne (Subject)', tag: 'S' },
      { token: 'drink', role: 'Fiil (Verb)', tag: 'V' },
      { token: 'coffee', role: 'Nesne (Object)', tag: 'O' },
      { token: 'every morning', role: 'Zaman Zarfı (Time)', tag: 'T' }
    ],
    explanation_tr: 'Türkçede fiil cümlenin en sonundadır ("içerim"). İngilizcede ise öznenin hemen ardından fiil gelir: S (I) + V (drink) + O (coffee) + T (every morning).'
  },
  {
    id: 'syn-2',
    cefr_level: 'A1',
    category: 'basic_svo',
    category_name_tr: 'Temel S-V-O Dizilimi',
    turkish_prompt: 'Kız kardeşim çok güzel piyano çalar.',
    tokens: ['My sister', 'plays', 'the piano', 'very well'],
    correct_sentence: 'My sister plays the piano very well.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'My sister', role: 'Özne (Subject)', tag: 'S' },
      { token: 'plays', role: 'Fiil (Verb + -s)', tag: 'V' },
      { token: 'the piano', role: 'Nesne (Object)', tag: 'O' },
      { token: 'very well', role: 'Durum Zarfı (Manner)', tag: 'M' }
    ],
    explanation_tr: 'İngilizcede fiil ile nesne arasına zarf giremez. "Plays very well the piano" YANLIŞTIR. Doğrusu: plays (fiil) + the piano (nesne) + very well (zarf).'
  },
  {
    id: 'syn-3',
    cefr_level: 'A1',
    category: 'basic_svo',
    category_name_tr: 'Temel S-V-O Dizilimi',
    turkish_prompt: 'Onlar büyük bir şirkette çalışıyorlar.',
    tokens: ['They', 'work', 'in a large company'],
    correct_sentence: 'They work in a large company.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'They', role: 'Özne (Subject)', tag: 'S' },
      { token: 'work', role: 'Fiil (Verb)', tag: 'V' },
      { token: 'in a large company', role: 'Yer Bildiren Öbek (Place)', tag: 'P' }
    ],
    explanation_tr: 'İngilizcede özne (They) daima başta, fiil (work) ikinci sırada, yer tamlayıcısı (in a large company) ise fiilden sonra gelir.'
  },
  {
    id: 'syn-4',
    cefr_level: 'A1',
    category: 'basic_svo',
    category_name_tr: 'Temel S-V-O Dizilimi',
    turkish_prompt: 'Biz her gün yeni kelimeler öğreniyoruz.',
    tokens: ['We', 'learn', 'new words', 'every day'],
    correct_sentence: 'We learn new words every day.',
    acceptable_alternatives: ['Every day we learn new words.'],
    grammar_breakdown: [
      { token: 'We', role: 'Özne (Subject)', tag: 'S' },
      { token: 'learn', role: 'Fiil (Verb)', tag: 'V' },
      { token: 'new words', role: 'Nesne (Object)', tag: 'O' },
      { token: 'every day', role: 'Zaman Zarfı (Time)', tag: 'T' }
    ],
    explanation_tr: 'İngilizce S-V-O-T: We (Özne) + learn (Fiil) + new words (Nesne) + every day (Zaman).'
  },
  {
    id: 'syn-5',
    cefr_level: 'A1',
    category: 'basic_svo',
    category_name_tr: 'Temel S-V-O Dizilimi',
    turkish_prompt: 'Ali dün akşam yeni bir telefon satın aldı.',
    tokens: ['Ali', 'bought', 'a new phone', 'yesterday evening'],
    correct_sentence: 'Ali bought a new phone yesterday evening.',
    acceptable_alternatives: ['Yesterday evening Ali bought a new phone.'],
    grammar_breakdown: [
      { token: 'Ali', role: 'Özne (Subject)', tag: 'S' },
      { token: 'bought', role: 'Geçmiş Zaman Fiili (Past Verb)', tag: 'V' },
      { token: 'a new phone', role: 'Nesne (Object)', tag: 'O' },
      { token: 'yesterday evening', role: 'Zaman (Time)', tag: 'T' }
    ],
    explanation_tr: 'Zaman zarfları ("yesterday evening") genellikle cümlenin en sonunda yer alır. Asla fiil ile nesne arasına sokulmaz.'
  },

  // --- A2: Zarflar & SVOMPT (Manner, Place, Time) ---
  {
    id: 'syn-6',
    cefr_level: 'A2',
    category: 'adverb_placement',
    category_name_tr: 'Zarflar & SVOMPT',
    turkish_prompt: 'Babam genellikle sabahları mutfakta kahve içer.',
    tokens: ['My father', 'usually', 'drinks', 'coffee', 'in the kitchen', 'in the morning'],
    correct_sentence: 'My father usually drinks coffee in the kitchen in the morning.',
    acceptable_alternatives: ['In the morning my father usually drinks coffee in the kitchen.'],
    grammar_breakdown: [
      { token: 'My father', role: 'Özne (Subject)', tag: 'S' },
      { token: 'usually', role: 'Sıklık Zarfı (Frequency - Fiilden hemen önce)', tag: 'Adv' },
      { token: 'drinks', role: 'Fiil (Verb)', tag: 'V' },
      { token: 'coffee', role: 'Nesne (Object)', tag: 'O' },
      { token: 'in the kitchen', role: 'Yer (Place - Önce gelir)', tag: 'P' },
      { token: 'in the morning', role: 'Zaman (Time - Sonra gelir)', tag: 'T' }
    ],
    explanation_tr: 'İngilizcede yer ve zaman zarfları birlikte kullanıldığında her zaman önce YER (Place), sonra ZAMAN (Time) gelir: "in the kitchen in the morning". Sıklık zarfları (usually) ise asıl fiilin hemen önüne geçer.'
  },
  {
    id: 'syn-7',
    cefr_level: 'A2',
    category: 'adverb_placement',
    category_name_tr: 'Zarflar & SVOMPT',
    turkish_prompt: 'Çocuklar dün parkta neşeyle futbol oynadılar.',
    tokens: ['The children', 'played', 'football', 'happily', 'in the park', 'yesterday'],
    correct_sentence: 'The children played football happily in the park yesterday.',
    acceptable_alternatives: ['Yesterday the children played football happily in the park.'],
    grammar_breakdown: [
      { token: 'The children', role: 'Özne (Subject)', tag: 'S' },
      { token: 'played', role: 'Fiil (Verb)', tag: 'V' },
      { token: 'football', role: 'Nesne (Object)', tag: 'O' },
      { token: 'happily', role: 'Durum / Tarz Zarfı (Manner)', tag: 'M' },
      { token: 'in the park', role: 'Yer (Place)', tag: 'P' },
      { token: 'yesterday', role: 'Zaman (Time)', tag: 'T' }
    ],
    explanation_tr: 'Altın Formül: S-V-O-M-P-T! Subject (The children) + Verb (played) + Object (football) + Manner (happily) + Place (in the park) + Time (yesterday).'
  },
  {
    id: 'syn-8',
    cefr_level: 'A2',
    category: 'adverb_placement',
    category_name_tr: 'Zarflar & SVOMPT',
    turkish_prompt: 'Hafta içi geceleri asla televizyon izlemem.',
    tokens: ['I', 'never', 'watch', 'television', 'at night', 'on weekdays'],
    correct_sentence: 'I never watch television at night on weekdays.',
    acceptable_alternatives: ['On weekdays I never watch television at night.'],
    grammar_breakdown: [
      { token: 'I', role: 'Özne (Subject)', tag: 'S' },
      { token: 'never', role: 'Olumsuz Sıklık Zarfı (Frequency)', tag: 'Adv' },
      { token: 'watch', role: 'Fiil (Verb)', tag: 'V' },
      { token: 'television', role: 'Nesne (Object)', tag: 'O' },
      { token: 'at night', role: 'Zaman 1 (Time of day)', tag: 'T1' },
      { token: 'on weekdays', role: 'Zaman 2 (Broader period)', tag: 'T2' }
    ],
    explanation_tr: '"Never" sıklık zarfı fiilden (watch) önce gelir. Birden fazla zaman zarfı olduğunda dar zaman (at night) geniş zamandan (on weekdays) önce söylenir.'
  },
  {
    id: 'syn-9',
    cefr_level: 'A2',
    category: 'adverb_placement',
    category_name_tr: 'Zarflar & SVOMPT',
    turkish_prompt: 'Öğretmenimiz derste her zaman sabırla soruları cevaplar.',
    tokens: ['Our teacher', 'always', 'answers', 'the questions', 'patiently', 'in class'],
    correct_sentence: 'Our teacher always answers the questions patiently in class.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'Our teacher', role: 'Özne (Subject)', tag: 'S' },
      { token: 'always', role: 'Sıklık Zarfı (Frequency)', tag: 'Adv' },
      { token: 'answers', role: 'Fiil (Verb)', tag: 'V' },
      { token: 'the questions', role: 'Nesne (Object)', tag: 'O' },
      { token: 'patiently', role: 'Durum Zarfı (Manner - Nasıl?)', tag: 'M' },
      { token: 'in class', role: 'Yer Zarfı (Place - Nerede?)', tag: 'P' }
    ],
    explanation_tr: 'Sıralama: Özne + Sıklık Zarfı + Fiil + Nesne + Nasıl (patiently) + Nerede (in class).'
  },

  // --- A1-A2: Soru & Olumsuz Yapılar ---
  {
    id: 'syn-10',
    cefr_level: 'A1',
    category: 'questions_negatives',
    category_name_tr: 'Soru & Olumsuz Yapılar',
    turkish_prompt: 'Genellikle hafta sonları kaçta uyanırsın?',
    tokens: ['What time', 'do you', 'usually', 'wake up', 'at weekends'],
    correct_sentence: 'What time do you usually wake up at weekends?',
    acceptable_alternatives: ['What time do you usually wake up on weekends?'],
    grammar_breakdown: [
      { token: 'What time', role: 'Soru Kelimesi (Question Word)', tag: 'Q' },
      { token: 'do you', role: 'Yardımcı Fiil + Özne (Aux + Subject)', tag: 'Aux+S' },
      { token: 'usually', role: 'Sıklık Zarfı (Frequency)', tag: 'Adv' },
      { token: 'wake up', role: 'Asıl Fiil (Main Verb)', tag: 'V' },
      { token: 'at weekends', role: 'Zaman Zarfı (Time)', tag: 'T' }
    ],
    explanation_tr: 'İngilizce soru formülü: Soru Sözcüğü (What time) + Yardımcı Fiil (do) + Özne (you) + Zarf (usually) + Fiil (wake up).'
  },
  {
    id: 'syn-11',
    cefr_level: 'A2',
    category: 'questions_negatives',
    category_name_tr: 'Soru & Olumsuz Yapılar',
    turkish_prompt: 'Neden soğukta dışarıda bekliyorsunuz?',
    tokens: ['Why', 'are you', 'waiting', 'outside', 'in the cold'],
    correct_sentence: 'Why are you waiting outside in the cold?',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'Why', role: 'Soru Kelimesi (Question Word)', tag: 'Q' },
      { token: 'are you', role: 'Yardımcı Fiil + Özne (Aux + Subject)', tag: 'Aux+S' },
      { token: 'waiting', role: 'Şimdiki Zaman Fiili (Verb-ing)', tag: 'V' },
      { token: 'outside', role: 'Yer (Place)', tag: 'P' },
      { token: 'in the cold', role: 'Durum / Koşul (Condition)', tag: 'M' }
    ],
    explanation_tr: 'Şimdiki zaman soru kalıbında "are" öznenin (you) önüne geçer: "Why are you waiting...".'
  },
  {
    id: 'syn-12',
    cefr_level: 'A2',
    category: 'questions_negatives',
    category_name_tr: 'Soru & Olumsuz Yapılar',
    turkish_prompt: 'O harika ceketi geçen hafta nereden aldın?',
    tokens: ['Where', 'did you', 'buy', 'that fantastic jacket', 'last week'],
    correct_sentence: 'Where did you buy that fantastic jacket last week?',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'Where', role: 'Soru Kelimesi (Question Word)', tag: 'Q' },
      { token: 'did you', role: 'Geçmiş Yardımcı Fiil + Özne', tag: 'Aux+S' },
      { token: 'buy', role: 'Yalın Fiil (Base Verb - V1)', tag: 'V' },
      { token: 'that fantastic jacket', role: 'Nesne (Object)', tag: 'O' },
      { token: 'last week', role: 'Zaman (Time)', tag: 'T' }
    ],
    explanation_tr: 'Geçmiş zaman sorusunda "did" kullanıldığı için asıl fiil yalın kalır (bought değil, buy).'
  },
  {
    id: 'syn-13',
    cefr_level: 'A2',
    category: 'questions_negatives',
    category_name_tr: 'Soru & Olumsuz Yapılar',
    turkish_prompt: 'Müdür bugün toplantıda raporu dikkatle incelemedi.',
    tokens: ['The manager', 'did not examine', 'the report', 'carefully', 'in the meeting today'],
    correct_sentence: 'The manager did not examine the report carefully in the meeting today.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'The manager', role: 'Özne (Subject)', tag: 'S' },
      { token: 'did not examine', role: 'Olumsuz Fiil (Neg Verb)', tag: 'V' },
      { token: 'the report', role: 'Nesne (Object)', tag: 'O' },
      { token: 'carefully', role: 'Tarz Zarfı (Manner)', tag: 'M' },
      { token: 'in the meeting today', role: 'Yer ve Zaman (Place + Time)', tag: 'P+T' }
    ],
    explanation_tr: 'Olumsuz cümlelerde: Özne + did not + Fiil (yalın) + Nesne + Zarf (Manner-Place-Time).'
  },

  // --- A2-B1: Dolaylı Sorular (Indirect Questions) ---
  {
    id: 'syn-14',
    cefr_level: 'A2',
    category: 'indirect_questions',
    category_name_tr: 'Dolaylı Sorular (Indirect)',
    turkish_prompt: 'Bana tren istasyonunun nerede olduğunu söyleyebilir misiniz?',
    tokens: ['Could you tell me', 'where', 'the train station', 'is'],
    correct_sentence: 'Could you tell me where the train station is?',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'Could you tell me', role: 'Nezaket Kalıbı (Polite Intro Clause)', tag: 'Intro' },
      { token: 'where', role: 'Soru Bağlacı (Wh- Connector)', tag: 'Conj' },
      { token: 'the train station', role: 'Yan Cümlenin Öznesi (Subject)', tag: 'S' },
      { token: 'is', role: 'Yan Cümlenin Fiili (Verb - Sonda!)', tag: 'V' }
    ],
    explanation_tr: 'EN ÇOK YAPILAN HATA: "Where is the station?" doğrudan sorudur. Ancak bir cümlenin içine girdiğinde ("Could you tell me...") soru sırası kaybolur ve düz cümle sırasına (özne + fiil) döner: "...where the station is".'
  },
  {
    id: 'syn-15',
    cefr_level: 'B1',
    category: 'indirect_questions',
    category_name_tr: 'Dolaylı Sorular (Indirect)',
    turkish_prompt: 'Toplantının ne zaman başlayacağını merak ediyorum.',
    tokens: ['I wonder', 'what time', 'the meeting', 'will start'],
    correct_sentence: 'I wonder what time the meeting will start.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'I wonder', role: 'Ana Cümle (Main Clause)', tag: 'Main' },
      { token: 'what time', role: 'Soru İfadesi (Wh- connector)', tag: 'Conj' },
      { token: 'the meeting', role: 'Özne (Subject)', tag: 'S' },
      { token: 'will start', role: 'Fiil (Verb)', tag: 'V' }
    ],
    explanation_tr: 'Dolaylı sorularda "will" öznenin önüne geçmez. Doğru sıralama: "what time + the meeting (özne) + will start (fiil)".'
  },
  {
    id: 'syn-16',
    cefr_level: 'B1',
    category: 'indirect_questions',
    category_name_tr: 'Dolaylı Sorular (Indirect)',
    turkish_prompt: 'Onun bu sabah neden geç kaldığını biliyor musun?',
    tokens: ['Do you know', 'why', 'he was', 'late', 'this morning'],
    correct_sentence: 'Do you know why he was late this morning?',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'Do you know', role: 'Giriş Sorusu (Intro)', tag: 'Intro' },
      { token: 'why', role: 'Soru Kelimesi (Connector)', tag: 'Conj' },
      { token: 'he was', role: 'Özne + Yardımcı Fiil (Subject + Verb)', tag: 'S+V' },
      { token: 'late', role: 'Sıfat (Complement)', tag: 'Adj' },
      { token: 'this morning', role: 'Zaman (Time)', tag: 'T' }
    ],
    explanation_tr: '"Do you know why was he late?" YANLIŞTIR. Dolaylı sorularda fiil öznenin arkasında kalır: "why he was late".'
  },
  {
    id: 'syn-17',
    cefr_level: 'B1',
    category: 'indirect_questions',
    category_name_tr: 'Dolaylı Sorular (Indirect)',
    turkish_prompt: 'Bu projenin ne kadara mal olacağını bilmek istiyorum.',
    tokens: ['I would like to know', 'how much', 'this project', 'will cost'],
    correct_sentence: 'I would like to know how much this project will cost.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'I would like to know', role: 'Ana Cümle (Polite Request)', tag: 'Intro' },
      { token: 'how much', role: 'Miktar İfadesi', tag: 'Conj' },
      { token: 'this project', role: 'Yan Cümle Öznesi', tag: 'S' },
      { token: 'will cost', role: 'Yan Cümle Fiili', tag: 'V' }
    ],
    explanation_tr: 'Doğrudan soru "How much will this project cost?" iken, dolaylı anlatımda "...how much this project will cost" şekline dönüşür.'
  },

  // --- B1: Yan Cümleler & Bağlaçlar (Relative Clauses & Connectors) ---
  {
    id: 'syn-18',
    cefr_level: 'B1',
    category: 'connectors_clauses',
    category_name_tr: 'Yan Cümleler & Bağlaçlar',
    turkish_prompt: 'Yarışmayı kazanan öğrenci her gün çok sıkı çalıştı.',
    tokens: ['The student', 'who won the competition', 'studied', 'very hard', 'every day'],
    correct_sentence: 'The student who won the competition studied very hard every day.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'The student', role: 'Ana Cümle Öznesi (Subject)', tag: 'S' },
      { token: 'who won the competition', role: 'Sıfat Cümlesi (Relative Clause - Özneyi niteler)', tag: 'Rel' },
      { token: 'studied', role: 'Ana Fiil (Main Verb)', tag: 'V' },
      { token: 'very hard', role: 'Durum Zarfı (Manner)', tag: 'M' },
      { token: 'every day', role: 'Zaman Zarfı (Time)', tag: 'T' }
    ],
    explanation_tr: 'Sıfat cümlecikleri (relative clauses) niteledikleri ismin (The student) hemen ardına yerleştirilir. Ana cümlenin fiili (studied) ise bu tamlamadan sonra gelir.'
  },
  {
    id: 'syn-19',
    cefr_level: 'B1',
    category: 'connectors_clauses',
    category_name_tr: 'Yan Cümleler & Bağlaçlar',
    turkish_prompt: 'Şiddetli yağmur yağmasına rağmen konserin tadını çıkardık.',
    tokens: ['Although', 'it was raining heavily', 'we enjoyed', 'the concert'],
    correct_sentence: 'Although it was raining heavily, we enjoyed the concert.',
    acceptable_alternatives: ['We enjoyed the concert although it was raining heavily.'],
    grammar_breakdown: [
      { token: 'Although', role: 'Zıtlık Bağlacı (Concession Conjunction)', tag: 'Conj' },
      { token: 'it was raining heavily', role: 'Bağımlı Yan Cümle (Dependent Clause)', tag: 'Clause1' },
      { token: 'we enjoyed', role: 'Ana Cümle (Subject + Verb)', tag: 'S+V' },
      { token: 'the concert', role: 'Nesne (Object)', tag: 'O' }
    ],
    explanation_tr: '"Although" bağlacı tam bir cümle alır (özne + fiil). Cümle başında kullanılırsa iki cümle arasına virgül konur.'
  },
  {
    id: 'syn-20',
    cefr_level: 'B1',
    category: 'connectors_clauses',
    category_name_tr: 'Yan Cümleler & Bağlaçlar',
    turkish_prompt: 'Yeni bir dizüstü bilgisayar alabilsin diye para biriktirdi.',
    tokens: ['She saved money', 'so that', 'she could buy', 'a new laptop'],
    correct_sentence: 'She saved money so that she could buy a new laptop.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'She saved money', role: 'Ana Cümle (Main Clause)', tag: 'Main' },
      { token: 'so that', role: 'Amaç Bağlacı (-sın diye / In order that)', tag: 'Conj' },
      { token: 'she could buy', role: 'Modal Cümlesi (Subject + Modal + Verb)', tag: 'Sub+Mod' },
      { token: 'a new laptop', role: 'Nesne (Object)', tag: 'O' }
    ],
    explanation_tr: '"so that" amaç bildirir ve ardından genellikle "can/could/may/might" kipleriyle tam cümle gelir.'
  },
  {
    id: 'syn-21',
    cefr_level: 'B1',
    category: 'connectors_clauses',
    category_name_tr: 'Yan Cümleler & Bağlaçlar',
    turkish_prompt: 'Otele varır varmaz seni arayacağım.',
    tokens: ['I will call you', 'as soon as', 'I arrive', 'at the hotel'],
    correct_sentence: 'I will call you as soon as I arrive at the hotel.',
    acceptable_alternatives: ['As soon as I arrive at the hotel I will call you.'],
    grammar_breakdown: [
      { token: 'I will call you', role: 'Ana Cümle (Gelecek Zaman)', tag: 'Main' },
      { token: 'as soon as', role: 'Zaman Bağlacı (-er -mez)', tag: 'Conj' },
      { token: 'I arrive', role: 'Geniş Zaman Yan Cümle (Present Simple)', tag: 'S+V' },
      { token: 'at the hotel', role: 'Yer Tamlayıcısı (Place)', tag: 'P' }
    ],
    explanation_tr: 'ÖNEMLİ ZAMAN KURALI: "as soon as", "when", "after" gibi zaman bağlaçlarının bulunduğu yan cümlede "will" kullanılmaz; gelecek anlamı için Geniş Zaman (arrive) kullanılır.'
  },

  // --- B2: Devrik Cümleler & Vurgulu Yapılar (Inversion & Emphasis) ---
  {
    id: 'syn-22',
    cefr_level: 'B2',
    category: 'inversion_emphasis',
    category_name_tr: 'Devrik Cümleler (Inversion)',
    turkish_prompt: 'Kariyerim boyunca böylesine ilham verici bir konuşmayı nadiren duymuşumdur.',
    tokens: ['Seldom', 'have I heard', 'such an inspiring speech', 'in my career'],
    correct_sentence: 'Seldom have I heard such an inspiring speech in my career.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'Seldom', role: 'Kısıtlayıcı Olumsuz Zarf (Negative Adverbial)', tag: 'NegAdv' },
      { token: 'have I heard', role: 'Devrik Fiil + Özne (Inverted Aux + Subject)', tag: 'Inv' },
      { token: 'such an inspiring speech', role: 'Vurgulu Nesne (Emphatic Object)', tag: 'O' },
      { token: 'in my career', role: 'Zaman / Kapsam Tamlayıcısı', tag: 'Scope' }
    ],
    explanation_tr: 'İNGİLİZCE İLERİ DÜZEY DEVRİK YAPI: "Seldom, Rarely, Never, Scarcely" gibi olumsuz/kısıtlayıcı zarflar cümle başına geldiğinde, yardımcı fiil öznenin önüne geçer: "Seldom have I heard..." (I have seldom heard yerine).'
  },
  {
    id: 'syn-23',
    cefr_level: 'B2',
    category: 'inversion_emphasis',
    category_name_tr: 'Devrik Cümleler (Inversion)',
    turkish_prompt: 'Genç sporcularda böylesi bir adanmışlığı çok nadir görürüz.',
    tokens: ['Rarely', 'do we see', 'such dedication', 'in young athletes'],
    correct_sentence: 'Rarely do we see such dedication in young athletes.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'Rarely', role: 'Kısıtlayıcı Zarf', tag: 'NegAdv' },
      { token: 'do we see', role: 'Devrik Yardımcı Fiil + Özne + Fiil', tag: 'Inv' },
      { token: 'such dedication', role: 'Nesne', tag: 'O' },
      { token: 'in young athletes', role: 'Yer / Nitelik', tag: 'Prep' }
    ],
    explanation_tr: 'Geniş zamanda inversion yapılırken "do/does" kullanılır: "Rarely do we see...".'
  },
  {
    id: 'syn-24',
    cefr_level: 'B2',
    category: 'inversion_emphasis',
    category_name_tr: 'Devrik Cümleler (Inversion)',
    turkish_prompt: 'Hiçbir koşulda bu kapıyı açmamalısınız.',
    tokens: ['Under no circumstances', 'should you open', 'this door'],
    correct_sentence: 'Under no circumstances should you open this door.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'Under no circumstances', role: 'Güçlü Olumsuz Edat Öbeği', tag: 'NegPhrase' },
      { token: 'should you open', role: 'Devrik Modal + Özne + Fiil', tag: 'Inv' },
      { token: 'this door', role: 'Nesne', tag: 'O' }
    ],
    explanation_tr: '"Under no circumstances" gibi mutlak yasaklama veya kısıtlama ifadeleri cümle başında olduğunda modal yardımcı fiil (should) öznenin (you) önüne alınır.'
  },
  {
    id: 'syn-25',
    cefr_level: 'B2',
    category: 'inversion_emphasis',
    category_name_tr: 'Devrik Cümleler (Inversion)',
    turkish_prompt: 'Sadece sınavı geçmekle kalmadı, aynı zamanda en yüksek puanı aldı.',
    tokens: ['Not only', 'did he pass the exam', 'but he also achieved', 'the highest score'],
    correct_sentence: 'Not only did he pass the exam, but he also achieved the highest score.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'Not only', role: 'Vurgu Bağlacı (Cümle Başı)', tag: 'Emph' },
      { token: 'did he pass the exam', role: 'Devrik Cümle (did + he + pass)', tag: 'Inv' },
      { token: 'but he also achieved', role: 'Devam Cümlesi', tag: 'Parallel' },
      { token: 'the highest score', role: 'Nesne', tag: 'O' }
    ],
    explanation_tr: '"Not only" cümle başında yer aldığında ilk cümle mutlaka devrik kurulur ("did he pass"). İkinci cümle ise düz sırada devam eder ("but he also achieved...").'
  },
  {
    id: 'syn-26',
    cefr_level: 'B2',
    category: 'inversion_emphasis',
    category_name_tr: 'Devrik Cümleler (Inversion)',
    turkish_prompt: 'Eve henüz yeni varmıştık ki elektrikler kesildi.',
    tokens: ['Hardly', 'had we arrived home', 'when', 'the power went out'],
    correct_sentence: 'Hardly had we arrived home when the power went out.',
    acceptable_alternatives: [],
    grammar_breakdown: [
      { token: 'Hardly', role: 'Zaman Kısıtlayıcı Zarf (Hardly... when)', tag: 'NegAdv' },
      { token: 'had we arrived home', role: 'Devrik Past Perfect (had + we + V3)', tag: 'Inv' },
      { token: 'when', role: 'Zaman Bağlayıcısı', tag: 'Conj' },
      { token: 'the power went out', role: 'İkinci Olay (Past Simple)', tag: 'Event2' }
    ],
    explanation_tr: '"Hardly had + Özne + V3 ... when + Past Simple" kalıbı, bir eylemin hemen ardından diğerinin gerçekleştiğini vurgulamak için kullanılan prestijli bir C1/B2 akademik yapıdır.'
  }
];
