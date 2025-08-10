function operacion(a, b, callback) {
    return callback(a, b);
}

console.log(operacion(7, 3, (a, b) => a * b));
console.log(operacion(11, 9, (a, b) => a + b));
console.log(operacion(10, 33, (a, b) => a - b));
console.log(operacion(30, 3, (a, b) => a / b));
