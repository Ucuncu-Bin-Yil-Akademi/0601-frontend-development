const helloEl = document.getElementById("helloText");
console.log(helloEl);

console.log(document.getElementById("helloText").getAttribute("class"));
console.log(document.getElementById("helloText").className);

// Elemanın class attribute'unun değerlerini elde etmek için spesifik bir yol:
// Bu property bir DOMTokenList döner.

console.log(helloEl.classList);

// contains metodu sayesinde aranan bir class değerinin elemanın class attribute'unda olup olmadığını kontrol edebiliriz. (true/false)
console.log(helloEl.classList.contains("text-red-500"));

const guncelClassList = helloEl.className; // 'text-xl text-red-500'
helloEl.className = guncelClassList + " " + "bg-blue-500"; // 'text-xl text-red-500 bg-blue-500'

// Elemanın class değerlerinde değişiklik yapmak className property'si ile daha zordur. Bunun yerine classList property'si kullanılabilir.
helloEl.classList.add("p-5");

setTimeout(function () {
  helloEl.classList.remove("bg-blue-500");
  helloEl.classList.replace("text-xl", "text-sm");
}, 3000);

// Elemanın style property'si ile CSS özelliklerine erişebilir ve değişiklik yapabiliriz.
console.log(helloEl.style);
helloEl.style.border = "1px solid red";

setTimeout(function () {
  helloEl.removeAttribute("style");
  helloEl.removeAttribute("class");
}, 5000);

// Yeni bir eleman oluşturmak için createElement metodu kullanılır.

let task1 = document.createElement("li"); // <li></li>
task1.innerText = "İlk görev"; // <li>İlk görev</li>

let task2 = document.createElement("li");
task2.innerText = "İkinci görev";
task2.classList.add("line-through");

let task3 = document.createElement("li");
task3.innerText = "Ara görev";

// Bir elemanın içerisine (child eleman olarak) başka bir eleman eklemek için appendChild metodu kullanılır.
const listEl = document.getElementById("todoList");

listEl.appendChild(task1);
listEl.appendChild(task2);

// Bir elemandan öncesine eleman eklemek için insertBefore metodu kullanılır.
// parent elemana insertBefore metodu uygulanır ve bu metoda parametre olarka sırasıyla:
// 1. Eklenecek eleman
// 2. Hangi elemandan önce ekleneceği
listEl.insertBefore(task3, task2);

// ### EVENT LISTENERS ###

const buttonEl = document.getElementById("buttonEl");

// Bir elemana event listener eklemek için addEventListener metodu kullanılır.
// Tıklama olayı (click event) için "click" parametresi kullanılır.
// İkinci parametre olarak bir fonksiyon verilir. Bu fonksiyon tıklama olayı gerçekleştiğinde çalıştırılır.
buttonEl.addEventListener("click", function (tiklamaIslemiHakkindakiDetaylar) {
  alert("Clicked on button element");
  console.log(tiklamaIslemiHakkindakiDetaylar);
});

helloEl.addEventListener("click", () => {
  alert("Clicked on h1 element");
});

const tiklamaFonksiyonu = () => {
  alert("Clicked on ul element");
};

listEl.addEventListener("click", tiklamaFonksiyonu);

// Elemanın üzerine gelme olayı için "mouseover" event'i kullanılır.
const hoverBoxEl = document.getElementById("hoverBox");
hoverBoxEl.addEventListener("mouseover", function () {
  hoverBoxEl.classList.replace("bg-red-500", "bg-blue-500");
});

// Elemanın üzerinden çıkma olayı için "mouseout" event'i kullanılır.
hoverBoxEl.addEventListener("mouseout", function () {
  hoverBoxEl.style.transition = "color 1s, background-color 10s";
  // .hoverBoxEl {
  //  transition: all 1s;
  // }
  hoverBoxEl.classList.replace("bg-blue-500", "bg-red-500");
  hoverBoxEl.classList.add("text-gray-900");
});

// Çift tıklama olayı için "dblclick" event'i kullanılır.
hoverBoxEl.addEventListener("dblclick", function () {
  alert("Double clicked on hover box");
});
