const stringVar = "Hello World";
const numberVar = 12345;
const booleanVar = true;

// Javascript'te obje tanımlamak için {} notasyonu kullanılır.
// Obje içerisinde key-value eşleşmeleri bulunur.
// Key:Value

// Value'lar her türlü veri tipi olabilir. (string, number, boolean, object, array, function)
const user = {
  name: "John",
  surname: "Doe",
  age: 28,
  addresses: ["İstanbul", "New York"],
  isMarried: false,
  birthDay: new Date(),
  skills: {
    html: "80%",
    css: "70%",
    js: "60%",
  },
  sayHello: function (firstName) {
    console.log(`Hello ${firstName}.`);
    return "Selam verildi.";
  },
  introduce: function () {
    //console.log(user.name + " " + user.surname)
    console.log(this.name + " " + this.surname);
  },
};

console.log(user);

// Obje içerisindeki key'lerin değerlerine ulaşmak için . veya [] notasyonu kullanılır.
console.log(user.age);
console.log(user["age"]);

// Array'lerde obje tutulabilir.
const arrayVar = [{ name: "John" }, { name: "Jane" }, { name: "James" }];
console.log(arrayVar);
// Javascript Object Notation (JSON)

// Array'in içerisindeki elemanları tek tek gezerek mevcut iterasyondaki objenin name key'ine ulaştık.
arrayVar.forEach(function (currentPerson, currentIndex) {
  console.log(currentIndex);
  console.log(currentPerson.name);
});

// Obje içerisindeki fonksiyonu çağırmak:
const userHelloValue = user.sayHello("Jane");
console.log(userHelloValue);

user.introduce();

// ## Object.keys()  ## Objenin key'lerini bir array içerisinde döndürür.
const keysOfUserObject = Object.keys(user);
console.log(keysOfUserObject);

// Bir objenin içerisinde başka bir objenin key'ine ulaşmak için:
// Nested Object (İçe içe geçmiş obje)
console.log(user.skills.html);

// Egzersiz #1

