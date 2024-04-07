// Örnek #1 - Senkron Programlama

/* function senkronFonksiyon(){
    setTimeout(function(){
        console.log("Bilgiler getiriliyor...")
    }, 3000);
}

senkronFonksiyon();

console.log("İşlem tamamlandı") */

// Örnek #2 - Senkron Programlama

/* let firstName;

function anotherFunction(){
    return `Fonksiyon çalıştı. Kullanıcın ismi ${firstName}`
}

setTimeout(function(){
    firstName = "Canberk";
    console.log(anotherFunction());
}, 3000)

console.log(anotherFunction());
console.log("İşlem tamamlandı") */

// ASENKRON PROGRAMLAMA (CONCURRENCY)
// 1. Callback
// 2. Promise
// 3. Async / Await

// ##### 1. CALLBACK #####
// Örnek 1
/* function asyncFunction(callback){
    console.log("İşlem başlıyor...")

    setTimeout(function(){
        console.log("İşlem tamamlandı")
        callback();
    }, 2000)
}

asyncFunction(function(){
    console.log("Callback fonksiyonu çağrıldı. İşlem tamamlandıktan sonra bu blok çalışacaktır.")
}) */

// Örnek 2 - CALLBACK HELL
/* function asyncFunction(callback) {
    console.log("İşlem başlıyor...");
  
    setTimeout(function () {
      console.log("İşlem tamamlandı");
      callback();
    }, 2000);
  }
  
  function async2(callback) {
    setTimeout(function () {
      console.log("İşlem tamamlandı");
      callback();
    }, 2000);
  }
  
  asyncFunction(function (callback) {
    console.log(
      "Callback fonksiyonu çağrıldı. İşlem tamamlandıktan sonra bu blok çalışacaktır."
    );
  
    async2(function(){
      console.log("ikinci işlem tamamlandı")
    })
  });
   */

// ##### 2. PROMISE #####

// Örnek 1
/* const asenkronIslem = new Promise((resolve, reject) => {

    console.log("İşlem başlıyor...");

    setTimeout(function(){
        const isSuccess = true;
        if(isSuccess){
            resolve("İşlem başarıyla tamamlandı!")
        } else{
            reject("İşlem başarısız oldu!")
        }
    }, 2000)
})

asenkronIslem.then((sonuc) => {
    console.log(sonuc)
}).catch((hata) => {
    console.log(hata)
}) */

// Örnek 2
/*
const userListEl = document.getElementById("userList");
const users = []

const asenkronIslem = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(users.length > 0){
            resolve({
                message: "Kullanıcılar başarıyla getirildi",
                data: users
            })
        } else{
            reject({
                message: "Kullanıcı bulunamadı",
                data: []
            })
        }
    }, 3000)
})

asenkronIslem.then((response) =>{
    response.data.forEach((user) => {
        const liEl = document.createElement("li");
        liEl.innerText = user.fullName;
        userListEl.appendChild(liEl);
    })
}).catch((error) => {
    const errorMessage = document.createElement("h2");
    errorMessage.innerText = error.message;
    userListEl.appendChild(errorMessage);
}) */




// Örnek 3
const validEmail = "test@gmail.com";
const validPassword = "123456";

const emailInputEl = document.getElementsByName("email")[0];
const passwordInputEl = document.getElementsByName("pw")[0];
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", async function(){
    const emailValue = emailInputEl.value;
    const passwordValue = passwordInputEl.value;
    
        await new Promise((resolve, reject) => {
           setTimeout(() => {
            if(emailValue === validEmail && passwordValue === validPassword){
                resolve("Giriş başarılı!")
            } else{
                reject("Giriş başarısız!")
            }
           }, 10000)
        }).then((res) => {
            alert(res)
        }).catch((err) => {
            alert(err)
        })
  
})














// ##### 3. ASYNC / AWAIT #####
/* async function asenkronIslem(){
    console.log("İşlem başlıyor...");

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("İşlem başarıyla tamamlandı!")
        }, 3000)
    }).then((response) => {
        console.log(response)
    })


    console.log("İşlem tamamlandı")
}

asenkronIslem(); */

/* const asenkronIslem = async () => {
    console.log("İşlem başlıyor...");

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("İşlem başarıyla tamamlandı!")
        }, 3000)
    }).then((response) => {
        console.log(response)
    })


    console.log("İşlem tamamlandı")
}

asenkronIslem(); */

/// ### TRY - CATCH BLOKLARI ###
/* try {
  const x = 10;
  x = 20;

  console.log("test");
} catch (error) {
    console.log("bir hata oluştu:", error)
} finally{
    console.log("finally bloğu çalıştı")
}

console.log("işlem tamamlandı") */

