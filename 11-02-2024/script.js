// OPERATORLER

// 1- ASSIGNMENT OPERATORS (Atama Operatörleri)

let x = 5; // Eşittir operatörü (=) x değişkenine 5 değerini atar.

x = x - 2;
console.log(x); // 3

x = x + 9;
console.log(x); // 12

x = x + 1;
console.log(x); // 13

x += 5; // x = x + 5 ile aynı anlama gelir.
console.log(x); // 18

x -= 2; // x = x - 2 ile aynı anlama gelir.
console.log(x); // 16

x /= 4; // x = x / 4 ile aynı anlama gelir.
console.log(x); // 4

x *= 3; // x = x * 3 ile aynı anlama gelir.
console.log(x); // 12

x %= 5; // x = x % 5 ile aynı anlama gelir.
console.log(x); // 2

// BOOLEAN Veri Tipi

// Boolean veri tipi sadece iki değer alabilir: true (doğru) ve false (yanlış).
let y = true;
let z = false;
console.log(typeof y);
console.log(typeof z);

const a = 5;
// a = 2; // Hata verir. Çünkü const ile tanımlanan değişkenlerin değeri sonradan değiştirilemez.

let b = 5;
b = 2; // Hata vermez. Çünkü let ile tanımlanan değişkenlerin değeri sonradan değiştirilebilir.
b = "Üçüncü Bin Yıl Akademi"; // Hata vermez. Çünkü let ile tanımlanan değişkenlerin veri tipi sonradan değiştirilebilir.
console.log(b);

let c; // let ile oluşan değişkenlere ilk başta bir değer atamak zorunda değiliz.
console.log(c); // undefined (undefined değeri de boolean, string ve number gibi bir veri tipidir.)

c = 15;
console.log(c); // 15

// const d; // const ile oluşan değişkenlere ilk başta bir değer atamak zorundayız.

// 2- LOGICAL OPERATORS (Mantıksal Operatörler)
let sayi1 = 120;
let sayi2 = 150;

// sayi1BuyukturSayi2 bu yazım şekline camelCase adı verilir.
// ilk kelimenin bütün harfleri küçük, diğer kelimelerin sadece ilk harfleri büyük yazılır.
console.log("50 sayısı 20 sayısından büyüktür: ", 50 > 20);

let sayi1BuyukturSayi2 = sayi1 > sayi2;
console.log(sayi1BuyukturSayi2);

let sayi1KucukturSayi2 = sayi1 < sayi2;
console.log(sayi1KucukturSayi2);

// Logical operatorlerin çıktıları boolean veri tipindedir. (true veya false)

console.log("String'lerde karşılaştırma: ", "a" > "b"); // alfabedeki sıralamaya göre karşılaştırma yapar.

console.log("50 sayısı 50 sayısına eşittir: ", 50 == 50);
console.log("45 sayısı 32 sayısına eşittir: ", 45 == 32);
console.log("a harfi b harfine eşittir: ", "a" == "b");

console.log(50 == "50"); // true (Sadece değerler eşit olmalıdır.)
console.log(50 === "50"); // false (Hem değerler hem de veri tipleri aynı olmalıdır.)
console.log(50 === 50); // true

console.log(50 == 40);
console.log(50 != 40); // 50 40'a eşit olmadığı için true döner.
console.log(50 != 50); // false

console.log(50 != "45"); // true (Sadece değerler eşit olmadığı için true döner.)
console.log(50 !== "45"); // true (Hem değerler hem de veri tipleri farklı olduğu için true döner.)

// Yirmi ondan büyüktür ve beş üçten küçüktür önermesinin Javascript karşılığı:
console.log(20 > 10 && 5 < 3); // false (&& operatörü, karşılaştırma işlemlerinde her iki koşulunda sağlanması durumunda true döner.)
console.log("a" === "a" && 10 > 3); // true

console.log(5 > 3 || -1 > 3);
console.log(10 < 2 || 3 > 25); // false (|| operatörü, karşılaştırma işlemlerinde her iki koşuldan birinin sağlanması durumunda true döner.)

// beş üçten küçüktür ve yirmi ondan büyüktür, veya 10 çift sayıdır ve 5 tek sayıdır
const dogruMu = (5 < 3 && 20 > 10) || (10 % 2 == 0 && 5 % 2 == 1);
console.log(dogruMu);
