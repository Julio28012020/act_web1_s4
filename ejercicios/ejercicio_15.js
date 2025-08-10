function invertir(cadena) {
    if (cadena.length <= 1) {
        return cadena;
    }
    
    return invertir(cadena.slice(1)) + cadena[0];
}

console.log(invertir("Invertir una cadena"));
console.log(invertir("Función recursiva"));
console.log(invertir("Roque Aldana"));