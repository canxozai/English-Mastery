(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const C=[{id:1,word:"make",part_of_speech:"verb",cefr_level:"A1",frequency_rank:50,definition_en:"To create, produce, or cause something to happen.",definition_tr:"Yapmak, üretmek, oluşturmak.",phonetic:"/meɪk/",example_sentences:["I make breakfast every morning.","She made a mistake."],collocations:["make a decision","make a mistake","make friends","make sure"],category:"daily_life"},{id:2,word:"take",part_of_speech:"verb",cefr_level:"A1",frequency_rank:60,definition_en:"To get, carry, or accept something; to require time.",definition_tr:"Almak, götürmek; (zaman) almak.",phonetic:"/teɪk/",example_sentences:["Take this key with you.","It takes twenty minutes to walk to school."],collocations:["take a break","take time","take a look","take care"],category:"daily_life"},{id:3,word:"get",part_of_speech:"verb",cefr_level:"A1",frequency_rank:30,definition_en:"To receive, obtain, or become.",definition_tr:"Almak, elde etmek; olmak (durum değişikliği).",phonetic:"/ɡet/",example_sentences:["Did you get my message?","It is getting cold outside."],collocations:["get ready","get up","get better","get along with"],category:"daily_life"},{id:4,word:"give",part_of_speech:"verb",cefr_level:"A1",frequency_rank:80,definition_en:"To hand something to someone without expecting payment.",definition_tr:"Vermek, sunmak.",phonetic:"/ɡɪv/",example_sentences:["Can you give me that pen?","She gave him a warm smile."],collocations:["give advice","give up","give a hand","give back"],category:"daily_life"},{id:5,word:"know",part_of_speech:"verb",cefr_level:"A1",frequency_rank:45,definition_en:"To have information or familiarity in your mind.",definition_tr:"Bilmek, tanımak.",phonetic:"/noʊ/",example_sentences:["I know the right answer.","Do you know my brother?"],collocations:["know how to","let me know","know about","as you know"],category:"daily_life"},{id:6,word:"think",part_of_speech:"verb",cefr_level:"A1",frequency_rank:55,definition_en:"To have an opinion or consider something in your mind.",definition_tr:"Düşünmek, sanmak.",phonetic:"/θɪŋk/",example_sentences:["What do you think about this idea?","I think it will rain today."],collocations:["think about","think twice","I think so","think ahead"],category:"daily_life"},{id:7,word:"help",part_of_speech:"verb/noun",cefr_level:"A1",frequency_rank:120,definition_en:"To make it easier for someone to do something.",definition_tr:"Yardım etmek; yardım.",phonetic:"/help/",example_sentences:["Could you help me with my luggage?","Thank you for your help."],collocations:["ask for help","help each other","can't help it","need help"],category:"communication"},{id:8,word:"family",part_of_speech:"noun",cefr_level:"A1",frequency_rank:140,definition_en:"A group of people related by blood or marriage.",definition_tr:"Aile.",phonetic:"/ˈfæməli/",example_sentences:["I love spending time with my family.","She comes from a large family."],collocations:["family member","close family","family tree","start a family"],category:"daily_life"},{id:9,word:"friend",part_of_speech:"noun",cefr_level:"A1",frequency_rank:150,definition_en:"A person you know well and like, but who is not a relative.",definition_tr:"Arkadaş, dost.",phonetic:"/frend/",example_sentences:["He is my best friend.","We have been friends since childhood."],collocations:["best friend","close friend","make friends","old friend"],category:"daily_life"},{id:10,word:"routine",part_of_speech:"noun",cefr_level:"A1",frequency_rank:300,definition_en:"A regular way of doing things in a fixed order.",definition_tr:"Rutin, alışılmış düzen.",phonetic:"/ruːˈtiːn/",example_sentences:["My morning routine starts at 7 AM.","Exercise is part of my daily routine."],collocations:["daily routine","morning routine","break the routine","routine check"],category:"daily_life"},{id:11,word:"important",part_of_speech:"adjective",cefr_level:"A1",frequency_rank:95,definition_en:"Having great value, significance, or consequence.",definition_tr:"Önemli.",phonetic:"/ɪmˈpɔːrtnt/",example_sentences:["Sleep is very important for health.","We have an important meeting tomorrow."],collocations:["most important","play an important role","important factor"],category:"academic"},{id:12,word:"different",part_of_speech:"adjective",cefr_level:"A1",frequency_rank:105,definition_en:"Not the same as another or each other.",definition_tr:"Farklı, değişik.",phonetic:"/ˈdɪfrənt/",example_sentences:["They have two very different personalities.","Try looking at it from a different perspective."],collocations:["different from","different ways","completely different","different kinds"],category:"general"},{id:13,word:"water",part_of_speech:"noun",cefr_level:"A1",frequency_rank:75,definition_en:"A clear, colorless liquid essential for all plant and animal life.",definition_tr:"Su.",phonetic:"/ˈwɔːtər/",example_sentences:["Drink plenty of water every day.","Could I have a glass of water, please?"],collocations:["drink water","tap water","mineral water","hot water"],category:"daily_life"},{id:14,word:"food",part_of_speech:"noun",cefr_level:"A1",frequency_rank:85,definition_en:"Any nutritious substance consumed to maintain life.",definition_tr:"Yemek, yiyecek, gıda.",phonetic:"/fuːd/",example_sentences:["Turkish food is rich and delicious.","We need to buy some fresh food."],collocations:["delicious food","fast food","healthy food","food market"],category:"food"},{id:15,word:"time",part_of_speech:"noun",cefr_level:"A1",frequency_rank:15,definition_en:"A period, moment, or continuous measure of existence.",definition_tr:"Zaman, vakit; saat; kez/kere.",phonetic:"/taɪm/",example_sentences:["What time does the lesson start?","I don't have enough time today."],collocations:["on time","spend time","save time","next time","have a good time"],category:"daily_life"},{id:16,word:"morning",part_of_speech:"noun",cefr_level:"A1",frequency_rank:110,definition_en:"The early part of the day from sunrise until noon.",definition_tr:"Sabah.",phonetic:"/ˈmɔːrnɪŋ/",example_sentences:["Good morning! How are you today?","I study best in the early morning."],collocations:["in the morning","early morning","morning walk","this morning"],category:"daily_life"},{id:17,word:"evening",part_of_speech:"noun",cefr_level:"A1",frequency_rank:160,definition_en:"The period of time at the end of the day, before night.",definition_tr:"Akşam.",phonetic:"/ˈiːvnɪŋ/",example_sentences:["We usually eat dinner in the evening.","Have a wonderful evening!"],collocations:["in the evening","yesterday evening","tomorrow evening","evening meal"],category:"daily_life"},{id:18,word:"always",part_of_speech:"adverb",cefr_level:"A1",frequency_rank:125,definition_en:"At all times; on every occasion.",definition_tr:"Her zaman, daima.",phonetic:"/ˈɔːlweɪz/",example_sentences:["She always arrives early for class.","I will always remember your kindness."],collocations:["almost always","as always","always remember"],category:"daily_life"},{id:19,word:"never",part_of_speech:"adverb",cefr_level:"A1",frequency_rank:135,definition_en:"At no time; not ever.",definition_tr:"Asla, hiçbir zaman.",phonetic:"/ˈnevər/",example_sentences:["I have never visited London.","Never give up on your dreams."],collocations:["never ever","better late than never","never again"],category:"daily_life"},{id:20,word:"usually",part_of_speech:"adverb",cefr_level:"A1",frequency_rank:220,definition_en:"Under normal conditions; generally.",definition_tr:"Genellikle, çoğunlukla.",phonetic:"/ˈjuːʒuəli/",example_sentences:["I usually have coffee for breakfast.","He usually goes to bed before midnight."],collocations:["as usually","more usually","usually happens"],category:"daily_life"},{id:21,word:"place",part_of_speech:"noun",cefr_level:"A1",frequency_rank:90,definition_en:"A particular position, building, town, or area.",definition_tr:"Yer, mekan, konum.",phonetic:"/pleɪs/",example_sentences:["This cafe is a lovely place to study.","There is no place like home."],collocations:["take place","in place of","safe place","meeting place"],category:"general"},{id:22,word:"house",part_of_speech:"noun",cefr_level:"A1",frequency_rank:115,definition_en:"A building for human habitation, especially one that is lived in by a family.",definition_tr:"Ev, müstakil konut.",phonetic:"/haʊs/",example_sentences:["They bought a small house near the coast.","Welcome to our house!"],collocations:["big house","house price","move house","around the house"],category:"daily_life"},{id:23,word:"city",part_of_speech:"noun",cefr_level:"A1",frequency_rank:145,definition_en:"A large town with a significant population.",definition_tr:"Şehir, kent.",phonetic:"/ˈsɪti/",example_sentences:["Istanbul is an ancient and vibrant city.","I prefer living in the city."],collocations:["city center","capital city","big city","city life"],category:"travel"},{id:24,word:"country",part_of_speech:"noun",cefr_level:"A1",frequency_rank:130,definition_en:"A nation with its own government, occupying a particular territory.",definition_tr:"Ülke; kırsal alan.",phonetic:"/ˈkʌntri/",example_sentences:["Which country would you like to visit?","We spent the weekend in the country."],collocations:["foreign country","across the country","in the country"],category:"travel"},{id:25,word:"question",part_of_speech:"noun",cefr_level:"A1",frequency_rank:165,definition_en:"A sentence or phrase used to find out information.",definition_tr:"Soru, sual.",phonetic:"/ˈkwestʃən/",example_sentences:["May I ask you a quick question?","That is a very good question."],collocations:["ask a question","answer a question","in question","out of the question"],category:"academic"},{id:26,word:"answer",part_of_speech:"noun/verb",cefr_level:"A1",frequency_rank:180,definition_en:"A response to a question or problem; to reply.",definition_tr:"Cevap, yanıt; cevap vermek.",phonetic:"/ˈænsər/",example_sentences:["Do you know the answer?","Please answer the phone."],collocations:["correct answer","answer the door","short answer"],category:"communication"},{id:27,word:"study",part_of_speech:"verb/noun",cefr_level:"A1",frequency_rank:210,definition_en:"To devote time and attention to acquiring knowledge.",definition_tr:"Ders çalışmak, öğrenim görmek; araştırma.",phonetic:"/ˈstʌdi/",example_sentences:["I study English every evening for an hour.","She wants to study medicine."],collocations:["study hard","study for an exam","field of study"],category:"academic"},{id:28,word:"learn",part_of_speech:"verb",cefr_level:"A1",frequency_rank:190,definition_en:"To gain knowledge or skill through study, experience, or being taught.",definition_tr:"Öğrenmek.",phonetic:"/lɜːrn/",example_sentences:["It takes practice to learn a language.","We learn from our mistakes."],collocations:["learn English","learn by heart","learn to drive","eager to learn"],category:"academic"},{id:29,word:"easy",part_of_speech:"adjective",cefr_level:"A1",frequency_rank:230,definition_en:"Achieved without great effort; not difficult.",definition_tr:"Kolay, zahmetsiz.",phonetic:"/ˈiːzi/",example_sentences:["The first test was surprisingly easy.","Take it easy and don't panic."],collocations:["take it easy","easy to understand","easy way","not easy"],category:"general"},{id:30,word:"happy",part_of_speech:"adjective",cefr_level:"A1",frequency_rank:240,definition_en:"Feeling or showing pleasure or contentment.",definition_tr:"Mutlu, memnun.",phonetic:"/ˈhæpi/",example_sentences:["She was so happy to see her parents.","Happy birthday to you!"],collocations:["happy to help","happy ending","feel happy","happy with"],category:"emotions"},{id:31,word:"speak",part_of_speech:"verb",cefr_level:"A1",frequency_rank:175,definition_en:"To say words, talk, or communicate in a spoken language.",definition_tr:"Konuşmak.",phonetic:"/spiːk/",example_sentences:["Do you speak English?","Could you speak a little slower, please?"],collocations:["speak fluently","speak to someone","so to speak","speak your mind"],category:"communication"},{id:32,word:"listen",part_of_speech:"verb",cefr_level:"A1",frequency_rank:205,definition_en:"To give attention with the ear; to heed advice.",definition_tr:"Dinlemek, kulak vermek.",phonetic:"/ˈlɪsn/",example_sentences:["Listen carefully to the teacher's instructions.","I like listening to acoustic music."],collocations:["listen to music","listen carefully","listen to advice"],category:"communication"},{id:33,word:"write",part_of_speech:"verb",cefr_level:"A1",frequency_rank:165,definition_en:"To compose text or put letters onto paper or a digital screen.",definition_tr:"Yazmak.",phonetic:"/raɪt/",example_sentences:["Write your full name at the top.","She wrote an inspiring essay."],collocations:["write down","write an email","write back","write by hand"],category:"communication"},{id:34,word:"read",part_of_speech:"verb",cefr_level:"A1",frequency_rank:155,definition_en:"To look at and comprehend the meaning of written words.",definition_tr:"Okumak.",phonetic:"/riːd/",example_sentences:["I read a book every two weeks.","Can you read this address for me?"],collocations:["read a book","read aloud","read carefully","read between the lines"],category:"academic"},{id:35,word:"walk",part_of_speech:"verb/noun",cefr_level:"A1",frequency_rank:215,definition_en:"To move on foot at a steady, natural pace.",definition_tr:"Yürümek; yürüyüş.",phonetic:"/wɔːk/",example_sentences:["I walk to school every morning.","Let's go for a walk in the park."],collocations:["go for a walk","walk away","within walking distance"],category:"daily_life"},{id:36,word:"arrive",part_of_speech:"verb",cefr_level:"A2",frequency_rank:350,definition_en:"To reach a destination at the end of a journey.",definition_tr:"Varmak, ulaşmak.",phonetic:"/əˈraɪv/",example_sentences:["The flight arrives at 4:30 PM.","We arrived in London yesterday."],collocations:["arrive at the airport","arrive on time","arrive in a city"],category:"travel"},{id:37,word:"leave",part_of_speech:"verb",cefr_level:"A2",frequency_rank:185,definition_en:"To go away from a person or place; to depart.",definition_tr:"Ayrılmak, terk etmek; bırakmak.",phonetic:"/liːv/",example_sentences:["The train leaves in ten minutes.","Don't leave your umbrella behind."],collocations:["leave a message","leave home","leave alone","take leave"],category:"travel"},{id:38,word:"choose",part_of_speech:"verb",cefr_level:"A2",frequency_rank:260,definition_en:"To pick out or select someone or something as being best or most suitable.",definition_tr:"Seçmek, tercih etmek.",phonetic:"/tʃuːz/",example_sentences:["It was hard to choose between the two jobs.","You can choose any color you like."],collocations:["choose carefully","choose between","freedom to choose"],category:"general"},{id:39,word:"decide",part_of_speech:"verb",cefr_level:"A2",frequency_rank:290,definition_en:"To make a choice from a number of alternatives after consideration.",definition_tr:"Karar vermek.",phonetic:"/dɪˈsaɪd/",example_sentences:["We decided to stay home because of the storm.","Have you decided what to study?"],collocations:["decide to do","decide on","hard to decide"],category:"general"},{id:40,word:"explain",part_of_speech:"verb",cefr_level:"A2",frequency_rank:310,definition_en:"To make an idea or situation clear by describing it in more detail.",definition_tr:"Açıklamak, izah etmek.",phonetic:"/ɪkˈspleɪn/",example_sentences:["Can you explain this grammar rule again?","Let me explain why I was late."],collocations:["explain in detail","hard to explain","explain to someone"],category:"communication"},{id:41,word:"remember",part_of_speech:"verb",cefr_level:"A2",frequency_rank:275,definition_en:"To have in or be able to bring to one's mind an awareness of someone or something.",definition_tr:"Hatırlamak, anımsamak.",phonetic:"/rɪˈmembər/",example_sentences:["I remember meeting you in Berlin.","Please remember to lock the front door."],collocations:["remember to do","remember vividly","as far as I remember"],category:"daily_life"},{id:42,word:"forget",part_of_speech:"verb",cefr_level:"A2",frequency_rank:325,definition_en:"To fail to remember or recall something.",definition_tr:"Unutmak.",phonetic:"/fərˈɡet/",example_sentences:["Don't forget your passport!","I completely forgot about our meeting."],collocations:["forget about","don't forget to","never forget","easy to forget"],category:"daily_life"},{id:43,word:"borrow",part_of_speech:"verb",cefr_level:"A2",frequency_rank:580,definition_en:"To take and use something belonging to someone else with the intention of returning it.",definition_tr:"Ödünç almak.",phonetic:"/ˈbɑːroʊ/",example_sentences:["Could I borrow your charger for an hour?","Students can borrow up to five books."],collocations:["borrow from","borrow money","borrow a book"],category:"daily_life"},{id:44,word:"lend",part_of_speech:"verb",cefr_level:"A2",frequency_rank:610,definition_en:"To grant someone the use of something on the condition that it will be returned.",definition_tr:"Ödünç vermek.",phonetic:"/lend/",example_sentences:["I can lend you my bicycle this weekend.","Banks lend money to businesses."],collocations:["lend a hand","lend to","lend money"],category:"daily_life"},{id:45,word:"comfortable",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:480,definition_en:"Providing physical ease and relaxation; feeling at ease.",definition_tr:"Rahat, konforlu.",phonetic:"/ˈkʌmftəbl/",example_sentences:["These shoes are very comfortable for walking.","Make yourself comfortable."],collocations:["feel comfortable","comfortable with","make comfortable"],category:"daily_life"},{id:46,word:"expensive",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:390,definition_en:"Costing a lot of money; not cheap.",definition_tr:"Pahalı, masraflı.",phonetic:"/ɪkˈspensɪv/",example_sentences:["Hotels in downtown London are quite expensive.","It is too expensive for our budget."],collocations:["very expensive","less expensive","expensive taste"],category:"travel"},{id:47,word:"cheap",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:410,definition_en:"Low in price; inexpensive.",definition_tr:"Ucuz, ekonomik.",phonetic:"/tʃiːp/",example_sentences:["Public transport in this town is very cheap.","We found a cheap flight to Rome."],collocations:["cheap ticket","cheap and cheerful","relatively cheap"],category:"travel"},{id:48,word:"delicious",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:520,definition_en:"Highly pleasant to the taste; mouth-watering.",definition_tr:"Lezzetli, nefis.",phonetic:"/dɪˈlɪʃəs/",example_sentences:["The homemade soup was absolutely delicious.","Thank you for the delicious dinner."],collocations:["delicious meal","taste delicious","delicious smell"],category:"food"},{id:49,word:"weather",part_of_speech:"noun",cefr_level:"A2",frequency_rank:340,definition_en:"The state of the atmosphere at a place and time regarding heat, cloudiness, and rain.",definition_tr:"Hava, hava durumu.",phonetic:"/ˈweðər/",example_sentences:["What is the weather forecast for tomorrow?","The weather is lovely and warm."],collocations:["weather forecast","bad weather","under the weather","good weather"],category:"daily_life"},{id:50,word:"ticket",part_of_speech:"noun",cefr_level:"A2",frequency_rank:440,definition_en:"A certificate or token showing that a fare or admission fee has been paid.",definition_tr:"Bilet.",phonetic:"/ˈtɪkɪt/",example_sentences:["I bought a return train ticket to Oxford.","Have your tickets ready for inspection."],collocations:["plane ticket","one-way ticket","book a ticket","traffic ticket"],category:"travel"},{id:51,word:"healthy",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:380,definition_en:"In good health; not diseased or injured; promoting good health.",definition_tr:"Sağlıklı, sıhhatli.",phonetic:"/ˈhelθi/",example_sentences:["Eating vegetables helps you stay healthy.","She maintains a healthy lifestyle."],collocations:["healthy lifestyle","healthy diet","stay healthy","healthy habits"],category:"health"},{id:52,word:"journey",part_of_speech:"noun",cefr_level:"A2",frequency_rank:460,definition_en:"An act of traveling from one place to another.",definition_tr:"Yolculuk, seyahat.",phonetic:"/ˈdʒɜːrni/",example_sentences:["Have a safe journey home!","It was a long journey across the mountains."],collocations:["safe journey","long journey","start a journey"],category:"travel"},{id:53,word:"advice",part_of_speech:"noun",cefr_level:"A2",frequency_rank:370,definition_en:"Guidance or recommendations offered with regard to prudent future action.",definition_tr:"Tavsiye, öğüt (sayılamaz isim).",phonetic:"/ədˈvaɪs/",example_sentences:["Can I give you a piece of advice?","Thank you for your valuable advice."],collocations:["piece of advice","ask for advice","follow advice","take advice"],category:"communication"},{id:54,word:"habit",part_of_speech:"noun",cefr_level:"A2",frequency_rank:490,definition_en:"A settled or regular tendency or practice, especially one that is hard to give up.",definition_tr:"Alışkanlık.",phonetic:"/ˈhæbɪt/",example_sentences:["Reading before bed is a beneficial habit.","It is hard to break an old habit."],collocations:["good habit","break a habit","form a habit","eating habits"],category:"daily_life"},{id:55,word:"polite",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:530,definition_en:"Having or showing behavior that is respectful and considerate of other people.",definition_tr:"Kibar, nazik, terbiyeli.",phonetic:"/pəˈlaɪt/",example_sentences:["He was always very polite to his teachers.","It is polite to say thank you."],collocations:["polite request","polite smile","be polite to"],category:"communication"},{id:56,word:"dangerous",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:450,definition_en:"Able or likely to cause harm or injury; risky.",definition_tr:"Tehlikeli.",phonetic:"/ˈdeɪndʒərəs/",example_sentences:["It is dangerous to drive in heavy snow.","Swimming here is dangerous."],collocations:["dangerous situation","highly dangerous","dangerous to health"],category:"general"},{id:57,word:"suddenly",part_of_speech:"adverb",cefr_level:"A2",frequency_rank:330,definition_en:"Quickly and unexpectedly.",definition_tr:"Aniden, birdenbire.",phonetic:"/ˈsʌdənli/",example_sentences:["Suddenly, the lights went off.","She stopped suddenly in the street."],collocations:["all of a sudden","suddenly realized","appear suddenly"],category:"general"},{id:58,word:"finally",part_of_speech:"adverb",cefr_level:"A2",frequency_rank:280,definition_en:"After a long time, typically involving difficulty or delay; at last.",definition_tr:"Sonunda, nihayet.",phonetic:"/ˈfaɪnəli/",example_sentences:["We finally arrived after five hours of driving.","Finally, check your answers."],collocations:["finally agreed","finally finished","and finally"],category:"general"},{id:59,word:"probably",part_of_speech:"adverb",cefr_level:"A2",frequency_rank:250,definition_en:"Almost certainly; as far as one knows or can tell.",definition_tr:"Muhtemelen, büyük olasılıkla.",phonetic:"/ˈprɑːbəbli/",example_sentences:["It will probably rain this evening.","You are probably right."],collocations:["most probably","probably won't","quite probably"],category:"communication"},{id:60,word:"especially",part_of_speech:"adverb",cefr_level:"A2",frequency_rank:295,definition_en:"Used to single out one person, thing, or situation over all others.",definition_tr:"Özellikle, bilhassa.",phonetic:"/ɪˈspeʃəli/",example_sentences:["I love fruit, especially fresh strawberries.","It was especially cold yesterday."],collocations:["especially important","especially for you","not especially"],category:"general"},{id:61,word:"crowded",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:620,definition_en:"Full of people, leaving little or no room for movement.",definition_tr:"Kalabalık, tıklım tıklım.",phonetic:"/ˈkraʊdɪd/",example_sentences:["The metro is always crowded at 8 AM.","The street was crowded with tourists."],collocations:["crowded room","get crowded","overly crowded"],category:"travel"},{id:62,word:"neighborhood",part_of_speech:"noun",cefr_level:"A2",frequency_rank:470,definition_en:"A district, especially one forming a community within a town or city.",definition_tr:"Mahalle, çevre, civar.",phonetic:"/ˈneɪbərhʊd/",example_sentences:["We live in a quiet, friendly neighborhood.","There are great cafes in this neighborhood."],collocations:["quiet neighborhood","in the neighborhood","safe neighborhood"],category:"daily_life"},{id:63,word:"airport",part_of_speech:"noun",cefr_level:"A2",frequency_rank:360,definition_en:"A complex of runways and buildings for the takeoff, landing, and maintenance of civil aircraft.",definition_tr:"Havalimanı, havaalanı.",phonetic:"/ˈerpɔːrt/",example_sentences:["We need to be at the airport two hours before departure.","The airport is far from downtown."],collocations:["airport security","international airport","airport shuttle"],category:"travel"},{id:64,word:"station",part_of_speech:"noun",cefr_level:"A2",frequency_rank:315,definition_en:"A regular stopping place on a public transportation route, especially one on a railroad line.",definition_tr:"İstasyon, gar, durak.",phonetic:"/ˈsteɪʃn/",example_sentences:["Meet me at the central train station.","The next metro station is our stop."],collocations:["train station","police station","bus station","gas station"],category:"travel"},{id:65,word:"invite",part_of_speech:"verb",cefr_level:"A2",frequency_rank:510,definition_en:"To make a polite, formal, or friendly request to someone to go somewhere or do something.",definition_tr:"Davet etmek, çağırmak.",phonetic:"/ɪnˈvaɪt/",example_sentences:["I invited twenty people to my birthday party.","Thanks for inviting me."],collocations:["invite to dinner","invite someone over","send an invite"],category:"communication"},{id:66,word:"enjoy",part_of_speech:"verb",cefr_level:"A2",frequency_rank:270,definition_en:"To take delight or pleasure in an activity or occasion.",definition_tr:"Zevk almak, keyfini çıkarmak.",phonetic:"/ɪnˈdʒɔɪ/",example_sentences:["I really enjoy swimming in the sea.","Enjoy your meal!"],collocations:["enjoy yourself","enjoy reading","thoroughly enjoy"],category:"emotions"},{id:67,word:"promise",part_of_speech:"verb/noun",cefr_level:"A2",frequency_rank:430,definition_en:"A declaration or assurance that one will do something or that a particular thing will happen.",definition_tr:"Söz vermek; söz, vaat.",phonetic:"/ˈprɑːmɪs/",example_sentences:["I promise I will arrive on time.","Keep your promise."],collocations:["make a promise","keep a promise","break a promise"],category:"communication"},{id:68,word:"hungry",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:540,definition_en:"Feeling or displaying the need for food.",definition_tr:"Aç, acıkmış.",phonetic:"/ˈhʌŋɡri/",example_sentences:["I am starving hungry after gym.","Are you hungry yet?"],collocations:["feel hungry","hungry for success","go hungry"],category:"food"},{id:69,word:"thirsty",part_of_speech:"adjective",cefr_level:"A2",frequency_rank:630,definition_en:"Feeling a need to drink.",definition_tr:"Susamış.",phonetic:"/ˈθɜːrsti/",example_sentences:["I am very thirsty; may I have some water?","Running in summer makes you thirsty."],collocations:["feel thirsty","thirsty work"],category:"food"},{id:70,word:"accident",part_of_speech:"noun",cefr_level:"A2",frequency_rank:495,definition_en:"An unfortunate incident that happens unexpectedly and unintentionally, typically resulting in damage or injury.",definition_tr:"Kaza, rastlantı.",phonetic:"/ˈæksɪdənt/",example_sentences:["Nobody was hurt in the traffic accident.","I deleted the file by accident."],collocations:["by accident","traffic accident","car accident","prevent accidents"],category:"general"},{id:71,word:"achieve",part_of_speech:"verb",cefr_level:"B1",frequency_rank:450,definition_en:"To successfully reach a desired goal, result, or status through effort.",definition_tr:"Başarmak, elde etmek, hedefe ulaşmak.",phonetic:"/əˈtʃiːv/",example_sentences:["She worked relentlessly to achieve her ambition.","They achieved outstanding results this quarter."],collocations:["achieve a goal","achieve success","achieve greatness"],category:"academic"},{id:72,word:"environment",part_of_speech:"noun",cefr_level:"B1",frequency_rank:350,definition_en:"The surroundings or conditions in which a person, animal, or plant lives or operates.",definition_tr:"Çevre, ortam.",phonetic:"/ɪnˈvaɪrənmənt/",example_sentences:["We must take urgent steps to protect the environment.","A supportive working environment boosts morale."],collocations:["protect the environment","natural environment","working environment","environmental impact"],category:"science"},{id:73,word:"opportunity",part_of_speech:"noun",cefr_level:"B1",frequency_rank:400,definition_en:"A set of circumstances that makes it possible to do something.",definition_tr:"Fırsat, olanak.",phonetic:"/ˌɑːpərˈtuːnəti/",example_sentences:["This internship is a golden opportunity to gain experience.","Don't miss this opportunity."],collocations:["golden opportunity","equal opportunities","take the opportunity","career opportunity"],category:"business"},{id:74,word:"despite",part_of_speech:"preposition",cefr_level:"B1",frequency_rank:550,definition_en:"Without being affected by; in spite of.",definition_tr:"Rağmen, karşın.",phonetic:"/dɪˈspaɪt/",example_sentences:["Despite the pouring rain, the marathon went ahead.","She passed the exam despite feeling sick."],collocations:["despite the fact that","despite difficulties","despite everything"],category:"academic"},{id:75,word:"increase",part_of_speech:"verb/noun",cefr_level:"B1",frequency_rank:320,definition_en:"To become or make greater in size, amount, intensity, or degree.",definition_tr:"Artmak, artırmak (fiil); artış (isim).",phonetic:"/ɪnˈkriːs/",example_sentences:["Online sales increased by 30% this year.","There was a sharp increase in housing prices."],collocations:["increase significantly","sharp increase","steady increase","on the increase"],category:"business"},{id:76,word:"suggest",part_of_speech:"verb",cefr_level:"B1",frequency_rank:380,definition_en:"To put forward an idea, proposition, or hypothesis for consideration.",definition_tr:"Önermek, tavsiye etmek; ima etmek.",phonetic:"/səɡˈdʒest/",example_sentences:["I suggest we schedule a team meeting on Monday.","What do you suggest we do next?"],collocations:["suggest that","strongly suggest","evidence suggests"],category:"communication"},{id:77,word:"challenge",part_of_speech:"noun/verb",cefr_level:"B1",frequency_rank:420,definition_en:"A call to take part in a contest or trial of ability; a demanding task.",definition_tr:"Zorluk, meydan okuma; zorlamak.",phonetic:"/ˈtʃælɪndʒ/",example_sentences:["Learning a new alphabet is a big challenge.","This new project will challenge our skills."],collocations:["face a challenge","major challenge","accept a challenge","pose a challenge"],category:"academic"},{id:78,word:"experience",part_of_speech:"noun/verb",cefr_level:"B1",frequency_rank:290,definition_en:"Practical contact with and observation of facts or events; knowledge gained through this.",definition_tr:"Deneyim, tecrübe; tecrübe etmek.",phonetic:"/ɪkˈspɪriəns/",example_sentences:["She has five years of experience in project management.","Traveling alone was an eye-opening experience."],collocations:["gain experience","hands-on experience","previous experience","work experience"],category:"business"},{id:79,word:"purpose",part_of_speech:"noun",cefr_level:"B1",frequency_rank:460,definition_en:"The reason for which something is done or created or for which something exists.",definition_tr:"Amaç, gaye, maksat.",phonetic:"/ˈpɜːrpəs/",example_sentences:["What is the main purpose of this research?","He did it on purpose to provoke a reaction."],collocations:["on purpose","main purpose","for the purpose of","sense of purpose"],category:"academic"},{id:80,word:"solution",part_of_speech:"noun",cefr_level:"B1",frequency_rank:390,definition_en:"A means of solving a problem or dealing with a difficult situation.",definition_tr:"Çözüm, çare.",phonetic:"/səˈluːʃn/",example_sentences:["Engineers found a cost-effective solution to the power leak.","There is no simple solution to this problem."],collocations:["find a solution","effective solution","practical solution","come up with a solution"],category:"technology"},{id:81,word:"advantage",part_of_speech:"noun",cefr_level:"B1",frequency_rank:510,definition_en:"A condition or circumstance that puts one in a favorable or superior position.",definition_tr:"Avantaj, üstünlük, fayda.",phonetic:"/ədˈvæntɪdʒ/",example_sentences:["Being bilingual gives you a huge advantage in the global market.","What are the advantages of remote work?"],collocations:["take advantage of","competitive advantage","distinct advantage","advantages and disadvantages"],category:"business"},{id:82,word:"disadvantage",part_of_speech:"noun",cefr_level:"B1",frequency_rank:680,definition_en:"An unfavorable circumstance or condition that reduces the chances of success.",definition_tr:"Dezavantaj, sakınca.",phonetic:"/ˌdɪsədˈvæntɪdʒ/",example_sentences:["One disadvantage of living in a large city is the high cost of rent.","He was at a severe disadvantage."],collocations:["at a disadvantage","major disadvantage","overcome disadvantages"],category:"general"},{id:83,word:"develop",part_of_speech:"verb",cefr_level:"B1",frequency_rank:310,definition_en:"To grow or cause to grow and become more mature, advanced, or elaborate.",definition_tr:"Gelişmek, geliştirmek.",phonetic:"/dɪˈveləp/",example_sentences:["The company is developing innovative educational software.","Children develop communication skills rapidly."],collocations:["develop skills","develop a strategy","develop over time","develop software"],category:"technology"},{id:84,word:"improve",part_of_speech:"verb",cefr_level:"B1",frequency_rank:330,definition_en:"To make or become better in quality, condition, or competence.",definition_tr:"İyileştirmek, geliştirmek, düzelmek.",phonetic:"/ɪmˈpruːv/",example_sentences:["Daily listening practice will significantly improve your comprehension.","His health has improved remarkably."],collocations:["improve significantly","room for improvement","improve skills","improve quality"],category:"academic"},{id:85,word:"manage",part_of_speech:"verb",cefr_level:"B1",frequency_rank:360,definition_en:"To be in charge of; to succeed in doing something despite difficulty.",definition_tr:"Yönetmek, idare etmek; (bir şeyi) başarmak.",phonetic:"/ˈmænɪdʒ/",example_sentences:["She manages a distributed team of engineers.","How did you manage to get tickets for the concert?"],collocations:["manage time","manage to do","manage a business","manage stress"],category:"business"},{id:86,word:"provide",part_of_speech:"verb",cefr_level:"B1",frequency_rank:270,definition_en:"To make available for use; to supply.",definition_tr:"Sağlamak, temin etmek, sunmak.",phonetic:"/prəˈvaɪd/",example_sentences:["The platform provides personalized feedback on your pronunciation.","Can you provide more details?"],collocations:["provide information","provide support","provide an opportunity","provided that"],category:"business"},{id:87,word:"necessary",part_of_speech:"adjective",cefr_level:"B1",frequency_rank:410,definition_en:"Required to be done, achieved, or present; needed; essential.",definition_tr:"Gerekli, zorunlu, lüzumlu.",phonetic:"/ˈnesəseri/",example_sentences:["Patience is necessary when mastering a foreign language.","Take all necessary precautions."],collocations:["necessary steps","if necessary","absolutely necessary","deem necessary"],category:"academic"},{id:88,word:"successful",part_of_speech:"adjective",cefr_level:"B1",frequency_rank:440,definition_en:"Accomplishing an aim or purpose; having achieved popularity or financial success.",definition_tr:"Başarılı.",phonetic:"/səkˈsesfl/",example_sentences:["He launched a highly successful technology startup.","The marketing campaign was very successful."],collocations:["highly successful","successful career","prove successful"],category:"business"},{id:89,word:"reliable",part_of_speech:"adjective",cefr_level:"B1",frequency_rank:650,definition_en:"Consistently good in quality or performance; able to be trusted.",definition_tr:"Güvenilir, sağlam.",phonetic:"/rɪˈlaɪəbl/",example_sentences:["We need a reliable internet connection for live video calls.","She is a punctual and reliable colleague."],collocations:["reliable source","reliable data","highly reliable","reliable friend"],category:"business"},{id:90,word:"community",part_of_speech:"noun",cefr_level:"B1",frequency_rank:340,definition_en:"A group of people living in the same place or having a particular characteristic in common.",definition_tr:"Topluluk, camia, halk.",phonetic:"/kəˈmjuːnəti/",example_sentences:["Our online learning community supports members worldwide.","Local community centers offer free lessons."],collocations:["sense of community","local community","global community","community service"],category:"daily_life"},{id:91,word:"behavior",part_of_speech:"noun",cefr_level:"B1",frequency_rank:520,definition_en:"The way in which one acts or conducts oneself, especially toward others.",definition_tr:"Davranış, tutum, hareket tarzı.",phonetic:"/bɪˈheɪvjər/",example_sentences:["Teachers praised the students for their exemplary behavior.","Consumer behavior has shifted toward online shopping."],collocations:["consumer behavior","acceptable behavior","pattern of behavior"],category:"academic"},{id:92,word:"creative",part_of_speech:"adjective",cefr_level:"B1",frequency_rank:590,definition_en:"Relating to or involving the imagination or original ideas.",definition_tr:"Yaratıcı, özgün.",phonetic:"/kriˈeɪtɪv/",example_sentences:["She found a creative approach to resolve the client's dilemma.","Creative writing enhances vocabulary retention."],collocations:["creative thinking","creative solution","creative industry","creative writing"],category:"general"},{id:93,word:"confident",part_of_speech:"adjective",cefr_level:"B1",frequency_rank:570,definition_en:"Feeling or showing certainty about something or confidence in oneself.",definition_tr:"Kendinden emin, özgüvenli.",phonetic:"/ˈkɑːnfɪdənt/",example_sentences:["With regular speaking practice, you will become more confident.","I feel confident about passing the exam."],collocations:["feel confident","confident about","self-confident","confident speaker"],category:"emotions"},{id:94,word:"independent",part_of_speech:"adjective",cefr_level:"B1",frequency_rank:480,definition_en:"Free from outside control; not depending on another's authority or financial support.",definition_tr:"Bağımsız, kendi başına hareket edebilen.",phonetic:"/ˌɪndɪˈpendənt/",example_sentences:["Autonomous study empowers students to become independent learners.","The country became independent in 1947."],collocations:["independent thinker","financially independent","independent of"],category:"academic"},{id:95,word:"however",part_of_speech:"adverb",cefr_level:"B1",frequency_rank:150,definition_en:"Used to introduce a statement that contrasts with or seems to contradict something that has been said.",definition_tr:"Ancak, bununla birlikte, yine de.",phonetic:"/haʊˈevər/",example_sentences:["He studied very hard; however, the test was exceptionally difficult.","This is useful. However, we need more evidence."],collocations:["however you look at it","however much"],category:"academic"},{id:96,word:"although",part_of_speech:"conjunction",cefr_level:"B1",frequency_rank:210,definition_en:"In spite of the fact that; even though.",definition_tr:"-e rağmen, -sa da, gerçi.",phonetic:"/ɔːlˈðoʊ/",example_sentences:["Although English grammar can seem complex at first, patterns become second nature.","She went to work although she felt ill."],collocations:["although it is true","although rare"],category:"academic"},{id:97,word:"furthermore",part_of_speech:"adverb",cefr_level:"B1",frequency_rank:690,definition_en:"In addition; moreover (used to introduce a fresh consideration).",definition_tr:"Ayrıca, dahası, üstelik.",phonetic:"/ˈfɜːrðərmɔːr/",example_sentences:["The product is energy efficient; furthermore, it comes with a lifetime guarantee.","Furthermore, the cost is minimal."],collocations:["and furthermore","furthermore it must be noted"],category:"academic"},{id:98,word:"definitely",part_of_speech:"adverb",cefr_level:"B1",frequency_rank:430,definition_en:"Without doubt; clearly or unambiguously.",definition_tr:"Kesinlikle, mutlaka.",phonetic:"/ˈdefɪnətli/",example_sentences:["I will definitely attend the speaking workshop tomorrow.","That was definitely the best movie of the year."],collocations:["definitely recommend","most definitely","definitely worth it"],category:"communication"},{id:99,word:"obviously",part_of_speech:"adverb",cefr_level:"B1",frequency_rank:470,definition_en:"In a way that is easily perceived or understood; clearly.",definition_tr:"Açıkça, besbelli, apaçık.",phonetic:"/ˈɑːbviəsli/",example_sentences:["Obviously, consistent daily effort yields the highest language retention.","He was obviously delighted with the outcome."],collocations:["obviously wrong","quite obviously","obviously important"],category:"communication"},{id:100,word:"convenient",part_of_speech:"adjective",cefr_level:"B1",frequency_rank:640,definition_en:"Fitting in well with a person's needs, activities, and plans; easy to use.",definition_tr:"Kullanışlı, elverişli, pratik.",phonetic:"/kənˈviːniənt/",example_sentences:["Online learning is very convenient for busy professionals.","Is Friday morning convenient for you?"],collocations:["convenient location","convenient time","convenient way"],category:"daily_life"},{id:101,word:"suitable",part_of_speech:"adjective",cefr_level:"B1",frequency_rank:560,definition_en:"Right or appropriate for a particular person, purpose, or situation.",definition_tr:"Uygun, münasip, elverişli.",phonetic:"/ˈsuːtəbl/",example_sentences:["This reading material is suitable for intermediate students.","Wear clothes suitable for a job interview."],collocations:["suitable for","suitable candidate","mutually suitable"],category:"general"},{id:102,word:"culture",part_of_speech:"noun",cefr_level:"B1",frequency_rank:335,definition_en:"The customs, arts, social institutions, and achievements of a particular nation or social group.",definition_tr:"Kültür, medeniyet.",phonetic:"/ˈkʌltʃər/",example_sentences:["Learning a language involves discovering its culture and idioms.","Corporate culture plays a big role in job satisfaction."],collocations:["corporate culture","pop culture","cultural differences","diverse culture"],category:"academic"},{id:103,word:"technology",part_of_speech:"noun",cefr_level:"B1",frequency_rank:300,definition_en:"The application of scientific knowledge for practical purposes, especially in industry.",definition_tr:"Teknoloji.",phonetic:"/tekˈnɑːlədʒi/",example_sentences:["Modern technology enables instant speech-to-text feedback.","Advances in technology are transforming daily life."],collocations:["modern technology","cutting-edge technology","technology sector"],category:"technology"},{id:104,word:"education",part_of_speech:"noun",cefr_level:"B1",frequency_rank:280,definition_en:"The process of receiving or giving systematic instruction, especially at a school or university.",definition_tr:"Eğitim, öğretim.",phonetic:"/ˌedʒuˈkeɪʃn/",example_sentences:["Access to quality education is a universal human right.","Higher education opens doors to international careers."],collocations:["higher education","quality education","education system","pursue education"],category:"academic"},{id:105,word:"participate",part_of_speech:"verb",cefr_level:"B1",frequency_rank:610,definition_en:"To take part in an action, discussion, or event.",definition_tr:"Katılmak, iştirak etmek.",phonetic:"/pɑːrˈtɪsɪpeɪt/",example_sentences:["Students are encouraged to actively participate in group debates.","Hundreds of athletes participated in the event."],collocations:["participate in","actively participate","right to participate"],category:"communication"},{id:106,word:"collaborate",part_of_speech:"verb",cefr_level:"B2",frequency_rank:820,definition_en:"To work jointly on an activity or project to produce an outcome.",definition_tr:"İş birliği yapmak, ortaklaşa çalışmak.",phonetic:"/kəˈlæbəreɪt/",example_sentences:["Our cross-functional teams collaborate closely on software releases.","Scientists collaborated across continents to decode the genome."],collocations:["collaborate on","collaborate with","collaborate closely"],category:"business"},{id:107,word:"distinguish",part_of_speech:"verb",cefr_level:"B2",frequency_rank:750,definition_en:"To recognize or treat someone or something as different; to perceive clearly.",definition_tr:"Ayırt etmek, farkı görmek; öne çıkmak.",phonetic:"/dɪˈstɪŋɡwɪʃ/",example_sentences:["It is crucial to distinguish between verifiable facts and mere subjective speculation.","His dedication distinguished him from peers."],collocations:["distinguish between","distinguish from","clearly distinguish"],category:"academic"},{id:108,word:"evaluate",part_of_speech:"verb",cefr_level:"B2",frequency_rank:690,definition_en:"To form an idea of the amount, number, or value of; to assess critically.",definition_tr:"Değerlendirmek, ölçüp biçmek.",phonetic:"/ɪˈvæljueɪt/",example_sentences:["The panel will evaluate each proposal based on feasibility and innovation.","We constantly evaluate our curriculum to ensure relevance."],collocations:["evaluate performance","evaluate effectiveness","carefully evaluate"],category:"business"},{id:109,word:"facilitate",part_of_speech:"verb",cefr_level:"B2",frequency_rank:880,definition_en:"To make an action or process easy or easier.",definition_tr:"Kolaylaştırmak, önünü açmak.",phonetic:"/fəˈsɪlɪteɪt/",example_sentences:["Modern digital tools facilitate rapid collaboration among remote teams.","The moderator facilitated a lively and balanced debate."],collocations:["facilitate learning","facilitate growth","facilitate discussion"],category:"business"},{id:110,word:"generate",part_of_speech:"verb",cefr_level:"B2",frequency_rank:630,definition_en:"To produce or create something, especially electricity, revenue, or ideas.",definition_tr:"Üretmek, meydana getirmek, oluşturmak.",phonetic:"/ˈdʒenəreɪt/",example_sentences:["The marketing campaign generated thousands of qualified leads.","Wind turbines generate clean, renewable power."],collocations:["generate revenue","generate ideas","generate excitement"],category:"business"},{id:111,word:"implement",part_of_speech:"verb",cefr_level:"B2",frequency_rank:710,definition_en:"To put a decision, plan, or agreement into effect.",definition_tr:"Uygulamak, yürürlüğe koymak, hayata geçirmek.",phonetic:"/ˈɪmplɪment/",example_sentences:["The management decided to implement flexible working hours.","We successfully implemented the new security protocol."],collocations:["implement a strategy","implement changes","implement policy"],category:"business"},{id:112,word:"negotiate",part_of_speech:"verb",cefr_level:"B2",frequency_rank:790,definition_en:"To try to reach an agreement or compromise by discussion.",definition_tr:"Müzakere etmek, pazarlık yapmak.",phonetic:"/nɪˈɡoʊʃieɪt/",example_sentences:["She successfully negotiated a higher starting salary.","Diplomats are working around the clock to negotiate a ceasefire."],collocations:["negotiate a contract","negotiate terms","negotiate successfully"],category:"business"},{id:113,word:"consequence",part_of_speech:"noun",cefr_level:"B2",frequency_rank:670,definition_en:"A result or effect of an action or condition.",definition_tr:"Sonuç, netice (özellikle olumsuz netice).",phonetic:"/ˈkɑːnsəkwens/",example_sentences:["Every decision we make in business carries lasting consequences.","Rising sea levels are a dire consequence of climate change."],collocations:["as a consequence","serious consequence","unintended consequences"],category:"academic"},{id:114,word:"perspective",part_of_speech:"noun",cefr_level:"B2",frequency_rank:640,definition_en:"A particular attitude toward or way of regarding something; a point of view.",definition_tr:"Bakış açısı, perspektif.",phonetic:"/pərˈspektɪv/",example_sentences:["Traveling broadens your perspective on cultural values.","From a financial perspective, the merger makes complete sense."],collocations:["from my perspective","gain perspective","different perspective","put into perspective"],category:"academic"},{id:115,word:"priority",part_of_speech:"noun",cefr_level:"B2",frequency_rank:610,definition_en:"The fact or condition of being regarded or treated as more important than others.",definition_tr:"Öncelik.",phonetic:"/praɪˈɔːrəti/",example_sentences:["Customer safety must always remain our top priority.","You need to reorganize your daily priorities."],collocations:["top priority","give priority to","set priorities","high priority"],category:"business"},{id:116,word:"strategy",part_of_speech:"noun",cefr_level:"B2",frequency_rank:550,definition_en:"A plan of action designed to achieve a long-term or overall aim.",definition_tr:"Strateji, plan.",phonetic:"/ˈstrætədʒi/",example_sentences:["We developed a comprehensive strategy to enter the European market.","A clear strategy reduces operational friction."],collocations:["marketing strategy","long-term strategy","adopt a strategy","business strategy"],category:"business"},{id:117,word:"phenomenon",part_of_speech:"noun",cefr_level:"B2",frequency_rank:920,definition_en:"A fact or situation that is observed to exist or happen, especially one whose cause is in question.",definition_tr:"Fenomen, olgu, olağanüstü olay.",phonetic:"/fəˈnɑːmɪnən/",example_sentences:["Social media addiction is an unprecedented psychological phenomenon.","Northern Lights are a spectacular natural phenomenon."],collocations:["natural phenomenon","cultural phenomenon","widespread phenomenon"],category:"science"},{id:118,word:"infrastructure",part_of_speech:"noun",cefr_level:"B2",frequency_rank:870,definition_en:"The basic physical and organizational structures and facilities needed for the operation of a society or enterprise.",definition_tr:"Altyapı.",phonetic:"/ˈɪnfrəstrʌktʃər/",example_sentences:["The nation invested billions into renewable energy and transport infrastructure.","Cloud computing provides resilient IT infrastructure."],collocations:["critical infrastructure","transport infrastructure","build infrastructure"],category:"business"},{id:119,word:"consensus",part_of_speech:"noun",cefr_level:"B2",frequency_rank:990,definition_en:"A general agreement among members of a group.",definition_tr:"Fikir birliği, mutabakat, uzlaşma.",phonetic:"/kənˈsensəs/",example_sentences:["After hours of debate, the board reached a unanimous consensus.","There is broad scientific consensus on global warming."],collocations:["reach a consensus","general consensus","build a consensus"],category:"business"},{id:120,word:"accurate",part_of_speech:"adjective",cefr_level:"B2",frequency_rank:660,definition_en:"Correct in all details; exact.",definition_tr:"Doğru, kesin, hatasız.",phonetic:"/ˈækjərət/",example_sentences:["Ensure your financial reports contain accurate figures.","Scientists made remarkably accurate predictions."],collocations:["accurate description","highly accurate","accurate information"],category:"academic"},{id:121,word:"comprehensive",part_of_speech:"adjective",cefr_level:"B2",frequency_rank:780,definition_en:"Complete; including all or nearly all elements or aspects of something.",definition_tr:"Kapsamlı, etraflı, eksiksiz.",phonetic:"/ˌkɑːmprɪˈhensɪv/",example_sentences:["The academy offers a comprehensive guide to English idioms.","We conducted a comprehensive audit of all accounts."],collocations:["comprehensive study","comprehensive review","comprehensive guide"],category:"academic"},{id:122,word:"crucial",part_of_speech:"adjective",cefr_level:"B2",frequency_rank:720,definition_en:"Decisive or critical, especially in the success or failure of something.",definition_tr:"Çok önemli, hayati, kritik.",phonetic:"/ˈkruːʃl/",example_sentences:["Active listening is a crucial ingredient of successful diplomacy.","The next 48 hours will be crucial for the patient."],collocations:["crucial role","crucial factor","crucial decision","play a crucial role"],category:"general"},{id:123,word:"inevitable",part_of_speech:"adjective",cefr_level:"B2",frequency_rank:830,definition_en:"Certain to happen; unavoidable.",definition_tr:"Kaçınılmaz, çaresiz.",phonetic:"/ɪnˈevɪtəbl/",example_sentences:["Change is an inevitable part of career progression.","With such heavy traffic, delays were inevitable."],collocations:["inevitable outcome","seem inevitable","inevitable result"],category:"general"},{id:124,word:"plausible",part_of_speech:"adjective",cefr_level:"B2",frequency_rank:1050,definition_en:"Seeming reasonable or probable; believable.",definition_tr:"Makul, akla yatkın, olası.",phonetic:"/ˈplɔːzəbl/",example_sentences:["She offered a completely plausible explanation for the discrepancy.","Is this timeline really plausible given current staffing?"],collocations:["plausible explanation","perfectly plausible","plausible scenario"],category:"academic"},{id:125,word:"sustainable",part_of_speech:"adjective",cefr_level:"B2",frequency_rank:840,definition_en:"Able to be maintained at a certain rate or level; conserving an ecological balance.",definition_tr:"Sürdürülebilir, çevreye duyarlı.",phonetic:"/səˈsteɪnəbl/",example_sentences:["Companies must adopt sustainable manufacturing practices.","Economic growth must be socially and environmentally sustainable."],collocations:["sustainable development","sustainable future","sustainable energy"],category:"science"},{id:126,word:"versatile",part_of_speech:"adjective",cefr_level:"B2",frequency_rank:1120,definition_en:"Able to adapt or be adapted to many different functions or activities.",definition_tr:"Çok yönlü, becerikli, çok amaçlı.",phonetic:"/ˈvɜːrsətl/",example_sentences:["He is an exceptionally versatile actor who excels in both drama and comedy.","Python is one of the most versatile programming languages."],collocations:["versatile actor","versatile tool","highly versatile"],category:"general"},{id:127,word:"consequently",part_of_speech:"adverb",cefr_level:"B2",frequency_rank:770,definition_en:"As a result; therefore.",definition_tr:"Sonuç olarak, bu nedenle, binaenaleyh.",phonetic:"/ˈkɑːnsəkwentli/",example_sentences:["The budget was slashed; consequently, several planned projects were halted.","He failed to prepare, and consequently missed the promotion."],collocations:["and consequently","consequently led to"],category:"academic"},{id:128,word:"nevertheless",part_of_speech:"adverb",cefr_level:"B2",frequency_rank:790,definition_en:"In spite of that; notwithstanding; all the same.",definition_tr:"Yine de, buna rağmen, ne var ki.",phonetic:"/ˌnevərðəˈles/",example_sentences:["The climb was dangerous; nevertheless, they persevered to the summit.","It was a tough interview; nevertheless, she remained poised."],collocations:["but nevertheless","nevertheless true"],category:"academic"},{id:129,word:"substantially",part_of_speech:"adverb",cefr_level:"B2",frequency_rank:910,definition_en:"To a great or significant extent; considerably.",definition_tr:"Büyük ölçüde, önemli derecede.",phonetic:"/səbˈstænʃəli/",example_sentences:["Quality of life has improved substantially over recent decades.","The new engine is substantially quieter and more fuel efficient."],collocations:["substantially higher","substantially different","increase substantially"],category:"business"},{id:130,word:"ambiguous",part_of_speech:"adjective",cefr_level:"B2",frequency_rank:1040,definition_en:"Open to more than one interpretation; having a double meaning; unclear.",definition_tr:"Muğlak, belirsiz, iki anlamlı.",phonetic:"/æmˈbɪɡjuəs/",example_sentences:["The contract clauses were intentionally ambiguous, leading to dispute.","Her reply was frustratingly ambiguous."],collocations:["ambiguous statement","remain ambiguous","morally ambiguous"],category:"academic"},{id:131,word:"substitute",part_of_speech:"verb/noun",cefr_level:"B2",frequency_rank:860,definition_en:"To use or add in place of; a person or thing that takes the place of another.",definition_tr:"Yerine koymak, ikame etmek; yedek.",phonetic:"/ˈsʌbstɪtuːt/",example_sentences:["You can substitute olive oil for butter in this recipe.","There is no substitute for hard work."],collocations:["substitute for","act as a substitute","substitute teacher"],category:"general"},{id:132,word:"legislation",part_of_speech:"noun",cefr_level:"B2",frequency_rank:940,definition_en:"Laws, considered collectively; the process of making or enacting laws.",definition_tr:"Mevzuat, yasalar, kanun yapımı.",phonetic:"/ˌledʒɪsˈleɪʃn/",example_sentences:["Parliament passed landmark legislation on environmental emissions.","New labor legislation protects remote gig workers."],collocations:["pass legislation","introduce legislation","under existing legislation"],category:"academic"},{id:133,word:"predominantly",part_of_speech:"adverb",cefr_level:"B2",frequency_rank:1080,definition_en:"Mainly; for the most part.",definition_tr:"Ağırlıklı olarak, çoğunlukla, başta olmak üzere.",phonetic:"/prɪˈdɑːmɪnəntli/",example_sentences:["The local economy is predominantly based on agricultural exports.","The audience was composed predominantly of university students."],collocations:["predominantly male/female","predominantly rural"],category:"academic"},{id:134,word:"spontaneously",part_of_speech:"adverb",cefr_level:"B2",frequency_rank:1150,definition_en:"As a result of a sudden impulse and without premeditation or external stimulus.",definition_tr:"Kendiliğinden, aniden, doğal olarak.",phonetic:"/spɑːnˈteɪniəsli/",example_sentences:["The crowd began to sing spontaneously at the conclusion of the concert.","Children often speak spontaneously without self-censorship."],collocations:["arise spontaneously","occur spontaneously","act spontaneously"],category:"emotions"},{id:135,word:"accommodate",part_of_speech:"verb",cefr_level:"B2",frequency_rank:890,definition_en:"To provide lodging or sufficient space for; to adapt to someone's wishes.",definition_tr:"Barındırmak, yer sağlamak; ayak uydurmak.",phonetic:"/əˈkɑːmədeɪt/",example_sentences:["The auditorium can easily accommodate up to 800 attendees.","We will do our utmost to accommodate your schedule."],collocations:["accommodate needs","accommodate guests","accommodate changes"],category:"business"},{id:136,word:"articulate",part_of_speech:"verb/adjective",cefr_level:"C1",frequency_rank:1250,definition_en:"To express an idea or feeling fluently and coherently; having the ability to speak fluently.",definition_tr:"Düşüncelerini net ifade etmek; açık, anlaşılır, fasih.",phonetic:"/ɑːrˈtɪkjuleɪt/",example_sentences:["She articulated her vision with remarkable precision and passion.","He is an articulate advocate for civil liberties."],collocations:["articulate clearly","highly articulate","articulate vision"],category:"communication"},{id:137,word:"substantiate",part_of_speech:"verb",cefr_level:"C1",frequency_rank:1400,definition_en:"To provide evidence to support or prove the truth of a claim.",definition_tr:"Somut kanıtlarla doğrulamak, kanıtlamak.",phonetic:"/səbˈstænʃieɪt/",example_sentences:["The investigator failed to substantiate the allegations with credible data.","Can you substantiate that thesis with empirical research?"],collocations:["substantiate claims","substantiate allegations","substantiate with evidence"],category:"academic"},{id:138,word:"scrutinize",part_of_speech:"verb",cefr_level:"C1",frequency_rank:1350,definition_en:"To examine or inspect closely and thoroughly.",definition_tr:"En ince ayrıntısına kadar incelemek, denetlemek.",phonetic:"/ˈskruːtənaɪz/",example_sentences:["The regulatory agency scrutinized every financial transaction.","Journalists scrutinized the government's foreign policy record."],collocations:["scrutinize closely","scrutinize carefully","scrutinize data"],category:"academic"},{id:139,word:"exacerbate",part_of_speech:"verb",cefr_level:"C1",frequency_rank:1450,definition_en:"To make a problem, bad situation, or negative feeling worse.",definition_tr:"Daha da kötüleştirmek, şiddetlendirmek, tırmandırmak.",phonetic:"/ɪɡˈzæsərbeɪt/",example_sentences:["Inflation and high interest rates exacerbated the country's housing crisis.","Her harsh comments only exacerbated tensions."],collocations:["exacerbate the problem","exacerbate tensions","exacerbate poverty"],category:"academic"},{id:140,word:"advocate",part_of_speech:"verb/noun",cefr_level:"C1",frequency_rank:1100,definition_en:"To publicly recommend or support; a person who puts forward a cause.",definition_tr:"Savunmak, desteklemek; savunucu, dava vekili.",phonetic:"/ˈædvəkeɪt/",example_sentences:["Doctors strongly advocate a reduction in refined sugar intake.","She has been a fierce advocate for renewable energy."],collocations:["strongly advocate","advocate for","fierce advocate"],category:"academic"},{id:141,word:"delineate",part_of_speech:"verb",cefr_level:"C1",frequency_rank:1550,definition_en:"To describe or portray something precisely; to indicate the exact position of a boundary.",definition_tr:"Ayrıntılarıyla tasvir etmek, sınırlarını çizmek.",phonetic:"/dɪˈlɪnieɪt/",example_sentences:["The report delineates the clear steps required to achieve carbon neutrality.","The law delineates the responsibilities of both parties."],collocations:["clearly delineate","delineate boundaries","delineate roles"],category:"academic"},{id:142,word:"reconcile",part_of_speech:"verb",cefr_level:"C1",frequency_rank:1200,definition_en:"To restore friendly relations between; to make consistent or compatible.",definition_tr:"Uzlaştırmak, arayı bulmak; bağdaştırmak.",phonetic:"/ˈrekənsaɪl/",example_sentences:["It was difficult to reconcile his personal principles with corporate demands.","The two factions reconciled after extensive mediation."],collocations:["reconcile differences","reconcile with","hard to reconcile"],category:"communication"},{id:143,word:"paradigm",part_of_speech:"noun",cefr_level:"C1",frequency_rank:1300,definition_en:"A typical example or pattern of something; a model or worldview.",definition_tr:"Paradigma, model, temel dünya görüşü.",phonetic:"/ˈpærədaɪm/",example_sentences:["The advent of generative AI represents a monumental paradigm shift.","We need to operate within a new economic paradigm."],collocations:["paradigm shift","dominant paradigm","new paradigm"],category:"academic"},{id:144,word:"discrepancy",part_of_speech:"noun",cefr_level:"C1",frequency_rank:1280,definition_en:"A lack of compatibility or similarity between two or more facts.",definition_tr:"Çelişki, uyuşmazlık, tutarsızlık.",phonetic:"/dɪˈskrepənsi/",example_sentences:["Auditors discovered a conspicuous discrepancy between recorded and actual inventory.","There is an unresolved discrepancy in the witness statements."],collocations:["significant discrepancy","apparent discrepancy","discrepancy between"],category:"academic"},{id:145,word:"ubiquitous",part_of_speech:"adjective",cefr_level:"C1",frequency_rank:1500,definition_en:"Present, appearing, or found everywhere.",definition_tr:"Her yerde bulunan, yaygın, hazır ve nazır.",phonetic:"/juːˈbɪkwɪtəs/",example_sentences:["Smartphones have become ubiquitous in modern metropolitan life.","Sugar is ubiquitous in processed supermarket foods."],collocations:["become ubiquitous","ubiquitous presence","almost ubiquitous"],category:"academic"},{id:146,word:"meticulous",part_of_speech:"adjective",cefr_level:"C1",frequency_rank:1380,definition_en:"Showing great attention to detail; very careful and precise.",definition_tr:"Titiz, kılı kırk yaran, özenli.",phonetic:"/məˈtɪkjələs/",example_sentences:["The restoration of the ancient manuscript required meticulous precision.","She kept meticulous notes during every laboratory trial."],collocations:["meticulous attention to detail","meticulous planning","meticulous research"],category:"academic"},{id:147,word:"pragmatic",part_of_speech:"adjective",cefr_level:"C1",frequency_rank:1180,definition_en:"Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.",definition_tr:"Pragmatik, uygulamacı, faydacı, ayakları yere basan.",phonetic:"/præɡˈmætɪk/",example_sentences:["We adopted a pragmatic approach to solve the deadline crunch.","He is known as a pragmatic dealmaker in international commerce."],collocations:["pragmatic approach","pragmatic solution","pragmatic decision"],category:"business"},{id:148,word:"resilient",part_of_speech:"adjective",cefr_level:"C1",frequency_rank:1220,definition_en:"Able to withstand or recover quickly from difficult conditions.",definition_tr:"Dirençli, esnek, zorluklara göğüs gerebilen.",phonetic:"/rɪˈzɪliənt/",example_sentences:["The local economy proved remarkably resilient throughout the economic crisis.","Resilient learners view failure as crucial feedback."],collocations:["highly resilient","resilient economy","remain resilient"],category:"emotions"},{id:149,word:"compelling",part_of_speech:"adjective",cefr_level:"C1",frequency_rank:1160,definition_en:"Evoking interest, attention, or admiration in a powerfully irresistible way.",definition_tr:"İkna edici, büyüleyici, karşı konulmaz.",phonetic:"/kəmˈpelɪŋ/",example_sentences:["The defense attorney presented a compelling argument based on surveillance footage.","Her debut novel tells a compelling and tragic story."],collocations:["compelling evidence","compelling reason","compelling argument"],category:"communication"},{id:150,word:"nuanced",part_of_speech:"adjective",cefr_level:"C1",frequency_rank:1420,definition_en:"Characterized by subtle shades of meaning or expression.",definition_tr:"İnce ayrıntıları barındıran, nüanslı, derinlikli.",phonetic:"/ˈnuːɑːnst/",example_sentences:["Complex geopolitical issues require a nuanced and mature perspective.","His nuanced understanding of English idioms sets him apart."],collocations:["nuanced understanding","nuanced approach","highly nuanced"],category:"academic"},{id:151,word:"ephemeral",part_of_speech:"adjective",cefr_level:"C2",frequency_rank:1900,definition_en:"Lasting for a very short time; fleeting.",definition_tr:"Geçici, fani, kısa ömürlü.",phonetic:"/ɪˈfemərəl/",example_sentences:["Fame on social media can be notoriously ephemeral.","Cherry blossoms represent the ephemeral beauty of springtime."],collocations:["ephemeral nature","ephemeral beauty","ephemeral pleasures"],category:"academic"},{id:152,word:"superfluous",part_of_speech:"adjective",cefr_level:"C2",frequency_rank:1850,definition_en:"Unnecessary, especially through being more than enough.",definition_tr:"Gereksiz, fuzuli, fazlalık.",phonetic:"/suːˈpɜːrfluəs/",example_sentences:["Concise business writing eliminates superfluous adjectives.","The assistant was let go because his role had become superfluous."],collocations:["superfluous details","render superfluous","superfluous words"],category:"academic"},{id:153,word:"ambivalence",part_of_speech:"noun",cefr_level:"C2",frequency_rank:1950,definition_en:"The state of having mixed feelings or contradictory ideas about something or someone.",definition_tr:"İkirciklilik, kararsızlık, çelişik duygular içinde olma.",phonetic:"/æmˈbɪvələns/",example_sentences:["She felt acute ambivalence about leaving her hometown for a job in New York.","There is considerable public ambivalence toward artificial intelligence."],collocations:["feel ambivalence","sense of ambivalence","moral ambivalence"],category:"emotions"},{id:154,word:"proliferation",part_of_speech:"noun",cefr_level:"C2",frequency_rank:1750,definition_en:"Rapid increase in the number or amount of something; rapid reproduction of an organism.",definition_tr:"Hızlı artış, türeme, yayılma.",phonetic:"/prəˌlɪfəˈreɪʃn/",example_sentences:["The proliferation of false information poses a grave threat to democracy.","We have witnessed a proliferation of smartphone apps."],collocations:["rapid proliferation","proliferation of weapons","nuclear proliferation"],category:"academic"},{id:155,word:"repercussion",part_of_speech:"noun",cefr_level:"C2",frequency_rank:1680,definition_en:"An unintended consequence occurring some time after an event or action, especially an unwelcome one.",definition_tr:"Yankı, dolaylı kötü sonuç, ters tepki.",phonetic:"/ˌriːpərˈkʌʃn/",example_sentences:["The collapse of the bank had severe economic repercussions across the globe.","Think carefully about the long-term repercussions."],collocations:["serious repercussions","economic repercussions","have repercussions"],category:"business"}],I={grammar_topics:[{id:1,name:"Present Simple",slug:"present-simple",category:"tenses",cefr_level:"A1",description:"Actions that happen regularly, facts, and routines.",explanation_en:"We use the Present Simple for habits, routines, general truths, and permanent situations. Add -s/-es for he/she/it.",explanation_tr:"Geniş zaman. Alışkanlıklar, rutin eylemler, genel doğrular ve kalıcı durumlar için kullanılır. He/she/it için fiile -s/-es eklenir.",examples:`[{"sentence":"I work every day.","translation":"Her gün çalışırım."},{"sentence":"She plays tennis on Sundays.","translation":"Pazar günleri tenis oynar."},{"sentence":"Water boils at 100 degrees.","translation":"Su 100 derecede kaynar."},{"sentence":"They don't like coffee.","translation":"Kahve sevmezler."},{"sentence":"Does he speak English?","translation":"İngilizce konuşur mu?"}]`,rules:'["Affirmative: Subject + V1 (he/she/it + V1+s/es)","Negative: Subject + do/does + not + V1","Question: Do/Does + Subject + V1?","Time expressions: always, usually, often, sometimes, rarely, never, every day/week/month","Third person singular: add -s (works), -es (watches, goes), -ies (studies)"]',common_mistakes:`[{"wrong":"He work every day.","correct":"He works every day.","explanation":"He/she/it requires -s on the verb."},{"wrong":"She don't like it.","correct":"She doesn't like it.","explanation":"Use \\"doesn't\\" for he/she/it negatives."},{"wrong":"Does she works here?","correct":"Does she work here?","explanation":"After does/doesn't, use the base form."},{"wrong":"I am go to school.","correct":"I go to school.","explanation":"Don't use \\"am\\" with Present Simple verbs."}]`,order_index:1,prerequisite_topics:"[]"},{id:2,name:"Present Continuous",slug:"present-continuous",category:"tenses",cefr_level:"A1",description:"Actions happening right now or temporary actions.",explanation_en:"We use the Present Continuous for actions happening now, temporary situations, and future arrangements. Form: am/is/are + verb-ing.",explanation_tr:"Şimdiki zaman. Şu anda olan eylemler, geçici durumlar ve gelecek planları için kullanılır. Yapı: am/is/are + fiil-ing.",examples:'[{"sentence":"I am reading a book right now.","translation":"Şu anda bir kitap okuyorum."},{"sentence":"She is working from home this week.","translation":"Bu hafta evden çalışıyor."},{"sentence":"They are not watching TV.","translation":"Televizyon izlemiyorlar."},{"sentence":"Are you listening to me?","translation":"Beni dinliyor musun?"},{"sentence":"We are meeting them tomorrow.","translation":"Yarın onlarla buluşuyoruz."}]',rules:'["Affirmative: Subject + am/is/are + V-ing","Negative: Subject + am/is/are + not + V-ing","Question: Am/Is/Are + Subject + V-ing?","Time expressions: now, right now, at the moment, currently, today, this week","Spelling: drop -e (make→making), double consonant (run→running), -ie→ying (lie→lying)"]',common_mistakes:'[{"wrong":"I reading a book.","correct":"I am reading a book.","explanation":"You need am/is/are before the -ing verb."},{"wrong":"She is work now.","correct":"She is working now.","explanation":"Add -ing to the main verb."},{"wrong":"I am knowing the answer.","correct":"I know the answer.","explanation":"Stative verbs (know, like, want) are usually not used in continuous."}]',order_index:2,prerequisite_topics:'["present-simple"]'},{id:3,name:"Past Simple",slug:"past-simple",category:"tenses",cefr_level:"A2",description:"Completed actions in the past.",explanation_en:"We use Past Simple for finished actions at a specific time in the past. Regular verbs add -ed. Irregular verbs have special forms.",explanation_tr:"Geçmiş zaman. Geçmişte belirli bir zamanda tamamlanmış eylemler için kullanılır. Düzenli fiillere -ed eklenir. Düzensiz fiillerin özel halleri vardır.",examples:`[{"sentence":"I visited London last year.","translation":"Geçen yıl Londra'yı ziyaret ettim."},{"sentence":"She went to the store yesterday.","translation":"Dün mağazaya gitti."},{"sentence":"They didn't come to the party.","translation":"Partiye gelmediler."},{"sentence":"Did you see the movie?","translation":"Filmi gördün mü?"},{"sentence":"He bought a new car.","translation":"Yeni bir araba aldı."}]`,rules:'["Affirmative: Subject + V2 (regular: +ed, irregular: special form)","Negative: Subject + did + not + V1","Question: Did + Subject + V1?","Time expressions: yesterday, last week/month/year, ago, in 2020, when I was young","Regular -ed: worked, played, studied, stopped"]',common_mistakes:`[{"wrong":"I goed to school.","correct":"I went to school.","explanation":"\\"Go\\" is irregular. Past form is \\"went\\"."},{"wrong":"Did you went there?","correct":"Did you go there?","explanation":"After did/didn't, use base form (V1)."},{"wrong":"She didn't went.","correct":"She didn't go.","explanation":"After didn't, always use base form."}]`,order_index:3,prerequisite_topics:'["present-simple"]'},{id:4,name:"Past Continuous",slug:"past-continuous",category:"tenses",cefr_level:"A2",description:"Actions in progress at a specific time in the past.",explanation_en:"We use Past Continuous for actions that were in progress at a specific moment in the past, or for background actions when something else happened.",explanation_tr:"Geçmişte devam eden zaman. Geçmişte belirli bir anda devam eden eylemler veya başka bir olay olduğunda arka planda olan eylemler için kullanılır.",examples:`[{"sentence":"I was reading when the phone rang.","translation":"Telefon çaldığında kitap okuyordum."},{"sentence":"They were playing football at 3 PM.","translation":"Saat 3'te futbol oynuyorlardı."},{"sentence":"She wasn't sleeping when I called.","translation":"Aradığımda uyumuyordu."},{"sentence":"Were you working yesterday evening?","translation":"Dün akşam çalışıyor muydun?"}]`,rules:'["Affirmative: Subject + was/were + V-ing","Negative: Subject + was/were + not + V-ing","Question: Was/Were + Subject + V-ing?","Often used with Past Simple: \\"While I was walking, I saw a friend.\\"","Time expressions: while, when, at that time, at 3 PM yesterday"]',common_mistakes:'[{"wrong":"I was watch TV.","correct":"I was watching TV.","explanation":"Use V-ing after was/were."},{"wrong":"While I studied, the phone rang.","correct":"While I was studying, the phone rang.","explanation":"Use Past Continuous for the ongoing action, Past Simple for the interruption."}]',order_index:4,prerequisite_topics:'["past-simple", "present-continuous"]'},{id:5,name:"Present Perfect",slug:"present-perfect",category:"tenses",cefr_level:"B1",description:"Past actions connected to the present, experiences, and recent events.",explanation_en:"We use Present Perfect for experiences, recent actions with present results, and actions from a period that hasn't finished. Form: have/has + past participle (V3).",explanation_tr:"Geçmişte başlayıp etkisi hâlâ devam eden eylemler, deneyimler ve yakın zamandaki olaylar için kullanılır. Yapı: have/has + geçmiş ortaç (V3). Türkçede doğrudan karşılığı yoktur.",examples:`[{"sentence":"I have visited Paris three times.","translation":"Paris'i üç kez ziyaret ettim. (Deneyim)"},{"sentence":"She has lost her keys.","translation":"Anahtarlarını kaybetti. (Şu an anahtarları yok)"},{"sentence":"Have you ever eaten sushi?","translation":"Hiç suşi yedin mi?"},{"sentence":"They haven't finished yet.","translation":"Henüz bitirmediler."},{"sentence":"I have lived here since 2010.","translation":"2010'dan beri burada yaşıyorum."}]`,rules:`["Affirmative: Subject + have/has + V3 (past participle)","Negative: Subject + have/has + not + V3","Question: Have/Has + Subject + V3?","Key words: ever, never, already, yet, just, since, for, recently, so far","Use \\"since\\" for a point in time (since Monday), \\"for\\" for a duration (for two years)","Don't use with specific past times (yesterday, last week, in 2019) — use Past Simple instead"]`,common_mistakes:`[{"wrong":"I have went there.","correct":"I have gone there.","explanation":"Use the past participle (V3), not the past simple (V2). go→went→gone"},{"wrong":"I have visited Paris yesterday.","correct":"I visited Paris yesterday.","explanation":"Don't use Present Perfect with specific past times."},{"wrong":"She has lose her keys.","correct":"She has lost her keys.","explanation":"Use the past participle: lose→lost→lost"},{"wrong":"I live here since 2010.","correct":"I have lived here since 2010.","explanation":"Use Present Perfect with \\"since\\" and \\"for\\" for continuing actions."}]`,order_index:5,prerequisite_topics:'["past-simple"]'},{id:6,name:"Present Perfect Continuous",slug:"present-perfect-continuous",category:"tenses",cefr_level:"B1",description:"Actions that started in the past and are still continuing, emphasizing duration.",explanation_en:"We use Present Perfect Continuous to emphasize the duration of an action that started in the past and continues now, or has recently stopped with visible results.",explanation_tr:"Geçmişte başlayıp hâlâ devam eden eylemin süresini vurgular. Yapı: have/has + been + V-ing. Eylemin ne kadar süredir devam ettiğini anlatır.",examples:`[{"sentence":"I have been studying for three hours.","translation":"Üç saattir ders çalışıyorum."},{"sentence":"It has been raining all day.","translation":"Bütün gün yağmur yağıyor."},{"sentence":"She has been working here since January.","translation":"Ocak'tan beri burada çalışıyor."},{"sentence":"How long have you been waiting?","translation":"Ne kadar süredir bekliyorsun?"}]`,rules:'["Affirmative: Subject + have/has + been + V-ing","Negative: Subject + have/has + not + been + V-ing","Question: How long + have/has + Subject + been + V-ing?","Emphasizes DURATION, while Present Perfect emphasizes RESULT","Compare: \\"I have read the book.\\" (finished) vs \\"I have been reading the book.\\" (still reading or just stopped)"]',common_mistakes:`[{"wrong":"I have been know him for years.","correct":"I have known him for years.","explanation":"Stative verbs (know, like, love) don't use continuous form."},{"wrong":"She has been working here since three months.","correct":"She has been working here for three months.","explanation":"Use \\"for\\" with durations, \\"since\\" with points in time."}]`,order_index:6,prerequisite_topics:'["present-perfect", "present-continuous"]'},{id:7,name:"Past Perfect",slug:"past-perfect",category:"tenses",cefr_level:"B1",description:"An action that happened before another action in the past.",explanation_en:"We use Past Perfect to show that one action happened BEFORE another action in the past. Form: had + past participle (V3).",explanation_tr:'Geçmişteki bir eylemden önce tamamlanmış olan bir eylemi anlatır. "Geçmişin geçmişi" olarak düşünülebilir. Yapı: had + V3.',examples:'[{"sentence":"I had already eaten when she arrived.","translation":"O geldiğinde ben çoktan yemiştim."},{"sentence":"They had left before the rain started.","translation":"Yağmur başlamadan önce gitmişlerdi."},{"sentence":"She realized she had forgotten her wallet.","translation":"Cüzdanını unuttuğunu fark etti."}]',rules:'["Affirmative: Subject + had + V3","Negative: Subject + had + not + V3","Question: Had + Subject + V3?","Key words: before, after, already, when, by the time, until","The earlier action uses Past Perfect, the later action uses Past Simple"]',common_mistakes:'[{"wrong":"When I arrived, she left.","correct":"When I arrived, she had already left.","explanation":"Use Past Perfect for the action that happened first."},{"wrong":"I had went to school.","correct":"I had gone to school.","explanation":"Use V3 (past participle) after had."}]',order_index:7,prerequisite_topics:'["past-simple", "present-perfect"]'},{id:8,name:"Future Forms",slug:"future-forms",category:"tenses",cefr_level:"A2",description:"Different ways to talk about the future: will, going to, Present Continuous.",explanation_en:'English has multiple ways to talk about the future: "will" for predictions/decisions, "going to" for plans/intentions, Present Continuous for arrangements.',explanation_tr:'İngilizcede gelecek zaman için birden fazla yapı kullanılır: "will" anlık kararlar ve tahminler için, "going to" planlar ve niyetler için, Present Continuous düzenlenmiş planlar için.',examples:`[{"sentence":"I will help you.","translation":"Sana yardım edeceğim. (Anlık karar)"},{"sentence":"I'm going to study medicine.","translation":"Tıp okuyacağım. (Önceden planlanmış)"},{"sentence":"We are meeting them at 7.","translation":"Onlarla 7'de buluşuyoruz. (Düzenlenmiş)"},{"sentence":"It will probably rain tomorrow.","translation":"Yarın muhtemelen yağmur yağacak. (Tahmin)"},{"sentence":"Look at the clouds! It's going to rain.","translation":"Bulutlara bak! Yağmur yağacak. (Kanıt var)"}]`,rules:`["\\"will\\" + V1: spontaneous decisions, promises, predictions (without evidence)","\\"be going to\\" + V1: plans made before, intentions, predictions (with evidence)","Present Continuous: fixed arrangements with other people","\\"will\\" is often used in offers: \\"I'll carry that for you.\\"","\\"going to\\" is often used for intentions: \\"I'm going to learn English.\\""]`,common_mistakes:`[{"wrong":"I will to go there.","correct":"I will go there.","explanation":"Don't use \\"to\\" after \\"will\\"."},{"wrong":"I go to London next week.","correct":"I'm going to London next week.","explanation":"Use a future form, not Present Simple, for future plans."}]`,order_index:8,prerequisite_topics:'["present-simple", "present-continuous"]'},{id:9,name:"Modal Verbs",slug:"modal-verbs",category:"modals",cefr_level:"A2",description:"Can, could, should, must, may, might, would — expressing ability, possibility, permission, obligation.",explanation_en:"Modal verbs modify the meaning of the main verb to express ability, possibility, permission, obligation, advice, etc. They don't change form.",explanation_tr:"Yardımcı fiiller ana fiilin anlamını değiştirir: yetenek, olasılık, izin, zorunluluk, tavsiye vb. ifade eder. Çekimlenmezler.",examples:'[{"sentence":"I can swim.","translation":"Yüzebilirim. (Yetenek)"},{"sentence":"You should see a doctor.","translation":"Bir doktora görünmelisin. (Tavsiye)"},{"sentence":"You must wear a seatbelt.","translation":"Emniyet kemeri takmalısın. (Zorunluluk)"},{"sentence":"It might rain today.","translation":"Bugün yağmur yağabilir. (Olasılık)"},{"sentence":"Could you help me?","translation":"Bana yardım edebilir misiniz? (Rica)"}]',rules:'["Modal + base verb (V1): She can speak French.","No -s for third person: He can (NOT cans)","can = ability/permission, could = past ability/polite requests","should = advice, must = obligation/strong probability","may/might = possibility, would = hypothetical/polite requests"]',common_mistakes:`[{"wrong":"He cans swim.","correct":"He can swim.","explanation":"Modals don't take -s."},{"wrong":"I must to go.","correct":"I must go.","explanation":"Don't use \\"to\\" after modals."},{"wrong":"She can to drive.","correct":"She can drive.","explanation":"After modals, use the base form directly."}]`,order_index:9,prerequisite_topics:'["present-simple"]'},{id:10,name:"Conditionals",slug:"conditionals",category:"conditionals",cefr_level:"B1",description:"If-clauses: Zero, First, Second, and Third conditionals.",explanation_en:"Conditionals express hypothetical situations and their results. Each type uses different tenses depending on how real or likely the situation is.",explanation_tr:"Koşul cümleleri varsayımsal durumları ve sonuçlarını ifade eder. Her tür, durumun ne kadar gerçek veya olası olduğuna göre farklı zamanlar kullanır.",examples:'[{"sentence":"If you heat water, it boils.","translation":"Suyu ısıtırsan kaynar. (Zero — genel doğru)"},{"sentence":"If it rains, I will stay home.","translation":"Yağmur yağarsa evde kalacağım. (First — olası)"},{"sentence":"If I had money, I would travel.","translation":"Param olsa seyahat ederdim. (Second — hayal)"},{"sentence":"If I had studied, I would have passed.","translation":"Çalışsaydım geçerdim. (Third — geçmişte olmadı)"}]',rules:`["Zero: If + Present Simple, Present Simple (facts)","First: If + Present Simple, will + V1 (real possibility)","Second: If + Past Simple, would + V1 (unreal present)","Third: If + Past Perfect, would + have + V3 (unreal past)","Don't use \\"will\\" in the if-clause for First Conditional"]`,common_mistakes:`[{"wrong":"If I will see him, I will tell him.","correct":"If I see him, I will tell him.","explanation":"Don't use \\"will\\" in the if-clause."},{"wrong":"If I would have money, I would travel.","correct":"If I had money, I would travel.","explanation":"Use Past Simple in the if-clause for Second Conditional."}]`,order_index:10,prerequisite_topics:'["present-simple", "past-simple", "future-forms"]'},{id:11,name:"Passive Voice",slug:"passive-voice",category:"voice",cefr_level:"B1",description:"When the focus is on the action or the receiver, not the doer.",explanation_en:"We use Passive Voice when the action or its receiver is more important than who does it. Form: be + past participle (V3).",explanation_tr:"Eylemi yapan kişi değil, eylemin kendisi veya eylemi alan önemli olduğunda Edilgen Çatı kullanılır. Yapı: be + V3.",examples:'[{"sentence":"The book was written by J.K. Rowling.","translation":"Kitap J.K. Rowling tarafından yazıldı."},{"sentence":"English is spoken worldwide.","translation":"İngilizce dünya çapında konuşulur."},{"sentence":"The window was broken.","translation":"Cam kırıldı."},{"sentence":"The project will be completed next month.","translation":"Proje gelecek ay tamamlanacak."}]',rules:'["Present: am/is/are + V3 (English is spoken here.)","Past: was/were + V3 (The car was stolen.)","Future: will be + V3 (The work will be finished.)","Perfect: have/has/had been + V3 (The letter has been sent.)","Use \\"by\\" to mention the agent: \\"It was made by Apple.\\""]',common_mistakes:'[{"wrong":"The book written by her.","correct":"The book was written by her.","explanation":"You need a form of \\"be\\" in passive sentences."},{"wrong":"The window was broke.","correct":"The window was broken.","explanation":"Use the past participle (V3), not the past simple."}]',order_index:11,prerequisite_topics:'["present-simple", "past-simple"]'},{id:12,name:"Reported Speech",slug:"reported-speech",category:"speech",cefr_level:"B2",description:"Reporting what someone said without quoting them directly.",explanation_en:"Reported Speech (Indirect Speech) is used to tell someone what another person said. Tenses usually shift back.",explanation_tr:"Dolaylı Anlatım, başka birinin söylediğini aktarmak için kullanılır. Zamanlar genellikle bir adım geriye kayar.",examples:'[{"sentence":"\\"I am tired.\\" → She said (that) she was tired.","translation":"\\"Yorgunum.\\" → Yorgun olduğunu söyledi."},{"sentence":"\\"I will come.\\" → He said he would come.","translation":"\\"Geleceğim.\\" → Geleceğini söyledi."},{"sentence":"\\"Do you like it?\\" → She asked if I liked it.","translation":"\\"Beğendin mi?\\" → Beğenip beğenmediğimi sordu."}]',rules:'["Present Simple → Past Simple","Present Continuous → Past Continuous","Past Simple → Past Perfect","will → would, can → could, may → might","this → that, here → there, now → then, today → that day"]',common_mistakes:'[{"wrong":"She said she is tired.","correct":"She said she was tired.","explanation":"Shift the tense back when reporting."},{"wrong":"He asked do I like it.","correct":"He asked if I liked it.","explanation":"Use \\"if/whether\\" for yes/no questions and change word order."}]',order_index:12,prerequisite_topics:'["past-simple", "present-perfect"]'},{id:13,name:"Relative Clauses",slug:"relative-clauses",category:"clauses",cefr_level:"B1",description:"Using who, which, that, where, when to add information about nouns.",explanation_en:'Relative clauses give extra information about a noun. We use "who" for people, "which" for things, "that" for both, "where" for places, "when" for times.',explanation_tr:'Sıfat cümlecikleri bir isim hakkında ek bilgi verir. İnsanlar için "who", şeyler için "which", her ikisi için "that", yerler için "where", zamanlar için "when" kullanılır.',examples:`[{"sentence":"The woman who lives next door is a teacher.","translation":"Yan komşuda yaşayan kadın bir öğretmendir."},{"sentence":"The book which I read was interesting.","translation":"Okuduğum kitap ilginçti."},{"sentence":"That's the restaurant where we met.","translation":"Tanıştığımız restoran orası."}]`,rules:'["who = for people (subject/object)","which = for things (subject/object)","that = for people or things (informal)","where = for places, when = for times","Defining clauses: essential info (no commas)","Non-defining clauses: extra info (with commas)"]',common_mistakes:'[{"wrong":"The man which called you is my brother.","correct":"The man who called you is my brother.","explanation":"Use \\"who\\" for people."},{"wrong":"The car who I bought is red.","correct":"The car which I bought is red.","explanation":"Use \\"which\\" or \\"that\\" for things."}]',order_index:13,prerequisite_topics:'["present-simple", "past-simple"]'},{id:14,name:"Articles",slug:"articles",category:"determiners",cefr_level:"A2",description:"Using a, an, the, or no article correctly.",explanation_en:'Articles (a/an/the) come before nouns. "A/an" is indefinite (any one), "the" is definite (specific one), and sometimes no article is needed.',explanation_tr:'Artikeller (a/an/the) isimlerden önce gelir. "A/an" belirsiz (herhangi bir), "the" belirli (bilinen, spesifik), bazen hiç artikel gerekmez.',examples:'[{"sentence":"I saw a dog in the park.","translation":"Parkta bir köpek gördüm."},{"sentence":"The dog was very friendly.","translation":"Köpek çok cana yakındı. (Bildiğimiz köpek)"},{"sentence":"She is an engineer.","translation":"O bir mühendis."},{"sentence":"I love music.","translation":"Müziği seviyorum. (Genel — artikel yok)"}]',rules:'["\\"a\\" before consonant sounds: a book, a university","\\"an\\" before vowel sounds: an apple, an hour","\\"the\\" = both speakers know which one, unique things, superlatives","No article: general/uncountable concepts (I like coffee), plural generalizations (Dogs are loyal)","No article with: most countries, languages, meals, sports"]',common_mistakes:`[{"wrong":"I like the music.","correct":"I like music.","explanation":"Don't use \\"the\\" when speaking generally."},{"wrong":"She is engineer.","correct":"She is an engineer.","explanation":"Use a/an with jobs."},{"wrong":"I went to the home.","correct":"I went home.","explanation":"\\"Go home\\" doesn't use an article."}]`,order_index:14,prerequisite_topics:"[]"},{id:15,name:"Prepositions",slug:"prepositions",category:"prepositions",cefr_level:"A2",description:"In, on, at, for, with, by, about, to, from — location, time, movement, and more.",explanation_en:"Prepositions show relationships between words — location, time, direction, cause, etc. They are often unpredictable and must be learned in context.",explanation_tr:"Edatlar kelimeler arasındaki ilişkileri gösterir — yer, zaman, yön, neden vb. Çoğu zaman tahmin edilemez ve bağlam içinde öğrenilmelidir.",examples:`[{"sentence":"I live in Istanbul.","translation":"İstanbul'da yaşıyorum."},{"sentence":"The meeting is on Monday at 3 PM.","translation":"Toplantı Pazartesi saat 3'te."},{"sentence":"She's good at mathematics.","translation":"Matematikte iyidir."},{"sentence":"I'm interested in science.","translation":"Bilimle ilgileniyorum."}]`,rules:'["Time: at (specific time), on (days/dates), in (months/years/seasons/parts of day)","Place: at (specific point), on (surface), in (enclosed space)","at school/work/home, on the bus/train, in a car/taxi","Verb + preposition combos must be memorized: listen TO, look AT, wait FOR, depend ON","Adjective + preposition combos: good AT, interested IN, afraid OF, responsible FOR"]',common_mistakes:`[{"wrong":"I'm interested for science.","correct":"I'm interested in science.","explanation":"\\"Interested\\" takes \\"in\\", not \\"for\\"."},{"wrong":"I arrived to school.","correct":"I arrived at school.","explanation":"\\"Arrive\\" takes \\"at\\" (place) or \\"in\\" (city/country)."},{"wrong":"I listen music.","correct":"I listen to music.","explanation":"\\"Listen\\" requires \\"to\\"."}]`,order_index:15,prerequisite_topics:"[]"},{id:16,name:"Gerunds and Infinitives",slug:"gerunds-infinitives",category:"verb_forms",cefr_level:"B1",description:"When to use V-ing and when to use to + V after certain verbs.",explanation_en:"Some verbs are followed by gerund (V-ing), some by infinitive (to + V), and some can take both. This must mostly be memorized.",explanation_tr:"Bazı fiillerden sonra isim-fiil (V-ing), bazılarından sonra mastar (to + V) gelir. Bazıları her ikisini de alabilir. Çoğunlukla ezberlenmesi gerekir.",examples:'[{"sentence":"I enjoy reading books.","translation":"Kitap okumaktan hoşlanırım. (enjoy + V-ing)"},{"sentence":"I want to learn English.","translation":"İngilizce öğrenmek istiyorum. (want + to V)"},{"sentence":"I stopped smoking.","translation":"Sigara içmeyi bıraktım. (V-ing = eylemi bıraktı)"},{"sentence":"I stopped to smoke.","translation":"Sigara içmek için durdum. (to V = amaç)"}]',rules:'["Gerund (V-ing) after: enjoy, finish, mind, avoid, keep, suggest, consider, practice, imagine","Infinitive (to V) after: want, need, decide, hope, plan, expect, agree, refuse, learn, promise","Both (different meaning): stop, remember, forget, try, regret","After prepositions, always use gerund: interested in learning, good at cooking","As subject, use gerund: \\"Swimming is good exercise.\\""]',common_mistakes:'[{"wrong":"I enjoy to read.","correct":"I enjoy reading.","explanation":"\\"Enjoy\\" is always followed by V-ing."},{"wrong":"I want learning.","correct":"I want to learn.","explanation":"\\"Want\\" is followed by \\"to + verb\\"."}]',order_index:16,prerequisite_topics:'["present-simple", "present-continuous"]'},{id:17,name:"Comparatives and Superlatives",slug:"comparatives-superlatives",category:"adjectives",cefr_level:"A2",description:"Comparing things: bigger, the biggest, more interesting, the most interesting.",explanation_en:"Comparatives compare two things (-er/more). Superlatives show the extreme (the -est/the most). Irregular forms exist.",explanation_tr:"Karşılaştırma sıfatları iki şeyi karşılaştırır (-er/more). Üstünlük sıfatları en üst dereceyi gösterir (the -est/the most).",examples:'[{"sentence":"She is taller than me.","translation":"Benden uzun."},{"sentence":"This is the most interesting book.","translation":"Bu en ilginç kitap."},{"sentence":"He is better than his brother at chess.","translation":"Satrançta kardeşinden iyidir."}]',rules:'["Short adj (1 syllable): -er/-est (tall→taller→tallest)","Adj ending in -y: -ier/-iest (happy→happier→happiest)","Long adj (2+ syllables): more/most (interesting→more interesting→most interesting)","Irregular: good→better→best, bad→worse→worst, far→farther→farthest","Comparatives use \\"than\\": She is older than me."]',common_mistakes:'[{"wrong":"She is more tall than me.","correct":"She is taller than me.","explanation":"Short adjectives use -er, not \\"more\\"."},{"wrong":"He is the most good.","correct":"He is the best.","explanation":"\\"Good\\" is irregular: good→better→best."}]',order_index:17,prerequisite_topics:"[]"},{id:18,name:"Question Formation",slug:"question-formation",category:"sentence_structure",cefr_level:"A1",description:"How to form questions in English: yes/no questions, Wh-questions, tag questions.",explanation_en:"English questions change word order. Yes/no questions invert the subject and auxiliary. Wh-questions start with a question word.",explanation_tr:"İngilizce sorularda sözcük sırası değişir. Evet/hayır soruları yardımcı fiili öne alır. Wh-soruları soru kelimesiyle başlar.",examples:`[{"sentence":"Do you like coffee?","translation":"Kahve sever misin?"},{"sentence":"Where do you live?","translation":"Nerede yaşıyorsun?"},{"sentence":"What are you doing?","translation":"Ne yapıyorsun?"},{"sentence":"You're coming, aren't you?","translation":"Geliyorsun, değil mi?"}]`,rules:'["Yes/No: Auxiliary + Subject + Main verb? (Do you work?)","Wh-: Wh-word + Auxiliary + Subject + Main verb? (Where do you work?)","Who/What as subject: Who works here? (no auxiliary needed)","Tag questions: positive → negative tag, negative → positive tag"]',common_mistakes:'[{"wrong":"Where you live?","correct":"Where do you live?","explanation":"You need \\"do/does\\" in Present Simple questions."},{"wrong":"What means this?","correct":"What does this mean?","explanation":"Use \\"does\\" and base form for Wh-questions."}]',order_index:18,prerequisite_topics:"[]"},{id:19,name:"Word Order",slug:"word-order",category:"sentence_structure",cefr_level:"A2",description:"The standard English sentence structure: Subject-Verb-Object and adverb placement.",explanation_en:"English follows SVO (Subject-Verb-Object) word order. Adverbs and adjectives have specific positions in the sentence.",explanation_tr:"İngilizce ÖYN (Özne-Yüklem-Nesne) sözcük sırasını takip eder. Zarflar ve sıfatlar cümlede belirli yerlere konur.",examples:'[{"sentence":"I always drink coffee in the morning.","translation":"Sabahları her zaman kahve içerim."},{"sentence":"She quickly finished her homework.","translation":"Ödevini hızlıca bitirdi."}]',rules:'["Basic order: Subject + Verb + Object (I read books)","Adverbs of frequency before main verb: I always eat breakfast","Adverbs of frequency after \\"be\\": She is always late","Adjectives before nouns: a big red car","Time expressions usually at end: I work every day"]',common_mistakes:'[{"wrong":"I drink always coffee.","correct":"I always drink coffee.","explanation":"Frequency adverbs go before the main verb."},{"wrong":"She is late always.","correct":"She is always late.","explanation":"Frequency adverbs go after \\"be\\"."}]',order_index:19,prerequisite_topics:'["present-simple"]'},{id:20,name:"Subject-Verb Agreement",slug:"subject-verb-agreement",category:"sentence_structure",cefr_level:"B1",description:"Making sure the subject and verb match in number.",explanation_en:"The verb must agree with its subject in number. Singular subjects take singular verbs, plural subjects take plural verbs.",explanation_tr:"Fiil, öznesiyle sayı bakımından uyumlu olmalıdır. Tekil özneler tekil fiiller, çoğul özneler çoğul fiiller alır.",examples:'[{"sentence":"The team works hard.","translation":"Takım çok çalışır."},{"sentence":"The students are studying.","translation":"Öğrenciler ders çalışıyor."},{"sentence":"Everyone has a different opinion.","translation":"Herkesin farklı bir görüşü var."}]',rules:'["Singular: he/she/it + V-s (The dog runs.)","Plural: they/we/you + V (The dogs run.)","everyone/everybody/someone/nobody = singular verb","The news IS (uncountable nouns are singular)","Neither...nor/Either...or: verb agrees with the nearest subject"]',common_mistakes:'[{"wrong":"Everyone have a phone.","correct":"Everyone has a phone.","explanation":"\\"Everyone\\" is singular and takes \\"has\\"."},{"wrong":"The news are bad.","correct":"The news is bad.","explanation":"\\"News\\" is uncountable and takes singular verb."}]',order_index:20,prerequisite_topics:'["present-simple"]'}],grammar_exercises:[{id:1,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"She ___ (go) to school every day.",options:null,correct_answer:"goes",explanation:'Third person singular: add -es to "go".',explanation_tr:'Üçüncü tekil şahıs için "go" fiiline -es eklenir.',hint:null,context:null},{id:2,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"They ___ (not/like) cold weather.",options:null,correct_answer:"don't like",explanation:`For plural subjects, use "don't" + base verb.`,explanation_tr:`Çoğul özneler için "don't" + yalın fiil kullanılır.`,hint:null,context:null},{id:3,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"He ___ breakfast at 7:30 AM every morning.",options:'["eat","eats","eating","is eat"]',correct_answer:"eats",explanation:"He/she/it takes verb-s in Present Simple.",explanation_tr:"He/she/it öznelerinde fiile -s takısı gelir.",hint:null,context:null},{id:4,topic_id:1,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:`Find and correct the error: "She don't like swimming."`,options:null,correct_answer:"She doesn't like swimming.",explanation:`Use "doesn't" for he/she/it negatives.`,explanation_tr:`He/she/it öznelerinde olumsuzluk için "doesn't" kullanılır.`,hint:null,context:null},{id:5,topic_id:1,exercise_type:"sentence_transform",cefr_level:"A1",difficulty:2,question:'Make this sentence negative: "He plays tennis on Sundays."',options:null,correct_answer:"He doesn't play tennis on Sundays.",explanation:"Negative form: doesn't + base verb (play).",explanation_tr:`Olumsuz yaparken "doesn't" gelir ve fiil yalın kalır.`,hint:null,context:null},{id:6,topic_id:1,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"My brother ___ (watch) television in the evenings.",options:null,correct_answer:"watches",explanation:"Verbs ending in -ch add -es.",explanation_tr:"-ch ile biten fiillere 3. tekil şahısta -es eklenir.",hint:null,context:null},{id:7,topic_id:1,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"___ your sister speak German?",options:'["Do","Does","Is","Are"]',correct_answer:"Does",explanation:'Use "Does" for singular third-person questions.',explanation_tr:'3. tekil şahıs soru cümlelerinde "Does" başa gelir.',hint:null,context:null},{id:8,topic_id:1,exercise_type:"sentence_creation",cefr_level:"A1",difficulty:3,question:"Write a sentence about your daily routine using Present Simple.",options:null,correct_answer:"[free response]",explanation:'Use Present Simple to express daily habits (e.g. "I wake up early.").',explanation_tr:"Geniş zaman kullanarak günlük rutininiz hakkında bir cümle yazın.",hint:null,context:null},{id:9,topic_id:2,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"Look! The children ___ (play) in the garden.",options:null,correct_answer:"are playing",explanation:"Use am/is/are + V-ing for actions happening now.",explanation_tr:"Şu anda gerçekleşen eylemler için am/is/are + fiil-ing kullanılır.",hint:null,context:null},{id:10,topic_id:2,exercise_type:"multiple_choice",cefr_level:"A1",difficulty:1,question:"What ___ you ___ right now?",options:'["are...doing","do...do","is...doing","are...do"]',correct_answer:"are...doing",explanation:"Present Continuous question: Are + subject + V-ing?",explanation_tr:"Şimdiki zaman soru yapısı: Are you doing?",hint:null,context:null},{id:11,topic_id:2,exercise_type:"error_correction",cefr_level:"A1",difficulty:2,question:'Find and correct the error: "I am know the answer."',options:null,correct_answer:"I know the answer.",explanation:'Stative verbs like "know" are not used in continuous form.',explanation_tr:'"Know" durum bildiren bir fiildir, -ing almaz.',hint:null,context:null},{id:12,topic_id:2,exercise_type:"fill_blank",cefr_level:"A1",difficulty:1,question:"Listen! Someone ___ (knock) on the front door.",options:null,correct_answer:"is knocking",explanation:"Singular subject takes 'is' + V-ing.",explanation_tr:"Tekil özne 'is' + fiil-ing alır.",hint:null,context:null},{id:13,topic_id:3,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"Yesterday, we ___ (visit) the museum in the city center.",options:null,correct_answer:"visited",explanation:"Regular past tense adds -ed.",explanation_tr:"Düzenli geçmiş zaman fiilleri -ed alır.",hint:null,context:null},{id:14,topic_id:3,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Did you ___ the new movie last night?",options:'["see","saw","seen","seeing"]',correct_answer:"see",explanation:'After "Did", use the base verb (V1).',explanation_tr:'"Did" yardımcı fiilinden sonra fiilin 1. hali gelir.',hint:null,context:null},{id:15,topic_id:3,exercise_type:"error_correction",cefr_level:"A2",difficulty:2,question:'Find and correct the error: "They goed to Italy last summer."',options:null,correct_answer:"They went to Italy last summer.",explanation:'"Go" is an irregular verb: go -> went -> gone.',explanation_tr:'"Go" düzensiz bir fiildir, geçmiş hali "went"tir.',hint:null,context:null},{id:16,topic_id:4,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"I ___ (read) a book when the power went out.",options:null,correct_answer:"was reading",explanation:"Use was/were + V-ing for past background action.",explanation_tr:"Geçmişte yarıda kesilen süregelen eylem için was/were + V-ing kullanılır.",hint:null,context:null},{id:17,topic_id:4,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"What ___ you doing at 9 PM yesterday?",options:'["were","was","did","are"]',correct_answer:"were",explanation:'Use "were" with "you" in past continuous.',explanation_tr:'"You" öznesi ile geçmiş zamanda "were" kullanılır.',hint:null,context:null},{id:18,topic_id:5,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"I ___ never ___ (see) such a beautiful sunset before.",options:null,correct_answer:"have...seen",explanation:"Present perfect for life experiences: have/has + V3.",explanation_tr:"Deneyimler için have/has + V3 kullanılır.",hint:null,context:null},{id:19,topic_id:5,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:1,question:"She has not received the official letter ___.",options:'["yet","already","just","ago"]',correct_answer:"yet",explanation:'"Yet" is placed at the end of negative sentences.',explanation_tr:'Olumsuz Present Perfect cümlelerinin sonunda "yet" kullanılır.',hint:null,context:null},{id:20,topic_id:5,exercise_type:"error_correction",cefr_level:"B1",difficulty:2,question:'Find and correct the error: "I have visited Rome two years ago."',options:null,correct_answer:"I visited Rome two years ago.",explanation:"Specific finished time expressions (two years ago) require Past Simple.",explanation_tr:'Belirli geçmiş zaman ifadelerinde ("ago") Past Simple kullanılır.',hint:null,context:null},{id:21,topic_id:8,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"Look at those dark storm clouds! It ___ (rain).",options:null,correct_answer:"is going to rain",explanation:'Use "be going to" for predictions based on present evidence.',explanation_tr:'Mevcut bir kanıta dayanan tahminlerde "be going to" kullanılır.',hint:null,context:null},{id:22,topic_id:8,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Don't worry, I ___ carry that heavy bag for you.",options:'["will","am going","going to","shall to"]',correct_answer:"will",explanation:'Use "will" for spontaneous offers and decisions.',explanation_tr:'Anlık yardım teklifleri ve kararlar için "will" kullanılır.',hint:null,context:null},{id:23,topic_id:9,exercise_type:"fill_blank",cefr_level:"A2",difficulty:1,question:"Drivers ___ stop when the traffic light turns red.",options:null,correct_answer:"must",explanation:'Use "must" for strong legal obligation.',explanation_tr:'Yasal ve zorunlu kurallar için "must" kullanılır.',hint:null,context:null},{id:24,topic_id:9,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Could you please ___ me the salt?",options:'["pass","to pass","passing","passed"]',correct_answer:"pass",explanation:"Modals are followed by the bare infinitive (base form).",explanation_tr:"Modal yardımcı fiillerinden sonra fiil yalın gelir.",hint:null,context:null},{id:25,topic_id:10,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"If it ___ (snow) tomorrow, we will go skiing.",options:null,correct_answer:"snows",explanation:"First Conditional if-clause uses Present Simple.",explanation_tr:"First Conditional'da if cümlesi Geniş Zaman alır.",hint:null,context:null},{id:26,topic_id:10,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:2,question:"If I won the lottery, I ___ buy a house by the sea.",options:'["would","will","can","am going to"]',correct_answer:"would",explanation:"Second conditional main clause: would + V1.",explanation_tr:"Second Conditional ana cümlesinde would + fiil kullanılır.",hint:null,context:null},{id:27,topic_id:11,exercise_type:"fill_blank",cefr_level:"B1",difficulty:1,question:"The telephone ___ (invent) by Alexander Graham Bell.",options:null,correct_answer:"was invented",explanation:"Past passive: was/were + past participle (V3).",explanation_tr:"Geçmiş edilgen yapı: was/were + V3.",hint:null,context:null},{id:28,topic_id:11,exercise_type:"multiple_choice",cefr_level:"B1",difficulty:1,question:"English ___ in many international organizations worldwide.",options:'["is spoken","speaks","is speaking","has spoken"]',correct_answer:"is spoken",explanation:"Present passive: is/are + V3.",explanation_tr:"Geniş zaman edilgen yapı: is/are + V3.",hint:null,context:null},{id:29,topic_id:14,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"She wants to become ___ architect in the future.",options:'["an","a","the","no article"]',correct_answer:"an",explanation:'Use "an" before words starting with a vowel sound.',explanation_tr:'Sesli harfle başlayan meslek isimlerinin önüne "an" gelir.',hint:null,context:null},{id:30,topic_id:14,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"___ honesty is one of the most valued qualities.",options:'["no article","The","A","An"]',correct_answer:"no article",explanation:"Abstract nouns in a general sense take no article.",explanation_tr:"Genel anlamda kullanılan soyut isimler artikel almaz.",hint:null,context:null},{id:31,topic_id:15,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"The conference starts ___ 9:00 AM on Monday.",options:'["at","in","on","by"]',correct_answer:"at",explanation:'Use "at" for precise clock times.',explanation_tr:'Belirli saatler için "at" edatı kullanılır.',hint:null,context:null},{id:32,topic_id:15,exercise_type:"multiple_choice",cefr_level:"A2",difficulty:1,question:"Are you interested ___ learning a new foreign language?",options:'["in","at","about","with"]',correct_answer:"in",explanation:'"Interested" is always followed by the preposition "in".',explanation_tr:'"Interested" sıfatı "in" edatı ile kullanılır.',hint:null,context:null}],vocabulary_items:C,reading_materials:[{id:1,title:"My Daily Routine",content:`Every morning, I wake up at 7 o'clock. First, I wash my face and brush my teeth. Then I have breakfast. I usually eat bread and cheese and drink tea.

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
Question: What does Speaker B imply?`,options:'["They have poor eyesight","They have had disagreements with Sarah","They will arrive late","Sarah forgot to invite them"]',correct_answer:"They have had disagreements with Sarah",explanation:'"Not see eye to eye" is an idiom meaning not agreeing or having conflicts with someone.',explanation_tr:'"Not see eye to eye" kalıbı biriyle anlaşamamak, fikir ayrılığı yaşamak anlamına gelir.'},{id:20,skill:"writing",question_type:"multiple_choice",cefr_level:"A1",topic:"Basic Capitalization & Punctuation",question:"Which sentence is punctuated and capitalized correctly?",options:'["i live in Istanbul with my Sister.","I live in Istanbul with my sister.","I live in istanbul with my sister","I live In Istanbul with My Sister."]',correct_answer:"I live in Istanbul with my sister.",explanation:'Capitalize "I", proper nouns like "Istanbul", and end with a period. Common nouns like "sister" are lowercase.',explanation_tr:'Cümle başı ve "I" zamiri, şehir isimleri büyük harfle başlar; "sister" gibi cins isimler küçük kalır.'},{id:21,skill:"writing",question_type:"multiple_choice",cefr_level:"A2",topic:"Connectors",question:"I was very tired, ___ I still managed to finish my project on time.",options:'["so","because","but","since"]',correct_answer:"but",explanation:'"But" introduces a contrasting fact to being tired.',explanation_tr:'Yorgun olma durumuyla projenin bitmesi arasındaki zıtlığı "but" bağlacı ifade eder.'},{id:22,skill:"writing",question_type:"multiple_choice",cefr_level:"B1",topic:"Formal Email Register",question:"Which closing sentence is most appropriate for a formal job application email?",options:'["Catch you later, hope you like my CV!","I look forward to hearing from you at your earliest convenience.","Write me back whenever you want.","See ya soon, best vibes!"]',correct_answer:"I look forward to hearing from you at your earliest convenience.",explanation:'Professional correspondence requires standard courteous formulas like "I look forward to hearing from you...".',explanation_tr:'Resmi iş yazışmalarında profesyonel nezaket kalıbı "I look forward to hearing from you..." kullanılır.'},{id:23,skill:"writing",question_type:"multiple_choice",cefr_level:"B2",topic:"Cohesive Devices",question:"The initial trial produced promising results. ___, subsequent studies failed to replicate the same outcomes.",options:'["However","Furthermore","Consequently","In addition"]',correct_answer:"However",explanation:'"However" shows an unexpected contrast or limitation following a positive statement.',explanation_tr:'İlk cümlenin olumlu sonucuna karşı sonraki çalışmaların başarısızlığını zıtlık belirten "However" bağlar.'},{id:24,skill:"speaking",question_type:"multiple_choice",cefr_level:"A1",topic:"Greetings & Introductions",question:'When meeting someone for the first time in a polite setting, how do you respond to "How do you do?"',options:'["I do fine, thanks.","How do you do?","I am doing homework.","Yes, I do."]',correct_answer:"How do you do?",explanation:'In formal British English, the traditional reply to "How do you do?" is also "How do you do?" or "Pleased to meet you".',explanation_tr:'Resmi İngilizcede ilk tanışmada söylenen "How do you do?" kalıbına geleneksel olarak yine "How do you do?" veya "Pleased to meet you" ile yanıt verilir.'},{id:25,skill:"speaking",question_type:"multiple_choice",cefr_level:"A2",topic:"Polite Requests",question:"What is the most polite way to ask for a glass of water in a cafe?",options:'["Give me water now.","Could I have a glass of water, please?","I want water quickly.","Water is needed by me."]',correct_answer:"Could I have a glass of water, please?",explanation:'"Could I have... please?" is standard polite English for ordering or requesting.',explanation_tr:'Rica ve siparişlerde "Could I have..., please?" en doğal ve kibar yapıdır.'},{id:26,skill:"speaking",question_type:"multiple_choice",cefr_level:"B1",topic:"Giving Advice",question:"A friend has an intense headache before an exam. What sounds most natural?",options:'["You had better get some rest and take an aspirin.","You must to sleep right now without excuses.","Why you not sleep?","It is compulsory for you to rest."]',correct_answer:"You had better get some rest and take an aspirin.",explanation:'"You had better..." is used for urgent, direct advice where negative consequences might follow.',explanation_tr:'"You had better (do sth)" yapısı acil ve önemli tavsiyeler vermek için en doğal kullanımdır.'},{id:27,skill:"speaking",question_type:"multiple_choice",cefr_level:"B2",topic:"Diplomatic Disagreement",question:"In a professional meeting, how do you disagree diplomatically with a colleague's proposal?",options:`["That idea is completely wrong and makes no sense.","I see where you're coming from, but we should also consider the budgetary constraints.","Shut up, my plan is superior.","You are mistaken about everything."]`,correct_answer:"I see where you're coming from, but we should also consider the budgetary constraints.",explanation:"Diplomatic English acknowledges the other speaker's perspective before introducing reservations or alternatives.",explanation_tr:`Diplomatik iş İngilizcesinde önce karşı tarafın görüşü onaylanır ("I see where you're coming from"), ardından çekince sunulur.`},{id:28,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A1",topic:"Past -ed Endings",question:'In which word is the "-ed" pronounced as an extra syllable /ɪd/ or /əd/?',options:'["Worked","Played","Needed","Watched"]',correct_answer:"Needed",explanation:'The "-ed" ending is pronounced as /ɪd/ only after verbs ending in /t/ or /d/ sounds (need -> needed).',explanation_tr:"Düzenli fiillerde -ed takısı sadece /t/ ve /d/ seslerinden sonra ayrı bir hece (/ɪd/) olarak okunur (need -> needed)."},{id:29,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"A2",topic:"Silent Letters",question:'Which letter is SILENT in the word "doubt"?',options:'["d","o","u","b"]',correct_answer:"b",explanation:'The letter "b" is completely silent in "doubt" /daʊt/, just like in "debt" and "subtle".',explanation_tr:'"Doubt" kelimesindeki "b" harfi okunmaz (sessiz harftir: /daʊt/).'},{id:30,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B1",topic:"Word Stress & Part of Speech",question:'When "record" is used as a VERB ("They ___ a podcast"), where is the stress?',options:'["On the FIRST syllable (RE-cord)","On the SECOND syllable (re-CORD)","Both syllables equally","Neither"]',correct_answer:"On the SECOND syllable (re-CORD)",explanation:"Two-syllable noun/verb pairs: nouns stress the 1st syllable (a REcord), verbs stress the 2nd syllable (to reCORD).",explanation_tr:"İki heceli isim/fiil çiftlerinde isimlerde vurgu ilk hecede (REcord), fiillerde ikinci hecededir (reCORD)."},{id:31,skill:"pronunciation",question_type:"multiple_choice",cefr_level:"B2",topic:"Vowel Length Minimal Pairs",question:"Which pair of words contains contrasting short /ɪ/ vs long /iː/ vowel sounds?",options:'["Ship and Sheep","Cat and Cut","Pen and Pan","Full and Fool"]',correct_answer:"Ship and Sheep",explanation:'"Ship" has the short lax vowel /ʃɪp/ while "sheep" has the long tense vowel /ʃiːp/.',explanation_tr:'"Ship" kısa /ɪ/ sesi, "sheep" ise uzun /iː/ sesi barındıran klasik bir minimal çift örneğidir.'},{id:32,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A1",topic:"Basic Word Order (SVO)",question:"Choose the sentence with the correct English word order:",options:'["Always he drinks coffee in the morning.","He drinks always coffee in the morning.","He always drinks coffee in the morning.","In the morning coffee he always drinks."]',correct_answer:"He always drinks coffee in the morning.",explanation:"Adverbs of frequency (always, often, rarely) go between the subject and the main verb.",explanation_tr:"Sıklık zarfları (always, often vb.) özne ile asıl fiil arasına gelir."},{id:33,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"A2",topic:"Indirect Questions",question:"Choose the correct indirect question formulation:",options:'["Could you tell me where is the station?","Could you tell me where the station is?","Could you tell me where does the station be?","Could you tell me where is station located?"]',correct_answer:"Could you tell me where the station is?",explanation:'In indirect questions, the clause returns to statement order: "where + subject + verb".',explanation_tr:'Dolaylı sorularda ("Could you tell me..."), soru cümlesi düz cümle sırasına (özne + fiil) döner.'},{id:34,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B1",topic:"Relative Clause Placement",question:"Which sentence correctly places the defining relative clause?",options:'["The woman who designed our website received an award.","The woman received an award who designed our website.","The woman who received an award our website designed.","Who designed our website the woman received an award."]',correct_answer:"The woman who designed our website received an award.",explanation:'A relative clause must directly follow the noun it modifies ("the woman who designed...").',explanation_tr:"Sıfat cümlecikleri niteledikleri ismin hemen ardından gelmelidir."},{id:35,skill:"sentence_formation",question_type:"multiple_choice",cefr_level:"B2",topic:"Inversion after Negative Adverbials",question:"Seldom ___ such an inspiring speech in my entire career.",options:'["I have heard","have I heard","I heard","did I heard"]',correct_answer:"have I heard",explanation:"Negative or restrictive adverbials at the beginning of a sentence (seldom, rarely, never) require auxiliary inversion.",explanation_tr:'Cümle başına gelen kısıtlayıcı/olumsuz zarflar ("Seldom, Never") yardımcı fiilin öznenin önüne geçmesini (inversion) zorunlu kılar.'},{id:36,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A1",topic:"Context Clues",question:'"Liam took out his umbrella because dark clouds filled the sky." Why did Liam take out his umbrella?',options:'["It was very sunny","He expected rain","He wanted to play football","He was going to sleep"]',correct_answer:"He expected rain",explanation:"Dark clouds signify incoming precipitation, so taking out an umbrella indicates expecting rain.",explanation_tr:"Gökyüzündeki kara bulutlar yağmur beklentisine işaret eder."},{id:37,skill:"comprehension",question_type:"multiple_choice",cefr_level:"A2",topic:"Idiomatic Sense",question:'If someone says "I am under the weather today", they mean:',options:'["They are standing outside in the rain","They feel slightly unwell or sick","They love sunny days","They are flying in an airplane"]',correct_answer:"They feel slightly unwell or sick",explanation:'"Under the weather" is a very common idiom meaning feeling sick or indisposed.',explanation_tr:'"Under the weather" kendini hasta veya keyifsiz hissetmek anlamına gelen yaygın bir deyimdir.'},{id:38,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B1",topic:"Thinking in English vs Translating",question:'In Turkish, you say "İyi ki doğdun". What is the natural, native English thought process and expression?',options:'["Good that you were born","Happy Birthday","Nice birthday to you","It is well you came into the world"]',correct_answer:"Happy Birthday",explanation:'English does not translate the literal Turkish sentiment; natural English thinking directly maps to "Happy Birthday".',explanation_tr:'Türkçedeki "İyi ki doğdun" kalıbı kelimesi kelimesine çevrilmez; İngilizce düşüncede karşılığı doğrudan "Happy Birthday"dir.'},{id:39,skill:"comprehension",question_type:"multiple_choice",cefr_level:"B2",topic:"Pragmatic Implicature",question:`When a manager says, "You might want to review section three before tomorrow's client presentation," this is pragmatically:`,options:'["A neutral observation you can freely ignore","A polite but firm directive that section three contains flaws that need fixing","A compliment on section three","A question about your availability"]',correct_answer:"A polite but firm directive that section three contains flaws that need fixing",explanation:'In Anglo-American corporate communication, "You might want to..." is an understated, polite command to fix something.',explanation_tr:'İngilizce iş kültüründe "You might want to..." şeklindeki yumuşatılmış ifadeler nezaketen öneri süsü verilmiş net talimatlardır.'},{id:40,skill:"communication",question_type:"multiple_choice",cefr_level:"A1",topic:"Asking for Help",question:"You are lost in London. What is the most natural way to stop a stranger on the street?",options:'["Stop walking, human!","Excuse me, could you help me?","Hey, you listen to me.","Where is hotel?"]',correct_answer:"Excuse me, could you help me?",explanation:'"Excuse me..." is the universally expected, polite opening to approach a stranger in English.',explanation_tr:'Bir yabancının dikkatini çekip yardım istemenin en evrensel ve kibar yolu "Excuse me, could you help me?"dir.'},{id:41,skill:"communication",question_type:"multiple_choice",cefr_level:"A2",topic:"Clarification Strategy",question:"If you did not understand what someone just said, which phrase asks them to repeat naturally?",options:'["What? Speak louder!","Sorry, could you say that again, please?","You are talking nonsense.","Repeat your words immediately."]',correct_answer:"Sorry, could you say that again, please?",explanation:'"Sorry, could you say that again, please?" is courteous and effective for conversational repair.',explanation_tr:'Anlaşılmayan bir şeyi tekrar ettirmenin en doğal iletişim stratejisi "Sorry, could you say that again, please?"dir.'},{id:42,skill:"communication",question_type:"multiple_choice",cefr_level:"B1",topic:"Polite Interruption",question:"You need to ask a brief question during a team discussion. What is the best way to interject?",options:`["Stop speaking now, my turn.","Sorry to interrupt, but may I quickly clarify something?","Listen to me instead.","That's enough from you."]`,correct_answer:"Sorry to interrupt, but may I quickly clarify something?",explanation:'"Sorry to interrupt, but may I quickly..." allows polite turn-taking without sounding aggressive.',explanation_tr:'Bir konuşmayı kibarca bölüp araya girmek için "Sorry to interrupt, but may I quickly..." kullanılır.'},{id:43,skill:"communication",question_type:"multiple_choice",cefr_level:"B2",topic:"Managing Hesitations & Fluency",question:"When asked a complex question in an interview and you need 5 seconds to think, which filler maintains fluent communication best?",options:`["Dead silence for 10 seconds staring at the floor","That's a really thoughtful question. Let me reflect on that for a second...","Wait! Don't talk to me!","I don't know anything."]`,correct_answer:"That's a really thoughtful question. Let me reflect on that for a second...",explanation:"Native speakers use conversational bridge phrases to buy cognitive processing time without breaking conversational flow.",explanation_tr:`Akıcılığı korumak ve düşünme süresi kazanmak için "That's a great question, let me reflect on that..." gibi köprü ifadeler kullanılır.`}]};class ${constructor(){this.currentUser=null,this.initAuth()}initAuth(){try{const e=localStorage.getItem("linguaforge_active_user"),t=this.getAccounts();if(e&&t.length>0){const i=t.find(n=>n.username.toLowerCase()===e.toLowerCase());i&&(this.currentUser=i)}}catch(e){console.warn("Error initializing auth:",e)}}getAccounts(){try{const e=localStorage.getItem("linguaforge_users");return e?JSON.parse(e):[]}catch{return[]}}saveAccounts(e){try{localStorage.setItem("linguaforge_users",JSON.stringify(e))}catch{}}getCurrentUser(){return this.currentUser}async login(e,t){const i=(e||"").trim().toLowerCase(),n=(t||"").trim(),s=this.getAccounts().find(r=>r.username.toLowerCase()===i);if(!s)throw new Error("Kullanıcı bulunamadı. Lütfen kullanıcı adınızı kontrol edin veya yeni hesap açın.");if(s.password&&s.password!==n)throw new Error("Şifre hatalı! Lütfen şifrenizi tekrar deneyin.");return this.currentUser=s,localStorage.setItem("linguaforge_active_user",s.username),this.ensureUserStorage(s.username),s}async register(e,t,i){const n=(e||"").trim().toLowerCase(),a=(t||"").trim(),s=(i||"").trim()||e;if(!n)throw new Error("Kullanıcı adı boş bırakılamaz.");if(n.length<2)throw new Error("Kullanıcı adı en az 2 karakter olmalıdır.");if(!a)throw new Error("Şifre boş bırakılamaz.");const r=this.getAccounts();if(r.some(l=>l.username.toLowerCase()===n))throw new Error("Bu kullanıcı adı zaten alınmış. Farklı bir kullanıcı adı deneyin veya giriş yapın.");const o={id:"u_"+Date.now(),username:n,displayName:s,password:a,createdAt:new Date().toISOString(),cefr_level:"A1"};return r.push(o),this.saveAccounts(r),this.currentUser=o,localStorage.setItem("linguaforge_active_user",o.username),this.initZeroUserStorage(n),o}async loginOrRegisterGuest(){const e="misafir",t=this.getAccounts();let i=t.find(n=>n.username===e);return i||(i={id:"guest_"+Date.now(),username:e,displayName:"Misafir Öğrenci",password:"123",createdAt:new Date().toISOString(),cefr_level:"A1"},t.push(i),this.saveAccounts(t),this.initZeroUserStorage(e)),this.currentUser=i,localStorage.setItem("linguaforge_active_user",i.username),this.ensureUserStorage(e),i}logout(){this.currentUser=null,localStorage.removeItem("linguaforge_active_user")}getUserStorageKey(e){return`linguaforge_u_${this.currentUser?this.currentUser.username:"guest"}_${e}`}getUserData(e){try{const t=localStorage.getItem(this.getUserStorageKey(e));return t?JSON.parse(t):null}catch{return null}}setUserData(e,t){try{localStorage.setItem(this.getUserStorageKey(e),JSON.stringify(t))}catch{}}initZeroUserStorage(e){const t=`linguaforge_u_${e}_`,i={xp:0,level:1,current_streak:1,longest_streak:1,total_study_minutes:0,total_words_learned:0,total_grammar_mastered:0,total_errors_resolved:0,last_study_date:new Date().toISOString().slice(0,10)},n={grammar:{level:"A1",sublevel:"-",score:0},vocabulary:{level:"A1",sublevel:"-",score:0},reading:{level:"A1",sublevel:"-",score:0},listening:{level:"A1",sublevel:"-",score:0},writing:{level:"A1",sublevel:"-",score:0},speaking:{level:"A1",sublevel:"-",score:0},pronunciation:{level:"A1",sublevel:"-",score:0},sentence_formation:{level:"A1",sublevel:"-",score:0},comprehension:{level:"A1",sublevel:"-",score:0},communication:{level:"A1",sublevel:"-",score:0}},a=[],s=(I.vocabulary_items||[]).map((r,o)=>{const l=(typeof r.examples=="string"?JSON.parse(r.examples||"[]"):r.examples)||r.example_sentences||[];return{...r,id:r.id||o+1,examples:l,example_sentences:l,synonyms:typeof r.synonyms=="string"?JSON.parse(r.synonyms||"[]"):r.synonyms||[],antonyms:typeof r.antonyms=="string"?JSON.parse(r.antonyms||"[]"):r.antonyms||[],collocations:typeof r.collocations=="string"?JSON.parse(r.collocations||"[]"):r.collocations||[],interval:0,ease_factor:2.5,repetitions:0,due:!0}});localStorage.setItem(t+"stats",JSON.stringify(i)),localStorage.setItem(t+"skills",JSON.stringify(n)),localStorage.setItem(t+"errors",JSON.stringify(a)),localStorage.setItem(t+"srs_items",JSON.stringify(s)),localStorage.removeItem(t+"latest_assessment"),localStorage.setItem(t+"completed_tasks",JSON.stringify([])),localStorage.setItem(t+"daily_tasks_date",new Date().toISOString().slice(0,10))}syncVocabularyArchive(e){const i=`linguaforge_u_${e||(this.currentUser?this.currentUser.username:"misafir")}_`;try{const n=localStorage.getItem(i+"srs_items");let a=n?JSON.parse(n):[];const s=new Set(a.map(l=>(l.word||"").toLowerCase())),r=[];(I.vocabulary_items||[]).forEach((l,d)=>{if(!s.has((l.word||"").toLowerCase())){const p=(typeof l.examples=="string"?JSON.parse(l.examples||"[]"):l.examples)||l.example_sentences||[];r.push({...l,id:l.id||1e3+d,examples:p,example_sentences:p,synonyms:typeof l.synonyms=="string"?JSON.parse(l.synonyms||"[]"):l.synonyms||[],antonyms:typeof l.antonyms=="string"?JSON.parse(l.antonyms||"[]"):l.antonyms||[],collocations:typeof l.collocations=="string"?JSON.parse(l.collocations||"[]"):l.collocations||[],interval:0,ease_factor:2.5,repetitions:0,due:a.length<5||l.cefr_level==="A1"&&a.filter(g=>g.due).length<20})}}),r.length>0&&(a=a.concat(r),localStorage.setItem(i+"srs_items",JSON.stringify(a)))}catch(n){console.warn("Error syncing vocabulary archive:",n)}}ensureUserStorage(e){const t=`linguaforge_u_${e}_`;if(!localStorage.getItem(t+"stats")||!localStorage.getItem(t+"skills")){this.initZeroUserStorage(e);return}this.syncVocabularyArchive(e)}recordDailyTaskProgress(e){try{const t=new Date().toISOString().slice(0,10),i=this.getUserData("daily_tasks_date");let n=this.getUserData("completed_tasks")||[];if(i!==t&&(n=[],this.setUserData("daily_tasks_date",t)),!n.includes(e)){n.push(e),this.setUserData("completed_tasks",n);const a=this.getUserData("stats")||{xp:0};a.xp=(a.xp||0)+20;let s=!1;return n.length>=4&&!this.getUserData("daily_bonus_claimed_"+t)&&(a.xp+=50,this.setUserData("daily_bonus_claimed_"+t,!0),s=!0),this.setUserData("stats",a),{success:!0,taskId:e,completedTasks:n,xpGained:s?70:20,bonusAwarded:s}}return{success:!0,taskId:e,completedTasks:n,xpGained:0}}catch(t){return console.warn("Error recording daily task progress:",t),{success:!1}}}async completeDailyTask(e,t=!0){const i=new Date().toISOString().slice(0,10),n=this.getUserData("daily_tasks_date");let a=this.getUserData("completed_tasks")||[];n!==i&&(a=[],this.setUserData("daily_tasks_date",i));const s=this.getUserData("stats")||{xp:0};return t?a.includes(e)||(a.push(e),s.xp=(s.xp||0)+20,a.length>=4&&!this.getUserData("daily_bonus_claimed_"+i)&&(s.xp+=50,this.setUserData("daily_bonus_claimed_"+i,!0))):a.includes(e)&&(a=a.filter(r=>r!==e),s.xp=Math.max(0,(s.xp||0)-20)),this.setUserData("completed_tasks",a),this.setUserData("stats",s),{success:!0,completedTasks:a,stats:s}}async getDashboard(){if(!this.currentUser)throw new Error("AUTH_REQUIRED");this.syncVocabularyArchive();const e=this.getUserData("stats")||{xp:0,level:1,current_streak:1,longest_streak:1,total_study_minutes:0,total_words_learned:0,total_grammar_mastered:0,total_errors_resolved:0},t=this.getUserData("skills")||{grammar:{level:"A1",sublevel:"",score:0},vocabulary:{level:"A1",sublevel:"",score:0},reading:{level:"A1",sublevel:"",score:0},listening:{level:"A1",sublevel:"",score:0},writing:{level:"A1",sublevel:"",score:0},speaking:{level:"A1",sublevel:"",score:0},pronunciation:{level:"A1",sublevel:"",score:0},sentence_formation:{level:"A1",sublevel:"",score:0},comprehension:{level:"A1",sublevel:"",score:0},communication:{level:"A1",sublevel:"",score:0}},i=this.getUserData("errors")||[],n=this.getUserData("srs_items")||[],a=n.filter(d=>d.due).length,s=this.getUserData("latest_assessment")||{overall_cefr:"A1",results:{overallCEFR:"A1"}},r=new Date().toISOString().slice(0,10),o=this.getUserData("daily_tasks_date");let l=this.getUserData("completed_tasks")||[];return o!==r&&(l=[],this.setUserData("completed_tasks",l),this.setUserData("daily_tasks_date",r)),{user:{username:this.currentUser.username,displayName:this.currentUser.displayName||this.currentUser.username,onboardingComplete:!0},stats:e,skills:t,dailyTasks:{date:r,tasks:[{id:"task-vocab",skill:"vocabulary",description:"Kelime Kartlarından en az 5 tanesini tekrar et veya yeni kelime öğren",targetView:"vocabulary"},{id:"task-grammar",skill:"grammar",description:"Gramer Akademisinden 1 konuyu ve interaktif alıştırmasını tamamla",targetView:"grammar"},{id:"task-reading",skill:"reading",description:"1 okuma metnini incele ve anlama sorularını yanıtla",targetView:"reading"},{id:"task-speaking",skill:"speaking",description:"1 konuşma senaryosunda sesli pratik yap veya diyalog kur",targetView:"speaking"}],completed_tasks:l},recentErrors:i.filter(d=>!d.resolved),reviewStats:{dueToday:a,totalItems:n.length},weekStudy:[{date:"2026-09-21",total_minutes:0},{date:"2026-09-22",total_minutes:0},{date:"2026-09-23",total_minutes:0},{date:"2026-09-24",total_minutes:0},{date:"2026-09-25",total_minutes:0},{date:"2026-09-26",total_minutes:0},{date:"2026-09-27",total_minutes:e.total_study_minutes||0}],latestAssessment:s}}async startAssessment(){const e=Date.now();return this.currentAssessment={id:e,answers:[],correctCount:0,totalCount:0,skillsEvaluated:{}},{assessmentId:e,skills:["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],message:"Seviye belirleme sınavı başlatıldı."}}async skipAssessmentToA1(){const e={overallCEFR:"A1",totalQuestions:0,totalCorrect:0,skills:{grammar:{level:"A1",sublevel:"",score:10},vocabulary:{level:"A1",sublevel:"",score:10},reading:{level:"A1",sublevel:"",score:10},listening:{level:"A1",sublevel:"",score:10},writing:{level:"A1",sublevel:"",score:10},speaking:{level:"A1",sublevel:"",score:10},pronunciation:{level:"A1",sublevel:"",score:10},sentence_formation:{level:"A1",sublevel:"",score:10},comprehension:{level:"A1",sublevel:"",score:10},communication:{level:"A1",sublevel:"",score:10}}};return this.setUserData("latest_assessment",e),e}async getAssessmentQuestions(e,t){const a=(I.assessment_question_bank||[]).filter(s=>s.skill===t).slice(0,3).map(s=>({id:s.id,type:s.question_type,question:s.question,options:typeof s.options=="string"?JSON.parse(s.options):s.options,cefrLevel:s.cefr_level,topic:s.topic}));return{skill:t,targetLevel:"A1-A2",questions:a}}async submitAssessmentAnswer(e,t,i){const n=I.assessment_question_bank||[],a=n.find(l=>l.id===t)||n[0],s=(i||"").toString().trim().toLowerCase().replace(/^["']|["']$/g,""),r=(a.correct_answer||"").toString().trim().toLowerCase().replace(/^["']|["']$/g,""),o=s===r;if(this.currentAssessment&&(this.currentAssessment.totalCount=(this.currentAssessment.totalCount||0)+1,o&&(this.currentAssessment.correctCount=(this.currentAssessment.correctCount||0)+1),this.currentAssessment.skillsEvaluated[a.skill]||(this.currentAssessment.skillsEvaluated[a.skill]={correct:0,total:0}),this.currentAssessment.skillsEvaluated[a.skill].total+=1,o&&(this.currentAssessment.skillsEvaluated[a.skill].correct+=1)),!o){const l=this.getUserData("errors")||[];l.unshift({id:Date.now(),skill:a.skill,error_text:i,correction:a.correct_answer,explanation:a.explanation_tr||a.explanation||"Seviye belirleme sınavında yapılan hata.",occurrence_count:1,resolved:0}),this.setUserData("errors",l)}return{questionId:t,isCorrect:o,score:o?1:0,correctAnswer:a.correct_answer,explanation:a.explanation,explanationTr:a.explanation_tr||a.explanation,skill:a.skill,cefrLevel:a.cefr_level,topic:a.topic}}async completeAssessment(e){const t=this.currentAssessment||{correctCount:0,totalCount:1,skillsEvaluated:{}},i=Math.max(t.totalCount||1,1),n=t.correctCount||0,a=n/i;let s="A1";a>=.85?s="B2":a>=.65?s="B1":a>=.4?s="A2":s="A1";const r=["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],o={};r.forEach(g=>{const k=t.skillsEvaluated[g]||{correct:0,total:1},f=k.total>0?k.correct/k.total:0;let _="A1";f>=.85?_="B2":f>=.65?_="B1":f>=.4?_="A2":_="A1";const A=Math.round(f*100);o[g]={level:_,sublevel:"",score:A,correct:k.correct,total:k.total,accuracy:A}});const l={overallCEFR:s,skills:o,weakAreas:[{skill:"speaking",level:"A1",detail:"Günlük basit diyaloglar ve temel kelimeler"},{skill:"grammar",level:"A1",detail:"To Be fiili ve temel zaman kalıpları"}],strongAreas:[{skill:"comprehension",level:s,detail:"Temel bağlam kavrama"}],totalQuestions:i,totalCorrect:n};this.setUserData("latest_assessment",l);const d=this.getUserData("skills")||{};for(const[g,k]of Object.entries(o))d[g]={level:k.level,sublevel:k.sublevel,score:k.score};this.setUserData("skills",d);const p=this.getUserData("stats");return p&&(p.xp=(p.xp||0)+50,this.setUserData("stats",p)),l}async getGrammarTopics(){return(I.grammar_topics||[]).map(e=>({...e,examples:typeof e.examples=="string"?JSON.parse(e.examples):e.examples,rules:typeof e.rules=="string"?JSON.parse(e.rules):e.rules,common_mistakes:typeof e.common_mistakes=="string"?JSON.parse(e.common_mistakes):e.common_mistakes,prerequisite_topics:typeof e.prerequisite_topics=="string"?JSON.parse(e.prerequisite_topics||"[]"):e.prerequisite_topics}))}async getGrammarTopic(e){const t=await this.getGrammarTopics(),i=t.find(a=>a.slug===e)||t[0],n=(I.grammar_exercises||[]).filter(a=>a.topic_id===i.id).map(a=>({...a,prompt:a.question||a.prompt||"",question:a.question||a.prompt||"",options:typeof a.options=="string"?JSON.parse(a.options):a.options}));return{topic:i,exercises:n}}async submitGrammarExercise(e,t){const i=I.grammar_exercises||[],n=i.find(p=>p.id===e)||i[0],a=p=>(p||"").trim().toLowerCase().replace(/[.,!?;:"'’]/g,"").replace(/\.{2,}/g," ").replace(/\s+/g," ").replace(/\bdon't\b|\bdont\b/g,"do not").replace(/\bdoesn't\b|\bdoesnt\b/g,"does not").replace(/\bdidn't\b|\bdidnt\b/g,"did not").replace(/\bcan't\b|\bcant\b/g,"cannot").replace(/\bisn't\b|\bisnt\b/g,"is not").replace(/\baren't\b|\barent\b/g,"are not").replace(/\bwasn't\b|\bwasnt\b/g,"was not").replace(/\bweren't\b|\bwerent\b/g,"were not").replace(/\bwon't\b|\bwont\b/g,"will not").replace(/\bhasn't\b|\bhasnt\b/g,"has not").replace(/\bhaven't\b|\bhavent\b/g,"have not").trim(),s=a(t),r=a(n.correct_answer),l=n.correct_answer==="[free response]"||n.exercise_type==="sentence_creation"?s.length>=3:s===r,d=this.getUserData("stats")||{xp:0};if(d.xp=(d.xp||0)+(l?15:5),l&&(d.total_grammar_mastered=(d.total_grammar_mastered||0)+1),this.setUserData("stats",d),this.recordDailyTaskProgress("task-grammar"),!l){const p=this.getUserData("errors")||[];p.unshift({id:Date.now(),skill:"grammar",error_text:t,correction:n.correct_answer,explanation:n.explanation_tr||n.explanation||"Gramer kural hatası.",occurrence_count:1,resolved:0}),this.setUserData("errors",p)}return{isCorrect:l,correctAnswer:n.correct_answer,feedback:l?"Tebrikler! Doğru cevap (+15 XP).":`Yanlış. Doğru biçim: ${n.correct_answer}`,explanation:n.explanation,explanationTr:n.explanation_tr||n.explanation}}async getVocabularyItems(){this.syncVocabularyArchive();const e=(this.getUserData("srs_items")||[]).map(t=>{const i=(typeof t.examples=="string"?JSON.parse(t.examples):t.examples)||t.example_sentences||[],n=(typeof t.collocations=="string"?JSON.parse(t.collocations):t.collocations)||[];return{...t,examples:i,example_sentences:i,collocations:n}});return{items:e,total:e.length}}async getReviewQueue(){this.syncVocabularyArchive();const e=(this.getUserData("srs_items")||[]).filter(t=>t.due).map(t=>{const i=(typeof t.examples=="string"?JSON.parse(t.examples):t.examples)||t.example_sentences||[],n=(typeof t.collocations=="string"?JSON.parse(t.collocations):t.collocations)||[];return{...t,examples:i,example_sentences:i,collocations:n}});return{items:e,dueToday:e.length}}async submitReview(e,t){const i=this.getUserData("srs_items")||[],n=i.findIndex(s=>s.id===e);n!==-1&&(t>=2&&(i[n].due=!1,i[n].repetitions=(i[n].repetitions||0)+1),this.setUserData("srs_items",i));const a=this.getUserData("stats")||{xp:0};return a.xp=(a.xp||0)+(t>=2?10:3),a.total_words_learned=(a.total_words_learned||0)+(t>=2?1:0),this.setUserData("stats",a),this.recordDailyTaskProgress("task-vocab"),{success:!0}}async loadWordPack(e="A1"){this.syncVocabularyArchive();const t=this.getUserData("srs_items")||[];let i=0;t.forEach(a=>{(e==="all"||a.cefr_level&&a.cefr_level.toUpperCase()===e.toUpperCase())&&(a.due||(a.due=!0,i++))}),i===0&&t.forEach(a=>{(e==="all"||a.cefr_level&&a.cefr_level.toUpperCase()===e.toUpperCase())&&(a.due=!0,i++)}),this.setUserData("srs_items",t);const n=t.filter(a=>a.due).length;return{success:!0,activatedCount:i,totalDue:n,level:e}}async fetchOnlineWord(e){var p,g,k;const t=(e||"").trim().toLowerCase().replace(/[^a-z-]/g,"");if(!t)throw new Error("Lütfen geçerli bir İngilizce kelime girin.");let i=null;try{const f=new AbortController,_=setTimeout(()=>f.abort(),6e3),A=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(t)}`,{signal:f.signal});if(clearTimeout(_),A.ok){const S=await A.json();Array.isArray(S)&&S.length>0&&(i=S[0])}}catch(f){console.warn("Free Dictionary API call failed or timed out:",f)}let n="";try{const f=new AbortController,_=setTimeout(()=>f.abort(),4e3),A=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURIComponent(t)}`,S=await fetch(A,{signal:f.signal});if(clearTimeout(_),S.ok){const m=await S.json();n=((g=(p=m==null?void 0:m[0])==null?void 0:p[0])==null?void 0:g[0])||""}}catch{}let a=(i==null?void 0:i.phonetic)||"",s="";if(i!=null&&i.phonetics&&Array.isArray(i.phonetics))for(const f of i.phonetics)!a&&f.text&&(a=f.text),!s&&f.audio&&(s=f.audio);let r="kelime",o="",l="";const d=[];return i!=null&&i.meanings&&Array.isArray(i.meanings)&&(r=((k=i.meanings[0])==null?void 0:k.partOfSpeech)||"kelime",i.meanings.forEach(f=>{var A;const _=(A=f.definitions)==null?void 0:A[0];_&&(o||(o=_.definition||""),!l&&_.example&&(l=_.example),d.push({partOfSpeech:f.partOfSpeech,definition:_.definition,example:_.example||null,synonyms:(f.synonyms||[]).slice(0,4)}))})),{word:t,phonetic:a||`/${t}/`,audioUrl:s||null,part_of_speech:r,definition_tr:n||"Türkçe karşılığı",definition_en:o||"English definition not found",example:l||"",meanings:d,foundOnline:!!i}}async addCustomWord(e,t,i="A1",n="",a="",s="kelime"){const r=this.getUserData("srs_items")||[],o=(e||"").trim();if(!o)return null;const l=r.find(p=>(p.word||"").toLowerCase()===o.toLowerCase());if(l)return l.due=!0,t&&(!l.definition_tr||l.definition_tr==="-")&&(l.definition_tr=t),a&&!l.phonetic&&(l.phonetic=a),n&&(!l.examples||l.examples.length===0)&&(l.examples=[n]),this.setUserData("srs_items",r),this.recordDailyTaskProgress("task-vocab"),l;const d={id:Date.now()+Math.floor(Math.random()*1e3),word:o,definition_tr:t||"Tanım eklenmedi",definition_en:"",phonetic:a||"",cefr_level:i||"A1",examples:n?[n]:[],collocations:[],due:!0,repetitions:0,ease_factor:2.5,interval:1,part_of_speech:s||"kelime",created_at:new Date().toISOString()};return r.unshift(d),this.setUserData("srs_items",r),this.recordDailyTaskProgress("task-vocab"),d}async getReadingMaterials(){return(I.reading_materials||[]).map(e=>({...e,comprehension_questions:typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary}))}async getReadingMaterial(e){const t=await this.getReadingMaterials();return{material:t.find(n=>n.id===parseInt(e,10))||t[0]}}async submitReading(e,t,i){const{material:n}=await this.getReadingMaterial(e),a=n.comprehension_questions||[];let s=0;const r=a.map((p,g)=>{const k=t[g]||"",f=k.trim().toLowerCase()===p.correct.trim().toLowerCase();return f&&s++,{question:p.question,userAnswer:k,correctAnswer:p.correct,isCorrect:f}}),o=Math.round(s/Math.max(a.length,1)*100),l=Math.round(n.word_count/Math.max(i,10)*60),d=this.getUserData("stats")||{xp:0};return d.xp=(d.xp||0)+(o>=70?30:15),this.setUserData("stats",d),this.recordDailyTaskProgress("task-reading"),{score:o,correctCount:s,totalCount:a.length,wordCount:n.word_count,wordsPerMinute:l,details:r}}async getListeningMaterials(){return(I.listening_materials||[]).map(e=>({...e,comprehension_questions:typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary}))}async getListeningMaterial(e){const t=await this.getListeningMaterials();return{material:t.find(n=>n.id===parseInt(e,10))||t[0]}}async submitListening(e,t,i){const{material:n}=await this.getListeningMaterial(e),a=n.comprehension_questions||[];let s=0;const r=a.map((d,p)=>{const g=t[p]||"",k=g.trim().toLowerCase()===d.correct.trim().toLowerCase();return k&&s++,{question:d.question,userAnswer:g,correctAnswer:d.correct,isCorrect:k}}),o=Math.round(s/Math.max(a.length,1)*100),l=this.getUserData("stats")||{xp:0};return l.xp=(l.xp||0)+(o>=70?25:10),this.setUserData("stats",l),{score:o,correctCount:s,totalCount:a.length,listenCount:i,details:r}}async getWritingPrompts(){return I.writing_prompts||[]}async submitWriting(e,t){const i=t.trim().split(/\s+/).filter(Boolean).length,n=(t.match(/[^.!?]+[.!?]+/g)||[]).length||1,a=(i/n).toFixed(1),s=Math.min(100,Math.max(50,40+Math.round(i*1.5))),r=s>=85?"B2":s>=65?"B1":"A2",o=this.getUserData("stats")||{xp:0};return o.xp=(o.xp||0)+30,this.setUserData("stats",o),this.recordDailyTaskProgress("task-writing"),{overallScore:s,cefrLevel:r,grammarScore:Math.min(95,s+5),vocabularyScore:s,structureScore:Math.max(50,s-5),feedback:[`Ortalama ${a} kelimelik cümlelerle ${i} kelime yazdınız.`,"Kelime seçiminiz konuya uygun ve anlaşılır.",'İpucu: Cümleleri birbirine "and", "but", "because" veya "so" gibi bağlaçlarla bağlayarak daha akıcı paragraflar oluşturabilirsiniz.'],errors:[]}}async getSpeakingScenarios(){return(I.speaking_scenarios||[]).map(e=>({...e,key_vocabulary:typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary,key_phrases:typeof e.key_phrases=="string"?JSON.parse(e.key_phrases):e.key_phrases,objectives:typeof e.objectives=="string"?JSON.parse(e.objectives):e.objectives}))}async getSpeakingScenario(e){const t=await this.getSpeakingScenarios(),i=t.find(n=>n.id===parseInt(e,10))||t[0];return this.recordDailyTaskProgress("task-speaking"),{scenario:i}}async getErrors(){return{errors:this.getUserData("errors")||[]}}async resolveError(e){const t=this.getUserData("errors")||[],i=t.findIndex(a=>String(a.id)===String(e));i!==-1&&(t[i].resolved=1,this.setUserData("errors",t));const n=this.getUserData("stats")||{total_errors_resolved:0};return n.total_errors_resolved=(n.total_errors_resolved||0)+1,this.setUserData("stats",n),{success:!0}}async generateDailyTasks(){return{success:!0}}async getProgressHistory(){return{history:[]}}async getWeeklyReport(){return{report:null}}}const c=new $,L=typeof window<"u"&&(window.location.hostname.includes("github.io")||window.location.protocol==="file:"),D="/api";class P{constructor(){this.useLocal=L}getCurrentUser(){return c.getCurrentUser()}getHeaders(){const e=this.getCurrentUser(),t={"Content-Type":"application/json"};return e&&(t["x-user-id"]=e.id||e.username),t}async request(e,t={}){if(this.useLocal)throw new Error("Using local service");const i=`${D}${e}`,n={...t,headers:{...this.getHeaders(),...t.headers||{}}};try{const a=await fetch(i,n);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return await a.json()}catch(a){throw this.useLocal=!0,a}}async register(e,t,i){if(this.useLocal)return await c.register(e,t,i);try{const n=await this.request("/auth/register",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:i})});return await c.register(e,t,i),n}catch{return await c.register(e,t,i)}}async login(e,t){if(this.useLocal)return await c.login(e,t);try{const i=await this.request("/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})});return await c.login(e,t),i}catch{return await c.login(e,t)}}async loginOrRegisterGuest(){return await c.loginOrRegisterGuest()}logout(){c.logout()}async getProfile(){const e=this.getCurrentUser();if(!e)throw new Error("AUTH_REQUIRED");return{user:e}}async getDashboard(){return await c.getDashboard()}async skipAssessmentToA1(){return await c.skipAssessmentToA1()}async startAssessment(){if(this.useLocal)return c.startAssessment();try{return await this.request("/assessment/start",{method:"POST"})}catch{return c.startAssessment()}}async getAssessmentQuestions(e,t){if(this.useLocal)return c.getAssessmentQuestions(e,t);try{return await this.request(`/assessment/${e}/questions/${t}`)}catch{return c.getAssessmentQuestions(e,t)}}async submitAssessmentAnswer(e,t,i,n=3e3){if(this.useLocal)return c.submitAssessmentAnswer(e,t,i,n);try{return await this.request(`/assessment/${e}/answer`,{method:"POST",body:JSON.stringify({questionBankId:t,userAnswer:i,responseTimeMs:n})})}catch{return c.submitAssessmentAnswer(e,t,i,n)}}async completeAssessment(e){if(this.useLocal)return c.completeAssessment(e);try{return await this.request(`/assessment/${e}/complete`,{method:"POST"})}catch{return c.completeAssessment(e)}}async getAssessmentProgress(e){if(this.useLocal)return{completedSkills:10,totalSkills:10};try{return await this.request(`/assessment/${e}/progress`)}catch{return{completedSkills:10,totalSkills:10}}}async getLatestAssessment(){if(this.useLocal)return(await c.getDashboard()).latestAssessment;try{return await this.request("/assessment/latest")}catch{return(await c.getDashboard()).latestAssessment}}async getGrammarTopics(){if(this.useLocal)return c.getGrammarTopics();try{return await this.request("/grammar/topics")}catch{return c.getGrammarTopics()}}async getGrammarTopic(e){if(this.useLocal)return c.getGrammarTopic(e);try{return await this.request(`/grammar/topic/${e}`)}catch{return c.getGrammarTopic(e)}}async submitGrammarExercise(e,t,i=3e3){if(this.useLocal)return c.submitGrammarExercise(e,t);try{return await this.request(`/grammar/exercise/${e}/submit`,{method:"POST",body:JSON.stringify({answer:t,responseTimeMs:i})})}catch{return c.submitGrammarExercise(e,t)}}async getVocabularyItems(e={}){if(this.useLocal)return c.getVocabularyItems(e);try{const t=new URLSearchParams(e).toString();return await this.request(`/vocabulary/items${t?`?${t}`:""}`)}catch{return c.getVocabularyItems(e)}}async getReviewQueue(){if(this.useLocal)return c.getReviewQueue();try{return await this.request("/vocabulary/review")}catch{return c.getReviewQueue()}}async submitReview(e,t){if(this.useLocal)return c.submitReview(e,t);try{return await this.request(`/vocabulary/${e}/review`,{method:"POST",body:JSON.stringify({rating:t})})}catch{return c.submitReview(e,t)}}async addCustomWord(e,t,i="A1",n="",a="",s="kelime"){return await c.addCustomWord(e,t,i,n,a,s)}async loadWordPack(e="A1"){return await c.loadWordPack(e)}async searchOnlineDictionary(e){return await c.fetchOnlineWord(e)}async getReadingMaterials(e={}){if(this.useLocal)return c.getReadingMaterials();try{const t=new URLSearchParams(e).toString();return await this.request(`/reading/materials${t?`?${t}`:""}`)}catch{return c.getReadingMaterials()}}async getReadingMaterial(e){if(this.useLocal)return c.getReadingMaterial(e);try{return await this.request(`/reading/${e}`)}catch{return c.getReadingMaterial(e)}}async submitReading(e,t,i){if(this.useLocal)return c.submitReading(e,t,i);try{return await this.request(`/reading/${e}/submit`,{method:"POST",body:JSON.stringify({answers:t,readingTimeSeconds:i})})}catch{return c.submitReading(e,t,i)}}async getListeningMaterials(e={}){if(this.useLocal)return c.getListeningMaterials();try{const t=new URLSearchParams(e).toString();return await this.request(`/listening/materials${t?`?${t}`:""}`)}catch{return c.getListeningMaterials()}}async getListeningMaterial(e){if(this.useLocal)return c.getListeningMaterial(e);try{return await this.request(`/listening/${e}`)}catch{return c.getListeningMaterial(e)}}async getListeningTranscript(e){const{material:t}=await this.getListeningMaterial(e);return{transcript:(t==null?void 0:t.transcript)||(t==null?void 0:t.audio_text)||""}}async submitListening(e,t,i=1){if(this.useLocal)return c.submitListening(e,t,i);try{return await this.request(`/listening/${e}/submit`,{method:"POST",body:JSON.stringify({answers:t,listenCount:i})})}catch{return c.submitListening(e,t,i)}}async getWritingPrompts(e={}){if(this.useLocal)return c.getWritingPrompts();try{const t=new URLSearchParams(e).toString();return await this.request(`/writing/prompts${t?`?${t}`:""}`)}catch{return c.getWritingPrompts()}}async submitWriting(e,t,i){if(this.useLocal)return c.submitWriting(e,t,i);try{return await this.request("/writing/submit",{method:"POST",body:JSON.stringify({promptId:e,text:t,timeSpentSeconds:i})})}catch{return c.submitWriting(e,t,i)}}async getSpeakingScenarios(e={}){if(this.useLocal)return c.getSpeakingScenarios();try{const t=new URLSearchParams(e).toString();return await this.request(`/speaking/scenarios${t?`?${t}`:""}`)}catch{return c.getSpeakingScenarios()}}async getSpeakingScenario(e){if(this.useLocal)return c.getSpeakingScenario(e);try{return await this.request(`/speaking/scenario/${e}`)}catch{return c.getSpeakingScenario(e)}}async getErrors(e={}){if(this.useLocal)return c.getErrors(e);try{const t=new URLSearchParams(e).toString();return await this.request(`/errors${t?`?${t}`:""}`)}catch{return c.getErrors(e)}}async resolveError(e){if(this.useLocal)return c.resolveError(e);try{return await this.request(`/errors/${e}/resolve`,{method:"POST"})}catch{return c.resolveError(e)}}async generateDailyTasks(){if(this.useLocal)return c.generateDailyTasks();try{return await this.request("/daily-tasks/generate",{method:"POST"})}catch{return c.generateDailyTasks()}}async completeDailyTask(e,t=!0){if(this.useLocal)return c.completeDailyTask(e,t);try{return await this.request("/daily-tasks/complete",{method:"POST",body:JSON.stringify({taskId:e,completed:t})})}catch{return c.completeDailyTask(e,t)}}async getProgressHistory(){if(this.useLocal)return c.getProgressHistory();try{return await this.request("/progress/history")}catch{return c.getProgressHistory()}}async getWeeklyReport(){if(this.useLocal)return c.getWeeklyReport();try{return await this.request("/reports/weekly")}catch{return c.getWeeklyReport()}}}const y=new P;class M{constructor(){this.user=null,this.dashboard=null,this.currentView="dashboard",this.sessionSeconds=0,this.timerInterval=null,this.listeners=new Map}on(e,t){return this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t),()=>{const i=this.listeners.get(e);i&&this.listeners.set(e,i.filter(n=>n!==t))}}emit(e,t){this.listeners.has(e)&&this.listeners.get(e).forEach(i=>{try{i(t)}catch(n){console.error(`Error in event listener for ${e}:`,n)}})}setUser(e){this.user=e,this.emit("user:change",e)}setDashboard(e){this.dashboard=e,this.emit("dashboard:change",e)}setView(e){this.currentView=e,this.emit("view:change",e)}startSessionTimer(){this.timerInterval&&clearInterval(this.timerInterval),this.timerInterval=setInterval(()=>{this.sessionSeconds++,this.emit("timer:tick",this.sessionSeconds)},1e3)}stopSessionTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}showToast(e,t="info",i=4e3){const n=document.getElementById("toast-container");if(!n)return;const a=document.createElement("div");a.className=`toast ${t}`;let s="ℹ️";t==="success"&&(s="✅"),t==="error"&&(s="⚠️"),a.innerHTML=`<span>${s}</span><span>${e}</span>`,n.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transform="translateY(-10px)",a.style.transition="all 0.3s ease",setTimeout(()=>a.remove(),300)},i)}}const u=new M;class j{constructor(e){this.onSuccess=e,this.mode="login",this.element=null}show(){this.remove();const e=document.createElement("div");e.className="auth-overlay",e.id="auth-modal-overlay",e.innerHTML=`
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
    `,document.body.appendChild(e),this.element=e,this.bindEvents(),setTimeout(()=>{var t;(t=document.getElementById("auth-username"))==null||t.focus()},100)}remove(){const e=document.getElementById("auth-modal-overlay");e&&e.remove(),this.element=null}showAlert(e,t=!0){const i=document.getElementById("auth-alert");i&&(i.textContent=e,i.className=`auth-alert ${t?"error":"success"}`,i.style.display="block")}setMode(e){this.mode=e,this.show()}bindEvents(){var e,t,i,n,a;(e=document.getElementById("tab-login"))==null||e.addEventListener("click",()=>this.setMode("login")),(t=document.getElementById("tab-register"))==null||t.addEventListener("click",()=>this.setMode("register")),(i=document.getElementById("link-switch-register"))==null||i.addEventListener("click",s=>{s.preventDefault(),this.setMode("register")}),(n=document.getElementById("link-switch-login"))==null||n.addEventListener("click",s=>{s.preventDefault(),this.setMode("login")}),(a=document.getElementById("auth-form"))==null||a.addEventListener("submit",async s=>{var d,p;s.preventDefault();const r=(d=document.getElementById("auth-username"))==null?void 0:d.value.trim(),o=(p=document.getElementById("auth-password"))==null?void 0:p.value;if(!r||!o){this.showAlert("Lütfen kullanıcı adı ve şifre girin.");return}if(this.mode==="register"&&o.length<3){this.showAlert("Şifre en az 3 karakter olmalıdır.");return}const l=document.getElementById("btn-submit-auth");l&&(l.disabled=!0,l.textContent="İşleniyor...");try{let g;this.mode==="register"?(g=await y.register(r,o,r),u.showToast(`Hoş geldin ${g.displayName||g.username}! Hesabın A1 seviyesinde 0'dan oluşturuldu. 🎉`,"success")):(g=await y.login(r,o),u.showToast(`Tekrar hoş geldin, ${g.displayName||g.username}! 👋`,"success")),this.remove(),this.onSuccess&&this.onSuccess(g)}catch(g){this.showAlert(g.message||"Giriş yapılırken bir hata oluştu."),l&&(l.disabled=!1,l.textContent=this.mode==="login"?"Giriş Yap →":"Hesap Oluştur ve 0'dan Başla →")}})}}class H{constructor(){this.container=null,this.data=null}async render(e){var t;this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Kişiselleştirilmiş öğrenme paneliniz yükleniyor...</p>
      </div>
    `;try{this.data=await y.getDashboard(),u.setDashboard(this.data),this.renderContent()}catch(i){if(i.message==="AUTH_REQUIRED")return;this.container.innerHTML=`
        <div class="card error-card">
          <h3>Panel yüklenemedi</h3>
          <p>${i.message}</p>
          <button class="btn btn-primary" id="retry-dashboard-btn">Tekrar Dene</button>
        </div>
      `,(t=document.getElementById("retry-dashboard-btn"))==null||t.addEventListener("click",()=>this.render(e))}}renderContent(){const{user:e,stats:t,skills:i,dailyTasks:n,recentErrors:a,reviewStats:s,latestAssessment:r}=this.data,o=document.getElementById("sidebar-streak");o&&(o.textContent=`${t.current_streak||1} gün`);const l=document.getElementById("sidebar-xp");l&&(l.textContent=`${t.xp||0} XP`);const d=document.getElementById("review-due-badge");d&&(d.textContent=s?s.dueToday:0);const p=document.getElementById("errors-count-badge");p&&(p.textContent=a?a.length:0);const g=(r==null?void 0:r.overall_cefr)||(r==null?void 0:r.overallCEFR)||"A1",k=document.getElementById("sidebar-cefr-badge");k&&(k.textContent=g);const f=[{key:"grammar",name:"Dilbilgisi (Grammar)",icon:"📖"},{key:"vocabulary",name:"Kelime Haznesi (Vocabulary)",icon:"📚"},{key:"reading",name:"Okuma & Anlama (Reading)",icon:"📰"},{key:"listening",name:"Dinleme & Algılama (Listening)",icon:"🎧"},{key:"writing",name:"Yazma Becerisi (Writing)",icon:"✍️"},{key:"speaking",name:"Konuşma & Akıcılık (Speaking)",icon:"🗣️"},{key:"pronunciation",name:"Telaffuz & Aksan (Pronunciation)",icon:"🎙️"},{key:"sentence_formation",name:"Cümle Kurma (Syntax)",icon:"🧩"},{key:"comprehension",name:"Kavrama Hızı (Comprehension)",icon:"💡"},{key:"communication",name:"Doğal İletişim (Communication)",icon:"🤝"}],_=(n==null?void 0:n.tasks)||[{id:"task-vocab",skill:"vocabulary",description:"Kelime Kartlarından en az 5 tanesini tekrar et veya yeni kelime öğren",targetView:"vocabulary"},{id:"task-grammar",skill:"grammar",description:"Gramer Akademisinden 1 konuyu ve interaktif alıştırmasını tamamla",targetView:"grammar"},{id:"task-reading",skill:"reading",description:"1 okuma metnini incele ve anlama sorularını yanıtla",targetView:"reading"},{id:"task-speaking",skill:"speaking",description:"1 konuşma senaryosunda sesli pratik yap veya diyalog kur",targetView:"speaking"}],A=new Set((n==null?void 0:n.completed_tasks)||[]),S=A.size,m=_.length,h=Math.round(S/Math.max(m,1)*100),v=_.find(w=>!A.has(w.id));this.nextTargetView=v?v.targetView||v.skill:"vocabulary",this.container.innerHTML=`
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
                <span>⚡ ${S>=m?"Günün Rutini Tamamlandı! 🎉":`Günün Rutinine Başla (${m-S} görev kaldı)`}</span>
              </button>
            </div>
          </div>
          <div class="hero-stat-box">
            <div class="hero-cefr-circle">
              <span class="hero-cefr-label">MEVCUT SEVİYE</span>
              <span class="hero-cefr-val">${g}</span>
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

            <!-- Routine Progress Widget -->
            <div class="routine-progress-widget">
              <div class="routine-progress-header">
                <span class="routine-progress-title">
                  <strong>İlerleme:</strong> ${S} / ${m} Görev Tamamlandı (%${h})
                </span>
                <span class="routine-reward-tag">${h===100?"🎉 +50 XP Bonus Eklendi!":"+20 XP / Görev"}</span>
              </div>
              <div class="routine-bar-outer">
                <div class="routine-bar-inner" style="width: ${h}%;"></div>
              </div>
              ${h===100?`
                <div class="routine-celebration">
                  ✨ <strong>Tebrikler!</strong> Bugünün tüm hedeflerini tamamlayarak serinizi korudunuz ve günlük bonusu kazandınız!
                </div>
              `:""}
            </div>

            <div class="tasks-list">
              ${_.map(w=>{const T=A.has(w.id);return`
                  <div class="task-item ${T?"completed":""}" data-task-id="${w.id}" data-view="${w.targetView||w.skill}">
                    <div class="task-checkbox ${T?"checked":""}" title="${T?"Tamamlandı olarak işaretlendi (kaldırmak için tıkla)":"Tamamlandı olarak işaretle"}">
                      ${T?"✓":""}
                    </div>
                    <div class="task-content">
                      <div class="task-title ${T?"text-strikethrough":""}">${w.description}</div>
                      <div class="task-skill-tag cefr-tag A1">${w.skill.toUpperCase()}</div>
                    </div>
                    <button class="btn ${T?"btn-secondary":"btn-primary"} btn-sm task-action-btn">
                      ${T?"Tekrar Aç":"Başla →"}
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
              ${f.map(w=>{const T=i[w.key]||{level:"A1",score:0},z=T.level||"A1",B=T.score||0;return`
                  <div class="skill-row" data-skill="${w.key}">
                    <div class="skill-label">
                      <span class="skill-icon">${w.icon}</span>
                      <span class="skill-name">${w.name}</span>
                    </div>
                    <div class="skill-bar-wrap">
                      <div class="skill-bar-bg">
                        <div class="skill-bar-fill" style="width: ${Math.max(B,5)}%;"></div>
                      </div>
                    </div>
                    <div class="skill-score">
                      <span class="cefr-tag ${z}">${z}</span>
                      <span class="score-percent">%${B}</span>
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
              <div class="lab-desc">155+ kelimelik CEFR arşivi ve sınırsız canlı internet sözlüğü ile kalıcı öğrenim.</div>
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
    `,this.bindEvents()}bindEvents(){var e,t,i,n;(e=document.getElementById("hero-diagnostic-btn"))==null||e.addEventListener("click",()=>{u.setView("assessment")}),(t=document.getElementById("hero-routine-btn"))==null||t.addEventListener("click",()=>{u.setView(this.nextTargetView||"vocabulary")}),(i=document.getElementById("goto-assessment-btn"))==null||i.addEventListener("click",()=>{u.setView("assessment")}),(n=document.getElementById("refresh-tasks-btn"))==null||n.addEventListener("click",async()=>{await this.render(this.container),u.showToast("Görevler güncellendi.","info")}),document.querySelectorAll(".task-checkbox").forEach(a=>{a.addEventListener("click",async s=>{s.stopPropagation();const r=a.closest(".task-item");if(!r)return;const o=r.dataset.taskId,d=!a.classList.contains("checked");try{await y.completeDailyTask(o,d),u.showToast(d?"🎯 Görev tamamlandı! +20 XP eklendi.":"Görev işareti kaldırıldı.",d?"success":"info"),await this.render(this.container)}catch(p){u.showToast("Görev durumu güncellenemedi: "+p.message,"error")}})}),document.querySelectorAll(".task-action-btn").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const r=a.closest(".task-item"),o=r==null?void 0:r.dataset.view;o&&u.setView(o)})}),document.querySelectorAll(".task-item").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.view;s&&u.setView(s)})}),document.querySelectorAll(".lab-card").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.view;s&&u.setView(s)})}),document.querySelectorAll(".skill-row").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.skill;s&&u.currentView!==s&&u.setView(s)})})}}class O{constructor(){this.synth=typeof window<"u"&&window.speechSynthesis||null,this.recognition=null,this.voices=[],this.preferredAccent="en-US",this.preferredRate=1,typeof window<"u"&&this.synth&&(this.loadVoices(),typeof speechSynthesis<"u"&&speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=()=>this.loadVoices()));const e=typeof window<"u"&&(window.SpeechRecognition||window.webkitSpeechRecognition)||null;e&&(this.recognition=new e,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.lang="en-US")}loadVoices(){if(!this.synth)return;const e=this.synth.getVoices()||[];this.voices=e.filter(t=>t.lang&&t.lang.toLowerCase().startsWith("en"))}isTtsSupported(){return!!this.synth}isSttSupported(){return!!this.recognition}sanitizeForSpeech(e){if(!e)return"";let t=String(e);return t=t.replace(/_+/g," blank "),t=t.replace(/(\b\w+)\s*\/\s*(\w+\b)/g,"$1 or $2"),t=t.replace(/\//g," "),t=t.replace(/<[^>]+>/g," "),t=t.replace(/["“”«»`\\]/g," "),t=t.replace(/(^|\s)['‘](.*?)['’](\s|$)/g,"$1 $2 $3"),t=t.replace(/['’]{2,}/g," "),t=t.replace(/[:;]/g,", "),t=t.replace(/[()[\]{}]/g,", "),t=t.replace(/\s+[-—–]+\s+/g,", "),t=t.replace(/[-—–]{2,}/g,", "),t=t.replace(/(\b\w+)-(\w+\b)/g,"$1 $2"),t=t.replace(/[-—–]/g," "),t=t.replace(/\.{2,}/g,". "),t=t.replace(/[*#^~<>@$%&+=|_]/g," "),t=t.replace(/,\s*,+/g,", "),t=t.replace(/,\s*\./g,"."),t=t.replace(/\.\s*,/g,"."),t=t.replace(/\s+([.,!?;:])/g,"$1"),t=t.replace(/\s+/g," ").trim(),t}getBestVoice(e="en-US"){if(!this.synth)return null;let t=this.voices;if((!t||t.length===0)&&(t=(this.synth.getVoices()||[]).filter(r=>r.lang&&r.lang.toLowerCase().startsWith("en")),this.voices=t),t.length===0&&(t=(this.synth.getVoices()||[]).filter(o=>o.lang&&o.lang.toLowerCase().startsWith("en")),this.voices=t),t.length===0)return null;const i=t.find(r=>r.lang.toLowerCase()===e.toLowerCase());if(i)return i;const n=e.slice(0,5),a=t.find(r=>r.lang.toLowerCase().startsWith(n.toLowerCase()));if(a)return a;const s=t.find(r=>{const o=(r.name||"").toLowerCase();return o.includes("natural")||o.includes("google")||o.includes("samantha")||o.includes("david")||o.includes("jenny")||o.includes("zira")});return s||t[0]}speak(e,t={}){if(!this.synth)return console.warn("Speech synthesis not supported in this browser"),Promise.resolve();this.cancel();const i=this.sanitizeForSpeech(e);return i?new Promise(n=>{const a=new SpeechSynthesisUtterance(i);a.rate=t.rate||this.preferredRate||.95,a.pitch=t.pitch||1;const s=t.lang||this.preferredAccent||"en-US";a.lang=s;const r=this.getBestVoice(s);r&&(a.voice=r),a.onend=()=>n(),a.onerror=o=>{console.warn("Speech synthesis error:",o),n()},this.synth.speak(a)}):Promise.resolve()}get hasRecognition(){return!!this.recognition}get hasSynthesis(){return!!this.synth}stop(){this.cancel()}cancel(){this.synth&&this.synth.cancel()}listen(e,t,i="en-US"){return this.startListening({onResult:n=>{typeof e=="function"&&e(n.final||n.interim||"")},onEnd:n=>{typeof t=="function"&&t(n)},lang:i})}startListening({onResult:e,onError:t,onEnd:i,lang:n="en-US"}){if(!this.recognition){t&&t(new Error("Speech recognition not supported in this browser."));return}try{this.recognition.abort()}catch{}this.recognition.lang=n;let a="";this.recognition.onresult=s=>{let r="";for(let o=s.resultIndex;o<s.results.length;++o)s.results[o].isFinal?a+=(a?" ":"")+s.results[o][0].transcript.trim():r+=s.results[o][0].transcript;e&&e({final:a.trim(),interim:r.trim(),confidence:s.results[0]?s.results[0][0].confidence:0})},this.recognition.onerror=s=>{console.warn("Speech recognition error:",s.error),t&&t(s)},this.recognition.onend=()=>{i&&i(a.trim())};try{this.recognition.start()}catch(s){console.warn("Recognition start caught error:",s)}}stopListening(){if(this.recognition)try{this.recognition.stop()}catch{}}calculateSimilarity(e,t){if(!e||!t)return 0;const i=String(e).toLowerCase().replace(/[^\w\s]/g,"").trim(),n=String(t).toLowerCase().replace(/[^\w\s]/g,"").trim();if(!i||!n)return 0;const a=i.split(/\s+/).filter(Boolean),s=n.split(/\s+/).filter(Boolean);if(s.length===0||a.length===0)return 0;let r=0;const o=[...s];for(const g of a){const k=o.indexOf(g);k!==-1&&(r++,o.splice(k,1))}const l=r/a.length,d=r/s.length,p=l+d>0?2*l*d/(l+d):0;return Math.round(p*100)}}const b=new O,E={what:{tr:"Ne, Neyi",pos:"pronoun",cefr:"A1",note:"Soru zamiri"},where:{tr:"Nerede, Nereye",pos:"adverb",cefr:"A1",note:"Yer bildiren soru kelimesi"},when:{tr:"Ne zaman, -dığı zaman",pos:"adverb",cefr:"A1",note:"Zaman bildiren soru kelimesi"},which:{tr:"Hangi, Hangisi",pos:"pronoun",cefr:"A1",note:"Seçenek sorusu"},who:{tr:"Kim, Kimi",pos:"pronoun",cefr:"A1",note:"Kişi sorusu"},whose:{tr:"Kimin",pos:"pronoun",cefr:"A2",note:"Aitlik sorusu"},why:{tr:"Neden, Niçin",pos:"adverb",cefr:"A1",note:"Sebep sorusu"},how:{tr:"Nasıl, Ne kadar",pos:"adverb",cefr:"A1",note:"Durum veya miktar sorusu"},choose:{tr:"Seçmek, Tercih etmek",pos:"verb",cefr:"A1",note:"Seçenek belirlemek"},chose:{tr:"Seçti",pos:"verb",cefr:"A2",note:"Choose fiilinin geçmiş hali"},chosen:{tr:"Seçilmiş",pos:"verb/adj",cefr:"A2",note:"Choose fiilinin 3. hali"},select:{tr:"Seçmek, İşaretlemek",pos:"verb",cefr:"A2",note:"Doğru seçeneği belirleyin"},correct:{tr:"Doğru, Düzeltmek",pos:"adj/verb",cefr:"A1",note:"Hatasız, uygun"},incorrect:{tr:"Yanlış, Hatalı",pos:"adj",cefr:"A2",note:"Doğru olmayan"},sentence:{tr:"Cümle",pos:"noun",cefr:"A1",note:"Yargı bildiren söz dizisi"},sentences:{tr:"Cümleler",pos:"noun",cefr:"A1",note:"Çoğul cümle"},phrase:{tr:"İfade, Söz öbeği",pos:"noun",cefr:"A2",note:"Birden çok kelimeden oluşan yapı"},blank:{tr:"Boşluk, Boş",pos:"noun/adj",cefr:"A1",note:"Doldurulacak alan"},blanks:{tr:"Boşluklar",pos:"noun",cefr:"A1",note:"Cümledeki eksik yerler"},fill:{tr:"Doldurmak",pos:"verb",cefr:"A1",note:"Fill in the blank = Boşluğu doldur"},filled:{tr:"Doldurulmuş, Dolu",pos:"verb",cefr:"A1",note:"Geçmiş zaman"},following:{tr:"Aşağıdaki, Takip eden",pos:"adj",cefr:"A2",note:"The following = Aşağıdakiler"},statement:{tr:"İfade, Beyan, Cümle",pos:"noun",cefr:"B1",note:"Belirtilen yargı"},meaning:{tr:"Anlam",pos:"noun",cefr:"A1",note:"Sözcüğün anlamı"},explanation:{tr:"Açıklama, İzah",pos:"noun",cefr:"A2",note:"Nedenini belirtme"},explain:{tr:"Açıklamak, İzah etmek",pos:"verb",cefr:"A2",note:"Açıklığa kavuşturmak"},passage:{tr:"Paragraf, Parça, Metin",pos:"noun",cefr:"A2",note:"Okuma metni parçası"},dialogue:{tr:"Diyalog, Karşılıklı konuşma",pos:"noun",cefr:"A1",note:"İki kişi arasındaki konuşma"},answer:{tr:"Cevap, Cevaplamak",pos:"noun/verb",cefr:"A1",note:"Soruya verilen yanıt"},question:{tr:"Soru",pos:"noun",cefr:"A1",note:"Cevap bekleyen cümle"},option:{tr:"Seçenek, Şık",pos:"noun",cefr:"A2",note:"A, B, C, D şıkları"},options:{tr:"Seçenekler, Şıklar",pos:"noun",cefr:"A2",note:"Tüm şıklar"},complete:{tr:"Tamamlamak, Eksiksiz",pos:"verb/adj",cefr:"A1",note:"Bitirmek, eksiksiz hale getirmek"},umbrella:{tr:"Şemsiye",pos:"noun",cefr:"A1",note:"Yağmurdan korunma aracı"},cloud:{tr:"Bulut",pos:"noun",cefr:"A1",note:"Gökyüzündeki su buharı"},clouds:{tr:"Bulutlar",pos:"noun",cefr:"A1",note:"Dark clouds = kara bulutlar"},dark:{tr:"Karanlık, Koyu",pos:"adj",cefr:"A1",note:"Koyu renk veya ışıksız"},sky:{tr:"Gökyüzü",pos:"noun",cefr:"A1",note:"Gök"},expect:{tr:"Ummak, Beklemek",pos:"verb",cefr:"A2",note:"Beklenti içinde olmak"},expected:{tr:"Bekledi, Umdu",pos:"verb",cefr:"A2",note:"Beklenen durum"},"take out":{tr:"Çıkarmak, Dışarı almak",pos:"phrasal verb",cefr:"A2",note:"Cebinden veya çantasından çıkarmak"},"took out":{tr:"Çıkardı",pos:"phrasal verb",cefr:"A2",note:"Take out geçmiş hali"},rain:{tr:"Yağmur / Yağmur yağmak",pos:"noun/verb",cefr:"A1",note:"Hava durumu"},raining:{tr:"Yağmur yağıyor",pos:"verb",cefr:"A1",note:"Şimdiki zaman"},"under the weather":{tr:"Keyifsiz, Biraz hasta",pos:"idiom",cefr:"B1",note:"Deyim: Kendini kırgın hissetmek"},weather:{tr:"Hava durumu",pos:"noun",cefr:"A1",note:"Günün hava şartları"},unwell:{tr:"Rahatsız, Hasta",pos:"adj",cefr:"A2",note:"Sağlığı bozuk"},sick:{tr:"Hasta",pos:"adj",cefr:"A1",note:"Hastalanmış"},born:{tr:"Doğmuş, Dünyaya gelmiş",pos:"adj/verb",cefr:"A1",note:"To be born = doğmak"},birthday:{tr:"Doğum günü",pos:"noun",cefr:"A1",note:"Doğum yıldönümü"},reflection:{tr:"Düşünme, Yansıma",pos:"noun",cefr:"B2",note:"Derin düşünme"},reflect:{tr:"Düşünmek, Yansıtmak",pos:"verb",cefr:"B2",note:"Let me reflect = Bir düşüneyim"},thoughtful:{tr:"Düşünceli, Özenli",pos:"adj",cefr:"B1",note:"İyi düşünülmüş soru"},thought:{tr:"Düşünce / Düşündü",pos:"noun/verb",cefr:"A2",note:"Think geçmiş hali veya fikir"},interview:{tr:"Mülakat, Röportaj",pos:"noun",cefr:"A2",note:"Görüşme"},interviewer:{tr:"Mülakatı yapan kişi",pos:"noun",cefr:"B1",note:"Soru soran yetkili"},hesitation:{tr:"Tereddüt, Duraksama",pos:"noun",cefr:"B2",note:"Konuşurken duraklama"},hesitate:{tr:"Tereddüt etmek",pos:"verb",cefr:"B1",note:"Duraksamak"},filler:{tr:"Doldurucu sözcük (well, you know)",pos:"noun",cefr:"B2",note:"Düşünme süresi kazandıran sözcük"},directive:{tr:"Talimat, Direktif",pos:"noun",cefr:"B2",note:"Resmi yönerge"},pragmatic:{tr:"Edimbilimsel, Pratik amaca yönelik",pos:"adj",cefr:"B2",note:"Sosyal iletişimdeki gerçek anlam"},implicature:{tr:"Örtük anlam, İma",pos:"noun",cefr:"C1",note:"Doğrudan söylenmeyip ima edilen şey"},review:{tr:"Gözden geçirmek, İncelemek",pos:"verb",cefr:"A2",note:"Tekrar okumak"},presentation:{tr:"Sunum",pos:"noun",cefr:"A2",note:"Sunum konuşması"},compliment:{tr:"İltifat, Övgü",pos:"noun",cefr:"B1",note:"Güzel söz"},stranger:{tr:"Yabancı (tanınmayan kişi)",pos:"noun",cefr:"A2",note:"Tanımadığınız kişi"},clarify:{tr:"Netleştirmek, Açıklığa kavuşturmak",pos:"verb",cefr:"B1",note:"Daha net anlatmak"},clarification:{tr:"Açıklama, Netleştirme",pos:"noun",cefr:"B1",note:"Netleştirme talebi"},interrupt:{tr:"Sözünü kesmek, Araya girmek",pos:"verb",cefr:"B1",note:"Konuşmayı bölmek"},interruption:{tr:"Araya girme, Kesinti",pos:"noun",cefr:"B1",note:"Bölünme"},"turn-taking":{tr:"Konuşma sırası alma",pos:"phrase",cefr:"B2",note:"Diyalogda sırayla söz alma"},electricity:{tr:"Elektrik",pos:"noun",cefr:"A2",note:"Enerji"},suddenly:{tr:"Aniden, Birdenbire",pos:"adverb",cefr:"A2",note:"Beklenmedik bir anda"},"went out":{tr:"Söndü, Kesildi (elektrik)",pos:"phrasal verb",cefr:"A2",note:"Go out geçmiş hali"},closure:{tr:"Kapanma, Kapalı olma",pos:"noun",cefr:"B1",note:"Yolun kapalı olması"},route:{tr:"Güzergah, Rota, Yol",pos:"noun",cefr:"A2",note:"Gidilecek güzergah"},manager:{tr:"Müdür, Yönetici",pos:"noun",cefr:"A2",note:"Sorumlu kişi"},submit:{tr:"Teslim etmek, Sunmak",pos:"verb",cefr:"B1",note:"Rapor/ödev teslim etmek"},report:{tr:"Rapor",pos:"noun",cefr:"A2",note:"Yazılı bilgilendirme"},meal:{tr:"Öğün, Yemek",pos:"noun",cefr:"A1",note:"Yemek vakti"},middle:{tr:"Orta, Ortası",pos:"noun/adj",cefr:"A2",note:"İki şeyin ortası"},breakfast:{tr:"Kahvaltı",pos:"noun",cefr:"A1",note:"Sabah öğünü"},lunch:{tr:"Öğle yemeği",pos:"noun",cefr:"A1",note:"Öğle öğünü"},dinner:{tr:"Akşam yemeği",pos:"noun",cefr:"A1",note:"Akşam ana öğün"},supper:{tr:"Gece atıştırmalığı, Hafif akşam yemeği",pos:"noun",cefr:"B1",note:"Geç saatteki hafif yemek"},flaw:{tr:"Kusur, Hata, Eksiklik",pos:"noun",cefr:"B2",note:"Düzeltilmesi gereken eksik"},decision:{tr:"Karar",pos:"noun",cefr:"A2",note:"Make a decision = Karar vermek"},mistake:{tr:"Hata, Yanlış",pos:"noun",cefr:"A1",note:"Make a mistake = Hata yapmak"},progress:{tr:"İlerleme, Gelişme",pos:"noun",cefr:"A2",note:"Make progress = İlerleme kaydetmek"},effort:{tr:"Çaba, Gayret",pos:"noun",cefr:"B1",note:"Make an effort = Çaba göstermek"},routine:{tr:"Rutin, Günlük alışkanlık",pos:"noun",cefr:"A1",note:"Düzenli yapılan şeyler"},habit:{tr:"Alışkanlık",pos:"noun",cefr:"A2",note:"Tekrarlanan davranış"},colleague:{tr:"İş arkadaşı, Meslektaş",pos:"noun",cefr:"A2",note:"Birlikte çalışılan kişi"},relatives:{tr:"Akrabalar",pos:"noun",cefr:"A2",note:"Aile fertleri"},relative:{tr:"Akraba / Göreceli",pos:"noun/adj",cefr:"A2",note:"Akraba veya bağıntılı"},agree:{tr:"Katılmak, Aynı fikirde olmak",pos:"verb",cefr:"A2",note:"I agree with you = Sana katılıyorum"},disagree:{tr:"Katılmamak, Karşı çıkmak",pos:"verb",cefr:"A2",note:"Farklı düşünmek"},allow:{tr:"İzin vermek",pos:"verb",cefr:"B1",note:"Müsaade etmek"},appear:{tr:"Görünmek, Ortaya çıkmak",pos:"verb",cefr:"B1",note:"Belirmek"},arrive:{tr:"Varmak, Ulaşmak",pos:"verb",cefr:"A1",note:"Bir yere ulaşmak"},avoid:{tr:"Kaçınmak, Uzak durmak",pos:"verb",cefr:"B1",note:"Yapmaktan sakınmak"},become:{tr:"Olmak, Haline gelmek",pos:"verb",cefr:"A2",note:"Dönüşmek"},became:{tr:"Oldu",pos:"verb",cefr:"A2",note:"Become geçmiş hali"},believe:{tr:"İnanmak",pos:"verb",cefr:"A1",note:"Güvenmek veya inanmak"},borrow:{tr:"Ödünç almak",pos:"verb",cefr:"A2",note:"Geri vermek üzere almak"},lend:{tr:"Ödünç vermek",pos:"verb",cefr:"A2",note:"Geri almak üzere vermek"},cancel:{tr:"İptal etmek",pos:"verb",cefr:"A2",note:"Vazgeçmek"},carry:{tr:"Taşımak",pos:"verb",cefr:"A2",note:"Bir şeyi elinde/üstünde götürmek"},catch:{tr:"Yakalamak, Yetişmek",pos:"verb",cefr:"A2",note:"Catch a bus = Otobüse yetişmek"},caught:{tr:"Yakaladı",pos:"verb",cefr:"A2",note:"Catch geçmiş hali"},consider:{tr:"Göz önünde bulundurmak, Düşünmek",pos:"verb",cefr:"B1",note:"Değerlendirmek"},continue:{tr:"Devam etmek",pos:"verb",cefr:"A2",note:"Sürdürmek"},create:{tr:"Yaratmak, Oluşturmak",pos:"verb",cefr:"A2",note:"Meydana getirmek"},describe:{tr:"Tanımlamak, Tarif etmek",pos:"verb",cefr:"A2",note:"Detaylı anlatmak"},develop:{tr:"Geliştirmek, Gelişmek",pos:"verb",cefr:"B1",note:"İlerletmek"},discover:{tr:"Keşfetmek",pos:"verb",cefr:"A2",note:"Yeni bir şey bulmak"},discuss:{tr:"Tartışmak, Görüşmek",pos:"verb",cefr:"A2",note:"Fikir alışverişi yapmak"},enjoy:{tr:"Keyif almak, Eğlenmek",pos:"verb",cefr:"A1",note:"Hoşlanmak"},improve:{tr:"Geliştirmek, İyileştirmek",pos:"verb",cefr:"A2",note:"Daha iyi hale getirmek"},include:{tr:"İçermek, Dahil etmek",pos:"verb",cefr:"A2",note:"Kapsamak"},intend:{tr:"Niyet etmek, Amaçlamak",pos:"verb",cefr:"B1",note:"Hedeflemek"},manage:{tr:"Yönetmek, Başarmak",pos:"verb",cefr:"B1",note:"Üstesinden gelmek"},mention:{tr:"Bahsetmek, Değinmek",pos:"verb",cefr:"B1",note:"Adını geçirmek"},notice:{tr:"Fark etmek",pos:"verb/noun",cefr:"A2",note:"Görmek, ayırtına varmak"},offer:{tr:"Teklif etmek, Sunmak",pos:"verb/noun",cefr:"A2",note:"Öneri sunmak"},participate:{tr:"Katılmak",pos:"verb",cefr:"B1",note:"Yer almak"},prefer:{tr:"Tercih etmek",pos:"verb",cefr:"A2",note:"Yeğlemek"},prepare:{tr:"Hazırlamak, Hazırlanmak",pos:"verb",cefr:"A2",note:"Önceden hazır etmek"},prevent:{tr:"Önlemek, Engel olmak",pos:"verb",cefr:"B1",note:"Oluşmasını engellemek"},provide:{tr:"Sağlamak, Temin etmek",pos:"verb",cefr:"B1",note:"Sunmak"},receive:{tr:"Almak, Kabul etmek",pos:"verb",cefr:"A2",note:"Gelen şeyi almak"},recommend:{tr:"Tavsiye etmek, Önermek",pos:"verb",cefr:"A2",note:"Öneri vermek"},refuse:{tr:"Reddetmek",pos:"verb",cefr:"B1",note:"Kabul etmemek"},remind:{tr:"Hatırlatmak",pos:"verb",cefr:"A2",note:"Aklına getirmek"},remember:{tr:"Hatırlamak",pos:"verb",cefr:"A1",note:"Unutmamak"},require:{tr:"Gerektirmek, İstemek",pos:"verb",cefr:"B1",note:"Gerekli kılmak"},suggest:{tr:"Önermek, Telkin etmek",pos:"verb",cefr:"B1",note:"Fikir vermek"},support:{tr:"Desteklemek",pos:"verb/noun",cefr:"A2",note:"Yardımcı olmak"},understand:{tr:"Anlamak",pos:"verb",cefr:"A1",note:"Kavramak"},understood:{tr:"Anladı",pos:"verb",cefr:"A1",note:"Understand geçmiş hali"},important:{tr:"Önemli",pos:"adj",cefr:"A1",note:"Büyük değer taşıyan"},necessary:{tr:"Gerekli, Zorunlu",pos:"adj",cefr:"A2",note:"Olmazsa olmaz"},difficult:{tr:"Zor, Güç",pos:"adj",cefr:"A1",note:"Kolay olmayan"},easy:{tr:"Kolay, Basit",pos:"adj",cefr:"A1",note:"Zor olmayan"},possible:{tr:"Mümkün, Olası",pos:"adj",cefr:"A2",note:"Gerçekleşebilir"},impossible:{tr:"İmkansız",pos:"adj",cefr:"A2",note:"Olamaz"},available:{tr:"Mevcut, Müsait",pos:"adj",cefr:"A2",note:"Kullanıma hazır"},similar:{tr:"Benzer",pos:"adj",cefr:"A2",note:"Benzeşen"},different:{tr:"Farklı",pos:"adj",cefr:"A1",note:"Aynı olmayan"},frequent:{tr:"Sık, Sıkça olan",pos:"adj",cefr:"B1",note:"Sık tekrarlanan"},rare:{tr:"Nadir, Ender",pos:"adj",cefr:"A2",note:"Az bulunan"},careful:{tr:"Dikkatli",pos:"adj",cefr:"A1",note:"Özen gösteren"},careless:{tr:"Dikkatsiz, Özensiz",pos:"adj",cefr:"A2",note:"Hata yapan"},polite:{tr:"Kibar, Nazik",pos:"adj",cefr:"A1",note:"Görgülü"},rude:{tr:"Kaba, Nezaketsiz",pos:"adj",cefr:"A2",note:"Kırıcı"},patient:{tr:"Sabırlı / Hasta",pos:"adj/noun",cefr:"B1",note:"Sabır gösteren veya hastane hastası"},confident:{tr:"Özgüvenli, Kendinden emin",pos:"adj",cefr:"B1",note:"Güveni tam"},anxious:{tr:"Endişeli, Kaygılı",pos:"adj",cefr:"B1",note:"Huzursuz"},fluent:{tr:"Akıcı (konuşma)",pos:"adj",cefr:"B1",note:"Takılmadan konuşabilen"},accurate:{tr:"Doğru, İsabetli",pos:"adj",cefr:"B1",note:"Hatasız"},although:{tr:"-e rağmen, Karşın",pos:"conjunction",cefr:"B1",note:"Zıtlık bağlacı"},though:{tr:"-e rağmen, Yine de",pos:"conjunction/adv",cefr:"B1",note:"Cümle sonunda: gerçi"},"even though":{tr:"-dığı halde, -e rağmen",pos:"conjunction",cefr:"B1",note:"Güçlü zıtlık"},however:{tr:"Ancak, Yine de",pos:"conjunction/adv",cefr:"A2",note:"Zıt fikir bildirir"},therefore:{tr:"Bu nedenle, Dolayısıyla",pos:"adverb",cefr:"B1",note:"Sonuç bildiren bağlaç"},furthermore:{tr:"Ayrıca, Dahası",pos:"adverb",cefr:"B2",note:"Ek bilgi bağlacı"},moreover:{tr:"Dahası, Üstelik",pos:"adverb",cefr:"B2",note:"Pekiştirme bağlacı"},meanwhile:{tr:"Bu sırada, O esnada",pos:"adverb",cefr:"B1",note:"Aynı anda gerçekleşen olaylar"},besides:{tr:"Ayrıca, -den başka",pos:"preposition/adv",cefr:"B1",note:"Bunun yanında"},otherwise:{tr:"Aksi takdirde, Yoksa",pos:"adverb",cefr:"B1",note:"Şartın gerçekleşmemesi durumu"},unless:{tr:"-medikçe, -mazsa",pos:"conjunction",cefr:"B1",note:"If not anlamına gelir"},since:{tr:"-den beri / Çünkü",pos:"preposition/conj",cefr:"A2",note:"Zaman veya sebep belirtir"},while:{tr:"-iken, Sırasında",pos:"conjunction",cefr:"A2",note:"Süreç bildiren bağlaç"},whereas:{tr:"Oysa, Halbuki",pos:"conjunction",cefr:"B2",note:"Karşılaştırmalı zıtlık"},despite:{tr:"-e rağmen",pos:"preposition",cefr:"B1",note:"Kendinden sonra isim/fiil-ing alır"},"in spite of":{tr:"-e rağmen",pos:"preposition",cefr:"B1",note:"Despite ile eşanlamlıdır"},"so that":{tr:"-sın diye, Amacıyla",pos:"conjunction",cefr:"B1",note:"Amaç bildiren bağlaç"},"in order to":{tr:"-mek için",pos:"conjunction",cefr:"B1",note:"Amaç bildirir (+ V1)"},passive:{tr:"Edilgen çatı (Yapıldı)",pos:"grammar",cefr:"B1",note:"Özne değil yapılan iş ön planda"},conditional:{tr:"Şart/Koşul cümlesi (If...)",pos:"grammar",cefr:"B1",note:"Eğer ile başlayan olasılıklar"},inversion:{tr:"Devrik yapı",pos:"grammar",cefr:"B2",note:"Vurgu için yardımcı fiilin başa gelmesi"},modal:{tr:"Kip/Yardımcı fiil (can, must, should)",pos:"grammar",cefr:"A2",note:"Gereklilik/olasılık yardımcı fiilleri"},gerund:{tr:"Fiilimsi (-ing ekiyle isimleşen fiil)",pos:"grammar",cefr:"B1",note:"Swimming is good"},infinitive:{tr:"Mastar hali (to + V1)",pos:"grammar",cefr:"A2",note:"To go, to learn"}};class W{constructor(){this.customCache=new Map,this.floatingEl=null,this.isListeningGlobal=!1,this.activeWord=null,this.lastDblClickTime=0}lookup(e){if(!e)return null;const t=e.trim().toLowerCase().replace(/[.,!?;:"'()\[\]{}]/g,"");if(!t||t.length<2)return null;if(this.customCache.has(t))return this.customCache.get(t);if(E[t]){const s={word:t,...E[t]};return this.customCache.set(t,s),s}const i=I.vocabulary_items||[],n=i.find(s=>s.word&&s.word.toLowerCase()===t);if(n){const s={word:n.word,tr:n.definition_tr||n.definition_en,pos:n.part_of_speech||"kelime",cefr:n.cefr_level||"A1",phonetic:n.phonetic,example:Array.isArray(n.example_sentences)?n.example_sentences[0]:null,note:n.collocations?`Kalıp: ${Array.isArray(n.collocations)?n.collocations.slice(0,3).join(", "):""}`:null};return this.customCache.set(t,s),s}const a=this.generateLemmas(t);for(const s of a){if(E[s]){const o={word:t,baseWord:s,...E[s],note:`Kök: ${s}`};return this.customCache.set(t,o),o}const r=i.find(o=>o.word&&o.word.toLowerCase()===s);if(r){const o={word:t,baseWord:r.word,tr:r.definition_tr||r.definition_en,pos:r.part_of_speech||"kelime",cefr:r.cefr_level||"A1",phonetic:r.phonetic,note:`Kök: ${r.word}`};return this.customCache.set(t,o),o}}return null}generateLemmas(e){const t=[];return e.endsWith("ing")&&e.length>5&&(t.push(e.slice(0,-3)),t.push(e.slice(0,-3)+"e")),e.endsWith("ied")&&e.length>4&&t.push(e.slice(0,-3)+"y"),e.endsWith("ed")&&e.length>4&&(t.push(e.slice(0,-2)),t.push(e.slice(0,-1))),e.endsWith("ies")&&e.length>4&&t.push(e.slice(0,-3)+"y"),e.endsWith("es")&&e.length>4&&(t.push(e.slice(0,-2)),t.push(e.slice(0,-1))),e.endsWith("s")&&!e.endsWith("ss")&&e.length>3&&t.push(e.slice(0,-1)),e.endsWith("ly")&&e.length>4&&t.push(e.slice(0,-2)),t}extractQuestionKeywords(e){if(!e)return[];const t=`${e.question||""} ${(e.options||[]).join(" ")} ${e.topic||""}`,i=t.toLowerCase().replace(/[^a-z\s-]/g," ").split(/\s+/).filter(s=>s.length>3),n=new Map,a=["under the weather","happy birthday","take out","went out","turn-taking","make a mistake","make progress"];for(const s of a)if(t.toLowerCase().includes(s)){const r=this.lookup(s);r&&n.set(s,r)}for(const s of i){if(n.size>=6)break;const r=this.lookup(s);r&&!n.has(r.word)&&n.set(r.word,r)}return Array.from(n.values()).filter(Boolean)}renderQuestionVocabBar(e){const t=this.extractQuestionKeywords(e);return!t||t.length===0?"":`
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
    `}bindVocabDrawerEvents(e){e&&(e.querySelectorAll(".vocab-drawer-toggle").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault();const n=t.closest(".question-vocab-drawer"),a=n==null?void 0:n.querySelector(".vocab-drawer-body"),s=n==null?void 0:n.querySelector(".drawer-chevron");if(a){const r=a.style.display!=="none";a.style.display=r?"none":"block",s&&(s.textContent=r?"▼":"▲"),n.classList.toggle("expanded",!r)}})}),e.querySelectorAll(".hint-tts").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const n=t.dataset.word;n&&b.speak(n)})}),e.querySelectorAll(".hint-save").forEach(t=>{t.addEventListener("click",async i=>{i.stopPropagation();const n=t.dataset.word,a=t.dataset.tr,s=t.dataset.cefr;n&&(await y.addCustomWord(n,a,s),t.textContent="✓ Eklendi",t.classList.add("saved"),u.showToast(`"${n}" kelime kartlarınıza eklendi! 📚`,"success"))})}))}getWordAtPoint(e,t){let i=null,n=0;if(document.caretRangeFromPoint){const a=document.caretRangeFromPoint(e,t);a&&(i=a.startContainer,n=a.startOffset)}else if(document.caretPositionFromPoint){const a=document.caretPositionFromPoint(e,t);a&&(i=a.offsetNode,n=a.offset)}if(i&&i.nodeType===Node.TEXT_NODE){const a=i.textContent||"";if(!a)return"";let s=n,r=n;for(;s>0&&/[\w'-]/.test(a[s-1]);)s--;for(;r<a.length&&/[\w'-]/.test(a[r]);)r++;return a.slice(s,r)}return""}async fetchOnlineTranslation(e){var i,n,a;const t=e.toLowerCase().trim();if(!t||t.length<2)return null;try{const s=new AbortController,r=setTimeout(()=>s.abort(),2600),o=await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(t)}&langpair=en|tr`,{signal:s.signal});if(clearTimeout(r),o.ok){const l=await o.json(),d=(i=l==null?void 0:l.responseData)==null?void 0:i.translatedText;if(d&&d.toLowerCase()!==t){const p={word:t,tr:d,pos:"kelime",cefr:"Sözlük",note:"Otomatik Çeviri"};return this.customCache.set(t,p),p}}}catch{}try{const s=new AbortController,r=setTimeout(()=>s.abort(),2e3),o=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURIComponent(t)}`,{signal:s.signal});if(clearTimeout(r),o.ok){const l=await o.json(),d=(a=(n=l==null?void 0:l[0])==null?void 0:n[0])==null?void 0:a[0];if(d&&d.toLowerCase()!==t){const p={word:t,tr:d,pos:"kelime",cefr:"Sözlük",note:"Google Çeviri"};return this.customCache.set(t,p),p}}}catch{}return null}async inspectWord(e,t){if(!e)return;const i=e.toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g,"").trim();if(!i||i.length<2)return;this.activeWord=i;const n=this.lookup(i);if(n){this.showFloatingPopover(n,t);return}const a={word:i,tr:"Anlamı aranıyor... ⏳",pos:"kelime",cefr:"Aranıyor",isLoading:!0};this.showFloatingPopover(a,t);const s=await this.fetchOnlineTranslation(i);this.activeWord===i&&this.floatingEl&&this.floatingEl.style.display!=="none"&&(s?this.updateFloatingPopoverContent(s):this.updateFloatingPopoverContent({word:i,tr:"Anlam bulunamadı (Çevrimdışı)",pos:"kelime",cefr:"Genel",note:"Sesli telaffuzunu dinleyebilir veya kartlarınıza ekleyebilirsiniz."}))}initGlobalListener(){if(this.isListeningGlobal)return;this.isListeningGlobal=!0;let e=document.getElementById("floating-word-inspector");e||(e=document.createElement("div"),e.id="floating-word-inspector",e.className="floating-word-inspector",e.style.display="none",document.body.appendChild(e)),this.floatingEl=e,document.addEventListener("dblclick",t=>{if(this.floatingEl&&this.floatingEl.contains(t.target))return;this.lastDblClickTime=Date.now();let i="";const n=window.getSelection();n&&n.toString().trim()&&(i=n.toString().trim()),i||(i=this.getWordAtPoint(t.clientX,t.clientY)),i&&this.inspectWord(i,{x:t.pageX,y:t.pageY,clientX:t.clientX,clientY:t.clientY})},!0),document.addEventListener("mouseup",t=>{this.floatingEl&&this.floatingEl.contains(t.target)||Date.now()-this.lastDblClickTime<400||setTimeout(()=>{const i=window.getSelection(),n=i?i.toString().trim():"";n&&n.length>=2&&n.length<=45&&n.includes(" ")&&this.inspectWord(n,{x:t.pageX,y:t.pageY,clientX:t.clientX,clientY:t.clientY})},80)}),document.addEventListener("mousedown",t=>{this.floatingEl&&this.floatingEl.style.display!=="none"&&(this.floatingEl.contains(t.target)||Date.now()-this.lastDblClickTime>250&&this.hideFloatingPopover())}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.hideFloatingPopover()})}showFloatingPopover(e,t={}){if(!this.floatingEl)return;this.renderPopoverHtml(e);const i=310,n=140;let a=t.x!==void 0?t.x:window.innerWidth/2,s=t.y!==void 0?t.y:window.innerHeight/2,r=a-i/2;r=Math.max(12,Math.min(window.innerWidth-i-12,r));let o=s-n-20;o<window.scrollY+10&&(o=s+25),this.floatingEl.style.top=`${Math.max(10,o)}px`,this.floatingEl.style.left=`${r}px`,this.floatingEl.style.display="block",this.bindPopoverButtons(e)}updateFloatingPopoverContent(e){this.floatingEl&&(this.renderPopoverHtml(e),this.bindPopoverButtons(e))}renderPopoverHtml(e){const t=e.isLoading;this.floatingEl.innerHTML=`
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
    `}bindPopoverButtons(e){var t,i,n;(t=document.getElementById("popover-close"))==null||t.addEventListener("click",a=>{a.stopPropagation(),this.hideFloatingPopover()}),(i=document.getElementById("popover-listen"))==null||i.addEventListener("click",a=>{a.stopPropagation(),b.speak(e.word)}),(n=document.getElementById("popover-add"))==null||n.addEventListener("click",async a=>{a.stopPropagation(),await y.addCustomWord(e.word,e.tr,e.cefr||"A1"),u.showToast(`"${e.word}" kelime kartlarınıza kaydedildi! 📚`,"success");const s=document.getElementById("popover-add");s&&(s.textContent="✓ Kaydedildi",s.style.background="rgba(16, 185, 129, 0.3)",s.style.color="#34d399")})}hideFloatingPopover(){this.floatingEl&&(this.floatingEl.style.display="none",this.activeWord=null)}}const q=new W;class R{constructor(){this.container=null,this.assessmentId=null,this.skills=["grammar","vocabulary","reading","listening","writing","speaking","pronunciation","sentence_formation","comprehension","communication"],this.skillNamesTr={grammar:"Dilbilgisi (Grammar)",vocabulary:"Kelime Haznesi (Vocabulary)",reading:"Okuma & Anlama (Reading)",listening:"Dinleme & Algılama (Listening)",writing:"Yazma Becerisi (Writing)",speaking:"Konuşma & Akıcılık (Speaking)",pronunciation:"Telaffuz & Aksan (Pronunciation)",sentence_formation:"Cümle Kurma (Syntax)",comprehension:"Kavrama Hızı (Comprehension)",communication:"Doğal İletişim (Communication)"},this.currentSkillIndex=0,this.currentQuestions=[],this.currentQuestionIndex=0,this.selectedOption=null,this.assessmentResults=null}async render(e){this.container=e,this.renderIntro()}renderIntro(){var e,t;this.container.innerHTML=`
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
    `,(e=document.getElementById("start-assessment-btn"))==null||e.addEventListener("click",()=>this.startAssessment()),(t=document.getElementById("skip-assessment-btn"))==null||t.addEventListener("click",async()=>{await y.skipAssessmentToA1(),u.showToast("Başlangıç seviyeniz A1 olarak ayarlandı. 0'dan eğitime hazırsınız! 🚀","success"),u.setView("dashboard")})}async startAssessment(){this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Seviye belirleme sınav motoru başlatılıyor...</p>
      </div>
    `;try{const e=await y.startAssessment();this.assessmentId=e.assessmentId,this.currentSkillIndex=0,await this.loadSkillQuestions()}catch(e){u.showToast("Sınav başlatılamadı: "+e.message,"error"),this.renderIntro()}}async loadSkillQuestions(){const e=this.skills[this.currentSkillIndex],t=this.skillNamesTr[e]||e;this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>${t} soruları hazırlanıyor...</p>
      </div>
    `;try{const i=await y.getAssessmentQuestions(this.assessmentId,e);this.currentQuestions=i.questions||[],this.currentQuestionIndex=0,this.currentQuestions.length===0?this.nextSkill():this.renderQuestion()}catch(i){u.showToast("Hata: "+i.message,"error"),this.nextSkill()}}renderQuestion(){const e=this.skills[this.currentSkillIndex],t=this.skillNamesTr[e]||e,i=this.currentQuestions[this.currentQuestionIndex];this.selectedOption=null;const n=Math.round((this.currentSkillIndex*Math.max(this.currentQuestions.length,1)+this.currentQuestionIndex)/(this.skills.length*3)*100);this.container.innerHTML=`
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
          ${q.renderQuestionVocabBar(i)}

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
    `,this.bindQuestionEvents(i)}bindQuestionEvents(e){var t,i;(t=document.getElementById("listen-question-btn"))==null||t.addEventListener("click",()=>{b.speak(e.question,{rate:.9})}),q.bindVocabDrawerEvents(this.container),document.querySelectorAll(".option-item").forEach(n=>{const a=()=>{document.querySelectorAll(".option-item").forEach(o=>o.classList.remove("selected")),n.classList.add("selected");const s=parseInt(n.dataset.index,10);this.selectedOption=(e.options||[])[s];const r=document.getElementById("submit-answer-btn");r&&(r.disabled=!1)};n.addEventListener("click",a),n.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),a())})}),(i=document.getElementById("submit-answer-btn"))==null||i.addEventListener("click",()=>{this.selectedOption!==null&&this.selectedOption!==void 0&&this.submitAnswer(e.id,this.selectedOption)})}async submitAnswer(e,t){const i=document.getElementById("submit-answer-btn");i&&(i.disabled=!0,i.textContent="Kontrol ediliyor...");try{const n=await y.submitAssessmentAnswer(this.assessmentId,e,t);this.showQuestionFeedback(n)}catch(n){u.showToast("Cevap kaydedilemedi: "+n.message,"error"),i&&(i.disabled=!1,i.textContent="Cevabı Onayla →")}}showQuestionFeedback(e){var a;const t=document.getElementById("feedback-card");if(!t)return;const i=document.getElementById("submit-answer-btn");i&&(i.style.display="none");const n=this.currentSkillIndex===this.skills.length-1&&this.currentQuestionIndex===this.currentQuestions.length-1;t.className=`card feedback-card ${e.isCorrect?"correct":"incorrect"}`,t.innerHTML=`
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
    `;try{this.assessmentResults=await y.completeAssessment(this.assessmentId),this.renderResults()}catch(e){u.showToast("Sonuçlar hesaplanırken hata: "+e.message,"error"),this.renderIntro()}}renderResults(){var i;const e=this.assessmentResults,t=e.overallCEFR||"A1";this.container.innerHTML=`
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
    `,(i=document.getElementById("btn-go-dashboard"))==null||i.addEventListener("click",()=>{u.setView("dashboard")})}}class U{constructor(){this.container=null,this.topics=[],this.selectedTopic=null,this.activeCategory="all",this.currentExerciseIndex=0,this.exercises=[],this.selectedOption=null,this.categoryLabelsTr={all:"Tüm Konular",tenses:"Zamanlar",modals:"Kipler (Modals)",clauses:"Yan Cümleler",determiners:"Belirteçler",prepositions:"Edatlar",sentence_structure:"Cümle Yapısı"}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Gramer Akademisi müfredatı yükleniyor...</p>
      </div>
    `;try{const t=await y.getGrammarTopics();this.topics=Array.isArray(t)?t:t.topics||[],this.topics.length>0&&!this.selectedTopic?await this.loadTopic(this.topics[0].slug):this.renderLayout()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Gramer konuları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadTopic(e){try{const t=await y.getGrammarTopic(e);this.selectedTopic=t.topic,this.exercises=t.exercises||[],this.currentExerciseIndex=0,this.selectedOption=null,this.renderLayout()}catch(t){u.showToast("Konu detayları yüklenemedi: "+t.message,"error")}}renderLayout(){const e=this.selectedTopic,t=e&&e.examples?typeof e.examples=="string"?JSON.parse(e.examples):e.examples:[],i=e&&e.rules?typeof e.rules=="string"?JSON.parse(e.rules):e.rules:[],n=e&&e.common_mistakes?typeof e.common_mistakes=="string"?JSON.parse(e.common_mistakes):e.common_mistakes:[],a=["all","tenses","modals","clauses","determiners","prepositions","sentence_structure"],s=this.activeCategory==="all"?this.topics:this.topics.filter(r=>r.category===this.activeCategory);this.container.innerHTML=`
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
    `,this.bindEvents()}renderExerciseSandbox(){const e=this.exercises[this.currentExerciseIndex];if(!e)return"";const t=e.prompt||e.question||e.sentence||"Cümle yüklenemedi.",i=e.options?typeof e.options=="string"?JSON.parse(e.options):e.options:null;let n="Aşağıdaki alıştırmayı tamamlayın:";return e.exercise_type==="fill_blank"?n="Boşluğa gelecek uygun kelime veya çekimi yazın:":e.exercise_type==="multiple_choice"?n="Aşağıdaki cümleyi en uygun seçenekle tamamlayın:":e.exercise_type==="error_correction"?n="Cümledeki hatayı bulun ve cümlenin doğru halini yazın:":e.exercise_type==="sentence_transform"?n="Cümleyi parantez içindeki talimata göre dönüştürün:":e.exercise_type==="sentence_creation"&&(n="İstenen kurala uygun bir İngilizce cümle kurun:"),`
      <div class="exercise-sandbox">
        <div class="exercise-prompt-wrap">
          <div class="exercise-instruction">${n}</div>
          <div class="exercise-prompt">${t}</div>
        </div>

        <!-- Vocabulary & Structure Hints -->
        ${q.renderQuestionVocabBar({question:t,options:i,id:e.id})}

        ${i?`
          <div class="exercise-options-grid">
            ${i.map((a,s)=>`
              <button class="exercise-opt-btn" data-opt-idx="${s}" data-value="${a}">
                <span class="opt-prefix">${String.fromCharCode(65+s)}</span>
                <span class="opt-text">${a}</span>
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
    `}bindEvents(){var t;document.querySelectorAll(".topic-nav-item").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.slug;n&&this.loadTopic(n)})}),document.querySelectorAll(".cat-tab").forEach(i=>{i.addEventListener("click",()=>{this.activeCategory=i.dataset.cat,this.renderLayout()})}),document.querySelectorAll(".tts-play-btn").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.text;n&&b.speak(n)})}),q.bindVocabDrawerEvents(this.container),document.querySelectorAll(".exercise-opt-btn").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".exercise-opt-btn").forEach(a=>a.classList.remove("selected")),i.classList.add("selected"),this.selectedOption=i.dataset.value;const n=document.getElementById("btn-check-exercise");n&&(n.disabled=!1)})});const e=document.getElementById("exercise-input");e==null||e.addEventListener("input",i=>{this.selectedOption=i.target.value.trim();const n=document.getElementById("btn-check-exercise");n&&(n.disabled=!this.selectedOption)}),e==null||e.addEventListener("keydown",i=>{if(i.key==="Enter"){i.preventDefault();const n=i.target.value.trim();n&&(this.selectedOption=n,this.checkExerciseAnswer())}}),(t=document.getElementById("btn-check-exercise"))==null||t.addEventListener("click",()=>{this.selectedOption&&this.checkExerciseAnswer()})}async checkExerciseAnswer(){var i;const e=this.exercises[this.currentExerciseIndex];if(!e)return;const t=document.getElementById("btn-check-exercise");t&&(t.disabled=!0);try{const n=await y.submitGrammarExercise(e.id,this.selectedOption),a=document.getElementById("exercise-feedback");if(!a)return;a.className=`exercise-feedback-box ${n.isCorrect?"correct":"incorrect"}`,a.innerHTML=`
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
          `,this.bindEvents())})}catch(n){u.showToast("Cevap kontrol edilemedi: "+n.message,"error"),t&&(t.disabled=!1)}}}class K{constructor(){this.container=null,this.mode="review",this.reviewItems=[],this.currentIndex=0,this.isCardFlipped=!1,this.dictionaryItems=[],this.searchQuery="",this.levelFilter="all",this.onlineSearchResult=null,this.isSearchingOnline=!1,this.onlineSearchError=null,this.audioElement=null}async render(e){var t;this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Aralıklı tekrar kelime kuyruğunuz ve 155+ kelimelik arşiv yükleniyor...</p>
      </div>
    `;try{const i=await y.getReviewQueue();this.reviewItems=i.items||[],this.currentIndex=0,this.isCardFlipped=!1;const n=await y.getVocabularyItems();this.dictionaryItems=n.items||[],this.renderContent()}catch(i){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Kelimeler yüklenemedi</h3>
          <p>${i.message}</p>
          <button class="btn btn-primary" id="retry-vocab-btn">Tekrar Dene</button>
        </div>
      `,(t=document.getElementById("retry-vocab-btn"))==null||t.addEventListener("click",()=>this.render(e))}}renderContent(){this.container.innerHTML=`
      <div class="vocab-layout">
        <!-- Mode Switcher & Stats Header -->
        <div class="vocab-header card">
          <div class="vocab-header-left">
            <h1 class="vocab-title">Akıllı Kelime Kartları & Sözlük Arşivi</h1>
            <p class="vocab-subtitle">155+ kelimelik CEFR kütüphanesi & canlı internet sözlüğü ile kalıcı kelime hafızası</p>
          </div>
          <div class="vocab-mode-toggles">
            <button class="btn ${this.mode==="review"?"btn-primary":"btn-secondary"}" id="toggle-review-mode">
              <span>🗂️ Tekrar Bekleyenler</span>
              <span class="btn-badge">${this.reviewItems.length}</span>
            </button>
            <button class="btn ${this.mode==="dictionary"?"btn-primary":"btn-secondary"}" id="toggle-dict-mode">
              <span>📖 Kelime Kütüphanesi</span>
              <span class="btn-badge">${this.dictionaryItems.length}</span>
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
              <strong>Hızlı Kelime Paketi Yükle:</strong>
              <span class="pack-toolbar-sub">Dilediğiniz seviyedeki kelimeleri anında çalışma kartlarınıza ekleyin</span>
            </div>
          </div>
          <div class="pack-btn-group">
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="A1" title="35 Temel A1 Kelimesi">📥 +A1 Temel (35)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="A2" title="35 Günlük Yaşam Kelimesi">📥 +A2 Günlük (35)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="B1" title="35 Orta Seviye Kelimesi">📥 +B1 Orta (35)</button>
            <button class="btn btn-secondary btn-sm pack-load-btn" data-level="B2" title="30 İleri Seviye Kelimesi">📥 +B2 İleri (30)</button>
            <button class="btn btn-primary btn-sm pack-load-btn" data-level="all" title="Tüm 155 Kelimelik Arşivi Yükle">🌟 +Tüm Arşivi Yükle (155)</button>
          </div>
        </div>

        <div class="vocab-body" id="vocab-body">
          ${this.mode==="review"?this.renderReviewArea():this.mode==="dictionary"?this.renderDictionaryArea():this.renderOnlineArea()}
        </div>
      </div>
    `,this.bindEvents()}renderReviewArea(){if(this.reviewItems.length===0)return`
        <div class="card empty-review-card">
          <div class="empty-icon">🎉</div>
          <h2>Tebrikler! Tekrar Kuyruğu Temizlendi</h2>
          <p>Şu anda tekrar etmeniz gereken kelime kartı kalmadı. Öğrenmeye devam etmek için yeni bir seviye paketi yükleyebilir veya internet sözlüğünden dilediğiniz kelimeyi aratıp ekleyebilirsiniz.</p>
          
          <div class="empty-pack-picker">
            <h4>Hemen Yeni Kelimelerle Çalışmaya Devam Et:</h4>
            <div class="empty-pack-buttons">
              <button class="btn btn-secondary pack-load-btn" data-level="A1">📥 +A1 Temel Kelimeler (35)</button>
              <button class="btn btn-secondary pack-load-btn" data-level="A2">📥 +A2 Günlük Yaşam (35)</button>
              <button class="btn btn-secondary pack-load-btn" data-level="B1">📥 +B1 Orta Seviye (35)</button>
              <button class="btn btn-secondary pack-load-btn" data-level="B2">📥 +B2 İleri Seviye (30)</button>
              <button class="btn btn-primary pack-load-btn" data-level="all">🌟 +Tüm 155 Kelimelik Arşivi Yükle</button>
            </div>
          </div>

          <div class="empty-actions-row">
            <button class="btn btn-secondary" id="switch-to-dict-btn">📖 Tüm Kelime Kütüphanesini Gör (${this.dictionaryItems.length} Kelime) →</button>
            <button class="btn btn-secondary" id="switch-to-online-btn">🌐 İnternetten Yeni Kelime Bul →</button>
          </div>
        </div>
      `;const e=this.reviewItems[this.currentIndex];if(!e)return`
        <div class="card empty-review-card">
          <div class="empty-icon">✅</div>
          <h2>Oturum Başarıyla Tamamlandı!</h2>
          <p>Harika odaklanma! Bu oturumdaki tüm kelime kartlarını gözden geçirdiniz.</p>
          <div class="empty-actions-row">
            <button class="btn btn-primary" id="refresh-queue-btn">Kelimeleri Yenile</button>
            <button class="btn btn-secondary pack-load-btn" data-level="all">Tüm Arşivden Daha Fazla Kelime Aç</button>
          </div>
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
          <div class="dict-search-row">
            <input type="text" class="dict-search-input" id="dict-search-input" placeholder="Kütüphanede kelime ara (İngilizce veya Türkçe)..." value="${this.searchQuery}">
            <button class="btn btn-primary btn-sm" id="btn-quick-online-search" title="Bu kelimeyi internet sözlüğünde ara">
              🌐 İnternette Ara
            </button>
          </div>
          
          <div class="level-filter-tabs">
            ${e.map(i=>`
              <button class="level-tab ${this.levelFilter===i?"active":""}" data-level="${i}">${i==="all"?`Tümü (${this.dictionaryItems.length})`:i}</button>
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
                <th>İngilizce Tanım & Örnek</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              ${t.length===0?`
                <tr>
                  <td colspan="6" style="text-align: center; padding: 2rem;">
                    <p style="color: var(--text-muted); margin-bottom: 1rem;">"${this.searchQuery}" yerel arşivde bulunamadı.</p>
                    <button class="btn btn-primary" id="btn-search-online-now">🌐 İnternet Sözlüğünden Ara & Ekle</button>
                  </td>
                </tr>
              `:t.map(i=>{const n=i.examples?typeof i.examples=="string"?JSON.parse(i.examples):i.examples:[];return`
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
                      ${n.length>0?`<div class="dict-row-example">"${n[0]}"</div>`:""}
                    </td>
                    <td class="dict-actions-cell">
                      <button class="tts-play-btn dict-tts" data-text="${i.word}" title="Telaffuzu Dinle">🔊</button>
                      <button class="btn btn-secondary btn-xs add-to-due-btn" data-word="${i.word}" title="Kartlarıma Tekrar Olarak Ekle">➕ Kart</button>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}renderOnlineArea(){return`
      <div class="online-dict-container card">
        <div class="online-dict-header">
          <h2>🌐 Canlı İnternet Sözlüğü (Free Dictionary API)</h2>
          <p>Dünyadaki tüm İngilizce kelimeleri gerçek zamanlı olarak aratın, IPA telaffuzunu ve sesli okunuşunu dinleyin, tek tıkla hafıza kartlarınıza ekleyin.</p>
        </div>

        <div class="online-search-bar">
          <input type="text" class="dict-search-input" id="online-search-input" placeholder="Aramak istediğiniz İngilizce kelimeyi yazın (örn: resilient, serendipity, achieve, phenomenon)..." value="${this.searchQuery}" />
          <button class="btn btn-primary" id="btn-trigger-online-search">
            🔍 İnternette Ara
          </button>
        </div>

        <div class="online-search-status" id="online-search-status">
          ${this.isSearchingOnline?`
            <div class="online-loading-spinner">
              <div class="spinner"></div>
              <p>İnternet sözlük arşivinden veriler ve sesli telaffuz getiriliyor...</p>
            </div>
          `:""}

          ${this.onlineSearchError?`
            <div class="alert alert-warning">
              ⚠️ ${this.onlineSearchError}
            </div>
          `:""}
        </div>

        ${this.onlineSearchResult?this.renderOnlineResultCard(this.onlineSearchResult):`
          <div class="online-suggestions">
            <h4>💡 Popüler Arama Örnekleri:</h4>
            <div class="suggestion-tags">
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
    `}bindEvents(){var n,a,s,r,o,l,d,p,g,k,f,_,A,S;(n=document.getElementById("toggle-review-mode"))==null||n.addEventListener("click",()=>{this.mode="review",this.renderContent()}),(a=document.getElementById("toggle-dict-mode"))==null||a.addEventListener("click",()=>{this.mode="dictionary",this.renderContent()}),(s=document.getElementById("toggle-online-mode"))==null||s.addEventListener("click",()=>{this.mode="online",this.renderContent()}),(r=document.getElementById("switch-to-dict-btn"))==null||r.addEventListener("click",()=>{this.mode="dictionary",this.renderContent()}),(o=document.getElementById("switch-to-online-btn"))==null||o.addEventListener("click",()=>{this.mode="online",this.renderContent()}),(l=document.getElementById("refresh-queue-btn"))==null||l.addEventListener("click",()=>{this.render(this.container)}),document.querySelectorAll(".pack-load-btn").forEach(m=>{m.addEventListener("click",async()=>{const h=m.dataset.level||"A1";try{const v=await y.loadWordPack(h);u.showToast(`✅ ${h==="all"?"Tüm 155 kelime":h+" seviyesi"} kelime kartlarına yüklendi! (${v.totalDue} kelime tekrar bekliyor)`,"success"),await this.render(this.container)}catch(v){u.showToast("Paket yüklenemedi: "+v.message,"error")}})}),document.querySelectorAll(".add-to-due-btn").forEach(m=>{m.addEventListener("click",async()=>{const h=m.dataset.word;try{await y.addCustomWord(h,"","A1"),u.showToast(`"${h}" kelime kartlarına eklendi!`,"success");const v=await y.getReviewQueue();this.reviewItems=v.items||[];const w=document.querySelector("#toggle-review-mode .btn-badge");w&&(w.textContent=this.reviewItems.length)}catch(v){u.showToast("Eklenemedi: "+v.message,"error")}})});const e=document.getElementById("flashcard-element");e==null||e.addEventListener("click",()=>this.toggleFlip()),(d=document.getElementById("btn-manual-flip"))==null||d.addEventListener("click",()=>this.toggleFlip()),(p=document.getElementById("card-tts-btn"))==null||p.addEventListener("click",m=>{m.stopPropagation();const h=this.reviewItems[this.currentIndex];h&&b.speak(h.word)}),(g=document.getElementById("card-back-tts-btn"))==null||g.addEventListener("click",m=>{m.stopPropagation();const h=this.reviewItems[this.currentIndex];h&&b.speak(h.word)}),document.querySelectorAll(".rating-btn").forEach(m=>{m.addEventListener("click",h=>{h.stopPropagation();const v=parseInt(m.dataset.rating,10);this.submitRating(v)})});const t=document.getElementById("dict-search-input");t==null||t.addEventListener("input",m=>{this.searchQuery=m.target.value;const h=document.getElementById("vocab-body");h&&this.mode==="dictionary"&&(h.innerHTML=this.renderDictionaryArea()),this.bindEvents()}),(k=document.getElementById("btn-quick-online-search"))==null||k.addEventListener("click",()=>{this.mode="online",this.renderContent(),this.searchQuery&&this.performOnlineSearch(this.searchQuery)}),(f=document.getElementById("btn-search-online-now"))==null||f.addEventListener("click",()=>{this.mode="online",this.renderContent(),this.searchQuery&&this.performOnlineSearch(this.searchQuery)}),document.querySelectorAll(".level-tab").forEach(m=>{m.addEventListener("click",()=>{this.levelFilter=m.dataset.level;const h=document.getElementById("vocab-body");h&&this.mode==="dictionary"&&(h.innerHTML=this.renderDictionaryArea()),this.bindEvents()})}),document.querySelectorAll(".dict-tts").forEach(m=>{m.addEventListener("click",()=>{const h=m.dataset.text;h&&b.speak(h)})});const i=document.getElementById("online-search-input");i==null||i.addEventListener("keydown",m=>{if(m.key==="Enter"){const h=i.value.trim();h&&this.performOnlineSearch(h)}}),(_=document.getElementById("btn-trigger-online-search"))==null||_.addEventListener("click",()=>{var h;const m=(h=document.getElementById("online-search-input"))==null?void 0:h.value.trim();m&&this.performOnlineSearch(m)}),document.querySelectorAll(".suggestion-chip").forEach(m=>{m.addEventListener("click",()=>{const h=m.dataset.word;if(h){const v=document.getElementById("online-search-input");v&&(v.value=h),this.performOnlineSearch(h)}})}),(A=document.getElementById("play-online-audio-btn"))==null||A.addEventListener("click",()=>{const m=document.getElementById("play-online-audio-btn"),h=m==null?void 0:m.dataset.audio,v=m==null?void 0:m.dataset.word;if(h)try{this.audioElement&&this.audioElement.pause(),this.audioElement=new Audio(h),this.audioElement.play().catch(()=>{v&&b.speak(v)})}catch{v&&b.speak(v)}else v&&b.speak(v)}),(S=document.getElementById("btn-save-online-word"))==null||S.addEventListener("click",async()=>{if(!this.onlineSearchResult)return;const m=document.getElementById("online-tr-value"),h=m?m.value.trim():this.onlineSearchResult.definition_tr,v=this.onlineSearchResult;try{await y.addCustomWord(v.word,h,"B1",v.example||"",v.phonetic,v.part_of_speech),u.showToast(`🎉 "${v.word}" kelimesi başarıyla kartlarınıza eklendi ve aktif edildi!`,"success");const w=await y.getReviewQueue();this.reviewItems=w.items||[];const T=await y.getVocabularyItems();this.dictionaryItems=T.items||[],this.mode="review",this.renderContent()}catch(w){u.showToast("Kelime eklenirken hata: "+w.message,"error")}})}async performOnlineSearch(e){this.searchQuery=e,this.isSearchingOnline=!0,this.onlineSearchError=null,this.onlineSearchResult=null;const t=document.getElementById("online-search-status");t&&(t.innerHTML=`
        <div class="online-loading-spinner">
          <div class="spinner"></div>
          <p>"${e}" internet sözlük arşivinden getiriliyor...</p>
        </div>
      `);try{const i=await y.searchOnlineDictionary(e);this.onlineSearchResult=i,this.isSearchingOnline=!1,this.renderContent()}catch{this.isSearchingOnline=!1,this.onlineSearchError=`"${e}" internet sözlüğünde bulunamadı veya bağlantı hatası oluştu.`,this.renderContent()}}toggleFlip(){this.isCardFlipped=!this.isCardFlipped;const e=document.getElementById("flashcard-element"),t=document.getElementById("rating-bar"),i=document.getElementById("btn-manual-flip");if(e&&e.classList.toggle("flipped",this.isCardFlipped),t&&(t.style.visibility=this.isCardFlipped?"visible":"hidden"),i&&(i.textContent=this.isCardFlipped?"🔄 Kartın Önünü Gör":"🔄 Kartı Çevir (Anlamı Gör)"),this.isCardFlipped){const n=this.reviewItems[this.currentIndex];n&&b.speak(n.word)}}async submitRating(e){const t=this.reviewItems[this.currentIndex];if(t)try{await y.submitReview(t.id,e),this.isCardFlipped=!1,this.currentIndex++;const i=document.getElementById("vocab-body");i&&(i.innerHTML=this.renderReviewArea()),this.bindEvents()}catch(i){u.showToast("Değerlendirme kaydedilemedi: "+i.message,"error")}}}class G{constructor(){this.container=null,this.materials=[],this.selectedMaterial=null,this.readingStartTime=Date.now(),this.userAnswers={},this.submissionResult=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Okuma metinleri yükleniyor...</p>
      </div>
    `;try{const t=await y.getReadingMaterials();this.materials=Array.isArray(t)?t:t.materials||[],this.materials.length>0&&!this.selectedMaterial?await this.loadMaterial(this.materials[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Metinler yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadMaterial(e){try{const t=await y.getReadingMaterial(e);this.selectedMaterial=t.material,this.readingStartTime=Date.now(),this.userAnswers={},this.submissionResult=null,this.renderContent()}catch(t){u.showToast("Metin yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedMaterial,t=e&&e.comprehension_questions?typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions:[],i=e&&e.key_vocabulary?typeof e.key_vocabulary=="string"?JSON.parse(e.key_vocabulary):e.key_vocabulary:[];this.container.innerHTML=`
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
    `,this.bindEvents()}bindEvents(){var e,t,i;this.container.querySelectorAll(".catalog-item").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.id;a&&this.loadMaterial(a)})}),(e=document.getElementById("read-aloud-btn"))==null||e.addEventListener("click",()=>{this.selectedMaterial&&b.speak(this.selectedMaterial.content,{rate:.9})}),(t=document.getElementById("stop-read-btn"))==null||t.addEventListener("click",()=>{b.stop()}),document.querySelectorAll(".vocab-pill").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.word;a&&b.speak(a)})}),document.querySelectorAll(".comp-opt-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.idx,s=n.dataset.val;this.userAnswers[a]=s,n.parentElement.querySelectorAll(".comp-opt-btn").forEach(r=>r.classList.remove("selected")),n.classList.add("selected")})}),(i=document.getElementById("submit-reading-btn"))==null||i.addEventListener("click",()=>{this.submitComprehension()})}async submitComprehension(){const e=Math.round((Date.now()-this.readingStartTime)/1e3),t=document.getElementById("submit-reading-btn");t&&(t.disabled=!0);try{const i=await y.submitReading(this.selectedMaterial.id,this.userAnswers,e),n=document.getElementById("comp-results-box");n&&(n.innerHTML=`
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
        `,n.style.display="block"),u.showToast(`Okuma tamamlandı! Skorunuz: %${i.score}`,i.score>=70?"success":"info")}catch(i){u.showToast("Sonuçlar kaydedilemedi: "+i.message,"error"),t&&(t.disabled=!1)}}}class V{constructor(){this.container=null,this.materials=[],this.selectedMaterial=null,this.speed=1,this.accent="en-US",this.showTranscript=!1,this.listenCount=0,this.userAnswers={}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Dinleme parçaları yükleniyor...</p>
      </div>
    `;try{const t=await y.getListeningMaterials();this.materials=Array.isArray(t)?t:t.materials||[],this.materials.length>0&&!this.selectedMaterial?await this.loadMaterial(this.materials[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Dinleme parçaları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadMaterial(e){try{const t=await y.getListeningMaterial(e);this.selectedMaterial=t.material,this.speed=this.selectedMaterial.speech_rate==="slow"?.8:1,this.accent=this.selectedMaterial.accent==="british"?"en-GB":"en-US",this.showTranscript=!1,this.listenCount=0,this.userAnswers={},this.renderContent()}catch(t){u.showToast("Parça yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedMaterial,t=e&&e.comprehension_questions?typeof e.comprehension_questions=="string"?JSON.parse(e.comprehension_questions):e.comprehension_questions:[];this.container.innerHTML=`
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
    `,this.bindEvents()}bindEvents(){var e,t,i,n;this.container.querySelectorAll(".track-item").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.id;s&&this.loadMaterial(s)})}),(e=document.getElementById("play-audio-btn"))==null||e.addEventListener("click",()=>{if(this.selectedMaterial){const a=this.selectedMaterial.audio_text||this.selectedMaterial.transcript||"";this.listenCount++;const s=document.getElementById("listen-count-val");s&&(s.textContent=this.listenCount),b.speak(a,{rate:this.speed,lang:this.accent})}}),(t=document.getElementById("pause-audio-btn"))==null||t.addEventListener("click",()=>{b.stop()}),document.querySelectorAll(".speed-btn").forEach(a=>{a.addEventListener("click",()=>{this.speed=parseFloat(a.dataset.speed),document.querySelectorAll(".speed-btn").forEach(s=>s.classList.remove("active")),a.classList.add("active")})}),document.querySelectorAll(".accent-btn").forEach(a=>{a.addEventListener("click",()=>{this.accent=a.dataset.accent,document.querySelectorAll(".accent-btn").forEach(s=>s.classList.remove("active")),a.classList.add("active")})}),(i=document.getElementById("toggle-transcript-btn"))==null||i.addEventListener("click",()=>{this.showTranscript=!this.showTranscript;const a=document.getElementById("transcript-content"),s=document.getElementById("toggle-transcript-btn");a&&(a.style.display=this.showTranscript?"block":"none"),s&&(s.textContent=this.showTranscript?"Transkripti Gizle":"👁️ İngilizce Transkripti Göster")}),document.querySelectorAll(".l-opt-btn").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.qIdx,r=a.dataset.val;this.userAnswers[s]=r,a.parentElement.querySelectorAll(".l-opt-btn").forEach(o=>o.classList.remove("selected")),a.classList.add("selected")})}),(n=document.getElementById("submit-listening-btn"))==null||n.addEventListener("click",()=>{this.submitListeningAnswers()})}async submitListeningAnswers(){const e=document.getElementById("submit-listening-btn");e&&(e.disabled=!0);try{const t=await y.submitListening(this.selectedMaterial.id,this.userAnswers,this.listenCount),i=document.getElementById("l-results");i&&(i.innerHTML=`
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
        `,i.style.display="block"),u.showToast(`Dinleme testi bitti! Skorunuz: %${t.score}`,t.score>=70?"success":"info")}catch(t){u.showToast("Cevaplar kaydedilemedi: "+t.message,"error"),e&&(e.disabled=!1)}}}class Y{constructor(){this.container=null,this.prompts=[],this.selectedPrompt=null,this.writingStartTime=Date.now(),this.evaluation=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Yazma stüdyosu konuları yükleniyor...</p>
      </div>
    `;try{const t=await y.getWritingPrompts();this.prompts=Array.isArray(t)?t:t.prompts||[],this.prompts.length>0&&!this.selectedPrompt&&(this.selectedPrompt=this.prompts[0]),this.renderContent()}catch(t){this.container.innerHTML=`
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
    `,this.bindEvents()}bindEvents(){var a;this.container.querySelectorAll(".prompt-item").forEach(s=>{s.addEventListener("click",()=>{const r=parseInt(s.dataset.id,10);this.selectedPrompt=this.prompts.find(o=>o.id===r),this.writingStartTime=Date.now(),this.renderContent()})});const e=document.getElementById("writing-input"),t=document.getElementById("word-count-val"),i=document.getElementById("sentence-count-val"),n=document.getElementById("avg-len-val");e==null||e.addEventListener("input",()=>{const s=e.value.trim(),r=s?s.split(/\s+/).filter(Boolean).length:0,o=(s.match(/[^.!?]+[.!?]+/g)||[]).length||(r>0?1:0),l=o>0?(r/o).toFixed(1):0;t&&(t.textContent=r),i&&(i.textContent=o),n&&(n.textContent=`${l} kelime`)}),(a=document.getElementById("submit-writing-btn"))==null||a.addEventListener("click",()=>{this.submitWritingText()})}async submitWritingText(){var i;const e=(i=document.getElementById("writing-input"))==null?void 0:i.value.trim();if(!e||e.split(/\s+/).length<5){u.showToast("Lütfen değerlendirme için en az 5 kelimelik bir metin yazın.","error");return}const t=document.getElementById("submit-writing-btn");t&&(t.disabled=!0,t.textContent="İnceleniyor...");try{const n=await y.submitWriting(this.selectedPrompt.id,e),a=document.getElementById("writing-eval-card");a&&(a.innerHTML=`
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
        `,a.style.display="block",a.scrollIntoView({behavior:"smooth"})),u.showToast("Yazınız başarıyla değerlendirildi! (+30 XP)","success")}catch(n){u.showToast("Değerlendirme yapılamadı: "+n.message,"error")}finally{t&&(t.disabled=!1,t.textContent="Yazımı Analiz Et ve Puanla →")}}}class N{constructor(){this.container=null,this.scenarios=[],this.selectedScenario=null,this.messages=[],this.isRecording=!1,this.completedObjectives=new Set}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Konuşma senaryoları yükleniyor...</p>
      </div>
    `;try{const t=await y.getSpeakingScenarios();this.scenarios=Array.isArray(t)?t:t.scenarios||[],this.scenarios.length>0&&!this.selectedScenario?await this.loadScenario(this.scenarios[0].id):this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>Konuşma senaryoları yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}async loadScenario(e){try{const t=await y.getSpeakingScenario(e);this.selectedScenario=t.scenario,this.completedObjectives=new Set,this.messages=[{sender:"ai",name:this.selectedScenario.ai_role||"Diyalog Partneri",text:this.selectedScenario.starter_message||"Hello! How can I help you today?"}],this.renderContent(),this.selectedScenario.starter_message&&b.speak(this.selectedScenario.starter_message)}catch(t){u.showToast("Senaryo yüklenemedi: "+t.message,"error")}}renderContent(){const e=this.selectedScenario,t=e&&e.key_phrases?typeof e.key_phrases=="string"?JSON.parse(e.key_phrases):e.key_phrases:[],i=e&&e.objectives?typeof e.objectives=="string"?JSON.parse(e.objectives):e.objectives:[];this.container.innerHTML=`
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
    `,this.bindEvents()}bindEvents(){var t,i;this.container.querySelectorAll(".scenario-item").forEach(n=>{n.addEventListener("click",()=>{const a=parseInt(n.dataset.id,10);this.loadScenario(a)})}),document.querySelectorAll(".phrase-tag").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.phrase;a&&b.speak(a)})}),document.querySelectorAll(".bubble-tts").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.text;a&&b.speak(a)})});const e=document.getElementById("btn-record-voice");e==null||e.addEventListener("click",()=>{this.toggleSpeechRecognition()}),(t=document.getElementById("btn-send-message"))==null||t.addEventListener("click",()=>{this.sendUserMessage()}),(i=document.getElementById("dialogue-text-input"))==null||i.addEventListener("keydown",n=>{n.key==="Enter"&&this.sendUserMessage()})}toggleSpeechRecognition(){if(!b.hasRecognition){u.showToast("Tarayıcınız ses tanımayı desteklemiyor. Lütfen yazarak cevap verin.","error");return}this.isRecording?(b.stopListening(),this.isRecording=!1,this.renderContent()):(this.isRecording=!0,this.renderContent(),b.listen(e=>{this.isRecording=!1;const t=document.getElementById("dialogue-text-input");t&&(t.value=e),this.sendUserMessage(e)},()=>{this.isRecording=!1,this.renderContent()}))}sendUserMessage(e){const t=document.getElementById("dialogue-text-input"),i=e||(t?t.value.trim():"");if(!i)return;t&&(t.value=""),this.messages.push({sender:"user",name:"Siz",text:i}),this.renderContent();const n=document.getElementById("dialogue-messages");n&&(n.scrollTop=n.scrollHeight),setTimeout(()=>{var r;const a=this.generateAiResponse(i);this.messages.push({sender:"ai",name:((r=this.selectedScenario)==null?void 0:r.ai_role)||"Partner",text:a}),this.renderContent();const s=document.getElementById("dialogue-messages");s&&(s.scrollTop=s.scrollHeight),b.speak(a)},800)}generateAiResponse(e){const t=e.toLowerCase();return t.includes("coffee")||t.includes("tea")||t.includes("water")||t.includes("like")?"Certainly! That sounds great. Would you like anything else to eat with that?":t.includes("how much")||t.includes("bill")||t.includes("check")?"That will be 4 dollars, please. Are you paying by card or cash?":t.includes("hello")||t.includes("hi")?"Hello there! How can I assist you today?":t.includes("thank")?"You're very welcome! Have a wonderful day!":"That's clear. Thank you for telling me. Let's continue: what would you like to do next?"}}class F{constructor(){this.container=null,this.activeTab="minimal_pairs",this.isRecording=!1,this.currentScore=null}render(e){this.container=e,this.renderContent()}renderContent(){this.container.innerHTML=`
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
    `}bindEvents(){document.querySelectorAll(".pron-tabs .btn").forEach(e=>{e.addEventListener("click",()=>{this.activeTab=e.dataset.tab,this.renderContent()})}),document.querySelectorAll(".pron-tts").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.text;t&&b.speak(t)})}),document.querySelectorAll(".test-mic-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target;if(!b.hasRecognition){u.showToast("Mikrofon ses tanıma bu tarayıcıda desteklenmiyor.","error");return}e.textContent="🎙️ Dinleniyor...",e.classList.add("pulse"),b.listen(i=>{e.classList.remove("pulse");const n=i.trim().toLowerCase(),a=t.trim().toLowerCase();n.includes(a)||a.includes(n)?(e.textContent=`✅ Harika! "${i}"`,u.showToast(`Mükemmel telaffuz! Algılanan: "${i}"`,"success")):(e.textContent=`Tekrar dene (Duyulan: "${i}")`,u.showToast(`Duyulan: "${i}". Hedef kelimeye tekrar çalışın.`,"info"))},()=>{e.classList.remove("pulse"),e.textContent=`🎙️ "${t}" Telaffuz Et`})})})}}class Q{constructor(){this.container=null,this.errors=[],this.filterSkill="all",this.showResolved=!1,this.skillNamesTr={all:"Tümü",grammar:"Dilbilgisi",vocabulary:"Kelime",writing:"Yazma",speaking:"Konuşma",sentence_formation:"Cümle Kurma"}}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Kişisel hata defteriniz yükleniyor...</p>
      </div>
    `;try{const t=await y.getErrors({resolved:this.showResolved?1:0});this.errors=t.errors||[],this.renderContent()}catch(t){this.container.innerHTML=`
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
    `,this.bindEvents()}bindEvents(){var e;this.container.querySelectorAll(".skill-tab").forEach(t=>{t.addEventListener("click",()=>{this.filterSkill=t.dataset.skill,this.renderContent()})}),(e=document.getElementById("toggle-resolved-btn"))==null||e.addEventListener("click",async()=>{this.showResolved=!this.showResolved,await this.render(this.container)}),this.container.querySelectorAll(".resolve-err-btn").forEach(t=>{t.addEventListener("click",async()=>{const i=t.dataset.id;try{await y.resolveError(i),u.showToast("Hata başarıyla çözüldü olarak işaretlendi! (+10 XP)","success"),await this.render(this.container)}catch(n){u.showToast("Hata güncellenemedi: "+n.message,"error")}})})}}class J{constructor(){this.container=null,this.dashboardData=null}async render(e){this.container=e,this.container.innerHTML=`
      <div class="dashboard-loading">
        <div class="spinner"></div>
        <p>Gelişim ve istatistik verileriniz hesaplanıyor...</p>
      </div>
    `;try{this.dashboardData=await y.getDashboard(),this.renderContent()}catch(t){this.container.innerHTML=`
        <div class="card error-card">
          <h3>İstatistikler yüklenemedi</h3>
          <p>${t.message}</p>
        </div>
      `}}renderContent(){const{stats:e,skills:t,weekStudy:i,latestAssessment:n}=this.dashboardData,a=[{key:"grammar",name:"Dilbilgisi (Grammar)"},{key:"vocabulary",name:"Kelime Haznesi (Vocabulary)"},{key:"reading",name:"Okuma Anlama (Reading)"},{key:"listening",name:"Dinleme Algılama (Listening)"},{key:"writing",name:"Yazma Becerisi (Writing)"},{key:"speaking",name:"Konuşma Akıcılığı (Speaking)"},{key:"pronunciation",name:"Telaffuz & Fonetik (Pronunciation)"},{key:"sentence_formation",name:"Cümle Kurma Mantığı (Syntax)"},{key:"comprehension",name:"Kavrama Hızı (Comprehension)"},{key:"communication",name:"Doğal İletişim (Communication)"}],s=(i||[]).reduce((o,l)=>o+(l.total_minutes||0),0),r=(n==null?void 0:n.overall_cefr)||(n==null?void 0:n.overallCEFR)||"A1";this.container.innerHTML=`
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
              ${a.map(o=>{const l=t[o.key]||{level:"A1",score:0},d=l.level||"A1",p=l.score||0;return`
                  <div class="domain-row">
                    <div class="domain-label">
                      <span>${o.name}</span>
                      <span class="cefr-tag ${d}">${d}</span>
                    </div>
                    <div class="domain-bar-track">
                      <div class="domain-bar-fill" style="width: ${Math.max(p,5)}%;"></div>
                    </div>
                    <span class="domain-score">%${p}</span>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- Weekly Consistency Distribution -->
          <div class="card weekly-activity-card">
            <h2 class="card-title">📅 Son 7 Günlük Çalışma Düzeni</h2>
            <div class="card-subtitle">Günlük pratik süresi dağılımı (dakika cinsinden)</div>

            <div class="week-chart-bars">
              ${i&&i.length>0?i.map(o=>{const l=Math.min(100,Math.max(10,Math.round(o.total_minutes/60*100)));return`
                  <div class="day-bar-col">
                    <div class="day-bar-track">
                      <div class="day-bar-fill" style="height: ${o.total_minutes>0?l:6}%;"></div>
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
    `}}class Z{constructor(){this.viewport=document.getElementById("viewport"),this.pageTitle=document.getElementById("page-title"),this.authModal=null,this.views={dashboard:new H,assessment:new R,grammar:new U,vocabulary:new K,reading:new G,listening:new V,writing:new Y,speaking:new N,pronunciation:new F,errors:new Q,progress:new J},this.titles={dashboard:"Genel Bakış & Günlük Rutin",assessment:"10 Becerili Seviye Belirleme Sınavı",grammar:"Gramer Akademisi & Kurallar",vocabulary:"Akıllı Kelime Kartları (SRS)",reading:"Okuma & Anlama Laboratuvarı",listening:"Dinleme & Telaffuz Laboratuvarı",writing:"Yazma Stüdyosu & Anlık Değerlendirme",speaking:"Konuşma & Diyalog Simülatörü",pronunciation:"Telaffuz & Aksan Eğitimi",errors:"Kişisel Hata Defteri",progress:"Gelişim Analizi & Beceriler"}}async init(){this.bindNavigation(),this.bindSessionTimer(),this.bindSidebarToggle(),this.bindLogout(),q.initGlobalListener(),u.on("view:change",e=>{this.navigateTo(e)}),await this.ensureUserSession()}async ensureUserSession(){const e=y.getCurrentUser();e?(u.setUser(e),this.updateUserDisplay(e),this.navigateTo("dashboard")):this.showLoginModal()}showLoginModal(){this.authModal=new j(e=>{u.setUser(e),this.updateUserDisplay(e),this.navigateTo("dashboard")}),this.authModal.show()}bindLogout(){var e;(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",()=>{y.logout(),u.setUser(null),this.updateUserDisplay(null),u.showToast("Oturum kapatıldı. Yeni bir kullanıcı ile giriş yapabilirsiniz.","info"),this.showLoginModal()})}updateUserDisplay(e){const t=document.getElementById("header-username"),i=document.getElementById("header-user-avatar"),n=document.getElementById("header-user-status"),a=document.getElementById("sidebar-cefr-badge");if(!e){t&&(t.textContent="Giriş Yapılmadı"),i&&(i.textContent="A1"),n&&(n.textContent="0'dan Başlangıç Yolu"),a&&(a.textContent="A1");return}if(t&&(t.textContent=e.displayName||e.username),i){const s=(e.displayName||e.username||"A1").slice(0,2).toUpperCase();i.textContent=s}n&&(n.textContent="0'dan Başlangıç (A1)"),a&&(a.textContent=e.cefr_level||"A1")}bindNavigation(){var e;document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.view;i&&this.navigateTo(i)})}),(e=document.getElementById("btn-quick-practice"))==null||e.addEventListener("click",()=>{this.navigateTo("dashboard")})}navigateTo(e){if(!y.getCurrentUser()){this.showLoginModal();return}if(!this.views[e])return;document.querySelectorAll(".nav-item").forEach(i=>{i.classList.toggle("active",i.dataset.view===e)}),this.pageTitle&&(this.pageTitle.textContent=this.titles[e]||"LinguaForge"),this.viewport&&(this.viewport.scrollTop=0),this.views[e].render(this.viewport);const t=document.getElementById("sidebar");t&&window.innerWidth<=768&&t.classList.remove("open")}bindSessionTimer(){u.startSessionTimer();const e=document.getElementById("session-timer");u.on("timer:tick",t=>{if(e){const i=Math.floor(t/60),n=t%60;e.textContent=`${String(i).padStart(2,"0")}:${String(n).padStart(2,"0")}`}})}bindSidebarToggle(){const e=document.getElementById("sidebar-toggle"),t=document.getElementById("sidebar");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("open")})}}window.addEventListener("DOMContentLoaded",()=>{new Z().init()});
