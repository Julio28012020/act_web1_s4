const sumar = (...numeros) => numeros.reduce((suma, numero) => suma + numero, 0);

console.log(sumar(9, 219, 31, 1));
console.log(sumar(10, 17, 7));
console.log(sumar(1, 2));
