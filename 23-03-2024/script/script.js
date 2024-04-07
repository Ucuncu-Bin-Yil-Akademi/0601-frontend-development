// DOM - Document Object Model
// document objesi Javascript içerisinde built-in bir objedir ve sayfadaki tüm elemanlara erişmemizi sağlar.
console.log(document);

// ### DOM Method'ları ###

// 1. getElementById() - id'ye göre bir elemanı seçmek için kullanılır. Aranan ID'deki ilk elemanı seçer ve bir HTML etiketi döner.
const eleman2 = document.getElementById("el2");
console.log(eleman2);

const imageEl = document.getElementById("randomImage");
console.log(imageEl);

// 2. getElementsByClassName() - class'a göre eleman seçmek için kullanılır. Aranan Class'taki tüm elemanları seçer ve bir HTMLCollection döner.
const helloEl = document.getElementsByClassName("helloText");
console.log(helloEl);

// HTMLCollection bir Array değildir. Bu sebeple Array metotlarını kullanamayız.
/*
helloEl.forEach(function (item) {
  console.log(item);
});
*/

// HTMLCollection'ı Array'e çevirmek için:
const helloElArray = Array.from(helloEl);
console.log(helloElArray);

// 3. getElementsByName() - name özelliğine göre eleman seçmek için kullanılır. Aranan Name'deki tüm elemanları seçer ve bir NodeList döner.
const nameInputEl = document.getElementsByName("nameInput");
console.log(nameInputEl);

// 4. querySelector - Bir CSS selector'ına göre eleman seçer
// getElementById() gibi sadece bulduğu ilk HTML elemanını etiket olarak döner.
const lorem1El = document.querySelector("#lorem1");
console.log(lorem1El);

const lorem2El = document.querySelector(".lorem2");
console.log(lorem2El);

// 5. querySelectorAll - Bir CSS selector'ına göre eleman seçer
// querySelector'dan farklı olarak bir NodeList döner.

const allLorem2El = document.querySelectorAll(".lorem2");
console.log(allLorem2El);

// innerText ile elemanın içerisindeki metin değer alınabilir ve değiştirilebilir.
// innerHTML ile elemanın içerisindeki HTML değer alınabilir ve değiştirilebilir.
allLorem2El.forEach(function (item) {
  // item.innerText = "Burası değiştirildi! :)";
  item.innerHTML = "<i>Buradaki değerler güncellendi!</i>";
});

const arrayAllLorem2El = Array.from(allLorem2El);
console.log(arrayAllLorem2El);

// ############### setTimeout ve setInterval Metodları ############### //

/*

function sayHello() {
  console.log("Hello");
}

// setTimeout metodu sayesinde bir fonksiyonun belirli bir süre sonra çalışmasını sağlayabiliriz.

setTimeout(sayHello, 5000);

console.log("Burası devam edecek...");

setTimeout(function () {
  console.log("Burası 3.5 saniye sonra çalıştı.");
}, 3500);

// setInterval belirli zaman aralıklarında bir fonksiyonu çalıştırmamızı sağlar.

setInterval(() => {
  console.log("Bu mesaj her 5 saniyede bir ekrana yazdırılacak.");
}, 5000);

let i = 0;

const degeriGuncelle = () => {
  i++;
  console.log("i değeri güncellendi: ", i);
  if (i > 3) {
    clearInterval(surekliCalis);
  }
};

const surekliCalis = setInterval(degeriGuncelle, 2000);

*/

// ##################################################################### //
const counterEl = document.querySelector(".counter");
console.log(counterEl);

counterEl.innerText = "Sayaç başlıyor...";

setTimeout(function () {
  counterEl.innerText = "1";
  setInterval(() => {
    const counterValue = Number(counterEl.innerText);
    counterEl.innerText = counterValue + 1;
  }, 1000);
}, 2000);

console.clear();
