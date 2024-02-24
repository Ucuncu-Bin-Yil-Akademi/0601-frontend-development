// # Nested Function # (İç içe fonksiyonlar)

const nestedFunction = (param1, param2) => {
  console.log("Dış Fonksiyon");
  function toplama() {
    console.log("İç Fonksiyon");
    let toplamaSonucu = param1 + param2;
    console.log("Toplama sonucu:", toplamaSonucu);
  }

  toplama();
};

nestedFunction(5, 3);

// # Return #

export function returnOrnek() {
  return "Merhaba";
}

let returnSonucu = returnOrnek();
console.log("Return sonucu:", returnSonucu);

function carpmaIslemi(sayi1, sayi2) {
  let carpmaSonucu = sayi1 * sayi2;
  return carpmaSonucu;
  console.log("Bu kod çalışmaz");
}

let carpmaIslemininSonucu = carpmaIslemi(4, 7);
console.log("Çarpma işleminin sonucu:", carpmaIslemininSonucu);

// # Recursive Function #

let i = 0;

function loop() {
  i++; // i = i + 1

  if (i > 10) {
    return;
  }

  console.log("Döngü", i);
  loop();
}

loop();

// # Callback Function #

// Bir fonksiyonun parametre olarak başka bir fonksiyon alması durumudur.
// Asenkron programalama konusunda daha detaylı bir şekilde göreceğiz.

function callBackExample(num1, num2, callback) {
  let sonuc = num1 + num2;
  callback(sonuc);
}

function sonucuYazdir(sonucDegeri) {
  console.log("Sonuç:", sonucDegeri);
}

callBackExample(5, 8, sonucuYazdir);

// # Import & Export #

export function importOrnek() {
  console.log("Import örneği");
}

export default function importOrnek2() {
  console.log("Import örneği (export default)");
}
