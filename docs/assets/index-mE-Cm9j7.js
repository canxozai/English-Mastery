(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const H="modulepreload",R=function(c,e){return new URL(c,e).href},j={},V=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));a=Promise.allSettled(t.map(l=>{if(l=R(l,i),l in j)return;j[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(!!i)for(let h=s.length-1;h>=0;h--){const v=s[h];if(v.href===l&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":H,d||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),d)return new Promise((h,v)=>{f.addEventListener("load",h),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return a.then(s=>{for(const r of s||[])r.status==="rejected"&&n(r.reason);return e().catch(n)})},z={grammar_topics:[{id:1,name:"Present Simple",slug:"present-simple",category:"tenses",cefr_level:"A1",description:"Actions that happen regularly, facts, and routines.",explanation_en:"We use the Present Simple for habits, routines, general truths, and permanent situations. Add -s/-es for he/she/it.",explanation_tr:"Geniş zaman. Alışkanlıklar, rutin eylemler, genel doğrular ve kalıcı durumlar için kullanılır. He/she/it için fiile -s/-es eklenir.",examples:`[{"sentence":"I work every day.","translation":"Her gün çalışırım."},{"sentence":"She plays tennis on Sundays.","translation":"Pazar günleri tenis oynar."},{"sentence":"Water boils at 100 degrees.","translation":"Su 100 derecede kaynar."},{"sentence":"They don't like coffee.","translation":"Kahve sevmezler."},{"sentence":"Does he speak English?","translation":"İngilizce konuşur mu?"}]`,rules:'["Affirmative: Subject + V1 (he/she/it + V1+s/es)","Negative: Subject + do/does + not + V1","Question: Do/Does + Subject + V1?","Time expressions: always, usually, often, sometimes, rarely, never, every day/week/month","Third person singular: add -s (works), -es (watches, goes), -ies (studies)"]',common_mistakes:`[{"wrong":"He work every day.","correct":"He works every day.","explanation":"He/she/it requires -s on the verb."},{"wrong":"She don't like it.","correct":"She doesn't like it.","explanation":"Use \\"doesn't\\" for he/she/it negatives."},{"wrong":"Does she works here?","correct":"Does she work here?","explanation":"After does/doesn't, use the base form."},{"wrong":"I am go to school.","correct":"I go to school.","explanation":"Don't use \\"am\\" with Present Simple verbs."}]`,order_index:1,prerequisite_topics:"[]"},{id:2,name:"Present Continuous",slug:"present-continuous",category:"tenses",cefr_level:"A1",description:"Actions happening right now or temporary actions.",explanation_en:"We use the Present Continuous for actions happening now, temporary situations, and future arrangements. Form: am/is/are + verb-ing.",explanation_tr:"Şimdiki zaman. Şu anda olan eylemler, geçici durumlar ve gelecek planları için kullanılır. Yapı: am/is/are + fiil-ing.",examples:'[{"sentence":"I am reading a book right now.","translation":"Şu anda bir kitap okuyorum."},{"sentence":"She is working from home this week.","translation":"Bu hafta evden çalışıyor."},{"sentence":"They are not watching TV.","translation":"Televizyon izlemiyorlar."},{"sentence":"Are you listening to me?","translation":"Beni dinliyor musun?"},{"sentence":"We are meeting them tomorrow.","translation":"Yarın onlarla buluşuyoruz."}]',rules:'["Affirmative: Subject + am/is/are + V-ing","Negative: Subject + am/is/are + not + V-ing","Question: Am/Is/Are + Subject + V-ing?","Time expressions: now, right now, at the moment, currently, today, this week","Spelling: drop -e (make→making), double consonant (run→running), -ie→ying (lie→lying)"]',common_mistakes:'[{"wrong":"I reading a book.","correct":"I am reading a book.","explanation":"You need am/is/are before the -ing verb."},{"wrong":"She is work now.","correct":"She is working now.","explanation":"Add -ing to the main verb."},{"wrong":"I am knowing the answer.","correct":"I know the answer.","explanation":"Stative verbs (know, like, want) are usually not used in continuous."}]',order_index:2,prerequisite_topics:'["present-simple"]'},{id:3,name:"Past Simple",slug:"past-simple",category:"tenses",cefr_level:"A2",description:"Completed actions in the past.",explanation_en:"We use Past Simple for finished actions at a specific time in the past. Regular verbs add -ed. Irregular verbs have special forms.",explanation_tr:"Geçmiş zaman. Geçmişte belirli bir zamanda tamamlanmış eylemler için kullanılır. Düzenli fiillere -ed eklenir. Düzensiz fiillerin özel halleri vardır.",examples:`[{"sentence":"I visited London last year.","translation":"Geçen yıl Londra'yı ziyaret ettim."},{"sentence":"She went to the store yesterday.","translation":"Dün mağazaya gitti."},{"sentence":"They didn't come to the party.","translation":"Partiye gelmediler."},{"sentence":"Did you see the movie?","translation":"Filmi gördün mü?"},{"sentence":"He bought a new car.","translation":"Yeni bir araba aldı."}]`,rules:'["Affirmative: Subject + V2 (regular: +ed, irregular: special form)","Negative: Subject + did + not + V1","Question: Did + Subject + V1?","Time expressions: yesterday, last week/month/year, ago, in 2020, when I was young","Regular -ed: worked, played, studied, stopped"]',common_mistakes:`[{"wrong":"I goed to school.","correct":"I went to school.","explanation":"\\"Go\\" is irregular. Past form is \\"went\\"."},{"wrong":"Did you went there?","correct":"Did you go there?","explanation":"After did/didn't, use base form (V1)."},{"wrong":"She didn't went.","correct":"She didn't go.","explanation":"After didn't, always use base form."}]`,order_index:3,prerequisite_topics:'["present-simple"]'},{id:4,name:"Past Continuous",slug:"past-continuous",category:"tenses",cefr_level:"A2",description:"Actions in progress at a specific time in the past.",explanation_en:"We use Past Continuous for actions that were in progress at a specific moment in the past, or for background actions when something else happened.",explanation_tr:"Geçmişte devam eden zaman. Geçmişte belirli bir anda devam eden eylemler veya başka bir olay olduğunda arka planda olan eylemler için kullanılır.",examples:`[{"sentence":"I was reading when the phone rang.","translation":"Telefon çaldığında kitap okuyordum."},{"sentence":"They were playing football at 3 PM.","translation":"Saat 3'te futbol oynuyorlardı."},{"sentence":"She wasn't sleeping when I called.","translation":"Aradığımda uyumuyordu."},{"sentence":"Were you working yesterday evening?","translation":"Dün akşam çalışıyor muydun?"}]`,rules:'["Affirmative: Subject + was/were + V-ing","Negative: Subject + was/were + not + V-ing","Question: Was/Were + Subject + V-ing?","Often used with Past Simple: \\"While I was walking, I saw a friend.\\"","Time expressions: while, when, at that time, at 3 PM yesterday"]',common_mistakes:'[{"wrong":"I was watch TV.","correct":"I was watching TV.","explanation":"Use V-ing after was/were."},{"wrong":"While I studied, the phone rang.","correct":"While I was studying, the phone rang.","explanation":"Use Past Continuous for the ongoing action, Past Simple for the interruption."}]',order_index:4,prerequisite_topics:'["past-simple", "present-continuous"]'},{id:5,name:"Present Perfect",slug:"present-perfect",category:"tenses",cefr_level:"B1",description:"Past actions connected to the present, experiences, and recent events.",explanation_en:"We use Present Perfect for experiences, recent actions with present results, and actions from a period that hasn't finished. Form: have/has + past participle (V3).",explanation_tr:"Geçmişte başlayıp etkisi hâlâ devam eden eylemler, deneyimler ve yakın zamandaki olaylar için kullanılır. Yapı: have/has + geçmiş ortaç (V3). Türkçede doğrudan karşılığı yoktur.",examples:`[{"sentence":"I have visited Paris three times.","translation":"Paris'i üç kez ziyaret ettim. (Deneyim)"},{"sentence":"She has lost her keys.","translation":"Anahtarlarını kaybetti. (Şu an anahtarları yok)"},{"sentence":"Have you ever eaten sushi?","translation":"Hiç suşi yedin mi?"},{"sentence":"They haven't finished yet.","translation":"Henüz bitirmediler."},{"sentence":"I have lived here since 2010.","translation":"2010'dan beri burada yaşıyorum."}]`,rules:`["Affirmative: Subject + have/has + V3 (past participle)","Negative: Subject + have/has + not + V3","Question: Have/Has + Subject + V3?","Key words: ever, never, already, yet, just, since, for, recently, so far","Use \\"since\\" for a point in time (since Monday), \\"for\\" for a duration (for two years)","Don't use with specific past times (yesterday, last week, in 2019) — use Past Simple instead"]`,common_mistakes:`[{"wrong":"I have went there.","correct":"I have gone there.","explanation":"Use the past participle (V3), not the past simple (V2). go→went→gone"},{"wrong":"I have visited Paris yesterday.","correct":"I visited Paris yesterday.","explanation":"Don't use Present Perfect with specific past times."},{"wrong":"She has lose her keys.","correct":"She has lost her keys.","explanation":"Use the past participle: lose→lost→lost"},{"wrong":"I live here since 2010.","correct":"I have lived here since 2010.","explanation":"Use Present Perfect with \\"since\\" and \\"for\\" for continuing actions."}]`,order_index:5,prerequisite_topics:'["past-simple"]'},{id:6,name:"Present Perfect Continuous",slug:"present-perfect-continuous",category:"tenses",cefr_level:"B1",description:"Actions that started in the past and are still continuing, emphasizing duration.",explanation_en:"We use Present Perfect Continuous to emphasize the duration of an action that started in the past and continues now, or has recently stopped with visible results.",explanation_tr:"Geçmişte başlayıp hâlâ devam eden eylemin süresini vurgular. Yapı: have/has + been + V-ing. Eylemin ne kadar süredir devam ettiğini anlatır.",examples:`[{"sentence":"I have been studying for three hours.","translation":"Üç saattir ders çalışıyorum."},{"sentence":"It has been raining all day.","translation":"Bütün gün yağmur yağıyor."},{"sentence":"She has been working here since January.","translation":"Ocak'tan beri burada çalışıyor."},{"sentence":"How long have you been waiting?","translation":"Ne kadar süredir bekliyorsun?"}]`,rules:'["Affirmative: Subject + have/has + been + V-ing","Negative: Subject + have/has + not + been + V-ing","Question: How long + have/has + Subject + been + V-ing?","Emphasizes DURATION, while Present Perfect emphasizes RESULT","Compare: \\"I have read the book.\\" (finished) vs \\"I have been reading the book.\\" (still reading or just stopped)"]',common_mistakes:`[{"wrong":"I have been know him for years.","correct":"I have known him for years.","explanation":"Stative verbs (know, like, love) don't use continuous form."},{"wrong":"She has been working here since three months.","correct":"She has been working here for three months.","explanation":"Use \\"for\\" with durations, \\"since\\" with points in time."}]`,order_index:6,prerequisite_topics:'["present-perfect", "present-continuous"]'},{id:7,name:"Past Perfect",slug:"past-perfect",category:"tenses",cefr_level:"B1",description:"An action that happened before another action in the past.",explanation_en:"We use Past Perfect to show that one action happened BEFORE another action in the past. Form: had + past participle (V3).",explanation_tr:'Geçmişteki bir eylemden önce tamamlanmış olan bir eylemi anlatır. "Geçmişin geçmişi" olarak düşünülebilir. Yapı: had + V3.',examples:'[{"sentence":"I had already eaten when she arrived.","translation":"O geldiğinde ben çoktan yemiştim."},{"sentence":"They had left before the rain started.","translation":"Yağmur başlamadan önce gitmişlerdi."},{"sentence":"She realized she had forgotten her wallet.","translation":"Cüzdanını unuttuğunu fark etti."}]',rules:'["Affirmative: Subject + had + V3","Negative: Subject + had + not + V3","Question: Had + Subject + V3?","Key words: before, after, already, when, by the time, until","The earlier action uses Past Perfect, the later action uses Past Simple"]',common_mistakes:'[{"wrong":"When I arrived, she left.","correct":"When I arrived, she had already left.","explanation":"Use Past Perfect for the action that happened first."},{"wrong":"I had went to school.","correct":"I had gone to school.","explanation":"Use V3 (past participle) after had."}]',order_index:7,prerequisite_topics:'["past-simple", "present-perfect"]'},{id:8,name:"Future Forms",slug:"future-forms",category:"tenses",cefr_level:"A2",description:"Different ways to talk about the future: will, going to, Present Continuous.",explanation_en:'English has multiple ways to talk about the future: "will" for predictions/decisions, "going to" for plans/intentions, Present Continuous for arrangements.',explanation_tr:'İngilizcede gelecek zaman için birden fazla yapı kullanılır: "will" anlık kararlar ve tahminler için, "going to" planlar ve niyetler için, Present Continuous düzenlenmiş planlar için.',examples:`[{"sentence":"I will help you.","translation":"Sana yardım edeceğim. (Anlık karar)"},{"sentence":"I'm going to study medicine.","translation":"Tıp okuyacağım. (Önceden planlanmış)"},{"sentence":"We are meeting them at 7.","translation":"Onlarla 7'de buluşuyoruz. (Düzenlenmiş)"},{"sentence":"It will probably rain tomorrow.","translation":"Yarın muhtemelen yağmur yağacak. (Tahmin)"},{"sentence":"Look at the clouds! It's going to rain.","translation":"Bulutlara bak! Yağmur yağacak. (Kanıt var)"}]`,rules:`["\\"will\\" + V1: spontaneous decisions, promises, predictions (without evidence)","\\"be going to\\" + V1: plans made before, intentions, predictions (with evidence)","Present Continuous: fixed arrangements with other people","\\"will\\" is often used in offers: \\"I'll carry that for you.\\"","\\"going to\\" is often used for intentions: \\"I'm going to learn English.\\""]`,common_mistakes:`[{"wrong":"I will to go there.","correct":"I will go there.","explanation":"Don't use \\"to\\" after \\"will\\"."},{"wrong":"I go to London next week.","correct":"I'm going to London next week.","explanation":"Use a future form, not Present Simple, for future plans."}]`,order_index:8,prerequisite_topics:'["present-simple", "present-continuous"]'},{id:9,name:"Modal Verbs",slug:"modal-verbs",category:"modals",cefr_level:"A2",description:"Can, could, should, must, may, might, would — expressing ability, possibility, permission, obligation.",explanation_en:"Modal verbs modify the meaning of the main verb to express ability, possibility, permission, obligation, advice, etc. They don't change form.",explanation_tr:"Yardımcı fiiller ana fiilin anlamını değiştirir: yetenek, olasılık, izin, zorunluluk, tavsiye vb. ifade eder. Çekimlenmezler.",examples:'[{"sentence":"I can swim.","translation":"Yüzebilirim. (Yetenek)"},{"sentence":"You should see a doctor.","translation":"Bir doktora görünmelisin. (Tavsiye)"},{"sentence":"You must wear a seatbelt.","translation":"Emniyet kemeri takmalısın. (Zorunluluk)"},{"sentence":"It might rain today.","translation":"Bugün yağmur yağabilir. (Olasılık)"},{"sentence":"Could you help me?","translation":"Bana yardım edebilir misiniz? (Rica)"}]',rules:'["Modal + base verb (V1): She can speak French.","No -s for third person: He can (NOT cans)","can = ability/permission, could = past ability/polite requests","should = advice, must = obligation/strong probability","may/might = possibility, would = hypothetical/polite requests"]',common_mistakes:`[{"wrong":"He cans swim.","correct":"He can swim.","explanation":"Modals don't take -s."},{"wrong":"I must to go.","correct":"I must go.","explanation":"Don't use \\"to\\" after modals."},{"wrong":"She can to drive.","correct":"She can drive.","explanation":"After modals, use the base form directly."}]`,order_index:9,prerequisite_topics:'["present-simple"]'},{id:10,name:"Conditionals",slug:"conditionals",category:"conditionals",cefr_level:"B1",description:"If-clauses: Zero, First, Second, and Third conditionals.",explanation_en:"Conditionals express hypothetical situations and their results. Each type uses different tenses depending on how real or likely the situation is.",explanation_tr:"Koşul cümleleri varsayımsal durumları ve sonuçlarını ifade eder. Her tür, durumun ne kadar gerçek veya olası olduğuna göre farklı zamanlar kullanır.",examples:'[{"sentence":"If you heat water, it boils.","translation":"Suyu ısıtırsan kaynar. (Zero — genel doğru)"},{"sentence":"If it rains, I will stay home.","translation":"Yağmur yağarsa evde kalacağım. (First — olası)"},{"sentence":"If I had money, I would travel.","translation":"Param olsa seyahat ederdim. (Second — hayal)"},{"sentence":"If I had studied, I would have passed.","translation":"Çalışsaydım geçerdim. (Third — geçmişte olmadı)"}]',rules:`["Zero: If + Present Simple, Present Simple (facts)","First: If + Present Simple, will + V1 (real possibility)","Second: If + Past Simple, would + V1 (unreal present)","Third: If + Past Perfect, would + have + V3 (unreal past)","Don't use \\"will\\" in the if-clause for First Conditional"]`,common_mistakes:`[{"wrong":"If I will see him, I will tell him.","correct":"If I see him, I will tell him.","explanation":"Don't use \\"will\\" in the if-clause."},{"wrong":"If I would have money, I would travel.","correct":"If I had money, I would travel.","explanation":"Use Past Simple in the if-clause for Second Conditional."}]`,order_index:10,prerequisite_topics:'["present-simple", "past-simple", "future-forms"]'},{id:11,name:"Passive Voice",slug:"passive-voice",category:"voice",cefr_level:"B1",description:"When the focus is on the action or the receiver, not the doer.",explanation_en:"We use Passive Voice when the action or its receiver is more important than who does it. Form: be + past participle (V3).",explanation_tr:"Eylemi yapan kişi değil, eylemin kendisi veya eylemi alan önemli olduğunda Edilgen Çatı kullanılır. Yapı: be + V3.",examples:'[{"sentence":"The book was written by J.K. Rowling.","translation":"Kitap J.K. Rowling tarafından yazıldı."},{"sentence":"English is spoken worldwide.","translation":"İngilizce dünya çapında konuşulur."},{"sentence":"The window was broken.","translation":"Cam kırıldı."},{"sentence":"The project will be completed next month.","translation":"Proje gelecek ay tamamlanacak."}]',rules:'["Present: am/is/are + V3 (English is spoken here.)","Past: was/were + V3 (The car was stolen.)","Future: will be + V3 (The work will be finished.)","Perfect: have/has/had been + V3 (The letter has been sent.)","Use \\"by\\" to mention the agent: \\"It was made by Apple.\\""]',common_mistakes:'[{"wrong":"The book written by her.","correct":"The book was written by her.","explanation":"You need a form of \\"be\\" in passive sentences."},{"wrong":"The window was broke.","correct":"The window was broken.","explanation":"Use the past participle (V3), not the past simple."}]',order_index:11,prerequisite_topics:'["present-simple", "past-simple"]'},{id:12,name:"Reported Speech",slug:"reported-speech",category:"speech",cefr_level:"B2",description:"Reporting what someone said without quoting them directly.",explanation_en:"Reported Speech (Indirect Speech) is used to tell someone what another person said. Tenses usually shift back.",explanation_tr:"Dolaylı Anlatım, başka birinin söylediğini aktarmak için kullanılır. Zamanlar genellikle bir adım geriye kayar.",examples:'[{"sentence":"\\"I am tired.\\" → She said (that) she was tired.","translation":"\\"Yorgunum.\\" → Yorgun olduğunu söyledi."},{"sentence":"\\"I will come.\\" → He said he would come.","translation":"\\"Geleceğim.\\" → Geleceğini söyledi."},{"sentence":"\\"Do you like it?\\" → She asked if I liked it.","translation":"\\"Beğendin mi?\\" → Beğenip beğenmediğimi sordu."}]',rules:'["Present Simple → Past Simple","Present Continuous → Past Continuous","Past Simple → Past Perfect","will → would, can → could, may → might","this → that, here → there, now → then, today → that day"]',common_mistakes:'[{"wrong":"She said she is tired.","correct":"She said she was tired.","explanation":"Shift the tense back when reporting."},{"wrong":"He asked do I like it.","correct":"He asked if I liked it.","explanation":"Use \\"if/whether\\" for yes/no questions and change word order."}]',order_index:12,prerequisite_topics:'["past-simple", "present-perfect"]'},{id:13,name:"Relative Clauses",slug:"relative-clauses",category:"clauses",cefr_level:"B1",description:"Using who, which, that, where, when to add information about nouns.",explanation_en:'Relative clauses give extra information about a noun. We use "who" for people, "which" for things, "that" for both, "where" for places, "when" for times.',explanation_tr:'Sıfat cümlecikleri bir isim hakkında ek bilgi verir. İnsanlar için "who", şeyler için "which", her ikisi için "that", yerler için "where", zamanlar için "when" kullanılır.',examples:`[{"sentence":"The woman who lives next door is a teacher.","translation":"Yan komşuda yaşayan kadın bir öğretmendir."},{"sentence":"The book which I read was interesting.","translation":"Okuduğum kitap ilginçti."},{"sentence":"That's the restaurant where we met.","translation":"Tanıştığımız restoran orası."}]`,rules:'["who = for people (subject/object)","which = for things (subject/object)","that = for people or things (informal)","where = for places, when = for times","Defining clauses: essential info (no commas)","Non-defining clauses: extra info (with commas)"]',common_mistakes:'[{"wrong":"The man which called you is my brother.","correct":"The man who called you is my brother.","explanation":"Use \\"who\\" for people."},{"wrong":"The car who I bought is red.","correct":"The car which I bought is red.","explanation":"Use \\"which\\" or \\"that\\" for things."}]',order_index:13,prerequisite_topics:'["present-simple", "past-simple"]'},{id:14,name:"Articles",slug:"articles",category:"determiners",cefr_level:"A2",description:"Using a, an, the, or no article correctly.",explanation_en:'Articles (a/an/the) come before nouns. "A/an" is indefinite (any one), "the" is definite (specific one), and sometimes no article is needed.',explanation_tr:'Artikeller (a/an/the) isimlerden önce gelir. "A/an" belirsiz (herhangi bir), "the" belirli (bilinen, spesifik), bazen hiç artikel gerekmez.',examples:'[{"sentence":"I saw a dog in the park.","translation":"Parkta bir köpek gördüm."},{"sentence":"The dog was very friendly.","translation":"Köpek çok cana yakındı. (Bildiğimiz köpek)"},{"sentence":"She is an engineer.","translation":"O bir mühendis."},{"sentence":"I love music.","translation":"Müziği seviyorum. (Genel — artikel yok)"}]',rules:'["\\"a\\" before consonant sounds: a book, a university","\\"an\\" before vowel sounds: an apple, an hour","\\"the\\" = both speakers know which one, unique things, superlatives","No article: general/uncountable concepts (I like coffee), plural generalizations (Dogs are loyal)","No article with: most countries, languages, meals, sports"]',common_mistakes:`[{"wrong":"I like the music.","correct":"I like music.","explanation":"Don't use \\"the\\" when speaking generally."},{"wrong":"She is engineer.","correct":"She is an engineer.","explanation":"Use a/an with jobs."},{"wrong":"I went to the home.","correct":"I went home.","explanation":"\\"Go home\\" doesn't use an article."}]`,order_index:14,prerequisite_topics:"[]"},{id:15,name:"Prepositions",slug:"prepositions",category:"prepositions",cefr_level:"A2",description:"In, on, at, for, with, by, about, to, from — location, time, movement, and more.",explanation_en:"Prepositions show relationships between words — location, time, direction, cause, etc. They are often unpredictable and must be learned in context.",explanation_tr:"Edatlar kelimeler arasındaki ilişkileri gösterir — yer, zaman, yön, neden vb. Çoğu zaman tahmin edilemez ve bağlam içinde öğrenilmelidir.",examples:`[{"sentence":"I live in Istanbul.","translation":"İstanbul'da yaşıyorum."},{"sentence":"The meeting is on Monday at 3 PM.","translation":"Toplantı Pazartesi saat 3'te."},{"sentence":"She's good at mathematics.","translation":"Matematikte iyidir."},{"sentence":"I'm interested in science.","translation":"Bilimle ilgileniyorum."}]`,rules:'["Time: at (specific time), on (days/dates), in (months/years/seasons/parts of day)","Place: at (specific point), on (surface), in (enclosed space)","at school/work/home, on the bus/train, in a car/taxi","Verb + preposition combos must be memorized: listen TO, look AT, wait FOR, depend ON","Adjective + preposition combos: good AT, interested IN, afraid OF, responsible FOR"]',common_mistakes:`[{"wrong":"I'm interested for science.","correct":"I'm interested in science.","explanation":"\\"Interested\\" takes \\"in\\", not \\"for\\"."},{"wrong":"I arrived to school.","correct":"I arrived at school.","explanation":"\\"Arrive\\" takes \\"at\\" (place) or \\"in\\" (city/country)."},{"wrong":"I listen music.","correct":"I listen to music.","explanation":"\\"Listen\\" requires \\"to\\"."}]`,order_index:15,prerequisite_topics:"[]"},{id:16,name:"Gerunds and Infinitives",slug:"gerunds-infinitives",category:"verb_forms",cefr_level:"B1",description:"When to use V-ing and when to use to + V after certain verbs.",explanation_en:"Some verbs are followed by gerund (V-ing), some by infinitive (to + V), and some can take both. This must mostly be memorized.",explanation_tr:"Bazı fiillerden sonra isim-fiil (V-ing), bazılarından sonra mastar (to + V) gelir. Bazıları her ikisini de alabilir. Çoğunlukla ezberlenmesi gerekir.",examples:'[{"sentence":"I enjoy reading books.","translation":"Kitap okumaktan hoşlanırım. (enjoy + V-ing)"},{"sentence":"I want to learn English.","translation":"İngilizce öğrenmek istiyorum. (want + to V)"},{"sentence":"I stopped smoking.","translation":"Sigara içmeyi bıraktım. (V-ing = eylemi bıraktı)"},{"sentence":"I stopped to smoke.","translation":"Sigara içmek için durdum. (to V = amaç)"}]',rules:'["Gerund (V-ing) after: enjoy, finish, mind, avoid, keep, suggest, consider, practice, imagine","Infinitive (to V) after: want, need, decide, hope, plan, expect, agree, refuse, learn, promise","Both (different meaning): stop, remember, forget, try, regret","After prepositions, always use gerund: interested in learning, good at cooking","As subject, use gerund: \\"Swimming is good exercise.\\""]',common_mistakes:'[{"wrong":"I enjoy to read.","correct":"I enjoy reading.","explanation":"\\"Enjoy\\" is always followed by V-ing."},{"wrong":"I want learning.","correct":"I want to learn.","explanation":"\\"Want\\" is followed by \\"to + verb\\"."}]',order_index:16,prerequisite_topics:'["present-simple", "present-continuous"]'},{id:17,name:"Comparatives and Superlatives",slug:"comparatives-superlatives",category:"adjectives",cefr_level:"A2",description:"Comparing things: bigger, the biggest, more interesting, the most interesting.",explanation_en:"Comparatives compare two things (-er/more). Superlatives show the extreme (the -est/the most). Irregular forms exist.",explanation_tr:"Karşılaştırma sıfatları iki şeyi karşılaştırır (-er/more). Üstünlük sıfatları en üst dereceyi gösterir (the -est/the most).",examples:'[{"sentence":"She is taller than me.","translation":"Benden uzun."},{"sentence":"This is the most interesting book.","translation":"Bu en ilginç kitap."},{"sentence":"He is better than his brother at chess.","translation":"Satrançta kardeşinden iyidir."}]',rules:'["Short adj (1 syllable): -er/-est (tall→taller→tallest)","Adj ending in -y: -ier/-iest (happy→happier→happiest)","Long adj (2+ syllables): more/most (interesting→more interesting→most interesting)","Irregular: good→better→best, bad→worse→worst, far→farther→farthest","Comparatives use \\"than\\": She is older than me."]',common_mistakes:'[{"wrong":"She is more tall than me.","correct":"She is taller than me.","explanation":"Short adjectives use -er, not \\"more\\"."},{"wrong":"He is the most good.","correct":"He is the best.","explanation":"\\"Good\\" is irregular: good→better→best."}]',order_index:17,prerequisite_topics:"[]"},{id:18,name:"Question Formation",slug:"question-formation",category:"sentence_structure",cefr_level:"A1",description:"How to form questions in English: yes/no questions, Wh-questions, tag questions.",explanation_en:"English questions change word order. Yes/no questions invert the subject and auxiliary. Wh-questions start with a question word.",explanation_tr:"İngilizce sorularda sözcük sırası değişir. Evet/hayır soruları yardımcı fiili öne alır. Wh-soruları soru kelimesiyle başlar.",examples:`[{"sentence":"Do you like coffee?","translation":"Kahve sever misin?"},{"sentence":"Where do you live?","translation":"Nerede yaşıyorsun?"},{"sentence":"What are you doing?","translation":"Ne yapıyorsun?"},{"sentence":"You're coming, aren't you?","translation":"Geliyorsun, değil mi?"}]`,rules:'["Yes/No: Auxiliary + Subject + Main verb? (Do you work?)","Wh-: Wh-word + Auxiliary + Subject + Main verb? (Where do you work?)","Who/What as subject: Who works here? (no auxiliary needed)","Tag questions: positive → negative tag, negative → positive tag"]',common_mistakes:'[{"wrong":"Where you live?","correct":"Where do you live?","explanation":"You need \\"do/does\\" in Present Simple questions."},{"wrong":"What means this?","correct":"What does this mean?","explanation":"Use \\"does\\" and base form for Wh-questions."}]',order_index:18,prerequisite_topics:"[]"},{id:19,name:"Word Order",slug:"word-order",category:"sentence_structure",cefr_level:"A2",description:"The standard English sentence structure: Subject-Verb-Object and adverb placement.",explanation_en:"English follows SVO (Subject-Verb-Object) word order. Adverbs and adjectives have specific positions in the sentence.",explanation_tr:"İngilizce ÖYN (Özne-Yüklem-Nesne) sözcük sırasını takip eder. Zarflar ve sıfatlar cümlede belirli yerlere konur.",examples:'[{"sentence":"I always drink coffee in the morning.","translation":"Sabahları her zaman kahve içerim."},{"sentence":"She quickly finished her homework.","translation":"Ödevini hızlıca bitirdi."}]',rules:'["Basic order: Subject + Verb + Object (I read books)","Adverbs of frequency before main verb: I always eat breakfast","Adverbs of frequency after \\"be\\": She is always late","Adjectives before nouns: a big red car","Time expressions usually at end: I work every day"]',common_mistakes:'[{"wrong":"I drink always coffee.","correct":"I always drink coffee.","explanation":"Frequency adverbs go before the main verb."},{"wrong":"She is late always.","correct":"She is always late.","explanation":"Frequency adverbs go after \\"be\\"."}]',order_index:19,prerequisite_topics:'["present-simple"]'},{id:20,name:"Subject-Verb Agreement",slug:"subject-verb-agreement",category:"sentence_structure",cefr_level:"B1",description:"Making sure the subject and verb match in number.",explanation_en:"The verb must agree with its subject in number. Singular subjects take singular verbs, plural subjects take plural verbs.",explanation_tr:"Fiil, öznesiyle sayı bakımından uyumlu olmalıdır. Tekil özneler tekil fiiller, çoğul özneler çoğul fiiller alır.",examples:'[{"sentence":"The team works hard.","translation":"Takım çok çalışır."},{"sentence":"The students are studying.","translation":"Öğrenciler ders çalışıyor."},{"sentence":"Everyone has a different opinion.","translation":"Herkesin farklı bir görüşü var."}]',rules:'["Singular: he/she/it + V-s (The dog runs.)","Plural: they/we/you + V (The dogs run.)","everyone/everybody/someone/nobody = singular verb","The news IS (uncountable nouns are singular)","Neither...nor/Either...or: verb agrees with the nearest subject"]',common_mistakes:'[{"wrong":"Everyone have a phone.","correct":"Everyone has a phone.","explanation":"\\"Everyone\\" is singular and takes \\"has\\"."},{"wrong":"The news are bad.","correct":"The news is bad.","explanation":"\\"News\\" is uncountable and takes singular verb."}]',order_index:20,prerequisite_topics:'["present-simple"]'}],grammar_exercises:[{id:1,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"She ___ (go) to school every day.",options:null,correct_answer:"goes",explanation:'Third person singular: add -es to "go".',explanation_tr:'Üçüncü tekil şahıs için "go" fiiline -es eklenir.',hint:null,context:null},{id:2,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"They ___ (not/like) cold weather.",options:null,correct_answer:"don't like",explanation:`For plural subjects, use "don't" + base verb.`,explanation_tr:`Çoğul özneler için "don't" + yalın fiil kullanılır.`,hint:null,context:null},{id:3,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"He ___ breakfast at 7:30 AM every morning.",options:'["eat","eats","eating","is eat"]',correct_answer:"eats",explanation:"He/she/it takes verb-s in Present Simple.",explanation_tr:"He/she/it öznelerinde fiile -s takısı gelir.",hint:null,context:null},{id:4,topic_id:1,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:`Find and correct the error: "She don't like swimming."`,options:null,correct_answer:"She doesn't like swimming.",explanation:`Use "doesn't" for he/she/it negatives.`,explanation_tr:`He/she/it öznelerinde olumsuzluk için "doesn't" kullanılır.`,hint:null,context:null},{id:5,topic_id:1,exercise_type:"sentence_transform",cefr_level:"A1",difficulty:2,question:'Make this sentence negative: "He plays tennis on Sundays."',options:null,correct_answer:"He doesn't play tennis on Sundays.",explanation:"Negative form: doesn't + base verb (play).",explanation_tr:`Olumsuz yaparken "doesn't" gelir ve fiil yalın kalır.`,hint:null,context:null},{id:6,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"My brother ___ (watch) television in the evenings.",options:null,correct_answer:"watches",explanation:"Verbs ending in -ch add -es.",explanation_tr:"-ch ile biten fiillere 3. tekil şahısta -es eklenir.",hint:null,context:null},{id:7,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"___ your sister speak German?",options:'["Do","Does","Is","Are"]',correct_answer:"Does",explanation:'Use "Does" for singular third-person questions.',explanation_tr:'3. tekil şahıs soru cümlelerinde "Does" başa gelir.',hint:null,context:null},{id:8,topic_id:1,exercise_type:"sentence_creation",cefr_level:"A1",difficulty:3,question:"Write a sentence about your daily routine using Present Simple.",options:null,correct_answer:"[free response]",explanation:'Use Present Simple to express daily habits (e.g. "I wake up early.").',explanation_tr:"Geniş zaman kullanarak günlük rutininiz hakkında bir cümle yazın.",hint:null,context:null},{id:9,topic_id:2,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"Look! The children ___ (play) in the garden.",options:null,correct_answer:"are playing",explanation:"Use am/is/are + V-ing for actions happening now.",explanation_tr:"Şu anda gerçekleşen eylemler için am/is/are + fiil-ing kullanılır.",hint:null,context:null},{id:10,topic_id:2,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"What ___ you ___ right now?",options:'["are...doing","do...do","is...doing","are...do"]',correct_answer:"are...doing",explanation:"Present Continuous question: Are + subject + V-ing?",explanation_tr:"Şimdiki zaman soru yapısı: Are you doing?",hint:null,context:null},{id:11,topic_id:2,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:'Find and correct the error: "I am know the answer."',options:null,correct_answer:"I know the answer.",explanation:'Stative verbs like "know" are not used in continuous form.',explanation_tr:'"Know" durum bildiren bir fiildir, -ing almaz.',hint:null,context:null},{id:12,topic_id:2,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"Listen! Someone ___ (knock) on the front door.",options:null,correct_answer:"is knocking",explanation:"Singular subject takes 'is' + V-ing.",explanation_tr:"Tekil özne 'is' + fiil-ing alır.",hint:null,context:null},{id:13,topic_id:3,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"Yesterday, we ___ (visit) the museum in the city center.",options:null,correct_answer:"visited",explanation:"Regular past tense adds -ed.",explanation_tr:"Düzenli geçmiş zaman fiilleri -ed alır.",hint:null,context:null},{id:14,topic_id:3,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Did you ___ the new movie last night?",options:'["see","saw","seen","seeing"]',correct_answer:"see",explanation:'After "Did", use the base verb (V1).',explanation_tr:'"Did" yardımcı fiilinden sonra fiilin 1. hali gelir.',hint:null,context:null},{id:15,topic_id:3,exercise_type:"error_correction",cefr_level:"A2",difficulty:2,question:'Find and correct the error: "They goed to Italy last summer."',options:null,correct_answer:"They went to Italy last summer.",explanation:'"Go" is an irregular verb: go -> went -> gone.',explanation_tr:'"Go" düzensiz bir fiildir, geçmiş hali "went"tir.',hint:null,context:null},{id:16,topic_id:4,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"I ___ (read) a book when the power went out.",options:null,correct_answer:"was reading",explanation:"Use was/were + V-ing for past background action.",explanation_tr:"Geçmişte yarıda kesilen süregelen eylem için was/were + V-ing kullanılır.",hint:null,context:null},{id:17,topic_id:4,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"What ___ you doing at 9 PM yesterday?",options:'["were","was","did","are"]',correct_answer:"were",explanation:'Use "were" with "you" in past continuous.',explanation_tr:'"You" öznesi ile geçmiş zamanda "were" kullanılır.',hint:null,context:null},{id:18,topic_id:5,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"I ___ never ___ (see) such a beautiful sunset before.",options:null,correct_answer:"have...seen",explanation:"Present perfect for life experiences: have/has + V3.",explanation_tr:"Deneyimler için have/has + V3 kullanılır.",hint:null,context:null},{id:19,topic_id:5,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:1,question:"She has not received the official letter ___.",options:'["yet","already","just","ago"]',correct_answer:"yet",explanation:'"Yet" is placed at the end of negative sentences.',explanation_tr:'Olumsuz Present Perfect cümlelerinin sonunda "yet" kullanılır.',hint:null,context:null},{id:20,topic_id:5,exercise_type:"error_correction",cefr_level:"B1",difficulty:2,question:'Find and correct the error: "I have visited Rome two years ago."',options:null,correct_answer:"I visited Rome two years ago.",explanation:"Specific finished time expressions (two years ago) require Past Simple.",explanation_tr:'Belirli geçmiş zaman ifadelerinde ("ago") Past Simple kullanılır.',hint:null,context:null},{id:21,topic_id:8,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"Look at those dark storm clouds! It ___ (rain).",options:null,correct_answer:"is going to rain",explanation:'Use "be going to" for predictions based on present evidence.',explanation_tr:'Mevcut bir kanıta dayanan tahminlerde "be going to" kullanılır.',hint:null,context:null},{id:22,topic_id:8,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Don't worry, I ___ carry that heavy bag for you.",options:'["will","am going","going to","shall to"]',correct_answer:"will",explanation:'Use "will" for spontaneous offers and decisions.',explanation_tr:'Anlık yardım teklifleri ve kararlar için "will" kullanılır.',hint:null,context:null},{id:23,topic_id:9,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"Drivers ___ stop when the traffic light turns red.",options:null,correct_answer:"must",explanation:'Use "must" for strong legal obligation.',explanation_tr:'Yasal ve zorunlu kurallar için "must" kullanılır.',hint:null,context:null},{id:24,topic_id:9,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Could you please ___ me the salt?",options:'["pass","to pass","passing","passed"]',correct_answer:"pass",explanation:"Modals are followed by the bare infinitive (base form).",explanation_tr:"Modal yardımcı fiillerinden sonra fiil yalın gelir.",hint:null,context:null},{id:25,topic_id:10,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"If it ___ (snow) tomorrow, we will go skiing.",options:null,correct_answer:"snows",explanation:"First Conditional if-clause uses Present Simple.",explanation_tr:"First Conditional'da if cümlesi Geniş Zaman alır.",hint:null,context:null},{id:26,topic_id:10,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:2,question:"If I won the lottery, I ___ buy a house by the sea.",options:'["would","will","can","am going to"]',correct_answer:"would",explanation:"Second conditional main clause: would + V1.",explanation_tr:"Second Conditional ana cümlesinde would + fiil kullanılır.",hint:null,context:null},{id:27,topic_id:11,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"The telephone ___ (invent) by Alexander Graham Bell.",options:null,correct_answer:"was invented",explanation:"Past passive: was/were + past participle (V3).",explanation_tr:"Geçmiş edilgen yapı: was/were + V3.",hint:null,context:null},{id:28,topic_id:11,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:1,question:"English ___ in many international organizations worldwide.",options:'["is spoken","speaks","is speaking","has spoken"]',correct_answer:"is spoken",explanation:"Present passive: is/are + V3.",explanation_tr:"Geniş zaman edilgen yapı: is/are + V3.",hint:null,context:null},{id:29,topic_id:14,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"She wants to become ___ architect in the future.",options:'["an","a","the","no article"]',correct_answer:"an",explanation:'Use "an" before words starting with a vowel sound.',explanation_tr:'Sesli harfle başlayan meslek isimlerinin önüne "an" gelir.',hint:null,context:null},{id:30,topic_id:14,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"___ honesty is one of the most valued qualities.",options:'["no article","The","A","An"]',correct_answer:"no article",explanation:"Abstract nouns in a general sense take no article.",explanation_tr:"Genel anlamda kullanılan soyut isimler artikel almaz.",hint:null,context:null},{id:31,topic_id:15,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"The conference starts ___ 9:00 AM on Monday.",options:'["at","in","on","by"]',correct_answer:"at",explanation:'Use "at" for precise clock times.',explanation_tr:'Belirli saatler için "at" edatı kullanılır.',hint:null,context:null},{id:32,topic_id:15,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Are you interested ___ learning a new foreign language?",options:'["in","at","about","with"]',correct_answer:"in",explanation:'"Interested" is always followed by the preposition "in".',explanation_tr:'"Interested" sıfatı "in" edatı ile kullanılır.',hint:null,context:null}],vocabulary_items:[],reading_materials:[{id:1,title:"My Daily Routine",content:`Every morning, I wake up at 7 o'clock. First, I wash my face and brush my teeth. Then I have breakfast. I usually eat bread and cheese and drink tea.

After breakfast, I get dressed and go to work. I take the bus to the office. I work from 9 AM to 6 PM. During lunch break, I eat at a small restaurant near the office.

In the evening, I come home and cook dinner. After dinner, I watch TV or read a book. Sometimes I call my friends. I usually go to bed at 11 PM.

On weekends, I like to spend time with my family. We sometimes go to the park or visit relatives. I also like playing football on Saturdays.`,cefr_level:"A1",category:"daily_life",word_count:120,estimated_reading_time:3,key_vocabulary:'["routine","breakfast","relatives","weekend"]',comprehension_questions:`[{"question":"What time does the person wake up?","options":["6 o'clock","7 o'clock","8 o'clock","9 o'clock"],"correct":"7 o'clock","type":"detail"},{"question":"How does the person go to work?","options":["By car","By bus","On foot","By train"],"correct":"By bus","type":"detail"},{"question":"What is the main topic of this text?","options":["A person's hobbies","A person's daily life","A person's work problems","A person's family"],"correct":"A person's daily life","type":"main_idea"}]`,summary:"A simple description of a person's daily routine.",source:null,created_at:"2026-09-27 15:23:14"},{id:2,title:"The History of the Internet",content:`The Internet has changed the world more than almost any other invention. But how did it start?

The idea of connecting computers began in the 1960s. The United States military wanted a communication system that could survive a nuclear attack. They created ARPANET in 1969, which connected four university computers.

Throughout the 1970s and 1980s, more computers joined the network. Scientists and researchers used it to share information. However, it was difficult for ordinary people to use.

Everything changed in 1991 when Tim Berners-Lee invented the World Wide Web. The Web made it easy to create and access web pages using links.

By the mid-1990s, millions of people were using the Internet. Companies like Amazon and Google were founded during this period.

Today, the Internet connects billions of people worldwide. We use it for communication, entertainment, education, shopping, and much more.`,cefr_level:"B1",category:"technology",word_count:160,estimated_reading_time:5,key_vocabulary:'["invention","network","browser","transform"]',comprehension_questions:'[{"question":"When was ARPANET created?","options":["1959","1969","1979","1991"],"correct":"1969","type":"detail"},{"question":"Who invented the World Wide Web?","options":["Bill Gates","Steve Jobs","Tim Berners-Lee","Mark Zuckerberg"],"correct":"Tim Berners-Lee","type":"detail"},{"question":"What is the main idea of this text?","options":["The dangers of the Internet","How to use the Internet","The history and development of the Internet","The future of technology"],"correct":"The history and development of the Internet","type":"main_idea"}]',summary:"A historical overview of how the Internet developed.",source:null,created_at:"2026-09-27 15:23:14"},{id:3,title:"A Weekend in London",content:`Last month, Emily traveled to London for a weekend trip. She arrived on Friday evening and took the underground train, famously called the Tube, directly to her hotel in central London.

On Saturday morning, the weather was surprisingly sunny. Emily started her day by visiting the British Museum, where she saw ancient Egyptian artifacts and historic manuscripts. Afterwards, she strolled along the River Thames to see Big Ben and the Houses of Parliament. For lunch, she enjoyed traditional British fish and chips at a cozy pub.

In the afternoon, Emily rode the London Eye, which offered a breathtaking panoramic view of the entire city. On Sunday, before heading back to the airport, she visited Covent Garden to watch street performers and buy souvenirs for her friends.

She loved the vibrant atmosphere and decided that she would definitely return to the United Kingdom next year.`,cefr_level:"A2",category:"travel",word_count:145,estimated_reading_time:4,key_vocabulary:'["underground","manuscript","panoramic","souvenir"]',comprehension_questions:`[{"question":"What is the famous nickname of the London underground?","options":["The Metro","The Tube","The Cable","The Transit"],"correct":"The Tube","type":"detail"},{"question":"What was the weather like on Saturday morning?","options":["Rainy","Cloudy","Sunny","Snowy"],"correct":"Sunny","type":"detail"},{"question":"What is the main topic of this passage?","options":["The history of Big Ben","Emily's weekend travel in London","How to buy train tickets","London restaurant reviews"],"correct":"Emily's weekend travel in London","type":"main_idea"}]`,summary:"A delightful travelogue recounting a tourist's weekend exploration in London.",source:null,created_at:"2026-09-28 00:00:00"},{id:4,title:"The Power of Atomic Habits",content:`Most people believe that massive success requires massive action. Whether it is getting in shape, learning a new language, or building a successful career, we often convince ourselves that life-altering transformations demand monumental effort.

However, behavioral psychologists argue that tiny changes, repeated consistently, yield astonishing long-term results. This concept is often referred to as the compounding effect of habits. Improving by just one percent each day may seem imperceptible in the moment, but over the course of a year, those small daily gains accumulate into a thirty-seven-fold improvement.

Conversely, bad habits compound in the exact same manner. Procrastinating for fifteen minutes or skipping a study session seems harmless in isolation, but repeated over months, it leads to stagnation.

The key to building enduring habits is focusing on systems rather than mere goals. Goals are about the results you desire; systems are about the daily processes that lead to those results. When you fall in love with the daily process, lasting progress inevitably follows.`,cefr_level:"B2",category:"science",word_count:180,estimated_reading_time:5,key_vocabulary:'["monumental","compounding","imperceptible","stagnation"]',comprehension_questions:`[{"question":"According to the text, what leads to astonishing long-term results?","options":["Massive short-term effort","Tiny changes repeated consistently","Relying solely on willpower","Setting extreme goals"],"correct":"Tiny changes repeated consistently","type":"detail"},{"question":"What is the difference between goals and systems?","options":["Goals are for work, systems are for health","Goals are desired results, systems are daily processes","Goals never change, systems change daily","There is no difference"],"correct":"Goals are desired results, systems are daily processes","type":"detail"},{"question":"What is the author's primary conclusion?","options":["Daily habits do not matter","Systems and processes create lasting progress","Goals should be avoided entirely","Only psychology experts can build habits"],"correct":"Systems and processes create lasting progress","type":"main_idea"}]`,summary:"An insightful exploration of how small behavioral habits compound over time.",source:null,created_at:"2026-09-28 00:00:00"},{id:5,title:"Artificial Intelligence in Everyday Life",content:`Artificial Intelligence (AI) has rapidly transitioned from speculative science fiction into an indispensable facet of contemporary society. Today, machine learning algorithms quietly underpin ubiquitous services, from personalized content recommendations and predictive navigation systems to sophisticated medical diagnostic imaging.

While these advancements promise unprecedented efficiency and breakthroughs in scientific research, they also engender profound ethical and socio-economic dilemmas. Algorithmic bias, data privacy infringements, and the potential displacement of skilled labor require comprehensive international regulatory frameworks.

Experts argue that the objective should not be to impede technological innovation, but rather to cultivate human-centric AI systems that augment human creativity while adhering strictly to ethical standards. As intelligent technologies proliferate, the boundary between automated decision-making and human discernment will demand continual re-evaluation.`,cefr_level:"C1",category:"technology",word_count:195,estimated_reading_time:6,key_vocabulary:'["indispensable","ubiquitous","engender","proliferate"]',comprehension_questions:'[{"question":"In what fields does the text mention AI being quietly utilized?","options":["Only video games","Navigation, content recommendations, and medical imaging","Only aerospace engineering","Banking branches without computers"],"correct":"Navigation, content recommendations, and medical imaging","type":"detail"},{"question":"What main concern does the author highlight regarding modern AI?","options":["That computers will shut down","Ethical dilemmas, algorithmic bias, and labor displacement","That electricity will run out","That humans will stop speaking English"],"correct":"Ethical dilemmas, algorithmic bias, and labor displacement","type":"detail"},{"question":"What should be the primary objective according to experts?","options":["Banning all machine learning","Cultivating human-centric AI that augments human creativity","Replacing human workers completely","Ignoring privacy regulations"],"correct":"Cultivating human-centric AI that augments human creativity","type":"main_idea"}]',summary:"A sophisticated examination of the opportunities and ethical challenges of artificial intelligence.",source:null,created_at:"2026-09-28 00:00:00"}],writing_prompts:[{id:1,type:"sentence",cefr_level:"A1",prompt:"Write 5 sentences about your family using Present Simple.",instructions:"Use Present Simple tense.",example_response:null,evaluation_criteria:null,category:"daily_life",word_limit_min:20,word_limit_max:60},{id:2,type:"paragraph",cefr_level:"A2",prompt:"Write a short paragraph about your favorite food.",instructions:"Describe the food, why you like it.",example_response:null,evaluation_criteria:null,category:"daily_life",word_limit_min:50,word_limit_max:120},{id:3,type:"email",cefr_level:"B1",prompt:"Write an email to your friend inviting them to your birthday party.",instructions:"Include: date, time, place.",example_response:null,evaluation_criteria:null,category:"daily_life",word_limit_min:60,word_limit_max:150},{id:4,type:"opinion",cefr_level:"B1",prompt:"Do you think social media is good or bad for young people? Why?",instructions:"Give your opinion with at least 2 reasons.",example_response:null,evaluation_criteria:null,category:"technology",word_limit_min:100,word_limit_max:200},{id:5,type:"essay",cefr_level:"B2",prompt:"Some people think that remote work is the future. Others believe offices are essential. Discuss both views.",instructions:"Write a balanced essay.",example_response:null,evaluation_criteria:null,category:"work",word_limit_min:200,word_limit_max:350},{id:6,type:"letter",cefr_level:"B2",prompt:"Write a formal letter of complaint to a hotel manager regarding a reservation problem.",instructions:"Explain what went wrong, describe your inconvenience, and request appropriate compensation or an apology.",example_response:null,evaluation_criteria:null,category:"travel",word_limit_min:120,word_limit_max:220},{id:7,type:"review",cefr_level:"B2",prompt:"Write a review of a book or movie that significantly influenced your worldview.",instructions:"Provide a brief synopsis without spoilers, discuss its key themes, and explain why you recommend it.",example_response:null,evaluation_criteria:null,category:"culture",word_limit_min:150,word_limit_max:250},{id:8,type:"proposal",cefr_level:"C1",prompt:"Write a proposal to your local city council proposing practical measures to reduce traffic congestion and carbon emissions.",instructions:"Outline the current problem, propose at least two viable solutions, and assess their potential impact.",example_response:null,evaluation_criteria:null,category:"environment",word_limit_min:200,word_limit_max:350},{id:9,type:"opinion",cefr_level:"C1",prompt:"Should higher education be completely free for all students, or should individuals bear the financial burden?",instructions:"Evaluate economic advantages and drawbacks, reference societal benefits, and defend a clear thesis.",example_response:null,evaluation_criteria:null,category:"education",word_limit_min:220,word_limit_max:400},{id:10,type:"essay",cefr_level:"C1",prompt:"Write an analytical essay examining the impact of artificial intelligence adoption on modern healthcare and medical ethics.",instructions:"Analyze diagnostic precision vs data privacy, potential medical errors, and provide actionable recommendations.",example_response:null,evaluation_criteria:null,category:"technology",word_limit_min:250,word_limit_max:450}],speaking_scenarios:[{id:1,title:"At a Restaurant",description:"Order food and drinks at a restaurant.",cefr_level:"A1",category:"restaurant",situation:"You are at a restaurant and want to order food.",ai_role:"Friendly waiter",user_role:"Customer",starter_message:"Good evening! Welcome to The Garden Restaurant. What would you like to order?",key_vocabulary:'["menu","order","appetizer","main course","dessert","bill"]',key_phrases:'["I would like...","Can I have...","The bill, please."]',objectives:'["Order food","Ask about a dish","Request the bill"]'},{id:2,title:"Job Interview",description:"Practice a job interview.",cefr_level:"B1",category:"work",situation:"You are interviewing for a position at a tech company.",ai_role:"HR manager",user_role:"Job candidate",starter_message:"Hello! Thank you for coming in today. Tell me a little about yourself.",key_vocabulary:'["experience","qualification","skill","strength","weakness"]',key_phrases:'["I have experience in...","My strengths include..."]',objectives:'["Introduce yourself","Describe your experience","Ask about the position"]'},{id:3,title:"Casual Conversation",description:"Have a friendly conversation about hobbies.",cefr_level:"A2",category:"social",situation:"You are meeting someone new at a social event.",ai_role:"Friendly person",user_role:"Someone making friends",starter_message:"Hi there! I'm Alex. What brings you here today?",key_vocabulary:'["hobby","interest","free time","enjoy","favorite"]',key_phrases:`["Nice to meet you!","I'm interested in...","What do you do for fun?"]`,objectives:'["Introduce yourself","Talk about hobbies","Ask questions"]'},{id:4,title:"Hotel Check-In & Inquiries",description:"Check in at a boutique hotel and ask about amenities.",cefr_level:"A2",category:"travel",situation:"You have arrived at your hotel in Edinburgh after a long journey.",ai_role:"Polite hotel receptionist",user_role:"Hotel guest",starter_message:"Good afternoon! Welcome to The Royal Crescent Hotel. Do you have a reservation with us?",key_vocabulary:'["reservation","keycard","breakfast","wifi","luggage"]',key_phrases:'["I have a booking under...","What time is breakfast served?","Could you help with my bags?"]',objectives:'["Confirm your reservation","Ask about Wi-Fi or breakfast hours","Request your room key"]'},{id:5,title:"Negotiating a Project Deadline",description:"Discuss workload and request a deadline extension professionally.",cefr_level:"B2",category:"work",situation:"Your project team encountered unexpected software bugs and you need three more days.",ai_role:"Direct but fair department manager",user_role:"Lead project specialist",starter_message:"Hi there! I wanted to check in on our client report due Friday. How are things looking on your end?",key_vocabulary:'["deadline","extension","bottleneck","deliverable","milestone"]',key_phrases:'["We have made solid progress, but...","Would it be feasible to extend...","I can assure you that..."]',objectives:'["Explain the unexpected challenge","Propose a revised realistic deadline","Reassure high quality standards"]'},{id:6,title:"Discussing Cultural Traditions",description:"Share cultural traditions, etiquette, and social habits with an international friend.",cefr_level:"C1",category:"social",situation:"You and a foreign exchange student are sharing typical customs from your home countries.",ai_role:"Culturally curious international student",user_role:"Engaged conversation partner",starter_message:"It is so fascinating how different cultures greet each other! In my country, we value personal space quite a lot. How do people normally greet each other in your culture?",key_vocabulary:'["etiquette","hospitality","customary","nuance","tradition"]',key_phrases:'["In my culture, it is customary to...","A unique nuance is that...","People generally appreciate when..."]',objectives:'["Describe greeting and hospitality customs","Compare cultural norms","Explain a unique traditional event"]'}],listening_materials:[{id:1,title:"Introducing Yourself",description:"A person introduces themselves.",cefr_level:"A1",category:"daily_life",audio_text:"Hello! My name is Sarah. I am 28 years old. I am from London, but I live in Istanbul now. I work as a teacher at an international school. In my free time, I like reading books and cooking.",speech_rate:"slow",accent:"british",duration_seconds:null,transcript:"Hello! My name is Sarah. I am 28 years old. I am from London, but I live in Istanbul now. I work as a teacher at an international school. In my free time, I like reading books and cooking.",comprehension_questions:'[{"question":"Where is Sarah from?","options":["Istanbul","London","Paris","Berlin"],"correct":"London","type":"detail"},{"question":"What is her job?","options":["Doctor","Teacher","Engineer","Chef"],"correct":"Teacher","type":"detail"}]',key_vocabulary:'["introduce","international","free time"]',difficulty_notes:"Slow, clear British English."},{id:2,title:"A Phone Conversation",description:"Two friends making plans.",cefr_level:"A2",category:"daily_life",audio_text:"Mark: Hey Lisa, are you free this Saturday? Lisa: Yes, I think so. Why? Mark: I was thinking we could go to that new Italian restaurant downtown. Lisa: Oh yes! My colleague went there last week. She said the pasta was amazing. Mark: Great! How about 7 o'clock? Lisa: That works for me. See you Saturday!",speech_rate:"normal",accent:"american",duration_seconds:null,transcript:`Mark: Hey Lisa, are you free this Saturday?
Lisa: Yes, I think so. Why?
Mark: I was thinking we could go to that new Italian restaurant downtown.
Lisa: Oh yes! My colleague went there last week. She said the pasta was amazing.
Mark: Great! How about 7 o'clock?
Lisa: That works for me. See you Saturday!`,comprehension_questions:`[{"question":"What day are they planning to meet?","options":["Friday","Saturday","Sunday","Monday"],"correct":"Saturday","type":"detail"},{"question":"What type of restaurant?","options":["Chinese","Mexican","Italian","Turkish"],"correct":"Italian","type":"detail"},{"question":"What time will they meet?","options":["6 o'clock","7 o'clock","8 o'clock","9 o'clock"],"correct":"7 o'clock","type":"detail"}]`,key_vocabulary:'["downtown","colleague","amazing"]',difficulty_notes:"Natural dialogue with common conversational phrases."},{id:3,title:"Airport Check-in & Security",description:"A traveler interacts with an airline agent at the airport.",cefr_level:"B1",category:"travel",audio_text:"Agent: Good morning, where are you flying to today? Passenger: Good morning. I am flying to New York on flight 402. Agent: May I see your passport and ticket, please? Passenger: Here you are. Agent: Do you have any baggage to check in? Passenger: Yes, just this one suitcase, and I have this small backpack as carry-on. Agent: Perfect. Here is your boarding pass. Gate 14, boarding begins at 10:15.",speech_rate:"normal",accent:"american",duration_seconds:null,transcript:`Agent: Good morning, where are you flying to today?
Passenger: Good morning. I am flying to New York on flight 402.
Agent: May I see your passport and ticket, please?
Passenger: Here you are.
Agent: Do you have any baggage to check in?
Passenger: Yes, just this one suitcase, and I have this small backpack as carry-on.
Agent: Perfect. Here is your boarding pass. Gate 14, boarding begins at 10:15.`,comprehension_questions:`[{"question":"What is the passenger's destination?","options":["London","New York","Tokyo","Paris"],"correct":"New York","type":"detail"},{"question":"How many suitcases is the passenger checking in?","options":["None","One","Two","Three"],"correct":"One","type":"detail"},{"question":"What time does boarding begin?","options":["9:45","10:00","10:15","10:30"],"correct":"10:15","type":"detail"}]`,key_vocabulary:'["boarding pass","suitcase","carry-on","gate"]',difficulty_notes:"Clear American English airport interaction."},{id:4,title:"Renewable Energy Transition",description:"A science podcast excerpt discussing solar and wind power innovation.",cefr_level:"B2",category:"science",audio_text:"Host: In today's climate briefing, we examine the unprecedented transition towards renewable energy. Over the past decade, solar panel manufacturing costs have dropped by more than eighty percent, making solar energy cheaper than fossil fuels in numerous regions. Wind turbines, particularly offshore installations, now generate substantial power during peak demand periods. However, energy storage remains the primary hurdle. Engineers worldwide are investing heavily in advanced battery chemistry and grid-scale hydrogen storage to ensure stability when the sun isn't shining.",speech_rate:"normal",accent:"british",duration_seconds:null,transcript:"Host: In today's climate briefing, we examine the unprecedented transition towards renewable energy. Over the past decade, solar panel manufacturing costs have dropped by more than eighty percent, making solar energy cheaper than fossil fuels in numerous regions. Wind turbines, particularly offshore installations, now generate substantial power during peak demand periods. However, energy storage remains the primary hurdle. Engineers worldwide are investing heavily in advanced battery chemistry and grid-scale hydrogen storage to ensure stability when the sun isn't shining.",comprehension_questions:'[{"question":"By how much have solar manufacturing costs dropped over the past decade?","options":["About 20 percent","Around 50 percent","More than 80 percent","Costs have not changed"],"correct":"More than 80 percent","type":"detail"},{"question":"According to the speaker, what remains the primary hurdle for renewable energy?","options":["Lack of sunlight","Energy storage","Government taxes","Turbine noise"],"correct":"Energy storage","type":"detail"},{"question":"What are engineers investing in to ensure power grid stability?","options":["Burning more coal","Advanced battery chemistry and hydrogen storage","Shutting down solar panels","Nuclear submarines"],"correct":"Advanced battery chemistry and hydrogen storage","type":"main_idea"}]',key_vocabulary:'["unprecedented","fossil fuels","offshore","hurdle","stability"]',difficulty_notes:"Sophisticated British English podcast commentary on technological advancements."}],assessment_question_bank:[{id:1,skill:"grammar",question_type:"multiple_choice",cefr_level:"A1",topic:"Present Simple & 3rd Person Singular",question:"She ___ to the gym three times a week to stay healthy.",options:'["go","goes","going","is go"]',correct_answer:"goes",explanation:"In the Present Simple tense, third-person singular subjects (he, she, it) require the verb suffix -s or -es.",explanation_tr:"Geniş zamanda (Present Simple) 3. tekil şahıslarda (he/she/it) fiil sonuna -s veya -es takısı alır."},{id:2,skill:"grammar",question_type:"multiple_choice",cefr_level:"A1",topic:"Prepositions of Time (at, in, on)",question:"The flight is scheduled to depart ___ 9:30 AM ___ Monday morning.",options:'["at / on","in / on","on / at","at / in"]',correct_answer:"at / on",explanation:'Standard English uses "at" for precise clock times (at 9:30 AM) and "on" for days and specific day-parts (on Monday).',explanation_tr:'Saatlerde "at" (at 9:30 AM), günlerde ve belirli gün vakitlerinde "on" (on Monday) edatı kullanılır.'},{id:3,skill:"grammar",question_type:"multiple_choice",cefr_level:"A2",topic:"Past Continuous vs Past Simple",question:"While I ___ dinner in the kitchen, the fire alarm suddenly went off.",options:'["was cooking","cooked","have cooked","am cooking"]',correct_answer:"was cooking",explanation:"The Past Continuous (was cooking) expresses an ongoing background action interrupted by a completed action in the Past Simple (went off).",explanation_tr:"Geçmişte devam eden bir eylem aniden başka bir olayla kesildiğinde devam eden eylem için Past Continuous (was cooking) kullanılır."},{id:4,skill:"grammar",question_type:"multiple_choice",cefr_level:"A2",topic:"Irregular Comparatives",question:"Traffic congestion during the evening rush hour is much ___ than it was last year.",options:'["worse","more bad","badder","more worse"]',correct_answer:"worse",explanation:'"Bad" is an irregular adjective whose comparative form is "worse" (never "more bad" or "badder").',explanation_tr:'"Bad" düzensiz bir sıfattır ve karşılaştırma (comparative) hali "worse"tur; "more bad" veya "badder" denilemez.'},{id:5,skill:"grammar",question_type:"multiple_choice",cefr_level:"B1",topic:"Present Perfect with Since & For",question:"Our engineering team ___ at this research facility since the start of 2021.",options:'["has worked","is working","works","worked"]',correct_answer:"has worked",explanation:'The Present Perfect (has worked) is used with "since" to denote an action that began in the past and continues into the present moment.',explanation_tr:'"Since" ile geçmişteki belirli bir noktadan günümüze kadar kesintisiz süregelen eylemler için Present Perfect kullanılır.'},{id:6,skill:"grammar",question_type:"multiple_choice",cefr_level:"B1",topic:"Second Conditional (Unreal Present)",question:"If I ___ more disposable income, I would invest heavily in green energy startups.",options:'["had","have","would have","will have"]',correct_answer:"had",explanation:'The Second Conditional requires "If + Past Simple, would + base verb" to discuss hypothetical or counterfactual present situations.',explanation_tr:'2. Tip Koşul (Second Conditional), şimdiki zamana ait gerçek dışı/varsayımsal durumlarda "If + Past Simple, would + fiil" yapısını gerektirir.'},{id:7,skill:"grammar",question_type:"multiple_choice",cefr_level:"B2",topic:"Mixed Conditionals (Past Cause, Present Effect)",question:"If you ___ the high-speed train this morning, you wouldn't be stranded at this station right now.",options:`["hadn't missed","didn't miss","wouldn't miss","haven't missed"]`,correct_answer:"hadn't missed",explanation:`Mixed conditional (Type 3 + Type 2): A counterfactual past condition ("hadn't missed") produces a present hypothetical consequence ("wouldn't be stranded right now").`,explanation_tr:"Karma Koşul (Mixed Conditional): Geçmişteki gerçekleşmemiş bir eylemin (Type 3: hadn't missed) günümüzdeki etkisini (Type 2: wouldn't be stranded right now) anlatır."},{id:8,skill:"grammar",question_type:"multiple_choice",cefr_level:"B2",topic:"Passive Voice with Perfect Modals",question:"All proprietary software updates must ___ by the cybersecurity lead before deployment.",options:'["be authorized","have authorized","authorizing","to be authorized"]',correct_answer:"be authorized",explanation:'Passive structures after modal verbs require "modal + be + past participle" (must be authorized).',explanation_tr:'Modal fiillerin edilgen (passive) kullanımında "modal + be + V3" (must be authorized) yapısı zorunludur.'},{id:9,skill:"grammar",question_type:"multiple_choice",cefr_level:"C1",topic:"Negative & Restrictive Inversion",question:"Seldom ___ such remarkable synergy between rival academic institutions.",options:'["have we observed","we have observed","we observed","did we observed"]',correct_answer:"have we observed",explanation:"When restrictive or negative adverbs (seldom, rarely, scarcely) open a sentence, subject-auxiliary inversion is obligatory (Seldom + auxiliary + subject + verb).",explanation_tr:"Cümle başına gelen olumsuz/kısıtlayıcı zarflar (seldom, rarely vb.) devrik yapı gerektirir (yardımcı fiil öznenin önüne geçer: have we observed)."},{id:10,skill:"grammar",question_type:"multiple_choice",cefr_level:"C1",topic:"Mandative Subjunctive",question:"It is essential that each committee member ___ present at the executive vote tomorrow.",options:'["be","is","was","are"]',correct_answer:"be",explanation:'The mandative subjunctive (essential/vital/crucial that + base form of verb) requires the bare infinitive "be" regardless of subject person or number.',explanation_tr:'Mandative Subjunctive yapısında ("It is essential that..."), özne tekil de olsa fiil yalın halde (bare infinitive: be) kullanılır.'},{id:11,skill:"grammar",question_type:"multiple_choice",cefr_level:"C2",topic:"Inverted Conditionals (Had it not been for)",question:"Had it not been for her decisive intervention, the venture capital fund ___ into bankruptcy.",options:'["would have plunged","plunged","will have plunged","had plunged"]',correct_answer:"would have plunged",explanation:'The inverted third conditional formula "Had it not been for + noun" is completed by "subject + would have + past participle" in the main clause.',explanation_tr:'Devrik 3. tip koşul cümlesi ("Had it not been for..."), ana cümlede "would have + V3" (would have plunged) yapısı gerektirir.'},{id:12,skill:"grammar",question_type:"multiple_choice",cefr_level:"C2",topic:"Reduced Participle & Concessive Clauses",question:"Much ___ his unparalleled analytical acumen, the panel remained skeptical of his policy proposals.",options:'["as they admired","though they admire","that they admired","since they admired"]',correct_answer:"as they admired",explanation:'The concessive construction "Much as + subject + verb" expresses strong contrast ("Although they greatly admired...").',explanation_tr:'"Much as + özne + fiil" kalıbı, üst düzey resmi İngilizcede güçlü bir zıtlık/ödün (concession) belirtmek için kullanılır ("Ne kadar takdir etseler de...").'},{id:13,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"A1",topic:"Everyday Basic Nouns",question:"Which word refers to the meal that people eat in the middle of the day?",options:'["Lunch","Breakfast","Dinner","Supper"]',correct_answer:"Lunch",explanation:'"Lunch" is the standard term for the midday meal.',explanation_tr:'Öğle vakti yenen ana öğün için "lunch" kelimesi kullanılır.'},{id:14,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"A1",topic:"Antonyms of Basic Adjectives",question:'What is the opposite of the adjective "expensive"?',options:'["cheap","rich","fast","heavy"]',correct_answer:"cheap",explanation:'"Cheap" (inexpensive) is the direct antonym of "expensive".',explanation_tr:'"Expensive" (pahalı) kelimesinin zıt anlamlısı "cheap" (ucuz) sıfatıdır.'},{id:15,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"A2",topic:"Collocations with Make vs Do",question:"Do not worry if you ___ a mistake during conversation; it is a vital part of language learning.",options:'["make","do","create","build"]',correct_answer:"make",explanation:'English requires the fixed collocation "make a mistake", never "do a mistake".',explanation_tr:'İngilizcede "hata yapmak" eylemi "make a mistake" sabit tamlamasıyla ifade edilir; "do" kullanılmaz.'},{id:16,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"A2",topic:"Common Phrasal Verbs",question:"Could you please ___ my dog while I am away on vacation next weekend?",options:'["look after","look for","look into","look up"]',correct_answer:"look after",explanation:'"Look after" means to take care of someone or something.',explanation_tr:'"Look after", birine veya bir evcil hayvana göz kulak olmak, bakmak anlamına gelen deyimsel fiildir.'},{id:17,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"B1",topic:"Multi-word Verbs & Postponement",question:"The management board decided to ___ the product release until supply chain disruptions were resolved.",options:'["put off","call off","turn down","bring up"]',correct_answer:"put off",explanation:'"Put off" means to postpone or delay an event. "Call off" means to cancel entirely.',explanation_tr:'"Put off" ertelemek demektir. "Call off" ise tamamen iptal etmektir.'},{id:18,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"B1",topic:"False Friends (L1 Turkish Interference)",question:"She demonstrated profound compassion and genuine warmth towards the grieving family; she was an extraordinarily ___ person.",options:'["sympathetic","sympathy","antipathic","suspicious"]',correct_answer:"sympathetic",explanation:'In English, "sympathetic" denotes compassionate and understanding. In Turkish, "sempatik" translates to "likable" or "charming" (a classic false friend).',explanation_tr:'İngilizce "sympathetic" şefkatli, anlayışlı, acı paylaşan demektir. Türkçedeki "cana yakın/sempatik" anlamıyla karıştırılmamalıdır (false friend).'},{id:19,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"B2",topic:"Academic Word List (AWL) Collocations",question:"The research team spent months compiling comprehensive empirical data to ___ their initial hypothesis.",options:'["substantiate","manufacture","speculate","perpetuate"]',correct_answer:"substantiate",explanation:'"Substantiate" means to provide evidence to support or prove the truth of a claim or hypothesis.',explanation_tr:'"Substantiate", bir hipotezi veya iddiayı somut kanıtlarla doğrulamak/desteklemek anlamına gelen akademik bir fiildir.'},{id:20,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"B2",topic:"Dependent Prepositions",question:"Sustained exposure to extreme cognitive overload is rarely conducive ___ innovative thinking.",options:'["to","for","with","in"]',correct_answer:"to",explanation:'The adjective "conducive" takes the dependent preposition "to" (conducive to something).',explanation_tr:'"Conducive" (ortam hazırlayan, elverişli) sıfatı daima "to" edatı ile birlikte kullanılır ("conducive to").'},{id:21,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"C1",topic:"Advanced Register & Synonyms",question:"Digital payment interfaces have become so ___ that carrying physical currency is virtually unnecessary in modern metropolises.",options:'["ubiquitous","ephemeral","precarious","superfluous"]',correct_answer:"ubiquitous",explanation:'"Ubiquitous" means present, appearing, or found everywhere at once.',explanation_tr:'"Ubiquitous", her yerde aynı anda mevcut olan, son derece yaygınlaşmış anlamına gelen üst düzey akademik bir sıfattır.'},{id:22,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"C1",topic:"Idiomatic Binomials",question:"Unexpected travel cancellations and logistical friction are simply ___ of international investigative reporting.",options:'["part and parcel","safe and sound","ins and outs","by and large"]',correct_answer:"part and parcel",explanation:'"Part and parcel" is an established binomial idiom meaning an essential, unavoidable component of an experience.',explanation_tr:'"Part and parcel", bir işin veya durumun ayrılmaz, kaçınılmaz bir parçası anlamına gelen yerleşik bir İngilizce deyimdir.'},{id:23,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"C2",topic:"Semantic Precision (Disinterested vs Uninterested)",question:"An impartial magistrate must remain completely ___ throughout court proceedings, harboring no financial or personal stake in the verdict.",options:'["disinterested","uninterested","indifferent","apathetic"]',correct_answer:"disinterested",explanation:'"Disinterested" strictly denotes unbiased, impartial, and having no personal stake. "Uninterested" means not caring or bored.',explanation_tr:'"Disinterested" tarafsız, kişisel çıkarı olmayan ve adil demektir. Sıkılmış ya da ilgisiz anlamına gelen "uninterested" ile karıştırılmamalıdır.'},{id:24,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"C2",topic:"Advanced Literary Collocations",question:"The opposition minister attempted to cast ___ on the commissioner's fiscal probity during the televised parliamentary inquiry.",options:'["aspersions","allegations","assumptions","afflictions"]',correct_answer:"aspersions",explanation:`"Cast aspersions on" is a classic high-level idiom meaning to disparage, defame, or attack someone's reputation and integrity.`,explanation_tr:`"Cast aspersions on (someone's integrity/character)", birinin dürüstlüğüne ya da itibarına leke sürmek, karalamak anlamına gelen üst düzey bir kalıptır.`},{id:25,skill:"reading",question_type:"multiple_choice",cefr_level:"A1",topic:"Public Notices & Operating Schedules",question:`Notice: "City Central Library — Open Monday to Friday 09:00 - 18:00. Closed Saturdays, Sundays, and Bank Holidays."
Can a member borrow a book on Sunday afternoon?`,options:'["No, the library is closed on weekends","Yes, until 18:00","Yes, but only in the morning","Yes, if they hold a digital card"]',correct_answer:"No, the library is closed on weekends",explanation:'The sign explicitly states "Closed Saturdays, Sundays, and Bank Holidays." Sunday is part of the weekend closure.',explanation_tr:"Tabelada Cumartesi, Pazar ve resmi tatillerde kapalı olduğu açıkça belirtilmiştir; dolayısıyla Pazar günü ödünç kitap alınamaz."},{id:26,skill:"reading",question_type:"multiple_choice",cefr_level:"A1",topic:"Personal Correspondence & Specific Details",question:`Postcard: "Hi Alex! Having a wonderful time hiking in the Swiss Alps. The air is fresh and snowy. We return to London on Thursday afternoon. Best, Claire."
When does Claire travel back to London?`,options:'["On Thursday afternoon","On Friday morning","Next week","On Saturday"]',correct_answer:"On Thursday afternoon",explanation:'The postcard text states directly: "We return to London on Thursday afternoon."',explanation_tr:'Kartpostaldaki "We return to London on Thursday afternoon" ifadesi Perşembe öğleden sonra dönüleceğini doğrular.'},{id:27,skill:"reading",question_type:"multiple_choice",cefr_level:"A2",topic:"Internal Workplace Memos",question:`Memo: "Attention all personnel: The quarterly departmental review originally scheduled for Wednesday at 10:00 AM in Room 4 has been postponed to Thursday at 2:00 PM in Conference Hall B."
Where and when will the review occur?`,options:'["Thursday at 2:00 PM in Conference Hall B","Wednesday at 10:00 AM in Room 4","Thursday at 10:00 AM in Room 4","Wednesday at 2:00 PM in Conference Hall B"]',correct_answer:"Thursday at 2:00 PM in Conference Hall B",explanation:"The memorandum notes that the meeting was postponed to Thursday at 2:00 PM in Conference Hall B.",explanation_tr:"Duyuruda toplantının ertelendiği yeni yer ve zaman: Perşembe saat 14:00, Konferans Salonu B'dir."},{id:28,skill:"reading",question_type:"multiple_choice",cefr_level:"A2",topic:"Product Labels & Safety Instructions",question:`Packaging Label: "Shake vigorously before opening. Refrigerate immediately after breaking the seal and consume contents within four days."
What is mandatory after opening this product?`,options:'["Keep it chilled in a refrigerator and finish within 4 days","Leave it at room temperature on a dark shelf","Freeze the contents permanently","Shake it only after four days have passed"]',correct_answer:"Keep it chilled in a refrigerator and finish within 4 days",explanation:'The instructions state: "Refrigerate immediately after breaking the seal and consume contents within four days."',explanation_tr:"Ürün talimatı mührün açılmasından hemen sonra buzdolabına konmasını ve 4 gün içinde tüketilmesini şart koşar."},{id:29,skill:"reading",question_type:"multiple_choice",cefr_level:"B1",topic:"Inference & Contextual Appraisal",question:`Text: "Although the mechanical fault stranded our passenger train in a remote mountain pass for six hours, the onboard train attendants distributed complimentary refreshments, maintained heating, and offered frequent updates. Consequently, passenger panic was successfully averted."
What conclusion does the text support?`,options:'["The attentiveness and communication of the staff mitigated passenger distress","The passengers filed immediate legal complaints against the rail line","The heating system failed during the breakdown","The train crew abandoned the passengers in the mountains"]',correct_answer:"The attentiveness and communication of the staff mitigated passenger distress",explanation:"The passage underscores how refreshments, heating, and regular updates prevented panic despite the long delay.",explanation_tr:"Metin, personelin ikramları, ısıtmayı sürdürmesi ve düzenli bilgilendirmesi sayesinde yolcuların paniğe kapılmasının önlendiğini ortaya koyar."},{id:30,skill:"reading",question_type:"multiple_choice",cefr_level:"B1",topic:"Authorial Purpose & Critique in Reviews",question:`Review: "The boutique resort boasts immaculate seaside architecture and courteous concierge staff; nevertheless, the relentless late-night thumping from the adjacent nightclub makes uninterrupted rest virtually unattainable for families."
What is the author's primary aim?`,options:'["To advise prospective visitors about the severe nocturnal noise despite the attractive aesthetic","To encourage families to attend late-night music festivals","To criticize the hotel staff for poor customer service","To complain about the architectural design of the pool"]',correct_answer:"To advise prospective visitors about the severe nocturnal noise despite the attractive aesthetic",explanation:"The review balances praise for aesthetics with a stark warning about nocturnal noise impacting rest.",explanation_tr:"Yazarın temel gayesi, tatil köyünün güzel mimarisine rağmen bitişikteki gece kulübünün gürültüsünün uykuyu imkansız kıldığı konusunda ziyaretçileri uyarmaktır."},{id:31,skill:"reading",question_type:"multiple_choice",cefr_level:"B2",topic:"Expository Contrast & Policy Nuance",question:`Article: "Advocates of municipal congestion pricing argue that levying tolls on urban motorists curtails vehicular emissions and finances transit expansion. Opponents counter, however, that without subsidized transit feeder corridors in suburban perimeters, the policy acts as a regressive penalty on lower-income commuter labor."
What fundamental issue is raised regarding congestion pricing?`,options:'["Without equitable suburban transport alternatives, congestion tolls disproportionately penalize economically vulnerable workers","Congestion pricing has failed to generate revenue in any global city","Urban motorists overwhelmingly support increased tolls","Emissions have risen sharply wherever transit expansion occurred"]',correct_answer:"Without equitable suburban transport alternatives, congestion tolls disproportionately penalize economically vulnerable workers",explanation:"The excerpt highlights the regressive socioeconomic impact of tolls on suburban low-income workers lacking alternative transit.",explanation_tr:"Metin, varoşlarda ucuz toplu taşıma alternatifleri sunulmadığı takdirde şehir içi geçiş ücretlerinin düşük gelirli çalışanlar için adaletsiz bir yüke dönüşeceğini vurgular."},{id:32,skill:"reading",question_type:"multiple_choice",cefr_level:"B2",topic:"Tone & Skeptical Journalistic Distance",question:`Editorial: "Silicon Valley venture leaders herald their generative algorithms as an egalitarian revolution in human education. Yet one might be excused for observing that subscription monetization, rather than altruistic literacy, appears to be the true engine powering their quarterly earnings."
What stance does the journalist convey?`,options:'["Skeptical and cynical regarding corporate altruistic claims","Unreservedly enthusiastic about algorithmic classroom pedagogy","Apathetic toward digital subscription models","Hostile toward the concept of literacy itself"]',correct_answer:"Skeptical and cynical regarding corporate altruistic claims",explanation:'The ironic phrasing ("Yet one might be excused for observing...") indicates sharp skepticism toward claims of altruism.',explanation_tr:'Yazarın ironik ve temkinli dili, şirketlerin "insanlık ve eğitim devrimi" iddialarının ardındaki asıl kâr hırsına karşı derin bir şüphecilik taşır.'},{id:33,skill:"reading",question_type:"multiple_choice",cefr_level:"C1",topic:"Dense Academic Discourse & Longitudinal Findings",question:`Academic Abstract: "While prevailing orthodoxy long posited that early chronological exposure constitutes the sole determinant of accent-free L2 acquisition, our longitudinal cohort data reveal that socio-affective affiliation and identity preservation exert an equally decisive, if historically marginalized, modulatory effect."
What does the empirical research establish?`,options:'["Sociocultural identification and psychological variables fundamentally shape phonological mastery alongside age of exposure","Chronological age is the only relevant variable in second-language phonetics","Learners who begin after adolescence cannot achieve phonological intelligibility","Socio-affective factors have no measurable influence on linguistic proficiency"]',correct_answer:"Sociocultural identification and psychological variables fundamentally shape phonological mastery alongside age of exposure",explanation:"The paper shows that socio-affective affiliation and identity are just as decisive in phonological acquisition as chronological age.",explanation_tr:"Araştırma, yaş faktörünün yanı sıra sosyo-kültürel aidiyet ve kimlik gibi psikolojik etkenlerin de aksan ve telaffuz ediniminde belirleyici rol oynadığını ortaya koymaktadır."},{id:34,skill:"reading",question_type:"multiple_choice",cefr_level:"C1",topic:"Identifying Implicit Ideological Presuppositions",question:`Essay: "To champion draconian fiscal retrenchment at the precise historical juncture when foundational public infrastructure is deteriorating reflects an ideological fixation on debt ratios at the cost of tangible civic survival."
What critique does the author level against policy architects?`,options:'["They prioritize abstract fiscal accounting indices over preserving critical public assets","They spend excessive public revenues on municipal transportation","They refuse to measure long-term debt sustainability","They advocate for uncontrolled public sector expansion"]',correct_answer:"They prioritize abstract fiscal accounting indices over preserving critical public assets",explanation:"The critique argues that fixation on debt ratios ignores the real-world deterioration of necessary civic infrastructure.",explanation_tr:"Yazar, kamu altyapısı çökerken mali kemer sıkma politikalarını savunanların, somut toplumsal refah yerine soyut borç göstergelerine körü körüne öncelik verdiğini eleştirmektedir."},{id:35,skill:"reading",question_type:"multiple_choice",cefr_level:"C2",topic:"Literary Critique & Aesthetic Stylistic Evaluation",question:`Literary Review: "Her prose does not so much elucidate the psychological contours of her tragic protagonists as drape an iridescent rhetorical veil over their pedestrian motivations, seducing the reader with stylistic grandeur where emotional veracity is sorely lacking."
What is the reviewer's ultimate verdict on the novelist's craft?`,options:'["Superficial decorative eloquence masks shallow characterization and superficial psychological insight","The novel captures emotional truth with unprecedented psychological depth","The author relies on dull, unembellished language that fails to engage the reader","The plot structures are too convoluted for modern literary audiences"]',correct_answer:"Superficial decorative eloquence masks shallow characterization and superficial psychological insight",explanation:'The critic argues that ornate language ("iridescent rhetorical veil", "stylistic grandeur") conceals banal, unconvincing psychological depth.',explanation_tr:'Eleştirmen, yazarın süslü ve gösterişli dilinin ("iridescent rhetorical veil") altındaki karakterlerin sığ ve yapay motivasyonlarını gizlemeye yaradığını belirtmektedir.'},{id:36,skill:"reading",question_type:"multiple_choice",cefr_level:"C2",topic:"Political Economy & Structural Critique",question:`Monograph: "Rather than decentralizing power as early cyber-utopians prophesied, the consolidation of platform capitalism has merely substituted legacy intermediaries with monopolistic algorithmic architectures whose proprietary opacity shields them from meaningful democratic accountability."
Which premise encapsulates the thesis?`,options:'["Digital platforms have reinforced monopolistic concentration while evading democratic oversight","Decentralized technologies have fulfilled democratic egalitarian ideals","Traditional corporate gatekeepers were far more opaque than modern platforms","Algorithms have eliminated systemic bias in global commercial distribution"]',correct_answer:"Digital platforms have reinforced monopolistic concentration while evading democratic oversight",explanation:"The author posits that platform capitalism replaced old intermediaries with opaque, unaccountable algorithmic monopolies.",explanation_tr:"Yazar, platform kapitalizminin erken dönem internet ütopyalarının aksine gücü dağıtmadığını; tersine şeffaflıktan uzak, demokratik denetime kapalı algoritmik tekeller yarattığını savunmaktadır."},{id:37,skill:"listening",question_type:"multiple_choice",cefr_level:"A1",topic:"Time & Numerical Auditory Discrimination",question:'In an airport announcement, the dispatcher says: "Flight 302 to Dublin is now boarding at Gate 14 and will depart at a quarter to eight." What time does the flight depart?',options:'["7:45","8:15","7:15","8:45"]',correct_answer:"7:45",explanation:`"A quarter to eight" signifies fifteen minutes before eight o'clock (7:45).`,explanation_tr:'"A quarter to eight", sekize çeyrek kala (7:45) anlamına gelir.'},{id:38,skill:"listening",question_type:"multiple_choice",cefr_level:"A1",topic:"Spatial Directions in Dialogue",question:'Audio Speaker: "Walk straight past the fountain, take the second turning on your left, and the post office is directly across from the bakery." Where is the post office?',options:'["Opposite the bakery","Next to the fountain","On the first right turn","Inside the bakery"]',correct_answer:"Opposite the bakery",explanation:'"Directly across from" means opposite the specified landmark (the bakery).',explanation_tr:'"Directly across from the bakery", fırının tam karşısında anlamına gelir.'},{id:39,skill:"listening",question_type:"multiple_choice",cefr_level:"A2",topic:"Connected Speech Contractions in Casual Speech",question:'In fast, conversational spoken English, the question "What are you going to do?" is most typically pronounced as:',options:'["Whatcha gonna do?","What did you done?","Where you wanna go?","When are you going do?"]',correct_answer:"Whatcha gonna do?",explanation:'Natural connected speech compresses "what are you" into /wʌtʃə/ and "going to" into "gonna" /ɡənə/.',explanation_tr:'Doğal hızlı konuşmada "what are you" -> "whatcha" ve "going to" -> "gonna" olarak birleşir.'},{id:40,skill:"listening",question_type:"multiple_choice",cefr_level:"A2",topic:"Intonation Patterns in Tag Questions",question:`Speaker: "You haven't misplaced the office keys, have you?" (spoken with a distinct rising pitch contour on the tag)
What does the rising intonation signify?`,options:'["The speaker is genuinely uncertain and asking for confirmation","The speaker is 100% certain and stating a known fact","The speaker is ordering you to buy new keys","The speaker is expressing anger and yelling"]',correct_answer:"The speaker is genuinely uncertain and asking for confirmation",explanation:"A rising intonation on a question tag indicates genuine doubt or uncertainty, seeking real verification from the listener.",explanation_tr:"Soru takılarında (question tags) yükselen tonlama (rising intonation), konuşmacının gerçekten emin olmadığını ve teyit aradığını gösterir."},{id:41,skill:"listening",question_type:"multiple_choice",cefr_level:"B1",topic:"Auditory Irony & Sarcastic Intonation",question:`A colleague looks at a completely shattered smartphone screen and sighs with a falling monotone pitch: "Oh, simply magnificent... just what I needed today."
What does the colleague mean?`,options:'["They are exasperated and using sarcastic irony to express frustration","They are genuinely delighted with their broken screen","They consider the phone aesthetically pleasing","They are praising the phone manufacturer"]',correct_answer:"They are exasperated and using sarcastic irony to express frustration",explanation:'A heavy falling sigh accompanied by words like "magnificent" or "brilliant" is a standard British/American sarcastic trope for misfortune.',explanation_tr:'Monoton ve iç çekerek söylenen "simply magnificent", yaşanan aksilik karşısında duyulan derin hayal kırıklığını alaycı (sarkastik) yoldan ifade eder.'},{id:42,skill:"listening",question_type:"multiple_choice",cefr_level:"B1",topic:"Conversational Agreement Formulae",question:`Speaker A: "The rental prices in this metropolitan area are completely detached from reality!"
Speaker B: "I'll say!"
What communicative message does Speaker B communicate?`,options:'["I emphatically agree with your sentiment","I want you to repeat your sentence louder","I disagree with your economic assessment","I intend to give a speech about real estate"]',correct_answer:"I emphatically agree with your sentiment",explanation:`"I'll say!" is an emphatic conversational idiom expressing complete, passionate agreement.`,explanation_tr:`"I'll say!", karşı tarafın söylediğine yürekten ve kesin bir şekilde katıldığını belirten yaygın bir konuşma kalıbıdır ("Kesinlikle öyle!").`},{id:43,skill:"listening",question_type:"multiple_choice",cefr_level:"B2",topic:"Colloquial Metaphors in Workplace Dialogues",question:`Project Lead: "I understand that migrating the legacy database will require working over the weekend, but we just have to bite the bullet."
What does the idiom "bite the bullet" signify?`,options:'["Endure an inevitable, unpleasant task with fortitude","Discharge firearms at a target","Cancel the database migration project","Argue aggressively with the client"]',correct_answer:"Endure an inevitable, unpleasant task with fortitude",explanation:'"Bite the bullet" means to face a difficult or grim situation courageously without complaining or hesitating.',explanation_tr:'"Bite the bullet", zor veya tatsız ama kaçınılmaz bir durumu cesaretle göğüslemek anlamına gelen bir deyimdir ("acı reçeteyi kabullenmek").'},{id:44,skill:"listening",question_type:"multiple_choice",cefr_level:"B2",topic:"Interpreting Conversational Hesitation & Reluctance",question:`Director: "Would you be willing to take on the branch management role in Chicago?"
Candidate: "Well... er, I suppose I could, though... given my family's recent relocation, it might prove rather daunting."
What does the candidate's tone and hesitation convey?`,options:'["Hesitation and underlying reluctance due to personal domestic obligations","Unbounded eagerness to begin the new job immediately","A firm, categorical refusal to ever visit Chicago","Enthusiastic gratitude without any reservations"]',correct_answer:"Hesitation and underlying reluctance due to personal domestic obligations",explanation:'Hesitation markers ("Well... er", "though", "rather daunting") signal polite reluctance and concern about domestic conflict.',explanation_tr:'Adayın tereddütlü duraksamaları ("Well... er", "rather daunting"), kibar bir çekince ve ailevi sebeplerden ötürü göreve pek istekli olmadığını yansıtır.'},{id:45,skill:"listening",question_type:"multiple_choice",cefr_level:"C1",topic:"Connected Speech: Assimilation & Elision",question:'In rapid natural connected speech, what phonological transformations occur in the phrase "handbag" and "next station"?',options:'["Alveolar /n/ assimilates to bilabial /m/ (/hæmbæɡ/), and /t/ is elided between consonants (/neks steɪʃn/)","All vowels become elongated /iː/ sounds","The /b/ in handbag is deleted entirely","Consonants are pronounced with distinct hiatus"]',correct_answer:"Alveolar /n/ assimilates to bilabial /m/ (/hæmbæɡ/), and /t/ is elided between consonants (/neks steɪʃn/)",explanation:"Phonological assimilation transforms alveolar /n/ before bilabial /b/ into [m], while alveolar stop /t/ between consonants is elided.",explanation_tr:`Doğal hızlı konuşmada "handbag"deki /n/ sesi /b/ sesinin etkisiyle /m/'ye dönüşür (asimilasyon: /hæmbæɡ/); "next station"daki /t/ ise iki ünsüz arasında düşer (elision: /neks steɪʃn/).`},{id:46,skill:"listening",question_type:"multiple_choice",cefr_level:"C1",topic:"Epistemic Hedging in Academic Keynotes",question:`Keynote Speaker: "One might perhaps venture to postulate that early urban settlement patterns were not primarily mediated by agrarian surplus alone."
What purpose does the speaker's hedging serve?`,options:'["To advance a hypothesis with scholarly caution, leaving room for alternative empirical interpretations","To confess total ignorance of archaeology","To deliver an undeniable dogma that cannot be debated","To criticize the attending conference delegates"]',correct_answer:"To advance a hypothesis with scholarly caution, leaving room for alternative empirical interpretations",explanation:'Formulaic academic hedging ("one might perhaps venture to postulate") signals scientific modesty and non-dogmatic argumentation.',explanation_tr:'Akademik dilde "one might perhaps venture to postulate" gibi yumuşatmalar (hedging), öne sürülen savın dogmatik bir dayatma yerine bilimsel ihtiyatla sunulduğunu gösterir.'},{id:47,skill:"listening",question_type:"multiple_choice",cefr_level:"C2",topic:"Nuclear Pitch Placement Changing Presupposition",question:`Consider the sentence: "I didn't state that SHE compromised the security credentials."
When emphatic nuclear stress and falling pitch fall squarely on the word "SHE", what pragmatic presupposition is generated?`,options:'["Someone else compromised the credentials, not the woman in question","The speaker is confessing to having compromised the credentials himself","The credentials were never compromised by anybody","The speaker denied ever having spoken to anyone"]',correct_answer:"Someone else compromised the credentials, not the woman in question",explanation:'Nuclear contrastive focus on "SHE" highlights the agent of the action, presupposing that someone else is the guilty party.',explanation_tr:'Vurgunun "SHE" zamirine konması, güvenlik ihlalini yapan kişinin o kadın değil, başka biri olduğunu ima eden bir karşıtlık odağı oluşturur.'},{id:48,skill:"listening",question_type:"multiple_choice",cefr_level:"C2",topic:"Oblique Communicative Implicature",question:`Ambassador A: "Did you find the treaty revisions submitted by the foreign ministry acceptable?"
Ambassador B: "Well, let us say that the font selection was impeccable, and the courier delivered them precisely on schedule."
What does Ambassador B obliquely imply regarding the treaty revisions?`,options:'["The actual substantive content of the revisions was deficient or unsatisfactory","The foreign ministry drafted a flawless legal masterpiece","The courier lost the official documents en route","The font was completely illegible"]',correct_answer:"The actual substantive content of the revisions was deficient or unsatisfactory",explanation:"By strictly praising superficial peripheral details (the font, the courier), the speaker flouts the Gricean maxim of relevance to signal disdain for the substance.",explanation_tr:"Konuşmacı belgenin içeriği yerine sadece yazı tipini ve kuryenin vaktinde gelmesini ö överek (Grice Bağıntı İlkesini ihlal ederek) anlaşma metninin içeriğini yetersiz bulduğunu dolaylı yoldan ima etmektedir."},{id:49,skill:"writing",question_type:"multiple_choice",cefr_level:"A1",topic:"Capitalization & Sentence Punctuation",question:"Which of the following sentences conforms strictly to standard English capitalization and punctuation?",options:'["My elder brother works at a hospital in London.","my elder brother Works at a hospital in london.","My elder brother works at a hospital in London","My elder Brother works at a Hospital in london."]',correct_answer:"My elder brother works at a hospital in London.",explanation:"Sentences must begin with a capital letter, proper nouns (London) must be capitalized, common nouns remain lowercase, and terminal punctuation is required.",explanation_tr:"Cümleler büyük harfle başlar, özel isimler (London) büyük yazılır, cins isimler küçük kalır ve cümlenin sonuna nokta konur."},{id:50,skill:"writing",question_type:"multiple_choice",cefr_level:"A1",topic:"Basic Coordinating Conjunctions",question:"I studied diligently for the written driving examination, ___ I still failed on my first attempt.",options:'["but","so","because","and"]',correct_answer:"but",explanation:'"But" expresses contrast between hard study and unexpected failure.',explanation_tr:'Çok çalışmak ile sınavdan kalmak arasındaki zıtlığı ifade etmek için "but" bağlacı kullanılır.'},{id:51,skill:"writing",question_type:"multiple_choice",cefr_level:"A2",topic:"Sequential Discourse Markers",question:`Choose the most natural sequential markers to complete this instructional description:
"___, preheat the oven. ___, combine the dry ingredients. ___, bake for twenty minutes."`,options:'["First / Next / Finally","At first / Lastly / Next","Firstly / At the end / Soon","Begin / Middle / Ending"]',correct_answer:"First / Next / Finally",explanation:'"First / Next / Finally" is the standard cohesive sequence for procedural instructions in English.',explanation_tr:'Aşama bildiren yönergelerde standart sıralama bağlaçları "First / Next (Then) / Finally" şeklindedir.'},{id:52,skill:"writing",question_type:"multiple_choice",cefr_level:"A2",topic:"Register in Email Salutations & Closings",question:"Which combination is standard for an informal email to an established peer or close friend?",options:'["Hi David, / Cheers,","To Whom It May Concern: / Yours faithfully,","Dear Sir or Madam, / Yours sincerely,","Esteemed Sir, / With highest regards,"]',correct_answer:"Hi David, / Cheers,",explanation:'"Hi [Name]" paired with "Cheers," is natural informal correspondence between friends.',explanation_tr:'Yakın bir arkadaşa yazılan gayriresmi e-postalarda en doğal hitap ve kapanış "Hi David, / Cheers," çiftidir.'},{id:53,skill:"writing",question_type:"multiple_choice",cefr_level:"B1",topic:"Formal Formulaic Phrases in Business Inquiries",question:"Which closing sentence is most appropriate for a formal professional inquiry to a prospective employer?",options:'["I look forward to hearing from you at your earliest convenience.","Write back to me whenever you get a free second.","Drop me a message soon, ok?","Hoping to chat with you real quick."]',correct_answer:"I look forward to hearing from you at your earliest convenience.",explanation:'"I look forward to hearing from you at your earliest convenience" is the established polite standard in professional business correspondence.',explanation_tr:'Resmi iş ve başvuru yazışmalarında cevabın nezaketle beklendiğini belirten standart profesyonel kalıp "I look forward to hearing from you at your earliest convenience"tır.'},{id:54,skill:"writing",question_type:"multiple_choice",cefr_level:"B1",topic:"Causal Prepositional Connectors",question:"The aviation authority grounded all commercial regional flights ___ unprecedented gale-force gusts across the flight path.",options:'["due to","because","even though","consequently"]',correct_answer:"due to",explanation:'"Due to" is followed by a noun phrase ("unprecedented gale-force gusts"), whereas "because" requires a full clause.',explanation_tr:'"Due to" kendisinden sonra isim öbeği (noun phrase) alarak sebep belirtir; "because" ise tam cümle gerektirir.'},{id:55,skill:"writing",question_type:"multiple_choice",cefr_level:"B2",topic:"Contrastive Sentence Connectors & Punctuation",question:"The experimental battery demonstrated exceptional energy density during early trials. ___, severe overheating issues emerged under prolonged real-world stress.",options:'["However","In spite of","Whereas","Furthermore"]',correct_answer:"However",explanation:'"However" acts as a conjunctive adverb transitioning between independent sentences, offset by a comma.',explanation_tr:'İki bağımsız cümle arasında zıtlık kurarak yeni cümlenin başında virgülle ayrılan bağlaç "However"dır.'},{id:56,skill:"writing",question_type:"multiple_choice",cefr_level:"B2",topic:"Repairing Comma Splices in Formal Syntax",question:'Which revision correctly fixes the comma splice: "The deadline expires tomorrow, we must finalize the executive summary today."?',options:'["The deadline expires tomorrow; therefore, we must finalize the executive summary today.","The deadline expires tomorrow, therefore we must finalize the summary.","The deadline expires tomorrow, so that we finalize the summary.","The deadline expires tomorrow because finalize the summary today."]',correct_answer:"The deadline expires tomorrow; therefore, we must finalize the executive summary today.",explanation:'Joining two independent clauses with only a comma produces a comma splice. A semicolon followed by a conjunctive adverb ("therefore,") is standard.',explanation_tr:'İki bağımsız cümleyi sadece virgülle bağlamak "comma splice" hatasıdır. Noktalı virgül ve ardından "therefore," kullanımı standart ve doğrudur.'},{id:57,skill:"writing",question_type:"multiple_choice",cefr_level:"C1",topic:"Nominalisation for Academic Register",question:`Select the optimal academic revision of: "Because the government changed the tax regulations rapidly, small businesses suffered immense financial disruption."
`,options:'["The rapid implementation of regulatory fiscal reform precipitated severe financial strain among small enterprises.","Because taxes were changed fast by the state, small businesses were hurt financially.","Small businesses had huge money problems since government quickly changed tax rules.","Rapidly changing tax by authorities disrupted money for small firms."]',correct_answer:"The rapid implementation of regulatory fiscal reform precipitated severe financial strain among small enterprises.",explanation:'Academic style favors nominalisation ("rapid implementation", "fiscal reform", "financial strain") over informal verbal clauses.',explanation_tr:'Akademik ve resmi yazımda eylemleri fiil cümleleri yerine isimleştirmek (nominalisation: "rapid implementation", "precipitated financial strain") metnin yetkinliğini artırır.'},{id:58,skill:"writing",question_type:"multiple_choice",cefr_level:"C1",topic:"Concessive Discourse Markers (Notwithstanding / Albeit)",question:"The multinational acquisition was ratified by majority shareholders, ___ grave concerns voiced by regulatory antitrust monitors.",options:'["notwithstanding","inasmuch as","furthermore","namely"]',correct_answer:"notwithstanding",explanation:'"Notwithstanding" is an advanced preposition/adverb meaning "in spite of" or "despite".',explanation_tr:'"Notwithstanding", üst düzey resmi dilde "rağmen" (despite / in spite of) anlamına gelen bağlaç/edattır.'},{id:59,skill:"writing",question_type:"multiple_choice",cefr_level:"C2",topic:"Flawless Syntactic Parallelism in Formal Rhetoric",question:"Which of the following sentences exhibits impeccable syntactic parallelism?",options:'["The leadership team sought not only to reduce operating deficits, but also to expand employee healthcare entitlements.","The leadership team sought not only reducing operating deficits, but also to expand employee healthcare entitlements.","The leadership team sought not only to reduce operating deficits, but employee healthcare entitlements were expanded.","The leadership team sought to not only reduce operating deficits, but expanding employee healthcare entitlements."]',correct_answer:"The leadership team sought not only to reduce operating deficits, but also to expand employee healthcare entitlements.",explanation:'Correlative constructions ("not only [X] but also [Y]") require matching grammatical forms (infinitive "to reduce" matched with "to expand").',explanation_tr:'"Not only ... but also" kalıbında her iki taraf da aynı dilbilgisel yapıda olmalıdır (paralellik: "to reduce" ile "to expand").'},{id:60,skill:"writing",question_type:"multiple_choice",cefr_level:"C2",topic:"Eliminating Dangling Participles & Syntactic Ambiguity",question:"Which sentence avoids a grammatically dangling modifier?",options:'["Having examined the archival manuscripts meticulously, the paleographer uncovered several forged signatures.","Having examined the archival manuscripts meticulously, several forged signatures were uncovered by the paleographer.","Examining the archival manuscripts meticulously, the discovery of forged signatures took place.","While examining the archival manuscripts, several forged signatures appeared to the team."]',correct_answer:"Having examined the archival manuscripts meticulously, the paleographer uncovered several forged signatures.",explanation:'The introductory participial clause "Having examined..." must logically modify the grammatical subject that follows immediately ("the paleographer").',explanation_tr:'Girişteki ortaç öbeğini ("Having examined...") yapan fail, virgülden hemen sonra gelen cümlenin öznesi ("the paleographer") olmalıdır; aksi halde "dangling modifier" hatası oluşur.'},{id:61,skill:"speaking",question_type:"multiple_choice",cefr_level:"A1",topic:"Standard Social Introductions",question:'When introduced to an esteemed guest in a formal setting who says "How do you do?", what is the culturally conventional English response?',options:'["How do you do?","I do fine, thank you.","I am doing my homework.","Yes, I do."]',correct_answer:"How do you do?",explanation:'In traditional formal British and international English, "How do you do?" is a formulaic greeting rather than an inquiry about health, answered with "How do you do?" or "Pleased to meet you."',explanation_tr:'Resmi İngilizcede ilk tanışmada kullanılan "How do you do?" bir soru değil kalıplaşmış bir selamlamadır; geleneksel cevabı da yine "How do you do?" veya "Pleased to meet you"dur.'},{id:62,skill:"speaking",question_type:"multiple_choice",cefr_level:"A1",topic:"Polite Requests for Repetition",question:"You are at a hotel reception desk and did not hear the room number. How do you ask politely for repetition?",options:'["Could you please repeat that?","What? Speak up!","Say your words again.","Repeat now!"]',correct_answer:"Could you please repeat that?",explanation:'"Could you please repeat that?" is standard polite English for asking someone to restate information.',explanation_tr:'Anlaşılmayan bir şeyi tekrar ettirmenin en kibar ve standart yolu "Could you please repeat that?" ifadesidir.'},{id:63,skill:"speaking",question_type:"multiple_choice",cefr_level:"A2",topic:"Polite Ordering in Commercial Settings",question:"What is the most courteous and standard way to order tea in a cafe?",options:'["Could I please have a cup of black tea?","Give me black tea immediately.","I demand a black tea.","Tea is required by me right now."]',correct_answer:"Could I please have a cup of black tea?",explanation:'"Could I have..., please?" represents the universal courteous standard for ordering refreshments.',explanation_tr:'Kafede sipariş verirken en nazik ve yaygın kalıp "Could I please have...?" yapısıdır.'},{id:64,skill:"speaking",question_type:"multiple_choice",cefr_level:"A2",topic:"Formulating Preferences (Prefer ... to)",question:"Which sentence correctly formulates a comparison of preferences between two activities?",options:'["I prefer reading novels to watching television.","I prefer reading novels than watching television.","I prefer read novels to watch television.","I rather reading novels to watching television."]',correct_answer:"I prefer reading novels to watching television.",explanation:'The verb "prefer" requires the structure "prefer [gerund] to [gerund]" (never "than").',explanation_tr:'"Prefer" fiili iki eylem arasında tercih belirtirken "prefer -ing TO -ing" yapısıyla kullanılır ("than" kullanılmaz).'},{id:65,skill:"speaking",question_type:"multiple_choice",cefr_level:"B1",topic:"Urgent Advice Formulations (Had better)",question:"A colleague shows symptoms of severe heat stroke on a hike. Which statement offers urgent, direct advice with natural phrasing?",options:'["You had better sit in the shade and drink water immediately.","You might consider perhaps sitting down next hour.","Why do you get heat stroke?","It could be amusing to rest."]',correct_answer:"You had better sit in the shade and drink water immediately.",explanation:'"You had better [bare infinitive]" is used for urgent advice where failure to comply may result in serious negative consequences.',explanation_tr:'"You had better (do something)" kalıbı, uyulmadığında olumsuz sonuçlar doğurabilecek acil ve ciddi tavsiyelerde kullanılır.'},{id:66,skill:"speaking",question_type:"multiple_choice",cefr_level:"B1",topic:"Repairing Misunderstandings in Dialogue",question:"You notice that a meeting participant completely misinterpreted your suggestion. Which phrase diplomatically clarifies your stance?",options:'["What I actually intended to convey was...","You are listening incorrectly.","That is a ridiculous conclusion.","Do you have hearing problems?"]',correct_answer:"What I actually intended to convey was...",explanation:'"What I actually intended to convey was..." gently clarifies meaning without accusing the listener of incompetence.',explanation_tr:'Yanlış anlaşılan bir durumu karşı tarafı kırmadan düzeltmek için "What I actually intended to convey was..." (Aslında ifade etmek istediğim şuydu...) kalıbı kullanılır.'},{id:67,skill:"speaking",question_type:"multiple_choice",cefr_level:"B2",topic:"Diplomatic Disagreement in Professional Deliberations",question:"During a budget meeting, how do you express polite, constructive disagreement with a proposed budget cut?",options:'["I appreciate your perspective on fiscal discipline; however, cutting this budget may impair our core cybersecurity readiness.","That budget cut is completely reckless and foolish.","You clearly understand nothing about our department.","I forbid you from suggesting that cut."]',correct_answer:"I appreciate your perspective on fiscal discipline; however, cutting this budget may impair our core cybersecurity readiness.",explanation:"Diplomatic disagreement acknowledges the validity of the other party's intent before raising reasoned reservations.",explanation_tr:'Profesyonel iş ortamında yapıcı itiraz, önce karşı tarafın bakış açısını onaylayıp ("I appreciate your perspective..."), ardından somut gerekçelerle çekinceyi sunarak yapılır.'},{id:68,skill:"speaking",question_type:"multiple_choice",cefr_level:"B2",topic:"Negotiation & Finding Compromise",question:"Which phrase is most effective when proposing common ground during a stalled contract negotiation?",options:'["Is there room for compromise where we might meet each other halfway on these delivery milestones?","Take our terms or we terminate talks immediately.","We refuse to budge on a single clause.","Your counteroffer is entirely unacceptable."]',correct_answer:"Is there room for compromise where we might meet each other halfway on these delivery milestones?",explanation:'"Meet halfway" and "room for compromise" represent established idioms for building consensus in negotiations.',explanation_tr:'Tıkanan müzakerelerde uzlaşma zemini aramak için "meet each other halfway" (orta yolda buluşmak) ve "room for compromise" kalıpları kullanılır.'},{id:69,skill:"speaking",question_type:"multiple_choice",cefr_level:"C1",topic:"Managing Turn-Taking & Tactful Interjections",question:"In a high-level executive summit where multiple delegates are speaking at once, how do you politely and effectively claim the floor?",options:'["If I might interject for a moment, there is a pertinent financial dimension that warrants our immediate scrutiny.","Quiet down everyone, it is my turn to speak.","Stop talking so I can lecture you.","You have monopolized this conversation long enough."]',correct_answer:"If I might interject for a moment, there is a pertinent financial dimension that warrants our immediate scrutiny.",explanation:'"If I might interject for a moment..." is the gold standard for executive turn-taking without appearing rude.',explanation_tr:'Üst düzey toplantılarda sözü kibarca ve profesyonelce devralmak için "If I might interject for a moment..." (Bir an için araya girebilirsem...) ifadesi kullanılır.'},{id:70,skill:"speaking",question_type:"multiple_choice",cefr_level:"C1",topic:"Academic Hedging in Spoken Assertions",question:"How does a senior research scientist formulate an evidence-based conclusion while adhering to professional hedging standards?",options:'["The empirical data strongly indicate a correlational pattern, though external variables warrant further longitudinal validation.","This proves beyond 100% doubt that my hypothesis is universally correct.","The data is completely undisputed and anyone who disagrees is unscientific.","I guess maybe this data might mean something."]',correct_answer:"The empirical data strongly indicate a correlational pattern, though external variables warrant further longitudinal validation.",explanation:'Professional scientific rhetoric combines strong empirical claims ("strongly indicate") with cautious caveats ("warrant further validation").',explanation_tr:'Bilimsel konuşmalarda iddialar hem güçlü verilere dayandırılır hem de temkinli paylar ("warrant further validation") bırakılarak sunulur.'},{id:71,skill:"speaking",question_type:"multiple_choice",cefr_level:"C2",topic:"De-escalating Hostile Encounters with Verbal Poise",question:"A shareholder furiously accuses the board of corporate deceit at an annual meeting. Which executive reply exhibits peerless communicative composure?",options:`["I fully recognize the gravity of your frustration; nevertheless, let us review the independent auditor's ledger together to verify precise accountability.","Sit down and cease these baseless slanderous accusations immediately.","We resent your tone and refuse to respond to your comments.","You are clearly misinformed and wasting our time."]`,correct_answer:"I fully recognize the gravity of your frustration; nevertheless, let us review the independent auditor's ledger together to verify precise accountability.",explanation:"Masterful conflict resolution validates the emotional gravity of the grievance while immediately redirecting focus toward objective evidence.",explanation_tr:'Öfkeyi ve gerilimi yatıştırmanın en yetkin yolu, duygusal tepki vermek yerine karşı tarafın endişesini ciddiye alıp ("I fully recognize the gravity..."), konuyu hemen bağımsız ve somut belgelere yönlendirmektir.'},{id:72,skill:"speaking",question_type:"multiple_choice",cefr_level:"C2",topic:"Masterful Rhetorical Reframing",question:'During a televised debate, an adversary frames your infrastructure streamlining program as "callous austerity." How do you reframe it most persuasively?',options:'["What our opponent mischaracterizes as austerity is, in fact, the targeted reallocation of squandered administrative waste into frontline emergency healthcare.","You are deliberately lying about our program.","Austerity is necessary because the state has run out of funds.","We cut budgets because we had no other alternative."]',correct_answer:"What our opponent mischaracterizes as austerity is, in fact, the targeted reallocation of squandered administrative waste into frontline emergency healthcare.",explanation:`Rhetorical reframing deconstructs the opponent's pejorative label ("mischaracterizes as austerity") and transforms it into a morally compelling benefit ("reallocation into frontline healthcare").`,explanation_tr:'Retorik yeniden çerçeveleme (reframing), rakibin olumsuz etiketini ("mischaracterizes as austerity") çürütüp yerine toplum için faydalı somut bir kazanımı ("reallocation into frontline healthcare") koyarak yapılır.'},{id:73,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A1",topic:"Past Tense Regular -ed Endings",question:'In which of the following verbs is the regular past tense suffix "-ed" pronounced as an extra syllable /ɪd/ or /əd/?',options:'["decided","worked","played","laughed"]',correct_answer:"decided",explanation:'The "-ed" suffix is pronounced as an extra syllable /ɪd/ only after root verbs ending in /t/ or /d/ sounds (decide -> decided).',explanation_tr:"Düzenli fiillerde -ed takısı sadece /t/ ve /d/ sesleriyle biten fiillerden sonra ayrı bir hece (/ɪd/) olarak telaffuz edilir (decide -> decided)."},{id:74,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A1",topic:"Plural & Sibilant Suffixes (-s / -es)",question:'In which word is the final "-es" pronounced as an extra syllable /ɪz/ or /əz/?',options:'["matches","books","dogs","walks"]',correct_answer:"matches",explanation:'Plural "-es" is pronounced /ɪz/ after sibilants (/tʃ/, /dʒ/, /s/, /z/, /ʃ/). "Match" ends in /tʃ/, producing /mætʃɪz/.',explanation_tr:"Sıslayıcı/hışırtılı seslerle (ch, sh, s, x, z) biten kelimelerin çoğul veya 3. şahıs takısı ayrı bir hece (/ɪz/) olarak okunur (match -> matches)."},{id:75,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A2",topic:"Silent Consonants",question:'Which letter is completely silent in the standard pronunciation of the word "subtle" /sʌtl/?',options:'["b","t","l","u"]',correct_answer:"b",explanation:'The letter "b" is silent in "subtle" (/sʌtl/), just as in "doubt" (/daʊt/) and "debt" (/det/).',explanation_tr:'"Subtle" kelimesindeki "b" harfi okunmaz, tamamen sessizdir (/sʌtl/).'},{id:76,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A2",topic:"Primary Stress in Everyday Two-Syllable Nouns",question:'Where does the primary lexical stress fall in the nouns "doc-tor", "ta-ble", and "sys-tem"?',options:'["On the first syllable","On the second syllable","Both syllables receive equal stress","Stress alternates unpredictably"]',correct_answer:"On the first syllable",explanation:"The vast majority of two-syllable English nouns place primary stress on the first syllable (DOC-tor, TA-ble, SYS-tem).",explanation_tr:"İngilizcedeki iki heceli isimlerin büyük çoğunluğunda birincil vurgu ilk hecededir (DOC-tor, TA-ble, SYS-tem)."},{id:77,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B1",topic:"Stress Shift in Noun/Verb Heteronyms",question:'When the word "record" functions as a VERB (as in "We need to ___ the podcast episode"), where is the primary stress positioned?',options:'["On the second syllable: re-CORD /rɪˈkɔːd/","On the first syllable: RE-cord /ˈrekɔːd/","On neither syllable","On both syllables with equal stress"]',correct_answer:"On the second syllable: re-CORD /rɪˈkɔːd/",explanation:"In two-syllable noun-verb pairs, nouns carry stress on the first syllable (a REcord), while verbs carry stress on the second syllable (to reCORD).",explanation_tr:"İki heceli isim-fiil çiftlerinde isimlerde vurgu 1. hecede (REcord), fiillerde ise 2. hecededir (reCORD)."},{id:78,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B1",topic:"Minimal Vowel Contrast (/ɪ/ vs /iː/)",question:"Which word pair demonstrates the phonetic contrast between the short lax vowel /ɪ/ and the long tense vowel /iː/?",options:'["bin / bean","bed / bad","cot / caught","cup / cap"]',correct_answer:"bin / bean",explanation:'"Bin" has the short lax vowel /bɪn/, whereas "bean" features the long tense vowel /biːn/.',explanation_tr:'"Bin" (/bɪn/) kısa /ɪ/ ünlüsüne sahipken, "bean" (/biːn/) uzun /iː/ ünlüsüne sahip klasik bir minimal çifttir.'},{id:79,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B2",topic:"Vowel Reduction to Schwa /ə/ in Polysyllabic Words",question:'In the word "photography" /fəˈtɒɡrəfi/, which syllables contain the reduced neutral vowel schwa /ə/?',options:'["The first and third syllables","The second and fourth syllables","Only the first syllable","None of the syllables"]',correct_answer:"The first and third syllables",explanation:"In /fəˈtɒɡrəfi/, the first syllable (pho- -> /fə/) and third syllable (-gra- -> /rə/) are unstressed and reduce to schwa /ə/.",explanation_tr:'"Photography" (/fəˈtɒɡrəfi/) kelimesinde vurgusuz olan 1. ve 3. heceler schwa /ə/ sesine indirgenir.'},{id:80,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B2",topic:"Initial Consonant Clusters & Avoiding Epenthesis",question:'Turkish speakers frequently insert an intrusive vowel sound before English initial /s/ clusters (e.g. saying "is-port" or "is-tation"). What is the phonologically correct articulation?',options:'["Begin vocalization directly with the unvoiced alveolar fricative /s/ without any preceding vowel","Insert a brief /ɪ/ before the /s/","Pronounce the /s/ as a voiced /z/","Drop the /s/ entirely"]',correct_answer:"Begin vocalization directly with the unvoiced alveolar fricative /s/ without any preceding vowel",explanation:"Standard English initial consonant clusters (/sp/, /st/, /sk/) must start cleanly with /s/ without epenthetic prothesis.",explanation_tr:'Türkçede kelime başında çift ünsüz bulunmadığı için yapılan "is-tation", "is-port" hatasını önlemek için telaffuza doğrudan /s/ sürtünmeli sesiyle başlanmalıdır.'},{id:81,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"C1",topic:"Connected Speech: Linking & Intrusive /r/",question:'In non-rhotic standard British English (Received Pronunciation), what phonetic phenomenon naturally links the words in "law and order"?',options:'["An intrusive /r/ sound (/lɔː r ən ɔːdə/)","An intrusive /w/ glide","An intrusive /j/ glide","A glottal stop /ʔ/"]',correct_answer:"An intrusive /r/ sound (/lɔː r ən ɔːdə/)",explanation:"When a word ending in /ɔː/, /ɑː/, or /ə/ is followed by a word starting with a vowel, non-rhotic English inserts an intrusive /r/ to bridge the vowel hiatus.",explanation_tr:"Standart İngiliz İngilizcesinde /ɔː/ gibi ünlülerle biten bir kelime ünlüyle başlayan bir kelimeyle bağlandığında araya doğal olarak türemiş (intrusive) /r/ sesi girer (/lɔː r ən ɔːdə/)."},{id:82,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"C1",topic:"Contrastive Nuclear Stress & Presupposition Shift",question:'In the sentence "I thought we were meeting on TUESDAY" (with emphatic nuclear stress and falling tone on "TUESDAY"), what does the prosody imply?',options:'["The speaker discovered that the meeting is actually scheduled for a different day","The speaker is surprised that Tuesday has arrived on the calendar","The speaker wanted someone else to attend instead","The speaker does not know what day of the week it is"]',correct_answer:"The speaker discovered that the meeting is actually scheduled for a different day",explanation:'Placing nuclear stress on the day ("TUESDAY") contrasts it with the actual day of the meeting, signaling that the initial assumption was mistaken.',explanation_tr:'Vurgunun "TUESDAY" üzerine konması, toplantının Salı günü değil başka bir gün yapılacağını öğrenen kişinin şaşkınlığını ve tezatı vurgular.'},{id:83,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"C2",topic:"Complex Elision in Rapid Casual Phonology",question:'In rapid natural connected speech, what phonological elision commonly occurs in the phrase "facts and figures"?',options:'["The /t/ in \\"facts\\" is elided between consonants, yielding /fæks ən fɪɡjəz/","The /f/ in \\"figures\\" is deleted","The /s/ in \\"facts\\" is omitted","The vowel in \\"facts\\" changes to /e/"]',correct_answer:'The /t/ in "facts" is elided between consonants, yielding /fæks ən fɪɡjəz/',explanation:"In English consonant clusters, alveolar stops (/t/, /d/) between consonants routinely undergo complete elision (/fæks ən fɪɡjəz/).",explanation_tr:'İngilizcede ünsüz öbekleri arasında kalan /t/ ve /d/ sesleri hızlı konuşmada tamamen düşer (elision: "facts and figures" -> /fæks ən fɪɡjəz/).'},{id:84,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"C2",topic:"Attitudinal Meaning of Rise-Fall-Rise Intonation Contours",question:'A speaker utters the compliment "She is competent..." with a deliberate rise-fall-rise pitch contour across "competent". What pragmatic nuance is conveyed?',options:'["Reservation, hesitation, or unspoken caveats (e.g. she is competent, but lacks vision or warmth)","Unreserved, enthusiastic, boundless praise","Complete factual certainty and finality","A simple direct question"]',correct_answer:"Reservation, hesitation, or unspoken caveats (e.g. she is competent, but lacks vision or warmth)",explanation:"The rise-fall-rise intonational tune is the classic British and American carrier of reservation, indicating that the speaker has unspoken reservations.",explanation_tr:'İngilizcede yükselen-alçalan-yükselen (rise-fall-rise) tonlama, söylenmemiş bir çekince veya tereddüt ("yetkin ama vizyonsuz/soğuk biri") ima etmek için kullanılır.'},{id:85,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A1",topic:"Basic Subject-Verb-Object (SVO) Order",question:"Which sentence demonstrates the correct English word order for subject, verb, object, and adverbial?",options:'["He drinks black coffee in the morning.","He drinks in the morning black coffee.","In the morning drinks he black coffee.","Coffee black he drinks in the morning."]',correct_answer:"He drinks black coffee in the morning.",explanation:"Standard English clause structure requires Subject (He) + Verb (drinks) + Object (black coffee) + Adverbial of Time (in the morning).",explanation_tr:"Standart İngilizce cümle dizilimi Özne + Fiil + Nesne + Zaman Zarflığı (SVO + Time) kuralına uyar."},{id:86,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A1",topic:"Position of Frequency Adverbs",question:'Where should the frequency adverb "always" be placed in this sentence?',options:'["She always arrives at the office on time.","Always she arrives at the office on time.","She arrives always at the office on time.","She arrives at the office always on time."]',correct_answer:"She always arrives at the office on time.",explanation:"Adverbs of frequency (always, often, never) go before the main lexical verb (arrives).",explanation_tr:'Sıklık zarfları (always, usually vb.) asıl fiilden hemen önce gelir ("She always arrives...").'},{id:87,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A2",topic:"Word Order in Indirect Questions",question:"Which of the following sentences correctly forms an indirect question?",options:'["Could you please tell me where the nearest metro station is?","Could you please tell me where is the nearest metro station?","Could you please tell me where does the nearest metro station be?","Could you please tell me where is located the metro station?"]',correct_answer:"Could you please tell me where the nearest metro station is?",explanation:'In indirect questions, the subordinate clause abandons interrogative inversion and returns to statement order: "where + subject + verb".',explanation_tr:'Dolaylı sorularda ("Could you tell me..."), soru kalıbı düz cümle dizilimine (özne + fiil: where the station is) döner.'},{id:88,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A2",topic:"Equative Comparison Syntax (as ... as)",question:'Which sentence correctly formulates equality of degree using "as ... as"?',options:'["This electric vehicle is as reliable as our previous diesel car.","This electric vehicle is so reliable than our previous diesel car.","This electric vehicle is as reliable than our previous diesel car.","This electric vehicle is as more reliable as our previous diesel car."]',correct_answer:"This electric vehicle is as reliable as our previous diesel car.",explanation:'Equative comparisons require the frame "as + base adjective + as" (as reliable as).',explanation_tr:'Eşitlik bildiren kıyaslamalarda "as + sıfat + as" (as reliable as) yapısı kullanılır.'},{id:89,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B1",topic:"Omission of Relative Pronouns in Contact Clauses",question:"In which sentence can the relative pronoun be grammatically omitted without altering meaning or grammaticality?",options:'["The documentary which we watched last night was thought-provoking.","The director who filmed the documentary won an international award.","The researcher who discovered the anomaly received a grant.","The explosion which destroyed the laboratory occurred at midnight."]',correct_answer:"The documentary which we watched last night was thought-provoking.",explanation:'A relative pronoun can be omitted only when it functions as the grammatical object of the relative clause ("which we watched" -> "the documentary we watched").',explanation_tr:'İlgi zamirleri (which/who/that) sadece yan cümlenin nesnesi konumunda olduklarında cümleden atılabilir ("the documentary we watched").'},{id:90,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B1",topic:"Passive Transformation with Agent",question:`Select the grammatically accurate passive transformation of: "An eminent Danish architect designed the cultural center."
`,options:'["The cultural center was designed by an eminent Danish architect.","The cultural center is designed by an eminent Danish architect.","The cultural center has designed an eminent Danish architect.","The cultural center was being design by an eminent Danish architect."]',correct_answer:"The cultural center was designed by an eminent Danish architect.",explanation:'The past simple active ("designed") transforms into past simple passive ("was designed by").',explanation_tr:'Past Simple etken fiil ("designed"), edilgen yapıda "was/were + V3" ("was designed by") haline gelir.'},{id:91,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B2",topic:"Inversion after Restrictive Correlatives (Not only)",question:"Choose the sentence that applies subject-auxiliary inversion correctly:",options:'["Not only did the startup surpass its revenue targets, but it also secured Series B funding.","Not only the startup surpassed its revenue targets, but it also secured Series B funding.","Not only did the startup surpassed its revenue targets, but also secured funding.","Not only had the startup surpass its revenue targets, but it also secured funding."]',correct_answer:"Not only did the startup surpass its revenue targets, but it also secured Series B funding.",explanation:'"Not only" at the start of a clause requires subject-auxiliary inversion: "Not only + did + subject + bare infinitive".',explanation_tr:'"Not only" cümlenin başına geldiğinde yardımcı fiil öznenin önüne geçer: "Not only + did + özne + V1".'},{id:92,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B2",topic:"Non-defining Relative Clauses with Prepositions",question:"The university granted scholarships to fifty international postgraduate researchers, ___ thirty were specializing in quantum computing.",options:'["of whom","of which","to whom","whose"]',correct_answer:"of whom",explanation:'When referring back to human persons in a prepositional quantity construction, "of whom" is grammatically required.',explanation_tr:'İnsanları niteleyen miktar belirten ilgi cümlelerinde "of whom" yapısı kullanılır.'},{id:93,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"C1",topic:"Wh-Cleft Sentences for Thematic Prominence",question:`Select the correct wh-cleft transformation of: "Her relentless attention to detail ensured the success of the mission."
`,options:'["What ensured the success of the mission was her relentless attention to detail.","It was what her relentless attention to detail that ensured the mission.","What the success of the mission was her relentless attention to detail.","That her relentless attention to detail was what the mission ensured."]',correct_answer:"What ensured the success of the mission was her relentless attention to detail.",explanation:'A wh-cleft sentence isolates the focal element by beginning with "What + clause + was + focused element".',explanation_tr:'Vurgu cümlesinde (wh-cleft), odaklanılan öge "What + yan cümle + was + vurgulanan öge" kalıbıyla cümlenin sonuna taşınır.'},{id:94,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"C1",topic:"Inverted Conditionals (Were ... to)",question:`Rewrite this conditional without using "if": "If the government were to enact this tariff, trade retaliation would follow."
`,options:'["Were the government to enact this tariff, trade retaliation would follow.","Had the government enacted this tariff, trade retaliation would follow.","Should the government enacted this tariff, trade retaliation would follow.","Did the government enact this tariff, trade retaliation would follow."]',correct_answer:"Were the government to enact this tariff, trade retaliation would follow.",explanation:'Second conditional inversion replaces "If + subject + were to" with "Were + subject + to + base verb".',explanation_tr:'"If" bağlacı atıldığında 2. tip koşul devrik yapısı "Were + özne + to + fiil" biçimini alır.'},{id:95,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"C2",topic:"Locative & Directional Fronting Inversion",question:"Which of the following sentences exhibits stylistically flawless locative fronting inversion?",options:'["At the crest of the rocky ridge stood a solitary observation outpost.","At the crest of the rocky ridge did a solitary observation outpost stand.","At the crest of the rocky ridge a solitary observation outpost stood it.","At the crest of the rocky ridge stood it a solitary observation outpost."]',correct_answer:"At the crest of the rocky ridge stood a solitary observation outpost.",explanation:'In literary locative inversion, an adverbial of place is fronted, followed directly by the main intransitive verb and the subject (without "do/did").',explanation_tr:'Edebi dilde yer zarfı öne alındığında yardımcı fiil (did) eklenmeksizin doğrudan asıl fiil ve özne yer değiştirir ("stood a solitary outpost").'},{id:96,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"C2",topic:"Absolute Participial Constructions",question:"Identify the sentence containing a grammatically impeccable nominative absolute construction:",options:'["All regulatory prerequisites having been satisfied, the antitrust board approved the acquisition.","All regulatory prerequisites had satisfied, the antitrust board approved the acquisition.","Having all regulatory prerequisites been satisfied, the antitrust board approved the acquisition.","All regulatory prerequisites satisfying, the antitrust board approved the acquisition."]',correct_answer:"All regulatory prerequisites having been satisfied, the antitrust board approved the acquisition.",explanation:"An absolute clause consists of an independent subject noun phrase followed by a participle, functioning as an adverbial adjunct without a coordinating conjunction.",explanation_tr:'Bağımsız ortaç yapısında (absolute clause), ana cümlenin öznesinden bağımsız bir isim öbeği ve ortaç yer alır ("All prerequisites having been satisfied, ...").'},{id:97,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A1",topic:"Basic Causal Inference",question:'"Oliver put on his heavy winter coat because a freezing blizzard was howling through the streets." Why did Oliver wear his coat?',options:'["Because it was extremely cold and stormy outside","Because he was feeling very hot","Because he was going swimming","Because someone stole his clothes"]',correct_answer:"Because it was extremely cold and stormy outside",explanation:"A freezing blizzard indicates extreme cold and stormy conditions, motivating the wearing of a winter coat.",explanation_tr:'Metindeki dondurucu kar fırtınası ("freezing blizzard"), paltosunu giymesinin sebebinin aşırı soğuk ve fırtınalı hava olduğunu açıkça gösterir.'},{id:98,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A1",topic:"Everyday Idiomatic Meaning",question:'If an employee says: "I will be taking a sick day because I am feeling under the weather," what is their condition?',options:'["They feel slightly unwell or ill","They are enjoying outdoor sunshine","They are an environmental meteorologist","They lost their rain umbrella"]',correct_answer:"They feel slightly unwell or ill",explanation:'"Under the weather" is a standard idiom denoting mild illness or indisposition.',explanation_tr:'"Under the weather" deyimi kendini hasta, kırgın veya keyifsiz hissetmek anlamına gelir.'},{id:99,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A2",topic:"Reading Between the Lines in Public Notices",question:'Park sign: "Take only photographs, leave only footprints." What is the fundamental conservation message?',options:'["Protect natural wildlife and leave the environment completely undisturbed","You must take photos of every single tree","You must remove your shoes before entering","Only professional photographers are permitted"]',correct_answer:"Protect natural wildlife and leave the environment completely undisturbed",explanation:"The metaphorical proverb cautions visitors against littering, defacing, or removing natural elements from the park.",explanation_tr:'"Take only photographs, leave only footprints" uyarısı, doğaya çöp atmamayı ve doğal yaşama hiçbir zarar vermeden sadece anı biriktirmeyi öğütler.'},{id:100,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A2",topic:"Cultural Idiomatic Expressions",question:'Before an actor walks onto a theater stage, a friend says: "Break a leg tonight!" What is the friend communicating?',options:'["Wishing them good luck and a wonderful performance","Hoping they suffer a physical orthopedic injury","Warning them that the stage flooring is broken","Telling them to stop acting immediately"]',correct_answer:"Wishing them good luck and a wonderful performance",explanation:'In Anglo-American theater culture, saying "Break a leg!" is an auspicious idiom used to wish someone good luck.',explanation_tr:'Tiyatro ve sanat dünyasında "Break a leg!", iyi şanslar ve başarılı bir performans dilemek için söylenen köklü bir deyimdir.'},{id:101,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B1",topic:"Direct English Conceptual Mapping vs Turkish Literal Translation",question:`In Turkish, one says "İyi ki doğdun" on someone's birthday. What is the authentic, culturally equivalent English conceptualization?`,options:'["Happy Birthday!","Good that you were born!","It is well that you came to earth!","Nice birth date to you!"]',correct_answer:"Happy Birthday!",explanation:'English directly maps birthday celebrations to the concept "Happy Birthday!" rather than translating the literal Turkish sentiment ("Good that you were born").',explanation_tr:'Türkçedeki "İyi ki doğdun" ifadesi kelimesi kelimesine çevrilmez; İngilizce düşünce sisteminde karşılığı doğrudan "Happy Birthday!" kalıbıdır.'},{id:102,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B1",topic:"Pragmatic Intent Behind Conversational Offers",question:'A senior mentor tells a new recruit: "If you ever hit a snag with the codebase, my door is always open." What is the mentor conveying?',options:'["Welcoming the recruit to ask for assistance whenever difficulties arise","Instructing the recruit to never close the physical office door","Complaining about lack of ventilation in the office","Warning the recruit that they might be dismissed"]',correct_answer:"Welcoming the recruit to ask for assistance whenever difficulties arise",explanation:'"My door is always open" is a metaphor indicating approachability and willingness to provide help.',explanation_tr:'"My door is always open" mecazi bir ifade olup, bir sorun yaşandığında çekinmeden yardım istenebileceğini belirtir.'},{id:103,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B2",topic:"Corporate Pragmatic Implicature (Anglo-American Register)",question:'In an email review, your manager remarks: "You might want to reconsider the financial projections in slide six." In corporate English culture, this is pragmatically:',options:'["A polite, understated directive instructing you to correct flawed numbers","A casual passing thought that you can safely disregard","A genuine question asking whether you enjoy mathematics","A compliment praising your artistic design"]',correct_answer:"A polite, understated directive instructing you to correct flawed numbers",explanation:'Anglo-American corporate culture uses the polite modal phrase "You might want to..." as an indirect command to fix an identified error.',explanation_tr:'İş İngilizcesinde "You might want to..." gibi yumuşatılmış ifadeler, aslında hata tespit edildiğini ve düzeltilmesinin beklendiğini nezaketle bildiren bir talimattır.'},{id:104,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B2",topic:"Metaphorical Scepticism (Grain of Salt)",question:'Financial commentary: "Investors should take quarterly projections from unverified social media influencers with a heavy grain of salt." What does "with a grain of salt" mean?',options:'["With healthy skepticism, maintaining caution before accepting claims as true","Adding culinary sodium to food while reading reports","With blind, unquestioning acceptance and complete faith","By discarding the report entirely without ever reading it"]',correct_answer:"With healthy skepticism, maintaining caution before accepting claims as true",explanation:'"To take something with a grain of salt" means to view information with skepticism and caution.',explanation_tr:'"Take something with a grain of salt", duyulan bir iddiaya hemen inanmayıp şüpheyle ve temkinle yaklaşmak anlamına gelen bir deyimdir.'},{id:105,skill:"comprehension",question_type:"multiple_choice",cefr_level:"C1",topic:"British Cultural Understatement & Indirect Rejection",question:'During a pitch, a British investor remarks: "That is certainly an inventive proposition, though perhaps a touch brave for our current risk tolerance." What does the investor actually mean?',options:'["The proposal is excessively risky and will almost certainly be rejected","The proposal is heroic and funding will be granted immediately","The company wants to take reckless financial gambles","The investor does not understand the business plan"]',correct_answer:"The proposal is excessively risky and will almost certainly be rejected",explanation:'In British understated rhetoric, describing an initiative as "brave" or "ambitious" is a polite, coded way of saying it is foolhardy and unviable.',explanation_tr:'İngiliz iş kültüründe bir projeye "brave" (cesur) ya da "a touch ambitious" demek, projenin aşırı riskli ve kabul edilemez bulunduğunu nezaketle ifade etmektir.'},{id:106,skill:"comprehension",question_type:"multiple_choice",cefr_level:"C1",topic:"Decoding Epistemic Modality & Authorial Bias",question:`Social commentary: "While algorithmic governance ostensibly promises hyper-efficient civic management, its insidious consequence is the steady erosion of individual agency under the rubric of optimization." What is the author's thesis?`,options:'["The claimed administrative efficiency masks a dangerous suppression of personal autonomy","Algorithmic optimization has successfully liberated human individuals","Civic management cannot benefit from digital computing","Individual agency is obsolete in modern technological systems"]',correct_answer:"The claimed administrative efficiency masks a dangerous suppression of personal autonomy",explanation:'The word "ostensibly" contrasts the purported benefit with the real, insidious loss of individual autonomy.',explanation_tr:'"Ostensibly" (görünürde) kelimesiyle başlayan cümle, verimlilik vaadinin arkasında bireysel özgürlüğün ve iradenin sinsice yok edildiğini vurgulamaktadır.'},{id:107,skill:"comprehension",question_type:"multiple_choice",cefr_level:"C2",topic:"Philosophical Epistemology & Heuristic Reasoning",question:'Epistemology excerpt: "Human scientific paradigms are not veridical mirrors of mind-independent ontology, but pragmatic heuristics calibrated to render phenomenal experience computationally tractable." What is the core philosophical claim?',options:'["Scientific frameworks are useful cognitive tools rather than direct reflections of ultimate objective reality","Human sensory organs perceive absolute metaphysical truth with perfect accuracy","Theoretical models are completely useless fabrications devoid of practical value","Mind-independent reality does not exist in any form"]',correct_answer:"Scientific frameworks are useful cognitive tools rather than direct reflections of ultimate objective reality",explanation:"The passage asserts that scientific theories are pragmatic heuristics designed to make experience manageable, not mirrorings of ontology.",explanation_tr:"Metin, bilimsel teorilerin nihai ontolojik gerçekliğin birebir aynası değil; karmaşık deneyimleri anlamlandırmaya yarayan faydacı bilişsel araçlar (heuristics) olduğunu savunur."},{id:108,skill:"comprehension",question_type:"multiple_choice",cefr_level:"C2",topic:"Unraveling Multi-Layered Rhetorical Irony",question:`Satirical essay: "How fortunate we are that algorithmic feeds curate our thoughts, sparing us the agonizing inconvenience of critical reflection and packaging monotonous consumer conformity as bespoke identity." What is the satirist's underlying critique?`,options:'["Algorithms induce intellectual passivity and enforce commercial conformity while masquerading as personal freedom","Algorithms have significantly enriched the critical intellectual faculties of citizens","People genuinely enjoy avoiding independent thought in digital spaces","Bespoke customization guarantees authentic personal identity"]',correct_answer:"Algorithms induce intellectual passivity and enforce commercial conformity while masquerading as personal freedom",explanation:'The satirist uses caustic irony ("How fortunate we are...", "sparing us the agonizing inconvenience") to criticize how platforms enforce conformity.',explanation_tr:'Yazar kinayeli (ironik) bir dille ("ne büyük şans..."), algoritmaların insanları düşünme zahmetinden kurtarma bahanesiyle tek tip tüketici sürülerine dönüştürdüğünü eleştirmektedir.'},{id:109,skill:"communication",question_type:"multiple_choice",cefr_level:"A1",topic:"Approaching Strangers in Public Spaces",question:"You need directions to the nearest tube station in London. How do you approach a pedestrian courteously?",options:'["Excuse me, could you please tell me how to get to the station?","Hey you, station where?","Stop walking and show me the train.","I need train now!"]',correct_answer:"Excuse me, could you please tell me how to get to the station?",explanation:'"Excuse me..." followed by a polite modal request is the universal standard for addressing strangers in English.',explanation_tr:'Yolda tanımadığınız birine bir şey sorarken en evrensel ve saygılı açılış "Excuse me, could you please...?" kalıbıdır.'},{id:110,skill:"communication",question_type:"multiple_choice",cefr_level:"A1",topic:"Standard Parting Expressions",question:"When concluding a brief interaction with a store cashier in the afternoon, which parting phrase is most natural?",options:'["Have a great day!","See you yesterday!","Sleep tightly now!","Cease working!"]',correct_answer:"Have a great day!",explanation:'"Have a great day!" is a polite, standard daytime conversational closure.',explanation_tr:'Gündüz saatlerinde bir alışverişi veya sohbeti bitirirken en yaygın ve doğal veda kalıbı "Have a great day!"dir.'},{id:111,skill:"communication",question_type:"multiple_choice",cefr_level:"A2",topic:"Conversational Repair on Unclear Audio",question:"A telephone agent speaks too quickly and you miss a crucial confirmation number. How do you request clarification courteously?",options:`["I am sorry, I didn't quite catch that. Could you say it once more, please?","Speak slower, your voice is bad.","You are speaking too quickly, stop!","Repeat everything immediately."]`,correct_answer:"I am sorry, I didn't quite catch that. Could you say it once more, please?",explanation:`"I didn't quite catch that. Could you say it once more, please?" is courteous conversational repair.`,explanation_tr:`Telefonda anlaşılamayan bir şeyi tekrar ettirmek için "I didn't quite catch that. Could you say it once more, please?" en kibar ifadedir.`},{id:112,skill:"communication",question_type:"multiple_choice",cefr_level:"A2",topic:"Responding to Expressions of Gratitude",question:'A coworker says: "Thank you so much for helping me compile the spreadsheet!" What is the most natural reply?',options:`["You're very welcome! Glad I could help.","It is mandatory for me.","No problem, give me a reward.","Why are you thanking me?"]`,correct_answer:"You're very welcome! Glad I could help.",explanation:`"You're very welcome! Glad I could help" is friendly, professional, and standard.`,explanation_tr:`Teşekküre karşılık vermenin en sıcak ve standart yolu "You're very welcome! Glad I could help" ifadesidir.`},{id:113,skill:"communication",question_type:"multiple_choice",cefr_level:"B1",topic:"Tactful Interruption during Meeting Presentations",question:"During a client presentation, you need to ask a brief question before the presenter changes the slide. What is the most polite phrasing?",options:'["Pardon me for interrupting, but may I ask a brief clarifying question regarding this chart?","Stop talking right now, my turn.","Be silent so I can talk.","Your chart makes no sense."]',correct_answer:"Pardon me for interrupting, but may I ask a brief clarifying question regarding this chart?",explanation:'"Pardon me for interrupting, but may I ask..." facilitates polite turn-taking without aggressive disruption.',explanation_tr:'Toplantıda sunumu yapan kişinin sözünü kibarca kesip soru sormak için "Pardon me for interrupting, but may I ask...?" kalıbı kullanılır.'},{id:114,skill:"communication",question_type:"multiple_choice",cefr_level:"B1",topic:"Conversational Fillers to Maintain Fluency",question:"In a job interview, the panel asks a challenging situational question and you need 5 seconds to assemble your thoughts. Which phrase maintains conversational poise best?",options:`["\\"That is a very insightful question. Let me reflect on that for just a moment...\\"","Absolute frozen silence for 15 seconds staring at the floor","\\"Do not talk to me, I need to think!\\"","\\"I don't know anything about that.\\""]`,correct_answer:'"That is a very insightful question. Let me reflect on that for just a moment..."',explanation:"Conversational bridge phrases acknowledge the question and buy cognitive planning time while maintaining fluent communicative contact.",explanation_tr:'Mülakatta düşünmek için zaman kazanırken akıcılığı ve profesyonelliği korumanın en iyi yolu köprü ifadeler ("That is an insightful question, let me reflect...") kullanmaktır.'},{id:115,skill:"communication",question_type:"multiple_choice",cefr_level:"B2",topic:"De-escalating Interpersonal Tension in Team Deliberations",question:"Two colleagues reach an angry deadlock over product design. As a team member, what is the most constructive de-escalation intervention?",options:'["\\"Let us step back for a moment. We both share the goal of product excellence; let us map out the comparative trade-offs of both options objectively.\\"","\\"Both of you are behaving unprofessionally and ruining our day.\\"","\\"Whoever yells louder should get their design approved.\\"","\\"Let us abandon the project since you cannot get along.\\""]',correct_answer:'"Let us step back for a moment. We both share the goal of product excellence; let us map out the comparative trade-offs of both options objectively."',explanation:"Effective conflict de-escalation highlights shared goals and shifts the dynamic from personal confrontation to objective trade-off evaluation.",explanation_tr:'Çatışmayı yatıştırmak için kişiselleşen tartışmayı ortak hedefe ("shared goal of product excellence") ve nesnel artı-eksi değerlendirmesine çekmek en yapıcı yöntemdir.'},{id:116,skill:"communication",question_type:"multiple_choice",cefr_level:"B2",topic:"Professional Etiquette for Communicating Unavoidable Delays",question:"You must inform a corporate client that a deliverable will be delayed by 48 hours due to server migration anomalies. Which phrasing is most professional?",options:'["\\"Due to unforeseen server migration anomalies during our quality checks, we require an additional 48 hours to ensure system integrity. We sincerely apologize for this delay and will provide an interim update tomorrow.\\"","\\"The servers broke, so you will just have to wait two days.\\"","\\"Our IT team made mistakes, so the project is late.\\"","\\"Do not expect the deliverable until Friday.\\""]',correct_answer:'"Due to unforeseen server migration anomalies during our quality checks, we require an additional 48 hours to ensure system integrity. We sincerely apologize for this delay and will provide an interim update tomorrow."',explanation:"Professional client communications state the objective reason, the exact timeframe needed, an apology, and a clear next step.",explanation_tr:"Gecikmeleri müşteriye bildirirken profesyonel nezaket; gerekçeyi, ek süreyi, içten bir özrü ve bir sonraki bilgilendirme adımını net bir dille aktarmaktır."},{id:117,skill:"communication",question_type:"multiple_choice",cefr_level:"C1",topic:"Cross-Cultural Consensus Facilitation in Global Teams",question:"In an international summit where direct communication cultures clash with indirect communication cultures, how does a chair facilitate consensus?",options:'["\\"I want to ensure all regional perspectives are fully represented. Let us synthesize our shared objectives and create space for both written and spoken feedback from all delegations.\\"","\\"Direct communicators should dominate the debate because they are faster.\\"","\\"Delegates who do not speak immediately will forfeit their vote.\\"","\\"We must ignore cultural styles and follow my personal rules.\\""]',correct_answer:'"I want to ensure all regional perspectives are fully represented. Let us synthesize our shared objectives and create space for both written and spoken feedback from all delegations."',explanation:"Global leadership bridges communication differences by providing diverse modalities (written/spoken) and explicit space for varied cultural styles.",explanation_tr:"Çok uluslu ekiplerde uzlaşı sağlamak, farklı iletişim tarzlarına sahip kültürlerin görüşlerini hem sözlü hem yazılı kanallarla eşit şekilde temsil etmekle mümkündür."},{id:118,skill:"communication",question_type:"multiple_choice",cefr_level:"C1",topic:"Executive Boardroom Register Modulation",question:`How do you adapt the colloquial sentiment "This marketing plan won't work because we don't have enough money" for a high-stakes board presentation?`,options:'["\\"While conceptually robust, the proposed marketing initiative demands capital expenditures that exceed our current fiscal parameters.\\"","\\"This marketing strategy is broke and we have zero cash for it.\\"","\\"Nobody can afford this crazy marketing scheme.\\"","\\"The plan is garbage financially.\\""]',correct_answer:'"While conceptually robust, the proposed marketing initiative demands capital expenditures that exceed our current fiscal parameters."',explanation:'Executive register replaces blunt colloquialisms with balanced, diplomatic terminology ("conceptually robust", "capital expenditures", "current fiscal parameters").',explanation_tr:'Üst düzey yönetim kurulu dilinde doğrudan olumsuz ifadeler yerine diplomatik ve dengeli bir terminoloji ("conceptually robust... exceeds current fiscal parameters") tercih edilir.'},{id:119,skill:"communication",question_type:"multiple_choice",cefr_level:"C2",topic:"Crisis Management & Neutralizing Adversarial Hostility",question:`An aggressive reporter charges: "Isn't your corporate restructuring merely an unprincipled scheme to eliminate worker pensions while enriching top executives?" How does the chief communications officer neutralize this attack masterfully?`,options:'["\\"I understand that restructuring inevitably generates profound anxiety regarding livelihoods; however, our transition plan is expressly designed to safeguard ongoing operational solvency, thereby guaranteeing pension obligations for decades to come.\\"","\\"That is an outrageous, biased question and you are a dishonest journalist.\\"","\\"No comment, turn off your cameras right now.\\"","\\"Executives work hard and deserve their remuneration regardless of pensions.\\""]',correct_answer:'"I understand that restructuring inevitably generates profound anxiety regarding livelihoods; however, our transition plan is expressly designed to safeguard ongoing operational solvency, thereby guaranteeing pension obligations for decades to come."',explanation:"Crisis communication neutralizes hostility by acknowledging emotional distress without conceding guilt, and framing the contested policy as the sole protector of the questioned benefit.",explanation_tr:'Kriz iletişiminde saldırgan bir ithama karşı en yetkin tutum; öfkeyi ve endişeyi insani olarak anladığını belirtip ("I understand that..."), atılan adımın tam da o emeklilik haklarını korumak için zorunlu olduğunu somut gerekçeyle izah etmektir.'},{id:120,skill:"communication",question_type:"multiple_choice",cefr_level:"C2",topic:"High-Level Diplomatic Signaling & Strategic Reticence",question:"In international multilateral diplomacy, which statement conveys grave concern and implicit deterrence without issuing a legally binding ultimatum?",options:'["\\"My government views these unilateral developments with the profoundest disquiet, and reserves the full spectrum of sovereign diplomatic prerogatives should the established equilibrium be disrupted.\\"","\\"If your troops advance one more inch, we will declare war immediately.\\"","\\"We have decided to ignore your provocations completely.\\"","\\"You must accept all our terms within twenty-four hours or face destruction.\\""]',correct_answer:'"My government views these unilateral developments with the profoundest disquiet, and reserves the full spectrum of sovereign diplomatic prerogatives should the established equilibrium be disrupted."',explanation:'Diplomatic signaling relies on coded formulaic understatement ("profoundest disquiet", "full spectrum of sovereign diplomatic prerogatives") to convey high deterrence without painting either party into an inescapable corner.',explanation_tr:'Diplomatik dilde savaşa veya çatışmaya yol açacak doğrudan ültimatomlar yerine, caydırıcılığı hissettiren ve müzakere payı bırakan üst düzey kodlanmış kalıplar ("profoundest disquiet", "full spectrum of sovereign diplomatic prerogatives") kullanılır.'}]};let B=null;async function D(){return z.vocabulary_items&&z.vocabulary_items.length>0?z.vocabulary_items:B||(B=(async()=>{try{const c=await V(()=>import("./vocabulary-data-DrYKOoID.js"),[],import.meta.url);return z.vocabulary_items=c.vocabularyArchive||[],z.vocabulary_items}catch(c){return console.error("Failed to lazy load vocabulary archive:",c),[]}finally{B=null}})(),B)}const U=[{id:"all",name:"Tüm Konular",desc:"A1-B2 tüm seviyelerden karışık cümle kurma pratikleri"},{id:"basic_svo",name:"Temel S-V-O Dizilimi",desc:"Özne + Yüklem + Nesne mantığı ve fiil-nesne bağı"},{id:"adverb_placement",name:"Zarflar & SVOMPT",desc:"Sıklık, tarz, yer ve zaman zarflarının doğru sıralanışı"},{id:"questions_negatives",name:"Soru & Olumsuz Yapılar",desc:"Yardımcı fiiller, soru kelimeleri ve vurgular"},{id:"indirect_questions",name:"Dolaylı Sorular (Indirect)",desc:"İngilizcede soru sırasının düz cümleye dönüşmesi"},{id:"connectors_clauses",name:"Yan Cümleler & Bağlaçlar",desc:"Relative clauses (who/which) ve neden-sonuç bağlaçları"},{id:"inversion_emphasis",name:"Devrik Cümleler (Inversion)",desc:"Seldom, Rarely gibi zarflarla devrik B2 yapıları"}],W=[{id:"syn-1",cefr_level:"A1",category:"basic_svo",category_name_tr:"Temel S-V-O Dizilimi",turkish_prompt:"Her sabah kahve içerim.",tokens:["I","drink","coffee","every morning"],correct_sentence:"I drink coffee every morning.",acceptable_alternatives:["Every morning I drink coffee."],grammar_breakdown:[{token:"I",role:"Özne (Subject)",tag:"S"},{token:"drink",role:"Fiil (Verb)",tag:"V"},{token:"coffee",role:"Nesne (Object)",tag:"O"},{token:"every morning",role:"Zaman Zarfı (Time)",tag:"T"}],explanation_tr:'Türkçede fiil cümlenin en sonundadır ("içerim"). İngilizcede ise öznenin hemen ardından fiil gelir: S (I) + V (drink) + O (coffee) + T (every morning).'},{id:"syn-2",cefr_level:"A1",category:"basic_svo",category_name_tr:"Temel S-V-O Dizilimi",turkish_prompt:"Kız kardeşim çok güzel piyano çalar.",tokens:["My sister","plays","the piano","very well"],correct_sentence:"My sister plays the piano very well.",acceptable_alternatives:[],grammar_breakdown:[{token:"My sister",role:"Özne (Subject)",tag:"S"},{token:"plays",role:"Fiil (Verb + -s)",tag:"V"},{token:"the piano",role:"Nesne (Object)",tag:"O"},{token:"very well",role:"Durum Zarfı (Manner)",tag:"M"}],explanation_tr:'İngilizcede fiil ile nesne arasına zarf giremez. "Plays very well the piano" YANLIŞTIR. Doğrusu: plays (fiil) + the piano (nesne) + very well (zarf).'},{id:"syn-3",cefr_level:"A1",category:"basic_svo",category_name_tr:"Temel S-V-O Dizilimi",turkish_prompt:"Onlar büyük bir şirkette çalışıyorlar.",tokens:["They","work","in a large company"],correct_sentence:"They work in a large company.",acceptable_alternatives:[],grammar_breakdown:[{token:"They",role:"Özne (Subject)",tag:"S"},{token:"work",role:"Fiil (Verb)",tag:"V"},{token:"in a large company",role:"Yer Bildiren Öbek (Place)",tag:"P"}],explanation_tr:"İngilizcede özne (They) daima başta, fiil (work) ikinci sırada, yer tamlayıcısı (in a large company) ise fiilden sonra gelir."},{id:"syn-4",cefr_level:"A1",category:"basic_svo",category_name_tr:"Temel S-V-O Dizilimi",turkish_prompt:"Biz her gün yeni kelimeler öğreniyoruz.",tokens:["We","learn","new words","every day"],correct_sentence:"We learn new words every day.",acceptable_alternatives:["Every day we learn new words."],grammar_breakdown:[{token:"We",role:"Özne (Subject)",tag:"S"},{token:"learn",role:"Fiil (Verb)",tag:"V"},{token:"new words",role:"Nesne (Object)",tag:"O"},{token:"every day",role:"Zaman Zarfı (Time)",tag:"T"}],explanation_tr:"İngilizce S-V-O-T: We (Özne) + learn (Fiil) + new words (Nesne) + every day (Zaman)."},{id:"syn-5",cefr_level:"A1",category:"basic_svo",category_name_tr:"Temel S-V-O Dizilimi",turkish_prompt:"Ali dün akşam yeni bir telefon satın aldı.",tokens:["Ali","bought","a new phone","yesterday evening"],correct_sentence:"Ali bought a new phone yesterday evening.",acceptable_alternatives:["Yesterday evening Ali bought a new phone."],grammar_breakdown:[{token:"Ali",role:"Özne (Subject)",tag:"S"},{token:"bought",role:"Geçmiş Zaman Fiili (Past Verb)",tag:"V"},{token:"a new phone",role:"Nesne (Object)",tag:"O"},{token:"yesterday evening",role:"Zaman (Time)",tag:"T"}],explanation_tr:'Zaman zarfları ("yesterday evening") genellikle cümlenin en sonunda yer alır. Asla fiil ile nesne arasına sokulmaz.'},{id:"syn-6",cefr_level:"A2",category:"adverb_placement",category_name_tr:"Zarflar & SVOMPT",turkish_prompt:"Babam genellikle sabahları mutfakta kahve içer.",tokens:["My father","usually","drinks","coffee","in the kitchen","in the morning"],correct_sentence:"My father usually drinks coffee in the kitchen in the morning.",acceptable_alternatives:["In the morning my father usually drinks coffee in the kitchen."],grammar_breakdown:[{token:"My father",role:"Özne (Subject)",tag:"S"},{token:"usually",role:"Sıklık Zarfı (Frequency - Fiilden hemen önce)",tag:"Adv"},{token:"drinks",role:"Fiil (Verb)",tag:"V"},{token:"coffee",role:"Nesne (Object)",tag:"O"},{token:"in the kitchen",role:"Yer (Place - Önce gelir)",tag:"P"},{token:"in the morning",role:"Zaman (Time - Sonra gelir)",tag:"T"}],explanation_tr:'İngilizcede yer ve zaman zarfları birlikte kullanıldığında her zaman önce YER (Place), sonra ZAMAN (Time) gelir: "in the kitchen in the morning". Sıklık zarfları (usually) ise asıl fiilin hemen önüne geçer.'},{id:"syn-7",cefr_level:"A2",category:"adverb_placement",category_name_tr:"Zarflar & SVOMPT",turkish_prompt:"Çocuklar dün parkta neşeyle futbol oynadılar.",tokens:["The children","played","football","happily","in the park","yesterday"],correct_sentence:"The children played football happily in the park yesterday.",acceptable_alternatives:["Yesterday the children played football happily in the park."],grammar_breakdown:[{token:"The children",role:"Özne (Subject)",tag:"S"},{token:"played",role:"Fiil (Verb)",tag:"V"},{token:"football",role:"Nesne (Object)",tag:"O"},{token:"happily",role:"Durum / Tarz Zarfı (Manner)",tag:"M"},{token:"in the park",role:"Yer (Place)",tag:"P"},{token:"yesterday",role:"Zaman (Time)",tag:"T"}],explanation_tr:"Altın Formül: S-V-O-M-P-T! Subject (The children) + Verb (played) + Object (football) + Manner (happily) + Place (in the park) + Time (yesterday)."},{id:"syn-8",cefr_level:"A2",category:"adverb_placement",category_name_tr:"Zarflar & SVOMPT",turkish_prompt:"Hafta içi geceleri asla televizyon izlemem.",tokens:["I","never","watch","television","at night","on weekdays"],correct_sentence:"I never watch television at night on weekdays.",acceptable_alternatives:["On weekdays I never watch television at night."],grammar_breakdown:[{token:"I",role:"Özne (Subject)",tag:"S"},{token:"never",role:"Olumsuz Sıklık Zarfı (Frequency)",tag:"Adv"},{token:"watch",role:"Fiil (Verb)",tag:"V"},{token:"television",role:"Nesne (Object)",tag:"O"},{token:"at night",role:"Zaman 1 (Time of day)",tag:"T1"},{token:"on weekdays",role:"Zaman 2 (Broader period)",tag:"T2"}],explanation_tr:'"Never" sıklık zarfı fiilden (watch) önce gelir. Birden fazla zaman zarfı olduğunda dar zaman (at night) geniş zamandan (on weekdays) önce söylenir.'},{id:"syn-9",cefr_level:"A2",category:"adverb_placement",category_name_tr:"Zarflar & SVOMPT",turkish_prompt:"Öğretmenimiz derste her zaman sabırla soruları cevaplar.",tokens:["Our teacher","always","answers","the questions","patiently","in class"],correct_sentence:"Our teacher always answers the questions patiently in class.",acceptable_alternatives:[],grammar_breakdown:[{token:"Our teacher",role:"Özne (Subject)",tag:"S"},{token:"always",role:"Sıklık Zarfı (Frequency)",tag:"Adv"},{token:"answers",role:"Fiil (Verb)",tag:"V"},{token:"the questions",role:"Nesne (Object)",tag:"O"},{token:"patiently",role:"Durum Zarfı (Manner - Nasıl?)",tag:"M"},{token:"in class",role:"Yer Zarfı (Place - Nerede?)",tag:"P"}],explanation_tr:"Sıralama: Özne + Sıklık Zarfı + Fiil + Nesne + Nasıl (patiently) + Nerede (in class)."},{id:"syn-10",cefr_level:"A1",category:"questions_negatives",category_name_tr:"Soru & Olumsuz Yapılar",turkish_prompt:"Genellikle hafta sonları kaçta uyanırsın?",tokens:["What time","do you","usually","wake up","at weekends"],correct_sentence:"What time do you usually wake up at weekends?",acceptable_alternatives:["What time do you usually wake up on weekends?"],grammar_breakdown:[{token:"What time",role:"Soru Kelimesi (Question Word)",tag:"Q"},{token:"do you",role:"Yardımcı Fiil + Özne (Aux + Subject)",tag:"Aux+S"},{token:"usually",role:"Sıklık Zarfı (Frequency)",tag:"Adv"},{token:"wake up",role:"Asıl Fiil (Main Verb)",tag:"V"},{token:"at weekends",role:"Zaman Zarfı (Time)",tag:"T"}],explanation_tr:"İngilizce soru formülü: Soru Sözcüğü (What time) + Yardımcı Fiil (do) + Özne (you) + Zarf (usually) + Fiil (wake up)."},{id:"syn-11",cefr_level:"A2",category:"questions_negatives",category_name_tr:"Soru & Olumsuz Yapılar",turkish_prompt:"Neden soğukta dışarıda bekliyorsunuz?",tokens:["Why","are you","waiting","outside","in the cold"],correct_sentence:"Why are you waiting outside in the cold?",acceptable_alternatives:[],grammar_breakdown:[{token:"Why",role:"Soru Kelimesi (Question Word)",tag:"Q"},{token:"are you",role:"Yardımcı Fiil + Özne (Aux + Subject)",tag:"Aux+S"},{token:"waiting",role:"Şimdiki Zaman Fiili (Verb-ing)",tag:"V"},{token:"outside",role:"Yer (Place)",tag:"P"},{token:"in the cold",role:"Durum / Koşul (Condition)",tag:"M"}],explanation_tr:'Şimdiki zaman soru kalıbında "are" öznenin (you) önüne geçer: "Why are you waiting...".'},{id:"syn-12",cefr_level:"A2",category:"questions_negatives",category_name_tr:"Soru & Olumsuz Yapılar",turkish_prompt:"O harika ceketi geçen hafta nereden aldın?",tokens:["Where","did you","buy","that fantastic jacket","last week"],correct_sentence:"Where did you buy that fantastic jacket last week?",acceptable_alternatives:[],grammar_breakdown:[{token:"Where",role:"Soru Kelimesi (Question Word)",tag:"Q"},{token:"did you",role:"Geçmiş Yardımcı Fiil + Özne",tag:"Aux+S"},{token:"buy",role:"Yalın Fiil (Base Verb - V1)",tag:"V"},{token:"that fantastic jacket",role:"Nesne (Object)",tag:"O"},{token:"last week",role:"Zaman (Time)",tag:"T"}],explanation_tr:'Geçmiş zaman sorusunda "did" kullanıldığı için asıl fiil yalın kalır (bought değil, buy).'},{id:"syn-13",cefr_level:"A2",category:"questions_negatives",category_name_tr:"Soru & Olumsuz Yapılar",turkish_prompt:"Müdür bugün toplantıda raporu dikkatle incelemedi.",tokens:["The manager","did not examine","the report","carefully","in the meeting today"],correct_sentence:"The manager did not examine the report carefully in the meeting today.",acceptable_alternatives:[],grammar_breakdown:[{token:"The manager",role:"Özne (Subject)",tag:"S"},{token:"did not examine",role:"Olumsuz Fiil (Neg Verb)",tag:"V"},{token:"the report",role:"Nesne (Object)",tag:"O"},{token:"carefully",role:"Tarz Zarfı (Manner)",tag:"M"},{token:"in the meeting today",role:"Yer ve Zaman (Place + Time)",tag:"P+T"}],explanation_tr:"Olumsuz cümlelerde: Özne + did not + Fiil (yalın) + Nesne + Zarf (Manner-Place-Time)."},{id:"syn-14",cefr_level:"A2",category:"indirect_questions",category_name_tr:"Dolaylı Sorular (Indirect)",turkish_prompt:"Bana tren istasyonunun nerede olduğunu söyleyebilir misiniz?",tokens:["Could you tell me","where","the train station","is"],correct_sentence:"Could you tell me where the train station is?",acceptable_alternatives:[],grammar_breakdown:[{token:"Could you tell me",role:"Nezaket Kalıbı (Polite Intro Clause)",tag:"Intro"},{token:"where",role:"Soru Bağlacı (Wh- Connector)",tag:"Conj"},{token:"the train station",role:"Yan Cümlenin Öznesi (Subject)",tag:"S"},{token:"is",role:"Yan Cümlenin Fiili (Verb - Sonda!)",tag:"V"}],explanation_tr:'EN ÇOK YAPILAN HATA: "Where is the station?" doğrudan sorudur. Ancak bir cümlenin içine girdiğinde ("Could you tell me...") soru sırası kaybolur ve düz cümle sırasına (özne + fiil) döner: "...where the station is".'},{id:"syn-15",cefr_level:"B1",category:"indirect_questions",category_name_tr:"Dolaylı Sorular (Indirect)",turkish_prompt:"Toplantının ne zaman başlayacağını merak ediyorum.",tokens:["I wonder","what time","the meeting","will start"],correct_sentence:"I wonder what time the meeting will start.",acceptable_alternatives:[],grammar_breakdown:[{token:"I wonder",role:"Ana Cümle (Main Clause)",tag:"Main"},{token:"what time",role:"Soru İfadesi (Wh- connector)",tag:"Conj"},{token:"the meeting",role:"Özne (Subject)",tag:"S"},{token:"will start",role:"Fiil (Verb)",tag:"V"}],explanation_tr:'Dolaylı sorularda "will" öznenin önüne geçmez. Doğru sıralama: "what time + the meeting (özne) + will start (fiil)".'},{id:"syn-16",cefr_level:"B1",category:"indirect_questions",category_name_tr:"Dolaylı Sorular (Indirect)",turkish_prompt:"Onun bu sabah neden geç kaldığını biliyor musun?",tokens:["Do you know","why","he was","late","this morning"],correct_sentence:"Do you know why he was late this morning?",acceptable_alternatives:[],grammar_breakdown:[{token:"Do you know",role:"Giriş Sorusu (Intro)",tag:"Intro"},{token:"why",role:"Soru Kelimesi (Connector)",tag:"Conj"},{token:"he was",role:"Özne + Yardımcı Fiil (Subject + Verb)",tag:"S+V"},{token:"late",role:"Sıfat (Complement)",tag:"Adj"},{token:"this morning",role:"Zaman (Time)",tag:"T"}],explanation_tr:'"Do you know why was he late?" YANLIŞTIR. Dolaylı sorularda fiil öznenin arkasında kalır: "why he was late".'},{id:"syn-17",cefr_level:"B1",category:"indirect_questions",category_name_tr:"Dolaylı Sorular (Indirect)",turkish_prompt:"Bu projenin ne kadara mal olacağını bilmek istiyorum.",tokens:["I would like to know","how much","this project","will cost"],correct_sentence:"I would like to know how much this project will cost.",acceptable_alternatives:[],grammar_breakdown:[{token:"I would like to know",role:"Ana Cümle (Polite Request)",tag:"Intro"},{token:"how much",role:"Miktar İfadesi",tag:"Conj"},{token:"this project",role:"Yan Cümle Öznesi",tag:"S"},{token:"will cost",role:"Yan Cümle Fiili",tag:"V"}],explanation_tr:'Doğrudan soru "How much will this project cost?" iken, dolaylı anlatımda "...how much this project will cost" şekline dönüşür.'},{id:"syn-18",cefr_level:"B1",category:"connectors_clauses",category_name_tr:"Yan Cümleler & Bağlaçlar",turkish_prompt:"Yarışmayı kazanan öğrenci her gün çok sıkı çalıştı.",tokens:["The student","who won the competition","studied","very hard","every day"],correct_sentence:"The student who won the competition studied very hard every day.",acceptable_alternatives:[],grammar_breakdown:[{token:"The student",role:"Ana Cümle Öznesi (Subject)",tag:"S"},{token:"who won the competition",role:"Sıfat Cümlesi (Relative Clause - Özneyi niteler)",tag:"Rel"},{token:"studied",role:"Ana Fiil (Main Verb)",tag:"V"},{token:"very hard",role:"Durum Zarfı (Manner)",tag:"M"},{token:"every day",role:"Zaman Zarfı (Time)",tag:"T"}],explanation_tr:"Sıfat cümlecikleri (relative clauses) niteledikleri ismin (The student) hemen ardına yerleştirilir. Ana cümlenin fiili (studied) ise bu tamlamadan sonra gelir."},{id:"syn-19",cefr_level:"B1",category:"connectors_clauses",category_name_tr:"Yan Cümleler & Bağlaçlar",turkish_prompt:"Şiddetli yağmur yağmasına rağmen konserin tadını çıkardık.",tokens:["Although","it was raining heavily","we enjoyed","the concert"],correct_sentence:"Although it was raining heavily, we enjoyed the concert.",acceptable_alternatives:["We enjoyed the concert although it was raining heavily."],grammar_breakdown:[{token:"Although",role:"Zıtlık Bağlacı (Concession Conjunction)",tag:"Conj"},{token:"it was raining heavily",role:"Bağımlı Yan Cümle (Dependent Clause)",tag:"Clause1"},{token:"we enjoyed",role:"Ana Cümle (Subject + Verb)",tag:"S+V"},{token:"the concert",role:"Nesne (Object)",tag:"O"}],explanation_tr:'"Although" bağlacı tam bir cümle alır (özne + fiil). Cümle başında kullanılırsa iki cümle arasına virgül konur.'},{id:"syn-20",cefr_level:"B1",category:"connectors_clauses",category_name_tr:"Yan Cümleler & Bağlaçlar",turkish_prompt:"Yeni bir dizüstü bilgisayar alabilsin diye para biriktirdi.",tokens:["She saved money","so that","she could buy","a new laptop"],correct_sentence:"She saved money so that she could buy a new laptop.",acceptable_alternatives:[],grammar_breakdown:[{token:"She saved money",role:"Ana Cümle (Main Clause)",tag:"Main"},{token:"so that",role:"Amaç Bağlacı (-sın diye / In order that)",tag:"Conj"},{token:"she could buy",role:"Modal Cümlesi (Subject + Modal + Verb)",tag:"Sub+Mod"},{token:"a new laptop",role:"Nesne (Object)",tag:"O"}],explanation_tr:'"so that" amaç bildirir ve ardından genellikle "can/could/may/might" kipleriyle tam cümle gelir.'},{id:"syn-21",cefr_level:"B1",category:"connectors_clauses",category_name_tr:"Yan Cümleler & Bağlaçlar",turkish_prompt:"Otele varır varmaz seni arayacağım.",tokens:["I will call you","as soon as","I arrive","at the hotel"],correct_sentence:"I will call you as soon as I arrive at the hotel.",acceptable_alternatives:["As soon as I arrive at the hotel I will call you."],grammar_breakdown:[{token:"I will call you",role:"Ana Cümle (Gelecek Zaman)",tag:"Main"},{token:"as soon as",role:"Zaman Bağlacı (-er -mez)",tag:"Conj"},{token:"I arrive",role:"Geniş Zaman Yan Cümle (Present Simple)",tag:"S+V"},{token:"at the hotel",role:"Yer Tamlayıcısı (Place)",tag:"P"}],explanation_tr:'ÖNEMLİ ZAMAN KURALI: "as soon as", "when", "after" gibi zaman bağlaçlarının bulunduğu yan cümlede "will" kullanılmaz; gelecek anlamı için Geniş Zaman (arrive) kullanılır.'},{id:"syn-22",cefr_level:"B2",category:"inversion_emphasis",category_name_tr:"Devrik Cümleler (Inversion)",turkish_prompt:"Kariyerim boyunca böylesine ilham verici bir konuşmayı nadiren duymuşumdur.",tokens:["Seldom","have I heard","such an inspiring speech","in my career"],correct_sentence:"Seldom have I heard such an inspiring speech in my career.",acceptable_alternatives:[],grammar_breakdown:[{token:"Seldom",role:"Kısıtlayıcı Olumsuz Zarf (Negative Adverbial)",tag:"NegAdv"},{token:"have I heard",role:"Devrik Fiil + Özne (Inverted Aux + Subject)",tag:"Inv"},{token:"such an inspiring speech",role:"Vurgulu Nesne (Emphatic Object)",tag:"O"},{token:"in my career",role:"Zaman / Kapsam Tamlayıcısı",tag:"Scope"}],explanation_tr:'İNGİLİZCE İLERİ DÜZEY DEVRİK YAPI: "Seldom, Rarely, Never, Scarcely" gibi olumsuz/kısıtlayıcı zarflar cümle başına geldiğinde, yardımcı fiil öznenin önüne geçer: "Seldom have I heard..." (I have seldom heard yerine).'},{id:"syn-23",cefr_level:"B2",category:"inversion_emphasis",category_name_tr:"Devrik Cümleler (Inversion)",turkish_prompt:"Genç sporcularda böylesi bir adanmışlığı çok nadir görürüz.",tokens:["Rarely","do we see","such dedication","in young athletes"],correct_sentence:"Rarely do we see such dedication in young athletes.",acceptable_alternatives:[],grammar_breakdown:[{token:"Rarely",role:"Kısıtlayıcı Zarf",tag:"NegAdv"},{token:"do we see",role:"Devrik Yardımcı Fiil + Özne + Fiil",tag:"Inv"},{token:"such dedication",role:"Nesne",tag:"O"},{token:"in young athletes",role:"Yer / Nitelik",tag:"Prep"}],explanation_tr:'Geniş zamanda inversion yapılırken "do/does" kullanılır: "Rarely do we see...".'},{id:"syn-24",cefr_level:"B2",category:"inversion_emphasis",category_name_tr:"Devrik Cümleler (Inversion)",turkish_prompt:"Hiçbir koşulda bu kapıyı açmamalısınız.",tokens:["Under no circumstances","should you open","this door"],correct_sentence:"Under no circumstances should you open this door.",acceptable_alternatives:[],grammar_breakdown:[{token:"Under no circumstances",role:"Güçlü Olumsuz Edat Öbeği",tag:"NegPhrase"},{token:"should you open",role:"Devrik Modal + Özne + Fiil",tag:"Inv"},{token:"this door",role:"Nesne",tag:"O"}],explanation_tr:'"Under no circumstances" gibi mutlak yasaklama veya kısıtlama ifadeleri cümle başında olduğunda modal yardımcı fiil (should) öznenin (you) önüne alınır.'},{id:"syn-25",cefr_level:"B2",category:"inversion_emphasis",category_name_tr:"Devrik Cümleler (Inversion)",turkish_prompt:"Sadece sınavı geçmekle kalmadı, aynı zamanda en yüksek puanı aldı.",tokens:["Not only","did he pass the exam","but he also achieved","the highest score"],correct_sentence:"Not only did he pass the exam, but he also achieved the highest score.",acceptable_alternatives:[],grammar_breakdown:[{token:"Not only",role:"Vurgu Bağlacı (Cümle Başı)",tag:"Emph"},{token:"did he pass the exam",role:"Devrik Cümle (did + he + pass)",tag:"Inv"},{token:"but he also achieved",role:"Devam Cümlesi",tag:"Parallel"},{token:"the highest score",role:"Nesne",tag:"O"}],explanation_tr:'"Not only" cümle başında yer aldığında ilk cümle mutlaka devrik kurulur ("did he pass"). İkinci cümle ise düz sırada devam eder ("but he also achieved...").'},{id:"syn-26",cefr_level:"B2",category:"inversion_emphasis",category_name_tr:"Devrik Cümleler (Inversion)",turkish_prompt:"Eve henüz yeni varmıştık ki elektrikler kesildi.",tokens:["Hardly","had we arrived home","when","the power went out"],correct_sentence:"Hardly had we arrived home when the power went out.",acceptable_alternatives:[],grammar_breakdown:[{token:"Hardly",role:"Zaman Kısıtlayıcı Zarf (Hardly... when)",tag:"NegAdv"},{token:"had we arrived home",role:"Devrik Past Perfect (had + we + V3)",tag:"Inv"},{token:"when",role:"Zaman Bağlayıcısı",tag:"Conj"},{token:"the power went out",role:"İkinci Olay (Past Simple)",tag:"Event2"}],explanation_tr:'"Hardly had + Özne + V3 ... when + Past Simple" kalıbı, bir eylemin hemen ardından diğerinin gerçekleştiğini vurgulamak için kullanılan prestijli bir C1/B2 akademik yapıdır.'}];class K{constructor(){this.currentUser=null,this.initAuth()}initAuth(){try{const e=localStorage.getItem("linguaforge_active_user"),t=this.getAccounts();if(e&&t.length>0){const i=t.find(a=>a.username.toLowerCase()===e.toLowerCase());i&&(this.currentUser=i)}}catch(e){console.warn("Error initializing auth:",e)}}getAccounts(){try{const e=localStorage.getItem("linguaforge_users");return e?JSON.parse(e):[]}catch{return[]}}saveAccounts(e){try{localStorage.setItem("linguaforge_users",JSON.stringify(e))}catch{}}getCurrentUser(){return this.currentUser}async hashPassword(e){if(!e)return"";try{if(typeof window<"u"&&window.crypto&&window.crypto.subtle){const a=new TextEncoder().encode(e+"_linguaforge_salt"),n=await window.crypto.subtle.digest("SHA-256",a);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}}catch{}let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i),t|=0;return"h_"+Math.abs(t)}async login(e,t){const i=(e||"").trim().toLowerCase(),a=(t||"").trim(),n=this.getAccounts(),s=n.find(o=>o.username.toLowerCase()===i);if(!s)throw new Error("Kullanıcı bulunamadı. Lütfen kullanıcı adınızı kontrol edin veya yeni hesap açın.");const r=await this.hashPassword(a);if(s.password_hash){if(s.password_hash!==r)throw new Error("Şifre hatalı! Lütfen şifrenizi tekrar deneyin.")}else if(s.password){if(s.password!==a)throw new Error("Şifre hatalı! Lütfen şifrenizi tekrar deneyin.");s.password_hash=r,delete s.password,this.saveAccounts(n)}return this.currentUser=s,localStorage.setItem("linguaforge_active_user",s.username),this.ensureUserStorage(s.username),s}async register(e,t,i){const a=(e||"").trim().toLowerCase(),n=(t||"").trim(),s=(i||"").trim()||e;if(!a)throw new Error("Kullanıcı adı boş bırakılamaz.");if(a.length<2)throw new Error("Kullanıcı adı en az 2 karakter olmalıdır.");if(!n)throw new Error("Şifre boş bırakılamaz.");const r=this.getAccounts();if(r.some(d=>d.username.toLowerCase()===a))throw new Error("Bu kullanıcı adı zaten alınmış. Farklı bir kullanıcı adı deneyin veya giriş yapın.");const o=await this.hashPassword(n),l={id:"u_"+Date.now(),username:a,displayName:s,password_hash:o,createdAt:new Date().toISOString(),cefr_level:"A1"};return r.push(l),this.saveAccounts(r),this.currentUser=l,localStorage.setItem("linguaforge_active_user",l.username),await this.initZeroUserStorage(a),l}async loginOrRegisterGuest(){const e="misafir",t=this.getAccounts();let i=t.find(a=>a.username===e);if(!i){const a=await this.hashPassword("123");i={id:"guest_"+Date.now(),username:e,displayName:"Misafir Öğrenci",password_hash:a,createdAt:new Date().toISOString(),cefr_level:"A1"},t.push(i),this.saveAccounts(t),await this.initZeroUserStorage(e)}return this.currentUser=i,localStorage.setItem("linguaforge_active_user",i.username),this.ensureUserStorage(e),i}logout(){this.currentUser=null,localStorage.removeItem("linguaforge_active_user")}getUserStorageKey(e){return`linguaforge_u_${this.currentUser?this.currentUser.username:"guest"}_${e}`}getUserData(e){try{const t=localStorage.getItem(this.getUserStorageKey(e));return t?JSON.parse(t):null}catch{return null}}setUserData(e,t){try{localStorage.setItem(this.getUserStorageKey(e),JSON.stringify(t))}catch{}}async initZeroUserStorage(e){await D();const t=`linguaforge_u_${e}_`,i={xp:0,level:1,current_streak:1,longest_streak:1,total_study_minutes:0,total_words_learned:0,total_grammar_mastered:0,total_errors_resolved:0,last_study_date:new Date().toISOString().slice(0,10)},a={grammar:{level:"A1",sublevel:"-",score:0},vocabulary:{level:"A1",sublevel:"-",score:0},reading:{level:"A1",sublevel:"-",score:0},listening:{level:"A1",sublevel:"-",score:0},writing:{level:"A1",sublevel:"-",score:0},speaking:{level:"A1",sublevel:"-",score:0},pronunciation:{level:"A1",sublevel:"-",score:0},sentence_formation:{level:"A1",sublevel:"-",score:0},comprehension:{level:"A1",sublevel:"-",score:0},communication:{level:"A1",sublevel:"-",score:0}},n=[],s=(z.vocabulary_items||[]).map((r,o)=>{const l=(typeof r.examples=="string"?JSON.parse(r.examples||"[]"):r.examples)||r.example_sentences||[];return{...r,id:r.id||o+1,examples:l,example_sentences:l,synonyms:typeof r.synonyms=="string"?JSON.parse(r.synonyms||"[]"):r.synonyms||[],antonyms:typeof r.antonyms=="string"?JSON.parse(r.antonyms||"[]"):r.antonyms||[],collocations:typeof r.collocations=="string"?JSON.parse(r.collocations||"[]"):r.collocations||[],interval:0,ease_factor:2.5,repetitions:0,due:r.cefr_level==="A1"&&o<25}});localStorage.setItem(t+"stats",JSON.stringify(i)),localStorage.setItem(t+"skills",JSON.stringify(a)),localStorage.setItem(t+"errors",JSON.stringify(n)),localStorage.setItem(t+"srs_items",JSON.stringify(s)),localStorage.removeItem(t+"latest_assessment"),localStorage.setItem(t+"completed_tasks",JSON.stringify([])),localStorage.setItem(t+"daily_tasks_date",new Date().toISOString().slice(0,10))}async syncVocabularyArchive(e){await D();const i=`linguaforge_u_${e||(this.currentUser?this.currentUser.username:"misafir")}_`;try{const a=localStorage.getItem(i+"srs_items");let n=a?JSON.parse(a):[];const s=new Set(n.map(l=>(l.word||"").toLowerCase())),r=[];(z.vocabulary_items||[]).forEach((l,d)=>{if(!s.has((l.word||"").toLowerCase())){const u=(typeof l.examples=="string"?JSON.parse(l.examples||"[]"):l.examples)||l.example_sentences||[];r.push({...l,id:l.id||1e3+d,examples:u,example_sentences:u,synonyms:typeof l.synonyms=="string"?JSON.parse(l.synonyms||"[]"):l.synonyms||[],antonyms:typeof l.antonyms=="string"?JSON.parse(l.antonyms||"[]"):l.antonyms||[],collocations:typeof l.collocations=="string"?JSON.parse(l.collocations||"[]"):l.collocations||[],interval:0,ease_factor:2.5,repetitions:0,due:n.length<5||l.cefr_level==="A1"&&n.filter(y=>y.due).length<20})}}),r.length>0&&(n=n.concat(r),localStorage.setItem(i+"srs_items",JSON.stringify(n)))}catch(a){console.warn("Error syncing vocabulary archive:",a)}}ensureUserStorage(e){const t=`linguaforge_u_${e}_`;if(!localStorage.getItem(t+"stats")||!localStorage.getItem(t+"skills")){this.initZeroUserStorage(e);return}this.syncVocabularyArchive(e)}recordDailyTaskProgress(e){try{const t=new Date().toISOString().slice(0,10),i=this.getUserData("daily_tasks_date");let a=this.getUserData("completed_tasks")||[];if(i!==t&&(a=[],this.setUserData("daily_tasks_date",t)),!a.includes(e)){a.push(e),this.setUserData("completed_tasks",a);const n=this.getUserData("stats")||{xp:0};n.xp=(n.xp||0)+20;let s=!1;return a.length>=4&&!this.getUserData("daily_bonus_claimed_"+t)&&(n.xp+=50,this.setUserData("daily_bonus_claimed_"+t,!0),s=!0),this.setUserData("stats",n),{success:!0,taskId:e,completedTasks:a,xpGained:s?70:20,bonusAwarded:s}}return{success:!0,taskId:e,completedTasks:a,xpGained:0}}catch(t){return console.warn("Error recording daily task progress:",t),{success:!1}}}async completeDailyTask(e,t=!0){const i=new Date().toISOString().slice(0,10),a=this.getUserData("daily_tasks_date");let n=this.getUserData("completed_tasks")||[];a!==i&&(n=[],this.setUserData("daily_tasks_date",i));const s=this.getUserData("stats")||{xp:0};return t?n.includes(e)||(n.push(e),s.xp=(s.xp||0)+20,n.length>=4&&!this.getUserData("daily_bonus_claimed_"+i)&&(s.xp+=50,this.setUserData("daily_bonus_claimed_"+i,!0))):n.includes(e)&&(n=n.filter(r=>r!==e),s.xp=Math.max(0,(s.xp||0)-20)),this.setUserData("completed_tasks",n),this.setUserData("stats",s),{success:!0,completedTasks:n,stats:s}}async getDashboard(){if(!this.currentUser)throw new Error("AUTH_REQUIRED");this.syncVocabularyArchive();const e=this.getUserData("stats")||{xp:0,level:1,current_streak:1,longest_streak:1,total_study_minutes:0,total_words_learned:0,total_grammar_mastered:0,total_errors_resolved:0},t=this.getUserData("skills")||{grammar:{level:"A1",sublevel:"",score:0},vocabulary:{level:"A1",sublevel:"",score:0},reading:{level:"A1",sublevel:"",score:0},listening:{level:"A1",sublevel:"",score:0},writing:{level:"A1",sublevel:"",score:0},speaking:{level:"A1",sublevel:"",score:0},pronunciation:{level:"A1",sublevel:"",score:0},sentence_formation:{level:"A1",sublevel:"",score:0},comprehension:{level:"A1",sublevel:"",score:0},communication:{level:"A1",sublevel:"",score:0}},i=this.getUserData("errors")||[],a=this.getUserData("srs_items")||[],n=a.filter(d=>d.due).length,s=this.getUserData("latest_assessment")||{overall_cefr:"A1",results:{overallCEFR:"A1"}},r=new Date().toISOString().slice(0,10),o=this.getUserData("daily_tasks_date");let l=this.getUserData("completed_tasks")||[];return o!==r&&(l=[],this.setUserData("completed_tasks",l),this.setUserData("daily_tasks_date",r)),{user:{username:this.currentUser.username,displayName:this.currentUser.displayName||this.currentUser.username,onboardingComplete:!0},stats:e,skills:t,dailyTasks:{date:r,tasks:[{id:"task-vocab",skill:"vocabulary",description:"Kelime Kartlarından en az 5 tanesini tekrar et veya yeni kelime öğren",targetView:"vocabulary"},{id:"task-grammar",skill:"grammar",description:"Gramer Akademisinden 1 konuyu ve interaktif alıştırmasını tamamla",targetView:"grammar"},{id:"task-reading",skill:"reading",description:"1 okuma metnini incele ve anlama sorularını yanıtla",targetView:"reading"},{id:"task-speaking",skill:"speaking",description:"1 konuşma senaryosunda sesli pratik yap veya diyalog kur",targetView:"speaking"}],completed_tasks:l},recentErrors:i.filter(d=>!d.resolved),reviewStats:{dueToday:n,totalItems:a.length},weekStudy:[{date:"2026-09-21",total_minutes:0},{date:"2026-09-22",total_minutes:0},{date:"2026-09-23",total_minutes:0},{date:"2026-09-24",total_minutes:0},{date:"2026-09-25",total_minutes:0},{date:"2026-09-26",total_minutes:0},{date:"2026-09-27",total_minutes:e.total_study_minutes||0}],latestAssessment:s}}async startAssessment(){const e=Date.now();return this.currentAssessment={id:e,answers:[],correctCount:0,totalCount:0,skillsEvaluated:{}},{assessmentId:e,skills:["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],message:"Seviye belirleme sınavı başlatıldı."}}async skipAssessmentToA1(){const e={overallCEFR:"A1",totalQuestions:0,totalCorrect:0,skills:{grammar:{level:"A1",sublevel:"",score:10},vocabulary:{level:"A1",sublevel:"",score:10},reading:{level:"A1",sublevel:"",score:10},listening:{level:"A1",sublevel:"",score:10},writing:{level:"A1",sublevel:"",score:10},speaking:{level:"A1",sublevel:"",score:10},pronunciation:{level:"A1",sublevel:"",score:10},sentence_formation:{level:"A1",sublevel:"",score:10},comprehension:{level:"A1",sublevel:"",score:10},communication:{level:"A1",sublevel:"",score:10}}};return this.setUserData("latest_assessment",e),e}async getAssessmentQuestions(e,t){const a=(z.assessment_question_bank||[]).filter(o=>o.skill===t),n=["A1","A2","B1","B2",Math.random()>.5?"C1":"C2"],s=[];for(const o of n){const l=a.filter(d=>d.cefr_level===o);if(l.length>0){const d=l[Math.floor(Math.random()*l.length)];s.push(d)}}if(s.length<5){for(const o of a)if(!s.some(l=>l.id===o.id)&&(s.push(o),s.length>=5))break}const r=s.map(o=>({id:o.id,type:o.question_type,question:o.question,options:typeof o.options=="string"?JSON.parse(o.options):o.options,cefrLevel:o.cefr_level,topic:o.topic}));return{skill:t,targetLevel:"A1-C2",questions:r}}async submitAssessmentAnswer(e,t,i){const a=z.assessment_question_bank||[],n=a.find(l=>l.id===t)||a[0],s=(i||"").toString().trim().toLowerCase().replace(/^["']|["']$/g,""),r=(n.correct_answer||"").toString().trim().toLowerCase().replace(/^["']|["']$/g,""),o=s===r;if(this.currentAssessment){this.currentAssessment.totalCount=(this.currentAssessment.totalCount||0)+1,o&&(this.currentAssessment.correctCount=(this.currentAssessment.correctCount||0)+1),this.currentAssessment.skillsEvaluated[n.skill]||(this.currentAssessment.skillsEvaluated[n.skill]={correct:0,total:0,byLevel:{}});const l=this.currentAssessment.skillsEvaluated[n.skill];l.total+=1,o&&(l.correct+=1),l.byLevel[n.cefr_level]||(l.byLevel[n.cefr_level]={correct:0,total:0}),l.byLevel[n.cefr_level].total+=1,o&&(l.byLevel[n.cefr_level].correct+=1)}if(!o){const l=this.getUserData("errors")||[];l.unshift({id:Date.now(),skill:n.skill,error_text:i,correction:n.correct_answer,explanation:n.explanation_tr||n.explanation||"Seviye belirleme sınavında yapılan hata.",occurrence_count:1,resolved:0}),this.setUserData("errors",l)}return{questionId:t,isCorrect:o,score:o?1:0,correctAnswer:n.correct_answer,explanation:n.explanation,explanationTr:n.explanation_tr||n.explanation,skill:n.skill,cefrLevel:n.cefr_level,topic:n.topic}}async completeAssessment(e){const t=this.currentAssessment||{correctCount:0,totalCount:1,skillsEvaluated:{}},i=Math.max(t.totalCount||1,1),a=t.correctCount||0,n=a/i;let s="A1";n>=.9?s="C2":n>=.78?s="C1":n>=.6?s="B2":n>=.42?s="B1":n>=.22?s="A2":s="A1";const r=["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],o={grammar:"Dilbilgisi",vocabulary:"Kelime Haznesi",reading:"Okuma & Anlama",listening:"Dinleme & Algılama",writing:"Yazma & Bağlaçlar",speaking:"Konuşma & Akıcılık",pronunciation:"Telaffuz & Fonetik",sentence_formation:"Cümle Kurma & Sentaks",comprehension:"Kavrama Hızı",communication:"Doğal İletişim"},l={},d=[];r.forEach(k=>{var w,_,E,M,O;const b=t.skillsEvaluated[k]||{correct:0,total:1,byLevel:{}},S=b.total>0?b.correct/b.total:0,I=b.byLevel||{};let C="A1",T="";S>=.9||((w=I.C2)==null?void 0:w.correct)>0&&S>=.8?C="C2":S>=.75||((_=I.C1)==null?void 0:_.correct)>0&&S>=.65?(C="C1",S>=.85&&(T="+")):S>=.55||((E=I.B2)==null?void 0:E.correct)>0&&S>=.5?(C="B2",S>=.7&&(T="+")):S>=.38||((M=I.B1)==null?void 0:M.correct)>0&&S>=.3?(C="B1",S>=.5&&(T="+")):S>=.2||((O=I.A2)==null?void 0:O.correct)>0?(C="A2",S>=.3&&(T="+")):C="A1";const g=Math.round(S*100);l[k]={level:C,sublevel:T,score:g,correct:b.correct,total:b.total,accuracy:g},d.push({skill:k,nameTr:o[k]||k,level:C,accuracy:g})}),d.sort((k,b)=>k.accuracy-b.accuracy);const u=d.slice(0,2).map(k=>({skill:k.skill,level:k.level,detail:`${k.nameTr} becerisinde eksiklerinizi pekiştirmek için odaklanmış alıştırmalar önerilir (%${k.accuracy} başarı).`})),y=d.slice(-2).reverse().map(k=>({skill:k.skill,level:k.level,detail:`${k.nameTr} becerisinde güçlü bir performans gösterdiniz (%${k.accuracy} başarı).`})),f={overallCEFR:s,skills:l,weakAreas:u,strongAreas:y,totalQuestions:i,totalCorrect:a};this.setUserData("latest_assessment",f);const h=this.getUserData("skills")||{};for(const[k,b]of Object.entries(l))h[k]={level:b.level,sublevel:b.sublevel,score:b.score};this.setUserData("skills",h);const v=this.getUserData("stats");return v&&(v.xp=(v.xp||0)+50,this.setUserData("stats",v)),f}async getGrammarTopics(){return(z.grammar_topics||[]).map(e=>({...e,examples:typeof e.examples=="string"?JSON.parse(e.examples):e.examples,rules:typeof e.rules=="string"?JSON.parse(e.rules):e.rules,common_mistakes:typeof e.common_mistakes=="string"?JSON.parse(e.common_mistakes):e.common_mistakes,prerequisite_topics:typeof e.prerequisite_topics=="string"?JSON.parse(e.prerequisite_topics||"[]"):e.prerequisite_topics}))}async getGrammarTopic(e){const t=await this.getGrammarTopics(),i=t.find(n=>n.slug===e)||t[0],a=(z.grammar_exercises||[]).filter(n=>n.topic_id===i.id).map(n=>({...n,prompt:n.question||n.prompt||"",question:n.question||n.prompt||"",options:typeof n.options=="string"?JSON.parse(n.options):n.options}));return{topic:i,exercises:a}}async submitGrammarExercise(e,t){const i=z.grammar_exercises||[],a=i.find(u=>u.id===e)||i[0],n=u=>(u||"").trim().toLowerCase().replace(/[.,!?;:"'’]/g,"").replace(/\.{2,}/g," ").replace(/\s+/g," ").replace(/\bdon't\b|\bdont\b/g,"do not").replace(/\bdoesn't\b|\bdoesnt\b/g,"does not").replace(/\bdidn't\b|\bdidnt\b/g,"did not").replace(/\bcan't\b|\bcant\b/g,"cannot").replace(/\bisn't\b|\bisnt\b/g,"is not").replace(/\baren't\b|\barent\b/g,"are not").replace(/\bwasn't\b|\bwasnt\b/g,"was not").replace(/\bweren't\b|\bwerent\b/g,"were not").replace(/\bwon't\b|\bwont\b/g,"will not").replace(/\bhasn't\b|\bhasnt\b/g,"has not").replace(/\bhaven't\b|\bhavent\b/g,"have not").trim(),s=n(t),r=n(a.correct_answer),l=a.correct_answer==="[free response]"||a.exercise_type==="sentence_creation"?s.length>=3:s===r,d=this.getUserData("stats")||{xp:0};if(d.xp=(d.xp||0)+(l?15:5),l&&(d.total_grammar_mastered=(d.total_grammar_mastered||0)+1),this.setUserData("stats",d),this.recordDailyTaskProgress("task-grammar"),!l){const u=this.getUserData("errors")||[];u.unshift({id:Date.now(),skill:"grammar",error_text:t,correction:a.correct_answer,explanation:a.explanation_tr||a.explanation||"Gramer kural hatası.",occurrence_count:1,resolved:0}),this.setUserData("errors",u)}return{isCorrect:l,correctAnswer:a.correct_answer,feedback:l?"Tebrikler! Doğru cevap (+15 XP).":`Yanlış. Doğru biçim: ${a.correct_answer}`,explanation:a.explanation,explanationTr:a.explanation_tr||a.explanation}}async getVocabularyItems(){await this.syncVocabularyArchive();const e=(this.getUserData("srs_items")||[]).map(t=>{const i=(typeof t.examples=="string"?JSON.parse(t.examples):t.examples)||t.example_sentences||[],a=(typeof t.collocations=="string"?JSON.parse(t.collocations):t.collocations)||[];return{...t,examples:i,example_sentences:i,collocations:a}});return{items:e,total:e.length}}async getReviewQueue(e="all"){await this.syncVocabularyArchive();const t=this.getUserData("srs_items")||[],i={all:t.filter(r=>r.due).length,A1:t.filter(r=>r.due&&(r.cefr_level||"").toUpperCase()==="A1").length,A2:t.filter(r=>r.due&&(r.cefr_level||"").toUpperCase()==="A2").length,B1:t.filter(r=>r.due&&(r.cefr_level||"").toUpperCase()==="B1").length,B2:t.filter(r=>r.due&&(r.cefr_level||"").toUpperCase()==="B2").length,C1:t.filter(r=>r.due&&(r.cefr_level||"").toUpperCase()==="C1").length},a={all:t.length,A1:t.filter(r=>(r.cefr_level||"").toUpperCase()==="A1").length,A2:t.filter(r=>(r.cefr_level||"").toUpperCase()==="A2").length,B1:t.filter(r=>(r.cefr_level||"").toUpperCase()==="B1").length,B2:t.filter(r=>(r.cefr_level||"").toUpperCase()==="B2").length,C1:t.filter(r=>(r.cefr_level||"").toUpperCase()==="C1").length};let n=t.filter(r=>r.due);e&&e!=="all"&&(n=n.filter(r=>(r.cefr_level||"").toUpperCase()===e.toUpperCase()));const s=n.map(r=>{const o=(typeof r.examples=="string"?JSON.parse(r.examples):r.examples)||r.example_sentences||[],l=(typeof r.collocations=="string"?JSON.parse(r.collocations):r.collocations)||[];return{...r,examples:o,example_sentences:o,collocations:l}});return{items:s,dueToday:s.length,dueByLevel:i,totalByLevel:a,currentLevel:e||"all"}}async submitReview(e,t){const i=this.getUserData("srs_items")||[],a=i.findIndex(r=>r.id===e);let n=Number(t);n>3&&(n=n>=4?n===5?3:2:1),a!==-1&&(n>=2?(i[a].due=!1,i[a].repetitions=(i[a].repetitions||0)+1,i[a].interval=n===3?i[a].interval?i[a].interval*2:4:2):i[a].due=!0,this.setUserData("srs_items",i));const s=this.getUserData("stats")||{xp:0};return s.xp=(s.xp||0)+(n>=2?10:3),s.total_words_learned=(s.total_words_learned||0)+(n>=2?1:0),this.setUserData("stats",s),this.recordDailyTaskProgress("task-vocab"),{success:!0}}async drawFreshWords(e="all",t=15){await this.syncVocabularyArchive();const i=this.getUserData("srs_items")||[];let a=i.filter(o=>(e==="all"||o.cefr_level&&o.cefr_level.toUpperCase()===e.toUpperCase())&&!o.due);a.sort((o,l)=>(o.repetitions||0)-(l.repetitions||0));const n=a.slice(0,Math.max(t*3,30));for(let o=n.length-1;o>0;o--){const l=Math.floor(Math.random()*(o+1));[n[o],n[l]]=[n[l],n[o]]}const s=n.slice(0,t),r=new Set(s.map(o=>o.id));return i.forEach(o=>{r.has(o.id)&&(o.due=!0)}),this.setUserData("srs_items",i),{success:!0,activatedCount:s.length,level:e}}async resetLevelQueue(e="all"){this.syncVocabularyArchive();const t=this.getUserData("srs_items")||[];let i=0;return t.forEach(a=>{(e==="all"||a.cefr_level&&a.cefr_level.toUpperCase()===e.toUpperCase())&&(a.due=!0,a.repetitions=0,a.interval=0,i++)}),this.setUserData("srs_items",t),{success:!0,resetCount:i,level:e}}async loadWordPack(e="A1"){return await this.drawFreshWords(e,25)}async fetchOnlineWord(e){var u,y,f;const t=(e||"").trim().toLowerCase().replace(/[^a-z-]/g,"");if(!t)throw new Error("Lütfen geçerli bir İngilizce kelime girin.");let i=null;try{const h=new AbortController,v=setTimeout(()=>h.abort(),6e3),k=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(t)}`,{signal:h.signal});if(clearTimeout(v),k.ok){const b=await k.json();Array.isArray(b)&&b.length>0&&(i=b[0])}}catch(h){console.warn("Free Dictionary API call failed or timed out:",h)}let a="";try{const h=new AbortController,v=setTimeout(()=>h.abort(),4e3),k=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURIComponent(t)}`,b=await fetch(k,{signal:h.signal});if(clearTimeout(v),b.ok){const S=await b.json();a=((y=(u=S==null?void 0:S[0])==null?void 0:u[0])==null?void 0:y[0])||""}}catch{}let n=(i==null?void 0:i.phonetic)||"",s="";if(i!=null&&i.phonetics&&Array.isArray(i.phonetics))for(const h of i.phonetics)!n&&h.text&&(n=h.text),!s&&h.audio&&(s=h.audio);let r="kelime",o="",l="";const d=[];return i!=null&&i.meanings&&Array.isArray(i.meanings)&&(r=((f=i.meanings[0])==null?void 0:f.partOfSpeech)||"kelime",i.meanings.forEach(h=>{var k;const v=(k=h.definitions)==null?void 0:k[0];v&&(o||(o=v.definition||""),!l&&v.example&&(l=v.example),d.push({partOfSpeech:h.partOfSpeech,definition:v.definition,example:v.example||null,synonyms:(h.synonyms||[]).slice(0,4)}))})),{word:t,phonetic:n||`/${t}/`,audioUrl:s||null,part_of_speech:r,definition_tr:a||"Türkçe karşılığı",definition_en:o||"English definition not found",example:l||"",meanings:d,foundOnline:!!i}}async addCustomWord(e,t,i="A1",a="",n="",s="kelime"){const r=this.getUserData("srs_items")||[],o=(e||"").trim();if(!o)return null;const l=r.find(u=>(u.word||"").toLowerCase()===o.toLowerCase());if(l)return l.due=!0,t&&(!l.definition_tr||l.definition_tr==="-")&&(l.definition_tr=t),n&&!l.phonetic&&(l.phonetic=n),a&&(!l.examples||l.examples.length===0)&&(l.examples=[a]),this.setUserData("srs_items",r),this.recordDailyTaskProgress("task-vocab"),l;const d={id:Date.now()+Math.floor(Math.random()*1e3),word:o,definition_tr:t||"Tanım eklenmedi",definition_en:"",phonetic:n||"",cefr_level:i||"A1",examples:a?[a]:[],collocations:[],due:!0,repetitions:0,ease_factor:2.5,interval:1,part_of_speech:s||"kelime",created_at:new Date().toISOString()};return r.unshift(d),this.setUserData("srs_items",r),this.recordDailyTaskProgress("task-vocab"),d}async getReadingMaterials(){return(z.reading_materials||[]).map(e=>({...e,comprehension_questions:typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary}))}async getReadingMaterial(e){const t=await this.getReadingMaterials();return{material:t.find(a=>a.id===parseInt(e,10))||t[0]}}async submitReading(e,t,i){const{material:a}=await this.getReadingMaterial(e),n=a.comprehension_questions||[];let s=0;const r=n.map((u,y)=>{const f=t[y]||"",h=f.trim().toLowerCase()===u.correct.trim().toLowerCase();return h&&s++,{question:u.question,userAnswer:f,correctAnswer:u.correct,isCorrect:h}}),o=Math.round(s/Math.max(n.length,1)*100),l=Math.round(a.word_count/Math.max(i,10)*60),d=this.getUserData("stats")||{xp:0};return d.xp=(d.xp||0)+(o>=70?30:15),this.setUserData("stats",d),this.recordDailyTaskProgress("task-reading"),{score:o,correctCount:s,totalCount:n.length,wordCount:a.word_count,wordsPerMinute:l,details:r}}async getListeningMaterials(){return(z.listening_materials||[]).map(e=>({...e,comprehension_questions:typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary}))}async getListeningMaterial(e){const t=await this.getListeningMaterials();return{material:t.find(a=>a.id===parseInt(e,10))||t[0]}}async submitListening(e,t,i){const{material:a}=await this.getListeningMaterial(e),n=a.comprehension_questions||[];let s=0;const r=n.map((d,u)=>{const y=t[u]||"",f=y.trim().toLowerCase()===d.correct.trim().toLowerCase();return f&&s++,{question:d.question,userAnswer:y,correctAnswer:d.correct,isCorrect:f}}),o=Math.round(s/Math.max(n.length,1)*100),l=this.getUserData("stats")||{xp:0};return l.xp=(l.xp||0)+(o>=70?25:10),this.setUserData("stats",l),{score:o,correctCount:s,totalCount:n.length,listenCount:i,details:r}}async getWritingPrompts(){return z.writing_prompts||[]}async submitWriting(e,t){const i=t.trim().split(/\s+/).filter(Boolean).length,a=(t.match(/[^.!?]+[.!?]+/g)||[]).length||1,n=(i/a).toFixed(1),s=Math.min(100,Math.max(50,40+Math.round(i*1.5))),r=s>=85?"B2":s>=65?"B1":"A2",o=this.getUserData("stats")||{xp:0};return o.xp=(o.xp||0)+30,this.setUserData("stats",o),this.recordDailyTaskProgress("task-writing"),{overallScore:s,cefrLevel:r,grammarScore:Math.min(95,s+5),vocabularyScore:s,structureScore:Math.max(50,s-5),feedback:[`Ortalama ${n} kelimelik cümlelerle ${i} kelime yazdınız.`,"Kelime seçiminiz konuya uygun ve anlaşılır.",'İpucu: Cümleleri birbirine "and", "but", "because" veya "so" gibi bağlaçlarla bağlayarak daha akıcı paragraflar oluşturabilirsiniz.'],errors:[]}}async getSpeakingScenarios(){return(z.speaking_scenarios||[]).map(e=>({...e,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary,key_phrases:typeof e.key_phrases=="string"?JSON.parse(e.key_phrases):e.key_phrases,objectives:typeof e.objectives=="string"?JSON.parse(e.objectives):e.objectives}))}async getSpeakingScenario(e){const t=await this.getSpeakingScenarios(),i=t.find(a=>a.id===parseInt(e,10))||t[0];return this.recordDailyTaskProgress("task-speaking"),{scenario:i}}async getErrors(){return{errors:this.getUserData("errors")||[]}}async resolveError(e){const t=this.getUserData("errors")||[],i=t.findIndex(n=>String(n.id)===String(e));i!==-1&&(t[i].resolved=1,this.setUserData("errors",t));const a=this.getUserData("stats")||{total_errors_resolved:0};return a.total_errors_resolved=(a.total_errors_resolved||0)+1,this.setUserData("stats",a),{success:!0}}async generateDailyTasks(){return{success:!0}}async getProgressHistory(){return{history:[]}}async getSyntaxExercises(e="all",t="all"){let i=[...W];return e&&e!=="all"&&(i=i.filter(a=>a.category===e)),t&&t!=="all"&&(i=i.filter(a=>a.cefr_level.toUpperCase()===t.toUpperCase())),{categories:U,exercises:i,total:i.length}}async submitSyntaxExercise(e,t,i=!0){const a=W.find(f=>f.id===e);if(!a)throw new Error("Cümle bulunamadı");const n=f=>(f||"").trim().toLowerCase().replace(/[.,!?;:\"'’]/g,"").replace(/\s+/g," ").trim(),s=n(t),r=n(a.correct_sentence),o=(a.acceptable_alternatives||[]).map(n),l=s===r||o.includes(s),d=this.getUserData("stats")||{xp:0},u=l?i?15:8:2;d.xp=(d.xp||0)+u;const y=this.getUserData("skills")||{};if(y.sentence_formation||(y.sentence_formation={level:"A1",sublevel:"-",score:0}),l){y.sentence_formation.score=Math.min(100,(y.sentence_formation.score||0)+4);const f=y.sentence_formation.score;f>=85?y.sentence_formation.level="B2":f>=65?y.sentence_formation.level="B1":f>=40?y.sentence_formation.level="A2":y.sentence_formation.level="A1"}if(this.setUserData("skills",y),this.setUserData("stats",d),!l){const f=this.getUserData("errors")||[];f.unshift({id:Date.now(),skill:"sentence_formation",error_text:t,correction:a.correct_sentence,explanation:a.explanation_tr||"İngilizce cümle dizilimi (S-V-O-M-P-T) kuralına uymuyor.",occurrence_count:1,resolved:0}),this.setUserData("errors",f)}return{isCorrect:l,correctSentence:a.correct_sentence,grammarBreakdown:a.grammar_breakdown,explanationTr:a.explanation_tr,xpGained:u,sentenceFormationSkill:y.sentence_formation}}}const p=new K,N=typeof window<"u"&&(window.location.hostname.includes("github.io")||window.location.protocol==="file:"),Y="/api";class G{constructor(){this.useLocal=N}getCurrentUser(){return p.getCurrentUser()}getHeaders(){const e=this.getCurrentUser(),t={"Content-Type":"application/json"};return e&&(t["x-user-id"]=e.id||e.username),t}async request(e,t={}){if(this.useLocal)throw new Error("Using local service");const i=`${Y}${e}`,a={...t,headers:{...this.getHeaders(),...t.headers||{}}};try{const n=await fetch(i,a);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return await n.json()}catch(n){throw this.useLocal=!0,n}}async register(e,t,i){if(this.useLocal)return await p.register(e,t,i);try{const a=await this.request("/auth/register",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:i})});return await p.register(e,t,i),a}catch{return await p.register(e,t,i)}}async login(e,t){if(this.useLocal)return await p.login(e,t);try{const i=await this.request("/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})});return await p.login(e,t),i}catch{return await p.login(e,t)}}async loginOrRegisterGuest(){return await p.loginOrRegisterGuest()}logout(){p.logout()}async getProfile(){const e=this.getCurrentUser();if(!e)throw new Error("AUTH_REQUIRED");return{user:e}}async getDashboard(){return await p.getDashboard()}async skipAssessmentToA1(){return await p.skipAssessmentToA1()}async startAssessment(){if(this.useLocal)return p.startAssessment();try{return await this.request("/assessment/start",{method:"POST"})}catch{return p.startAssessment()}}async getAssessmentQuestions(e,t){if(this.useLocal)return p.getAssessmentQuestions(e,t);try{return await this.request(`/assessment/${e}/questions/${t}`)}catch{return p.getAssessmentQuestions(e,t)}}async submitAssessmentAnswer(e,t,i,a=3e3){if(this.useLocal)return p.submitAssessmentAnswer(e,t,i,a);try{return await this.request(`/assessment/${e}/answer`,{method:"POST",body:JSON.stringify({questionBankId:t,userAnswer:i,responseTimeMs:a})})}catch{return p.submitAssessmentAnswer(e,t,i,a)}}async completeAssessment(e){if(this.useLocal)return p.completeAssessment(e);try{return await this.request(`/assessment/${e}/complete`,{method:"POST"})}catch{return p.completeAssessment(e)}}async getAssessmentProgress(e){if(this.useLocal)return{completedSkills:10,totalSkills:10};try{return await this.request(`/assessment/${e}/progress`)}catch{return{completedSkills:10,totalSkills:10}}}async getLatestAssessment(){if(this.useLocal)return(await p.getDashboard()).latestAssessment;try{return await this.request("/assessment/latest")}catch{return(await p.getDashboard()).latestAssessment}}async getGrammarTopics(){if(this.useLocal)return p.getGrammarTopics();try{return await this.request("/grammar/topics")}catch{return p.getGrammarTopics()}}async getGrammarTopic(e){if(this.useLocal)return p.getGrammarTopic(e);try{return await this.request(`/grammar/topic/${e}`)}catch{return p.getGrammarTopic(e)}}async submitGrammarExercise(e,t,i=3e3){if(this.useLocal)return p.submitGrammarExercise(e,t);try{return await this.request(`/grammar/exercise/${e}/submit`,{method:"POST",body:JSON.stringify({answer:t,responseTimeMs:i})})}catch{return p.submitGrammarExercise(e,t)}}async getVocabularyItems(e={}){if(this.useLocal)return p.getVocabularyItems(e);try{const t=new URLSearchParams(e).toString();return await this.request(`/vocabulary/items${t?`?${t}`:""}`)}catch{return p.getVocabularyItems(e)}}async getReviewQueue(e="all"){if(this.useLocal)return p.getReviewQueue(e);try{return await this.request(`/vocabulary/review?level=${encodeURIComponent(e)}`)}catch{return p.getReviewQueue(e)}}async submitReview(e,t){if(this.useLocal)return p.submitReview(e,t);const i=[0,2,4,5],a=i[t]!==void 0?i[t]:Number(t);try{return await this.request(`/vocabulary/${e}/review`,{method:"POST",body:JSON.stringify({rating:t,quality:a})})}catch{return p.submitReview(e,t)}}async addCustomWord(e,t,i="A1",a="",n="",s="kelime"){return await p.addCustomWord(e,t,i,a,n,s)}async loadWordPack(e="A1"){return await p.loadWordPack(e)}async drawFreshWords(e="all",t=15){return await p.drawFreshWords(e,t)}async resetLevelQueue(e="all"){return await p.resetLevelQueue(e)}async getSyntaxExercises(e="all",t="all"){if(this.useLocal)return p.getSyntaxExercises(e,t);try{const i=new URLSearchParams({category:e,level:t}).toString();return await this.request(`/syntax/exercises?${i}`)}catch{return p.getSyntaxExercises(e,t)}}async submitSyntaxExercise(e,t,i=!0){if(this.useLocal)return p.submitSyntaxExercise(e,t,i);try{return await this.request("/syntax/submit",{method:"POST",body:JSON.stringify({exerciseId:e,sentence:t,isFirstAttempt:i})})}catch{return p.submitSyntaxExercise(e,t,i)}}async getReadingMaterials(e={}){if(this.useLocal)return p.getReadingMaterials();try{const t=new URLSearchParams(e).toString();return await this.request(`/reading/materials${t?`?${t}`:""}`)}catch{return p.getReadingMaterials()}}async getReadingMaterial(e){if(this.useLocal)return p.getReadingMaterial(e);try{return await this.request(`/reading/${e}`)}catch{return p.getReadingMaterial(e)}}async submitReading(e,t,i){if(this.useLocal)return p.submitReading(e,t,i);try{return await this.request(`/reading/${e}/submit`,{method:"POST",body:JSON.stringify({answers:t,readingTimeSeconds:i})})}catch{return p.submitReading(e,t,i)}}async getListeningMaterials(e={}){if(this.useLocal)return p.getListeningMaterials();try{const t=new URLSearchParams(e).toString();return await this.request(`/listening/materials${t?`?${t}`:""}`)}catch{return p.getListeningMaterials()}}async getListeningMaterial(e){if(this.useLocal)return p.getListeningMaterial(e);try{return await this.request(`/listening/${e}`)}catch{return p.getListeningMaterial(e)}}async getListeningTranscript(e){const{material:t}=await this.getListeningMaterial(e);return{transcript:(t==null?void 0:t.transcript)||(t==null?void 0:t.audio_text)||""}}async submitListening(e,t,i=1){if(this.useLocal)return p.submitListening(e,t,i);try{return await this.request(`/listening/${e}/submit`,{method:"POST",body:JSON.stringify({answers:t,listenCount:i})})}catch{return p.submitListening(e,t,i)}}async getWritingPrompts(e={}){if(this.useLocal)return p.getWritingPrompts();try{const t=new URLSearchParams(e).toString();return await this.request(`/writing/prompts${t?`?${t}`:""}`)}catch{return p.getWritingPrompts()}}async submitWriting(e,t,i){if(this.useLocal)return p.submitWriting(e,t,i);try{return await this.request("/writing/submit",{method:"POST",body:JSON.stringify({promptId:e,text:t,timeSpentSeconds:i})})}catch{return p.submitWriting(e,t,i)}}async getSpeakingScenarios(e={}){if(this.useLocal)return p.getSpeakingScenarios();try{const t=new URLSearchParams(e).toString();return await this.request(`/speaking/scenarios${t?`?${t}`:""}`)}catch{return p.getSpeakingScenarios()}}async getSpeakingScenario(e){if(this.useLocal)return p.getSpeakingScenario(e);try{return await this.request(`/speaking/scenario/${e}`)}catch{return p.getSpeakingScenario(e)}}async getErrors(e={}){if(this.useLocal)return p.getErrors(e);try{const t=new URLSearchParams(e).toString();return await this.request(`/errors${t?`?${t}`:""}`)}catch{return p.getErrors(e)}}async resolveError(e){if(this.useLocal)return p.resolveError(e);try{return await this.request(`/errors/${e}/resolve`,{method:"POST"})}catch{return p.resolveError(e)}}async generateDailyTasks(){if(this.useLocal)return p.generateDailyTasks();try{return await this.request("/daily-tasks/generate",{method:"POST"})}catch{return p.generateDailyTasks()}}async completeDailyTask(e,t=!0){if(this.useLocal)return p.completeDailyTask(e,t);try{return await this.request("/daily-tasks/complete",{method:"POST",body:JSON.stringify({taskId:e,completed:t})})}catch{return p.completeDailyTask(e,t)}}async getProgressHistory(){if(this.useLocal)return p.getProgressHistory();try{return await this.request("/progress/history")}catch{return p.getProgressHistory()}}async getWeeklyReport(){if(this.useLocal)return p.getWeeklyReport();try{return await this.request("/reports/weekly")}catch{return p.getWeeklyReport()}}}const x=new G;class F{constructor(){this.user=null,this.dashboard=null,this.currentView="dashboard",this.sessionSeconds=0,this.timerInterval=null,this.listeners=new Map}on(e,t){return this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t),()=>{const i=this.listeners.get(e);i&&this.listeners.set(e,i.filter(a=>a!==t))}}emit(e,t){this.listeners.has(e)&&this.listeners.get(e).forEach(i=>{try{i(t)}catch(a){console.error(`Error in event listener for ${e}:`,a)}})}setUser(e){this.user=e,this.emit("user:change",e)}setDashboard(e){this.dashboard=e,this.emit("dashboard:change",e)}setView(e){this.currentView=e,this.emit("view:change",e)}startSessionTimer(){this.timerInterval&&clearInterval(this.timerInterval),this.timerInterval=setInterval(()=>{this.sessionSeconds++,this.emit("timer:tick",this.sessionSeconds)},1e3)}stopSessionTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}showToast(e,t="info",i=4e3){const a=document.getElementById("toast-container");if(!a)return;const n=document.createElement("div");n.className=`toast ${t}`;let s="ℹ️";t==="success"&&(s="✅"),t==="error"&&(s="⚠️");const r=document.createElement("span");r.textContent=s;const o=document.createElement("span");o.textContent=e,n.appendChild(r),n.appendChild(o),a.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(-10px)",n.style.transition="all 0.3s ease",setTimeout(()=>n.remove(),300)},i)}}const m=new F;class Q{constructor(e){this.onSuccess=e,this.mode="login",this.element=null}show(){this.remove();const e=document.createElement("div");e.className="auth-overlay",e.id="auth-modal-overlay",e.innerHTML=`
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
    `,document.body.appendChild(e),this.element=e,this.bindEvents(),setTimeout(()=>{var t;(t=document.getElementById("auth-username"))==null||t.focus()},100)}remove(){const e=document.getElementById("auth-modal-overlay");e&&e.remove(),this.element=null}showAlert(e,t=!0){const i=document.getElementById("auth-alert");i&&(i.textContent=e,i.className=`auth-alert ${t?"error":"success"}`,i.style.display="block")}setMode(e){this.mode=e,this.show()}bindEvents(){var e,t,i,a,n;(e=document.getElementById("tab-login"))==null||e.addEventListener("click",()=>this.setMode("login")),(t=document.getElementById("tab-register"))==null||t.addEventListener("click",()=>this.setMode("register")),(i=document.getElementById("link-switch-register"))==null||i.addEventListener("click",s=>{s.preventDefault(),this.setMode("register")}),(a=document.getElementById("link-switch-login"))==null||a.addEventListener("click",s=>{s.preventDefault(),this.setMode("login")}),(n=document.getElementById("auth-form"))==null||n.addEventListener("submit",async s=>{var d,u;s.preventDefault();const r=(d=document.getElementById("auth-username"))==null?void 0:d.value.trim(),o=(u=document.getElementById("auth-password"))==null?void 0:u.value;if(!r||!o){this.showAlert("Lütfen kullanıcı adı ve şifre girin.");return}if(this.mode==="register"&&o.length<3){this.showAlert("Şifre en az 3 karakter olmalıdır.");return}const l=document.getElementById("btn-submit-auth");l&&(l.disabled=!0,l.textContent="İşleniyor...");try{let y;this.mode==="register"?(y=await x.register(r,o,r),m.showToast(`Hoş geldin ${y.displayName||y.username}! Hesabın A1 seviyesinde 0'dan oluşturuldu. 🎉`,"success")):(y=await x.login(r,o),m.showToast(`Tekrar hoş geldin, ${y.displayName||y.username}! 👋`,"success")),this.remove(),this.onSuccess&&this.onSuccess(y)}catch(y){this.showAlert(y.message||"Giriş yapılırken bir hata oluştu."),l&&(l.disabled=!1,l.textContent=this.mode==="login"?"Giriş Yap →":"Hesap Oluştur ve 0'dan Başla →")}})}}const P=[{id:"first_step",category:"starter",title:"İlk Adım",description:"İlk kelime tekrarını veya gramer alıştırmanı başarıyla tamamla.",icon:"🌱",xp:25,check:c=>{var e,t,i;return((e=c.stats)==null?void 0:e.total_words_learned)>0||((t=c.stats)==null?void 0:t.total_grammar_mastered)>0||((i=c.stats)==null?void 0:i.xp)>15}},{id:"compass",category:"starter",title:"Kutup Yıldızı",description:"10 Becerili CEFR Seviye Tespit Sınavını tamamla.",icon:"🧭",xp:150,check:c=>!!(c.latestAssessment&&(c.latestAssessment.status==="completed"||c.latestAssessment.overall_cefr))},{id:"level_5",category:"starter",title:"Hızla Yükselen",description:"Öğrenci seviyeni 5. seviyeye ulaştır.",icon:"🚀",xp:100,check:c=>{var e,t;return((e=c.stats)==null?void 0:e.level)>=5||(((t=c.stats)==null?void 0:t.xp)||0)>=500}},{id:"level_10",category:"starter",title:"İngilizce Yolcusu",description:"Öğrenci seviyeni 10. seviyeye ulaştır.",icon:"👑",xp:250,check:c=>{var e,t;return((e=c.stats)==null?void 0:e.level)>=10||(((t=c.stats)==null?void 0:t.xp)||0)>=2e3}},{id:"vocab_10",category:"vocab",title:"Kelime Çırağı",description:"Kalıcı hafızaya 10 İngilizce kelime kaydet.",icon:"📖",xp:50,target:10,progress:c=>{var e;return{current:Math.min(10,((e=c.stats)==null?void 0:e.total_words_learned)||0),max:10}},check:c=>{var e;return((e=c.stats)==null?void 0:e.total_words_learned)>=10}},{id:"vocab_50",category:"vocab",title:"Kelime Avcısı",description:"Kalıcı hafızaya 50 İngilizce kelime kaydet.",icon:"📚",xp:150,target:50,progress:c=>{var e;return{current:Math.min(50,((e=c.stats)==null?void 0:e.total_words_learned)||0),max:50}},check:c=>{var e;return((e=c.stats)==null?void 0:e.total_words_learned)>=50}},{id:"vocab_100",category:"vocab",title:"Kelime Ustası",description:"100 kelimeyi hafızana kazı.",icon:"🧠",xp:300,target:100,progress:c=>{var e;return{current:Math.min(100,((e=c.stats)==null?void 0:e.total_words_learned)||0),max:100}},check:c=>{var e;return((e=c.stats)==null?void 0:e.total_words_learned)>=100}},{id:"vocab_250",category:"vocab",title:"Canlı Sözlük",description:"250 kelimelik geniş bir CEFR dağarcığına ulaş.",icon:"🏛️",xp:600,target:250,progress:c=>{var e;return{current:Math.min(250,((e=c.stats)==null?void 0:e.total_words_learned)||0),max:250}},check:c=>{var e;return((e=c.stats)==null?void 0:e.total_words_learned)>=250}},{id:"vocab_custom",category:"vocab",title:"Kişisel Arşivci",description:"Sisteme kendine özel en az 1 özel kelime kartı ekle.",icon:"🏷️",xp:40,check:c=>!!c.hasCustomWord},{id:"grammar_first",category:"grammar",title:"Kural Bilgesi",description:"Gramer Akademisinden ilk konuyu ve alıştırmayı bitir.",icon:"📐",xp:50,check:c=>{var e,t,i;return((e=c.stats)==null?void 0:e.total_grammar_mastered)>=1||(((i=(t=c.skills)==null?void 0:t.grammar)==null?void 0:i.score)||0)>10}},{id:"grammar_5",category:"grammar",title:"Gramer Mimarı",description:"5 farklı dilbilgisi konusunu kavra ve alıştırmalarını geç.",icon:"🏛️",xp:150,target:5,progress:c=>{var e;return{current:Math.min(5,((e=c.stats)==null?void 0:e.total_grammar_mastered)||0),max:5}},check:c=>{var e;return((e=c.stats)==null?void 0:e.total_grammar_mastered)>=5}},{id:"grammar_a1_master",category:"grammar",title:"A1 Gramer Şampiyonu",description:"A1 seviyesindeki temel zaman ve yapıları tamamen bitir.",icon:"🥇",xp:250,check:c=>{var e,t,i,a;return(((t=(e=c.skills)==null?void 0:e.grammar)==null?void 0:t.score)||0)>=70&&((a=(i=c.skills)==null?void 0:i.grammar)==null?void 0:a.level)!=="A1-"}},{id:"reader_first",category:"skills",title:"Kitap Kurdu I",description:"İlk okuma parçasını oku ve anlama testini tamamla.",icon:"📰",xp:50,check:c=>{var e,t;return c.completedReadingCount>=1||(((t=(e=c.skills)==null?void 0:e.reading)==null?void 0:t.score)||0)>0}},{id:"reader_perfect",category:"skills",title:"Derin Kavrama",description:"Bir okuma anlama testinde tüm soruları eksiksiz doğru yanıtla.",icon:"🎯",xp:100,check:c=>!!c.hasPerfectReading},{id:"listener_first",category:"skills",title:"İyi Dinleyici",description:"İlk dinleme laboratuvarı egzersizini tamamla.",icon:"🎧",xp:50,check:c=>{var e,t;return c.completedListeningCount>=1||(((t=(e=c.skills)==null?void 0:e.listening)==null?void 0:t.score)||0)>0}},{id:"writer_first",category:"skills",title:"Akıcı Kalem",description:"Yazma stüdyosuna ilk İngilizce kompozisyonunu gönder.",icon:"✍️",xp:75,check:c=>{var e,t;return c.completedWritingCount>=1||(((t=(e=c.skills)==null?void 0:e.writing)==null?void 0:t.score)||0)>0}},{id:"speaker_first",category:"skills",title:"Sesini Duyur",description:"İlk konuşma simülasyonunu veya sesli diyalog pratiğini yap.",icon:"🗣️",xp:60,check:c=>{var e,t;return c.completedSpeakingCount>=1||(((t=(e=c.skills)==null?void 0:e.speaking)==null?void 0:t.score)||0)>0}},{id:"pronunciation_first",category:"skills",title:"Fonetik Avcısı",description:"İlk telaffuz ve fonetik analiz çalışmanı gerçekleştir.",icon:"🎙️",xp:50,check:c=>{var e,t;return(((t=(e=c.skills)==null?void 0:e.pronunciation)==null?void 0:t.score)||0)>0}},{id:"syntax_first",category:"skills",title:"Cümle Mimarı",description:"S-V-O-M-P-T dizilim laboratuvarında ilk cümleni kur ve doğrula.",icon:"🧩",xp:60,check:c=>{var e,t;return(((t=(e=c.skills)==null?void 0:e.sentence_formation)==null?void 0:t.score)||0)>0}},{id:"syntax_master",category:"skills",title:"Sözdizimi Ustası",description:"Cümle Kurma (Syntax) becerisinde en az %40 başarı seviyesine ulaş.",icon:"⚡",xp:180,target:40,progress:c=>{var e,t;return{current:Math.min(40,((t=(e=c.skills)==null?void 0:e.sentence_formation)==null?void 0:t.score)||0),max:40}},check:c=>{var e,t;return(((t=(e=c.skills)==null?void 0:e.sentence_formation)==null?void 0:t.score)||0)>=40}},{id:"streak_3",category:"streak",title:"Kıvılcım",description:"3 gün aralıksız her gün İngilizce çalış.",icon:"🔥",xp:100,target:3,progress:c=>{var e;return{current:Math.min(3,((e=c.stats)==null?void 0:e.current_streak)||1),max:3}},check:c=>{var e,t;return(((e=c.stats)==null?void 0:e.current_streak)||1)>=3||(((t=c.stats)==null?void 0:t.longest_streak)||1)>=3}},{id:"streak_7",category:"streak",title:"Alev Serisi",description:"7 günlük kesintisiz çalışma serisi yakala.",icon:"⚡",xp:250,target:7,progress:c=>{var e;return{current:Math.min(7,((e=c.stats)==null?void 0:e.current_streak)||1),max:7}},check:c=>{var e,t;return(((e=c.stats)==null?void 0:e.current_streak)||1)>=7||(((t=c.stats)==null?void 0:t.longest_streak)||1)>=7}},{id:"streak_30",category:"streak",title:"Demir İrade",description:"30 günlük destansı bir çalışma disiplini oluştur.",icon:"🛡️",xp:1e3,target:30,progress:c=>{var e;return{current:Math.min(30,((e=c.stats)==null?void 0:e.current_streak)||1),max:30}},check:c=>{var e,t;return(((e=c.stats)==null?void 0:e.current_streak)||1)>=30||(((t=c.stats)==null?void 0:t.longest_streak)||1)>=30}},{id:"error_slayer",category:"streak",title:"Hata Avcısı",description:"Hata defterinden en az 5 yanlışı tekrar edip çöz.",icon:"⚔️",xp:120,target:5,progress:c=>{var e;return{current:Math.min(5,((e=c.stats)==null?void 0:e.total_errors_resolved)||0),max:5}},check:c=>{var e;return(((e=c.stats)==null?void 0:e.total_errors_resolved)||0)>=5}},{id:"daily_hero",category:"streak",title:"Günün Kahramanı",description:"Bir günde tüm Günlük Rutin görevlerinin tamamını bitir.",icon:"⭐",xp:80,check:c=>!!c.completedAllDailyTasks},{id:"night_owl",category:"streak",title:"Gece Kuşu",description:"Gece 22:00 sonrasında bir çalışma seansı tamamla.",icon:"🦉",xp:40,check:()=>{const c=new Date().getHours();return c>=22||c<4}}];class Z{constructor(){this.modalEl=null}getUnlockedAchievements(){try{const e=localStorage.getItem("linguaforge_active_user")||"misafir",t=localStorage.getItem(`linguaforge_u_${e}_achievements`);return t?JSON.parse(t):[]}catch{return[]}}saveUnlockedAchievements(e){try{const t=localStorage.getItem("linguaforge_active_user")||"misafir";localStorage.setItem(`linguaforge_u_${t}_achievements`,JSON.stringify(e))}catch{}}isUnlocked(e){return this.getUnlockedAchievements().some(i=>i.id===e)}async checkAll(e={}){const t=this.getUnlockedAchievements(),i=new Set(t.map(u=>u.id)),a=[],s=`linguaforge_u_${localStorage.getItem("linguaforge_active_user")||"misafir"}_`;let r=e.stats;if(!r)try{const u=localStorage.getItem(s+"stats");r=u?JSON.parse(u):{}}catch{r={}}let o=e.skills;if(!o)try{const u=localStorage.getItem(s+"skills");o=u?JSON.parse(u):{}}catch{o={}}let l=[];try{const u=localStorage.getItem(s+"custom_words");l=u?JSON.parse(u):[]}catch{}const d={...e,stats:r,skills:o,hasCustomWord:l.length>0};for(const u of P)if(!i.has(u.id))try{if(u.check(d)){const y={id:u.id,title:u.title,description:u.description,icon:u.icon,xp:u.xp,unlocked_at:new Date().toISOString()};if(t.push(y),i.add(u.id),a.push(u),r){r.xp=(r.xp||0)+u.xp;try{localStorage.setItem(s+"stats",JSON.stringify(r))}catch{}}}}catch(y){console.warn(`Error checking achievement ${u.id}:`,y)}return a.length>0&&(this.saveUnlockedAchievements(t),a.forEach((u,y)=>{setTimeout(()=>{this.showCelebration(u)},y*1200)})),a}showCelebration(e){var a;this.playCelebrationSound();const t=document.createElement("div");t.className="achievement-modal-overlay",t.innerHTML=`
      <div class="achievement-modal-card">
        <div class="achievement-confetti-host"></div>
        <div class="achievement-ribbon">🏆 YENİ BAŞARIM AÇILDI!</div>
        <div class="achievement-badge-glow">
          <div class="achievement-badge-icon">${e.icon}</div>
        </div>
        <h2 class="achievement-badge-title">${e.title}</h2>
        <p class="achievement-badge-desc">${e.description}</p>
        <div class="achievement-badge-reward">
          <span class="reward-xp">+${e.xp} XP KAZANDIN! ⚡</span>
        </div>
        <button class="btn btn-primary btn-block btn-lg btn-achievement-claim">
          Harika, Devam Et! →
        </button>
      </div>
    `,document.body.appendChild(t),this.spawnConfetti(t.querySelector(".achievement-confetti-host"));const i=()=>{t.classList.add("closing"),setTimeout(()=>t.remove(),250)};(a=t.querySelector(".btn-achievement-claim"))==null||a.addEventListener("click",i),t.addEventListener("click",n=>{n.target===t&&i()})}playCelebrationSound(){try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,i=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,s)=>{const r=t.createOscillator(),o=t.createGain();r.type="triangle",r.frequency.setValueAtTime(n,i+s*.08),o.gain.setValueAtTime(0,i+s*.08),o.gain.linearRampToValueAtTime(.18,i+s*.08+.03),o.gain.exponentialRampToValueAtTime(.001,i+s*.08+.6),r.connect(o),o.connect(t.destination),r.start(i+s*.08),r.stop(i+s*.08+.65)})}catch{}}spawnConfetti(e){if(!e)return;const t=["#f59e0b","#10b981","#6366f1","#ec4899","#3b82f6","#8b5cf6"];for(let i=0;i<30;i++){const a=document.createElement("div");a.className="confetti-piece",a.style.backgroundColor=t[i%t.length],a.style.left=`${Math.random()*100}%`,a.style.animationDelay=`${Math.random()*.4}s`,a.style.animationDuration=`${.8+Math.random()*.8}s`,a.style.transform=`rotate(${Math.random()*360}deg)`,e.appendChild(a)}}}const q=new Z;function J(c,e,t={}){return q.checkAndAward({stats:c,skills:e,...t})}class X{constructor(){this.container=null,this.data=null}async render(e){var t;this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Kişiselleştirilmiş öğrenme paneliniz yükleniyor...</p>
      </div>
    `;try{this.data=await x.getDashboard(),m.setDashboard(this.data),await q.checkAll(this.data),this.renderContent()}catch(i){if(i.message==="AUTH_REQUIRED")return;this.container.innerHTML=`
        <div class="card error-card">
          <h3>Panel yüklenemedi</h3>
          <p>${i.message}</p>
          <button class="btn btn-primary" id="retry-dashboard-btn">Tekrar Dene</button>
        </div>
      `,(t=document.getElementById("retry-dashboard-btn"))==null||t.addEventListener("click",()=>this.render(e))}}renderContent(){const{user:e,stats:t,skills:i,dailyTasks:a,recentErrors:n,reviewStats:s,latestAssessment:r}=this.data,o=document.getElementById("sidebar-streak");o&&(o.textContent=`${t.current_streak||1} gün`);const l=document.getElementById("sidebar-xp");l&&(l.textContent=`${t.xp||0} XP`);const d=document.getElementById("review-due-badge");d&&(d.textContent=s?s.dueToday:0);const u=document.getElementById("errors-count-badge");u&&(u.textContent=n?n.length:0);const y=(r==null?void 0:r.overall_cefr)||(r==null?void 0:r.overallCEFR)||"A1",f=document.getElementById("sidebar-cefr-badge");f&&(f.textContent=y);const h=[{key:"grammar",name:"Dilbilgisi (Grammar)",icon:"📖"},{key:"vocabulary",name:"Kelime Haznesi (Vocabulary)",icon:"📚"},{key:"reading",name:"Okuma & Anlama (Reading)",icon:"📰"},{key:"listening",name:"Dinleme & Algılama (Listening)",icon:"🎧"},{key:"writing",name:"Yazma Becerisi (Writing)",icon:"✍️"},{key:"speaking",name:"Konuşma & Akıcılık (Speaking)",icon:"🗣️"},{key:"pronunciation",name:"Telaffuz & Aksan (Pronunciation)",icon:"🎙️"},{key:"sentence_formation",name:"Cümle Kurma (Syntax)",icon:"🧩"},{key:"comprehension",name:"Kavrama Hızı (Comprehension)",icon:"💡"},{key:"communication",name:"Doğal İletişim (Communication)",icon:"🤝"}],v=(a==null?void 0:a.tasks)||[{id:"task-vocab",skill:"vocabulary",description:"Kelime Kartlarından en az 5 tanesini tekrar et veya yeni kelime öğren",targetView:"vocabulary"},{id:"task-grammar",skill:"grammar",description:"Gramer Akademisinden 1 konuyu ve interaktif alıştırmasını tamamla",targetView:"grammar"},{id:"task-reading",skill:"reading",description:"1 okuma metnini incele ve anlama sorularını yanıtla",targetView:"reading"},{id:"task-speaking",skill:"speaking",description:"1 konuşma senaryosunda sesli pratik yap veya diyalog kur",targetView:"speaking"}],k=new Set((a==null?void 0:a.completed_tasks)||[]),b=k.size,S=v.length,I=Math.round(b/Math.max(S,1)*100),C=v.find(T=>!k.has(T.id));this.nextTargetView=C?C.targetView||C.skill:"vocabulary",this.container.innerHTML=`
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
                <span>⚡ ${b>=S?"Günün Rutini Tamamlandı! 🎉":`Günün Rutinine Başla (${S-b} görev kaldı)`}</span>
              </button>
            </div>
          </div>
          <div class="hero-stat-box">
            <div class="hero-cefr-circle">
              <span class="hero-cefr-label">MEVCUT SEVİYE</span>
              <span class="hero-cefr-val">${y}</span>
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
            <div class="stat-sub">${(n==null?void 0:n.length)||0} hata defterinde kayıtlı</div>
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

            <!-- Routine Progress Widget -->
            <div class="routine-progress-widget">
              <div class="routine-progress-header">
                <span class="routine-progress-title">
                  <strong>İlerleme:</strong> ${b} / ${S} Görev Tamamlandı (%${I})
                </span>
                <span class="routine-reward-tag">${I===100?"🎉 +50 XP Bonus Eklendi!":"+20 XP / Görev"}</span>
              </div>
              <div class="routine-bar-outer">
                <div class="routine-bar-inner" style="width: ${I}%;"></div>
              </div>
              ${I===100?`
                <div class="routine-celebration">
                  ✨ <strong>Tebrikler!</strong> Bugünün tüm hedeflerini tamamlayarak serinizi korudunuz ve günlük bonusu kazandınız!
                </div>
              `:""}
            </div>

            <div class="tasks-list">
              ${v.map(T=>{const g=k.has(T.id);return`
                  <div class="task-item ${g?"completed":""}" data-task-id="${T.id}" data-view="${T.targetView||T.skill}">
                    <div class="task-checkbox ${g?"checked":""}" title="${g?"Tamamlandı olarak işaretlendi (kaldırmak için tıkla)":"Tamamlandı olarak işaretle"}">
                      ${g?"✓":""}
                    </div>
                    <div class="task-content">
                      <div class="task-title ${g?"text-strikethrough":""}">${T.description}</div>
                      <div class="task-skill-tag cefr-tag A1">${T.skill.toUpperCase()}</div>
                    </div>
                    <button class="btn ${g?"btn-secondary":"btn-primary"} btn-sm task-action-btn">
                      ${g?"Tekrar Aç":"Başla →"}
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
              ${h.map(T=>{const g=i[T.key]||{level:"A1",score:0},w=g.level||"A1",_=g.score||0;return`
                  <div class="skill-row" data-skill="${T.key}">
                    <div class="skill-label">
                      <span class="skill-icon">${T.icon}</span>
                      <span class="skill-name">${T.name}</span>
                    </div>
                    <div class="skill-bar-wrap">
                      <div class="skill-bar-bg">
                        <div class="skill-bar-fill" style="width: ${Math.max(_,5)}%;"></div>
                      </div>
                    </div>
                    <div class="skill-score">
                      <span class="cefr-tag ${w}">${w}</span>
                      <span class="score-percent">%${_}</span>
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
          <div class="grid-4 labs-grid">
            <div class="lab-card card" data-view="grammar">
              <div class="lab-icon">📖</div>
              <div class="lab-title">Gramer Akademisi</div>
              <div class="lab-desc">Türkçe açıklamalı, kuralların mantığını anlatan A1-C1 dilbilgisi dersleri.</div>
              <button class="btn btn-secondary btn-sm">Derslere Git →</button>
            </div>
            <div class="lab-card card" data-view="vocabulary">
              <div class="lab-icon">🗂️</div>
              <div class="lab-title">Kelime Kartları (SRS)</div>
              <div class="lab-desc">155+ kelimelik CEFR arşivi ve sınırsız canlı internet sözlüğü ile kalıcı öğrenim.</div>
              <button class="btn btn-secondary btn-sm">Kelimeleri Aç →</button>
            </div>
            <div class="lab-card card" data-view="syntax">
              <div class="lab-icon">🧩</div>
              <div class="lab-title">Cümle Kurma (Syntax)</div>
              <div class="lab-desc">S-V-O-M-P-T dizilim laboratuvarı ile İngilizce düşünme refleksinizi güçlendirin.</div>
              <button class="btn btn-secondary btn-sm">Cümle Kur →</button>
            </div>
            <div class="lab-card card" data-view="speaking">
              <div class="lab-icon">🗣️</div>
              <div class="lab-title">Konuşma & Diyalog</div>
              <div class="lab-desc">Günlük hayattaki durumlar için sesli rol yapma ve akıcılık simülatörü.</div>
              <button class="btn btn-secondary btn-sm">Konuşmaya Başla →</button>
            </div>
          </div>

          <!-- Achievements Banner -->
          <div class="card dashboard-achievements-banner" id="dash-achievements-banner" style="cursor: pointer;">
            <div class="dash-ach-left">
              <div class="dash-ach-icon">🏆</div>
              <div class="dash-ach-text">
                <h3>Rozetler & Başarımlar (${q.getUnlockedAchievements().length} / ${P.length} Açıldı)</h3>
                <p>Kazanılan rozetlerini incelemek ve kilitleri açmak için Rozet Vitrinini ziyaret et.</p>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm" id="btn-view-all-badges">Rozet Vitrini →</button>
          </div>
        </section>
      </div>
    `,this.bindEvents()}bindEvents(){var e,t,i,a,n,s;(e=document.getElementById("hero-diagnostic-btn"))==null||e.addEventListener("click",()=>{m.setView("assessment")}),(t=document.getElementById("hero-routine-btn"))==null||t.addEventListener("click",()=>{m.setView(this.nextTargetView||"vocabulary")}),(i=document.getElementById("goto-assessment-btn"))==null||i.addEventListener("click",()=>{m.setView("assessment")}),(a=document.getElementById("dash-achievements-banner"))==null||a.addEventListener("click",()=>{m.setView("progress")}),(n=document.getElementById("btn-view-all-badges"))==null||n.addEventListener("click",r=>{r.stopPropagation(),m.setView("progress")}),(s=document.getElementById("refresh-tasks-btn"))==null||s.addEventListener("click",async()=>{await this.render(this.container),m.showToast("Görevler güncellendi.","info")}),document.querySelectorAll(".task-checkbox").forEach(r=>{r.addEventListener("click",async o=>{o.stopPropagation();const l=r.closest(".task-item");if(!l)return;const d=l.dataset.taskId,y=!r.classList.contains("checked");try{await x.completeDailyTask(d,y),m.showToast(y?"🎯 Görev tamamlandı! +20 XP eklendi.":"Görev işareti kaldırıldı.",y?"success":"info"),await this.render(this.container)}catch(f){m.showToast("Görev durumu güncellenemedi: "+f.message,"error")}})}),document.querySelectorAll(".task-action-btn").forEach(r=>{r.addEventListener("click",o=>{o.stopPropagation();const l=r.closest(".task-item"),d=l==null?void 0:l.dataset.view;d&&m.setView(d)})}),document.querySelectorAll(".task-item").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.view;o&&m.setView(o)})}),document.querySelectorAll(".lab-card").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.view;o&&m.setView(o)})}),document.querySelectorAll(".skill-row").forEach(r=>{r.style.cursor="pointer",r.addEventListener("click",()=>{const o=r.dataset.skill,d={grammar:"grammar",vocabulary:"vocabulary",reading:"reading",listening:"listening",writing:"writing",speaking:"speaking",pronunciation:"pronunciation",sentence_formation:"syntax",comprehension:"reading",communication:"speaking"}[o]||o;d&&m.setView(d)})})}}class ee{constructor(){this.synth=typeof window<"u"&&window.speechSynthesis||null,this.recognition=null,this.voices=[],this.preferredAccent="en-US",this.preferredRate=1,typeof window<"u"&&this.synth&&(this.loadVoices(),typeof speechSynthesis<"u"&&speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=()=>this.loadVoices()));const e=typeof window<"u"&&(window.SpeechRecognition||window.webkitSpeechRecognition)||null;e&&(this.recognition=new e,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.lang="en-US")}loadVoices(){if(!this.synth)return;const e=this.synth.getVoices()||[];this.voices=e.filter(t=>t.lang&&t.lang.toLowerCase().startsWith("en"))}isTtsSupported(){return!!this.synth}isSttSupported(){return!!this.recognition}sanitizeForSpeech(e){if(!e)return"";let t=String(e);return t=t.replace(/_+/g," blank "),t=t.replace(/(\b\w+)\s*\/\s*(\w+\b)/g,"$1 or $2"),t=t.replace(/\//g," "),t=t.replace(/<[^>]+>/g," "),t=t.replace(/["“”«»`\\]/g," "),t=t.replace(/(^|\s)['‘](.*?)['’](\s|$)/g,"$1 $2 $3"),t=t.replace(/['’]{2,}/g," "),t=t.replace(/[:;]/g,", "),t=t.replace(/[()[\]{}]/g,", "),t=t.replace(/\s+[-—–]+\s+/g,", "),t=t.replace(/[-—–]{2,}/g,", "),t=t.replace(/(\b\w+)-(\w+\b)/g,"$1 $2"),t=t.replace(/[-—–]/g," "),t=t.replace(/\.{2,}/g,". "),t=t.replace(/[*#^~<>@$%&+=|_]/g," "),t=t.replace(/,\s*,+/g,", "),t=t.replace(/,\s*\./g,"."),t=t.replace(/\.\s*,/g,"."),t=t.replace(/\s+([.,!?;:])/g,"$1"),t=t.replace(/\s+/g," ").trim(),t}getBestVoice(e="en-US"){if(!this.synth)return null;let t=this.voices;if((!t||t.length===0)&&(t=(this.synth.getVoices()||[]).filter(r=>r.lang&&r.lang.toLowerCase().startsWith("en")),this.voices=t),t.length===0&&(t=(this.synth.getVoices()||[]).filter(o=>o.lang&&o.lang.toLowerCase().startsWith("en")),this.voices=t),t.length===0)return null;const i=t.find(r=>r.lang.toLowerCase()===e.toLowerCase());if(i)return i;const a=e.slice(0,5),n=t.find(r=>r.lang.toLowerCase().startsWith(a.toLowerCase()));if(n)return n;const s=t.find(r=>{const o=(r.name||"").toLowerCase();return o.includes("natural")||o.includes("google")||o.includes("samantha")||o.includes("david")||o.includes("jenny")||o.includes("zira")});return s||t[0]}speak(e,t={}){if(!this.synth)return console.warn("Speech synthesis not supported in this browser"),Promise.resolve();this.cancel();const i=this.sanitizeForSpeech(e);return i?new Promise(a=>{const n=new SpeechSynthesisUtterance(i);n.rate=t.rate||this.preferredRate||.95,n.pitch=t.pitch||1;const s=t.lang||this.preferredAccent||"en-US";n.lang=s;const r=this.getBestVoice(s);r&&(n.voice=r),n.onend=()=>a(),n.onerror=o=>{console.warn("Speech synthesis error:",o),a()},this.synth.speak(n)}):Promise.resolve()}get hasRecognition(){return!!this.recognition}get hasSynthesis(){return!!this.synth}stop(){this.cancel()}cancel(){this.synth&&this.synth.cancel()}listen(e,t,i="en-US"){return this.startListening({onResult:a=>{typeof e=="function"&&e(a.final||a.interim||"")},onEnd:a=>{typeof t=="function"&&t(a)},lang:i})}startListening({onResult:e,onError:t,onEnd:i,lang:a="en-US"}){if(!this.recognition){t&&t(new Error("Speech recognition not supported in this browser."));return}try{this.recognition.abort()}catch{}this.recognition.lang=a;let n="";this.recognition.onresult=s=>{let r="";for(let o=s.resultIndex;o<s.results.length;++o)s.results[o].isFinal?n+=(n?" ":"")+s.results[o][0].transcript.trim():r+=s.results[o][0].transcript;e&&e({final:n.trim(),interim:r.trim(),confidence:s.results[0]?s.results[0][0].confidence:0})},this.recognition.onerror=s=>{console.warn("Speech recognition error:",s.error),t&&t(s)},this.recognition.onend=()=>{i&&i(n.trim())};try{this.recognition.start()}catch(s){console.warn("Recognition start caught error:",s)}}stopListening(){if(this.recognition)try{this.recognition.stop()}catch{}}calculateSimilarity(e,t){if(!e||!t)return 0;const i=String(e).toLowerCase().replace(/[^\w\s]/g,"").trim(),a=String(t).toLowerCase().replace(/[^\w\s]/g,"").trim();if(!i||!a)return 0;const n=i.split(/\s+/).filter(Boolean),s=a.split(/\s+/).filter(Boolean);if(s.length===0||n.length===0)return 0;let r=0;const o=[...s];for(const y of n){const f=o.indexOf(y);f!==-1&&(r++,o.splice(f,1))}const l=r/n.length,d=r/s.length,u=l+d>0?2*l*d/(l+d):0;return Math.round(u*100)}}const A=new ee,L={what:{tr:"Ne, Neyi",pos:"pronoun",cefr:"A1",note:"Soru zamiri"},where:{tr:"Nerede, Nereye",pos:"adverb",cefr:"A1",note:"Yer bildiren soru kelimesi"},when:{tr:"Ne zaman, -dığı zaman",pos:"adverb",cefr:"A1",note:"Zaman bildiren soru kelimesi"},which:{tr:"Hangi, Hangisi",pos:"pronoun",cefr:"A1",note:"Seçenek sorusu"},who:{tr:"Kim, Kimi",pos:"pronoun",cefr:"A1",note:"Kişi sorusu"},whose:{tr:"Kimin",pos:"pronoun",cefr:"A2",note:"Aitlik sorusu"},why:{tr:"Neden, Niçin",pos:"adverb",cefr:"A1",note:"Sebep sorusu"},how:{tr:"Nasıl, Ne kadar",pos:"adverb",cefr:"A1",note:"Durum veya miktar sorusu"},choose:{tr:"Seçmek, Tercih etmek",pos:"verb",cefr:"A1",note:"Seçenek belirlemek"},chose:{tr:"Seçti",pos:"verb",cefr:"A2",note:"Choose fiilinin geçmiş hali"},chosen:{tr:"Seçilmiş",pos:"verb/adj",cefr:"A2",note:"Choose fiilinin 3. hali"},select:{tr:"Seçmek, İşaretlemek",pos:"verb",cefr:"A2",note:"Doğru seçeneği belirleyin"},correct:{tr:"Doğru, Düzeltmek",pos:"adj/verb",cefr:"A1",note:"Hatasız, uygun"},incorrect:{tr:"Yanlış, Hatalı",pos:"adj",cefr:"A2",note:"Doğru olmayan"},sentence:{tr:"Cümle",pos:"noun",cefr:"A1",note:"Yargı bildiren söz dizisi"},sentences:{tr:"Cümleler",pos:"noun",cefr:"A1",note:"Çoğul cümle"},phrase:{tr:"İfade, Söz öbeği",pos:"noun",cefr:"A2",note:"Birden çok kelimeden oluşan yapı"},blank:{tr:"Boşluk, Boş",pos:"noun/adj",cefr:"A1",note:"Doldurulacak alan"},blanks:{tr:"Boşluklar",pos:"noun",cefr:"A1",note:"Cümledeki eksik yerler"},fill:{tr:"Doldurmak",pos:"verb",cefr:"A1",note:"Fill in the blank = Boşluğu doldur"},filled:{tr:"Doldurulmuş, Dolu",pos:"verb",cefr:"A1",note:"Geçmiş zaman"},following:{tr:"Aşağıdaki, Takip eden",pos:"adj",cefr:"A2",note:"The following = Aşağıdakiler"},statement:{tr:"İfade, Beyan, Cümle",pos:"noun",cefr:"B1",note:"Belirtilen yargı"},meaning:{tr:"Anlam",pos:"noun",cefr:"A1",note:"Sözcüğün anlamı"},explanation:{tr:"Açıklama, İzah",pos:"noun",cefr:"A2",note:"Nedenini belirtme"},explain:{tr:"Açıklamak, İzah etmek",pos:"verb",cefr:"A2",note:"Açıklığa kavuşturmak"},passage:{tr:"Paragraf, Parça, Metin",pos:"noun",cefr:"A2",note:"Okuma metni parçası"},dialogue:{tr:"Diyalog, Karşılıklı konuşma",pos:"noun",cefr:"A1",note:"İki kişi arasındaki konuşma"},answer:{tr:"Cevap, Cevaplamak",pos:"noun/verb",cefr:"A1",note:"Soruya verilen yanıt"},question:{tr:"Soru",pos:"noun",cefr:"A1",note:"Cevap bekleyen cümle"},option:{tr:"Seçenek, Şık",pos:"noun",cefr:"A2",note:"A, B, C, D şıkları"},options:{tr:"Seçenekler, Şıklar",pos:"noun",cefr:"A2",note:"Tüm şıklar"},complete:{tr:"Tamamlamak, Eksiksiz",pos:"verb/adj",cefr:"A1",note:"Bitirmek, eksiksiz hale getirmek"},umbrella:{tr:"Şemsiye",pos:"noun",cefr:"A1",note:"Yağmurdan korunma aracı"},cloud:{tr:"Bulut",pos:"noun",cefr:"A1",note:"Gökyüzündeki su buharı"},clouds:{tr:"Bulutlar",pos:"noun",cefr:"A1",note:"Dark clouds = kara bulutlar"},dark:{tr:"Karanlık, Koyu",pos:"adj",cefr:"A1",note:"Koyu renk veya ışıksız"},sky:{tr:"Gökyüzü",pos:"noun",cefr:"A1",note:"Gök"},expect:{tr:"Ummak, Beklemek",pos:"verb",cefr:"A2",note:"Beklenti içinde olmak"},expected:{tr:"Bekledi, Umdu",pos:"verb",cefr:"A2",note:"Beklenen durum"},"take out":{tr:"Çıkarmak, Dışarı almak",pos:"phrasal verb",cefr:"A2",note:"Cebinden veya çantasından çıkarmak"},"took out":{tr:"Çıkardı",pos:"phrasal verb",cefr:"A2",note:"Take out geçmiş hali"},rain:{tr:"Yağmur / Yağmur yağmak",pos:"noun/verb",cefr:"A1",note:"Hava durumu"},raining:{tr:"Yağmur yağıyor",pos:"verb",cefr:"A1",note:"Şimdiki zaman"},"under the weather":{tr:"Keyifsiz, Biraz hasta",pos:"idiom",cefr:"B1",note:"Deyim: Kendini kırgın hissetmek"},weather:{tr:"Hava durumu",pos:"noun",cefr:"A1",note:"Günün hava şartları"},unwell:{tr:"Rahatsız, Hasta",pos:"adj",cefr:"A2",note:"Sağlığı bozuk"},sick:{tr:"Hasta",pos:"adj",cefr:"A1",note:"Hastalanmış"},born:{tr:"Doğmuş, Dünyaya gelmiş",pos:"adj/verb",cefr:"A1",note:"To be born = doğmak"},birthday:{tr:"Doğum günü",pos:"noun",cefr:"A1",note:"Doğum yıldönümü"},reflection:{tr:"Düşünme, Yansıma",pos:"noun",cefr:"B2",note:"Derin düşünme"},reflect:{tr:"Düşünmek, Yansıtmak",pos:"verb",cefr:"B2",note:"Let me reflect = Bir düşüneyim"},thoughtful:{tr:"Düşünceli, Özenli",pos:"adj",cefr:"B1",note:"İyi düşünülmüş soru"},thought:{tr:"Düşünce / Düşündü",pos:"noun/verb",cefr:"A2",note:"Think geçmiş hali veya fikir"},interview:{tr:"Mülakat, Röportaj",pos:"noun",cefr:"A2",note:"Görüşme"},interviewer:{tr:"Mülakatı yapan kişi",pos:"noun",cefr:"B1",note:"Soru soran yetkili"},hesitation:{tr:"Tereddüt, Duraksama",pos:"noun",cefr:"B2",note:"Konuşurken duraklama"},hesitate:{tr:"Tereddüt etmek",pos:"verb",cefr:"B1",note:"Duraksamak"},filler:{tr:"Doldurucu sözcük (well, you know)",pos:"noun",cefr:"B2",note:"Düşünme süresi kazandıran sözcük"},directive:{tr:"Talimat, Direktif",pos:"noun",cefr:"B2",note:"Resmi yönerge"},pragmatic:{tr:"Edimbilimsel, Pratik amaca yönelik",pos:"adj",cefr:"B2",note:"Sosyal iletişimdeki gerçek anlam"},implicature:{tr:"Örtük anlam, İma",pos:"noun",cefr:"C1",note:"Doğrudan söylenmeyip ima edilen şey"},review:{tr:"Gözden geçirmek, İncelemek",pos:"verb",cefr:"A2",note:"Tekrar okumak"},presentation:{tr:"Sunum",pos:"noun",cefr:"A2",note:"Sunum konuşması"},compliment:{tr:"İltifat, Övgü",pos:"noun",cefr:"B1",note:"Güzel söz"},stranger:{tr:"Yabancı (tanınmayan kişi)",pos:"noun",cefr:"A2",note:"Tanımadığınız kişi"},clarify:{tr:"Netleştirmek, Açıklığa kavuşturmak",pos:"verb",cefr:"B1",note:"Daha net anlatmak"},clarification:{tr:"Açıklama, Netleştirme",pos:"noun",cefr:"B1",note:"Netleştirme talebi"},interrupt:{tr:"Sözünü kesmek, Araya girmek",pos:"verb",cefr:"B1",note:"Konuşmayı bölmek"},interruption:{tr:"Araya girme, Kesinti",pos:"noun",cefr:"B1",note:"Bölünme"},"turn-taking":{tr:"Konuşma sırası alma",pos:"phrase",cefr:"B2",note:"Diyalogda sırayla söz alma"},electricity:{tr:"Elektrik",pos:"noun",cefr:"A2",note:"Enerji"},suddenly:{tr:"Aniden, Birdenbire",pos:"adverb",cefr:"A2",note:"Beklenmedik bir anda"},"went out":{tr:"Söndü, Kesildi (elektrik)",pos:"phrasal verb",cefr:"A2",note:"Go out geçmiş hali"},closure:{tr:"Kapanma, Kapalı olma",pos:"noun",cefr:"B1",note:"Yolun kapalı olması"},route:{tr:"Güzergah, Rota, Yol",pos:"noun",cefr:"A2",note:"Gidilecek güzergah"},manager:{tr:"Müdür, Yönetici",pos:"noun",cefr:"A2",note:"Sorumlu kişi"},submit:{tr:"Teslim etmek, Sunmak",pos:"verb",cefr:"B1",note:"Rapor/ödev teslim etmek"},report:{tr:"Rapor",pos:"noun",cefr:"A2",note:"Yazılı bilgilendirme"},meal:{tr:"Öğün, Yemek",pos:"noun",cefr:"A1",note:"Yemek vakti"},middle:{tr:"Orta, Ortası",pos:"noun/adj",cefr:"A2",note:"İki şeyin ortası"},breakfast:{tr:"Kahvaltı",pos:"noun",cefr:"A1",note:"Sabah öğünü"},lunch:{tr:"Öğle yemeği",pos:"noun",cefr:"A1",note:"Öğle öğünü"},dinner:{tr:"Akşam yemeği",pos:"noun",cefr:"A1",note:"Akşam ana öğün"},supper:{tr:"Gece atıştırmalığı, Hafif akşam yemeği",pos:"noun",cefr:"B1",note:"Geç saatteki hafif yemek"},flaw:{tr:"Kusur, Hata, Eksiklik",pos:"noun",cefr:"B2",note:"Düzeltilmesi gereken eksik"},decision:{tr:"Karar",pos:"noun",cefr:"A2",note:"Make a decision = Karar vermek"},mistake:{tr:"Hata, Yanlış",pos:"noun",cefr:"A1",note:"Make a mistake = Hata yapmak"},progress:{tr:"İlerleme, Gelişme",pos:"noun",cefr:"A2",note:"Make progress = İlerleme kaydetmek"},effort:{tr:"Çaba, Gayret",pos:"noun",cefr:"B1",note:"Make an effort = Çaba göstermek"},routine:{tr:"Rutin, Günlük alışkanlık",pos:"noun",cefr:"A1",note:"Düzenli yapılan şeyler"},habit:{tr:"Alışkanlık",pos:"noun",cefr:"A2",note:"Tekrarlanan davranış"},colleague:{tr:"İş arkadaşı, Meslektaş",pos:"noun",cefr:"A2",note:"Birlikte çalışılan kişi"},relatives:{tr:"Akrabalar",pos:"noun",cefr:"A2",note:"Aile fertleri"},relative:{tr:"Akraba / Göreceli",pos:"noun/adj",cefr:"A2",note:"Akraba veya bağıntılı"},agree:{tr:"Katılmak, Aynı fikirde olmak",pos:"verb",cefr:"A2",note:"I agree with you = Sana katılıyorum"},disagree:{tr:"Katılmamak, Karşı çıkmak",pos:"verb",cefr:"A2",note:"Farklı düşünmek"},allow:{tr:"İzin vermek",pos:"verb",cefr:"B1",note:"Müsaade etmek"},appear:{tr:"Görünmek, Ortaya çıkmak",pos:"verb",cefr:"B1",note:"Belirmek"},arrive:{tr:"Varmak, Ulaşmak",pos:"verb",cefr:"A1",note:"Bir yere ulaşmak"},avoid:{tr:"Kaçınmak, Uzak durmak",pos:"verb",cefr:"B1",note:"Yapmaktan sakınmak"},become:{tr:"Olmak, Haline gelmek",pos:"verb",cefr:"A2",note:"Dönüşmek"},became:{tr:"Oldu",pos:"verb",cefr:"A2",note:"Become geçmiş hali"},believe:{tr:"İnanmak",pos:"verb",cefr:"A1",note:"Güvenmek veya inanmak"},borrow:{tr:"Ödünç almak",pos:"verb",cefr:"A2",note:"Geri vermek üzere almak"},lend:{tr:"Ödünç vermek",pos:"verb",cefr:"A2",note:"Geri almak üzere vermek"},cancel:{tr:"İptal etmek",pos:"verb",cefr:"A2",note:"Vazgeçmek"},carry:{tr:"Taşımak",pos:"verb",cefr:"A2",note:"Bir şeyi elinde/üstünde götürmek"},catch:{tr:"Yakalamak, Yetişmek",pos:"verb",cefr:"A2",note:"Catch a bus = Otobüse yetişmek"},caught:{tr:"Yakaladı",pos:"verb",cefr:"A2",note:"Catch geçmiş hali"},consider:{tr:"Göz önünde bulundurmak, Düşünmek",pos:"verb",cefr:"B1",note:"Değerlendirmek"},continue:{tr:"Devam etmek",pos:"verb",cefr:"A2",note:"Sürdürmek"},create:{tr:"Yaratmak, Oluşturmak",pos:"verb",cefr:"A2",note:"Meydana getirmek"},describe:{tr:"Tanımlamak, Tarif etmek",pos:"verb",cefr:"A2",note:"Detaylı anlatmak"},develop:{tr:"Geliştirmek, Gelişmek",pos:"verb",cefr:"B1",note:"İlerletmek"},discover:{tr:"Keşfetmek",pos:"verb",cefr:"A2",note:"Yeni bir şey bulmak"},discuss:{tr:"Tartışmak, Görüşmek",pos:"verb",cefr:"A2",note:"Fikir alışverişi yapmak"},enjoy:{tr:"Keyif almak, Eğlenmek",pos:"verb",cefr:"A1",note:"Hoşlanmak"},improve:{tr:"Geliştirmek, İyileştirmek",pos:"verb",cefr:"A2",note:"Daha iyi hale getirmek"},include:{tr:"İçermek, Dahil etmek",pos:"verb",cefr:"A2",note:"Kapsamak"},intend:{tr:"Niyet etmek, Amaçlamak",pos:"verb",cefr:"B1",note:"Hedeflemek"},manage:{tr:"Yönetmek, Başarmak",pos:"verb",cefr:"B1",note:"Üstesinden gelmek"},mention:{tr:"Bahsetmek, Değinmek",pos:"verb",cefr:"B1",note:"Adını geçirmek"},notice:{tr:"Fark etmek",pos:"verb/noun",cefr:"A2",note:"Görmek, ayırtına varmak"},offer:{tr:"Teklif etmek, Sunmak",pos:"verb/noun",cefr:"A2",note:"Öneri sunmak"},participate:{tr:"Katılmak",pos:"verb",cefr:"B1",note:"Yer almak"},prefer:{tr:"Tercih etmek",pos:"verb",cefr:"A2",note:"Yeğlemek"},prepare:{tr:"Hazırlamak, Hazırlanmak",pos:"verb",cefr:"A2",note:"Önceden hazır etmek"},prevent:{tr:"Önlemek, Engel olmak",pos:"verb",cefr:"B1",note:"Oluşmasını engellemek"},provide:{tr:"Sağlamak, Temin etmek",pos:"verb",cefr:"B1",note:"Sunmak"},receive:{tr:"Almak, Kabul etmek",pos:"verb",cefr:"A2",note:"Gelen şeyi almak"},recommend:{tr:"Tavsiye etmek, Önermek",pos:"verb",cefr:"A2",note:"Öneri vermek"},refuse:{tr:"Reddetmek",pos:"verb",cefr:"B1",note:"Kabul etmemek"},remind:{tr:"Hatırlatmak",pos:"verb",cefr:"A2",note:"Aklına getirmek"},remember:{tr:"Hatırlamak",pos:"verb",cefr:"A1",note:"Unutmamak"},require:{tr:"Gerektirmek, İstemek",pos:"verb",cefr:"B1",note:"Gerekli kılmak"},suggest:{tr:"Önermek, Telkin etmek",pos:"verb",cefr:"B1",note:"Fikir vermek"},support:{tr:"Desteklemek",pos:"verb/noun",cefr:"A2",note:"Yardımcı olmak"},understand:{tr:"Anlamak",pos:"verb",cefr:"A1",note:"Kavramak"},understood:{tr:"Anladı",pos:"verb",cefr:"A1",note:"Understand geçmiş hali"},important:{tr:"Önemli",pos:"adj",cefr:"A1",note:"Büyük değer taşıyan"},necessary:{tr:"Gerekli, Zorunlu",pos:"adj",cefr:"A2",note:"Olmazsa olmaz"},difficult:{tr:"Zor, Güç",pos:"adj",cefr:"A1",note:"Kolay olmayan"},easy:{tr:"Kolay, Basit",pos:"adj",cefr:"A1",note:"Zor olmayan"},possible:{tr:"Mümkün, Olası",pos:"adj",cefr:"A2",note:"Gerçekleşebilir"},impossible:{tr:"İmkansız",pos:"adj",cefr:"A2",note:"Olamaz"},available:{tr:"Mevcut, Müsait",pos:"adj",cefr:"A2",note:"Kullanıma hazır"},similar:{tr:"Benzer",pos:"adj",cefr:"A2",note:"Benzeşen"},different:{tr:"Farklı",pos:"adj",cefr:"A1",note:"Aynı olmayan"},frequent:{tr:"Sık, Sıkça olan",pos:"adj",cefr:"B1",note:"Sık tekrarlanan"},rare:{tr:"Nadir, Ender",pos:"adj",cefr:"A2",note:"Az bulunan"},careful:{tr:"Dikkatli",pos:"adj",cefr:"A1",note:"Özen gösteren"},careless:{tr:"Dikkatsiz, Özensiz",pos:"adj",cefr:"A2",note:"Hata yapan"},polite:{tr:"Kibar, Nazik",pos:"adj",cefr:"A1",note:"Görgülü"},rude:{tr:"Kaba, Nezaketsiz",pos:"adj",cefr:"A2",note:"Kırıcı"},patient:{tr:"Sabırlı / Hasta",pos:"adj/noun",cefr:"B1",note:"Sabır gösteren veya hastane hastası"},confident:{tr:"Özgüvenli, Kendinden emin",pos:"adj",cefr:"B1",note:"Güveni tam"},anxious:{tr:"Endişeli, Kaygılı",pos:"adj",cefr:"B1",note:"Huzursuz"},fluent:{tr:"Akıcı (konuşma)",pos:"adj",cefr:"B1",note:"Takılmadan konuşabilen"},accurate:{tr:"Doğru, İsabetli",pos:"adj",cefr:"B1",note:"Hatasız"},although:{tr:"-e rağmen, Karşın",pos:"conjunction",cefr:"B1",note:"Zıtlık bağlacı"},though:{tr:"-e rağmen, Yine de",pos:"conjunction/adv",cefr:"B1",note:"Cümle sonunda: gerçi"},"even though":{tr:"-dığı halde, -e rağmen",pos:"conjunction",cefr:"B1",note:"Güçlü zıtlık"},however:{tr:"Ancak, Yine de",pos:"conjunction/adv",cefr:"A2",note:"Zıt fikir bildirir"},therefore:{tr:"Bu nedenle, Dolayısıyla",pos:"adverb",cefr:"B1",note:"Sonuç bildiren bağlaç"},furthermore:{tr:"Ayrıca, Dahası",pos:"adverb",cefr:"B2",note:"Ek bilgi bağlacı"},moreover:{tr:"Dahası, Üstelik",pos:"adverb",cefr:"B2",note:"Pekiştirme bağlacı"},meanwhile:{tr:"Bu sırada, O esnada",pos:"adverb",cefr:"B1",note:"Aynı anda gerçekleşen olaylar"},besides:{tr:"Ayrıca, -den başka",pos:"preposition/adv",cefr:"B1",note:"Bunun yanında"},otherwise:{tr:"Aksi takdirde, Yoksa",pos:"adverb",cefr:"B1",note:"Şartın gerçekleşmemesi durumu"},unless:{tr:"-medikçe, -mazsa",pos:"conjunction",cefr:"B1",note:"If not anlamına gelir"},since:{tr:"-den beri / Çünkü",pos:"preposition/conj",cefr:"A2",note:"Zaman veya sebep belirtir"},while:{tr:"-iken, Sırasında",pos:"conjunction",cefr:"A2",note:"Süreç bildiren bağlaç"},whereas:{tr:"Oysa, Halbuki",pos:"conjunction",cefr:"B2",note:"Karşılaştırmalı zıtlık"},despite:{tr:"-e rağmen",pos:"preposition",cefr:"B1",note:"Kendinden sonra isim/fiil-ing alır"},"in spite of":{tr:"-e rağmen",pos:"preposition",cefr:"B1",note:"Despite ile eşanlamlıdır"},"so that":{tr:"-sın diye, Amacıyla",pos:"conjunction",cefr:"B1",note:"Amaç bildiren bağlaç"},"in order to":{tr:"-mek için",pos:"conjunction",cefr:"B1",note:"Amaç bildirir (+ V1)"},passive:{tr:"Edilgen çatı (Yapıldı)",pos:"grammar",cefr:"B1",note:"Özne değil yapılan iş ön planda"},conditional:{tr:"Şart/Koşul cümlesi (If...)",pos:"grammar",cefr:"B1",note:"Eğer ile başlayan olasılıklar"},inversion:{tr:"Devrik yapı",pos:"grammar",cefr:"B2",note:"Vurgu için yardımcı fiilin başa gelmesi"},modal:{tr:"Kip/Yardımcı fiil (can, must, should)",pos:"grammar",cefr:"A2",note:"Gereklilik/olasılık yardımcı fiilleri"},gerund:{tr:"Fiilimsi (-ing ekiyle isimleşen fiil)",pos:"grammar",cefr:"B1",note:"Swimming is good"},infinitive:{tr:"Mastar hali (to + V1)",pos:"grammar",cefr:"A2",note:"To go, to learn"}};class te{constructor(){this.customCache=new Map,this.floatingEl=null,this.isListeningGlobal=!1,this.activeWord=null,this.lastDblClickTime=0}lookup(e){if(!e)return null;const t=e.trim().toLowerCase().replace(/[.,!?;:"'()\[\]{}]/g,"");if(!t||t.length<2)return null;if(this.customCache.has(t))return this.customCache.get(t);if(L[t]){const s={word:t,...L[t]};return this.customCache.set(t,s),s}(!z.vocabulary_items||z.vocabulary_items.length===0)&&D();const i=z.vocabulary_items||[],a=i.find(s=>s.word&&s.word.toLowerCase()===t);if(a){const s={word:a.word,tr:a.definition_tr||a.definition_en,pos:a.part_of_speech||"kelime",cefr:a.cefr_level||"A1",phonetic:a.phonetic,example:Array.isArray(a.example_sentences)?a.example_sentences[0]:null,note:a.collocations?`Kalıp: ${Array.isArray(a.collocations)?a.collocations.slice(0,3).join(", "):""}`:null};return this.customCache.set(t,s),s}const n=this.generateLemmas(t);for(const s of n){if(L[s]){const o={word:t,baseWord:s,...L[s],note:`Kök: ${s}`};return this.customCache.set(t,o),o}const r=i.find(o=>o.word&&o.word.toLowerCase()===s);if(r){const o={word:t,baseWord:r.word,tr:r.definition_tr||r.definition_en,pos:r.part_of_speech||"kelime",cefr:r.cefr_level||"A1",phonetic:r.phonetic,note:`Kök: ${r.word}`};return this.customCache.set(t,o),o}}return null}generateLemmas(e){const t=[];return e.endsWith("ing")&&e.length>5&&(t.push(e.slice(0,-3)),t.push(e.slice(0,-3)+"e")),e.endsWith("ied")&&e.length>4&&t.push(e.slice(0,-3)+"y"),e.endsWith("ed")&&e.length>4&&(t.push(e.slice(0,-2)),t.push(e.slice(0,-1))),e.endsWith("ies")&&e.length>4&&t.push(e.slice(0,-3)+"y"),e.endsWith("es")&&e.length>4&&(t.push(e.slice(0,-2)),t.push(e.slice(0,-1))),e.endsWith("s")&&!e.endsWith("ss")&&e.length>3&&t.push(e.slice(0,-1)),e.endsWith("ly")&&e.length>4&&t.push(e.slice(0,-2)),t}extractQuestionKeywords(e){if(!e)return[];const t=`${e.question||""} ${(e.options||[]).join(" ")} ${e.topic||""}`,i=t.toLowerCase().replace(/[^a-z\s-]/g," ").split(/\s+/).filter(s=>s.length>3),a=new Map,n=["under the weather","happy birthday","take out","went out","turn-taking","make a mistake","make progress"];for(const s of n)if(t.toLowerCase().includes(s)){const r=this.lookup(s);r&&a.set(s,r)}for(const s of i){if(a.size>=6)break;const r=this.lookup(s);r&&!a.has(r.word)&&a.set(r.word,r)}return Array.from(a.values()).filter(Boolean)}renderQuestionVocabBar(e){const t=this.extractQuestionKeywords(e);return!t||t.length===0?"":`
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
    `}bindVocabDrawerEvents(e){e&&(e.querySelectorAll(".vocab-drawer-toggle").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault();const a=t.closest(".question-vocab-drawer"),n=a==null?void 0:a.querySelector(".vocab-drawer-body"),s=a==null?void 0:a.querySelector(".drawer-chevron");if(n){const r=n.style.display!=="none";n.style.display=r?"none":"block",s&&(s.textContent=r?"▼":"▲"),a.classList.toggle("expanded",!r)}})}),e.querySelectorAll(".hint-tts").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const a=t.dataset.word;a&&A.speak(a)})}),e.querySelectorAll(".hint-save").forEach(t=>{t.addEventListener("click",async i=>{i.stopPropagation();const a=t.dataset.word,n=t.dataset.tr,s=t.dataset.cefr;a&&(await x.addCustomWord(a,n,s),t.textContent="✓ Eklendi",t.classList.add("saved"),m.showToast(`"${a}" kelime kartlarınıza eklendi! 📚`,"success"))})}))}getWordAtPoint(e,t){let i=null,a=0;if(document.caretRangeFromPoint){const n=document.caretRangeFromPoint(e,t);n&&(i=n.startContainer,a=n.startOffset)}else if(document.caretPositionFromPoint){const n=document.caretPositionFromPoint(e,t);n&&(i=n.offsetNode,a=n.offset)}if(i&&i.nodeType===Node.TEXT_NODE){const n=i.textContent||"";if(!n)return"";let s=a,r=a;for(;s>0&&/[\w'-]/.test(n[s-1]);)s--;for(;r<n.length&&/[\w'-]/.test(n[r]);)r++;return n.slice(s,r)}return""}async fetchOnlineTranslation(e){var i,a,n;const t=e.toLowerCase().trim();if(!t||t.length<2)return null;try{const s=new AbortController,r=setTimeout(()=>s.abort(),2600),o=await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(t)}&langpair=en|tr`,{signal:s.signal});if(clearTimeout(r),o.ok){const l=await o.json(),d=(i=l==null?void 0:l.responseData)==null?void 0:i.translatedText;if(d&&d.toLowerCase()!==t){const u={word:t,tr:d,pos:"kelime",cefr:"Sözlük",note:"Otomatik Çeviri"};return this.customCache.set(t,u),u}}}catch{}try{const s=new AbortController,r=setTimeout(()=>s.abort(),2e3),o=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURIComponent(t)}`,{signal:s.signal});if(clearTimeout(r),o.ok){const l=await o.json(),d=(n=(a=l==null?void 0:l[0])==null?void 0:a[0])==null?void 0:n[0];if(d&&d.toLowerCase()!==t){const u={word:t,tr:d,pos:"kelime",cefr:"Sözlük",note:"Google Çeviri"};return this.customCache.set(t,u),u}}}catch{}return null}async inspectWord(e,t){if(!e)return;const i=e.toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g,"").trim();if(!i||i.length<2)return;this.activeWord=i;const a=this.lookup(i);if(a){this.showFloatingPopover(a,t);return}const n={word:i,tr:"Anlamı aranıyor... ⏳",pos:"kelime",cefr:"Aranıyor",isLoading:!0};this.showFloatingPopover(n,t);const s=await this.fetchOnlineTranslation(i);this.activeWord===i&&this.floatingEl&&this.floatingEl.style.display!=="none"&&(s?this.updateFloatingPopoverContent(s):this.updateFloatingPopoverContent({word:i,tr:"Anlam bulunamadı (Çevrimdışı)",pos:"kelime",cefr:"Genel",note:"Sesli telaffuzunu dinleyebilir veya kartlarınıza ekleyebilirsiniz."}))}initGlobalListener(){if(this.isListeningGlobal)return;this.isListeningGlobal=!0;let e=document.getElementById("floating-word-inspector");e||(e=document.createElement("div"),e.id="floating-word-inspector",e.className="floating-word-inspector",e.style.display="none",document.body.appendChild(e)),this.floatingEl=e,document.addEventListener("dblclick",t=>{if(this.floatingEl&&this.floatingEl.contains(t.target))return;this.lastDblClickTime=Date.now();let i="";const a=window.getSelection();a&&a.toString().trim()&&(i=a.toString().trim()),i||(i=this.getWordAtPoint(t.clientX,t.clientY)),i&&this.inspectWord(i,{x:t.pageX,y:t.pageY,clientX:t.clientX,clientY:t.clientY})},!0),document.addEventListener("mouseup",t=>{this.floatingEl&&this.floatingEl.contains(t.target)||Date.now()-this.lastDblClickTime<400||setTimeout(()=>{const i=window.getSelection(),a=i?i.toString().trim():"";a&&a.length>=2&&a.length<=45&&a.includes(" ")&&this.inspectWord(a,{x:t.pageX,y:t.pageY,clientX:t.clientX,clientY:t.clientY})},80)}),document.addEventListener("mousedown",t=>{this.floatingEl&&this.floatingEl.style.display!=="none"&&(this.floatingEl.contains(t.target)||Date.now()-this.lastDblClickTime>250&&this.hideFloatingPopover())}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.hideFloatingPopover()})}showFloatingPopover(e,t={}){if(!this.floatingEl)return;this.renderPopoverHtml(e);const i=310,a=140;let n=t.x!==void 0?t.x:window.innerWidth/2,s=t.y!==void 0?t.y:window.innerHeight/2,r=n-i/2;r=Math.max(12,Math.min(window.innerWidth-i-12,r));let o=s-a-20;o<window.scrollY+10&&(o=s+25),this.floatingEl.style.top=`${Math.max(10,o)}px`,this.floatingEl.style.left=`${r}px`,this.floatingEl.style.display="block",this.bindPopoverButtons(e)}updateFloatingPopoverContent(e){this.floatingEl&&(this.renderPopoverHtml(e),this.bindPopoverButtons(e))}renderPopoverHtml(e){const t=e.isLoading;this.floatingEl.innerHTML=`
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
    `}bindPopoverButtons(e){var t,i,a;(t=document.getElementById("popover-close"))==null||t.addEventListener("click",n=>{n.stopPropagation(),this.hideFloatingPopover()}),(i=document.getElementById("popover-listen"))==null||i.addEventListener("click",n=>{n.stopPropagation(),A.speak(e.word)}),(a=document.getElementById("popover-add"))==null||a.addEventListener("click",async n=>{n.stopPropagation(),await x.addCustomWord(e.word,e.tr,e.cefr||"A1"),m.showToast(`"${e.word}" kelime kartlarınıza kaydedildi! 📚`,"success");const s=document.getElementById("popover-add");s&&(s.textContent="✓ Kaydedildi",s.style.background="rgba(16, 185, 129, 0.3)",s.style.color="#34d399")})}hideFloatingPopover(){this.floatingEl&&(this.floatingEl.style.display="none",this.activeWord=null)}}const $=new te;class ie{constructor(){this.container=null,this.assessmentId=null,this.skills=["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],this.skillNamesTr={grammar:"Dilbilgisi (Grammar)",vocabulary:"Kelime Haznesi (Vocabulary)",reading:"Okuma & Anlama (Reading)",listening:"Dinleme & Algılama (Listening)",writing:"Yazma Becerisi (Writing)",speaking:"Konuşma & Akıcılık (Speaking)",pronunciation:"Telaffuz & Aksan (Pronunciation)",sentence_formation:"Cümle Kurma (Syntax)",comprehension:"Kavrama Hızı (Comprehension)",communication:"Doğal İletişim (Communication)"},this.currentSkillIndex=0,this.currentQuestions=[],this.currentQuestionIndex=0,this.selectedOption=null,this.assessmentResults=null}async render(e){this.container=e,this.renderIntro()}renderIntro(){var e,t;this.container.innerHTML=`
      <div class="assessment-intro-wrapper">
        <div class="card assessment-intro-card">
          <div class="assessment-badge-pill">Avrupa Konseyi CEFR & Cambridge Standartları (A1 - C2)</div>
          <h1 class="assessment-title">10 Becerili Profesyonel Seviye Sınavı</h1>
          <p class="assessment-desc">
            Bu değerlendirme; Cambridge English, Oxford Placement Test ve CEFR resmi yetkinlik tanımlayıcıları esas alınarak hazırlanmıştır. İngilizce anlama ve üretme kapasitenizi A1'den C2'ye kadar 10 temel boyutta bağımsız olarak ölçer:
          </p>
          <div class="skills-preview-grid">
            <div class="skill-tag-pill">📖 Dilbilgisi (Grammar)</div>
            <div class="skill-tag-pill">📚 Kelime Haznesi (Lexis)</div>
            <div class="skill-tag-pill">📰 Okuma & Anlama (Reading)</div>
            <div class="skill-tag-pill">🎧 Dinleme Algısı (Listening)</div>
            <div class="skill-tag-pill">✍️ Yazma & Bağlaçlar (Writing)</div>
            <div class="skill-tag-pill">🗣️ Konuşma Akıcılığı (Speaking)</div>
            <div class="skill-tag-pill">🎙️ Telaffuz & Fonetik (Pronunciation)</div>
            <div class="skill-tag-pill">🧩 Cümle Sentaksı (Syntax)</div>
            <div class="skill-tag-pill">💡 Kavrama & Düşünme (Comprehension)</div>
            <div class="skill-tag-pill">🤝 Doğal İletişim (Pragmatics)</div>
          </div>
          <div class="assessment-notice">
            <span class="notice-icon">💡</span>
            <span>Her beceride A1'den C2'ye kadar kademeli 5'er soru (toplam 50 soru) yer alır. Yaklaşık 10-15 dakika sürer. İsterseniz sınava girebilir, isterseniz doğrudan 0'dan (A1) başlayabilirsiniz.</span>
          </div>
          <div class="assessment-actions-row">
            <button class="btn btn-primary btn-lg" id="start-assessment-btn">
              🎯 Kapsamlı Sınava Başla (50 Soru / 10-15 Dk) →
            </button>
            <button class="btn btn-secondary btn-lg" id="skip-assessment-btn">
              🚀 Sınavı Atla, Doğrudan 0'dan (A1) Başla
            </button>
          </div>
        </div>
      </div>
    `,(e=document.getElementById("start-assessment-btn"))==null||e.addEventListener("click",()=>this.startAssessment()),(t=document.getElementById("skip-assessment-btn"))==null||t.addEventListener("click",async()=>{await x.skipAssessmentToA1(),m.showToast("Başlangıç seviyeniz A1 olarak ayarlandı. 0'dan eğitime hazırsınız! 🚀","success"),m.setView("dashboard")})}async startAssessment(){this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Seviye belirleme sınav motoru başlatılıyor...</p>
      </div>
    `;try{const e=await x.startAssessment();this.assessmentId=e.assessmentId,this.currentSkillIndex=0,await this.loadSkillQuestions()}catch(e){m.showToast("Sınav başlatılamadı: "+e.message,"error"),this.renderIntro()}}async loadSkillQuestions(){const e=this.skills[this.currentSkillIndex],t=this.skillNamesTr[e]||e;this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>${t} soruları hazırlanıyor...</p>
      </div>
    `;try{const i=await x.getAssessmentQuestions(this.assessmentId,e);this.currentQuestions=i.questions||[],this.currentQuestionIndex=0,this.currentQuestions.length===0?this.nextSkill():this.renderQuestion()}catch(i){m.showToast("Hata: "+i.message,"error"),this.nextSkill()}}renderQuestion(){const e=this.skills[this.currentSkillIndex],t=this.skillNamesTr[e]||e,i=this.currentQuestions[this.currentQuestionIndex];this.selectedOption=null;const a=Math.max(this.currentQuestions.length,1),n=this.currentSkillIndex*a+this.currentQuestionIndex,s=this.skills.length*a,r=Math.min(100,Math.round(n/s*100));this.container.innerHTML=`
      <div class="question-container">
        <!-- Header Progress -->
        <div class="assessment-topbar">
          <div class="assessment-skill-indicator">
            <span class="skill-name-badge">${t}</span>
            <span class="skill-step">Beceri: ${this.currentSkillIndex+1} / ${this.skills.length} · Soru: ${this.currentQuestionIndex+1} / ${this.currentQuestions.length}</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: ${Math.min(r,100)}%;"></div>
          </div>
          <span class="progress-pct">%${Math.min(r,100)}</span>
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
          ${$.renderQuestionVocabBar(i)}

          <div class="question-options-list">
            ${(i.options||[]).map((o,l)=>{const d=(o||"").toString().replace(/^["']|["']$/g,"");return`
                <div class="option-item" role="button" tabindex="0" data-index="${l}">
                  <span class="option-letter">${String.fromCharCode(65+l)}</span>
                  <span class="option-label">${d}</span>
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
    `,this.bindQuestionEvents(i)}bindQuestionEvents(e){var t,i;(t=document.getElementById("listen-question-btn"))==null||t.addEventListener("click",()=>{A.speak(e.question,{rate:.9})}),$.bindVocabDrawerEvents(this.container),document.querySelectorAll(".option-item").forEach(a=>{const n=()=>{document.querySelectorAll(".option-item").forEach(o=>o.classList.remove("selected")),a.classList.add("selected");const s=parseInt(a.dataset.index,10);this.selectedOption=(e.options||[])[s];const r=document.getElementById("submit-answer-btn");r&&(r.disabled=!1)};a.addEventListener("click",n),a.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n())})}),(i=document.getElementById("submit-answer-btn"))==null||i.addEventListener("click",()=>{this.selectedOption!==null&&this.selectedOption!==void 0&&this.submitAnswer(e.id,this.selectedOption)})}async submitAnswer(e,t){const i=document.getElementById("submit-answer-btn");i&&(i.disabled=!0,i.textContent="Kontrol ediliyor...");try{const a=await x.submitAssessmentAnswer(this.assessmentId,e,t);this.showQuestionFeedback(a)}catch(a){m.showToast("Cevap kaydedilemedi: "+a.message,"error"),i&&(i.disabled=!1,i.textContent="Cevabı Onayla →")}}showQuestionFeedback(e){var n;const t=document.getElementById("feedback-card");if(!t)return;const i=document.getElementById("submit-answer-btn");i&&(i.style.display="none");const a=this.currentSkillIndex===this.skills.length-1&&this.currentQuestionIndex===this.currentQuestions.length-1;t.className=`card feedback-card ${e.isCorrect?"correct":"incorrect"}`,t.innerHTML=`
      <div class="feedback-header">
        <span class="feedback-icon">${e.isCorrect?"✅":"❌"}</span>
        <h3 class="feedback-title">${e.isCorrect?"Doğru Cevap!":"Yanlış Cevap"}</h3>
      </div>
      <div class="feedback-body">
        ${e.isCorrect?"":`<p class="correct-answer-text"><strong>Doğru seçenek:</strong> ${e.correctAnswer}</p>`}
        <p class="explanation-text">${e.explanationTr||e.explanation||""}</p>
      </div>
      <button class="btn btn-primary btn-lg" id="btn-next-question">
        ${a?"🎉 Sınavı Bitir ve Seviyemi Belirle →":"Sonraki Soruya Geç →"}
      </button>
    `,t.style.display="block",t.scrollIntoView({behavior:"smooth",block:"nearest"}),(n=document.getElementById("btn-next-question"))==null||n.addEventListener("click",()=>{this.currentQuestionIndex++,this.currentQuestionIndex<this.currentQuestions.length?this.renderQuestion():this.nextSkill()})}async nextSkill(){this.currentSkillIndex++,this.currentSkillIndex<this.skills.length?await this.loadSkillQuestions():await this.finishAssessment()}async finishAssessment(){this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Seviye karneniz ve öğrenme haritanız hesaplanıyor...</p>
      </div>
    `;try{this.assessmentResults=await x.completeAssessment(this.assessmentId),this.renderResults()}catch(e){m.showToast("Sonuçlar hesaplanırken hata: "+e.message,"error"),this.renderIntro()}}renderResults(){var i;const e=this.assessmentResults,t=e.overallCEFR||"A1";this.container.innerHTML=`
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
            ${Object.entries(e.skills||{}).map(([a,n])=>`
                <div class="result-skill-row">
                  <div class="result-skill-name">${this.skillNamesTr[a]||a}</div>
                  <div class="result-skill-bar">
                    <div class="result-skill-fill" style="width: ${Math.max(n.score,10)}%;"></div>
                  </div>
                  <span class="cefr-tag ${n.level||"A1"}">${n.level||"A1"}</span>
                </div>
              `).join("")}
          </div>
        </div>
      </div>
    `,(i=document.getElementById("btn-go-dashboard"))==null||i.addEventListener("click",()=>{m.setView("dashboard")})}}class ae{constructor(){this.container=null,this.topics=[],this.selectedTopic=null,this.activeCategory="all",this.currentExerciseIndex=0,this.exercises=[],this.selectedOption=null,this.categoryLabelsTr={all:"Tüm Konular",tenses:"Zamanlar",modals:"Kipler (Modals)",clauses:"Yan Cümleler",determiners:"Belirteçler",prepositions:"Edatlar",sentence_structure:"Cümle Yapısı"}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Gramer Akademisi müfredatı yükleniyor...</p>
      </div>
    `;try{const t=await x.getGrammarTopics();this.topics=Array.isArray(t)?t:t.topics||[],this.topics.length>0&&!this.selectedTopic?await this.loadTopic(this.topics[0].slug):this.renderLayout()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Gramer konuları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadTopic(e){try{const t=await x.getGrammarTopic(e);this.selectedTopic=t.topic,this.exercises=t.exercises||[],this.currentExerciseIndex=0,this.selectedOption=null,this.renderLayout()}catch(t){m.showToast("Konu detayları yüklenemedi: "+t.message,"error")}}renderLayout(){const e=this.selectedTopic,t=e&&e.examples?typeof e.examples=="string"?JSON.parse(e.examples):e.examples:[],i=e&&e.rules?typeof e.rules=="string"?JSON.parse(e.rules):e.rules:[],a=e&&e.common_mistakes?typeof e.common_mistakes=="string"?JSON.parse(e.common_mistakes):e.common_mistakes:[],n=["all","tenses","modals","clauses","determiners","prepositions","sentence_structure"],s=this.activeCategory==="all"?this.topics:this.topics.filter(r=>r.category===this.activeCategory);this.container.innerHTML=`
      <div class="grammar-layout">
        <!-- Sidebar: Topics List -->
        <aside class="grammar-sidebar card">
          <div class="grammar-sidebar-header">
            <h3>Gramer Müfredatı</h3>
            <span class="topic-count">${this.topics.length} Konu</span>
          </div>

          <!-- Category filter tabs -->
          <div class="category-tabs">
            ${n.map(r=>`
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
            ${a.length>0?`
              <div class="card topic-mistakes-card">
                <h3 class="section-title">⚠️ Sık Yapılan Hatalar & Türkçeden Kaynaklanan Yanılgılar</h3>
                <div class="mistakes-grid">
                  ${a.map(r=>`
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
    `,this.bindEvents()}renderExerciseSandbox(){const e=this.exercises[this.currentExerciseIndex];if(!e)return"";const t=e.prompt||e.question||e.sentence||"Cümle yüklenemedi.",i=e.options?typeof e.options=="string"?JSON.parse(e.options):e.options:null;let a="Aşağıdaki alıştırmayı tamamlayın:";return e.exercise_type==="fill_blank"?a="Boşluğa gelecek uygun kelime veya çekimi yazın:":e.exercise_type==="multiple_choice"?a="Aşağıdaki cümleyi en uygun seçenekle tamamlayın:":e.exercise_type==="error_correction"?a="Cümledeki hatayı bulun ve cümlenin doğru halini yazın:":e.exercise_type==="sentence_transform"?a="Cümleyi parantez içindeki talimata göre dönüştürün:":e.exercise_type==="sentence_creation"&&(a="İstenen kurala uygun bir İngilizce cümle kurun:"),`
      <div class="exercise-sandbox">
        <div class="exercise-prompt-wrap">
          <div class="exercise-instruction">${a}</div>
          <div class="exercise-prompt">${t}</div>
        </div>

        <!-- Vocabulary & Structure Hints -->
        ${$.renderQuestionVocabBar({question:t,options:i,id:e.id})}

        ${i?`
          <div class="exercise-options-grid">
            ${i.map((n,s)=>`
              <button class="exercise-opt-btn" data-opt-idx="${s}" data-value="${n}">
                <span class="opt-prefix">${String.fromCharCode(65+s)}</span>
                <span class="opt-text">${n}</span>
              </button>
            `).join("")}
          </div>
        `:`
          <div class="fill-blank-wrap">
            <input type="text" class="form-input exercise-input" id="exercise-input" placeholder="Cevabınızı buraya yazın..." autocomplete="off" />
          </div>
        `}

        <div class="exercise-actions">
          <button class="btn btn-primary" id="btn-check-exercise" disabled>
            Cevabı Kontrol Et →
          </button>
        </div>

        <div class="exercise-feedback-box" id="exercise-feedback" style="display: none;"></div>
      </div>
    `}bindEvents(){var t;document.querySelectorAll(".topic-nav-item").forEach(i=>{i.addEventListener("click",()=>{const a=i.dataset.slug;a&&this.loadTopic(a)})}),document.querySelectorAll(".cat-tab").forEach(i=>{i.addEventListener("click",()=>{this.activeCategory=i.dataset.cat,this.renderLayout()})}),document.querySelectorAll(".tts-play-btn").forEach(i=>{i.addEventListener("click",()=>{const a=i.dataset.text;a&&A.speak(a)})}),$.bindVocabDrawerEvents(this.container),document.querySelectorAll(".exercise-opt-btn").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".exercise-opt-btn").forEach(n=>n.classList.remove("selected")),i.classList.add("selected"),this.selectedOption=i.dataset.value;const a=document.getElementById("btn-check-exercise");a&&(a.disabled=!1)})});const e=document.getElementById("exercise-input");e==null||e.addEventListener("input",i=>{this.selectedOption=i.target.value.trim();const a=document.getElementById("btn-check-exercise");a&&(a.disabled=!this.selectedOption)}),e==null||e.addEventListener("keydown",i=>{if(i.key==="Enter"){i.preventDefault();const a=i.target.value.trim();a&&(this.selectedOption=a,this.checkExerciseAnswer())}}),(t=document.getElementById("btn-check-exercise"))==null||t.addEventListener("click",()=>{this.selectedOption&&this.checkExerciseAnswer()})}async checkExerciseAnswer(){var i;const e=this.exercises[this.currentExerciseIndex];if(!e)return;const t=document.getElementById("btn-check-exercise");t&&(t.disabled=!0);try{const a=await x.submitGrammarExercise(e.id,this.selectedOption),n=document.getElementById("exercise-feedback");if(!n)return;n.className=`exercise-feedback-box ${a.isCorrect?"correct":"incorrect"}`,n.innerHTML=`
        <div class="feedback-title">${a.isCorrect?"✅ Harika! Doğru Cevap (+15 XP)":"❌ Yanlış Cevap"}</div>
        <div class="feedback-desc">${a.feedback}</div>
        ${a.explanationTr?`<div class="feedback-tr">${a.explanationTr}</div>`:""}
        ${this.currentExerciseIndex+1<this.exercises.length?`
          <button class="btn btn-primary btn-sm" id="btn-next-exercise" style="margin-top: 10px;">
            Sonraki Alıştırma →
          </button>
        `:`
          <p style="margin-top: 10px; color: #a5b4fc; font-weight: 600;">🎉 Bu konudaki tüm alıştırmaları tamamladınız!</p>
        `}
      `,n.style.display="block",(i=document.getElementById("btn-next-exercise"))==null||i.addEventListener("click",()=>{this.currentExerciseIndex++,this.selectedOption=null;const s=document.querySelector(".topic-sandbox-card");s&&(s.innerHTML=`
            <div class="card-header">
              <div>
                <h3 class="card-title">✏️ Alıştırma ve Pekiştirme</h3>
                <div class="card-subtitle">Bu gramer yapısını pratik yaparak pekiştirin</div>
              </div>
              <span class="exercise-progress">Alıştırma ${this.currentExerciseIndex+1} / ${this.exercises.length}</span>
            </div>
            ${this.renderExerciseSandbox()}
          `,this.bindEvents())})}catch(a){m.showToast("Cevap kontrol edilemedi: "+a.message,"error"),t&&(t.disabled=!1)}}}class ne{constructor(){this.container=null,this.mode="review",this.reviewItems=[],this.currentIndex=0,this.isCardFlipped=!1,this.reviewLevel="all",this.dueByLevel={all:0,A1:0,A2:0,B1:0,B2:0,C1:0},this.totalByLevel={all:0,A1:0,A2:0,B1:0,B2:0,C1:0},this.dictionaryItems=[],this.searchQuery="",this.levelFilter="all",this.onlineSearchResult=null,this.isSearchingOnline=!1,this.onlineSearchError=null,this.audioElement=null,this.keyHandler=null}async render(e){var t;this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>1.000+ kelimelik CEFR kütüphanesi ve çalışma kartlarınız yükleniyor...</p>
      </div>
    `;try{await this.loadQueueData();const i=await x.getVocabularyItems();this.dictionaryItems=i.items||[],this.renderContent()}catch(i){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Kelimeler yüklenemedi</h3>
          <p>${i.message}</p>
          <button class="btn btn-primary" id="retry-vocab-btn">Tekrar Dene</button>
        </div>
      `,(t=document.getElementById("retry-vocab-btn"))==null||t.addEventListener("click",()=>this.render(e))}}async loadQueueData(){const e=await x.getReviewQueue(this.reviewLevel);this.reviewItems=e.items||[],this.dueByLevel=e.dueByLevel||{all:0,A1:0,A2:0,B1:0,B2:0,C1:0},this.totalByLevel=e.totalByLevel||{all:0,A1:0,A2:0,B1:0,B2:0,C1:0}}getActiveReviewItems(){return!this.reviewLevel||this.reviewLevel==="all"?this.reviewItems:this.reviewItems.filter(e=>(e.cefr_level||"").toUpperCase()===this.reviewLevel.toUpperCase())}renderContent(){const e=this.dictionaryItems.length||this.totalByLevel.all||1002,t=this.dueByLevel.all||this.reviewItems.length;this.container.innerHTML=`
      <div class="vocab-layout">
        <!-- Mode Switcher & Stats Header -->
        <div class="vocab-header card">
          <div class="vocab-header-left">
            <h1 class="vocab-title">Akıllı Kelime Kartları & Sözlük Arşivi</h1>
            <p class="vocab-subtitle">1.000+ kelimelik devasa CEFR arşivi, seviye bazlı çalışma & canlı internet sözlüğü</p>
          </div>
          <div class="vocab-mode-toggles">
            <button class="btn ${this.mode==="review"?"btn-primary":"btn-secondary"}" id="toggle-review-mode">
              <span>🗂️ Tekrar Bekleyenler</span>
              <span class="btn-badge">${t}</span>
            </button>
            <button class="btn ${this.mode==="dictionary"?"btn-primary":"btn-secondary"}" id="toggle-dict-mode">
              <span>📖 Kelime Kütüphanesi</span>
              <span class="btn-badge">${e}</span>
            </button>
            <button class="btn ${this.mode==="online"?"btn-primary":"btn-secondary"}" id="toggle-online-mode">
              <span>🌐 İnternet Sözlüğü</span>
            </button>
          </div>
        </div>

        <!-- Quick Level Pack Loader Bar -->
        <div class="vocab-pack-toolbar card">
          <div class="pack-toolbar-info">
            <span class="pack-toolbar-icon">⚡</span>
            <div>
              <strong>Hızlı Seviye Paketi Çek:</strong>
              <span class="pack-toolbar-sub">Arşivden dilediğiniz seviyeden 25 taze kelimeyi anında çalışma kuyruğuna alın</span>
            </div>
          </div>
          <div class="pack-btn-group">
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="A1" title="25 Temel A1 Kelimesi Çek">📥 +A1 Temel (25)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="A2" title="25 Günlük Yaşam Kelimesi Çek">📥 +A2 Günlük (25)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="B1" title="25 Orta Seviye Kelimesi Çek">📥 +B1 Orta (25)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="B2" title="25 İleri Seviye Kelimesi Çek">📥 +B2 İleri (25)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="C1" title="25 Uzman Seviye Kelimesi Çek">📥 +C1 Uzman (25)</button>
            <button class="btn btn-primary btn-sm pack-load-btn" data-level="all" title="Her Seviyeden Karışık 25 Kelime Çek">🌟 +Karışık (25)</button>
          </div>
        </div>

        <div class="vocab-body" id="vocab-body">
          ${this.mode==="review"?this.renderReviewArea():this.mode==="dictionary"?this.renderDictionaryArea():this.renderOnlineArea()}
        </div>
      </div>
    `,this.bindEvents()}renderReviewArea(){const e=[{key:"all",label:"Tümü",icon:"🌟"},{key:"A1",label:"A1 Temel",icon:"🌱"},{key:"A2",label:"A2 Günlük",icon:"🌿"},{key:"B1",label:"B1 Orta",icon:"🚀"},{key:"B2",label:"B2 İleri",icon:"💎"},{key:"C1",label:"C1 Uzman",icon:"👑"}],t=this.getActiveReviewItems(),i=`
      <div class="review-toolbar card">
        <div class="review-level-tabs">
          ${e.map(r=>{const o=this.dueByLevel[r.key]!==void 0?this.dueByLevel[r.key]:0;return`
              <button class="review-level-btn ${this.reviewLevel===r.key?"active":""}" data-review-level="${r.key}" title="${r.label} seviyesindeki kelimeleri göster">
                <span>${r.icon} ${r.label}</span>
                <span class="badge-count">${o}</span>
              </button>
            `}).join("")}
        </div>

        <div class="review-actions-group">
          <button class="btn btn-secondary btn-sm btn-shuffle" id="btn-shuffle-cards" title="Kartların sırasını rastgele karıştır">
            🔀 Karıştır (Shuffle)
          </button>
          <button class="btn btn-secondary btn-sm btn-draw-fresh" id="btn-draw-fresh" title="${this.reviewLevel==="all"?"Tüm arşivden":this.reviewLevel+" seviyesinden"} 15 yeni kelime getir">
            ✨ +15 Yeni Kelime
          </button>
          <button class="btn btn-secondary btn-sm" id="btn-reset-level" title="${this.reviewLevel==="all"?"Tüm kelimeleri":this.reviewLevel+" seviyesini"} sıfırlayıp baştan çalış">
            🔄 Sıfırla
          </button>
        </div>
      </div>
    `;if(t.length===0){const r=this.reviewLevel==="all"?"Tüm Seviyelerde":`${this.reviewLevel} Seviyesinde`,o=this.totalByLevel[this.reviewLevel]||this.totalByLevel.all||0;return`
        ${i}
        <div class="card empty-review-card">
          <div class="empty-icon">🎉</div>
          <h2>${r} Tekrar Bekleyen Kart Kalmadı!</h2>
          <p>Harika ilerleme! ${this.reviewLevel==="all"?"Kuyruktaki tüm kartları gözden geçirdiniz.":`${this.reviewLevel} seviyesindeki tüm aktif kartlarınızı tamamladınız.`}</p>
          <p style="color: var(--text-muted); font-size: 13.5px; margin-top: 4px;">
            ${this.reviewLevel==="all"?"1.000+":o} kelimelik kütüphanemizden hemen yeni kelimeler çekebilir veya çalıştığınız kelimeleri sıfırlayarak baştan tekrar edebilirsiniz.
          </p>

          <div class="empty-pack-picker" style="margin-top: 1.5rem;">
            <h4>Hemen Çalışmaya Devam Edin:</h4>
            <div class="empty-pack-buttons" style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
              <button class="btn btn-primary" id="btn-empty-draw-fresh">
                ✨ Arşivden 15 Yeni ${this.reviewLevel==="all"?"":this.reviewLevel} Kelimesi Getir
              </button>
              <button class="btn btn-secondary" id="btn-empty-reset-level">
                🔄 ${this.reviewLevel==="all"?"Tüm Kelimeleri":this.reviewLevel+" Seviyesini"} Baştan Sıfırla
              </button>
            </div>
          </div>

          <div class="empty-actions-row">
            <button class="btn btn-secondary" id="switch-to-dict-btn">📖 Tüm Kelime Kütüphanesini Gör (${this.dictionaryItems.length} Kelime) →</button>
            <button class="btn btn-secondary" id="switch-to-online-btn">🌐 İnternetten Yeni Kelime Bul →</button>
          </div>
        </div>
      `}this.currentIndex>=t.length&&(this.currentIndex=0);const a=t[this.currentIndex],n=a.examples?typeof a.examples=="string"?JSON.parse(a.examples):a.examples:a.example_sentences||[],s=a.collocations?typeof a.collocations=="string"?JSON.parse(a.collocations):a.collocations:[];return`
      ${i}
      <div class="flashcard-container">
        <!-- Progress Counter -->
        <div class="flashcard-counter">
          <span>${this.reviewLevel==="all"?"Tüm Seviyeler":`${this.reviewLevel} Seviyesi`}: Kelime <strong>${this.currentIndex+1}</strong> / ${t.length}</span>
          <span class="cefr-tag ${a.cefr_level||"A1"}">${a.cefr_level||"A1"}</span>
        </div>

        <!-- 3D Flippable Flashcard -->
        <div class="flashcard ${this.isCardFlipped?"flipped":""}" id="flashcard-element">
          <!-- FRONT FACE -->
          <div class="flashcard-face flashcard-front">
            <div class="card-meta">
              <span class="pos-badge">${a.part_of_speech||"kelime"}</span>
              <button class="tts-play-btn" id="card-tts-btn" title="Telaffuzu dinle">🔊 Dinle</button>
            </div>

            <div class="target-word">${a.word}</div>
            <div class="phonetic-ipa">${a.phonetic||""}</div>
            
            <div class="card-prompt-hint">Karta tıklayarak veya Boşluk (Space) tuşuna basarak Türkçe anlamını görün 🔄</div>
          </div>

          <!-- BACK FACE -->
          <div class="flashcard-face flashcard-back">
            <div class="card-meta">
              <span class="pos-badge">${a.part_of_speech||"kelime"}</span>
              <button class="tts-play-btn" id="card-back-tts-btn" title="Tekrar dinle">🔊 Dinle</button>
            </div>

            <div class="target-word">${a.word}</div>
            <div class="phonetic-ipa">${a.phonetic||""}</div>

            <div class="def-box">
              <div class="def-tr"><strong>🇹🇷 Türkçe Anlamı:</strong> ${a.definition_tr||a.definition||""}</div>
              ${a.definition_en?`<div class="def-en"><strong>İngilizce Açıklama:</strong> ${a.definition_en}</div>`:""}
            </div>

            ${s.length>0?`
              <div class="collocations-box">
                <span class="box-label">Sık Kullanılan Birliktelikler (Collocations):</span>
                <div class="collocation-tags">
                  ${s.slice(0,5).map(r=>`<span class="colloc-tag">${r}</span>`).join("")}
                </div>
              </div>
            `:""}

            ${n.length>0?`
              <div class="example-box">
                <span class="box-label">Örnek Cümle:</span>
                <div class="example-sentence">"${n[0]}"</div>
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
          <div class="rating-prompt">Bu kelimeyi ne kadar iyi hatırladınız? (Klavye: 1, 2, 3, 4)</div>
          <div class="rating-buttons-group">
            <button class="rating-btn again" data-rating="0">
              <span class="rating-title">🔄 Tekrar Et</span>
              <span class="rating-interval">Kuyruğun sonuna ekle</span>
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
    `}renderDictionaryArea(){const e=["all","A1","A2","B1","B2","C1"],t=this.dictionaryItems.filter(i=>{const a=!this.searchQuery||i.word.toLowerCase().includes(this.searchQuery.toLowerCase())||i.definition_tr&&i.definition_tr.toLowerCase().includes(this.searchQuery.toLowerCase()),n=this.levelFilter==="all"||(i.cefr_level||"").toUpperCase()===this.levelFilter.toUpperCase();return a&&n});return`
      <div class="dict-container card">
        <div class="dict-toolbar">
          <div class="dict-search-row">
            <input type="text" class="dict-search-input" id="dict-search-input" placeholder="1.000+ kelimelik kütüphanede ara (İngilizce veya Türkçe)..." value="${this.searchQuery}">
            <button class="btn btn-primary btn-sm" id="btn-quick-online-search" title="Bu kelimeyi internet sözlüğünde ara">
              🌐 İnternette Ara
            </button>
          </div>
          
          <div class="level-filter-tabs">
            ${e.map(i=>{const a=i==="all"?this.dictionaryItems.length:this.dictionaryItems.filter(n=>(n.cefr_level||"").toUpperCase()===i).length;return`
                <button class="level-tab ${this.levelFilter===i?"active":""}" data-level="${i}">
                  ${i==="all"?`Tümü (${a})`:`${i} (${a})`}
                </button>
              `}).join("")}
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
                <th>İngilizce Tanım & Örnek</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              ${t.length===0?`
                <tr>
                  <td colspan="6" style="text-align: center; padding: 2rem;">
                    <p style="color: var(--text-muted); margin-bottom: 1rem;">"${this.searchQuery}" arşivde bulunamadı.</p>
                    <button class="btn btn-primary" id="btn-search-online-now">🌐 İnternet Sözlüğünden Ara & Ekle</button>
                  </td>
                </tr>
              `:t.slice(0,150).map(i=>{const a=i.examples?typeof i.examples=="string"?JSON.parse(i.examples):i.examples:i.example_sentences||[];return`
                  <tr>
                    <td class="dict-word-cell">
                      <strong>${i.word}</strong>
                      <span class="dict-pos">${i.part_of_speech||""}</span>
                    </td>
                    <td><span class="cefr-tag ${i.cefr_level||"A1"}">${i.cefr_level||"A1"}</span></td>
                    <td class="dict-phonetic">${i.phonetic||"-"}</td>
                    <td class="dict-def-tr"><strong>${i.definition_tr||"-"}</strong></td>
                    <td class="dict-def-en">
                      <div>${i.definition_en||"-"}</div>
                      ${a.length>0?`<div class="dict-row-example">"${a[0]}"</div>`:""}
                    </td>
                    <td>
                      <div class="dict-actions-cell">
                        <button class="dict-tts-btn" data-word="${i.word}" title="Telaffuz Dinle">🔊</button>
                        <button class="btn btn-secondary btn-xs add-to-due-btn" data-word="${i.word}" title="Bu kelimeyi çalışma kartlarına ekle">
                          ➕ Çalış
                        </button>
                      </div>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
          ${t.length>150?`
            <div style="text-align: center; padding: 12px; font-size: 13px; color: var(--text-muted);">
              Toplam ${t.length} kelimeden ilk 150 tanesi gösteriliyor. Aramayı daraltmak için yukarıdaki kutuyu kullanabilirsiniz.
            </div>
          `:""}
        </div>
      </div>
    `}renderOnlineArea(){return`
      <div class="online-dict-container card">
        <div class="online-search-header">
          <h2>🌐 Canlı İnternet Sözlüğü (500.000+ Kelime)</h2>
          <p>Dünya çapındaki Oxford & Cambridge uyumlu API ile dilediğiniz herhangi bir İngilizce kelimenin sesli telaffuzunu, detaylı anlamlarını ve örneklerini anında getirin.</p>
          
          <div class="online-search-bar">
            <input type="text" class="dict-search-input online-input" id="online-word-input" placeholder="Aramak istediğiniz İngilizce kelimeyi yazın (ör: serendipity, resilient, accomplish)..." value="${this.searchQuery}">
            <button class="btn btn-primary" id="btn-submit-online-search">
              🔍 Sözlükte Bul
            </button>
          </div>
        </div>

        <div id="online-search-status">
          ${this.isSearchingOnline?`
            <div class="online-loading-spinner">
              <div class="spinner"></div>
              <p>"${this.searchQuery}" internet sözlük arşivinden getiriliyor...</p>
            </div>
          `:""}
        </div>

        ${this.onlineSearchError?`
          <div class="card error-card" style="margin-top: 1rem;">
            <p>${this.onlineSearchError}</p>
          </div>
        `:""}

        ${this.onlineSearchResult?this.renderOnlineResultCard(this.onlineSearchResult):`
          <div class="online-suggestions card" style="margin-top: 1.5rem; background: rgba(255, 255, 255, 0.02);">
            <h4>💡 Popüler Arama Önerileri:</h4>
            <div class="suggestion-chips">
              <span class="suggestion-chip" data-word="resilient">resilient</span>
              <span class="suggestion-chip" data-word="accomplish">accomplish</span>
              <span class="suggestion-chip" data-word="serendipity">serendipity</span>
              <span class="suggestion-chip" data-word="innovative">innovative</span>
              <span class="suggestion-chip" data-word="eloquent">eloquent</span>
              <span class="suggestion-chip" data-word="perseverance">perseverance</span>
              <span class="suggestion-chip" data-word="comprehensive">comprehensive</span>
              <span class="suggestion-chip" data-word="phenomenon">phenomenon</span>
            </div>
          </div>
        `}
      </div>
    `}renderOnlineResultCard(e){return`
      <div class="online-result-card card">
        <div class="online-result-top">
          <div>
            <div class="online-word-name">
              <span>${e.word}</span>
              <span class="pos-badge">${e.part_of_speech}</span>
              <span class="online-phonetic-badge">${e.phonetic||""}</span>
            </div>
          </div>

          <div class="online-actions-group">
            <button class="tts-play-btn" id="play-online-audio-btn" data-audio="${e.audioUrl||""}" data-word="${e.word}">
              🔊 Telaffuzu Dinle
            </button>
            <button class="btn btn-primary" id="btn-save-online-word">
              ➕ Kartlarıma Ekle (+ Flashcard)
            </button>
          </div>
        </div>

        <div class="online-result-body">
          <div class="online-field-group">
            <label class="online-field-label">🇹🇷 Türkçe Anlamı (Düzenleyebilirsiniz):</label>
            <input type="text" class="dict-search-input online-tr-input" id="online-tr-value" value="${e.definition_tr||""}" />
          </div>

          <div class="online-field-group">
            <label class="online-field-label">📖 İngilizce Tanım:</label>
            <div class="online-def-text">${e.definition_en}</div>
          </div>

          ${e.example?`
            <div class="online-field-group">
              <label class="online-field-label">💬 Örnek Cümle:</label>
              <div class="online-example-text">"${e.example}"</div>
            </div>
          `:""}

          ${e.meanings&&e.meanings.length>1?`
            <div class="online-other-meanings">
              <label class="online-field-label">📚 Ek Tanımlar ve Anlamlar:</label>
              <ul>
                ${e.meanings.slice(1,4).map(t=>`
                  <li>
                    <strong>(${t.partOfSpeech})</strong> ${t.definition}
                    ${t.example?`<div style="font-size: 0.85rem; color: var(--text-muted);">Örnek: "${t.example}"</div>`:""}
                  </li>
                `).join("")}
              </ul>
            </div>
          `:""}
        </div>
      </div>
    `}bindEvents(){var i,a,n,s,r,o,l,d,u,y,f,h,v,k,b,S,I,C,T;(i=document.getElementById("toggle-review-mode"))==null||i.addEventListener("click",()=>{this.mode="review",this.renderContent()}),(a=document.getElementById("toggle-dict-mode"))==null||a.addEventListener("click",()=>{this.mode="dictionary",this.renderContent()}),(n=document.getElementById("toggle-online-mode"))==null||n.addEventListener("click",()=>{this.mode="online",this.renderContent()}),(s=document.getElementById("switch-to-dict-btn"))==null||s.addEventListener("click",()=>{this.mode="dictionary",this.renderContent()}),(r=document.getElementById("switch-to-online-btn"))==null||r.addEventListener("click",()=>{this.mode="online",this.renderContent()}),document.querySelectorAll(".review-level-btn").forEach(g=>{g.addEventListener("click",async()=>{const w=g.dataset.reviewLevel||"all";this.reviewLevel=w,this.currentIndex=0,this.isCardFlipped=!1,await this.loadQueueData();const _=document.getElementById("vocab-body");_&&(_.innerHTML=this.renderReviewArea()),this.bindEvents()})}),(o=document.getElementById("btn-shuffle-cards"))==null||o.addEventListener("click",()=>{this.shuffleActiveCards()}),(l=document.getElementById("btn-draw-fresh"))==null||l.addEventListener("click",async()=>{await this.handleDrawFreshWords(15)}),(d=document.getElementById("btn-empty-draw-fresh"))==null||d.addEventListener("click",async()=>{await this.handleDrawFreshWords(15)}),(u=document.getElementById("btn-reset-level"))==null||u.addEventListener("click",async()=>{await this.handleResetLevel()}),(y=document.getElementById("btn-empty-reset-level"))==null||y.addEventListener("click",async()=>{await this.handleResetLevel()}),document.querySelectorAll(".pack-load-btn").forEach(g=>{g.addEventListener("click",async()=>{const w=g.dataset.level||"all";try{const _=await x.drawFreshWords(w,25);m.showToast(`✅ ${w==="all"?"Arşivden karışık":w+" seviyesinden"} ${_.activatedCount||25} kelime çalışma kartlarınıza eklendi!`,"success"),this.reviewLevel=w,this.currentIndex=0,this.isCardFlipped=!1,await this.loadQueueData(),this.mode="review",this.renderContent()}catch(_){m.showToast("Paket çekilemedi: "+_.message,"error")}})}),document.querySelectorAll(".add-to-due-btn").forEach(g=>{g.addEventListener("click",async()=>{const w=g.dataset.word;try{await x.addCustomWord(w,"","A1"),m.showToast(`"${w}" kelime kartlarına eklendi!`,"success"),await this.loadQueueData();const _=document.querySelector("#toggle-review-mode .btn-badge");_&&(_.textContent=this.dueByLevel.all||this.reviewItems.length)}catch(_){m.showToast("Eklenemedi: "+_.message,"error")}})});const e=document.getElementById("flashcard-element");e==null||e.addEventListener("click",()=>this.toggleFlip()),(f=document.getElementById("btn-manual-flip"))==null||f.addEventListener("click",g=>{g.stopPropagation(),this.toggleFlip()}),document.querySelectorAll(".rating-btn").forEach(g=>{g.addEventListener("click",w=>{w.stopPropagation();const _=parseInt(g.dataset.rating,10);this.submitRating(_)})}),(h=document.getElementById("card-tts-btn"))==null||h.addEventListener("click",g=>{g.stopPropagation();const _=this.getActiveReviewItems()[this.currentIndex];_&&A.speak(_.word)}),(v=document.getElementById("card-back-tts-btn"))==null||v.addEventListener("click",g=>{g.stopPropagation();const _=this.getActiveReviewItems()[this.currentIndex];_&&A.speak(_.word)}),document.querySelectorAll(".dict-tts-btn").forEach(g=>{g.addEventListener("click",()=>{const w=g.dataset.word;w&&A.speak(w)})}),document.querySelectorAll(".level-tab").forEach(g=>{g.addEventListener("click",()=>{this.levelFilter=g.dataset.level;const w=document.getElementById("vocab-body");w&&(w.innerHTML=this.renderDictionaryArea()),this.bindEvents()})});const t=document.getElementById("dict-search-input");t==null||t.addEventListener("input",g=>{this.searchQuery=g.target.value;const w=document.getElementById("vocab-body");w&&(w.innerHTML=this.renderDictionaryArea()),this.bindEvents();const _=document.getElementById("dict-search-input");_&&(_.focus(),_.setSelectionRange(_.value.length,_.value.length))}),(k=document.getElementById("btn-quick-online-search"))==null||k.addEventListener("click",()=>{var w;const g=(((w=document.getElementById("dict-search-input"))==null?void 0:w.value)||this.searchQuery||"").trim();if(!g){m.showToast("Lütfen aranacak bir kelime girin.","info");return}this.mode="online",this.searchQuery=g,this.renderContent(),this.performOnlineSearch(g)}),(b=document.getElementById("btn-search-online-now"))==null||b.addEventListener("click",()=>{this.mode="online",this.renderContent(),this.searchQuery&&this.performOnlineSearch(this.searchQuery)}),(S=document.getElementById("btn-submit-online-search"))==null||S.addEventListener("click",()=>{var w;const g=(((w=document.getElementById("online-word-input"))==null?void 0:w.value)||"").trim();if(!g){m.showToast("Lütfen aranacak bir kelime girin.","info");return}this.performOnlineSearch(g)}),(I=document.getElementById("online-word-input"))==null||I.addEventListener("keydown",g=>{if(g.key==="Enter"){const w=(g.target.value||"").trim();w&&this.performOnlineSearch(w)}}),document.querySelectorAll(".suggestion-chip").forEach(g=>{g.addEventListener("click",()=>{const w=g.dataset.word;this.performOnlineSearch(w)})}),(C=document.getElementById("play-online-audio-btn"))==null||C.addEventListener("click",g=>{g.stopPropagation();const w=g.currentTarget.dataset.audio,_=g.currentTarget.dataset.word;if(w)try{this.audioElement||(this.audioElement=new Audio),this.audioElement.src=w,this.audioElement.play().catch(()=>{_&&A.speak(_)})}catch{_&&A.speak(_)}else _&&A.speak(_)}),(T=document.getElementById("btn-save-online-word"))==null||T.addEventListener("click",async()=>{if(!this.onlineSearchResult)return;const g=document.getElementById("online-tr-value"),w=g?g.value.trim():this.onlineSearchResult.definition_tr,_=this.onlineSearchResult;try{await x.addCustomWord(_.word,w,"B1",_.example||"",_.phonetic,_.part_of_speech),m.showToast(`🎉 "${_.word}" kelimesi başarıyla kartlarınıza eklendi ve aktif edildi!`,"success"),await this.loadQueueData();const E=await x.getVocabularyItems();this.dictionaryItems=E.items||[],this.mode="review",this.renderContent()}catch(E){m.showToast("Kelime eklenirken hata: "+E.message,"error")}}),this.keyHandler&&window.removeEventListener("keydown",this.keyHandler),this.keyHandler=g=>{this.mode==="review"&&(g.target.tagName==="INPUT"||g.target.tagName==="TEXTAREA"||(g.code==="Space"?(g.preventDefault(),this.toggleFlip()):this.isCardFlipped&&(g.key==="1"?this.submitRating(0):g.key==="2"?this.submitRating(1):g.key==="3"?this.submitRating(2):g.key==="4"&&this.submitRating(3))))},window.addEventListener("keydown",this.keyHandler)}shuffleActiveCards(){const e=this.getActiveReviewItems();if(e.length===0)return;for(let i=e.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[e[i],e[a]]=[e[a],e[i]]}this.currentIndex=0,this.isCardFlipped=!1;const t=document.getElementById("vocab-body");t&&(t.innerHTML=this.renderReviewArea()),this.bindEvents(),m.showToast("🔀 Kartların sırası rastgele karıştırıldı!","info")}async handleDrawFreshWords(e=15){try{const t=this.reviewLevel||"all",i=await x.drawFreshWords(t,e);m.showToast(`✨ ${t==="all"?"Arşivden":t+" seviyesinden"} ${i.activatedCount} yeni kelime kuyruğunuza eklendi!`,"success"),await this.loadQueueData(),this.currentIndex=0,this.isCardFlipped=!1;const a=document.getElementById("vocab-body");a&&(a.innerHTML=this.renderReviewArea()),this.bindEvents()}catch(t){m.showToast("Yeni kelime çekilemedi: "+t.message,"error")}}async handleResetLevel(){const e=this.reviewLevel||"all",t=e==="all"?"Tüm seviyelerdeki kelimeleri baştan çalışmak üzere sıfırlamak istiyor musunuz?":`${e} seviyesindeki tüm kelimeleri baştan çalışmak üzere sıfırlamak istiyor musunuz?`;if(confirm(t))try{const i=await x.resetLevelQueue(e);m.showToast(`🔄 ${e==="all"?"Tüm seviyeler":e+" seviyesi"} baştan çalışmaya hazırlandı! (${i.resetCount} kelime aktif)`,"success"),await this.loadQueueData(),this.shuffleActiveCards()}catch(i){m.showToast("Sıfırlama başarısız: "+i.message,"error")}}async performOnlineSearch(e){this.searchQuery=e,this.isSearchingOnline=!0,this.onlineSearchError=null,this.onlineSearchResult=null;const t=document.getElementById("online-search-status");t&&(t.innerHTML=`
        <div class="online-loading-spinner">
          <div class="spinner"></div>
          <p>"${e}" internet sözlük arşivinden getiriliyor...</p>
        </div>
      `);try{const i=await x.searchOnlineDictionary(e);this.onlineSearchResult=i,this.isSearchingOnline=!1,this.renderContent()}catch{this.isSearchingOnline=!1,this.onlineSearchError=`"${e}" internet sözlüğünde bulunamadı veya bağlantı hatası oluştu.`,this.renderContent()}}toggleFlip(){this.isCardFlipped=!this.isCardFlipped;const e=document.getElementById("flashcard-element"),t=document.getElementById("rating-bar"),i=document.getElementById("btn-manual-flip");if(e&&e.classList.toggle("flipped",this.isCardFlipped),t&&(t.style.visibility=this.isCardFlipped?"visible":"hidden"),i&&(i.textContent=this.isCardFlipped?"🔄 Kartın Önünü Gör":"🔄 Kartı Çevir (Anlamı Gör)"),this.isCardFlipped){const n=this.getActiveReviewItems()[this.currentIndex];n&&A.speak(n.word)}}async submitRating(e){const t=this.getActiveReviewItems(),i=t[this.currentIndex];if(i)try{await x.submitReview(i.id,e),this.isCardFlipped=!1,q.checkAll().catch(()=>{}),e===0&&t.push(i),this.currentIndex++,this.currentIndex>=t.length&&(await this.loadQueueData(),this.currentIndex=0);const a=document.getElementById("vocab-body");a&&(a.innerHTML=this.renderReviewArea()),this.bindEvents()}catch(a){m.showToast("Değerlendirme kaydedilemedi: "+a.message,"error")}}destroy(){if(this.keyHandler&&(window.removeEventListener("keydown",this.keyHandler),this.keyHandler=null),this.audioElement)try{this.audioElement.pause(),this.audioElement=null}catch{}}}class se{constructor(){this.container=null,this.materials=[],this.selectedMaterial=null,this.readingStartTime=Date.now(),this.userAnswers={},this.submissionResult=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Okuma metinleri yükleniyor...</p>
      </div>
    `;try{const t=await x.getReadingMaterials();this.materials=Array.isArray(t)?t:t.materials||[],this.materials.length>0&&!this.selectedMaterial?await this.loadMaterial(this.materials[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Metinler yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadMaterial(e){try{const t=await x.getReadingMaterial(e);this.selectedMaterial=t.material,this.readingStartTime=Date.now(),this.userAnswers={},this.submissionResult=null,this.renderContent()}catch(t){m.showToast("Metin yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedMaterial,t=e&&e.comprehension_questions?typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions:[],i=e&&e.key_vocabulary?typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary:[];this.container.innerHTML=`
      <div class="reading-layout">
        <!-- Sidebar: Library Catalog -->
        <aside class="reading-sidebar card">
          <div class="reading-sidebar-header">
            <h3>Okuma Kütüphanesi</h3>
            <span class="catalog-count">${this.materials.length} Metin</span>
          </div>

          <div class="reading-catalog-list">
            ${this.materials.map(a=>`
              <div class="catalog-item ${e&&e.id===a.id?"active":""}" data-id="${a.id}">
                <div class="catalog-item-top">
                  <span class="cefr-tag ${a.cefr_level||"A1"}">${a.cefr_level||"A1"}</span>
                  <span class="catalog-cat">${(a.category||"").toUpperCase()}</span>
                </div>
                <div class="catalog-title">${a.title}</div>
                <div class="catalog-meta">
                  <span>⏱️ ~${a.estimated_reading_time||2} dk</span>
                  <span>📝 ${a.word_count||120} kelime</span>
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

`).map(a=>`<p class="article-p">${a}</p>`).join("")}
              </div>

              <!-- Key Vocabulary Pills -->
              ${i.length>0?`
                <div class="key-vocab-section">
                  <h4>Metindeki Temel Kelimeler (Dinlemek için tıklayın):</h4>
                  <div class="vocab-pills-list">
                    ${i.map(a=>`<span class="vocab-pill" data-word="${a}">🔊 ${a}</span>`).join("")}
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
                ${t.map((a,n)=>`
                  <div class="comp-question-item" data-q-idx="${n}">
                    <div class="comp-question-title">${n+1}. ${a.question}</div>
                    <div class="comp-options-list">
                      ${a.options.map((s,r)=>`
                        <button class="comp-opt-btn ${this.userAnswers[n]===s?"selected":""}" data-idx="${n}" data-val="${s}">
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
    `,this.bindEvents()}bindEvents(){var e,t,i;this.container.querySelectorAll(".catalog-item").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.id;n&&this.loadMaterial(n)})}),(e=document.getElementById("read-aloud-btn"))==null||e.addEventListener("click",()=>{this.selectedMaterial&&A.speak(this.selectedMaterial.content,{rate:.9})}),(t=document.getElementById("stop-read-btn"))==null||t.addEventListener("click",()=>{A.stop()}),document.querySelectorAll(".vocab-pill").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.word;n&&A.speak(n)})}),document.querySelectorAll(".comp-opt-btn").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.idx,s=a.dataset.val;this.userAnswers[n]=s,a.parentElement.querySelectorAll(".comp-opt-btn").forEach(r=>r.classList.remove("selected")),a.classList.add("selected")})}),(i=document.getElementById("submit-reading-btn"))==null||i.addEventListener("click",()=>{this.submitComprehension()})}async submitComprehension(){const e=Math.round((Date.now()-this.readingStartTime)/1e3),t=document.getElementById("submit-reading-btn");t&&(t.disabled=!0);try{const i=await x.submitReading(this.selectedMaterial.id,this.userAnswers,e),a=document.getElementById("comp-results-box");a&&(a.innerHTML=`
          <div class="results-header">
            <h4>Anlama Skoru: %${i.score}</h4>
            <span>${i.correctCount} / ${i.totalCount} Doğru • Okuma Hızı: ${i.wordsPerMinute} kelime/dk</span>
          </div>
          <div class="details-list">
            ${i.details.map(n=>`
              <div class="result-detail-item ${n.isCorrect?"correct":"incorrect"}">
                <span class="detail-icon">${n.isCorrect?"✅":"❌"}</span>
                <div>
                  <div class="detail-q">${n.question}</div>
                  <div class="detail-ans">Cevabınız: <strong>${n.userAnswer||"(Boş)"}</strong> | Doğru: <strong>${n.correctAnswer}</strong></div>
                </div>
              </div>
            `).join("")}
          </div>
        `,a.style.display="block"),m.showToast(`Okuma tamamlandı! Skorunuz: %${i.score}`,i.score>=70?"success":"info")}catch(i){m.showToast("Sonuçlar kaydedilemedi: "+i.message,"error"),t&&(t.disabled=!1)}}}class re{constructor(){this.container=null,this.materials=[],this.selectedMaterial=null,this.speed=1,this.accent="en-US",this.showTranscript=!1,this.listenCount=0,this.userAnswers={}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Dinleme parçaları yükleniyor...</p>
      </div>
    `;try{const t=await x.getListeningMaterials();this.materials=Array.isArray(t)?t:t.materials||[],this.materials.length>0&&!this.selectedMaterial?await this.loadMaterial(this.materials[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Dinleme parçaları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadMaterial(e){try{const t=await x.getListeningMaterial(e);this.selectedMaterial=t.material,this.speed=this.selectedMaterial.speech_rate==="slow"?.8:1,this.accent=this.selectedMaterial.accent==="british"?"en-GB":"en-US",this.showTranscript=!1,this.listenCount=0,this.userAnswers={},this.renderContent()}catch(t){m.showToast("Parça yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedMaterial,t=e&&e.comprehension_questions?typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions:[];this.container.innerHTML=`
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
                ${t.map((i,a)=>`
                  <div class="l-question-item">
                    <div class="l-question-title">${a+1}. ${i.question}</div>
                    <div class="l-options-grid">
                      ${i.options.map((n,s)=>`
                        <button class="l-opt-btn ${this.userAnswers[a]===n?"selected":""}" data-q-idx="${a}" data-val="${n}">
                          <span class="opt-prefix">${String.fromCharCode(65+s)}</span>
                          <span class="opt-text">${n}</span>
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
    `,this.bindEvents()}bindEvents(){var e,t,i,a;this.container.querySelectorAll(".track-item").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.id;s&&this.loadMaterial(s)})}),(e=document.getElementById("play-audio-btn"))==null||e.addEventListener("click",()=>{if(this.selectedMaterial){const n=this.selectedMaterial.audio_text||this.selectedMaterial.transcript||"";this.listenCount++;const s=document.getElementById("listen-count-val");s&&(s.textContent=this.listenCount),A.speak(n,{rate:this.speed,lang:this.accent})}}),(t=document.getElementById("pause-audio-btn"))==null||t.addEventListener("click",()=>{A.stop()}),document.querySelectorAll(".speed-btn").forEach(n=>{n.addEventListener("click",()=>{this.speed=parseFloat(n.dataset.speed),document.querySelectorAll(".speed-btn").forEach(s=>s.classList.remove("active")),n.classList.add("active")})}),document.querySelectorAll(".accent-btn").forEach(n=>{n.addEventListener("click",()=>{this.accent=n.dataset.accent,document.querySelectorAll(".accent-btn").forEach(s=>s.classList.remove("active")),n.classList.add("active")})}),(i=document.getElementById("toggle-transcript-btn"))==null||i.addEventListener("click",()=>{this.showTranscript=!this.showTranscript;const n=document.getElementById("transcript-content"),s=document.getElementById("toggle-transcript-btn");n&&(n.style.display=this.showTranscript?"block":"none"),s&&(s.textContent=this.showTranscript?"Transkripti Gizle":"👁️ İngilizce Transkripti Göster")}),document.querySelectorAll(".l-opt-btn").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.qIdx,r=n.dataset.val;this.userAnswers[s]=r,n.parentElement.querySelectorAll(".l-opt-btn").forEach(o=>o.classList.remove("selected")),n.classList.add("selected")})}),(a=document.getElementById("submit-listening-btn"))==null||a.addEventListener("click",()=>{this.submitListeningAnswers()})}async submitListeningAnswers(){const e=document.getElementById("submit-listening-btn");e&&(e.disabled=!0);try{const t=await x.submitListening(this.selectedMaterial.id,this.userAnswers,this.listenCount),i=document.getElementById("l-results");i&&(i.innerHTML=`
          <div class="results-header">
            <h4>Dinleme Skoru: %${t.score}</h4>
            <span>${t.correctCount} / ${t.totalCount} Doğru • ${t.listenCount} Dinleme</span>
          </div>
          <div class="details-list">
            ${t.details.map(a=>`
              <div class="result-detail-item ${a.isCorrect?"correct":"incorrect"}">
                <span class="detail-icon">${a.isCorrect?"✅":"❌"}</span>
                <div>
                  <div class="detail-q">${a.question}</div>
                  <div class="detail-ans">Cevabınız: <strong>${a.userAnswer||"(Boş)"}</strong> | Doğru: <strong>${a.correctAnswer}</strong></div>
                </div>
              </div>
            `).join("")}
          </div>
        `,i.style.display="block"),m.showToast(`Dinleme testi bitti! Skorunuz: %${t.score}`,t.score>=70?"success":"info")}catch(t){m.showToast("Cevaplar kaydedilemedi: "+t.message,"error"),e&&(e.disabled=!1)}}}class oe{constructor(){this.container=null,this.prompts=[],this.selectedPrompt=null,this.writingStartTime=Date.now(),this.evaluation=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Yazma stüdyosu konuları yükleniyor...</p>
      </div>
    `;try{const t=await x.getWritingPrompts();this.prompts=Array.isArray(t)?t:t.prompts||[],this.prompts.length>0&&!this.selectedPrompt&&(this.selectedPrompt=this.prompts[0]),this.renderContent()}catch(t){this.container.innerHTML=`
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
            ${this.prompts.map(t=>{const i=t.prompt.length>70?t.prompt.slice(0,67)+"...":t.prompt;return`
                <div class="prompt-item ${e&&e.id===t.id?"active":""}" data-id="${t.id}">
                  <div class="prompt-top">
                    <span class="cefr-tag ${t.cefr_level||"A1"}">${t.cefr_level||"A1"}</span>
                    <span class="prompt-type">${(t.type||"").toUpperCase()}</span>
                  </div>
                  <div class="prompt-short">${i}</div>
                </div>
              `}).join("")}
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
    `,this.bindEvents()}bindEvents(){var n;this.container.querySelectorAll(".prompt-item").forEach(s=>{s.addEventListener("click",()=>{const r=parseInt(s.dataset.id,10);this.selectedPrompt=this.prompts.find(o=>o.id===r),this.writingStartTime=Date.now(),this.renderContent()})});const e=document.getElementById("writing-input"),t=document.getElementById("word-count-val"),i=document.getElementById("sentence-count-val"),a=document.getElementById("avg-len-val");e==null||e.addEventListener("input",()=>{const s=e.value.trim(),r=s?s.split(/\s+/).filter(Boolean).length:0,o=(s.match(/[^.!?]+[.!?]+/g)||[]).length||(r>0?1:0),l=o>0?(r/o).toFixed(1):0;t&&(t.textContent=r),i&&(i.textContent=o),a&&(a.textContent=`${l} kelime`)}),(n=document.getElementById("submit-writing-btn"))==null||n.addEventListener("click",()=>{this.submitWritingText()})}async submitWritingText(){var i;const e=(i=document.getElementById("writing-input"))==null?void 0:i.value.trim();if(!e||e.split(/\s+/).length<5){m.showToast("Lütfen değerlendirme için en az 5 kelimelik bir metin yazın.","error");return}const t=document.getElementById("submit-writing-btn");t&&(t.disabled=!0,t.textContent="İnceleniyor...");try{const a=await x.submitWriting(this.selectedPrompt.id,e),n=document.getElementById("writing-eval-card");n&&(n.innerHTML=`
          <div class="eval-header">
            <div>
              <h3>Yazma Analiz Sonucu</h3>
              <span class="cefr-tag ${a.cefrLevel}">${a.cefrLevel} Seviyesi</span>
            </div>
            <div class="eval-overall-score">${a.overallScore} <span>/ 100</span></div>
          </div>

          <div class="eval-metrics-grid">
            <div class="eval-metric-box">
              <span class="metric-title">Dilbilgisi Doğruluğu</span>
              <strong class="metric-val">%${a.grammarScore}</strong>
            </div>
            <div class="eval-metric-box">
              <span class="metric-title">Kelime Çeşitliliği</span>
              <strong class="metric-val">%${a.vocabularyScore}</strong>
            </div>
            <div class="eval-metric-box">
              <span class="metric-title">Cümle Yapısı</span>
              <strong class="metric-val">%${a.structureScore}</strong>
            </div>
          </div>

          <div class="eval-feedback-section">
            <h4>Öğretmen Tavsiyeleri & İpuçları:</h4>
            <ul>
              ${a.feedback.map(s=>`<li>${s}</li>`).join("")}
            </ul>
          </div>
        `,n.style.display="block",n.scrollIntoView({behavior:"smooth"})),m.showToast("Yazınız başarıyla değerlendirildi! (+30 XP)","success")}catch(a){m.showToast("Değerlendirme yapılamadı: "+a.message,"error")}finally{t&&(t.disabled=!1,t.textContent="Yazımı Analiz Et ve Puanla →")}}}class le{constructor(){this.container=null,this.scenarios=[],this.selectedScenario=null,this.messages=[],this.isRecording=!1,this.completedObjectives=new Set}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Konuşma senaryoları yükleniyor...</p>
      </div>
    `;try{const t=await x.getSpeakingScenarios();this.scenarios=Array.isArray(t)?t:t.scenarios||[],this.scenarios.length>0&&!this.selectedScenario?await this.loadScenario(this.scenarios[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Konuşma senaryoları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadScenario(e){try{const t=await x.getSpeakingScenario(e);this.selectedScenario=t.scenario,this.completedObjectives=new Set,this.messages=[{sender:"ai",name:this.selectedScenario.ai_role||"Diyalog Partneri",text:this.selectedScenario.starter_message||"Hello! How can I help you today?"}],this.renderContent(),this.selectedScenario.starter_message&&A.speak(this.selectedScenario.starter_message)}catch(t){m.showToast("Senaryo yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedScenario,t=e&&e.key_phrases?typeof e.key_phrases=="string"?JSON.parse(e.key_phrases):e.key_phrases:[],i=e&&e.objectives?typeof e.objectives=="string"?JSON.parse(e.objectives):e.objectives:[];this.container.innerHTML=`
      <div class="speaking-layout">
        <!-- Sidebar: Scenario List -->
        <aside class="speaking-sidebar card">
          <div class="speaking-sidebar-header">
            <h3>Konuşma Senaryoları</h3>
            <span class="catalog-count">${this.scenarios.length} Senaryo</span>
          </div>

          <div class="scenarios-list">
            ${this.scenarios.map(a=>`
              <div class="scenario-item ${e&&e.id===a.id?"active":""}" data-id="${a.id}">
                <div class="scenario-top">
                  <span class="cefr-tag ${a.cefr_level||"A1"}">${a.cefr_level||"A1"}</span>
                  <span class="scenario-cat">${(a.category||"").toUpperCase()}</span>
                </div>
                <div class="scenario-title">${a.title}</div>
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
                    ${i.map((a,n)=>`
                      <span class="obj-tag ${this.completedObjectives.has(n)?"completed":""}">
                        ${this.completedObjectives.has(n)?"✓ ":""}${a}
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
                    ${t.map(a=>`<span class="phrase-tag" data-phrase="${a}">🔊 ${a}</span>`).join("")}
                  </div>
                </div>
              `:""}
            </div>

            <!-- Dialogue Chat History Box -->
            <div class="card dialogue-chat-card">
              <div class="dialogue-messages-wrap" id="dialogue-messages">
                ${this.messages.map(a=>`
                  <div class="chat-bubble-row ${a.sender==="user"?"user-row":"ai-row"}">
                    <div class="chat-bubble">
                      <div class="bubble-header">
                        <span class="bubble-name">${a.name}</span>
                        <button class="tts-play-btn bubble-tts" data-text="${a.text}">🔊</button>
                      </div>
                      <div class="bubble-body">${a.text}</div>
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
    `,this.bindEvents()}bindEvents(){var t,i;this.container.querySelectorAll(".scenario-item").forEach(a=>{a.addEventListener("click",()=>{const n=parseInt(a.dataset.id,10);this.loadScenario(n)})}),document.querySelectorAll(".phrase-tag").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.phrase;n&&A.speak(n)})}),document.querySelectorAll(".bubble-tts").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.text;n&&A.speak(n)})});const e=document.getElementById("btn-record-voice");e==null||e.addEventListener("click",()=>{this.toggleSpeechRecognition()}),(t=document.getElementById("btn-send-message"))==null||t.addEventListener("click",()=>{this.sendUserMessage()}),(i=document.getElementById("dialogue-text-input"))==null||i.addEventListener("keydown",a=>{a.key==="Enter"&&this.sendUserMessage()})}toggleSpeechRecognition(){if(!A.hasRecognition){m.showToast("Tarayıcınız ses tanımayı desteklemiyor. Lütfen yazarak cevap verin.","error");return}this.isRecording?(A.stopListening(),this.isRecording=!1,this.renderContent()):(this.isRecording=!0,this.renderContent(),A.listen(e=>{this.isRecording=!1;const t=document.getElementById("dialogue-text-input");t&&(t.value=e),this.sendUserMessage(e)},()=>{this.isRecording=!1,this.renderContent()}))}sendUserMessage(e){const t=document.getElementById("dialogue-text-input"),i=e||(t?t.value.trim():"");if(!i)return;t&&(t.value=""),this.messages.push({sender:"user",name:"Siz",text:i}),this.renderContent();const a=document.getElementById("dialogue-messages");a&&(a.scrollTop=a.scrollHeight),setTimeout(()=>{var r;const n=this.generateAiResponse(i);this.messages.push({sender:"ai",name:((r=this.selectedScenario)==null?void 0:r.ai_role)||"Partner",text:n}),this.renderContent();const s=document.getElementById("dialogue-messages");s&&(s.scrollTop=s.scrollHeight),A.speak(n)},800)}generateAiResponse(e){const t=e.toLowerCase();return t.includes("coffee")||t.includes("tea")||t.includes("water")||t.includes("like")?"Certainly! That sounds great. Would you like anything else to eat with that?":t.includes("how much")||t.includes("bill")||t.includes("check")?"That will be 4 dollars, please. Are you paying by card or cash?":t.includes("hello")||t.includes("hi")?"Hello there! How can I assist you today?":t.includes("thank")?"You're very welcome! Have a wonderful day!":"That's clear. Thank you for telling me. Let's continue: what would you like to do next?"}}class ce{constructor(){this.container=null,this.activeTab="minimal_pairs",this.isRecording=!1,this.currentScore=null}render(e){this.container=e,this.renderContent()}renderContent(){this.container.innerHTML=`
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
    `}bindEvents(){document.querySelectorAll(".pron-tabs .btn").forEach(e=>{e.addEventListener("click",()=>{this.activeTab=e.dataset.tab,this.renderContent()})}),document.querySelectorAll(".pron-tts").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.text;t&&A.speak(t)})}),document.querySelectorAll(".test-mic-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target;if(!A.hasRecognition){m.showToast("Mikrofon ses tanıma bu tarayıcıda desteklenmiyor.","error");return}e.textContent="🎙️ Dinleniyor...",e.classList.add("pulse"),A.listen(i=>{e.classList.remove("pulse");const a=i.trim().toLowerCase(),n=t.trim().toLowerCase();a.includes(n)||n.includes(a)?(e.textContent=`✅ Harika! "${i}"`,m.showToast(`Mükemmel telaffuz! Algılanan: "${i}"`,"success")):(e.textContent=`Tekrar dene (Duyulan: "${i}")`,m.showToast(`Duyulan: "${i}". Hedef kelimeye tekrar çalışın.`,"info"))},()=>{e.classList.remove("pulse"),e.textContent=`🎙️ "${t}" Telaffuz Et`})})})}}class de{constructor(){this.container=null,this.errors=[],this.filterSkill="all",this.showResolved=!1,this.skillNamesTr={all:"Tümü",grammar:"Dilbilgisi",vocabulary:"Kelime",writing:"Yazma",speaking:"Konuşma",sentence_formation:"Cümle Kurma"}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Kişisel hata defteriniz yükleniyor...</p>
      </div>
    `;try{const t=await x.getErrors({resolved:this.showResolved?1:0});this.errors=t.errors||[],this.renderContent()}catch(t){this.container.innerHTML=`
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
    `,this.bindEvents()}bindEvents(){var e;this.container.querySelectorAll(".skill-tab").forEach(t=>{t.addEventListener("click",()=>{this.filterSkill=t.dataset.skill,this.renderContent()})}),(e=document.getElementById("toggle-resolved-btn"))==null||e.addEventListener("click",async()=>{this.showResolved=!this.showResolved,await this.render(this.container)}),this.container.querySelectorAll(".resolve-err-btn").forEach(t=>{t.addEventListener("click",async()=>{const i=t.dataset.id;try{await x.resolveError(i),m.showToast("Hata başarıyla çözüldü olarak işaretlendi! (+10 XP)","success"),await this.render(this.container)}catch(a){m.showToast("Hata güncellenemedi: "+a.message,"error")}})})}}class ue{constructor(){this.container=null,this.dashboardData=null,this.activeFilter="all"}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Gelişim, rozetler ve istatistik verileriniz hesaplanıyor...</p>
      </div>
    `;try{this.dashboardData=await x.getDashboard(),await q.checkAll(this.dashboardData),this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>İstatistikler yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){const{stats:e,skills:t,weekStudy:i,latestAssessment:a}=this.dashboardData,n=[{key:"grammar",name:"Dilbilgisi (Grammar)"},{key:"vocabulary",name:"Kelime Haznesi (Vocabulary)"},{key:"reading",name:"Okuma Anlama (Reading)"},{key:"listening",name:"Dinleme Algılama (Listening)"},{key:"writing",name:"Yazma Becerisi (Writing)"},{key:"speaking",name:"Konuşma Akıcılığı (Speaking)"},{key:"pronunciation",name:"Telaffuz & Fonetik (Pronunciation)"},{key:"sentence_formation",name:"Cümle Kurma Mantığı (Syntax)"},{key:"comprehension",name:"Kavrama Hızı (Comprehension)"},{key:"communication",name:"Doğal İletişim (Communication)"}],s=(i||[]).reduce((h,v)=>h+(v.total_minutes||0),0),r=(a==null?void 0:a.overall_cefr)||(a==null?void 0:a.overallCEFR)||"A1",o=q.getUnlockedAchievements(),l=new Map(o.map(h=>[h.id,h])),d=P.length,u=o.length,y=Math.round(u/d*100),f=P.filter(h=>{const v=l.has(h.id);return this.activeFilter==="unlocked"?v:this.activeFilter==="locked"?!v:this.activeFilter==="vocab"?h.category==="vocab":this.activeFilter==="grammar"?h.category==="grammar":this.activeFilter==="skills"?h.category==="skills":this.activeFilter==="streak"?h.category==="streak":!0});this.container.innerHTML=`
      <div class="progress-layout">
        <!-- Header -->
        <div class="card progress-header">
          <div class="progress-header-left">
            <h1 class="progress-title">Gelişim Analizi & Başarımlar</h1>
            <p class="progress-subtitle">CEFR standartlarında 10 farklı beceri boyutu, rozetler ve çalışma disiplini</p>
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
            <span class="p-stat-title">Kazanılan Rozetler</span>
            <div class="p-stat-val">${u} / ${d} 🏆</div>
            <span class="p-stat-sub">Başarım oranı: %${y}</span>
          </div>
        </div>

        <div class="grid-2 progress-charts-grid">
          <!-- 10 Skills Detailed Breakdown -->
          <div class="card skills-audit-card">
            <h2 class="card-title">🎯 10 Becerideki Seviye Dağılımı</h2>
            <div class="card-subtitle">Her beceri alanı bağımsız olarak puanlanır ve takip edilir</div>

            <div class="domain-bars-list">
              ${n.map(h=>{const v=t[h.key]||{level:"A1",score:0},k=v.level||"A1",b=v.score||0;return`
                  <div class="domain-row">
                    <div class="domain-label">
                      <span>${h.name}</span>
                      <span class="cefr-tag ${k}">${k}</span>
                    </div>
                    <div class="domain-bar-track">
                      <div class="domain-bar-fill" style="width: ${Math.max(b,5)}%;"></div>
                    </div>
                    <span class="domain-score">%${b}</span>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- Weekly Consistency Distribution -->
          <div class="card weekly-activity-card">
            <h2 class="card-title">📅 Son 7 Günlük Çalışma Düzeni</h2>
            <div class="card-subtitle">Günlük pratik süresi dağılımı (dakika cinsinden)</div>

            <div class="week-chart-bars">
              ${i&&i.length>0?i.map(h=>{const v=Math.min(100,Math.max(10,Math.round(h.total_minutes/60*100)));return`
                  <div class="day-bar-col">
                    <div class="day-bar-track">
                      <div class="day-bar-fill" style="height: ${h.total_minutes>0?v:6}%;"></div>
                    </div>
                    <span class="day-label">${h.date.slice(5)}</span>
                    <span class="day-mins">${h.total_minutes}m</span>
                  </div>
                `}).join(""):`
                <p style="color: #64748b; font-size: 13px; text-align: center; margin-top: 30px;">Henüz haftalık çalışma verisi oluşmadı.</p>
              `}
            </div>
          </div>
        </div>

        <!-- =============================================
             ACHIEVEMENTS SHOWCASE
             ============================================= -->
        <div class="card achievements-showcase-card">
          <div class="achievements-top-bar">
            <div class="achievements-headline">
              <h2>🏆 Başarımlar & Rozet Vitrini</h2>
              <p>Öğrenme yolculuğunda tamamladığın her dönüm noktası sana özel rozetler ve bonus XP kazandırır</p>
            </div>
            <div class="achievements-overall-badge">
              <div>
                <div class="achievements-meter-label">${u} / ${d} Açıldı (%${y})</div>
              </div>
              <div class="achievements-meter-bar">
                <div class="achievements-meter-fill" style="width: ${y}%;"></div>
              </div>
            </div>
          </div>

          <!-- Filter Tabs -->
          <div class="achievements-filter-tabs">
            <button class="ach-tab ${this.activeFilter==="all"?"active":""}" data-filter="all">Tümü (${d})</button>
            <button class="ach-tab ${this.activeFilter==="unlocked"?"active":""}" data-filter="unlocked">Kazanılanlar (${u})</button>
            <button class="ach-tab ${this.activeFilter==="locked"?"active":""}" data-filter="locked">Kilitliler (${d-u})</button>
            <button class="ach-tab ${this.activeFilter==="vocab"?"active":""}" data-filter="vocab">Kelime & SRS</button>
            <button class="ach-tab ${this.activeFilter==="grammar"?"active":""}" data-filter="grammar">Gramer</button>
            <button class="ach-tab ${this.activeFilter==="skills"?"active":""}" data-filter="skills">Dört Beceri</button>
            <button class="ach-tab ${this.activeFilter==="streak"?"active":""}" data-filter="streak">Seri & Disiplin</button>
          </div>

          <!-- Badges Grid -->
          <div class="achievements-grid">
            ${f.map(h=>{const v=l.get(h.id),k=!!v,b=h.progress?h.progress(this.dashboardData):null,S=v?new Date(v.unlocked_at).toLocaleDateString("tr-TR",{day:"numeric",month:"short"}):null;return`
                <div class="achievement-card ${k?"unlocked":"locked"}">
                  <div class="ach-icon-box">
                    ${k?h.icon:"🔒"}
                  </div>
                  <div class="ach-details">
                    <div class="ach-title-row">
                      <span class="ach-title">${h.title}</span>
                      <span class="ach-xp-tag">+${h.xp} XP</span>
                    </div>
                    <div class="ach-desc">${h.description}</div>

                    ${k?`
                      <div class="ach-unlocked-date">
                        <span>✓ Açıldı (${S})</span>
                      </div>
                    `:b?`
                      <div class="ach-progress-row">
                        <div class="ach-mini-track">
                          <div class="ach-mini-fill" style="width: ${Math.min(100,Math.round(b.current/b.max*100))}%;"></div>
                        </div>
                        <span class="ach-progress-txt">${b.current} / ${b.max}</span>
                      </div>
                    `:`
                      <span class="ach-progress-txt">Henüz tamamlanmadı</span>
                    `}
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){this.container.querySelectorAll(".ach-tab").forEach(e=>{e.addEventListener("click",()=>{this.activeFilter=e.dataset.filter,this.renderContent()})})}}class he{constructor(){this.container=null,this.categories=[],this.exercises=[],this.filteredExercises=[],this.activeCategory="all",this.activeLevel="all",this.currentIndex=0,this.trayTokens=[],this.poolTokens=[],this.isSubmitted=!1,this.isCorrect=!1,this.resultData=null,this.firstAttempt=!0,this.audioCtx=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Cümle Kurma & Sözdizimi Laboratuvarı yükleniyor...</p>
      </div>
    `;try{const t=await x.getSyntaxExercises(this.activeCategory,this.activeLevel);this.categories=t.categories||[],this.exercises=t.exercises||[],this.applyFilter(),this.renderLayout()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Sözdizimi alıştırmaları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}applyFilter(){this.filteredExercises=this.exercises.filter(e=>{const t=this.activeCategory==="all"||e.category===this.activeCategory,i=this.activeLevel==="all"||e.cefr_level.toUpperCase()===this.activeLevel.toUpperCase();return t&&i}),this.currentIndex>=this.filteredExercises.length&&(this.currentIndex=0),this.loadCurrentExercise()}loadCurrentExercise(){this.isSubmitted=!1,this.isCorrect=!1,this.resultData=null,this.firstAttempt=!0,this.trayTokens=[];const e=this.filteredExercises[this.currentIndex];if(e){const t=[...e.tokens];for(let i=t.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[t[i],t[a]]=[t[a],t[i]]}t.join(" ")===e.tokens.join(" ")&&t.length>1&&([t[0],t[1]]=[t[1],t[0]]),this.poolTokens=t.map((i,a)=>({id:`token-${a}-${Date.now()}`,text:i}))}else this.poolTokens=[]}renderLayout(){const e=this.filteredExercises[this.currentIndex],t=this.filteredExercises.length;x.getCurrentUser();const a=(m.get("skills")||{}).sentence_formation||{level:"A1",score:0};this.container.innerHTML=`
      <div class="syntax-view-container">
        <!-- Studio Header & Level Radar -->
        <header class="syntax-header card">
          <div class="syntax-header-content">
            <div class="syntax-badge-pill">
              <span class="pulse-dot"></span>
              8. CEFR Beceri Boyutu • Cümle Dizilimi (Syntax Studio)
            </div>
            <h1 class="syntax-title">Cümle Kurma & Sözdizimi Laboratuvarı</h1>
            <p class="syntax-subtitle">
              Türkçe düşünme refleksini ("yüklem sonda" kalıbını) kırın; İngilizce 
              <strong>S-V-O-M-P-T</strong> (Özne-Fiil-Nesne-Tarz-Yer-Zaman) dizilim refleksini interaktif olarak kazanın.
            </p>
          </div>

          <div class="syntax-stat-card">
            <div class="syntax-stat-label">Cümle Kurma Seviyeniz</div>
            <div class="syntax-stat-val">
              <span class="cefr-tag ${a.level||"A1"}">${a.level||"A1"}</span>
              <span class="syntax-score-text">%${a.score||0} Ustalık</span>
            </div>
            <div class="syntax-progress-bar">
              <div class="syntax-progress-fill" style="width: ${Math.max(a.score||10,8)}%;"></div>
            </div>
          </div>
        </header>

        <!-- S-V-O-M-P-T Quick Guide Drawer -->
        <div class="syntax-rule-banner">
          <div class="rule-banner-header">
            <span class="rule-icon">💡</span>
            <strong>Altın Formül: S - V - O - M - P - T</strong>
            <span class="rule-expand-text">(Detayları Gör)</span>
          </div>
          <div class="rule-banner-body">
            <div class="rule-chips-row">
              <span class="rule-chip chip-s"><strong>S</strong>ubject (Özne)</span>
              <span class="rule-arrow">→</span>
              <span class="rule-chip chip-v"><strong>V</strong>erb (Fiil/Yüklem)</span>
              <span class="rule-arrow">→</span>
              <span class="rule-chip chip-o"><strong>O</strong>bject (Nesne)</span>
              <span class="rule-arrow">→</span>
              <span class="rule-chip chip-m"><strong>M</strong>anner (Nasıl/Tarz)</span>
              <span class="rule-arrow">→</span>
              <span class="rule-chip chip-p"><strong>P</strong>lace (Nerede/Yer)</span>
              <span class="rule-arrow">→</span>
              <span class="rule-chip chip-t"><strong>T</strong>ime (Ne zaman)</span>
            </div>
            <p class="rule-note">
              ⚠️ <strong>Türkçe & İngilizce Farkı:</strong> Türkçede yüklem genellikle cümlenin en sonuna giderken, İngilizcede fiil öznenin hemen ardından gelir. Ayrıca yer zarfı (Place) daima zaman zarfından (Time) önce yer alır ("in the kitchen in the morning").
            </p>
          </div>
        </div>

        <!-- Filter Controls -->
        <div class="syntax-filters card">
          <div class="filter-group">
            <label class="filter-label">Seviye:</label>
            <div class="pill-tabs" id="level-tabs">
              ${["all","A1","A2","B1","B2"].map(n=>`
                <button class="pill-tab ${this.activeLevel===n?"active":""}" data-level="${n}">
                  ${n==="all"?"Tümü":n}
                </button>
              `).join("")}
            </div>
          </div>

          <div class="filter-group">
            <label class="filter-label">Kategori:</label>
            <select class="form-input form-select" id="category-select">
              ${this.categories.map(n=>`
                <option value="${n.id}" ${this.activeCategory===n.id?"selected":""}>
                  ${n.name}
                </option>
              `).join("")}
            </select>
          </div>
        </div>

        <!-- Exercise Workspace -->
        ${e?this.renderExerciseCard(e,t):this.renderEmptyState()}
      </div>
    `,this.bindEvents()}renderExerciseCard(e,t){return`
      <div class="syntax-exercise-card card" id="current-exercise-card">
        <!-- Card Top: Meta & Progress -->
        <div class="exercise-card-header">
          <div class="exercise-meta">
            <span class="cefr-tag ${e.cefr_level}">${e.cefr_level}</span>
            <span class="exercise-cat-badge">${e.category_name_tr}</span>
          </div>
          <div class="exercise-counter">
            Cümle <strong>${this.currentIndex+1}</strong> / ${t}
          </div>
        </div>

        <!-- Turkish Prompt Box -->
        <div class="turkish-prompt-box">
          <div class="prompt-icon">🇹🇷</div>
          <div class="prompt-content">
            <div class="prompt-label">İngilizceye Çevrilip Sıralanacak Cümle:</div>
            <div class="prompt-text">${e.turkish_prompt}</div>
          </div>
          <button class="btn btn-icon btn-tts-prompt" id="speak-prompt-btn" title="Türkçe Cümleyi Dinle">
            🔊
          </button>
        </div>

        <!-- Sentence Construction Tray -->
        <div class="construction-tray-wrapper">
          <div class="tray-label-row">
            <span class="tray-title">🛠️ Cümlenizi Buraya Oluşturun:</span>
            <div class="tray-actions">
              <button class="btn btn-sm btn-ghost" id="undo-token-btn" ${this.trayTokens.length===0?"disabled":""} title="Son Eklenen Kelimeyi Geri Al">
                ↩ Geri Al
              </button>
              <button class="btn btn-sm btn-ghost" id="clear-tray-btn" ${this.trayTokens.length===0?"disabled":""} title="Tümünü Sıfırla">
                🗑️ Temizle
              </button>
            </div>
          </div>

          <div class="construction-tray ${this.trayTokens.length===0?"empty":""}" id="sentence-tray">
            ${this.trayTokens.length===0?`
              <div class="tray-placeholder">
                <span class="placeholder-icon">👇</span>
                <span>Aşağıdaki kelime bloklarına tıklayarak cümlenizi kurun...</span>
              </div>
            `:this.trayTokens.map((i,a)=>`
              <button class="word-chip placed animate-pop" data-token-id="${i.id}" data-tray-index="${a}" title="Kaldırmak için tıklayın">
                <span class="chip-text">${i.text}</span>
                <span class="chip-remove">×</span>
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Available Words Pool -->
        <div class="tokens-pool-wrapper">
          <div class="pool-label-row">
            <span class="pool-title">📦 Kullanılabilir Kelime Blokları:</span>
            <span class="pool-hint">Kelimelere tıklayarak yukarıya ekleyin</span>
          </div>
          <div class="tokens-pool" id="tokens-pool">
            ${this.poolTokens.length===0?`
              <div class="pool-empty-note">Tüm kelimeler cümleye yerleştirildi ✨</div>
            `:this.poolTokens.map(i=>`
              <button class="word-chip available animate-scale" data-token-id="${i.id}">
                ${i.text}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="syntax-actions-bar">
          <button class="btn btn-primary btn-lg" id="check-sentence-btn" ${this.trayTokens.length===0?"disabled":""}>
            <span>✓ Kontrol Et</span>
          </button>
          <button class="btn btn-secondary" id="hint-sentence-btn" title="Bir sonraki doğru kelime için ipucu al">
            💡 İpucu
          </button>
          <button class="btn btn-ghost" id="next-sentence-skip-btn">
            Atla →
          </button>
        </div>

        <!-- Result Box (Hidden until checked) -->
        <div class="syntax-result-container" id="syntax-result-box" style="display: ${this.isSubmitted?"block":"none"};">
          ${this.isSubmitted?this.renderResultBox(e):""}
        </div>
      </div>
    `}renderResultBox(e){var t;return this.isCorrect?`
        <div class="result-card success animate-slide-up">
          <div class="result-header">
            <span class="result-icon">🎉</span>
            <div>
              <h3 class="result-title">Tebrikler! Cümle Dizilimi Kusursuz!</h3>
              <div class="result-xp-gained">+${((t=this.resultData)==null?void 0:t.xpGained)||15} XP Kazandınız! Cümle kurma yetiniz gelişti.</div>
            </div>
          </div>

          <!-- Target Sentence & Audio Controls -->
          <div class="correct-sentence-display">
            <div class="target-sentence-text">${e.correct_sentence}</div>
            <div class="audio-controls-row">
              <button class="btn btn-sm btn-audio" id="speak-correct-normal" title="Normal Hızda Dinle">
                🔊 Normal Hız (1.0x)
              </button>
              <button class="btn btn-sm btn-audio" id="speak-correct-slow" title="Yavaş ve Net Dinle">
                🐢 Yavaş Hız (0.8x)
              </button>
            </div>
          </div>

          <!-- Grammatical Syntax Breakdown Table / Chips -->
          <div class="syntax-breakdown-box">
            <div class="breakdown-title">📌 Cümlenin Gramer ve Sözdizimi Analizi:</div>
            <div class="breakdown-chips-grid">
              ${(e.grammar_breakdown||[]).map(i=>`
                <div class="breakdown-card">
                  <div class="breakdown-token">${i.token}</div>
                  <div class="breakdown-tag tag-${(i.tag||"S").toLowerCase()}">${i.tag||"S"}</div>
                  <div class="breakdown-role">${i.role}</div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Turkish Pedagogical Explanation -->
          <div class="explanation-box">
            <strong>📖 Neden Bu Sıralama?</strong>
            <p>${e.explanation_tr}</p>
          </div>

          <div class="result-actions">
            <button class="btn btn-primary btn-lg" id="next-sentence-btn">
              <span>Sonraki Cümleye Geç →</span>
            </button>
          </div>
        </div>
      `:`
        <div class="result-card error animate-shake">
          <div class="result-header">
            <span class="result-icon">⚠️</span>
            <div>
              <h3 class="result-title">Sözdiziminde (Cümle Sırasında) Hata Var</h3>
              <div class="result-subtitle">Kişisel Hata Defterinize eklendi. Tekrar deneyerek düzeltebilirsiniz.</div>
            </div>
          </div>

          <div class="comparison-box">
            <div class="comparison-row">
              <span class="comp-label red">Sizin Diziliminiz:</span>
              <span class="comp-val">${this.trayTokens.map(a=>a.text).join(" ")||"(Boş)"}</span>
            </div>
          </div>

          <!-- Turkish Hint Explanation -->
          <div class="explanation-box warning">
            <strong>💡 İpucu & Dilbilgisi Kuralı:</strong>
            <p>${e.explanation_tr}</p>
          </div>

          <div class="result-actions">
            <button class="btn btn-secondary" id="retry-sentence-btn">
              🔄 Tekrar Dene (Yeniden Diz)
            </button>
            <button class="btn btn-ghost" id="reveal-solution-btn">
              👁️ Doğru Çözümü Göster
            </button>
            <button class="btn btn-primary" id="next-sentence-btn">
              Sonraki Cümleye Geç →
            </button>
          </div>
        </div>
      `}renderEmptyState(){return`
      <div class="card empty-state-card">
        <div class="empty-icon">🧩</div>
        <h3>Bu filtreye uygun cümle bulunamadı</h3>
        <p>Lütfen farklı bir seviye veya kategori seçin.</p>
        <button class="btn btn-primary" id="reset-filters-btn">Filtreleri Sıfırla</button>
      </div>
    `}bindEvents(){var f;this.container.querySelectorAll("#level-tabs .pill-tab").forEach(h=>{h.addEventListener("click",()=>{this.activeLevel=h.dataset.level,this.currentIndex=0,this.applyFilter(),this.renderLayout()})});const t=this.container.querySelector("#category-select");t&&t.addEventListener("change",h=>{this.activeCategory=h.target.value,this.currentIndex=0,this.applyFilter(),this.renderLayout()});const i=this.container.querySelector("#reset-filters-btn");i&&i.addEventListener("click",()=>{this.activeLevel="all",this.activeCategory="all",this.currentIndex=0,this.applyFilter(),this.renderLayout()});const a=this.container.querySelector(".syntax-rule-banner");a&&((f=a.querySelector(".rule-banner-header"))==null||f.addEventListener("click",()=>{a.classList.toggle("expanded")}));const n=this.container.querySelector("#tokens-pool");n&&n.addEventListener("click",h=>{const v=h.target.closest(".word-chip.available");if(!v)return;const k=v.dataset.tokenId,b=this.poolTokens.findIndex(S=>S.id===k);if(b!==-1){const[S]=this.poolTokens.splice(b,1);this.trayTokens.push(S),this.playClickSound(),this.refreshTrayAndPool()}});const s=this.container.querySelector("#sentence-tray");s&&s.addEventListener("click",h=>{const v=h.target.closest(".word-chip.placed");if(!v)return;const k=v.dataset.tokenId,b=this.trayTokens.findIndex(S=>S.id===k);if(b!==-1){const[S]=this.trayTokens.splice(b,1);this.poolTokens.push(S),this.playClickSound(),this.refreshTrayAndPool()}});const r=this.container.querySelector("#clear-tray-btn");r&&r.addEventListener("click",()=>{this.trayTokens.length!==0&&(this.poolTokens=[...this.poolTokens,...this.trayTokens],this.trayTokens=[],this.refreshTrayAndPool())});const o=this.container.querySelector("#undo-token-btn");o&&o.addEventListener("click",()=>{if(this.trayTokens.length===0)return;const h=this.trayTokens.pop();this.poolTokens.push(h),this.refreshTrayAndPool()});const l=this.container.querySelector("#speak-prompt-btn");l&&l.addEventListener("click",()=>{this.filteredExercises[this.currentIndex]&&m.toast("İngilizce karşılığını yukarıdaki kelimelerle oluşturun!","info")});const d=this.container.querySelector("#hint-sentence-btn");d&&d.addEventListener("click",()=>{const h=this.filteredExercises[this.currentIndex];if(!h)return;const v=this.trayTokens.length;if(v<h.tokens.length){const k=h.tokens[v],b=this.poolTokens.find(S=>S.text.toLowerCase()===k.toLowerCase());if(b){m.toast(`💡 İpucu: Bir sonraki kelime "${k}" olmalı.`,"info");const S=this.container.querySelector(`[data-token-id="${b.id}"]`);S&&(S.classList.add("hint-highlight"),setTimeout(()=>S.classList.remove("hint-highlight"),2e3))}else m.toast("💡 İpucu: Şu ana kadar yerleştirdiğiniz kelimelerde bir sıra hatası olabilir.","warning")}else m.toast('Tüm kelimeleri yerleştirdiniz. "Kontrol Et" butonuna tıklayın!',"info")});const u=this.container.querySelector("#check-sentence-btn");u&&u.addEventListener("click",()=>this.handleCheck());const y=this.container.querySelector("#next-sentence-skip-btn");y&&y.addEventListener("click",()=>this.goToNext()),this.bindResultBoxEvents()}bindResultBoxEvents(){const e=this.container.querySelector("#next-sentence-btn");e&&e.addEventListener("click",()=>this.goToNext());const t=this.container.querySelector("#retry-sentence-btn");t&&t.addEventListener("click",()=>{this.firstAttempt=!1,this.isSubmitted=!1,this.loadCurrentExercise(),this.renderLayout()});const i=this.container.querySelector("#reveal-solution-btn");i&&i.addEventListener("click",()=>{const s=this.filteredExercises[this.currentIndex];s&&(this.trayTokens=s.tokens.map((r,o)=>({id:`token-sol-${o}`,text:r})),this.poolTokens=[],this.handleCheck())});const a=this.container.querySelector("#speak-correct-normal");a&&a.addEventListener("click",()=>{const s=this.filteredExercises[this.currentIndex];s&&A.speak(s.correct_sentence,{rate:1})});const n=this.container.querySelector("#speak-correct-slow");n&&n.addEventListener("click",()=>{const s=this.filteredExercises[this.currentIndex];s&&A.speak(s.correct_sentence,{rate:.75})})}refreshTrayAndPool(){this.filteredExercises[this.currentIndex];const e=this.container.querySelector("#sentence-tray"),t=this.container.querySelector("#tokens-pool"),i=this.container.querySelector("#check-sentence-btn"),a=this.container.querySelector("#undo-token-btn"),n=this.container.querySelector("#clear-tray-btn");e&&(this.trayTokens.length===0?(e.classList.add("empty"),e.innerHTML=`
          <div class="tray-placeholder">
            <span class="placeholder-icon">👇</span>
            <span>Aşağıdaki kelime bloklarına tıklayarak cümlenizi kurun...</span>
          </div>
        `):(e.classList.remove("empty"),e.innerHTML=this.trayTokens.map((s,r)=>`
          <button class="word-chip placed animate-pop" data-token-id="${s.id}" data-tray-index="${r}" title="Kaldırmak için tıklayın">
            <span class="chip-text">${s.text}</span>
            <span class="chip-remove">×</span>
          </button>
        `).join(""))),t&&(this.poolTokens.length===0?t.innerHTML='<div class="pool-empty-note">Tüm kelimeler cümleye yerleştirildi ✨</div>':t.innerHTML=this.poolTokens.map(s=>`
          <button class="word-chip available animate-scale" data-token-id="${s.id}">
            ${s.text}
          </button>
        `).join("")),i&&(i.disabled=this.trayTokens.length===0),a&&(a.disabled=this.trayTokens.length===0),n&&(n.disabled=this.trayTokens.length===0)}async handleCheck(){const e=this.filteredExercises[this.currentIndex];if(!e)return;const t=this.trayTokens.map(i=>i.text).join(" ");try{const i=await x.submitSyntaxExercise(e.id,t,this.firstAttempt);if(this.isSubmitted=!0,this.isCorrect=i.isCorrect,this.resultData=i,i.sentenceFormationSkill){const r=m.get("skills")||{};r.sentence_formation=i.sentenceFormationSkill,m.set("skills",r)}const a=m.get("stats")||{},n=m.get("skills")||{};J(a,n),i.isCorrect?(this.playSuccessChime(),A.speak(e.correct_sentence,{rate:1})):this.playErrorSound(),this.renderLayout();const s=this.container.querySelector("#syntax-result-box");s&&s.scrollIntoView({behavior:"smooth",block:"nearest"})}catch(i){m.toast(`Hata: ${i.message}`,"error")}}goToNext(){this.currentIndex+1<this.filteredExercises.length?this.currentIndex+=1:(this.currentIndex=0,m.toast("Tebrikler! Bu kategorideki tüm cümleleri tamamladınız!","success")),this.loadCurrentExercise(),this.renderLayout()}playClickSound(){try{if(!this.audioCtx){const i=window.AudioContext||window.webkitAudioContext;i&&(this.audioCtx=new i)}if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.createOscillator(),t=this.audioCtx.createGain();e.type="sine",e.frequency.setValueAtTime(520,this.audioCtx.currentTime),e.frequency.exponentialRampToValueAtTime(780,this.audioCtx.currentTime+.05),t.gain.setValueAtTime(.08,this.audioCtx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+.05),e.connect(t),t.connect(this.audioCtx.destination),e.start(),e.stop(this.audioCtx.currentTime+.05)}catch{}}playSuccessChime(){try{if(!this.audioCtx){const i=window.AudioContext||window.webkitAudioContext;i&&(this.audioCtx=new i)}if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,a)=>{const n=this.audioCtx.createOscillator(),s=this.audioCtx.createGain();n.type="triangle",n.frequency.setValueAtTime(i,e+a*.08),s.gain.setValueAtTime(.12,e+a*.08),s.gain.exponentialRampToValueAtTime(.001,e+a*.08+.35),n.connect(s),s.connect(this.audioCtx.destination),n.start(e+a*.08),n.stop(e+a*.08+.35)})}catch{}}playErrorSound(){try{if(!this.audioCtx){const a=window.AudioContext||window.webkitAudioContext;a&&(this.audioCtx=new a)}if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.currentTime,t=this.audioCtx.createOscillator(),i=this.audioCtx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,e),t.frequency.linearRampToValueAtTime(140,e+.18),i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(i),i.connect(this.audioCtx.destination),t.start(e),t.stop(e+.2)}catch{}}destroy(){if(this.audioCtx&&this.audioCtx.state!=="closed")try{this.audioCtx.close()}catch{}}}class me{constructor(){this.viewport=document.getElementById("viewport"),this.pageTitle=document.getElementById("page-title"),this.authModal=null,this.currentView=null,this.views={dashboard:new X,assessment:new ie,grammar:new ae,vocabulary:new ne,syntax:new he,reading:new se,listening:new re,writing:new oe,speaking:new le,pronunciation:new ce,errors:new de,progress:new ue},this.titles={dashboard:"Genel Bakış & Günlük Rutin",assessment:"10 Becerili Seviye Belirleme Sınavı",grammar:"Gramer Akademisi & Kurallar",vocabulary:"Akıllı Kelime Kartları (SRS)",syntax:"Cümle Kurma & Sözdizimi Laboratuvarı",reading:"Okuma & Anlama Laboratuvarı",listening:"Dinleme & Telaffuz Laboratuvarı",writing:"Yazma Stüdyosu & Anlık Değerlendirme",speaking:"Konuşma & Diyalog Simülatörü",pronunciation:"Telaffuz & Aksan Eğitimi",errors:"Kişisel Hata Defteri",progress:"Gelişim Analizi & Beceriler"}}async init(){this.bindNavigation(),this.bindSessionTimer(),this.bindSidebarToggle(),this.bindLogout(),this.registerServiceWorker(),$.initGlobalListener();const e=()=>{D().catch(()=>{})};typeof window<"u"&&("requestIdleCallback"in window?window.requestIdleCallback(e,{timeout:3e3}):setTimeout(e,1500)),m.on("view:change",t=>{this.navigateTo(t)}),await this.ensureUserSession()}async ensureUserSession(){const e=x.getCurrentUser();e?(m.setUser(e),this.updateUserDisplay(e),this.navigateTo("dashboard")):this.showLoginModal()}showLoginModal(){this.authModal=new Q(e=>{m.setUser(e),this.updateUserDisplay(e),this.navigateTo("dashboard")}),this.authModal.show()}bindLogout(){var e;(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",()=>{x.logout(),m.setUser(null),this.updateUserDisplay(null),m.showToast("Oturum kapatıldı. Yeni bir kullanıcı ile giriş yapabilirsiniz.","info"),this.showLoginModal()})}updateUserDisplay(e){const t=document.getElementById("header-username"),i=document.getElementById("header-user-avatar"),a=document.getElementById("header-user-status"),n=document.getElementById("sidebar-cefr-badge");if(!e){t&&(t.textContent="Giriş Yapılmadı"),i&&(i.textContent="A1"),a&&(a.textContent="0'dan Başlangıç Yolu"),n&&(n.textContent="A1");return}if(t&&(t.textContent=e.displayName||e.username),i){const s=(e.displayName||e.username||"A1").slice(0,2).toUpperCase();i.textContent=s}a&&(a.textContent="0'dan Başlangıç (A1)"),n&&(n.textContent=e.cefr_level||"A1")}bindNavigation(){var e;document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.view;i&&this.navigateTo(i)})}),(e=document.getElementById("btn-quick-practice"))==null||e.addEventListener("click",()=>{this.navigateTo("dashboard")})}navigateTo(e){if(!x.getCurrentUser()){this.showLoginModal();return}if(!this.views[e])return;if(this.currentView&&this.views[this.currentView]&&typeof this.views[this.currentView].destroy=="function")try{this.views[this.currentView].destroy()}catch(i){console.warn(`Error destroying view ${this.currentView}:`,i)}this.currentView=e,document.querySelectorAll(".nav-item").forEach(i=>{i.classList.toggle("active",i.dataset.view===e)}),this.pageTitle&&(this.pageTitle.textContent=this.titles[e]||"LinguaForge"),this.viewport&&(this.viewport.scrollTop=0),this.views[e].render(this.viewport);const t=document.getElementById("sidebar");t&&window.innerWidth<=768&&t.classList.remove("open")}bindSessionTimer(){m.startSessionTimer();const e=document.getElementById("session-timer");m.on("timer:tick",t=>{if(e){const i=Math.floor(t/60),a=t%60;e.textContent=`${String(i).padStart(2,"0")}:${String(a).padStart(2,"0")}`}})}bindSidebarToggle(){const e=document.getElementById("sidebar-toggle"),t=document.getElementById("sidebar");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("open")})}registerServiceWorker(){typeof window<"u"&&"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{t.state==="installed"&&navigator.serviceWorker.controller&&m.toast("Yeni bir güncelleme yüklendi! Sayfayı yenileyerek yeni özelliklere erişebilirsiniz.","info")})})}).catch(e=>{console.debug("ServiceWorker notice:",e.message)})})}}window.addEventListener("DOMContentLoaded",()=>{new me().init()});
