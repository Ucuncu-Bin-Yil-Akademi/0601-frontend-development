/*
Birden fazla satırı yorum satırı haline getirmek için kullanılır.

console.log("Hello Javascript!");
console.log("İlk Javascript dersi");
*/

console.log("Hello Javascript."); // Console'a bir mesaj yazdırır.

// Tek satırlık yorum satırı

// Değişken tanımlaması iki anahtar kelime ile yapılır: const ve let
const isim = "John";
let soyad = "Doe";

// Değişkenlerin değerlerini ekrana yazdıralım.
console.log(isim);
console.log(soyad);

// const öneki ile tanımlanan değişkenlerin değeri değiştirilemez.
//isim = "Jane";

// değişkenin değeri değiştirilebilir.
soyad = "Smith";

console.log(isim);
console.log(soyad);

// ES6 öncesinde const ve let anahtar kelimeleri olmadığı için
// değişken tanımlaması var anahtar kelimesi ile yapılırdı.

var sehir = "Ankara";
sehir = "İstanbul";
console.log("Kullanıcının yaşadığı şehir: ", sehir);

// #### Veri Tipleri (1) ####

// 1. String
const stringTipi = "Merhaba Dünya"; // Tırnak işaretleri içerisinde yazılır.
console.log(stringTipi);

// 2. Number
// Tam sayılar ve ondalıklı sayılar için kullanılır. Negatif ve pozitif değerler alabilir.
// Tırnak işareti içerisine alınmaz.
const sayi1 = 5;
const sayi2 = 3.14;
let sayi3 = -10;

console.log(sayi1, sayi2, sayi3);

// String Interpolation
let tamAd = isim + " " + soyad;
console.log(tamAd);

// iki değişkenin tipi de number olduğu için toplama işlemi yapılır.
console.log(sayi1 + sayi2);

const mesaj1 = "Merhaba, " + isim + "." + "Hoşgeldin, " + isim + soyad;
console.log(mesaj1);

const mesaj2 = `Merhaba, ${isim}. Hoşgeldin, ${isim} ${soyad}`;
console.log(mesaj2);

// String ve Number veri tipleri birleştirildiğinde sonuç string olur.
console.log("String ve Number:", "5" + 5);

console.log("sayi1 değişkeninin türü: ", typeof sayi1);
console.log("isim değişkeninin türü: ", typeof isim);

let sayi4 = "5";
console.log("sayi4 değişkeninin türü ve değeri: ", typeof sayi4, "|", sayi4);
console.log(sayi4 + 1);

// String tipinde sayi4 değişkenini number tipine çevirelim.
sayi4 = Number(sayi4);
console.log("sayi4 değişkeninin türü ve değeri: ", typeof sayi4, "|", sayi4);
console.log(sayi4 + 1);

// Number tipindeki sayi3 değişkenini string tipine çevirelim.
console.log("sayi3 değişkeninin türü ve değeri: ", typeof sayi3, "|", sayi3);
console.log(sayi3 + 1);
sayi3 = sayi3.toString();
console.log(sayi3 + 1);
console.log("sayi3 değişkeninin türü ve değeri: ", typeof sayi3, "|", sayi3);

// Matematiksel İşlemler

let sayi5 = 10;
let sayi6 = 5.32;

const toplamaIslemi = sayi5 + sayi6;
console.log("Toplama İşlemi: ", toplamaIslemi);

// - operatörü sadece çıkartma işlemi yapar. Bu yüzden sayılardan birisi string tipinde
// olsa dahi çıkartma işlemi yapılır.
const cikarmaIslemi = sayi5 - sayi6.toString(); // "5.32"  || Alternatif: String(sayi6)
console.log("Çıkarma İşlemi: ", cikarmaIslemi);

// * operatörü çarpma işlemi yapar.
const carpmaIslemi = sayi5 * sayi6;
console.log("Çarpma İşlemi: ", carpmaIslemi);

// String değerini number tipine çevirebildiği için çarpma işlemi yapılır. "10" --> 10
console.log("10" * 5);

const bolmeIslemi = sayi5 / sayi6;
console.log("Bölme İşlemi: ", bolmeIslemi);
const ikiHaneliSonuc = bolmeIslemi.toFixed(2); // Virgülden sonra 2 basamak olacak şekilde yuvarlar.
console.log("İki Haneli Sonuç: ", ikiHaneliSonuc);

// iki sayının bölümünden kalanı bulmak için % operatörü kullanılır.
const modIslemi = 10 % 2;
console.log("Mod İşlemi: ", modIslemi);

const enBuyukSayi = Math.max(10, 15, 3, 5, 13, 2, 18, 33, 20, 45, 96);
console.log("En Büyük Sayı: ", enBuyukSayi);

const randomSayi = Math.random() * 10;
console.log("Rastgele Sayı: ", randomSayi);

console.log(Math.pow(2, 3)); // 2^3 = 8 - İkinin küpü (iki üzeri üç)