const userList = [
  {
    firstname: "Hilton",
    lastname: "Mueller",
    username: "Randy_Will72",
    mail: "Uriel_Rolfson@gmail.com",
    birtday: "1999-03-01T05:39:33.063Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "20",
  },
  {
    firstname: "Reggie",
    lastname: "Ruecker",
    username: "Brisa.Senger25",
    mail: "Yasmine.Schultz78@yahoo.com",
    birtday: "1968-08-01T10:56:53.957Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "24",
  },
  {
    firstname: "Eduardo",
    lastname: "Pollich",
    username: "Marisol.Bergstrom68",
    mail: "Eudora7@yahoo.com",
    birtday: "1990-11-13T17:44:02.231Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "26",
  },
  {
    firstname: "Freddie",
    lastname: "Carroll",
    username: "Layla_Jenkins",
    mail: "Rosalinda.Cassin@hotmail.com",
    birtday: "1990-06-11T20:40:53.681Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "27",
  },
  {
    firstname: "Jamir",
    lastname: "Romaguera",
    username: "Dolores.Cole4",
    mail: "Jeanie_Huel@gmail.com",
    birtday: "1979-04-06T13:33:04.863Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "28",
  },
  {
    firstname: "Ebony",
    lastname: "D'Amore",
    username: "Toby54",
    mail: "Deven.Towne@hotmail.com",
    birtday: "1947-02-17T22:38:44.775Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "29",
  },
  {
    firstname: "Nicklaus",
    lastname: "Balistreri",
    username: "Kiara5",
    mail: "Kenyon22@hotmail.com",
    birtday: "1972-03-30T10:00:43.387Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "30",
  },
  {
    firstname: "River",
    lastname: "O'Conner",
    username: "Elinor40",
    mail: "Brayan34@yahoo.com",
    birtday: "1945-12-11T20:02:58.721Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "31",
  },
  {
    firstname: "Lindsey",
    lastname: "Lind",
    username: "Xavier.Pfannerstill",
    mail: "Loren_McKenzie@hotmail.com",
    birtday: "1981-06-06T20:57:31.108Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "32",
  },
  {
    firstname: "Haskell",
    lastname: "Littel",
    username: "Renee_Casper",
    mail: "Stefanie.Gutkowski@gmail.com",
    birtday: "1959-01-24T13:05:18.931Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "33",
  },
  {
    firstname: "Mylene",
    lastname: "Abbott",
    username: "Darrion75",
    mail: "Dario_Dach58@yahoo.com",
    birtday: "2002-10-21T21:42:11.632Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "34",
  },
  {
    firstname: "Marlee",
    lastname: "Crona",
    username: "Sadye.Barrows",
    mail: "Chad_Balistreri18@hotmail.com",
    birtday: "1947-08-17T21:31:10.292Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "35",
  },
  {
    firstname: "Rosalyn",
    lastname: "Weimann",
    username: "Monte77",
    mail: "Jeremy.Rogahn@yahoo.com",
    birtday: "1974-12-18T07:25:21.560Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "36",
  },
  {
    firstname: "Madaline",
    lastname: "Wisoky",
    username: "Jessica.Mosciski7",
    mail: "Fiona21@hotmail.com",
    birtday: "2001-10-12T09:28:07.261Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "37",
  },
  {
    firstname: "Peggie",
    lastname: "Kuvalis",
    username: "Dedrick.Bashirian38",
    mail: "Valerie.Flatley24@hotmail.com",
    birtday: "1965-07-18T02:45:43.666Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "38",
  },
  {
    firstname: "Ray",
    lastname: "Hansen",
    username: "Danika_Zieme",
    mail: "Maximo.Bernier91@gmail.com",
    birtday: "1954-08-26T08:22:42.031Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "39",
  },
  {
    firstname: "Elias",
    lastname: "Blick",
    username: "Eve.Dickinson",
    mail: "Theresia_Bergnaum28@yahoo.com",
    birtday: "1979-06-07T05:45:42.985Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "40",
  },
  {
    firstname: "Dion",
    lastname: "Schultz",
    username: "Nettie_Champlin3",
    mail: "Pansy74@gmail.com",
    birtday: "1970-01-08T16:40:08.620Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "41",
  },
  {
    firstname: "Grant",
    lastname: "Gusikowski",
    username: "Tillman33",
    mail: "Russel_Roob@hotmail.com",
    birtday: "1980-05-21T02:42:14.370Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "42",
  },
  {
    firstname: "Mackenzie",
    lastname: "Torp",
    username: "Jake_Graham0",
    mail: "Fritz0@hotmail.com",
    birtday: "1953-09-22T19:41:08.175Z",
    avatar: "https://loremflickr.com/640/480/people",
    id: "43",
  },
  {
    firstname: "Canberk",
    lastname: "Beren",
    username: "canberk1",
    mail: "Adolfo40@gmail.com",
    birtday: "1981-02-01T16:13:01.661Z",
    avatar: "https://picsum.photos/400/400",
    id: "47",
    birthday: "2024-02-15",
  },
  {
    firstname: "Canberkk",
    lastname: "Berennnnn",
    username: "canberk123",
    mail: "Alessandro.Boyer31@gmail.com",
    birtday: "1970-03-24T05:01:47.806Z",
    avatar: "https://picsum.photos/400/400",
    id: "50",
    birthday: "2024-02-15",
  },
  {
    firstname: "Temel ",
    lastname: "Erkılıç",
    username: "temelerkl",
    mail: "Everette_Franey@gmail.com",
    birtday: "1993-09-06T06:52:28.899Z",
    avatar: "temelerklc",
    id: "51",
    birthday: "2003-08-11",
  },
  {
    firstname: "Ayşenur",
    lastname: "Öztürk",
    username: "aysenur1",
    mail: "Hassan.Predovic25@hotmail.com",
    birtday: "1957-06-13T13:05:56.665Z",
    avatar: "https://picsum.photos/300/300",
    id: "52",
    birthday: "2024-02-23",
  },
];

const today = new Date();
const thisYear = today.getFullYear();

let yasi50denBuyukOlanlar = []
let yasi50denKucukOlanlar = []

userList.forEach(function(currentUser){
    const birthYear = new Date(currentUser.birtday).getFullYear();
    if(thisYear - birthYear > 50) yasi50denBuyukOlanlar.push(currentUser)
    else yasi50denKucukOlanlar.push(currentUser)
})

console.log("Yaşı 50'den Büyük Olanlar:", yasi50denBuyukOlanlar)
console.log("Yaşı 50'den Küçük Olanlar:", yasi50denKucukOlanlar)

// Aynı işlemi filter fonksiyonu ile yapmak

const yasi50denBuyukOlanlar2 = userList.filter(function(currentUser){
    const birthYear = new Date(currentUser.birtday).getFullYear();
    return thisYear - birthYear > 50;
})

console.log("Yaşı 50'den Büyük Olanlar (Filter):", yasi50denBuyukOlanlar2)