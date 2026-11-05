// === PARTE 1 ===

//Reto 1.1: El callback que se ejecuta antes de tiempo

// Código corregido:
const mostrarConfirmacion = () => {
  console.log("Notificación: Datos guardados en el dispositivo.");
};

const guardarEnDispositivo = (callback) => {
  console.log("Guardando información, por favor espera...");
  setTimeout(callback, 1000);
};

// Línea corregida: Se pasa la referencia de la función sin invocarla
guardarEnDispositivo(mostrarConfirmacion);

// Reto 1.2: La cadena de promesas que pierde el dato (undefined)

// Código corregido:
const obtenerPrecioBoleto = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(120), 500);
  });
};

obtenerPrecioBoleto()
  .then((precioBase) => {
    console.log(`Precio base del boleto: $${precioBase}`);
    const totalConCargo = precioBase + 30;
    return totalConCargo; // Línea corregida: Se retorna el valor
  })
  .then((precioFinal) => {
    console.log(`Total final a pagar: $${precioFinal}`);
  });

  // === PARTE 2 ===

  const validarCuponCallback = (codigoCupon, callback) => {
  console.log(`Validando cupón ${codigoCupon} en el servidor...`);
  
  setTimeout(() => {
    if (codigoCupon === "DESCUENTO20") {
      callback(null, { codigo: "DESCUENTO20", porcentaje: 20 });
    } else {
      callback("El cupón ingresado no existe o ha expirado.", null);
    }
  }, 1000);
};

const manejarRespuestaCupon = (error, datosCupon) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Cupón válido: ${datosCupon.codigo} con ${datosCupon.porcentaje}% de descuento.`);
};

validarCuponCallback("DESCUENTO20", manejarRespuestaCupon);
validarCuponCallback("CUPON_FALSO", manejarRespuestaCupon);

  // === PARTE 3 ===

  const validarCuponPromesa = (codigoCupon) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (codigoCupon === "DESCUENTO20") {
        resolve({ codigo: "DESCUENTO20", porcentaje: 20 });
      } else {
        reject("El cupón ingresado no existe o ha expirado.");
      }
    }, 800);
  });
};

const aplicarDescuentoPromesa = (montoPedido, datosCupon) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (montoPedido < 200) {
        reject("El monto mínimo de compra para usar este cupón es de $200.");
      } else {
        const descuento = montoPedido * (datosCupon.porcentaje / 100);
        const totalFinal = montoPedido - descuento;
        resolve({ 
          montoOriginal: montoPedido, 
          descuentoAplicado: descuento, 
          totalPagar: totalFinal 
        });
      }
    }, 800);
  });
};

// Consumo encadenado:
validarCuponPromesa("DESCUENTO20")
  .then((cupon) => {
    console.log(`Cupón ${cupon.codigo} aceptado.`);
    return aplicarDescuentoPromesa(300, cupon);
  })
  .then((resumenPago) => {
    console.log(`Monto original: $${resumenPago.montoOriginal}`);
    console.log(`Descuento aplicado: $${resumenPago.descuentoAplicado}`);
    console.log(`Total a pagar: $${resumenPago.totalPagar}`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("--- Proceso de validación de compra finalizado ---");
  });
