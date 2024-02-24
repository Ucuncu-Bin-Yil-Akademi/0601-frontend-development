// if-else yapısı bir şartın doğru olduğu veya yanlış olduğu durumları kontrol etmemizi
// ve bu durumlara aksiyon oluşturmamızı sağlar.

// ifade doğru (true) ise if bloğunun içerisi çalışır, yanlış (false) ise else bloğunun içerisi çalışır.

if (3 > 15 && 5 < 3) {
  console.log("İfade doğru!");
} else {
  console.log("İfade yanlış!");
}

// ## if-else if-else yapısı

if (1 > 3) {
  console.log("İlk şart doğru");
} else if (2 === 3) {
  console.log("İkinci şart doğru");
} else if (23 > 10 && 8 > -2) {
  console.log("Üçüncü şart doğru");
} else {
  console.log("Hiçbirisi doğru değil");
}

// CLEAN CODE (1) # IF-ELSE

if (1 > 3) console.log("İlk şart doğru");
else if (2 === 3) console.log("İkinci şart doğru");
else if (23 > 10 && 8 > -2) console.log("Üçüncü şart doğru");
else console.log("Hiçbirisi doğru değil");

// CLEAN CODE (2) # SHORT-IF - Terny Operatör

if (3 > 5) {
  console.log("3 sayısı 5'ten büyüktür");
}

3 > 5
  ? console.log("3 sayısı 5'ten büyüktür")
  : console.log("3 sayısı 5'ten küçüktür");

// CLEAN CODE (3) # IF-ELSE

5 > 3 && console.log("Şart sağlandı. 3 sayısı 5'ten büyüktür.");
