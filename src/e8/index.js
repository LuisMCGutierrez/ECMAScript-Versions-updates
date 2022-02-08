//convertir un objeto en una matriz
const data = {
    frontend: 'Luis',
    backend: 'Andres',
    designner: 'Roman'
}

const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)

//Object values, devuelve los valores de un objeto en un arreglo
const data = {
    frontend: 'Luis',
    backend: 'Andres',
    designner: 'Roman',
}

const values = Object.values(data)
console.log(values)
console.log(values.length)

//padding, aggregar cadenas 

const string = 'Hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(7, 'hi'))

//Async await
const promesa = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test error'))
    })
}

const helloAsync = async () => {
    const hello = await promesa();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await promesa();
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()