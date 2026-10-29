//Operacion asincrona simulada con setTimeout()

function solicitarClima(ciudad) {
    return new Promise(function (resolve, reject) {
        console.log("Solicitando pronosticos del clima para " + ciudad + "...");
        setTimeout(function () {
            if (ciudad === '') {
                reject('No se proporcionó una ciudad válida')
            } else {
                var datoClima = {
                    ciudad: ciudad,
                    temperatura: 21,
                    condicion: 'soleado'
                }
                resolve(datoClima);
            }
        },5000);
    });
}

solicitarClima('Cordoba').then(function (reporte) {
    console.log('Clima en : ' + reporte.ciudad + ': ' + reporte.temperatura + '°C y ' + reporte.condicion);
}).catch(function (error) {
    console.log('Error: ' + error);
});


console.log("La aplicacion continua ejecutandose mientras llega el reporte...");