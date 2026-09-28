/**
 * WordInspector - Instant Vocabulary & Grammar Structure Inspector
 * Enables instant in-context lookup, audio pronunciation, and 1-click SRS card creation
 */
import { staticData, ensureVocabularyLoaded } from './static-data.js';
import { speech } from './speech.js';
import { api } from './api.js';
import { state } from './state.js';

// Comprehensive bilingual quick-lookup dictionary for questions, tests, exercises and general English
const BUILTIN_DICT = {
  // Question & UI words
  'what': { tr: 'Ne, Neyi', pos: 'pronoun', cefr: 'A1', note: 'Soru zamiri' },
  'where': { tr: 'Nerede, Nereye', pos: 'adverb', cefr: 'A1', note: 'Yer bildiren soru kelimesi' },
  'when': { tr: 'Ne zaman, -dığı zaman', pos: 'adverb', cefr: 'A1', note: 'Zaman bildiren soru kelimesi' },
  'which': { tr: 'Hangi, Hangisi', pos: 'pronoun', cefr: 'A1', note: 'Seçenek sorusu' },
  'who': { tr: 'Kim, Kimi', pos: 'pronoun', cefr: 'A1', note: 'Kişi sorusu' },
  'whose': { tr: 'Kimin', pos: 'pronoun', cefr: 'A2', note: 'Aitlik sorusu' },
  'why': { tr: 'Neden, Niçin', pos: 'adverb', cefr: 'A1', note: 'Sebep sorusu' },
  'how': { tr: 'Nasıl, Ne kadar', pos: 'adverb', cefr: 'A1', note: 'Durum veya miktar sorusu' },
  'choose': { tr: 'Seçmek, Tercih etmek', pos: 'verb', cefr: 'A1', note: 'Seçenek belirlemek' },
  'chose': { tr: 'Seçti', pos: 'verb', cefr: 'A2', note: 'Choose fiilinin geçmiş hali' },
  'chosen': { tr: 'Seçilmiş', pos: 'verb/adj', cefr: 'A2', note: 'Choose fiilinin 3. hali' },
  'select': { tr: 'Seçmek, İşaretlemek', pos: 'verb', cefr: 'A2', note: 'Doğru seçeneği belirleyin' },
  'correct': { tr: 'Doğru, Düzeltmek', pos: 'adj/verb', cefr: 'A1', note: 'Hatasız, uygun' },
  'incorrect': { tr: 'Yanlış, Hatalı', pos: 'adj', cefr: 'A2', note: 'Doğru olmayan' },
  'sentence': { tr: 'Cümle', pos: 'noun', cefr: 'A1', note: 'Yargı bildiren söz dizisi' },
  'sentences': { tr: 'Cümleler', pos: 'noun', cefr: 'A1', note: 'Çoğul cümle' },
  'phrase': { tr: 'İfade, Söz öbeği', pos: 'noun', cefr: 'A2', note: 'Birden çok kelimeden oluşan yapı' },
  'blank': { tr: 'Boşluk, Boş', pos: 'noun/adj', cefr: 'A1', note: 'Doldurulacak alan' },
  'blanks': { tr: 'Boşluklar', pos: 'noun', cefr: 'A1', note: 'Cümledeki eksik yerler' },
  'fill': { tr: 'Doldurmak', pos: 'verb', cefr: 'A1', note: 'Fill in the blank = Boşluğu doldur' },
  'filled': { tr: 'Doldurulmuş, Dolu', pos: 'verb', cefr: 'A1', note: 'Geçmiş zaman' },
  'following': { tr: 'Aşağıdaki, Takip eden', pos: 'adj', cefr: 'A2', note: 'The following = Aşağıdakiler' },
  'statement': { tr: 'İfade, Beyan, Cümle', pos: 'noun', cefr: 'B1', note: 'Belirtilen yargı' },
  'meaning': { tr: 'Anlam', pos: 'noun', cefr: 'A1', note: 'Sözcüğün anlamı' },
  'explanation': { tr: 'Açıklama, İzah', pos: 'noun', cefr: 'A2', note: 'Nedenini belirtme' },
  'explain': { tr: 'Açıklamak, İzah etmek', pos: 'verb', cefr: 'A2', note: 'Açıklığa kavuşturmak' },
  'passage': { tr: 'Paragraf, Parça, Metin', pos: 'noun', cefr: 'A2', note: 'Okuma metni parçası' },
  'dialogue': { tr: 'Diyalog, Karşılıklı konuşma', pos: 'noun', cefr: 'A1', note: 'İki kişi arasındaki konuşma' },
  'answer': { tr: 'Cevap, Cevaplamak', pos: 'noun/verb', cefr: 'A1', note: 'Soruya verilen yanıt' },
  'question': { tr: 'Soru', pos: 'noun', cefr: 'A1', note: 'Cevap bekleyen cümle' },
  'option': { tr: 'Seçenek, Şık', pos: 'noun', cefr: 'A2', note: 'A, B, C, D şıkları' },
  'options': { tr: 'Seçenekler, Şıklar', pos: 'noun', cefr: 'A2', note: 'Tüm şıklar' },
  'complete': { tr: 'Tamamlamak, Eksiksiz', pos: 'verb/adj', cefr: 'A1', note: 'Bitirmek, eksiksiz hale getirmek' },

  // Common Question Bank Words & Diagnostic Test terms
  'umbrella': { tr: 'Şemsiye', pos: 'noun', cefr: 'A1', note: 'Yağmurdan korunma aracı' },
  'cloud': { tr: 'Bulut', pos: 'noun', cefr: 'A1', note: 'Gökyüzündeki su buharı' },
  'clouds': { tr: 'Bulutlar', pos: 'noun', cefr: 'A1', note: 'Dark clouds = kara bulutlar' },
  'dark': { tr: 'Karanlık, Koyu', pos: 'adj', cefr: 'A1', note: 'Koyu renk veya ışıksız' },
  'sky': { tr: 'Gökyüzü', pos: 'noun', cefr: 'A1', note: 'Gök' },
  'expect': { tr: 'Ummak, Beklemek', pos: 'verb', cefr: 'A2', note: 'Beklenti içinde olmak' },
  'expected': { tr: 'Bekledi, Umdu', pos: 'verb', cefr: 'A2', note: 'Beklenen durum' },
  'take out': { tr: 'Çıkarmak, Dışarı almak', pos: 'phrasal verb', cefr: 'A2', note: 'Cebinden veya çantasından çıkarmak' },
  'took out': { tr: 'Çıkardı', pos: 'phrasal verb', cefr: 'A2', note: 'Take out geçmiş hali' },
  'rain': { tr: 'Yağmur / Yağmur yağmak', pos: 'noun/verb', cefr: 'A1', note: 'Hava durumu' },
  'raining': { tr: 'Yağmur yağıyor', pos: 'verb', cefr: 'A1', note: 'Şimdiki zaman' },
  'under the weather': { tr: 'Keyifsiz, Biraz hasta', pos: 'idiom', cefr: 'B1', note: 'Deyim: Kendini kırgın hissetmek' },
  'weather': { tr: 'Hava durumu', pos: 'noun', cefr: 'A1', note: 'Günün hava şartları' },
  'unwell': { tr: 'Rahatsız, Hasta', pos: 'adj', cefr: 'A2', note: 'Sağlığı bozuk' },
  'sick': { tr: 'Hasta', pos: 'adj', cefr: 'A1', note: 'Hastalanmış' },
  'born': { tr: 'Doğmuş, Dünyaya gelmiş', pos: 'adj/verb', cefr: 'A1', note: 'To be born = doğmak' },
  'birthday': { tr: 'Doğum günü', pos: 'noun', cefr: 'A1', note: 'Doğum yıldönümü' },
  'reflection': { tr: 'Düşünme, Yansıma', pos: 'noun', cefr: 'B2', note: 'Derin düşünme' },
  'reflect': { tr: 'Düşünmek, Yansıtmak', pos: 'verb', cefr: 'B2', note: 'Let me reflect = Bir düşüneyim' },
  'thoughtful': { tr: 'Düşünceli, Özenli', pos: 'adj', cefr: 'B1', note: 'İyi düşünülmüş soru' },
  'thought': { tr: 'Düşünce / Düşündü', pos: 'noun/verb', cefr: 'A2', note: 'Think geçmiş hali veya fikir' },
  'interview': { tr: 'Mülakat, Röportaj', pos: 'noun', cefr: 'A2', note: 'Görüşme' },
  'interviewer': { tr: 'Mülakatı yapan kişi', pos: 'noun', cefr: 'B1', note: 'Soru soran yetkili' },
  'hesitation': { tr: 'Tereddüt, Duraksama', pos: 'noun', cefr: 'B2', note: 'Konuşurken duraklama' },
  'hesitate': { tr: 'Tereddüt etmek', pos: 'verb', cefr: 'B1', note: 'Duraksamak' },
  'filler': { tr: 'Doldurucu sözcük (well, you know)', pos: 'noun', cefr: 'B2', note: 'Düşünme süresi kazandıran sözcük' },
  'directive': { tr: 'Talimat, Direktif', pos: 'noun', cefr: 'B2', note: 'Resmi yönerge' },
  'pragmatic': { tr: 'Edimbilimsel, Pratik amaca yönelik', pos: 'adj', cefr: 'B2', note: 'Sosyal iletişimdeki gerçek anlam' },
  'implicature': { tr: 'Örtük anlam, İma', pos: 'noun', cefr: 'C1', note: 'Doğrudan söylenmeyip ima edilen şey' },
  'review': { tr: 'Gözden geçirmek, İncelemek', pos: 'verb', cefr: 'A2', note: 'Tekrar okumak' },
  'presentation': { tr: 'Sunum', pos: 'noun', cefr: 'A2', note: 'Sunum konuşması' },
  'compliment': { tr: 'İltifat, Övgü', pos: 'noun', cefr: 'B1', note: 'Güzel söz' },
  'stranger': { tr: 'Yabancı (tanınmayan kişi)', pos: 'noun', cefr: 'A2', note: 'Tanımadığınız kişi' },
  'clarify': { tr: 'Netleştirmek, Açıklığa kavuşturmak', pos: 'verb', cefr: 'B1', note: 'Daha net anlatmak' },
  'clarification': { tr: 'Açıklama, Netleştirme', pos: 'noun', cefr: 'B1', note: 'Netleştirme talebi' },
  'interrupt': { tr: 'Sözünü kesmek, Araya girmek', pos: 'verb', cefr: 'B1', note: 'Konuşmayı bölmek' },
  'interruption': { tr: 'Araya girme, Kesinti', pos: 'noun', cefr: 'B1', note: 'Bölünme' },
  'turn-taking': { tr: 'Konuşma sırası alma', pos: 'phrase', cefr: 'B2', note: 'Diyalogda sırayla söz alma' },
  'electricity': { tr: 'Elektrik', pos: 'noun', cefr: 'A2', note: 'Enerji' },
  'suddenly': { tr: 'Aniden, Birdenbire', pos: 'adverb', cefr: 'A2', note: 'Beklenmedik bir anda' },
  'went out': { tr: 'Söndü, Kesildi (elektrik)', pos: 'phrasal verb', cefr: 'A2', note: 'Go out geçmiş hali' },
  'closure': { tr: 'Kapanma, Kapalı olma', pos: 'noun', cefr: 'B1', note: 'Yolun kapalı olması' },
  'route': { tr: 'Güzergah, Rota, Yol', pos: 'noun', cefr: 'A2', note: 'Gidilecek güzergah' },
  'manager': { tr: 'Müdür, Yönetici', pos: 'noun', cefr: 'A2', note: 'Sorumlu kişi' },
  'submit': { tr: 'Teslim etmek, Sunmak', pos: 'verb', cefr: 'B1', note: 'Rapor/ödev teslim etmek' },
  'report': { tr: 'Rapor', pos: 'noun', cefr: 'A2', note: 'Yazılı bilgilendirme' },
  'meal': { tr: 'Öğün, Yemek', pos: 'noun', cefr: 'A1', note: 'Yemek vakti' },
  'middle': { tr: 'Orta, Ortası', pos: 'noun/adj', cefr: 'A2', note: 'İki şeyin ortası' },
  'breakfast': { tr: 'Kahvaltı', pos: 'noun', cefr: 'A1', note: 'Sabah öğünü' },
  'lunch': { tr: 'Öğle yemeği', pos: 'noun', cefr: 'A1', note: 'Öğle öğünü' },
  'dinner': { tr: 'Akşam yemeği', pos: 'noun', cefr: 'A1', note: 'Akşam ana öğün' },
  'supper': { tr: 'Gece atıştırmalığı, Hafif akşam yemeği', pos: 'noun', cefr: 'B1', note: 'Geç saatteki hafif yemek' },
  'flaw': { tr: 'Kusur, Hata, Eksiklik', pos: 'noun', cefr: 'B2', note: 'Düzeltilmesi gereken eksik' },
  'decision': { tr: 'Karar', pos: 'noun', cefr: 'A2', note: 'Make a decision = Karar vermek' },
  'mistake': { tr: 'Hata, Yanlış', pos: 'noun', cefr: 'A1', note: 'Make a mistake = Hata yapmak' },
  'progress': { tr: 'İlerleme, Gelişme', pos: 'noun', cefr: 'A2', note: 'Make progress = İlerleme kaydetmek' },
  'effort': { tr: 'Çaba, Gayret', pos: 'noun', cefr: 'B1', note: 'Make an effort = Çaba göstermek' },
  'routine': { tr: 'Rutin, Günlük alışkanlık', pos: 'noun', cefr: 'A1', note: 'Düzenli yapılan şeyler' },
  'habit': { tr: 'Alışkanlık', pos: 'noun', cefr: 'A2', note: 'Tekrarlanan davranış' },
  'colleague': { tr: 'İş arkadaşı, Meslektaş', pos: 'noun', cefr: 'A2', note: 'Birlikte çalışılan kişi' },
  'relatives': { tr: 'Akrabalar', pos: 'noun', cefr: 'A2', note: 'Aile fertleri' },
  'relative': { tr: 'Akraba / Göreceli', pos: 'noun/adj', cefr: 'A2', note: 'Akraba veya bağıntılı' },

  // Common verbs and forms
  'agree': { tr: 'Katılmak, Aynı fikirde olmak', pos: 'verb', cefr: 'A2', note: 'I agree with you = Sana katılıyorum' },
  'disagree': { tr: 'Katılmamak, Karşı çıkmak', pos: 'verb', cefr: 'A2', note: 'Farklı düşünmek' },
  'allow': { tr: 'İzin vermek', pos: 'verb', cefr: 'B1', note: 'Müsaade etmek' },
  'appear': { tr: 'Görünmek, Ortaya çıkmak', pos: 'verb', cefr: 'B1', note: 'Belirmek' },
  'arrive': { tr: 'Varmak, Ulaşmak', pos: 'verb', cefr: 'A1', note: 'Bir yere ulaşmak' },
  'avoid': { tr: 'Kaçınmak, Uzak durmak', pos: 'verb', cefr: 'B1', note: 'Yapmaktan sakınmak' },
  'become': { tr: 'Olmak, Haline gelmek', pos: 'verb', cefr: 'A2', note: 'Dönüşmek' },
  'became': { tr: 'Oldu', pos: 'verb', cefr: 'A2', note: 'Become geçmiş hali' },
  'believe': { tr: 'İnanmak', pos: 'verb', cefr: 'A1', note: 'Güvenmek veya inanmak' },
  'borrow': { tr: 'Ödünç almak', pos: 'verb', cefr: 'A2', note: 'Geri vermek üzere almak' },
  'lend': { tr: 'Ödünç vermek', pos: 'verb', cefr: 'A2', note: 'Geri almak üzere vermek' },
  'cancel': { tr: 'İptal etmek', pos: 'verb', cefr: 'A2', note: 'Vazgeçmek' },
  'carry': { tr: 'Taşımak', pos: 'verb', cefr: 'A2', note: 'Bir şeyi elinde/üstünde götürmek' },
  'catch': { tr: 'Yakalamak, Yetişmek', pos: 'verb', cefr: 'A2', note: 'Catch a bus = Otobüse yetişmek' },
  'caught': { tr: 'Yakaladı', pos: 'verb', cefr: 'A2', note: 'Catch geçmiş hali' },
  'consider': { tr: 'Göz önünde bulundurmak, Düşünmek', pos: 'verb', cefr: 'B1', note: 'Değerlendirmek' },
  'continue': { tr: 'Devam etmek', pos: 'verb', cefr: 'A2', note: 'Sürdürmek' },
  'create': { tr: 'Yaratmak, Oluşturmak', pos: 'verb', cefr: 'A2', note: 'Meydana getirmek' },
  'describe': { tr: 'Tanımlamak, Tarif etmek', pos: 'verb', cefr: 'A2', note: 'Detaylı anlatmak' },
  'develop': { tr: 'Geliştirmek, Gelişmek', pos: 'verb', cefr: 'B1', note: 'İlerletmek' },
  'discover': { tr: 'Keşfetmek', pos: 'verb', cefr: 'A2', note: 'Yeni bir şey bulmak' },
  'discuss': { tr: 'Tartışmak, Görüşmek', pos: 'verb', cefr: 'A2', note: 'Fikir alışverişi yapmak' },
  'enjoy': { tr: 'Keyif almak, Eğlenmek', pos: 'verb', cefr: 'A1', note: 'Hoşlanmak' },
  'improve': { tr: 'Geliştirmek, İyileştirmek', pos: 'verb', cefr: 'A2', note: 'Daha iyi hale getirmek' },
  'include': { tr: 'İçermek, Dahil etmek', pos: 'verb', cefr: 'A2', note: 'Kapsamak' },
  'intend': { tr: 'Niyet etmek, Amaçlamak', pos: 'verb', cefr: 'B1', note: 'Hedeflemek' },
  'manage': { tr: 'Yönetmek, Başarmak', pos: 'verb', cefr: 'B1', note: 'Üstesinden gelmek' },
  'mention': { tr: 'Bahsetmek, Değinmek', pos: 'verb', cefr: 'B1', note: 'Adını geçirmek' },
  'notice': { tr: 'Fark etmek', pos: 'verb/noun', cefr: 'A2', note: 'Görmek, ayırtına varmak' },
  'offer': { tr: 'Teklif etmek, Sunmak', pos: 'verb/noun', cefr: 'A2', note: 'Öneri sunmak' },
  'participate': { tr: 'Katılmak', pos: 'verb', cefr: 'B1', note: 'Yer almak' },
  'prefer': { tr: 'Tercih etmek', pos: 'verb', cefr: 'A2', note: 'Yeğlemek' },
  'prepare': { tr: 'Hazırlamak, Hazırlanmak', pos: 'verb', cefr: 'A2', note: 'Önceden hazır etmek' },
  'prevent': { tr: 'Önlemek, Engel olmak', pos: 'verb', cefr: 'B1', note: 'Oluşmasını engellemek' },
  'provide': { tr: 'Sağlamak, Temin etmek', pos: 'verb', cefr: 'B1', note: 'Sunmak' },
  'receive': { tr: 'Almak, Kabul etmek', pos: 'verb', cefr: 'A2', note: 'Gelen şeyi almak' },
  'recommend': { tr: 'Tavsiye etmek, Önermek', pos: 'verb', cefr: 'A2', note: 'Öneri vermek' },
  'refuse': { tr: 'Reddetmek', pos: 'verb', cefr: 'B1', note: 'Kabul etmemek' },
  'remind': { tr: 'Hatırlatmak', pos: 'verb', cefr: 'A2', note: 'Aklına getirmek' },
  'remember': { tr: 'Hatırlamak', pos: 'verb', cefr: 'A1', note: 'Unutmamak' },
  'require': { tr: 'Gerektirmek, İstemek', pos: 'verb', cefr: 'B1', note: 'Gerekli kılmak' },
  'suggest': { tr: 'Önermek, Telkin etmek', pos: 'verb', cefr: 'B1', note: 'Fikir vermek' },
  'support': { tr: 'Desteklemek', pos: 'verb/noun', cefr: 'A2', note: 'Yardımcı olmak' },
  'understand': { tr: 'Anlamak', pos: 'verb', cefr: 'A1', note: 'Kavramak' },
  'understood': { tr: 'Anladı', pos: 'verb', cefr: 'A1', note: 'Understand geçmiş hali' },

  // Key Adjectives
  'important': { tr: 'Önemli', pos: 'adj', cefr: 'A1', note: 'Büyük değer taşıyan' },
  'necessary': { tr: 'Gerekli, Zorunlu', pos: 'adj', cefr: 'A2', note: 'Olmazsa olmaz' },
  'difficult': { tr: 'Zor, Güç', pos: 'adj', cefr: 'A1', note: 'Kolay olmayan' },
  'easy': { tr: 'Kolay, Basit', pos: 'adj', cefr: 'A1', note: 'Zor olmayan' },
  'possible': { tr: 'Mümkün, Olası', pos: 'adj', cefr: 'A2', note: 'Gerçekleşebilir' },
  'impossible': { tr: 'İmkansız', pos: 'adj', cefr: 'A2', note: 'Olamaz' },
  'available': { tr: 'Mevcut, Müsait', pos: 'adj', cefr: 'A2', note: 'Kullanıma hazır' },
  'similar': { tr: 'Benzer', pos: 'adj', cefr: 'A2', note: 'Benzeşen' },
  'different': { tr: 'Farklı', pos: 'adj', cefr: 'A1', note: 'Aynı olmayan' },
  'frequent': { tr: 'Sık, Sıkça olan', pos: 'adj', cefr: 'B1', note: 'Sık tekrarlanan' },
  'rare': { tr: 'Nadir, Ender', pos: 'adj', cefr: 'A2', note: 'Az bulunan' },
  'careful': { tr: 'Dikkatli', pos: 'adj', cefr: 'A1', note: 'Özen gösteren' },
  'careless': { tr: 'Dikkatsiz, Özensiz', pos: 'adj', cefr: 'A2', note: 'Hata yapan' },
  'polite': { tr: 'Kibar, Nazik', pos: 'adj', cefr: 'A1', note: 'Görgülü' },
  'rude': { tr: 'Kaba, Nezaketsiz', pos: 'adj', cefr: 'A2', note: 'Kırıcı' },
  'patient': { tr: 'Sabırlı / Hasta', pos: 'adj/noun', cefr: 'B1', note: 'Sabır gösteren veya hastane hastası' },
  'confident': { tr: 'Özgüvenli, Kendinden emin', pos: 'adj', cefr: 'B1', note: 'Güveni tam' },
  'anxious': { tr: 'Endişeli, Kaygılı', pos: 'adj', cefr: 'B1', note: 'Huzursuz' },
  'fluent': { tr: 'Akıcı (konuşma)', pos: 'adj', cefr: 'B1', note: 'Takılmadan konuşabilen' },
  'accurate': { tr: 'Doğru, İsabetli', pos: 'adj', cefr: 'B1', note: 'Hatasız' },

  // Connectors & Grammar terms
  'although': { tr: '-e rağmen, Karşın', pos: 'conjunction', cefr: 'B1', note: 'Zıtlık bağlacı' },
  'though': { tr: '-e rağmen, Yine de', pos: 'conjunction/adv', cefr: 'B1', note: 'Cümle sonunda: gerçi' },
  'even though': { tr: '-dığı halde, -e rağmen', pos: 'conjunction', cefr: 'B1', note: 'Güçlü zıtlık' },
  'however': { tr: 'Ancak, Yine de', pos: 'conjunction/adv', cefr: 'A2', note: 'Zıt fikir bildirir' },
  'therefore': { tr: 'Bu nedenle, Dolayısıyla', pos: 'adverb', cefr: 'B1', note: 'Sonuç bildiren bağlaç' },
  'furthermore': { tr: 'Ayrıca, Dahası', pos: 'adverb', cefr: 'B2', note: 'Ek bilgi bağlacı' },
  'moreover': { tr: 'Dahası, Üstelik', pos: 'adverb', cefr: 'B2', note: 'Pekiştirme bağlacı' },
  'meanwhile': { tr: 'Bu sırada, O esnada', pos: 'adverb', cefr: 'B1', note: 'Aynı anda gerçekleşen olaylar' },
  'besides': { tr: 'Ayrıca, -den başka', pos: 'preposition/adv', cefr: 'B1', note: 'Bunun yanında' },
  'otherwise': { tr: 'Aksi takdirde, Yoksa', pos: 'adverb', cefr: 'B1', note: 'Şartın gerçekleşmemesi durumu' },
  'unless': { tr: '-medikçe, -mazsa', pos: 'conjunction', cefr: 'B1', note: 'If not anlamına gelir' },
  'since': { tr: '-den beri / Çünkü', pos: 'preposition/conj', cefr: 'A2', note: 'Zaman veya sebep belirtir' },
  'while': { tr: '-iken, Sırasında', pos: 'conjunction', cefr: 'A2', note: 'Süreç bildiren bağlaç' },
  'whereas': { tr: 'Oysa, Halbuki', pos: 'conjunction', cefr: 'B2', note: 'Karşılaştırmalı zıtlık' },
  'despite': { tr: '-e rağmen', pos: 'preposition', cefr: 'B1', note: 'Kendinden sonra isim/fiil-ing alır' },
  'in spite of': { tr: '-e rağmen', pos: 'preposition', cefr: 'B1', note: 'Despite ile eşanlamlıdır' },
  'so that': { tr: '-sın diye, Amacıyla', pos: 'conjunction', cefr: 'B1', note: 'Amaç bildiren bağlaç' },
  'in order to': { tr: '-mek için', pos: 'conjunction', cefr: 'B1', note: 'Amaç bildirir (+ V1)' },
  'passive': { tr: 'Edilgen çatı (Yapıldı)', pos: 'grammar', cefr: 'B1', note: 'Özne değil yapılan iş ön planda' },
  'conditional': { tr: 'Şart/Koşul cümlesi (If...)', pos: 'grammar', cefr: 'B1', note: 'Eğer ile başlayan olasılıklar' },
  'inversion': { tr: 'Devrik yapı', pos: 'grammar', cefr: 'B2', note: 'Vurgu için yardımcı fiilin başa gelmesi' },
  'modal': { tr: 'Kip/Yardımcı fiil (can, must, should)', pos: 'grammar', cefr: 'A2', note: 'Gereklilik/olasılık yardımcı fiilleri' },
  'gerund': { tr: 'Fiilimsi (-ing ekiyle isimleşen fiil)', pos: 'grammar', cefr: 'B1', note: 'Swimming is good' },
  'infinitive': { tr: 'Mastar hali (to + V1)', pos: 'grammar', cefr: 'A2', note: 'To go, to learn' }
};

