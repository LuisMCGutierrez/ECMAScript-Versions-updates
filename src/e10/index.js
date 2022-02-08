//regresar una matriz con cualquier submatris aplanada
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2))

//mapear cada elemento, pasarlo a una funcion y aplanarlo

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));

//eliminar los espacios en blanco al principio de un string

let hello = '          Hello World';
console.log(hello);
console.log(hello.trimStart())

//eliminar los espacios en blanco al final de un string

let hello = 'Hello World                  ';
console.log(hello);
console.log(hello.trimEnd())

//pasar de forma opcional el parametro de error al valor de catch

try {

} catch {
    error
}

//transformar [clave,valor] en objeto, uno de sus  usos principales es transformar arreglos en objetos

let entries = [["name", "Luis"], ["age", 32]]

console.log(Object.fromEntries(entries))

//acceder a una descripcion

let mySymbol = 'my Symbol'
let symbol = Symbol(mySymbol);
console.log(symbol.description);