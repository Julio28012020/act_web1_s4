function retrasarMensaje(mensaje, tiempo) {
    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);
}

retrasarMensaje("Retrasar ejecución de un mensaje", 0);
retrasarMensaje("Crea una función que imprima un mensaje después de un tiempo definido por el usuario.", 5000);
retrasarMensaje("Función anónima con setTimeout", 10000);
retrasarMensaje("Roque ALdana", 20000);
retrasarMensaje("Finalizacion", 40000);