class WordInspectorEngine {
  constructor() {
    this.customCache = new Map();
    this.floatingEl = null;
    this.isListeningGlobal = false;
    this.activeWord = null;
    this.lastDblClickTime = 0;
  }

  /**
   * Look up word or phrase in built-in dictionary, staticData or generated lemmas
   */
  lookup(rawQuery) {
    if (!rawQuery) return null;
    const clean = rawQuery.trim().toLowerCase().replace(/[.,!?;:"'()\[\]{}]/g, '');
    if (!clean || clean.length < 2) return null;

    // 1. Check custom cache
    if (this.customCache.has(clean)) {
      return this.customCache.get(clean);
    }

    // 2. Direct hit in BUILTIN_DICT
    if (BUILTIN_DICT[clean]) {
      const res = { word: clean, ...BUILTIN_DICT[clean] };
      this.customCache.set(clean, res);
      return res;
    }

    // 3. Direct hit in staticData vocabulary_items
    if (!staticData.vocabulary_items || staticData.vocabulary_items.length === 0) {
      ensureVocabularyLoaded();
    }
    const allVocab = staticData.vocabulary_items || [];
    const vocabMatch = allVocab.find(v => v.word && v.word.toLowerCase() === clean);
    if (vocabMatch) {
      const res = {
        word: vocabMatch.word,
        tr: vocabMatch.definition_tr || vocabMatch.definition_en,
        pos: vocabMatch.part_of_speech || 'kelime',
        cefr: vocabMatch.cefr_level || 'A1',
        phonetic: vocabMatch.phonetic,
        example: Array.isArray(vocabMatch.example_sentences) ? vocabMatch.example_sentences[0] : null,
        note: vocabMatch.collocations ? `Kalıp: ${Array.isArray(vocabMatch.collocations) ? vocabMatch.collocations.slice(0, 3).join(', ') : ''}` : null
      };
      this.customCache.set(clean, res);
      return res;
    }

    // 4. Lemma / Stem match (remove plural -s, past -ed, gerund -ing, adverb -ly)
    const lemmas = this.generateLemmas(clean);
    for (const lemma of lemmas) {
      if (BUILTIN_DICT[lemma]) {
        const res = { word: clean, baseWord: lemma, ...BUILTIN_DICT[lemma], note: `Kök: ${lemma}` };
        this.customCache.set(clean, res);
        return res;
      }
      const lemmaMatch = allVocab.find(v => v.word && v.word.toLowerCase() === lemma);
      if (lemmaMatch) {
        const res = {
          word: clean,
          baseWord: lemmaMatch.word,
          tr: lemmaMatch.definition_tr || lemmaMatch.definition_en,
          pos: lemmaMatch.part_of_speech || 'kelime',
          cefr: lemmaMatch.cefr_level || 'A1',
          phonetic: lemmaMatch.phonetic,
          note: `Kök: ${lemmaMatch.word}`
        };
        this.customCache.set(clean, res);
        return res;
      }
    }

    return null;
  }

  generateLemmas(word) {
    const list = [];
    if (word.endsWith('ing') && word.length > 5) {
      list.push(word.slice(0, -3));
      list.push(word.slice(0, -3) + 'e');
    }
    if (word.endsWith('ied') && word.length > 4) {
      list.push(word.slice(0, -3) + 'y');
    }
    if (word.endsWith('ed') && word.length > 4) {
      list.push(word.slice(0, -2));
      list.push(word.slice(0, -1));
    }
    if (word.endsWith('ies') && word.length > 4) {
      list.push(word.slice(0, -3) + 'y');
    }
    if (word.endsWith('es') && word.length > 4) {
      list.push(word.slice(0, -2));
      list.push(word.slice(0, -1));
    }
    if (word.endsWith('s') && !word.endsWith('ss') && word.length > 3) {
      list.push(word.slice(0, -1));
    }
    if (word.endsWith('ly') && word.length > 4) {
      list.push(word.slice(0, -2));
    }
    return list;
  }

  /**
   * Extract key vocabulary hints for a question drawer
   */
  extractQuestionKeywords(q) {
    if (!q) return [];
    const textToScan = `${q.question || ''} ${(q.options || []).join(' ')} ${q.topic || ''}`;
    const words = textToScan
      .toLowerCase()
      .replace(/[^a-z\s-]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 3);

    const foundMap = new Map();

    // Check idioms & phrases first
    const phrases = ['under the weather', 'happy birthday', 'take out', 'went out', 'turn-taking', 'make a mistake', 'make progress'];
    for (const phrase of phrases) {
      if (textToScan.toLowerCase().includes(phrase)) {
        const item = this.lookup(phrase);
        if (item) foundMap.set(phrase, item);
      }
    }

    // Check individual words
    for (const word of words) {
      if (foundMap.size >= 6) break;
      const res = this.lookup(word);
      if (res && !foundMap.has(res.word)) {
        foundMap.set(res.word, res);
      }
    }

    return Array.from(foundMap.values()).filter(Boolean);
  }

  /**
   * Render collapsible vocabulary hints bar for a question
   */
  renderQuestionVocabBar(q) {
    const keywords = this.extractQuestionKeywords(q);
    if (!keywords || keywords.length === 0) return '';

    return `
      <div class="question-vocab-drawer" id="vocab-drawer-${q.id}">
        <button class="vocab-drawer-toggle" type="button" data-drawer-id="vocab-drawer-${q.id}" title="Bu sorudaki bilmeyebileceğiniz kelime ve yapıları inceleyin">
          <div class="drawer-toggle-left">
            <span class="vocab-lightbulb">💡</span>
            <span class="drawer-title">Bu Sorudaki Kelimeler & Yapı Rehberi</span>
            <span class="drawer-count-badge">${keywords.length} Anlam & İpucu</span>
          </div>
          <span class="drawer-chevron">▼</span>
        </button>

        <div class="vocab-drawer-body" style="display: none;">
          <div class="vocab-hints-grid">
            ${keywords.map(k => `
              <div class="vocab-hint-card" data-word="${k.word}">
                <div class="hint-card-top">
                  <div class="hint-word-wrap">
                    <strong class="hint-word">${k.word}</strong>
                    <span class="hint-cefr ${k.cefr || 'A1'}">${k.cefr || 'A1'}</span>
                  </div>
                  <div class="hint-actions">
                    <button class="hint-action-btn hint-tts" data-word="${k.word}" title="Sesli Dinle">🔊</button>
                    <button class="hint-action-btn hint-save" data-word="${k.word}" data-tr="${k.tr || ''}" data-cefr="${k.cefr || 'A1'}" title="Kelime Kartlarıma Ekle">⭐ Ekle</button>
                  </div>
                </div>
                <div class="hint-meaning">🇹🇷 ${k.tr}</div>
                ${k.note ? `<div class="hint-note">📌 ${k.note}</div>` : ''}
              </div>
            `).join('')}
          </div>
          <div class="vocab-hint-footer">
            <span>💡 İpucu: Sorudaki veya şıklardaki herhangi bir kelimenin üzerine çift tıklayarak da anında Türkçe anlamını görebilirsiniz.</span>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Bind events for vocabulary hints bar
   */
  bindVocabDrawerEvents(container) {
    if (!container) return;
    container.querySelectorAll('.vocab-drawer-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const drawer = btn.closest('.question-vocab-drawer');
        const body = drawer?.querySelector('.vocab-drawer-body');
        const chevron = drawer?.querySelector('.drawer-chevron');
        if (body) {
          const isOpen = body.style.display !== 'none';
          body.style.display = isOpen ? 'none' : 'block';
          if (chevron) chevron.textContent = isOpen ? '▼' : '▲';
          drawer.classList.toggle('expanded', !isOpen);
        }
      });
    });

    container.querySelectorAll('.hint-tts').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = btn.dataset.word;
        if (word) speech.speak(word);
      });
    });

    container.querySelectorAll('.hint-save').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const word = btn.dataset.word;
        const tr = btn.dataset.tr;
        const cefr = btn.dataset.cefr;
        if (word) {
          await api.addCustomWord(word, tr, cefr);
          btn.textContent = '✓ Eklendi';
          btn.classList.add('saved');
          state.showToast(`"${word}" kelime kartlarınıza eklendi! 📚`, 'success');
        }
      });
    });
  }

  /**
   * Helper: extract word at mouse point if getSelection is empty
   */
  getWordAtPoint(x, y) {
    let textNode = null;
    let offset = 0;

    if (document.caretRangeFromPoint) {
      const range = document.caretRangeFromPoint(x, y);
      if (range) {
        textNode = range.startContainer;
        offset = range.startOffset;
      }
    } else if (document.caretPositionFromPoint) {
      const pos = document.caretPositionFromPoint(x, y);
      if (pos) {
        textNode = pos.offsetNode;
        offset = pos.offset;
      }
    }

    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      const text = textNode.textContent || '';
      if (!text) return '';
      let start = offset;
      let end = offset;
      while (start > 0 && /[\w'-]/.test(text[start - 1])) {
        start--;
      }
      while (end < text.length && /[\w'-]/.test(text[end])) {
        end++;
      }
      return text.slice(start, end);
    }
    return '';
  }

  /**
   * Fetch online translation fallback with multiple fast public APIs
   */
  async fetchOnlineTranslation(word) {
    const clean = word.toLowerCase().trim();
    if (!clean || clean.length < 2) return null;

    // 1. MyMemory Translation API (Free, high quality English -> Turkish)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2600);
      const resp = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=en|tr`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (resp.ok) {
        const data = await resp.json();
        const tr = data?.responseData?.translatedText;
        if (tr && tr.toLowerCase() !== clean) {
          const item = {
            word: clean,
            tr: tr,
            pos: 'kelime',
            cefr: 'Sözlük',
            note: 'Otomatik Çeviri'
          };
          this.customCache.set(clean, item);
          return item;
        }
      }
    } catch (e) {
      // Ignore and try fallback
    }

    // 2. Google Translate Web API Fallback
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const resp = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURIComponent(clean)}`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (resp.ok) {
        const data = await resp.json();
        const tr = data?.[0]?.[0]?.[0];
        if (tr && tr.toLowerCase() !== clean) {
          const item = {
            word: clean,
            tr: tr,
            pos: 'kelime',
            cefr: 'Sözlük',
            note: 'Google Çeviri'
          };
          this.customCache.set(clean, item);
          return item;
        }
      }
    } catch (e) {
      // Offline or network error
    }

    return null;
  }

  /**
   * Perform comprehensive word inspection and display popover
   */
  async inspectWord(rawWord, coords) {
    if (!rawWord) return;
    const clean = rawWord.toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g, '').trim();
    if (!clean || clean.length < 2) return;

    this.activeWord = clean;

    // 1. Check local offline lookup
    const localMatch = this.lookup(clean);
    if (localMatch) {
      this.showFloatingPopover(localMatch, coords);
      return;
    }

    // 2. Show instant loading popover (Never fail silently!)
    const loadingItem = {
      word: clean,
      tr: 'Anlamı aranıyor... ⏳',
      pos: 'kelime',
      cefr: 'Aranıyor',
      isLoading: true
    };
    this.showFloatingPopover(loadingItem, coords);

    // 3. Query online translation asynchronously
    const onlineMatch = await this.fetchOnlineTranslation(clean);
    if (this.activeWord === clean && this.floatingEl && this.floatingEl.style.display !== 'none') {
      if (onlineMatch) {
        this.updateFloatingPopoverContent(onlineMatch);
      } else {
        this.updateFloatingPopoverContent({
          word: clean,
          tr: 'Anlam bulunamadı (Çevrimdışı)',
          pos: 'kelime',
          cefr: 'Genel',
          note: 'Sesli telaffuzunu dinleyebilir veya kartlarınıza ekleyebilirsiniz.'
        });
      }
    }
  }

  /**
   * Initialize global double-click & selection translator popover
   */
  initGlobalListener() {
    if (this.isListeningGlobal) return;
    this.isListeningGlobal = true;

    // Ensure floating popover container exists
    let popover = document.getElementById('floating-word-inspector');
    if (!popover) {
      popover = document.createElement('div');
      popover.id = 'floating-word-inspector';
      popover.className = 'floating-word-inspector';
      popover.style.display = 'none';
      document.body.appendChild(popover);
    }
    this.floatingEl = popover;

    // 1. Handle Double Click on any word anywhere (Capture phase for maximum responsiveness)
    document.addEventListener('dblclick', (e) => {
      // Ignore clicks inside the inspector popover itself
      if (this.floatingEl && this.floatingEl.contains(e.target)) return;

      this.lastDblClickTime = Date.now();

      // Retrieve selected text
      let selectedText = '';
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        selectedText = selection.toString().trim();
      }

      // If empty, extract word at point
      if (!selectedText) {
        selectedText = this.getWordAtPoint(e.clientX, e.clientY);
      }

      if (selectedText) {
        this.inspectWord(selectedText, {
          x: e.pageX,
          y: e.pageY,
          clientX: e.clientX,
          clientY: e.clientY
        });
      }
    }, true);

    // 2. Handle Text Drag / Selection on MouseUp (For multi-word phrases)
    document.addEventListener('mouseup', (e) => {
      // If clicking inside the popover itself, ignore
      if (this.floatingEl && this.floatingEl.contains(e.target)) return;

      // Avoid triggering immediately right after dblclick
      if (Date.now() - this.lastDblClickTime < 400) return;

      setTimeout(() => {
        const selection = window.getSelection();
        const selectedText = selection ? selection.toString().trim() : '';

        // Only inspect if user intentionally selected a multi-word phrase
        if (selectedText && selectedText.length >= 2 && selectedText.length <= 45 && selectedText.includes(' ')) {
          this.inspectWord(selectedText, {
            x: e.pageX,
            y: e.pageY,
            clientX: e.clientX,
            clientY: e.clientY
          });
        }
      }, 80);
    });

    // 3. Close popover on click outside or Escape
    document.addEventListener('mousedown', (e) => {
      if (this.floatingEl && this.floatingEl.style.display !== 'none') {
        if (!this.floatingEl.contains(e.target)) {
          // If not part of a double-click action, hide
          if (Date.now() - this.lastDblClickTime > 250) {
            this.hideFloatingPopover();
          }
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.hideFloatingPopover();
    });
  }

  /**
   * Display floating translation popover
   */
  showFloatingPopover(item, coords = {}) {
    if (!this.floatingEl) return;

    this.renderPopoverHtml(item);

    // Calculate smart positioning above cursor or below if near top
    const popoverWidth = 310;
    const popoverHeight = 140;

    let x = (coords.x !== undefined) ? coords.x : window.innerWidth / 2;
    let y = (coords.y !== undefined) ? coords.y : window.innerHeight / 2;

    // Center horizontally on mouse, clamped to screen margins
    let left = x - (popoverWidth / 2);
    left = Math.max(12, Math.min(window.innerWidth - popoverWidth - 12, left));

    // Prefer positioning 15px above cursor, fallback to below cursor if too close to top
    let top = y - popoverHeight - 20;
    if (top < (window.scrollY + 10)) {
      top = y + 25; // display below
    }

    this.floatingEl.style.top = `${Math.max(10, top)}px`;
    this.floatingEl.style.left = `${left}px`;
    this.floatingEl.style.display = 'block';

    this.bindPopoverButtons(item);
  }

  /**
   * Update content inside currently visible popover
   */
  updateFloatingPopoverContent(item) {
    if (!this.floatingEl) return;
    this.renderPopoverHtml(item);
    this.bindPopoverButtons(item);
  }

  renderPopoverHtml(item) {
    const isSpinner = item.isLoading;
    this.floatingEl.innerHTML = `
      <div class="inspector-popover-content">
        <div class="popover-header">
          <div class="popover-word-title">
            <strong>${item.word}</strong>
            <span class="popover-cefr ${item.cefr || 'A1'}">${item.cefr || 'A1'}</span>
          </div>
          <button class="popover-close-btn" id="popover-close" title="Kapat">✕</button>
        </div>
        <div class="popover-meaning ${isSpinner ? 'loading-pulse' : ''}">🇹🇷 ${item.tr}</div>
        ${item.note ? `<div class="popover-note">${item.note}</div>` : ''}
        <div class="popover-actions">
          <button class="popover-btn popover-listen" id="popover-listen" title="Doğal telaffuzu dinle">🔊 Dinle</button>
          <button class="popover-btn popover-add" id="popover-add" title="Öğrenme kartlarıma ekle">⭐ Kelimelerime Ekle</button>
        </div>
      </div>
    `;
  }

  bindPopoverButtons(item) {
    document.getElementById('popover-close')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.hideFloatingPopover();
    });

    document.getElementById('popover-listen')?.addEventListener('click', (e) => {
      e.stopPropagation();
      speech.speak(item.word);
    });

    document.getElementById('popover-add')?.addEventListener('click', async (e) => {
      e.stopPropagation();
      await api.addCustomWord(item.word, item.tr, item.cefr || 'A1');
      state.showToast(`"${item.word}" kelime kartlarınıza kaydedildi! 📚`, 'success');
      const addBtn = document.getElementById('popover-add');
      if (addBtn) {
        addBtn.textContent = '✓ Kaydedildi';
        addBtn.style.background = 'rgba(16, 185, 129, 0.3)';
        addBtn.style.color = '#34d399';
      }
    });
  }

  hideFloatingPopover() {
    if (this.floatingEl) {
      this.floatingEl.style.display = 'none';
      this.activeWord = null;
    }
  }
}

export const wordInspector = new WordInspectorEngine();
