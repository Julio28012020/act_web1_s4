function contarVocales(cadena) {
    if (cadena.length == 0) {
        return 0;
    }
    
    let letra = cadena[0].toLowerCase();
    let esVocal = (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u');
    
    return (esVocal ? 1 : 0) + contarVocales(cadena.slice(1));
}

console.log(contarVocales("Crea una función que cuente las vocales (a, e, i, o, u) en una cadena."));