// Regular Declaration
function ciftSayiYazdir() {
  console.log("Sayı çifttir.");
}

function tekSayiYazdir() {
  console.log("Sayı tektir.");
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    ciftSayiYazdir();
  } else {
    tekSayiYazdir();
  }
}

// Arrow Function

const consolaYazdir = () => {
  console.log("Hello World");
};

consolaYazdir();

(function () {
  console.log("Anonim fonksiyon çalıştı.");
})();

function consolaYazdir2(consoleYaziParametresi) {
  console.log(consoleYaziParametresi);
}

consolaYazdir2("merhaba");

consolaYazdir2("selam");

consolaYazdir2("Üçüncü Bin Yıl Akademi");

function consolaYazdir3(parametre1, parametre2, parametre3) {
  console.log(
    `${parametre1}. Hava sıcaklığı: ${parametre2}. Nem oranı: ${parametre3}`
  );
}

consolaYazdir3("bugün hava yağmurlu", "3 derece", 80);

const sayilariTopla = (sayi1, sayi2) => {
  alert(sayi1 + sayi2);
};

sayilariTopla(5, 10);

// Expression Function

const sayilariCarp = function (sayi1, sayi2) {
  alert(sayi1 * sayi2);
};

sayilariCarp(5, 10);

function myFunction(text1, text2 = "Bu parametreye değer atanmadı.") {
  console.log(`${text1} - ${text2}`);
}

myFunction("Hello");

function myFunction2(parametre1, parametre2, parametre3, ...parametreler) {
  console.log(
    "İlk üç parametre: " + parametre1 + " - " + parametre2 + " - " + parametre3
  );
  console.log(parametreler);
}

myFunction2("x", "y", "z", "a", "b", "c", 1, 2, 3, 4, 5, "d", "e");
