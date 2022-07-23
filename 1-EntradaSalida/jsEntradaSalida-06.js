/*

Gustavo Petrov - Div D
E/S Ejercicio 6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"

*/
function sumar() {
  let primerOperando;
  let segundoOperando;
  let mensaje;

  primerOperando = parseInt(document.getElementById("txtIdNumeroUno").value);
  segundoOperando = parseInt(document.getElementById("txtIdNumeroDos").value);

  mensaje = primerOperando + segundoOperando;

  alert(mensaje);
  alert(typeof mensaje);
}
