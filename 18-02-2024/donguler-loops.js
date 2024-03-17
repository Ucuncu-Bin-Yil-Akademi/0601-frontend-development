// ### DÖNGÜLER - LOOPS ###

// 1. For Loop
for (let i = 0; i < 10; i++) {
  console.log("Döngü çalıştı:", i);

  if (i === 3) {
    break; // break ile döngüyü durdurabilir ve döngüden çıkabiliriz (Sonlandırır)
  }
}

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // continue ile döngüyü durdurup bir sonraki adıma geçebiliriz. (Atlar)
  }

  console.log("2.Döngü çalıştı", i);
}

// 2. While Loop

let i = 0;

while (i < 10) {
  console.log("While döngüsü çalıştı", i);
  if (i === 5) {
    break;
  }
  i++;
}

// 3. Do While Loop

let j = 11;

do {
  console.log("Do-While döngüsü çalıştı", j);
  j++;
} while (j < 10);

// For ve While döngülerinin çalışma prensibi aynıdır:
// İlk önce şart kontrol edilir, şart sağlanıyorsa döngü bloğu çalıştırılır,
// döngü bloğu çalıştırıldıktan sonra arttırma işlemi yapılır ve
// tekrar şart kontrol edilir. Şart sağlanmıyorsa döngü sonlanır.

// Ancak Do-While döngüsünde önce döngü bloğu çalıştırılır, sonra şart kontrol edilir.
// Yani döngü, şart sağlanmasa bile en az bir kere çalıştırılır.
