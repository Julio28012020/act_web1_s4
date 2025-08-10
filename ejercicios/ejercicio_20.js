const promedio = arreglo => arreglo.reduce((suma, numero) => suma + numero, 0) / arreglo.length;

console.log(promedio([1, 2, 3, 4, 5]));
console.log(promedio([10, 20, 30,]));
console.log(promedio([50, 100]));
console.log(promedio([7]));
