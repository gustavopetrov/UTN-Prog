/*

Gustavo Petrov - Div D
E/S Ejercicio 9-bis

Enunciado:
----------
E/S 9 bis: Se pedirá el importe del aumento por prompt.

*/

function mostrarAumento() {
  let importe;
  let porcentajeDeAumento;
  let aumento;
  let resultado;
  let mensaje;

  porcentajeDeAumento = prompt("Inrgese el porcentaje de aumento deseado: ");
  porcentajeDeAumento = parseFloat(porcentajeDeAumento);

  importe = document.getElementById("txtIdSueldo").value;
  importe = parseFloat(importe);

  aumento = (importe * porcentajeDeAumento) / 100;
  resultado = importe + aumento;

  mensaje = `El resultado es: ${resultado}`;
  txtIdResultado.value = mensaje;
}
