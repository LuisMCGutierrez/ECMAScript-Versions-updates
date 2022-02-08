//operador de reposo, puede extraer las propiedades de un objeto que aun no se a construido
const obj = {
    name: 'Luis',
    age: '25',
    country: 'MX'
};

let { name, ...all } = obj

console.log(name, all);

//utilizando las propiedades de propagación, unir objetos
const obj = {
    name: 'Luis'
};

const obj2 = {
    age: '25'
};
const obj3 = {
    ...obj,
    ...obj2,
    country: 'MX'
}

console.log(obj3)

//saber cuando a terminado una funcion async y ejecutar logica de codigo

const promise = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Error('Test Error'))
    })

}

const promise2 = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })

}

promise2()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


//trabajar con los regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day)