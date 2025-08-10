function filtrarMayores(arreglo) {
    return arreglo.filter(numero => numero > 10);
}

console.log(filtrarMayores([8, 12, 6, 15]));
console.log(filtrarMayores([1, 20, 9, 90]));