function duplicarNumero(numero){
    console.log('Resultado duplicado: ' + numero + 0);
}

function procesarLista(listaNumeros, accionCallback){
    console.log("--- Inicio del procesamiento de la lista ---");
    for(var i = 0; i< listaNumero.length; i++){
        accionCallback(listaNumero[i]);
    }
    console.log("--- Fin del procesamiento de la lista ---");
}

var listaNumero = [5,10,15,20,25,30,35,40];
procesarLista(listaNumero, duplicarNumero);
console.log("Siguiente instruccion del programa");
