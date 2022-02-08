//realizar importaciones de forma dinamica
const button = document.getElementById("btn");

button.addEventListener("click", async () => {
    const module = await import("./file.js");
    module.hello()
})

//bigInt 2 elevado a la 53

const bigNumber = 9007199254740991 //numero mas grande antes
const bigNumber2 = 9007199254740991n //nuevo big Number
const bigNumber3 = BigInt(9007199254740991)// otra forma de llamar big int

console.log(bigNumber)
console.log(bigNumber2)
console.log(bigNumber3)

//devuelve una promesa que se resuelve despues de que todas las promesas se hayan cumplido y/o rechasado

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//global this
console.log(window);
console.log(globalThis);

//operador logico que devuelve su ooperando cunado el operador es nulo

const foo = null ?? 'default string';
console.log(foo)

//poder trabajar diferentes niveles de objetos

const user = {};
console.log(user?.profile?.email)

if (user?.profile?.email) {
    console.log('email')
} else {
    console.log('fail')
}

