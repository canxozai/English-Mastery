(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const k={grammar_topics:[{id:1,name:"Present Simple",slug:"present-simple",category:"tenses",cefr_level:"A1",description:"Actions that happen regularly, facts, and routines.",explanation_en:"We use the Present Simple for habits, routines, general truths, and permanent situations. Add -s/-es for he/she/it.",explanation_tr:"Geniş zaman. Alışkanlıklar, rutin eylemler, genel doğrular ve kalıcı durumlar için kullanılır. He/she/it için fiile -s/-es eklenir.",examples:`[{"sentence":"I work every day.","translation":"Her gün çalışırım."},{"sentence":"She plays tennis on Sundays.","translation":"Pazar günleri tenis oynar."},{"sentence":"Water boils at 100 degrees.","translation":"Su 100 derecede kaynar."},{"sentence":"They don't like coffee.","translation":"Kahve sevmezler."},{"sentence":"Does he speak English?","translation":"İngilizce konuşur mu?"}]`,rules:'["Affirmative: Subject + V1 (he/she/it + V1+s/es)","Negative: Subject + do/does + not + V1","Question: Do/Does + Subject + V1?","Time expressions: always, usually, often, sometimes, rarely, never, every day/week/month","Third person singular: add -s (works), -es (watches, goes), -ies (studies)"]',common_mistakes:`[{"wrong":"He work every day.","correct":"He works every day.","explanation":"He/she/it requires -s on the verb."},{"wrong":"She don't like it.","correct":"She doesn't like it.","explanation":"Use \\"doesn't\\" for he/she/it negatives."},{"wrong":"Does she works here?","correct":"Does she work here?","explanation":"After does/doesn't, use the base form."},{"wrong":"I am go to school.","correct":"I go to school.","explanation":"Don't use \\"am\\" with Present Simple verbs."}]`,order_index:1,prerequisite_topics:"[]"},{id:2,name:"Present Continuous",slug:"present-continuous",category:"tenses",cefr_level:"A1",description:"Actions happening right now or temporary actions.",explanation_en:"We use the Present Continuous for actions happening now, temporary situations, and future arrangements. Form: am/is/are + verb-ing.",explanation_tr:"Şimdiki zaman. Şu anda olan eylemler, geçici durumlar ve gelecek planları için kullanılır. Yapı: am/is/are + fiil-ing.",examples:'[{"sentence":"I am reading a book right now.","translation":"Şu anda bir kitap okuyorum."},{"sentence":"She is working from home this week.","translation":"Bu hafta evden çalışıyor."},{"sentence":"They are not watching TV.","translation":"Televizyon izlemiyorlar."},{"sentence":"Are you listening to me?","translation":"Beni dinliyor musun?"},{"sentence":"We are meeting them tomorrow.","translation":"Yarın onlarla buluşuyoruz."}]',rules:'["Affirmative: Subject + am/is/are + V-ing","Negative: Subject + am/is/are + not + V-ing","Question: Am/Is/Are + Subject + V-ing?","Time expressions: now, right now, at the moment, currently, today, this week","Spelling: drop -e (make→making), double consonant (run→running), -ie→ying (lie→lying)"]',common_mistakes:'[{"wrong":"I reading a book.","correct":"I am reading a book.","explanation":"You need am/is/are before the -ing verb."},{"wrong":"She is work now.","correct":"She is working now.","explanation":"Add -ing to the main verb."},{"wrong":"I am knowing the answer.","correct":"I know the answer.","explanation":"Stative verbs (know, like, want) are usually not used in continuous."}]',order_index:2,prerequisite_topics:'["present-simple"]'},{id:3,name:"Past Simple",slug:"past-simple",category:"tenses",cefr_level:"A2",description:"Completed actions in the past.",explanation_en:"We use Past Simple for finished actions at a specific time in the past. Regular verbs add -ed. Irregular verbs have special forms.",explanation_tr:"Geçmiş zaman. Geçmişte belirli bir zamanda tamamlanmış eylemler için kullanılır. Düzenli fiillere -ed eklenir. Düzensiz fiillerin özel halleri vardır.",examples:`[{"sentence":"I visited London last year.","translation":"Geçen yıl Londra'yı ziyaret ettim."},{"sentence":"She went to the store yesterday.","translation":"Dün mağazaya gitti."},{"sentence":"They didn't come to the party.","translation":"Partiye gelmediler."},{"sentence":"Did you see the movie?","translation":"Filmi gördün mü?"},{"sentence":"He bought a new car.","translation":"Yeni bir araba aldı."}]`,rules:'["Affirmative: Subject + V2 (regular: +ed, irregular: special form)","Negative: Subject + did + not + V1","Question: Did + Subject + V1?","Time expressions: yesterday, last week/month/year, ago, in 2020, when I was young","Regular -ed: worked, played, studied, stopped"]',common_mistakes:`[{"wrong":"I goed to school.","correct":"I went to school.","explanation":"\\"Go\\" is irregular. Past form is \\"went\\"."},{"wrong":"Did you went there?","correct":"Did you go there?","explanation":"After did/didn't, use base form (V1)."},{"wrong":"She didn't went.","correct":"She didn't go.","explanation":"After didn't, always use base form."}]`,order_index:3,prerequisite_topics:'["present-simple"]'},{id:4,name:"Past Continuous",slug:"past-continuous",category:"tenses",cefr_level:"A2",description:"Actions in progress at a specific time in the past.",explanation_en:"We use Past Continuous for actions that were in progress at a specific moment in the past, or for background actions when something else happened.",explanation_tr:"Geçmişte devam eden zaman. Geçmişte belirli bir anda devam eden eylemler veya başka bir olay olduğunda arka planda olan eylemler için kullanılır.",examples:`[{"sentence":"I was reading when the phone rang.","translation":"Telefon çaldığında kitap okuyordum."},{"sentence":"They were playing football at 3 PM.","translation":"Saat 3'te futbol oynuyorlardı."},{"sentence":"She wasn't sleeping when I called.","translation":"Aradığımda uyumuyordu."},{"sentence":"Were you working yesterday evening?","translation":"Dün akşam çalışıyor muydun?"}]`,rules:'["Affirmative: Subject + was/were + V-ing","Negative: Subject + was/were + not + V-ing","Question: Was/Were + Subject + V-ing?","Often used with Past Simple: \\"While I was walking, I saw a friend.\\"","Time expressions: while, when, at that time, at 3 PM yesterday"]',common_mistakes:'[{"wrong":"I was watch TV.","correct":"I was watching TV.","explanation":"Use V-ing after was/were."},{"wrong":"While I studied, the phone rang.","correct":"While I was studying, the phone rang.","explanation":"Use Past Continuous for the ongoing action, Past Simple for the interruption."}]',order_index:4,prerequisite_topics:'["past-simple", "present-continuous"]'},{id:5,name:"Present Perfect",slug:"present-perfect",category:"tenses",cefr_level:"B1",description:"Past actions connected to the present, experiences, and recent events.",explanation_en:"We use Present Perfect for experiences, recent actions with present results, and actions from a period that hasn't finished. Form: have/has + past participle (V3).",explanation_tr:"Geçmişte başlayıp etkisi hâlâ devam eden eylemler, deneyimler ve yakın zamandaki olaylar için kullanılır. Yapı: have/has + geçmiş ortaç (V3). Türkçede doğrudan karşılığı yoktur.",examples:`[{"sentence":"I have visited Paris three times.","translation":"Paris'i üç kez ziyaret ettim. (Deneyim)"},{"sentence":"She has lost her keys.","translation":"Anahtarlarını kaybetti. (Şu an anahtarları yok)"},{"sentence":"Have you ever eaten sushi?","translation":"Hiç suşi yedin mi?"},{"sentence":"They haven't finished yet.","translation":"Henüz bitirmediler."},{"sentence":"I have lived here since 2010.","translation":"2010'dan beri burada yaşıyorum."}]`,rules:`["Affirmative: Subject + have/has + V3 (past participle)","Negative: Subject + have/has + not + V3","Question: Have/Has + Subject + V3?","Key words: ever, never, already, yet, just, since, for, recently, so far","Use \\"since\\" for a point in time (since Monday), \\"for\\" for a duration (for two years)","Don't use with specific past times (yesterday, last week, in 2019) — use Past Simple instead"]`,common_mistakes:`[{"wrong":"I have went there.","correct":"I have gone there.","explanation":"Use the past participle (V3), not the past simple (V2). go→went→gone"},{"wrong":"I have visited Paris yesterday.","correct":"I visited Paris yesterday.","explanation":"Don't use Present Perfect with specific past times."},{"wrong":"She has lose her keys.","correct":"She has lost her keys.","explanation":"Use the past participle: lose→lost→lost"},{"wrong":"I live here since 2010.","correct":"I have lived here since 2010.","explanation":"Use Present Perfect with \\"since\\" and \\"for\\" for continuing actions."}]`,order_index:5,prerequisite_topics:'["past-simple"]'},{id:6,name:"Present Perfect Continuous",slug:"present-perfect-continuous",category:"tenses",cefr_level:"B1",description:"Actions that started in the past and are still continuing, emphasizing duration.",explanation_en:"We use Present Perfect Continuous to emphasize the duration of an action that started in the past and continues now, or has recently stopped with visible results.",explanation_tr:"Geçmişte başlayıp hâlâ devam eden eylemin süresini vurgular. Yapı: have/has + been + V-ing. Eylemin ne kadar süredir devam ettiğini anlatır.",examples:`[{"sentence":"I have been studying for three hours.","translation":"Üç saattir ders çalışıyorum."},{"sentence":"It has been raining all day.","translation":"Bütün gün yağmur yağıyor."},{"sentence":"She has been working here since January.","translation":"Ocak'tan beri burada çalışıyor."},{"sentence":"How long have you been waiting?","translation":"Ne kadar süredir bekliyorsun?"}]`,rules:'["Affirmative: Subject + have/has + been + V-ing","Negative: Subject + have/has + not + been + V-ing","Question: How long + have/has + Subject + been + V-ing?","Emphasizes DURATION, while Present Perfect emphasizes RESULT","Compare: \\"I have read the book.\\" (finished) vs \\"I have been reading the book.\\" (still reading or just stopped)"]',common_mistakes:`[{"wrong":"I have been know him for years.","correct":"I have known him for years.","explanation":"Stative verbs (know, like, love) don't use continuous form."},{"wrong":"She has been working here since three months.","correct":"She has been working here for three months.","explanation":"Use \\"for\\" with durations, \\"since\\" with points in time."}]`,order_index:6,prerequisite_topics:'["present-perfect", "present-continuous"]'},{id:7,name:"Past Perfect",slug:"past-perfect",category:"tenses",cefr_level:"B1",description:"An action that happened before another action in the past.",explanation_en:"We use Past Perfect to show that one action happened BEFORE another action in the past. Form: had + past participle (V3).",explanation_tr:'Geçmişteki bir eylemden önce tamamlanmış olan bir eylemi anlatır. "Geçmişin geçmişi" olarak düşünülebilir. Yapı: had + V3.',examples:'[{"sentence":"I had already eaten when she arrived.","translation":"O geldiğinde ben çoktan yemiştim."},{"sentence":"They had left before the rain started.","translation":"Yağmur başlamadan önce gitmişlerdi."},{"sentence":"She realized she had forgotten her wallet.","translation":"Cüzdanını unuttuğunu fark etti."}]',rules:'["Affirmative: Subject + had + V3","Negative: Subject + had + not + V3","Question: Had + Subject + V3?","Key words: before, after, already, when, by the time, until","The earlier action uses Past Perfect, the later action uses Past Simple"]',common_mistakes:'[{"wrong":"When I arrived, she left.","correct":"When I arrived, she had already left.","explanation":"Use Past Perfect for the action that happened first."},{"wrong":"I had went to school.","correct":"I had gone to school.","explanation":"Use V3 (past participle) after had."}]',order_index:7,prerequisite_topics:'["past-simple", "present-perfect"]'},{id:8,name:"Future Forms",slug:"future-forms",category:"tenses",cefr_level:"A2",description:"Different ways to talk about the future: will, going to, Present Continuous.",explanation_en:'English has multiple ways to talk about the future: "will" for predictions/decisions, "going to" for plans/intentions, Present Continuous for arrangements.',explanation_tr:'İngilizcede gelecek zaman için birden fazla yapı kullanılır: "will" anlık kararlar ve tahminler için, "going to" planlar ve niyetler için, Present Continuous düzenlenmiş planlar için.',examples:`[{"sentence":"I will help you.","translation":"Sana yardım edeceğim. (Anlık karar)"},{"sentence":"I'm going to study medicine.","translation":"Tıp okuyacağım. (Önceden planlanmış)"},{"sentence":"We are meeting them at 7.","translation":"Onlarla 7'de buluşuyoruz. (Düzenlenmiş)"},{"sentence":"It will probably rain tomorrow.","translation":"Yarın muhtemelen yağmur yağacak. (Tahmin)"},{"sentence":"Look at the clouds! It's going to rain.","translation":"Bulutlara bak! Yağmur yağacak. (Kanıt var)"}]`,rules:`["\\"will\\" + V1: spontaneous decisions, promises, predictions (without evidence)","\\"be going to\\" + V1: plans made before, intentions, predictions (with evidence)","Present Continuous: fixed arrangements with other people","\\"will\\" is often used in offers: \\"I'll carry that for you.\\"","\\"going to\\" is often used for intentions: \\"I'm going to learn English.\\""]`,common_mistakes:`[{"wrong":"I will to go there.","correct":"I will go there.","explanation":"Don't use \\"to\\" after \\"will\\"."},{"wrong":"I go to London next week.","correct":"I'm going to London next week.","explanation":"Use a future form, not Present Simple, for future plans."}]`,order_index:8,prerequisite_topics:'["present-simple", "present-continuous"]'},{id:9,name:"Modal Verbs",slug:"modal-verbs",category:"modals",cefr_level:"A2",description:"Can, could, should, must, may, might, would — expressing ability, possibility, permission, obligation.",explanation_en:"Modal verbs modify the meaning of the main verb to express ability, possibility, permission, obligation, advice, etc. They don't change form.",explanation_tr:"Yardımcı fiiller ana fiilin anlamını değiştirir: yetenek, olasılık, izin, zorunluluk, tavsiye vb. ifade eder. Çekimlenmezler.",examples:'[{"sentence":"I can swim.","translation":"Yüzebilirim. (Yetenek)"},{"sentence":"You should see a doctor.","translation":"Bir doktora görünmelisin. (Tavsiye)"},{"sentence":"You must wear a seatbelt.","translation":"Emniyet kemeri takmalısın. (Zorunluluk)"},{"sentence":"It might rain today.","translation":"Bugün yağmur yağabilir. (Olasılık)"},{"sentence":"Could you help me?","translation":"Bana yardım edebilir misiniz? (Rica)"}]',rules:'["Modal + base verb (V1): She can speak French.","No -s for third person: He can (NOT cans)","can = ability/permission, could = past ability/polite requests","should = advice, must = obligation/strong probability","may/might = possibility, would = hypothetical/polite requests"]',common_mistakes:`[{"wrong":"He cans swim.","correct":"He can swim.","explanation":"Modals don't take -s."},{"wrong":"I must to go.","correct":"I must go.","explanation":"Don't use \\"to\\" after modals."},{"wrong":"She can to drive.","correct":"She can drive.","explanation":"After modals, use the base form directly."}]`,order_index:9,prerequisite_topics:'["present-simple"]'},{id:10,name:"Conditionals",slug:"conditionals",category:"conditionals",cefr_level:"B1",description:"If-clauses: Zero, First, Second, and Third conditionals.",explanation_en:"Conditionals express hypothetical situations and their results. Each type uses different tenses depending on how real or likely the situation is.",explanation_tr:"Koşul cümleleri varsayımsal durumları ve sonuçlarını ifade eder. Her tür, durumun ne kadar gerçek veya olası olduğuna göre farklı zamanlar kullanır.",examples:'[{"sentence":"If you heat water, it boils.","translation":"Suyu ısıtırsan kaynar. (Zero — genel doğru)"},{"sentence":"If it rains, I will stay home.","translation":"Yağmur yağarsa evde kalacağım. (First — olası)"},{"sentence":"If I had money, I would travel.","translation":"Param olsa seyahat ederdim. (Second — hayal)"},{"sentence":"If I had studied, I would have passed.","translation":"Çalışsaydım geçerdim. (Third — geçmişte olmadı)"}]',rules:`["Zero: If + Present Simple, Present Simple (facts)","First: If + Present Simple, will + V1 (real possibility)","Second: If + Past Simple, would + V1 (unreal present)","Third: If + Past Perfect, would + have + V3 (unreal past)","Don't use \\"will\\" in the if-clause for First Conditional"]`,common_mistakes:`[{"wrong":"If I will see him, I will tell him.","correct":"If I see him, I will tell him.","explanation":"Don't use \\"will\\" in the if-clause."},{"wrong":"If I would have money, I would travel.","correct":"If I had money, I would travel.","explanation":"Use Past Simple in the if-clause for Second Conditional."}]`,order_index:10,prerequisite_topics:'["present-simple", "past-simple", "future-forms"]'},{id:11,name:"Passive Voice",slug:"passive-voice",category:"voice",cefr_level:"B1",description:"When the focus is on the action or the receiver, not the doer.",explanation_en:"We use Passive Voice when the action or its receiver is more important than who does it. Form: be + past participle (V3).",explanation_tr:"Eylemi yapan kişi değil, eylemin kendisi veya eylemi alan önemli olduğunda Edilgen Çatı kullanılır. Yapı: be + V3.",examples:'[{"sentence":"The book was written by J.K. Rowling.","translation":"Kitap J.K. Rowling tarafından yazıldı."},{"sentence":"English is spoken worldwide.","translation":"İngilizce dünya çapında konuşulur."},{"sentence":"The window was broken.","translation":"Cam kırıldı."},{"sentence":"The project will be completed next month.","translation":"Proje gelecek ay tamamlanacak."}]',rules:'["Present: am/is/are + V3 (English is spoken here.)","Past: was/were + V3 (The car was stolen.)","Future: will be + V3 (The work will be finished.)","Perfect: have/has/had been + V3 (The letter has been sent.)","Use \\"by\\" to mention the agent: \\"It was made by Apple.\\""]',common_mistakes:'[{"wrong":"The book written by her.","correct":"The book was written by her.","explanation":"You need a form of \\"be\\" in passive sentences."},{"wrong":"The window was broke.","correct":"The window was broken.","explanation":"Use the past participle (V3), not the past simple."}]',order_index:11,prerequisite_topics:'["present-simple", "past-simple"]'},{id:12,name:"Reported Speech",slug:"reported-speech",category:"speech",cefr_level:"B2",description:"Reporting what someone said without quoting them directly.",explanation_en:"Reported Speech (Indirect Speech) is used to tell someone what another person said. Tenses usually shift back.",explanation_tr:"Dolaylı Anlatım, başka birinin söylediğini aktarmak için kullanılır. Zamanlar genellikle bir adım geriye kayar.",examples:'[{"sentence":"\\"I am tired.\\" → She said (that) she was tired.","translation":"\\"Yorgunum.\\" → Yorgun olduğunu söyledi."},{"sentence":"\\"I will come.\\" → He said he would come.","translation":"\\"Geleceğim.\\" → Geleceğini söyledi."},{"sentence":"\\"Do you like it?\\" → She asked if I liked it.","translation":"\\"Beğendin mi?\\" → Beğenip beğenmediğimi sordu."}]',rules:'["Present Simple → Past Simple","Present Continuous → Past Continuous","Past Simple → Past Perfect","will → would, can → could, may → might","this → that, here → there, now → then, today → that day"]',common_mistakes:'[{"wrong":"She said she is tired.","correct":"She said she was tired.","explanation":"Shift the tense back when reporting."},{"wrong":"He asked do I like it.","correct":"He asked if I liked it.","explanation":"Use \\"if/whether\\" for yes/no questions and change word order."}]',order_index:12,prerequisite_topics:'["past-simple", "present-perfect"]'},{id:13,name:"Relative Clauses",slug:"relative-clauses",category:"clauses",cefr_level:"B1",description:"Using who, which, that, where, when to add information about nouns.",explanation_en:'Relative clauses give extra information about a noun. We use "who" for people, "which" for things, "that" for both, "where" for places, "when" for times.',explanation_tr:'Sıfat cümlecikleri bir isim hakkında ek bilgi verir. İnsanlar için "who", şeyler için "which", her ikisi için "that", yerler için "where", zamanlar için "when" kullanılır.',examples:`[{"sentence":"The woman who lives next door is a teacher.","translation":"Yan komşuda yaşayan kadın bir öğretmendir."},{"sentence":"The book which I read was interesting.","translation":"Okuduğum kitap ilginçti."},{"sentence":"That's the restaurant where we met.","translation":"Tanıştığımız restoran orası."}]`,rules:'["who = for people (subject/object)","which = for things (subject/object)","that = for people or things (informal)","where = for places, when = for times","Defining clauses: essential info (no commas)","Non-defining clauses: extra info (with commas)"]',common_mistakes:'[{"wrong":"The man which called you is my brother.","correct":"The man who called you is my brother.","explanation":"Use \\"who\\" for people."},{"wrong":"The car who I bought is red.","correct":"The car which I bought is red.","explanation":"Use \\"which\\" or \\"that\\" for things."}]',order_index:13,prerequisite_topics:'["present-simple", "past-simple"]'},{id:14,name:"Articles",slug:"articles",category:"determiners",cefr_level:"A2",description:"Using a, an, the, or no article correctly.",explanation_en:'Articles (a/an/the) come before nouns. "A/an" is indefinite (any one), "the" is definite (specific one), and sometimes no article is needed.',explanation_tr:'Artikeller (a/an/the) isimlerden önce gelir. "A/an" belirsiz (herhangi bir), "the" belirli (bilinen, spesifik), bazen hiç artikel gerekmez.',examples:'[{"sentence":"I saw a dog in the park.","translation":"Parkta bir köpek gördüm."},{"sentence":"The dog was very friendly.","translation":"Köpek çok cana yakındı. (Bildiğimiz köpek)"},{"sentence":"She is an engineer.","translation":"O bir mühendis."},{"sentence":"I love music.","translation":"Müziği seviyorum. (Genel — artikel yok)"}]',rules:'["\\"a\\" before consonant sounds: a book, a university","\\"an\\" before vowel sounds: an apple, an hour","\\"the\\" = both speakers know which one, unique things, superlatives","No article: general/uncountable concepts (I like coffee), plural generalizations (Dogs are loyal)","No article with: most countries, languages, meals, sports"]',common_mistakes:`[{"wrong":"I like the music.","correct":"I like music.","explanation":"Don't use \\"the\\" when speaking generally."},{"wrong":"She is engineer.","correct":"She is an engineer.","explanation":"Use a/an with jobs."},{"wrong":"I went to the home.","correct":"I went home.","explanation":"\\"Go home\\" doesn't use an article."}]`,order_index:14,prerequisite_topics:"[]"},{id:15,name:"Prepositions",slug:"prepositions",category:"prepositions",cefr_level:"A2",description:"In, on, at, for, with, by, about, to, from — location, time, movement, and more.",explanation_en:"Prepositions show relationships between words — location, time, direction, cause, etc. They are often unpredictable and must be learned in context.",explanation_tr:"Edatlar kelimeler arasındaki ilişkileri gösterir — yer, zaman, yön, neden vb. Çoğu zaman tahmin edilemez ve bağlam içinde öğrenilmelidir.",examples:`[{"sentence":"I live in Istanbul.","translation":"İstanbul'da yaşıyorum."},{"sentence":"The meeting is on Monday at 3 PM.","translation":"Toplantı Pazartesi saat 3'te."},{"sentence":"She's good at mathematics.","translation":"Matematikte iyidir."},{"sentence":"I'm interested in science.","translation":"Bilimle ilgileniyorum."}]`,rules:'["Time: at (specific time), on (days/dates), in (months/years/seasons/parts of day)","Place: at (specific point), on (surface), in (enclosed space)","at school/work/home, on the bus/train, in a car/taxi","Verb + preposition combos must be memorized: listen TO, look AT, wait FOR, depend ON","Adjective + preposition combos: good AT, interested IN, afraid OF, responsible FOR"]',common_mistakes:`[{"wrong":"I'm interested for science.","correct":"I'm interested in science.","explanation":"\\"Interested\\" takes \\"in\\", not \\"for\\"."},{"wrong":"I arrived to school.","correct":"I arrived at school.","explanation":"\\"Arrive\\" takes \\"at\\" (place) or \\"in\\" (city/country)."},{"wrong":"I listen music.","correct":"I listen to music.","explanation":"\\"Listen\\" requires \\"to\\"."}]`,order_index:15,prerequisite_topics:"[]"},{id:16,name:"Gerunds and Infinitives",slug:"gerunds-infinitives",category:"verb_forms",cefr_level:"B1",description:"When to use V-ing and when to use to + V after certain verbs.",explanation_en:"Some verbs are followed by gerund (V-ing), some by infinitive (to + V), and some can take both. This must mostly be memorized.",explanation_tr:"Bazı fiillerden sonra isim-fiil (V-ing), bazılarından sonra mastar (to + V) gelir. Bazıları her ikisini de alabilir. Çoğunlukla ezberlenmesi gerekir.",examples:'[{"sentence":"I enjoy reading books.","translation":"Kitap okumaktan hoşlanırım. (enjoy + V-ing)"},{"sentence":"I want to learn English.","translation":"İngilizce öğrenmek istiyorum. (want + to V)"},{"sentence":"I stopped smoking.","translation":"Sigara içmeyi bıraktım. (V-ing = eylemi bıraktı)"},{"sentence":"I stopped to smoke.","translation":"Sigara içmek için durdum. (to V = amaç)"}]',rules:'["Gerund (V-ing) after: enjoy, finish, mind, avoid, keep, suggest, consider, practice, imagine","Infinitive (to V) after: want, need, decide, hope, plan, expect, agree, refuse, learn, promise","Both (different meaning): stop, remember, forget, try, regret","After prepositions, always use gerund: interested in learning, good at cooking","As subject, use gerund: \\"Swimming is good exercise.\\""]',common_mistakes:'[{"wrong":"I enjoy to read.","correct":"I enjoy reading.","explanation":"\\"Enjoy\\" is always followed by V-ing."},{"wrong":"I want learning.","correct":"I want to learn.","explanation":"\\"Want\\" is followed by \\"to + verb\\"."}]',order_index:16,prerequisite_topics:'["present-simple", "present-continuous"]'},{id:17,name:"Comparatives and Superlatives",slug:"comparatives-superlatives",category:"adjectives",cefr_level:"A2",description:"Comparing things: bigger, the biggest, more interesting, the most interesting.",explanation_en:"Comparatives compare two things (-er/more). Superlatives show the extreme (the -est/the most). Irregular forms exist.",explanation_tr:"Karşılaştırma sıfatları iki şeyi karşılaştırır (-er/more). Üstünlük sıfatları en üst dereceyi gösterir (the -est/the most).",examples:'[{"sentence":"She is taller than me.","translation":"Benden uzun."},{"sentence":"This is the most interesting book.","translation":"Bu en ilginç kitap."},{"sentence":"He is better than his brother at chess.","translation":"Satrançta kardeşinden iyidir."}]',rules:'["Short adj (1 syllable): -er/-est (tall→taller→tallest)","Adj ending in -y: -ier/-iest (happy→happier→happiest)","Long adj (2+ syllables): more/most (interesting→more interesting→most interesting)","Irregular: good→better→best, bad→worse→worst, far→farther→farthest","Comparatives use \\"than\\": She is older than me."]',common_mistakes:'[{"wrong":"She is more tall than me.","correct":"She is taller than me.","explanation":"Short adjectives use -er, not \\"more\\"."},{"wrong":"He is the most good.","correct":"He is the best.","explanation":"\\"Good\\" is irregular: good→better→best."}]',order_index:17,prerequisite_topics:"[]"},{id:18,name:"Question Formation",slug:"question-formation",category:"sentence_structure",cefr_level:"A1",description:"How to form questions in English: yes/no questions, Wh-questions, tag questions.",explanation_en:"English questions change word order. Yes/no questions invert the subject and auxiliary. Wh-questions start with a question word.",explanation_tr:"İngilizce sorularda sözcük sırası değişir. Evet/hayır soruları yardımcı fiili öne alır. Wh-soruları soru kelimesiyle başlar.",examples:`[{"sentence":"Do you like coffee?","translation":"Kahve sever misin?"},{"sentence":"Where do you live?","translation":"Nerede yaşıyorsun?"},{"sentence":"What are you doing?","translation":"Ne yapıyorsun?"},{"sentence":"You're coming, aren't you?","translation":"Geliyorsun, değil mi?"}]`,rules:'["Yes/No: Auxiliary + Subject + Main verb? (Do you work?)","Wh-: Wh-word + Auxiliary + Subject + Main verb? (Where do you work?)","Who/What as subject: Who works here? (no auxiliary needed)","Tag questions: positive → negative tag, negative → positive tag"]',common_mistakes:'[{"wrong":"Where you live?","correct":"Where do you live?","explanation":"You need \\"do/does\\" in Present Simple questions."},{"wrong":"What means this?","correct":"What does this mean?","explanation":"Use \\"does\\" and base form for Wh-questions."}]',order_index:18,prerequisite_topics:"[]"},{id:19,name:"Word Order",slug:"word-order",category:"sentence_structure",cefr_level:"A2",description:"The standard English sentence structure: Subject-Verb-Object and adverb placement.",explanation_en:"English follows SVO (Subject-Verb-Object) word order. Adverbs and adjectives have specific positions in the sentence.",explanation_tr:"İngilizce ÖYN (Özne-Yüklem-Nesne) sözcük sırasını takip eder. Zarflar ve sıfatlar cümlede belirli yerlere konur.",examples:'[{"sentence":"I always drink coffee in the morning.","translation":"Sabahları her zaman kahve içerim."},{"sentence":"She quickly finished her homework.","translation":"Ödevini hızlıca bitirdi."}]',rules:'["Basic order: Subject + Verb + Object (I read books)","Adverbs of frequency before main verb: I always eat breakfast","Adverbs of frequency after \\"be\\": She is always late","Adjectives before nouns: a big red car","Time expressions usually at end: I work every day"]',common_mistakes:'[{"wrong":"I drink always coffee.","correct":"I always drink coffee.","explanation":"Frequency adverbs go before the main verb."},{"wrong":"She is late always.","correct":"She is always late.","explanation":"Frequency adverbs go after \\"be\\"."}]',order_index:19,prerequisite_topics:'["present-simple"]'},{id:20,name:"Subject-Verb Agreement",slug:"subject-verb-agreement",category:"sentence_structure",cefr_level:"B1",description:"Making sure the subject and verb match in number.",explanation_en:"The verb must agree with its subject in number. Singular subjects take singular verbs, plural subjects take plural verbs.",explanation_tr:"Fiil, öznesiyle sayı bakımından uyumlu olmalıdır. Tekil özneler tekil fiiller, çoğul özneler çoğul fiiller alır.",examples:'[{"sentence":"The team works hard.","translation":"Takım çok çalışır."},{"sentence":"The students are studying.","translation":"Öğrenciler ders çalışıyor."},{"sentence":"Everyone has a different opinion.","translation":"Herkesin farklı bir görüşü var."}]',rules:'["Singular: he/she/it + V-s (The dog runs.)","Plural: they/we/you + V (The dogs run.)","everyone/everybody/someone/nobody = singular verb","The news IS (uncountable nouns are singular)","Neither...nor/Either...or: verb agrees with the nearest subject"]',common_mistakes:'[{"wrong":"Everyone have a phone.","correct":"Everyone has a phone.","explanation":"\\"Everyone\\" is singular and takes \\"has\\"."},{"wrong":"The news are bad.","correct":"The news is bad.","explanation":"\\"News\\" is uncountable and takes singular verb."}]',order_index:20,prerequisite_topics:'["present-simple"]'}],grammar_exercises:[{id:1,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"She ___ (go) to school every day.",options:null,correct_answer:"goes",explanation:'Third person singular: add -es to "go".',explanation_tr:'Üçüncü tekil şahıs: "go" fiiline -es eklenir.',hint:null,context:null},{id:2,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"They ___ (not/like) cold weather.",options:null,correct_answer:"don't like",explanation:`For plural subjects, use "don't" + base verb.`,explanation_tr:`Çoğul özneler için "don't" + yalın fiil kullanılır.`,hint:null,context:null},{id:3,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"He ___ breakfast every morning.",options:'["eat","eats","eating","is eat"]',correct_answer:"eats",explanation:"He/she/it + verb-s in Present Simple.",explanation_tr:null,hint:null,context:null},{id:4,topic_id:1,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:`Find and correct the error: "She don't like swimming."`,options:null,correct_answer:"She doesn't like swimming.",explanation:`Use "doesn't" for he/she/it.`,explanation_tr:null,hint:null,context:null},{id:5,topic_id:1,exercise_type:"sentence_transform",cefr_level:"A1",difficulty:2,question:'Make this negative: "He plays tennis."',options:null,correct_answer:"He doesn't play tennis.",explanation:"Negative: doesn't + base verb.",explanation_tr:null,hint:null,context:null},{id:6,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"She ___ (go) to school every day.",options:null,correct_answer:"goes",explanation:'Third person singular: add -es to "go".',explanation_tr:'Üçüncü tekil şahıs: "go" fiiline -es eklenir.',hint:null,context:null},{id:7,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"They ___ (not/like) cold weather.",options:null,correct_answer:"don't like",explanation:`For plural subjects, use "don't" + base verb.`,explanation_tr:`Çoğul özneler için "don't" + yalın fiil kullanılır.`,hint:null,context:null},{id:8,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"He ___ breakfast every morning.",options:'["eat","eats","eating","is eat"]',correct_answer:"eats",explanation:"He/she/it + verb-s in Present Simple.",explanation_tr:null,hint:null,context:null},{id:9,topic_id:1,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:`Find and correct the error: "She don't like swimming."`,options:null,correct_answer:"She doesn't like swimming.",explanation:`Use "doesn't" for he/she/it.`,explanation_tr:null,hint:null,context:null},{id:10,topic_id:1,exercise_type:"sentence_transform",cefr_level:"A1",difficulty:2,question:'Make this negative: "He plays tennis."',options:null,correct_answer:"He doesn't play tennis.",explanation:"Negative: doesn't + base verb.",explanation_tr:null,hint:null,context:null},{id:11,topic_id:1,exercise_type:"sentence_creation",cefr_level:"A1",difficulty:3,question:"Write a sentence about your daily routine using Present Simple.",options:null,correct_answer:"[free response]",explanation:null,explanation_tr:null,hint:null,context:null},{id:12,topic_id:2,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"Look! The children ___ (play) in the garden.",options:null,correct_answer:"are playing",explanation:"Use am/is/are + V-ing for actions happening now.",explanation_tr:null,hint:null,context:null},{id:13,topic_id:2,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"What ___ you ___ right now?",options:'["are...doing","do...do","is...doing","are...do"]',correct_answer:"are...doing",explanation:null,explanation_tr:null,hint:null,context:null},{id:14,topic_id:2,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:'Find and correct the error: "I am know the answer."',options:null,correct_answer:"I know the answer.",explanation:'Stative verbs like "know" are not used in continuous form.',explanation_tr:null,hint:null,context:null},{id:15,topic_id:5,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"I ___ never ___ (be) to Japan.",options:null,correct_answer:"have...been",explanation:"Present Perfect for experiences: have/has + V3.",explanation_tr:null,hint:null,context:null},{id:16,topic_id:5,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:1,question:"She ___ her homework yet.",options:`["hasn't finished","didn't finish","doesn't finish","isn't finishing"]`,correct_answer:"hasn't finished",explanation:'"Yet" signals Present Perfect.',explanation_tr:null,hint:null,context:null},{id:17,topic_id:5,exercise_type:"error_correction",cefr_level:"B1",difficulty:2,question:'Find and correct: "I have went to London."',options:null,correct_answer:"I have gone to London.",explanation:"go → went → gone. Use V3 after have/has.",explanation_tr:null,hint:null,context:null},{id:18,topic_id:10,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"If it ___ (rain), I will take an umbrella.",options:null,correct_answer:"rains",explanation:"First Conditional: If + Present Simple, will + V1.",explanation_tr:null,hint:null,context:null},{id:19,topic_id:10,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:2,question:"If I ___ rich, I would travel the world.",options:'["am","was/were","will be","had been"]',correct_answer:"was/were",explanation:"Second Conditional: If + Past Simple, would + V1.",explanation_tr:null,hint:null,context:null},{id:20,topic_id:14,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"She is ___ engineer at ___ big company.",options:null,correct_answer:"an...a",explanation:'"An" before vowel sounds, "a" before consonant sounds.',explanation_tr:null,hint:null,context:null},{id:21,topic_id:14,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"I love ___ music.",options:'["a","an","the","no article"]',correct_answer:"no article",explanation:"No article with general/abstract nouns.",explanation_tr:null,hint:null,context:null},{id:22,topic_id:9,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"You ___ wear a seatbelt. It's the law.",options:null,correct_answer:"must",explanation:'"Must" for strong obligation/rules.',explanation_tr:null,hint:null,context:null},{id:23,topic_id:9,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"She ___ speak three languages.",options:'["can","cans","can to","is can"]',correct_answer:"can",explanation:"Modal verbs don't change form.",explanation_tr:null,hint:null,context:null},{id:24,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"She ___ (go) to school every day.",options:null,correct_answer:"goes",explanation:'Third person singular: add -es to "go".',explanation_tr:'Üçüncü tekil şahıs: "go" fiiline -es eklenir.',hint:null,context:null},{id:25,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"They ___ (not/like) cold weather.",options:null,correct_answer:"don't like",explanation:`For plural subjects, use "don't" + base verb.`,explanation_tr:`Çoğul özneler için "don't" + yalın fiil kullanılır.`,hint:null,context:null},{id:26,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"He ___ breakfast every morning.",options:'["eat","eats","eating","is eat"]',correct_answer:"eats",explanation:"He/she/it + verb-s in Present Simple.",explanation_tr:null,hint:null,context:null},{id:27,topic_id:1,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:`Find and correct the error: "She don't like swimming."`,options:null,correct_answer:"She doesn't like swimming.",explanation:`Use "doesn't" for he/she/it.`,explanation_tr:null,hint:null,context:null},{id:28,topic_id:1,exercise_type:"sentence_transform",cefr_level:"A1",difficulty:2,question:'Make this negative: "He plays tennis."',options:null,correct_answer:"He doesn't play tennis.",explanation:"Negative: doesn't + base verb.",explanation_tr:null,hint:null,context:null},{id:29,topic_id:1,exercise_type:"sentence_creation",cefr_level:"A1",difficulty:3,question:"Write a sentence about your daily routine using Present Simple.",options:null,correct_answer:"[free response]",explanation:null,explanation_tr:null,hint:null,context:null},{id:30,topic_id:2,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"Look! The children ___ (play) in the garden.",options:null,correct_answer:"are playing",explanation:"Use am/is/are + V-ing for actions happening now.",explanation_tr:null,hint:null,context:null},{id:31,topic_id:2,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"What ___ you ___ right now?",options:'["are...doing","do...do","is...doing","are...do"]',correct_answer:"are...doing",explanation:null,explanation_tr:null,hint:null,context:null},{id:32,topic_id:2,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:'Find and correct the error: "I am know the answer."',options:null,correct_answer:"I know the answer.",explanation:'Stative verbs like "know" are not used in continuous form.',explanation_tr:null,hint:null,context:null},{id:33,topic_id:5,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"I ___ never ___ (be) to Japan.",options:null,correct_answer:"have...been",explanation:"Present Perfect for experiences: have/has + V3.",explanation_tr:null,hint:null,context:null},{id:34,topic_id:5,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:1,question:"She ___ her homework yet.",options:`["hasn't finished","didn't finish","doesn't finish","isn't finishing"]`,correct_answer:"hasn't finished",explanation:'"Yet" signals Present Perfect.',explanation_tr:null,hint:null,context:null},{id:35,topic_id:5,exercise_type:"error_correction",cefr_level:"B1",difficulty:2,question:'Find and correct: "I have went to London."',options:null,correct_answer:"I have gone to London.",explanation:"go → went → gone. Use V3 after have/has.",explanation_tr:null,hint:null,context:null},{id:36,topic_id:10,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"If it ___ (rain), I will take an umbrella.",options:null,correct_answer:"rains",explanation:"First Conditional: If + Present Simple, will + V1.",explanation_tr:null,hint:null,context:null},{id:37,topic_id:10,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:2,question:"If I ___ rich, I would travel the world.",options:'["am","was/were","will be","had been"]',correct_answer:"was/were",explanation:"Second Conditional: If + Past Simple, would + V1.",explanation_tr:null,hint:null,context:null},{id:38,topic_id:14,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"She is ___ engineer at ___ big company.",options:null,correct_answer:"an...a",explanation:'"An" before vowel sounds, "a" before consonant sounds.',explanation_tr:null,hint:null,context:null},{id:39,topic_id:14,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"I love ___ music.",options:'["a","an","the","no article"]',correct_answer:"no article",explanation:"No article with general/abstract nouns.",explanation_tr:null,hint:null,context:null},{id:40,topic_id:9,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"You ___ wear a seatbelt. It's the law.",options:null,correct_answer:"must",explanation:'"Must" for strong obligation/rules.',explanation_tr:null,hint:null,context:null},{id:41,topic_id:9,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"She ___ speak three languages.",options:'["can","cans","can to","is can"]',correct_answer:"can",explanation:"Modal verbs don't change form.",explanation_tr:null,hint:null,context:null}],vocabulary_items:[{id:1,word:"make",part_of_speech:"verb",cefr_level:"A1",frequency_rank:50,definition_en:"To create, produce, or cause something to happen.",definition_tr:"Yapmak, üretmek, oluşturmak.",phonetic:"/meɪk/",pronunciation_audio_url:null,example_sentences:'["I make breakfast every morning.","She made a mistake.","Can you make a decision?"]',synonyms:'["create","produce","build"]',antonyms:'["destroy","break"]',collocations:'["make a decision","make a mistake","make progress","make money","make sure","make an effort","make a difference","make friends"]',word_family:'["maker","making","made"]',common_phrases:'["make up your mind","make it on time","make the most of"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:2,word:"take",part_of_speech:"verb",cefr_level:"A1",frequency_rank:60,definition_en:"To get, carry, or accept something; to require time or effort.",definition_tr:"Almak, götürmek, kabul etmek.",phonetic:"/teɪk/",pronunciation_audio_url:null,example_sentences:'["Take this book.","It takes two hours.","She took the bus."]',synonyms:'["grab","carry","seize"]',antonyms:'["give","put","leave"]',collocations:'["take a photo","take a break","take time","take a look","take care","take part","take place"]',word_family:'["taker","taking","taken","took"]',common_phrases:'["take it easy","take your time","take for granted"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:3,word:"get",part_of_speech:"verb",cefr_level:"A1",frequency_rank:30,definition_en:"To obtain, receive, or become. One of the most versatile verbs in English.",definition_tr:"Almak, elde etmek, olmak.",phonetic:"/ɡet/",pronunciation_audio_url:null,example_sentences:'["I need to get some milk.","She got angry.","Did you get my message?"]',synonyms:'["obtain","receive","acquire"]',antonyms:'["give","lose"]',collocations:'["get ready","get used to","get married","get along","get rid of","get up","get better"]',word_family:'["getting","got","gotten"]',common_phrases:'["get the hang of","get over it","get out of hand"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:4,word:"opportunity",part_of_speech:"noun",cefr_level:"B1",frequency_rank:800,definition_en:"A chance or favorable situation for doing something.",definition_tr:"Fırsat, uygun durum.",phonetic:"/ˌɒpəˈtjuːnɪti/",pronunciation_audio_url:null,example_sentences:`["This is a great opportunity.","Don't miss this opportunity.","We had the opportunity to travel."]`,synonyms:'["chance","possibility","occasion"]',antonyms:'["obstacle"]',collocations:'["take the opportunity","miss an opportunity","golden opportunity","job opportunity"]',word_family:'["opportunistic","opportunist"]',common_phrases:'["opportunity knocks","window of opportunity","seize the opportunity"]',formal_informal:"neutral",notes:null,category:"general"},{id:5,word:"despite",part_of_speech:"preposition",cefr_level:"B1",frequency_rank:1200,definition_en:"Without being affected by; in spite of.",definition_tr:"Rağmen, karşın.",phonetic:"/dɪˈspaɪt/",pronunciation_audio_url:null,example_sentences:'["Despite the rain, we went outside.","She succeeded despite the difficulties."]',synonyms:'["in spite of","regardless of"]',antonyms:'["because of"]',collocations:'["despite the fact that","despite everything","despite difficulties"]',word_family:"[]",common_phrases:'["despite all odds"]',formal_informal:"neutral",notes:null,category:"academic"},{id:6,word:"achieve",part_of_speech:"verb",cefr_level:"B1",frequency_rank:900,definition_en:"To successfully reach a goal or result through effort.",definition_tr:"Başarmak, elde etmek.",phonetic:"/əˈtʃiːv/",pronunciation_audio_url:null,example_sentences:'["She achieved her goal.","They achieved great success."]',synonyms:'["accomplish","attain","reach"]',antonyms:'["fail","lose"]',collocations:'["achieve a goal","achieve success","achieve results"]',word_family:'["achievement","achievable","achiever"]',common_phrases:'["achieve the impossible","sense of achievement"]',formal_informal:"neutral",notes:null,category:"academic"},{id:7,word:"environment",part_of_speech:"noun",cefr_level:"B1",frequency_rank:700,definition_en:"The natural world; the conditions around a person or thing.",definition_tr:"Çevre, ortam.",phonetic:"/ɪnˈvaɪrənmənt/",pronunciation_audio_url:null,example_sentences:'["We must protect the environment.","A good working environment is important."]',synonyms:'["surroundings","setting","atmosphere"]',antonyms:"[]",collocations:'["protect the environment","natural environment","working environment"]',word_family:'["environmental","environmentally","environmentalist"]',common_phrases:'["environmentally friendly"]',formal_informal:"neutral",notes:null,category:"science"},{id:8,word:"comfortable",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:1500,definition_en:"Providing physical ease; feeling at ease.",definition_tr:"Rahat, konforlu.",phonetic:"/ˈkʌmftəbl/",pronunciation_audio_url:null,example_sentences:'["This chair is very comfortable.","I feel comfortable speaking English."]',synonyms:'["cozy","relaxed","pleasant"]',antonyms:'["uncomfortable","uneasy"]',collocations:'["feel comfortable","make comfortable","comfortable with"]',word_family:'["comfort","comfortably","uncomfortable","discomfort"]',common_phrases:'["make yourself comfortable"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:9,word:"increase",part_of_speech:"verb/noun",cefr_level:"B1",frequency_rank:500,definition_en:"To become or make greater in size, amount, or degree.",definition_tr:"Artmak, artırmak (fiil); artış (isim).",phonetic:"/ɪnˈkriːs/",pronunciation_audio_url:null,example_sentences:'["Sales have increased by 20%.","There was a significant increase in temperature."]',synonyms:'["grow","rise","expand"]',antonyms:'["decrease","decline","reduce"]',collocations:'["increase significantly","sharp increase","steady increase"]',word_family:'["increasing","increasingly","increased"]',common_phrases:'["on the increase"]',formal_informal:"neutral",notes:null,category:"academic"},{id:10,word:"suggest",part_of_speech:"verb",cefr_level:"B1",frequency_rank:600,definition_en:"To put forward an idea for consideration.",definition_tr:"Önermek, tavsiye etmek.",phonetic:"/səˈdʒest/",pronunciation_audio_url:null,example_sentences:'["I suggest we leave early.","Can you suggest a good restaurant?"]',synonyms:'["recommend","propose","advise"]',antonyms:'["demand"]',collocations:'["suggest an idea","strongly suggest","suggest that"]',word_family:'["suggestion","suggestive"]',common_phrases:'["I would suggest","what do you suggest?"]',formal_informal:"neutral",notes:null,category:"general"},{id:11,word:"make",part_of_speech:"verb",cefr_level:"A1",frequency_rank:50,definition_en:"To create, produce, or cause something to happen.",definition_tr:"Yapmak, üretmek, oluşturmak.",phonetic:"/meɪk/",pronunciation_audio_url:null,example_sentences:'["I make breakfast every morning.","She made a mistake.","Can you make a decision?"]',synonyms:'["create","produce","build"]',antonyms:'["destroy","break"]',collocations:'["make a decision","make a mistake","make progress","make money","make sure","make an effort","make a difference","make friends"]',word_family:'["maker","making","made"]',common_phrases:'["make up your mind","make it on time","make the most of"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:12,word:"take",part_of_speech:"verb",cefr_level:"A1",frequency_rank:60,definition_en:"To get, carry, or accept something; to require time or effort.",definition_tr:"Almak, götürmek, kabul etmek.",phonetic:"/teɪk/",pronunciation_audio_url:null,example_sentences:'["Take this book.","It takes two hours.","She took the bus."]',synonyms:'["grab","carry","seize"]',antonyms:'["give","put","leave"]',collocations:'["take a photo","take a break","take time","take a look","take care","take part","take place"]',word_family:'["taker","taking","taken","took"]',common_phrases:'["take it easy","take your time","take for granted"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:13,word:"get",part_of_speech:"verb",cefr_level:"A1",frequency_rank:30,definition_en:"To obtain, receive, or become. One of the most versatile verbs in English.",definition_tr:"Almak, elde etmek, olmak.",phonetic:"/ɡet/",pronunciation_audio_url:null,example_sentences:'["I need to get some milk.","She got angry.","Did you get my message?"]',synonyms:'["obtain","receive","acquire"]',antonyms:'["give","lose"]',collocations:'["get ready","get used to","get married","get along","get rid of","get up","get better"]',word_family:'["getting","got","gotten"]',common_phrases:'["get the hang of","get over it","get out of hand"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:14,word:"opportunity",part_of_speech:"noun",cefr_level:"B1",frequency_rank:800,definition_en:"A chance or favorable situation for doing something.",definition_tr:"Fırsat, uygun durum.",phonetic:"/ˌɒpəˈtjuːnɪti/",pronunciation_audio_url:null,example_sentences:`["This is a great opportunity.","Don't miss this opportunity.","We had the opportunity to travel."]`,synonyms:'["chance","possibility","occasion"]',antonyms:'["obstacle"]',collocations:'["take the opportunity","miss an opportunity","golden opportunity","job opportunity"]',word_family:'["opportunistic","opportunist"]',common_phrases:'["opportunity knocks","window of opportunity","seize the opportunity"]',formal_informal:"neutral",notes:null,category:"general"},{id:15,word:"despite",part_of_speech:"preposition",cefr_level:"B1",frequency_rank:1200,definition_en:"Without being affected by; in spite of.",definition_tr:"Rağmen, karşın.",phonetic:"/dɪˈspaɪt/",pronunciation_audio_url:null,example_sentences:'["Despite the rain, we went outside.","She succeeded despite the difficulties."]',synonyms:'["in spite of","regardless of"]',antonyms:'["because of"]',collocations:'["despite the fact that","despite everything","despite difficulties"]',word_family:"[]",common_phrases:'["despite all odds"]',formal_informal:"neutral",notes:null,category:"academic"},{id:16,word:"achieve",part_of_speech:"verb",cefr_level:"B1",frequency_rank:900,definition_en:"To successfully reach a goal or result through effort.",definition_tr:"Başarmak, elde etmek.",phonetic:"/əˈtʃiːv/",pronunciation_audio_url:null,example_sentences:'["She achieved her goal.","They achieved great success."]',synonyms:'["accomplish","attain","reach"]',antonyms:'["fail","lose"]',collocations:'["achieve a goal","achieve success","achieve results"]',word_family:'["achievement","achievable","achiever"]',common_phrases:'["achieve the impossible","sense of achievement"]',formal_informal:"neutral",notes:null,category:"academic"},{id:17,word:"environment",part_of_speech:"noun",cefr_level:"B1",frequency_rank:700,definition_en:"The natural world; the conditions around a person or thing.",definition_tr:"Çevre, ortam.",phonetic:"/ɪnˈvaɪrənmənt/",pronunciation_audio_url:null,example_sentences:'["We must protect the environment.","A good working environment is important."]',synonyms:'["surroundings","setting","atmosphere"]',antonyms:"[]",collocations:'["protect the environment","natural environment","working environment"]',word_family:'["environmental","environmentally","environmentalist"]',common_phrases:'["environmentally friendly"]',formal_informal:"neutral",notes:null,category:"science"},{id:18,word:"comfortable",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:1500,definition_en:"Providing physical ease; feeling at ease.",definition_tr:"Rahat, konforlu.",phonetic:"/ˈkʌmftəbl/",pronunciation_audio_url:null,example_sentences:'["This chair is very comfortable.","I feel comfortable speaking English."]',synonyms:'["cozy","relaxed","pleasant"]',antonyms:'["uncomfortable","uneasy"]',collocations:'["feel comfortable","make comfortable","comfortable with"]',word_family:'["comfort","comfortably","uncomfortable","discomfort"]',common_phrases:'["make yourself comfortable"]',formal_informal:"neutral",notes:null,category:"daily_life"},{id:19,word:"increase",part_of_speech:"verb/noun",cefr_level:"B1",frequency_rank:500,definition_en:"To become or make greater in size, amount, or degree.",definition_tr:"Artmak, artırmak (fiil); artış (isim).",phonetic:"/ɪnˈkriːs/",pronunciation_audio_url:null,example_sentences:'["Sales have increased by 20%.","There was a significant increase in temperature."]',synonyms:'["grow","rise","expand"]',antonyms:'["decrease","decline","reduce"]',collocations:'["increase significantly","sharp increase","steady increase"]',word_family:'["increasing","increasingly","increased"]',common_phrases:'["on the increase"]',formal_informal:"neutral",notes:null,category:"academic"},{id:20,word:"suggest",part_of_speech:"verb",cefr_level:"B1",frequency_rank:600,definition_en:"To put forward an idea for consideration.",definition_tr:"Önermek, tavsiye etmek.",phonetic:"/səˈdʒest/",pronunciation_audio_url:null,example_sentences:'["I suggest we leave early.","Can you suggest a good restaurant?"]',synonyms:'["recommend","propose","advise"]',antonyms:'["demand"]',collocations:'["suggest an idea","strongly suggest","suggest that"]',word_family:'["suggestion","suggestive"]',common_phrases:'["I would suggest","what do you suggest?"]',formal_informal:"neutral",notes:null,category:"general"}],reading_materials:[{id:1,title:"My Daily Routine",content:`Every morning, I wake up at 7 o'clock. First, I wash my face and brush my teeth. Then I have breakfast. I usually eat bread and cheese and drink tea.

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
Question: What does Speaker B imply?`,options:'["They have poor eyesight","They have had disagreements with Sarah","They will arrive late","Sarah forgot to invite them"]',correct_answer:"They have had disagreements with Sarah",explanation:'"Not see eye to eye" is an idiom meaning not agreeing or having conflicts with someone.',explanation_tr:'"Not see eye to eye" kalıbı biriyle anlaşamamak, fikir ayrılığı yaşamak anlamına gelir.'},{id:20,skill:"writing",question_type:"multiple_choice",cefr_level:"A1",topic:"Basic Capitalization & Punctuation",question:"Which sentence is punctuated and capitalized correctly?",options:'["i live in Istanbul with my Sister.","I live in Istanbul with my sister.","I live in istanbul with my sister","I live In Istanbul with My Sister."]',correct_answer:"I live in Istanbul with my sister.",explanation:'Capitalize "I", proper nouns like "Istanbul", and end with a period. Common nouns like "sister" are lowercase.',explanation_tr:'Cümle başı ve "I" zamiri, şehir isimleri büyük harfle başlar; "sister" gibi cins isimler küçük kalır.'},{id:21,skill:"writing",question_type:"multiple_choice",cefr_level:"A2",topic:"Connectors",question:"I was very tired, ___ I still managed to finish my project on time.",options:'["so","because","but","since"]',correct_answer:"but",explanation:'"But" introduces a contrasting fact to being tired.',explanation_tr:'Yorgun olma durumuyla projenin bitmesi arasındaki zıtlığı "but" bağlacı ifade eder.'},{id:22,skill:"writing",question_type:"multiple_choice",cefr_level:"B1",topic:"Formal Email Register",question:"Which closing sentence is most appropriate for a formal job application email?",options:'["Catch you later, hope you like my CV!","I look forward to hearing from you at your earliest convenience.","Write me back whenever you want.","See ya soon, best vibes!"]',correct_answer:"I look forward to hearing from you at your earliest convenience.",explanation:'Professional correspondence requires standard courteous formulas like "I look forward to hearing from you...".',explanation_tr:'Resmi iş yazışmalarında profesyonel nezaket kalıbı "I look forward to hearing from you..." kullanılır.'},{id:23,skill:"writing",question_type:"multiple_choice",cefr_level:"B2",topic:"Cohesive Devices",question:"The initial trial produced promising results. ___, subsequent studies failed to replicate the same outcomes.",options:'["However","Furthermore","Consequently","In addition"]',correct_answer:"However",explanation:'"However" shows an unexpected contrast or limitation following a positive statement.',explanation_tr:'İlk cümlenin olumlu sonucuna karşı sonraki çalışmaların başarısızlığını zıtlık belirten "However" bağlar.'},{id:24,skill:"speaking",question_type:"multiple_choice",cefr_level:"A1",topic:"Greetings & Introductions",question:'When meeting someone for the first time in a polite setting, how do you respond to "How do you do?"',options:'["I do fine, thanks.","How do you do?","I am doing homework.","Yes, I do."]',correct_answer:"How do you do?",explanation:'In formal British English, the traditional reply to "How do you do?" is also "How do you do?" or "Pleased to meet you".',explanation_tr:'Resmi İngilizcede ilk tanışmada söylenen "How do you do?" kalıbına geleneksel olarak yine "How do you do?" veya "Pleased to meet you" ile yanıt verilir.'},{id:25,skill:"speaking",question_type:"multiple_choice",cefr_level:"A2",topic:"Polite Requests",question:"What is the most polite way to ask for a glass of water in a cafe?",options:'["Give me water now.","Could I have a glass of water, please?","I want water quickly.","Water is needed by me."]',correct_answer:"Could I have a glass of water, please?",explanation:'"Could I have... please?" is standard polite English for ordering or requesting.',explanation_tr:'Rica ve siparişlerde "Could I have..., please?" en doğal ve kibar yapıdır.'},{id:26,skill:"speaking",question_type:"multiple_choice",cefr_level:"B1",topic:"Giving Advice",question:"A friend has an intense headache before an exam. What sounds most natural?",options:'["You had better get some rest and take an aspirin.","You must to sleep right now without excuses.","Why you not sleep?","It is compulsory for you to rest."]',correct_answer:"You had better get some rest and take an aspirin.",explanation:'"You had better..." is used for urgent, direct advice where negative consequences might follow.',explanation_tr:'"You had better (do sth)" yapısı acil ve önemli tavsiyeler vermek için en doğal kullanımdır.'},{id:27,skill:"speaking",question_type:"multiple_choice",cefr_level:"B2",topic:"Diplomatic Disagreement",question:"In a professional meeting, how do you disagree diplomatically with a colleague's proposal?",options:`["That idea is completely wrong and makes no sense.","I see where you're coming from, but we should also consider the budgetary constraints.","Shut up, my plan is superior.","You are mistaken about everything."]`,correct_answer:"I see where you're coming from, but we should also consider the budgetary constraints.",explanation:"Diplomatic English acknowledges the other speaker's perspective before introducing reservations or alternatives.",explanation_tr:`Diplomatik iş İngilizcesinde önce karşı tarafın görüşü onaylanır ("I see where you're coming from"), ardından çekince sunulur.`},{id:28,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A1",topic:"Past -ed Endings",question:'In which word is the "-ed" pronounced as an extra syllable /ɪd/ or /əd/?',options:'["Worked","Played","Needed","Watched"]',correct_answer:"Needed",explanation:'The "-ed" ending is pronounced as /ɪd/ only after verbs ending in /t/ or /d/ sounds (need -> needed).',explanation_tr:"Düzenli fiillerde -ed takısı sadece /t/ ve /d/ seslerinden sonra ayrı bir hece (/ɪd/) olarak okunur (need -> needed)."},{id:29,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A2",topic:"Silent Letters",question:'Which letter is SILENT in the word "doubt"?',options:'["d","o","u","b"]',correct_answer:"b",explanation:'The letter "b" is completely silent in "doubt" /daʊt/, just like in "debt" and "subtle".',explanation_tr:'"Doubt" kelimesindeki "b" harfi okunmaz (sessiz harftir: /daʊt/).'},{id:30,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B1",topic:"Word Stress & Part of Speech",question:'When "record" is used as a VERB ("They ___ a podcast"), where is the stress?',options:'["On the FIRST syllable (RE-cord)","On the SECOND syllable (re-CORD)","Both syllables equally","Neither"]',correct_answer:"On the SECOND syllable (re-CORD)",explanation:"Two-syllable noun/verb pairs: nouns stress the 1st syllable (a REcord), verbs stress the 2nd syllable (to reCORD).",explanation_tr:"İki heceli isim/fiil çiftlerinde isimlerde vurgu ilk hecede (REcord), fiillerde ikinci hecededir (reCORD)."},{id:31,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B2",topic:"Vowel Length Minimal Pairs",question:"Which pair of words contains contrasting short /ɪ/ vs long /iː/ vowel sounds?",options:'["Ship and Sheep","Cat and Cut","Pen and Pan","Full and Fool"]',correct_answer:"Ship and Sheep",explanation:'"Ship" has the short lax vowel /ʃɪp/ while "sheep" has the long tense vowel /ʃiːp/.',explanation_tr:'"Ship" kısa /ɪ/ sesi, "sheep" ise uzun /iː/ sesi barındıran klasik bir minimal çift örneğidir.'},{id:32,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A1",topic:"Basic Word Order (SVO)",question:"Choose the sentence with the correct English word order:",options:'["Always he drinks coffee in the morning.","He drinks always coffee in the morning.","He always drinks coffee in the morning.","In the morning coffee he always drinks."]',correct_answer:"He always drinks coffee in the morning.",explanation:"Adverbs of frequency (always, often, rarely) go between the subject and the main verb.",explanation_tr:"Sıklık zarfları (always, often vb.) özne ile asıl fiil arasına gelir."},{id:33,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A2",topic:"Indirect Questions",question:"Choose the correct indirect question formulation:",options:'["Could you tell me where is the station?","Could you tell me where the station is?","Could you tell me where does the station be?","Could you tell me where is station located?"]',correct_answer:"Could you tell me where the station is?",explanation:'In indirect questions, the clause returns to statement order: "where + subject + verb".',explanation_tr:'Dolaylı sorularda ("Could you tell me..."), soru cümlesi düz cümle sırasına (özne + fiil) döner.'},{id:34,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B1",topic:"Relative Clause Placement",question:"Which sentence correctly places the defining relative clause?",options:'["The woman who designed our website received an award.","The woman received an award who designed our website.","The woman who received an award our website designed.","Who designed our website the woman received an award."]',correct_answer:"The woman who designed our website received an award.",explanation:'A relative clause must directly follow the noun it modifies ("the woman who designed...").',explanation_tr:"Sıfat cümlecikleri niteledikleri ismin hemen ardından gelmelidir."},{id:35,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B2",topic:"Inversion after Negative Adverbials",question:"Seldom ___ such an inspiring speech in my entire career.",options:'["I have heard","have I heard","I heard","did I heard"]',correct_answer:"have I heard",explanation:"Negative or restrictive adverbials at the beginning of a sentence (seldom, rarely, never) require auxiliary inversion.",explanation_tr:'Cümle başına gelen kısıtlayıcı/olumsuz zarflar ("Seldom, Never") yardımcı fiilin öznenin önüne geçmesini (inversion) zorunlu kılar.'},{id:36,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A1",topic:"Context Clues",question:'"Liam took out his umbrella because dark clouds filled the sky." Why did Liam take out his umbrella?',options:'["It was very sunny","He expected rain","He wanted to play football","He was going to sleep"]',correct_answer:"He expected rain",explanation:"Dark clouds signify incoming precipitation, so taking out an umbrella indicates expecting rain.",explanation_tr:"Gökyüzündeki kara bulutlar yağmur beklentisine işaret eder."},{id:37,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A2",topic:"Idiomatic Sense",question:'If someone says "I am under the weather today", they mean:',options:'["They are standing outside in the rain","They feel slightly unwell or sick","They love sunny days","They are flying in an airplane"]',correct_answer:"They feel slightly unwell or sick",explanation:'"Under the weather" is a very common idiom meaning feeling sick or indisposed.',explanation_tr:'"Under the weather" kendini hasta veya keyifsiz hissetmek anlamına gelen yaygın bir deyimdir.'},{id:38,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B1",topic:"Thinking in English vs Translating",question:'In Turkish, you say "İyi ki doğdun". What is the natural, native English thought process and expression?',options:'["Good that you were born","Happy Birthday","Nice birthday to you","It is well you came into the world"]',correct_answer:"Happy Birthday",explanation:'English does not translate the literal Turkish sentiment; natural English thinking directly maps to "Happy Birthday".',explanation_tr:'Türkçedeki "İyi ki doğdun" kalıbı kelimesi kelimesine çevrilmez; İngilizce düşüncede karşılığı doğrudan "Happy Birthday"dir.'},{id:39,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B2",topic:"Pragmatic Implicature",question:`When a manager says, "You might want to review section three before tomorrow's client presentation," this is pragmatically:`,options:'["A neutral observation you can freely ignore","A polite but firm directive that section three contains flaws that need fixing","A compliment on section three","A question about your availability"]',correct_answer:"A polite but firm directive that section three contains flaws that need fixing",explanation:'In Anglo-American corporate communication, "You might want to..." is an understated, polite command to fix something.',explanation_tr:'İngilizce iş kültüründe "You might want to..." şeklindeki yumuşatılmış ifadeler nezaketen öneri süsü verilmiş net talimatlardır.'},{id:40,skill:"communication",question_type:"multiple_choice",cefr_level:"A1",topic:"Asking for Help",question:"You are lost in London. What is the most natural way to stop a stranger on the street?",options:'["Stop walking, human!","Excuse me, could you help me?","Hey, you listen to me.","Where is hotel?"]',correct_answer:"Excuse me, could you help me?",explanation:'"Excuse me..." is the universally expected, polite opening to approach a stranger in English.',explanation_tr:'Bir yabancının dikkatini çekip yardım istemenin en evrensel ve kibar yolu "Excuse me, could you help me?"dir.'},{id:41,skill:"communication",question_type:"multiple_choice",cefr_level:"A2",topic:"Clarification Strategy",question:"If you did not understand what someone just said, which phrase asks them to repeat naturally?",options:'["What? Speak louder!","Sorry, could you say that again, please?","You are talking nonsense.","Repeat your words immediately."]',correct_answer:"Sorry, could you say that again, please?",explanation:'"Sorry, could you say that again, please?" is courteous and effective for conversational repair.',explanation_tr:'Anlaşılmayan bir şeyi tekrar ettirmenin en doğal iletişim stratejisi "Sorry, could you say that again, please?"dir.'},{id:42,skill:"communication",question_type:"multiple_choice",cefr_level:"B1",topic:"Polite Interruption",question:"You need to ask a brief question during a team discussion. What is the best way to interject?",options:`["Stop speaking now, my turn.","Sorry to interrupt, but may I quickly clarify something?","Listen to me instead.","That's enough from you."]`,correct_answer:"Sorry to interrupt, but may I quickly clarify something?",explanation:'"Sorry to interrupt, but may I quickly..." allows polite turn-taking without sounding aggressive.',explanation_tr:'Bir konuşmayı kibarca bölüp araya girmek için "Sorry to interrupt, but may I quickly..." kullanılır.'},{id:43,skill:"communication",question_type:"multiple_choice",cefr_level:"B2",topic:"Managing Hesitations & Fluency",question:"When asked a complex question in an interview and you need 5 seconds to think, which filler maintains fluent communication best?",options:`["Dead silence for 10 seconds staring at the floor","That's a really thoughtful question. Let me reflect on that for a second...","Wait! Don't talk to me!","I don't know anything."]`,correct_answer:"That's a really thoughtful question. Let me reflect on that for a second...",explanation:"Native speakers use conversational bridge phrases to buy cognitive processing time without breaking conversational flow.",explanation_tr:`Akıcılığı korumak ve düşünme süresi kazanmak için "That's a great question, let me reflect on that..." gibi köprü ifadeler kullanılır.`}]};class E{constructor(){this.currentUser=null,this.initAuth()}initAuth(){try{const e=localStorage.getItem("linguaforge_active_user"),t=this.getAccounts();if(e&&t.length>0){const i=t.find(n=>n.username.toLowerCase()===e.toLowerCase());i&&(this.currentUser=i)}}catch(e){console.warn("Error initializing auth:",e)}}getAccounts(){try{const e=localStorage.getItem("linguaforge_users");return e?JSON.parse(e):[]}catch{return[]}}saveAccounts(e){try{localStorage.setItem("linguaforge_users",JSON.stringify(e))}catch{}}getCurrentUser(){return this.currentUser}async login(e,t){const i=(e||"").trim().toLowerCase(),n=(t||"").trim(),s=this.getAccounts().find(r=>r.username.toLowerCase()===i);if(!s)throw new Error("Kullanıcı bulunamadı. Lütfen kullanıcı adınızı kontrol edin veya yeni hesap açın.");if(s.password&&s.password!==n)throw new Error("Şifre hatalı! Lütfen şifrenizi tekrar deneyin.");return this.currentUser=s,localStorage.setItem("linguaforge_active_user",s.username),this.ensureUserStorage(s.username),s}async register(e,t,i){const n=(e||"").trim().toLowerCase(),a=(t||"").trim(),s=(i||"").trim()||e;if(!n)throw new Error("Kullanıcı adı boş bırakılamaz.");if(n.length<2)throw new Error("Kullanıcı adı en az 2 karakter olmalıdır.");if(!a)throw new Error("Şifre boş bırakılamaz.");const r=this.getAccounts();if(r.some(c=>c.username.toLowerCase()===n))throw new Error("Bu kullanıcı adı zaten alınmış. Farklı bir kullanıcı adı deneyin veya giriş yapın.");const o={id:"u_"+Date.now(),username:n,displayName:s,password:a,createdAt:new Date().toISOString(),cefr_level:"A1"};return r.push(o),this.saveAccounts(r),this.currentUser=o,localStorage.setItem("linguaforge_active_user",o.username),this.initZeroUserStorage(n),o}async loginOrRegisterGuest(){const e="misafir",t=this.getAccounts();let i=t.find(n=>n.username===e);return i||(i={id:"guest_"+Date.now(),username:e,displayName:"Misafir Öğrenci",password:"123",createdAt:new Date().toISOString(),cefr_level:"A1"},t.push(i),this.saveAccounts(t),this.initZeroUserStorage(e)),this.currentUser=i,localStorage.setItem("linguaforge_active_user",i.username),this.ensureUserStorage(e),i}logout(){this.currentUser=null,localStorage.removeItem("linguaforge_active_user")}getUserStorageKey(e){return`linguaforge_u_${this.currentUser?this.currentUser.username:"guest"}_${e}`}getUserData(e){try{const t=localStorage.getItem(this.getUserStorageKey(e));return t?JSON.parse(t):null}catch{return null}}setUserData(e,t){try{localStorage.setItem(this.getUserStorageKey(e),JSON.stringify(t))}catch{}}initZeroUserStorage(e){const t=`linguaforge_u_${e}_`,i={xp:0,level:1,current_streak:1,longest_streak:1,total_study_minutes:0,total_words_learned:0,total_grammar_mastered:0,total_errors_resolved:0,last_study_date:new Date().toISOString().slice(0,10)},n={grammar:{level:"A1",sublevel:"-",score:0},vocabulary:{level:"A1",sublevel:"-",score:0},reading:{level:"A1",sublevel:"-",score:0},listening:{level:"A1",sublevel:"-",score:0},writing:{level:"A1",sublevel:"-",score:0},speaking:{level:"A1",sublevel:"-",score:0},pronunciation:{level:"A1",sublevel:"-",score:0},sentence_formation:{level:"A1",sublevel:"-",score:0},comprehension:{level:"A1",sublevel:"-",score:0},communication:{level:"A1",sublevel:"-",score:0}},a=[],s=(k.vocabulary_items||[]).map((r,o)=>({...r,id:r.id||o+1,examples:typeof r.examples=="string"?JSON.parse(r.examples||"[]"):r.examples,synonyms:typeof r.synonyms=="string"?JSON.parse(r.synonyms||"[]"):r.synonyms,antonyms:typeof r.antonyms=="string"?JSON.parse(r.antonyms||"[]"):r.antonyms,collocations:typeof r.collocations=="string"?JSON.parse(r.collocations||"[]"):r.collocations,interval:0,ease_factor:2.5,repetitions:0,due:!0}));localStorage.setItem(t+"stats",JSON.stringify(i)),localStorage.setItem(t+"skills",JSON.stringify(n)),localStorage.setItem(t+"errors",JSON.stringify(a)),localStorage.setItem(t+"srs_items",JSON.stringify(s)),localStorage.removeItem(t+"latest_assessment"),localStorage.setItem(t+"completed_tasks",JSON.stringify([]))}ensureUserStorage(e){const t=`linguaforge_u_${e}_`;(!localStorage.getItem(t+"stats")||!localStorage.getItem(t+"skills"))&&this.initZeroUserStorage(e)}async getDashboard(){if(!this.currentUser)throw new Error("AUTH_REQUIRED");const e=this.getUserData("stats")||{xp:0,level:1,current_streak:1,longest_streak:1,total_study_minutes:0,total_words_learned:0,total_grammar_mastered:0,total_errors_resolved:0},t=this.getUserData("skills")||{grammar:{level:"A1",sublevel:"",score:0},vocabulary:{level:"A1",sublevel:"",score:0},reading:{level:"A1",sublevel:"",score:0},listening:{level:"A1",sublevel:"",score:0},writing:{level:"A1",sublevel:"",score:0},speaking:{level:"A1",sublevel:"",score:0},pronunciation:{level:"A1",sublevel:"",score:0},sentence_formation:{level:"A1",sublevel:"",score:0},comprehension:{level:"A1",sublevel:"",score:0},communication:{level:"A1",sublevel:"",score:0}},i=this.getUserData("errors")||[],n=this.getUserData("srs_items")||[],a=n.filter(r=>r.due).length,s=this.getUserData("latest_assessment")||{overall_cefr:"A1",results:{overallCEFR:"A1"}};return{user:{username:this.currentUser.username,displayName:this.currentUser.displayName||this.currentUser.username,onboardingComplete:!0},stats:e,skills:t,dailyTasks:{tasks:[{id:"task-vocab",skill:"vocabulary",description:"A1 Temel Kelime Kartlarından 5 tanesini incele ve tekrar et",targetView:"vocabulary"},{id:"task-grammar",skill:"grammar",description:"Gramer Akademisinden 1 başlangıç konusunu ve kurallarını oku",targetView:"grammar"},{id:"task-reading",skill:"reading",description:"1 başlangıç (A1) okuma metnini incele ve sorularını yanıtla",targetView:"reading"},{id:"task-speaking",skill:"speaking",description:"1 günlük konuşma senaryosunu sesli olarak dene",targetView:"speaking"}],completed_tasks:this.getUserData("completed_tasks")||[]},recentErrors:i.filter(r=>!r.resolved),reviewStats:{dueToday:a,totalItems:n.length},weekStudy:[{date:"2026-09-21",total_minutes:0},{date:"2026-09-22",total_minutes:0},{date:"2026-09-23",total_minutes:0},{date:"2026-09-24",total_minutes:0},{date:"2026-09-25",total_minutes:0},{date:"2026-09-26",total_minutes:0},{date:"2026-09-27",total_minutes:e.total_study_minutes||0}],latestAssessment:s}}async startAssessment(){const e=Date.now();return this.currentAssessment={id:e,answers:[],correctCount:0,totalCount:0,skillsEvaluated:{}},{assessmentId:e,skills:["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],message:"Seviye belirleme sınavı başlatıldı."}}async skipAssessmentToA1(){const e={overallCEFR:"A1",totalQuestions:0,totalCorrect:0,skills:{grammar:{level:"A1",sublevel:"",score:10},vocabulary:{level:"A1",sublevel:"",score:10},reading:{level:"A1",sublevel:"",score:10},listening:{level:"A1",sublevel:"",score:10},writing:{level:"A1",sublevel:"",score:10},speaking:{level:"A1",sublevel:"",score:10},pronunciation:{level:"A1",sublevel:"",score:10},sentence_formation:{level:"A1",sublevel:"",score:10},comprehension:{level:"A1",sublevel:"",score:10},communication:{level:"A1",sublevel:"",score:10}}};return this.setUserData("latest_assessment",e),e}async getAssessmentQuestions(e,t){const a=(k.assessment_question_bank||[]).filter(s=>s.skill===t).slice(0,3).map(s=>({id:s.id,type:s.question_type,question:s.question,options:typeof s.options=="string"?JSON.parse(s.options):s.options,cefrLevel:s.cefr_level,topic:s.topic}));return{skill:t,targetLevel:"A1-A2",questions:a}}async submitAssessmentAnswer(e,t,i){const n=k.assessment_question_bank||[],a=n.find(c=>c.id===t)||n[0],s=(i||"").toString().trim().toLowerCase().replace(/^["']|["']$/g,""),r=(a.correct_answer||"").toString().trim().toLowerCase().replace(/^["']|["']$/g,""),o=s===r;if(this.currentAssessment&&(this.currentAssessment.totalCount=(this.currentAssessment.totalCount||0)+1,o&&(this.currentAssessment.correctCount=(this.currentAssessment.correctCount||0)+1),this.currentAssessment.skillsEvaluated[a.skill]||(this.currentAssessment.skillsEvaluated[a.skill]={correct:0,total:0}),this.currentAssessment.skillsEvaluated[a.skill].total+=1,o&&(this.currentAssessment.skillsEvaluated[a.skill].correct+=1)),!o){const c=this.getUserData("errors")||[];c.unshift({id:Date.now(),skill:a.skill,error_text:i,correction:a.correct_answer,explanation:a.explanation_tr||a.explanation||"Seviye belirleme sınavında yapılan hata.",occurrence_count:1,resolved:0}),this.setUserData("errors",c)}return{questionId:t,isCorrect:o,score:o?1:0,correctAnswer:a.correct_answer,explanation:a.explanation,explanationTr:a.explanation_tr||a.explanation,skill:a.skill,cefrLevel:a.cefr_level,topic:a.topic}}async completeAssessment(e){const t=this.currentAssessment||{correctCount:0,totalCount:1,skillsEvaluated:{}},i=Math.max(t.totalCount||1,1),n=t.correctCount||0,a=n/i;let s="A1";a>=.85?s="B2":a>=.65?s="B1":a>=.4?s="A2":s="A1";const r=["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],o={};r.forEach(h=>{const v=t.skillsEvaluated[h]||{correct:0,total:1},b=v.total>0?v.correct/v.total:0;let w="A1";b>=.85?w="B2":b>=.65?w="B1":b>=.4?w="A2":w="A1";const x=Math.round(b*100);o[h]={level:w,sublevel:"",score:x,correct:v.correct,total:v.total,accuracy:x}});const c={overallCEFR:s,skills:o,weakAreas:[{skill:"speaking",level:"A1",detail:"Günlük basit diyaloglar ve temel kelimeler"},{skill:"grammar",level:"A1",detail:"To Be fiili ve temel zaman kalıpları"}],strongAreas:[{skill:"comprehension",level:s,detail:"Temel bağlam kavrama"}],totalQuestions:i,totalCorrect:n};this.setUserData("latest_assessment",c);const m=this.getUserData("skills")||{};for(const[h,v]of Object.entries(o))m[h]={level:v.level,sublevel:v.sublevel,score:v.score};this.setUserData("skills",m);const d=this.getUserData("stats");return d&&(d.xp=(d.xp||0)+50,this.setUserData("stats",d)),c}async getGrammarTopics(){return(k.grammar_topics||[]).map(e=>({...e,examples:typeof e.examples=="string"?JSON.parse(e.examples):e.examples,rules:typeof e.rules=="string"?JSON.parse(e.rules):e.rules,common_mistakes:typeof e.common_mistakes=="string"?JSON.parse(e.common_mistakes):e.common_mistakes,prerequisite_topics:typeof e.prerequisite_topics=="string"?JSON.parse(e.prerequisite_topics||"[]"):e.prerequisite_topics}))}async getGrammarTopic(e){const t=await this.getGrammarTopics(),i=t.find(a=>a.slug===e)||t[0],n=(k.grammar_exercises||[]).filter(a=>a.topic_id===i.id).map(a=>({...a,options:typeof a.options=="string"?JSON.parse(a.options):a.options}));return{topic:i,exercises:n}}async submitGrammarExercise(e,t){const i=k.grammar_exercises||[],n=i.find(r=>r.id===e)||i[0],a=t.trim().toLowerCase()===n.correct_answer.trim().toLowerCase(),s=this.getUserData("stats")||{xp:0};if(s.xp=(s.xp||0)+(a?15:5),a&&(s.total_grammar_mastered=(s.total_grammar_mastered||0)+1),this.setUserData("stats",s),!a){const r=this.getUserData("errors")||[];r.unshift({id:Date.now(),skill:"grammar",error_text:t,correction:n.correct_answer,explanation:n.explanation_tr||n.explanation||"Gramer kural hatası.",occurrence_count:1,resolved:0}),this.setUserData("errors",r)}return{isCorrect:a,correctAnswer:n.correct_answer,feedback:a?"Tebrikler! Doğru cevap.":`Yanlış. Doğru biçim: ${n.correct_answer}`,explanation:n.explanation,explanationTr:n.explanation_tr||n.explanation}}async getVocabularyItems(){const e=(this.getUserData("srs_items")||[]).map(t=>({...t,examples:typeof t.examples=="string"?JSON.parse(t.examples):t.examples,collocations:typeof t.collocations=="string"?JSON.parse(t.collocations):t.collocations}));return{items:e,total:e.length}}async getReviewQueue(){const e=(this.getUserData("srs_items")||[]).filter(t=>t.due);return{items:e,dueToday:e.length}}async submitReview(e,t){const i=this.getUserData("srs_items")||[],n=i.findIndex(s=>s.id===e);n!==-1&&(t>=2&&(i[n].due=!1,i[n].repetitions=(i[n].repetitions||0)+1),this.setUserData("srs_items",i));const a=this.getUserData("stats")||{xp:0};return a.xp=(a.xp||0)+(t>=2?10:3),a.total_words_learned=(a.total_words_learned||0)+(t>=2?1:0),this.setUserData("stats",a),{success:!0}}async addCustomWord(e,t,i="A1",n=""){const a=this.getUserData("srs_items")||[],s=(e||"").trim();if(!s)return null;const r=a.find(c=>(c.word||"").toLowerCase()===s.toLowerCase());if(r)return r.due=!0,t&&(!r.definition_tr||r.definition_tr==="-")&&(r.definition_tr=t),this.setUserData("srs_items",a),r;const o={id:Date.now()+Math.floor(Math.random()*1e3),word:s,definition_tr:t||"Tanım eklenmedi",cefr_level:i||"A1",examples:n?[n]:[],collocations:[],due:!0,repetitions:0,ease_factor:2.5,interval:1,part_of_speech:"word",created_at:new Date().toISOString()};return a.unshift(o),this.setUserData("srs_items",a),o}async getReadingMaterials(){return(k.reading_materials||[]).map(e=>({...e,comprehension_questions:typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary}))}async getReadingMaterial(e){const t=await this.getReadingMaterials();return{material:t.find(n=>n.id===parseInt(e,10))||t[0]}}async submitReading(e,t,i){const{material:n}=await this.getReadingMaterial(e),a=n.comprehension_questions||[];let s=0;const r=a.map((d,h)=>{const v=t[h]||"",b=v.trim().toLowerCase()===d.correct.trim().toLowerCase();return b&&s++,{question:d.question,userAnswer:v,correctAnswer:d.correct,isCorrect:b}}),o=Math.round(s/Math.max(a.length,1)*100),c=Math.round(n.word_count/Math.max(i,10)*60),m=this.getUserData("stats")||{xp:0};return m.xp=(m.xp||0)+(o>=70?30:15),this.setUserData("stats",m),{score:o,correctCount:s,totalCount:a.length,wordCount:n.word_count,wordsPerMinute:c,details:r}}async getListeningMaterials(){return(k.listening_materials||[]).map(e=>({...e,comprehension_questions:typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary}))}async getListeningMaterial(e){const t=await this.getListeningMaterials();return{material:t.find(n=>n.id===parseInt(e,10))||t[0]}}async submitListening(e,t,i){const{material:n}=await this.getListeningMaterial(e),a=n.comprehension_questions||[];let s=0;const r=a.map((m,d)=>{const h=t[d]||"",v=h.trim().toLowerCase()===m.correct.trim().toLowerCase();return v&&s++,{question:m.question,userAnswer:h,correctAnswer:m.correct,isCorrect:v}}),o=Math.round(s/Math.max(a.length,1)*100),c=this.getUserData("stats")||{xp:0};return c.xp=(c.xp||0)+(o>=70?25:10),this.setUserData("stats",c),{score:o,correctCount:s,totalCount:a.length,listenCount:i,details:r}}async getWritingPrompts(){return k.writing_prompts||[]}async submitWriting(e,t){const i=t.trim().split(/\s+/).filter(Boolean).length,n=(t.match(/[^.!?]+[.!?]+/g)||[]).length||1,a=(i/n).toFixed(1),s=Math.min(100,Math.max(50,40+Math.round(i*1.5))),r=s>=85?"B2":s>=65?"B1":"A2",o=this.getUserData("stats")||{xp:0};return o.xp=(o.xp||0)+30,this.setUserData("stats",o),{overallScore:s,cefrLevel:r,grammarScore:Math.min(95,s+5),vocabularyScore:s,structureScore:Math.max(50,s-5),feedback:[`Ortalama ${a} kelimelik cümlelerle ${i} kelime yazdınız.`,"Kelime seçiminiz konuya uygun ve anlaşılır.",'İpucu: Cümleleri birbirine "and", "but", "because" veya "so" gibi bağlaçlarla bağlayarak daha akıcı paragraflar oluşturabilirsiniz.'],errors:[]}}async getSpeakingScenarios(){return(k.speaking_scenarios||[]).map(e=>({...e,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary,key_phrases:typeof e.key_phrases=="string"?JSON.parse(e.key_phrases):e.key_phrases,objectives:typeof e.objectives=="string"?JSON.parse(e.objectives):e.objectives}))}async getSpeakingScenario(e){const t=await this.getSpeakingScenarios();return{scenario:t.find(n=>n.id===parseInt(e,10))||t[0]}}async getErrors(){return{errors:this.getUserData("errors")||[]}}async resolveError(e){const t=this.getUserData("errors")||[],i=t.findIndex(a=>String(a.id)===String(e));i!==-1&&(t[i].resolved=1,this.setUserData("errors",t));const n=this.getUserData("stats")||{total_errors_resolved:0};return n.total_errors_resolved=(n.total_errors_resolved||0)+1,this.setUserData("stats",n),{success:!0}}async generateDailyTasks(){return{success:!0}}async getProgressHistory(){return{history:[]}}async getWeeklyReport(){return{report:null}}}const l=new E,$=typeof window<"u"&&(window.location.hostname.includes("github.io")||window.location.protocol==="file:"),B="/api";class z{constructor(){this.useLocal=$}getCurrentUser(){return l.getCurrentUser()}getHeaders(){const e=this.getCurrentUser(),t={"Content-Type":"application/json"};return e&&(t["x-user-id"]=e.id||e.username),t}async request(e,t={}){if(this.useLocal)throw new Error("Using local service");const i=`${B}${e}`,n={...t,headers:{...this.getHeaders(),...t.headers||{}}};try{const a=await fetch(i,n);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return await a.json()}catch(a){throw this.useLocal=!0,a}}async register(e,t,i){if(this.useLocal)return await l.register(e,t,i);try{const n=await this.request("/auth/register",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:i})});return await l.register(e,t,i),n}catch{return await l.register(e,t,i)}}async login(e,t){if(this.useLocal)return await l.login(e,t);try{const i=await this.request("/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})});return await l.login(e,t),i}catch{return await l.login(e,t)}}async loginOrRegisterGuest(){return await l.loginOrRegisterGuest()}logout(){l.logout()}async getProfile(){const e=this.getCurrentUser();if(!e)throw new Error("AUTH_REQUIRED");return{user:e}}async getDashboard(){return await l.getDashboard()}async skipAssessmentToA1(){return await l.skipAssessmentToA1()}async startAssessment(){if(this.useLocal)return l.startAssessment();try{return await this.request("/assessment/start",{method:"POST"})}catch{return l.startAssessment()}}async getAssessmentQuestions(e,t){if(this.useLocal)return l.getAssessmentQuestions(e,t);try{return await this.request(`/assessment/${e}/questions/${t}`)}catch{return l.getAssessmentQuestions(e,t)}}async submitAssessmentAnswer(e,t,i,n=3e3){if(this.useLocal)return l.submitAssessmentAnswer(e,t,i,n);try{return await this.request(`/assessment/${e}/answer`,{method:"POST",body:JSON.stringify({questionBankId:t,userAnswer:i,responseTimeMs:n})})}catch{return l.submitAssessmentAnswer(e,t,i,n)}}async completeAssessment(e){if(this.useLocal)return l.completeAssessment(e);try{return await this.request(`/assessment/${e}/complete`,{method:"POST"})}catch{return l.completeAssessment(e)}}async getAssessmentProgress(e){if(this.useLocal)return{completedSkills:10,totalSkills:10};try{return await this.request(`/assessment/${e}/progress`)}catch{return{completedSkills:10,totalSkills:10}}}async getLatestAssessment(){if(this.useLocal)return(await l.getDashboard()).latestAssessment;try{return await this.request("/assessment/latest")}catch{return(await l.getDashboard()).latestAssessment}}async getGrammarTopics(){if(this.useLocal)return l.getGrammarTopics();try{return await this.request("/grammar/topics")}catch{return l.getGrammarTopics()}}async getGrammarTopic(e){if(this.useLocal)return l.getGrammarTopic(e);try{return await this.request(`/grammar/topic/${e}`)}catch{return l.getGrammarTopic(e)}}async submitGrammarExercise(e,t,i=3e3){if(this.useLocal)return l.submitGrammarExercise(e,t);try{return await this.request(`/grammar/exercise/${e}/submit`,{method:"POST",body:JSON.stringify({answer:t,responseTimeMs:i})})}catch{return l.submitGrammarExercise(e,t)}}async getVocabularyItems(e={}){if(this.useLocal)return l.getVocabularyItems(e);try{const t=new URLSearchParams(e).toString();return await this.request(`/vocabulary/items${t?`?${t}`:""}`)}catch{return l.getVocabularyItems(e)}}async getReviewQueue(){if(this.useLocal)return l.getReviewQueue();try{return await this.request("/vocabulary/review")}catch{return l.getReviewQueue()}}async submitReview(e,t){if(this.useLocal)return l.submitReview(e,t);try{return await this.request(`/vocabulary/${e}/review`,{method:"POST",body:JSON.stringify({rating:t})})}catch{return l.submitReview(e,t)}}async addCustomWord(e,t,i="A1",n=""){return await l.addCustomWord(e,t,i,n)}async getReadingMaterials(e={}){if(this.useLocal)return l.getReadingMaterials();try{const t=new URLSearchParams(e).toString();return await this.request(`/reading/materials${t?`?${t}`:""}`)}catch{return l.getReadingMaterials()}}async getReadingMaterial(e){if(this.useLocal)return l.getReadingMaterial(e);try{return await this.request(`/reading/${e}`)}catch{return l.getReadingMaterial(e)}}async submitReading(e,t,i){if(this.useLocal)return l.submitReading(e,t,i);try{return await this.request(`/reading/${e}/submit`,{method:"POST",body:JSON.stringify({answers:t,readingTimeSeconds:i})})}catch{return l.submitReading(e,t,i)}}async getListeningMaterials(e={}){if(this.useLocal)return l.getListeningMaterials();try{const t=new URLSearchParams(e).toString();return await this.request(`/listening/materials${t?`?${t}`:""}`)}catch{return l.getListeningMaterials()}}async getListeningMaterial(e){if(this.useLocal)return l.getListeningMaterial(e);try{return await this.request(`/listening/${e}`)}catch{return l.getListeningMaterial(e)}}async getListeningTranscript(e){const{material:t}=await this.getListeningMaterial(e);return{transcript:(t==null?void 0:t.transcript)||(t==null?void 0:t.audio_text)||""}}async submitListening(e,t,i=1){if(this.useLocal)return l.submitListening(e,t,i);try{return await this.request(`/listening/${e}/submit`,{method:"POST",body:JSON.stringify({answers:t,listenCount:i})})}catch{return l.submitListening(e,t,i)}}async getWritingPrompts(e={}){if(this.useLocal)return l.getWritingPrompts();try{const t=new URLSearchParams(e).toString();return await this.request(`/writing/prompts${t?`?${t}`:""}`)}catch{return l.getWritingPrompts()}}async submitWriting(e,t,i){if(this.useLocal)return l.submitWriting(e,t,i);try{return await this.request("/writing/submit",{method:"POST",body:JSON.stringify({promptId:e,text:t,timeSpentSeconds:i})})}catch{return l.submitWriting(e,t,i)}}async getSpeakingScenarios(e={}){if(this.useLocal)return l.getSpeakingScenarios();try{const t=new URLSearchParams(e).toString();return await this.request(`/speaking/scenarios${t?`?${t}`:""}`)}catch{return l.getSpeakingScenarios()}}async getSpeakingScenario(e){if(this.useLocal)return l.getSpeakingScenario(e);try{return await this.request(`/speaking/scenario/${e}`)}catch{return l.getSpeakingScenario(e)}}async getErrors(e={}){if(this.useLocal)return l.getErrors(e);try{const t=new URLSearchParams(e).toString();return await this.request(`/errors${t?`?${t}`:""}`)}catch{return l.getErrors(e)}}async resolveError(e){if(this.useLocal)return l.resolveError(e);try{return await this.request(`/errors/${e}/resolve`,{method:"POST"})}catch{return l.resolveError(e)}}async generateDailyTasks(){if(this.useLocal)return l.generateDailyTasks();try{return await this.request("/daily-tasks/generate",{method:"POST"})}catch{return l.generateDailyTasks()}}async completeDailyTask(e,t){return{success:!0}}async getProgressHistory(){if(this.useLocal)return l.getProgressHistory();try{return await this.request("/progress/history")}catch{return l.getProgressHistory()}}async getWeeklyReport(){if(this.useLocal)return l.getWeeklyReport();try{return await this.request("/reports/weekly")}catch{return l.getWeeklyReport()}}}const p=new z;class C{constructor(){this.user=null,this.dashboard=null,this.currentView="dashboard",this.sessionSeconds=0,this.timerInterval=null,this.listeners=new Map}on(e,t){return this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t),()=>{const i=this.listeners.get(e);i&&this.listeners.set(e,i.filter(n=>n!==t))}}emit(e,t){this.listeners.has(e)&&this.listeners.get(e).forEach(i=>{try{i(t)}catch(n){console.error(`Error in event listener for ${e}:`,n)}})}setUser(e){this.user=e,this.emit("user:change",e)}setDashboard(e){this.dashboard=e,this.emit("dashboard:change",e)}setView(e){this.currentView=e,this.emit("view:change",e)}startSessionTimer(){this.timerInterval&&clearInterval(this.timerInterval),this.timerInterval=setInterval(()=>{this.sessionSeconds++,this.emit("timer:tick",this.sessionSeconds)},1e3)}stopSessionTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}showToast(e,t="info",i=4e3){const n=document.getElementById("toast-container");if(!n)return;const a=document.createElement("div");a.className=`toast ${t}`;let s="ℹ️";t==="success"&&(s="✅"),t==="error"&&(s="⚠️"),a.innerHTML=`<span>${s}</span><span>${e}</span>`,n.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transform="translateY(-10px)",a.style.transition="all 0.3s ease",setTimeout(()=>a.remove(),300)},i)}}const u=new C;class q{constructor(e){this.onSuccess=e,this.mode="login",this.element=null}show(){this.remove();const e=document.createElement("div");e.className="auth-overlay",e.id="auth-modal-overlay",e.innerHTML=`
      <div class="auth-modal card">
        <div class="auth-header">
          <div class="auth-logo">
            <span class="logo-icon">✨</span>
            <span class="logo-text">Lingua<span class="gradient-text">Forge</span></span>
          </div>
          <h2 class="auth-title" id="auth-title">
            ${this.mode==="login"?"Giriş Yap":"Yeni Hesap Aç"}
          </h2>
          <p class="auth-subtitle" id="auth-subtitle">
            ${this.mode==="login"?"Kaldığınız yerden öğrenmeye devam edin":"Sıfırdan (A1) İngilizce öğrenmeye başlayın"}
          </p>
        </div>

        <div class="auth-tabs">
          <button class="auth-tab ${this.mode==="login"?"active":""}" id="tab-login" type="button">
            Giriş Yap
          </button>
          <button class="auth-tab ${this.mode==="register"?"active":""}" id="tab-register" type="button">
            Kayıt Ol (0'dan Başla)
          </button>
        </div>

        <div class="auth-body">
          <div class="auth-alert" id="auth-alert" style="display: none;"></div>

          <form id="auth-form" class="auth-form" autocomplete="off">
            <div class="form-group">
              <label for="auth-username">Kullanıcı Adı</label>
              <div class="input-wrapper">
                <span class="input-icon">👤</span>
                <input 
                  type="text" 
                  id="auth-username" 
                  class="form-input" 
                  placeholder="Kullanıcı adınızı girin" 
                  required 
                  autocomplete="username"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="auth-password">Şifre</label>
              <div class="input-wrapper">
                <span class="input-icon">🔒</span>
                <input 
                  type="password" 
                  id="auth-password" 
                  class="form-input" 
                  placeholder="Şifrenizi girin" 
                  required 
                  autocomplete="current-password"
                />
              </div>
            </div>

            ${this.mode==="register"?`
              <div class="auth-info-note">
                <span class="note-icon">🌱</span>
                <span>Yeni hesabınız <strong>A1 (Başlangıç)</strong> seviyesinde, <strong>0 XP</strong> ile tertemiz başlatılacaktır.</span>
              </div>
            `:""}

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-submit-auth">
              ${this.mode==="login"?"Giriş Yap →":"Hesap Oluştur ve 0'dan Başla →"}
            </button>
          </form>
        </div>

        <div class="auth-footer">
          <span class="auth-footer-text">
            ${this.mode==="login"?'Hesabınız yok mu? <a href="#" id="link-switch-register">Hemen Kayıt Olun</a>':'Zaten hesabınız var mı? <a href="#" id="link-switch-login">Giriş Yapın</a>'}
          </span>
        </div>
      </div>
    `,document.body.appendChild(e),this.element=e,this.bindEvents(),setTimeout(()=>{var t;(t=document.getElementById("auth-username"))==null||t.focus()},100)}remove(){const e=document.getElementById("auth-modal-overlay");e&&e.remove(),this.element=null}showAlert(e,t=!0){const i=document.getElementById("auth-alert");i&&(i.textContent=e,i.className=`auth-alert ${t?"error":"success"}`,i.style.display="block")}setMode(e){this.mode=e,this.show()}bindEvents(){var e,t,i,n,a;(e=document.getElementById("tab-login"))==null||e.addEventListener("click",()=>this.setMode("login")),(t=document.getElementById("tab-register"))==null||t.addEventListener("click",()=>this.setMode("register")),(i=document.getElementById("link-switch-register"))==null||i.addEventListener("click",s=>{s.preventDefault(),this.setMode("register")}),(n=document.getElementById("link-switch-login"))==null||n.addEventListener("click",s=>{s.preventDefault(),this.setMode("login")}),(a=document.getElementById("auth-form"))==null||a.addEventListener("submit",async s=>{var m,d;s.preventDefault();const r=(m=document.getElementById("auth-username"))==null?void 0:m.value.trim(),o=(d=document.getElementById("auth-password"))==null?void 0:d.value;if(!r||!o){this.showAlert("Lütfen kullanıcı adı ve şifre girin.");return}if(this.mode==="register"&&o.length<3){this.showAlert("Şifre en az 3 karakter olmalıdır.");return}const c=document.getElementById("btn-submit-auth");c&&(c.disabled=!0,c.textContent="İşleniyor...");try{let h;this.mode==="register"?(h=await p.register(r,o,r),u.showToast(`Hoş geldin ${h.displayName||h.username}! Hesabın A1 seviyesinde 0'dan oluşturuldu. 🎉`,"success")):(h=await p.login(r,o),u.showToast(`Tekrar hoş geldin, ${h.displayName||h.username}! 👋`,"success")),this.remove(),this.onSuccess&&this.onSuccess(h)}catch(h){this.showAlert(h.message||"Giriş yapılırken bir hata oluştu."),c&&(c.disabled=!1,c.textContent=this.mode==="login"?"Giriş Yap →":"Hesap Oluştur ve 0'dan Başla →")}})}}class L{constructor(){this.container=null,this.data=null}async render(e){var t;this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Kişiselleştirilmiş öğrenme paneliniz yükleniyor...</p>
      </div>
    `;try{this.data=await p.getDashboard(),u.setDashboard(this.data),this.renderContent()}catch(i){if(i.message==="AUTH_REQUIRED")return;this.container.innerHTML=`
        <div class="card error-card">
          <h3>Panel yüklenemedi</h3>
          <p>${i.message}</p>
          <button class="btn btn-primary" id="retry-dashboard-btn">Tekrar Dene</button>
        </div>
      `,(t=document.getElementById("retry-dashboard-btn"))==null||t.addEventListener("click",()=>this.render(e))}}renderContent(){const{user:e,stats:t,skills:i,dailyTasks:n,recentErrors:a,reviewStats:s,latestAssessment:r}=this.data,o=document.getElementById("sidebar-streak");o&&(o.textContent=`${t.current_streak||1} gün`);const c=document.getElementById("sidebar-xp");c&&(c.textContent=`${t.xp||0} XP`);const m=document.getElementById("review-due-badge");m&&(m.textContent=s?s.dueToday:0);const d=document.getElementById("errors-count-badge");d&&(d.textContent=a?a.length:0);const h=(r==null?void 0:r.overall_cefr)||(r==null?void 0:r.overallCEFR)||"A1",v=document.getElementById("sidebar-cefr-badge");v&&(v.textContent=h);const b=[{key:"grammar",name:"Dilbilgisi (Grammar)",icon:"📖"},{key:"vocabulary",name:"Kelime Haznesi (Vocabulary)",icon:"📚"},{key:"reading",name:"Okuma & Anlama (Reading)",icon:"📰"},{key:"listening",name:"Dinleme & Algılama (Listening)",icon:"🎧"},{key:"writing",name:"Yazma Becerisi (Writing)",icon:"✍️"},{key:"speaking",name:"Konuşma & Akıcılık (Speaking)",icon:"🗣️"},{key:"pronunciation",name:"Telaffuz & Aksan (Pronunciation)",icon:"🎙️"},{key:"sentence_formation",name:"Cümle Kurma (Syntax)",icon:"🧩"},{key:"comprehension",name:"Kavrama Hızı (Comprehension)",icon:"💡"},{key:"communication",name:"Doğal İletişim (Communication)",icon:"🤝"}],w=(n==null?void 0:n.tasks)||[{id:"task-vocab",skill:"vocabulary",description:"A1 Temel Kelime Kartlarından 5 tanesini incele ve tekrar et",targetView:"vocabulary"},{id:"task-grammar",skill:"grammar",description:"Gramer Akademisinden 1 başlangıç konusunu ve kurallarını oku",targetView:"grammar"},{id:"task-reading",skill:"reading",description:"1 başlangıç (A1) okuma metnini incele ve sorularını yanıtla",targetView:"reading"},{id:"task-speaking",skill:"speaking",description:"1 günlük konuşma senaryosunu sesli olarak dene",targetView:"speaking"}],x=new Set((n==null?void 0:n.completed_tasks)||[]);this.container.innerHTML=`
      <div class="dashboard-grid">
        <!-- Welcome & Goal Hero -->
        <section class="hero-card card">
          <div class="hero-content">
            <div class="hero-badge">Günün Odağı • Sıfırdan Akıcı İngilizceye</div>
            <h1 class="hero-title">Hoş geldin, <span class="gradient-text">${e.displayName||e.username}</span>!</h1>
            <p class="hero-desc">
              Bu sistem İngilizceyi kural ezberletmeden; dinleme, konuşma, yazma ve İngilizce düşünme yetinizi 10 farklı boyutta sıfırdan geliştirmek için hazırlandı.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary" id="hero-diagnostic-btn">
                <span>🎯 Seviye Belirleme Sınavı (CEFR)</span>
                <span class="btn-badge">10 Beceri</span>
              </button>
              <button class="btn btn-secondary" id="hero-routine-btn">
                <span>⚡ Günün Rutinine Başla (${w.length-x.size} görev kaldı)</span>
              </button>
            </div>
          </div>
          <div class="hero-stat-box">
            <div class="hero-cefr-circle">
              <span class="hero-cefr-label">MEVCUT SEVİYE</span>
              <span class="hero-cefr-val">${h}</span>
              <span class="hero-cefr-sub">Hedef: B2+ Akıcılık</span>
            </div>
          </div>
        </section>

        <!-- Stats Overview Row -->
        <div class="grid-4 stats-row">
          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Çalışma Serisi</span>
              <span class="stat-icon-pill">🔥</span>
            </div>
            <div class="stat-number">${t.current_streak||1} <span class="stat-unit">gün</span></div>
            <div class="stat-sub">En uzun seri: ${t.longest_streak||1} gün</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Çalışma Süresi</span>
              <span class="stat-icon-pill">⏱️</span>
            </div>
            <div class="stat-number">${t.total_study_minutes||0} <span class="stat-unit">dk</span></div>
            <div class="stat-sub">Toplam aktif öğrenme</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Öğrenilen Kelime</span>
              <span class="stat-icon-pill">📚</span>
            </div>
            <div class="stat-number">${t.total_words_learned||0}</div>
            <div class="stat-sub">${(s==null?void 0:s.dueToday)||0} kart tekrar bekliyor</div>
          </div>

          <div class="stat-card card">
            <div class="stat-header">
              <span class="stat-title">Düzeltilen Hata</span>
              <span class="stat-icon-pill">🎯</span>
            </div>
            <div class="stat-number">${t.total_errors_resolved||0}</div>
            <div class="stat-sub">${(a==null?void 0:a.length)||0} hata defterinde kayıtlı</div>
          </div>
        </div>

        <div class="grid-2 dashboard-main-grid">
          <!-- Today's Routine / Daily Tasks -->
          <section class="card daily-routine-card">
            <div class="card-header">
              <div>
                <h2 class="card-title">📅 Bugünün Mikro-Müfredatı</h2>
                <div class="card-subtitle">Anlama ve üretme becerileri için dengeli günlük plan</div>
              </div>
              <button class="btn btn-secondary btn-sm" id="refresh-tasks-btn" title="Görevleri yenile">
                ↻ Yenile
              </button>
            </div>

            <div class="tasks-list">
              ${w.map(f=>{const _=x.has(f.id);return`
                  <div class="task-item ${_?"completed":""}" data-task-id="${f.id}" data-view="${f.targetView||f.skill}">
                    <div class="task-checkbox ${_?"checked":""}">
                      ${_?"✓":""}
                    </div>
                    <div class="task-content">
                      <div class="task-title">${f.description}</div>
                      <div class="task-skill-tag cefr-tag A1">${f.skill.toUpperCase()}</div>
                    </div>
                    <button class="btn btn-secondary btn-sm task-action-btn">
                      ${_?"Tekrar Et":"Başla →"}
                    </button>
                  </div>
                `}).join("")}
            </div>
          </section>

          <!-- 10-Skill CEFR Matrix -->
          <section class="card skill-matrix-card">
            <div class="card-header">
              <div>
                <h2 class="card-title">📊 10 Boyutlu Beceri Durumu</h2>
                <div class="card-subtitle">CEFR Standartlarında Bağımsız Seviye Dağılımı</div>
              </div>
              <button class="btn btn-secondary btn-sm" id="goto-assessment-btn">Seviye Testi</button>
            </div>

            <div class="skill-bars-list">
              ${b.map(f=>{const _=i[f.key]||{level:"A1",score:0},I=_.level||"A1",T=_.score||0;return`
                  <div class="skill-row" data-skill="${f.key}">
                    <div class="skill-label">
                      <span class="skill-icon">${f.icon}</span>
                      <span class="skill-name">${f.name}</span>
                    </div>
                    <div class="skill-bar-wrap">
                      <div class="skill-bar-bg">
                        <div class="skill-bar-fill" style="width: ${Math.max(T,5)}%;"></div>
                      </div>
                    </div>
                    <div class="skill-score">
                      <span class="cefr-tag ${I}">${I}</span>
                      <span class="score-percent">%${T}</span>
                    </div>
                  </div>
                `}).join("")}
            </div>
          </section>
        </div>

        <!-- Quick Access to Skill Labs -->
        <section class="card labs-overview-card">
          <div class="card-header">
            <div>
              <h2 class="card-title">🚀 Öğrenme Laboratuvarları</h2>
              <div class="card-subtitle">Hangi alanda pratik yapmak istiyorsanız hemen başlayın</div>
            </div>
          </div>
          <div class="grid-3 labs-grid">
            <div class="lab-card card" data-view="grammar">
              <div class="lab-icon">📖</div>
              <div class="lab-title">Gramer Akademisi</div>
              <div class="lab-desc">Türkçe açıklamalı, kuralların mantığını anlatan A1-C1 dilbilgisi dersleri.</div>
              <button class="btn btn-secondary btn-sm">Derslere Git →</button>
            </div>
            <div class="lab-card card" data-view="vocabulary">
              <div class="lab-icon">🗂️</div>
              <div class="lab-title">Kelime Kartları (SRS)</div>
              <div class="lab-desc">Aralıklı tekrar algoritmasıyla kalıcı kelime ezberi ve örnek cümleler.</div>
              <button class="btn btn-secondary btn-sm">Kelimeleri Aç →</button>
            </div>
            <div class="lab-card card" data-view="speaking">
              <div class="lab-icon">🗣️</div>
              <div class="lab-title">Konuşma & Diyalog</div>
              <div class="lab-desc">Günlük hayattaki durumlar için sesli rol yapma ve akıcılık simülatörü.</div>
              <button class="btn btn-secondary btn-sm">Konuşmaya Başla →</button>
            </div>
          </div>
        </section>
      </div>
    `,this.bindEvents()}bindEvents(){var e,t,i;(e=document.getElementById("hero-diagnostic-btn"))==null||e.addEventListener("click",()=>{u.setView("assessment")}),(t=document.getElementById("hero-routine-btn"))==null||t.addEventListener("click",()=>{u.setView("grammar")}),(i=document.getElementById("goto-assessment-btn"))==null||i.addEventListener("click",()=>{u.setView("assessment")}),document.querySelectorAll(".task-item").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.view;a&&u.setView(a)})}),document.querySelectorAll(".lab-card").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.view;a&&u.setView(a)})}),document.querySelectorAll(".skill-row").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.skill;a&&u.currentView!==a&&u.setView(a)})})}}class D{constructor(){this.synth=typeof window<"u"&&window.speechSynthesis||null,this.recognition=null,this.voices=[],this.preferredAccent="en-US",this.preferredRate=1,typeof window<"u"&&this.synth&&(this.loadVoices(),typeof speechSynthesis<"u"&&speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=()=>this.loadVoices()));const e=typeof window<"u"&&(window.SpeechRecognition||window.webkitSpeechRecognition)||null;e&&(this.recognition=new e,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.lang="en-US")}loadVoices(){if(!this.synth)return;const e=this.synth.getVoices()||[];this.voices=e.filter(t=>t.lang&&t.lang.toLowerCase().startsWith("en"))}isTtsSupported(){return!!this.synth}isSttSupported(){return!!this.recognition}sanitizeForSpeech(e){if(!e)return"";let t=String(e);return t=t.replace(/_+/g," blank "),t=t.replace(/(\b\w+)\s*\/\s*(\w+\b)/g,"$1 or $2"),t=t.replace(/\//g," "),t=t.replace(/<[^>]+>/g," "),t=t.replace(/["“”«»`\\]/g," "),t=t.replace(/(^|\s)['‘](.*?)['’](\s|$)/g,"$1 $2 $3"),t=t.replace(/['’]{2,}/g," "),t=t.replace(/[:;]/g,", "),t=t.replace(/[()[\]{}]/g,", "),t=t.replace(/\s+[-—–]+\s+/g,", "),t=t.replace(/[-—–]{2,}/g,", "),t=t.replace(/(\b\w+)-(\w+\b)/g,"$1 $2"),t=t.replace(/[-—–]/g," "),t=t.replace(/\.{2,}/g,". "),t=t.replace(/[*#^~<>@$%&+=|_]/g," "),t=t.replace(/,\s*,+/g,", "),t=t.replace(/,\s*\./g,"."),t=t.replace(/\.\s*,/g,"."),t=t.replace(/\s+([.,!?;:])/g,"$1"),t=t.replace(/\s+/g," ").trim(),t}getBestVoice(e="en-US"){if(!this.synth)return null;let t=this.voices;if((!t||t.length===0)&&(t=(this.synth.getVoices()||[]).filter(r=>r.lang&&r.lang.toLowerCase().startsWith("en")),this.voices=t),t.length===0&&(t=(this.synth.getVoices()||[]).filter(o=>o.lang&&o.lang.toLowerCase().startsWith("en")),this.voices=t),t.length===0)return null;const i=t.find(r=>r.lang.toLowerCase()===e.toLowerCase());if(i)return i;const n=e.slice(0,5),a=t.find(r=>r.lang.toLowerCase().startsWith(n.toLowerCase()));if(a)return a;const s=t.find(r=>{const o=(r.name||"").toLowerCase();return o.includes("natural")||o.includes("google")||o.includes("samantha")||o.includes("david")||o.includes("jenny")||o.includes("zira")});return s||t[0]}speak(e,t={}){if(!this.synth)return console.warn("Speech synthesis not supported in this browser"),Promise.resolve();this.cancel();const i=this.sanitizeForSpeech(e);return i?new Promise(n=>{const a=new SpeechSynthesisUtterance(i);a.rate=t.rate||this.preferredRate||.95,a.pitch=t.pitch||1;const s=t.lang||this.preferredAccent||"en-US";a.lang=s;const r=this.getBestVoice(s);r&&(a.voice=r),a.onend=()=>n(),a.onerror=o=>{console.warn("Speech synthesis error:",o),n()},this.synth.speak(a)}):Promise.resolve()}cancel(){this.synth&&this.synth.cancel()}startListening({onResult:e,onError:t,onEnd:i,lang:n="en-US"}){if(!this.recognition){t&&t(new Error("Speech recognition not supported in this browser."));return}this.recognition.lang=n;let a="";this.recognition.onresult=s=>{let r="";for(let o=s.resultIndex;o<s.results.length;++o)s.results[o].isFinal?a+=s.results[o][0].transcript:r+=s.results[o][0].transcript;e&&e({final:a.trim(),interim:r.trim(),confidence:s.results[0]?s.results[0][0].confidence:0})},this.recognition.onerror=s=>{console.error("Speech recognition error:",s.error),t&&t(s)},this.recognition.onend=()=>{i&&i(a.trim())};try{this.recognition.start()}catch(s){console.warn("Recognition already started or error:",s)}}stopListening(){if(this.recognition)try{this.recognition.stop()}catch{}}calculateSimilarity(e,t){const i=e.toLowerCase().replace(/[^\w\s]/g,"").trim().split(/\s+/),n=t.toLowerCase().replace(/[^\w\s]/g,"").trim().split(/\s+/);if(n.length===0)return 0;let a=0;const s=[...n];for(const m of i){const d=s.indexOf(m);d!==-1&&(a++,s.splice(d,1))}const r=a/Math.max(i.length,1),o=a/n.length,c=r+o>0?2*r*o/(r+o):0;return Math.round(c*100)}}const g=new D,S={what:{tr:"Ne, Neyi",pos:"pronoun",cefr:"A1",note:"Soru zamiri"},where:{tr:"Nerede, Nereye",pos:"adverb",cefr:"A1",note:"Yer bildiren soru kelimesi"},when:{tr:"Ne zaman, -dığı zaman",pos:"adverb",cefr:"A1",note:"Zaman bildiren soru kelimesi"},which:{tr:"Hangi, Hangisi",pos:"pronoun",cefr:"A1",note:"Seçenek sorusu"},who:{tr:"Kim, Kimi",pos:"pronoun",cefr:"A1",note:"Kişi sorusu"},whose:{tr:"Kimin",pos:"pronoun",cefr:"A2",note:"Aitlik sorusu"},why:{tr:"Neden, Niçin",pos:"adverb",cefr:"A1",note:"Sebep sorusu"},how:{tr:"Nasıl, Ne kadar",pos:"adverb",cefr:"A1",note:"Durum veya miktar sorusu"},choose:{tr:"Seçmek, Tercih etmek",pos:"verb",cefr:"A1",note:"Seçenek belirlemek"},chose:{tr:"Seçti",pos:"verb",cefr:"A2",note:"Choose fiilinin geçmiş hali"},chosen:{tr:"Seçilmiş",pos:"verb/adj",cefr:"A2",note:"Choose fiilinin 3. hali"},select:{tr:"Seçmek, İşaretlemek",pos:"verb",cefr:"A2",note:"Doğru seçeneği belirleyin"},correct:{tr:"Doğru, Düzeltmek",pos:"adj/verb",cefr:"A1",note:"Hatasız, uygun"},incorrect:{tr:"Yanlış, Hatalı",pos:"adj",cefr:"A2",note:"Doğru olmayan"},sentence:{tr:"Cümle",pos:"noun",cefr:"A1",note:"Yargı bildiren söz dizisi"},sentences:{tr:"Cümleler",pos:"noun",cefr:"A1",note:"Çoğul cümle"},phrase:{tr:"İfade, Söz öbeği",pos:"noun",cefr:"A2",note:"Birden çok kelimeden oluşan yapı"},blank:{tr:"Boşluk, Boş",pos:"noun/adj",cefr:"A1",note:"Doldurulacak alan"},blanks:{tr:"Boşluklar",pos:"noun",cefr:"A1",note:"Cümledeki eksik yerler"},fill:{tr:"Doldurmak",pos:"verb",cefr:"A1",note:"Fill in the blank = Boşluğu doldur"},filled:{tr:"Doldurulmuş, Dolu",pos:"verb",cefr:"A1",note:"Geçmiş zaman"},following:{tr:"Aşağıdaki, Takip eden",pos:"adj",cefr:"A2",note:"The following = Aşağıdakiler"},statement:{tr:"İfade, Beyan, Cümle",pos:"noun",cefr:"B1",note:"Belirtilen yargı"},meaning:{tr:"Anlam",pos:"noun",cefr:"A1",note:"Sözcüğün anlamı"},explanation:{tr:"Açıklama, İzah",pos:"noun",cefr:"A2",note:"Nedenini belirtme"},explain:{tr:"Açıklamak, İzah etmek",pos:"verb",cefr:"A2",note:"Açıklığa kavuşturmak"},passage:{tr:"Paragraf, Parça, Metin",pos:"noun",cefr:"A2",note:"Okuma metni parçası"},dialogue:{tr:"Diyalog, Karşılıklı konuşma",pos:"noun",cefr:"A1",note:"İki kişi arasındaki konuşma"},answer:{tr:"Cevap, Cevaplamak",pos:"noun/verb",cefr:"A1",note:"Soruya verilen yanıt"},question:{tr:"Soru",pos:"noun",cefr:"A1",note:"Cevap bekleyen cümle"},option:{tr:"Seçenek, Şık",pos:"noun",cefr:"A2",note:"A, B, C, D şıkları"},options:{tr:"Seçenekler, Şıklar",pos:"noun",cefr:"A2",note:"Tüm şıklar"},complete:{tr:"Tamamlamak, Eksiksiz",pos:"verb/adj",cefr:"A1",note:"Bitirmek, eksiksiz hale getirmek"},umbrella:{tr:"Şemsiye",pos:"noun",cefr:"A1",note:"Yağmurdan korunma aracı"},cloud:{tr:"Bulut",pos:"noun",cefr:"A1",note:"Gökyüzündeki su buharı"},clouds:{tr:"Bulutlar",pos:"noun",cefr:"A1",note:"Dark clouds = kara bulutlar"},dark:{tr:"Karanlık, Koyu",pos:"adj",cefr:"A1",note:"Koyu renk veya ışıksız"},sky:{tr:"Gökyüzü",pos:"noun",cefr:"A1",note:"Gök"},expect:{tr:"Ummak, Beklemek",pos:"verb",cefr:"A2",note:"Beklenti içinde olmak"},expected:{tr:"Bekledi, Umdu",pos:"verb",cefr:"A2",note:"Beklenen durum"},"take out":{tr:"Çıkarmak, Dışarı almak",pos:"phrasal verb",cefr:"A2",note:"Cebinden veya çantasından çıkarmak"},"took out":{tr:"Çıkardı",pos:"phrasal verb",cefr:"A2",note:"Take out geçmiş hali"},rain:{tr:"Yağmur / Yağmur yağmak",pos:"noun/verb",cefr:"A1",note:"Hava durumu"},raining:{tr:"Yağmur yağıyor",pos:"verb",cefr:"A1",note:"Şimdiki zaman"},"under the weather":{tr:"Keyifsiz, Biraz hasta",pos:"idiom",cefr:"B1",note:"Deyim: Kendini kırgın hissetmek"},weather:{tr:"Hava durumu",pos:"noun",cefr:"A1",note:"Günün hava şartları"},unwell:{tr:"Rahatsız, Hasta",pos:"adj",cefr:"A2",note:"Sağlığı bozuk"},sick:{tr:"Hasta",pos:"adj",cefr:"A1",note:"Hastalanmış"},born:{tr:"Doğmuş, Dünyaya gelmiş",pos:"adj/verb",cefr:"A1",note:"To be born = doğmak"},birthday:{tr:"Doğum günü",pos:"noun",cefr:"A1",note:"Doğum yıldönümü"},reflection:{tr:"Düşünme, Yansıma",pos:"noun",cefr:"B2",note:"Derin düşünme"},reflect:{tr:"Düşünmek, Yansıtmak",pos:"verb",cefr:"B2",note:"Let me reflect = Bir düşüneyim"},thoughtful:{tr:"Düşünceli, Özenli",pos:"adj",cefr:"B1",note:"İyi düşünülmüş soru"},thought:{tr:"Düşünce / Düşündü",pos:"noun/verb",cefr:"A2",note:"Think geçmiş hali veya fikir"},interview:{tr:"Mülakat, Röportaj",pos:"noun",cefr:"A2",note:"Görüşme"},interviewer:{tr:"Mülakatı yapan kişi",pos:"noun",cefr:"B1",note:"Soru soran yetkili"},hesitation:{tr:"Tereddüt, Duraksama",pos:"noun",cefr:"B2",note:"Konuşurken duraklama"},hesitate:{tr:"Tereddüt etmek",pos:"verb",cefr:"B1",note:"Duraksamak"},filler:{tr:"Doldurucu sözcük (well, you know)",pos:"noun",cefr:"B2",note:"Düşünme süresi kazandıran sözcük"},directive:{tr:"Talimat, Direktif",pos:"noun",cefr:"B2",note:"Resmi yönerge"},pragmatic:{tr:"Edimbilimsel, Pratik amaca yönelik",pos:"adj",cefr:"B2",note:"Sosyal iletişimdeki gerçek anlam"},implicature:{tr:"Örtük anlam, İma",pos:"noun",cefr:"C1",note:"Doğrudan söylenmeyip ima edilen şey"},review:{tr:"Gözden geçirmek, İncelemek",pos:"verb",cefr:"A2",note:"Tekrar okumak"},presentation:{tr:"Sunum",pos:"noun",cefr:"A2",note:"Sunum konuşması"},compliment:{tr:"İltifat, Övgü",pos:"noun",cefr:"B1",note:"Güzel söz"},stranger:{tr:"Yabancı (tanınmayan kişi)",pos:"noun",cefr:"A2",note:"Tanımadığınız kişi"},clarify:{tr:"Netleştirmek, Açıklığa kavuşturmak",pos:"verb",cefr:"B1",note:"Daha net anlatmak"},clarification:{tr:"Açıklama, Netleştirme",pos:"noun",cefr:"B1",note:"Netleştirme talebi"},interrupt:{tr:"Sözünü kesmek, Araya girmek",pos:"verb",cefr:"B1",note:"Konuşmayı bölmek"},interruption:{tr:"Araya girme, Kesinti",pos:"noun",cefr:"B1",note:"Bölünme"},"turn-taking":{tr:"Konuşma sırası alma",pos:"phrase",cefr:"B2",note:"Diyalogda sırayla söz alma"},electricity:{tr:"Elektrik",pos:"noun",cefr:"A2",note:"Enerji"},suddenly:{tr:"Aniden, Birdenbire",pos:"adverb",cefr:"A2",note:"Beklenmedik bir anda"},"went out":{tr:"Söndü, Kesildi (elektrik)",pos:"phrasal verb",cefr:"A2",note:"Go out geçmiş hali"},closure:{tr:"Kapanma, Kapalı olma",pos:"noun",cefr:"B1",note:"Yolun kapalı olması"},route:{tr:"Güzergah, Rota, Yol",pos:"noun",cefr:"A2",note:"Gidilecek güzergah"},manager:{tr:"Müdür, Yönetici",pos:"noun",cefr:"A2",note:"Sorumlu kişi"},submit:{tr:"Teslim etmek, Sunmak",pos:"verb",cefr:"B1",note:"Rapor/ödev teslim etmek"},report:{tr:"Rapor",pos:"noun",cefr:"A2",note:"Yazılı bilgilendirme"},meal:{tr:"Öğün, Yemek",pos:"noun",cefr:"A1",note:"Yemek vakti"},middle:{tr:"Orta, Ortası",pos:"noun/adj",cefr:"A2",note:"İki şeyin ortası"},breakfast:{tr:"Kahvaltı",pos:"noun",cefr:"A1",note:"Sabah öğünü"},lunch:{tr:"Öğle yemeği",pos:"noun",cefr:"A1",note:"Öğle öğünü"},dinner:{tr:"Akşam yemeği",pos:"noun",cefr:"A1",note:"Akşam ana öğün"},supper:{tr:"Gece atıştırmalığı, Hafif akşam yemeği",pos:"noun",cefr:"B1",note:"Geç saatteki hafif yemek"},flaw:{tr:"Kusur, Hata, Eksiklik",pos:"noun",cefr:"B2",note:"Düzeltilmesi gereken eksik"},decision:{tr:"Karar",pos:"noun",cefr:"A2",note:"Make a decision = Karar vermek"},mistake:{tr:"Hata, Yanlış",pos:"noun",cefr:"A1",note:"Make a mistake = Hata yapmak"},progress:{tr:"İlerleme, Gelişme",pos:"noun",cefr:"A2",note:"Make progress = İlerleme kaydetmek"},effort:{tr:"Çaba, Gayret",pos:"noun",cefr:"B1",note:"Make an effort = Çaba göstermek"},routine:{tr:"Rutin, Günlük alışkanlık",pos:"noun",cefr:"A1",note:"Düzenli yapılan şeyler"},habit:{tr:"Alışkanlık",pos:"noun",cefr:"A2",note:"Tekrarlanan davranış"},colleague:{tr:"İş arkadaşı, Meslektaş",pos:"noun",cefr:"A2",note:"Birlikte çalışılan kişi"},relatives:{tr:"Akrabalar",pos:"noun",cefr:"A2",note:"Aile fertleri"},relative:{tr:"Akraba / Göreceli",pos:"noun/adj",cefr:"A2",note:"Akraba veya bağıntılı"},agree:{tr:"Katılmak, Aynı fikirde olmak",pos:"verb",cefr:"A2",note:"I agree with you = Sana katılıyorum"},disagree:{tr:"Katılmamak, Karşı çıkmak",pos:"verb",cefr:"A2",note:"Farklı düşünmek"},allow:{tr:"İzin vermek",pos:"verb",cefr:"B1",note:"Müsaade etmek"},appear:{tr:"Görünmek, Ortaya çıkmak",pos:"verb",cefr:"B1",note:"Belirmek"},arrive:{tr:"Varmak, Ulaşmak",pos:"verb",cefr:"A1",note:"Bir yere ulaşmak"},avoid:{tr:"Kaçınmak, Uzak durmak",pos:"verb",cefr:"B1",note:"Yapmaktan sakınmak"},become:{tr:"Olmak, Haline gelmek",pos:"verb",cefr:"A2",note:"Dönüşmek"},became:{tr:"Oldu",pos:"verb",cefr:"A2",note:"Become geçmiş hali"},believe:{tr:"İnanmak",pos:"verb",cefr:"A1",note:"Güvenmek veya inanmak"},borrow:{tr:"Ödünç almak",pos:"verb",cefr:"A2",note:"Geri vermek üzere almak"},lend:{tr:"Ödünç vermek",pos:"verb",cefr:"A2",note:"Geri almak üzere vermek"},cancel:{tr:"İptal etmek",pos:"verb",cefr:"A2",note:"Vazgeçmek"},carry:{tr:"Taşımak",pos:"verb",cefr:"A2",note:"Bir şeyi elinde/üstünde götürmek"},catch:{tr:"Yakalamak, Yetişmek",pos:"verb",cefr:"A2",note:"Catch a bus = Otobüse yetişmek"},caught:{tr:"Yakaladı",pos:"verb",cefr:"A2",note:"Catch geçmiş hali"},consider:{tr:"Göz önünde bulundurmak, Düşünmek",pos:"verb",cefr:"B1",note:"Değerlendirmek"},continue:{tr:"Devam etmek",pos:"verb",cefr:"A2",note:"Sürdürmek"},create:{tr:"Yaratmak, Oluşturmak",pos:"verb",cefr:"A2",note:"Meydana getirmek"},describe:{tr:"Tanımlamak, Tarif etmek",pos:"verb",cefr:"A2",note:"Detaylı anlatmak"},develop:{tr:"Geliştirmek, Gelişmek",pos:"verb",cefr:"B1",note:"İlerletmek"},discover:{tr:"Keşfetmek",pos:"verb",cefr:"A2",note:"Yeni bir şey bulmak"},discuss:{tr:"Tartışmak, Görüşmek",pos:"verb",cefr:"A2",note:"Fikir alışverişi yapmak"},enjoy:{tr:"Keyif almak, Eğlenmek",pos:"verb",cefr:"A1",note:"Hoşlanmak"},improve:{tr:"Geliştirmek, İyileştirmek",pos:"verb",cefr:"A2",note:"Daha iyi hale getirmek"},include:{tr:"İçermek, Dahil etmek",pos:"verb",cefr:"A2",note:"Kapsamak"},intend:{tr:"Niyet etmek, Amaçlamak",pos:"verb",cefr:"B1",note:"Hedeflemek"},manage:{tr:"Yönetmek, Başarmak",pos:"verb",cefr:"B1",note:"Üstesinden gelmek"},mention:{tr:"Bahsetmek, Değinmek",pos:"verb",cefr:"B1",note:"Adını geçirmek"},notice:{tr:"Fark etmek",pos:"verb/noun",cefr:"A2",note:"Görmek, ayırtına varmak"},offer:{tr:"Teklif etmek, Sunmak",pos:"verb/noun",cefr:"A2",note:"Öneri sunmak"},participate:{tr:"Katılmak",pos:"verb",cefr:"B1",note:"Yer almak"},prefer:{tr:"Tercih etmek",pos:"verb",cefr:"A2",note:"Yeğlemek"},prepare:{tr:"Hazırlamak, Hazırlanmak",pos:"verb",cefr:"A2",note:"Önceden hazır etmek"},prevent:{tr:"Önlemek, Engel olmak",pos:"verb",cefr:"B1",note:"Oluşmasını engellemek"},provide:{tr:"Sağlamak, Temin etmek",pos:"verb",cefr:"B1",note:"Sunmak"},receive:{tr:"Almak, Kabul etmek",pos:"verb",cefr:"A2",note:"Gelen şeyi almak"},recommend:{tr:"Tavsiye etmek, Önermek",pos:"verb",cefr:"A2",note:"Öneri vermek"},refuse:{tr:"Reddetmek",pos:"verb",cefr:"B1",note:"Kabul etmemek"},remind:{tr:"Hatırlatmak",pos:"verb",cefr:"A2",note:"Aklına getirmek"},remember:{tr:"Hatırlamak",pos:"verb",cefr:"A1",note:"Unutmamak"},require:{tr:"Gerektirmek, İstemek",pos:"verb",cefr:"B1",note:"Gerekli kılmak"},suggest:{tr:"Önermek, Telkin etmek",pos:"verb",cefr:"B1",note:"Fikir vermek"},support:{tr:"Desteklemek",pos:"verb/noun",cefr:"A2",note:"Yardımcı olmak"},understand:{tr:"Anlamak",pos:"verb",cefr:"A1",note:"Kavramak"},understood:{tr:"Anladı",pos:"verb",cefr:"A1",note:"Understand geçmiş hali"},important:{tr:"Önemli",pos:"adj",cefr:"A1",note:"Büyük değer taşıyan"},necessary:{tr:"Gerekli, Zorunlu",pos:"adj",cefr:"A2",note:"Olmazsa olmaz"},difficult:{tr:"Zor, Güç",pos:"adj",cefr:"A1",note:"Kolay olmayan"},easy:{tr:"Kolay, Basit",pos:"adj",cefr:"A1",note:"Zor olmayan"},possible:{tr:"Mümkün, Olası",pos:"adj",cefr:"A2",note:"Gerçekleşebilir"},impossible:{tr:"İmkansız",pos:"adj",cefr:"A2",note:"Olamaz"},available:{tr:"Mevcut, Müsait",pos:"adj",cefr:"A2",note:"Kullanıma hazır"},similar:{tr:"Benzer",pos:"adj",cefr:"A2",note:"Benzeşen"},different:{tr:"Farklı",pos:"adj",cefr:"A1",note:"Aynı olmayan"},frequent:{tr:"Sık, Sıkça olan",pos:"adj",cefr:"B1",note:"Sık tekrarlanan"},rare:{tr:"Nadir, Ender",pos:"adj",cefr:"A2",note:"Az bulunan"},careful:{tr:"Dikkatli",pos:"adj",cefr:"A1",note:"Özen gösteren"},careless:{tr:"Dikkatsiz, Özensiz",pos:"adj",cefr:"A2",note:"Hata yapan"},polite:{tr:"Kibar, Nazik",pos:"adj",cefr:"A1",note:"Görgülü"},rude:{tr:"Kaba, Nezaketsiz",pos:"adj",cefr:"A2",note:"Kırıcı"},patient:{tr:"Sabırlı / Hasta",pos:"adj/noun",cefr:"B1",note:"Sabır gösteren veya hastane hastası"},confident:{tr:"Özgüvenli, Kendinden emin",pos:"adj",cefr:"B1",note:"Güveni tam"},anxious:{tr:"Endişeli, Kaygılı",pos:"adj",cefr:"B1",note:"Huzursuz"},fluent:{tr:"Akıcı (konuşma)",pos:"adj",cefr:"B1",note:"Takılmadan konuşabilen"},accurate:{tr:"Doğru, İsabetli",pos:"adj",cefr:"B1",note:"Hatasız"},although:{tr:"-e rağmen, Karşın",pos:"conjunction",cefr:"B1",note:"Zıtlık bağlacı"},though:{tr:"-e rağmen, Yine de",pos:"conjunction/adv",cefr:"B1",note:"Cümle sonunda: gerçi"},"even though":{tr:"-dığı halde, -e rağmen",pos:"conjunction",cefr:"B1",note:"Güçlü zıtlık"},however:{tr:"Ancak, Yine de",pos:"conjunction/adv",cefr:"A2",note:"Zıt fikir bildirir"},therefore:{tr:"Bu nedenle, Dolayısıyla",pos:"adverb",cefr:"B1",note:"Sonuç bildiren bağlaç"},furthermore:{tr:"Ayrıca, Dahası",pos:"adverb",cefr:"B2",note:"Ek bilgi bağlacı"},moreover:{tr:"Dahası, Üstelik",pos:"adverb",cefr:"B2",note:"Pekiştirme bağlacı"},meanwhile:{tr:"Bu sırada, O esnada",pos:"adverb",cefr:"B1",note:"Aynı anda gerçekleşen olaylar"},besides:{tr:"Ayrıca, -den başka",pos:"preposition/adv",cefr:"B1",note:"Bunun yanında"},otherwise:{tr:"Aksi takdirde, Yoksa",pos:"adverb",cefr:"B1",note:"Şartın gerçekleşmemesi durumu"},unless:{tr:"-medikçe, -mazsa",pos:"conjunction",cefr:"B1",note:"If not anlamına gelir"},since:{tr:"-den beri / Çünkü",pos:"preposition/conj",cefr:"A2",note:"Zaman veya sebep belirtir"},while:{tr:"-iken, Sırasında",pos:"conjunction",cefr:"A2",note:"Süreç bildiren bağlaç"},whereas:{tr:"Oysa, Halbuki",pos:"conjunction",cefr:"B2",note:"Karşılaştırmalı zıtlık"},despite:{tr:"-e rağmen",pos:"preposition",cefr:"B1",note:"Kendinden sonra isim/fiil-ing alır"},"in spite of":{tr:"-e rağmen",pos:"preposition",cefr:"B1",note:"Despite ile eşanlamlıdır"},"so that":{tr:"-sın diye, Amacıyla",pos:"conjunction",cefr:"B1",note:"Amaç bildiren bağlaç"},"in order to":{tr:"-mek için",pos:"conjunction",cefr:"B1",note:"Amaç bildirir (+ V1)"},passive:{tr:"Edilgen çatı (Yapıldı)",pos:"grammar",cefr:"B1",note:"Özne değil yapılan iş ön planda"},conditional:{tr:"Şart/Koşul cümlesi (If...)",pos:"grammar",cefr:"B1",note:"Eğer ile başlayan olasılıklar"},inversion:{tr:"Devrik yapı",pos:"grammar",cefr:"B2",note:"Vurgu için yardımcı fiilin başa gelmesi"},modal:{tr:"Kip/Yardımcı fiil (can, must, should)",pos:"grammar",cefr:"A2",note:"Gereklilik/olasılık yardımcı fiilleri"},gerund:{tr:"Fiilimsi (-ing ekiyle isimleşen fiil)",pos:"grammar",cefr:"B1",note:"Swimming is good"},infinitive:{tr:"Mastar hali (to + V1)",pos:"grammar",cefr:"A2",note:"To go, to learn"}};class M{constructor(){this.customCache=new Map,this.floatingEl=null,this.isListeningGlobal=!1,this.activeWord=null,this.lastDblClickTime=0}lookup(e){if(!e)return null;const t=e.trim().toLowerCase().replace(/[.,!?;:"'()\[\]{}]/g,"");if(!t||t.length<2)return null;if(this.customCache.has(t))return this.customCache.get(t);if(S[t]){const s={word:t,...S[t]};return this.customCache.set(t,s),s}const i=k.vocabulary_items||[],n=i.find(s=>s.word&&s.word.toLowerCase()===t);if(n){const s={word:n.word,tr:n.definition_tr||n.definition_en,pos:n.part_of_speech||"kelime",cefr:n.cefr_level||"A1",phonetic:n.phonetic,example:Array.isArray(n.example_sentences)?n.example_sentences[0]:null,note:n.collocations?`Kalıp: ${Array.isArray(n.collocations)?n.collocations.slice(0,3).join(", "):""}`:null};return this.customCache.set(t,s),s}const a=this.generateLemmas(t);for(const s of a){if(S[s]){const o={word:t,baseWord:s,...S[s],note:`Kök: ${s}`};return this.customCache.set(t,o),o}const r=i.find(o=>o.word&&o.word.toLowerCase()===s);if(r){const o={word:t,baseWord:r.word,tr:r.definition_tr||r.definition_en,pos:r.part_of_speech||"kelime",cefr:r.cefr_level||"A1",phonetic:r.phonetic,note:`Kök: ${r.word}`};return this.customCache.set(t,o),o}}return null}generateLemmas(e){const t=[];return e.endsWith("ing")&&e.length>5&&(t.push(e.slice(0,-3)),t.push(e.slice(0,-3)+"e")),e.endsWith("ied")&&e.length>4&&t.push(e.slice(0,-3)+"y"),e.endsWith("ed")&&e.length>4&&(t.push(e.slice(0,-2)),t.push(e.slice(0,-1))),e.endsWith("ies")&&e.length>4&&t.push(e.slice(0,-3)+"y"),e.endsWith("es")&&e.length>4&&(t.push(e.slice(0,-2)),t.push(e.slice(0,-1))),e.endsWith("s")&&!e.endsWith("ss")&&e.length>3&&t.push(e.slice(0,-1)),e.endsWith("ly")&&e.length>4&&t.push(e.slice(0,-2)),t}extractQuestionKeywords(e){if(!e)return[];const t=`${e.question||""} ${(e.options||[]).join(" ")} ${e.topic||""}`,i=t.toLowerCase().replace(/[^a-z\s-]/g," ").split(/\s+/).filter(s=>s.length>3),n=new Map,a=["under the weather","happy birthday","take out","went out","turn-taking","make a mistake","make progress"];for(const s of a)if(t.toLowerCase().includes(s)){const r=this.lookup(s);r&&n.set(s,r)}for(const s of i){if(n.size>=6)break;const r=this.lookup(s);r&&!n.has(r.word)&&n.set(r.word,r)}return Array.from(n.values()).filter(Boolean)}renderQuestionVocabBar(e){const t=this.extractQuestionKeywords(e);return!t||t.length===0?"":`
      <div class="question-vocab-drawer" id="vocab-drawer-${e.id}">
        <button class="vocab-drawer-toggle" type="button" data-drawer-id="vocab-drawer-${e.id}" title="Bu sorudaki bilmeyebileceğiniz kelime ve yapıları inceleyin">
          <div class="drawer-toggle-left">
            <span class="vocab-lightbulb">💡</span>
            <span class="drawer-title">Bu Sorudaki Kelimeler & Yapı Rehberi</span>
            <span class="drawer-count-badge">${t.length} Anlam & İpucu</span>
          </div>
          <span class="drawer-chevron">▼</span>
        </button>

        <div class="vocab-drawer-body" style="display: none;">
          <div class="vocab-hints-grid">
            ${t.map(i=>`
              <div class="vocab-hint-card" data-word="${i.word}">
                <div class="hint-card-top">
                  <div class="hint-word-wrap">
                    <strong class="hint-word">${i.word}</strong>
                    <span class="hint-cefr ${i.cefr||"A1"}">${i.cefr||"A1"}</span>
                  </div>
                  <div class="hint-actions">
                    <button class="hint-action-btn hint-tts" data-word="${i.word}" title="Sesli Dinle">🔊</button>
                    <button class="hint-action-btn hint-save" data-word="${i.word}" data-tr="${i.tr||""}" data-cefr="${i.cefr||"A1"}" title="Kelime Kartlarıma Ekle">⭐ Ekle</button>
                  </div>
                </div>
                <div class="hint-meaning">🇹🇷 ${i.tr}</div>
                ${i.note?`<div class="hint-note">📌 ${i.note}</div>`:""}
              </div>
            `).join("")}
          </div>
          <div class="vocab-hint-footer">
            <span>💡 İpucu: Sorudaki veya şıklardaki herhangi bir kelimenin üzerine çift tıklayarak da anında Türkçe anlamını görebilirsiniz.</span>
          </div>
        </div>
      </div>
    `}bindVocabDrawerEvents(e){e&&(e.querySelectorAll(".vocab-drawer-toggle").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault();const n=t.closest(".question-vocab-drawer"),a=n==null?void 0:n.querySelector(".vocab-drawer-body"),s=n==null?void 0:n.querySelector(".drawer-chevron");if(a){const r=a.style.display!=="none";a.style.display=r?"none":"block",s&&(s.textContent=r?"▼":"▲"),n.classList.toggle("expanded",!r)}})}),e.querySelectorAll(".hint-tts").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const n=t.dataset.word;n&&g.speak(n)})}),e.querySelectorAll(".hint-save").forEach(t=>{t.addEventListener("click",async i=>{i.stopPropagation();const n=t.dataset.word,a=t.dataset.tr,s=t.dataset.cefr;n&&(await p.addCustomWord(n,a,s),t.textContent="✓ Eklendi",t.classList.add("saved"),u.showToast(`"${n}" kelime kartlarınıza eklendi! 📚`,"success"))})}))}getWordAtPoint(e,t){let i=null,n=0;if(document.caretRangeFromPoint){const a=document.caretRangeFromPoint(e,t);a&&(i=a.startContainer,n=a.startOffset)}else if(document.caretPositionFromPoint){const a=document.caretPositionFromPoint(e,t);a&&(i=a.offsetNode,n=a.offset)}if(i&&i.nodeType===Node.TEXT_NODE){const a=i.textContent||"";if(!a)return"";let s=n,r=n;for(;s>0&&/[\w'-]/.test(a[s-1]);)s--;for(;r<a.length&&/[\w'-]/.test(a[r]);)r++;return a.slice(s,r)}return""}async fetchOnlineTranslation(e){var i,n,a;const t=e.toLowerCase().trim();if(!t||t.length<2)return null;try{const s=new AbortController,r=setTimeout(()=>s.abort(),2600),o=await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(t)}&langpair=en|tr`,{signal:s.signal});if(clearTimeout(r),o.ok){const c=await o.json(),m=(i=c==null?void 0:c.responseData)==null?void 0:i.translatedText;if(m&&m.toLowerCase()!==t){const d={word:t,tr:m,pos:"kelime",cefr:"Sözlük",note:"Otomatik Çeviri"};return this.customCache.set(t,d),d}}}catch{}try{const s=new AbortController,r=setTimeout(()=>s.abort(),2e3),o=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURIComponent(t)}`,{signal:s.signal});if(clearTimeout(r),o.ok){const c=await o.json(),m=(a=(n=c==null?void 0:c[0])==null?void 0:n[0])==null?void 0:a[0];if(m&&m.toLowerCase()!==t){const d={word:t,tr:m,pos:"kelime",cefr:"Sözlük",note:"Google Çeviri"};return this.customCache.set(t,d),d}}}catch{}return null}async inspectWord(e,t){if(!e)return;const i=e.toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g,"").trim();if(!i||i.length<2)return;this.activeWord=i;const n=this.lookup(i);if(n){this.showFloatingPopover(n,t);return}const a={word:i,tr:"Anlamı aranıyor... ⏳",pos:"kelime",cefr:"Aranıyor",isLoading:!0};this.showFloatingPopover(a,t);const s=await this.fetchOnlineTranslation(i);this.activeWord===i&&this.floatingEl&&this.floatingEl.style.display!=="none"&&(s?this.updateFloatingPopoverContent(s):this.updateFloatingPopoverContent({word:i,tr:"Anlam bulunamadı (Çevrimdışı)",pos:"kelime",cefr:"Genel",note:"Sesli telaffuzunu dinleyebilir veya kartlarınıza ekleyebilirsiniz."}))}initGlobalListener(){if(this.isListeningGlobal)return;this.isListeningGlobal=!0;let e=document.getElementById("floating-word-inspector");e||(e=document.createElement("div"),e.id="floating-word-inspector",e.className="floating-word-inspector",e.style.display="none",document.body.appendChild(e)),this.floatingEl=e,document.addEventListener("dblclick",t=>{if(this.floatingEl&&this.floatingEl.contains(t.target))return;this.lastDblClickTime=Date.now();let i="";const n=window.getSelection();n&&n.toString().trim()&&(i=n.toString().trim()),i||(i=this.getWordAtPoint(t.clientX,t.clientY)),i&&this.inspectWord(i,{x:t.pageX,y:t.pageY,clientX:t.clientX,clientY:t.clientY})},!0),document.addEventListener("mouseup",t=>{this.floatingEl&&this.floatingEl.contains(t.target)||Date.now()-this.lastDblClickTime<400||setTimeout(()=>{const i=window.getSelection(),n=i?i.toString().trim():"";n&&n.length>=2&&n.length<=45&&n.includes(" ")&&this.inspectWord(n,{x:t.pageX,y:t.pageY,clientX:t.clientX,clientY:t.clientY})},80)}),document.addEventListener("mousedown",t=>{this.floatingEl&&this.floatingEl.style.display!=="none"&&(this.floatingEl.contains(t.target)||Date.now()-this.lastDblClickTime>250&&this.hideFloatingPopover())}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.hideFloatingPopover()})}showFloatingPopover(e,t={}){if(!this.floatingEl)return;this.renderPopoverHtml(e);const i=310,n=140;let a=t.x!==void 0?t.x:window.innerWidth/2,s=t.y!==void 0?t.y:window.innerHeight/2,r=a-i/2;r=Math.max(12,Math.min(window.innerWidth-i-12,r));let o=s-n-20;o<window.scrollY+10&&(o=s+25),this.floatingEl.style.top=`${Math.max(10,o)}px`,this.floatingEl.style.left=`${r}px`,this.floatingEl.style.display="block",this.bindPopoverButtons(e)}updateFloatingPopoverContent(e){this.floatingEl&&(this.renderPopoverHtml(e),this.bindPopoverButtons(e))}renderPopoverHtml(e){const t=e.isLoading;this.floatingEl.innerHTML=`
      <div class="inspector-popover-content">
        <div class="popover-header">
          <div class="popover-word-title">
            <strong>${e.word}</strong>
            <span class="popover-cefr ${e.cefr||"A1"}">${e.cefr||"A1"}</span>
          </div>
          <button class="popover-close-btn" id="popover-close" title="Kapat">✕</button>
        </div>
        <div class="popover-meaning ${t?"loading-pulse":""}">🇹🇷 ${e.tr}</div>
        ${e.note?`<div class="popover-note">${e.note}</div>`:""}
        <div class="popover-actions">
          <button class="popover-btn popover-listen" id="popover-listen" title="Doğal telaffuzu dinle">🔊 Dinle</button>
          <button class="popover-btn popover-add" id="popover-add" title="Öğrenme kartlarıma ekle">⭐ Kelimelerime Ekle</button>
        </div>
      </div>
    `}bindPopoverButtons(e){var t,i,n;(t=document.getElementById("popover-close"))==null||t.addEventListener("click",a=>{a.stopPropagation(),this.hideFloatingPopover()}),(i=document.getElementById("popover-listen"))==null||i.addEventListener("click",a=>{a.stopPropagation(),g.speak(e.word)}),(n=document.getElementById("popover-add"))==null||n.addEventListener("click",async a=>{a.stopPropagation(),await p.addCustomWord(e.word,e.tr,e.cefr||"A1"),u.showToast(`"${e.word}" kelime kartlarınıza kaydedildi! 📚`,"success");const s=document.getElementById("popover-add");s&&(s.textContent="✓ Kaydedildi",s.style.background="rgba(16, 185, 129, 0.3)",s.style.color="#34d399")})}hideFloatingPopover(){this.floatingEl&&(this.floatingEl.style.display="none",this.activeWord=null)}}const A=new M;class P{constructor(){this.container=null,this.assessmentId=null,this.skills=["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],this.skillNamesTr={grammar:"Dilbilgisi (Grammar)",vocabulary:"Kelime Haznesi (Vocabulary)",reading:"Okuma & Anlama (Reading)",listening:"Dinleme & Algılama (Listening)",writing:"Yazma Becerisi (Writing)",speaking:"Konuşma & Akıcılık (Speaking)",pronunciation:"Telaffuz & Aksan (Pronunciation)",sentence_formation:"Cümle Kurma (Syntax)",comprehension:"Kavrama Hızı (Comprehension)",communication:"Doğal İletişim (Communication)"},this.currentSkillIndex=0,this.currentQuestions=[],this.currentQuestionIndex=0,this.selectedOption=null,this.assessmentResults=null}async render(e){this.container=e,this.renderIntro()}renderIntro(){var e,t;this.container.innerHTML=`
      <div class="assessment-intro-wrapper">
        <div class="card assessment-intro-card">
          <div class="assessment-badge-pill">CEFR Seviye Belirleme & Teşhis</div>
          <h1 class="assessment-title">10 Becerili Kapsamlı Seviye Sınavı</h1>
          <p class="assessment-desc">
            Bu değerlendirme; sadece çoktan seçmeli ezber testi değil, İngilizceyi anlama ve üretme kapasitenizi 10 temel boyutta analiz eder:
          </p>
          <div class="skills-preview-grid">
            <div class="skill-tag-pill">📖 Dilbilgisi</div>
            <div class="skill-tag-pill">📚 Kelime</div>
            <div class="skill-tag-pill">📰 Okuma</div>
            <div class="skill-tag-pill">🎧 Dinleme</div>
            <div class="skill-tag-pill">✍️ Yazma</div>
            <div class="skill-tag-pill">🗣️ Konuşma</div>
            <div class="skill-tag-pill">🎙️ Telaffuz</div>
            <div class="skill-tag-pill">🧩 Cümle Kurma</div>
            <div class="skill-tag-pill">💡 Kavrama</div>
            <div class="skill-tag-pill">🤝 Doğal İletişim</div>
          </div>
          <div class="assessment-notice">
            <span class="notice-icon">💡</span>
            <span>Yaklaşık 5-10 dakika sürer. İsterseniz sınava girebilir, isterseniz doğrudan A1 (Sıfırdan) başlayabilirsiniz.</span>
          </div>
          <div class="assessment-actions-row">
            <button class="btn btn-primary btn-lg" id="start-assessment-btn">
              🎯 Sınava Başla (5-10 Dk) →
            </button>
            <button class="btn btn-secondary btn-lg" id="skip-assessment-btn">
              🚀 Sınavı Atla, Doğrudan 0'dan (A1) Başla
            </button>
          </div>
        </div>
      </div>
    `,(e=document.getElementById("start-assessment-btn"))==null||e.addEventListener("click",()=>this.startAssessment()),(t=document.getElementById("skip-assessment-btn"))==null||t.addEventListener("click",async()=>{await p.skipAssessmentToA1(),u.showToast("Başlangıç seviyeniz A1 olarak ayarlandı. 0'dan eğitime hazırsınız! 🚀","success"),u.setView("dashboard")})}async startAssessment(){this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Seviye belirleme sınav motoru başlatılıyor...</p>
      </div>
    `;try{const e=await p.startAssessment();this.assessmentId=e.assessmentId,this.currentSkillIndex=0,await this.loadSkillQuestions()}catch(e){u.showToast("Sınav başlatılamadı: "+e.message,"error"),this.renderIntro()}}async loadSkillQuestions(){const e=this.skills[this.currentSkillIndex],t=this.skillNamesTr[e]||e;this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>${t} soruları hazırlanıyor...</p>
      </div>
    `;try{const i=await p.getAssessmentQuestions(this.assessmentId,e);this.currentQuestions=i.questions||[],this.currentQuestionIndex=0,this.currentQuestions.length===0?this.nextSkill():this.renderQuestion()}catch(i){u.showToast("Hata: "+i.message,"error"),this.nextSkill()}}renderQuestion(){const e=this.skills[this.currentSkillIndex],t=this.skillNamesTr[e]||e,i=this.currentQuestions[this.currentQuestionIndex];this.selectedOption=null;const n=Math.round((this.currentSkillIndex*Math.max(this.currentQuestions.length,1)+this.currentQuestionIndex)/(this.skills.length*3)*100);this.container.innerHTML=`
      <div class="question-container">
        <!-- Header Progress -->
        <div class="assessment-topbar">
          <div class="assessment-skill-indicator">
            <span class="skill-name-badge">${t}</span>
            <span class="skill-step">Beceri: ${this.currentSkillIndex+1} / ${this.skills.length}</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: ${Math.min(n,100)}%;"></div>
          </div>
          <span class="progress-pct">%${Math.min(n,100)}</span>
        </div>

        <!-- Question Card -->
        <div class="card question-card">
          <div class="question-meta">
            <span class="cefr-tag ${i.cefrLevel||"A1"}">${i.cefrLevel||"A1"}</span>
            <span class="question-topic">${i.topic||"Temel"}</span>
            <button class="btn btn-secondary btn-sm tts-btn" id="listen-question-btn" title="Soruyu sesli dinle">
              🔊 Sesli Oku
            </button>
          </div>

          <div class="question-instruction">
            <span>Aşağıdaki soruyu okuyun ve en doğru seçeneği işaretleyin:</span>
          </div>

          <div class="question-stem" id="question-text">
            ${i.question}
          </div>

          <!-- Instant Question Vocabulary & Structure Hints Drawer -->
          ${A.renderQuestionVocabBar(i)}

          <div class="question-options-list">
            ${(i.options||[]).map((a,s)=>{const r=(a||"").toString().replace(/^["']|["']$/g,"");return`
                <div class="option-item" role="button" tabindex="0" data-index="${s}">
                  <span class="option-letter">${String.fromCharCode(65+s)}</span>
                  <span class="option-label">${r}</span>
                </div>
              `}).join("")}
          </div>

          <div class="question-footer">
            <button class="btn btn-primary btn-lg" id="submit-answer-btn" disabled>
              Cevabı Onayla →
            </button>
          </div>
        </div>

        <!-- Feedback Card (Initially Hidden) -->
        <div class="card feedback-card" id="feedback-card" style="display: none;"></div>
      </div>
    `,this.bindQuestionEvents(i)}bindQuestionEvents(e){var t,i;(t=document.getElementById("listen-question-btn"))==null||t.addEventListener("click",()=>{g.speak(e.question,{rate:.9})}),A.bindVocabDrawerEvents(this.container),document.querySelectorAll(".option-item").forEach(n=>{const a=()=>{document.querySelectorAll(".option-item").forEach(o=>o.classList.remove("selected")),n.classList.add("selected");const s=parseInt(n.dataset.index,10);this.selectedOption=(e.options||[])[s];const r=document.getElementById("submit-answer-btn");r&&(r.disabled=!1)};n.addEventListener("click",a),n.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),a())})}),(i=document.getElementById("submit-answer-btn"))==null||i.addEventListener("click",()=>{this.selectedOption!==null&&this.selectedOption!==void 0&&this.submitAnswer(e.id,this.selectedOption)})}async submitAnswer(e,t){const i=document.getElementById("submit-answer-btn");i&&(i.disabled=!0,i.textContent="Kontrol ediliyor...");try{const n=await p.submitAssessmentAnswer(this.assessmentId,e,t);this.showQuestionFeedback(n)}catch(n){u.showToast("Cevap kaydedilemedi: "+n.message,"error"),i&&(i.disabled=!1,i.textContent="Cevabı Onayla →")}}showQuestionFeedback(e){var a;const t=document.getElementById("feedback-card");if(!t)return;const i=document.getElementById("submit-answer-btn");i&&(i.style.display="none");const n=this.currentSkillIndex===this.skills.length-1&&this.currentQuestionIndex===this.currentQuestions.length-1;t.className=`card feedback-card ${e.isCorrect?"correct":"incorrect"}`,t.innerHTML=`
      <div class="feedback-header">
        <span class="feedback-icon">${e.isCorrect?"✅":"❌"}</span>
        <h3 class="feedback-title">${e.isCorrect?"Doğru Cevap!":"Yanlış Cevap"}</h3>
      </div>
      <div class="feedback-body">
        ${e.isCorrect?"":`<p class="correct-answer-text"><strong>Doğru seçenek:</strong> ${e.correctAnswer}</p>`}
        <p class="explanation-text">${e.explanationTr||e.explanation||""}</p>
      </div>
      <button class="btn btn-primary btn-lg" id="btn-next-question">
        ${n?"🎉 Sınavı Bitir ve Seviyemi Belirle →":"Sonraki Soruya Geç →"}
      </button>
    `,t.style.display="block",t.scrollIntoView({behavior:"smooth",block:"nearest"}),(a=document.getElementById("btn-next-question"))==null||a.addEventListener("click",()=>{this.currentQuestionIndex++,this.currentQuestionIndex<this.currentQuestions.length?this.renderQuestion():this.nextSkill()})}async nextSkill(){this.currentSkillIndex++,this.currentSkillIndex<this.skills.length?await this.loadSkillQuestions():await this.finishAssessment()}async finishAssessment(){this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Seviye karneniz ve öğrenme haritanız hesaplanıyor...</p>
      </div>
    `;try{this.assessmentResults=await p.completeAssessment(this.assessmentId),this.renderResults()}catch(e){u.showToast("Sonuçlar hesaplanırken hata: "+e.message,"error"),this.renderIntro()}}renderResults(){var i;const e=this.assessmentResults,t=e.overallCEFR||"A1";this.container.innerHTML=`
      <div class="assessment-results-wrapper">
        <div class="card results-hero-card">
          <div class="results-badge">Sınav Tamamlandı! 🎉</div>
          <h1 class="results-title">Tebrikler! Seviye Teşhisiniz Belirlendi</h1>
          <p class="results-desc">
            10 temel becerideki yanıtlarınıza göre başlangıç profiliniz oluşturuldu:
          </p>

          <div class="results-cefr-circle">
            <span class="cefr-circle-val">${t}</span>
            <span class="cefr-circle-lbl">BAŞLANGIÇ SEVİYESİ</span>
          </div>

          <div class="results-actions">
            <button class="btn btn-primary btn-lg" id="btn-go-dashboard">
              Öğrenme Yoluma Başla →
            </button>
          </div>
        </div>

        <div class="card results-breakdown-card">
          <h2 class="card-title">📊 10 Beceri Karnesi</h2>
          <div class="results-skills-grid">
            ${Object.entries(e.skills||{}).map(([n,a])=>`
                <div class="result-skill-row">
                  <div class="result-skill-name">${this.skillNamesTr[n]||n}</div>
                  <div class="result-skill-bar">
                    <div class="result-skill-fill" style="width: ${Math.max(a.score,10)}%;"></div>
                  </div>
                  <span class="cefr-tag ${a.level||"A1"}">${a.level||"A1"}</span>
                </div>
              `).join("")}
          </div>
        </div>
      </div>
    `,(i=document.getElementById("btn-go-dashboard"))==null||i.addEventListener("click",()=>{u.setView("dashboard")})}}class H{constructor(){this.container=null,this.topics=[],this.selectedTopic=null,this.activeCategory="all",this.currentExerciseIndex=0,this.exercises=[],this.selectedOption=null,this.categoryLabelsTr={all:"Tüm Konular",tenses:"Zamanlar",modals:"Kipler (Modals)",clauses:"Yan Cümleler",determiners:"Belirteçler",prepositions:"Edatlar",sentence_structure:"Cümle Yapısı"}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Gramer Akademisi müfredatı yükleniyor...</p>
      </div>
    `;try{const t=await p.getGrammarTopics();this.topics=Array.isArray(t)?t:t.topics||[],this.topics.length>0&&!this.selectedTopic?await this.loadTopic(this.topics[0].slug):this.renderLayout()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Gramer konuları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadTopic(e){try{const t=await p.getGrammarTopic(e);this.selectedTopic=t.topic,this.exercises=t.exercises||[],this.currentExerciseIndex=0,this.selectedOption=null,this.renderLayout()}catch(t){u.showToast("Konu detayları yüklenemedi: "+t.message,"error")}}renderLayout(){const e=this.selectedTopic,t=e&&e.examples?typeof e.examples=="string"?JSON.parse(e.examples):e.examples:[],i=e&&e.rules?typeof e.rules=="string"?JSON.parse(e.rules):e.rules:[],n=e&&e.common_mistakes?typeof e.common_mistakes=="string"?JSON.parse(e.common_mistakes):e.common_mistakes:[],a=["all","tenses","modals","clauses","determiners","prepositions","sentence_structure"],s=this.activeCategory==="all"?this.topics:this.topics.filter(r=>r.category===this.activeCategory);this.container.innerHTML=`
      <div class="grammar-layout">
        <!-- Sidebar: Topics List -->
        <aside class="grammar-sidebar card">
          <div class="grammar-sidebar-header">
            <h3>Gramer Müfredatı</h3>
            <span class="topic-count">${this.topics.length} Konu</span>
          </div>

          <!-- Category filter tabs -->
          <div class="category-tabs">
            ${a.map(r=>`
              <button class="cat-tab ${this.activeCategory===r?"active":""}" data-cat="${r}">
                ${this.categoryLabelsTr[r]||r}
              </button>
            `).join("")}
          </div>

          <div class="topics-list">
            ${s.map(r=>`
              <div class="topic-nav-item ${e&&e.id===r.id?"active":""}" data-slug="${r.slug}">
                <div class="topic-nav-left">
                  <span class="cefr-tag ${r.cefr_level||"A1"}">${r.cefr_level||"A1"}</span>
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
                <span class="cefr-tag ${e.cefr_level||"A1"}">${e.cefr_level||"A1"}</span>
                <span class="topic-category-badge">${(e.category||"").toUpperCase()}</span>
              </div>
              <h1 class="topic-title">${e.name}</h1>
              <p class="topic-description">${e.description||""}</p>

              <!-- Linguistic & Comparative Explanations -->
              <div class="explanation-grid">
                <div class="explanation-col english-col">
                  <h4>🇬🇧 İngilizce Kural</h4>
                  <p>${e.explanation_en||""}</p>
                </div>
                <div class="explanation-col turkish-col">
                  <h4>🇹🇷 Türkçe Mantık & Karşılaştırma</h4>
                  <p>${e.explanation_tr||""}</p>
                </div>
              </div>
            </div>

            <!-- Rules & Formulas -->
            <div class="card topic-rules-card">
              <h3 class="section-title">📐 Temel Formül ve Kurallar</h3>
              <ul class="rules-list">
                ${i.map(r=>`<li>${r}</li>`).join("")}
              </ul>
            </div>

            <!-- Contextual Examples with TTS -->
            <div class="card topic-examples-card">
              <div class="card-header">
                <h3 class="card-title">💬 Günlük Hayattan Örnek Cümleler</h3>
                <span class="card-subtitle">Cümleyi dinlemek için hoparlör simgesine tıklayın</span>
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
            ${n.length>0?`
              <div class="card topic-mistakes-card">
                <h3 class="section-title">⚠️ Sık Yapılan Hatalar & Türkçeden Kaynaklanan Yanılgılar</h3>
                <div class="mistakes-grid">
                  ${n.map(r=>`
                    <div class="mistake-item">
                      <div class="mistake-wrong">❌ Yanlış: ${r.wrong}</div>
                      <div class="mistake-correct">✅ Doğru: ${r.correct}</div>
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
                  <h3 class="card-title">✏️ Alıştırma ve Pekiştirme</h3>
                  <div class="card-subtitle">Bu gramer yapısını pratik yaparak pekiştirin</div>
                </div>
                <span class="exercise-progress">
                  ${this.exercises.length>0?`Alıştırma ${this.currentExerciseIndex+1} / ${this.exercises.length}`:"Alıştırma bulunamadı"}
                </span>
              </div>

              ${this.exercises.length>0?this.renderExerciseSandbox():"<p>Bu konu için henüz alıştırma eklenmemiş.</p>"}
            </div>
          `:`
            <div class="card empty-state">
              <p>Başlamak için sol menüden bir gramer konusu seçin.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}renderExerciseSandbox(){const e=this.exercises[this.currentExerciseIndex];if(!e)return"";const t=e.options?typeof e.options=="string"?JSON.parse(e.options):e.options:null;return`
      <div class="exercise-sandbox">
        <div class="exercise-prompt-wrap">
          <div class="exercise-instruction">Aşağıdaki cümleyi uygun seçenekle tamamlayın:</div>
          <div class="exercise-prompt">${e.prompt}</div>
        </div>

        <!-- Vocabulary & Structure Hints -->
        ${A.renderQuestionVocabBar({question:e.prompt,options:t,id:e.id})}

        ${t?`
          <div class="exercise-options-grid">
            ${t.map((i,n)=>`
              <button class="exercise-opt-btn" data-opt-idx="${n}" data-value="${i}">
                <span class="opt-prefix">${String.fromCharCode(65+n)}</span>
                <span class="opt-text">${i}</span>
              </button>
            `).join("")}
          </div>
        `:`
          <div class="fill-blank-wrap">
            <input type="text" class="form-input exercise-input" id="exercise-input" placeholder="Cevabınızı buraya yazın..." />
          </div>
        `}

        <div class="exercise-actions">
          <button class="btn btn-primary" id="btn-check-exercise" disabled>
            Cevabı Kontrol Et →
          </button>
        </div>

        <div class="exercise-feedback-box" id="exercise-feedback" style="display: none;"></div>
      </div>
    `}bindEvents(){var t;document.querySelectorAll(".topic-nav-item").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.slug;n&&this.loadTopic(n)})}),document.querySelectorAll(".cat-tab").forEach(i=>{i.addEventListener("click",()=>{this.activeCategory=i.dataset.cat,this.renderLayout()})}),document.querySelectorAll(".tts-play-btn").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.text;n&&g.speak(n)})}),A.bindVocabDrawerEvents(this.container),document.querySelectorAll(".exercise-opt-btn").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".exercise-opt-btn").forEach(a=>a.classList.remove("selected")),i.classList.add("selected"),this.selectedOption=i.dataset.value;const n=document.getElementById("btn-check-exercise");n&&(n.disabled=!1)})});const e=document.getElementById("exercise-input");e==null||e.addEventListener("input",i=>{this.selectedOption=i.target.value.trim();const n=document.getElementById("btn-check-exercise");n&&(n.disabled=!this.selectedOption)}),(t=document.getElementById("btn-check-exercise"))==null||t.addEventListener("click",()=>{this.selectedOption&&this.checkExerciseAnswer()})}async checkExerciseAnswer(){var i;const e=this.exercises[this.currentExerciseIndex];if(!e)return;const t=document.getElementById("btn-check-exercise");t&&(t.disabled=!0);try{const n=await p.submitGrammarExercise(e.id,this.selectedOption),a=document.getElementById("exercise-feedback");if(!a)return;a.className=`exercise-feedback-box ${n.isCorrect?"correct":"incorrect"}`,a.innerHTML=`
        <div class="feedback-title">${n.isCorrect?"✅ Harika! Doğru Cevap (+15 XP)":"❌ Yanlış Cevap"}</div>
        <div class="feedback-desc">${n.feedback}</div>
        ${n.explanationTr?`<div class="feedback-tr">${n.explanationTr}</div>`:""}
        ${this.currentExerciseIndex+1<this.exercises.length?`
          <button class="btn btn-primary btn-sm" id="btn-next-exercise" style="margin-top: 10px;">
            Sonraki Alıştırma →
          </button>
        `:`
          <p style="margin-top: 10px; color: #a5b4fc; font-weight: 600;">🎉 Bu konudaki tüm alıştırmaları tamamladınız!</p>
        `}
      `,a.style.display="block",(i=document.getElementById("btn-next-exercise"))==null||i.addEventListener("click",()=>{this.currentExerciseIndex++,this.selectedOption=null;const s=document.querySelector(".topic-sandbox-card");s&&(s.innerHTML=`
            <div class="card-header">
              <div>
                <h3 class="card-title">✏️ Alıştırma ve Pekiştirme</h3>
                <div class="card-subtitle">Bu gramer yapısını pratik yaparak pekiştirin</div>
              </div>
              <span class="exercise-progress">Alıştırma ${this.currentExerciseIndex+1} / ${this.exercises.length}</span>
            </div>
            ${this.renderExerciseSandbox()}
          `,this.bindEvents())})}catch(n){u.showToast("Cevap kontrol edilemedi: "+n.message,"error"),t&&(t.disabled=!1)}}}class W{constructor(){this.container=null,this.mode="review",this.reviewItems=[],this.currentIndex=0,this.isCardFlipped=!1,this.dictionaryItems=[],this.searchQuery="",this.levelFilter="all"}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Aralıklı tekrar kelime kuyruğunuz yükleniyor...</p>
      </div>
    `;try{const t=await p.getReviewQueue();this.reviewItems=t.items||[],this.currentIndex=0,this.isCardFlipped=!1;const i=await p.getVocabularyItems();this.dictionaryItems=i.items||[],this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Kelimeler yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){this.container.innerHTML=`
      <div class="vocab-layout">
        <!-- Mode Switcher & Stats Header -->
        <div class="vocab-header card">
          <div class="vocab-header-left">
            <h1 class="vocab-title">Akıllı Kelime Kartları (SRS)</h1>
            <p class="vocab-subtitle">Unutma eğrisini kıran SM-2 hafıza algoritması ile kalıcı kelime öğrenimi</p>
          </div>
          <div class="vocab-mode-toggles">
            <button class="btn ${this.mode==="review"?"btn-primary":"btn-secondary"}" id="toggle-review-mode">
              <span>🗂️ Tekrar Bekleyenler</span>
              <span class="btn-badge">${this.reviewItems.length}</span>
            </button>
            <button class="btn ${this.mode==="dictionary"?"btn-primary":"btn-secondary"}" id="toggle-dict-mode">
              <span>📖 Tüm Kelime Sözlüğü</span>
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
          <h2>Tebrikler! Tekrar Kuyruğu Temizlendi</h2>
          <p>Şu anda tekrar etmeniz gereken kelime bulunmuyor. Algoritma kelimeleri hafızanıza en uygun zamanda tekrar getirecektir.</p>
          <button class="btn btn-primary" id="switch-to-dict-btn">Tüm Kelime Sözlüğünü İncele →</button>
        </div>
      `;const e=this.reviewItems[this.currentIndex];if(!e)return`
        <div class="card empty-review-card">
          <div class="empty-icon">✅</div>
          <h2>Oturum Tamamlandı!</h2>
          <p>Harika odaklanma! Bu oturumdaki tüm kelime kartlarını gözden geçirdiniz.</p>
          <button class="btn btn-primary" id="refresh-queue-btn">Kelimeleri Yenile</button>
        </div>
      `;const t=e.examples?typeof e.examples=="string"?JSON.parse(e.examples):e.examples:[],i=e.collocations?typeof e.collocations=="string"?JSON.parse(e.collocations):e.collocations:[];return`
      <div class="flashcard-container">
        <!-- Progress Counter -->
        <div class="flashcard-counter">
          <span>Kelime ${this.currentIndex+1} / ${this.reviewItems.length}</span>
          <span class="cefr-tag ${e.cefr_level||"A1"}">${e.cefr_level||"A1"}</span>
        </div>

        <!-- 3D Flippable Flashcard -->
        <div class="flashcard ${this.isCardFlipped?"flipped":""}" id="flashcard-element">
          <!-- FRONT FACE -->
          <div class="flashcard-face flashcard-front">
            <div class="card-meta">
              <span class="pos-badge">${e.part_of_speech||"kelime"}</span>
              <button class="tts-play-btn" id="card-tts-btn" title="Telaffuzu dinle">🔊 Dinle</button>
            </div>

            <div class="target-word">${e.word}</div>
            <div class="phonetic-ipa">${e.phonetic||""}</div>
            
            <div class="card-prompt-hint">Karta tıklayarak veya Boşluk tuşuna basarak Türkçe anlamını görün 🔄</div>
          </div>

          <!-- BACK FACE -->
          <div class="flashcard-face flashcard-back">
            <div class="card-meta">
              <span class="pos-badge">${e.part_of_speech||"kelime"}</span>
              <button class="tts-play-btn" id="card-back-tts-btn" title="Tekrar dinle">🔊 Dinle</button>
            </div>

            <div class="target-word">${e.word}</div>
            <div class="phonetic-ipa">${e.phonetic||""}</div>

            <div class="def-box">
              <div class="def-tr"><strong>🇹🇷 Türkçe Anlamı:</strong> ${e.definition_tr||e.definition||""}</div>
              ${e.definition_en?`<div class="def-en"><strong>İngilizce Açıklama:</strong> ${e.definition_en}</div>`:""}
            </div>

            ${i.length>0?`
              <div class="collocations-box">
                <span class="box-label">Sık Kullanılan Birliktelikler (Collocations):</span>
                <div class="collocation-tags">
                  ${i.slice(0,5).map(n=>`<span class="colloc-tag">${n}</span>`).join("")}
                </div>
              </div>
            `:""}

            ${t.length>0?`
              <div class="example-box">
                <span class="box-label">Örnek Cümle:</span>
                <div class="example-sentence">"${t[0]}"</div>
              </div>
            `:""}
          </div>
        </div>

        <!-- Card flip helper button -->
        <button class="btn btn-secondary btn-sm" id="btn-manual-flip" style="margin: 0 auto; display: block;">
          🔄 ${this.isCardFlipped?"Kartın Önünü Gör":"Kartı Çevir (Anlamı Gör)"}
        </button>

        <!-- Rating Buttons (Only visible when card is flipped) -->
        <div class="rating-bar" id="rating-bar" style="visibility: ${this.isCardFlipped?"visible":"hidden"};">
          <div class="rating-prompt">Bu kelimeyi ne kadar iyi hatırladınız?</div>
          <div class="rating-buttons-group">
            <button class="rating-btn again" data-rating="0">
              <span class="rating-title">🔄 Tekrar Et</span>
              <span class="rating-interval">&lt; 1 gün</span>
            </button>
            <button class="rating-btn hard" data-rating="1">
              <span class="rating-title">⚠️ Zorlandım</span>
              <span class="rating-interval">1-2 gün</span>
            </button>
            <button class="rating-btn good" data-rating="2">
              <span class="rating-title">👍 İyi Hatırladım</span>
              <span class="rating-interval">3-4 gün</span>
            </button>
            <button class="rating-btn easy" data-rating="3">
              <span class="rating-title">🌟 Çok Kolaydı</span>
              <span class="rating-interval">7+ gün</span>
            </button>
          </div>
        </div>
      </div>
    `}renderDictionaryArea(){const e=["all","A1","A2","B1","B2","C1"],t=this.dictionaryItems.filter(i=>{const n=!this.searchQuery||i.word.toLowerCase().includes(this.searchQuery.toLowerCase())||i.definition_tr&&i.definition_tr.toLowerCase().includes(this.searchQuery.toLowerCase()),a=this.levelFilter==="all"||i.cefr_level===this.levelFilter;return n&&a});return`
      <div class="dict-container card">
        <div class="dict-toolbar">
          <input type="text" class="dict-search-input" id="dict-search-input" placeholder="İngilizce kelime veya Türkçe anlam ara..." value="${this.searchQuery}">
          
          <div class="level-filter-tabs">
            ${e.map(i=>`
              <button class="level-tab ${this.levelFilter===i?"active":""}" data-level="${i}">${i==="all"?"Tümü":i}</button>
            `).join("")}
          </div>
        </div>

        <div class="dict-table-wrap">
          <table class="dict-table">
            <thead>
              <tr>
                <th>Kelime</th>
                <th>Seviye</th>
                <th>Okunuş (IPA)</th>
                <th>Türkçe Anlamı</th>
                <th>İngilizce Tanım</th>
                <th>Ses</th>
              </tr>
            </thead>
            <tbody>
              ${t.map(i=>`
                <tr>
                  <td class="dict-word-cell">
                    <strong>${i.word}</strong>
                    <span class="dict-pos">${i.part_of_speech||""}</span>
                  </td>
                  <td><span class="cefr-tag ${i.cefr_level||"A1"}">${i.cefr_level||"A1"}</span></td>
                  <td class="dict-phonetic">${i.phonetic||"-"}</td>
                  <td class="dict-def-tr"><strong>${i.definition_tr||"-"}</strong></td>
                  <td class="dict-def-en">${i.definition_en||"-"}</td>
                  <td>
                    <button class="tts-play-btn dict-tts" data-text="${i.word}">🔊</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}bindEvents(){var i,n,a,s,r,o,c;(i=document.getElementById("toggle-review-mode"))==null||i.addEventListener("click",()=>{this.mode="review",this.renderContent()}),(n=document.getElementById("toggle-dict-mode"))==null||n.addEventListener("click",()=>{this.mode="dictionary",this.renderContent()}),(a=document.getElementById("switch-to-dict-btn"))==null||a.addEventListener("click",()=>{this.mode="dictionary",this.renderContent()}),(s=document.getElementById("refresh-queue-btn"))==null||s.addEventListener("click",()=>{this.render(this.container)});const e=document.getElementById("flashcard-element");e==null||e.addEventListener("click",()=>this.toggleFlip()),(r=document.getElementById("btn-manual-flip"))==null||r.addEventListener("click",()=>this.toggleFlip()),(o=document.getElementById("card-tts-btn"))==null||o.addEventListener("click",m=>{m.stopPropagation();const d=this.reviewItems[this.currentIndex];d&&g.speak(d.word)}),(c=document.getElementById("card-back-tts-btn"))==null||c.addEventListener("click",m=>{m.stopPropagation();const d=this.reviewItems[this.currentIndex];d&&g.speak(d.word)}),document.querySelectorAll(".rating-btn").forEach(m=>{m.addEventListener("click",d=>{d.stopPropagation();const h=parseInt(m.dataset.rating,10);this.submitRating(h)})});const t=document.getElementById("dict-search-input");t==null||t.addEventListener("input",m=>{this.searchQuery=m.target.value;const d=document.getElementById("vocab-body");d&&(d.innerHTML=this.renderDictionaryArea()),this.bindEvents()}),document.querySelectorAll(".level-tab").forEach(m=>{m.addEventListener("click",()=>{this.levelFilter=m.dataset.level;const d=document.getElementById("vocab-body");d&&(d.innerHTML=this.renderDictionaryArea()),this.bindEvents()})}),document.querySelectorAll(".dict-tts").forEach(m=>{m.addEventListener("click",()=>{const d=m.dataset.text;d&&g.speak(d)})})}toggleFlip(){this.isCardFlipped=!this.isCardFlipped;const e=document.getElementById("flashcard-element"),t=document.getElementById("rating-bar"),i=document.getElementById("btn-manual-flip");if(e&&e.classList.toggle("flipped",this.isCardFlipped),t&&(t.style.visibility=this.isCardFlipped?"visible":"hidden"),i&&(i.textContent=this.isCardFlipped?"🔄 Kartın Önünü Gör":"🔄 Kartı Çevir (Anlamı Gör)"),this.isCardFlipped){const n=this.reviewItems[this.currentIndex];n&&g.speak(n.word)}}async submitRating(e){const t=this.reviewItems[this.currentIndex];if(t)try{await p.submitReview(t.id,e),this.isCardFlipped=!1,this.currentIndex++;const i=document.getElementById("vocab-body");i&&(i.innerHTML=this.renderReviewArea()),this.bindEvents()}catch(i){u.showToast("Değerlendirme kaydedilemedi: "+i.message,"error")}}}class O{constructor(){this.container=null,this.materials=[],this.selectedMaterial=null,this.readingStartTime=Date.now(),this.userAnswers={},this.submissionResult=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Okuma metinleri yükleniyor...</p>
      </div>
    `;try{const t=await p.getReadingMaterials();this.materials=Array.isArray(t)?t:t.materials||[],this.materials.length>0&&!this.selectedMaterial?await this.loadMaterial(this.materials[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Metinler yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadMaterial(e){try{const t=await p.getReadingMaterial(e);this.selectedMaterial=t.material,this.readingStartTime=Date.now(),this.userAnswers={},this.submissionResult=null,this.renderContent()}catch(t){u.showToast("Metin yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedMaterial,t=e&&e.comprehension_questions?typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions:[],i=e&&e.key_vocabulary?typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary:[];this.container.innerHTML=`
      <div class="reading-layout">
        <!-- Sidebar: Library Catalog -->
        <aside class="reading-sidebar card">
          <div class="reading-sidebar-header">
            <h3>Okuma Kütüphanesi</h3>
            <span class="catalog-count">${this.materials.length} Metin</span>
          </div>

          <div class="reading-catalog-list">
            ${this.materials.map(n=>`
              <div class="catalog-item ${e&&e.id===n.id?"active":""}" data-id="${n.id}">
                <div class="catalog-item-top">
                  <span class="cefr-tag ${n.cefr_level||"A1"}">${n.cefr_level||"A1"}</span>
                  <span class="catalog-cat">${(n.category||"").toUpperCase()}</span>
                </div>
                <div class="catalog-title">${n.title}</div>
                <div class="catalog-meta">
                  <span>⏱️ ~${n.estimated_reading_time||2} dk</span>
                  <span>📝 ${n.word_count||120} kelime</span>
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
                  <span class="cefr-tag ${e.cefr_level||"A1"}">${e.cefr_level||"A1"}</span>
                  <span class="topic-category-badge">${e.category}</span>
                  <span class="article-stats-pill">${e.word_count} kelime • ~${e.estimated_reading_time} dk okuma</span>
                </div>
                <h1 class="article-title">${e.title}</h1>
                <div class="article-controls">
                  <button class="btn btn-secondary btn-sm" id="read-aloud-btn">
                    🔊 Sesli Oku (TTS)
                  </button>
                  <button class="btn btn-secondary btn-sm" id="stop-read-btn">
                    ⏹️ Durdur
                  </button>
                </div>
              </div>

              <!-- Article Content with Clickable Words -->
              <div class="article-text-body" id="article-body">
                ${e.content.split(`

`).map(n=>`<p class="article-p">${n}</p>`).join("")}
              </div>

              <!-- Key Vocabulary Pills -->
              ${i.length>0?`
                <div class="key-vocab-section">
                  <h4>Metindeki Temel Kelimeler (Dinlemek için tıklayın):</h4>
                  <div class="vocab-pills-list">
                    ${i.map(n=>`<span class="vocab-pill" data-word="${n}">🔊 ${n}</span>`).join("")}
                  </div>
                </div>
              `:""}
            </article>

            <!-- Comprehension Questions -->
            <section class="card comprehension-card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">🧠 Okuduğunu Anlama Soruları</h3>
                  <div class="card-subtitle">Metni ne kadar iyi anladığınızı test edin</div>
                </div>
              </div>

              <div class="questions-list">
                ${t.map((n,a)=>`
                  <div class="comp-question-item" data-q-idx="${a}">
                    <div class="comp-question-title">${a+1}. ${n.question}</div>
                    <div class="comp-options-list">
                      ${n.options.map((s,r)=>`
                        <button class="comp-opt-btn ${this.userAnswers[a]===s?"selected":""}" data-idx="${a}" data-val="${s}">
                          <span class="opt-prefix">${String.fromCharCode(65+r)}</span>
                          <span class="opt-text">${s}</span>
                        </button>
                      `).join("")}
                    </div>
                  </div>
                `).join("")}
              </div>

              <div class="reading-submit-wrap">
                <button class="btn btn-primary btn-lg" id="submit-reading-btn">
                  Cevapları Kontrol Et →
                </button>
              </div>

              <!-- Results Box -->
              <div class="comp-results-box" id="comp-results-box" style="display: none;"></div>
            </section>
          `:`
            <div class="card empty-state">
              <p>Okumaya başlamak için sol menüden bir metin seçin.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){var e,t,i;this.container.querySelectorAll(".catalog-item").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.id;a&&this.loadMaterial(a)})}),(e=document.getElementById("read-aloud-btn"))==null||e.addEventListener("click",()=>{this.selectedMaterial&&g.speak(this.selectedMaterial.content,{rate:.9})}),(t=document.getElementById("stop-read-btn"))==null||t.addEventListener("click",()=>{g.stop()}),document.querySelectorAll(".vocab-pill").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.word;a&&g.speak(a)})}),document.querySelectorAll(".comp-opt-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.idx,s=n.dataset.val;this.userAnswers[a]=s,n.parentElement.querySelectorAll(".comp-opt-btn").forEach(r=>r.classList.remove("selected")),n.classList.add("selected")})}),(i=document.getElementById("submit-reading-btn"))==null||i.addEventListener("click",()=>{this.submitComprehension()})}async submitComprehension(){const e=Math.round((Date.now()-this.readingStartTime)/1e3),t=document.getElementById("submit-reading-btn");t&&(t.disabled=!0);try{const i=await p.submitReading(this.selectedMaterial.id,this.userAnswers,e),n=document.getElementById("comp-results-box");n&&(n.innerHTML=`
          <div class="results-header">
            <h4>Anlama Skoru: %${i.score}</h4>
            <span>${i.correctCount} / ${i.totalCount} Doğru • Okuma Hızı: ${i.wordsPerMinute} kelime/dk</span>
          </div>
          <div class="details-list">
            ${i.details.map(a=>`
              <div class="result-detail-item ${a.isCorrect?"correct":"incorrect"}">
                <span class="detail-icon">${a.isCorrect?"✅":"❌"}</span>
                <div>
                  <div class="detail-q">${a.question}</div>
                  <div class="detail-ans">Cevabınız: <strong>${a.userAnswer||"(Boş)"}</strong> | Doğru: <strong>${a.correctAnswer}</strong></div>
                </div>
              </div>
            `).join("")}
          </div>
        `,n.style.display="block"),u.showToast(`Okuma tamamlandı! Skorunuz: %${i.score}`,i.score>=70?"success":"info")}catch(i){u.showToast("Sonuçlar kaydedilemedi: "+i.message,"error"),t&&(t.disabled=!1)}}}class j{constructor(){this.container=null,this.materials=[],this.selectedMaterial=null,this.speed=1,this.accent="en-US",this.showTranscript=!1,this.listenCount=0,this.userAnswers={}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Dinleme parçaları yükleniyor...</p>
      </div>
    `;try{const t=await p.getListeningMaterials();this.materials=Array.isArray(t)?t:t.materials||[],this.materials.length>0&&!this.selectedMaterial?await this.loadMaterial(this.materials[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Dinleme parçaları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadMaterial(e){try{const t=await p.getListeningMaterial(e);this.selectedMaterial=t.material,this.speed=this.selectedMaterial.speech_rate==="slow"?.8:1,this.accent=this.selectedMaterial.accent==="british"?"en-GB":"en-US",this.showTranscript=!1,this.listenCount=0,this.userAnswers={},this.renderContent()}catch(t){u.showToast("Parça yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedMaterial,t=e&&e.comprehension_questions?typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions:[];this.container.innerHTML=`
      <div class="listening-layout">
        <!-- Sidebar -->
        <aside class="listening-sidebar card">
          <div class="listening-sidebar-header">
            <h3>Dinleme Parçaları</h3>
            <span class="catalog-count">${this.materials.length} Parça</span>
          </div>

          <div class="tracks-list">
            ${this.materials.map(i=>`
              <div class="track-item ${e&&e.id===i.id?"active":""}" data-id="${i.id}">
                <div class="track-top">
                  <span class="cefr-tag ${i.cefr_level||"A1"}">${i.cefr_level||"A1"}</span>
                  <span class="track-accent">${i.accent==="british"?"🇬🇧 İngiliz":"🇺🇸 Amerikan"}</span>
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
                  <span class="cefr-tag ${e.cefr_level||"A1"}">${e.cefr_level||"A1"}</span>
                  <span class="topic-category-badge">${(e.category||"").toUpperCase()}</span>
                </div>
                <h1 class="track-main-title">${e.title}</h1>
                <p class="track-desc">${e.description||""}</p>
              </div>

              <!-- Interactive Controls -->
              <div class="player-controls-strip">
                <button class="btn btn-primary btn-lg" id="play-audio-btn">
                  ▶️ Parçayı Dinle
                </button>
                <button class="btn btn-secondary btn-lg" id="pause-audio-btn">
                  ⏹️ Durdur
                </button>

                <div class="speed-selector">
                  <span class="control-label">Hız:</span>
                  <button class="speed-btn ${this.speed===.75?"active":""}" data-speed="0.75">0.75x (Yavaş)</button>
                  <button class="speed-btn ${this.speed===1?"active":""}" data-speed="1.0">1.0x (Normal)</button>
                </div>

                <div class="accent-selector">
                  <span class="control-label">Aksan:</span>
                  <button class="accent-btn ${this.accent==="en-US"?"active":""}" data-accent="en-US">🇺🇸 Amerikan</button>
                  <button class="accent-btn ${this.accent==="en-GB"?"active":""}" data-accent="en-GB">🇬🇧 İngiliz</button>
                </div>
              </div>

              <div class="listen-count-indicator">
                Dinleme Sayısı: <strong id="listen-count-val">${this.listenCount}</strong> kez
              </div>

              <!-- Transcript Reveal Toggle -->
              <div class="transcript-box">
                <button class="btn btn-secondary btn-sm" id="toggle-transcript-btn">
                  ${this.showTranscript?"Transkripti Gizle":"👁️ İngilizce Transkripti Göster"}
                </button>
                <div class="transcript-content" id="transcript-content" style="display: ${this.showTranscript?"block":"none"};">
                  <p>${(e.transcript||e.audio_text||"").replace(/\n/g,"<br>")}</p>
                </div>
              </div>
            </section>

            <!-- Comprehension Questions -->
            <section class="card listening-questions-card">
              <div class="card-header">
                <h3 class="card-title">🎧 Dinlediğini Anlama Soruları</h3>
                <span class="card-subtitle">Yalnızca duyduklarınıza dayanarak soruları cevaplayın</span>
              </div>

              <div class="listening-questions-list">
                ${t.map((i,n)=>`
                  <div class="l-question-item">
                    <div class="l-question-title">${n+1}. ${i.question}</div>
                    <div class="l-options-grid">
                      ${i.options.map((a,s)=>`
                        <button class="l-opt-btn ${this.userAnswers[n]===a?"selected":""}" data-q-idx="${n}" data-val="${a}">
                          <span class="opt-prefix">${String.fromCharCode(65+s)}</span>
                          <span class="opt-text">${a}</span>
                        </button>
                      `).join("")}
                    </div>
                  </div>
                `).join("")}
              </div>

              <div class="listening-actions">
                <button class="btn btn-primary btn-lg" id="submit-listening-btn">
                  Cevapları Kontrol Et →
                </button>
              </div>

              <div class="listening-results" id="l-results" style="display: none;"></div>
            </section>
          `:`
            <div class="card empty-state">
              <p>Dinleme alıştırmasına başlamak için sol menüden bir parça seçin.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){var e,t,i,n;this.container.querySelectorAll(".track-item").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.id;s&&this.loadMaterial(s)})}),(e=document.getElementById("play-audio-btn"))==null||e.addEventListener("click",()=>{if(this.selectedMaterial){const a=this.selectedMaterial.audio_text||this.selectedMaterial.transcript||"";this.listenCount++;const s=document.getElementById("listen-count-val");s&&(s.textContent=this.listenCount),g.speak(a,{rate:this.speed,lang:this.accent})}}),(t=document.getElementById("pause-audio-btn"))==null||t.addEventListener("click",()=>{g.stop()}),document.querySelectorAll(".speed-btn").forEach(a=>{a.addEventListener("click",()=>{this.speed=parseFloat(a.dataset.speed),document.querySelectorAll(".speed-btn").forEach(s=>s.classList.remove("active")),a.classList.add("active")})}),document.querySelectorAll(".accent-btn").forEach(a=>{a.addEventListener("click",()=>{this.accent=a.dataset.accent,document.querySelectorAll(".accent-btn").forEach(s=>s.classList.remove("active")),a.classList.add("active")})}),(i=document.getElementById("toggle-transcript-btn"))==null||i.addEventListener("click",()=>{this.showTranscript=!this.showTranscript;const a=document.getElementById("transcript-content"),s=document.getElementById("toggle-transcript-btn");a&&(a.style.display=this.showTranscript?"block":"none"),s&&(s.textContent=this.showTranscript?"Transkripti Gizle":"👁️ İngilizce Transkripti Göster")}),document.querySelectorAll(".l-opt-btn").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.qIdx,r=a.dataset.val;this.userAnswers[s]=r,a.parentElement.querySelectorAll(".l-opt-btn").forEach(o=>o.classList.remove("selected")),a.classList.add("selected")})}),(n=document.getElementById("submit-listening-btn"))==null||n.addEventListener("click",()=>{this.submitListeningAnswers()})}async submitListeningAnswers(){const e=document.getElementById("submit-listening-btn");e&&(e.disabled=!0);try{const t=await p.submitListening(this.selectedMaterial.id,this.userAnswers,this.listenCount),i=document.getElementById("l-results");i&&(i.innerHTML=`
          <div class="results-header">
            <h4>Dinleme Skoru: %${t.score}</h4>
            <span>${t.correctCount} / ${t.totalCount} Doğru • ${t.listenCount} Dinleme</span>
          </div>
          <div class="details-list">
            ${t.details.map(n=>`
              <div class="result-detail-item ${n.isCorrect?"correct":"incorrect"}">
                <span class="detail-icon">${n.isCorrect?"✅":"❌"}</span>
                <div>
                  <div class="detail-q">${n.question}</div>
                  <div class="detail-ans">Cevabınız: <strong>${n.userAnswer||"(Boş)"}</strong> | Doğru: <strong>${n.correctAnswer}</strong></div>
                </div>
              </div>
            `).join("")}
          </div>
        `,i.style.display="block"),u.showToast(`Dinleme testi bitti! Skorunuz: %${t.score}`,t.score>=70?"success":"info")}catch(t){u.showToast("Cevaplar kaydedilemedi: "+t.message,"error"),e&&(e.disabled=!1)}}}class R{constructor(){this.container=null,this.prompts=[],this.selectedPrompt=null,this.writingStartTime=Date.now(),this.evaluation=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Yazma stüdyosu konuları yükleniyor...</p>
      </div>
    `;try{const t=await p.getWritingPrompts();this.prompts=Array.isArray(t)?t:t.prompts||[],this.prompts.length>0&&!this.selectedPrompt&&(this.selectedPrompt=this.prompts[0]),this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Yazma konuları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){const e=this.selectedPrompt;this.container.innerHTML=`
      <div class="writing-layout">
        <!-- Sidebar: Prompts List -->
        <aside class="writing-sidebar card">
          <div class="writing-sidebar-header">
            <h3>Yazma Konuları</h3>
            <span class="catalog-count">${this.prompts.length} Görev</span>
          </div>

          <div class="prompts-list">
            ${this.prompts.map(t=>`
              <div class="prompt-item ${e&&e.id===t.id?"active":""}" data-id="${t.id}">
                <div class="prompt-top">
                  <span class="cefr-tag ${t.cefr_level||"A1"}">${t.cefr_level||"A1"}</span>
                  <span class="prompt-type">${(t.type||"").toUpperCase()}</span>
                </div>
                <div class="prompt-short">${t.prompt.slice(0,65)}...</div>
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
                  <span class="cefr-tag ${e.cefr_level||"A1"}">${e.cefr_level||"A1"}</span>
                  <span class="topic-category-badge">${e.type}</span>
                  <span class="word-limit-badge">Hedef: ${e.word_limit_min||30} - ${e.word_limit_max||100} kelime</span>
                </div>
                <h1 class="prompt-title">${e.prompt}</h1>
                <p class="prompt-instructions">${e.instructions||""}</p>
              </div>

              <!-- Text Editor Area -->
              <div class="editor-wrapper">
                <textarea class="writing-textarea" id="writing-input" placeholder="İngilizce metninizi buraya yazın. Basit ve anlaşılır cümlelerle düşüncelerinizi aktarmaya çalışın..."></textarea>
                
                <div class="editor-stats-bar">
                  <div class="editor-stat-item">
                    <span>Kelime Sayısı:</span>
                    <strong id="word-count-val">0</strong>
                    <span class="stat-target">/ ${e.word_limit_min||30}-${e.word_limit_max||100}</span>
                  </div>
                  <div class="editor-stat-item">
                    <span>Cümle:</span>
                    <strong id="sentence-count-val">0</strong>
                  </div>
                  <div class="editor-stat-item">
                    <span>Ortalama Uzunluk:</span>
                    <strong id="avg-len-val">0 kelime</strong>
                  </div>
                </div>
              </div>

              <div class="writing-actions-strip">
                <button class="btn btn-primary btn-lg" id="submit-writing-btn">
                  Yazımı Analiz Et ve Puanla →
                </button>
              </div>
            </div>

            <!-- Deep Linguistic Evaluation Card (Appears after submission) -->
            <div class="card writing-eval-card" id="writing-eval-card" style="display: none;"></div>
          `:`
            <div class="card empty-state">
              <p>Yazmaya başlamak için sol menüden bir konu seçin.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){var a;this.container.querySelectorAll(".prompt-item").forEach(s=>{s.addEventListener("click",()=>{const r=parseInt(s.dataset.id,10);this.selectedPrompt=this.prompts.find(o=>o.id===r),this.writingStartTime=Date.now(),this.renderContent()})});const e=document.getElementById("writing-input"),t=document.getElementById("word-count-val"),i=document.getElementById("sentence-count-val"),n=document.getElementById("avg-len-val");e==null||e.addEventListener("input",()=>{const s=e.value.trim(),r=s?s.split(/\s+/).filter(Boolean).length:0,o=(s.match(/[^.!?]+[.!?]+/g)||[]).length||(r>0?1:0),c=o>0?(r/o).toFixed(1):0;t&&(t.textContent=r),i&&(i.textContent=o),n&&(n.textContent=`${c} kelime`)}),(a=document.getElementById("submit-writing-btn"))==null||a.addEventListener("click",()=>{this.submitWritingText()})}async submitWritingText(){var i;const e=(i=document.getElementById("writing-input"))==null?void 0:i.value.trim();if(!e||e.split(/\s+/).length<5){u.showToast("Lütfen değerlendirme için en az 5 kelimelik bir metin yazın.","error");return}const t=document.getElementById("submit-writing-btn");t&&(t.disabled=!0,t.textContent="İnceleniyor...");try{const n=await p.submitWriting(this.selectedPrompt.id,e),a=document.getElementById("writing-eval-card");a&&(a.innerHTML=`
          <div class="eval-header">
            <div>
              <h3>Yazma Analiz Sonucu</h3>
              <span class="cefr-tag ${n.cefrLevel}">${n.cefrLevel} Seviyesi</span>
            </div>
            <div class="eval-overall-score">${n.overallScore} <span>/ 100</span></div>
          </div>

          <div class="eval-metrics-grid">
            <div class="eval-metric-box">
              <span class="metric-title">Dilbilgisi Doğruluğu</span>
              <strong class="metric-val">%${n.grammarScore}</strong>
            </div>
            <div class="eval-metric-box">
              <span class="metric-title">Kelime Çeşitliliği</span>
              <strong class="metric-val">%${n.vocabularyScore}</strong>
            </div>
            <div class="eval-metric-box">
              <span class="metric-title">Cümle Yapısı</span>
              <strong class="metric-val">%${n.structureScore}</strong>
            </div>
          </div>

          <div class="eval-feedback-section">
            <h4>Öğretmen Tavsiyeleri & İpuçları:</h4>
            <ul>
              ${n.feedback.map(s=>`<li>${s}</li>`).join("")}
            </ul>
          </div>
        `,a.style.display="block",a.scrollIntoView({behavior:"smooth"})),u.showToast("Yazınız başarıyla değerlendirildi! (+30 XP)","success")}catch(n){u.showToast("Değerlendirme yapılamadı: "+n.message,"error")}finally{t&&(t.disabled=!1,t.textContent="Yazımı Analiz Et ve Puanla →")}}}class K{constructor(){this.container=null,this.scenarios=[],this.selectedScenario=null,this.messages=[],this.isRecording=!1,this.completedObjectives=new Set}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Konuşma senaryoları yükleniyor...</p>
      </div>
    `;try{const t=await p.getSpeakingScenarios();this.scenarios=Array.isArray(t)?t:t.scenarios||[],this.scenarios.length>0&&!this.selectedScenario?await this.loadScenario(this.scenarios[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Konuşma senaryoları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadScenario(e){try{const t=await p.getSpeakingScenario(e);this.selectedScenario=t.scenario,this.completedObjectives=new Set,this.messages=[{sender:"ai",name:this.selectedScenario.ai_role||"Diyalog Partneri",text:this.selectedScenario.starter_message||"Hello! How can I help you today?"}],this.renderContent(),this.selectedScenario.starter_message&&g.speak(this.selectedScenario.starter_message)}catch(t){u.showToast("Senaryo yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedScenario,t=e&&e.key_phrases?typeof e.key_phrases=="string"?JSON.parse(e.key_phrases):e.key_phrases:[],i=e&&e.objectives?typeof e.objectives=="string"?JSON.parse(e.objectives):e.objectives:[];this.container.innerHTML=`
      <div class="speaking-layout">
        <!-- Sidebar: Scenario List -->
        <aside class="speaking-sidebar card">
          <div class="speaking-sidebar-header">
            <h3>Konuşma Senaryoları</h3>
            <span class="catalog-count">${this.scenarios.length} Senaryo</span>
          </div>

          <div class="scenarios-list">
            ${this.scenarios.map(n=>`
              <div class="scenario-item ${e&&e.id===n.id?"active":""}" data-id="${n.id}">
                <div class="scenario-top">
                  <span class="cefr-tag ${n.cefr_level||"A1"}">${n.cefr_level||"A1"}</span>
                  <span class="scenario-cat">${(n.category||"").toUpperCase()}</span>
                </div>
                <div class="scenario-title">${n.title}</div>
              </div>
            `).join("")}
          </div>
        </aside>

        <!-- Main Dialogue Simulator -->
        <div class="speaking-main">
          ${e?`
            <div class="card speaking-header-card">
              <div class="dialogue-meta-strip">
                <span class="cefr-tag ${e.cefr_level||"A1"}">${e.cefr_level||"A1"}</span>
                <span class="dialogue-roles">Rolünüz: <strong>${e.user_role||"Müşteri / Gezgin"}</strong> • Partner: <strong>${e.ai_role||"Görevli"}</strong></span>
              </div>
              <h1 class="dialogue-title">${e.title}</h1>
              <p class="dialogue-description">${e.description||""}</p>

              <!-- Objectives checklist -->
              ${i.length>0?`
                <div class="objectives-strip">
                  <span class="objectives-label">Konuşma Hedefleri:</span>
                  <div class="objectives-tags">
                    ${i.map((n,a)=>`
                      <span class="obj-tag ${this.completedObjectives.has(a)?"completed":""}">
                        ${this.completedObjectives.has(a)?"✓ ":""}${n}
                      </span>
                    `).join("")}
                  </div>
                </div>
              `:""}

              <!-- Useful Phrases -->
              ${t.length>0?`
                <div class="phrases-strip">
                  <span class="phrases-label">Kullanabileceğiniz Örnek Kalıplar (Tıklayarak Dinleyin):</span>
                  <div class="phrases-tags">
                    ${t.map(n=>`<span class="phrase-tag" data-phrase="${n}">🔊 ${n}</span>`).join("")}
                  </div>
                </div>
              `:""}
            </div>

            <!-- Dialogue Chat History Box -->
            <div class="card dialogue-chat-card">
              <div class="dialogue-messages-wrap" id="dialogue-messages">
                ${this.messages.map(n=>`
                  <div class="chat-bubble-row ${n.sender==="user"?"user-row":"ai-row"}">
                    <div class="chat-bubble">
                      <div class="bubble-header">
                        <span class="bubble-name">${n.name}</span>
                        <button class="tts-play-btn bubble-tts" data-text="${n.text}">🔊</button>
                      </div>
                      <div class="bubble-body">${n.text}</div>
                    </div>
                  </div>
                `).join("")}
              </div>

              <!-- Input Bar: Voice / Text -->
              <div class="dialogue-input-bar">
                <button class="btn ${this.isRecording?"btn-danger pulse":"btn-primary"} btn-record" id="btn-record-voice">
                  <span>${this.isRecording?"⏹️ Dinleniyor...":"🎙️ Konuşmaya Başla"}</span>
                </button>

                <input type="text" class="form-input dialogue-input" id="dialogue-text-input" placeholder="Veya İngilizce cevabınızı buraya yazın..." />
                
                <button class="btn btn-secondary" id="btn-send-message">
                  Gönder →
                </button>
              </div>
            </div>
          `:`
            <div class="card empty-state">
              <p>Diyalog alıştırmasına başlamak için sol menüden bir senaryo seçin.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){var t,i;this.container.querySelectorAll(".scenario-item").forEach(n=>{n.addEventListener("click",()=>{const a=parseInt(n.dataset.id,10);this.loadScenario(a)})}),document.querySelectorAll(".phrase-tag").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.phrase;a&&g.speak(a)})}),document.querySelectorAll(".bubble-tts").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.text;a&&g.speak(a)})});const e=document.getElementById("btn-record-voice");e==null||e.addEventListener("click",()=>{this.toggleSpeechRecognition()}),(t=document.getElementById("btn-send-message"))==null||t.addEventListener("click",()=>{this.sendUserMessage()}),(i=document.getElementById("dialogue-text-input"))==null||i.addEventListener("keydown",n=>{n.key==="Enter"&&this.sendUserMessage()})}toggleSpeechRecognition(){if(!g.hasRecognition){u.showToast("Tarayıcınız ses tanımayı desteklemiyor. Lütfen yazarak cevap verin.","error");return}this.isRecording?(g.stopListening(),this.isRecording=!1,this.renderContent()):(this.isRecording=!0,this.renderContent(),g.listen(e=>{this.isRecording=!1;const t=document.getElementById("dialogue-text-input");t&&(t.value=e),this.sendUserMessage(e)},()=>{this.isRecording=!1,this.renderContent()}))}sendUserMessage(e){const t=document.getElementById("dialogue-text-input"),i=e||(t?t.value.trim():"");if(!i)return;t&&(t.value=""),this.messages.push({sender:"user",name:"Siz",text:i}),this.renderContent();const n=document.getElementById("dialogue-messages");n&&(n.scrollTop=n.scrollHeight),setTimeout(()=>{var r;const a=this.generateAiResponse(i);this.messages.push({sender:"ai",name:((r=this.selectedScenario)==null?void 0:r.ai_role)||"Partner",text:a}),this.renderContent();const s=document.getElementById("dialogue-messages");s&&(s.scrollTop=s.scrollHeight),g.speak(a)},800)}generateAiResponse(e){const t=e.toLowerCase();return t.includes("coffee")||t.includes("tea")||t.includes("water")||t.includes("like")?"Certainly! That sounds great. Would you like anything else to eat with that?":t.includes("how much")||t.includes("bill")||t.includes("check")?"That will be 4 dollars, please. Are you paying by card or cash?":t.includes("hello")||t.includes("hi")?"Hello there! How can I assist you today?":t.includes("thank")?"You're very welcome! Have a wonderful day!":"That's clear. Thank you for telling me. Let's continue: what would you like to do next?"}}class V{constructor(){this.container=null,this.activeTab="minimal_pairs",this.isRecording=!1,this.currentScore=null}render(e){this.container=e,this.renderContent()}renderContent(){this.container.innerHTML=`
      <div class="pronunciation-layout">
        <!-- Header -->
        <div class="card pron-header">
          <div class="pron-header-left">
            <h1 class="pron-title">Telaffuz & Aksan Koçu</h1>
            <p class="pron-subtitle">Türkçe aksan etkisini azaltın, İngilizcenin fonetik seslerini ve doğal ritmini keşfedin</p>
          </div>
          <div class="pron-tabs">
            <button class="btn ${this.activeTab==="minimal_pairs"?"btn-primary":"btn-secondary"}" data-tab="minimal_pairs">
              Benzer Sesler (Minimal Pairs)
            </button>
            <button class="btn ${this.activeTab==="silent_letters"?"btn-primary":"btn-secondary"}" data-tab="silent_letters">
              Okunmayan Harfler (Silent)
            </button>
            <button class="btn ${this.activeTab==="ed_endings"?"btn-primary":"btn-secondary"}" data-tab="ed_endings">
              Geçmiş Zaman (-ed) Kuralı
            </button>
            <button class="btn ${this.activeTab==="sentence_stress"?"btn-primary":"btn-secondary"}" data-tab="sentence_stress">
              Cümle Vurgusu & Ritim
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
            <h2 class="card-title">🎧 Karışan Sesleri Ayırt Etme (Minimal Pairs)</h2>
            <div class="card-subtitle">Kulaklarınızı ve dilinizi İngilizcenin kritik ses ayrımlarına alıştırın</div>
          </div>
        </div>

        <div class="pairs-grid">
          ${[{soundA:"/ɪ/ (Kısa i)",wordA:"Ship (Gemi)",soundB:"/iː/ (Uzun i)",wordB:"Sheep (Koyun)",tip:"Türkçede tek bir /i/ sesi vardır. İngilizcede ise /ɪ/ gevşek ve çok kısadır; /iː/ ise dudaklar yana açılarak gülümser gibi uzatılır."},{soundA:"/æ/ (Açık a/e)",wordA:"Bat (Yarasa)",soundB:"/e/ (Düz e)",wordB:"Bet (Bahis)",tip:'"Apple" veya "cat" derken çenenizi Türkçedeki "e" sesine göre daha aşağı açın (/æ/).'},{soundA:"/θ/ (Peltik th)",wordA:"Think (Düşünmek)",soundB:"/s/ (Keskin s)",wordB:"Sink (Batmak)",tip:'Dilinizin ucunu ön dişlerinizin arasına hafifçe sıkıştırarak nefes verin (/θ/). Kesinlikle Türkçedeki "s" gibi okumayın!'},{soundA:"/w/ (Yuvarlak dudak)",wordA:"Wet (Islak)",soundB:"/v/ (Diş-dudak)",wordB:"Vet (Veteriner)",tip:'/w/ sesinde dişlerinizi asla alt dudağınıza değdirmeyin; dudaklarınızı ıslık çalar gibi "O" yapın.'}].map(t=>`
            <div class="pair-card">
              <div class="pair-contrast-row">
                <div class="word-box word-a">
                  <span class="sound-tag">${t.soundA}</span>
                  <div class="word-title">${t.wordA}</div>
                  <button class="tts-play-btn pron-tts" data-text="${t.wordA.split(" ")[0]}">🔊 Dinle</button>
                </div>

                <div class="contrast-symbol">vs</div>

                <div class="word-box word-b">
                  <span class="sound-tag">${t.soundB}</span>
                  <div class="word-title">${t.wordB}</div>
                  <button class="tts-play-btn pron-tts" data-text="${t.wordB.split(" ")[0]}">🔊 Dinle</button>
                </div>
              </div>

              <div class="pair-tip">
                💡 <strong>Türkçe İpucu:</strong> ${t.tip}
              </div>

              <div class="mic-practice-box">
                <button class="btn btn-secondary btn-sm test-mic-btn" data-target="${t.wordA.split(" ")[0]}">
                  🎙️ "${t.wordA.split(" ")[0]}" Telaffuz Et
                </button>
                <button class="btn btn-secondary btn-sm test-mic-btn" data-target="${t.wordB.split(" ")[0]}">
                  🎙️ "${t.wordB.split(" ")[0]}" Telaffuz Et
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
            <h2 class="card-title">🤫 Okunmayan (Sessiz) Harfler</h2>
            <div class="card-subtitle">İngilizce Türkçedeki gibi yazıldığı gibi okunmaz; tarihi kökenleri vardır</div>
          </div>
        </div>

        <div class="silent-words-grid">
          ${[{word:"Doubt",meaning:"Şüphe",phonetic:"/daʊt/",silent:"b",note:'"b" harfi tamamen okunmaz (ayrıca debt, subtle).'},{word:"Receipt",meaning:"Fiş/Makbuz",phonetic:"/rɪˈsiːt/",silent:"p",note:'"p" harfi okunmaz, "risiit" diye telaffuz edilir.'},{word:"Knight",meaning:"Şövalye",phonetic:"/naɪt/",silent:"k & gh",note:'"k" ve "gh" harfleri okunmaz, "nayt" (night ile aynı).'},{word:"Island",meaning:"Ada",phonetic:"/ˈaɪ.lənd/",silent:"s",note:'"s" harfi kesinlikle okunmaz, "aylınd" diye okunur.'},{word:"Honest",meaning:"Dürüst",phonetic:"/ˈɒn.ɪst/",silent:"h",note:'"h" okunmaz, bu yüzden "an honest person" denir.'},{word:"Wednesday",meaning:"Çarşamba",phonetic:"/ˈwenz.deɪ/",silent:"d",note:'İlk "d" ve ortadaki "e" okunmaz: "wenzdey".'}].map(t=>`
            <div class="silent-word-item">
              <div class="silent-top">
                <strong class="silent-word">${t.word}</strong>
                <span class="silent-phonetic">${t.phonetic}</span>
                <button class="tts-play-btn pron-tts" data-text="${t.word}">🔊</button>
              </div>
              <div class="silent-meaning">🇹🇷 Anlamı: ${t.meaning}</div>
              <div class="silent-rule">Okunmayan: <strong>${t.silent}</strong></div>
              <p class="silent-note">${t.note}</p>
              <button class="btn btn-secondary btn-sm test-mic-btn" data-target="${t.word}" style="margin-top: 8px;">
                🎙️ Mikrofona Söyle
              </button>
            </div>
          `).join("")}
        </div>
      </div>
    `}renderEdEndings(){return`
      <div class="card ed-endings-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">📐 Geçmiş Zaman "-ed" Ekinin 3 Farklı Okunuşu</h2>
            <div class="card-subtitle">Türk öğrencilerin en çok yaptığı "her -ed ekini 'ıd' okuma" hatasını düzeltin</div>
          </div>
        </div>

        <div class="grid-3 ed-rules-grid">
          <div class="ed-rule-box">
            <div class="ed-tag">1. /ɪd/ veya /əd/</div>
            <div class="ed-condition">Sadece sonu <strong>T</strong> veya <strong>D</strong> ile biten fiillerde ekstra hece olur!</div>
            <ul class="ed-examples">
              <li>Wanted <button class="tts-play-btn pron-tts" data-text="Wanted">🔊</button></li>
              <li>Decided <button class="tts-play-btn pron-tts" data-text="Decided">🔊</button></li>
              <li>Started <button class="tts-play-btn pron-tts" data-text="Started">🔊</button></li>
            </ul>
          </div>

          <div class="ed-rule-box">
            <div class="ed-tag">2. /t/ (Sessiz)</div>
            <div class="ed-condition">Boğaz titremeyen seslerden sonra (p, k, s, sh, ch, f):</div>
            <ul class="ed-examples">
              <li>Worked (wörkt) <button class="tts-play-btn pron-tts" data-text="Worked">🔊</button></li>
              <li>Watched (woçt) <button class="tts-play-btn pron-tts" data-text="Watched">🔊</button></li>
              <li>Stopped (stopt) <button class="tts-play-btn pron-tts" data-text="Stopped">🔊</button></li>
            </ul>
          </div>

          <div class="ed-rule-box">
            <div class="ed-tag">3. /d/ (Sesli)</div>
            <div class="ed-condition">Diğer tüm sesli ve yumuşak harflerden sonra:</div>
            <ul class="ed-examples">
              <li>Played (pleyd) <button class="tts-play-btn pron-tts" data-text="Played">🔊</button></li>
              <li>Cleaned (kliind) <button class="tts-play-btn pron-tts" data-text="Cleaned">🔊</button></li>
              <li>Lived (livd) <button class="tts-play-btn pron-tts" data-text="Lived">🔊</button></li>
            </ul>
          </div>
        </div>
      </div>
    `}renderSentenceStress(){return`
      <div class="card sentence-stress-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🎵 Cümle Vurgusu & İngilizcenin Doğal Müziği</h2>
            <div class="card-subtitle">İngilizce ritmik (stress-timed) bir dildir; Türkçedeki gibi her hece eşit okunmaz</div>
          </div>
        </div>

        <div class="stress-examples-list">
          <div class="stress-item">
            <div class="stress-sentence">
              "I <strong style="color: #6ee7b7;">WANT</strong> to <strong style="color: #6ee7b7;">GO</strong> to the <strong style="color: #6ee7b7;">STORE</strong>."
            </div>
            <div class="stress-explanation">
              Türkçe düşünerek her kelimeyi aynı güçle okumayın. Anlam taşıyan kelimeler (WANT, GO, STORE) vurgulanır; "to" ve "the" hızlıca ve zayıf söylenir.
            </div>
            <button class="btn btn-secondary btn-sm pron-tts" data-text="I want to go to the store.">🔊 Doğal Ritmi Dinle</button>
          </div>

          <div class="stress-item">
            <div class="stress-sentence">
              "She <strong style="color: #6ee7b7;">LIVES</strong> in a <strong style="color: #6ee7b7;">BIG</strong> <strong style="color: #6ee7b7;">HOUSE</strong>."
            </div>
            <div class="stress-explanation">
              Vurgulanan kelimeler daha yüksek ve belirgindir: "LIVES", "BIG", "HOUSE".
            </div>
            <button class="btn btn-secondary btn-sm pron-tts" data-text="She lives in a big house.">🔊 Doğal Ritmi Dinle</button>
          </div>
        </div>
      </div>
    `}bindEvents(){document.querySelectorAll(".pron-tabs .btn").forEach(e=>{e.addEventListener("click",()=>{this.activeTab=e.dataset.tab,this.renderContent()})}),document.querySelectorAll(".pron-tts").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.text;t&&g.speak(t)})}),document.querySelectorAll(".test-mic-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target;if(!g.hasRecognition){u.showToast("Mikrofon ses tanıma bu tarayıcıda desteklenmiyor.","error");return}e.textContent="🎙️ Dinleniyor...",e.classList.add("pulse"),g.listen(i=>{e.classList.remove("pulse");const n=i.trim().toLowerCase(),a=t.trim().toLowerCase();n.includes(a)||a.includes(n)?(e.textContent=`✅ Harika! "${i}"`,u.showToast(`Mükemmel telaffuz! Algılanan: "${i}"`,"success")):(e.textContent=`Tekrar dene (Duyulan: "${i}")`,u.showToast(`Duyulan: "${i}". Hedef kelimeye tekrar çalışın.`,"info"))},()=>{e.classList.remove("pulse"),e.textContent=`🎙️ "${t}" Telaffuz Et`})})})}}class U{constructor(){this.container=null,this.errors=[],this.filterSkill="all",this.showResolved=!1,this.skillNamesTr={all:"Tümü",grammar:"Dilbilgisi",vocabulary:"Kelime",writing:"Yazma",speaking:"Konuşma",sentence_formation:"Cümle Kurma"}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Kişisel hata defteriniz yükleniyor...</p>
      </div>
    `;try{const t=await p.getErrors({resolved:this.showResolved?1:0});this.errors=t.errors||[],this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Hata defteri yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){const e=["all","grammar","vocabulary","writing","speaking","sentence_formation"],t=this.errors.filter(i=>this.filterSkill==="all"?!0:i.skill===this.filterSkill);this.container.innerHTML=`
      <div class="errorbank-layout">
        <!-- Header -->
        <div class="card errorbank-header">
          <div class="errorbank-header-left">
            <h1 class="errorbank-title">Kişisel Hata Defteri</h1>
            <p class="errorbank-subtitle">
              Her hata bir öğrenme verisidir. Sistem alıştırmalarda yaptığınız hataları kaydeder, Türkçeden kaynaklanan dilsel yanılgıları gösterir ve kalıcı olarak düzeltmenize rehberlik eder.
            </p>
          </div>
          <div class="errorbank-header-right">
            <button class="btn ${this.showResolved?"btn-primary":"btn-secondary"}" id="toggle-resolved-btn">
              ${this.showResolved?"Çözülen Hatalar":"Aktif Hatalar"} (${this.errors.length})
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        <div class="errorbank-filters card">
          <span class="filter-label">Alana Göre Filtrele:</span>
          <div class="skill-filter-tabs">
            ${e.map(i=>`
              <button class="skill-tab ${this.filterSkill===i?"active":""}" data-skill="${i}">
                ${this.skillNamesTr[i]||i}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Errors List -->
        <div class="errors-grid">
          ${t.length>0?t.map(i=>`
            <div class="card error-item-card ${i.resolved?"is-resolved":""}">
              <div class="error-item-top">
                <span class="error-skill-badge">${this.skillNamesTr[i.skill]||(i.skill||"").toUpperCase()}</span>
                <span class="error-freq-badge">Tekrar Sayısı: <strong>${i.occurrence_count||1}x</strong></span>
              </div>

              <div class="error-contrast-box">
                <div class="error-produced">
                  <span class="contrast-label">Sizin İfadeniz:</span>
                  <div class="produced-text">❌ "${i.error_text||"Hata"}"</div>
                </div>
                <div class="error-target">
                  <span class="contrast-label">Doğru & Doğal Biçimi:</span>
                  <div class="target-text">✅ "${i.correction||"Hedef"}"</div>
                </div>
              </div>

              ${i.explanation?`
                <div class="error-explanation">
                  <strong>💡 Neden Yanlış? (Kural & Açıklama):</strong> ${i.explanation}
                </div>
              `:""}

              <div class="error-item-actions">
                ${i.resolved?`
                  <span class="resolved-label">🎉 Öğrenildi & Çözüldü</span>
                `:`
                  <button class="btn btn-success btn-sm resolve-err-btn" data-id="${i.id}">
                    ✓ Öğrendim (Çözüldü Olarak İşaretle)
                  </button>
                `}
              </div>
            </div>
          `).join(""):`
            <div class="card empty-errors-card">
              <div class="empty-icon">🛡️</div>
              <h3>Kayıtlı Aktif Hata Bulunmuyor</h3>
              <p>Hata defteriniz şu an temiz! Gramer, okuma ve yazma alıştırmalarını çözmeye devam edin; sistem yaptığınız yanlışları otomatik olarak buraya kaydedecektir.</p>
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){var e;this.container.querySelectorAll(".skill-tab").forEach(t=>{t.addEventListener("click",()=>{this.filterSkill=t.dataset.skill,this.renderContent()})}),(e=document.getElementById("toggle-resolved-btn"))==null||e.addEventListener("click",async()=>{this.showResolved=!this.showResolved,await this.render(this.container)}),this.container.querySelectorAll(".resolve-err-btn").forEach(t=>{t.addEventListener("click",async()=>{const i=t.dataset.id;try{await p.resolveError(i),u.showToast("Hata başarıyla çözüldü olarak işaretlendi! (+10 XP)","success"),await this.render(this.container)}catch(n){u.showToast("Hata güncellenemedi: "+n.message,"error")}})})}}class G{constructor(){this.container=null,this.dashboardData=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Gelişim ve istatistik verileriniz hesaplanıyor...</p>
      </div>
    `;try{this.dashboardData=await p.getDashboard(),this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>İstatistikler yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){const{stats:e,skills:t,weekStudy:i,latestAssessment:n}=this.dashboardData,a=[{key:"grammar",name:"Dilbilgisi (Grammar)"},{key:"vocabulary",name:"Kelime Haznesi (Vocabulary)"},{key:"reading",name:"Okuma Anlama (Reading)"},{key:"listening",name:"Dinleme Algılama (Listening)"},{key:"writing",name:"Yazma Becerisi (Writing)"},{key:"speaking",name:"Konuşma Akıcılığı (Speaking)"},{key:"pronunciation",name:"Telaffuz & Fonetik (Pronunciation)"},{key:"sentence_formation",name:"Cümle Kurma Mantığı (Syntax)"},{key:"comprehension",name:"Kavrama Hızı (Comprehension)"},{key:"communication",name:"Doğal İletişim (Communication)"}],s=(i||[]).reduce((o,c)=>o+(c.total_minutes||0),0),r=(n==null?void 0:n.overall_cefr)||(n==null?void 0:n.overallCEFR)||"A1";this.container.innerHTML=`
      <div class="progress-layout">
        <!-- Header -->
        <div class="card progress-header">
          <div class="progress-header-left">
            <h1 class="progress-title">Gelişim Analizi & Beceriler</h1>
            <p class="progress-subtitle">CEFR standartlarında 10 farklı boyuttaki öğrenme eğrinizin ayrıntılı analizi</p>
          </div>
          <div class="current-cefr-pill">
            <span class="cefr-pill-label">MEVCUT SEVİYE</span>
            <span class="cefr-pill-val">${r}</span>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="grid-4 progress-stats-grid">
          <div class="card p-stat-card">
            <span class="p-stat-title">Çalışma Serisi</span>
            <div class="p-stat-val">${e.current_streak||1} 🔥 <span style="font-size: 14px; font-weight: normal;">gün</span></div>
            <span class="p-stat-sub">En uzun seri: ${e.longest_streak||1} gün</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Son 7 Günlük Süre</span>
            <div class="p-stat-val">${s} <span style="font-size: 14px; font-weight: normal;">dk</span></div>
            <span class="p-stat-sub">Toplam aktif çalışma</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Toplam XP</span>
            <div class="p-stat-val">${e.xp||0} ⚡</div>
            <span class="p-stat-sub">Seviye ${e.level||1} Öğrenci</span>
          </div>

          <div class="card p-stat-card">
            <span class="p-stat-title">Öğrenilen Kelime</span>
            <div class="p-stat-val">${e.total_words_learned||0}</div>
            <span class="p-stat-sub">Kalıcı hafızaya alınan</span>
          </div>
        </div>

        <div class="grid-2 progress-charts-grid">
          <!-- 10 Skills Detailed Breakdown -->
          <div class="card skills-audit-card">
            <h2 class="card-title">🎯 10 Becerideki Seviye Dağılımı</h2>
            <div class="card-subtitle">Her beceri alanı bağımsız olarak puanlanır ve takip edilir</div>

            <div class="domain-bars-list">
              ${a.map(o=>{const c=t[o.key]||{level:"A1",score:0},m=c.level||"A1",d=c.score||0;return`
                  <div class="domain-row">
                    <div class="domain-label">
                      <span>${o.name}</span>
                      <span class="cefr-tag ${m}">${m}</span>
                    </div>
                    <div class="domain-bar-track">
                      <div class="domain-bar-fill" style="width: ${Math.max(d,5)}%;"></div>
                    </div>
                    <span class="domain-score">%${d}</span>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- Weekly Consistency Distribution -->
          <div class="card weekly-activity-card">
            <h2 class="card-title">📅 Son 7 Günlük Çalışma Düzeni</h2>
            <div class="card-subtitle">Günlük pratik süresi dağılımı (dakika cinsinden)</div>

            <div class="week-chart-bars">
              ${i&&i.length>0?i.map(o=>{const c=Math.min(100,Math.max(10,Math.round(o.total_minutes/60*100)));return`
                  <div class="day-bar-col">
                    <div class="day-bar-track">
                      <div class="day-bar-fill" style="height: ${o.total_minutes>0?c:6}%;"></div>
                    </div>
                    <span class="day-label">${o.date.slice(5)}</span>
                    <span class="day-mins">${o.total_minutes}m</span>
                  </div>
                `}).join(""):`
                <p>Henüz haftalık çalışma verisi oluşmadı.</p>
              `}
            </div>
          </div>
        </div>
      </div>
    `}}class N{constructor(){this.viewport=document.getElementById("viewport"),this.pageTitle=document.getElementById("page-title"),this.authModal=null,this.views={dashboard:new L,assessment:new P,grammar:new H,vocabulary:new W,reading:new O,listening:new j,writing:new R,speaking:new K,pronunciation:new V,errors:new U,progress:new G},this.titles={dashboard:"Genel Bakış & Günlük Rutin",assessment:"10 Becerili Seviye Belirleme Sınavı",grammar:"Gramer Akademisi & Kurallar",vocabulary:"Akıllı Kelime Kartları (SRS)",reading:"Okuma & Anlama Laboratuvarı",listening:"Dinleme & Telaffuz Laboratuvarı",writing:"Yazma Stüdyosu & Anlık Değerlendirme",speaking:"Konuşma & Diyalog Simülatörü",pronunciation:"Telaffuz & Aksan Eğitimi",errors:"Kişisel Hata Defteri",progress:"Gelişim Analizi & Beceriler"}}async init(){this.bindNavigation(),this.bindSessionTimer(),this.bindSidebarToggle(),this.bindLogout(),A.initGlobalListener(),u.on("view:change",e=>{this.navigateTo(e)}),await this.ensureUserSession()}async ensureUserSession(){const e=p.getCurrentUser();e?(u.setUser(e),this.updateUserDisplay(e),this.navigateTo("dashboard")):this.showLoginModal()}showLoginModal(){this.authModal=new q(e=>{u.setUser(e),this.updateUserDisplay(e),this.navigateTo("dashboard")}),this.authModal.show()}bindLogout(){var e;(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",()=>{p.logout(),u.setUser(null),this.updateUserDisplay(null),u.showToast("Oturum kapatıldı. Yeni bir kullanıcı ile giriş yapabilirsiniz.","info"),this.showLoginModal()})}updateUserDisplay(e){const t=document.getElementById("header-username"),i=document.getElementById("header-user-avatar"),n=document.getElementById("header-user-status"),a=document.getElementById("sidebar-cefr-badge");if(!e){t&&(t.textContent="Giriş Yapılmadı"),i&&(i.textContent="A1"),n&&(n.textContent="0'dan Başlangıç Yolu"),a&&(a.textContent="A1");return}if(t&&(t.textContent=e.displayName||e.username),i){const s=(e.displayName||e.username||"A1").slice(0,2).toUpperCase();i.textContent=s}n&&(n.textContent="0'dan Başlangıç (A1)"),a&&(a.textContent=e.cefr_level||"A1")}bindNavigation(){var e;document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.view;i&&this.navigateTo(i)})}),(e=document.getElementById("btn-quick-practice"))==null||e.addEventListener("click",()=>{this.navigateTo("dashboard")})}navigateTo(e){if(!p.getCurrentUser()){this.showLoginModal();return}if(!this.views[e])return;document.querySelectorAll(".nav-item").forEach(i=>{i.classList.toggle("active",i.dataset.view===e)}),this.pageTitle&&(this.pageTitle.textContent=this.titles[e]||"LinguaForge"),this.viewport&&(this.viewport.scrollTop=0),this.views[e].render(this.viewport);const t=document.getElementById("sidebar");t&&window.innerWidth<=768&&t.classList.remove("open")}bindSessionTimer(){u.startSessionTimer();const e=document.getElementById("session-timer");u.on("timer:tick",t=>{if(e){const i=Math.floor(t/60),n=t%60;e.textContent=`${String(i).padStart(2,"0")}:${String(n).padStart(2,"0")}`}})}bindSidebarToggle(){const e=document.getElementById("sidebar-toggle"),t=document.getElementById("sidebar");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("open")})}}window.addEventListener("DOMContentLoaded",()=>{new N().init()});
