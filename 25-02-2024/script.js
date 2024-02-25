const arrayVar = [
  13,
  25,
  4,
  "Hello world!",
  true,
  false,
  true,
  -5.43,
  [21, 39, "Hello"],
  "Javascript",
  2024,
  1232345,
  "test",
  "test2",
];

console.log(arrayVar);

// Array'deki eleman sayısını yazdırmak için length property kullanılır.
console.log(arrayVar.length);

// Array'deki ilk elemanı yazdırmak için index numarası kullanılır.
// Array'lerde index numarası 0'dan başlar.
console.log(arrayVar[0]);

console.log(arrayVar[6]);
console.log(arrayVar[6][1]);

const firstName = "Canberk"; // ['C', 'a', 'n', 'b', 'e', 'r', 'k']
console.log(firstName[2]);

// Array'deki son elemanı yazdırmak için length metodu kullanılır.
// Son elemanın index numarası ise length - 1 olur.
const lastElementIndex = arrayVar.length - 1;
console.log(arrayVar[lastElementIndex]);

// # ** IndexOf ** # (1)
// Array içerisinde aranan elemanın index numarasını döndürür.

const indexOfElement = arrayVar.indexOf("Javascript");
console.log("Javascript string elemanının index değeri: ", indexOfElement);

const indexOfElement2 = arrayVar.indexOf(true);
console.log("true boolean elemanının index değeri: ", indexOfElement2);

const indexOfElement3 = arrayVar.indexOf("arrayde olmayan bir eleman");
console.log("arrayde olmayan bir elemanın index değeri: ", indexOfElement3);

// # ** Push ** # (2)
// Array'in sonuna eleman ekler.

arrayVar.push("Yeni eleman");
arrayVar.push([1, 2, 3]);

// # ** Includes ** # (3)
// Array içerisinde aranan elemanın bulunup bulunmadığını kontrol eder.
// Bulunuyorsa true, bulunmuyorsa false döner.

const isElementExist = arrayVar.includes("test");
console.log("test string elemanı arrayde var mı? ", isElementExist);

const isElementExist2 = arrayVar.includes("test3");
console.log("test3 string elemanı arrayde var mı? ", isElementExist2);

// # Reverse # (4)
// Array'i ters çevirir.

const reversedArray = arrayVar.reverse();
console.log("Reversed array: ", reversedArray);

// # Join # (5)
// Array'in elemanlarını birleştirir ve string'e çevirir.

const newArray = ["Hello", "World", "Javascript"];
const stringedArray = newArray.join();

console.log("Stringed array: ", stringedArray);

const stringedArray2 = newArray.join(" * ");
console.log("Stringed array with separator: ", stringedArray2);

// # Split # (6)
// String'i array'e çevirir.

const stringVar = "Üçüncü Bin Yıl Akademi";
const arrayVar2 = stringVar.split(" ");
console.log("String to array: ", arrayVar2);

// # Concat # (7)

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = array1.concat(array2); // array1 + array2
console.log("Merged array: ", mergedArray);

// # Shift # (8)
// Array'in ilk elemanını siler.

const array3 = [1, 2, 3, 4, 5];
array3.shift();

console.log("Shifted array: ", array3);

// # Unshift # (9)
// Array'in başına eleman ekler.
// push metodu array'in sonuna eleman eklerken,
// unshift metodu array'in başına eleman ekler.

const array4 = [1, 2, 3, 4, 5];
array4.unshift("Yeni eleman");

console.log("Unshifted array: ", array4);

// # Slice # (10)
// Array'in belirli bir kısmını kopyalar ve yeni bir array oluşturur.
// ilk parametre: başlangıç index numarası (dahil)
// ikinci parametre: bitiş index numarası (dahil değil)

const cities = ["Ankara", "İstanbul", "İzmir", "Adana", "Bursa"];

const newCities = cities.slice(1, 4);
console.log("Sliced array: ", newCities);

// # Splice # (11)
// Array'in belirli bir kısmını siler ve yerine yeni eleman ekler.
// ilk parametre: başlangıç index numarası (dahil)
// ikinci parametre: kaç eleman silineceği
// diğer parametreler: eklenecek elemanlar

const newArray5 = ["Ali", "Veli", "Mehmet", "Ayşe", "Fatma", "Hayriye"];
newArray5.splice(1, 3, "Mustafa", "Zeynep", "Ahmet");

console.log("Spliced array: ", newArray5);

// # ** ForEach ** # (12)
// Array'in her bir elemanı üzerinde işlem yapar.

const ages = [25, 30, 35, 40, 45, 50];

ages.forEach(function (age, index) {
  console.log("Güncel elemanın index değeri: ", index);
  console.log("Güncel elemanın değeri: ", age);
});

// # ** Map ** # (13)
// Array'in her bir elemanı üzerinde işlem yapar ve yeni bir array döndürür.

const newArray6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = newArray6.map(function (currentNumber) {
  if (currentNumber % 2 === 0) {
    return currentNumber;
  } else {
    return "Tek Sayı";
  }
});

console.log("Even numbers: ", evenNumbers);

// # ** Filter ** # (14)
// Array'in her bir elemanı üzerinde işlem yapar ve belirli bir koşulu sağlayan
// elemanları yeni bir array olarak döndürür.

const oddNumbers = newArray6.filter(function (currentNumber) {
  return currentNumber % 2 !== 0;
});

console.log("Odd numbers: ", oddNumbers);

// # ** Sort ** # (15)
// Array'in elemanlarını sıralar.
// a ve b değerleri, Array'in elemanlarını temsil eder.
// İlk iki elemandan başlayarak karşılaştırma yapar.
// Eğer return değeri negatif ise elemanların konumunu değişmez.
// Eğer return değeri pozitif ise elemanların konumunu değiştirir.

const newArray7 = [5, 3, 8, 1, 2, 9, 4, 7, 6];
newArray7.sort(function (a, b) {
  return a - b; // küçükten büyüğe sıralama
});

console.log("Sorted array: ", newArray7);

const newArray8 = [5, 3, 8, 1, 2, 9, 4, 7, 6];
newArray8.sort(function (a, b) {
  return b - a; // büyükten küçüğe sıralama
});

console.log("Sorted array: ", newArray8);

// # ** Reduce ** # (16)
// Array'in her bir elemanı üzerinde işlem yapar ve sonucu döndürür.

const newArray9 = [102, 35, 67, 89, 12, 45, 78, 90, 23, 56];

const sum = newArray9.reduce(function (acc, current) {
  return acc + current;
}, 0);

console.log("Sum of array: ", sum);
console.log("Average of array: ", sum / newArray9.length);

// # lastIndexOf # (17)
// Eğer aradığımız elemandan, array'de birden fazla varsa,
// en sonuncusunun index numarasını döndürür.

const indexOfElementTrue = arrayVar.lastIndexOf(true);
console.log("true boolean elemanının index değeri: ", indexOfElementTrue);

// # ** every ** # (18)

const newArray10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isAllEven = newArray10.every(function (currentNumber) {
  return currentNumber % 2 === 0;
});

const newArray11 = [2, 4, 6, 8, 10];
const isAllEven2 = newArray11.every(function (currentNumber) {
  return currentNumber % 2 === 0;
});

console.log("Tüm elemanlar çift mi? ", isAllEven);

console.log("Tüm elemanlar çift mi? ", isAllEven2);

// # ** some ** # (19)

const isAnyEven = newArray10.some(function (currentNumber) {
  return currentNumber % 2 === 0;
});

console.log("Herhangi bir eleman çift mi? ", isAnyEven);
