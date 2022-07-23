/*

Gustavo Petrov - Div D
E/S Ejercicio 10-bis

Enunciado:
----------
E/S 10 bis: Se pedirá el importe del descuento por prompt. Además se deberá mostrar por alert el siguiente mensaje: "Ud obtuvo un descuento de $xx"

*/

function mostrarAumento() {
  let importe;
  let mostrarDescuento;
  let porcentajeDescuento;
  let precioTotal;

  importe = document.getElementById("txtIdImporte").value;
  importe = parseFloat(importe);

  porcentajeDescuento = prompt("Ingrese el porcentaje deseado: ");
  porcentajeDescuento = parseFloat(porcentajeDescuento);

  mostrarDescuento = (importe * porcentajeDescuento) / 100;
  precioTotal = importe - mostrarDescuento;

  mensaje = `El ${porcentajeDescuento}% de descuento del importe de ${importe} es: ${mostrarDescuento}. El total a pagar es: ${precioTotal}`;

  // resultado = document.getElementById("txtIdResultado");
  // resultado.value = mensaje;
  alert(mensaje);
}
