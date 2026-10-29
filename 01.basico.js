//Definir la funcion que servira como callback
function despedirse(){
    console.log("Adiós, hemos terminado la clase")
}

//Declaramos la funcion principal que recibe un parametro
function iniciarProceso(miCallback){
    console.log("Iniciando el proceso principal...")
    //Invocamos la funcion que recibimoa como argumento
    miCallback();

}

// Llamamos a la funcion principal
//Pasamos 'despedirse' SIN parentesis
iniciarProceso(despedirse);
