function esCorreo(cadena) {
    return cadena.includes("@") && cadena.includes(".com");
}

console.log(esCorreo("holaroque@gmail.com"));
console.log(esCorreo("halamadrid.com"));
console.log(esCorreo("vinario@hotmail.com"));
console.log(esCorreo("java@icloud"));

