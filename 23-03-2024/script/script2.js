// ### DOM elemanları arasında geçiş (parent/child/sibling) ###

const eleman4 = document.getElementById("el4");
console.log(eleman4);

// parentElement - Elemanın bir üst elemanını seçer (parent elemanını) ve etiket olarak döner
const parentEl = eleman4.parentElement;
console.log(parentEl);

// childNodes - Elemanın altındaki tüm elemanları seçer ve NodeList döner

const eleman5 = document.getElementById("el5");
const childElements = eleman5.childNodes;

console.log(childElements);

// children - Elemanın altındaki tüm elemanları seçer ve HTMLCollection döner
console.log(eleman5.children);

// nextElementSibling - Eleman ile aynı seviyedeki bir sonraki elemanı seçer ve etiket olarak döner
const nextEl = eleman5.nextElementSibling;
console.log(nextEl);

// previousElementSibling - Eleman ile aynı seviyedeki bir önceki elemanı seçer ve etiket olarak döner

const previousEl = eleman5.previousElementSibling;
console.log(previousEl);

// firstElementChild - Elemanın altındaki ilk elemanı seçer ve etiket olarak döner
const listEl = document.getElementById("list");
console.log(listEl.firstElementChild);
console.log(listEl.children[0]);

// lastElementChild - Elemanın altındaki son elemanı seçer ve etiket olarak döner
console.log(listEl.lastElementChild);

const imgEl = document.getElementById("randomImage");
console.log(imgEl.getAttribute("width"));

imgEl.setAttribute("width", "150");
