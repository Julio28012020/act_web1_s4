function multiplicarArreglo(arreglo) {
    return arreglo.reduce((producto, numero) => producto * numero, 1);
}

console.log(multiplicarArreglo([10, 8, 4]));
console.log(multiplicarArreglo([]));