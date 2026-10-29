var miPromesa = new Promise(
    //Recibe un unico argumento 
    //Funcion ejecutora (executor function)
    function(resolve, reject){
        //Cuerpo de la funcion ejecutora
        var operacionExitosa = false;

        if(operacionExitosa){
            //Cambiar el sentido de 'pending' a 'fulfilled' y entrega de valor
            resolve('Los datos se procesaron correctamente');
        }else{
              //Cambiar el estado de 'pending' a 'rejected' y entrega el motivo del fallo
              reject('Ocurrió un fallo al procesar los datos');
        }

    },
);


//then(); Registra una funcion que se ejecutara cuando la promesa pase al estado fulfilled(cumplida)

//catch(); Registra una funcion que maneja rechazos y errores que se ejecutara cuando la promesa pase al estado rejected (rechazado)

miPromesa.then(function(mensajeRecibido){
    console.log("Resultado capturado en then();" + mensajeRecibido);

})
.catch(function(motivoError){
    console.log("Error capturado en  catch();" + motivoError);
});
