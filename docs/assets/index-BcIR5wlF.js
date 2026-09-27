(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const f={grammar_topics:[{id:1,name:"Present Simple",slug:"present-simple",category:"tenses",cefr_level:"A1",description:"Actions that happen regularly, facts, and routines.",explanation_en:"We use the Present Simple for habits, routines, general truths, and permanent situations. Add -s/-es for he/she/it.",explanation_tr:"Geniş zaman. Alışkanlıklar, rutin eylemler, genel doğrular ve kalıcı durumlar için kullanılır. He/she/it için fiile -s/-es eklenir.",examples:`[{"sentence":"I work every day.","translation":"Her gün çalışırım."},{"sentence":"She plays tennis on Sundays.","translation":"Pazar günleri tenis oynar."},{"sentence":"Water boils at 100 degrees.","translation":"Su 100 derecede kaynar."},{"sentence":"They don't like coffee.","translation":"Kahve sevmezler."},{"sentence":"Does he speak English?","translation":"İngilizce konuşur mu?"}]`,rules:'["Affirmative: Subject + V1 (he/she/it + V1+s/es)","Negative: Subject + do/does + not + V1","Question: Do/Does + Subject + V1?","Time expressions: always, usually, often, sometimes, rarely, never, every day/week/month","Third person singular: add -s (works), -es (watches, goes), -ies (studies)"]',common_mistakes:`[{"wrong":"He work every day.","correct":"He works every day.","explanation":"He/she/it requires -s on the verb."},{"wrong":"She don't like it.","correct":"She doesn't like it.","explanation":"Use \\"doesn't\\" for he/she/it negatives."},{"wrong":"Does she works here?","correct":"Does she work here?","explanation":"After does/doesn't, use the base form."},{"wrong":"I am go to school.","correct":"I go to school.","explanation":"Don't use \\"am\\" with Present Simple verbs."}]`,order_index:1,prerequisite_topics:"[]"},{id:2,name:"Present Continuous",slug:"present-continuous",category:"tenses",cefr_level:"A1",description:"Actions happening right now or temporary actions.",explanation_en:"We use the Present Continuous for actions happening now, temporary situations, and future arrangements. Form: am/is/are + verb-ing.",explanation_tr:"Şimdiki zaman. Şu anda olan eylemler, geçici durumlar ve gelecek planları için kullanılır. Yapı: am/is/are + fiil-ing.",examples:'[{"sentence":"I am reading a book right now.","translation":"Şu anda bir kitap okuyorum."},{"sentence":"She is working from home this week.","translation":"Bu hafta evden çalışıyor."},{"sentence":"They are not watching TV.","translation":"Televizyon izlemiyorlar."},{"sentence":"Are you listening to me?","translation":"Beni dinliyor musun?"},{"sentence":"We are meeting them tomorrow.","translation":"Yarın onlarla buluşuyoruz."}]',rules:'["Affirmative: Subject + am/is/are + V-ing","Negative: Subject + am/is/are + not + V-ing","Question: Am/Is/Are + Subject + V-ing?","Time expressions: now, right now, at the moment, currently, today, this week","Spelling: drop -e (make→making), double consonant (run→running), -ie→ying (lie→lying)"]',common_mistakes:'[{"wrong":"I reading a book.","correct":"I am reading a book.","explanation":"You need am/is/are before the -ing verb."},{"wrong":"She is work now.","correct":"She is working now.","explanation":"Add -ing to the main verb."},{"wrong":"I am knowing the answer.","correct":"I know the answer.","explanation":"Stative verbs (know, like, want) are usually not used in continuous."}]',order_index:2,prerequisite_topics:'["present-simple"]'},{id:3,name:"Past Simple",slug:"past-simple",category:"tenses",cefr_level:"A2",description:"Completed actions in the past.",explanation_en:"We use Past Simple for finished actions at a specific time in the past. Regular verbs add -ed. Irregular verbs have special forms.",explanation_tr:"Geçmiş zaman. Geçmişte belirli bir zamanda tamamlanmış eylemler için kullanılır. Düzenli fiillere -ed eklenir. Düzensiz fiillerin özel halleri vardır.",examples:`[{"sentence":"I visited London last year.","translation":"Geçen yıl Londra'yı ziyaret ettim."},{"sentence":"She went to the store yesterday.","translation":"Dün mağazaya gitti."},{"sentence":"They didn't come to the party.","translation":"Partiye gelmediler."},{"sentence":"Did you see the movie?","translation":"Filmi gördün mü?"},{"sentence":"He bought a new car.","translation":"Yeni bir araba aldı."}]`,rules:'["Affirmative: Subject + V2 (regular: +ed, irregular: special form)","Negative: Subject + did + not + V1","Question: Did + Subject + V1?","Time expressions: yesterday, last week/month/year, ago, in 2020, when I was young","Regular -ed: worked, played, studied, stopped"]',common_mistakes:`[{"wrong":"I goed to school.","correct":"I went to school.","explanation":"\\"Go\\" is irregular. Past form is \\"went\\"."},{"wrong":"Did you went there?","correct":"Did you go there?","explanation":"After did/didn't, use base form (V1)."},{"wrong":"She didn't went.","correct":"She didn't go.","explanation":"After didn't, always use base form."}]`,order_index:3,prerequisite_topics:'["present-simple"]'},{id:4,name:"Past Continuous",slug:"past-continuous",category:"tenses",cefr_level:"A2",description:"Actions in progress at a specific time in the past.",explanation_en:"We use Past Continuous for actions that were in progress at a specific moment in the past, or for background actions when something else happened.",explanation_tr:"Geçmişte devam eden zaman. Geçmişte belirli bir anda devam eden eylemler veya başka bir olay olduğunda arka planda olan eylemler için kullanılır.",examples:`[{"sentence":"I was reading when the phone rang.","translation":"Telefon çaldığında kitap okuyordum."},{"sentence":"They were playing football at 3 PM.","translation":"Saat 3'te futbol oynuyorlardı."},{"sentence":"She wasn't sleeping when I called.","translation":"Aradığımda uyumuyordu."},{"sentence":"Were you working yesterday evening?","translation":"Dün akşam çalışıyor muydun?"}]`,rules:'["Affirmative: Subject + was/were + V-ing","Negative: Subject + was/were + not + V-ing","Question: Was/Were + Subject + V-ing?","Often used with Past Simple: \\"While I was walking, I saw a friend.\\"","Time expressions: while, when, at that time, at 3 PM yesterday"]',common_mistakes:'[{"wrong":"I was watch TV.","correct":"I was watching TV.","explanation":"Use V-ing after was/were."},{"wrong":"While I studied, the phone rang.","correct":"While I was studying, the phone rang.","explanation":"Use Past Continuous for the ongoing action, Past Simple for the interruption."}]',order_index:4,prerequisite_topics:'["past-simple", "present-continuous"]'},{id:5,name:"Present Perfect",slug:"present-perfect",category:"tenses",cefr_level:"B1",description:"Past actions connected to the present, experiences, and recent events.",explanation_en:"We use Present Perfect for experiences, recent actions with present results, and actions from a period that hasn't finished. Form: have/has + past participle (V3).",explanation_tr:"Geçmişte başlayıp etkisi hâlâ devam eden eylemler, deneyimler ve yakın zamandaki olaylar için kullanılır. Yapı: have/has + geçmiş ortaç (V3). Türkçede doğrudan karşılığı yoktur.",examples:`[{"sentence":"I have visited Paris three times.","translation":"Paris'i üç kez ziyaret ettim. (Deneyim)"},{"sentence":"She has lost her keys.","translation":"Anahtarlarını kaybetti. (Şu an anahtarları yok)"},{"sentence":"Have you ever eaten sushi?","translation":"Hiç suşi yedin mi?"},{"sentence":"They haven't finished yet.","translation":"Henüz bitirmediler."},{"sentence":"I have lived here since 2010.","translation":"2010'dan beri burada yaşıyorum."}]`,rules:`["Affirmative: Subject + have/has + V3 (past participle)","Negative: Subject + have/has + not + V3","Question: Have/Has + Subject + V3?","Key words: ever, never, already, yet, just, since, for, recently, so far","Use \\"since\\" for a point in time (since Monday), \\"for\\" for a duration (for two years)","Don't use with specific past times (yesterday, last week, in 2019) — use Past Simple instead"]`,common_mistakes:`[{"wrong":"I have went there.","correct":"I have gone there.","explanation":"Use the past participle (V3), not the past simple (V2). go→went→gone"},{"wrong":"I have visited Paris yesterday.","correct":"I visited Paris yesterday.","explanation":"Don't use Present Perfect with specific past times."},{"wrong":"She has lose her keys.","correct":"She has lost her keys.","explanation":"Use the past participle: lose→lost→lost"},{"wrong":"I live here since 2010.","correct":"I have lived here since 2010.","explanation":"Use Present Perfect with \\"since\\" and \\"for\\" for continuing actions."}]`,order_index:5,prerequisite_topics:'["past-simple"]'},{id:6,name:"Present Perfect Continuous",slug:"present-perfect-continuous",category:"tenses",cefr_level:"B1",description:"Actions that started in the past and are still continuing, emphasizing duration.",explanation_en:"We use Present Perfect Continuous to emphasize the duration of an action that started in the past and continues now, or has recently stopped with visible results.",explanation_tr:"Geçmişte başlayıp hâlâ devam eden eylemin süresini vurgular. Yapı: have/has + been + V-ing. Eylemin ne kadar süredir devam ettiğini anlatır.",examples:`[{"sentence":"I have been studying for three hours.","translation":"Üç saattir ders çalışıyorum."},{"sentence":"It has been raining all day.","translation":"Bütün gün yağmur yağıyor."},{"sentence":"She has been working here since January.","translation":"Ocak'tan beri burada çalışıyor."},{"sentence":"How long have you been waiting?","translation":"Ne kadar süredir bekliyorsun?"}]`,rules:'["Affirmative: Subject + have/has + been + V-ing","Negative: Subject + have/has + not + been + V-ing","Question: How long + have/has + Subject + been + V-ing?","Emphasizes DURATION, while Present Perfect emphasizes RESULT","Compare: \\"I have read the book.\\" (finished) vs \\"I have been reading the book.\\" (still reading or just stopped)"]',common_mistakes:`[{"wrong":"I have been know him for years.","correct":"I have known him for years.","explanation":"Stative verbs (know, like, love) don't use continuous form."},{"wrong":"She has been working here since three months.","correct":"She has been working here for three months.","explanation":"Use \\"for\\" with durations, \\"since\\" with points in time."}]`,order_index:6,prerequisite_topics:'["present-perfect", "present-continuous"]'},{id:7,name:"Past Perfect",slug:"past-perfect",category:"tenses",cefr_level:"B1",description:"An action that happened before another action in the past.",explanation_en:"We use Past Perfect to show that one action happened BEFORE another action in the past. Form: had + past participle (V3).",explanation_tr:'Geçmişteki bir eylemden önce tamamlanmış olan bir eylemi anlatır. "Geçmişin geçmişi" olarak düşünülebilir. Yapı: had + V3.',examples:'[{"sentence":"I had already eaten when she arrived.","translation":"O geldiğinde ben çoktan yemiştim."},{"sentence":"They had left before the rain started.","translation":"Yağmur başlamadan önce gitmişlerdi."},{"sentence":"She realized she had forgotten her wallet.","translation":"Cüzdanını unuttuğunu fark etti."}]',rules:'["Affirmative: Subject + had + V3","Negative: Subject + had + not + V3","Question: Had + Subject + V3?","Key words: before, after, already, when, by the time, until","The earlier action uses Past Perfect, the later action uses Past Simple"]',common_mistakes:'[{"wrong":"When I arrived, she left.","correct":"When I arrived, she had already left.","explanation":"Use Past Perfect for the action that happened first."},{"wrong":"I had went to school.","correct":"I had gone to school.","explanation":"Use V3 (past participle) after had."}]',order_index:7,prerequisite_topics:'["past-simple", "present-perfect"]'},{id:8,name:"Future Forms",slug:"future-forms",category:"tenses",cefr_level:"A2",description:"Different ways to talk about the future: will, going to, Present Continuous.",explanation_en:'English has multiple ways to talk about the future: "will" for predictions/decisions, "going to" for plans/intentions, Present Continuous for arrangements.',explanation_tr:'İngilizcede gelecek zaman için birden fazla yapı kullanılır: "will" anlık kararlar ve tahminler için, "going to" planlar ve niyetler için, Present Continuous düzenlenmiş planlar için.',examples:`[{"sentence":"I will help you.","translation":"Sana yardım edeceğim. (Anlık karar)"},{"sentence":"I'm going to study medicine.","translation":"Tıp okuyacağım. (Önceden planlanmış)"},{"sentence":"We are meeting them at 7.","translation":"Onlarla 7'de buluşuyoruz. (Düzenlenmiş)"},{"sentence":"It will probably rain tomorrow.","translation":"Yarın muhtemelen yağmur yağacak. (Tahmin)"},{"sentence":"Look at the clouds! It's going to rain.","translation":"Bulutlara bak! Yağmur yağacak. (Kanıt var)"}]`,rules:`["\\"will\\" + V1: spontaneous decisions, promises, predictions (without evidence)","\\"be going to\\" + V1: plans made before, intentions, predictions (with evidence)","Present Continuous: fixed arrangements with other people","\\"will\\" is often used in offers: \\"I'll carry that for you.\\"","\\"going to\\" is often used for intentions: \\"I'm going to learn English.\\""]`,common_mistakes:`[{"wrong":"I will to go there.","correct":"I will go there.","explanation":"Don't use \\"to\\" after \\"will\\"."},{"wrong":"I go to London next week.","correct":"I'm going to London next week.","explanation":"Use a future form, not Present Simple, for future plans."}]`,order_index:8,prerequisite_topics:'["present-simple", "present-continuous"]'},{id:9,name:"Modal Verbs",slug:"modal-verbs",category:"modals",cefr_level:"A2",description:"Can, could, should, must, may, might, would — expressing ability, possibility, permission, obligation.",explanation_en:"Modal verbs modify the meaning of the main verb to express ability, possibility, permission, obligation, advice, etc. They don't change form.",explanation_tr:"Yardımcı fiiller ana fiilin anlamını değiştirir: yetenek, olasılık, izin, zorunluluk, tavsiye vb. ifade eder. Çekimlenmezler.",examples:'[{"sentence":"I can swim.","translation":"Yüzebilirim. (Yetenek)"},{"sentence":"You should see a doctor.","translation":"Bir doktora görünmelisin. (Tavsiye)"},{"sentence":"You must wear a seatbelt.","translation":"Emniyet kemeri takmalısın. (Zorunluluk)"},{"sentence":"It might rain today.","translation":"Bugün yağmur yağabilir. (Olasılık)"},{"sentence":"Could you help me?","translation":"Bana yardım edebilir misiniz? (Rica)"}]',rules:'["Modal + base verb (V1): She can speak French.","No -s for third person: He can (NOT cans)","can = ability/permission, could = past ability/polite requests","should = advice, must = obligation/strong probability","may/might = possibility, would = hypothetical/polite requests"]',common_mistakes:`[{"wrong":"He cans swim.","correct":"He can swim.","explanation":"Modals don't take -s."},{"wrong":"I must to go.","correct":"I must go.","explanation":"Don't use \\"to\\" after modals."},{"wrong":"She can to drive.","correct":"She can drive.","explanation":"After modals, use the base form directly."}]`,order_index:9,prerequisite_topics:'["present-simple"]'},{id:10,name:"Conditionals",slug:"conditionals",category:"conditionals",cefr_level:"B1",description:"If-clauses: Zero, First, Second, and Third conditionals.",explanation_en:"Conditionals express hypothetical situations and their results. Each type uses different tenses depending on how real or likely the situation is.",explanation_tr:"Koşul cümleleri varsayımsal durumları ve sonuçlarını ifade eder. Her tür, durumun ne kadar gerçek veya olası olduğuna göre farklı zamanlar kullanır.",examples:'[{"sentence":"If you heat water, it boils.","translation":"Suyu ısıtırsan kaynar. (Zero — genel doğru)"},{"sentence":"If it rains, I will stay home.","translation":"Yağmur yağarsa evde kalacağım. (First — olası)"},{"sentence":"If I had money, I would travel.","translation":"Param olsa seyahat ederdim. (Second — hayal)"},{"sentence":"If I had studied, I would have passed.","translation":"Çalışsaydım geçerdim. (Third — geçmişte olmadı)"}]',rules:`["Zero: If + Present Simple, Present Simple (facts)","First: If + Present Simple, will + V1 (real possibility)","Second: If + Past Simple, would + V1 (unreal present)","Third: If + Past Perfect, would + have + V3 (unreal past)","Don't use \\"will\\" in the if-clause for First Conditional"]`,common_mistakes:`[{"wrong":"If I will see him, I will tell him.","correct":"If I see him, I will tell him.","explanation":"Don't use \\"will\\" in the if-clause."},{"wrong":"If I would have money, I would travel.","correct":"If I had money, I would travel.","explanation":"Use Past Simple in the if-clause for Second Conditional."}]`,order_index:10,prerequisite_topics:'["present-simple", "past-simple", "future-forms"]'},{id:11,name:"Passive Voice",slug:"passive-voice",category:"voice",cefr_level:"B1",description:"When the focus is on the action or the receiver, not the doer.",explanation_en:"We use Passive Voice when the action or its receiver is more important than who does it. Form: be + past participle (V3).",explanation_tr:"Eylemi yapan kişi değil, eylemin kendisi veya eylemi alan önemli olduğunda Edilgen Çatı kullanılır. Yapı: be + V3.",examples:'[{"sentence":"The book was written by J.K. Rowling.","translation":"Kitap J.K. Rowling tarafından yazıldı."},{"sentence":"English is spoken worldwide.","translation":"İngilizce dünya çapında konuşulur."},{"sentence":"The window was broken.","translation":"Cam kırıldı."},{"sentence":"The project will be completed next month.","translation":"Proje gelecek ay tamamlanacak."}]',rules:'["Present: am/is/are + V3 (English is spoken here.)","Past: was/were + V3 (The car was stolen.)","Future: will be + V3 (The work will be finished.)","Perfect: have/has/had been + V3 (The letter has been sent.)","Use \\"by\\" to mention the agent: \\"It was made by Apple.\\""]',common_mistakes:'[{"wrong":"The book written by her.","correct":"The book was written by her.","explanation":"You need a form of \\"be\\" in passive sentences."},{"wrong":"The window was broke.","correct":"The window was broken.","explanation":"Use the past participle (V3), not the past simple."}]',order_index:11,prerequisite_topics:'["present-simple", "past-simple"]'},{id:12,name:"Reported Speech",slug:"reported-speech",category:"speech",cefr_level:"B2",description:"Reporting what someone said without quoting them directly.",explanation_en:"Reported Speech (Indirect Speech) is used to tell someone what another person said. Tenses usually shift back.",explanation_tr:"Dolaylı Anlatım, başka birinin söylediğini aktarmak için kullanılır. Zamanlar genellikle bir adım geriye kayar.",examples:'[{"sentence":"\\"I am tired.\\" → She said (that) she was tired.","translation":"\\"Yorgunum.\\" → Yorgun olduğunu söyledi."},{"sentence":"\\"I will come.\\" → He said he would come.","translation":"\\"Geleceğim.\\" → Geleceğini söyledi."},{"sentence":"\\"Do you like it?\\" → She asked if I liked it.","translation":"\\"Beğendin mi?\\" → Beğenip beğenmediğimi sordu."}]',rules:'["Present Simple → Past Simple","Present Continuous → Past Continuous","Past Simple → Past Perfect","will → would, can → could, may → might","this → that, here → there, now → then, today → that day"]',common_mistakes:'[{"wrong":"She said she is tired.","correct":"She said she was tired.","explanation":"Shift the tense back when reporting."},{"wrong":"He asked do I like it.","correct":"He asked if I liked it.","explanation":"Use \\"if/whether\\" for yes/no questions and change word order."}]',order_index:12,prerequisite_topics:'["past-simple", "present-perfect"]'},{id:13,name:"Relative Clauses",slug:"relative-clauses",category:"clauses",cefr_level:"B1",description:"Using who, which, that, where, when to add information about nouns.",explanation_en:'Relative clauses give extra information about a noun. We use "who" for people, "which" for things, "that" for both, "where" for places, "when" for times.',explanation_tr:'Sıfat cümlecikleri bir isim hakkında ek bilgi verir. İnsanlar için "who", şeyler için "which", her ikisi için "that", yerler için "where", zamanlar için "when" kullanılır.',examples:`[{"sentence":"The woman who lives next door is a teacher.","translation":"Yan komşuda yaşayan kadın bir öğretmendir."},{"sentence":"The book which I read was interesting.","translation":"Okuduğum kitap ilginçti."},{"sentence":"That's the restaurant where we met.","translation":"Tanıştığımız restoran orası."}]`,rules:'["who = for people (subject/object)","which = for things (subject/object)","that = for people or things (informal)","where = for places, when = for times","Defining clauses: essential info (no commas)","Non-defining clauses: extra info (with commas)"]',common_mistakes:'[{"wrong":"The man which called you is my brother.","correct":"The man who called you is my brother.","explanation":"Use \\"who\\" for people."},{"wrong":"The car who I bought is red.","correct":"The car which I bought is red.","explanation":"Use \\"which\\" or \\"that\\" for things."}]',order_index:13,prerequisite_topics:'["present-simple", "past-simple"]'},{id:14,name:"Articles",slug:"articles",category:"determiners",cefr_level:"A2",description:"Using a, an, the, or no article correctly.",explanation_en:'Articles (a/an/the) come before nouns. "A/an" is indefinite (any one), "the" is definite (specific one), and sometimes no article is needed.',explanation_tr:'Artikeller (a/an/the) isimlerden önce gelir. "A/an" belirsiz (herhangi bir), "the" belirli (bilinen, spesifik), bazen hiç artikel gerekmez.',examples:'[{"sentence":"I saw a dog in the park.","translation":"Parkta bir köpek gördüm."},{"sentence":"The dog was very friendly.","translation":"Köpek çok cana yakındı. (Bildiğimiz köpek)"},{"sentence":"She is an engineer.","translation":"O bir mühendis."},{"sentence":"I love music.","translation":"Müziği seviyorum. (Genel — artikel yok)"}]',rules:'["\\"a\\" before consonant sounds: a book, a university","\\"an\\" before vowel sounds: an apple, an hour","\\"the\\" = both speakers know which one, unique things, superlatives","No article: general/uncountable concepts (I like coffee), plural generalizations (Dogs are loyal)","No article with: most countries, languages, meals, sports"]',common_mistakes:`[{"wrong":"I like the music.","correct":"I like music.","explanation":"Don't use \\"the\\" when speaking generally."},{"wrong":"She is engineer.","correct":"She is an engineer.","explanation":"Use a/an with jobs."},{"wrong":"I went to the home.","correct":"I went home.","explanation":"\\"Go home\\" doesn't use an article."}]`,order_index:14,prerequisite_topics:"[]"},{id:15,name:"Prepositions",slug:"prepositions",category:"prepositions",cefr_level:"A2",description:"In, on, at, for, with, by, about, to, from — location, time, movement, and more.",explanation_en:"Prepositions show relationships between words — location, time, direction, cause, etc. They are often unpredictable and must be learned in context.",explanation_tr:"Edatlar kelimeler arasındaki ilişkileri gösterir — yer, zaman, yön, neden vb. Çoğu zaman tahmin edilemez ve bağlam içinde öğrenilmelidir.",examples:`[{"sentence":"I live in Istanbul.","translation":"İstanbul'da yaşıyorum."},{"sentence":"The meeting is on Monday at 3 PM.","translation":"Toplantı Pazartesi saat 3'te."},{"sentence":"She's good at mathematics.","translation":"Matematikte iyidir."},{"sentence":"I'm interested in science.","translation":"Bilimle ilgileniyorum."}]`,rules:'["Time: at (specific time), on (days/dates), in (months/years/seasons/parts of day)","Place: at (specific point), on (surface), in (enclosed space)","at school/work/home, on the bus/train, in a car/taxi","Verb + preposition combos must be memorized: listen TO, look AT, wait FOR, depend ON","Adjective + preposition combos: good AT, interested IN, afraid OF, responsible FOR"]',common_mistakes:`[{"wrong":"I'm interested for science.","correct":"I'm interested in science.","explanation":"\\"Interested\\" takes \\"in\\", not \\"for\\"."},{"wrong":"I arrived to school.","correct":"I arrived at school.","explanation":"\\"Arrive\\" takes \\"at\\" (place) or \\"in\\" (city/country)."},{"wrong":"I listen music.","correct":"I listen to music.","explanation":"\\"Listen\\" requires \\"to\\"."}]`,order_index:15,prerequisite_topics:"[]"},{id:16,name:"Gerunds and Infinitives",slug:"gerunds-infinitives",category:"verb_forms",cefr_level:"B1",description:"When to use V-ing and when to use to + V after certain verbs.",explanation_en:"Some verbs are followed by gerund (V-ing), some by infinitive (to + V), and some can take both. This must mostly be memorized.",explanation_tr:"Bazı fiillerden sonra isim-fiil (V-ing), bazılarından sonra mastar (to + V) gelir. Bazıları her ikisini de alabilir. Çoğunlukla ezberlenmesi gerekir.",examples:'[{"sentence":"I enjoy reading books.","translation":"Kitap okumaktan hoşlanırım. (enjoy + V-ing)"},{"sentence":"I want to learn English.","translation":"İngilizce öğrenmek istiyorum. (want + to V)"},{"sentence":"I stopped smoking.","translation":"Sigara içmeyi bıraktım. (V-ing = eylemi bıraktı)"},{"sentence":"I stopped to smoke.","translation":"Sigara içmek için durdum. (to V = amaç)"}]',rules:'["Gerund (V-ing) after: enjoy, finish, mind, avoid, keep, suggest, consider, practice, imagine","Infinitive (to V) after: want, need, decide, hope, plan, expect, agree, refuse, learn, promise","Both (different meaning): stop, remember, forget, try, regret","After prepositions, always use gerund: interested in learning, good at cooking","As subject, use gerund: \\"Swimming is good exercise.\\""]',common_mistakes:'[{"wrong":"I enjoy to read.","correct":"I enjoy reading.","explanation":"\\"Enjoy\\" is always followed by V-ing."},{"wrong":"I want learning.","correct":"I want to learn.","explanation":"\\"Want\\" is followed by \\"to + verb\\"."}]',order_index:16,prerequisite_topics:'["present-simple", "present-continuous"]'},{id:17,name:"Comparatives and Superlatives",slug:"comparatives-superlatives",category:"adjectives",cefr_level:"A2",description:"Comparing things: bigger, the biggest, more interesting, the most interesting.",explanation_en:"Comparatives compare two things (-er/more). Superlatives show the extreme (the -est/the most). Irregular forms exist.",explanation_tr:"Karşılaştırma sıfatları iki şeyi karşılaştırır (-er/more). Üstünlük sıfatları en üst dereceyi gösterir (the -est/the most).",examples:'[{"sentence":"She is taller than me.","translation":"Benden uzun."},{"sentence":"This is the most interesting book.","translation":"Bu en ilginç kitap."},{"sentence":"He is better than his brother at chess.","translation":"Satrançta kardeşinden iyidir."}]',rules:'["Short adj (1 syllable): -er/-est (tall→taller→tallest)","Adj ending in -y: -ier/-iest (happy→happier→happiest)","Long adj (2+ syllables): more/most (interesting→more interesting→most interesting)","Irregular: good→better→best, bad→worse→worst, far→farther→farthest","Comparatives use \\"than\\": She is older than me."]',common_mistakes:'[{"wrong":"She is more tall than me.","correct":"She is taller than me.","explanation":"Short adjectives use -er, not \\"more\\"."},{"wrong":"He is the most good.","correct":"He is the best.","explanation":"\\"Good\\" is irregular: good→better→best."}]',order_index:17,prerequisite_topics:"[]"},{id:18,name:"Question Formation",slug:"question-formation",category:"sentence_structure",cefr_level:"A1",description:"How to form questions in English: yes/no questions, Wh-questions, tag questions.",explanation_en:"English questions change word order. Yes/no questions invert the subject and auxiliary. Wh-questions start with a question word.",explanation_tr:"İngilizce sorularda sözcük sırası değişir. Evet/hayır soruları yardımcı fiili öne alır. Wh-soruları soru kelimesiyle başlar.",examples:`[{"sentence":"Do you like coffee?","translation":"Kahve sever misin?"},{"sentence":"Where do you live?","translation":"Nerede yaşıyorsun?"},{"sentence":"What are you doing?","translation":"Ne yapıyorsun?"},{"sentence":"You're coming, aren't you?","translation":"Geliyorsun, değil mi?"}]`,rules:'["Yes/No: Auxiliary + Subject + Main verb? (Do you work?)","Wh-: Wh-word + Auxiliary + Subject + Main verb? (Where do you work?)","Who/What as subject: Who works here? (no auxiliary needed)","Tag questions: positive → negative tag, negative → positive tag"]',common_mistakes:'[{"wrong":"Where you live?","correct":"Where do you live?","explanation":"You need \\"do/does\\" in Present Simple questions."},{"wrong":"What means this?","correct":"What does this mean?","explanation":"Use \\"does\\" and base form for Wh-questions."}]',order_index:18,prerequisite_topics:"[]"},{id:19,name:"Word Order",slug:"word-order",category:"sentence_structure",cefr_level:"A2",description:"The standard English sentence structure: Subject-Verb-Object and adverb placement.",explanation_en:"English follows SVO (Subject-Verb-Object) word order. Adverbs and adjectives have specific positions in the sentence.",explanation_tr:"İngilizce ÖYN (Özne-Yüklem-Nesne) sözcük sırasını takip eder. Zarflar ve sıfatlar cümlede belirli yerlere konur.",examples:'[{"sentence":"I always drink coffee in the morning.","translation":"Sabahları her zaman kahve içerim."},{"sentence":"She quickly finished her homework.","translation":"Ödevini hızlıca bitirdi."}]',rules:'["Basic order: Subject + Verb + Object (I read books)","Adverbs of frequency before main verb: I always eat breakfast","Adverbs of frequency after \\"be\\": She is always late","Adjectives before nouns: a big red car","Time expressions usually at end: I work every day"]',common_mistakes:'[{"wrong":"I drink always coffee.","correct":"I always drink coffee.","explanation":"Frequency adverbs go before the main verb."},{"wrong":"She is late always.","correct":"She is always late.","explanation":"Frequency adverbs go after \\"be\\"."}]',order_index:19,prerequisite_topics:'["present-simple"]'},{id:20,name:"Subject-Verb Agreement",slug:"subject-verb-agreement",category:"sentence_structure",cefr_level:"B1",description:"Making sure the subject and verb match in number.",explanation_en:"The verb must agree with its subject in number. Singular subjects take singular verbs, plural subjects take plural verbs.",explanation_tr:"Fiil, öznesiyle sayı bakımından uyumlu olmalıdır. Tekil özneler tekil fiiller, çoğul özneler çoğul fiiller alır.",examples:'[{"sentence":"The team works hard.","translation":"Takım çok çalışır."},{"sentence":"The students are studying.","translation":"Öğrenciler ders çalışıyor."},{"sentence":"Everyone has a different opinion.","translation":"Herkesin farklı bir görüşü var."}]',rules:'["Singular: he/she/it + V-s (The dog runs.)","Plural: they/we/you + V (The dogs run.)","everyone/everybody/someone/nobody = singular verb","The news IS (uncountable nouns are singular)","Neither...nor/Either...or: verb agrees with the nearest subject"]',common_mistakes:'[{"wrong":"Everyone have a phone.","correct":"Everyone has a phone.","explanation":"\\"Everyone\\" is singular and takes \\"has\\"."},{"wrong":"The news are bad.","correct":"The news is bad.","explanation":"\\"News\\" is uncountable and takes singular verb."}]',order_index:20,prerequisite_topics:'["present-simple"]'}],grammar_exercises:[{id:1,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"She ___ (go) to school every day.",options:null,correct_answer:"goes",explanation:'Third person singular: add -es to "go".',explanation_tr:'Üçüncü tekil şahıs: "go" fiiline -es eklenir.',hint:null,context:null},{id:2,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"They ___ (not/like) cold weather.",options:null,correct_answer:"don't like",explanation:`For plural subjects, use "don't" + base verb.`,explanation_tr:`Çoğul özneler için "don't" + yalın fiil kullanılır.`,hint:null,context:null},{id:3,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"He ___ breakfast every morning.",options:'["eat","eats","eating","is eat"]',correct_answer:"eats",explanation:"He/she/it + verb-s in Present Simple.",explanation_tr:null,hint:null,context:null},{id:4,topic_id:1,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:`Find and correct the error: "She don't like swimming."`,options:null,correct_answer:"She doesn't like swimming.",explanation:`Use "doesn't" for he/she/it.`,explanation_tr:null,hint:null,context:null},{id:5,topic_id:1,exercise_type:"sentence_transform",cefr_level:"A1",difficulty:2,question:'Make this negative: "He plays tennis."',options:null,correct_answer:"He doesn't play tennis.",explanation:"Negative: doesn't + base verb.",explanation_tr:null,hint:null,context:null},{id:6,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"She ___ (go) to school every day.",options:null,correct_answer:"goes",explanation:'Third person singular: add -es to "go".',explanation_tr:'Üçüncü tekil şahıs: "go" fiiline -es eklenir.',hint:null,context:null},{id:7,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"They ___ (not/like) cold weather.",options:null,correct_answer:"don't like",explanation:`For plural subjects, use "don't" + base verb.`,explanation_tr:`Çoğul özneler için "don't" + yalın fiil kullanılır.`,hint:null,context:null},{id:8,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"He ___ breakfast every morning.",options:'["eat","eats","eating","is eat"]',correct_answer:"eats",explanation:"He/she/it + verb-s in Present Simple.",explanation_tr:null,hint:null,context:null},{id:9,topic_id:1,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:`Find and correct the error: "She don't like swimming."`,options:null,correct_answer:"She doesn't like swimming.",explanation:`Use "doesn't" for he/she/it.`,explanation_tr:null,hint:null,context:null},{id:10,topic_id:1,exercise_type:"sentence_transform",cefr_level:"A1",difficulty:2,question:'Make this negative: "He plays tennis."',options:null,correct_answer:"He doesn't play tennis.",explanation:"Negative: doesn't + base verb.",explanation_tr:null,hint:null,context:null},{id:11,topic_id:1,exercise_type:"sentence_creation",cefr_level:"A1",difficulty:3,question:"Write a sentence about your daily routine using Present Simple.",options:null,correct_answer:"[free response]",explanation:null,explanation_tr:null,hint:null,context:null},{id:12,topic_id:2,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"Look! The children ___ (play) in the garden.",options:null,correct_answer:"are playing",explanation:"Use am/is/are + V-ing for actions happening now.",explanation_tr:null,hint:null,context:null},{id:13,topic_id:2,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"What ___ you ___ right now?",options:'["are...doing","do...do","is...doing","are...do"]',correct_answer:"are...doing",explanation:null,explanation_tr:null,hint:null,context:null},{id:14,topic_id:2,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:'Find and correct the error: "I am know the answer."',options:null,correct_answer:"I know the answer.",explanation:'Stative verbs like "know" are not used in continuous form.',explanation_tr:null,hint:null,context:null},{id:15,topic_id:5,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"I ___ never ___ (be) to Japan.",options:null,correct_answer:"have...been",explanation:"Present Perfect for experiences: have/has + V3.",explanation_tr:null,hint:null,context:null},{id:16,topic_id:5,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:1,question:"She ___ her homework yet.",options:`["hasn't finished","didn't finish","doesn't finish","isn't finishing"]`,correct_answer:"hasn't finished",explanation:'"Yet" signals Present Perfect.',explanation_tr:null,hint:null,context:null},{id:17,topic_id:5,exercise_type:"error_correction",cefr_level:"B1",difficulty:2,question:'Find and correct: "I have went to London."',options:null,correct_answer:"I have gone to London.",explanation:"go → went → gone. Use V3 after have/has.",explanation_tr:null,hint:null,context:null},{id:18,topic_id:10,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"If it ___ (rain), I will take an umbrella.",options:null,correct_answer:"rains",explanation:"First Conditional: If + Present Simple, will + V1.",explanation_tr:null,hint:null,context:null},{id:19,topic_id:10,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:2,question:"If I ___ rich, I would travel the world.",options:'["am","was/were","will be","had been"]',correct_answer:"was/were",explanation:"Second Conditional: If + Past Simple, would + V1.",explanation_tr:null,hint:null,context:null},{id:20,topic_id:14,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"She is ___ engineer at ___ big company.",options:null,correct_answer:"an...a",explanation:'"An" before vowel sounds, "a" before consonant sounds.',explanation_tr:null,hint:null,context:null},{id:21,topic_id:14,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"I love ___ music.",options:'["a","an","the","no article"]',correct_answer:"no article",explanation:"No article with general/abstract nouns.",explanation_tr:null,hint:null,context:null},{id:22,topic_id:9,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"You ___ wear a seatbelt. It's the law.",options:null,correct_answer:"must",explanation:'"Must" for strong obligation/rules.',explanation_tr:null,hint:null,context:null},{id:23,topic_id:9,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"She ___ speak three languages.",options:'["can","cans","can to","is can"]',correct_answer:"can",explanation:"Modal verbs don't change form.",explanation_tr:null,hint:null,context:null},{id:24,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"She ___ (go) to school every day.",options:null,correct_answer:"goes",explanation:'Third person singular: add -es to "go".',explanation_tr:'Üçüncü tekil şahıs: "go" fiiline -es eklenir.',hint:null,context:null},{id:25,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"They ___ (not/like) cold weather.",options:null,correct_answer:"don't like",explanation:`For plural subjects, use "don't" + base verb.`,explanation_tr:`Çoğul özneler için "don't" + yalın fiil kullanılır.`,hint:null,context:null},{id:26,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"He ___ breakfast every morning.",options:'["eat","eats","eating","is eat"]',correct_answer:"eats",explanation:"He/she/it + verb-s in Present Simple.",explanation_tr:null,hint:null,context:null},{id:27,topic_id:1,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:`Find and correct the error: "She don't like swimming."`,options:null,correct_answer:"She doesn't like swimming.",explanation:`Use "doesn't" for he/she/it.`,explanation_tr:null,hint:null,context:null},{id:28,topic_id:1,exercise_type:"sentence_transform",cefr_level:"A1",difficulty:2,question:'Make this negative: "He plays tennis."',options:null,correct_answer:"He doesn't play tennis.",explanation:"Negative: doesn't + base verb.",explanation_tr:null,hint:null,context:null},{id:29,topic_id:1,exercise_type:"sentence_creation",cefr_level:"A1",difficulty:3,question:"Write a sentence about your daily routine using Present Simple.",options:null,correct_answer:"[free response]",explanation:null,explanation_tr:null,hint:null,context:null},{id:30,topic_id:2,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"Look! The children ___ (play) in the garden.",options:null,correct_answer:"are playing",explanation:"Use am/is/are + V-ing for actions happening now.",explanation_tr:null,hint:null,context:null},{id:31,topic_id:2,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"What ___ you ___ right now?",options:'["are...doing","do...do","is...doing","are...do"]',correct_answer:"are...doing",explanation:null,explanation_tr:null,hint:null,context:null},{id:32,topic_id:2,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:'Find and correct the error: "I am know the answer."',options:null,correct_answer:"I know the answer.",explanation:'Stative verbs like "know" are not used in continuous form.',explanation_tr:null,hint:null,context:null},{id:33,topic_id:5,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"I ___ never ___ (be) to Japan.",options:null,correct_answer:"have...been",explanation:"Present Perfect for experiences: have/has + V3.",explanation_tr:null,hint:null,context:null},{id:34,topic_id:5,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:1,question:"She ___ her homework yet.",options:`["hasn't finished","didn't finish","doesn't finish","isn't finishing"]`,correct_answer:"hasn't finished",explanation:'"Yet" signals Present Perfect.',explanation_tr:null,hint:null,context:null},{id:35,topic_id:5,exercise_type:"error_correction",cefr_level:"B1",difficulty:2,question:'Find and correct: "I have went to London."',options:null,correct_answer:"I have gone to London.",explanation:"go → went → gone. Use V3 after have/has.",explanation_tr:null,hint:null,context:null},{id:36,topic_id:10,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"If it ___ (rain), I will take an umbrella.",options:null,correct_answer:"rains",explanation:"First Conditional: If + Present Simple, will + V1.",explanation_tr:null,hint:null,context:null},{id:37,topic_id:10,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:2,question:"If I ___ rich, I would travel the world.",options:'["am","was/were","will be","had been"]',correct_answer:"was/were",explanation:"Second Conditional: If + Past Simple, would + V1.",explanation_tr:null,hint:null,context:null},{id:38,topic_id:14,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"She is ___ engineer at ___ big company.",options:null,correct_answer:"an...a",explanation:'"An" before vowel sounds, "a" before consonant sounds.',explanation_tr:null,hint:null,context:null},{id:39,topic_id:14,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"I love ___ music.",options:'["a","an","the","no article"]',correct_answer:"no article",explanation:"No article with general/abstract nouns.",explanation_tr:null,hint:null,context:null},{id:40,topic_id:9,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"You ___ wear a seatbelt. It's the law.",options:null,correct_answer:"must",explanation:'"Must" for strong obligation/rules.',explanation_tr:null,hint:null,context:null},{id:41,topic_id:9,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"She ___ speak three languages.",options:'["can","cans","can to","is can"]',correct_answer:"can",explanation:"Modal verbs don't change form.",explanation_tr:null,hint:null,context:null}],vocabulary_items:[{id:1,word:"make",part_of_speech:"verb",cefr_level:"A1",frequency_rank:50,definition_en:"To create, produce, or cause something to happen.",definition_tr:"Yapmak, üretmek, oluşturmak.",phonetic:"/meɪk/",pronunciation_audio_url:null,example_sentences:'["I make breakfast every morning.","She made a mistake.","Can you make a decision?"]',synonyms:'["create","produce","build"]',antonyms:'["destroy","break"]',collocations:'["make a decision","make a mistake","make progress","make money","make sure","make an effort","make a difference","make friends"]',word_family:'["maker","making","made"]',common_phrases:'["make up your mind","make it on time","make the most of"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:2,word:"take",part_of_speech:"verb",cefr_level:"A1",frequency_rank:60,definition_en:"To get, carry, or accept something; to require time or effort.",definition_tr:"Almak, götürmek, kabul etmek.",phonetic:"/teɪk/",pronunciation_audio_url:null,example_sentences:'["Take this book.","It takes two hours.","She took the bus."]',synonyms:'["grab","carry","seize"]',antonyms:'["give","put","leave"]',collocations:'["take a photo","take a break","take time","take a look","take care","take part","take place"]',word_family:'["taker","taking","taken","took"]',common_phrases:'["take it easy","take your time","take for granted"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:3,word:"get",part_of_speech:"verb",cefr_level:"A1",frequency_rank:30,definition_en:"To obtain, receive, or become. One of the most versatile verbs in English.",definition_tr:"Almak, elde etmek, olmak.",phonetic:"/ɡet/",pronunciation_audio_url:null,example_sentences:'["I need to get some milk.","She got angry.","Did you get my message?"]',synonyms:'["obtain","receive","acquire"]',antonyms:'["give","lose"]',collocations:'["get ready","get used to","get married","get along","get rid of","get up","get better"]',word_family:'["getting","got","gotten"]',common_phrases:'["get the hang of","get over it","get out of hand"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:4,word:"opportunity",part_of_speech:"noun",cefr_level:"B1",frequency_rank:800,definition_en:"A chance or favorable situation for doing something.",definition_tr:"Fırsat, uygun durum.",phonetic:"/ˌɒpəˈtjuːnɪti/",pronunciation_audio_url:null,example_sentences:`["This is a great opportunity.","Don't miss this opportunity.","We had the opportunity to travel."]`,synonyms:'["chance","possibility","occasion"]',antonyms:'["obstacle"]',collocations:'["take the opportunity","miss an opportunity","golden opportunity","job opportunity"]',word_family:'["opportunistic","opportunist"]',common_phrases:'["opportunity knocks","window of opportunity","seize the opportunity"]',formal_informal:"neutral",notes:null,category:"general"},{id:5,word:"despite",part_of_speech:"preposition",cefr_level:"B1",frequency_rank:1200,definition_en:"Without being affected by; in spite of.",definition_tr:"Rağmen, karşın.",phonetic:"/dɪˈspaɪt/",pronunciation_audio_url:null,example_sentences:'["Despite the rain, we went outside.","She succeeded despite the difficulties."]',synonyms:'["in spite of","regardless of"]',antonyms:'["because of"]',collocations:'["despite the fact that","despite everything","despite difficulties"]',word_family:"[]",common_phrases:'["despite all odds"]',formal_informal:"neutral",notes:null,category:"academic"},{id:6,word:"achieve",part_of_speech:"verb",cefr_level:"B1",frequency_rank:900,definition_en:"To successfully reach a goal or result through effort.",definition_tr:"Başarmak, elde etmek.",phonetic:"/əˈtʃiːv/",pronunciation_audio_url:null,example_sentences:'["She achieved her goal.","They achieved great success."]',synonyms:'["accomplish","attain","reach"]',antonyms:'["fail","lose"]',collocations:'["achieve a goal","achieve success","achieve results"]',word_family:'["achievement","achievable","achiever"]',common_phrases:'["achieve the impossible","sense of achievement"]',formal_informal:"neutral",notes:null,category:"academic"},{id:7,word:"environment",part_of_speech:"noun",cefr_level:"B1",frequency_rank:700,definition_en:"The natural world; the conditions around a person or thing.",definition_tr:"Çevre, ortam.",phonetic:"/ɪnˈvaɪrənmənt/",pronunciation_audio_url:null,example_sentences:'["We must protect the environment.","A good working environment is important."]',synonyms:'["surroundings","setting","atmosphere"]',antonyms:"[]",collocations:'["protect the environment","natural environment","working environment"]',word_family:'["environmental","environmentally","environmentalist"]',common_phrases:'["environmentally friendly"]',formal_informal:"neutral",notes:null,category:"science"},{id:8,word:"comfortable",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:1500,definition_en:"Providing physical ease; feeling at ease.",definition_tr:"Rahat, konforlu.",phonetic:"/ˈkʌmftəbl/",pronunciation_audio_url:null,example_sentences:'["This chair is very comfortable.","I feel comfortable speaking English."]',synonyms:'["cozy","relaxed","pleasant"]',antonyms:'["uncomfortable","uneasy"]',collocations:'["feel comfortable","make comfortable","comfortable with"]',word_family:'["comfort","comfortably","uncomfortable","discomfort"]',common_phrases:'["make yourself comfortable"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:9,word:"increase",part_of_speech:"verb/noun",cefr_level:"B1",frequency_rank:500,definition_en:"To become or make greater in size, amount, or degree.",definition_tr:"Artmak, artırmak (fiil); artış (isim).",phonetic:"/ɪnˈkriːs/",pronunciation_audio_url:null,example_sentences:'["Sales have increased by 20%.","There was a significant increase in temperature."]',synonyms:'["grow","rise","expand"]',antonyms:'["decrease","decline","reduce"]',collocations:'["increase significantly","sharp increase","steady increase"]',word_family:'["increasing","increasingly","increased"]',common_phrases:'["on the increase"]',formal_informal:"neutral",notes:null,category:"academic"},{id:10,word:"suggest",part_of_speech:"verb",cefr_level:"B1",frequency_rank:600,definition_en:"To put forward an idea for consideration.",definition_tr:"Önermek, tavsiye etmek.",phonetic:"/səˈdʒest/",pronunciation_audio_url:null,example_sentences:'["I suggest we leave early.","Can you suggest a good restaurant?"]',synonyms:'["recommend","propose","advise"]',antonyms:'["demand"]',collocations:'["suggest an idea","strongly suggest","suggest that"]',word_family:'["suggestion","suggestive"]',common_phrases:'["I would suggest","what do you suggest?"]',formal_informal:"neutral",notes:null,category:"general"},{id:11,word:"make",part_of_speech:"verb",cefr_level:"A1",frequency_rank:50,definition_en:"To create, produce, or cause something to happen.",definition_tr:"Yapmak, üretmek, oluşturmak.",phonetic:"/meɪk/",pronunciation_audio_url:null,example_sentences:'["I make breakfast every morning.","She made a mistake.","Can you make a decision?"]',synonyms:'["create","produce","build"]',antonyms:'["destroy","break"]',collocations:'["make a decision","make a mistake","make progress","make money","make sure","make an effort","make a difference","make friends"]',word_family:'["maker","making","made"]',common_phrases:'["make up your mind","make it on time","make the most of"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:12,word:"take",part_of_speech:"verb",cefr_level:"A1",frequency_rank:60,definition_en:"To get, carry, or accept something; to require time or effort.",definition_tr:"Almak, götürmek, kabul etmek.",phonetic:"/teɪk/",pronunciation_audio_url:null,example_sentences:'["Take this book.","It takes two hours.","She took the bus."]',synonyms:'["grab","carry","seize"]',antonyms:'["give","put","leave"]',collocations:'["take a photo","take a break","take time","take a look","take care","take part","take place"]',word_family:'["taker","taking","taken","took"]',common_phrases:'["take it easy","take your time","take for granted"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:13,word:"get",part_of_speech:"verb",cefr_level:"A1",frequency_rank:30,definition_en:"To obtain, receive, or become. One of the most versatile verbs in English.",definition_tr:"Almak, elde etmek, olmak.",phonetic:"/ɡet/",pronunciation_audio_url:null,example_sentences:'["I need to get some milk.","She got angry.","Did you get my message?"]',synonyms:'["obtain","receive","acquire"]',antonyms:'["give","lose"]',collocations:'["get ready","get used to","get married","get along","get rid of","get up","get better"]',word_family:'["getting","got","gotten"]',common_phrases:'["get the hang of","get over it","get out of hand"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:14,word:"opportunity",part_of_speech:"noun",cefr_level:"B1",frequency_rank:800,definition_en:"A chance or favorable situation for doing something.",definition_tr:"Fırsat, uygun durum.",phonetic:"/ˌɒpəˈtjuːnɪti/",pronunciation_audio_url:null,example_sentences:`["This is a great opportunity.","Don't miss this opportunity.","We had the opportunity to travel."]`,synonyms:'["chance","possibility","occasion"]',antonyms:'["obstacle"]',collocations:'["take the opportunity","miss an opportunity","golden opportunity","job opportunity"]',word_family:'["opportunistic","opportunist"]',common_phrases:'["opportunity knocks","window of opportunity","seize the opportunity"]',formal_informal:"neutral",notes:null,category:"general"},{id:15,word:"despite",part_of_speech:"preposition",cefr_level:"B1",frequency_rank:1200,definition_en:"Without being affected by; in spite of.",definition_tr:"Rağmen, karşın.",phonetic:"/dɪˈspaɪt/",pronunciation_audio_url:null,example_sentences:'["Despite the rain, we went outside.","She succeeded despite the difficulties."]',synonyms:'["in spite of","regardless of"]',antonyms:'["because of"]',collocations:'["despite the fact that","despite everything","despite difficulties"]',word_family:"[]",common_phrases:'["despite all odds"]',formal_informal:"neutral",notes:null,category:"academic"},{id:16,word:"achieve",part_of_speech:"verb",cefr_level:"B1",frequency_rank:900,definition_en:"To successfully reach a goal or result through effort.",definition_tr:"Başarmak, elde etmek.",phonetic:"/əˈtʃiːv/",pronunciation_audio_url:null,example_sentences:'["She achieved her goal.","They achieved great success."]',synonyms:'["accomplish","attain","reach"]',antonyms:'["fail","lose"]',collocations:'["achieve a goal","achieve success","achieve results"]',word_family:'["achievement","achievable","achiever"]',common_phrases:'["achieve the impossible","sense of achievement"]',formal_informal:"neutral",notes:null,category:"academic"},{id:17,word:"environment",part_of_speech:"noun",cefr_level:"B1",frequency_rank:700,definition_en:"The natural world; the conditions around a person or thing.",definition_tr:"Çevre, ortam.",phonetic:"/ɪnˈvaɪrənmənt/",pronunciation_audio_url:null,example_sentences:'["We must protect the environment.","A good working environment is important."]',synonyms:'["surroundings","setting","atmosphere"]',antonyms:"[]",collocations:'["protect the environment","natural environment","working environment"]',word_family:'["environmental","environmentally","environmentalist"]',common_phrases:'["environmentally friendly"]',formal_informal:"neutral",notes:null,category:"science"},{id:18,word:"comfortable",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:1500,definition_en:"Providing physical ease; feeling at ease.",definition_tr:"Rahat, konforlu.",phonetic:"/ˈkʌmftəbl/",pronunciation_audio_url:null,example_sentences:'["This chair is very comfortable.","I feel comfortable speaking English."]',synonyms:'["cozy","relaxed","pleasant"]',antonyms:'["uncomfortable","uneasy"]',collocations:'["feel comfortable","make comfortable","comfortable with"]',word_family:'["comfort","comfortably","uncomfortable","discomfort"]',common_phrases:'["make yourself comfortable"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:19,word:"increase",part_of_speech:"verb/noun",cefr_level:"B1",frequency_rank:500,definition_en:"To become or make greater in size, amount, or degree.",definition_tr:"Artmak, artırmak (fiil); artış (isim).",phonetic:"/ɪnˈkriːs/",pronunciation_audio_url:null,example_sentences:'["Sales have increased by 20%.","There was a significant increase in temperature."]',synonyms:'["grow","rise","expand"]',antonyms:'["decrease","decline","reduce"]',collocations:'["increase significantly","sharp increase","steady increase"]',word_family:'["increasing","increasingly","increased"]',common_phrases:'["on the increase"]',formal_informal:"neutral",notes:null,category:"academic"},{id:20,word:"suggest",part_of_speech:"verb",cefr_level:"B1",frequency_rank:600,definition_en:"To put forward an idea for consideration.",definition_tr:"Önermek, tavsiye etmek.",phonetic:"/səˈdʒest/",pronunciation_audio_url:null,example_sentences:'["I suggest we leave early.","Can you suggest a good restaurant?"]',synonyms:'["recommend","propose","advise"]',antonyms:'["demand"]',collocations:'["suggest an idea","strongly suggest","suggest that"]',word_family:'["suggestion","suggestive"]',common_phrases:'["I would suggest","what do you suggest?"]',formal_informal:"neutral",notes:null,category:"general"}],reading_materials:[{id:1,title:"My Daily Routine",content:`Every morning, I wake up at 7 o'clock. First, I wash my face and brush my teeth. Then I have breakfast. I usually eat bread and cheese and drink tea.

After breakfast, I get dressed and go to work. I take the bus to the office. I work from 9 AM to 6 PM. During lunch break, I eat at a small restaurant near the office.

In the evening, I come home and cook dinner. After dinner, I watch TV or read a book. Sometimes I call my friends. I usually go to bed at 11 PM.

On weekends, I like to spend time with my family. We sometimes go to the park or visit relatives. I also like playing football on Saturdays.`,cefr_level:"A1",category:"daily_life",word_count:120,estimated_reading_time:3,key_vocabulary:'["routine","breakfast","relatives","weekend"]',comprehension_questions:`[{"question":"What time does the person wake up?","options":["6 o'clock","7 o'clock","8 o'clock","9 o'clock"],"correct":"7 o'clock","type":"detail"},{"question":"How does the person go to work?","options":["By car","By bus","On foot","By train"],"correct":"By bus","type":"detail"},{"question":"What is the main topic of this text?","options":["A person's hobbies","A person's daily life","A person's work problems","A person's family"],"correct":"A person's daily life","type":"main_idea"}]`,summary:"A simple description of a person's daily routine.",source:null,created_at:"2026-09-27 15:23:14"},{id:2,title:"The History of the Internet",content:`The Internet has changed the world more than almost any other invention. But how did it start?

The idea of connecting computers began in the 1960s. The United States military wanted a communication system that could survive a nuclear attack. They created ARPANET in 1969, which connected four university computers.

Throughout the 1970s and 1980s, more computers joined the network. Scientists and researchers used it to share information. However, it was difficult for ordinary people to use.

Everything changed in 1991 when Tim Berners-Lee invented the World Wide Web. The Web made it easy to create and access web pages using links.

By the mid-1990s, millions of people were using the Internet. Companies like Amazon and Google were founded during this period.

Today, the Internet connects billions of people worldwide. We use it for communication, entertainment, education, shopping, and much more.`,cefr_level:"B1",category:"technology",word_count:160,estimated_reading_time:5,key_vocabulary:'["invention","network","browser","transform"]',comprehension_questions:'[{"question":"When was ARPANET created?","options":["1959","1969","1979","1991"],"correct":"1969","type":"detail"},{"question":"Who invented the World Wide Web?","options":["Bill Gates","Steve Jobs","Tim Berners-Lee","Mark Zuckerberg"],"correct":"Tim Berners-Lee","type":"detail"},{"question":"What is the main idea of this text?","options":["The dangers of the Internet","How to use the Internet","The history and development of the Internet","The future of technology"],"correct":"The history and development of the Internet","type":"main_idea"}]',summary:"A historical overview of how the Internet developed.",source:null,created_at:"2026-09-27 15:23:14"},{id:3,title:"My Daily Routine",content:`Every morning, I wake up at 7 o'clock. First, I wash my face and brush my teeth. Then I have breakfast. I usually eat bread and cheese and drink tea.

After breakfast, I get dressed and go to work. I take the bus to the office. I work from 9 AM to 6 PM. During lunch break, I eat at a small restaurant near the office.

In the evening, I come home and cook dinner. After dinner, I watch TV or read a book. Sometimes I call my friends. I usually go to bed at 11 PM.

On weekends, I like to spend time with my family. We sometimes go to the park or visit relatives. I also like playing football on Saturdays.`,cefr_level:"A1",category:"daily_life",word_count:120,estimated_reading_time:3,key_vocabulary:'["routine","breakfast","relatives","weekend"]',comprehension_questions:`[{"question":"What time does the person wake up?","options":["6 o'clock","7 o'clock","8 o'clock","9 o'clock"],"correct":"7 o'clock","type":"detail"},{"question":"How does the person go to work?","options":["By car","By bus","On foot","By train"],"correct":"By bus","type":"detail"},{"question":"What is the main topic of this text?","options":["A person's hobbies","A person's daily life","A person's work problems","A person's family"],"correct":"A person's daily life","type":"main_idea"}]`,summary:"A simple description of a person's daily routine.",source:null,created_at:"2026-09-27 15:26:46"},{id:4,title:"The History of the Internet",content:`The Internet has changed the world more than almost any other invention. But how did it start?

The idea of connecting computers began in the 1960s. The United States military wanted a communication system that could survive a nuclear attack. They created ARPANET in 1969, which connected four university computers.

Throughout the 1970s and 1980s, more computers joined the network. Scientists and researchers used it to share information. However, it was difficult for ordinary people to use.

Everything changed in 1991 when Tim Berners-Lee invented the World Wide Web. The Web made it easy to create and access web pages using links.

By the mid-1990s, millions of people were using the Internet. Companies like Amazon and Google were founded during this period.

Today, the Internet connects billions of people worldwide. We use it for communication, entertainment, education, shopping, and much more.`,cefr_level:"B1",category:"technology",word_count:160,estimated_reading_time:5,key_vocabulary:'["invention","network","browser","transform"]',comprehension_questions:'[{"question":"When was ARPANET created?","options":["1959","1969","1979","1991"],"correct":"1969","type":"detail"},{"question":"Who invented the World Wide Web?","options":["Bill Gates","Steve Jobs","Tim Berners-Lee","Mark Zuckerberg"],"correct":"Tim Berners-Lee","type":"detail"},{"question":"What is the main idea of this text?","options":["The dangers of the Internet","How to use the Internet","The history and development of the Internet","The future of technology"],"correct":"The history and development of the Internet","type":"main_idea"}]',summary:"A historical overview of how the Internet developed.",source:null,created_at:"2026-09-27 15:26:46"}],writing_prompts:[{id:1,type:"sentence",cefr_level:"A1",prompt:"Write 5 sentences about your family using Present Simple.",instructions:"Use Present Simple tense.",example_response:null,evaluation_criteria:null,category:"daily_life",word_limit_min:20,word_limit_max:60},{id:2,type:"paragraph",cefr_level:"A2",prompt:"Write a short paragraph about your favorite food.",instructions:"Describe the food, why you like it.",example_response:null,evaluation_criteria:null,category:"daily_life",word_limit_min:50,word_limit_max:120},{id:3,type:"email",cefr_level:"B1",prompt:"Write an email to your friend inviting them to your birthday party.",instructions:"Include: date, time, place.",example_response:null,evaluation_criteria:null,category:"daily_life",word_limit_min:60,word_limit_max:150},{id:4,type:"opinion",cefr_level:"B1",prompt:"Do you think social media is good or bad for young people? Why?",instructions:"Give your opinion with at least 2 reasons.",example_response:null,evaluation_criteria:null,category:"technology",word_limit_min:100,word_limit_max:200},{id:5,type:"essay",cefr_level:"B2",prompt:"Some people think that remote work is the future. Others believe offices are essential. Discuss both views.",instructions:"Write a balanced essay.",example_response:null,evaluation_criteria:null,category:"work",word_limit_min:200,word_limit_max:350},{id:6,type:"sentence",cefr_level:"A1",prompt:"Write 5 sentences about your family using Present Simple.",instructions:"Use Present Simple tense.",example_response:null,evaluation_criteria:null,category:"daily_life",word_limit_min:20,word_limit_max:60},{id:7,type:"paragraph",cefr_level:"A2",prompt:"Write a short paragraph about your favorite food.",instructions:"Describe the food, why you like it.",example_response:null,evaluation_criteria:null,category:"daily_life",word_limit_min:50,word_limit_max:120},{id:8,type:"email",cefr_level:"B1",prompt:"Write an email to your friend inviting them to your birthday party.",instructions:"Include: date, time, place.",example_response:null,evaluation_criteria:null,category:"daily_life",word_limit_min:60,word_limit_max:150},{id:9,type:"opinion",cefr_level:"B1",prompt:"Do you think social media is good or bad for young people? Why?",instructions:"Give your opinion with at least 2 reasons.",example_response:null,evaluation_criteria:null,category:"technology",word_limit_min:100,word_limit_max:200},{id:10,type:"essay",cefr_level:"B2",prompt:"Some people think that remote work is the future. Others believe offices are essential. Discuss both views.",instructions:"Write a balanced essay.",example_response:null,evaluation_criteria:null,category:"work",word_limit_min:200,word_limit_max:350}],speaking_scenarios:[{id:1,title:"At a Restaurant",description:"Order food and drinks at a restaurant.",cefr_level:"A1",category:"restaurant",situation:"You are at a restaurant and want to order food.",ai_role:"Friendly waiter",user_role:"Customer",starter_message:"Good evening! Welcome to The Garden Restaurant. What would you like to order?",key_vocabulary:'["menu","order","appetizer","main course","dessert","bill"]',key_phrases:'["I would like...","Can I have...","The bill, please."]',objectives:'["Order food","Ask about a dish","Request the bill"]'},{id:2,title:"Job Interview",description:"Practice a job interview.",cefr_level:"B1",category:"work",situation:"You are interviewing for a position at a tech company.",ai_role:"HR manager",user_role:"Job candidate",starter_message:"Hello! Thank you for coming in today. Tell me a little about yourself.",key_vocabulary:'["experience","qualification","skill","strength","weakness"]',key_phrases:'["I have experience in...","My strengths include..."]',objectives:'["Introduce yourself","Describe your experience","Ask about the position"]'},{id:3,title:"Casual Conversation",description:"Have a friendly conversation about hobbies.",cefr_level:"A2",category:"social",situation:"You are meeting someone new at a social event.",ai_role:"Friendly person",user_role:"Someone making friends",starter_message:"Hi there! I'm Alex. What brings you here today?",key_vocabulary:'["hobby","interest","free time","enjoy","favorite"]',key_phrases:`["Nice to meet you!","I'm interested in...","What do you do for fun?"]`,objectives:'["Introduce yourself","Talk about hobbies","Ask questions"]'},{id:4,title:"At a Restaurant",description:"Order food and drinks at a restaurant.",cefr_level:"A1",category:"restaurant",situation:"You are at a restaurant and want to order food.",ai_role:"Friendly waiter",user_role:"Customer",starter_message:"Good evening! Welcome to The Garden Restaurant. What would you like to order?",key_vocabulary:'["menu","order","appetizer","main course","dessert","bill"]',key_phrases:'["I would like...","Can I have...","The bill, please."]',objectives:'["Order food","Ask about a dish","Request the bill"]'},{id:5,title:"Job Interview",description:"Practice a job interview.",cefr_level:"B1",category:"work",situation:"You are interviewing for a position at a tech company.",ai_role:"HR manager",user_role:"Job candidate",starter_message:"Hello! Thank you for coming in today. Tell me a little about yourself.",key_vocabulary:'["experience","qualification","skill","strength","weakness"]',key_phrases:'["I have experience in...","My strengths include..."]',objectives:'["Introduce yourself","Describe your experience","Ask about the position"]'},{id:6,title:"Casual Conversation",description:"Have a friendly conversation about hobbies.",cefr_level:"A2",category:"social",situation:"You are meeting someone new at a social event.",ai_role:"Friendly person",user_role:"Someone making friends",starter_message:"Hi there! I'm Alex. What brings you here today?",key_vocabulary:'["hobby","interest","free time","enjoy","favorite"]',key_phrases:`["Nice to meet you!","I'm interested in...","What do you do for fun?"]`,objectives:'["Introduce yourself","Talk about hobbies","Ask questions"]'}],listening_materials:[{id:1,title:"Introducing Yourself",description:"A person introduces themselves.",cefr_level:"A1",category:"daily_life",audio_text:"Hello! My name is Sarah. I am 28 years old. I am from London, but I live in Istanbul now. I work as a teacher at an international school. In my free time, I like reading books and cooking.",speech_rate:"slow",accent:"british",duration_seconds:null,transcript:"Hello! My name is Sarah. I am 28 years old. I am from London, but I live in Istanbul now. I work as a teacher at an international school. In my free time, I like reading books and cooking.",comprehension_questions:'[{"question":"Where is Sarah from?","options":["Istanbul","London","Paris","Berlin"],"correct":"London","type":"detail"},{"question":"What is her job?","options":["Doctor","Teacher","Engineer","Chef"],"correct":"Teacher","type":"detail"}]',key_vocabulary:'["introduce","international","free time"]',difficulty_notes:"Slow, clear British English."},{id:2,title:"A Phone Conversation",description:"Two friends making plans.",cefr_level:"A2",category:"daily_life",audio_text:"Mark: Hey Lisa, are you free this Saturday? Lisa: Yes, I think so. Why? Mark: I was thinking we could go to that new Italian restaurant downtown. Lisa: Oh yes! My colleague went there last week. She said the pasta was amazing. Mark: Great! How about 7 o'clock? Lisa: That works for me. See you Saturday!",speech_rate:"normal",accent:"american",duration_seconds:null,transcript:`Mark: Hey Lisa, are you free this Saturday?
Lisa: Yes, I think so. Why?
Mark: I was thinking we could go to that new Italian restaurant downtown.
Lisa: Oh yes! My colleague went there last week. She said the pasta was amazing.
Mark: Great! How about 7 o'clock?
Lisa: That works for me. See you Saturday!`,comprehension_questions:`[{"question":"What day are they planning to meet?","options":["Friday","Saturday","Sunday","Monday"],"correct":"Saturday","type":"detail"},{"question":"What type of restaurant?","options":["Chinese","Mexican","Italian","Turkish"],"correct":"Italian","type":"detail"},{"question":"What time will they meet?","options":["6 o'clock","7 o'clock","8 o'clock","9 o'clock"],"correct":"7 o'clock","type":"detail"}]`,key_vocabulary:'["downtown","colleague","amazing"]',difficulty_notes:"Natural dialogue with common conversational phrases."},{id:3,title:"Introducing Yourself",description:"A person introduces themselves.",cefr_level:"A1",category:"daily_life",audio_text:"Hello! My name is Sarah. I am 28 years old. I am from London, but I live in Istanbul now. I work as a teacher at an international school. In my free time, I like reading books and cooking.",speech_rate:"slow",accent:"british",duration_seconds:null,transcript:"Hello! My name is Sarah. I am 28 years old. I am from London, but I live in Istanbul now. I work as a teacher at an international school. In my free time, I like reading books and cooking.",comprehension_questions:'[{"question":"Where is Sarah from?","options":["Istanbul","London","Paris","Berlin"],"correct":"London","type":"detail"},{"question":"What is her job?","options":["Doctor","Teacher","Engineer","Chef"],"correct":"Teacher","type":"detail"}]',key_vocabulary:'["introduce","international","free time"]',difficulty_notes:"Slow, clear British English."},{id:4,title:"A Phone Conversation",description:"Two friends making plans.",cefr_level:"A2",category:"daily_life",audio_text:"Mark: Hey Lisa, are you free this Saturday? Lisa: Yes, I think so. Why? Mark: I was thinking we could go to that new Italian restaurant downtown. Lisa: Oh yes! My colleague went there last week. She said the pasta was amazing. Mark: Great! How about 7 o'clock? Lisa: That works for me. See you Saturday!",speech_rate:"normal",accent:"american",duration_seconds:null,transcript:`Mark: Hey Lisa, are you free this Saturday?
Lisa: Yes, I think so. Why?
Mark: I was thinking we could go to that new Italian restaurant downtown.
Lisa: Oh yes! My colleague went there last week. She said the pasta was amazing.
Mark: Great! How about 7 o'clock?
Lisa: That works for me. See you Saturday!`,comprehension_questions:`[{"question":"What day are they planning to meet?","options":["Friday","Saturday","Sunday","Monday"],"correct":"Saturday","type":"detail"},{"question":"What type of restaurant?","options":["Chinese","Mexican","Italian","Turkish"],"correct":"Italian","type":"detail"},{"question":"What time will they meet?","options":["6 o'clock","7 o'clock","8 o'clock","9 o'clock"],"correct":"7 o'clock","type":"detail"}]`,key_vocabulary:'["downtown","colleague","amazing"]',difficulty_notes:"Natural dialogue with common conversational phrases."}],assessment_question_bank:[{id:1,skill:"grammar",question_type:"multiple_choice",cefr_level:"A1",topic:"Present Simple",question:"She ___ to the gym three times a week.",options:'["go","goes","going","is go"]',correct_answer:"goes",explanation:"Third-person singular (she) takes the -s/-es suffix in the Present Simple.",explanation_tr:"Geniş zamanda 3. tekil şahıs (he/she/it) fiile -s veya -es takısı alır."},{id:2,skill:"grammar",question_type:"multiple_choice",cefr_level:"A2",topic:"Past Simple vs Continuous",question:"While I ___ dinner, the electricity suddenly went out.",options:'["cooked","was cooking","have cooked","am cooking"]',correct_answer:"was cooking",explanation:"Past Continuous expresses an ongoing background action interrupted by a shorter action in Past Simple.",explanation_tr:"Geçmişte devam eden bir eylem sırasında başka bir olay gerçekleştiğinde devam eden eylem için Past Continuous kullanılır."},{id:3,skill:"grammar",question_type:"multiple_choice",cefr_level:"B1",topic:"Present Perfect",question:"We ___ in this city since 2018.",options:'["live","are living","have lived","lived"]',correct_answer:"have lived",explanation:'Present Perfect is used with "since" to indicate an action that began in the past and continues into the present.',explanation_tr:'"Since" ile geçmişte başlayıp günümüze kadar süregelen durumlar için Present Perfect kullanılır.'},{id:4,skill:"grammar",question_type:"multiple_choice",cefr_level:"B1",topic:"Conditionals (Second)",question:"If I ___ more time, I would learn a musical instrument.",options:'["have","had","would have","will have"]',correct_answer:"had",explanation:'Second conditional uses "If + Past Simple, would + base verb" for hypothetical present situations.',explanation_tr:"İkinci tip koşul cümlelerinde (gerçek dışı şimdiki durum) if cümlesinde Past Simple kullanılır."},{id:5,skill:"grammar",question_type:"multiple_choice",cefr_level:"B2",topic:"Passive Voice & Modals",question:"All reports must ___ to the manager before 5 PM today.",options:'["submit","be submitted","have submitted","being submitted"]',correct_answer:"be submitted",explanation:"Modal verbs in passive voice follow the pattern: modal + be + past participle (V3).",explanation_tr:'Modal fiillerin edilgen biçimi "modal + be + V3" kuralını izler.'},{id:6,skill:"grammar",question_type:"multiple_choice",cefr_level:"B2",topic:"Mixed Conditionals / Inversion",question:"Had I known about the road closure, I ___ a completely different route.",options:'["would take","will take","would have taken","took"]',correct_answer:"would have taken",explanation:'Inverted Third Conditional: "Had I known" replaces "If I had known", paired with "would have + V3".',explanation_tr:'Devrik 3. tip koşul cümlesi ("Had I known..."), ana cümlede "would have + V3" gerektirir.'},{id:7,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"A1",topic:"Daily Life",question:"Which word means the meal you eat in the middle of the day?",options:'["Breakfast","Lunch","Dinner","Supper"]',correct_answer:"Lunch",explanation:"Lunch is the meal eaten in the middle of the day.",explanation_tr:'Öğle vakti yenen öğün "lunch"tır.'},{id:8,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"A2",topic:"Collocations with Make/Do",question:"Don't worry if you ___ a mistake; that's how we learn.",options:'["do","make","create","build"]',correct_answer:"make",explanation:'The natural English collocation is "make a mistake", never "do a mistake".',explanation_tr:'İngilizcede "hata yapmak" için "make a mistake" kalıbı kullanılır; "do" kullanılmaz.'},{id:9,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"B1",topic:"Phrasal Verbs",question:"The meeting was ___ until next Tuesday because the director was ill.",options:'["put off","called off","turned down","brought up"]',correct_answer:"put off",explanation:'"Put off" means to postpone or reschedule. "Call off" means to cancel entirely.',explanation_tr:'"Put off" ertelemek anlamına gelir. "Call off" ise tamamen iptal etmektir.'},{id:10,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"B1",topic:"False Friends (L1 Turkish interference)",question:"He is very understanding and caring; he is a truly ___ person.",options:'["sympathetic","sympathy","antipathic","suspicious"]',correct_answer:"sympathetic",explanation:'In English, "sympathetic" means showing compassion or understanding, whereas in Turkish "sempatik" means likable/cute.',explanation_tr:'İngilizcede "sympathetic" şefkatli, anlayışlı demektir; Türkçedeki "sempatik/cana yakın" anlamında değildir (false friend).'},{id:11,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"B2",topic:"Academic & Professional Lexis",question:"The new economic reform will have far-reaching ___ for small businesses.",options:'["implications","complaints","suspicions","appliances"]',correct_answer:"implications",explanation:'"Implications" refers to the possible future effects or results of an action.',explanation_tr:'"Implications" bir kararın veya eylemin gelecekteki olası sonuçları/etkileri anlamına gelir.'},{id:12,skill:"reading",question_type:"multiple_choice",cefr_level:"A1",topic:"Short Notice",question:`Text: "Library hours: Monday to Friday 9:00 AM - 6:00 PM. Closed on weekends."
Question: Can you visit the library on Sunday?`,options:'["Yes, at 10 AM","No, it is closed","Only in the afternoon","Yes, all day"]',correct_answer:"No, it is closed",explanation:'The sign explicitly states "Closed on weekends". Sunday is a weekend day.',explanation_tr:"Duyuruda hafta sonları kapalı olduğu açıkça belirtilmiştir."},{id:13,skill:"reading",question_type:"multiple_choice",cefr_level:"A2",topic:"Email Details",question:`Email: "Hi team, please note our weekly sync is moved from Wednesday 10 AM to Thursday 2 PM in Room B."
Question: When is the new meeting time?`,options:'["Wednesday at 10 AM","Thursday at 2 PM","Thursday at 10 AM","Wednesday at 2 PM"]',correct_answer:"Thursday at 2 PM",explanation:"The email specifies the rescheduled time as Thursday 2 PM.",explanation_tr:"E-postada yeni toplantı saatinin Perşembe saat 14:00 olduğu yazmaktadır."},{id:14,skill:"reading",question_type:"multiple_choice",cefr_level:"B1",topic:"Inference",question:`Text: "Although the flight was delayed by three hours, the cabin crew's warmth and constant updates kept everyone calm."
Question: What was the passengers' general mood?`,options:'["Furious and aggressive","Relatively calm and patient","Bored and asleep","Panicked"]',correct_answer:"Relatively calm and patient",explanation:'The text directly notes that the crew "kept everyone calm".',explanation_tr:"Metinde mürettebatın herkesi sakin tuttuğu belirtilmektedir."},{id:15,skill:"reading",question_type:"multiple_choice",cefr_level:"B2",topic:"Tone and Argumentation",question:`Text: "While critics hail the algorithm as a panacea for urban congestion, its reliance on historical commute patterns risks cementing existing transit inequities."
Question: What is the author's stance on the algorithm?`,options:'["Unreserved praise","Cautious and critical of blind optimism","Complete dismissal as useless","Indifferent"]',correct_answer:"Cautious and critical of blind optimism",explanation:'The author acknowledges that critics call it a panacea, but highlights serious risks ("cementing existing inequities").',explanation_tr:'Yazar algoritmaya dair aşırı iyimserliği ("panacea") eleştirerek yarattığı eşitsizlik risklerine dikkat çeker.'},{id:16,skill:"listening",question_type:"multiple_choice",cefr_level:"A1",topic:"Numbers & Time",question:'If a speaker says "Quarter past seven", what time do they mean?',options:'["7:15","7:45","6:45","7:30"]',correct_answer:"7:15",explanation:'"Quarter past" means 15 minutes after the hour (7:15).',explanation_tr:`"Quarter past seven", 7'yi çeyrek geçe (7:15) anlamına gelir.`},{id:17,skill:"listening",question_type:"multiple_choice",cefr_level:"A2",topic:"Connected Speech Reduction",question:'In spoken casual English, "What do you want to do?" often sounds like:',options:'["Whatcha wanna do?","What you did do?","Where you wanna go?","What did you done?"]',correct_answer:"Whatcha wanna do?",explanation:'Natural connected speech compresses "what do you" into /wʌtʃə/ or /wʌdʒə/ and "want to" into /wɒnə/.',explanation_tr:'Doğal konuşma dilinde "what do you" -> "whatcha" ve "want to" -> "wanna" şeklinde kaynaşır.'},{id:18,skill:"listening",question_type:"multiple_choice",cefr_level:"B1",topic:"Intonation & Attitude",question:'If someone replies "Oh, brilliant..." with a heavy falling pitch and a sigh, they most likely mean:',options:`["They are thrilled and excited","They are sarcastic and actually unhappy","They are confused","They didn't hear you"]`,correct_answer:"They are sarcastic and actually unhappy",explanation:'A falling sigh tone on "brilliant" is a classic British sarcastic expression indicating disappointment.',explanation_tr:'İç çekerek alçalan tonlamayla söylenen "Oh, brilliant..." tipik bir ironi (sarkazm) olup hayal kırıklığı belirtir.'},{id:19,skill:"listening",question_type:"multiple_choice",cefr_level:"B2",topic:"Nuance in Dialogue",question:`Speaker A: "Are you coming to Sarah's retirement party?"
Speaker B: "Well, let's just say we haven't seen eye to eye lately."
Question: What does Speaker B imply?`,options:'["They have poor eyesight","They have had disagreements with Sarah","They will arrive late","Sarah forgot to invite them"]',correct_answer:"They have had disagreements with Sarah",explanation:'"Not see eye to eye" is an idiom meaning not agreeing or having conflicts with someone.',explanation_tr:'"Not see eye to eye" kalıbı biriyle anlaşamamak, fikir ayrılığı yaşamak anlamına gelir.'},{id:20,skill:"writing",question_type:"multiple_choice",cefr_level:"A1",topic:"Basic Capitalization & Punctuation",question:"Which sentence is punctuated and capitalized correctly?",options:'["i live in Istanbul with my Sister.","I live in Istanbul with my sister.","I live in istanbul with my sister","I live In Istanbul with My Sister."]',correct_answer:"I live in Istanbul with my sister.",explanation:'Capitalize "I", proper nouns like "Istanbul", and end with a period. Common nouns like "sister" are lowercase.',explanation_tr:'Cümle başı ve "I" zamiri, şehir isimleri büyük harfle başlar; "sister" gibi cins isimler küçük kalır.'},{id:21,skill:"writing",question_type:"multiple_choice",cefr_level:"A2",topic:"Connectors",question:"I was very tired, ___ I still managed to finish my project on time.",options:'["so","because","but","since"]',correct_answer:"but",explanation:'"But" introduces a contrasting fact to being tired.',explanation_tr:'Yorgun olma durumuyla projenin bitmesi arasındaki zıtlığı "but" bağlacı ifade eder.'},{id:22,skill:"writing",question_type:"multiple_choice",cefr_level:"B1",topic:"Formal Email Register",question:"Which closing sentence is most appropriate for a formal job application email?",options:'["Catch you later, hope you like my CV!","I look forward to hearing from you at your earliest convenience.","Write me back whenever you want.","See ya soon, best vibes!"]',correct_answer:"I look forward to hearing from you at your earliest convenience.",explanation:'Professional correspondence requires standard courteous formulas like "I look forward to hearing from you...".',explanation_tr:'Resmi iş yazışmalarında profesyonel nezaket kalıbı "I look forward to hearing from you..." kullanılır.'},{id:23,skill:"writing",question_type:"multiple_choice",cefr_level:"B2",topic:"Cohesive Devices",question:"The initial trial produced promising results. ___, subsequent studies failed to replicate the same outcomes.",options:'["However","Furthermore","Consequently","In addition"]',correct_answer:"However",explanation:'"However" shows an unexpected contrast or limitation following a positive statement.',explanation_tr:'İlk cümlenin olumlu sonucuna karşı sonraki çalışmaların başarısızlığını zıtlık belirten "However" bağlar.'},{id:24,skill:"speaking",question_type:"multiple_choice",cefr_level:"A1",topic:"Greetings & Introductions",question:'When meeting someone for the first time in a polite setting, how do you respond to "How do you do?"',options:'["I do fine, thanks.","How do you do?","I am doing homework.","Yes, I do."]',correct_answer:"How do you do?",explanation:'In formal British English, the traditional reply to "How do you do?" is also "How do you do?" or "Pleased to meet you".',explanation_tr:'Resmi İngilizcede ilk tanışmada söylenen "How do you do?" kalıbına geleneksel olarak yine "How do you do?" veya "Pleased to meet you" ile yanıt verilir.'},{id:25,skill:"speaking",question_type:"multiple_choice",cefr_level:"A2",topic:"Polite Requests",question:"What is the most polite way to ask for a glass of water in a cafe?",options:'["Give me water now.","Could I have a glass of water, please?","I want water quickly.","Water is needed by me."]',correct_answer:"Could I have a glass of water, please?",explanation:'"Could I have... please?" is standard polite English for ordering or requesting.',explanation_tr:'Rica ve siparişlerde "Could I have..., please?" en doğal ve kibar yapıdır.'},{id:26,skill:"speaking",question_type:"multiple_choice",cefr_level:"B1",topic:"Giving Advice",question:"A friend has an intense headache before an exam. What sounds most natural?",options:'["You had better get some rest and take an aspirin.","You must to sleep right now without excuses.","Why you not sleep?","It is compulsory for you to rest."]',correct_answer:"You had better get some rest and take an aspirin.",explanation:'"You had better..." is used for urgent, direct advice where negative consequences might follow.',explanation_tr:'"You had better (do sth)" yapısı acil ve önemli tavsiyeler vermek için en doğal kullanımdır.'},{id:27,skill:"speaking",question_type:"multiple_choice",cefr_level:"B2",topic:"Diplomatic Disagreement",question:"In a professional meeting, how do you disagree diplomatically with a colleague's proposal?",options:`["That idea is completely wrong and makes no sense.","I see where you're coming from, but we should also consider the budgetary constraints.","Shut up, my plan is superior.","You are mistaken about everything."]`,correct_answer:"I see where you're coming from, but we should also consider the budgetary constraints.",explanation:"Diplomatic English acknowledges the other speaker's perspective before introducing reservations or alternatives.",explanation_tr:`Diplomatik iş İngilizcesinde önce karşı tarafın görüşü onaylanır ("I see where you're coming from"), ardından çekince sunulur.`},{id:28,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A1",topic:"Past -ed Endings",question:'In which word is the "-ed" pronounced as an extra syllable /ɪd/ or /əd/?',options:'["Worked","Played","Needed","Watched"]',correct_answer:"Needed",explanation:'The "-ed" ending is pronounced as /ɪd/ only after verbs ending in /t/ or /d/ sounds (need -> needed).',explanation_tr:"Düzenli fiillerde -ed takısı sadece /t/ ve /d/ seslerinden sonra ayrı bir hece (/ɪd/) olarak okunur (need -> needed)."},{id:29,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A2",topic:"Silent Letters",question:'Which letter is SILENT in the word "doubt"?',options:'["d","o","u","b"]',correct_answer:"b",explanation:'The letter "b" is completely silent in "doubt" /daʊt/, just like in "debt" and "subtle".',explanation_tr:'"Doubt" kelimesindeki "b" harfi okunmaz (sessiz harftir: /daʊt/).'},{id:30,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B1",topic:"Word Stress & Part of Speech",question:'When "record" is used as a VERB ("They ___ a podcast"), where is the stress?',options:'["On the FIRST syllable (RE-cord)","On the SECOND syllable (re-CORD)","Both syllables equally","Neither"]',correct_answer:"On the SECOND syllable (re-CORD)",explanation:"Two-syllable noun/verb pairs: nouns stress the 1st syllable (a REcord), verbs stress the 2nd syllable (to reCORD).",explanation_tr:"İki heceli isim/fiil çiftlerinde isimlerde vurgu ilk hecede (REcord), fiillerde ikinci hecededir (reCORD)."},{id:31,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B2",topic:"Vowel Length Minimal Pairs",question:"Which pair of words contains contrasting short /ɪ/ vs long /iː/ vowel sounds?",options:'["Ship and Sheep","Cat and Cut","Pen and Pan","Full and Fool"]',correct_answer:"Ship and Sheep",explanation:'"Ship" has the short lax vowel /ʃɪp/ while "sheep" has the long tense vowel /ʃiːp/.',explanation_tr:'"Ship" kısa /ɪ/ sesi, "sheep" ise uzun /iː/ sesi barındıran klasik bir minimal çift örneğidir.'},{id:32,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A1",topic:"Basic Word Order (SVO)",question:"Choose the sentence with the correct English word order:",options:'["Always he drinks coffee in the morning.","He drinks always coffee in the morning.","He always drinks coffee in the morning.","In the morning coffee he always drinks."]',correct_answer:"He always drinks coffee in the morning.",explanation:"Adverbs of frequency (always, often, rarely) go between the subject and the main verb.",explanation_tr:"Sıklık zarfları (always, often vb.) özne ile asıl fiil arasına gelir."},{id:33,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A2",topic:"Indirect Questions",question:"Choose the correct indirect question formulation:",options:'["Could you tell me where is the station?","Could you tell me where the station is?","Could you tell me where does the station be?","Could you tell me where is station located?"]',correct_answer:"Could you tell me where the station is?",explanation:'In indirect questions, the clause returns to statement order: "where + subject + verb".',explanation_tr:'Dolaylı sorularda ("Could you tell me..."), soru cümlesi düz cümle sırasına (özne + fiil) döner.'},{id:34,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B1",topic:"Relative Clause Placement",question:"Which sentence correctly places the defining relative clause?",options:'["The woman who designed our website received an award.","The woman received an award who designed our website.","The woman who received an award our website designed.","Who designed our website the woman received an award."]',correct_answer:"The woman who designed our website received an award.",explanation:'A relative clause must directly follow the noun it modifies ("the woman who designed...").',explanation_tr:"Sıfat cümlecikleri niteledikleri ismin hemen ardından gelmelidir."},{id:35,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B2",topic:"Inversion after Negative Adverbials",question:"Seldom ___ such an inspiring speech in my entire career.",options:'["I have heard","have I heard","I heard","did I heard"]',correct_answer:"have I heard",explanation:"Negative or restrictive adverbials at the beginning of a sentence (seldom, rarely, never) require auxiliary inversion.",explanation_tr:'Cümle başına gelen kısıtlayıcı/olumsuz zarflar ("Seldom, Never") yardımcı fiilin öznenin önüne geçmesini (inversion) zorunlu kılar.'},{id:36,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A1",topic:"Context Clues",question:'"Liam took out his umbrella because dark clouds filled the sky." Why did Liam take out his umbrella?',options:'["It was very sunny","He expected rain","He wanted to play football","He was going to sleep"]',correct_answer:"He expected rain",explanation:"Dark clouds signify incoming precipitation, so taking out an umbrella indicates expecting rain.",explanation_tr:"Gökyüzündeki kara bulutlar yağmur beklentisine işaret eder."},{id:37,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A2",topic:"Idiomatic Sense",question:'If someone says "I am under the weather today", they mean:',options:'["They are standing outside in the rain","They feel slightly unwell or sick","They love sunny days","They are flying in an airplane"]',correct_answer:"They feel slightly unwell or sick",explanation:'"Under the weather" is a very common idiom meaning feeling sick or indisposed.',explanation_tr:'"Under the weather" kendini hasta veya keyifsiz hissetmek anlamına gelen yaygın bir deyimdir.'},{id:38,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B1",topic:"Thinking in English vs Translating",question:'In Turkish, you say "İyi ki doğdun". What is the natural, native English thought process and expression?',options:'["\\"Good that you were born\\"","\\"Happy Birthday\\"","\\"Nice birthday to you\\"","\\"It is well you came into the world\\""]',correct_answer:"Happy Birthday",explanation:'English does not translate the literal Turkish sentiment; natural English thinking directly maps to "Happy Birthday".',explanation_tr:'Türkçedeki "İyi ki doğdun" kalıbı kelimesi kelimesine çevrilmez; İngilizce düşüncede karşılığı doğrudan "Happy Birthday"dir.'},{id:39,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B2",topic:"Pragmatic Implicature",question:`When a manager says, "You might want to review section three before tomorrow's client presentation," this is pragmatically:`,options:'["A neutral observation you can freely ignore","A polite but firm directive that section three contains flaws that need fixing","A compliment on section three","A question about your availability"]',correct_answer:"A polite but firm directive that section three contains flaws that need fixing",explanation:'In Anglo-American corporate communication, "You might want to..." is an understated, polite command to fix something.',explanation_tr:'İngilizce iş kültüründe "You might want to..." şeklindeki yumuşatılmış ifadeler nezaketen öneri süsü verilmiş net talimatlardır.'},{id:40,skill:"communication",question_type:"multiple_choice",cefr_level:"A1",topic:"Asking for Help",question:"You are lost in London. What is the most natural way to stop a stranger on the street?",options:'["Stop walking, human!","Excuse me, could you help me?","Hey, you listen to me.","Where is hotel?"]',correct_answer:"Excuse me, could you help me?",explanation:'"Excuse me..." is the universally expected, polite opening to approach a stranger in English.',explanation_tr:'Bir yabancının dikkatini çekip yardım istemenin en evrensel ve kibar yolu "Excuse me, could you help me?"dir.'},{id:41,skill:"communication",question_type:"multiple_choice",cefr_level:"A2",topic:"Clarification Strategy",question:"If you did not understand what someone just said, which phrase asks them to repeat naturally?",options:'["What? Speak louder!","Sorry, could you say that again, please?","You are talking nonsense.","Repeat your words immediately."]',correct_answer:"Sorry, could you say that again, please?",explanation:'"Sorry, could you say that again, please?" is courteous and effective for conversational repair.',explanation_tr:'Anlaşılmayan bir şeyi tekrar ettirmenin en doğal iletişim stratejisi "Sorry, could you say that again, please?"dir.'},{id:42,skill:"communication",question_type:"multiple_choice",cefr_level:"B1",topic:"Polite Interruption",question:"You need to ask a brief question during a team discussion. What is the best way to interject?",options:`["Stop speaking now, my turn.","Sorry to interrupt, but may I quickly clarify something?","Listen to me instead.","That's enough from you."]`,correct_answer:"Sorry to interrupt, but may I quickly clarify something?",explanation:'"Sorry to interrupt, but may I quickly..." allows polite turn-taking without sounding aggressive.',explanation_tr:'Bir konuşmayı kibarca bölüp araya girmek için "Sorry to interrupt, but may I quickly..." kullanılır.'},{id:43,skill:"communication",question_type:"multiple_choice",cefr_level:"B2",topic:"Managing Hesitations & Fluency",question:"When asked a complex question in an interview and you need 5 seconds to think, which filler maintains fluent communication best?",options:`["Dead silence for 10 seconds staring at the floor","\\"That's a really thoughtful question. Let me reflect on that for a second...\\"","\\"Wait! Don't talk to me!\\"","\\"I don't know anything.\\""]`,correct_answer:`"That's a really thoughtful question. Let me reflect on that for a second..."`,explanation:"Native speakers use conversational bridge phrases to buy cognitive processing time without breaking conversational flow.",explanation_tr:`Akıcılığı korumak ve düşünme süresi kazanmak için "That's a great question, let me reflect on that..." gibi köprü ifadeler kullanılır.`}]};class A{constructor(){this.storageKeyPrefix="linguaforge_local_",this.initStorage()}initStorage(){if(this.get("stats")||this.set("stats",{xp:120,level:1,current_streak:1,longest_streak:1,total_study_minutes:15,total_words_learned:10,total_grammar_mastered:4,total_errors_resolved:2,last_study_date:new Date().toISOString().slice(0,10)}),this.get("skills")||this.set("skills",{grammar:{level:"A2",sublevel:"+",score:65},vocabulary:{level:"A2",sublevel:"",score:55},reading:{level:"B1",sublevel:"-",score:68},listening:{level:"A2",sublevel:"+",score:62},writing:{level:"A2",sublevel:"",score:50},speaking:{level:"A2",sublevel:"",score:48},pronunciation:{level:"A2",sublevel:"",score:52},sentence_formation:{level:"A2",sublevel:"+",score:60},comprehension:{level:"B1",sublevel:"",score:70},communication:{level:"A2",sublevel:"",score:54}}),this.get("errors")||this.set("errors",[{id:1,skill:"grammar",error_text:"She don't like coffee.",correction:"She doesn't like coffee.",explanation:`Third-person singular requires "doesn't" in the Present Simple, not "don't".`,occurrence_count:2,resolved:0},{id:2,skill:"vocabulary",error_text:"I made my homework.",correction:"I did my homework.",explanation:'Collocation error: in English we "do homework" and "make a mistake".',occurrence_count:3,resolved:0}]),!this.get("srs_items")){const e=f.vocabulary_items.map((t,i)=>({...t,id:t.id||i+1,examples:typeof t.examples=="string"?JSON.parse(t.examples||"[]"):t.examples,synonyms:typeof t.synonyms=="string"?JSON.parse(t.synonyms||"[]"):t.synonyms,antonyms:typeof t.antonyms=="string"?JSON.parse(t.antonyms||"[]"):t.antonyms,collocations:typeof t.collocations=="string"?JSON.parse(t.collocations||"[]"):t.collocations,interval:1,ease_factor:2.5,repetitions:1,due:!0}));this.set("srs_items",e)}}get(e){try{const t=localStorage.getItem(this.storageKeyPrefix+e);return t?JSON.parse(t):null}catch{return null}}set(e,t){try{localStorage.setItem(this.storageKeyPrefix+e,JSON.stringify(t))}catch{}}async getDashboard(){const e=this.get("stats"),t=this.get("skills"),i=this.get("errors")||[],s=this.get("srs_items")||[],n=s.filter(a=>a.due).length;return{user:{displayName:localStorage.getItem("linguaforge_display_name")||"English Learner",onboardingComplete:!0},stats:e,skills:t,dailyTasks:{tasks:[{id:"task-vocab",skill:"vocabulary",description:"Review 10 vocabulary cards in Spaced Repetition queue",targetView:"vocabulary"},{id:"task-grammar",skill:"grammar",description:"Complete 1 exercise in Grammar Academy",targetView:"grammar"},{id:"task-reading",skill:"reading",description:"Read 1 graded article and answer comprehension questions",targetView:"reading"},{id:"task-speaking",skill:"speaking",description:"Practice 1 conversational speaking scenario",targetView:"speaking"}],completed_tasks:this.get("completed_tasks")||[]},recentErrors:i.filter(a=>!a.resolved),reviewStats:{dueToday:n,totalItems:s.length},weekStudy:[{date:"2026-09-21",total_minutes:25},{date:"2026-09-22",total_minutes:30},{date:"2026-09-23",total_minutes:20},{date:"2026-09-24",total_minutes:35},{date:"2026-09-25",total_minutes:15},{date:"2026-09-26",total_minutes:40},{date:"2026-09-27",total_minutes:25}],latestAssessment:this.get("latest_assessment")||{overall_cefr:"B1",results:{overallCEFR:"B1"}}}}async startAssessment(){const e=Date.now();return this.currentAssessment={id:e,answers:[],skillsEvaluated:{}},{assessmentId:e,skills:["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],message:"Diagnostic assessment started."}}async getAssessmentQuestions(e,t){const n=(f.assessment_question_bank||[]).filter(a=>a.skill===t).slice(0,4).map(a=>({id:a.id,type:a.question_type,question:a.question,options:typeof a.options=="string"?JSON.parse(a.options):a.options,cefrLevel:a.cefr_level,topic:a.topic}));return{skill:t,targetLevel:"A2",questions:n}}async submitAssessmentAnswer(e,t,i,s){const n=f.assessment_question_bank||[],a=n.find(o=>o.id===t)||n[0],r=i.trim().toLowerCase()===a.correct_answer.trim().toLowerCase();if(!r){const o=this.get("errors")||[];o.unshift({id:Date.now(),skill:a.skill,error_text:i,correction:a.correct_answer,explanation:a.explanation||"Question mistake in diagnostic test.",occurrence_count:1,resolved:0}),this.set("errors",o)}return{questionId:t,isCorrect:r,score:r?1:0,correctAnswer:a.correct_answer,explanation:a.explanation,explanationTr:a.explanation_tr,skill:a.skill,cefrLevel:a.cefr_level,topic:a.topic}}async completeAssessment(e){const t={grammar:{level:"B1",sublevel:"",score:75,correct:3,total:4,accuracy:75},vocabulary:{level:"A2",sublevel:"+",score:70,correct:3,total:4,accuracy:75},reading:{level:"B1",sublevel:"+",score:80,correct:4,total:4,accuracy:100},listening:{level:"A2",sublevel:"+",score:65,correct:3,total:4,accuracy:75},writing:{level:"A2",sublevel:"",score:55,correct:2,total:4,accuracy:50},speaking:{level:"A2",sublevel:"",score:50,correct:2,total:4,accuracy:50},pronunciation:{level:"A2",sublevel:"+",score:60,correct:3,total:4,accuracy:75},sentence_formation:{level:"B1",sublevel:"-",score:65,correct:3,total:4,accuracy:75},comprehension:{level:"B1",sublevel:"+",score:85,correct:4,total:4,accuracy:100},communication:{level:"A2",sublevel:"+",score:60,correct:3,total:4,accuracy:75}},i={overallCEFR:"B1",skills:t,weakAreas:[{skill:"speaking",level:"A2",detail:"Hesitations and turn-taking strategies"},{skill:"writing",level:"A2",detail:"Connector usage and formal register"}],strongAreas:[{skill:"reading",level:"B1+",detail:"High inference and speed accuracy"},{skill:"comprehension",level:"B1+",detail:"Intuitive idiom comprehension"}],totalQuestions:40,totalCorrect:29};this.set("latest_assessment",i);const s=this.get("skills")||{};for(const[n,a]of Object.entries(t))s[n]={level:a.level,sublevel:a.sublevel,score:a.score};return this.set("skills",s),i}async getGrammarTopics(){return(f.grammar_topics||[]).map(e=>({...e,examples:typeof e.examples=="string"?JSON.parse(e.examples):e.examples,rules:typeof e.rules=="string"?JSON.parse(e.rules):e.rules,common_mistakes:typeof e.common_mistakes=="string"?JSON.parse(e.common_mistakes):e.common_mistakes,prerequisite_topics:typeof e.prerequisite_topics=="string"?JSON.parse(e.prerequisite_topics||"[]"):e.prerequisite_topics}))}async getGrammarTopic(e){const t=await this.getGrammarTopics(),i=t.find(n=>n.slug===e)||t[0],s=(f.grammar_exercises||[]).filter(n=>n.topic_id===i.id).map(n=>({...n,options:typeof n.options=="string"?JSON.parse(n.options):n.options}));return{topic:i,exercises:s}}async submitGrammarExercise(e,t){const i=f.grammar_exercises||[],s=i.find(r=>r.id===e)||i[0],n=t.trim().toLowerCase()===s.correct_answer.trim().toLowerCase(),a=this.get("stats");return a.xp+=n?15:5,this.set("stats",a),{isCorrect:n,correctAnswer:s.correct_answer,feedback:n?"Excellent! Correct usage.":`Incorrect. The target form is: ${s.correct_answer}`,explanation:s.explanation,explanationTr:s.explanation_tr}}async getVocabularyItems(e={}){const t=(this.get("srs_items")||[]).map(i=>({...i,examples:typeof i.examples=="string"?JSON.parse(i.examples):i.examples,collocations:typeof i.collocations=="string"?JSON.parse(i.collocations):i.collocations}));return{items:t,total:t.length}}async getReviewQueue(){const e=(this.get("srs_items")||[]).filter(t=>t.due);return{items:e,dueToday:e.length}}async submitReview(e,t){const i=this.get("srs_items")||[],s=i.findIndex(a=>a.id===e);s!==-1&&(i[s].due=!1,i[s].repetitions+=1,this.set("srs_items",i));const n=this.get("stats");return n.xp+=10,n.total_words_learned+=1,this.set("stats",n),{success:!0}}async getReadingMaterials(){return(f.reading_materials||[]).map(e=>({...e,comprehension_questions:typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary}))}async getReadingMaterial(e){const t=await this.getReadingMaterials();return{material:t.find(s=>s.id===parseInt(e,10))||t[0]}}async submitReading(e,t,i){const{material:s}=await this.getReadingMaterial(e),n=s.comprehension_questions||[];let a=0;const r=n.map((h,y)=>{const b=t[y]||"",k=b.trim().toLowerCase()===h.correct.trim().toLowerCase();return k&&a++,{question:h.question,userAnswer:b,correctAnswer:h.correct,isCorrect:k}}),o=Math.round(a/Math.max(n.length,1)*100),l=Math.round(s.word_count/Math.max(i,10)*60),d=this.get("stats");return d.xp+=o>=70?30:15,this.set("stats",d),{score:o,correctCount:a,totalCount:n.length,wordCount:s.word_count,wordsPerMinute:l,details:r}}async getListeningMaterials(){return(f.listening_materials||[]).map(e=>({...e,comprehension_questions:typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary}))}async getListeningMaterial(e){const t=await this.getListeningMaterials();return{material:t.find(s=>s.id===parseInt(e,10))||t[0]}}async submitListening(e,t,i){const{material:s}=await this.getListeningMaterial(e),n=s.comprehension_questions||[];let a=0;const r=n.map((l,d)=>{const h=t[d]||"",y=h.trim().toLowerCase()===l.correct.trim().toLowerCase();return y&&a++,{question:l.question,userAnswer:h,correctAnswer:l.correct,isCorrect:y}});return{score:Math.round(a/Math.max(n.length,1)*100),correctCount:a,totalCount:n.length,listenCount:i,details:r}}async getWritingPrompts(){return f.writing_prompts||[]}async submitWriting(e,t,i){const s=t.split(/\s+/).length,n=(t.match(/[^.!?]+[.!?]+/g)||[]).length||1,a=(s/n).toFixed(1),r=Math.min(100,Math.max(60,50+Math.round(s/4))),o=r>=85?"B2":r>=70?"B1":"A2";return{overallScore:r,cefrLevel:o,grammarScore:82,vocabularyScore:78,structureScore:84,feedback:[`Good syntactic variety with an average sentence length of ${a} words.`,"Strong use of contextual vocabulary aligned with the prompt requirements.",'Consider incorporating more cohesive discourse markers (e.g., "Furthermore", "In contrast", "Consequently") to boost narrative flow.'],errors:[]}}async getSpeakingScenarios(){return(f.speaking_scenarios||[]).map(e=>({...e,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary,key_phrases:typeof e.key_phrases=="string"?JSON.parse(e.key_phrases):e.key_phrases,objectives:typeof e.objectives=="string"?JSON.parse(e.objectives):e.objectives}))}async getSpeakingScenario(e){const t=await this.getSpeakingScenarios();return{scenario:t.find(s=>s.id===parseInt(e,10))||t[0]}}async getErrors(e={}){return{errors:this.get("errors")||[]}}async resolveError(e){const t=this.get("errors")||[],i=t.findIndex(n=>String(n.id)===String(e));i!==-1&&(t[i].resolved=1,this.set("errors",t));const s=this.get("stats");return s.total_errors_resolved+=1,this.set("stats",s),{success:!0}}async generateDailyTasks(){return{success:!0}}async getProgressHistory(){return{history:[]}}async getWeeklyReport(){return{report:null}}}const c=new A,q=typeof window<"u"&&(window.location.hostname.includes("github.io")||window.location.protocol==="file:"),$="/api";class E{constructor(){this.userId=localStorage.getItem("linguaforge_user_id")||"local_learner",this.username=localStorage.getItem("linguaforge_username")||"learner",this.useLocal=q}setSession(e,t){this.userId=e,this.username=t,e?localStorage.setItem("linguaforge_user_id",e):localStorage.removeItem("linguaforge_user_id"),t?localStorage.setItem("linguaforge_username",t):localStorage.removeItem("linguaforge_username")}getHeaders(){const e={"Content-Type":"application/json"};return this.userId&&(e["x-user-id"]=this.userId),e}async request(e,t={}){if(this.useLocal)throw new Error("Using local service");const i=`${$}${e}`,s={...t,headers:{...this.getHeaders(),...t.headers||{}}};try{const n=await fetch(i,s);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return await n.json()}catch(n){throw this.useLocal=!0,n}}async register(e,t){if(localStorage.setItem("linguaforge_display_name",t),this.useLocal)return{userId:"local_"+Date.now(),username:e,displayName:t};try{const i=await this.request("/auth/register",{method:"POST",body:JSON.stringify({username:e,displayName:t})});return this.setSession(i.userId,i.username),i}catch{return{userId:"local_"+Date.now(),username:e,displayName:t}}}async login(e){if(this.useLocal)return{userId:"local_user",username:e,displayName:"English Learner"};try{const t=await this.request("/auth/login",{method:"POST",body:JSON.stringify({username:e})});return this.setSession(t.userId,t.username),t}catch{return{userId:"local_user",username:e,displayName:"English Learner"}}}async getProfile(){if(this.useLocal)return{user:{displayName:localStorage.getItem("linguaforge_display_name")||"English Learner"}};try{return await this.request("/user/profile")}catch{return{user:{displayName:localStorage.getItem("linguaforge_display_name")||"English Learner"}}}}async getDashboard(){if(this.useLocal)return c.getDashboard();try{return await this.request("/dashboard")}catch{return c.getDashboard()}}async startAssessment(){if(this.useLocal)return c.startAssessment();try{return await this.request("/assessment/start",{method:"POST"})}catch{return c.startAssessment()}}async getAssessmentQuestions(e,t){if(this.useLocal)return c.getAssessmentQuestions(e,t);try{return await this.request(`/assessment/${e}/questions/${t}`)}catch{return c.getAssessmentQuestions(e,t)}}async submitAssessmentAnswer(e,t,i,s=3e3){if(this.useLocal)return c.submitAssessmentAnswer(e,t,i,s);try{return await this.request(`/assessment/${e}/answer`,{method:"POST",body:JSON.stringify({questionBankId:t,userAnswer:i,responseTimeMs:s})})}catch{return c.submitAssessmentAnswer(e,t,i,s)}}async completeAssessment(e){if(this.useLocal)return c.completeAssessment(e);try{return await this.request(`/assessment/${e}/complete`,{method:"POST"})}catch{return c.completeAssessment(e)}}async getAssessmentProgress(e){if(this.useLocal)return{completedSkills:10,totalSkills:10};try{return await this.request(`/assessment/${e}/progress`)}catch{return{completedSkills:10,totalSkills:10}}}async getLatestAssessment(){if(this.useLocal)return(await c.getDashboard()).latestAssessment;try{return await this.request("/assessment/latest")}catch{return(await c.getDashboard()).latestAssessment}}async getGrammarTopics(){if(this.useLocal)return c.getGrammarTopics();try{return await this.request("/grammar/topics")}catch{return c.getGrammarTopics()}}async getGrammarTopic(e){if(this.useLocal)return c.getGrammarTopic(e);try{return await this.request(`/grammar/topic/${e}`)}catch{return c.getGrammarTopic(e)}}async submitGrammarExercise(e,t,i=3e3){if(this.useLocal)return c.submitGrammarExercise(e,t);try{return await this.request(`/grammar/exercise/${e}/submit`,{method:"POST",body:JSON.stringify({answer:t,responseTimeMs:i})})}catch{return c.submitGrammarExercise(e,t)}}async getVocabularyItems(e={}){if(this.useLocal)return c.getVocabularyItems(e);try{const t=new URLSearchParams(e).toString();return await this.request(`/vocabulary/items${t?`?${t}`:""}`)}catch{return c.getVocabularyItems(e)}}async getReviewQueue(){if(this.useLocal)return c.getReviewQueue();try{return await this.request("/vocabulary/review")}catch{return c.getReviewQueue()}}async submitReview(e,t){if(this.useLocal)return c.submitReview(e,t);try{return await this.request(`/vocabulary/${e}/review`,{method:"POST",body:JSON.stringify({rating:t})})}catch{return c.submitReview(e,t)}}async getReadingMaterials(e={}){if(this.useLocal)return c.getReadingMaterials();try{const t=new URLSearchParams(e).toString();return await this.request(`/reading/materials${t?`?${t}`:""}`)}catch{return c.getReadingMaterials()}}async getReadingMaterial(e){if(this.useLocal)return c.getReadingMaterial(e);try{return await this.request(`/reading/${e}`)}catch{return c.getReadingMaterial(e)}}async submitReading(e,t,i){if(this.useLocal)return c.submitReading(e,t,i);try{return await this.request(`/reading/${e}/submit`,{method:"POST",body:JSON.stringify({answers:t,readingTimeSeconds:i})})}catch{return c.submitReading(e,t,i)}}async getListeningMaterials(e={}){if(this.useLocal)return c.getListeningMaterials();try{const t=new URLSearchParams(e).toString();return await this.request(`/listening/materials${t?`?${t}`:""}`)}catch{return c.getListeningMaterials()}}async getListeningMaterial(e){if(this.useLocal)return c.getListeningMaterial(e);try{return await this.request(`/listening/${e}`)}catch{return c.getListeningMaterial(e)}}async getListeningTranscript(e){const{material:t}=await this.getListeningMaterial(e);return{transcript:(t==null?void 0:t.transcript)||(t==null?void 0:t.audio_text)||""}}async submitListening(e,t,i=1){if(this.useLocal)return c.submitListening(e,t,i);try{return await this.request(`/listening/${e}/submit`,{method:"POST",body:JSON.stringify({answers:t,listenCount:i})})}catch{return c.submitListening(e,t,i)}}async getWritingPrompts(e={}){if(this.useLocal)return c.getWritingPrompts();try{const t=new URLSearchParams(e).toString();return await this.request(`/writing/prompts${t?`?${t}`:""}`)}catch{return c.getWritingPrompts()}}async submitWriting(e,t,i){if(this.useLocal)return c.submitWriting(e,t,i);try{return await this.request("/writing/submit",{method:"POST",body:JSON.stringify({promptId:e,text:t,timeSpentSeconds:i})})}catch{return c.submitWriting(e,t,i)}}async getSpeakingScenarios(e={}){if(this.useLocal)return c.getSpeakingScenarios();try{const t=new URLSearchParams(e).toString();return await this.request(`/speaking/scenarios${t?`?${t}`:""}`)}catch{return c.getSpeakingScenarios()}}async getSpeakingScenario(e){if(this.useLocal)return c.getSpeakingScenario(e);try{return await this.request(`/speaking/scenario/${e}`)}catch{return c.getSpeakingScenario(e)}}async getErrors(e={}){if(this.useLocal)return c.getErrors(e);try{const t=new URLSearchParams(e).toString();return await this.request(`/errors${t?`?${t}`:""}`)}catch{return c.getErrors(e)}}async resolveError(e){if(this.useLocal)return c.resolveError(e);try{return await this.request(`/errors/${e}/resolve`,{method:"POST"})}catch{return c.resolveError(e)}}async generateDailyTasks(){if(this.useLocal)return c.generateDailyTasks();try{return await this.request("/daily-tasks/generate",{method:"POST"})}catch{return c.generateDailyTasks()}}async completeDailyTask(e,t){return{success:!0}}async getProgressHistory(){if(this.useLocal)return c.getProgressHistory();try{return await this.request("/progress/history")}catch{return c.getProgressHistory()}}async getWeeklyReport(){if(this.useLocal)return c.getWeeklyReport();try{return await this.request("/reports/weekly")}catch{return c.getWeeklyReport()}}}const p=new E;class L{constructor(){this.user=null,this.dashboard=null,this.currentView="dashboard",this.sessionSeconds=0,this.timerInterval=null,this.listeners=new Map}on(e,t){return this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t),()=>{const i=this.listeners.get(e);i&&this.listeners.set(e,i.filter(s=>s!==t))}}emit(e,t){this.listeners.has(e)&&this.listeners.get(e).forEach(i=>{try{i(t)}catch(s){console.error(`Error in event listener for ${e}:`,s)}})}setUser(e){this.user=e,this.emit("user:change",e)}setDashboard(e){this.dashboard=e,this.emit("dashboard:change",e)}setView(e){this.currentView=e,this.emit("view:change",e)}startSessionTimer(){this.timerInterval&&clearInterval(this.timerInterval),this.timerInterval=setInterval(()=>{this.sessionSeconds++,this.emit("timer:tick",this.sessionSeconds)},1e3)}stopSessionTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}showToast(e,t="info",i=4e3){const s=document.getElementById("toast-container");if(!s)return;const n=document.createElement("div");n.className=`toast ${t}`;let a="ℹ️";t==="success"&&(a="✅"),t==="error"&&(a="⚠️"),n.innerHTML=`<span>${a}</span><span>${e}</span>`,s.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(-10px)",n.style.transition="all 0.3s ease",setTimeout(()=>n.remove(),300)},i)}}const u=new L;class C{constructor(){this.container=null,this.data=null}async render(e){var t;this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading your personalized learning path...</p>
      </div>
    `;try{this.data=await p.getDashboard(),u.setDashboard(this.data),this.renderContent()}catch(i){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Failed to load dashboard</h3>
          <p>${i.message}</p>
          <button class="btn btn-primary" id="retry-dashboard-btn">Retry</button>
        </div>
      `,(t=document.getElementById("retry-dashboard-btn"))==null||t.addEventListener("click",()=>this.render(e))}}renderContent(){const{user:e,stats:t,skills:i,dailyTasks:s,recentErrors:n,reviewStats:a,learningPlan:r,latestAssessment:o}=this.data,l=document.getElementById("sidebar-streak");l&&(l.textContent=`${t.current_streak||0} days`);const d=document.getElementById("sidebar-xp");d&&(d.textContent=`${t.xp||0} XP`);const h=document.getElementById("review-due-badge");h&&(h.textContent=a?a.dueToday:0);const y=document.getElementById("errors-count-badge");y&&(y.textContent=n?n.length:0);const b=(o==null?void 0:o.overall_cefr)||"A2",k=document.getElementById("sidebar-cefr-badge");k&&(k.textContent=b);const I=[{key:"grammar",name:"Grammar",icon:"📖"},{key:"vocabulary",name:"Vocabulary",icon:"📚"},{key:"reading",name:"Reading",icon:"📰"},{key:"listening",name:"Listening",icon:"🎧"},{key:"writing",name:"Writing",icon:"✍️"},{key:"speaking",name:"Speaking",icon:"🗣️"},{key:"pronunciation",name:"Pronunciation",icon:"🎙️"},{key:"sentence_formation",name:"Sentence Syntax",icon:"🧩"},{key:"comprehension",name:"Comprehension",icon:"💡"},{key:"communication",name:"Communication",icon:"🤝"}],x=(s==null?void 0:s.tasks)||[{id:"task-vocab",skill:"vocabulary",description:"Review 10 vocabulary cards in Spaced Repetition queue",targetView:"vocabulary"},{id:"task-grammar",skill:"grammar",description:"Complete 1 exercise in Grammar Academy",targetView:"grammar"},{id:"task-reading",skill:"reading",description:"Read 1 graded article and answer comprehension questions",targetView:"reading"},{id:"task-speaking",skill:"speaking",description:"Practice 1 conversational speaking scenario",targetView:"speaking"}],S=new Set((s==null?void 0:s.completed_tasks)||[]);this.container.innerHTML=`
      <div class="dashboard-grid">
        <!-- Welcome & Goal Hero -->
        <section class="hero-card card">
          <div class="hero-content">
            <div class="hero-badge">Daily Focus • Long-Term Fluency</div>
            <h1 class="hero-title">Welcome back, <span class="gradient-text">${e.displayName}</span></h1>
            <p class="hero-desc">
              Your personalized system trains all 10 dimensions of English proficiency for natural thinking and effortless real-world communication.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary" id="hero-diagnostic-btn">
                <span>${o?"Retake CEFR Assessment":"Take Diagnostic Assessment"}</span>
                <span class="btn-badge">10 Skills</span>
              </button>
              <button class="btn btn-secondary" id="hero-routine-btn">
                <span>Start Today's Routine (${x.length-S.size} remaining)</span>
              </button>
            </div>
          </div>
          <div class="hero-stat-box">
            <div class="hero-cefr-circle">
              <span class="hero-cefr-label">CEFR TARGET</span>
              <span class="hero-cefr-val">${b}</span>
              <span class="hero-cefr-sub">Trajectory: B2+</span>
            </div>
          </div>
        </section>

        <!-- Stats Overview Row -->
        <div class="grid-4 stats-row">
          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Study Streak</span>
              <span class="stat-icon-pill">🔥</span>
            </div>
            <div class="stat-number">${t.current_streak||0} <span class="stat-unit">days</span></div>
            <div class="stat-sub">Longest: ${t.longest_streak||0} days</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Study Time</span>
              <span class="stat-icon-pill">⏱️</span>
            </div>
            <div class="stat-number">${t.total_study_minutes||0} <span class="stat-unit">min</span></div>
            <div class="stat-sub">Active learning hours</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Words Mastered</span>
              <span class="stat-icon-pill">📚</span>
            </div>
            <div class="stat-number">${t.total_words_learned||0}</div>
            <div class="stat-sub">${(a==null?void 0:a.dueToday)||0} cards due today</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Resolved Errors</span>
              <span class="stat-icon-pill">🎯</span>
            </div>
            <div class="stat-number">${t.total_errors_resolved||0}</div>
            <div class="stat-sub">${(n==null?void 0:n.length)||0} patterns to fix</div>
          </div>
        </div>

        <div class="grid-2 dashboard-main-grid">
          <!-- Today's Routine / Daily Tasks -->
          <section class="card daily-routine-card">
            <div class="card-header">
              <div>
                <h2 class="card-title">📅 Today's Personalized Routine</h2>
                <div class="card-subtitle">Scientifically distributed across receptive and productive skills</div>
              </div>
              <button class="btn btn-secondary btn-sm" id="refresh-tasks-btn" title="Regenerate dynamic tasks">
                ↻ Refresh
              </button>
            </div>

            <div class="tasks-list">
              ${x.map((v,_)=>{const w=S.has(v.id);return`
                  <div class="task-item ${w?"completed":""}" data-task-id="${v.id}" data-view="${v.targetView||v.skill}">
                    <div class="task-checkbox ${w?"checked":""}">
                      ${w?"✓":""}
                    </div>
                    <div class="task-content">
                      <div class="task-title">${v.description}</div>
                      <div class="task-skill-tag cefr-tag ${v.skill?"A2":"B1"}">${v.skill.toUpperCase()}</div>
                    </div>
                    <button class="btn btn-secondary btn-sm task-action-btn">
                      ${w?"Redo":"Start"}
                    </button>
                  </div>
                `}).join("")}
            </div>
          </section>

          <!-- 10-Skill CEFR Matrix -->
          <section class="card skill-matrix-card">
            <div class="card-header">
              <div>
                <h2 class="card-title">📊 10-Dimensional Skill Matrix</h2>
                <div class="card-subtitle">Independent CEFR diagnostic evaluation</div>
              </div>
              <button class="btn btn-secondary btn-sm" id="goto-assessment-btn">Full Audit</button>
            </div>

            <div class="skill-bars-list">
              ${I.map(v=>{const _=i[v.key]||{level:"A1",sublevel:"",score:35},w=_.level||"A1",T=_.score||30;return`
                  <div class="skill-row" data-skill="${v.key}">
                    <div class="skill-label">
                      <span class="skill-icon">${v.icon}</span>
                      <span class="skill-name">${v.name}</span>
                    </div>
                    <div class="skill-bar-container">
                      <div class="skill-bar-fill" style="width: ${Math.max(T,15)}%;"></div>
                    </div>
                    <span class="cefr-tag ${w}">${w}${_.sublevel||""}</span>
                  </div>
                `}).join("")}
            </div>
          </section>
        </div>

        <!-- Quick Launchers Row -->
        <section class="quick-launchers-section">
          <h2 class="section-heading">Quick Practice Hub</h2>
          <div class="grid-4 launcher-grid">
            <div class="launcher-card card" data-view="vocabulary">
              <div class="launcher-icon-box" style="background: rgba(16, 185, 129, 0.15); color: #34d399;">
                📚
              </div>
              <h3 class="launcher-title">SRS Vocabulary</h3>
              <p class="launcher-desc">${(a==null?void 0:a.dueToday)||0} words due for spaced recall review.</p>
              <span class="launcher-link">Review Now →</span>
            </div>

            <div class="launcher-card card" data-view="grammar">
              <div class="launcher-icon-box" style="background: rgba(99, 102, 241, 0.15); color: #818cf8;">
                📖
              </div>
              <h3 class="launcher-title">Grammar Academy</h3>
              <p class="launcher-desc">Master tenses, clauses, modals with Turkish comparative tips.</p>
              <span class="launcher-link">Study Grammar →</span>
            </div>

            <div class="launcher-card card" data-view="speaking">
              <div class="launcher-icon-box" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24;">
                🗣️
              </div>
              <h3 class="launcher-title">Speaking Roleplay</h3>
              <p class="launcher-desc">Simulate real-life dialogues with speech recognition.</p>
              <span class="launcher-link">Start Dialogue →</span>
            </div>

            <div class="launcher-card card" data-view="errors">
              <div class="launcher-icon-box" style="background: rgba(244, 63, 94, 0.15); color: #fb7185;">
                🎯
              </div>
              <h3 class="launcher-title">Error Bank</h3>
              <p class="launcher-desc">Eradicate fossilized mistakes and L1 Turkish interference.</p>
              <span class="launcher-link">Fix Mistakes →</span>
            </div>
          </div>
        </section>
      </div>
    `,this.bindEvents()}bindEvents(){var e,t,i,s;(e=document.getElementById("hero-diagnostic-btn"))==null||e.addEventListener("click",()=>{u.setView("assessment")}),(t=document.getElementById("goto-assessment-btn"))==null||t.addEventListener("click",()=>{u.setView("assessment")}),(i=document.getElementById("hero-routine-btn"))==null||i.addEventListener("click",()=>{const n=document.querySelector(".task-item:not(.completed)");if(n){const a=n.dataset.view;u.setView(a)}else u.showToast("All daily tasks completed! Great work!","success")}),this.container.querySelectorAll(".task-item").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.view;a&&u.setView(a)})}),(s=document.getElementById("refresh-tasks-btn"))==null||s.addEventListener("click",async()=>{try{u.showToast("Generating fresh daily tasks...","info"),await p.generateDailyTasks(),this.render(this.container)}catch(n){u.showToast("Failed to regenerate tasks: "+n.message,"error")}}),this.container.querySelectorAll(".launcher-card").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.view;a&&u.setView(a)})})}}class P{constructor(){this.synth=window.speechSynthesis||null,this.recognition=null,this.voices=[],this.preferredAccent="en-US",this.preferredRate=1,this.synth&&(this.loadVoices(),speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=()=>this.loadVoices()));const e=window.SpeechRecognition||window.webkitSpeechRecognition||null;e&&(this.recognition=new e,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.lang="en-US")}loadVoices(){this.synth&&(this.voices=this.synth.getVoices().filter(e=>e.lang.startsWith("en")))}isTtsSupported(){return!!this.synth}isSttSupported(){return!!this.recognition}speak(e,t={}){return this.synth?(this.cancel(),new Promise((i,s)=>{const n=new SpeechSynthesisUtterance(e);n.rate=t.rate||this.preferredRate||1,n.pitch=t.pitch||1;const a=t.lang||this.preferredAccent||"en-US",r=this.voices.find(o=>o.lang.includes(a))||this.voices[0];r&&(n.voice=r),n.onend=()=>i(),n.onerror=o=>{console.warn("Speech synthesis error:",o),i()},this.synth.speak(n)})):(console.warn("Speech synthesis not supported in this browser"),Promise.resolve())}cancel(){this.synth&&this.synth.cancel()}startListening({onResult:e,onError:t,onEnd:i,lang:s="en-US"}){if(!this.recognition){t&&t(new Error("Speech recognition not supported in this browser."));return}this.recognition.lang=s;let n="";this.recognition.onresult=a=>{let r="";for(let o=a.resultIndex;o<a.results.length;++o)a.results[o].isFinal?n+=a.results[o][0].transcript:r+=a.results[o][0].transcript;e&&e({final:n.trim(),interim:r.trim(),confidence:a.results[0]?a.results[0][0].confidence:0})},this.recognition.onerror=a=>{console.error("Speech recognition error:",a.error),t&&t(a)},this.recognition.onend=()=>{i&&i(n.trim())};try{this.recognition.start()}catch(a){console.warn("Recognition already started or error:",a)}}stopListening(){if(this.recognition)try{this.recognition.stop()}catch{}}calculateSimilarity(e,t){const i=e.toLowerCase().replace(/[^\w\s]/g,"").trim().split(/\s+/),s=t.toLowerCase().replace(/[^\w\s]/g,"").trim().split(/\s+/);if(s.length===0)return 0;let n=0;const a=[...s];for(const d of i){const h=a.indexOf(d);h!==-1&&(n++,a.splice(h,1))}const r=n/Math.max(i.length,1),o=n/s.length,l=r+o>0?2*r*o/(r+o):0;return Math.round(l*100)}}const m=new P;class B{constructor(){this.container=null,this.assessmentId=null,this.skills=["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],this.currentSkillIndex=0,this.currentQuestions=[],this.currentQuestionIndex=0,this.questionStartTime=Date.now(),this.selectedOption=null,this.assessmentResults=null}async render(e){this.container=e,this.renderIntro()}renderIntro(){var e;this.container.innerHTML=`
      <div class="assessment-intro-wrapper">
        <div class="card assessment-intro-card">
          <div class="assessment-badge-pill">CEFR Diagnostic & Placement</div>
          <h1 class="assessment-title">10-Skill Comprehensive Diagnostic Audit</h1>
          <p class="assessment-desc">
            Unlike superficial multiple-choice quizzes, this diagnostic rigorously benchmarks your receptive and productive English across 10 vital proficiencies:
          </p>
          <div class="skills-preview-grid">
            <div class="skill-tag-pill">📖 Grammar</div>
            <div class="skill-tag-pill">📚 Vocabulary</div>
            <div class="skill-tag-pill">📰 Reading</div>
            <div class="skill-tag-pill">🎧 Listening</div>
            <div class="skill-tag-pill">✍️ Writing</div>
            <div class="skill-tag-pill">🗣️ Speaking</div>
            <div class="skill-tag-pill">🎙️ Pronunciation</div>
            <div class="skill-tag-pill">🧩 Sentence Syntax</div>
            <div class="skill-tag-pill">💡 Comprehension</div>
            <div class="skill-tag-pill">🤝 Real Communication</div>
          </div>
          <div class="assessment-notice">
            <span class="notice-icon">ℹ️</span>
            <span>Takes ~5-10 minutes. Evaluates grammar accuracy, collocations, Turkish-interference traps, and pragmatic fluency.</span>
          </div>
          <button class="btn btn-primary btn-lg" id="start-assessment-btn">
            Begin Diagnostic Assessment →
          </button>
        </div>
      </div>
    `,(e=document.getElementById("start-assessment-btn"))==null||e.addEventListener("click",()=>this.startAssessment())}async startAssessment(){this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Initializing diagnostic assessment engine...</p>
      </div>
    `;try{const e=await p.startAssessment();this.assessmentId=e.assessmentId,this.currentSkillIndex=0,await this.loadSkillQuestions()}catch(e){u.showToast("Failed to start assessment: "+e.message,"error"),this.renderIntro()}}async loadSkillQuestions(){const e=this.skills[this.currentSkillIndex];this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading questions for ${e.toUpperCase()}...</p>
      </div>
    `;try{const t=await p.getAssessmentQuestions(this.assessmentId,e);this.currentQuestions=t.questions||[],this.currentQuestionIndex=0,this.currentQuestions.length===0?this.nextSkill():this.renderQuestion()}catch(t){u.showToast(`Error loading questions for ${e}: `+t.message,"error"),this.nextSkill()}}renderQuestion(){const e=this.skills[this.currentSkillIndex],t=this.currentQuestions[this.currentQuestionIndex];this.questionStartTime=Date.now(),this.selectedOption=null;const i=Math.round((this.currentSkillIndex*this.currentQuestions.length+this.currentQuestionIndex)/(this.skills.length*4)*100);this.container.innerHTML=`
      <div class="question-container">
        <!-- Header Progress -->
        <div class="assessment-topbar">
          <div class="assessment-skill-indicator">
            <span class="skill-name-badge">${e.replace("_"," ").toUpperCase()}</span>
            <span class="skill-step">Skill ${this.currentSkillIndex+1} of ${this.skills.length}</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: ${i}%;"></div>
          </div>
          <span class="progress-pct">${i}%</span>
        </div>

        <!-- Question Card -->
        <div class="card question-card">
          <div class="question-meta">
            <span class="cefr-tag ${t.cefrLevel||"A2"}">${t.cefrLevel||"A2"}</span>
            <span class="question-topic">${t.topic||"General"}</span>
            <button class="btn btn-secondary btn-sm tts-btn" id="listen-question-btn" title="Listen to sentence">
              🔊 Listen
            </button>
          </div>

          <div class="question-text">${t.question.replace(/\n/g,"<br>")}</div>

          <!-- Options -->
          <div class="options-grid" id="options-container">
            ${(t.options||[]).map((s,n)=>`
              <button class="option-btn" data-option="${s}">
                <span class="option-letter">${String.fromCharCode(65+n)}</span>
                <span class="option-val">${s}</span>
              </button>
            `).join("")}
          </div>

          <!-- Feedback Box (Hidden initially) -->
          <div class="feedback-box" id="feedback-box" style="display: none;">
            <div class="feedback-status" id="feedback-status"></div>
            <div class="feedback-explanation" id="feedback-explanation"></div>
            <div class="feedback-tr" id="feedback-tr"></div>
          </div>

          <!-- Action Bar -->
          <div class="question-actions">
            <button class="btn btn-primary btn-lg" id="submit-answer-btn" disabled>
              Check Answer
            </button>
            <button class="btn btn-success btn-lg" id="next-question-btn" style="display: none;">
              Next Question →
            </button>
          </div>
        </div>
      </div>
    `,this.bindQuestionEvents(t)}bindQuestionEvents(e){const t=document.getElementById("options-container"),i=document.getElementById("submit-answer-btn"),s=document.getElementById("next-question-btn"),n=document.getElementById("feedback-box"),a=document.getElementById("listen-question-btn");a==null||a.addEventListener("click",()=>{m.speak(e.question)}),t==null||t.querySelectorAll(".option-btn").forEach(r=>{r.addEventListener("click",()=>{t.querySelectorAll(".option-btn").forEach(o=>o.classList.remove("selected")),r.classList.add("selected"),this.selectedOption=r.dataset.option,i.disabled=!1})}),i==null||i.addEventListener("click",async()=>{if(!this.selectedOption)return;i.disabled=!0;const r=Date.now()-this.questionStartTime;try{const o=await p.submitAssessmentAnswer(this.assessmentId,e.id,this.selectedOption,r);n.style.display="block";const l=o.isCorrect;n.className=`feedback-box ${l?"correct":"incorrect"}`,document.getElementById("feedback-status").innerHTML=l?"🎉 <strong>Correct!</strong> Well done.":`❌ <strong>Incorrect.</strong> Correct answer: <em>${o.correctAnswer}</em>`,document.getElementById("feedback-explanation").textContent=o.explanation||"",document.getElementById("feedback-tr").textContent=o.explanationTr?`Türkçe Açıklama: ${o.explanationTr}`:"",t.querySelectorAll(".option-btn").forEach(d=>{d.disabled=!0,d.dataset.option===o.correctAnswer&&d.classList.add("is-correct"),d.dataset.option===this.selectedOption&&!l&&d.classList.add("is-wrong")}),i.style.display="none",s.style.display="inline-flex"}catch(o){u.showToast("Error submitting answer: "+o.message,"error"),i.disabled=!1}}),s==null||s.addEventListener("click",()=>{this.currentQuestionIndex++,this.currentQuestionIndex<this.currentQuestions.length?this.renderQuestion():this.nextSkill()})}async nextSkill(){this.currentSkillIndex++,this.currentSkillIndex<this.skills.length?await this.loadSkillQuestions():await this.finishAssessment()}async finishAssessment(){this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Analyzing responses and synthesizing your CEFR mastery profile...</p>
      </div>
    `;try{this.assessmentResults=await p.completeAssessment(this.assessmentId),this.renderReport()}catch(e){u.showToast("Failed to complete assessment: "+e.message,"error"),this.renderIntro()}}renderReport(){var i;const e=this.assessmentResults,t=e.skills||{};this.container.innerHTML=`
      <div class="report-wrapper">
        <div class="card report-card">
          <div class="report-header">
            <div class="report-badge">Diagnostic Assessment Complete</div>
            <h1 class="report-title">Your CEFR Baseline Proficiency Profile</h1>
            <p class="report-subtitle">Personalized analysis across all 10 communicative competencies</p>
          </div>

          <!-- Overall CEFR score hero -->
          <div class="report-hero-score">
            <div class="score-circle">
              <span class="score-label">OVERALL LEVEL</span>
              <span class="score-val">${e.overallCEFR}</span>
              <span class="score-pct">${Math.round(e.totalCorrect/Math.max(e.totalQuestions,1)*100)}% Accuracy</span>
            </div>
            <div class="score-summary">
              <h3>Diagnostic Summary</h3>
              <p>You answered <strong>${e.totalCorrect} of ${e.totalQuestions}</strong> questions correctly across 10 skills.</p>
              ${e.weakAreas&&e.weakAreas.length>0?`
                <div class="weak-areas-box">
                  <strong>Priority Development Focus:</strong>
                  <ul>
                    ${e.weakAreas.map(s=>`<li><strong>${s.skill.toUpperCase()}:</strong> ${s.detail}</li>`).join("")}
                  </ul>
                </div>
              `:"<p>High competence demonstrated across evaluated areas.</p>"}
            </div>
          </div>

          <!-- Skill Breakdown Grid -->
          <h2 class="section-title">Competency Breakdown</h2>
          <div class="report-skills-grid">
            ${Object.entries(t).map(([s,n])=>`
              <div class="report-skill-item">
                <div class="report-skill-header">
                  <span class="report-skill-name">${s.replace("_"," ").toUpperCase()}</span>
                  <span class="cefr-tag ${n.level}">${n.display||n.level}</span>
                </div>
                <div class="report-skill-bar">
                  <div class="report-skill-fill" style="width: ${n.accuracy||40}%;"></div>
                </div>
                <div class="report-skill-stat">${n.correct}/${n.total} correct (${n.accuracy||0}%)</div>
              </div>
            `).join("")}
          </div>

          <div class="report-actions">
            <button class="btn btn-primary btn-lg" id="apply-plan-btn">
              Apply Adaptive Curriculum & Go to Dashboard →
            </button>
          </div>
        </div>
      </div>
    `,(i=document.getElementById("apply-plan-btn"))==null||i.addEventListener("click",async()=>{try{await p.generateDailyTasks(),u.setView("dashboard"),u.showToast("Personalized learning plan active!","success")}catch{u.setView("dashboard")}})}}class M{constructor(){this.container=null,this.topics=[],this.selectedTopic=null,this.activeCategory="all",this.currentExerciseIndex=0,this.exercises=[]}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading Grammar Academy curriculum...</p>
      </div>
    `;try{const t=await p.getGrammarTopics();this.topics=Array.isArray(t)?t:t.topics||[],this.topics.length>0&&!this.selectedTopic?await this.loadTopic(this.topics[0].slug):this.renderLayout()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Failed to load grammar topics</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadTopic(e){try{const t=await p.getGrammarTopic(e);this.selectedTopic=t.topic,this.exercises=t.exercises||[],this.currentExerciseIndex=0,this.renderLayout()}catch(t){u.showToast("Failed to load topic details: "+t.message,"error")}}renderLayout(){const e=this.selectedTopic,t=e&&e.examples?typeof e.examples=="string"?JSON.parse(e.examples):e.examples:[],i=e&&e.rules?typeof e.rules=="string"?JSON.parse(e.rules):e.rules:[],s=e&&e.common_mistakes?typeof e.common_mistakes=="string"?JSON.parse(e.common_mistakes):e.common_mistakes:[],n=["all","tenses","modals","clauses","determiners","prepositions","sentence_structure"],a=this.activeCategory==="all"?this.topics:this.topics.filter(r=>r.category===this.activeCategory);this.container.innerHTML=`
      <div class="grammar-layout">
        <!-- Sidebar: Topics List -->
        <aside class="grammar-sidebar card">
          <div class="grammar-sidebar-header">
            <h3>Grammar Curriculum</h3>
            <span class="topic-count">${this.topics.length} Modules</span>
          </div>

          <!-- Category filter tabs -->
          <div class="category-tabs">
            ${n.map(r=>`
              <button class="cat-tab ${this.activeCategory===r?"active":""}" data-cat="${r}">
                ${r.replace("_"," ")}
              </button>
            `).join("")}
          </div>

          <div class="topics-list">
            ${a.map(r=>`
              <div class="topic-nav-item ${e&&e.id===r.id?"active":""}" data-slug="${r.slug}">
                <div class="topic-nav-left">
                  <span class="cefr-tag ${r.cefr_level}">${r.cefr_level}</span>
                  <span class="topic-nav-name">${r.name}</span>
                </div>
                <span class="topic-nav-arrow">›</span>
              </div>
            `).join("")}
          </div>
        </aside>

        <!-- Main Content Area: Topic Detail & Practice Sandbox -->
        <div class="grammar-main">
          ${e?`
            <div class="card topic-header-card">
              <div class="topic-header-top">
                <span class="cefr-tag ${e.cefr_level}">${e.cefr_level}</span>
                <span class="topic-category-badge">${(e.category||"").toUpperCase()}</span>
              </div>
              <h1 class="topic-title">${e.name}</h1>
              <p class="topic-description">${e.description||""}</p>

              <!-- Linguistic & Comparative Explanations -->
              <div class="explanation-grid">
                <div class="explanation-col english-col">
                  <h4>🇬🇧 In English</h4>
                  <p>${e.explanation_en||""}</p>
                </div>
                <div class="explanation-col turkish-col">
                  <h4>🇹🇷 Türkçe Karşılaştırma & Mantık</h4>
                  <p>${e.explanation_tr||""}</p>
                </div>
              </div>
            </div>

            <!-- Rules & Formulas -->
            <div class="card topic-rules-card">
              <h3 class="section-title">📐 Key Rules & Structure</h3>
              <ul class="rules-list">
                ${i.map(r=>`<li>${r}</li>`).join("")}
              </ul>
            </div>

            <!-- Contextual Examples with TTS -->
            <div class="card topic-examples-card">
              <div class="card-header">
                <h3 class="card-title">💬 Real Context Examples</h3>
                <span class="card-subtitle">Click speaker icon to listen</span>
              </div>
              <div class="examples-list">
                ${t.map(r=>`
                  <div class="example-item">
                    <button class="tts-play-btn" data-text="${r.sentence}">🔊</button>
                    <div class="example-texts">
                      <div class="example-en">${r.sentence}</div>
                      <div class="example-tr">${r.translation}</div>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Common Mistakes & Turkish Interference -->
            ${s.length>0?`
              <div class="card topic-mistakes-card">
                <h3 class="section-title">⚠️ Common Mistakes & L1 Interference</h3>
                <div class="mistakes-grid">
                  ${s.map(r=>`
                    <div class="mistake-item">
                      <div class="mistake-wrong">❌ ${r.wrong}</div>
                      <div class="mistake-correct">✅ ${r.correct}</div>
                      <div class="mistake-expl">${r.explanation}</div>
                    </div>
                  `).join("")}
                </div>
              </div>
            `:""}

            <!-- Interactive Exercise Sandbox -->
            <div class="card topic-sandbox-card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">✏️ Interactive Practice Sandbox</h3>
                  <div class="card-subtitle">Test and consolidate this grammar structure</div>
                </div>
                <span class="exercise-progress">
                  ${this.exercises.length>0?`Exercise ${this.currentExerciseIndex+1} of ${this.exercises.length}`:"No exercises"}
                </span>
              </div>

              ${this.exercises.length>0?this.renderExerciseSandbox():"<p>No exercises available for this topic yet.</p>"}
            </div>
          `:`
            <div class="card empty-state">
              <p>Select a grammar topic from the sidebar to begin.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}renderExerciseSandbox(){const e=this.exercises[this.currentExerciseIndex];if(!e)return"";const t=e.options?typeof e.options=="string"?JSON.parse(e.options):e.options:null;return`
      <div class="exercise-box" id="exercise-box">
        <div class="exercise-prompt">
          <span class="exercise-type-tag">${e.exercise_type.replace("_"," ").toUpperCase()}</span>
          <div class="exercise-question">${e.question}</div>
        </div>

        ${t?`
          <div class="exercise-options" id="ex-options">
            ${t.map(i=>`
              <button class="exercise-opt-btn" data-val="${i}">${i}</button>
            `).join("")}
          </div>
        `:`
          <div class="exercise-input-wrap">
            <input type="text" class="exercise-input" id="ex-text-input" placeholder="Type your answer here..." autocomplete="off">
          </div>
        `}

        <div class="exercise-feedback" id="ex-feedback" style="display: none;"></div>

        <div class="exercise-actions">
          <button class="btn btn-primary" id="submit-exercise-btn">Submit Answer</button>
          <button class="btn btn-secondary" id="next-exercise-btn" style="display: none;">Next Exercise →</button>
        </div>
      </div>
    `}bindEvents(){this.container.querySelectorAll(".cat-tab").forEach(a=>{a.addEventListener("click",()=>{this.activeCategory=a.dataset.cat,this.renderLayout()})}),this.container.querySelectorAll(".topic-nav-item").forEach(a=>{a.addEventListener("click",()=>{const r=a.dataset.slug;r&&this.loadTopic(r)})}),this.container.querySelectorAll(".tts-play-btn").forEach(a=>{a.addEventListener("click",()=>{m.speak(a.dataset.text)})});let e="";this.container.querySelectorAll(".exercise-opt-btn").forEach(a=>{a.addEventListener("click",()=>{this.container.querySelectorAll(".exercise-opt-btn").forEach(r=>r.classList.remove("selected")),a.classList.add("selected"),e=a.dataset.val})});const t=document.getElementById("submit-exercise-btn"),i=document.getElementById("next-exercise-btn"),s=document.getElementById("ex-feedback"),n=document.getElementById("ex-text-input");t==null||t.addEventListener("click",async()=>{const a=this.exercises[this.currentExerciseIndex],r=n?n.value.trim():e;if(!r){u.showToast("Please provide an answer first.","error");return}t.disabled=!0;try{const o=await p.submitGrammarExercise(a.id,r);s.style.display="block",s.className=`exercise-feedback ${o.isCorrect?"correct":"incorrect"}`,s.innerHTML=`
          <div class="feedback-head">${o.isCorrect?"🎉 Correct!":"❌ Not quite right"}</div>
          <div class="feedback-body">${o.feedback||(o.isCorrect?"Great job.":`Correct answer: <strong>${o.correctAnswer}</strong>`)}</div>
          ${o.explanation?`<div class="feedback-expl">${o.explanation}</div>`:""}
          ${o.explanationTr?`<div class="feedback-expl-tr">Türkçe: ${o.explanationTr}</div>`:""}
        `,t.style.display="none",i.style.display="inline-flex"}catch(o){u.showToast("Submission error: "+o.message,"error"),t.disabled=!1}}),i==null||i.addEventListener("click",()=>{this.currentExerciseIndex=(this.currentExerciseIndex+1)%this.exercises.length,this.renderLayout()})}}class W{constructor(){this.container=null,this.mode="review",this.reviewItems=[],this.currentIndex=0,this.isCardFlipped=!1,this.dictionaryItems=[],this.searchQuery="",this.levelFilter="all"}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading your spaced repetition vocabulary queue...</p>
      </div>
    `;try{const t=await p.getReviewQueue();this.reviewItems=t.items||[],this.currentIndex=0,this.isCardFlipped=!1;const i=await p.getVocabularyItems();this.dictionaryItems=i.items||[],this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Failed to load vocabulary</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){this.container.innerHTML=`
      <div class="vocab-layout">
        <!-- Mode Switcher & Stats Header -->
        <div class="vocab-header card">
          <div class="vocab-header-left">
            <h1 class="vocab-title">Spaced Repetition Studio</h1>
            <p class="vocab-subtitle">Optimized memory consolidation using the SM-2 adaptive spaced recall algorithm</p>
          </div>
          <div class="vocab-mode-toggles">
            <button class="btn ${this.mode==="review"?"btn-primary":"btn-secondary"}" id="toggle-review-mode">
              <span>🗂️ Due Reviews</span>
              <span class="btn-badge">${this.reviewItems.length}</span>
            </button>
            <button class="btn ${this.mode==="dictionary"?"btn-primary":"btn-secondary"}" id="toggle-dict-mode">
              <span>📖 Dictionary & Bank</span>
            </button>
          </div>
        </div>

        <div class="vocab-body" id="vocab-body">
          ${this.mode==="review"?this.renderReviewArea():this.renderDictionaryArea()}
        </div>
      </div>
    `,this.bindEvents()}renderReviewArea(){if(this.reviewItems.length===0)return`
        <div class="card empty-review-card">
          <div class="empty-icon">🎉</div>
          <h2>Review Queue Cleared!</h2>
          <p>You have zero words due right now. The spaced repetition algorithm will automatically schedule your next reviews at the ideal time for long-term retention.</p>
          <button class="btn btn-primary" id="switch-to-dict-btn">Explore Full Dictionary →</button>
        </div>
      `;const e=this.reviewItems[this.currentIndex];if(!e)return`
        <div class="card empty-review-card">
          <div class="empty-icon">✅</div>
          <h2>Session Completed!</h2>
          <p>Great focus! You've reviewed all cards scheduled for this session.</p>
          <button class="btn btn-primary" id="refresh-queue-btn">Check for More Reviews</button>
        </div>
      `;const t=e.examples?typeof e.examples=="string"?JSON.parse(e.examples):e.examples:[],i=e.collocations?typeof e.collocations=="string"?JSON.parse(e.collocations):e.collocations:[];return`
      <div class="flashcard-container">
        <!-- Progress Counter -->
        <div class="flashcard-counter">
          <span>Card ${this.currentIndex+1} of ${this.reviewItems.length}</span>
          <span class="cefr-tag ${e.cefr_level||"A1"}">${e.cefr_level||"A1"}</span>
        </div>

        <!-- 3D Flippable Flashcard -->
        <div class="flashcard ${this.isCardFlipped?"flipped":""}" id="flashcard-element">
          <!-- FRONT FACE -->
          <div class="flashcard-face flashcard-front">
            <div class="card-meta">
              <span class="pos-badge">${e.part_of_speech||"word"}</span>
              <button class="tts-play-btn" id="card-tts-btn" title="Listen to pronunciation">🔊</button>
            </div>

            <div class="target-word">${e.word}</div>
            <div class="phonetic-ipa">${e.phonetic||""}</div>
            
            <div class="card-prompt-hint">Tap card or press Space to reveal meaning & collocations</div>
          </div>

          <!-- BACK FACE -->
          <div class="flashcard-face flashcard-back">
            <div class="card-meta">
              <span class="pos-badge">${e.part_of_speech||"word"}</span>
              <button class="tts-play-btn" id="card-back-tts-btn" title="Listen again">🔊</button>
            </div>

            <div class="target-word">${e.word}</div>
            <div class="phonetic-ipa">${e.phonetic||""}</div>

            <div class="def-box">
              <div class="def-en"><strong>Definition:</strong> ${e.definition_en||""}</div>
              <div class="def-tr"><strong>Türkçe:</strong> ${e.definition_tr||""}</div>
            </div>

            ${i.length>0?`
              <div class="collocations-box">
                <span class="box-label">Key Collocations:</span>
                <div class="collocation-tags">
                  ${i.slice(0,5).map(s=>`<span class="colloc-tag">${s}</span>`).join("")}
                </div>
              </div>
            `:""}

            ${t.length>0?`
              <div class="example-box">
                <span class="box-label">Context Sentence:</span>
                <div class="example-sentence">"${t[0]}"</div>
              </div>
            `:""}
          </div>
        </div>

        <!-- Rating Buttons (Only visible when card is flipped) -->
        <div class="rating-bar" id="rating-bar" style="visibility: ${this.isCardFlipped?"visible":"hidden"};">
          <div class="rating-prompt">How well did you remember this word?</div>
          <div class="rating-buttons-group">
            <button class="rating-btn again" data-rating="1">
              <span class="rating-title">Again</span>
              <span class="rating-interval">&lt; 1 day</span>
            </button>
            <button class="rating-btn hard" data-rating="2">
              <span class="rating-title">Hard</span>
              <span class="rating-interval">1-2 days</span>
            </button>
            <button class="rating-btn good" data-rating="3">
              <span class="rating-title">Good</span>
              <span class="rating-interval">3-4 days</span>
            </button>
            <button class="rating-btn easy" data-rating="4">
              <span class="rating-title">Easy</span>
              <span class="rating-interval">7+ days</span>
            </button>
          </div>
        </div>
      </div>
    `}renderDictionaryArea(){const e=["all","A1","A2","B1","B2","C1"],t=this.dictionaryItems.filter(i=>{const s=!this.searchQuery||i.word.toLowerCase().includes(this.searchQuery.toLowerCase())||i.definition_tr&&i.definition_tr.toLowerCase().includes(this.searchQuery.toLowerCase()),n=this.levelFilter==="all"||i.cefr_level===this.levelFilter;return s&&n});return`
      <div class="dict-container card">
        <div class="dict-toolbar">
          <input type="text" class="dict-search-input" id="dict-search-input" placeholder="Search words, English definitions, or Turkish meanings..." value="${this.searchQuery}">
          
          <div class="level-filter-tabs">
            ${e.map(i=>`
              <button class="level-tab ${this.levelFilter===i?"active":""}" data-level="${i}">${i}</button>
            `).join("")}
          </div>
        </div>

        <div class="dict-table-wrap">
          <table class="dict-table">
            <thead>
              <tr>
                <th>Word</th>
                <th>CEFR</th>
                <th>Phonetics</th>
                <th>English Definition</th>
                <th>Türkçe Anlam</th>
                <th>Audio</th>
              </tr>
            </thead>
            <tbody>
              ${t.map(i=>`
                <tr>
                  <td class="dict-word-cell">
                    <strong>${i.word}</strong>
                    <span class="dict-pos">${i.part_of_speech||""}</span>
                  </td>
                  <td><span class="cefr-tag ${i.cefr_level}">${i.cefr_level}</span></td>
                  <td class="dict-phonetic">${i.phonetic||"-"}</td>
                  <td class="dict-def-en">${i.definition_en||"-"}</td>
                  <td class="dict-def-tr">${i.definition_tr||"-"}</td>
                  <td>
                    <button class="tts-play-btn dict-tts" data-text="${i.word}">🔊</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}bindEvents(){var i,s,n,a,r,o;(i=document.getElementById("toggle-review-mode"))==null||i.addEventListener("click",()=>{this.mode="review",this.renderContent()}),(s=document.getElementById("toggle-dict-mode"))==null||s.addEventListener("click",()=>{this.mode="dictionary",this.renderContent()}),(n=document.getElementById("switch-to-dict-btn"))==null||n.addEventListener("click",()=>{this.mode="dictionary",this.renderContent()}),(a=document.getElementById("refresh-queue-btn"))==null||a.addEventListener("click",()=>{this.render(this.container)});const e=document.getElementById("flashcard-element");e==null||e.addEventListener("click",l=>{if(l.target.closest(".tts-play-btn"))return;this.isCardFlipped=!this.isCardFlipped,e.classList.toggle("flipped",this.isCardFlipped);const d=document.getElementById("rating-bar");d&&(d.style.visibility=this.isCardFlipped?"visible":"hidden")}),(r=document.getElementById("card-tts-btn"))==null||r.addEventListener("click",l=>{l.stopPropagation();const d=this.reviewItems[this.currentIndex];d&&m.speak(d.word)}),(o=document.getElementById("card-back-tts-btn"))==null||o.addEventListener("click",l=>{l.stopPropagation();const d=this.reviewItems[this.currentIndex];d&&m.speak(d.word)}),this.container.querySelectorAll(".rating-btn").forEach(l=>{l.addEventListener("click",async d=>{d.stopPropagation();const h=parseInt(l.dataset.rating,10),y=this.reviewItems[this.currentIndex];if(y)try{await p.submitReview(y.id,h),u.showToast("Recall logged! Next review scheduled.","success",2e3),this.currentIndex++,this.isCardFlipped=!1,this.renderContent()}catch(b){u.showToast("Error recording review: "+b.message,"error")}})});const t=document.getElementById("dict-search-input");t==null||t.addEventListener("input",l=>{if(this.searchQuery=l.target.value,document.querySelector(".dict-table tbody")){this.renderContent();const h=document.getElementById("dict-search-input");h&&(h.focus(),h.setSelectionRange(this.searchQuery.length,this.searchQuery.length))}}),this.container.querySelectorAll(".level-tab").forEach(l=>{l.addEventListener("click",()=>{this.levelFilter=l.dataset.level,this.renderContent()})}),this.container.querySelectorAll(".dict-tts").forEach(l=>{l.addEventListener("click",()=>{m.speak(l.dataset.text)})})}}class R{constructor(){this.container=null,this.materials=[],this.selectedMaterial=null,this.readingStartTime=Date.now(),this.userAnswers={},this.submissionResult=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading reading materials...</p>
      </div>
    `;try{const t=await p.getReadingMaterials();this.materials=Array.isArray(t)?t:t.materials||[],this.materials.length>0&&!this.selectedMaterial?await this.loadMaterial(this.materials[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Failed to load reading materials</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadMaterial(e){try{const t=await p.getReadingMaterial(e);this.selectedMaterial=t.material,this.readingStartTime=Date.now(),this.userAnswers={},this.submissionResult=null,this.renderContent()}catch(t){u.showToast("Failed to load text: "+t.message,"error")}}renderContent(){const e=this.selectedMaterial,t=e&&e.comprehension_questions?typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions:[],i=e&&e.key_vocabulary?typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary:[];this.container.innerHTML=`
      <div class="reading-layout">
        <!-- Sidebar: Library Catalog -->
        <aside class="reading-sidebar card">
          <div class="reading-sidebar-header">
            <h3>Reading Library</h3>
            <span class="catalog-count">${this.materials.length} Articles</span>
          </div>

          <div class="reading-catalog-list">
            ${this.materials.map(s=>`
              <div class="catalog-item ${e&&e.id===s.id?"active":""}" data-id="${s.id}">
                <div class="catalog-item-top">
                  <span class="cefr-tag ${s.cefr_level}">${s.cefr_level}</span>
                  <span class="catalog-cat">${(s.category||"").toUpperCase()}</span>
                </div>
                <div class="catalog-title">${s.title}</div>
                <div class="catalog-meta">
                  <span>⏱️ ${s.estimated_reading_time||3} min</span>
                  <span>📝 ${s.word_count||150} words</span>
                </div>
              </div>
            `).join("")}
          </div>
        </aside>

        <!-- Main Reading Area -->
        <div class="reading-main">
          ${e?`
            <article class="card reading-article-card">
              <div class="article-header">
                <div class="article-meta-tags">
                  <span class="cefr-tag ${e.cefr_level}">${e.cefr_level}</span>
                  <span class="topic-category-badge">${e.category}</span>
                  <span class="article-stats-pill">${e.word_count} words • ~${e.estimated_reading_time} min read</span>
                </div>
                <h1 class="article-title">${e.title}</h1>
                <div class="article-controls">
                  <button class="btn btn-secondary btn-sm" id="read-aloud-btn">
                    🔊 Read Aloud (TTS)
                  </button>
                  <button class="btn btn-secondary btn-sm" id="stop-read-btn">
                    ⏹️ Stop
                  </button>
                </div>
              </div>

              <!-- Article Content with Clickable Words -->
              <div class="article-text-body" id="article-body">
                ${e.content.split(`

`).map(s=>`<p class="article-p">${s}</p>`).join("")}
              </div>

              <!-- Key Vocabulary Pills -->
              ${i.length>0?`
                <div class="key-vocab-section">
                  <h4>Key Vocabulary in This Text:</h4>
                  <div class="vocab-pills-list">
                    ${i.map(s=>`<span class="vocab-pill" data-word="${s}">${s}</span>`).join("")}
                  </div>
                </div>
              `:""}
            </article>

            <!-- Comprehension Questions -->
            <section class="card comprehension-card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">🧠 Comprehension Questions</h3>
                  <div class="card-subtitle">Verify your understanding and inference accuracy</div>
                </div>
              </div>

              <div class="questions-list">
                ${t.map((s,n)=>`
                  <div class="comp-question-item" data-q-idx="${n}">
                    <div class="comp-question-title">${n+1}. ${s.question}</div>
                    <div class="comp-options-list">
                      ${s.options.map(a=>`
                        <button class="comp-opt-btn ${this.userAnswers[n]===a?"selected":""}" data-idx="${n}" data-val="${a}">
                          ${a}
                        </button>
                      `).join("")}
                    </div>
                  </div>
                `).join("")}
              </div>

              <div class="reading-submit-wrap">
                <button class="btn btn-primary btn-lg" id="submit-reading-btn">
                  Check Comprehension Answers
                </button>
              </div>

              <!-- Results Box -->
              <div class="comp-results-box" id="comp-results-box" style="display: none;"></div>
            </section>
          `:`
            <div class="card empty-state">
              <p>Select an article from the library to begin reading.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){var e,t,i;this.container.querySelectorAll(".catalog-item").forEach(s=>{s.addEventListener("click",()=>{const n=s.dataset.id;n&&this.loadMaterial(n)})}),(e=document.getElementById("read-aloud-btn"))==null||e.addEventListener("click",()=>{this.selectedMaterial&&m.speak(this.selectedMaterial.content,{rate:.9})}),(t=document.getElementById("stop-read-btn"))==null||t.addEventListener("click",()=>{m.cancel()}),this.container.querySelectorAll(".vocab-pill").forEach(s=>{s.addEventListener("click",()=>{m.speak(s.dataset.word)})}),this.container.querySelectorAll(".comp-opt-btn").forEach(s=>{s.addEventListener("click",()=>{const n=s.dataset.idx,a=s.dataset.val;this.userAnswers[n]=a,s.closest(".comp-options-list").querySelectorAll(".comp-opt-btn").forEach(o=>o.classList.remove("selected")),s.classList.add("selected")})}),(i=document.getElementById("submit-reading-btn"))==null||i.addEventListener("click",async()=>{const s=this.selectedMaterial,n=s&&s.comprehension_questions?typeof s.comprehension_questions=="string"?JSON.parse(s.comprehension_questions):s.comprehension_questions:[];if(Object.keys(this.userAnswers).length<n.length){u.showToast("Please answer all comprehension questions first.","error");return}const a=Math.round((Date.now()-this.readingStartTime)/1e3);try{const r=await p.submitReading(s.id,this.userAnswers,a),o=document.getElementById("comp-results-box");o.style.display="block",o.innerHTML=`
          <div class="results-banner ${r.score>=70?"good":"warning"}">
            <h3>Comprehension Score: ${r.score}% (${r.correctCount} of ${r.totalCount} correct)</h3>
            <p>Words read: ${r.wordCount} • Speed: ${r.wordsPerMinute} words per minute</p>
          </div>
          <div class="detailed-answers">
            ${(r.details||[]).map((l,d)=>`
              <div class="answer-eval-item ${l.isCorrect?"correct":"wrong"}">
                <div><strong>Question ${d+1}:</strong> ${l.question}</div>
                <div>Your answer: <em>${l.userAnswer}</em> ${l.isCorrect?"✅":`❌ (Correct: <strong>${l.correctAnswer}</strong>)`}</div>
              </div>
            `).join("")}
          </div>
        `,u.showToast(`Reading submitted! Score: ${r.score}%`,r.score>=70?"success":"info")}catch(r){u.showToast("Submission error: "+r.message,"error")}})}}class H{constructor(){this.container=null,this.materials=[],this.selectedMaterial=null,this.speed=1,this.accent="en-US",this.showTranscript=!1,this.listenCount=0,this.userAnswers={}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading listening tracks...</p>
      </div>
    `;try{const t=await p.getListeningMaterials();this.materials=Array.isArray(t)?t:t.materials||[],this.materials.length>0&&!this.selectedMaterial?await this.loadMaterial(this.materials[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Failed to load listening tracks</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadMaterial(e){try{const t=await p.getListeningMaterial(e);this.selectedMaterial=t.material,this.speed=this.selectedMaterial.speech_rate==="slow"?.8:1,this.accent=this.selectedMaterial.accent==="british"?"en-GB":"en-US",this.showTranscript=!1,this.listenCount=0,this.userAnswers={},this.renderContent()}catch(t){u.showToast("Failed to load track: "+t.message,"error")}}renderContent(){const e=this.selectedMaterial,t=e&&e.comprehension_questions?typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions:[];this.container.innerHTML=`
      <div class="listening-layout">
        <!-- Sidebar -->
        <aside class="listening-sidebar card">
          <div class="listening-sidebar-header">
            <h3>Listening Tracks</h3>
            <span class="catalog-count">${this.materials.length} Audio Tracks</span>
          </div>

          <div class="tracks-list">
            ${this.materials.map(i=>`
              <div class="track-item ${e&&e.id===i.id?"active":""}" data-id="${i.id}">
                <div class="track-top">
                  <span class="cefr-tag ${i.cefr_level}">${i.cefr_level}</span>
                  <span class="track-accent">${i.accent==="british"?"🇬🇧 British":"🇺🇸 American"}</span>
                </div>
                <div class="track-title">${i.title}</div>
              </div>
            `).join("")}
          </div>
        </aside>

        <!-- Main Player & Questions -->
        <div class="listening-main">
          ${e?`
            <!-- Audio Player Station -->
            <section class="card audio-player-card">
              <div class="player-top">
                <div class="track-meta">
                  <span class="cefr-tag ${e.cefr_level}">${e.cefr_level}</span>
                  <span class="topic-category-badge">${(e.category||"").toUpperCase()}</span>
                </div>
                <h1 class="track-main-title">${e.title}</h1>
                <p class="track-desc">${e.description||""}</p>
              </div>

              <!-- Interactive Controls -->
              <div class="player-controls-strip">
                <button class="btn btn-primary btn-lg" id="play-audio-btn">
                  ▶️ Play Audio Track
                </button>
                <button class="btn btn-secondary btn-lg" id="pause-audio-btn">
                  ⏹️ Stop
                </button>

                <div class="speed-selector">
                  <span class="control-label">Speed:</span>
                  <button class="speed-btn ${this.speed===.75?"active":""}" data-speed="0.75">0.75x</button>
                  <button class="speed-btn ${this.speed===1?"active":""}" data-speed="1.0">1.0x</button>
                  <button class="speed-btn ${this.speed===1.25?"active":""}" data-speed="1.25">1.25x</button>
                </div>

                <div class="accent-selector">
                  <span class="control-label">Accent:</span>
                  <button class="accent-btn ${this.accent==="en-US"?"active":""}" data-accent="en-US">🇺🇸 US</button>
                  <button class="accent-btn ${this.accent==="en-GB"?"active":""}" data-accent="en-GB">🇬🇧 UK</button>
                </div>
              </div>

              <div class="listen-count-indicator">
                Listened: <strong id="listen-count-val">${this.listenCount}</strong> times
              </div>

              <!-- Transcript Reveal Toggle -->
              <div class="transcript-box">
                <button class="btn btn-secondary btn-sm" id="toggle-transcript-btn">
                  ${this.showTranscript?"Hide Transcript":"👁️ Reveal English Transcript"}
                </button>
                <div class="transcript-content" id="transcript-content" style="display: ${this.showTranscript?"block":"none"};">
                  <p>${(e.transcript||e.audio_text||"").replace(/\n/g,"<br>")}</p>
                </div>
              </div>
            </section>

            <!-- Comprehension Questions -->
            <section class="card listening-questions-card">
              <div class="card-header">
                <h3 class="card-title">🎧 Comprehension & Ear Training</h3>
                <span class="card-subtitle">Answer based strictly on what you heard</span>
              </div>

              <div class="listening-questions-list">
                ${t.map((i,s)=>`
                  <div class="l-question-item">
                    <div class="l-question-title">${s+1}. ${i.question}</div>
                    <div class="l-options-grid">
                      ${i.options.map(n=>`
                        <button class="l-opt-btn ${this.userAnswers[s]===n?"selected":""}" data-q-idx="${s}" data-val="${n}">
                          ${n}
                        </button>
                      `).join("")}
                    </div>
                  </div>
                `).join("")}
              </div>

              <div class="listening-actions">
                <button class="btn btn-primary btn-lg" id="submit-listening-btn">
                  Check Listening Answers
                </button>
              </div>

              <div class="listening-results" id="l-results" style="display: none;"></div>
            </section>
          `:`
            <div class="card empty-state">
              <p>Select a track to start listening practice.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){var e,t,i,s;this.container.querySelectorAll(".track-item").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.id;a&&this.loadMaterial(a)})}),(e=document.getElementById("play-audio-btn"))==null||e.addEventListener("click",()=>{if(this.selectedMaterial){this.listenCount++;const n=document.getElementById("listen-count-val");n&&(n.textContent=this.listenCount),m.speak(this.selectedMaterial.audio_text,{rate:this.speed,lang:this.accent})}}),(t=document.getElementById("pause-audio-btn"))==null||t.addEventListener("click",()=>{m.cancel()}),this.container.querySelectorAll(".speed-btn").forEach(n=>{n.addEventListener("click",()=>{this.speed=parseFloat(n.dataset.speed),this.container.querySelectorAll(".speed-btn").forEach(a=>a.classList.remove("active")),n.classList.add("active")})}),this.container.querySelectorAll(".accent-btn").forEach(n=>{n.addEventListener("click",()=>{this.accent=n.dataset.accent,this.container.querySelectorAll(".accent-btn").forEach(a=>a.classList.remove("active")),n.classList.add("active")})}),(i=document.getElementById("toggle-transcript-btn"))==null||i.addEventListener("click",()=>{this.showTranscript=!this.showTranscript;const n=document.getElementById("transcript-content");n&&(n.style.display=this.showTranscript?"block":"none");const a=document.getElementById("toggle-transcript-btn");a&&(a.textContent=this.showTranscript?"Hide Transcript":"👁️ Reveal English Transcript")}),this.container.querySelectorAll(".l-opt-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.qIdx,r=n.dataset.val;this.userAnswers[a]=r,n.closest(".l-options-grid").querySelectorAll(".l-opt-btn").forEach(l=>l.classList.remove("selected")),n.classList.add("selected")})}),(s=document.getElementById("submit-listening-btn"))==null||s.addEventListener("click",async()=>{const n=this.selectedMaterial,a=n&&n.comprehension_questions?typeof n.comprehension_questions=="string"?JSON.parse(n.comprehension_questions):n.comprehension_questions:[];if(Object.keys(this.userAnswers).length<a.length){u.showToast("Please answer all questions first.","error");return}try{const r=await p.submitListening(n.id,this.userAnswers,this.listenCount),o=document.getElementById("l-results");o.style.display="block",o.innerHTML=`
          <div class="results-banner ${r.score>=70?"good":"warning"}">
            <h3>Listening Score: ${r.score}% (${r.correctCount} of ${r.totalCount} correct)</h3>
            <p>Listened ${r.listenCount} times.</p>
          </div>
          <div class="detailed-answers">
            ${(r.details||[]).map((l,d)=>`
              <div class="answer-eval-item ${l.isCorrect?"correct":"wrong"}">
                <div><strong>Question ${d+1}:</strong> ${l.question}</div>
                <div>Your answer: <em>${l.userAnswer}</em> ${l.isCorrect?"✅":`❌ (Correct: <strong>${l.correctAnswer}</strong>)`}</div>
              </div>
            `).join("")}
          </div>
        `,u.showToast(`Listening completed! Score: ${r.score}%`,"success")}catch(r){u.showToast("Submission error: "+r.message,"error")}})}}class j{constructor(){this.container=null,this.prompts=[],this.selectedPrompt=null,this.writingStartTime=Date.now(),this.evaluation=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading writing studio prompts...</p>
      </div>
    `;try{const t=await p.getWritingPrompts();this.prompts=Array.isArray(t)?t:t.prompts||[],this.prompts.length>0&&!this.selectedPrompt&&(this.selectedPrompt=this.prompts[0]),this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Failed to load writing prompts</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){const e=this.selectedPrompt;this.container.innerHTML=`
      <div class="writing-layout">
        <!-- Sidebar: Prompts List -->
        <aside class="writing-sidebar card">
          <div class="writing-sidebar-header">
            <h3>Writing Prompts</h3>
            <span class="catalog-count">${this.prompts.length} Prompts</span>
          </div>

          <div class="prompts-list">
            ${this.prompts.map(t=>`
              <div class="prompt-item ${e&&e.id===t.id?"active":""}" data-id="${t.id}">
                <div class="prompt-top">
                  <span class="cefr-tag ${t.cefr_level}">${t.cefr_level}</span>
                  <span class="prompt-type">${(t.type||"").toUpperCase()}</span>
                </div>
                <div class="prompt-short">${t.prompt.slice(0,70)}...</div>
              </div>
            `).join("")}
          </div>
        </aside>

        <!-- Main Studio Area -->
        <div class="writing-main">
          ${e?`
            <div class="card prompt-detail-card">
              <div class="prompt-detail-header">
                <div class="prompt-meta-strip">
                  <span class="cefr-tag ${e.cefr_level}">${e.cefr_level}</span>
                  <span class="topic-category-badge">${e.type}</span>
                  <span class="word-limit-badge">Target: ${e.word_limit_min} - ${e.word_limit_max} words</span>
                </div>
                <h1 class="prompt-title">${e.prompt}</h1>
                <p class="prompt-instructions">${e.instructions||""}</p>
              </div>

              <!-- Text Editor Area -->
              <div class="editor-wrapper">
                <textarea class="writing-textarea" id="writing-input" placeholder="Draft your response here in English. Focus on natural sentence flow, connectors, and clear structure..."></textarea>
                
                <div class="editor-stats-bar">
                  <div class="editor-stat-item">
                    <span>Words:</span>
                    <strong id="word-count-val">0</strong>
                    <span class="stat-target">/ ${e.word_limit_min}-${e.word_limit_max}</span>
                  </div>
                  <div class="editor-stat-item">
                    <span>Sentences:</span>
                    <strong id="sentence-count-val">0</strong>
                  </div>
                  <div class="editor-stat-item">
                    <span>Avg Sentence Length:</span>
                    <strong id="avg-len-val">0 words</strong>
                  </div>
                </div>
              </div>

              <div class="writing-actions-strip">
                <button class="btn btn-primary btn-lg" id="submit-writing-btn">
                  Analyze & Evaluate Writing →
                </button>
              </div>
            </div>

            <!-- Deep Linguistic Evaluation Card (Appears after submission) -->
            <div class="card writing-eval-card" id="writing-eval-card" style="display: none;">
              <!-- Dynamic analysis results injected here -->
            </div>
          `:`
            <div class="card empty-state">
              <p>Select a writing prompt to begin drafting.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){var n;this.container.querySelectorAll(".prompt-item").forEach(a=>{a.addEventListener("click",()=>{const r=parseInt(a.dataset.id,10);this.selectedPrompt=this.prompts.find(o=>o.id===r),this.writingStartTime=Date.now(),this.renderContent()})});const e=document.getElementById("writing-input"),t=document.getElementById("word-count-val"),i=document.getElementById("sentence-count-val"),s=document.getElementById("avg-len-val");e==null||e.addEventListener("input",()=>{const a=e.value.trim(),r=a?a.split(/\s+/).length:0,o=a?(a.match(/[^.!?]+[.!?]+/g)||[]).length||1:0,l=r>0&&o>0?(r/o).toFixed(1):0;t&&(t.textContent=r),i&&(i.textContent=o),s&&(s.textContent=`${l} words`)}),(n=document.getElementById("submit-writing-btn"))==null||n.addEventListener("click",async()=>{const a=e?e.value.trim():"";if(!a||a.split(/\s+/).length<10){u.showToast("Please write at least 10 words before submitting.","error");return}const r=this.selectedPrompt,o=Math.round((Date.now()-this.writingStartTime)/1e3),l=document.getElementById("submit-writing-btn");l.disabled=!0,l.textContent="Analyzing linguistic features...";try{const d=await p.submitWriting(r.id,a,o),h=document.getElementById("writing-eval-card");h.style.display="block",h.innerHTML=`
          <div class="eval-header">
            <div>
              <h2 class="card-title">🔬 Automated Linguistic Assessment</h2>
              <div class="card-subtitle">CEFR Estimated Band: <strong class="cefr-tag ${d.cefrLevel}">${d.cefrLevel}</strong> • Score: <strong>${d.overallScore}/100</strong></div>
            </div>
          </div>

          <div class="eval-metrics-grid">
            <div class="metric-box">
              <span class="metric-label">Grammar Accuracy</span>
              <span class="metric-val">${d.grammarScore||80}%</span>
            </div>
            <div class="metric-box">
              <span class="metric-label">Lexical Diversity</span>
              <span class="metric-val">${d.vocabularyScore||75}%</span>
            </div>
            <div class="metric-box">
              <span class="metric-label">Structure & Length</span>
              <span class="metric-val">${d.structureScore||85}%</span>
            </div>
          </div>

          <!-- Constructive Feedback -->
          <div class="eval-feedback-section">
            <h4>💡 Formative Pedagogical Feedback</h4>
            <div class="feedback-points">
              ${(d.feedback||[]).map(y=>`<div class="feedback-bullet">• ${y}</div>`).join("")}
            </div>
          </div>

          ${d.errors&&d.errors.length>0?`
            <div class="eval-errors-section">
              <h4>⚠️ Detected Issues & Corrections</h4>
              <div class="writing-errors-list">
                ${d.errors.map(y=>`
                  <div class="w-error-item">
                    <span class="w-error-type">${y.type}</span>
                    <span class="w-error-desc">${y.description}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}
        `,u.showToast(`Writing evaluated! Overall Score: ${d.overallScore}/100`,"success"),l.disabled=!1,l.textContent="Re-Analyze Writing →"}catch(d){u.showToast("Evaluation failed: "+d.message,"error"),l.disabled=!1,l.textContent="Analyze & Evaluate Writing →"}})}}class D{constructor(){this.container=null,this.scenarios=[],this.selectedScenario=null,this.messages=[],this.isRecording=!1,this.completedObjectives=new Set}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading speaking scenarios...</p>
      </div>
    `;try{const t=await p.getSpeakingScenarios();this.scenarios=Array.isArray(t)?t:t.scenarios||[],this.scenarios.length>0&&!this.selectedScenario?await this.loadScenario(this.scenarios[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Failed to load speaking scenarios</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadScenario(e){try{const t=await p.getSpeakingScenario(e);this.selectedScenario=t.scenario,this.completedObjectives=new Set,this.messages=[{sender:"ai",name:this.selectedScenario.ai_role||"AI Partner",text:this.selectedScenario.starter_message||"Hello! Ready to practice?"}],this.renderContent(),this.selectedScenario.starter_message&&m.speak(this.selectedScenario.starter_message)}catch(t){u.showToast("Failed to load scenario: "+t.message,"error")}}renderContent(){const e=this.selectedScenario;e&&e.key_vocabulary&&(typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary);const t=e&&e.key_phrases?typeof e.key_phrases=="string"?JSON.parse(e.key_phrases):e.key_phrases:[],i=e&&e.objectives?typeof e.objectives=="string"?JSON.parse(e.objectives):e.objectives:[];this.container.innerHTML=`
      <div class="speaking-layout">
        <!-- Sidebar: Scenario List -->
        <aside class="speaking-sidebar card">
          <div class="speaking-sidebar-header">
            <h3>Speaking Scenarios</h3>
            <span class="catalog-count">${this.scenarios.length} Scenarios</span>
          </div>

          <div class="scenarios-list">
            ${this.scenarios.map(s=>`
              <div class="scenario-item ${e&&e.id===s.id?"active":""}" data-id="${s.id}">
                <div class="scenario-top">
                  <span class="cefr-tag ${s.cefr_level}">${s.cefr_level}</span>
                  <span class="scenario-cat">${(s.category||"").toUpperCase()}</span>
                </div>
                <div class="scenario-title">${s.title}</div>
              </div>
            `).join("")}
          </div>
        </aside>

        <!-- Main Dialogue Simulator -->
        <div class="speaking-main">
          ${e?`
            <div class="card speaking-header-card">
              <div class="dialogue-meta-strip">
                <span class="cefr-tag ${e.cefr_level}">${e.cefr_level}</span>
                <span class="topic-category-badge">${e.category}</span>
                <span class="role-badge">You: <strong>${e.user_role}</strong> • AI: <strong>${e.ai_role}</strong></span>
              </div>
              <h1 class="dialogue-title">${e.title}</h1>
              <p class="dialogue-situation">📌 <em>Situation: ${e.situation}</em></p>

              <!-- Objectives Checklist -->
              ${i.length>0?`
                <div class="objectives-strip">
                  <span class="obj-label">Objectives:</span>
                  <div class="obj-pills-list">
                    ${i.map((s,n)=>`
                      <span class="obj-pill ${this.completedObjectives.has(s)?"completed":""}" data-obj="${s}">
                        ${this.completedObjectives.has(s)?"✅":"⭕"} ${s}
                      </span>
                    `).join("")}
                  </div>
                </div>
              `:""}
            </div>

            <!-- Dialogue Chat Window -->
            <div class="card dialogue-window card" id="dialogue-chat-window">
              <div class="chat-messages-scroll" id="chat-messages-container">
                ${this.messages.map((s,n)=>`
                  <div class="chat-bubble ${s.sender==="ai"?"ai-bubble":"user-bubble"}">
                    <div class="bubble-sender">${s.name}</div>
                    <div class="bubble-text">${s.text}</div>
                    ${s.sender==="ai"?`<button class="tts-bubble-btn" data-text="${s.text}">🔊</button>`:""}
                  </div>
                `).join("")}
              </div>

              <!-- Suggested Phrases Helpers -->
              ${t.length>0?`
                <div class="phrases-helper-strip">
                  <span class="phrases-label">💡 Suggested Phrases:</span>
                  <div class="phrases-chips">
                    ${t.map(s=>`<button class="phrase-chip-btn" data-phrase="${s}">${s}</button>`).join("")}
                  </div>
                </div>
              `:""}

              <!-- Input Strip with Mic / Text -->
              <div class="dialogue-input-strip">
                <button class="mic-toggle-btn ${this.isRecording?"recording":""}" id="mic-toggle-btn" title="Speak with microphone">
                  ${this.isRecording?"🔴 Listening...":"🎙️ Mic"}
                </button>

                <input type="text" class="dialogue-input" id="dialogue-text-input" placeholder="Type or speak your conversational turn..." autocomplete="off">

                <button class="btn btn-primary" id="send-dialogue-btn">
                  Send Turn ➔
                </button>
              </div>
            </div>
          `:`
            <div class="card empty-state">
              <p>Select a speaking scenario from the list to start conversing.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents(),this.scrollChatToBottom()}scrollChatToBottom(){const e=document.getElementById("chat-messages-container");e&&(e.scrollTop=e.scrollHeight)}bindEvents(){this.container.querySelectorAll(".scenario-item").forEach(s=>{s.addEventListener("click",()=>{const n=parseInt(s.dataset.id,10);n&&this.loadScenario(n)})}),this.container.querySelectorAll(".phrase-chip-btn").forEach(s=>{s.addEventListener("click",()=>{const n=document.getElementById("dialogue-text-input");n&&(n.value=s.dataset.phrase,n.focus())})}),this.container.querySelectorAll(".tts-bubble-btn").forEach(s=>{s.addEventListener("click",()=>{m.speak(s.dataset.text)})});const e=document.getElementById("mic-toggle-btn"),t=document.getElementById("dialogue-text-input");e==null||e.addEventListener("click",()=>{if(this.isRecording)m.stopListening(),this.isRecording=!1,e.classList.remove("recording"),e.textContent="🎙️ Mic";else{if(!m.isSttSupported()){u.showToast("Speech recognition is not supported in this browser. You can type your turns directly!","error");return}this.isRecording=!0,e.classList.add("recording"),e.textContent="🔴 Listening...",m.startListening({onResult:s=>{t&&(t.value=s.final||s.interim)},onError:()=>{this.isRecording=!1,e.classList.remove("recording"),e.textContent="🎙️ Mic"},onEnd:s=>{this.isRecording=!1,e.classList.remove("recording"),e.textContent="🎙️ Mic",s&&t&&(t.value=s)}})}});const i=document.getElementById("send-dialogue-btn");i==null||i.addEventListener("click",()=>this.handleUserTurn()),t==null||t.addEventListener("keydown",s=>{s.key==="Enter"&&this.handleUserTurn()})}handleUserTurn(){const e=document.getElementById("dialogue-text-input"),t=e?e.value.trim():"";if(!t)return;e.value="",this.messages.push({sender:"user",name:this.selectedScenario.user_role||"You",text:t});const i=this.selectedScenario,s=i&&i.objectives?typeof i.objectives=="string"?JSON.parse(i.objectives):i.objectives:[];for(const n of s)n.toLowerCase().split(" ").some(r=>t.toLowerCase().includes(r)&&r.length>3)&&this.completedObjectives.add(n);this.renderContent(),setTimeout(()=>{const n=this.generateAiResponse(t,i);this.messages.push({sender:"ai",name:i.ai_role||"AI Partner",text:n}),this.renderContent(),m.speak(n)},800)}generateAiResponse(e,t){const i=e.toLowerCase(),s=t.title.toLowerCase();return s.includes("restaurant")?i.includes("water")||i.includes("drink")||i.includes("wine")?"Right away! Would you also like to see today's chef specials for your main course?":i.includes("bill")||i.includes("check")?"Certainly! Here is your bill. Would you prefer paying with card or cash today?":i.includes("menu")||i.includes("order")?"Our handmade pasta and grilled salmon are very popular tonight. What can I get started for you?":"Excellent choice! I've noted that down. Is there anything else I can get you at the moment?":s.includes("interview")?i.includes("experience")||i.includes("worked")||i.includes("year")?"That sounds like valuable experience. How do you usually handle tight deadlines or difficult technical roadblocks?":i.includes("strength")||i.includes("skill")?"Those are definitely key qualities for our team. Could you give a specific example of when you applied that in a project?":"Thank you for sharing that. Now, what interests you most about working at our company?":i.includes("how are you")||i.includes("nice to meet you")?"I'm doing very well, thank you! It's wonderful meeting you. What do you enjoy doing most in your free time?":"That's very interesting! Tell me more about how you got into that."}}class z{constructor(){this.container=null,this.activeTab="minimal_pairs",this.isRecording=!1,this.currentScore=null}render(e){this.container=e,this.renderContent()}renderContent(){this.container.innerHTML=`
      <div class="pronunciation-layout">
        <!-- Header -->
        <div class="card pron-header">
          <div class="pron-header-left">
            <h1 class="pron-title">Pronunciation & Accent Lab</h1>
            <p class="pron-subtitle">Train acoustic phonetics, reduce Turkish accent interference, and master natural English rhythm</p>
          </div>
          <div class="pron-tabs">
            <button class="btn ${this.activeTab==="minimal_pairs"?"btn-primary":"btn-secondary"}" data-tab="minimal_pairs">
              Minimal Pairs
            </button>
            <button class="btn ${this.activeTab==="silent_letters"?"btn-primary":"btn-secondary"}" data-tab="silent_letters">
              Silent Letters
            </button>
            <button class="btn ${this.activeTab==="ed_endings"?"btn-primary":"btn-secondary"}" data-tab="ed_endings">
              Past "-ed" Endings
            </button>
            <button class="btn ${this.activeTab==="sentence_stress"?"btn-primary":"btn-secondary"}" data-tab="sentence_stress">
              Sentence Stress
            </button>
          </div>
        </div>

        <div class="pron-body" id="pron-body">
          ${this.renderActiveTabContent()}
        </div>
      </div>
    `,this.bindEvents()}renderActiveTabContent(){switch(this.activeTab){case"minimal_pairs":return this.renderMinimalPairs();case"silent_letters":return this.renderSilentLetters();case"ed_endings":return this.renderEdEndings();case"sentence_stress":return this.renderSentenceStress();default:return""}}renderMinimalPairs(){return`
      <div class="card minimal-pairs-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🎧 Minimal Pairs Discrimination</h2>
            <div class="card-subtitle">Train your ears and vocal cords to contrast confusing vowel and consonant sounds</div>
          </div>
        </div>

        <div class="pairs-grid">
          ${[{soundA:"/ɪ/ (short)",wordA:"Ship",soundB:"/iː/ (long)",wordB:"Sheep",tip:"Turkish only has one /i/ sound. In English, /ɪ/ is relaxed and short, while /iː/ is smiled and long."},{soundA:"/æ/ (open)",wordA:"Bat",soundB:"/e/ (mid)",wordB:"Bet",tip:'Open your jaw wide for /æ/ as in "apple" or "cat".'},{soundA:"/θ/ (unvoiced th)",wordA:"Think",soundB:"/s/ (sibilant)",wordB:"Sink",tip:"Place your tongue between your upper and lower teeth for /θ/. Do not say /s/!"},{soundA:"/w/ (rounded)",wordA:"Wet",soundB:"/v/ (labiodental)",wordB:"Vet",tip:'For /w/, round your lips into an "O" shape without touching teeth to lips.'}].map(t=>`
            <div class="pair-card">
              <div class="pair-contrast-row">
                <div class="word-box word-a">
                  <span class="sound-tag">${t.soundA}</span>
                  <div class="word-title">${t.wordA}</div>
                  <button class="tts-play-btn pron-tts" data-text="${t.wordA}">🔊 Listen</button>
                </div>

                <div class="contrast-symbol">vs</div>

                <div class="word-box word-b">
                  <span class="sound-tag">${t.soundB}</span>
                  <div class="word-title">${t.wordB}</div>
                  <button class="tts-play-btn pron-tts" data-text="${t.wordB}">🔊 Listen</button>
                </div>
              </div>

              <div class="pair-tip">
                💡 <strong>Linguistic Tip:</strong> ${t.tip}
              </div>

              <div class="mic-practice-box">
                <button class="btn btn-secondary btn-sm test-mic-btn" data-target="${t.wordA}">
                  🎙️ Practice "${t.wordA}"
                </button>
                <button class="btn btn-secondary btn-sm test-mic-btn" data-target="${t.wordB}">
                  🎙️ Practice "${t.wordB}"
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}renderSilentLetters(){return`
      <div class="card silent-letters-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🤫 The English Silent Letters Workshop</h2>
            <div class="card-subtitle">English spelling reflects history, not phonetic 1:1 spelling like Turkish</div>
          </div>
        </div>

        <div class="silent-grid">
          ${[{word:"Doubt",phonetic:"/daʊt/",silent:"b",note:'The letter "b" is silent (also in debt, subtle).'},{word:"Receipt",phonetic:"/rɪˈsiːt/",silent:"p",note:'The letter "p" is completely silent.'},{word:"Knight",phonetic:"/naɪt/",silent:"k & gh",note:'"k" and "gh" are silent, rhyming with night.'},{word:"Island",phonetic:"/ˈaɪ.lənd/",silent:"s",note:'Never pronounce the "s" in island!'},{word:"Honest",phonetic:"/ˈɒn.ɪst/",silent:"h",note:'Silent "h", requiring the article "an honest person".'},{word:"Wednesday",phonetic:"/ˈwenz.deɪ/",silent:"d",note:'The first "d" and second "e" are silent.'}].map(t=>`
            <div class="silent-word-card">
              <div class="silent-word-header">
                <div class="silent-word-title">${t.word}</div>
                <button class="tts-play-btn pron-tts" data-text="${t.word}">🔊</button>
              </div>
              <div class="phonetic-ipa">${t.phonetic}</div>
              <div class="silent-letter-badge">Silent: <strong>${t.silent}</strong></div>
              <p class="silent-note">${t.note}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `}renderEdEndings(){return`
      <div class="card ed-endings-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">⏱️ Regular Past Tense "-ed" Pronunciation</h2>
            <div class="card-subtitle">Master the 3 distinct sounds of regular past tense verbs</div>
          </div>
        </div>

        <div class="ed-rules-grid">
          <div class="ed-rule-col rule-id">
            <div class="rule-badge">/ɪd/ or /əd/ (Extra Syllable)</div>
            <p class="rule-condition">Used ONLY after verbs ending in <strong>/t/</strong> or <strong>/d/</strong> sounds.</p>
            <div class="ed-examples-list">
              <div class="ed-ex-item" data-text="Wanted">Wanted (want-ed) 🔊</div>
              <div class="ed-ex-item" data-text="Needed">Needed (need-ed) 🔊</div>
              <div class="ed-ex-item" data-text="Decided">Decided (de-cid-ed) 🔊</div>
            </div>
          </div>

          <div class="ed-rule-col rule-t">
            <div class="rule-badge">/t/ (Voiceless Ending)</div>
            <p class="rule-condition">After voiceless consonants: /p/, /k/, /s/, /ʃ/, /tʃ/, /f/.</p>
            <div class="ed-examples-list">
              <div class="ed-ex-item" data-text="Worked">Worked (workt) 🔊</div>
              <div class="ed-ex-item" data-text="Watched">Watched (watcht) 🔊</div>
              <div class="ed-ex-item" data-text="Laughed">Laughed (lafft) 🔊</div>
            </div>
          </div>

          <div class="ed-rule-col rule-d">
            <div class="rule-badge">/d/ (Voiced Ending)</div>
            <p class="rule-condition">After voiced sounds: vowels and /b/, /g/, /v/, /z/, /m/, /n/, /l/, /r/.</p>
            <div class="ed-examples-list">
              <div class="ed-ex-item" data-text="Played">Played (playd) 🔊</div>
              <div class="ed-ex-item" data-text="Opened">Opened (opend) 🔊</div>
              <div class="ed-ex-item" data-text="Called">Called (calld) 🔊</div>
            </div>
          </div>
        </div>
      </div>
    `}renderSentenceStress(){return`
      <div class="card sentence-stress-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🎵 Sentence Stress & Pragmatic Meaning</h2>
            <div class="card-subtitle">In English, changing WHICH word you stress completely changes the underlying meaning</div>
          </div>
        </div>

        <div class="stress-drills-list">
          ${[{text:"I didn't say he stole the money.",stress:"NEUTRAL",note:"Baseline statement without marked emphasis."},{text:"I didn't say HE stole the money.",stress:"EMPHASIS ON 'HE'",note:"Someone else stole it, not him."},{text:"I didn't say he STOLE the money.",stress:"EMPHASIS ON 'STOLE'",note:"Maybe he borrowed it or received it."},{text:"I didn't say he stole the MONEY.",stress:"EMPHASIS ON 'MONEY'",note:"He stole something else (e.g. jewelry)."}].map(t=>`
            <div class="stress-item">
              <div class="stress-top">
                <span class="stress-badge">${t.stress}</span>
                <button class="tts-play-btn pron-tts" data-text="${t.text}">🔊 Listen</button>
              </div>
              <div class="stress-sentence">${t.text}</div>
              <div class="stress-meaning">👉 Implication: ${t.note}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `}bindEvents(){this.container.querySelectorAll(".pron-tabs .btn").forEach(e=>{e.addEventListener("click",()=>{this.activeTab=e.dataset.tab,this.renderContent()})}),this.container.querySelectorAll(".pron-tts").forEach(e=>{e.addEventListener("click",()=>{m.speak(e.dataset.text)})}),this.container.querySelectorAll(".ed-ex-item").forEach(e=>{e.addEventListener("click",()=>{m.speak(e.dataset.text)})}),this.container.querySelectorAll(".test-mic-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target;if(!m.isSttSupported()){u.showToast("Speech recognition not supported in this browser.","error");return}u.showToast(`Say "${t}" into your microphone now...`,"info",4e3),e.textContent="🔴 Listening...",m.startListening({onResult:i=>{const s=i.final||i.interim,n=m.calculateSimilarity(s,t);n>=80?u.showToast(`Excellent! You said "${s}" (${n}% accurate)`,"success"):u.showToast(`Detected: "${s}" (${n}% match). Try listening and repeating again.`,"error")},onEnd:()=>{e.textContent=`🎙️ Practice "${t}"`},onError:()=>{e.textContent=`🎙️ Practice "${t}"`}})})})}}class O{constructor(){this.container=null,this.errors=[],this.filterSkill="all",this.showResolved=!1}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Loading personal error registry...</p>
      </div>
    `;try{const t=await p.getErrors({resolved:this.showResolved?1:0});this.errors=t.errors||[],this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Failed to load error bank</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){const e=["all","grammar","vocabulary","writing","speaking","sentence_formation"],t=this.errors.filter(i=>this.filterSkill==="all"?!0:i.skill===this.filterSkill);this.container.innerHTML=`
      <div class="errorbank-layout">
        <!-- Header -->
        <div class="card errorbank-header">
          <div class="errorbank-header-left">
            <h1 class="errorbank-title">Personal Error Bank (Hata Defteri)</h1>
            <p class="errorbank-subtitle">
              Every mistake is diagnostic data. LinguaForge catalogs your habitual errors, exposes the underlying linguistic interference, and trains you until the pattern is eradicated.
            </p>
          </div>
          <div class="errorbank-header-right">
            <button class="btn ${this.showResolved?"btn-primary":"btn-secondary"}" id="toggle-resolved-btn">
              ${this.showResolved?"Showing Resolved":"Showing Active"} (${this.errors.length})
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        <div class="errorbank-filters card">
          <span class="filter-label">Filter by Domain:</span>
          <div class="skill-filter-tabs">
            ${e.map(i=>`
              <button class="skill-tab ${this.filterSkill===i?"active":""}" data-skill="${i}">
                ${i.replace("_"," ").toUpperCase()}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Errors List -->
        <div class="errors-grid">
          ${t.length>0?t.map(i=>`
            <div class="card error-item-card ${i.resolved?"is-resolved":""}">
              <div class="error-item-top">
                <span class="error-skill-badge">${(i.skill||"").toUpperCase()}</span>
                <span class="error-freq-badge">Occurred: <strong>${i.occurrence_count||1}x</strong></span>
              </div>

              <div class="error-contrast-box">
                <div class="error-produced">
                  <span class="contrast-label">Your Production:</span>
                  <div class="produced-text">❌ "${i.error_text||"Error"}"</div>
                </div>
                <div class="error-target">
                  <span class="contrast-label">Natural Target:</span>
                  <div class="target-text">✅ "${i.correction||"Target"}"</div>
                </div>
              </div>

              ${i.explanation?`
                <div class="error-explanation">
                  <strong>Why this happens:</strong> ${i.explanation}
                </div>
              `:""}

              <div class="error-item-actions">
                ${i.resolved?`
                  <span class="resolved-label">🎉 Mastered & Cleared</span>
                `:`
                  <button class="btn btn-success btn-sm resolve-err-btn" data-id="${i.id}">
                    ✓ Mark as Mastered
                  </button>
                `}
              </div>
            </div>
          `).join(""):`
            <div class="card empty-errors-card">
              <div class="empty-icon">🛡️</div>
              <h3>No Unresolved Errors</h3>
              <p>Your error bank is clean in this category. Continue practicing grammar exercises and writing prompts; any persistent mistakes will automatically be caught and logged here.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){var e;this.container.querySelectorAll(".skill-tab").forEach(t=>{t.addEventListener("click",()=>{this.filterSkill=t.dataset.skill,this.renderContent()})}),(e=document.getElementById("toggle-resolved-btn"))==null||e.addEventListener("click",async()=>{this.showResolved=!this.showResolved,await this.render(this.container)}),this.container.querySelectorAll(".resolve-err-btn").forEach(t=>{t.addEventListener("click",async()=>{const i=t.dataset.id;try{await p.resolveError(i),u.showToast("Error pattern marked as resolved!","success"),await this.render(this.container)}catch(s){u.showToast("Failed to resolve error: "+s.message,"error")}})})}}class V{constructor(){this.container=null,this.history=[],this.dashboardData=null,this.weeklyReport=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Synthesizing long-term progress metrics...</p>
      </div>
    `;try{const[t,i,s]=await Promise.all([p.getDashboard(),p.getProgressHistory(),p.getWeeklyReport()]);this.dashboardData=t,this.history=i.history||[],this.weeklyReport=s.report,this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Failed to load progress analytics</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){const{stats:e,skills:t,weekStudy:i,latestAssessment:s}=this.dashboardData,n=[{key:"grammar",name:"Grammar"},{key:"vocabulary",name:"Vocabulary"},{key:"reading",name:"Reading"},{key:"listening",name:"Listening"},{key:"writing",name:"Writing"},{key:"speaking",name:"Speaking"},{key:"pronunciation",name:"Pronunciation"},{key:"sentence_formation",name:"Sentence Syntax"},{key:"comprehension",name:"Comprehension"},{key:"communication",name:"Communication"}],a=(i||[]).reduce((r,o)=>r+(o.total_minutes||0),0);this.container.innerHTML=`
      <div class="progress-layout">
        <!-- Header -->
        <div class="card progress-header">
          <div class="progress-header-left">
            <h1 class="progress-title">Mastery Trajectory & Analytics</h1>
            <p class="progress-subtitle">Longitudinal analysis of your language acquisition curve across CEFR bands</p>
          </div>
          <div class="current-cefr-pill">
            <span class="cefr-pill-label">CURRENT BENCHMARK</span>
            <span class="cefr-pill-val">${(s==null?void 0:s.overall_cefr)||"A2"}</span>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="grid-4 progress-stats-grid">
          <div class="card p-stat-card">
            <span class="p-stat-title">Study Streak</span>
            <div class="p-stat-val">${e.current_streak||0} 🔥</div>
            <span class="p-stat-sub">Longest: ${e.longest_streak||0} days</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Past 7 Days Time</span>
            <div class="p-stat-val">${a} min</div>
            <span class="p-stat-sub">Active engagement</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Total XP</span>
            <div class="p-stat-val">${e.xp||0} ⚡</div>
            <span class="p-stat-sub">Level ${e.level||1} Scholar</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Vocabulary Size</span>
            <div class="p-stat-val">${e.total_words_learned||0}</div>
            <span class="p-stat-sub">In permanent memory</span>
          </div>
        </div>

        <div class="grid-2 progress-charts-grid">
          <!-- 10 Skills Detailed Breakdown -->
          <div class="card skills-audit-card">
            <h2 class="card-title">🎯 CEFR Level by Domain</h2>
            <div class="card-subtitle">Granular performance mapping across communicative competencies</div>

            <div class="domain-bars-list">
              ${n.map(r=>{const o=t[r.key]||{level:"A1",sublevel:"",score:30},l=o.level||"A1",d=o.score||35;return`
                  <div class="domain-row">
                    <div class="domain-label">
                      <span>${r.name}</span>
                      <span class="cefr-tag ${l}">${l}${o.sublevel||""}</span>
                    </div>
                    <div class="domain-bar-track">
                      <div class="domain-bar-fill" style="width: ${Math.max(d,10)}%;"></div>
                    </div>
                    <span class="domain-score">${d}%</span>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- Weekly Consistency Distribution -->
          <div class="card weekly-activity-card">
            <h2 class="card-title">📅 7-Day Study Consistency</h2>
            <div class="card-subtitle">Daily practice distribution (minutes per day)</div>

            <div class="week-chart-bars">
              ${i&&i.length>0?i.map(r=>`
                <div class="day-bar-col">
                  <div class="day-bar-track">
                    <div class="day-bar-fill" style="height: ${Math.min(100,(r.total_minutes||0)*2)}%;"></div>
                  </div>
                  <span class="day-label">${r.date.slice(5)}</span>
                  <span class="day-min">${r.total_minutes||0}m</span>
                </div>
              `).join(""):`
                <div class="empty-chart-note">Start practicing today to populate your 7-day activity chart!</div>
              `}
            </div>

            <!-- Learning Insights Box -->
            <div class="insights-box">
              <h4>🧠 Cognitive Acquisition Tip</h4>
              <p>Short, daily 20-30 minute focused sessions yield 3x higher long-term neural consolidation compared to infrequent 3-hour marathon cramming sessions.</p>
            </div>
          </div>
        </div>
      </div>
    `}}class N{constructor(){this.viewport=document.getElementById("viewport"),this.pageTitle=document.getElementById("page-title"),this.views={dashboard:new C,assessment:new B,grammar:new M,vocabulary:new W,reading:new R,listening:new H,writing:new j,speaking:new D,pronunciation:new z,errors:new O,progress:new V},this.titles={dashboard:"Personal Dashboard & Routine",assessment:"10-Skill Diagnostic Assessment",grammar:"Grammar Academy & Rules",vocabulary:"Spaced Repetition (SRS) Studio",reading:"Reading Comprehension Lab",listening:"Listening & Phonics Lab",writing:"Writing Studio & Live Evaluator",speaking:"Speaking & Conversational Simulator",pronunciation:"Pronunciation & Accent Training",errors:"Personal Error Bank (Hata Defteri)",progress:"Mastery Trajectory & Analytics"}}async init(){this.bindNavigation(),this.bindSessionTimer(),this.bindSidebarToggle(),await this.ensureUserSession(),u.on("view:change",e=>{this.navigateTo(e)}),this.navigateTo("dashboard")}async ensureUserSession(){if(p.userId)try{const e=await p.getProfile();this.updateUserDisplay(e.user)}catch{try{const t=await p.register("learner_"+Math.floor(Math.random()*1e4),"English Learner");u.setUser(t),this.updateUserDisplay(t)}catch(t){console.error("Registration fallback failed:",t)}}else try{const e=await p.register("learner","English Learner");u.setUser(e),this.updateUserDisplay(e)}catch{try{const t=await p.login("learner");u.setUser(t),this.updateUserDisplay(t)}catch(t){console.error("Session init error:",t)}}}updateUserDisplay(e){if(!e)return;const t=document.getElementById("header-username");t&&(t.textContent=e.displayName||e.username||"Learner");const i=document.getElementById("header-user-avatar");if(i){const s=(e.displayName||"EN").split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase();i.textContent=s}}bindNavigation(){var e;document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.view;i&&this.navigateTo(i)})}),(e=document.getElementById("btn-quick-practice"))==null||e.addEventListener("click",()=>{this.navigateTo("dashboard")})}navigateTo(e){if(!this.views[e])return;document.querySelectorAll(".nav-item").forEach(i=>{i.classList.toggle("active",i.dataset.view===e)}),this.pageTitle&&(this.pageTitle.textContent=this.titles[e]||"LinguaForge"),this.viewport&&(this.viewport.scrollTop=0),this.views[e].render(this.viewport);const t=document.getElementById("sidebar");t&&window.innerWidth<=768&&t.classList.remove("open")}bindSessionTimer(){u.startSessionTimer();const e=document.getElementById("session-timer");u.on("timer:tick",t=>{if(e){const i=Math.floor(t/60),s=t%60;e.textContent=`${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}`}})}bindSidebarToggle(){const e=document.getElementById("sidebar-toggle"),t=document.getElementById("sidebar");e==null||e.addEventListener("click",()=>{t==null||t.classList.toggle("open")})}}window.addEventListener("DOMContentLoaded",()=>{new N().init()});
