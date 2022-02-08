//Parametros por defecto--------------------------------------

//funciones antes de e6 
function datos(name, age, country) {
    var name = name || 'Luis';
    var age = age || 24;
    var country = country || "Mexico"
    console.log(name, age, country)
};

//e6
function datos2(name = 'Luis', age = 25, country = "Mexico") {
    console.log(name, age, country)
};

datos2();
datos2('Manuel', 30, 'Colombia')

//separar o unir varios elementos (template literals)---------------

//antes de e6
let hola = "hello"
let mundo = "world"
let frase = hola + ' ' + mundo
console.log(frase)

//e6
let frase2 = `${hola} ${mundo}`
console.log(frase2)

//salto de linea------------------------

//antes de e6
let frase3 = "esto era un salto de linea \n"
    + "antes de e6."
//e6 
let frase4 = `esto es un salto de linea 
con template literal.`;

console.log(frase3)
console.log(frase4)

//desestructuracion de elementos......................

//antes de e6

let persona = {
    'name': 'Luis',
    'age': 25,
    'country': 'MX'
}
console.log(persona.name, persona.age, persona.country)

//e6
let { name, age, country } = persona;
console.log(nombre)
console.log(name, age, country)

//operador de propagacion, permite expandir en ciertas situaciones varios elementos

//e6
let team1 = ['Luis', 'Manuel'];
let team2 = ['Paco', 'Andres'];
let education = ['Oscar', ...team1, ...team2];

console.log(education)

//tipos de vasriables................................

//e6
var saludo = "hola"//esta disponible de forma global
let saludo2 = "hola 2" //esta disponible en el scope (bloque de codigo en en el que es llamado)
const saludoConstante = "hola constante"//solo se le asigna un valor y no se puede cambiar


//crear objetos

// antes de e6
let name = 'Luis'
let edad = 25

obj = { name: name, edad: edad }

//e6

obj2 = { name, edad }
console.log(obj)
console.log(obj2)

//funsiones flecha.....................

//antes de e6
const personas = [
    {
        'name': 'Luis',
        'age': 25,
        'country': 'MX'
    },
    {
        'name': 'Andres',
        'age': 26,
        'country': 'CO'
    }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

//e6
let listOfNames2 = names.map(item => {
    console.log(item.name);
})

const listOfNames3 = (name, age, country) => {
    console.log(name, age, country)
}

const listOfNames4 = name => {
    console.log(name)
}
const square = num => num * num;

//promesas con funciones flecha.......................

let promesa = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey");
        } else {
            reject("Ups!");
        }
    })
}
promesa()
    .then(response => console.log(response))
    .catch(error => console.log(error))

//Clases..............................................

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//Importaciones....................................

import { hello } from './module'

hello();

//Generators........................
//funcion especial que retorna una serie de valores segun el algoritmo definido
//checar fibbonacci con generator
function* helloWorld() {
    if (true)
        yield 'Hello, ';
    if (true)
        yield 'World';
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value); //undefined ya que no existe un 3er estado




