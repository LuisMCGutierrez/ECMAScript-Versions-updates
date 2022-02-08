const string = "hola mundo, hola mundo, hola mundo";
const string2 = string.replace("hola", "adios")
const string3 = string.replaceAll("hola", "adios")
console.log(string)//rempalzo la primera concordancia
console.log(string2)//remplazo todas las concordancias

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);


// 🔒 Metodos privados
class Message {
    #show(val) { // Con el # convertimos al método en privado
        console.log(val);
    };
};

const message = new Message();
message.show('Hola!');

//  👽 Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//  🦴 WeakRef(element);

class AnyClass {
    constructor(element) {
        this.ref = new WeakRef
    }
    {... }
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);