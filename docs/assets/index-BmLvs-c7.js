(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const H="modulepreload",V=function(c,e){return new URL(c,e).href},M={},j=function(e,t,a){let i=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=V(l,a),l in M)return;M[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!a)for(let m=s.length-1;m>=0;m--){const k=s[m];if(k.href===l&&(!u||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const v=document.createElement("link");if(v.rel=u?"stylesheet":H,u||(v.as="script"),v.crossOrigin="",v.href=l,o&&v.setAttribute("nonce",o),document.head.appendChild(v),u)return new Promise((m,k)=>{v.addEventListener("load",m),v.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return i.then(s=>{for(const r of s||[])r.status==="rejected"&&n(r.reason);return e().catch(n)})},T={grammar_topics:[{id:1,name:"Present Simple",slug:"present-simple",category:"tenses",cefr_level:"A1",description:"Actions that happen regularly, facts, and routines.",explanation_en:"We use the Present Simple for habits, routines, general truths, and permanent situations. Add -s/-es for he/she/it.",explanation_tr:"Geniş zaman. Alışkanlıklar, rutin eylemler, genel doğrular ve kalıcı durumlar için kullanılır. He/she/it için fiile -s/-es eklenir.",examples:`[{"sentence":"I work every day.","translation":"Her gün çalışırım."},{"sentence":"She plays tennis on Sundays.","translation":"Pazar günleri tenis oynar."},{"sentence":"Water boils at 100 degrees.","translation":"Su 100 derecede kaynar."},{"sentence":"They don't like coffee.","translation":"Kahve sevmezler."},{"sentence":"Does he speak English?","translation":"İngilizce konuşur mu?"}]`,rules:'["Affirmative: Subject + V1 (he/she/it + V1+s/es)","Negative: Subject + do/does + not + V1","Question: Do/Does + Subject + V1?","Time expressions: always, usually, often, sometimes, rarely, never, every day/week/month","Third person singular: add -s (works), -es (watches, goes), -ies (studies)"]',common_mistakes:`[{"wrong":"He work every day.","correct":"He works every day.","explanation":"He/she/it requires -s on the verb."},{"wrong":"She don't like it.","correct":"She doesn't like it.","explanation":"Use \\"doesn't\\" for he/she/it negatives."},{"wrong":"Does she works here?","correct":"Does she work here?","explanation":"After does/doesn't, use the base form."},{"wrong":"I am go to school.","correct":"I go to school.","explanation":"Don't use \\"am\\" with Present Simple verbs."}]`,order_index:1,prerequisite_topics:"[]"},{id:2,name:"Present Continuous",slug:"present-continuous",category:"tenses",cefr_level:"A1",description:"Actions happening right now or temporary actions.",explanation_en:"We use the Present Continuous for actions happening now, temporary situations, and future arrangements. Form: am/is/are + verb-ing.",explanation_tr:"Şimdiki zaman. Şu anda olan eylemler, geçici durumlar ve gelecek planları için kullanılır. Yapı: am/is/are + fiil-ing.",examples:'[{"sentence":"I am reading a book right now.","translation":"Şu anda bir kitap okuyorum."},{"sentence":"She is working from home this week.","translation":"Bu hafta evden çalışıyor."},{"sentence":"They are not watching TV.","translation":"Televizyon izlemiyorlar."},{"sentence":"Are you listening to me?","translation":"Beni dinliyor musun?"},{"sentence":"We are meeting them tomorrow.","translation":"Yarın onlarla buluşuyoruz."}]',rules:'["Affirmative: Subject + am/is/are + V-ing","Negative: Subject + am/is/are + not + V-ing","Question: Am/Is/Are + Subject + V-ing?","Time expressions: now, right now, at the moment, currently, today, this week","Spelling: drop -e (make→making), double consonant (run→running), -ie→ying (lie→lying)"]',common_mistakes:'[{"wrong":"I reading a book.","correct":"I am reading a book.","explanation":"You need am/is/are before the -ing verb."},{"wrong":"She is work now.","correct":"She is working now.","explanation":"Add -ing to the main verb."},{"wrong":"I am knowing the answer.","correct":"I know the answer.","explanation":"Stative verbs (know, like, want) are usually not used in continuous."}]',order_index:2,prerequisite_topics:'["present-simple"]'},{id:3,name:"Past Simple",slug:"past-simple",category:"tenses",cefr_level:"A2",description:"Completed actions in the past.",explanation_en:"We use Past Simple for finished actions at a specific time in the past. Regular verbs add -ed. Irregular verbs have special forms.",explanation_tr:"Geçmiş zaman. Geçmişte belirli bir zamanda tamamlanmış eylemler için kullanılır. Düzenli fiillere -ed eklenir. Düzensiz fiillerin özel halleri vardır.",examples:`[{"sentence":"I visited London last year.","translation":"Geçen yıl Londra'yı ziyaret ettim."},{"sentence":"She went to the store yesterday.","translation":"Dün mağazaya gitti."},{"sentence":"They didn't come to the party.","translation":"Partiye gelmediler."},{"sentence":"Did you see the movie?","translation":"Filmi gördün mü?"},{"sentence":"He bought a new car.","translation":"Yeni bir araba aldı."}]`,rules:'["Affirmative: Subject + V2 (regular: +ed, irregular: special form)","Negative: Subject + did + not + V1","Question: Did + Subject + V1?","Time expressions: yesterday, last week/month/year, ago, in 2020, when I was young","Regular -ed: worked, played, studied, stopped"]',common_mistakes:`[{"wrong":"I goed to school.","correct":"I went to school.","explanation":"\\"Go\\" is irregular. Past form is \\"went\\"."},{"wrong":"Did you went there?","correct":"Did you go there?","explanation":"After did/didn't, use base form (V1)."},{"wrong":"She didn't went.","correct":"She didn't go.","explanation":"After didn't, always use base form."}]`,order_index:3,prerequisite_topics:'["present-simple"]'},{id:4,name:"Past Continuous",slug:"past-continuous",category:"tenses",cefr_level:"A2",description:"Actions in progress at a specific time in the past.",explanation_en:"We use Past Continuous for actions that were in progress at a specific moment in the past, or for background actions when something else happened.",explanation_tr:"Geçmişte devam eden zaman. Geçmişte belirli bir anda devam eden eylemler veya başka bir olay olduğunda arka planda olan eylemler için kullanılır.",examples:`[{"sentence":"I was reading when the phone rang.","translation":"Telefon çaldığında kitap okuyordum."},{"sentence":"They were playing football at 3 PM.","translation":"Saat 3'te futbol oynuyorlardı."},{"sentence":"She wasn't sleeping when I called.","translation":"Aradığımda uyumuyordu."},{"sentence":"Were you working yesterday evening?","translation":"Dün akşam çalışıyor muydun?"}]`,rules:'["Affirmative: Subject + was/were + V-ing","Negative: Subject + was/were + not + V-ing","Question: Was/Were + Subject + V-ing?","Often used with Past Simple: \\"While I was walking, I saw a friend.\\"","Time expressions: while, when, at that time, at 3 PM yesterday"]',common_mistakes:'[{"wrong":"I was watch TV.","correct":"I was watching TV.","explanation":"Use V-ing after was/were."},{"wrong":"While I studied, the phone rang.","correct":"While I was studying, the phone rang.","explanation":"Use Past Continuous for the ongoing action, Past Simple for the interruption."}]',order_index:4,prerequisite_topics:'["past-simple", "present-continuous"]'},{id:5,name:"Present Perfect",slug:"present-perfect",category:"tenses",cefr_level:"B1",description:"Past actions connected to the present, experiences, and recent events.",explanation_en:"We use Present Perfect for experiences, recent actions with present results, and actions from a period that hasn't finished. Form: have/has + past participle (V3).",explanation_tr:"Geçmişte başlayıp etkisi hâlâ devam eden eylemler, deneyimler ve yakın zamandaki olaylar için kullanılır. Yapı: have/has + geçmiş ortaç (V3). Türkçede doğrudan karşılığı yoktur.",examples:`[{"sentence":"I have visited Paris three times.","translation":"Paris'i üç kez ziyaret ettim. (Deneyim)"},{"sentence":"She has lost her keys.","translation":"Anahtarlarını kaybetti. (Şu an anahtarları yok)"},{"sentence":"Have you ever eaten sushi?","translation":"Hiç suşi yedin mi?"},{"sentence":"They haven't finished yet.","translation":"Henüz bitirmediler."},{"sentence":"I have lived here since 2010.","translation":"2010'dan beri burada yaşıyorum."}]`,rules:`["Affirmative: Subject + have/has + V3 (past participle)","Negative: Subject + have/has + not + V3","Question: Have/Has + Subject + V3?","Key words: ever, never, already, yet, just, since, for, recently, so far","Use \\"since\\" for a point in time (since Monday), \\"for\\" for a duration (for two years)","Don't use with specific past times (yesterday, last week, in 2019) — use Past Simple instead"]`,common_mistakes:`[{"wrong":"I have went there.","correct":"I have gone there.","explanation":"Use the past participle (V3), not the past simple (V2). go→went→gone"},{"wrong":"I have visited Paris yesterday.","correct":"I visited Paris yesterday.","explanation":"Don't use Present Perfect with specific past times."},{"wrong":"She has lose her keys.","correct":"She has lost her keys.","explanation":"Use the past participle: lose→lost→lost"},{"wrong":"I live here since 2010.","correct":"I have lived here since 2010.","explanation":"Use Present Perfect with \\"since\\" and \\"for\\" for continuing actions."}]`,order_index:5,prerequisite_topics:'["past-simple"]'},{id:6,name:"Present Perfect Continuous",slug:"present-perfect-continuous",category:"tenses",cefr_level:"B1",description:"Actions that started in the past and are still continuing, emphasizing duration.",explanation_en:"We use Present Perfect Continuous to emphasize the duration of an action that started in the past and continues now, or has recently stopped with visible results.",explanation_tr:"Geçmişte başlayıp hâlâ devam eden eylemin süresini vurgular. Yapı: have/has + been + V-ing. Eylemin ne kadar süredir devam ettiğini anlatır.",examples:`[{"sentence":"I have been studying for three hours.","translation":"Üç saattir ders çalışıyorum."},{"sentence":"It has been raining all day.","translation":"Bütün gün yağmur yağıyor."},{"sentence":"She has been working here since January.","translation":"Ocak'tan beri burada çalışıyor."},{"sentence":"How long have you been waiting?","translation":"Ne kadar süredir bekliyorsun?"}]`,rules:'["Affirmative: Subject + have/has + been + V-ing","Negative: Subject + have/has + not + been + V-ing","Question: How long + have/has + Subject + been + V-ing?","Emphasizes DURATION, while Present Perfect emphasizes RESULT","Compare: \\"I have read the book.\\" (finished) vs \\"I have been reading the book.\\" (still reading or just stopped)"]',common_mistakes:`[{"wrong":"I have been know him for years.","correct":"I have known him for years.","explanation":"Stative verbs (know, like, love) don't use continuous form."},{"wrong":"She has been working here since three months.","correct":"She has been working here for three months.","explanation":"Use \\"for\\" with durations, \\"since\\" with points in time."}]`,order_index:6,prerequisite_topics:'["present-perfect", "present-continuous"]'},{id:7,name:"Past Perfect",slug:"past-perfect",category:"tenses",cefr_level:"B1",description:"An action that happened before another action in the past.",explanation_en:"We use Past Perfect to show that one action happened BEFORE another action in the past. Form: had + past participle (V3).",explanation_tr:'Geçmişteki bir eylemden önce tamamlanmış olan bir eylemi anlatır. "Geçmişin geçmişi" olarak düşünülebilir. Yapı: had + V3.',examples:'[{"sentence":"I had already eaten when she arrived.","translation":"O geldiğinde ben çoktan yemiştim."},{"sentence":"They had left before the rain started.","translation":"Yağmur başlamadan önce gitmişlerdi."},{"sentence":"She realized she had forgotten her wallet.","translation":"Cüzdanını unuttuğunu fark etti."}]',rules:'["Affirmative: Subject + had + V3","Negative: Subject + had + not + V3","Question: Had + Subject + V3?","Key words: before, after, already, when, by the time, until","The earlier action uses Past Perfect, the later action uses Past Simple"]',common_mistakes:'[{"wrong":"When I arrived, she left.","correct":"When I arrived, she had already left.","explanation":"Use Past Perfect for the action that happened first."},{"wrong":"I had went to school.","correct":"I had gone to school.","explanation":"Use V3 (past participle) after had."}]',order_index:7,prerequisite_topics:'["past-simple", "present-perfect"]'},{id:8,name:"Future Forms",slug:"future-forms",category:"tenses",cefr_level:"A2",description:"Different ways to talk about the future: will, going to, Present Continuous.",explanation_en:'English has multiple ways to talk about the future: "will" for predictions/decisions, "going to" for plans/intentions, Present Continuous for arrangements.',explanation_tr:'İngilizcede gelecek zaman için birden fazla yapı kullanılır: "will" anlık kararlar ve tahminler için, "going to" planlar ve niyetler için, Present Continuous düzenlenmiş planlar için.',examples:`[{"sentence":"I will help you.","translation":"Sana yardım edeceğim. (Anlık karar)"},{"sentence":"I'm going to study medicine.","translation":"Tıp okuyacağım. (Önceden planlanmış)"},{"sentence":"We are meeting them at 7.","translation":"Onlarla 7'de buluşuyoruz. (Düzenlenmiş)"},{"sentence":"It will probably rain tomorrow.","translation":"Yarın muhtemelen yağmur yağacak. (Tahmin)"},{"sentence":"Look at the clouds! It's going to rain.","translation":"Bulutlara bak! Yağmur yağacak. (Kanıt var)"}]`,rules:`["\\"will\\" + V1: spontaneous decisions, promises, predictions (without evidence)","\\"be going to\\" + V1: plans made before, intentions, predictions (with evidence)","Present Continuous: fixed arrangements with other people","\\"will\\" is often used in offers: \\"I'll carry that for you.\\"","\\"going to\\" is often used for intentions: \\"I'm going to learn English.\\""]`,common_mistakes:`[{"wrong":"I will to go there.","correct":"I will go there.","explanation":"Don't use \\"to\\" after \\"will\\"."},{"wrong":"I go to London next week.","correct":"I'm going to London next week.","explanation":"Use a future form, not Present Simple, for future plans."}]`,order_index:8,prerequisite_topics:'["present-simple", "present-continuous"]'},{id:9,name:"Modal Verbs",slug:"modal-verbs",category:"modals",cefr_level:"A2",description:"Can, could, should, must, may, might, would — expressing ability, possibility, permission, obligation.",explanation_en:"Modal verbs modify the meaning of the main verb to express ability, possibility, permission, obligation, advice, etc. They don't change form.",explanation_tr:"Yardımcı fiiller ana fiilin anlamını değiştirir: yetenek, olasılık, izin, zorunluluk, tavsiye vb. ifade eder. Çekimlenmezler.",examples:'[{"sentence":"I can swim.","translation":"Yüzebilirim. (Yetenek)"},{"sentence":"You should see a doctor.","translation":"Bir doktora görünmelisin. (Tavsiye)"},{"sentence":"You must wear a seatbelt.","translation":"Emniyet kemeri takmalısın. (Zorunluluk)"},{"sentence":"It might rain today.","translation":"Bugün yağmur yağabilir. (Olasılık)"},{"sentence":"Could you help me?","translation":"Bana yardım edebilir misiniz? (Rica)"}]',rules:'["Modal + base verb (V1): She can speak French.","No -s for third person: He can (NOT cans)","can = ability/permission, could = past ability/polite requests","should = advice, must = obligation/strong probability","may/might = possibility, would = hypothetical/polite requests"]',common_mistakes:`[{"wrong":"He cans swim.","correct":"He can swim.","explanation":"Modals don't take -s."},{"wrong":"I must to go.","correct":"I must go.","explanation":"Don't use \\"to\\" after modals."},{"wrong":"She can to drive.","correct":"She can drive.","explanation":"After modals, use the base form directly."}]`,order_index:9,prerequisite_topics:'["present-simple"]'},{id:10,name:"Conditionals",slug:"conditionals",category:"conditionals",cefr_level:"B1",description:"If-clauses: Zero, First, Second, and Third conditionals.",explanation_en:"Conditionals express hypothetical situations and their results. Each type uses different tenses depending on how real or likely the situation is.",explanation_tr:"Koşul cümleleri varsayımsal durumları ve sonuçlarını ifade eder. Her tür, durumun ne kadar gerçek veya olası olduğuna göre farklı zamanlar kullanır.",examples:'[{"sentence":"If you heat water, it boils.","translation":"Suyu ısıtırsan kaynar. (Zero — genel doğru)"},{"sentence":"If it rains, I will stay home.","translation":"Yağmur yağarsa evde kalacağım. (First — olası)"},{"sentence":"If I had money, I would travel.","translation":"Param olsa seyahat ederdim. (Second — hayal)"},{"sentence":"If I had studied, I would have passed.","translation":"Çalışsaydım geçerdim. (Third — geçmişte olmadı)"}]',rules:`["Zero: If + Present Simple, Present Simple (facts)","First: If + Present Simple, will + V1 (real possibility)","Second: If + Past Simple, would + V1 (unreal present)","Third: If + Past Perfect, would + have + V3 (unreal past)","Don't use \\"will\\" in the if-clause for First Conditional"]`,common_mistakes:`[{"wrong":"If I will see him, I will tell him.","correct":"If I see him, I will tell him.","explanation":"Don't use \\"will\\" in the if-clause."},{"wrong":"If I would have money, I would travel.","correct":"If I had money, I would travel.","explanation":"Use Past Simple in the if-clause for Second Conditional."}]`,order_index:10,prerequisite_topics:'["present-simple", "past-simple", "future-forms"]'},{id:11,name:"Passive Voice",slug:"passive-voice",category:"voice",cefr_level:"B1",description:"When the focus is on the action or the receiver, not the doer.",explanation_en:"We use Passive Voice when the action or its receiver is more important than who does it. Form: be + past participle (V3).",explanation_tr:"Eylemi yapan kişi değil, eylemin kendisi veya eylemi alan önemli olduğunda Edilgen Çatı kullanılır. Yapı: be + V3.",examples:'[{"sentence":"The book was written by J.K. Rowling.","translation":"Kitap J.K. Rowling tarafından yazıldı."},{"sentence":"English is spoken worldwide.","translation":"İngilizce dünya çapında konuşulur."},{"sentence":"The window was broken.","translation":"Cam kırıldı."},{"sentence":"The project will be completed next month.","translation":"Proje gelecek ay tamamlanacak."}]',rules:'["Present: am/is/are + V3 (English is spoken here.)","Past: was/were + V3 (The car was stolen.)","Future: will be + V3 (The work will be finished.)","Perfect: have/has/had been + V3 (The letter has been sent.)","Use \\"by\\" to mention the agent: \\"It was made by Apple.\\""]',common_mistakes:'[{"wrong":"The book written by her.","correct":"The book was written by her.","explanation":"You need a form of \\"be\\" in passive sentences."},{"wrong":"The window was broke.","correct":"The window was broken.","explanation":"Use the past participle (V3), not the past simple."}]',order_index:11,prerequisite_topics:'["present-simple", "past-simple"]'},{id:12,name:"Reported Speech",slug:"reported-speech",category:"speech",cefr_level:"B2",description:"Reporting what someone said without quoting them directly.",explanation_en:"Reported Speech (Indirect Speech) is used to tell someone what another person said. Tenses usually shift back.",explanation_tr:"Dolaylı Anlatım, başka birinin söylediğini aktarmak için kullanılır. Zamanlar genellikle bir adım geriye kayar.",examples:'[{"sentence":"\\"I am tired.\\" → She said (that) she was tired.","translation":"\\"Yorgunum.\\" → Yorgun olduğunu söyledi."},{"sentence":"\\"I will come.\\" → He said he would come.","translation":"\\"Geleceğim.\\" → Geleceğini söyledi."},{"sentence":"\\"Do you like it?\\" → She asked if I liked it.","translation":"\\"Beğendin mi?\\" → Beğenip beğenmediğimi sordu."}]',rules:'["Present Simple → Past Simple","Present Continuous → Past Continuous","Past Simple → Past Perfect","will → would, can → could, may → might","this → that, here → there, now → then, today → that day"]',common_mistakes:'[{"wrong":"She said she is tired.","correct":"She said she was tired.","explanation":"Shift the tense back when reporting."},{"wrong":"He asked do I like it.","correct":"He asked if I liked it.","explanation":"Use \\"if/whether\\" for yes/no questions and change word order."}]',order_index:12,prerequisite_topics:'["past-simple", "present-perfect"]'},{id:13,name:"Relative Clauses",slug:"relative-clauses",category:"clauses",cefr_level:"B1",description:"Using who, which, that, where, when to add information about nouns.",explanation_en:'Relative clauses give extra information about a noun. We use "who" for people, "which" for things, "that" for both, "where" for places, "when" for times.',explanation_tr:'Sıfat cümlecikleri bir isim hakkında ek bilgi verir. İnsanlar için "who", şeyler için "which", her ikisi için "that", yerler için "where", zamanlar için "when" kullanılır.',examples:`[{"sentence":"The woman who lives next door is a teacher.","translation":"Yan komşuda yaşayan kadın bir öğretmendir."},{"sentence":"The book which I read was interesting.","translation":"Okuduğum kitap ilginçti."},{"sentence":"That's the restaurant where we met.","translation":"Tanıştığımız restoran orası."}]`,rules:'["who = for people (subject/object)","which = for things (subject/object)","that = for people or things (informal)","where = for places, when = for times","Defining clauses: essential info (no commas)","Non-defining clauses: extra info (with commas)"]',common_mistakes:'[{"wrong":"The man which called you is my brother.","correct":"The man who called you is my brother.","explanation":"Use \\"who\\" for people."},{"wrong":"The car who I bought is red.","correct":"The car which I bought is red.","explanation":"Use \\"which\\" or \\"that\\" for things."}]',order_index:13,prerequisite_topics:'["present-simple", "past-simple"]'},{id:14,name:"Articles",slug:"articles",category:"determiners",cefr_level:"A2",description:"Using a, an, the, or no article correctly.",explanation_en:'Articles (a/an/the) come before nouns. "A/an" is indefinite (any one), "the" is definite (specific one), and sometimes no article is needed.',explanation_tr:'Artikeller (a/an/the) isimlerden önce gelir. "A/an" belirsiz (herhangi bir), "the" belirli (bilinen, spesifik), bazen hiç artikel gerekmez.',examples:'[{"sentence":"I saw a dog in the park.","translation":"Parkta bir köpek gördüm."},{"sentence":"The dog was very friendly.","translation":"Köpek çok cana yakındı. (Bildiğimiz köpek)"},{"sentence":"She is an engineer.","translation":"O bir mühendis."},{"sentence":"I love music.","translation":"Müziği seviyorum. (Genel — artikel yok)"}]',rules:'["\\"a\\" before consonant sounds: a book, a university","\\"an\\" before vowel sounds: an apple, an hour","\\"the\\" = both speakers know which one, unique things, superlatives","No article: general/uncountable concepts (I like coffee), plural generalizations (Dogs are loyal)","No article with: most countries, languages, meals, sports"]',common_mistakes:`[{"wrong":"I like the music.","correct":"I like music.","explanation":"Don't use \\"the\\" when speaking generally."},{"wrong":"She is engineer.","correct":"She is an engineer.","explanation":"Use a/an with jobs."},{"wrong":"I went to the home.","correct":"I went home.","explanation":"\\"Go home\\" doesn't use an article."}]`,order_index:14,prerequisite_topics:"[]"},{id:15,name:"Prepositions",slug:"prepositions",category:"prepositions",cefr_level:"A2",description:"In, on, at, for, with, by, about, to, from — location, time, movement, and more.",explanation_en:"Prepositions show relationships between words — location, time, direction, cause, etc. They are often unpredictable and must be learned in context.",explanation_tr:"Edatlar kelimeler arasındaki ilişkileri gösterir — yer, zaman, yön, neden vb. Çoğu zaman tahmin edilemez ve bağlam içinde öğrenilmelidir.",examples:`[{"sentence":"I live in Istanbul.","translation":"İstanbul'da yaşıyorum."},{"sentence":"The meeting is on Monday at 3 PM.","translation":"Toplantı Pazartesi saat 3'te."},{"sentence":"She's good at mathematics.","translation":"Matematikte iyidir."},{"sentence":"I'm interested in science.","translation":"Bilimle ilgileniyorum."}]`,rules:'["Time: at (specific time), on (days/dates), in (months/years/seasons/parts of day)","Place: at (specific point), on (surface), in (enclosed space)","at school/work/home, on the bus/train, in a car/taxi","Verb + preposition combos must be memorized: listen TO, look AT, wait FOR, depend ON","Adjective + preposition combos: good AT, interested IN, afraid OF, responsible FOR"]',common_mistakes:`[{"wrong":"I'm interested for science.","correct":"I'm interested in science.","explanation":"\\"Interested\\" takes \\"in\\", not \\"for\\"."},{"wrong":"I arrived to school.","correct":"I arrived at school.","explanation":"\\"Arrive\\" takes \\"at\\" (place) or \\"in\\" (city/country)."},{"wrong":"I listen music.","correct":"I listen to music.","explanation":"\\"Listen\\" requires \\"to\\"."}]`,order_index:15,prerequisite_topics:"[]"},{id:16,name:"Gerunds and Infinitives",slug:"gerunds-infinitives",category:"verb_forms",cefr_level:"B1",description:"When to use V-ing and when to use to + V after certain verbs.",explanation_en:"Some verbs are followed by gerund (V-ing), some by infinitive (to + V), and some can take both. This must mostly be memorized.",explanation_tr:"Bazı fiillerden sonra isim-fiil (V-ing), bazılarından sonra mastar (to + V) gelir. Bazıları her ikisini de alabilir. Çoğunlukla ezberlenmesi gerekir.",examples:'[{"sentence":"I enjoy reading books.","translation":"Kitap okumaktan hoşlanırım. (enjoy + V-ing)"},{"sentence":"I want to learn English.","translation":"İngilizce öğrenmek istiyorum. (want + to V)"},{"sentence":"I stopped smoking.","translation":"Sigara içmeyi bıraktım. (V-ing = eylemi bıraktı)"},{"sentence":"I stopped to smoke.","translation":"Sigara içmek için durdum. (to V = amaç)"}]',rules:'["Gerund (V-ing) after: enjoy, finish, mind, avoid, keep, suggest, consider, practice, imagine","Infinitive (to V) after: want, need, decide, hope, plan, expect, agree, refuse, learn, promise","Both (different meaning): stop, remember, forget, try, regret","After prepositions, always use gerund: interested in learning, good at cooking","As subject, use gerund: \\"Swimming is good exercise.\\""]',common_mistakes:'[{"wrong":"I enjoy to read.","correct":"I enjoy reading.","explanation":"\\"Enjoy\\" is always followed by V-ing."},{"wrong":"I want learning.","correct":"I want to learn.","explanation":"\\"Want\\" is followed by \\"to + verb\\"."}]',order_index:16,prerequisite_topics:'["present-simple", "present-continuous"]'},{id:17,name:"Comparatives and Superlatives",slug:"comparatives-superlatives",category:"adjectives",cefr_level:"A2",description:"Comparing things: bigger, the biggest, more interesting, the most interesting.",explanation_en:"Comparatives compare two things (-er/more). Superlatives show the extreme (the -est/the most). Irregular forms exist.",explanation_tr:"Karşılaştırma sıfatları iki şeyi karşılaştırır (-er/more). Üstünlük sıfatları en üst dereceyi gösterir (the -est/the most).",examples:'[{"sentence":"She is taller than me.","translation":"Benden uzun."},{"sentence":"This is the most interesting book.","translation":"Bu en ilginç kitap."},{"sentence":"He is better than his brother at chess.","translation":"Satrançta kardeşinden iyidir."}]',rules:'["Short adj (1 syllable): -er/-est (tall→taller→tallest)","Adj ending in -y: -ier/-iest (happy→happier→happiest)","Long adj (2+ syllables): more/most (interesting→more interesting→most interesting)","Irregular: good→better→best, bad→worse→worst, far→farther→farthest","Comparatives use \\"than\\": She is older than me."]',common_mistakes:'[{"wrong":"She is more tall than me.","correct":"She is taller than me.","explanation":"Short adjectives use -er, not \\"more\\"."},{"wrong":"He is the most good.","correct":"He is the best.","explanation":"\\"Good\\" is irregular: good→better→best."}]',order_index:17,prerequisite_topics:"[]"},{id:18,name:"Question Formation",slug:"question-formation",category:"sentence_structure",cefr_level:"A1",description:"How to form questions in English: yes/no questions, Wh-questions, tag questions.",explanation_en:"English questions change word order. Yes/no questions invert the subject and auxiliary. Wh-questions start with a question word.",explanation_tr:"İngilizce sorularda sözcük sırası değişir. Evet/hayır soruları yardımcı fiili öne alır. Wh-soruları soru kelimesiyle başlar.",examples:`[{"sentence":"Do you like coffee?","translation":"Kahve sever misin?"},{"sentence":"Where do you live?","translation":"Nerede yaşıyorsun?"},{"sentence":"What are you doing?","translation":"Ne yapıyorsun?"},{"sentence":"You're coming, aren't you?","translation":"Geliyorsun, değil mi?"}]`,rules:'["Yes/No: Auxiliary + Subject + Main verb? (Do you work?)","Wh-: Wh-word + Auxiliary + Subject + Main verb? (Where do you work?)","Who/What as subject: Who works here? (no auxiliary needed)","Tag questions: positive → negative tag, negative → positive tag"]',common_mistakes:'[{"wrong":"Where you live?","correct":"Where do you live?","explanation":"You need \\"do/does\\" in Present Simple questions."},{"wrong":"What means this?","correct":"What does this mean?","explanation":"Use \\"does\\" and base form for Wh-questions."}]',order_index:18,prerequisite_topics:"[]"},{id:19,name:"Word Order",slug:"word-order",category:"sentence_structure",cefr_level:"A2",description:"The standard English sentence structure: Subject-Verb-Object and adverb placement.",explanation_en:"English follows SVO (Subject-Verb-Object) word order. Adverbs and adjectives have specific positions in the sentence.",explanation_tr:"İngilizce ÖYN (Özne-Yüklem-Nesne) sözcük sırasını takip eder. Zarflar ve sıfatlar cümlede belirli yerlere konur.",examples:'[{"sentence":"I always drink coffee in the morning.","translation":"Sabahları her zaman kahve içerim."},{"sentence":"She quickly finished her homework.","translation":"Ödevini hızlıca bitirdi."}]',rules:'["Basic order: Subject + Verb + Object (I read books)","Adverbs of frequency before main verb: I always eat breakfast","Adverbs of frequency after \\"be\\": She is always late","Adjectives before nouns: a big red car","Time expressions usually at end: I work every day"]',common_mistakes:'[{"wrong":"I drink always coffee.","correct":"I always drink coffee.","explanation":"Frequency adverbs go before the main verb."},{"wrong":"She is late always.","correct":"She is always late.","explanation":"Frequency adverbs go after \\"be\\"."}]',order_index:19,prerequisite_topics:'["present-simple"]'},{id:20,name:"Subject-Verb Agreement",slug:"subject-verb-agreement",category:"sentence_structure",cefr_level:"B1",description:"Making sure the subject and verb match in number.",explanation_en:"The verb must agree with its subject in number. Singular subjects take singular verbs, plural subjects take plural verbs.",explanation_tr:"Fiil, öznesiyle sayı bakımından uyumlu olmalıdır. Tekil özneler tekil fiiller, çoğul özneler çoğul fiiller alır.",examples:'[{"sentence":"The team works hard.","translation":"Takım çok çalışır."},{"sentence":"The students are studying.","translation":"Öğrenciler ders çalışıyor."},{"sentence":"Everyone has a different opinion.","translation":"Herkesin farklı bir görüşü var."}]',rules:'["Singular: he/she/it + V-s (The dog runs.)","Plural: they/we/you + V (The dogs run.)","everyone/everybody/someone/nobody = singular verb","The news IS (uncountable nouns are singular)","Neither...nor/Either...or: verb agrees with the nearest subject"]',common_mistakes:'[{"wrong":"Everyone have a phone.","correct":"Everyone has a phone.","explanation":"\\"Everyone\\" is singular and takes \\"has\\"."},{"wrong":"The news are bad.","correct":"The news is bad.","explanation":"\\"News\\" is uncountable and takes singular verb."}]',order_index:20,prerequisite_topics:'["present-simple"]'}],grammar_exercises:[{id:1,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"She ___ (go) to school every day.",options:null,correct_answer:"goes",explanation:'Third person singular: add -es to "go".',explanation_tr:'Üçüncü tekil şahıs için "go" fiiline -es eklenir.',hint:null,context:null},{id:2,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"They ___ (not/like) cold weather.",options:null,correct_answer:"don't like",explanation:`For plural subjects, use "don't" + base verb.`,explanation_tr:`Çoğul özneler için "don't" + yalın fiil kullanılır.`,hint:null,context:null},{id:3,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"He ___ breakfast at 7:30 AM every morning.",options:'["eat","eats","eating","is eat"]',correct_answer:"eats",explanation:"He/she/it takes verb-s in Present Simple.",explanation_tr:"He/she/it öznelerinde fiile -s takısı gelir.",hint:null,context:null},{id:4,topic_id:1,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:`Find and correct the error: "She don't like swimming."`,options:null,correct_answer:"She doesn't like swimming.",explanation:`Use "doesn't" for he/she/it negatives.`,explanation_tr:`He/she/it öznelerinde olumsuzluk için "doesn't" kullanılır.`,hint:null,context:null},{id:5,topic_id:1,exercise_type:"sentence_transform",cefr_level:"A1",difficulty:2,question:'Make this sentence negative: "He plays tennis on Sundays."',options:null,correct_answer:"He doesn't play tennis on Sundays.",explanation:"Negative form: doesn't + base verb (play).",explanation_tr:`Olumsuz yaparken "doesn't" gelir ve fiil yalın kalır.`,hint:null,context:null},{id:6,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"My brother ___ (watch) television in the evenings.",options:null,correct_answer:"watches",explanation:"Verbs ending in -ch add -es.",explanation_tr:"-ch ile biten fiillere 3. tekil şahısta -es eklenir.",hint:null,context:null},{id:7,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"___ your sister speak German?",options:'["Do","Does","Is","Are"]',correct_answer:"Does",explanation:'Use "Does" for singular third-person questions.',explanation_tr:'3. tekil şahıs soru cümlelerinde "Does" başa gelir.',hint:null,context:null},{id:8,topic_id:1,exercise_type:"sentence_creation",cefr_level:"A1",difficulty:3,question:"Write a sentence about your daily routine using Present Simple.",options:null,correct_answer:"[free response]",explanation:'Use Present Simple to express daily habits (e.g. "I wake up early.").',explanation_tr:"Geniş zaman kullanarak günlük rutininiz hakkında bir cümle yazın.",hint:null,context:null},{id:9,topic_id:2,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"Look! The children ___ (play) in the garden.",options:null,correct_answer:"are playing",explanation:"Use am/is/are + V-ing for actions happening now.",explanation_tr:"Şu anda gerçekleşen eylemler için am/is/are + fiil-ing kullanılır.",hint:null,context:null},{id:10,topic_id:2,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"What ___ you ___ right now?",options:'["are...doing","do...do","is...doing","are...do"]',correct_answer:"are...doing",explanation:"Present Continuous question: Are + subject + V-ing?",explanation_tr:"Şimdiki zaman soru yapısı: Are you doing?",hint:null,context:null},{id:11,topic_id:2,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:'Find and correct the error: "I am know the answer."',options:null,correct_answer:"I know the answer.",explanation:'Stative verbs like "know" are not used in continuous form.',explanation_tr:'"Know" durum bildiren bir fiildir, -ing almaz.',hint:null,context:null},{id:12,topic_id:2,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"Listen! Someone ___ (knock) on the front door.",options:null,correct_answer:"is knocking",explanation:"Singular subject takes 'is' + V-ing.",explanation_tr:"Tekil özne 'is' + fiil-ing alır.",hint:null,context:null},{id:13,topic_id:3,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"Yesterday, we ___ (visit) the museum in the city center.",options:null,correct_answer:"visited",explanation:"Regular past tense adds -ed.",explanation_tr:"Düzenli geçmiş zaman fiilleri -ed alır.",hint:null,context:null},{id:14,topic_id:3,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Did you ___ the new movie last night?",options:'["see","saw","seen","seeing"]',correct_answer:"see",explanation:'After "Did", use the base verb (V1).',explanation_tr:'"Did" yardımcı fiilinden sonra fiilin 1. hali gelir.',hint:null,context:null},{id:15,topic_id:3,exercise_type:"error_correction",cefr_level:"A2",difficulty:2,question:'Find and correct the error: "They goed to Italy last summer."',options:null,correct_answer:"They went to Italy last summer.",explanation:'"Go" is an irregular verb: go -> went -> gone.',explanation_tr:'"Go" düzensiz bir fiildir, geçmiş hali "went"tir.',hint:null,context:null},{id:16,topic_id:4,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"I ___ (read) a book when the power went out.",options:null,correct_answer:"was reading",explanation:"Use was/were + V-ing for past background action.",explanation_tr:"Geçmişte yarıda kesilen süregelen eylem için was/were + V-ing kullanılır.",hint:null,context:null},{id:17,topic_id:4,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"What ___ you doing at 9 PM yesterday?",options:'["were","was","did","are"]',correct_answer:"were",explanation:'Use "were" with "you" in past continuous.',explanation_tr:'"You" öznesi ile geçmiş zamanda "were" kullanılır.',hint:null,context:null},{id:18,topic_id:5,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"I ___ never ___ (see) such a beautiful sunset before.",options:null,correct_answer:"have...seen",explanation:"Present perfect for life experiences: have/has + V3.",explanation_tr:"Deneyimler için have/has + V3 kullanılır.",hint:null,context:null},{id:19,topic_id:5,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:1,question:"She has not received the official letter ___.",options:'["yet","already","just","ago"]',correct_answer:"yet",explanation:'"Yet" is placed at the end of negative sentences.',explanation_tr:'Olumsuz Present Perfect cümlelerinin sonunda "yet" kullanılır.',hint:null,context:null},{id:20,topic_id:5,exercise_type:"error_correction",cefr_level:"B1",difficulty:2,question:'Find and correct the error: "I have visited Rome two years ago."',options:null,correct_answer:"I visited Rome two years ago.",explanation:"Specific finished time expressions (two years ago) require Past Simple.",explanation_tr:'Belirli geçmiş zaman ifadelerinde ("ago") Past Simple kullanılır.',hint:null,context:null},{id:21,topic_id:8,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"Look at those dark storm clouds! It ___ (rain).",options:null,correct_answer:"is going to rain",explanation:'Use "be going to" for predictions based on present evidence.',explanation_tr:'Mevcut bir kanıta dayanan tahminlerde "be going to" kullanılır.',hint:null,context:null},{id:22,topic_id:8,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Don't worry, I ___ carry that heavy bag for you.",options:'["will","am going","going to","shall to"]',correct_answer:"will",explanation:'Use "will" for spontaneous offers and decisions.',explanation_tr:'Anlık yardım teklifleri ve kararlar için "will" kullanılır.',hint:null,context:null},{id:23,topic_id:9,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"Drivers ___ stop when the traffic light turns red.",options:null,correct_answer:"must",explanation:'Use "must" for strong legal obligation.',explanation_tr:'Yasal ve zorunlu kurallar için "must" kullanılır.',hint:null,context:null},{id:24,topic_id:9,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Could you please ___ me the salt?",options:'["pass","to pass","passing","passed"]',correct_answer:"pass",explanation:"Modals are followed by the bare infinitive (base form).",explanation_tr:"Modal yardımcı fiillerinden sonra fiil yalın gelir.",hint:null,context:null},{id:25,topic_id:10,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"If it ___ (snow) tomorrow, we will go skiing.",options:null,correct_answer:"snows",explanation:"First Conditional if-clause uses Present Simple.",explanation_tr:"First Conditional'da if cümlesi Geniş Zaman alır.",hint:null,context:null},{id:26,topic_id:10,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:2,question:"If I won the lottery, I ___ buy a house by the sea.",options:'["would","will","can","am going to"]',correct_answer:"would",explanation:"Second conditional main clause: would + V1.",explanation_tr:"Second Conditional ana cümlesinde would + fiil kullanılır.",hint:null,context:null},{id:27,topic_id:11,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"The telephone ___ (invent) by Alexander Graham Bell.",options:null,correct_answer:"was invented",explanation:"Past passive: was/were + past participle (V3).",explanation_tr:"Geçmiş edilgen yapı: was/were + V3.",hint:null,context:null},{id:28,topic_id:11,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:1,question:"English ___ in many international organizations worldwide.",options:'["is spoken","speaks","is speaking","has spoken"]',correct_answer:"is spoken",explanation:"Present passive: is/are + V3.",explanation_tr:"Geniş zaman edilgen yapı: is/are + V3.",hint:null,context:null},{id:29,topic_id:14,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"She wants to become ___ architect in the future.",options:'["an","a","the","no article"]',correct_answer:"an",explanation:'Use "an" before words starting with a vowel sound.',explanation_tr:'Sesli harfle başlayan meslek isimlerinin önüne "an" gelir.',hint:null,context:null},{id:30,topic_id:14,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"___ honesty is one of the most valued qualities.",options:'["no article","The","A","An"]',correct_answer:"no article",explanation:"Abstract nouns in a general sense take no article.",explanation_tr:"Genel anlamda kullanılan soyut isimler artikel almaz.",hint:null,context:null},{id:31,topic_id:15,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"The conference starts ___ 9:00 AM on Monday.",options:'["at","in","on","by"]',correct_answer:"at",explanation:'Use "at" for precise clock times.',explanation_tr:'Belirli saatler için "at" edatı kullanılır.',hint:null,context:null},{id:32,topic_id:15,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Are you interested ___ learning a new foreign language?",options:'["in","at","about","with"]',correct_answer:"in",explanation:'"Interested" is always followed by the preposition "in".',explanation_tr:'"Interested" sıfatı "in" edatı ile kullanılır.',hint:null,context:null}],vocabulary_items:[],reading_materials:[{id:1,title:"My Daily Routine",content:`Every morning, I wake up at 7 o'clock. First, I wash my face and brush my teeth. Then I have breakfast. I usually eat bread and cheese and drink tea.

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
Agent: Perfect. Here is your boarding pass. Gate 14, boarding begins at 10:15.`,comprehension_questions:`[{"question":"What is the passenger's destination?","options":["London","New York","Tokyo","Paris"],"correct":"New York","type":"detail"},{"question":"How many suitcases is the passenger checking in?","options":["None","One","Two","Three"],"correct":"One","type":"detail"},{"question":"What time does boarding begin?","options":["9:45","10:00","10:15","10:30"],"correct":"10:15","type":"detail"}]`,key_vocabulary:'["boarding pass","suitcase","carry-on","gate"]',difficulty_notes:"Clear American English airport interaction."},{id:4,title:"Renewable Energy Transition",description:"A science podcast excerpt discussing solar and wind power innovation.",cefr_level:"B2",category:"science",audio_text:"Host: In today's climate briefing, we examine the unprecedented transition towards renewable energy. Over the past decade, solar panel manufacturing costs have dropped by more than eighty percent, making solar energy cheaper than fossil fuels in numerous regions. Wind turbines, particularly offshore installations, now generate substantial power during peak demand periods. However, energy storage remains the primary hurdle. Engineers worldwide are investing heavily in advanced battery chemistry and grid-scale hydrogen storage to ensure stability when the sun isn't shining.",speech_rate:"normal",accent:"british",duration_seconds:null,transcript:"Host: In today's climate briefing, we examine the unprecedented transition towards renewable energy. Over the past decade, solar panel manufacturing costs have dropped by more than eighty percent, making solar energy cheaper than fossil fuels in numerous regions. Wind turbines, particularly offshore installations, now generate substantial power during peak demand periods. However, energy storage remains the primary hurdle. Engineers worldwide are investing heavily in advanced battery chemistry and grid-scale hydrogen storage to ensure stability when the sun isn't shining.",comprehension_questions:'[{"question":"By how much have solar manufacturing costs dropped over the past decade?","options":["About 20 percent","Around 50 percent","More than 80 percent","Costs have not changed"],"correct":"More than 80 percent","type":"detail"},{"question":"According to the speaker, what remains the primary hurdle for renewable energy?","options":["Lack of sunlight","Energy storage","Government taxes","Turbine noise"],"correct":"Energy storage","type":"detail"},{"question":"What are engineers investing in to ensure power grid stability?","options":["Burning more coal","Advanced battery chemistry and hydrogen storage","Shutting down solar panels","Nuclear submarines"],"correct":"Advanced battery chemistry and hydrogen storage","type":"main_idea"}]',key_vocabulary:'["unprecedented","fossil fuels","offshore","hurdle","stability"]',difficulty_notes:"Sophisticated British English podcast commentary on technological advancements."}],assessment_question_bank:[{id:1,skill:"grammar",question_type:"multiple_choice",cefr_level:"A1",topic:"Present Simple",question:"She ___ to the gym three times a week.",options:'["go","goes","going","is go"]',correct_answer:"goes",explanation:"Third-person singular (she) takes the -s/-es suffix in the Present Simple.",explanation_tr:"Geniş zamanda 3. tekil şahıs (he/she/it) fiile -s veya -es takısı alır."},{id:2,skill:"grammar",question_type:"multiple_choice",cefr_level:"A2",topic:"Past Simple vs Continuous",question:"While I ___ dinner, the electricity suddenly went out.",options:'["cooked","was cooking","have cooked","am cooking"]',correct_answer:"was cooking",explanation:"Past Continuous expresses an ongoing background action interrupted by a shorter action in Past Simple.",explanation_tr:"Geçmişte devam eden bir eylem sırasında başka bir olay gerçekleştiğinde devam eden eylem için Past Continuous kullanılır."},{id:3,skill:"grammar",question_type:"multiple_choice",cefr_level:"B1",topic:"Present Perfect",question:"We ___ in this city since 2018.",options:'["live","are living","have lived","lived"]',correct_answer:"have lived",explanation:'Present Perfect is used with "since" to indicate an action that began in the past and continues into the present.',explanation_tr:'"Since" ile geçmişte başlayıp günümüze kadar süregelen durumlar için Present Perfect kullanılır.'},{id:4,skill:"grammar",question_type:"multiple_choice",cefr_level:"B1",topic:"Conditionals (Second)",question:"If I ___ more time, I would learn a musical instrument.",options:'["have","had","would have","will have"]',correct_answer:"had",explanation:'Second conditional uses "If + Past Simple, would + base verb" for hypothetical present situations.',explanation_tr:"İkinci tip koşul cümlelerinde (gerçek dışı şimdiki durum) if cümlesinde Past Simple kullanılır."},{id:5,skill:"grammar",question_type:"multiple_choice",cefr_level:"B2",topic:"Passive Voice & Modals",question:"All reports must ___ to the manager before 5 PM today.",options:'["submit","be submitted","have submitted","being submitted"]',correct_answer:"be submitted",explanation:"Modal verbs in passive voice follow the pattern: modal + be + past participle (V3).",explanation_tr:'Modal fiillerin edilgen biçimi "modal + be + V3" kuralını izler.'},{id:6,skill:"grammar",question_type:"multiple_choice",cefr_level:"B2",topic:"Mixed Conditionals / Inversion",question:"Had I known about the road closure, I ___ a completely different route.",options:'["would take","will take","would have taken","took"]',correct_answer:"would have taken",explanation:'Inverted Third Conditional: "Had I known" replaces "If I had known", paired with "would have + V3".',explanation_tr:'Devrik 3. tip koşul cümlesi ("Had I known..."), ana cümlede "would have + V3" gerektirir.'},{id:7,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"A1",topic:"Daily Life",question:"Which word means the meal you eat in the middle of the day?",options:'["Breakfast","Lunch","Dinner","Supper"]',correct_answer:"Lunch",explanation:"Lunch is the meal eaten in the middle of the day.",explanation_tr:'Öğle vakti yenen öğün "lunch"tır.'},{id:8,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"A2",topic:"Collocations with Make/Do",question:"Don't worry if you ___ a mistake; that's how we learn.",options:'["do","make","create","build"]',correct_answer:"make",explanation:'The natural English collocation is "make a mistake", never "do a mistake".',explanation_tr:'İngilizcede "hata yapmak" için "make a mistake" kalıbı kullanılır; "do" kullanılmaz.'},{id:9,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"B1",topic:"Phrasal Verbs",question:"The meeting was ___ until next Tuesday because the director was ill.",options:'["put off","called off","turned down","brought up"]',correct_answer:"put off",explanation:'"Put off" means to postpone or reschedule. "Call off" means to cancel entirely.',explanation_tr:'"Put off" ertelemek anlamına gelir. "Call off" ise tamamen iptal etmektir.'},{id:10,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"B1",topic:"False Friends (L1 Turkish interference)",question:"He is very understanding and caring; he is a truly ___ person.",options:'["sympathetic","sympathy","antipathic","suspicious"]',correct_answer:"sympathetic",explanation:'In English, "sympathetic" means showing compassion or understanding, whereas in Turkish "sempatik" means likable/cute.',explanation_tr:'İngilizcede "sympathetic" şefkatli, anlayışlı demektir; Türkçedeki "sempatik/cana yakın" anlamında değildir (false friend).'},{id:11,skill:"vocabulary",question_type:"multiple_choice",cefr_level:"B2",topic:"Academic & Professional Lexis",question:"The new economic reform will have far-reaching ___ for small businesses.",options:'["implications","complaints","suspicions","appliances"]',correct_answer:"implications",explanation:'"Implications" refers to the possible future effects or results of an action.',explanation_tr:'"Implications" bir kararın veya eylemin gelecekteki olası sonuçları/etkileri anlamına gelir.'},{id:12,skill:"reading",question_type:"multiple_choice",cefr_level:"A1",topic:"Short Notice",question:`Text: "Library hours: Monday to Friday 9:00 AM - 6:00 PM. Closed on weekends."
Question: Can you visit the library on Sunday?`,options:'["Yes, at 10 AM","No, it is closed","Only in the afternoon","Yes, all day"]',correct_answer:"No, it is closed",explanation:'The sign explicitly states "Closed on weekends". Sunday is a weekend day.',explanation_tr:"Duyuruda hafta sonları kapalı olduğu açıkça belirtilmiştir."},{id:13,skill:"reading",question_type:"multiple_choice",cefr_level:"A2",topic:"Email Details",question:`Email: "Hi team, please note our weekly sync is moved from Wednesday 10 AM to Thursday 2 PM in Room B."
Question: When is the new meeting time?`,options:'["Wednesday at 10 AM","Thursday at 2 PM","Thursday at 10 AM","Wednesday at 2 PM"]',correct_answer:"Thursday at 2 PM",explanation:"The email specifies the rescheduled time as Thursday 2 PM.",explanation_tr:"E-postada yeni toplantı saatinin Perşembe saat 14:00 olduğu yazmaktadır."},{id:14,skill:"reading",question_type:"multiple_choice",cefr_level:"B1",topic:"Inference",question:`Text: "Although the flight was delayed by three hours, the cabin crew's warmth and constant updates kept everyone calm."
Question: What was the passengers' general mood?`,options:'["Furious and aggressive","Relatively calm and patient","Bored and asleep","Panicked"]',correct_answer:"Relatively calm and patient",explanation:'The text directly notes that the crew "kept everyone calm".',explanation_tr:"Metinde mürettebatın herkesi sakin tuttuğu belirtilmektedir."},{id:15,skill:"reading",question_type:"multiple_choice",cefr_level:"B2",topic:"Tone and Argumentation",question:`Text: "While critics hail the algorithm as a panacea for urban congestion, its reliance on historical commute patterns risks cementing existing transit inequities."
Question: What is the author's stance on the algorithm?`,options:'["Unreserved praise","Cautious and critical of blind optimism","Complete dismissal as useless","Indifferent"]',correct_answer:"Cautious and critical of blind optimism",explanation:'The author acknowledges that critics call it a panacea, but highlights serious risks ("cementing existing inequities").',explanation_tr:'Yazar algoritmaya dair aşırı iyimserliği ("panacea") eleştirerek yarattığı eşitsizlik risklerine dikkat çeker.'},{id:16,skill:"listening",question_type:"multiple_choice",cefr_level:"A1",topic:"Numbers & Time",question:'If a speaker says "Quarter past seven", what time do they mean?',options:'["7:15","7:45","6:45","7:30"]',correct_answer:"7:15",explanation:'"Quarter past" means 15 minutes after the hour (7:15).',explanation_tr:`"Quarter past seven", 7'yi çeyrek geçe (7:15) anlamına gelir.`},{id:17,skill:"listening",question_type:"multiple_choice",cefr_level:"A2",topic:"Connected Speech Reduction",question:'In spoken casual English, "What do you want to do?" often sounds like:',options:'["Whatcha wanna do?","What you did do?","Where you wanna go?","What did you done?"]',correct_answer:"Whatcha wanna do?",explanation:'Natural connected speech compresses "what do you" into /wʌtʃə/ or /wʌdʒə/ and "want to" into /wɒnə/.',explanation_tr:'Doğal konuşma dilinde "what do you" -> "whatcha" ve "want to" -> "wanna" şeklinde kaynaşır.'},{id:18,skill:"listening",question_type:"multiple_choice",cefr_level:"B1",topic:"Intonation & Attitude",question:'If someone replies "Oh, brilliant..." with a heavy falling pitch and a sigh, they most likely mean:',options:`["They are thrilled and excited","They are sarcastic and actually unhappy","They are confused","They didn't hear you"]`,correct_answer:"They are sarcastic and actually unhappy",explanation:'A falling sigh tone on "brilliant" is a classic British sarcastic expression indicating disappointment.',explanation_tr:'İç çekerek alçalan tonlamayla söylenen "Oh, brilliant..." tipik bir ironi (sarkazm) olup hayal kırıklığı belirtir.'},{id:19,skill:"listening",question_type:"multiple_choice",cefr_level:"B2",topic:"Nuance in Dialogue",question:`Speaker A: "Are you coming to Sarah's retirement party?"
Speaker B: "Well, let's just say we haven't seen eye to eye lately."
Question: What does Speaker B imply?`,options:'["They have poor eyesight","They have had disagreements with Sarah","They will arrive late","Sarah forgot to invite them"]',correct_answer:"They have had disagreements with Sarah",explanation:'"Not see eye to eye" is an idiom meaning not agreeing or having conflicts with someone.',explanation_tr:'"Not see eye to eye" kalıbı biriyle anlaşamamak, fikir ayrılığı yaşamak anlamına gelir.'},{id:20,skill:"writing",question_type:"multiple_choice",cefr_level:"A1",topic:"Basic Capitalization & Punctuation",question:"Which sentence is punctuated and capitalized correctly?",options:'["i live in Istanbul with my Sister.","I live in Istanbul with my sister.","I live in istanbul with my sister","I live In Istanbul with My Sister."]',correct_answer:"I live in Istanbul with my sister.",explanation:'Capitalize "I", proper nouns like "Istanbul", and end with a period. Common nouns like "sister" are lowercase.',explanation_tr:'Cümle başı ve "I" zamiri, şehir isimleri büyük harfle başlar; "sister" gibi cins isimler küçük kalır.'},{id:21,skill:"writing",question_type:"multiple_choice",cefr_level:"A2",topic:"Connectors",question:"I was very tired, ___ I still managed to finish my project on time.",options:'["so","because","but","since"]',correct_answer:"but",explanation:'"But" introduces a contrasting fact to being tired.',explanation_tr:'Yorgun olma durumuyla projenin bitmesi arasındaki zıtlığı "but" bağlacı ifade eder.'},{id:22,skill:"writing",question_type:"multiple_choice",cefr_level:"B1",topic:"Formal Email Register",question:"Which closing sentence is most appropriate for a formal job application email?",options:'["Catch you later, hope you like my CV!","I look forward to hearing from you at your earliest convenience.","Write me back whenever you want.","See ya soon, best vibes!"]',correct_answer:"I look forward to hearing from you at your earliest convenience.",explanation:'Professional correspondence requires standard courteous formulas like "I look forward to hearing from you...".',explanation_tr:'Resmi iş yazışmalarında profesyonel nezaket kalıbı "I look forward to hearing from you..." kullanılır.'},{id:23,skill:"writing",question_type:"multiple_choice",cefr_level:"B2",topic:"Cohesive Devices",question:"The initial trial produced promising results. ___, subsequent studies failed to replicate the same outcomes.",options:'["However","Furthermore","Consequently","In addition"]',correct_answer:"However",explanation:'"However" shows an unexpected contrast or limitation following a positive statement.',explanation_tr:'İlk cümlenin olumlu sonucuna karşı sonraki çalışmaların başarısızlığını zıtlık belirten "However" bağlar.'},{id:24,skill:"speaking",question_type:"multiple_choice",cefr_level:"A1",topic:"Greetings & Introductions",question:'When meeting someone for the first time in a polite setting, how do you respond to "How do you do?"',options:'["I do fine, thanks.","How do you do?","I am doing homework.","Yes, I do."]',correct_answer:"How do you do?",explanation:'In formal British English, the traditional reply to "How do you do?" is also "How do you do?" or "Pleased to meet you".',explanation_tr:'Resmi İngilizcede ilk tanışmada söylenen "How do you do?" kalıbına geleneksel olarak yine "How do you do?" veya "Pleased to meet you" ile yanıt verilir.'},{id:25,skill:"speaking",question_type:"multiple_choice",cefr_level:"A2",topic:"Polite Requests",question:"What is the most polite way to ask for a glass of water in a cafe?",options:'["Give me water now.","Could I have a glass of water, please?","I want water quickly.","Water is needed by me."]',correct_answer:"Could I have a glass of water, please?",explanation:'"Could I have... please?" is standard polite English for ordering or requesting.',explanation_tr:'Rica ve siparişlerde "Could I have..., please?" en doğal ve kibar yapıdır.'},{id:26,skill:"speaking",question_type:"multiple_choice",cefr_level:"B1",topic:"Giving Advice",question:"A friend has an intense headache before an exam. What sounds most natural?",options:'["You had better get some rest and take an aspirin.","You must to sleep right now without excuses.","Why you not sleep?","It is compulsory for you to rest."]',correct_answer:"You had better get some rest and take an aspirin.",explanation:'"You had better..." is used for urgent, direct advice where negative consequences might follow.',explanation_tr:'"You had better (do sth)" yapısı acil ve önemli tavsiyeler vermek için en doğal kullanımdır.'},{id:27,skill:"speaking",question_type:"multiple_choice",cefr_level:"B2",topic:"Diplomatic Disagreement",question:"In a professional meeting, how do you disagree diplomatically with a colleague's proposal?",options:`["That idea is completely wrong and makes no sense.","I see where you're coming from, but we should also consider the budgetary constraints.","Shut up, my plan is superior.","You are mistaken about everything."]`,correct_answer:"I see where you're coming from, but we should also consider the budgetary constraints.",explanation:"Diplomatic English acknowledges the other speaker's perspective before introducing reservations or alternatives.",explanation_tr:`Diplomatik iş İngilizcesinde önce karşı tarafın görüşü onaylanır ("I see where you're coming from"), ardından çekince sunulur.`},{id:28,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A1",topic:"Past -ed Endings",question:'In which word is the "-ed" pronounced as an extra syllable /ɪd/ or /əd/?',options:'["Worked","Played","Needed","Watched"]',correct_answer:"Needed",explanation:'The "-ed" ending is pronounced as /ɪd/ only after verbs ending in /t/ or /d/ sounds (need -> needed).',explanation_tr:"Düzenli fiillerde -ed takısı sadece /t/ ve /d/ seslerinden sonra ayrı bir hece (/ɪd/) olarak okunur (need -> needed)."},{id:29,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A2",topic:"Silent Letters",question:'Which letter is SILENT in the word "doubt"?',options:'["d","o","u","b"]',correct_answer:"b",explanation:'The letter "b" is completely silent in "doubt" /daʊt/, just like in "debt" and "subtle".',explanation_tr:'"Doubt" kelimesindeki "b" harfi okunmaz (sessiz harftir: /daʊt/).'},{id:30,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B1",topic:"Word Stress & Part of Speech",question:'When "record" is used as a VERB ("They ___ a podcast"), where is the stress?',options:'["On the FIRST syllable (RE-cord)","On the SECOND syllable (re-CORD)","Both syllables equally","Neither"]',correct_answer:"On the SECOND syllable (re-CORD)",explanation:"Two-syllable noun/verb pairs: nouns stress the 1st syllable (a REcord), verbs stress the 2nd syllable (to reCORD).",explanation_tr:"İki heceli isim/fiil çiftlerinde isimlerde vurgu ilk hecede (REcord), fiillerde ikinci hecededir (reCORD)."},{id:31,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B2",topic:"Vowel Length Minimal Pairs",question:"Which pair of words contains contrasting short /ɪ/ vs long /iː/ vowel sounds?",options:'["Ship and Sheep","Cat and Cut","Pen and Pan","Full and Fool"]',correct_answer:"Ship and Sheep",explanation:'"Ship" has the short lax vowel /ʃɪp/ while "sheep" has the long tense vowel /ʃiːp/.',explanation_tr:'"Ship" kısa /ɪ/ sesi, "sheep" ise uzun /iː/ sesi barındıran klasik bir minimal çift örneğidir.'},{id:32,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A1",topic:"Basic Word Order (SVO)",question:"Choose the sentence with the correct English word order:",options:'["Always he drinks coffee in the morning.","He drinks always coffee in the morning.","He always drinks coffee in the morning.","In the morning coffee he always drinks."]',correct_answer:"He always drinks coffee in the morning.",explanation:"Adverbs of frequency (always, often, rarely) go between the subject and the main verb.",explanation_tr:"Sıklık zarfları (always, often vb.) özne ile asıl fiil arasına gelir."},{id:33,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A2",topic:"Indirect Questions",question:"Choose the correct indirect question formulation:",options:'["Could you tell me where is the station?","Could you tell me where the station is?","Could you tell me where does the station be?","Could you tell me where is station located?"]',correct_answer:"Could you tell me where the station is?",explanation:'In indirect questions, the clause returns to statement order: "where + subject + verb".',explanation_tr:'Dolaylı sorularda ("Could you tell me..."), soru cümlesi düz cümle sırasına (özne + fiil) döner.'},{id:34,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B1",topic:"Relative Clause Placement",question:"Which sentence correctly places the defining relative clause?",options:'["The woman who designed our website received an award.","The woman received an award who designed our website.","The woman who received an award our website designed.","Who designed our website the woman received an award."]',correct_answer:"The woman who designed our website received an award.",explanation:'A relative clause must directly follow the noun it modifies ("the woman who designed...").',explanation_tr:"Sıfat cümlecikleri niteledikleri ismin hemen ardından gelmelidir."},{id:35,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B2",topic:"Inversion after Negative Adverbials",question:"Seldom ___ such an inspiring speech in my entire career.",options:'["I have heard","have I heard","I heard","did I heard"]',correct_answer:"have I heard",explanation:"Negative or restrictive adverbials at the beginning of a sentence (seldom, rarely, never) require auxiliary inversion.",explanation_tr:'Cümle başına gelen kısıtlayıcı/olumsuz zarflar ("Seldom, Never") yardımcı fiilin öznenin önüne geçmesini (inversion) zorunlu kılar.'},{id:36,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A1",topic:"Context Clues",question:'"Liam took out his umbrella because dark clouds filled the sky." Why did Liam take out his umbrella?',options:'["It was very sunny","He expected rain","He wanted to play football","He was going to sleep"]',correct_answer:"He expected rain",explanation:"Dark clouds signify incoming precipitation, so taking out an umbrella indicates expecting rain.",explanation_tr:"Gökyüzündeki kara bulutlar yağmur beklentisine işaret eder."},{id:37,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A2",topic:"Idiomatic Sense",question:'If someone says "I am under the weather today", they mean:',options:'["They are standing outside in the rain","They feel slightly unwell or sick","They love sunny days","They are flying in an airplane"]',correct_answer:"They feel slightly unwell or sick",explanation:'"Under the weather" is a very common idiom meaning feeling sick or indisposed.',explanation_tr:'"Under the weather" kendini hasta veya keyifsiz hissetmek anlamına gelen yaygın bir deyimdir.'},{id:38,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B1",topic:"Thinking in English vs Translating",question:'In Turkish, you say "İyi ki doğdun". What is the natural, native English thought process and expression?',options:'["Good that you were born","Happy Birthday","Nice birthday to you","It is well you came into the world"]',correct_answer:"Happy Birthday",explanation:'English does not translate the literal Turkish sentiment; natural English thinking directly maps to "Happy Birthday".',explanation_tr:'Türkçedeki "İyi ki doğdun" kalıbı kelimesi kelimesine çevrilmez; İngilizce düşüncede karşılığı doğrudan "Happy Birthday"dir.'},{id:39,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B2",topic:"Pragmatic Implicature",question:`When a manager says, "You might want to review section three before tomorrow's client presentation," this is pragmatically:`,options:'["A neutral observation you can freely ignore","A polite but firm directive that section three contains flaws that need fixing","A compliment on section three","A question about your availability"]',correct_answer:"A polite but firm directive that section three contains flaws that need fixing",explanation:'In Anglo-American corporate communication, "You might want to..." is an understated, polite command to fix something.',explanation_tr:'İngilizce iş kültüründe "You might want to..." şeklindeki yumuşatılmış ifadeler nezaketen öneri süsü verilmiş net talimatlardır.'},{id:40,skill:"communication",question_type:"multiple_choice",cefr_level:"A1",topic:"Asking for Help",question:"You are lost in London. What is the most natural way to stop a stranger on the street?",options:'["Stop walking, human!","Excuse me, could you help me?","Hey, you listen to me.","Where is hotel?"]',correct_answer:"Excuse me, could you help me?",explanation:'"Excuse me..." is the universally expected, polite opening to approach a stranger in English.',explanation_tr:'Bir yabancının dikkatini çekip yardım istemenin en evrensel ve kibar yolu "Excuse me, could you help me?"dir.'},{id:41,skill:"communication",question_type:"multiple_choice",cefr_level:"A2",topic:"Clarification Strategy",question:"If you did not understand what someone just said, which phrase asks them to repeat naturally?",options:'["What? Speak louder!","Sorry, could you say that again, please?","You are talking nonsense.","Repeat your words immediately."]',correct_answer:"Sorry, could you say that again, please?",explanation:'"Sorry, could you say that again, please?" is courteous and effective for conversational repair.',explanation_tr:'Anlaşılmayan bir şeyi tekrar ettirmenin en doğal iletişim stratejisi "Sorry, could you say that again, please?"dir.'},{id:42,skill:"communication",question_type:"multiple_choice",cefr_level:"B1",topic:"Polite Interruption",question:"You need to ask a brief question during a team discussion. What is the best way to interject?",options:`["Stop speaking now, my turn.","Sorry to interrupt, but may I quickly clarify something?","Listen to me instead.","That's enough from you."]`,correct_answer:"Sorry to interrupt, but may I quickly clarify something?",explanation:'"Sorry to interrupt, but may I quickly..." allows polite turn-taking without sounding aggressive.',explanation_tr:'Bir konuşmayı kibarca bölüp araya girmek için "Sorry to interrupt, but may I quickly..." kullanılır.'},{id:43,skill:"communication",question_type:"multiple_choice",cefr_level:"B2",topic:"Managing Hesitations & Fluency",question:"When asked a complex question in an interview and you need 5 seconds to think, which filler maintains fluent communication best?",options:`["Dead silence for 10 seconds staring at the floor","That's a really thoughtful question. Let me reflect on that for a second...","Wait! Don't talk to me!","I don't know anything."]`,correct_answer:"That's a really thoughtful question. Let me reflect on that for a second...",explanation:"Native speakers use conversational bridge phrases to buy cognitive processing time without breaking conversational flow.",explanation_tr:`Akıcılığı korumak ve düşünme süresi kazanmak için "That's a great question, let me reflect on that..." gibi köprü ifadeler kullanılır.`}]};let $=null;async function q(){return T.vocabulary_items&&T.vocabulary_items.length>0?T.vocabulary_items:$||($=(async()=>{try{const c=await j(()=>import("./vocabulary-data-DrYKOoID.js"),[],import.meta.url);return T.vocabulary_items=c.vocabularyArchive||[],T.vocabulary_items}catch(c){return console.error("Failed to lazy load vocabulary archive:",c),[]}finally{$=null}})(),$)}const R=[{id:"all",name:"Tüm Konular",desc:"A1-B2 tüm seviyelerden karışık cümle kurma pratikleri"},{id:"basic_svo",name:"Temel S-V-O Dizilimi",desc:"Özne + Yüklem + Nesne mantığı ve fiil-nesne bağı"},{id:"adverb_placement",name:"Zarflar & SVOMPT",desc:"Sıklık, tarz, yer ve zaman zarflarının doğru sıralanışı"},{id:"questions_negatives",name:"Soru & Olumsuz Yapılar",desc:"Yardımcı fiiller, soru kelimeleri ve vurgular"},{id:"indirect_questions",name:"Dolaylı Sorular (Indirect)",desc:"İngilizcede soru sırasının düz cümleye dönüşmesi"},{id:"connectors_clauses",name:"Yan Cümleler & Bağlaçlar",desc:"Relative clauses (who/which) ve neden-sonuç bağlaçları"},{id:"inversion_emphasis",name:"Devrik Cümleler (Inversion)",desc:"Seldom, Rarely gibi zarflarla devrik B2 yapıları"}],O=[{id:"syn-1",cefr_level:"A1",category:"basic_svo",category_name_tr:"Temel S-V-O Dizilimi",turkish_prompt:"Her sabah kahve içerim.",tokens:["I","drink","coffee","every morning"],correct_sentence:"I drink coffee every morning.",acceptable_alternatives:["Every morning I drink coffee."],grammar_breakdown:[{token:"I",role:"Özne (Subject)",tag:"S"},{token:"drink",role:"Fiil (Verb)",tag:"V"},{token:"coffee",role:"Nesne (Object)",tag:"O"},{token:"every morning",role:"Zaman Zarfı (Time)",tag:"T"}],explanation_tr:'Türkçede fiil cümlenin en sonundadır ("içerim"). İngilizcede ise öznenin hemen ardından fiil gelir: S (I) + V (drink) + O (coffee) + T (every morning).'},{id:"syn-2",cefr_level:"A1",category:"basic_svo",category_name_tr:"Temel S-V-O Dizilimi",turkish_prompt:"Kız kardeşim çok güzel piyano çalar.",tokens:["My sister","plays","the piano","very well"],correct_sentence:"My sister plays the piano very well.",acceptable_alternatives:[],grammar_breakdown:[{token:"My sister",role:"Özne (Subject)",tag:"S"},{token:"plays",role:"Fiil (Verb + -s)",tag:"V"},{token:"the piano",role:"Nesne (Object)",tag:"O"},{token:"very well",role:"Durum Zarfı (Manner)",tag:"M"}],explanation_tr:'İngilizcede fiil ile nesne arasına zarf giremez. "Plays very well the piano" YANLIŞTIR. Doğrusu: plays (fiil) + the piano (nesne) + very well (zarf).'},{id:"syn-3",cefr_level:"A1",category:"basic_svo",category_name_tr:"Temel S-V-O Dizilimi",turkish_prompt:"Onlar büyük bir şirkette çalışıyorlar.",tokens:["They","work","in a large company"],correct_sentence:"They work in a large company.",acceptable_alternatives:[],grammar_breakdown:[{token:"They",role:"Özne (Subject)",tag:"S"},{token:"work",role:"Fiil (Verb)",tag:"V"},{token:"in a large company",role:"Yer Bildiren Öbek (Place)",tag:"P"}],explanation_tr:"İngilizcede özne (They) daima başta, fiil (work) ikinci sırada, yer tamlayıcısı (in a large company) ise fiilden sonra gelir."},{id:"syn-4",cefr_level:"A1",category:"basic_svo",category_name_tr:"Temel S-V-O Dizilimi",turkish_prompt:"Biz her gün yeni kelimeler öğreniyoruz.",tokens:["We","learn","new words","every day"],correct_sentence:"We learn new words every day.",acceptable_alternatives:["Every day we learn new words."],grammar_breakdown:[{token:"We",role:"Özne (Subject)",tag:"S"},{token:"learn",role:"Fiil (Verb)",tag:"V"},{token:"new words",role:"Nesne (Object)",tag:"O"},{token:"every day",role:"Zaman Zarfı (Time)",tag:"T"}],explanation_tr:"İngilizce S-V-O-T: We (Özne) + learn (Fiil) + new words (Nesne) + every day (Zaman)."},{id:"syn-5",cefr_level:"A1",category:"basic_svo",category_name_tr:"Temel S-V-O Dizilimi",turkish_prompt:"Ali dün akşam yeni bir telefon satın aldı.",tokens:["Ali","bought","a new phone","yesterday evening"],correct_sentence:"Ali bought a new phone yesterday evening.",acceptable_alternatives:["Yesterday evening Ali bought a new phone."],grammar_breakdown:[{token:"Ali",role:"Özne (Subject)",tag:"S"},{token:"bought",role:"Geçmiş Zaman Fiili (Past Verb)",tag:"V"},{token:"a new phone",role:"Nesne (Object)",tag:"O"},{token:"yesterday evening",role:"Zaman (Time)",tag:"T"}],explanation_tr:'Zaman zarfları ("yesterday evening") genellikle cümlenin en sonunda yer alır. Asla fiil ile nesne arasına sokulmaz.'},{id:"syn-6",cefr_level:"A2",category:"adverb_placement",category_name_tr:"Zarflar & SVOMPT",turkish_prompt:"Babam genellikle sabahları mutfakta kahve içer.",tokens:["My father","usually","drinks","coffee","in the kitchen","in the morning"],correct_sentence:"My father usually drinks coffee in the kitchen in the morning.",acceptable_alternatives:["In the morning my father usually drinks coffee in the kitchen."],grammar_breakdown:[{token:"My father",role:"Özne (Subject)",tag:"S"},{token:"usually",role:"Sıklık Zarfı (Frequency - Fiilden hemen önce)",tag:"Adv"},{token:"drinks",role:"Fiil (Verb)",tag:"V"},{token:"coffee",role:"Nesne (Object)",tag:"O"},{token:"in the kitchen",role:"Yer (Place - Önce gelir)",tag:"P"},{token:"in the morning",role:"Zaman (Time - Sonra gelir)",tag:"T"}],explanation_tr:'İngilizcede yer ve zaman zarfları birlikte kullanıldığında her zaman önce YER (Place), sonra ZAMAN (Time) gelir: "in the kitchen in the morning". Sıklık zarfları (usually) ise asıl fiilin hemen önüne geçer.'},{id:"syn-7",cefr_level:"A2",category:"adverb_placement",category_name_tr:"Zarflar & SVOMPT",turkish_prompt:"Çocuklar dün parkta neşeyle futbol oynadılar.",tokens:["The children","played","football","happily","in the park","yesterday"],correct_sentence:"The children played football happily in the park yesterday.",acceptable_alternatives:["Yesterday the children played football happily in the park."],grammar_breakdown:[{token:"The children",role:"Özne (Subject)",tag:"S"},{token:"played",role:"Fiil (Verb)",tag:"V"},{token:"football",role:"Nesne (Object)",tag:"O"},{token:"happily",role:"Durum / Tarz Zarfı (Manner)",tag:"M"},{token:"in the park",role:"Yer (Place)",tag:"P"},{token:"yesterday",role:"Zaman (Time)",tag:"T"}],explanation_tr:"Altın Formül: S-V-O-M-P-T! Subject (The children) + Verb (played) + Object (football) + Manner (happily) + Place (in the park) + Time (yesterday)."},{id:"syn-8",cefr_level:"A2",category:"adverb_placement",category_name_tr:"Zarflar & SVOMPT",turkish_prompt:"Hafta içi geceleri asla televizyon izlemem.",tokens:["I","never","watch","television","at night","on weekdays"],correct_sentence:"I never watch television at night on weekdays.",acceptable_alternatives:["On weekdays I never watch television at night."],grammar_breakdown:[{token:"I",role:"Özne (Subject)",tag:"S"},{token:"never",role:"Olumsuz Sıklık Zarfı (Frequency)",tag:"Adv"},{token:"watch",role:"Fiil (Verb)",tag:"V"},{token:"television",role:"Nesne (Object)",tag:"O"},{token:"at night",role:"Zaman 1 (Time of day)",tag:"T1"},{token:"on weekdays",role:"Zaman 2 (Broader period)",tag:"T2"}],explanation_tr:'"Never" sıklık zarfı fiilden (watch) önce gelir. Birden fazla zaman zarfı olduğunda dar zaman (at night) geniş zamandan (on weekdays) önce söylenir.'},{id:"syn-9",cefr_level:"A2",category:"adverb_placement",category_name_tr:"Zarflar & SVOMPT",turkish_prompt:"Öğretmenimiz derste her zaman sabırla soruları cevaplar.",tokens:["Our teacher","always","answers","the questions","patiently","in class"],correct_sentence:"Our teacher always answers the questions patiently in class.",acceptable_alternatives:[],grammar_breakdown:[{token:"Our teacher",role:"Özne (Subject)",tag:"S"},{token:"always",role:"Sıklık Zarfı (Frequency)",tag:"Adv"},{token:"answers",role:"Fiil (Verb)",tag:"V"},{token:"the questions",role:"Nesne (Object)",tag:"O"},{token:"patiently",role:"Durum Zarfı (Manner - Nasıl?)",tag:"M"},{token:"in class",role:"Yer Zarfı (Place - Nerede?)",tag:"P"}],explanation_tr:"Sıralama: Özne + Sıklık Zarfı + Fiil + Nesne + Nasıl (patiently) + Nerede (in class)."},{id:"syn-10",cefr_level:"A1",category:"questions_negatives",category_name_tr:"Soru & Olumsuz Yapılar",turkish_prompt:"Genellikle hafta sonları kaçta uyanırsın?",tokens:["What time","do you","usually","wake up","at weekends"],correct_sentence:"What time do you usually wake up at weekends?",acceptable_alternatives:["What time do you usually wake up on weekends?"],grammar_breakdown:[{token:"What time",role:"Soru Kelimesi (Question Word)",tag:"Q"},{token:"do you",role:"Yardımcı Fiil + Özne (Aux + Subject)",tag:"Aux+S"},{token:"usually",role:"Sıklık Zarfı (Frequency)",tag:"Adv"},{token:"wake up",role:"Asıl Fiil (Main Verb)",tag:"V"},{token:"at weekends",role:"Zaman Zarfı (Time)",tag:"T"}],explanation_tr:"İngilizce soru formülü: Soru Sözcüğü (What time) + Yardımcı Fiil (do) + Özne (you) + Zarf (usually) + Fiil (wake up)."},{id:"syn-11",cefr_level:"A2",category:"questions_negatives",category_name_tr:"Soru & Olumsuz Yapılar",turkish_prompt:"Neden soğukta dışarıda bekliyorsunuz?",tokens:["Why","are you","waiting","outside","in the cold"],correct_sentence:"Why are you waiting outside in the cold?",acceptable_alternatives:[],grammar_breakdown:[{token:"Why",role:"Soru Kelimesi (Question Word)",tag:"Q"},{token:"are you",role:"Yardımcı Fiil + Özne (Aux + Subject)",tag:"Aux+S"},{token:"waiting",role:"Şimdiki Zaman Fiili (Verb-ing)",tag:"V"},{token:"outside",role:"Yer (Place)",tag:"P"},{token:"in the cold",role:"Durum / Koşul (Condition)",tag:"M"}],explanation_tr:'Şimdiki zaman soru kalıbında "are" öznenin (you) önüne geçer: "Why are you waiting...".'},{id:"syn-12",cefr_level:"A2",category:"questions_negatives",category_name_tr:"Soru & Olumsuz Yapılar",turkish_prompt:"O harika ceketi geçen hafta nereden aldın?",tokens:["Where","did you","buy","that fantastic jacket","last week"],correct_sentence:"Where did you buy that fantastic jacket last week?",acceptable_alternatives:[],grammar_breakdown:[{token:"Where",role:"Soru Kelimesi (Question Word)",tag:"Q"},{token:"did you",role:"Geçmiş Yardımcı Fiil + Özne",tag:"Aux+S"},{token:"buy",role:"Yalın Fiil (Base Verb - V1)",tag:"V"},{token:"that fantastic jacket",role:"Nesne (Object)",tag:"O"},{token:"last week",role:"Zaman (Time)",tag:"T"}],explanation_tr:'Geçmiş zaman sorusunda "did" kullanıldığı için asıl fiil yalın kalır (bought değil, buy).'},{id:"syn-13",cefr_level:"A2",category:"questions_negatives",category_name_tr:"Soru & Olumsuz Yapılar",turkish_prompt:"Müdür bugün toplantıda raporu dikkatle incelemedi.",tokens:["The manager","did not examine","the report","carefully","in the meeting today"],correct_sentence:"The manager did not examine the report carefully in the meeting today.",acceptable_alternatives:[],grammar_breakdown:[{token:"The manager",role:"Özne (Subject)",tag:"S"},{token:"did not examine",role:"Olumsuz Fiil (Neg Verb)",tag:"V"},{token:"the report",role:"Nesne (Object)",tag:"O"},{token:"carefully",role:"Tarz Zarfı (Manner)",tag:"M"},{token:"in the meeting today",role:"Yer ve Zaman (Place + Time)",tag:"P+T"}],explanation_tr:"Olumsuz cümlelerde: Özne + did not + Fiil (yalın) + Nesne + Zarf (Manner-Place-Time)."},{id:"syn-14",cefr_level:"A2",category:"indirect_questions",category_name_tr:"Dolaylı Sorular (Indirect)",turkish_prompt:"Bana tren istasyonunun nerede olduğunu söyleyebilir misiniz?",tokens:["Could you tell me","where","the train station","is"],correct_sentence:"Could you tell me where the train station is?",acceptable_alternatives:[],grammar_breakdown:[{token:"Could you tell me",role:"Nezaket Kalıbı (Polite Intro Clause)",tag:"Intro"},{token:"where",role:"Soru Bağlacı (Wh- Connector)",tag:"Conj"},{token:"the train station",role:"Yan Cümlenin Öznesi (Subject)",tag:"S"},{token:"is",role:"Yan Cümlenin Fiili (Verb - Sonda!)",tag:"V"}],explanation_tr:'EN ÇOK YAPILAN HATA: "Where is the station?" doğrudan sorudur. Ancak bir cümlenin içine girdiğinde ("Could you tell me...") soru sırası kaybolur ve düz cümle sırasına (özne + fiil) döner: "...where the station is".'},{id:"syn-15",cefr_level:"B1",category:"indirect_questions",category_name_tr:"Dolaylı Sorular (Indirect)",turkish_prompt:"Toplantının ne zaman başlayacağını merak ediyorum.",tokens:["I wonder","what time","the meeting","will start"],correct_sentence:"I wonder what time the meeting will start.",acceptable_alternatives:[],grammar_breakdown:[{token:"I wonder",role:"Ana Cümle (Main Clause)",tag:"Main"},{token:"what time",role:"Soru İfadesi (Wh- connector)",tag:"Conj"},{token:"the meeting",role:"Özne (Subject)",tag:"S"},{token:"will start",role:"Fiil (Verb)",tag:"V"}],explanation_tr:'Dolaylı sorularda "will" öznenin önüne geçmez. Doğru sıralama: "what time + the meeting (özne) + will start (fiil)".'},{id:"syn-16",cefr_level:"B1",category:"indirect_questions",category_name_tr:"Dolaylı Sorular (Indirect)",turkish_prompt:"Onun bu sabah neden geç kaldığını biliyor musun?",tokens:["Do you know","why","he was","late","this morning"],correct_sentence:"Do you know why he was late this morning?",acceptable_alternatives:[],grammar_breakdown:[{token:"Do you know",role:"Giriş Sorusu (Intro)",tag:"Intro"},{token:"why",role:"Soru Kelimesi (Connector)",tag:"Conj"},{token:"he was",role:"Özne + Yardımcı Fiil (Subject + Verb)",tag:"S+V"},{token:"late",role:"Sıfat (Complement)",tag:"Adj"},{token:"this morning",role:"Zaman (Time)",tag:"T"}],explanation_tr:'"Do you know why was he late?" YANLIŞTIR. Dolaylı sorularda fiil öznenin arkasında kalır: "why he was late".'},{id:"syn-17",cefr_level:"B1",category:"indirect_questions",category_name_tr:"Dolaylı Sorular (Indirect)",turkish_prompt:"Bu projenin ne kadara mal olacağını bilmek istiyorum.",tokens:["I would like to know","how much","this project","will cost"],correct_sentence:"I would like to know how much this project will cost.",acceptable_alternatives:[],grammar_breakdown:[{token:"I would like to know",role:"Ana Cümle (Polite Request)",tag:"Intro"},{token:"how much",role:"Miktar İfadesi",tag:"Conj"},{token:"this project",role:"Yan Cümle Öznesi",tag:"S"},{token:"will cost",role:"Yan Cümle Fiili",tag:"V"}],explanation_tr:'Doğrudan soru "How much will this project cost?" iken, dolaylı anlatımda "...how much this project will cost" şekline dönüşür.'},{id:"syn-18",cefr_level:"B1",category:"connectors_clauses",category_name_tr:"Yan Cümleler & Bağlaçlar",turkish_prompt:"Yarışmayı kazanan öğrenci her gün çok sıkı çalıştı.",tokens:["The student","who won the competition","studied","very hard","every day"],correct_sentence:"The student who won the competition studied very hard every day.",acceptable_alternatives:[],grammar_breakdown:[{token:"The student",role:"Ana Cümle Öznesi (Subject)",tag:"S"},{token:"who won the competition",role:"Sıfat Cümlesi (Relative Clause - Özneyi niteler)",tag:"Rel"},{token:"studied",role:"Ana Fiil (Main Verb)",tag:"V"},{token:"very hard",role:"Durum Zarfı (Manner)",tag:"M"},{token:"every day",role:"Zaman Zarfı (Time)",tag:"T"}],explanation_tr:"Sıfat cümlecikleri (relative clauses) niteledikleri ismin (The student) hemen ardına yerleştirilir. Ana cümlenin fiili (studied) ise bu tamlamadan sonra gelir."},{id:"syn-19",cefr_level:"B1",category:"connectors_clauses",category_name_tr:"Yan Cümleler & Bağlaçlar",turkish_prompt:"Şiddetli yağmur yağmasına rağmen konserin tadını çıkardık.",tokens:["Although","it was raining heavily","we enjoyed","the concert"],correct_sentence:"Although it was raining heavily, we enjoyed the concert.",acceptable_alternatives:["We enjoyed the concert although it was raining heavily."],grammar_breakdown:[{token:"Although",role:"Zıtlık Bağlacı (Concession Conjunction)",tag:"Conj"},{token:"it was raining heavily",role:"Bağımlı Yan Cümle (Dependent Clause)",tag:"Clause1"},{token:"we enjoyed",role:"Ana Cümle (Subject + Verb)",tag:"S+V"},{token:"the concert",role:"Nesne (Object)",tag:"O"}],explanation_tr:'"Although" bağlacı tam bir cümle alır (özne + fiil). Cümle başında kullanılırsa iki cümle arasına virgül konur.'},{id:"syn-20",cefr_level:"B1",category:"connectors_clauses",category_name_tr:"Yan Cümleler & Bağlaçlar",turkish_prompt:"Yeni bir dizüstü bilgisayar alabilsin diye para biriktirdi.",tokens:["She saved money","so that","she could buy","a new laptop"],correct_sentence:"She saved money so that she could buy a new laptop.",acceptable_alternatives:[],grammar_breakdown:[{token:"She saved money",role:"Ana Cümle (Main Clause)",tag:"Main"},{token:"so that",role:"Amaç Bağlacı (-sın diye / In order that)",tag:"Conj"},{token:"she could buy",role:"Modal Cümlesi (Subject + Modal + Verb)",tag:"Sub+Mod"},{token:"a new laptop",role:"Nesne (Object)",tag:"O"}],explanation_tr:'"so that" amaç bildirir ve ardından genellikle "can/could/may/might" kipleriyle tam cümle gelir.'},{id:"syn-21",cefr_level:"B1",category:"connectors_clauses",category_name_tr:"Yan Cümleler & Bağlaçlar",turkish_prompt:"Otele varır varmaz seni arayacağım.",tokens:["I will call you","as soon as","I arrive","at the hotel"],correct_sentence:"I will call you as soon as I arrive at the hotel.",acceptable_alternatives:["As soon as I arrive at the hotel I will call you."],grammar_breakdown:[{token:"I will call you",role:"Ana Cümle (Gelecek Zaman)",tag:"Main"},{token:"as soon as",role:"Zaman Bağlacı (-er -mez)",tag:"Conj"},{token:"I arrive",role:"Geniş Zaman Yan Cümle (Present Simple)",tag:"S+V"},{token:"at the hotel",role:"Yer Tamlayıcısı (Place)",tag:"P"}],explanation_tr:'ÖNEMLİ ZAMAN KURALI: "as soon as", "when", "after" gibi zaman bağlaçlarının bulunduğu yan cümlede "will" kullanılmaz; gelecek anlamı için Geniş Zaman (arrive) kullanılır.'},{id:"syn-22",cefr_level:"B2",category:"inversion_emphasis",category_name_tr:"Devrik Cümleler (Inversion)",turkish_prompt:"Kariyerim boyunca böylesine ilham verici bir konuşmayı nadiren duymuşumdur.",tokens:["Seldom","have I heard","such an inspiring speech","in my career"],correct_sentence:"Seldom have I heard such an inspiring speech in my career.",acceptable_alternatives:[],grammar_breakdown:[{token:"Seldom",role:"Kısıtlayıcı Olumsuz Zarf (Negative Adverbial)",tag:"NegAdv"},{token:"have I heard",role:"Devrik Fiil + Özne (Inverted Aux + Subject)",tag:"Inv"},{token:"such an inspiring speech",role:"Vurgulu Nesne (Emphatic Object)",tag:"O"},{token:"in my career",role:"Zaman / Kapsam Tamlayıcısı",tag:"Scope"}],explanation_tr:'İNGİLİZCE İLERİ DÜZEY DEVRİK YAPI: "Seldom, Rarely, Never, Scarcely" gibi olumsuz/kısıtlayıcı zarflar cümle başına geldiğinde, yardımcı fiil öznenin önüne geçer: "Seldom have I heard..." (I have seldom heard yerine).'},{id:"syn-23",cefr_level:"B2",category:"inversion_emphasis",category_name_tr:"Devrik Cümleler (Inversion)",turkish_prompt:"Genç sporcularda böylesi bir adanmışlığı çok nadir görürüz.",tokens:["Rarely","do we see","such dedication","in young athletes"],correct_sentence:"Rarely do we see such dedication in young athletes.",acceptable_alternatives:[],grammar_breakdown:[{token:"Rarely",role:"Kısıtlayıcı Zarf",tag:"NegAdv"},{token:"do we see",role:"Devrik Yardımcı Fiil + Özne + Fiil",tag:"Inv"},{token:"such dedication",role:"Nesne",tag:"O"},{token:"in young athletes",role:"Yer / Nitelik",tag:"Prep"}],explanation_tr:'Geniş zamanda inversion yapılırken "do/does" kullanılır: "Rarely do we see...".'},{id:"syn-24",cefr_level:"B2",category:"inversion_emphasis",category_name_tr:"Devrik Cümleler (Inversion)",turkish_prompt:"Hiçbir koşulda bu kapıyı açmamalısınız.",tokens:["Under no circumstances","should you open","this door"],correct_sentence:"Under no circumstances should you open this door.",acceptable_alternatives:[],grammar_breakdown:[{token:"Under no circumstances",role:"Güçlü Olumsuz Edat Öbeği",tag:"NegPhrase"},{token:"should you open",role:"Devrik Modal + Özne + Fiil",tag:"Inv"},{token:"this door",role:"Nesne",tag:"O"}],explanation_tr:'"Under no circumstances" gibi mutlak yasaklama veya kısıtlama ifadeleri cümle başında olduğunda modal yardımcı fiil (should) öznenin (you) önüne alınır.'},{id:"syn-25",cefr_level:"B2",category:"inversion_emphasis",category_name_tr:"Devrik Cümleler (Inversion)",turkish_prompt:"Sadece sınavı geçmekle kalmadı, aynı zamanda en yüksek puanı aldı.",tokens:["Not only","did he pass the exam","but he also achieved","the highest score"],correct_sentence:"Not only did he pass the exam, but he also achieved the highest score.",acceptable_alternatives:[],grammar_breakdown:[{token:"Not only",role:"Vurgu Bağlacı (Cümle Başı)",tag:"Emph"},{token:"did he pass the exam",role:"Devrik Cümle (did + he + pass)",tag:"Inv"},{token:"but he also achieved",role:"Devam Cümlesi",tag:"Parallel"},{token:"the highest score",role:"Nesne",tag:"O"}],explanation_tr:'"Not only" cümle başında yer aldığında ilk cümle mutlaka devrik kurulur ("did he pass"). İkinci cümle ise düz sırada devam eder ("but he also achieved...").'},{id:"syn-26",cefr_level:"B2",category:"inversion_emphasis",category_name_tr:"Devrik Cümleler (Inversion)",turkish_prompt:"Eve henüz yeni varmıştık ki elektrikler kesildi.",tokens:["Hardly","had we arrived home","when","the power went out"],correct_sentence:"Hardly had we arrived home when the power went out.",acceptable_alternatives:[],grammar_breakdown:[{token:"Hardly",role:"Zaman Kısıtlayıcı Zarf (Hardly... when)",tag:"NegAdv"},{token:"had we arrived home",role:"Devrik Past Perfect (had + we + V3)",tag:"Inv"},{token:"when",role:"Zaman Bağlayıcısı",tag:"Conj"},{token:"the power went out",role:"İkinci Olay (Past Simple)",tag:"Event2"}],explanation_tr:'"Hardly had + Özne + V3 ... when + Past Simple" kalıbı, bir eylemin hemen ardından diğerinin gerçekleştiğini vurgulamak için kullanılan prestijli bir C1/B2 akademik yapıdır.'}];class U{constructor(){this.currentUser=null,this.initAuth()}initAuth(){try{const e=localStorage.getItem("linguaforge_active_user"),t=this.getAccounts();if(e&&t.length>0){const a=t.find(i=>i.username.toLowerCase()===e.toLowerCase());a&&(this.currentUser=a)}}catch(e){console.warn("Error initializing auth:",e)}}getAccounts(){try{const e=localStorage.getItem("linguaforge_users");return e?JSON.parse(e):[]}catch{return[]}}saveAccounts(e){try{localStorage.setItem("linguaforge_users",JSON.stringify(e))}catch{}}getCurrentUser(){return this.currentUser}async hashPassword(e){if(!e)return"";try{if(typeof window<"u"&&window.crypto&&window.crypto.subtle){const i=new TextEncoder().encode(e+"_linguaforge_salt"),n=await window.crypto.subtle.digest("SHA-256",i);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}}catch{}let t=0;for(let a=0;a<e.length;a++)t=(t<<5)-t+e.charCodeAt(a),t|=0;return"h_"+Math.abs(t)}async login(e,t){const a=(e||"").trim().toLowerCase(),i=(t||"").trim(),n=this.getAccounts(),s=n.find(o=>o.username.toLowerCase()===a);if(!s)throw new Error("Kullanıcı bulunamadı. Lütfen kullanıcı adınızı kontrol edin veya yeni hesap açın.");const r=await this.hashPassword(i);if(s.password_hash){if(s.password_hash!==r)throw new Error("Şifre hatalı! Lütfen şifrenizi tekrar deneyin.")}else if(s.password){if(s.password!==i)throw new Error("Şifre hatalı! Lütfen şifrenizi tekrar deneyin.");s.password_hash=r,delete s.password,this.saveAccounts(n)}return this.currentUser=s,localStorage.setItem("linguaforge_active_user",s.username),this.ensureUserStorage(s.username),s}async register(e,t,a){const i=(e||"").trim().toLowerCase(),n=(t||"").trim(),s=(a||"").trim()||e;if(!i)throw new Error("Kullanıcı adı boş bırakılamaz.");if(i.length<2)throw new Error("Kullanıcı adı en az 2 karakter olmalıdır.");if(!n)throw new Error("Şifre boş bırakılamaz.");const r=this.getAccounts();if(r.some(u=>u.username.toLowerCase()===i))throw new Error("Bu kullanıcı adı zaten alınmış. Farklı bir kullanıcı adı deneyin veya giriş yapın.");const o=await this.hashPassword(n),l={id:"u_"+Date.now(),username:i,displayName:s,password_hash:o,createdAt:new Date().toISOString(),cefr_level:"A1"};return r.push(l),this.saveAccounts(r),this.currentUser=l,localStorage.setItem("linguaforge_active_user",l.username),await this.initZeroUserStorage(i),l}async loginOrRegisterGuest(){const e="misafir",t=this.getAccounts();let a=t.find(i=>i.username===e);if(!a){const i=await this.hashPassword("123");a={id:"guest_"+Date.now(),username:e,displayName:"Misafir Öğrenci",password_hash:i,createdAt:new Date().toISOString(),cefr_level:"A1"},t.push(a),this.saveAccounts(t),await this.initZeroUserStorage(e)}return this.currentUser=a,localStorage.setItem("linguaforge_active_user",a.username),this.ensureUserStorage(e),a}logout(){this.currentUser=null,localStorage.removeItem("linguaforge_active_user")}getUserStorageKey(e){return`linguaforge_u_${this.currentUser?this.currentUser.username:"guest"}_${e}`}getUserData(e){try{const t=localStorage.getItem(this.getUserStorageKey(e));return t?JSON.parse(t):null}catch{return null}}setUserData(e,t){try{localStorage.setItem(this.getUserStorageKey(e),JSON.stringify(t))}catch{}}async initZeroUserStorage(e){await q();const t=`linguaforge_u_${e}_`,a={xp:0,level:1,current_streak:1,longest_streak:1,total_study_minutes:0,total_words_learned:0,total_grammar_mastered:0,total_errors_resolved:0,last_study_date:new Date().toISOString().slice(0,10)},i={grammar:{level:"A1",sublevel:"-",score:0},vocabulary:{level:"A1",sublevel:"-",score:0},reading:{level:"A1",sublevel:"-",score:0},listening:{level:"A1",sublevel:"-",score:0},writing:{level:"A1",sublevel:"-",score:0},speaking:{level:"A1",sublevel:"-",score:0},pronunciation:{level:"A1",sublevel:"-",score:0},sentence_formation:{level:"A1",sublevel:"-",score:0},comprehension:{level:"A1",sublevel:"-",score:0},communication:{level:"A1",sublevel:"-",score:0}},n=[],s=(T.vocabulary_items||[]).map((r,o)=>{const l=(typeof r.examples=="string"?JSON.parse(r.examples||"[]"):r.examples)||r.example_sentences||[];return{...r,id:r.id||o+1,examples:l,example_sentences:l,synonyms:typeof r.synonyms=="string"?JSON.parse(r.synonyms||"[]"):r.synonyms||[],antonyms:typeof r.antonyms=="string"?JSON.parse(r.antonyms||"[]"):r.antonyms||[],collocations:typeof r.collocations=="string"?JSON.parse(r.collocations||"[]"):r.collocations||[],interval:0,ease_factor:2.5,repetitions:0,due:r.cefr_level==="A1"&&o<25}});localStorage.setItem(t+"stats",JSON.stringify(a)),localStorage.setItem(t+"skills",JSON.stringify(i)),localStorage.setItem(t+"errors",JSON.stringify(n)),localStorage.setItem(t+"srs_items",JSON.stringify(s)),localStorage.removeItem(t+"latest_assessment"),localStorage.setItem(t+"completed_tasks",JSON.stringify([])),localStorage.setItem(t+"daily_tasks_date",new Date().toISOString().slice(0,10))}async syncVocabularyArchive(e){await q();const a=`linguaforge_u_${e||(this.currentUser?this.currentUser.username:"misafir")}_`;try{const i=localStorage.getItem(a+"srs_items");let n=i?JSON.parse(i):[];const s=new Set(n.map(l=>(l.word||"").toLowerCase())),r=[];(T.vocabulary_items||[]).forEach((l,u)=>{if(!s.has((l.word||"").toLowerCase())){const d=(typeof l.examples=="string"?JSON.parse(l.examples||"[]"):l.examples)||l.example_sentences||[];r.push({...l,id:l.id||1e3+u,examples:d,example_sentences:d,synonyms:typeof l.synonyms=="string"?JSON.parse(l.synonyms||"[]"):l.synonyms||[],antonyms:typeof l.antonyms=="string"?JSON.parse(l.antonyms||"[]"):l.antonyms||[],collocations:typeof l.collocations=="string"?JSON.parse(l.collocations||"[]"):l.collocations||[],interval:0,ease_factor:2.5,repetitions:0,due:n.length<5||l.cefr_level==="A1"&&n.filter(y=>y.due).length<20})}}),r.length>0&&(n=n.concat(r),localStorage.setItem(a+"srs_items",JSON.stringify(n)))}catch(i){console.warn("Error syncing vocabulary archive:",i)}}ensureUserStorage(e){const t=`linguaforge_u_${e}_`;if(!localStorage.getItem(t+"stats")||!localStorage.getItem(t+"skills")){this.initZeroUserStorage(e);return}this.syncVocabularyArchive(e)}recordDailyTaskProgress(e){try{const t=new Date().toISOString().slice(0,10),a=this.getUserData("daily_tasks_date");let i=this.getUserData("completed_tasks")||[];if(a!==t&&(i=[],this.setUserData("daily_tasks_date",t)),!i.includes(e)){i.push(e),this.setUserData("completed_tasks",i);const n=this.getUserData("stats")||{xp:0};n.xp=(n.xp||0)+20;let s=!1;return i.length>=4&&!this.getUserData("daily_bonus_claimed_"+t)&&(n.xp+=50,this.setUserData("daily_bonus_claimed_"+t,!0),s=!0),this.setUserData("stats",n),{success:!0,taskId:e,completedTasks:i,xpGained:s?70:20,bonusAwarded:s}}return{success:!0,taskId:e,completedTasks:i,xpGained:0}}catch(t){return console.warn("Error recording daily task progress:",t),{success:!1}}}async completeDailyTask(e,t=!0){const a=new Date().toISOString().slice(0,10),i=this.getUserData("daily_tasks_date");let n=this.getUserData("completed_tasks")||[];i!==a&&(n=[],this.setUserData("daily_tasks_date",a));const s=this.getUserData("stats")||{xp:0};return t?n.includes(e)||(n.push(e),s.xp=(s.xp||0)+20,n.length>=4&&!this.getUserData("daily_bonus_claimed_"+a)&&(s.xp+=50,this.setUserData("daily_bonus_claimed_"+a,!0))):n.includes(e)&&(n=n.filter(r=>r!==e),s.xp=Math.max(0,(s.xp||0)-20)),this.setUserData("completed_tasks",n),this.setUserData("stats",s),{success:!0,completedTasks:n,stats:s}}async getDashboard(){if(!this.currentUser)throw new Error("AUTH_REQUIRED");this.syncVocabularyArchive();const e=this.getUserData("stats")||{xp:0,level:1,current_streak:1,longest_streak:1,total_study_minutes:0,total_words_learned:0,total_grammar_mastered:0,total_errors_resolved:0},t=this.getUserData("skills")||{grammar:{level:"A1",sublevel:"",score:0},vocabulary:{level:"A1",sublevel:"",score:0},reading:{level:"A1",sublevel:"",score:0},listening:{level:"A1",sublevel:"",score:0},writing:{level:"A1",sublevel:"",score:0},speaking:{level:"A1",sublevel:"",score:0},pronunciation:{level:"A1",sublevel:"",score:0},sentence_formation:{level:"A1",sublevel:"",score:0},comprehension:{level:"A1",sublevel:"",score:0},communication:{level:"A1",sublevel:"",score:0}},a=this.getUserData("errors")||[],i=this.getUserData("srs_items")||[],n=i.filter(u=>u.due).length,s=this.getUserData("latest_assessment")||{overall_cefr:"A1",results:{overallCEFR:"A1"}},r=new Date().toISOString().slice(0,10),o=this.getUserData("daily_tasks_date");let l=this.getUserData("completed_tasks")||[];return o!==r&&(l=[],this.setUserData("completed_tasks",l),this.setUserData("daily_tasks_date",r)),{user:{username:this.currentUser.username,displayName:this.currentUser.displayName||this.currentUser.username,onboardingComplete:!0},stats:e,skills:t,dailyTasks:{date:r,tasks:[{id:"task-vocab",skill:"vocabulary",description:"Kelime Kartlarından en az 5 tanesini tekrar et veya yeni kelime öğren",targetView:"vocabulary"},{id:"task-grammar",skill:"grammar",description:"Gramer Akademisinden 1 konuyu ve interaktif alıştırmasını tamamla",targetView:"grammar"},{id:"task-reading",skill:"reading",description:"1 okuma metnini incele ve anlama sorularını yanıtla",targetView:"reading"},{id:"task-speaking",skill:"speaking",description:"1 konuşma senaryosunda sesli pratik yap veya diyalog kur",targetView:"speaking"}],completed_tasks:l},recentErrors:a.filter(u=>!u.resolved),reviewStats:{dueToday:n,totalItems:i.length},weekStudy:[{date:"2026-09-21",total_minutes:0},{date:"2026-09-22",total_minutes:0},{date:"2026-09-23",total_minutes:0},{date:"2026-09-24",total_minutes:0},{date:"2026-09-25",total_minutes:0},{date:"2026-09-26",total_minutes:0},{date:"2026-09-27",total_minutes:e.total_study_minutes||0}],latestAssessment:s}}async startAssessment(){const e=Date.now();return this.currentAssessment={id:e,answers:[],correctCount:0,totalCount:0,skillsEvaluated:{}},{assessmentId:e,skills:["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],message:"Seviye belirleme sınavı başlatıldı."}}async skipAssessmentToA1(){const e={overallCEFR:"A1",totalQuestions:0,totalCorrect:0,skills:{grammar:{level:"A1",sublevel:"",score:10},vocabulary:{level:"A1",sublevel:"",score:10},reading:{level:"A1",sublevel:"",score:10},listening:{level:"A1",sublevel:"",score:10},writing:{level:"A1",sublevel:"",score:10},speaking:{level:"A1",sublevel:"",score:10},pronunciation:{level:"A1",sublevel:"",score:10},sentence_formation:{level:"A1",sublevel:"",score:10},comprehension:{level:"A1",sublevel:"",score:10},communication:{level:"A1",sublevel:"",score:10}}};return this.setUserData("latest_assessment",e),e}async getAssessmentQuestions(e,t){const n=(T.assessment_question_bank||[]).filter(s=>s.skill===t).slice(0,3).map(s=>({id:s.id,type:s.question_type,question:s.question,options:typeof s.options=="string"?JSON.parse(s.options):s.options,cefrLevel:s.cefr_level,topic:s.topic}));return{skill:t,targetLevel:"A1-A2",questions:n}}async submitAssessmentAnswer(e,t,a){const i=T.assessment_question_bank||[],n=i.find(l=>l.id===t)||i[0],s=(a||"").toString().trim().toLowerCase().replace(/^["']|["']$/g,""),r=(n.correct_answer||"").toString().trim().toLowerCase().replace(/^["']|["']$/g,""),o=s===r;if(this.currentAssessment&&(this.currentAssessment.totalCount=(this.currentAssessment.totalCount||0)+1,o&&(this.currentAssessment.correctCount=(this.currentAssessment.correctCount||0)+1),this.currentAssessment.skillsEvaluated[n.skill]||(this.currentAssessment.skillsEvaluated[n.skill]={correct:0,total:0}),this.currentAssessment.skillsEvaluated[n.skill].total+=1,o&&(this.currentAssessment.skillsEvaluated[n.skill].correct+=1)),!o){const l=this.getUserData("errors")||[];l.unshift({id:Date.now(),skill:n.skill,error_text:a,correction:n.correct_answer,explanation:n.explanation_tr||n.explanation||"Seviye belirleme sınavında yapılan hata.",occurrence_count:1,resolved:0}),this.setUserData("errors",l)}return{questionId:t,isCorrect:o,score:o?1:0,correctAnswer:n.correct_answer,explanation:n.explanation,explanationTr:n.explanation_tr||n.explanation,skill:n.skill,cefrLevel:n.cefr_level,topic:n.topic}}async completeAssessment(e){const t=this.currentAssessment||{correctCount:0,totalCount:1,skillsEvaluated:{}},a=Math.max(t.totalCount||1,1),i=t.correctCount||0,n=i/a;let s="A1";n>=.85?s="B2":n>=.65?s="B1":n>=.4?s="A2":s="A1";const r=["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],o={};r.forEach(y=>{const v=t.skillsEvaluated[y]||{correct:0,total:1},m=v.total>0?v.correct/v.total:0;let k="A1";m>=.85?k="B2":m>=.65?k="B1":m>=.4?k="A2":k="A1";const x=Math.round(m*100);o[y]={level:k,sublevel:"",score:x,correct:v.correct,total:v.total,accuracy:x}});const l={overallCEFR:s,skills:o,weakAreas:[{skill:"speaking",level:"A1",detail:"Günlük basit diyaloglar ve temel kelimeler"},{skill:"grammar",level:"A1",detail:"To Be fiili ve temel zaman kalıpları"}],strongAreas:[{skill:"comprehension",level:s,detail:"Temel bağlam kavrama"}],totalQuestions:a,totalCorrect:i};this.setUserData("latest_assessment",l);const u=this.getUserData("skills")||{};for(const[y,v]of Object.entries(o))u[y]={level:v.level,sublevel:v.sublevel,score:v.score};this.setUserData("skills",u);const d=this.getUserData("stats");return d&&(d.xp=(d.xp||0)+50,this.setUserData("stats",d)),l}async getGrammarTopics(){return(T.grammar_topics||[]).map(e=>({...e,examples:typeof e.examples=="string"?JSON.parse(e.examples):e.examples,rules:typeof e.rules=="string"?JSON.parse(e.rules):e.rules,common_mistakes:typeof e.common_mistakes=="string"?JSON.parse(e.common_mistakes):e.common_mistakes,prerequisite_topics:typeof e.prerequisite_topics=="string"?JSON.parse(e.prerequisite_topics||"[]"):e.prerequisite_topics}))}async getGrammarTopic(e){const t=await this.getGrammarTopics(),a=t.find(n=>n.slug===e)||t[0],i=(T.grammar_exercises||[]).filter(n=>n.topic_id===a.id).map(n=>({...n,prompt:n.question||n.prompt||"",question:n.question||n.prompt||"",options:typeof n.options=="string"?JSON.parse(n.options):n.options}));return{topic:a,exercises:i}}async submitGrammarExercise(e,t){const a=T.grammar_exercises||[],i=a.find(d=>d.id===e)||a[0],n=d=>(d||"").trim().toLowerCase().replace(/[.,!?;:"'’]/g,"").replace(/\.{2,}/g," ").replace(/\s+/g," ").replace(/\bdon't\b|\bdont\b/g,"do not").replace(/\bdoesn't\b|\bdoesnt\b/g,"does not").replace(/\bdidn't\b|\bdidnt\b/g,"did not").replace(/\bcan't\b|\bcant\b/g,"cannot").replace(/\bisn't\b|\bisnt\b/g,"is not").replace(/\baren't\b|\barent\b/g,"are not").replace(/\bwasn't\b|\bwasnt\b/g,"was not").replace(/\bweren't\b|\bwerent\b/g,"were not").replace(/\bwon't\b|\bwont\b/g,"will not").replace(/\bhasn't\b|\bhasnt\b/g,"has not").replace(/\bhaven't\b|\bhavent\b/g,"have not").trim(),s=n(t),r=n(i.correct_answer),l=i.correct_answer==="[free response]"||i.exercise_type==="sentence_creation"?s.length>=3:s===r,u=this.getUserData("stats")||{xp:0};if(u.xp=(u.xp||0)+(l?15:5),l&&(u.total_grammar_mastered=(u.total_grammar_mastered||0)+1),this.setUserData("stats",u),this.recordDailyTaskProgress("task-grammar"),!l){const d=this.getUserData("errors")||[];d.unshift({id:Date.now(),skill:"grammar",error_text:t,correction:i.correct_answer,explanation:i.explanation_tr||i.explanation||"Gramer kural hatası.",occurrence_count:1,resolved:0}),this.setUserData("errors",d)}return{isCorrect:l,correctAnswer:i.correct_answer,feedback:l?"Tebrikler! Doğru cevap (+15 XP).":`Yanlış. Doğru biçim: ${i.correct_answer}`,explanation:i.explanation,explanationTr:i.explanation_tr||i.explanation}}async getVocabularyItems(){await this.syncVocabularyArchive();const e=(this.getUserData("srs_items")||[]).map(t=>{const a=(typeof t.examples=="string"?JSON.parse(t.examples):t.examples)||t.example_sentences||[],i=(typeof t.collocations=="string"?JSON.parse(t.collocations):t.collocations)||[];return{...t,examples:a,example_sentences:a,collocations:i}});return{items:e,total:e.length}}async getReviewQueue(e="all"){await this.syncVocabularyArchive();const t=this.getUserData("srs_items")||[],a={all:t.filter(r=>r.due).length,A1:t.filter(r=>r.due&&(r.cefr_level||"").toUpperCase()==="A1").length,A2:t.filter(r=>r.due&&(r.cefr_level||"").toUpperCase()==="A2").length,B1:t.filter(r=>r.due&&(r.cefr_level||"").toUpperCase()==="B1").length,B2:t.filter(r=>r.due&&(r.cefr_level||"").toUpperCase()==="B2").length,C1:t.filter(r=>r.due&&(r.cefr_level||"").toUpperCase()==="C1").length},i={all:t.length,A1:t.filter(r=>(r.cefr_level||"").toUpperCase()==="A1").length,A2:t.filter(r=>(r.cefr_level||"").toUpperCase()==="A2").length,B1:t.filter(r=>(r.cefr_level||"").toUpperCase()==="B1").length,B2:t.filter(r=>(r.cefr_level||"").toUpperCase()==="B2").length,C1:t.filter(r=>(r.cefr_level||"").toUpperCase()==="C1").length};let n=t.filter(r=>r.due);e&&e!=="all"&&(n=n.filter(r=>(r.cefr_level||"").toUpperCase()===e.toUpperCase()));const s=n.map(r=>{const o=(typeof r.examples=="string"?JSON.parse(r.examples):r.examples)||r.example_sentences||[],l=(typeof r.collocations=="string"?JSON.parse(r.collocations):r.collocations)||[];return{...r,examples:o,example_sentences:o,collocations:l}});return{items:s,dueToday:s.length,dueByLevel:a,totalByLevel:i,currentLevel:e||"all"}}async submitReview(e,t){const a=this.getUserData("srs_items")||[],i=a.findIndex(r=>r.id===e);let n=Number(t);n>3&&(n=n>=4?n===5?3:2:1),i!==-1&&(n>=2?(a[i].due=!1,a[i].repetitions=(a[i].repetitions||0)+1,a[i].interval=n===3?a[i].interval?a[i].interval*2:4:2):a[i].due=!0,this.setUserData("srs_items",a));const s=this.getUserData("stats")||{xp:0};return s.xp=(s.xp||0)+(n>=2?10:3),s.total_words_learned=(s.total_words_learned||0)+(n>=2?1:0),this.setUserData("stats",s),this.recordDailyTaskProgress("task-vocab"),{success:!0}}async drawFreshWords(e="all",t=15){await this.syncVocabularyArchive();const a=this.getUserData("srs_items")||[];let i=a.filter(o=>(e==="all"||o.cefr_level&&o.cefr_level.toUpperCase()===e.toUpperCase())&&!o.due);i.sort((o,l)=>(o.repetitions||0)-(l.repetitions||0));const n=i.slice(0,Math.max(t*3,30));for(let o=n.length-1;o>0;o--){const l=Math.floor(Math.random()*(o+1));[n[o],n[l]]=[n[l],n[o]]}const s=n.slice(0,t),r=new Set(s.map(o=>o.id));return a.forEach(o=>{r.has(o.id)&&(o.due=!0)}),this.setUserData("srs_items",a),{success:!0,activatedCount:s.length,level:e}}async resetLevelQueue(e="all"){this.syncVocabularyArchive();const t=this.getUserData("srs_items")||[];let a=0;return t.forEach(i=>{(e==="all"||i.cefr_level&&i.cefr_level.toUpperCase()===e.toUpperCase())&&(i.due=!0,i.repetitions=0,i.interval=0,a++)}),this.setUserData("srs_items",t),{success:!0,resetCount:a,level:e}}async loadWordPack(e="A1"){return await this.drawFreshWords(e,25)}async fetchOnlineWord(e){var d,y,v;const t=(e||"").trim().toLowerCase().replace(/[^a-z-]/g,"");if(!t)throw new Error("Lütfen geçerli bir İngilizce kelime girin.");let a=null;try{const m=new AbortController,k=setTimeout(()=>m.abort(),6e3),x=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(t)}`,{signal:m.signal});if(clearTimeout(k),x.ok){const _=await x.json();Array.isArray(_)&&_.length>0&&(a=_[0])}}catch(m){console.warn("Free Dictionary API call failed or timed out:",m)}let i="";try{const m=new AbortController,k=setTimeout(()=>m.abort(),4e3),x=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURIComponent(t)}`,_=await fetch(x,{signal:m.signal});if(clearTimeout(k),_.ok){const A=await _.json();i=((y=(d=A==null?void 0:A[0])==null?void 0:d[0])==null?void 0:y[0])||""}}catch{}let n=(a==null?void 0:a.phonetic)||"",s="";if(a!=null&&a.phonetics&&Array.isArray(a.phonetics))for(const m of a.phonetics)!n&&m.text&&(n=m.text),!s&&m.audio&&(s=m.audio);let r="kelime",o="",l="";const u=[];return a!=null&&a.meanings&&Array.isArray(a.meanings)&&(r=((v=a.meanings[0])==null?void 0:v.partOfSpeech)||"kelime",a.meanings.forEach(m=>{var x;const k=(x=m.definitions)==null?void 0:x[0];k&&(o||(o=k.definition||""),!l&&k.example&&(l=k.example),u.push({partOfSpeech:m.partOfSpeech,definition:k.definition,example:k.example||null,synonyms:(m.synonyms||[]).slice(0,4)}))})),{word:t,phonetic:n||`/${t}/`,audioUrl:s||null,part_of_speech:r,definition_tr:i||"Türkçe karşılığı",definition_en:o||"English definition not found",example:l||"",meanings:u,foundOnline:!!a}}async addCustomWord(e,t,a="A1",i="",n="",s="kelime"){const r=this.getUserData("srs_items")||[],o=(e||"").trim();if(!o)return null;const l=r.find(d=>(d.word||"").toLowerCase()===o.toLowerCase());if(l)return l.due=!0,t&&(!l.definition_tr||l.definition_tr==="-")&&(l.definition_tr=t),n&&!l.phonetic&&(l.phonetic=n),i&&(!l.examples||l.examples.length===0)&&(l.examples=[i]),this.setUserData("srs_items",r),this.recordDailyTaskProgress("task-vocab"),l;const u={id:Date.now()+Math.floor(Math.random()*1e3),word:o,definition_tr:t||"Tanım eklenmedi",definition_en:"",phonetic:n||"",cefr_level:a||"A1",examples:i?[i]:[],collocations:[],due:!0,repetitions:0,ease_factor:2.5,interval:1,part_of_speech:s||"kelime",created_at:new Date().toISOString()};return r.unshift(u),this.setUserData("srs_items",r),this.recordDailyTaskProgress("task-vocab"),u}async getReadingMaterials(){return(T.reading_materials||[]).map(e=>({...e,comprehension_questions:typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary}))}async getReadingMaterial(e){const t=await this.getReadingMaterials();return{material:t.find(i=>i.id===parseInt(e,10))||t[0]}}async submitReading(e,t,a){const{material:i}=await this.getReadingMaterial(e),n=i.comprehension_questions||[];let s=0;const r=n.map((d,y)=>{const v=t[y]||"",m=v.trim().toLowerCase()===d.correct.trim().toLowerCase();return m&&s++,{question:d.question,userAnswer:v,correctAnswer:d.correct,isCorrect:m}}),o=Math.round(s/Math.max(n.length,1)*100),l=Math.round(i.word_count/Math.max(a,10)*60),u=this.getUserData("stats")||{xp:0};return u.xp=(u.xp||0)+(o>=70?30:15),this.setUserData("stats",u),this.recordDailyTaskProgress("task-reading"),{score:o,correctCount:s,totalCount:n.length,wordCount:i.word_count,wordsPerMinute:l,details:r}}async getListeningMaterials(){return(T.listening_materials||[]).map(e=>({...e,comprehension_questions:typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary}))}async getListeningMaterial(e){const t=await this.getListeningMaterials();return{material:t.find(i=>i.id===parseInt(e,10))||t[0]}}async submitListening(e,t,a){const{material:i}=await this.getListeningMaterial(e),n=i.comprehension_questions||[];let s=0;const r=n.map((u,d)=>{const y=t[d]||"",v=y.trim().toLowerCase()===u.correct.trim().toLowerCase();return v&&s++,{question:u.question,userAnswer:y,correctAnswer:u.correct,isCorrect:v}}),o=Math.round(s/Math.max(n.length,1)*100),l=this.getUserData("stats")||{xp:0};return l.xp=(l.xp||0)+(o>=70?25:10),this.setUserData("stats",l),{score:o,correctCount:s,totalCount:n.length,listenCount:a,details:r}}async getWritingPrompts(){return T.writing_prompts||[]}async submitWriting(e,t){const a=t.trim().split(/\s+/).filter(Boolean).length,i=(t.match(/[^.!?]+[.!?]+/g)||[]).length||1,n=(a/i).toFixed(1),s=Math.min(100,Math.max(50,40+Math.round(a*1.5))),r=s>=85?"B2":s>=65?"B1":"A2",o=this.getUserData("stats")||{xp:0};return o.xp=(o.xp||0)+30,this.setUserData("stats",o),this.recordDailyTaskProgress("task-writing"),{overallScore:s,cefrLevel:r,grammarScore:Math.min(95,s+5),vocabularyScore:s,structureScore:Math.max(50,s-5),feedback:[`Ortalama ${n} kelimelik cümlelerle ${a} kelime yazdınız.`,"Kelime seçiminiz konuya uygun ve anlaşılır.",'İpucu: Cümleleri birbirine "and", "but", "because" veya "so" gibi bağlaçlarla bağlayarak daha akıcı paragraflar oluşturabilirsiniz.'],errors:[]}}async getSpeakingScenarios(){return(T.speaking_scenarios||[]).map(e=>({...e,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary,key_phrases:typeof e.key_phrases=="string"?JSON.parse(e.key_phrases):e.key_phrases,objectives:typeof e.objectives=="string"?JSON.parse(e.objectives):e.objectives}))}async getSpeakingScenario(e){const t=await this.getSpeakingScenarios(),a=t.find(i=>i.id===parseInt(e,10))||t[0];return this.recordDailyTaskProgress("task-speaking"),{scenario:a}}async getErrors(){return{errors:this.getUserData("errors")||[]}}async resolveError(e){const t=this.getUserData("errors")||[],a=t.findIndex(n=>String(n.id)===String(e));a!==-1&&(t[a].resolved=1,this.setUserData("errors",t));const i=this.getUserData("stats")||{total_errors_resolved:0};return i.total_errors_resolved=(i.total_errors_resolved||0)+1,this.setUserData("stats",i),{success:!0}}async generateDailyTasks(){return{success:!0}}async getProgressHistory(){return{history:[]}}async getSyntaxExercises(e="all",t="all"){let a=[...O];return e&&e!=="all"&&(a=a.filter(i=>i.category===e)),t&&t!=="all"&&(a=a.filter(i=>i.cefr_level.toUpperCase()===t.toUpperCase())),{categories:R,exercises:a,total:a.length}}async submitSyntaxExercise(e,t,a=!0){const i=O.find(v=>v.id===e);if(!i)throw new Error("Cümle bulunamadı");const n=v=>(v||"").trim().toLowerCase().replace(/[.,!?;:\"'’]/g,"").replace(/\s+/g," ").trim(),s=n(t),r=n(i.correct_sentence),o=(i.acceptable_alternatives||[]).map(n),l=s===r||o.includes(s),u=this.getUserData("stats")||{xp:0},d=l?a?15:8:2;u.xp=(u.xp||0)+d;const y=this.getUserData("skills")||{};if(y.sentence_formation||(y.sentence_formation={level:"A1",sublevel:"-",score:0}),l){y.sentence_formation.score=Math.min(100,(y.sentence_formation.score||0)+4);const v=y.sentence_formation.score;v>=85?y.sentence_formation.level="B2":v>=65?y.sentence_formation.level="B1":v>=40?y.sentence_formation.level="A2":y.sentence_formation.level="A1"}if(this.setUserData("skills",y),this.setUserData("stats",u),!l){const v=this.getUserData("errors")||[];v.unshift({id:Date.now(),skill:"sentence_formation",error_text:t,correction:i.correct_sentence,explanation:i.explanation_tr||"İngilizce cümle dizilimi (S-V-O-M-P-T) kuralına uymuyor.",occurrence_count:1,resolved:0}),this.setUserData("errors",v)}return{isCorrect:l,correctSentence:i.correct_sentence,grammarBreakdown:i.grammar_breakdown,explanationTr:i.explanation_tr,xpGained:d,sentenceFormationSkill:y.sentence_formation}}}const p=new U,W=typeof window<"u"&&(window.location.hostname.includes("github.io")||window.location.protocol==="file:"),K="/api";class N{constructor(){this.useLocal=W}getCurrentUser(){return p.getCurrentUser()}getHeaders(){const e=this.getCurrentUser(),t={"Content-Type":"application/json"};return e&&(t["x-user-id"]=e.id||e.username),t}async request(e,t={}){if(this.useLocal)throw new Error("Using local service");const a=`${K}${e}`,i={...t,headers:{...this.getHeaders(),...t.headers||{}}};try{const n=await fetch(a,i);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return await n.json()}catch(n){throw this.useLocal=!0,n}}async register(e,t,a){if(this.useLocal)return await p.register(e,t,a);try{const i=await this.request("/auth/register",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:a})});return await p.register(e,t,a),i}catch{return await p.register(e,t,a)}}async login(e,t){if(this.useLocal)return await p.login(e,t);try{const a=await this.request("/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})});return await p.login(e,t),a}catch{return await p.login(e,t)}}async loginOrRegisterGuest(){return await p.loginOrRegisterGuest()}logout(){p.logout()}async getProfile(){const e=this.getCurrentUser();if(!e)throw new Error("AUTH_REQUIRED");return{user:e}}async getDashboard(){return await p.getDashboard()}async skipAssessmentToA1(){return await p.skipAssessmentToA1()}async startAssessment(){if(this.useLocal)return p.startAssessment();try{return await this.request("/assessment/start",{method:"POST"})}catch{return p.startAssessment()}}async getAssessmentQuestions(e,t){if(this.useLocal)return p.getAssessmentQuestions(e,t);try{return await this.request(`/assessment/${e}/questions/${t}`)}catch{return p.getAssessmentQuestions(e,t)}}async submitAssessmentAnswer(e,t,a,i=3e3){if(this.useLocal)return p.submitAssessmentAnswer(e,t,a,i);try{return await this.request(`/assessment/${e}/answer`,{method:"POST",body:JSON.stringify({questionBankId:t,userAnswer:a,responseTimeMs:i})})}catch{return p.submitAssessmentAnswer(e,t,a,i)}}async completeAssessment(e){if(this.useLocal)return p.completeAssessment(e);try{return await this.request(`/assessment/${e}/complete`,{method:"POST"})}catch{return p.completeAssessment(e)}}async getAssessmentProgress(e){if(this.useLocal)return{completedSkills:10,totalSkills:10};try{return await this.request(`/assessment/${e}/progress`)}catch{return{completedSkills:10,totalSkills:10}}}async getLatestAssessment(){if(this.useLocal)return(await p.getDashboard()).latestAssessment;try{return await this.request("/assessment/latest")}catch{return(await p.getDashboard()).latestAssessment}}async getGrammarTopics(){if(this.useLocal)return p.getGrammarTopics();try{return await this.request("/grammar/topics")}catch{return p.getGrammarTopics()}}async getGrammarTopic(e){if(this.useLocal)return p.getGrammarTopic(e);try{return await this.request(`/grammar/topic/${e}`)}catch{return p.getGrammarTopic(e)}}async submitGrammarExercise(e,t,a=3e3){if(this.useLocal)return p.submitGrammarExercise(e,t);try{return await this.request(`/grammar/exercise/${e}/submit`,{method:"POST",body:JSON.stringify({answer:t,responseTimeMs:a})})}catch{return p.submitGrammarExercise(e,t)}}async getVocabularyItems(e={}){if(this.useLocal)return p.getVocabularyItems(e);try{const t=new URLSearchParams(e).toString();return await this.request(`/vocabulary/items${t?`?${t}`:""}`)}catch{return p.getVocabularyItems(e)}}async getReviewQueue(e="all"){if(this.useLocal)return p.getReviewQueue(e);try{return await this.request(`/vocabulary/review?level=${encodeURIComponent(e)}`)}catch{return p.getReviewQueue(e)}}async submitReview(e,t){if(this.useLocal)return p.submitReview(e,t);const a=[0,2,4,5],i=a[t]!==void 0?a[t]:Number(t);try{return await this.request(`/vocabulary/${e}/review`,{method:"POST",body:JSON.stringify({rating:t,quality:i})})}catch{return p.submitReview(e,t)}}async addCustomWord(e,t,a="A1",i="",n="",s="kelime"){return await p.addCustomWord(e,t,a,i,n,s)}async loadWordPack(e="A1"){return await p.loadWordPack(e)}async drawFreshWords(e="all",t=15){return await p.drawFreshWords(e,t)}async resetLevelQueue(e="all"){return await p.resetLevelQueue(e)}async getSyntaxExercises(e="all",t="all"){if(this.useLocal)return p.getSyntaxExercises(e,t);try{const a=new URLSearchParams({category:e,level:t}).toString();return await this.request(`/syntax/exercises?${a}`)}catch{return p.getSyntaxExercises(e,t)}}async submitSyntaxExercise(e,t,a=!0){if(this.useLocal)return p.submitSyntaxExercise(e,t,a);try{return await this.request("/syntax/submit",{method:"POST",body:JSON.stringify({exerciseId:e,sentence:t,isFirstAttempt:a})})}catch{return p.submitSyntaxExercise(e,t,a)}}async getReadingMaterials(e={}){if(this.useLocal)return p.getReadingMaterials();try{const t=new URLSearchParams(e).toString();return await this.request(`/reading/materials${t?`?${t}`:""}`)}catch{return p.getReadingMaterials()}}async getReadingMaterial(e){if(this.useLocal)return p.getReadingMaterial(e);try{return await this.request(`/reading/${e}`)}catch{return p.getReadingMaterial(e)}}async submitReading(e,t,a){if(this.useLocal)return p.submitReading(e,t,a);try{return await this.request(`/reading/${e}/submit`,{method:"POST",body:JSON.stringify({answers:t,readingTimeSeconds:a})})}catch{return p.submitReading(e,t,a)}}async getListeningMaterials(e={}){if(this.useLocal)return p.getListeningMaterials();try{const t=new URLSearchParams(e).toString();return await this.request(`/listening/materials${t?`?${t}`:""}`)}catch{return p.getListeningMaterials()}}async getListeningMaterial(e){if(this.useLocal)return p.getListeningMaterial(e);try{return await this.request(`/listening/${e}`)}catch{return p.getListeningMaterial(e)}}async getListeningTranscript(e){const{material:t}=await this.getListeningMaterial(e);return{transcript:(t==null?void 0:t.transcript)||(t==null?void 0:t.audio_text)||""}}async submitListening(e,t,a=1){if(this.useLocal)return p.submitListening(e,t,a);try{return await this.request(`/listening/${e}/submit`,{method:"POST",body:JSON.stringify({answers:t,listenCount:a})})}catch{return p.submitListening(e,t,a)}}async getWritingPrompts(e={}){if(this.useLocal)return p.getWritingPrompts();try{const t=new URLSearchParams(e).toString();return await this.request(`/writing/prompts${t?`?${t}`:""}`)}catch{return p.getWritingPrompts()}}async submitWriting(e,t,a){if(this.useLocal)return p.submitWriting(e,t,a);try{return await this.request("/writing/submit",{method:"POST",body:JSON.stringify({promptId:e,text:t,timeSpentSeconds:a})})}catch{return p.submitWriting(e,t,a)}}async getSpeakingScenarios(e={}){if(this.useLocal)return p.getSpeakingScenarios();try{const t=new URLSearchParams(e).toString();return await this.request(`/speaking/scenarios${t?`?${t}`:""}`)}catch{return p.getSpeakingScenarios()}}async getSpeakingScenario(e){if(this.useLocal)return p.getSpeakingScenario(e);try{return await this.request(`/speaking/scenario/${e}`)}catch{return p.getSpeakingScenario(e)}}async getErrors(e={}){if(this.useLocal)return p.getErrors(e);try{const t=new URLSearchParams(e).toString();return await this.request(`/errors${t?`?${t}`:""}`)}catch{return p.getErrors(e)}}async resolveError(e){if(this.useLocal)return p.resolveError(e);try{return await this.request(`/errors/${e}/resolve`,{method:"POST"})}catch{return p.resolveError(e)}}async generateDailyTasks(){if(this.useLocal)return p.generateDailyTasks();try{return await this.request("/daily-tasks/generate",{method:"POST"})}catch{return p.generateDailyTasks()}}async completeDailyTask(e,t=!0){if(this.useLocal)return p.completeDailyTask(e,t);try{return await this.request("/daily-tasks/complete",{method:"POST",body:JSON.stringify({taskId:e,completed:t})})}catch{return p.completeDailyTask(e,t)}}async getProgressHistory(){if(this.useLocal)return p.getProgressHistory();try{return await this.request("/progress/history")}catch{return p.getProgressHistory()}}async getWeeklyReport(){if(this.useLocal)return p.getWeeklyReport();try{return await this.request("/reports/weekly")}catch{return p.getWeeklyReport()}}}const b=new N;class G{constructor(){this.user=null,this.dashboard=null,this.currentView="dashboard",this.sessionSeconds=0,this.timerInterval=null,this.listeners=new Map}on(e,t){return this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t),()=>{const a=this.listeners.get(e);a&&this.listeners.set(e,a.filter(i=>i!==t))}}emit(e,t){this.listeners.has(e)&&this.listeners.get(e).forEach(a=>{try{a(t)}catch(i){console.error(`Error in event listener for ${e}:`,i)}})}setUser(e){this.user=e,this.emit("user:change",e)}setDashboard(e){this.dashboard=e,this.emit("dashboard:change",e)}setView(e){this.currentView=e,this.emit("view:change",e)}startSessionTimer(){this.timerInterval&&clearInterval(this.timerInterval),this.timerInterval=setInterval(()=>{this.sessionSeconds++,this.emit("timer:tick",this.sessionSeconds)},1e3)}stopSessionTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}showToast(e,t="info",a=4e3){const i=document.getElementById("toast-container");if(!i)return;const n=document.createElement("div");n.className=`toast ${t}`;let s="ℹ️";t==="success"&&(s="✅"),t==="error"&&(s="⚠️");const r=document.createElement("span");r.textContent=s;const o=document.createElement("span");o.textContent=e,n.appendChild(r),n.appendChild(o),i.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(-10px)",n.style.transition="all 0.3s ease",setTimeout(()=>n.remove(),300)},a)}}const h=new G;class F{constructor(e){this.onSuccess=e,this.mode="login",this.element=null}show(){this.remove();const e=document.createElement("div");e.className="auth-overlay",e.id="auth-modal-overlay",e.innerHTML=`
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
    `,document.body.appendChild(e),this.element=e,this.bindEvents(),setTimeout(()=>{var t;(t=document.getElementById("auth-username"))==null||t.focus()},100)}remove(){const e=document.getElementById("auth-modal-overlay");e&&e.remove(),this.element=null}showAlert(e,t=!0){const a=document.getElementById("auth-alert");a&&(a.textContent=e,a.className=`auth-alert ${t?"error":"success"}`,a.style.display="block")}setMode(e){this.mode=e,this.show()}bindEvents(){var e,t,a,i,n;(e=document.getElementById("tab-login"))==null||e.addEventListener("click",()=>this.setMode("login")),(t=document.getElementById("tab-register"))==null||t.addEventListener("click",()=>this.setMode("register")),(a=document.getElementById("link-switch-register"))==null||a.addEventListener("click",s=>{s.preventDefault(),this.setMode("register")}),(i=document.getElementById("link-switch-login"))==null||i.addEventListener("click",s=>{s.preventDefault(),this.setMode("login")}),(n=document.getElementById("auth-form"))==null||n.addEventListener("submit",async s=>{var u,d;s.preventDefault();const r=(u=document.getElementById("auth-username"))==null?void 0:u.value.trim(),o=(d=document.getElementById("auth-password"))==null?void 0:d.value;if(!r||!o){this.showAlert("Lütfen kullanıcı adı ve şifre girin.");return}if(this.mode==="register"&&o.length<3){this.showAlert("Şifre en az 3 karakter olmalıdır.");return}const l=document.getElementById("btn-submit-auth");l&&(l.disabled=!0,l.textContent="İşleniyor...");try{let y;this.mode==="register"?(y=await b.register(r,o,r),h.showToast(`Hoş geldin ${y.displayName||y.username}! Hesabın A1 seviyesinde 0'dan oluşturuldu. 🎉`,"success")):(y=await b.login(r,o),h.showToast(`Tekrar hoş geldin, ${y.displayName||y.username}! 👋`,"success")),this.remove(),this.onSuccess&&this.onSuccess(y)}catch(y){this.showAlert(y.message||"Giriş yapılırken bir hata oluştu."),l&&(l.disabled=!1,l.textContent=this.mode==="login"?"Giriş Yap →":"Hesap Oluştur ve 0'dan Başla →")}})}}const P=[{id:"first_step",category:"starter",title:"İlk Adım",description:"İlk kelime tekrarını veya gramer alıştırmanı başarıyla tamamla.",icon:"🌱",xp:25,check:c=>{var e,t,a;return((e=c.stats)==null?void 0:e.total_words_learned)>0||((t=c.stats)==null?void 0:t.total_grammar_mastered)>0||((a=c.stats)==null?void 0:a.xp)>15}},{id:"compass",category:"starter",title:"Kutup Yıldızı",description:"10 Becerili CEFR Seviye Tespit Sınavını tamamla.",icon:"🧭",xp:150,check:c=>!!(c.latestAssessment&&(c.latestAssessment.status==="completed"||c.latestAssessment.overall_cefr))},{id:"level_5",category:"starter",title:"Hızla Yükselen",description:"Öğrenci seviyeni 5. seviyeye ulaştır.",icon:"🚀",xp:100,check:c=>{var e,t;return((e=c.stats)==null?void 0:e.level)>=5||(((t=c.stats)==null?void 0:t.xp)||0)>=500}},{id:"level_10",category:"starter",title:"İngilizce Yolcusu",description:"Öğrenci seviyeni 10. seviyeye ulaştır.",icon:"👑",xp:250,check:c=>{var e,t;return((e=c.stats)==null?void 0:e.level)>=10||(((t=c.stats)==null?void 0:t.xp)||0)>=2e3}},{id:"vocab_10",category:"vocab",title:"Kelime Çırağı",description:"Kalıcı hafızaya 10 İngilizce kelime kaydet.",icon:"📖",xp:50,target:10,progress:c=>{var e;return{current:Math.min(10,((e=c.stats)==null?void 0:e.total_words_learned)||0),max:10}},check:c=>{var e;return((e=c.stats)==null?void 0:e.total_words_learned)>=10}},{id:"vocab_50",category:"vocab",title:"Kelime Avcısı",description:"Kalıcı hafızaya 50 İngilizce kelime kaydet.",icon:"📚",xp:150,target:50,progress:c=>{var e;return{current:Math.min(50,((e=c.stats)==null?void 0:e.total_words_learned)||0),max:50}},check:c=>{var e;return((e=c.stats)==null?void 0:e.total_words_learned)>=50}},{id:"vocab_100",category:"vocab",title:"Kelime Ustası",description:"100 kelimeyi hafızana kazı.",icon:"🧠",xp:300,target:100,progress:c=>{var e;return{current:Math.min(100,((e=c.stats)==null?void 0:e.total_words_learned)||0),max:100}},check:c=>{var e;return((e=c.stats)==null?void 0:e.total_words_learned)>=100}},{id:"vocab_250",category:"vocab",title:"Canlı Sözlük",description:"250 kelimelik geniş bir CEFR dağarcığına ulaş.",icon:"🏛️",xp:600,target:250,progress:c=>{var e;return{current:Math.min(250,((e=c.stats)==null?void 0:e.total_words_learned)||0),max:250}},check:c=>{var e;return((e=c.stats)==null?void 0:e.total_words_learned)>=250}},{id:"vocab_custom",category:"vocab",title:"Kişisel Arşivci",description:"Sisteme kendine özel en az 1 özel kelime kartı ekle.",icon:"🏷️",xp:40,check:c=>!!c.hasCustomWord},{id:"grammar_first",category:"grammar",title:"Kural Bilgesi",description:"Gramer Akademisinden ilk konuyu ve alıştırmayı bitir.",icon:"📐",xp:50,check:c=>{var e,t,a;return((e=c.stats)==null?void 0:e.total_grammar_mastered)>=1||(((a=(t=c.skills)==null?void 0:t.grammar)==null?void 0:a.score)||0)>10}},{id:"grammar_5",category:"grammar",title:"Gramer Mimarı",description:"5 farklı dilbilgisi konusunu kavra ve alıştırmalarını geç.",icon:"🏛️",xp:150,target:5,progress:c=>{var e;return{current:Math.min(5,((e=c.stats)==null?void 0:e.total_grammar_mastered)||0),max:5}},check:c=>{var e;return((e=c.stats)==null?void 0:e.total_grammar_mastered)>=5}},{id:"grammar_a1_master",category:"grammar",title:"A1 Gramer Şampiyonu",description:"A1 seviyesindeki temel zaman ve yapıları tamamen bitir.",icon:"🥇",xp:250,check:c=>{var e,t,a,i;return(((t=(e=c.skills)==null?void 0:e.grammar)==null?void 0:t.score)||0)>=70&&((i=(a=c.skills)==null?void 0:a.grammar)==null?void 0:i.level)!=="A1-"}},{id:"reader_first",category:"skills",title:"Kitap Kurdu I",description:"İlk okuma parçasını oku ve anlama testini tamamla.",icon:"📰",xp:50,check:c=>{var e,t;return c.completedReadingCount>=1||(((t=(e=c.skills)==null?void 0:e.reading)==null?void 0:t.score)||0)>0}},{id:"reader_perfect",category:"skills",title:"Derin Kavrama",description:"Bir okuma anlama testinde tüm soruları eksiksiz doğru yanıtla.",icon:"🎯",xp:100,check:c=>!!c.hasPerfectReading},{id:"listener_first",category:"skills",title:"İyi Dinleyici",description:"İlk dinleme laboratuvarı egzersizini tamamla.",icon:"🎧",xp:50,check:c=>{var e,t;return c.completedListeningCount>=1||(((t=(e=c.skills)==null?void 0:e.listening)==null?void 0:t.score)||0)>0}},{id:"writer_first",category:"skills",title:"Akıcı Kalem",description:"Yazma stüdyosuna ilk İngilizce kompozisyonunu gönder.",icon:"✍️",xp:75,check:c=>{var e,t;return c.completedWritingCount>=1||(((t=(e=c.skills)==null?void 0:e.writing)==null?void 0:t.score)||0)>0}},{id:"speaker_first",category:"skills",title:"Sesini Duyur",description:"İlk konuşma simülasyonunu veya sesli diyalog pratiğini yap.",icon:"🗣️",xp:60,check:c=>{var e,t;return c.completedSpeakingCount>=1||(((t=(e=c.skills)==null?void 0:e.speaking)==null?void 0:t.score)||0)>0}},{id:"pronunciation_first",category:"skills",title:"Fonetik Avcısı",description:"İlk telaffuz ve fonetik analiz çalışmanı gerçekleştir.",icon:"🎙️",xp:50,check:c=>{var e,t;return(((t=(e=c.skills)==null?void 0:e.pronunciation)==null?void 0:t.score)||0)>0}},{id:"syntax_first",category:"skills",title:"Cümle Mimarı",description:"S-V-O-M-P-T dizilim laboratuvarında ilk cümleni kur ve doğrula.",icon:"🧩",xp:60,check:c=>{var e,t;return(((t=(e=c.skills)==null?void 0:e.sentence_formation)==null?void 0:t.score)||0)>0}},{id:"syntax_master",category:"skills",title:"Sözdizimi Ustası",description:"Cümle Kurma (Syntax) becerisinde en az %40 başarı seviyesine ulaş.",icon:"⚡",xp:180,target:40,progress:c=>{var e,t;return{current:Math.min(40,((t=(e=c.skills)==null?void 0:e.sentence_formation)==null?void 0:t.score)||0),max:40}},check:c=>{var e,t;return(((t=(e=c.skills)==null?void 0:e.sentence_formation)==null?void 0:t.score)||0)>=40}},{id:"streak_3",category:"streak",title:"Kıvılcım",description:"3 gün aralıksız her gün İngilizce çalış.",icon:"🔥",xp:100,target:3,progress:c=>{var e;return{current:Math.min(3,((e=c.stats)==null?void 0:e.current_streak)||1),max:3}},check:c=>{var e,t;return(((e=c.stats)==null?void 0:e.current_streak)||1)>=3||(((t=c.stats)==null?void 0:t.longest_streak)||1)>=3}},{id:"streak_7",category:"streak",title:"Alev Serisi",description:"7 günlük kesintisiz çalışma serisi yakala.",icon:"⚡",xp:250,target:7,progress:c=>{var e;return{current:Math.min(7,((e=c.stats)==null?void 0:e.current_streak)||1),max:7}},check:c=>{var e,t;return(((e=c.stats)==null?void 0:e.current_streak)||1)>=7||(((t=c.stats)==null?void 0:t.longest_streak)||1)>=7}},{id:"streak_30",category:"streak",title:"Demir İrade",description:"30 günlük destansı bir çalışma disiplini oluştur.",icon:"🛡️",xp:1e3,target:30,progress:c=>{var e;return{current:Math.min(30,((e=c.stats)==null?void 0:e.current_streak)||1),max:30}},check:c=>{var e,t;return(((e=c.stats)==null?void 0:e.current_streak)||1)>=30||(((t=c.stats)==null?void 0:t.longest_streak)||1)>=30}},{id:"error_slayer",category:"streak",title:"Hata Avcısı",description:"Hata defterinden en az 5 yanlışı tekrar edip çöz.",icon:"⚔️",xp:120,target:5,progress:c=>{var e;return{current:Math.min(5,((e=c.stats)==null?void 0:e.total_errors_resolved)||0),max:5}},check:c=>{var e;return(((e=c.stats)==null?void 0:e.total_errors_resolved)||0)>=5}},{id:"daily_hero",category:"streak",title:"Günün Kahramanı",description:"Bir günde tüm Günlük Rutin görevlerinin tamamını bitir.",icon:"⭐",xp:80,check:c=>!!c.completedAllDailyTasks},{id:"night_owl",category:"streak",title:"Gece Kuşu",description:"Gece 22:00 sonrasında bir çalışma seansı tamamla.",icon:"🦉",xp:40,check:()=>{const c=new Date().getHours();return c>=22||c<4}}];class Y{constructor(){this.modalEl=null}getUnlockedAchievements(){try{const e=localStorage.getItem("linguaforge_active_user")||"misafir",t=localStorage.getItem(`linguaforge_u_${e}_achievements`);return t?JSON.parse(t):[]}catch{return[]}}saveUnlockedAchievements(e){try{const t=localStorage.getItem("linguaforge_active_user")||"misafir";localStorage.setItem(`linguaforge_u_${t}_achievements`,JSON.stringify(e))}catch{}}isUnlocked(e){return this.getUnlockedAchievements().some(a=>a.id===e)}async checkAll(e={}){const t=this.getUnlockedAchievements(),a=new Set(t.map(d=>d.id)),i=[],s=`linguaforge_u_${localStorage.getItem("linguaforge_active_user")||"misafir"}_`;let r=e.stats;if(!r)try{const d=localStorage.getItem(s+"stats");r=d?JSON.parse(d):{}}catch{r={}}let o=e.skills;if(!o)try{const d=localStorage.getItem(s+"skills");o=d?JSON.parse(d):{}}catch{o={}}let l=[];try{const d=localStorage.getItem(s+"custom_words");l=d?JSON.parse(d):[]}catch{}const u={...e,stats:r,skills:o,hasCustomWord:l.length>0};for(const d of P)if(!a.has(d.id))try{if(d.check(u)){const y={id:d.id,title:d.title,description:d.description,icon:d.icon,xp:d.xp,unlocked_at:new Date().toISOString()};if(t.push(y),a.add(d.id),i.push(d),r){r.xp=(r.xp||0)+d.xp;try{localStorage.setItem(s+"stats",JSON.stringify(r))}catch{}}}}catch(y){console.warn(`Error checking achievement ${d.id}:`,y)}return i.length>0&&(this.saveUnlockedAchievements(t),i.forEach((d,y)=>{setTimeout(()=>{this.showCelebration(d)},y*1200)})),i}showCelebration(e){var i;this.playCelebrationSound();const t=document.createElement("div");t.className="achievement-modal-overlay",t.innerHTML=`
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
    `,document.body.appendChild(t),this.spawnConfetti(t.querySelector(".achievement-confetti-host"));const a=()=>{t.classList.add("closing"),setTimeout(()=>t.remove(),250)};(i=t.querySelector(".btn-achievement-claim"))==null||i.addEventListener("click",a),t.addEventListener("click",n=>{n.target===t&&a()})}playCelebrationSound(){try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,s)=>{const r=t.createOscillator(),o=t.createGain();r.type="triangle",r.frequency.setValueAtTime(n,a+s*.08),o.gain.setValueAtTime(0,a+s*.08),o.gain.linearRampToValueAtTime(.18,a+s*.08+.03),o.gain.exponentialRampToValueAtTime(.001,a+s*.08+.6),r.connect(o),o.connect(t.destination),r.start(a+s*.08),r.stop(a+s*.08+.65)})}catch{}}spawnConfetti(e){if(!e)return;const t=["#f59e0b","#10b981","#6366f1","#ec4899","#3b82f6","#8b5cf6"];for(let a=0;a<30;a++){const i=document.createElement("div");i.className="confetti-piece",i.style.backgroundColor=t[a%t.length],i.style.left=`${Math.random()*100}%`,i.style.animationDelay=`${Math.random()*.4}s`,i.style.animationDuration=`${.8+Math.random()*.8}s`,i.style.transform=`rotate(${Math.random()*360}deg)`,e.appendChild(i)}}}const z=new Y;function Q(c,e,t={}){return z.checkAndAward({stats:c,skills:e,...t})}class Z{constructor(){this.container=null,this.data=null}async render(e){var t;this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Kişiselleştirilmiş öğrenme paneliniz yükleniyor...</p>
      </div>
    `;try{this.data=await b.getDashboard(),h.setDashboard(this.data),await z.checkAll(this.data),this.renderContent()}catch(a){if(a.message==="AUTH_REQUIRED")return;this.container.innerHTML=`
        <div class="card error-card">
          <h3>Panel yüklenemedi</h3>
          <p>${a.message}</p>
          <button class="btn btn-primary" id="retry-dashboard-btn">Tekrar Dene</button>
        </div>
      `,(t=document.getElementById("retry-dashboard-btn"))==null||t.addEventListener("click",()=>this.render(e))}}renderContent(){const{user:e,stats:t,skills:a,dailyTasks:i,recentErrors:n,reviewStats:s,latestAssessment:r}=this.data,o=document.getElementById("sidebar-streak");o&&(o.textContent=`${t.current_streak||1} gün`);const l=document.getElementById("sidebar-xp");l&&(l.textContent=`${t.xp||0} XP`);const u=document.getElementById("review-due-badge");u&&(u.textContent=s?s.dueToday:0);const d=document.getElementById("errors-count-badge");d&&(d.textContent=n?n.length:0);const y=(r==null?void 0:r.overall_cefr)||(r==null?void 0:r.overallCEFR)||"A1",v=document.getElementById("sidebar-cefr-badge");v&&(v.textContent=y);const m=[{key:"grammar",name:"Dilbilgisi (Grammar)",icon:"📖"},{key:"vocabulary",name:"Kelime Haznesi (Vocabulary)",icon:"📚"},{key:"reading",name:"Okuma & Anlama (Reading)",icon:"📰"},{key:"listening",name:"Dinleme & Algılama (Listening)",icon:"🎧"},{key:"writing",name:"Yazma Becerisi (Writing)",icon:"✍️"},{key:"speaking",name:"Konuşma & Akıcılık (Speaking)",icon:"🗣️"},{key:"pronunciation",name:"Telaffuz & Aksan (Pronunciation)",icon:"🎙️"},{key:"sentence_formation",name:"Cümle Kurma (Syntax)",icon:"🧩"},{key:"comprehension",name:"Kavrama Hızı (Comprehension)",icon:"💡"},{key:"communication",name:"Doğal İletişim (Communication)",icon:"🤝"}],k=(i==null?void 0:i.tasks)||[{id:"task-vocab",skill:"vocabulary",description:"Kelime Kartlarından en az 5 tanesini tekrar et veya yeni kelime öğren",targetView:"vocabulary"},{id:"task-grammar",skill:"grammar",description:"Gramer Akademisinden 1 konuyu ve interaktif alıştırmasını tamamla",targetView:"grammar"},{id:"task-reading",skill:"reading",description:"1 okuma metnini incele ve anlama sorularını yanıtla",targetView:"reading"},{id:"task-speaking",skill:"speaking",description:"1 konuşma senaryosunda sesli pratik yap veya diyalog kur",targetView:"speaking"}],x=new Set((i==null?void 0:i.completed_tasks)||[]),_=x.size,A=k.length,C=Math.round(_/Math.max(A,1)*100),I=k.find(E=>!x.has(E.id));this.nextTargetView=I?I.targetView||I.skill:"vocabulary",this.container.innerHTML=`
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
                <span>⚡ ${_>=A?"Günün Rutini Tamamlandı! 🎉":`Günün Rutinine Başla (${A-_} görev kaldı)`}</span>
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
                  <strong>İlerleme:</strong> ${_} / ${A} Görev Tamamlandı (%${C})
                </span>
                <span class="routine-reward-tag">${C===100?"🎉 +50 XP Bonus Eklendi!":"+20 XP / Görev"}</span>
              </div>
              <div class="routine-bar-outer">
                <div class="routine-bar-inner" style="width: ${C}%;"></div>
              </div>
              ${C===100?`
                <div class="routine-celebration">
                  ✨ <strong>Tebrikler!</strong> Bugünün tüm hedeflerini tamamlayarak serinizi korudunuz ve günlük bonusu kazandınız!
                </div>
              `:""}
            </div>

            <div class="tasks-list">
              ${k.map(E=>{const g=x.has(E.id);return`
                  <div class="task-item ${g?"completed":""}" data-task-id="${E.id}" data-view="${E.targetView||E.skill}">
                    <div class="task-checkbox ${g?"checked":""}" title="${g?"Tamamlandı olarak işaretlendi (kaldırmak için tıkla)":"Tamamlandı olarak işaretle"}">
                      ${g?"✓":""}
                    </div>
                    <div class="task-content">
                      <div class="task-title ${g?"text-strikethrough":""}">${E.description}</div>
                      <div class="task-skill-tag cefr-tag A1">${E.skill.toUpperCase()}</div>
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
              ${m.map(E=>{const g=a[E.key]||{level:"A1",score:0},f=g.level||"A1",w=g.score||0;return`
                  <div class="skill-row" data-skill="${E.key}">
                    <div class="skill-label">
                      <span class="skill-icon">${E.icon}</span>
                      <span class="skill-name">${E.name}</span>
                    </div>
                    <div class="skill-bar-wrap">
                      <div class="skill-bar-bg">
                        <div class="skill-bar-fill" style="width: ${Math.max(w,5)}%;"></div>
                      </div>
                    </div>
                    <div class="skill-score">
                      <span class="cefr-tag ${f}">${f}</span>
                      <span class="score-percent">%${w}</span>
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
                <h3>Rozetler & Başarımlar (${z.getUnlockedAchievements().length} / ${P.length} Açıldı)</h3>
                <p>Kazanılan rozetlerini incelemek ve kilitleri açmak için Rozet Vitrinini ziyaret et.</p>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm" id="btn-view-all-badges">Rozet Vitrini →</button>
          </div>
        </section>
      </div>
    `,this.bindEvents()}bindEvents(){var e,t,a,i,n,s;(e=document.getElementById("hero-diagnostic-btn"))==null||e.addEventListener("click",()=>{h.setView("assessment")}),(t=document.getElementById("hero-routine-btn"))==null||t.addEventListener("click",()=>{h.setView(this.nextTargetView||"vocabulary")}),(a=document.getElementById("goto-assessment-btn"))==null||a.addEventListener("click",()=>{h.setView("assessment")}),(i=document.getElementById("dash-achievements-banner"))==null||i.addEventListener("click",()=>{h.setView("progress")}),(n=document.getElementById("btn-view-all-badges"))==null||n.addEventListener("click",r=>{r.stopPropagation(),h.setView("progress")}),(s=document.getElementById("refresh-tasks-btn"))==null||s.addEventListener("click",async()=>{await this.render(this.container),h.showToast("Görevler güncellendi.","info")}),document.querySelectorAll(".task-checkbox").forEach(r=>{r.addEventListener("click",async o=>{o.stopPropagation();const l=r.closest(".task-item");if(!l)return;const u=l.dataset.taskId,y=!r.classList.contains("checked");try{await b.completeDailyTask(u,y),h.showToast(y?"🎯 Görev tamamlandı! +20 XP eklendi.":"Görev işareti kaldırıldı.",y?"success":"info"),await this.render(this.container)}catch(v){h.showToast("Görev durumu güncellenemedi: "+v.message,"error")}})}),document.querySelectorAll(".task-action-btn").forEach(r=>{r.addEventListener("click",o=>{o.stopPropagation();const l=r.closest(".task-item"),u=l==null?void 0:l.dataset.view;u&&h.setView(u)})}),document.querySelectorAll(".task-item").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.view;o&&h.setView(o)})}),document.querySelectorAll(".lab-card").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.view;o&&h.setView(o)})}),document.querySelectorAll(".skill-row").forEach(r=>{r.style.cursor="pointer",r.addEventListener("click",()=>{const o=r.dataset.skill,u={grammar:"grammar",vocabulary:"vocabulary",reading:"reading",listening:"listening",writing:"writing",speaking:"speaking",pronunciation:"pronunciation",sentence_formation:"syntax",comprehension:"reading",communication:"speaking"}[o]||o;u&&h.setView(u)})})}}class J{constructor(){this.synth=typeof window<"u"&&window.speechSynthesis||null,this.recognition=null,this.voices=[],this.preferredAccent="en-US",this.preferredRate=1,typeof window<"u"&&this.synth&&(this.loadVoices(),typeof speechSynthesis<"u"&&speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=()=>this.loadVoices()));const e=typeof window<"u"&&(window.SpeechRecognition||window.webkitSpeechRecognition)||null;e&&(this.recognition=new e,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.lang="en-US")}loadVoices(){if(!this.synth)return;const e=this.synth.getVoices()||[];this.voices=e.filter(t=>t.lang&&t.lang.toLowerCase().startsWith("en"))}isTtsSupported(){return!!this.synth}isSttSupported(){return!!this.recognition}sanitizeForSpeech(e){if(!e)return"";let t=String(e);return t=t.replace(/_+/g," blank "),t=t.replace(/(\b\w+)\s*\/\s*(\w+\b)/g,"$1 or $2"),t=t.replace(/\//g," "),t=t.replace(/<[^>]+>/g," "),t=t.replace(/["“”«»`\\]/g," "),t=t.replace(/(^|\s)['‘](.*?)['’](\s|$)/g,"$1 $2 $3"),t=t.replace(/['’]{2,}/g," "),t=t.replace(/[:;]/g,", "),t=t.replace(/[()[\]{}]/g,", "),t=t.replace(/\s+[-—–]+\s+/g,", "),t=t.replace(/[-—–]{2,}/g,", "),t=t.replace(/(\b\w+)-(\w+\b)/g,"$1 $2"),t=t.replace(/[-—–]/g," "),t=t.replace(/\.{2,}/g,". "),t=t.replace(/[*#^~<>@$%&+=|_]/g," "),t=t.replace(/,\s*,+/g,", "),t=t.replace(/,\s*\./g,"."),t=t.replace(/\.\s*,/g,"."),t=t.replace(/\s+([.,!?;:])/g,"$1"),t=t.replace(/\s+/g," ").trim(),t}getBestVoice(e="en-US"){if(!this.synth)return null;let t=this.voices;if((!t||t.length===0)&&(t=(this.synth.getVoices()||[]).filter(r=>r.lang&&r.lang.toLowerCase().startsWith("en")),this.voices=t),t.length===0&&(t=(this.synth.getVoices()||[]).filter(o=>o.lang&&o.lang.toLowerCase().startsWith("en")),this.voices=t),t.length===0)return null;const a=t.find(r=>r.lang.toLowerCase()===e.toLowerCase());if(a)return a;const i=e.slice(0,5),n=t.find(r=>r.lang.toLowerCase().startsWith(i.toLowerCase()));if(n)return n;const s=t.find(r=>{const o=(r.name||"").toLowerCase();return o.includes("natural")||o.includes("google")||o.includes("samantha")||o.includes("david")||o.includes("jenny")||o.includes("zira")});return s||t[0]}speak(e,t={}){if(!this.synth)return console.warn("Speech synthesis not supported in this browser"),Promise.resolve();this.cancel();const a=this.sanitizeForSpeech(e);return a?new Promise(i=>{const n=new SpeechSynthesisUtterance(a);n.rate=t.rate||this.preferredRate||.95,n.pitch=t.pitch||1;const s=t.lang||this.preferredAccent||"en-US";n.lang=s;const r=this.getBestVoice(s);r&&(n.voice=r),n.onend=()=>i(),n.onerror=o=>{console.warn("Speech synthesis error:",o),i()},this.synth.speak(n)}):Promise.resolve()}get hasRecognition(){return!!this.recognition}get hasSynthesis(){return!!this.synth}stop(){this.cancel()}cancel(){this.synth&&this.synth.cancel()}listen(e,t,a="en-US"){return this.startListening({onResult:i=>{typeof e=="function"&&e(i.final||i.interim||"")},onEnd:i=>{typeof t=="function"&&t(i)},lang:a})}startListening({onResult:e,onError:t,onEnd:a,lang:i="en-US"}){if(!this.recognition){t&&t(new Error("Speech recognition not supported in this browser."));return}try{this.recognition.abort()}catch{}this.recognition.lang=i;let n="";this.recognition.onresult=s=>{let r="";for(let o=s.resultIndex;o<s.results.length;++o)s.results[o].isFinal?n+=(n?" ":"")+s.results[o][0].transcript.trim():r+=s.results[o][0].transcript;e&&e({final:n.trim(),interim:r.trim(),confidence:s.results[0]?s.results[0][0].confidence:0})},this.recognition.onerror=s=>{console.warn("Speech recognition error:",s.error),t&&t(s)},this.recognition.onend=()=>{a&&a(n.trim())};try{this.recognition.start()}catch(s){console.warn("Recognition start caught error:",s)}}stopListening(){if(this.recognition)try{this.recognition.stop()}catch{}}calculateSimilarity(e,t){if(!e||!t)return 0;const a=String(e).toLowerCase().replace(/[^\w\s]/g,"").trim(),i=String(t).toLowerCase().replace(/[^\w\s]/g,"").trim();if(!a||!i)return 0;const n=a.split(/\s+/).filter(Boolean),s=i.split(/\s+/).filter(Boolean);if(s.length===0||n.length===0)return 0;let r=0;const o=[...s];for(const y of n){const v=o.indexOf(y);v!==-1&&(r++,o.splice(v,1))}const l=r/n.length,u=r/s.length,d=l+u>0?2*l*u/(l+u):0;return Math.round(d*100)}}const S=new J,D={what:{tr:"Ne, Neyi",pos:"pronoun",cefr:"A1",note:"Soru zamiri"},where:{tr:"Nerede, Nereye",pos:"adverb",cefr:"A1",note:"Yer bildiren soru kelimesi"},when:{tr:"Ne zaman, -dığı zaman",pos:"adverb",cefr:"A1",note:"Zaman bildiren soru kelimesi"},which:{tr:"Hangi, Hangisi",pos:"pronoun",cefr:"A1",note:"Seçenek sorusu"},who:{tr:"Kim, Kimi",pos:"pronoun",cefr:"A1",note:"Kişi sorusu"},whose:{tr:"Kimin",pos:"pronoun",cefr:"A2",note:"Aitlik sorusu"},why:{tr:"Neden, Niçin",pos:"adverb",cefr:"A1",note:"Sebep sorusu"},how:{tr:"Nasıl, Ne kadar",pos:"adverb",cefr:"A1",note:"Durum veya miktar sorusu"},choose:{tr:"Seçmek, Tercih etmek",pos:"verb",cefr:"A1",note:"Seçenek belirlemek"},chose:{tr:"Seçti",pos:"verb",cefr:"A2",note:"Choose fiilinin geçmiş hali"},chosen:{tr:"Seçilmiş",pos:"verb/adj",cefr:"A2",note:"Choose fiilinin 3. hali"},select:{tr:"Seçmek, İşaretlemek",pos:"verb",cefr:"A2",note:"Doğru seçeneği belirleyin"},correct:{tr:"Doğru, Düzeltmek",pos:"adj/verb",cefr:"A1",note:"Hatasız, uygun"},incorrect:{tr:"Yanlış, Hatalı",pos:"adj",cefr:"A2",note:"Doğru olmayan"},sentence:{tr:"Cümle",pos:"noun",cefr:"A1",note:"Yargı bildiren söz dizisi"},sentences:{tr:"Cümleler",pos:"noun",cefr:"A1",note:"Çoğul cümle"},phrase:{tr:"İfade, Söz öbeği",pos:"noun",cefr:"A2",note:"Birden çok kelimeden oluşan yapı"},blank:{tr:"Boşluk, Boş",pos:"noun/adj",cefr:"A1",note:"Doldurulacak alan"},blanks:{tr:"Boşluklar",pos:"noun",cefr:"A1",note:"Cümledeki eksik yerler"},fill:{tr:"Doldurmak",pos:"verb",cefr:"A1",note:"Fill in the blank = Boşluğu doldur"},filled:{tr:"Doldurulmuş, Dolu",pos:"verb",cefr:"A1",note:"Geçmiş zaman"},following:{tr:"Aşağıdaki, Takip eden",pos:"adj",cefr:"A2",note:"The following = Aşağıdakiler"},statement:{tr:"İfade, Beyan, Cümle",pos:"noun",cefr:"B1",note:"Belirtilen yargı"},meaning:{tr:"Anlam",pos:"noun",cefr:"A1",note:"Sözcüğün anlamı"},explanation:{tr:"Açıklama, İzah",pos:"noun",cefr:"A2",note:"Nedenini belirtme"},explain:{tr:"Açıklamak, İzah etmek",pos:"verb",cefr:"A2",note:"Açıklığa kavuşturmak"},passage:{tr:"Paragraf, Parça, Metin",pos:"noun",cefr:"A2",note:"Okuma metni parçası"},dialogue:{tr:"Diyalog, Karşılıklı konuşma",pos:"noun",cefr:"A1",note:"İki kişi arasındaki konuşma"},answer:{tr:"Cevap, Cevaplamak",pos:"noun/verb",cefr:"A1",note:"Soruya verilen yanıt"},question:{tr:"Soru",pos:"noun",cefr:"A1",note:"Cevap bekleyen cümle"},option:{tr:"Seçenek, Şık",pos:"noun",cefr:"A2",note:"A, B, C, D şıkları"},options:{tr:"Seçenekler, Şıklar",pos:"noun",cefr:"A2",note:"Tüm şıklar"},complete:{tr:"Tamamlamak, Eksiksiz",pos:"verb/adj",cefr:"A1",note:"Bitirmek, eksiksiz hale getirmek"},umbrella:{tr:"Şemsiye",pos:"noun",cefr:"A1",note:"Yağmurdan korunma aracı"},cloud:{tr:"Bulut",pos:"noun",cefr:"A1",note:"Gökyüzündeki su buharı"},clouds:{tr:"Bulutlar",pos:"noun",cefr:"A1",note:"Dark clouds = kara bulutlar"},dark:{tr:"Karanlık, Koyu",pos:"adj",cefr:"A1",note:"Koyu renk veya ışıksız"},sky:{tr:"Gökyüzü",pos:"noun",cefr:"A1",note:"Gök"},expect:{tr:"Ummak, Beklemek",pos:"verb",cefr:"A2",note:"Beklenti içinde olmak"},expected:{tr:"Bekledi, Umdu",pos:"verb",cefr:"A2",note:"Beklenen durum"},"take out":{tr:"Çıkarmak, Dışarı almak",pos:"phrasal verb",cefr:"A2",note:"Cebinden veya çantasından çıkarmak"},"took out":{tr:"Çıkardı",pos:"phrasal verb",cefr:"A2",note:"Take out geçmiş hali"},rain:{tr:"Yağmur / Yağmur yağmak",pos:"noun/verb",cefr:"A1",note:"Hava durumu"},raining:{tr:"Yağmur yağıyor",pos:"verb",cefr:"A1",note:"Şimdiki zaman"},"under the weather":{tr:"Keyifsiz, Biraz hasta",pos:"idiom",cefr:"B1",note:"Deyim: Kendini kırgın hissetmek"},weather:{tr:"Hava durumu",pos:"noun",cefr:"A1",note:"Günün hava şartları"},unwell:{tr:"Rahatsız, Hasta",pos:"adj",cefr:"A2",note:"Sağlığı bozuk"},sick:{tr:"Hasta",pos:"adj",cefr:"A1",note:"Hastalanmış"},born:{tr:"Doğmuş, Dünyaya gelmiş",pos:"adj/verb",cefr:"A1",note:"To be born = doğmak"},birthday:{tr:"Doğum günü",pos:"noun",cefr:"A1",note:"Doğum yıldönümü"},reflection:{tr:"Düşünme, Yansıma",pos:"noun",cefr:"B2",note:"Derin düşünme"},reflect:{tr:"Düşünmek, Yansıtmak",pos:"verb",cefr:"B2",note:"Let me reflect = Bir düşüneyim"},thoughtful:{tr:"Düşünceli, Özenli",pos:"adj",cefr:"B1",note:"İyi düşünülmüş soru"},thought:{tr:"Düşünce / Düşündü",pos:"noun/verb",cefr:"A2",note:"Think geçmiş hali veya fikir"},interview:{tr:"Mülakat, Röportaj",pos:"noun",cefr:"A2",note:"Görüşme"},interviewer:{tr:"Mülakatı yapan kişi",pos:"noun",cefr:"B1",note:"Soru soran yetkili"},hesitation:{tr:"Tereddüt, Duraksama",pos:"noun",cefr:"B2",note:"Konuşurken duraklama"},hesitate:{tr:"Tereddüt etmek",pos:"verb",cefr:"B1",note:"Duraksamak"},filler:{tr:"Doldurucu sözcük (well, you know)",pos:"noun",cefr:"B2",note:"Düşünme süresi kazandıran sözcük"},directive:{tr:"Talimat, Direktif",pos:"noun",cefr:"B2",note:"Resmi yönerge"},pragmatic:{tr:"Edimbilimsel, Pratik amaca yönelik",pos:"adj",cefr:"B2",note:"Sosyal iletişimdeki gerçek anlam"},implicature:{tr:"Örtük anlam, İma",pos:"noun",cefr:"C1",note:"Doğrudan söylenmeyip ima edilen şey"},review:{tr:"Gözden geçirmek, İncelemek",pos:"verb",cefr:"A2",note:"Tekrar okumak"},presentation:{tr:"Sunum",pos:"noun",cefr:"A2",note:"Sunum konuşması"},compliment:{tr:"İltifat, Övgü",pos:"noun",cefr:"B1",note:"Güzel söz"},stranger:{tr:"Yabancı (tanınmayan kişi)",pos:"noun",cefr:"A2",note:"Tanımadığınız kişi"},clarify:{tr:"Netleştirmek, Açıklığa kavuşturmak",pos:"verb",cefr:"B1",note:"Daha net anlatmak"},clarification:{tr:"Açıklama, Netleştirme",pos:"noun",cefr:"B1",note:"Netleştirme talebi"},interrupt:{tr:"Sözünü kesmek, Araya girmek",pos:"verb",cefr:"B1",note:"Konuşmayı bölmek"},interruption:{tr:"Araya girme, Kesinti",pos:"noun",cefr:"B1",note:"Bölünme"},"turn-taking":{tr:"Konuşma sırası alma",pos:"phrase",cefr:"B2",note:"Diyalogda sırayla söz alma"},electricity:{tr:"Elektrik",pos:"noun",cefr:"A2",note:"Enerji"},suddenly:{tr:"Aniden, Birdenbire",pos:"adverb",cefr:"A2",note:"Beklenmedik bir anda"},"went out":{tr:"Söndü, Kesildi (elektrik)",pos:"phrasal verb",cefr:"A2",note:"Go out geçmiş hali"},closure:{tr:"Kapanma, Kapalı olma",pos:"noun",cefr:"B1",note:"Yolun kapalı olması"},route:{tr:"Güzergah, Rota, Yol",pos:"noun",cefr:"A2",note:"Gidilecek güzergah"},manager:{tr:"Müdür, Yönetici",pos:"noun",cefr:"A2",note:"Sorumlu kişi"},submit:{tr:"Teslim etmek, Sunmak",pos:"verb",cefr:"B1",note:"Rapor/ödev teslim etmek"},report:{tr:"Rapor",pos:"noun",cefr:"A2",note:"Yazılı bilgilendirme"},meal:{tr:"Öğün, Yemek",pos:"noun",cefr:"A1",note:"Yemek vakti"},middle:{tr:"Orta, Ortası",pos:"noun/adj",cefr:"A2",note:"İki şeyin ortası"},breakfast:{tr:"Kahvaltı",pos:"noun",cefr:"A1",note:"Sabah öğünü"},lunch:{tr:"Öğle yemeği",pos:"noun",cefr:"A1",note:"Öğle öğünü"},dinner:{tr:"Akşam yemeği",pos:"noun",cefr:"A1",note:"Akşam ana öğün"},supper:{tr:"Gece atıştırmalığı, Hafif akşam yemeği",pos:"noun",cefr:"B1",note:"Geç saatteki hafif yemek"},flaw:{tr:"Kusur, Hata, Eksiklik",pos:"noun",cefr:"B2",note:"Düzeltilmesi gereken eksik"},decision:{tr:"Karar",pos:"noun",cefr:"A2",note:"Make a decision = Karar vermek"},mistake:{tr:"Hata, Yanlış",pos:"noun",cefr:"A1",note:"Make a mistake = Hata yapmak"},progress:{tr:"İlerleme, Gelişme",pos:"noun",cefr:"A2",note:"Make progress = İlerleme kaydetmek"},effort:{tr:"Çaba, Gayret",pos:"noun",cefr:"B1",note:"Make an effort = Çaba göstermek"},routine:{tr:"Rutin, Günlük alışkanlık",pos:"noun",cefr:"A1",note:"Düzenli yapılan şeyler"},habit:{tr:"Alışkanlık",pos:"noun",cefr:"A2",note:"Tekrarlanan davranış"},colleague:{tr:"İş arkadaşı, Meslektaş",pos:"noun",cefr:"A2",note:"Birlikte çalışılan kişi"},relatives:{tr:"Akrabalar",pos:"noun",cefr:"A2",note:"Aile fertleri"},relative:{tr:"Akraba / Göreceli",pos:"noun/adj",cefr:"A2",note:"Akraba veya bağıntılı"},agree:{tr:"Katılmak, Aynı fikirde olmak",pos:"verb",cefr:"A2",note:"I agree with you = Sana katılıyorum"},disagree:{tr:"Katılmamak, Karşı çıkmak",pos:"verb",cefr:"A2",note:"Farklı düşünmek"},allow:{tr:"İzin vermek",pos:"verb",cefr:"B1",note:"Müsaade etmek"},appear:{tr:"Görünmek, Ortaya çıkmak",pos:"verb",cefr:"B1",note:"Belirmek"},arrive:{tr:"Varmak, Ulaşmak",pos:"verb",cefr:"A1",note:"Bir yere ulaşmak"},avoid:{tr:"Kaçınmak, Uzak durmak",pos:"verb",cefr:"B1",note:"Yapmaktan sakınmak"},become:{tr:"Olmak, Haline gelmek",pos:"verb",cefr:"A2",note:"Dönüşmek"},became:{tr:"Oldu",pos:"verb",cefr:"A2",note:"Become geçmiş hali"},believe:{tr:"İnanmak",pos:"verb",cefr:"A1",note:"Güvenmek veya inanmak"},borrow:{tr:"Ödünç almak",pos:"verb",cefr:"A2",note:"Geri vermek üzere almak"},lend:{tr:"Ödünç vermek",pos:"verb",cefr:"A2",note:"Geri almak üzere vermek"},cancel:{tr:"İptal etmek",pos:"verb",cefr:"A2",note:"Vazgeçmek"},carry:{tr:"Taşımak",pos:"verb",cefr:"A2",note:"Bir şeyi elinde/üstünde götürmek"},catch:{tr:"Yakalamak, Yetişmek",pos:"verb",cefr:"A2",note:"Catch a bus = Otobüse yetişmek"},caught:{tr:"Yakaladı",pos:"verb",cefr:"A2",note:"Catch geçmiş hali"},consider:{tr:"Göz önünde bulundurmak, Düşünmek",pos:"verb",cefr:"B1",note:"Değerlendirmek"},continue:{tr:"Devam etmek",pos:"verb",cefr:"A2",note:"Sürdürmek"},create:{tr:"Yaratmak, Oluşturmak",pos:"verb",cefr:"A2",note:"Meydana getirmek"},describe:{tr:"Tanımlamak, Tarif etmek",pos:"verb",cefr:"A2",note:"Detaylı anlatmak"},develop:{tr:"Geliştirmek, Gelişmek",pos:"verb",cefr:"B1",note:"İlerletmek"},discover:{tr:"Keşfetmek",pos:"verb",cefr:"A2",note:"Yeni bir şey bulmak"},discuss:{tr:"Tartışmak, Görüşmek",pos:"verb",cefr:"A2",note:"Fikir alışverişi yapmak"},enjoy:{tr:"Keyif almak, Eğlenmek",pos:"verb",cefr:"A1",note:"Hoşlanmak"},improve:{tr:"Geliştirmek, İyileştirmek",pos:"verb",cefr:"A2",note:"Daha iyi hale getirmek"},include:{tr:"İçermek, Dahil etmek",pos:"verb",cefr:"A2",note:"Kapsamak"},intend:{tr:"Niyet etmek, Amaçlamak",pos:"verb",cefr:"B1",note:"Hedeflemek"},manage:{tr:"Yönetmek, Başarmak",pos:"verb",cefr:"B1",note:"Üstesinden gelmek"},mention:{tr:"Bahsetmek, Değinmek",pos:"verb",cefr:"B1",note:"Adını geçirmek"},notice:{tr:"Fark etmek",pos:"verb/noun",cefr:"A2",note:"Görmek, ayırtına varmak"},offer:{tr:"Teklif etmek, Sunmak",pos:"verb/noun",cefr:"A2",note:"Öneri sunmak"},participate:{tr:"Katılmak",pos:"verb",cefr:"B1",note:"Yer almak"},prefer:{tr:"Tercih etmek",pos:"verb",cefr:"A2",note:"Yeğlemek"},prepare:{tr:"Hazırlamak, Hazırlanmak",pos:"verb",cefr:"A2",note:"Önceden hazır etmek"},prevent:{tr:"Önlemek, Engel olmak",pos:"verb",cefr:"B1",note:"Oluşmasını engellemek"},provide:{tr:"Sağlamak, Temin etmek",pos:"verb",cefr:"B1",note:"Sunmak"},receive:{tr:"Almak, Kabul etmek",pos:"verb",cefr:"A2",note:"Gelen şeyi almak"},recommend:{tr:"Tavsiye etmek, Önermek",pos:"verb",cefr:"A2",note:"Öneri vermek"},refuse:{tr:"Reddetmek",pos:"verb",cefr:"B1",note:"Kabul etmemek"},remind:{tr:"Hatırlatmak",pos:"verb",cefr:"A2",note:"Aklına getirmek"},remember:{tr:"Hatırlamak",pos:"verb",cefr:"A1",note:"Unutmamak"},require:{tr:"Gerektirmek, İstemek",pos:"verb",cefr:"B1",note:"Gerekli kılmak"},suggest:{tr:"Önermek, Telkin etmek",pos:"verb",cefr:"B1",note:"Fikir vermek"},support:{tr:"Desteklemek",pos:"verb/noun",cefr:"A2",note:"Yardımcı olmak"},understand:{tr:"Anlamak",pos:"verb",cefr:"A1",note:"Kavramak"},understood:{tr:"Anladı",pos:"verb",cefr:"A1",note:"Understand geçmiş hali"},important:{tr:"Önemli",pos:"adj",cefr:"A1",note:"Büyük değer taşıyan"},necessary:{tr:"Gerekli, Zorunlu",pos:"adj",cefr:"A2",note:"Olmazsa olmaz"},difficult:{tr:"Zor, Güç",pos:"adj",cefr:"A1",note:"Kolay olmayan"},easy:{tr:"Kolay, Basit",pos:"adj",cefr:"A1",note:"Zor olmayan"},possible:{tr:"Mümkün, Olası",pos:"adj",cefr:"A2",note:"Gerçekleşebilir"},impossible:{tr:"İmkansız",pos:"adj",cefr:"A2",note:"Olamaz"},available:{tr:"Mevcut, Müsait",pos:"adj",cefr:"A2",note:"Kullanıma hazır"},similar:{tr:"Benzer",pos:"adj",cefr:"A2",note:"Benzeşen"},different:{tr:"Farklı",pos:"adj",cefr:"A1",note:"Aynı olmayan"},frequent:{tr:"Sık, Sıkça olan",pos:"adj",cefr:"B1",note:"Sık tekrarlanan"},rare:{tr:"Nadir, Ender",pos:"adj",cefr:"A2",note:"Az bulunan"},careful:{tr:"Dikkatli",pos:"adj",cefr:"A1",note:"Özen gösteren"},careless:{tr:"Dikkatsiz, Özensiz",pos:"adj",cefr:"A2",note:"Hata yapan"},polite:{tr:"Kibar, Nazik",pos:"adj",cefr:"A1",note:"Görgülü"},rude:{tr:"Kaba, Nezaketsiz",pos:"adj",cefr:"A2",note:"Kırıcı"},patient:{tr:"Sabırlı / Hasta",pos:"adj/noun",cefr:"B1",note:"Sabır gösteren veya hastane hastası"},confident:{tr:"Özgüvenli, Kendinden emin",pos:"adj",cefr:"B1",note:"Güveni tam"},anxious:{tr:"Endişeli, Kaygılı",pos:"adj",cefr:"B1",note:"Huzursuz"},fluent:{tr:"Akıcı (konuşma)",pos:"adj",cefr:"B1",note:"Takılmadan konuşabilen"},accurate:{tr:"Doğru, İsabetli",pos:"adj",cefr:"B1",note:"Hatasız"},although:{tr:"-e rağmen, Karşın",pos:"conjunction",cefr:"B1",note:"Zıtlık bağlacı"},though:{tr:"-e rağmen, Yine de",pos:"conjunction/adv",cefr:"B1",note:"Cümle sonunda: gerçi"},"even though":{tr:"-dığı halde, -e rağmen",pos:"conjunction",cefr:"B1",note:"Güçlü zıtlık"},however:{tr:"Ancak, Yine de",pos:"conjunction/adv",cefr:"A2",note:"Zıt fikir bildirir"},therefore:{tr:"Bu nedenle, Dolayısıyla",pos:"adverb",cefr:"B1",note:"Sonuç bildiren bağlaç"},furthermore:{tr:"Ayrıca, Dahası",pos:"adverb",cefr:"B2",note:"Ek bilgi bağlacı"},moreover:{tr:"Dahası, Üstelik",pos:"adverb",cefr:"B2",note:"Pekiştirme bağlacı"},meanwhile:{tr:"Bu sırada, O esnada",pos:"adverb",cefr:"B1",note:"Aynı anda gerçekleşen olaylar"},besides:{tr:"Ayrıca, -den başka",pos:"preposition/adv",cefr:"B1",note:"Bunun yanında"},otherwise:{tr:"Aksi takdirde, Yoksa",pos:"adverb",cefr:"B1",note:"Şartın gerçekleşmemesi durumu"},unless:{tr:"-medikçe, -mazsa",pos:"conjunction",cefr:"B1",note:"If not anlamına gelir"},since:{tr:"-den beri / Çünkü",pos:"preposition/conj",cefr:"A2",note:"Zaman veya sebep belirtir"},while:{tr:"-iken, Sırasında",pos:"conjunction",cefr:"A2",note:"Süreç bildiren bağlaç"},whereas:{tr:"Oysa, Halbuki",pos:"conjunction",cefr:"B2",note:"Karşılaştırmalı zıtlık"},despite:{tr:"-e rağmen",pos:"preposition",cefr:"B1",note:"Kendinden sonra isim/fiil-ing alır"},"in spite of":{tr:"-e rağmen",pos:"preposition",cefr:"B1",note:"Despite ile eşanlamlıdır"},"so that":{tr:"-sın diye, Amacıyla",pos:"conjunction",cefr:"B1",note:"Amaç bildiren bağlaç"},"in order to":{tr:"-mek için",pos:"conjunction",cefr:"B1",note:"Amaç bildirir (+ V1)"},passive:{tr:"Edilgen çatı (Yapıldı)",pos:"grammar",cefr:"B1",note:"Özne değil yapılan iş ön planda"},conditional:{tr:"Şart/Koşul cümlesi (If...)",pos:"grammar",cefr:"B1",note:"Eğer ile başlayan olasılıklar"},inversion:{tr:"Devrik yapı",pos:"grammar",cefr:"B2",note:"Vurgu için yardımcı fiilin başa gelmesi"},modal:{tr:"Kip/Yardımcı fiil (can, must, should)",pos:"grammar",cefr:"A2",note:"Gereklilik/olasılık yardımcı fiilleri"},gerund:{tr:"Fiilimsi (-ing ekiyle isimleşen fiil)",pos:"grammar",cefr:"B1",note:"Swimming is good"},infinitive:{tr:"Mastar hali (to + V1)",pos:"grammar",cefr:"A2",note:"To go, to learn"}};class X{constructor(){this.customCache=new Map,this.floatingEl=null,this.isListeningGlobal=!1,this.activeWord=null,this.lastDblClickTime=0}lookup(e){if(!e)return null;const t=e.trim().toLowerCase().replace(/[.,!?;:"'()\[\]{}]/g,"");if(!t||t.length<2)return null;if(this.customCache.has(t))return this.customCache.get(t);if(D[t]){const s={word:t,...D[t]};return this.customCache.set(t,s),s}(!T.vocabulary_items||T.vocabulary_items.length===0)&&q();const a=T.vocabulary_items||[],i=a.find(s=>s.word&&s.word.toLowerCase()===t);if(i){const s={word:i.word,tr:i.definition_tr||i.definition_en,pos:i.part_of_speech||"kelime",cefr:i.cefr_level||"A1",phonetic:i.phonetic,example:Array.isArray(i.example_sentences)?i.example_sentences[0]:null,note:i.collocations?`Kalıp: ${Array.isArray(i.collocations)?i.collocations.slice(0,3).join(", "):""}`:null};return this.customCache.set(t,s),s}const n=this.generateLemmas(t);for(const s of n){if(D[s]){const o={word:t,baseWord:s,...D[s],note:`Kök: ${s}`};return this.customCache.set(t,o),o}const r=a.find(o=>o.word&&o.word.toLowerCase()===s);if(r){const o={word:t,baseWord:r.word,tr:r.definition_tr||r.definition_en,pos:r.part_of_speech||"kelime",cefr:r.cefr_level||"A1",phonetic:r.phonetic,note:`Kök: ${r.word}`};return this.customCache.set(t,o),o}}return null}generateLemmas(e){const t=[];return e.endsWith("ing")&&e.length>5&&(t.push(e.slice(0,-3)),t.push(e.slice(0,-3)+"e")),e.endsWith("ied")&&e.length>4&&t.push(e.slice(0,-3)+"y"),e.endsWith("ed")&&e.length>4&&(t.push(e.slice(0,-2)),t.push(e.slice(0,-1))),e.endsWith("ies")&&e.length>4&&t.push(e.slice(0,-3)+"y"),e.endsWith("es")&&e.length>4&&(t.push(e.slice(0,-2)),t.push(e.slice(0,-1))),e.endsWith("s")&&!e.endsWith("ss")&&e.length>3&&t.push(e.slice(0,-1)),e.endsWith("ly")&&e.length>4&&t.push(e.slice(0,-2)),t}extractQuestionKeywords(e){if(!e)return[];const t=`${e.question||""} ${(e.options||[]).join(" ")} ${e.topic||""}`,a=t.toLowerCase().replace(/[^a-z\s-]/g," ").split(/\s+/).filter(s=>s.length>3),i=new Map,n=["under the weather","happy birthday","take out","went out","turn-taking","make a mistake","make progress"];for(const s of n)if(t.toLowerCase().includes(s)){const r=this.lookup(s);r&&i.set(s,r)}for(const s of a){if(i.size>=6)break;const r=this.lookup(s);r&&!i.has(r.word)&&i.set(r.word,r)}return Array.from(i.values()).filter(Boolean)}renderQuestionVocabBar(e){const t=this.extractQuestionKeywords(e);return!t||t.length===0?"":`
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
            ${t.map(a=>`
              <div class="vocab-hint-card" data-word="${a.word}">
                <div class="hint-card-top">
                  <div class="hint-word-wrap">
                    <strong class="hint-word">${a.word}</strong>
                    <span class="hint-cefr ${a.cefr||"A1"}">${a.cefr||"A1"}</span>
                  </div>
                  <div class="hint-actions">
                    <button class="hint-action-btn hint-tts" data-word="${a.word}" title="Sesli Dinle">🔊</button>
                    <button class="hint-action-btn hint-save" data-word="${a.word}" data-tr="${a.tr||""}" data-cefr="${a.cefr||"A1"}" title="Kelime Kartlarıma Ekle">⭐ Ekle</button>
                  </div>
                </div>
                <div class="hint-meaning">🇹🇷 ${a.tr}</div>
                ${a.note?`<div class="hint-note">📌 ${a.note}</div>`:""}
              </div>
            `).join("")}
          </div>
          <div class="vocab-hint-footer">
            <span>💡 İpucu: Sorudaki veya şıklardaki herhangi bir kelimenin üzerine çift tıklayarak da anında Türkçe anlamını görebilirsiniz.</span>
          </div>
        </div>
      </div>
    `}bindVocabDrawerEvents(e){e&&(e.querySelectorAll(".vocab-drawer-toggle").forEach(t=>{t.addEventListener("click",a=>{a.preventDefault();const i=t.closest(".question-vocab-drawer"),n=i==null?void 0:i.querySelector(".vocab-drawer-body"),s=i==null?void 0:i.querySelector(".drawer-chevron");if(n){const r=n.style.display!=="none";n.style.display=r?"none":"block",s&&(s.textContent=r?"▼":"▲"),i.classList.toggle("expanded",!r)}})}),e.querySelectorAll(".hint-tts").forEach(t=>{t.addEventListener("click",a=>{a.stopPropagation();const i=t.dataset.word;i&&S.speak(i)})}),e.querySelectorAll(".hint-save").forEach(t=>{t.addEventListener("click",async a=>{a.stopPropagation();const i=t.dataset.word,n=t.dataset.tr,s=t.dataset.cefr;i&&(await b.addCustomWord(i,n,s),t.textContent="✓ Eklendi",t.classList.add("saved"),h.showToast(`"${i}" kelime kartlarınıza eklendi! 📚`,"success"))})}))}getWordAtPoint(e,t){let a=null,i=0;if(document.caretRangeFromPoint){const n=document.caretRangeFromPoint(e,t);n&&(a=n.startContainer,i=n.startOffset)}else if(document.caretPositionFromPoint){const n=document.caretPositionFromPoint(e,t);n&&(a=n.offsetNode,i=n.offset)}if(a&&a.nodeType===Node.TEXT_NODE){const n=a.textContent||"";if(!n)return"";let s=i,r=i;for(;s>0&&/[\w'-]/.test(n[s-1]);)s--;for(;r<n.length&&/[\w'-]/.test(n[r]);)r++;return n.slice(s,r)}return""}async fetchOnlineTranslation(e){var a,i,n;const t=e.toLowerCase().trim();if(!t||t.length<2)return null;try{const s=new AbortController,r=setTimeout(()=>s.abort(),2600),o=await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(t)}&langpair=en|tr`,{signal:s.signal});if(clearTimeout(r),o.ok){const l=await o.json(),u=(a=l==null?void 0:l.responseData)==null?void 0:a.translatedText;if(u&&u.toLowerCase()!==t){const d={word:t,tr:u,pos:"kelime",cefr:"Sözlük",note:"Otomatik Çeviri"};return this.customCache.set(t,d),d}}}catch{}try{const s=new AbortController,r=setTimeout(()=>s.abort(),2e3),o=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURIComponent(t)}`,{signal:s.signal});if(clearTimeout(r),o.ok){const l=await o.json(),u=(n=(i=l==null?void 0:l[0])==null?void 0:i[0])==null?void 0:n[0];if(u&&u.toLowerCase()!==t){const d={word:t,tr:u,pos:"kelime",cefr:"Sözlük",note:"Google Çeviri"};return this.customCache.set(t,d),d}}}catch{}return null}async inspectWord(e,t){if(!e)return;const a=e.toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g,"").trim();if(!a||a.length<2)return;this.activeWord=a;const i=this.lookup(a);if(i){this.showFloatingPopover(i,t);return}const n={word:a,tr:"Anlamı aranıyor... ⏳",pos:"kelime",cefr:"Aranıyor",isLoading:!0};this.showFloatingPopover(n,t);const s=await this.fetchOnlineTranslation(a);this.activeWord===a&&this.floatingEl&&this.floatingEl.style.display!=="none"&&(s?this.updateFloatingPopoverContent(s):this.updateFloatingPopoverContent({word:a,tr:"Anlam bulunamadı (Çevrimdışı)",pos:"kelime",cefr:"Genel",note:"Sesli telaffuzunu dinleyebilir veya kartlarınıza ekleyebilirsiniz."}))}initGlobalListener(){if(this.isListeningGlobal)return;this.isListeningGlobal=!0;let e=document.getElementById("floating-word-inspector");e||(e=document.createElement("div"),e.id="floating-word-inspector",e.className="floating-word-inspector",e.style.display="none",document.body.appendChild(e)),this.floatingEl=e,document.addEventListener("dblclick",t=>{if(this.floatingEl&&this.floatingEl.contains(t.target))return;this.lastDblClickTime=Date.now();let a="";const i=window.getSelection();i&&i.toString().trim()&&(a=i.toString().trim()),a||(a=this.getWordAtPoint(t.clientX,t.clientY)),a&&this.inspectWord(a,{x:t.pageX,y:t.pageY,clientX:t.clientX,clientY:t.clientY})},!0),document.addEventListener("mouseup",t=>{this.floatingEl&&this.floatingEl.contains(t.target)||Date.now()-this.lastDblClickTime<400||setTimeout(()=>{const a=window.getSelection(),i=a?a.toString().trim():"";i&&i.length>=2&&i.length<=45&&i.includes(" ")&&this.inspectWord(i,{x:t.pageX,y:t.pageY,clientX:t.clientX,clientY:t.clientY})},80)}),document.addEventListener("mousedown",t=>{this.floatingEl&&this.floatingEl.style.display!=="none"&&(this.floatingEl.contains(t.target)||Date.now()-this.lastDblClickTime>250&&this.hideFloatingPopover())}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.hideFloatingPopover()})}showFloatingPopover(e,t={}){if(!this.floatingEl)return;this.renderPopoverHtml(e);const a=310,i=140;let n=t.x!==void 0?t.x:window.innerWidth/2,s=t.y!==void 0?t.y:window.innerHeight/2,r=n-a/2;r=Math.max(12,Math.min(window.innerWidth-a-12,r));let o=s-i-20;o<window.scrollY+10&&(o=s+25),this.floatingEl.style.top=`${Math.max(10,o)}px`,this.floatingEl.style.left=`${r}px`,this.floatingEl.style.display="block",this.bindPopoverButtons(e)}updateFloatingPopoverContent(e){this.floatingEl&&(this.renderPopoverHtml(e),this.bindPopoverButtons(e))}renderPopoverHtml(e){const t=e.isLoading;this.floatingEl.innerHTML=`
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
    `}bindPopoverButtons(e){var t,a,i;(t=document.getElementById("popover-close"))==null||t.addEventListener("click",n=>{n.stopPropagation(),this.hideFloatingPopover()}),(a=document.getElementById("popover-listen"))==null||a.addEventListener("click",n=>{n.stopPropagation(),S.speak(e.word)}),(i=document.getElementById("popover-add"))==null||i.addEventListener("click",async n=>{n.stopPropagation(),await b.addCustomWord(e.word,e.tr,e.cefr||"A1"),h.showToast(`"${e.word}" kelime kartlarınıza kaydedildi! 📚`,"success");const s=document.getElementById("popover-add");s&&(s.textContent="✓ Kaydedildi",s.style.background="rgba(16, 185, 129, 0.3)",s.style.color="#34d399")})}hideFloatingPopover(){this.floatingEl&&(this.floatingEl.style.display="none",this.activeWord=null)}}const B=new X;class ee{constructor(){this.container=null,this.assessmentId=null,this.skills=["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],this.skillNamesTr={grammar:"Dilbilgisi (Grammar)",vocabulary:"Kelime Haznesi (Vocabulary)",reading:"Okuma & Anlama (Reading)",listening:"Dinleme & Algılama (Listening)",writing:"Yazma Becerisi (Writing)",speaking:"Konuşma & Akıcılık (Speaking)",pronunciation:"Telaffuz & Aksan (Pronunciation)",sentence_formation:"Cümle Kurma (Syntax)",comprehension:"Kavrama Hızı (Comprehension)",communication:"Doğal İletişim (Communication)"},this.currentSkillIndex=0,this.currentQuestions=[],this.currentQuestionIndex=0,this.selectedOption=null,this.assessmentResults=null}async render(e){this.container=e,this.renderIntro()}renderIntro(){var e,t;this.container.innerHTML=`
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
    `,(e=document.getElementById("start-assessment-btn"))==null||e.addEventListener("click",()=>this.startAssessment()),(t=document.getElementById("skip-assessment-btn"))==null||t.addEventListener("click",async()=>{await b.skipAssessmentToA1(),h.showToast("Başlangıç seviyeniz A1 olarak ayarlandı. 0'dan eğitime hazırsınız! 🚀","success"),h.setView("dashboard")})}async startAssessment(){this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Seviye belirleme sınav motoru başlatılıyor...</p>
      </div>
    `;try{const e=await b.startAssessment();this.assessmentId=e.assessmentId,this.currentSkillIndex=0,await this.loadSkillQuestions()}catch(e){h.showToast("Sınav başlatılamadı: "+e.message,"error"),this.renderIntro()}}async loadSkillQuestions(){const e=this.skills[this.currentSkillIndex],t=this.skillNamesTr[e]||e;this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>${t} soruları hazırlanıyor...</p>
      </div>
    `;try{const a=await b.getAssessmentQuestions(this.assessmentId,e);this.currentQuestions=a.questions||[],this.currentQuestionIndex=0,this.currentQuestions.length===0?this.nextSkill():this.renderQuestion()}catch(a){h.showToast("Hata: "+a.message,"error"),this.nextSkill()}}renderQuestion(){const e=this.skills[this.currentSkillIndex],t=this.skillNamesTr[e]||e,a=this.currentQuestions[this.currentQuestionIndex];this.selectedOption=null;const i=Math.round((this.currentSkillIndex*Math.max(this.currentQuestions.length,1)+this.currentQuestionIndex)/(this.skills.length*3)*100);this.container.innerHTML=`
      <div class="question-container">
        <!-- Header Progress -->
        <div class="assessment-topbar">
          <div class="assessment-skill-indicator">
            <span class="skill-name-badge">${t}</span>
            <span class="skill-step">Beceri: ${this.currentSkillIndex+1} / ${this.skills.length}</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: ${Math.min(i,100)}%;"></div>
          </div>
          <span class="progress-pct">%${Math.min(i,100)}</span>
        </div>

        <!-- Question Card -->
        <div class="card question-card">
          <div class="question-meta">
            <span class="cefr-tag ${a.cefrLevel||"A1"}">${a.cefrLevel||"A1"}</span>
            <span class="question-topic">${a.topic||"Temel"}</span>
            <button class="btn btn-secondary btn-sm tts-btn" id="listen-question-btn" title="Soruyu sesli dinle">
              🔊 Sesli Oku
            </button>
          </div>

          <div class="question-instruction">
            <span>Aşağıdaki soruyu okuyun ve en doğru seçeneği işaretleyin:</span>
          </div>

          <div class="question-stem" id="question-text">
            ${a.question}
          </div>

          <!-- Instant Question Vocabulary & Structure Hints Drawer -->
          ${B.renderQuestionVocabBar(a)}

          <div class="question-options-list">
            ${(a.options||[]).map((n,s)=>{const r=(n||"").toString().replace(/^["']|["']$/g,"");return`
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
    `,this.bindQuestionEvents(a)}bindQuestionEvents(e){var t,a;(t=document.getElementById("listen-question-btn"))==null||t.addEventListener("click",()=>{S.speak(e.question,{rate:.9})}),B.bindVocabDrawerEvents(this.container),document.querySelectorAll(".option-item").forEach(i=>{const n=()=>{document.querySelectorAll(".option-item").forEach(o=>o.classList.remove("selected")),i.classList.add("selected");const s=parseInt(i.dataset.index,10);this.selectedOption=(e.options||[])[s];const r=document.getElementById("submit-answer-btn");r&&(r.disabled=!1)};i.addEventListener("click",n),i.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n())})}),(a=document.getElementById("submit-answer-btn"))==null||a.addEventListener("click",()=>{this.selectedOption!==null&&this.selectedOption!==void 0&&this.submitAnswer(e.id,this.selectedOption)})}async submitAnswer(e,t){const a=document.getElementById("submit-answer-btn");a&&(a.disabled=!0,a.textContent="Kontrol ediliyor...");try{const i=await b.submitAssessmentAnswer(this.assessmentId,e,t);this.showQuestionFeedback(i)}catch(i){h.showToast("Cevap kaydedilemedi: "+i.message,"error"),a&&(a.disabled=!1,a.textContent="Cevabı Onayla →")}}showQuestionFeedback(e){var n;const t=document.getElementById("feedback-card");if(!t)return;const a=document.getElementById("submit-answer-btn");a&&(a.style.display="none");const i=this.currentSkillIndex===this.skills.length-1&&this.currentQuestionIndex===this.currentQuestions.length-1;t.className=`card feedback-card ${e.isCorrect?"correct":"incorrect"}`,t.innerHTML=`
      <div class="feedback-header">
        <span class="feedback-icon">${e.isCorrect?"✅":"❌"}</span>
        <h3 class="feedback-title">${e.isCorrect?"Doğru Cevap!":"Yanlış Cevap"}</h3>
      </div>
      <div class="feedback-body">
        ${e.isCorrect?"":`<p class="correct-answer-text"><strong>Doğru seçenek:</strong> ${e.correctAnswer}</p>`}
        <p class="explanation-text">${e.explanationTr||e.explanation||""}</p>
      </div>
      <button class="btn btn-primary btn-lg" id="btn-next-question">
        ${i?"🎉 Sınavı Bitir ve Seviyemi Belirle →":"Sonraki Soruya Geç →"}
      </button>
    `,t.style.display="block",t.scrollIntoView({behavior:"smooth",block:"nearest"}),(n=document.getElementById("btn-next-question"))==null||n.addEventListener("click",()=>{this.currentQuestionIndex++,this.currentQuestionIndex<this.currentQuestions.length?this.renderQuestion():this.nextSkill()})}async nextSkill(){this.currentSkillIndex++,this.currentSkillIndex<this.skills.length?await this.loadSkillQuestions():await this.finishAssessment()}async finishAssessment(){this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Seviye karneniz ve öğrenme haritanız hesaplanıyor...</p>
      </div>
    `;try{this.assessmentResults=await b.completeAssessment(this.assessmentId),this.renderResults()}catch(e){h.showToast("Sonuçlar hesaplanırken hata: "+e.message,"error"),this.renderIntro()}}renderResults(){var a;const e=this.assessmentResults,t=e.overallCEFR||"A1";this.container.innerHTML=`
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
            ${Object.entries(e.skills||{}).map(([i,n])=>`
                <div class="result-skill-row">
                  <div class="result-skill-name">${this.skillNamesTr[i]||i}</div>
                  <div class="result-skill-bar">
                    <div class="result-skill-fill" style="width: ${Math.max(n.score,10)}%;"></div>
                  </div>
                  <span class="cefr-tag ${n.level||"A1"}">${n.level||"A1"}</span>
                </div>
              `).join("")}
          </div>
        </div>
      </div>
    `,(a=document.getElementById("btn-go-dashboard"))==null||a.addEventListener("click",()=>{h.setView("dashboard")})}}class te{constructor(){this.container=null,this.topics=[],this.selectedTopic=null,this.activeCategory="all",this.currentExerciseIndex=0,this.exercises=[],this.selectedOption=null,this.categoryLabelsTr={all:"Tüm Konular",tenses:"Zamanlar",modals:"Kipler (Modals)",clauses:"Yan Cümleler",determiners:"Belirteçler",prepositions:"Edatlar",sentence_structure:"Cümle Yapısı"}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Gramer Akademisi müfredatı yükleniyor...</p>
      </div>
    `;try{const t=await b.getGrammarTopics();this.topics=Array.isArray(t)?t:t.topics||[],this.topics.length>0&&!this.selectedTopic?await this.loadTopic(this.topics[0].slug):this.renderLayout()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Gramer konuları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadTopic(e){try{const t=await b.getGrammarTopic(e);this.selectedTopic=t.topic,this.exercises=t.exercises||[],this.currentExerciseIndex=0,this.selectedOption=null,this.renderLayout()}catch(t){h.showToast("Konu detayları yüklenemedi: "+t.message,"error")}}renderLayout(){const e=this.selectedTopic,t=e&&e.examples?typeof e.examples=="string"?JSON.parse(e.examples):e.examples:[],a=e&&e.rules?typeof e.rules=="string"?JSON.parse(e.rules):e.rules:[],i=e&&e.common_mistakes?typeof e.common_mistakes=="string"?JSON.parse(e.common_mistakes):e.common_mistakes:[],n=["all","tenses","modals","clauses","determiners","prepositions","sentence_structure"],s=this.activeCategory==="all"?this.topics:this.topics.filter(r=>r.category===this.activeCategory);this.container.innerHTML=`
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
                ${a.map(r=>`<li>${r}</li>`).join("")}
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
            ${i.length>0?`
              <div class="card topic-mistakes-card">
                <h3 class="section-title">⚠️ Sık Yapılan Hatalar & Türkçeden Kaynaklanan Yanılgılar</h3>
                <div class="mistakes-grid">
                  ${i.map(r=>`
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
    `,this.bindEvents()}renderExerciseSandbox(){const e=this.exercises[this.currentExerciseIndex];if(!e)return"";const t=e.prompt||e.question||e.sentence||"Cümle yüklenemedi.",a=e.options?typeof e.options=="string"?JSON.parse(e.options):e.options:null;let i="Aşağıdaki alıştırmayı tamamlayın:";return e.exercise_type==="fill_blank"?i="Boşluğa gelecek uygun kelime veya çekimi yazın:":e.exercise_type==="multiple_choice"?i="Aşağıdaki cümleyi en uygun seçenekle tamamlayın:":e.exercise_type==="error_correction"?i="Cümledeki hatayı bulun ve cümlenin doğru halini yazın:":e.exercise_type==="sentence_transform"?i="Cümleyi parantez içindeki talimata göre dönüştürün:":e.exercise_type==="sentence_creation"&&(i="İstenen kurala uygun bir İngilizce cümle kurun:"),`
      <div class="exercise-sandbox">
        <div class="exercise-prompt-wrap">
          <div class="exercise-instruction">${i}</div>
          <div class="exercise-prompt">${t}</div>
        </div>

        <!-- Vocabulary & Structure Hints -->
        ${B.renderQuestionVocabBar({question:t,options:a,id:e.id})}

        ${a?`
          <div class="exercise-options-grid">
            ${a.map((n,s)=>`
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
    `}bindEvents(){var t;document.querySelectorAll(".topic-nav-item").forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.slug;i&&this.loadTopic(i)})}),document.querySelectorAll(".cat-tab").forEach(a=>{a.addEventListener("click",()=>{this.activeCategory=a.dataset.cat,this.renderLayout()})}),document.querySelectorAll(".tts-play-btn").forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.text;i&&S.speak(i)})}),B.bindVocabDrawerEvents(this.container),document.querySelectorAll(".exercise-opt-btn").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll(".exercise-opt-btn").forEach(n=>n.classList.remove("selected")),a.classList.add("selected"),this.selectedOption=a.dataset.value;const i=document.getElementById("btn-check-exercise");i&&(i.disabled=!1)})});const e=document.getElementById("exercise-input");e==null||e.addEventListener("input",a=>{this.selectedOption=a.target.value.trim();const i=document.getElementById("btn-check-exercise");i&&(i.disabled=!this.selectedOption)}),e==null||e.addEventListener("keydown",a=>{if(a.key==="Enter"){a.preventDefault();const i=a.target.value.trim();i&&(this.selectedOption=i,this.checkExerciseAnswer())}}),(t=document.getElementById("btn-check-exercise"))==null||t.addEventListener("click",()=>{this.selectedOption&&this.checkExerciseAnswer()})}async checkExerciseAnswer(){var a;const e=this.exercises[this.currentExerciseIndex];if(!e)return;const t=document.getElementById("btn-check-exercise");t&&(t.disabled=!0);try{const i=await b.submitGrammarExercise(e.id,this.selectedOption),n=document.getElementById("exercise-feedback");if(!n)return;n.className=`exercise-feedback-box ${i.isCorrect?"correct":"incorrect"}`,n.innerHTML=`
        <div class="feedback-title">${i.isCorrect?"✅ Harika! Doğru Cevap (+15 XP)":"❌ Yanlış Cevap"}</div>
        <div class="feedback-desc">${i.feedback}</div>
        ${i.explanationTr?`<div class="feedback-tr">${i.explanationTr}</div>`:""}
        ${this.currentExerciseIndex+1<this.exercises.length?`
          <button class="btn btn-primary btn-sm" id="btn-next-exercise" style="margin-top: 10px;">
            Sonraki Alıştırma →
          </button>
        `:`
          <p style="margin-top: 10px; color: #a5b4fc; font-weight: 600;">🎉 Bu konudaki tüm alıştırmaları tamamladınız!</p>
        `}
      `,n.style.display="block",(a=document.getElementById("btn-next-exercise"))==null||a.addEventListener("click",()=>{this.currentExerciseIndex++,this.selectedOption=null;const s=document.querySelector(".topic-sandbox-card");s&&(s.innerHTML=`
            <div class="card-header">
              <div>
                <h3 class="card-title">✏️ Alıştırma ve Pekiştirme</h3>
                <div class="card-subtitle">Bu gramer yapısını pratik yaparak pekiştirin</div>
              </div>
              <span class="exercise-progress">Alıştırma ${this.currentExerciseIndex+1} / ${this.exercises.length}</span>
            </div>
            ${this.renderExerciseSandbox()}
          `,this.bindEvents())})}catch(i){h.showToast("Cevap kontrol edilemedi: "+i.message,"error"),t&&(t.disabled=!1)}}}class ae{constructor(){this.container=null,this.mode="review",this.reviewItems=[],this.currentIndex=0,this.isCardFlipped=!1,this.reviewLevel="all",this.dueByLevel={all:0,A1:0,A2:0,B1:0,B2:0,C1:0},this.totalByLevel={all:0,A1:0,A2:0,B1:0,B2:0,C1:0},this.dictionaryItems=[],this.searchQuery="",this.levelFilter="all",this.onlineSearchResult=null,this.isSearchingOnline=!1,this.onlineSearchError=null,this.audioElement=null,this.keyHandler=null}async render(e){var t;this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>1.000+ kelimelik CEFR kütüphanesi ve çalışma kartlarınız yükleniyor...</p>
      </div>
    `;try{await this.loadQueueData();const a=await b.getVocabularyItems();this.dictionaryItems=a.items||[],this.renderContent()}catch(a){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Kelimeler yüklenemedi</h3>
          <p>${a.message}</p>
          <button class="btn btn-primary" id="retry-vocab-btn">Tekrar Dene</button>
        </div>
      `,(t=document.getElementById("retry-vocab-btn"))==null||t.addEventListener("click",()=>this.render(e))}}async loadQueueData(){const e=await b.getReviewQueue(this.reviewLevel);this.reviewItems=e.items||[],this.dueByLevel=e.dueByLevel||{all:0,A1:0,A2:0,B1:0,B2:0,C1:0},this.totalByLevel=e.totalByLevel||{all:0,A1:0,A2:0,B1:0,B2:0,C1:0}}getActiveReviewItems(){return!this.reviewLevel||this.reviewLevel==="all"?this.reviewItems:this.reviewItems.filter(e=>(e.cefr_level||"").toUpperCase()===this.reviewLevel.toUpperCase())}renderContent(){const e=this.dictionaryItems.length||this.totalByLevel.all||1002,t=this.dueByLevel.all||this.reviewItems.length;this.container.innerHTML=`
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
    `,this.bindEvents()}renderReviewArea(){const e=[{key:"all",label:"Tümü",icon:"🌟"},{key:"A1",label:"A1 Temel",icon:"🌱"},{key:"A2",label:"A2 Günlük",icon:"🌿"},{key:"B1",label:"B1 Orta",icon:"🚀"},{key:"B2",label:"B2 İleri",icon:"💎"},{key:"C1",label:"C1 Uzman",icon:"👑"}],t=this.getActiveReviewItems(),a=`
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
        ${a}
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
      `}this.currentIndex>=t.length&&(this.currentIndex=0);const i=t[this.currentIndex],n=i.examples?typeof i.examples=="string"?JSON.parse(i.examples):i.examples:i.example_sentences||[],s=i.collocations?typeof i.collocations=="string"?JSON.parse(i.collocations):i.collocations:[];return`
      ${a}
      <div class="flashcard-container">
        <!-- Progress Counter -->
        <div class="flashcard-counter">
          <span>${this.reviewLevel==="all"?"Tüm Seviyeler":`${this.reviewLevel} Seviyesi`}: Kelime <strong>${this.currentIndex+1}</strong> / ${t.length}</span>
          <span class="cefr-tag ${i.cefr_level||"A1"}">${i.cefr_level||"A1"}</span>
        </div>

        <!-- 3D Flippable Flashcard -->
        <div class="flashcard ${this.isCardFlipped?"flipped":""}" id="flashcard-element">
          <!-- FRONT FACE -->
          <div class="flashcard-face flashcard-front">
            <div class="card-meta">
              <span class="pos-badge">${i.part_of_speech||"kelime"}</span>
              <button class="tts-play-btn" id="card-tts-btn" title="Telaffuzu dinle">🔊 Dinle</button>
            </div>

            <div class="target-word">${i.word}</div>
            <div class="phonetic-ipa">${i.phonetic||""}</div>
            
            <div class="card-prompt-hint">Karta tıklayarak veya Boşluk (Space) tuşuna basarak Türkçe anlamını görün 🔄</div>
          </div>

          <!-- BACK FACE -->
          <div class="flashcard-face flashcard-back">
            <div class="card-meta">
              <span class="pos-badge">${i.part_of_speech||"kelime"}</span>
              <button class="tts-play-btn" id="card-back-tts-btn" title="Tekrar dinle">🔊 Dinle</button>
            </div>

            <div class="target-word">${i.word}</div>
            <div class="phonetic-ipa">${i.phonetic||""}</div>

            <div class="def-box">
              <div class="def-tr"><strong>🇹🇷 Türkçe Anlamı:</strong> ${i.definition_tr||i.definition||""}</div>
              ${i.definition_en?`<div class="def-en"><strong>İngilizce Açıklama:</strong> ${i.definition_en}</div>`:""}
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
    `}renderDictionaryArea(){const e=["all","A1","A2","B1","B2","C1"],t=this.dictionaryItems.filter(a=>{const i=!this.searchQuery||a.word.toLowerCase().includes(this.searchQuery.toLowerCase())||a.definition_tr&&a.definition_tr.toLowerCase().includes(this.searchQuery.toLowerCase()),n=this.levelFilter==="all"||(a.cefr_level||"").toUpperCase()===this.levelFilter.toUpperCase();return i&&n});return`
      <div class="dict-container card">
        <div class="dict-toolbar">
          <div class="dict-search-row">
            <input type="text" class="dict-search-input" id="dict-search-input" placeholder="1.000+ kelimelik kütüphanede ara (İngilizce veya Türkçe)..." value="${this.searchQuery}">
            <button class="btn btn-primary btn-sm" id="btn-quick-online-search" title="Bu kelimeyi internet sözlüğünde ara">
              🌐 İnternette Ara
            </button>
          </div>
          
          <div class="level-filter-tabs">
            ${e.map(a=>{const i=a==="all"?this.dictionaryItems.length:this.dictionaryItems.filter(n=>(n.cefr_level||"").toUpperCase()===a).length;return`
                <button class="level-tab ${this.levelFilter===a?"active":""}" data-level="${a}">
                  ${a==="all"?`Tümü (${i})`:`${a} (${i})`}
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
              `:t.slice(0,150).map(a=>{const i=a.examples?typeof a.examples=="string"?JSON.parse(a.examples):a.examples:a.example_sentences||[];return`
                  <tr>
                    <td class="dict-word-cell">
                      <strong>${a.word}</strong>
                      <span class="dict-pos">${a.part_of_speech||""}</span>
                    </td>
                    <td><span class="cefr-tag ${a.cefr_level||"A1"}">${a.cefr_level||"A1"}</span></td>
                    <td class="dict-phonetic">${a.phonetic||"-"}</td>
                    <td class="dict-def-tr"><strong>${a.definition_tr||"-"}</strong></td>
                    <td class="dict-def-en">
                      <div>${a.definition_en||"-"}</div>
                      ${i.length>0?`<div class="dict-row-example">"${i[0]}"</div>`:""}
                    </td>
                    <td>
                      <div class="dict-actions-cell">
                        <button class="dict-tts-btn" data-word="${a.word}" title="Telaffuz Dinle">🔊</button>
                        <button class="btn btn-secondary btn-xs add-to-due-btn" data-word="${a.word}" title="Bu kelimeyi çalışma kartlarına ekle">
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
    `}bindEvents(){var a,i,n,s,r,o,l,u,d,y,v,m,k,x,_,A,C,I,E;(a=document.getElementById("toggle-review-mode"))==null||a.addEventListener("click",()=>{this.mode="review",this.renderContent()}),(i=document.getElementById("toggle-dict-mode"))==null||i.addEventListener("click",()=>{this.mode="dictionary",this.renderContent()}),(n=document.getElementById("toggle-online-mode"))==null||n.addEventListener("click",()=>{this.mode="online",this.renderContent()}),(s=document.getElementById("switch-to-dict-btn"))==null||s.addEventListener("click",()=>{this.mode="dictionary",this.renderContent()}),(r=document.getElementById("switch-to-online-btn"))==null||r.addEventListener("click",()=>{this.mode="online",this.renderContent()}),document.querySelectorAll(".review-level-btn").forEach(g=>{g.addEventListener("click",async()=>{const f=g.dataset.reviewLevel||"all";this.reviewLevel=f,this.currentIndex=0,this.isCardFlipped=!1,await this.loadQueueData();const w=document.getElementById("vocab-body");w&&(w.innerHTML=this.renderReviewArea()),this.bindEvents()})}),(o=document.getElementById("btn-shuffle-cards"))==null||o.addEventListener("click",()=>{this.shuffleActiveCards()}),(l=document.getElementById("btn-draw-fresh"))==null||l.addEventListener("click",async()=>{await this.handleDrawFreshWords(15)}),(u=document.getElementById("btn-empty-draw-fresh"))==null||u.addEventListener("click",async()=>{await this.handleDrawFreshWords(15)}),(d=document.getElementById("btn-reset-level"))==null||d.addEventListener("click",async()=>{await this.handleResetLevel()}),(y=document.getElementById("btn-empty-reset-level"))==null||y.addEventListener("click",async()=>{await this.handleResetLevel()}),document.querySelectorAll(".pack-load-btn").forEach(g=>{g.addEventListener("click",async()=>{const f=g.dataset.level||"all";try{const w=await b.drawFreshWords(f,25);h.showToast(`✅ ${f==="all"?"Arşivden karışık":f+" seviyesinden"} ${w.activatedCount||25} kelime çalışma kartlarınıza eklendi!`,"success"),this.reviewLevel=f,this.currentIndex=0,this.isCardFlipped=!1,await this.loadQueueData(),this.mode="review",this.renderContent()}catch(w){h.showToast("Paket çekilemedi: "+w.message,"error")}})}),document.querySelectorAll(".add-to-due-btn").forEach(g=>{g.addEventListener("click",async()=>{const f=g.dataset.word;try{await b.addCustomWord(f,"","A1"),h.showToast(`"${f}" kelime kartlarına eklendi!`,"success"),await this.loadQueueData();const w=document.querySelector("#toggle-review-mode .btn-badge");w&&(w.textContent=this.dueByLevel.all||this.reviewItems.length)}catch(w){h.showToast("Eklenemedi: "+w.message,"error")}})});const e=document.getElementById("flashcard-element");e==null||e.addEventListener("click",()=>this.toggleFlip()),(v=document.getElementById("btn-manual-flip"))==null||v.addEventListener("click",g=>{g.stopPropagation(),this.toggleFlip()}),document.querySelectorAll(".rating-btn").forEach(g=>{g.addEventListener("click",f=>{f.stopPropagation();const w=parseInt(g.dataset.rating,10);this.submitRating(w)})}),(m=document.getElementById("card-tts-btn"))==null||m.addEventListener("click",g=>{g.stopPropagation();const w=this.getActiveReviewItems()[this.currentIndex];w&&S.speak(w.word)}),(k=document.getElementById("card-back-tts-btn"))==null||k.addEventListener("click",g=>{g.stopPropagation();const w=this.getActiveReviewItems()[this.currentIndex];w&&S.speak(w.word)}),document.querySelectorAll(".dict-tts-btn").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.word;f&&S.speak(f)})}),document.querySelectorAll(".level-tab").forEach(g=>{g.addEventListener("click",()=>{this.levelFilter=g.dataset.level;const f=document.getElementById("vocab-body");f&&(f.innerHTML=this.renderDictionaryArea()),this.bindEvents()})});const t=document.getElementById("dict-search-input");t==null||t.addEventListener("input",g=>{this.searchQuery=g.target.value;const f=document.getElementById("vocab-body");f&&(f.innerHTML=this.renderDictionaryArea()),this.bindEvents();const w=document.getElementById("dict-search-input");w&&(w.focus(),w.setSelectionRange(w.value.length,w.value.length))}),(x=document.getElementById("btn-quick-online-search"))==null||x.addEventListener("click",()=>{var f;const g=(((f=document.getElementById("dict-search-input"))==null?void 0:f.value)||this.searchQuery||"").trim();if(!g){h.showToast("Lütfen aranacak bir kelime girin.","info");return}this.mode="online",this.searchQuery=g,this.renderContent(),this.performOnlineSearch(g)}),(_=document.getElementById("btn-search-online-now"))==null||_.addEventListener("click",()=>{this.mode="online",this.renderContent(),this.searchQuery&&this.performOnlineSearch(this.searchQuery)}),(A=document.getElementById("btn-submit-online-search"))==null||A.addEventListener("click",()=>{var f;const g=(((f=document.getElementById("online-word-input"))==null?void 0:f.value)||"").trim();if(!g){h.showToast("Lütfen aranacak bir kelime girin.","info");return}this.performOnlineSearch(g)}),(C=document.getElementById("online-word-input"))==null||C.addEventListener("keydown",g=>{if(g.key==="Enter"){const f=(g.target.value||"").trim();f&&this.performOnlineSearch(f)}}),document.querySelectorAll(".suggestion-chip").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.word;this.performOnlineSearch(f)})}),(I=document.getElementById("play-online-audio-btn"))==null||I.addEventListener("click",g=>{g.stopPropagation();const f=g.currentTarget.dataset.audio,w=g.currentTarget.dataset.word;if(f)try{this.audioElement||(this.audioElement=new Audio),this.audioElement.src=f,this.audioElement.play().catch(()=>{w&&S.speak(w)})}catch{w&&S.speak(w)}else w&&S.speak(w)}),(E=document.getElementById("btn-save-online-word"))==null||E.addEventListener("click",async()=>{if(!this.onlineSearchResult)return;const g=document.getElementById("online-tr-value"),f=g?g.value.trim():this.onlineSearchResult.definition_tr,w=this.onlineSearchResult;try{await b.addCustomWord(w.word,f,"B1",w.example||"",w.phonetic,w.part_of_speech),h.showToast(`🎉 "${w.word}" kelimesi başarıyla kartlarınıza eklendi ve aktif edildi!`,"success"),await this.loadQueueData();const L=await b.getVocabularyItems();this.dictionaryItems=L.items||[],this.mode="review",this.renderContent()}catch(L){h.showToast("Kelime eklenirken hata: "+L.message,"error")}}),this.keyHandler&&window.removeEventListener("keydown",this.keyHandler),this.keyHandler=g=>{this.mode==="review"&&(g.target.tagName==="INPUT"||g.target.tagName==="TEXTAREA"||(g.code==="Space"?(g.preventDefault(),this.toggleFlip()):this.isCardFlipped&&(g.key==="1"?this.submitRating(0):g.key==="2"?this.submitRating(1):g.key==="3"?this.submitRating(2):g.key==="4"&&this.submitRating(3))))},window.addEventListener("keydown",this.keyHandler)}shuffleActiveCards(){const e=this.getActiveReviewItems();if(e.length===0)return;for(let a=e.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[e[a],e[i]]=[e[i],e[a]]}this.currentIndex=0,this.isCardFlipped=!1;const t=document.getElementById("vocab-body");t&&(t.innerHTML=this.renderReviewArea()),this.bindEvents(),h.showToast("🔀 Kartların sırası rastgele karıştırıldı!","info")}async handleDrawFreshWords(e=15){try{const t=this.reviewLevel||"all",a=await b.drawFreshWords(t,e);h.showToast(`✨ ${t==="all"?"Arşivden":t+" seviyesinden"} ${a.activatedCount} yeni kelime kuyruğunuza eklendi!`,"success"),await this.loadQueueData(),this.currentIndex=0,this.isCardFlipped=!1;const i=document.getElementById("vocab-body");i&&(i.innerHTML=this.renderReviewArea()),this.bindEvents()}catch(t){h.showToast("Yeni kelime çekilemedi: "+t.message,"error")}}async handleResetLevel(){const e=this.reviewLevel||"all",t=e==="all"?"Tüm seviyelerdeki kelimeleri baştan çalışmak üzere sıfırlamak istiyor musunuz?":`${e} seviyesindeki tüm kelimeleri baştan çalışmak üzere sıfırlamak istiyor musunuz?`;if(confirm(t))try{const a=await b.resetLevelQueue(e);h.showToast(`🔄 ${e==="all"?"Tüm seviyeler":e+" seviyesi"} baştan çalışmaya hazırlandı! (${a.resetCount} kelime aktif)`,"success"),await this.loadQueueData(),this.shuffleActiveCards()}catch(a){h.showToast("Sıfırlama başarısız: "+a.message,"error")}}async performOnlineSearch(e){this.searchQuery=e,this.isSearchingOnline=!0,this.onlineSearchError=null,this.onlineSearchResult=null;const t=document.getElementById("online-search-status");t&&(t.innerHTML=`
        <div class="online-loading-spinner">
          <div class="spinner"></div>
          <p>"${e}" internet sözlük arşivinden getiriliyor...</p>
        </div>
      `);try{const a=await b.searchOnlineDictionary(e);this.onlineSearchResult=a,this.isSearchingOnline=!1,this.renderContent()}catch{this.isSearchingOnline=!1,this.onlineSearchError=`"${e}" internet sözlüğünde bulunamadı veya bağlantı hatası oluştu.`,this.renderContent()}}toggleFlip(){this.isCardFlipped=!this.isCardFlipped;const e=document.getElementById("flashcard-element"),t=document.getElementById("rating-bar"),a=document.getElementById("btn-manual-flip");if(e&&e.classList.toggle("flipped",this.isCardFlipped),t&&(t.style.visibility=this.isCardFlipped?"visible":"hidden"),a&&(a.textContent=this.isCardFlipped?"🔄 Kartın Önünü Gör":"🔄 Kartı Çevir (Anlamı Gör)"),this.isCardFlipped){const n=this.getActiveReviewItems()[this.currentIndex];n&&S.speak(n.word)}}async submitRating(e){const t=this.getActiveReviewItems(),a=t[this.currentIndex];if(a)try{await b.submitReview(a.id,e),this.isCardFlipped=!1,z.checkAll().catch(()=>{}),e===0&&t.push(a),this.currentIndex++,this.currentIndex>=t.length&&(await this.loadQueueData(),this.currentIndex=0);const i=document.getElementById("vocab-body");i&&(i.innerHTML=this.renderReviewArea()),this.bindEvents()}catch(i){h.showToast("Değerlendirme kaydedilemedi: "+i.message,"error")}}destroy(){if(this.keyHandler&&(window.removeEventListener("keydown",this.keyHandler),this.keyHandler=null),this.audioElement)try{this.audioElement.pause(),this.audioElement=null}catch{}}}class ie{constructor(){this.container=null,this.materials=[],this.selectedMaterial=null,this.readingStartTime=Date.now(),this.userAnswers={},this.submissionResult=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Okuma metinleri yükleniyor...</p>
      </div>
    `;try{const t=await b.getReadingMaterials();this.materials=Array.isArray(t)?t:t.materials||[],this.materials.length>0&&!this.selectedMaterial?await this.loadMaterial(this.materials[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Metinler yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadMaterial(e){try{const t=await b.getReadingMaterial(e);this.selectedMaterial=t.material,this.readingStartTime=Date.now(),this.userAnswers={},this.submissionResult=null,this.renderContent()}catch(t){h.showToast("Metin yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedMaterial,t=e&&e.comprehension_questions?typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions:[],a=e&&e.key_vocabulary?typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary:[];this.container.innerHTML=`
      <div class="reading-layout">
        <!-- Sidebar: Library Catalog -->
        <aside class="reading-sidebar card">
          <div class="reading-sidebar-header">
            <h3>Okuma Kütüphanesi</h3>
            <span class="catalog-count">${this.materials.length} Metin</span>
          </div>

          <div class="reading-catalog-list">
            ${this.materials.map(i=>`
              <div class="catalog-item ${e&&e.id===i.id?"active":""}" data-id="${i.id}">
                <div class="catalog-item-top">
                  <span class="cefr-tag ${i.cefr_level||"A1"}">${i.cefr_level||"A1"}</span>
                  <span class="catalog-cat">${(i.category||"").toUpperCase()}</span>
                </div>
                <div class="catalog-title">${i.title}</div>
                <div class="catalog-meta">
                  <span>⏱️ ~${i.estimated_reading_time||2} dk</span>
                  <span>📝 ${i.word_count||120} kelime</span>
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

`).map(i=>`<p class="article-p">${i}</p>`).join("")}
              </div>

              <!-- Key Vocabulary Pills -->
              ${a.length>0?`
                <div class="key-vocab-section">
                  <h4>Metindeki Temel Kelimeler (Dinlemek için tıklayın):</h4>
                  <div class="vocab-pills-list">
                    ${a.map(i=>`<span class="vocab-pill" data-word="${i}">🔊 ${i}</span>`).join("")}
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
                ${t.map((i,n)=>`
                  <div class="comp-question-item" data-q-idx="${n}">
                    <div class="comp-question-title">${n+1}. ${i.question}</div>
                    <div class="comp-options-list">
                      ${i.options.map((s,r)=>`
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
    `,this.bindEvents()}bindEvents(){var e,t,a;this.container.querySelectorAll(".catalog-item").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.id;n&&this.loadMaterial(n)})}),(e=document.getElementById("read-aloud-btn"))==null||e.addEventListener("click",()=>{this.selectedMaterial&&S.speak(this.selectedMaterial.content,{rate:.9})}),(t=document.getElementById("stop-read-btn"))==null||t.addEventListener("click",()=>{S.stop()}),document.querySelectorAll(".vocab-pill").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.word;n&&S.speak(n)})}),document.querySelectorAll(".comp-opt-btn").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.idx,s=i.dataset.val;this.userAnswers[n]=s,i.parentElement.querySelectorAll(".comp-opt-btn").forEach(r=>r.classList.remove("selected")),i.classList.add("selected")})}),(a=document.getElementById("submit-reading-btn"))==null||a.addEventListener("click",()=>{this.submitComprehension()})}async submitComprehension(){const e=Math.round((Date.now()-this.readingStartTime)/1e3),t=document.getElementById("submit-reading-btn");t&&(t.disabled=!0);try{const a=await b.submitReading(this.selectedMaterial.id,this.userAnswers,e),i=document.getElementById("comp-results-box");i&&(i.innerHTML=`
          <div class="results-header">
            <h4>Anlama Skoru: %${a.score}</h4>
            <span>${a.correctCount} / ${a.totalCount} Doğru • Okuma Hızı: ${a.wordsPerMinute} kelime/dk</span>
          </div>
          <div class="details-list">
            ${a.details.map(n=>`
              <div class="result-detail-item ${n.isCorrect?"correct":"incorrect"}">
                <span class="detail-icon">${n.isCorrect?"✅":"❌"}</span>
                <div>
                  <div class="detail-q">${n.question}</div>
                  <div class="detail-ans">Cevabınız: <strong>${n.userAnswer||"(Boş)"}</strong> | Doğru: <strong>${n.correctAnswer}</strong></div>
                </div>
              </div>
            `).join("")}
          </div>
        `,i.style.display="block"),h.showToast(`Okuma tamamlandı! Skorunuz: %${a.score}`,a.score>=70?"success":"info")}catch(a){h.showToast("Sonuçlar kaydedilemedi: "+a.message,"error"),t&&(t.disabled=!1)}}}class ne{constructor(){this.container=null,this.materials=[],this.selectedMaterial=null,this.speed=1,this.accent="en-US",this.showTranscript=!1,this.listenCount=0,this.userAnswers={}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Dinleme parçaları yükleniyor...</p>
      </div>
    `;try{const t=await b.getListeningMaterials();this.materials=Array.isArray(t)?t:t.materials||[],this.materials.length>0&&!this.selectedMaterial?await this.loadMaterial(this.materials[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Dinleme parçaları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadMaterial(e){try{const t=await b.getListeningMaterial(e);this.selectedMaterial=t.material,this.speed=this.selectedMaterial.speech_rate==="slow"?.8:1,this.accent=this.selectedMaterial.accent==="british"?"en-GB":"en-US",this.showTranscript=!1,this.listenCount=0,this.userAnswers={},this.renderContent()}catch(t){h.showToast("Parça yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedMaterial,t=e&&e.comprehension_questions?typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions:[];this.container.innerHTML=`
      <div class="listening-layout">
        <!-- Sidebar -->
        <aside class="listening-sidebar card">
          <div class="listening-sidebar-header">
            <h3>Dinleme Parçaları</h3>
            <span class="catalog-count">${this.materials.length} Parça</span>
          </div>

          <div class="tracks-list">
            ${this.materials.map(a=>`
              <div class="track-item ${e&&e.id===a.id?"active":""}" data-id="${a.id}">
                <div class="track-top">
                  <span class="cefr-tag ${a.cefr_level||"A1"}">${a.cefr_level||"A1"}</span>
                  <span class="track-accent">${a.accent==="british"?"🇬🇧 İngiliz":"🇺🇸 Amerikan"}</span>
                </div>
                <div class="track-title">${a.title}</div>
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
                ${t.map((a,i)=>`
                  <div class="l-question-item">
                    <div class="l-question-title">${i+1}. ${a.question}</div>
                    <div class="l-options-grid">
                      ${a.options.map((n,s)=>`
                        <button class="l-opt-btn ${this.userAnswers[i]===n?"selected":""}" data-q-idx="${i}" data-val="${n}">
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
    `,this.bindEvents()}bindEvents(){var e,t,a,i;this.container.querySelectorAll(".track-item").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.id;s&&this.loadMaterial(s)})}),(e=document.getElementById("play-audio-btn"))==null||e.addEventListener("click",()=>{if(this.selectedMaterial){const n=this.selectedMaterial.audio_text||this.selectedMaterial.transcript||"";this.listenCount++;const s=document.getElementById("listen-count-val");s&&(s.textContent=this.listenCount),S.speak(n,{rate:this.speed,lang:this.accent})}}),(t=document.getElementById("pause-audio-btn"))==null||t.addEventListener("click",()=>{S.stop()}),document.querySelectorAll(".speed-btn").forEach(n=>{n.addEventListener("click",()=>{this.speed=parseFloat(n.dataset.speed),document.querySelectorAll(".speed-btn").forEach(s=>s.classList.remove("active")),n.classList.add("active")})}),document.querySelectorAll(".accent-btn").forEach(n=>{n.addEventListener("click",()=>{this.accent=n.dataset.accent,document.querySelectorAll(".accent-btn").forEach(s=>s.classList.remove("active")),n.classList.add("active")})}),(a=document.getElementById("toggle-transcript-btn"))==null||a.addEventListener("click",()=>{this.showTranscript=!this.showTranscript;const n=document.getElementById("transcript-content"),s=document.getElementById("toggle-transcript-btn");n&&(n.style.display=this.showTranscript?"block":"none"),s&&(s.textContent=this.showTranscript?"Transkripti Gizle":"👁️ İngilizce Transkripti Göster")}),document.querySelectorAll(".l-opt-btn").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.qIdx,r=n.dataset.val;this.userAnswers[s]=r,n.parentElement.querySelectorAll(".l-opt-btn").forEach(o=>o.classList.remove("selected")),n.classList.add("selected")})}),(i=document.getElementById("submit-listening-btn"))==null||i.addEventListener("click",()=>{this.submitListeningAnswers()})}async submitListeningAnswers(){const e=document.getElementById("submit-listening-btn");e&&(e.disabled=!0);try{const t=await b.submitListening(this.selectedMaterial.id,this.userAnswers,this.listenCount),a=document.getElementById("l-results");a&&(a.innerHTML=`
          <div class="results-header">
            <h4>Dinleme Skoru: %${t.score}</h4>
            <span>${t.correctCount} / ${t.totalCount} Doğru • ${t.listenCount} Dinleme</span>
          </div>
          <div class="details-list">
            ${t.details.map(i=>`
              <div class="result-detail-item ${i.isCorrect?"correct":"incorrect"}">
                <span class="detail-icon">${i.isCorrect?"✅":"❌"}</span>
                <div>
                  <div class="detail-q">${i.question}</div>
                  <div class="detail-ans">Cevabınız: <strong>${i.userAnswer||"(Boş)"}</strong> | Doğru: <strong>${i.correctAnswer}</strong></div>
                </div>
              </div>
            `).join("")}
          </div>
        `,a.style.display="block"),h.showToast(`Dinleme testi bitti! Skorunuz: %${t.score}`,t.score>=70?"success":"info")}catch(t){h.showToast("Cevaplar kaydedilemedi: "+t.message,"error"),e&&(e.disabled=!1)}}}class se{constructor(){this.container=null,this.prompts=[],this.selectedPrompt=null,this.writingStartTime=Date.now(),this.evaluation=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Yazma stüdyosu konuları yükleniyor...</p>
      </div>
    `;try{const t=await b.getWritingPrompts();this.prompts=Array.isArray(t)?t:t.prompts||[],this.prompts.length>0&&!this.selectedPrompt&&(this.selectedPrompt=this.prompts[0]),this.renderContent()}catch(t){this.container.innerHTML=`
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
            ${this.prompts.map(t=>{const a=t.prompt.length>70?t.prompt.slice(0,67)+"...":t.prompt;return`
                <div class="prompt-item ${e&&e.id===t.id?"active":""}" data-id="${t.id}">
                  <div class="prompt-top">
                    <span class="cefr-tag ${t.cefr_level||"A1"}">${t.cefr_level||"A1"}</span>
                    <span class="prompt-type">${(t.type||"").toUpperCase()}</span>
                  </div>
                  <div class="prompt-short">${a}</div>
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
    `,this.bindEvents()}bindEvents(){var n;this.container.querySelectorAll(".prompt-item").forEach(s=>{s.addEventListener("click",()=>{const r=parseInt(s.dataset.id,10);this.selectedPrompt=this.prompts.find(o=>o.id===r),this.writingStartTime=Date.now(),this.renderContent()})});const e=document.getElementById("writing-input"),t=document.getElementById("word-count-val"),a=document.getElementById("sentence-count-val"),i=document.getElementById("avg-len-val");e==null||e.addEventListener("input",()=>{const s=e.value.trim(),r=s?s.split(/\s+/).filter(Boolean).length:0,o=(s.match(/[^.!?]+[.!?]+/g)||[]).length||(r>0?1:0),l=o>0?(r/o).toFixed(1):0;t&&(t.textContent=r),a&&(a.textContent=o),i&&(i.textContent=`${l} kelime`)}),(n=document.getElementById("submit-writing-btn"))==null||n.addEventListener("click",()=>{this.submitWritingText()})}async submitWritingText(){var a;const e=(a=document.getElementById("writing-input"))==null?void 0:a.value.trim();if(!e||e.split(/\s+/).length<5){h.showToast("Lütfen değerlendirme için en az 5 kelimelik bir metin yazın.","error");return}const t=document.getElementById("submit-writing-btn");t&&(t.disabled=!0,t.textContent="İnceleniyor...");try{const i=await b.submitWriting(this.selectedPrompt.id,e),n=document.getElementById("writing-eval-card");n&&(n.innerHTML=`
          <div class="eval-header">
            <div>
              <h3>Yazma Analiz Sonucu</h3>
              <span class="cefr-tag ${i.cefrLevel}">${i.cefrLevel} Seviyesi</span>
            </div>
            <div class="eval-overall-score">${i.overallScore} <span>/ 100</span></div>
          </div>

          <div class="eval-metrics-grid">
            <div class="eval-metric-box">
              <span class="metric-title">Dilbilgisi Doğruluğu</span>
              <strong class="metric-val">%${i.grammarScore}</strong>
            </div>
            <div class="eval-metric-box">
              <span class="metric-title">Kelime Çeşitliliği</span>
              <strong class="metric-val">%${i.vocabularyScore}</strong>
            </div>
            <div class="eval-metric-box">
              <span class="metric-title">Cümle Yapısı</span>
              <strong class="metric-val">%${i.structureScore}</strong>
            </div>
          </div>

          <div class="eval-feedback-section">
            <h4>Öğretmen Tavsiyeleri & İpuçları:</h4>
            <ul>
              ${i.feedback.map(s=>`<li>${s}</li>`).join("")}
            </ul>
          </div>
        `,n.style.display="block",n.scrollIntoView({behavior:"smooth"})),h.showToast("Yazınız başarıyla değerlendirildi! (+30 XP)","success")}catch(i){h.showToast("Değerlendirme yapılamadı: "+i.message,"error")}finally{t&&(t.disabled=!1,t.textContent="Yazımı Analiz Et ve Puanla →")}}}class re{constructor(){this.container=null,this.scenarios=[],this.selectedScenario=null,this.messages=[],this.isRecording=!1,this.completedObjectives=new Set}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Konuşma senaryoları yükleniyor...</p>
      </div>
    `;try{const t=await b.getSpeakingScenarios();this.scenarios=Array.isArray(t)?t:t.scenarios||[],this.scenarios.length>0&&!this.selectedScenario?await this.loadScenario(this.scenarios[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Konuşma senaryoları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadScenario(e){try{const t=await b.getSpeakingScenario(e);this.selectedScenario=t.scenario,this.completedObjectives=new Set,this.messages=[{sender:"ai",name:this.selectedScenario.ai_role||"Diyalog Partneri",text:this.selectedScenario.starter_message||"Hello! How can I help you today?"}],this.renderContent(),this.selectedScenario.starter_message&&S.speak(this.selectedScenario.starter_message)}catch(t){h.showToast("Senaryo yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedScenario,t=e&&e.key_phrases?typeof e.key_phrases=="string"?JSON.parse(e.key_phrases):e.key_phrases:[],a=e&&e.objectives?typeof e.objectives=="string"?JSON.parse(e.objectives):e.objectives:[];this.container.innerHTML=`
      <div class="speaking-layout">
        <!-- Sidebar: Scenario List -->
        <aside class="speaking-sidebar card">
          <div class="speaking-sidebar-header">
            <h3>Konuşma Senaryoları</h3>
            <span class="catalog-count">${this.scenarios.length} Senaryo</span>
          </div>

          <div class="scenarios-list">
            ${this.scenarios.map(i=>`
              <div class="scenario-item ${e&&e.id===i.id?"active":""}" data-id="${i.id}">
                <div class="scenario-top">
                  <span class="cefr-tag ${i.cefr_level||"A1"}">${i.cefr_level||"A1"}</span>
                  <span class="scenario-cat">${(i.category||"").toUpperCase()}</span>
                </div>
                <div class="scenario-title">${i.title}</div>
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
              ${a.length>0?`
                <div class="objectives-strip">
                  <span class="objectives-label">Konuşma Hedefleri:</span>
                  <div class="objectives-tags">
                    ${a.map((i,n)=>`
                      <span class="obj-tag ${this.completedObjectives.has(n)?"completed":""}">
                        ${this.completedObjectives.has(n)?"✓ ":""}${i}
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
                    ${t.map(i=>`<span class="phrase-tag" data-phrase="${i}">🔊 ${i}</span>`).join("")}
                  </div>
                </div>
              `:""}
            </div>

            <!-- Dialogue Chat History Box -->
            <div class="card dialogue-chat-card">
              <div class="dialogue-messages-wrap" id="dialogue-messages">
                ${this.messages.map(i=>`
                  <div class="chat-bubble-row ${i.sender==="user"?"user-row":"ai-row"}">
                    <div class="chat-bubble">
                      <div class="bubble-header">
                        <span class="bubble-name">${i.name}</span>
                        <button class="tts-play-btn bubble-tts" data-text="${i.text}">🔊</button>
                      </div>
                      <div class="bubble-body">${i.text}</div>
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
    `,this.bindEvents()}bindEvents(){var t,a;this.container.querySelectorAll(".scenario-item").forEach(i=>{i.addEventListener("click",()=>{const n=parseInt(i.dataset.id,10);this.loadScenario(n)})}),document.querySelectorAll(".phrase-tag").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.phrase;n&&S.speak(n)})}),document.querySelectorAll(".bubble-tts").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.text;n&&S.speak(n)})});const e=document.getElementById("btn-record-voice");e==null||e.addEventListener("click",()=>{this.toggleSpeechRecognition()}),(t=document.getElementById("btn-send-message"))==null||t.addEventListener("click",()=>{this.sendUserMessage()}),(a=document.getElementById("dialogue-text-input"))==null||a.addEventListener("keydown",i=>{i.key==="Enter"&&this.sendUserMessage()})}toggleSpeechRecognition(){if(!S.hasRecognition){h.showToast("Tarayıcınız ses tanımayı desteklemiyor. Lütfen yazarak cevap verin.","error");return}this.isRecording?(S.stopListening(),this.isRecording=!1,this.renderContent()):(this.isRecording=!0,this.renderContent(),S.listen(e=>{this.isRecording=!1;const t=document.getElementById("dialogue-text-input");t&&(t.value=e),this.sendUserMessage(e)},()=>{this.isRecording=!1,this.renderContent()}))}sendUserMessage(e){const t=document.getElementById("dialogue-text-input"),a=e||(t?t.value.trim():"");if(!a)return;t&&(t.value=""),this.messages.push({sender:"user",name:"Siz",text:a}),this.renderContent();const i=document.getElementById("dialogue-messages");i&&(i.scrollTop=i.scrollHeight),setTimeout(()=>{var r;const n=this.generateAiResponse(a);this.messages.push({sender:"ai",name:((r=this.selectedScenario)==null?void 0:r.ai_role)||"Partner",text:n}),this.renderContent();const s=document.getElementById("dialogue-messages");s&&(s.scrollTop=s.scrollHeight),S.speak(n)},800)}generateAiResponse(e){const t=e.toLowerCase();return t.includes("coffee")||t.includes("tea")||t.includes("water")||t.includes("like")?"Certainly! That sounds great. Would you like anything else to eat with that?":t.includes("how much")||t.includes("bill")||t.includes("check")?"That will be 4 dollars, please. Are you paying by card or cash?":t.includes("hello")||t.includes("hi")?"Hello there! How can I assist you today?":t.includes("thank")?"You're very welcome! Have a wonderful day!":"That's clear. Thank you for telling me. Let's continue: what would you like to do next?"}}class oe{constructor(){this.container=null,this.activeTab="minimal_pairs",this.isRecording=!1,this.currentScore=null}render(e){this.container=e,this.renderContent()}renderContent(){this.container.innerHTML=`
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
    `}bindEvents(){document.querySelectorAll(".pron-tabs .btn").forEach(e=>{e.addEventListener("click",()=>{this.activeTab=e.dataset.tab,this.renderContent()})}),document.querySelectorAll(".pron-tts").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.text;t&&S.speak(t)})}),document.querySelectorAll(".test-mic-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target;if(!S.hasRecognition){h.showToast("Mikrofon ses tanıma bu tarayıcıda desteklenmiyor.","error");return}e.textContent="🎙️ Dinleniyor...",e.classList.add("pulse"),S.listen(a=>{e.classList.remove("pulse");const i=a.trim().toLowerCase(),n=t.trim().toLowerCase();i.includes(n)||n.includes(i)?(e.textContent=`✅ Harika! "${a}"`,h.showToast(`Mükemmel telaffuz! Algılanan: "${a}"`,"success")):(e.textContent=`Tekrar dene (Duyulan: "${a}")`,h.showToast(`Duyulan: "${a}". Hedef kelimeye tekrar çalışın.`,"info"))},()=>{e.classList.remove("pulse"),e.textContent=`🎙️ "${t}" Telaffuz Et`})})})}}class le{constructor(){this.container=null,this.errors=[],this.filterSkill="all",this.showResolved=!1,this.skillNamesTr={all:"Tümü",grammar:"Dilbilgisi",vocabulary:"Kelime",writing:"Yazma",speaking:"Konuşma",sentence_formation:"Cümle Kurma"}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Kişisel hata defteriniz yükleniyor...</p>
      </div>
    `;try{const t=await b.getErrors({resolved:this.showResolved?1:0});this.errors=t.errors||[],this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Hata defteri yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){const e=["all","grammar","vocabulary","writing","speaking","sentence_formation"],t=this.errors.filter(a=>this.filterSkill==="all"?!0:a.skill===this.filterSkill);this.container.innerHTML=`
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
            ${e.map(a=>`
              <button class="skill-tab ${this.filterSkill===a?"active":""}" data-skill="${a}">
                ${this.skillNamesTr[a]||a}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Errors List -->
        <div class="errors-grid">
          ${t.length>0?t.map(a=>`
            <div class="card error-item-card ${a.resolved?"is-resolved":""}">
              <div class="error-item-top">
                <span class="error-skill-badge">${this.skillNamesTr[a.skill]||(a.skill||"").toUpperCase()}</span>
                <span class="error-freq-badge">Tekrar Sayısı: <strong>${a.occurrence_count||1}x</strong></span>
              </div>

              <div class="error-contrast-box">
                <div class="error-produced">
                  <span class="contrast-label">Sizin İfadeniz:</span>
                  <div class="produced-text">❌ "${a.error_text||"Hata"}"</div>
                </div>
                <div class="error-target">
                  <span class="contrast-label">Doğru & Doğal Biçimi:</span>
                  <div class="target-text">✅ "${a.correction||"Hedef"}"</div>
                </div>
              </div>

              ${a.explanation?`
                <div class="error-explanation">
                  <strong>💡 Neden Yanlış? (Kural & Açıklama):</strong> ${a.explanation}
                </div>
              `:""}

              <div class="error-item-actions">
                ${a.resolved?`
                  <span class="resolved-label">🎉 Öğrenildi & Çözüldü</span>
                `:`
                  <button class="btn btn-success btn-sm resolve-err-btn" data-id="${a.id}">
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
    `,this.bindEvents()}bindEvents(){var e;this.container.querySelectorAll(".skill-tab").forEach(t=>{t.addEventListener("click",()=>{this.filterSkill=t.dataset.skill,this.renderContent()})}),(e=document.getElementById("toggle-resolved-btn"))==null||e.addEventListener("click",async()=>{this.showResolved=!this.showResolved,await this.render(this.container)}),this.container.querySelectorAll(".resolve-err-btn").forEach(t=>{t.addEventListener("click",async()=>{const a=t.dataset.id;try{await b.resolveError(a),h.showToast("Hata başarıyla çözüldü olarak işaretlendi! (+10 XP)","success"),await this.render(this.container)}catch(i){h.showToast("Hata güncellenemedi: "+i.message,"error")}})})}}class ce{constructor(){this.container=null,this.dashboardData=null,this.activeFilter="all"}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Gelişim, rozetler ve istatistik verileriniz hesaplanıyor...</p>
      </div>
    `;try{this.dashboardData=await b.getDashboard(),await z.checkAll(this.dashboardData),this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>İstatistikler yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){const{stats:e,skills:t,weekStudy:a,latestAssessment:i}=this.dashboardData,n=[{key:"grammar",name:"Dilbilgisi (Grammar)"},{key:"vocabulary",name:"Kelime Haznesi (Vocabulary)"},{key:"reading",name:"Okuma Anlama (Reading)"},{key:"listening",name:"Dinleme Algılama (Listening)"},{key:"writing",name:"Yazma Becerisi (Writing)"},{key:"speaking",name:"Konuşma Akıcılığı (Speaking)"},{key:"pronunciation",name:"Telaffuz & Fonetik (Pronunciation)"},{key:"sentence_formation",name:"Cümle Kurma Mantığı (Syntax)"},{key:"comprehension",name:"Kavrama Hızı (Comprehension)"},{key:"communication",name:"Doğal İletişim (Communication)"}],s=(a||[]).reduce((m,k)=>m+(k.total_minutes||0),0),r=(i==null?void 0:i.overall_cefr)||(i==null?void 0:i.overallCEFR)||"A1",o=z.getUnlockedAchievements(),l=new Map(o.map(m=>[m.id,m])),u=P.length,d=o.length,y=Math.round(d/u*100),v=P.filter(m=>{const k=l.has(m.id);return this.activeFilter==="unlocked"?k:this.activeFilter==="locked"?!k:this.activeFilter==="vocab"?m.category==="vocab":this.activeFilter==="grammar"?m.category==="grammar":this.activeFilter==="skills"?m.category==="skills":this.activeFilter==="streak"?m.category==="streak":!0});this.container.innerHTML=`
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
            <div class="p-stat-val">${d} / ${u} 🏆</div>
            <span class="p-stat-sub">Başarım oranı: %${y}</span>
          </div>
        </div>

        <div class="grid-2 progress-charts-grid">
          <!-- 10 Skills Detailed Breakdown -->
          <div class="card skills-audit-card">
            <h2 class="card-title">🎯 10 Becerideki Seviye Dağılımı</h2>
            <div class="card-subtitle">Her beceri alanı bağımsız olarak puanlanır ve takip edilir</div>

            <div class="domain-bars-list">
              ${n.map(m=>{const k=t[m.key]||{level:"A1",score:0},x=k.level||"A1",_=k.score||0;return`
                  <div class="domain-row">
                    <div class="domain-label">
                      <span>${m.name}</span>
                      <span class="cefr-tag ${x}">${x}</span>
                    </div>
                    <div class="domain-bar-track">
                      <div class="domain-bar-fill" style="width: ${Math.max(_,5)}%;"></div>
                    </div>
                    <span class="domain-score">%${_}</span>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- Weekly Consistency Distribution -->
          <div class="card weekly-activity-card">
            <h2 class="card-title">📅 Son 7 Günlük Çalışma Düzeni</h2>
            <div class="card-subtitle">Günlük pratik süresi dağılımı (dakika cinsinden)</div>

            <div class="week-chart-bars">
              ${a&&a.length>0?a.map(m=>{const k=Math.min(100,Math.max(10,Math.round(m.total_minutes/60*100)));return`
                  <div class="day-bar-col">
                    <div class="day-bar-track">
                      <div class="day-bar-fill" style="height: ${m.total_minutes>0?k:6}%;"></div>
                    </div>
                    <span class="day-label">${m.date.slice(5)}</span>
                    <span class="day-mins">${m.total_minutes}m</span>
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
                <div class="achievements-meter-label">${d} / ${u} Açıldı (%${y})</div>
              </div>
              <div class="achievements-meter-bar">
                <div class="achievements-meter-fill" style="width: ${y}%;"></div>
              </div>
            </div>
          </div>

          <!-- Filter Tabs -->
          <div class="achievements-filter-tabs">
            <button class="ach-tab ${this.activeFilter==="all"?"active":""}" data-filter="all">Tümü (${u})</button>
            <button class="ach-tab ${this.activeFilter==="unlocked"?"active":""}" data-filter="unlocked">Kazanılanlar (${d})</button>
            <button class="ach-tab ${this.activeFilter==="locked"?"active":""}" data-filter="locked">Kilitliler (${u-d})</button>
            <button class="ach-tab ${this.activeFilter==="vocab"?"active":""}" data-filter="vocab">Kelime & SRS</button>
            <button class="ach-tab ${this.activeFilter==="grammar"?"active":""}" data-filter="grammar">Gramer</button>
            <button class="ach-tab ${this.activeFilter==="skills"?"active":""}" data-filter="skills">Dört Beceri</button>
            <button class="ach-tab ${this.activeFilter==="streak"?"active":""}" data-filter="streak">Seri & Disiplin</button>
          </div>

          <!-- Badges Grid -->
          <div class="achievements-grid">
            ${v.map(m=>{const k=l.get(m.id),x=!!k,_=m.progress?m.progress(this.dashboardData):null,A=k?new Date(k.unlocked_at).toLocaleDateString("tr-TR",{day:"numeric",month:"short"}):null;return`
                <div class="achievement-card ${x?"unlocked":"locked"}">
                  <div class="ach-icon-box">
                    ${x?m.icon:"🔒"}
                  </div>
                  <div class="ach-details">
                    <div class="ach-title-row">
                      <span class="ach-title">${m.title}</span>
                      <span class="ach-xp-tag">+${m.xp} XP</span>
                    </div>
                    <div class="ach-desc">${m.description}</div>

                    ${x?`
                      <div class="ach-unlocked-date">
                        <span>✓ Açıldı (${A})</span>
                      </div>
                    `:_?`
                      <div class="ach-progress-row">
                        <div class="ach-mini-track">
                          <div class="ach-mini-fill" style="width: ${Math.min(100,Math.round(_.current/_.max*100))}%;"></div>
                        </div>
                        <span class="ach-progress-txt">${_.current} / ${_.max}</span>
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
    `,this.bindEvents()}bindEvents(){this.container.querySelectorAll(".ach-tab").forEach(e=>{e.addEventListener("click",()=>{this.activeFilter=e.dataset.filter,this.renderContent()})})}}class de{constructor(){this.container=null,this.categories=[],this.exercises=[],this.filteredExercises=[],this.activeCategory="all",this.activeLevel="all",this.currentIndex=0,this.trayTokens=[],this.poolTokens=[],this.isSubmitted=!1,this.isCorrect=!1,this.resultData=null,this.firstAttempt=!0,this.audioCtx=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Cümle Kurma & Sözdizimi Laboratuvarı yükleniyor...</p>
      </div>
    `;try{const t=await b.getSyntaxExercises(this.activeCategory,this.activeLevel);this.categories=t.categories||[],this.exercises=t.exercises||[],this.applyFilter(),this.renderLayout()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Sözdizimi alıştırmaları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}applyFilter(){this.filteredExercises=this.exercises.filter(e=>{const t=this.activeCategory==="all"||e.category===this.activeCategory,a=this.activeLevel==="all"||e.cefr_level.toUpperCase()===this.activeLevel.toUpperCase();return t&&a}),this.currentIndex>=this.filteredExercises.length&&(this.currentIndex=0),this.loadCurrentExercise()}loadCurrentExercise(){this.isSubmitted=!1,this.isCorrect=!1,this.resultData=null,this.firstAttempt=!0,this.trayTokens=[];const e=this.filteredExercises[this.currentIndex];if(e){const t=[...e.tokens];for(let a=t.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[t[a],t[i]]=[t[i],t[a]]}t.join(" ")===e.tokens.join(" ")&&t.length>1&&([t[0],t[1]]=[t[1],t[0]]),this.poolTokens=t.map((a,i)=>({id:`token-${i}-${Date.now()}`,text:a}))}else this.poolTokens=[]}renderLayout(){const e=this.filteredExercises[this.currentIndex],t=this.filteredExercises.length;b.getCurrentUser();const i=(h.get("skills")||{}).sentence_formation||{level:"A1",score:0};this.container.innerHTML=`
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
              <span class="cefr-tag ${i.level||"A1"}">${i.level||"A1"}</span>
              <span class="syntax-score-text">%${i.score||0} Ustalık</span>
            </div>
            <div class="syntax-progress-bar">
              <div class="syntax-progress-fill" style="width: ${Math.max(i.score||10,8)}%;"></div>
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
            `:this.trayTokens.map((a,i)=>`
              <button class="word-chip placed animate-pop" data-token-id="${a.id}" data-tray-index="${i}" title="Kaldırmak için tıklayın">
                <span class="chip-text">${a.text}</span>
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
            `:this.poolTokens.map(a=>`
              <button class="word-chip available animate-scale" data-token-id="${a.id}">
                ${a.text}
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
              ${(e.grammar_breakdown||[]).map(a=>`
                <div class="breakdown-card">
                  <div class="breakdown-token">${a.token}</div>
                  <div class="breakdown-tag tag-${(a.tag||"S").toLowerCase()}">${a.tag||"S"}</div>
                  <div class="breakdown-role">${a.role}</div>
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
              <span class="comp-val">${this.trayTokens.map(i=>i.text).join(" ")||"(Boş)"}</span>
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
    `}bindEvents(){var v;this.container.querySelectorAll("#level-tabs .pill-tab").forEach(m=>{m.addEventListener("click",()=>{this.activeLevel=m.dataset.level,this.currentIndex=0,this.applyFilter(),this.renderLayout()})});const t=this.container.querySelector("#category-select");t&&t.addEventListener("change",m=>{this.activeCategory=m.target.value,this.currentIndex=0,this.applyFilter(),this.renderLayout()});const a=this.container.querySelector("#reset-filters-btn");a&&a.addEventListener("click",()=>{this.activeLevel="all",this.activeCategory="all",this.currentIndex=0,this.applyFilter(),this.renderLayout()});const i=this.container.querySelector(".syntax-rule-banner");i&&((v=i.querySelector(".rule-banner-header"))==null||v.addEventListener("click",()=>{i.classList.toggle("expanded")}));const n=this.container.querySelector("#tokens-pool");n&&n.addEventListener("click",m=>{const k=m.target.closest(".word-chip.available");if(!k)return;const x=k.dataset.tokenId,_=this.poolTokens.findIndex(A=>A.id===x);if(_!==-1){const[A]=this.poolTokens.splice(_,1);this.trayTokens.push(A),this.playClickSound(),this.refreshTrayAndPool()}});const s=this.container.querySelector("#sentence-tray");s&&s.addEventListener("click",m=>{const k=m.target.closest(".word-chip.placed");if(!k)return;const x=k.dataset.tokenId,_=this.trayTokens.findIndex(A=>A.id===x);if(_!==-1){const[A]=this.trayTokens.splice(_,1);this.poolTokens.push(A),this.playClickSound(),this.refreshTrayAndPool()}});const r=this.container.querySelector("#clear-tray-btn");r&&r.addEventListener("click",()=>{this.trayTokens.length!==0&&(this.poolTokens=[...this.poolTokens,...this.trayTokens],this.trayTokens=[],this.refreshTrayAndPool())});const o=this.container.querySelector("#undo-token-btn");o&&o.addEventListener("click",()=>{if(this.trayTokens.length===0)return;const m=this.trayTokens.pop();this.poolTokens.push(m),this.refreshTrayAndPool()});const l=this.container.querySelector("#speak-prompt-btn");l&&l.addEventListener("click",()=>{this.filteredExercises[this.currentIndex]&&h.toast("İngilizce karşılığını yukarıdaki kelimelerle oluşturun!","info")});const u=this.container.querySelector("#hint-sentence-btn");u&&u.addEventListener("click",()=>{const m=this.filteredExercises[this.currentIndex];if(!m)return;const k=this.trayTokens.length;if(k<m.tokens.length){const x=m.tokens[k],_=this.poolTokens.find(A=>A.text.toLowerCase()===x.toLowerCase());if(_){h.toast(`💡 İpucu: Bir sonraki kelime "${x}" olmalı.`,"info");const A=this.container.querySelector(`[data-token-id="${_.id}"]`);A&&(A.classList.add("hint-highlight"),setTimeout(()=>A.classList.remove("hint-highlight"),2e3))}else h.toast("💡 İpucu: Şu ana kadar yerleştirdiğiniz kelimelerde bir sıra hatası olabilir.","warning")}else h.toast('Tüm kelimeleri yerleştirdiniz. "Kontrol Et" butonuna tıklayın!',"info")});const d=this.container.querySelector("#check-sentence-btn");d&&d.addEventListener("click",()=>this.handleCheck());const y=this.container.querySelector("#next-sentence-skip-btn");y&&y.addEventListener("click",()=>this.goToNext()),this.bindResultBoxEvents()}bindResultBoxEvents(){const e=this.container.querySelector("#next-sentence-btn");e&&e.addEventListener("click",()=>this.goToNext());const t=this.container.querySelector("#retry-sentence-btn");t&&t.addEventListener("click",()=>{this.firstAttempt=!1,this.isSubmitted=!1,this.loadCurrentExercise(),this.renderLayout()});const a=this.container.querySelector("#reveal-solution-btn");a&&a.addEventListener("click",()=>{const s=this.filteredExercises[this.currentIndex];s&&(this.trayTokens=s.tokens.map((r,o)=>({id:`token-sol-${o}`,text:r})),this.poolTokens=[],this.handleCheck())});const i=this.container.querySelector("#speak-correct-normal");i&&i.addEventListener("click",()=>{const s=this.filteredExercises[this.currentIndex];s&&S.speak(s.correct_sentence,{rate:1})});const n=this.container.querySelector("#speak-correct-slow");n&&n.addEventListener("click",()=>{const s=this.filteredExercises[this.currentIndex];s&&S.speak(s.correct_sentence,{rate:.75})})}refreshTrayAndPool(){this.filteredExercises[this.currentIndex];const e=this.container.querySelector("#sentence-tray"),t=this.container.querySelector("#tokens-pool"),a=this.container.querySelector("#check-sentence-btn"),i=this.container.querySelector("#undo-token-btn"),n=this.container.querySelector("#clear-tray-btn");e&&(this.trayTokens.length===0?(e.classList.add("empty"),e.innerHTML=`
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
        `).join("")),a&&(a.disabled=this.trayTokens.length===0),i&&(i.disabled=this.trayTokens.length===0),n&&(n.disabled=this.trayTokens.length===0)}async handleCheck(){const e=this.filteredExercises[this.currentIndex];if(!e)return;const t=this.trayTokens.map(a=>a.text).join(" ");try{const a=await b.submitSyntaxExercise(e.id,t,this.firstAttempt);if(this.isSubmitted=!0,this.isCorrect=a.isCorrect,this.resultData=a,a.sentenceFormationSkill){const r=h.get("skills")||{};r.sentence_formation=a.sentenceFormationSkill,h.set("skills",r)}const i=h.get("stats")||{},n=h.get("skills")||{};Q(i,n),a.isCorrect?(this.playSuccessChime(),S.speak(e.correct_sentence,{rate:1})):this.playErrorSound(),this.renderLayout();const s=this.container.querySelector("#syntax-result-box");s&&s.scrollIntoView({behavior:"smooth",block:"nearest"})}catch(a){h.toast(`Hata: ${a.message}`,"error")}}goToNext(){this.currentIndex+1<this.filteredExercises.length?this.currentIndex+=1:(this.currentIndex=0,h.toast("Tebrikler! Bu kategorideki tüm cümleleri tamamladınız!","success")),this.loadCurrentExercise(),this.renderLayout()}playClickSound(){try{if(!this.audioCtx){const a=window.AudioContext||window.webkitAudioContext;a&&(this.audioCtx=new a)}if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.createOscillator(),t=this.audioCtx.createGain();e.type="sine",e.frequency.setValueAtTime(520,this.audioCtx.currentTime),e.frequency.exponentialRampToValueAtTime(780,this.audioCtx.currentTime+.05),t.gain.setValueAtTime(.08,this.audioCtx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+.05),e.connect(t),t.connect(this.audioCtx.destination),e.start(),e.stop(this.audioCtx.currentTime+.05)}catch{}}playSuccessChime(){try{if(!this.audioCtx){const a=window.AudioContext||window.webkitAudioContext;a&&(this.audioCtx=new a)}if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.currentTime;[523.25,659.25,783.99,1046.5].forEach((a,i)=>{const n=this.audioCtx.createOscillator(),s=this.audioCtx.createGain();n.type="triangle",n.frequency.setValueAtTime(a,e+i*.08),s.gain.setValueAtTime(.12,e+i*.08),s.gain.exponentialRampToValueAtTime(.001,e+i*.08+.35),n.connect(s),s.connect(this.audioCtx.destination),n.start(e+i*.08),n.stop(e+i*.08+.35)})}catch{}}playErrorSound(){try{if(!this.audioCtx){const i=window.AudioContext||window.webkitAudioContext;i&&(this.audioCtx=new i)}if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.currentTime,t=this.audioCtx.createOscillator(),a=this.audioCtx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,e),t.frequency.linearRampToValueAtTime(140,e+.18),a.gain.setValueAtTime(.1,e),a.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(a),a.connect(this.audioCtx.destination),t.start(e),t.stop(e+.2)}catch{}}destroy(){if(this.audioCtx&&this.audioCtx.state!=="closed")try{this.audioCtx.close()}catch{}}}class ue{constructor(){this.viewport=document.getElementById("viewport"),this.pageTitle=document.getElementById("page-title"),this.authModal=null,this.currentView=null,this.views={dashboard:new Z,assessment:new ee,grammar:new te,vocabulary:new ae,syntax:new de,reading:new ie,listening:new ne,writing:new se,speaking:new re,pronunciation:new oe,errors:new le,progress:new ce},this.titles={dashboard:"Genel Bakış & Günlük Rutin",assessment:"10 Becerili Seviye Belirleme Sınavı",grammar:"Gramer Akademisi & Kurallar",vocabulary:"Akıllı Kelime Kartları (SRS)",syntax:"Cümle Kurma & Sözdizimi Laboratuvarı",reading:"Okuma & Anlama Laboratuvarı",listening:"Dinleme & Telaffuz Laboratuvarı",writing:"Yazma Stüdyosu & Anlık Değerlendirme",speaking:"Konuşma & Diyalog Simülatörü",pronunciation:"Telaffuz & Aksan Eğitimi",errors:"Kişisel Hata Defteri",progress:"Gelişim Analizi & Beceriler"}}async init(){this.bindNavigation(),this.bindSessionTimer(),this.bindSidebarToggle(),this.bindLogout(),this.registerServiceWorker(),B.initGlobalListener();const e=()=>{q().catch(()=>{})};typeof window<"u"&&("requestIdleCallback"in window?window.requestIdleCallback(e,{timeout:3e3}):setTimeout(e,1500)),h.on("view:change",t=>{this.navigateTo(t)}),await this.ensureUserSession()}async ensureUserSession(){const e=b.getCurrentUser();e?(h.setUser(e),this.updateUserDisplay(e),this.navigateTo("dashboard")):this.showLoginModal()}showLoginModal(){this.authModal=new F(e=>{h.setUser(e),this.updateUserDisplay(e),this.navigateTo("dashboard")}),this.authModal.show()}bindLogout(){var e;(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",()=>{b.logout(),h.setUser(null),this.updateUserDisplay(null),h.showToast("Oturum kapatıldı. Yeni bir kullanıcı ile giriş yapabilirsiniz.","info"),this.showLoginModal()})}updateUserDisplay(e){const t=document.getElementById("header-username"),a=document.getElementById("header-user-avatar"),i=document.getElementById("header-user-status"),n=document.getElementById("sidebar-cefr-badge");if(!e){t&&(t.textContent="Giriş Yapılmadı"),a&&(a.textContent="A1"),i&&(i.textContent="0'dan Başlangıç Yolu"),n&&(n.textContent="A1");return}if(t&&(t.textContent=e.displayName||e.username),a){const s=(e.displayName||e.username||"A1").slice(0,2).toUpperCase();a.textContent=s}i&&(i.textContent="0'dan Başlangıç (A1)"),n&&(n.textContent=e.cefr_level||"A1")}bindNavigation(){var e;document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.view;a&&this.navigateTo(a)})}),(e=document.getElementById("btn-quick-practice"))==null||e.addEventListener("click",()=>{this.navigateTo("dashboard")})}navigateTo(e){if(!b.getCurrentUser()){this.showLoginModal();return}if(!this.views[e])return;if(this.currentView&&this.views[this.currentView]&&typeof this.views[this.currentView].destroy=="function")try{this.views[this.currentView].destroy()}catch(a){console.warn(`Error destroying view ${this.currentView}:`,a)}this.currentView=e,document.querySelectorAll(".nav-item").forEach(a=>{a.classList.toggle("active",a.dataset.view===e)}),this.pageTitle&&(this.pageTitle.textContent=this.titles[e]||"LinguaForge"),this.viewport&&(this.viewport.scrollTop=0),this.views[e].render(this.viewport);const t=document.getElementById("sidebar");t&&window.innerWidth<=768&&t.classList.remove("open")}bindSessionTimer(){h.startSessionTimer();const e=document.getElementById("session-timer");h.on("timer:tick",t=>{if(e){const a=Math.floor(t/60),i=t%60;e.textContent=`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}})}bindSidebarToggle(){const e=document.getElementById("sidebar-toggle"),t=document.getElementById("sidebar");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("open")})}registerServiceWorker(){typeof window<"u"&&"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{t.state==="installed"&&navigator.serviceWorker.controller&&h.toast("Yeni bir güncelleme yüklendi! Sayfayı yenileyerek yeni özelliklere erişebilirsiniz.","info")})})}).catch(e=>{console.debug("ServiceWorker notice:",e.message)})})}}window.addEventListener("DOMContentLoaded",()=>{new ue().init()});
