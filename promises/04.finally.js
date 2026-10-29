// finally () : Registra una funcion que se ejecutara siempre y cuando la promesa termine, sin importar el estado.

var promesaConexion = new Promise(function(resolve, reject){
        console.log('Mostrando animacion de carga...')
        resolve('Informacion cargada')
})

promesaConexion.then(function(respuesta){
    console.log('Exito' + respuesta);
})

promesaConexion.then(function(respuesta){
    console.log('Exito' + respuesta);
}).catch(function(motivoError){
    console.log('Error' + motivoError);
}).finally(function(){
    console.log('Limpieza en finally() : Ocultando la animacion de carga.');
});