const newObject = {
    firstName: 'John',
    lastName: "Doe",
    age: 50,
    isMerried: true,
    addresses: ["New York", "California"],
    properties: {
        hairColor: "black",
        height: 175,
        weight: 70
    },
    sayHello: function(){
        console.log("Hello!")
    },
    indroduce: function(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`)
    },
    speak: function(parameter){
        console.log(parameter)
    }
}

/* const firstName = newObject.firstName;
const lastName = newObject.lastName;
const age = newObject.age;
const isMerried = newObject.isMerried;
const addresses = newObject.addresses;
const properties = newObject.properties; */

const {lastName, age, isMerried, addresses, properties} = newObject;
console.log(addresses)

console.log(Object.keys(newObject))


newObject.speak("I am speaking")

//ES6 - 2015 sürümünden önce obje oluşturmak için kullanılan yöntem (Tavsiye Edilmez):
const newObject2 = new Object();
newObject2.firstName = "Jane";

