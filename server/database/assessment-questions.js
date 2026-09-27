/**
 * Diagnostic Assessment Question Bank
 * Covers 10 skills across CEFR levels A1, A2, B1, B2, C1
 */

export const assessmentQuestions = [
  // ==========================================
  // 1. GRAMMAR
  // ==========================================
  {
    skill: 'grammar', question_type: 'multiple_choice', cefr_level: 'A1', topic: 'Present Simple',
    question: 'She ___ to the gym three times a week.',
    options: JSON.stringify(['go', 'goes', 'going', 'is go']),
    correct_answer: 'goes',
    explanation: 'Third-person singular (she) takes the -s/-es suffix in the Present Simple.',
    explanation_tr: 'Geniş zamanda 3. tekil şahıs (he/she/it) fiile -s veya -es takısı alır.'
  },
  {
    skill: 'grammar', question_type: 'multiple_choice', cefr_level: 'A2', topic: 'Past Simple vs Continuous',
    question: 'While I ___ dinner, the electricity suddenly went out.',
    options: JSON.stringify(['cooked', 'was cooking', 'have cooked', 'am cooking']),
    correct_answer: 'was cooking',
    explanation: 'Past Continuous expresses an ongoing background action interrupted by a shorter action in Past Simple.',
    explanation_tr: 'Geçmişte devam eden bir eylem sırasında başka bir olay gerçekleştiğinde devam eden eylem için Past Continuous kullanılır.'
  },
  {
    skill: 'grammar', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'Present Perfect',
    question: 'We ___ in this city since 2018.',
    options: JSON.stringify(['live', 'are living', 'have lived', 'lived']),
    correct_answer: 'have lived',
    explanation: 'Present Perfect is used with "since" to indicate an action that began in the past and continues into the present.',
    explanation_tr: '"Since" ile geçmişte başlayıp günümüze kadar süregelen durumlar için Present Perfect kullanılır.'
  },
  {
    skill: 'grammar', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'Conditionals (Second)',
    question: 'If I ___ more time, I would learn a musical instrument.',
    options: JSON.stringify(['have', 'had', 'would have', 'will have']),
    correct_answer: 'had',
    explanation: 'Second conditional uses "If + Past Simple, would + base verb" for hypothetical present situations.',
    explanation_tr: 'İkinci tip koşul cümlelerinde (gerçek dışı şimdiki durum) if cümlesinde Past Simple kullanılır.'
  },
  {
    skill: 'grammar', question_type: 'multiple_choice', cefr_level: 'B2', topic: 'Passive Voice & Modals',
    question: 'All reports must ___ to the manager before 5 PM today.',
    options: JSON.stringify(['submit', 'be submitted', 'have submitted', 'being submitted']),
    correct_answer: 'be submitted',
    explanation: 'Modal verbs in passive voice follow the pattern: modal + be + past participle (V3).',
    explanation_tr: 'Modal fiillerin edilgen biçimi "modal + be + V3" kuralını izler.'
  },
  {
    skill: 'grammar', question_type: 'multiple_choice', cefr_level: 'B2', topic: 'Mixed Conditionals / Inversion',
    question: 'Had I known about the road closure, I ___ a completely different route.',
    options: JSON.stringify(['would take', 'will take', 'would have taken', 'took']),
    correct_answer: 'would have taken',
    explanation: 'Inverted Third Conditional: "Had I known" replaces "If I had known", paired with "would have + V3".',
    explanation_tr: 'Devrik 3. tip koşul cümlesi ("Had I known..."), ana cümlede "would have + V3" gerektirir.'
  },

  // ==========================================
  // 2. VOCABULARY
  // ==========================================
  {
    skill: 'vocabulary', question_type: 'multiple_choice', cefr_level: 'A1', topic: 'Daily Life',
    question: 'Which word means the meal you eat in the middle of the day?',
    options: JSON.stringify(['Breakfast', 'Lunch', 'Dinner', 'Supper']),
    correct_answer: 'Lunch',
    explanation: 'Lunch is the meal eaten in the middle of the day.',
    explanation_tr: 'Öğle vakti yenen öğün "lunch"tır.'
  },
  {
    skill: 'vocabulary', question_type: 'multiple_choice', cefr_level: 'A2', topic: 'Collocations with Make/Do',
    question: 'Don\'t worry if you ___ a mistake; that\'s how we learn.',
    options: JSON.stringify(['do', 'make', 'create', 'build']),
    correct_answer: 'make',
    explanation: 'The natural English collocation is "make a mistake", never "do a mistake".',
    explanation_tr: 'İngilizcede "hata yapmak" için "make a mistake" kalıbı kullanılır; "do" kullanılmaz.'
  },
  {
    skill: 'vocabulary', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'Phrasal Verbs',
    question: 'The meeting was ___ until next Tuesday because the director was ill.',
    options: JSON.stringify(['put off', 'called off', 'turned down', 'brought up']),
    correct_answer: 'put off',
    explanation: '"Put off" means to postpone or reschedule. "Call off" means to cancel entirely.',
    explanation_tr: '"Put off" ertelemek anlamına gelir. "Call off" ise tamamen iptal etmektir.'
  },
  {
    skill: 'vocabulary', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'False Friends (L1 Turkish interference)',
    question: 'He is very understanding and caring; he is a truly ___ person.',
    options: JSON.stringify(['sympathetic', 'sympathy', 'antipathic', 'suspicious']),
    correct_answer: 'sympathetic',
    explanation: 'In English, "sympathetic" means showing compassion or understanding, whereas in Turkish "sempatik" means likable/cute.',
    explanation_tr: 'İngilizcede "sympathetic" şefkatli, anlayışlı demektir; Türkçedeki "sempatik/cana yakın" anlamında değildir (false friend).'
  },
  {
    skill: 'vocabulary', question_type: 'multiple_choice', cefr_level: 'B2', topic: 'Academic & Professional Lexis',
    question: 'The new economic reform will have far-reaching ___ for small businesses.',
    options: JSON.stringify(['implications', 'complaints', 'suspicions', 'appliances']),
    correct_answer: 'implications',
    explanation: '"Implications" refers to the possible future effects or results of an action.',
    explanation_tr: '"Implications" bir kararın veya eylemin gelecekteki olası sonuçları/etkileri anlamına gelir.'
  },

  // ==========================================
  // 3. READING COMPREHENSION
  // ==========================================
  {
    skill: 'reading', question_type: 'multiple_choice', cefr_level: 'A1', topic: 'Short Notice',
    question: 'Text: "Library hours: Monday to Friday 9:00 AM - 6:00 PM. Closed on weekends."\nQuestion: Can you visit the library on Sunday?',
    options: JSON.stringify(['Yes, at 10 AM', 'No, it is closed', 'Only in the afternoon', 'Yes, all day']),
    correct_answer: 'No, it is closed',
    explanation: 'The sign explicitly states "Closed on weekends". Sunday is a weekend day.',
    explanation_tr: 'Duyuruda hafta sonları kapalı olduğu açıkça belirtilmiştir.'
  },
  {
    skill: 'reading', question_type: 'multiple_choice', cefr_level: 'A2', topic: 'Email Details',
    question: 'Email: "Hi team, please note our weekly sync is moved from Wednesday 10 AM to Thursday 2 PM in Room B."\nQuestion: When is the new meeting time?',
    options: JSON.stringify(['Wednesday at 10 AM', 'Thursday at 2 PM', 'Thursday at 10 AM', 'Wednesday at 2 PM']),
    correct_answer: 'Thursday at 2 PM',
    explanation: 'The email specifies the rescheduled time as Thursday 2 PM.',
    explanation_tr: 'E-postada yeni toplantı saatinin Perşembe saat 14:00 olduğu yazmaktadır.'
  },
  {
    skill: 'reading', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'Inference',
    question: 'Text: "Although the flight was delayed by three hours, the cabin crew\'s warmth and constant updates kept everyone calm."\nQuestion: What was the passengers\' general mood?',
    options: JSON.stringify(['Furious and aggressive', 'Relatively calm and patient', 'Bored and asleep', 'Panicked']),
    correct_answer: 'Relatively calm and patient',
    explanation: 'The text directly notes that the crew "kept everyone calm".',
    explanation_tr: 'Metinde mürettebatın herkesi sakin tuttuğu belirtilmektedir.'
  },
  {
    skill: 'reading', question_type: 'multiple_choice', cefr_level: 'B2', topic: 'Tone and Argumentation',
    question: 'Text: "While critics hail the algorithm as a panacea for urban congestion, its reliance on historical commute patterns risks cementing existing transit inequities."\nQuestion: What is the author\'s stance on the algorithm?',
    options: JSON.stringify(['Unreserved praise', 'Cautious and critical of blind optimism', 'Complete dismissal as useless', 'Indifferent']),
    correct_answer: 'Cautious and critical of blind optimism',
    explanation: 'The author acknowledges that critics call it a panacea, but highlights serious risks ("cementing existing inequities").',
    explanation_tr: 'Yazar algoritmaya dair aşırı iyimserliği ("panacea") eleştirerek yarattığı eşitsizlik risklerine dikkat çeker.'
  },

  // ==========================================
  // 4. LISTENING & PHONIC PERCEPTION
  // ==========================================
  {
    skill: 'listening', question_type: 'multiple_choice', cefr_level: 'A1', topic: 'Numbers & Time',
    question: 'If a speaker says "Quarter past seven", what time do they mean?',
    options: JSON.stringify(['7:15', '7:45', '6:45', '7:30']),
    correct_answer: '7:15',
    explanation: '"Quarter past" means 15 minutes after the hour (7:15).',
    explanation_tr: '"Quarter past seven", 7\'yi çeyrek geçe (7:15) anlamına gelir.'
  },
  {
    skill: 'listening', question_type: 'multiple_choice', cefr_level: 'A2', topic: 'Connected Speech Reduction',
    question: 'In spoken casual English, "What do you want to do?" often sounds like:',
    options: JSON.stringify(['Whatcha wanna do?', 'What you did do?', 'Where you wanna go?', 'What did you done?']),
    correct_answer: 'Whatcha wanna do?',
    explanation: 'Natural connected speech compresses "what do you" into /wʌtʃə/ or /wʌdʒə/ and "want to" into /wɒnə/.',
    explanation_tr: 'Doğal konuşma dilinde "what do you" -> "whatcha" ve "want to" -> "wanna" şeklinde kaynaşır.'
  },
  {
    skill: 'listening', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'Intonation & Attitude',
    question: 'If someone replies "Oh, brilliant..." with a heavy falling pitch and a sigh, they most likely mean:',
    options: JSON.stringify(['They are thrilled and excited', 'They are sarcastic and actually unhappy', 'They are confused', 'They didn\'t hear you']),
    correct_answer: 'They are sarcastic and actually unhappy',
    explanation: 'A falling sigh tone on "brilliant" is a classic British sarcastic expression indicating disappointment.',
    explanation_tr: 'İç çekerek alçalan tonlamayla söylenen "Oh, brilliant..." tipik bir ironi (sarkazm) olup hayal kırıklığı belirtir.'
  },
  {
    skill: 'listening', question_type: 'multiple_choice', cefr_level: 'B2', topic: 'Nuance in Dialogue',
    question: 'Speaker A: "Are you coming to Sarah\'s retirement party?"\nSpeaker B: "Well, let\'s just say we haven\'t seen eye to eye lately."\nQuestion: What does Speaker B imply?',
    options: JSON.stringify(['They have poor eyesight', 'They have had disagreements with Sarah', 'They will arrive late', 'Sarah forgot to invite them']),
    correct_answer: 'They have had disagreements with Sarah',
    explanation: '"Not see eye to eye" is an idiom meaning not agreeing or having conflicts with someone.',
    explanation_tr: '"Not see eye to eye" kalıbı biriyle anlaşamamak, fikir ayrılığı yaşamak anlamına gelir.'
  },

  // ==========================================
  // 5. WRITING & COHESION
  // ==========================================
  {
    skill: 'writing', question_type: 'multiple_choice', cefr_level: 'A1', topic: 'Basic Capitalization & Punctuation',
    question: 'Which sentence is punctuated and capitalized correctly?',
    options: JSON.stringify([
      'i live in Istanbul with my Sister.',
      'I live in Istanbul with my sister.',
      'I live in istanbul with my sister',
      'I live In Istanbul with My Sister.'
    ]),
    correct_answer: 'I live in Istanbul with my sister.',
    explanation: 'Capitalize "I", proper nouns like "Istanbul", and end with a period. Common nouns like "sister" are lowercase.',
    explanation_tr: 'Cümle başı ve "I" zamiri, şehir isimleri büyük harfle başlar; "sister" gibi cins isimler küçük kalır.'
  },
  {
    skill: 'writing', question_type: 'multiple_choice', cefr_level: 'A2', topic: 'Connectors',
    question: 'I was very tired, ___ I still managed to finish my project on time.',
    options: JSON.stringify(['so', 'because', 'but', 'since']),
    correct_answer: 'but',
    explanation: '"But" introduces a contrasting fact to being tired.',
    explanation_tr: 'Yorgun olma durumuyla projenin bitmesi arasındaki zıtlığı "but" bağlacı ifade eder.'
  },
  {
    skill: 'writing', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'Formal Email Register',
    question: 'Which closing sentence is most appropriate for a formal job application email?',
    options: JSON.stringify([
      'Catch you later, hope you like my CV!',
      'I look forward to hearing from you at your earliest convenience.',
      'Write me back whenever you want.',
      'See ya soon, best vibes!'
    ]),
    correct_answer: 'I look forward to hearing from you at your earliest convenience.',
    explanation: 'Professional correspondence requires standard courteous formulas like "I look forward to hearing from you...".',
    explanation_tr: 'Resmi iş yazışmalarında profesyonel nezaket kalıbı "I look forward to hearing from you..." kullanılır.'
  },
  {
    skill: 'writing', question_type: 'multiple_choice', cefr_level: 'B2', topic: 'Cohesive Devices',
    question: 'The initial trial produced promising results. ___, subsequent studies failed to replicate the same outcomes.',
    options: JSON.stringify(['However', 'Furthermore', 'Consequently', 'In addition']),
    correct_answer: 'However',
    explanation: '"However" shows an unexpected contrast or limitation following a positive statement.',
    explanation_tr: 'İlk cümlenin olumlu sonucuna karşı sonraki çalışmaların başarısızlığını zıtlık belirten "However" bağlar.'
  },

  // ==========================================
  // 6. SPEAKING & FUNCTIONAL COMMUNICATION
  // ==========================================
  {
    skill: 'speaking', question_type: 'multiple_choice', cefr_level: 'A1', topic: 'Greetings & Introductions',
    question: 'When meeting someone for the first time in a polite setting, how do you respond to "How do you do?"',
    options: JSON.stringify(['I do fine, thanks.', 'How do you do?', 'I am doing homework.', 'Yes, I do.']),
    correct_answer: 'How do you do?',
    explanation: 'In formal British English, the traditional reply to "How do you do?" is also "How do you do?" or "Pleased to meet you".',
    explanation_tr: 'Resmi İngilizcede ilk tanışmada söylenen "How do you do?" kalıbına geleneksel olarak yine "How do you do?" veya "Pleased to meet you" ile yanıt verilir.'
  },
  {
    skill: 'speaking', question_type: 'multiple_choice', cefr_level: 'A2', topic: 'Polite Requests',
    question: 'What is the most polite way to ask for a glass of water in a cafe?',
    options: JSON.stringify(['Give me water now.', 'Could I have a glass of water, please?', 'I want water quickly.', 'Water is needed by me.']),
    correct_answer: 'Could I have a glass of water, please?',
    explanation: '"Could I have... please?" is standard polite English for ordering or requesting.',
    explanation_tr: 'Rica ve siparişlerde "Could I have..., please?" en doğal ve kibar yapıdır.'
  },
  {
    skill: 'speaking', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'Giving Advice',
    question: 'A friend has an intense headache before an exam. What sounds most natural?',
    options: JSON.stringify([
      'You had better get some rest and take an aspirin.',
      'You must to sleep right now without excuses.',
      'Why you not sleep?',
      'It is compulsory for you to rest.'
    ]),
    correct_answer: 'You had better get some rest and take an aspirin.',
    explanation: '"You had better..." is used for urgent, direct advice where negative consequences might follow.',
    explanation_tr: '"You had better (do sth)" yapısı acil ve önemli tavsiyeler vermek için en doğal kullanımdır.'
  },
  {
    skill: 'speaking', question_type: 'multiple_choice', cefr_level: 'B2', topic: 'Diplomatic Disagreement',
    question: 'In a professional meeting, how do you disagree diplomatically with a colleague\'s proposal?',
    options: JSON.stringify([
      'That idea is completely wrong and makes no sense.',
      'I see where you\'re coming from, but we should also consider the budgetary constraints.',
      'Shut up, my plan is superior.',
      'You are mistaken about everything.'
    ]),
    correct_answer: 'I see where you\'re coming from, but we should also consider the budgetary constraints.',
    explanation: 'Diplomatic English acknowledges the other speaker\'s perspective before introducing reservations or alternatives.',
    explanation_tr: 'Diplomatik iş İngilizcesinde önce karşı tarafın görüşü onaylanır ("I see where you\'re coming from"), ardından çekince sunulur.'
  },

  // ==========================================
  // 7. PRONUNCIATION & PHONETICS
  // ==========================================
  {
    skill: 'pronunciation', question_type: 'multiple_choice', cefr_level: 'A1', topic: 'Past -ed Endings',
    question: 'In which word is the "-ed" pronounced as an extra syllable /ɪd/ or /əd/?',
    options: JSON.stringify(['Worked', 'Played', 'Needed', 'Watched']),
    correct_answer: 'Needed',
    explanation: 'The "-ed" ending is pronounced as /ɪd/ only after verbs ending in /t/ or /d/ sounds (need -> needed).',
    explanation_tr: 'Düzenli fiillerde -ed takısı sadece /t/ ve /d/ seslerinden sonra ayrı bir hece (/ɪd/) olarak okunur (need -> needed).'
  },
  {
    skill: 'pronunciation', question_type: 'multiple_choice', cefr_level: 'A2', topic: 'Silent Letters',
    question: 'Which letter is SILENT in the word "doubt"?',
    options: JSON.stringify(['d', 'o', 'u', 'b']),
    correct_answer: 'b',
    explanation: 'The letter "b" is completely silent in "doubt" /daʊt/, just like in "debt" and "subtle".',
    explanation_tr: '"Doubt" kelimesindeki "b" harfi okunmaz (sessiz harftir: /daʊt/).'
  },
  {
    skill: 'pronunciation', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'Word Stress & Part of Speech',
    question: 'When "record" is used as a VERB ("They ___ a podcast"), where is the stress?',
    options: JSON.stringify(['On the FIRST syllable (RE-cord)', 'On the SECOND syllable (re-CORD)', 'Both syllables equally', 'Neither']),
    correct_answer: 'On the SECOND syllable (re-CORD)',
    explanation: 'Two-syllable noun/verb pairs: nouns stress the 1st syllable (a REcord), verbs stress the 2nd syllable (to reCORD).',
    explanation_tr: 'İki heceli isim/fiil çiftlerinde isimlerde vurgu ilk hecede (REcord), fiillerde ikinci hecededir (reCORD).'
  },
  {
    skill: 'pronunciation', question_type: 'multiple_choice', cefr_level: 'B2', topic: 'Vowel Length Minimal Pairs',
    question: 'Which pair of words contains contrasting short /ɪ/ vs long /iː/ vowel sounds?',
    options: JSON.stringify(['Ship and Sheep', 'Cat and Cut', 'Pen and Pan', 'Full and Fool']),
    correct_answer: 'Ship and Sheep',
    explanation: '"Ship" has the short lax vowel /ʃɪp/ while "sheep" has the long tense vowel /ʃiːp/.',
    explanation_tr: '"Ship" kısa /ɪ/ sesi, "sheep" ise uzun /iː/ sesi barındıran klasik bir minimal çift örneğidir.'
  },

  // ==========================================
  // 8. SENTENCE FORMATION & SYNTAX
  // ==========================================
  {
    skill: 'sentence_formation', question_type: 'multiple_choice', cefr_level: 'A1', topic: 'Basic Word Order (SVO)',
    question: 'Choose the sentence with the correct English word order:',
    options: JSON.stringify([
      'Always he drinks coffee in the morning.',
      'He drinks always coffee in the morning.',
      'He always drinks coffee in the morning.',
      'In the morning coffee he always drinks.'
    ]),
    correct_answer: 'He always drinks coffee in the morning.',
    explanation: 'Adverbs of frequency (always, often, rarely) go between the subject and the main verb.',
    explanation_tr: 'Sıklık zarfları (always, often vb.) özne ile asıl fiil arasına gelir.'
  },
  {
    skill: 'sentence_formation', question_type: 'multiple_choice', cefr_level: 'A2', topic: 'Indirect Questions',
    question: 'Choose the correct indirect question formulation:',
    options: JSON.stringify([
      'Could you tell me where is the station?',
      'Could you tell me where the station is?',
      'Could you tell me where does the station be?',
      'Could you tell me where is station located?'
    ]),
    correct_answer: 'Could you tell me where the station is?',
    explanation: 'In indirect questions, the clause returns to statement order: "where + subject + verb".',
    explanation_tr: 'Dolaylı sorularda ("Could you tell me..."), soru cümlesi düz cümle sırasına (özne + fiil) döner.'
  },
  {
    skill: 'sentence_formation', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'Relative Clause Placement',
    question: 'Which sentence correctly places the defining relative clause?',
    options: JSON.stringify([
      'The woman who designed our website received an award.',
      'The woman received an award who designed our website.',
      'The woman who received an award our website designed.',
      'Who designed our website the woman received an award.'
    ]),
    correct_answer: 'The woman who designed our website received an award.',
    explanation: 'A relative clause must directly follow the noun it modifies ("the woman who designed...").',
    explanation_tr: 'Sıfat cümlecikleri niteledikleri ismin hemen ardından gelmelidir.'
  },
  {
    skill: 'sentence_formation', question_type: 'multiple_choice', cefr_level: 'B2', topic: 'Inversion after Negative Adverbials',
    question: 'Seldom ___ such an inspiring speech in my entire career.',
    options: JSON.stringify([
      'I have heard',
      'have I heard',
      'I heard',
      'did I heard'
    ]),
    correct_answer: 'have I heard',
    explanation: 'Negative or restrictive adverbials at the beginning of a sentence (seldom, rarely, never) require auxiliary inversion.',
    explanation_tr: 'Cümle başına gelen kısıtlayıcı/olumsuz zarflar ("Seldom, Never") yardımcı fiilin öznenin önüne geçmesini (inversion) zorunlu kılar.'
  },

  // ==========================================
  // 9. COMPREHENSION & ENGLISH THINKING
  // ==========================================
  {
    skill: 'comprehension', question_type: 'multiple_choice', cefr_level: 'A1', topic: 'Context Clues',
    question: '"Liam took out his umbrella because dark clouds filled the sky." Why did Liam take out his umbrella?',
    options: JSON.stringify(['It was very sunny', 'He expected rain', 'He wanted to play football', 'He was going to sleep']),
    correct_answer: 'He expected rain',
    explanation: 'Dark clouds signify incoming precipitation, so taking out an umbrella indicates expecting rain.',
    explanation_tr: 'Gökyüzündeki kara bulutlar yağmur beklentisine işaret eder.'
  },
  {
    skill: 'comprehension', question_type: 'multiple_choice', cefr_level: 'A2', topic: 'Idiomatic Sense',
    question: 'If someone says "I am under the weather today", they mean:',
    options: JSON.stringify(['They are standing outside in the rain', 'They feel slightly unwell or sick', 'They love sunny days', 'They are flying in an airplane']),
    correct_answer: 'They feel slightly unwell or sick',
    explanation: '"Under the weather" is a very common idiom meaning feeling sick or indisposed.',
    explanation_tr: '"Under the weather" kendini hasta veya keyifsiz hissetmek anlamına gelen yaygın bir deyimdir.'
  },
  {
    skill: 'comprehension', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'Thinking in English vs Translating',
    question: 'In Turkish, you say "İyi ki doğdun". What is the natural, native English thought process and expression?',
    options: JSON.stringify([
      'Good that you were born',
      'Happy Birthday',
      'Nice birthday to you',
      'It is well you came into the world'
    ]),
    correct_answer: 'Happy Birthday',
    explanation: 'English does not translate the literal Turkish sentiment; natural English thinking directly maps to "Happy Birthday".',
    explanation_tr: 'Türkçedeki "İyi ki doğdun" kalıbı kelimesi kelimesine çevrilmez; İngilizce düşüncede karşılığı doğrudan "Happy Birthday"dir.'
  },
  {
    skill: 'comprehension', question_type: 'multiple_choice', cefr_level: 'B2', topic: 'Pragmatic Implicature',
    question: 'When a manager says, "You might want to review section three before tomorrow\'s client presentation," this is pragmatically:',
    options: JSON.stringify([
      'A neutral observation you can freely ignore',
      'A polite but firm directive that section three contains flaws that need fixing',
      'A compliment on section three',
      'A question about your availability'
    ]),
    correct_answer: 'A polite but firm directive that section three contains flaws that need fixing',
    explanation: 'In Anglo-American corporate communication, "You might want to..." is an understated, polite command to fix something.',
    explanation_tr: 'İngilizce iş kültüründe "You might want to..." şeklindeki yumuşatılmış ifadeler nezaketen öneri süsü verilmiş net talimatlardır.'
  },

  // ==========================================
  // 10. REAL-WORLD COMMUNICATION & FLUENCY
  // ==========================================
  {
    skill: 'communication', question_type: 'multiple_choice', cefr_level: 'A1', topic: 'Asking for Help',
    question: 'You are lost in London. What is the most natural way to stop a stranger on the street?',
    options: JSON.stringify([
      'Stop walking, human!',
      'Excuse me, could you help me?',
      'Hey, you listen to me.',
      'Where is hotel?'
    ]),
    correct_answer: 'Excuse me, could you help me?',
    explanation: '"Excuse me..." is the universally expected, polite opening to approach a stranger in English.',
    explanation_tr: 'Bir yabancının dikkatini çekip yardım istemenin en evrensel ve kibar yolu "Excuse me, could you help me?"dir.'
  },
  {
    skill: 'communication', question_type: 'multiple_choice', cefr_level: 'A2', topic: 'Clarification Strategy',
    question: 'If you did not understand what someone just said, which phrase asks them to repeat naturally?',
    options: JSON.stringify([
      'What? Speak louder!',
      'Sorry, could you say that again, please?',
      'You are talking nonsense.',
      'Repeat your words immediately.'
    ]),
    correct_answer: 'Sorry, could you say that again, please?',
    explanation: '"Sorry, could you say that again, please?" is courteous and effective for conversational repair.',
    explanation_tr: 'Anlaşılmayan bir şeyi tekrar ettirmenin en doğal iletişim stratejisi "Sorry, could you say that again, please?"dir.'
  },
  {
    skill: 'communication', question_type: 'multiple_choice', cefr_level: 'B1', topic: 'Polite Interruption',
    question: 'You need to ask a brief question during a team discussion. What is the best way to interject?',
    options: JSON.stringify([
      'Stop speaking now, my turn.',
      'Sorry to interrupt, but may I quickly clarify something?',
      'Listen to me instead.',
      'That\'s enough from you.'
    ]),
    correct_answer: 'Sorry to interrupt, but may I quickly clarify something?',
    explanation: '"Sorry to interrupt, but may I quickly..." allows polite turn-taking without sounding aggressive.',
    explanation_tr: 'Bir konuşmayı kibarca bölüp araya girmek için "Sorry to interrupt, but may I quickly..." kullanılır.'
  },
  {
    skill: 'communication', question_type: 'multiple_choice', cefr_level: 'B2', topic: 'Managing Hesitations & Fluency',
    question: 'When asked a complex question in an interview and you need 5 seconds to think, which filler maintains fluent communication best?',
    options: JSON.stringify([
      'Dead silence for 10 seconds staring at the floor',
      "That's a really thoughtful question. Let me reflect on that for a second...",
      "Wait! Don't talk to me!",
      "I don't know anything."
    ]),
    correct_answer: "That's a really thoughtful question. Let me reflect on that for a second...",
    explanation: 'Native speakers use conversational bridge phrases to buy cognitive processing time without breaking conversational flow.',
    explanation_tr: 'Akıcılığı korumak ve düşünme süresi kazanmak için "That\'s a great question, let me reflect on that..." gibi köprü ifadeler kullanılır.'
  }
];
