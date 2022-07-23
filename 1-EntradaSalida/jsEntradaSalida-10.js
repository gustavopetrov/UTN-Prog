/*

Gustavo Petrov - Div D
E/S Ejercicio 10

Enunciado:
----------
Debemos lograr tomar el importe por ID.value ,
transformarlo a entero "parseInt()", luego
mostrar el importe con un decuento del 25 %. en el cuadro de texto "txtIdResultado"

*/

function mostrarAumento() {
  let importe;
  let porcentajeDescuento;
  let mostrarDescuento;
  let precioTotal;
  let resultado;

  porcentajeDescuento = 25;

  importe = document.getElementById("txtIdImporte").value;
  importe = parseFloat(importe);

  mostrarDescuento = (importe * 25) / 100;
  precioTotal = importe - mostrarDescuento;

  mensaje = `El 25% de descuento del importe: ${importe} es: ${mostrarDescuento}. El total a pagar es: ${precioTotal}`;

  resultado = document.getElementById("txtIdResultado");
  resultado.value = mensaje;
}
