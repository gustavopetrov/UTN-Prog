/*

Gustavo Petrov - Div D
E/S Ejercicio 7

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"

*/

// txtIdNumeroUno;
// txtIdNumeroDos;
// let primerOperando;
// let segundoOperando;
// let mensaje;

function sumar() {
  let primerOperando;
  let segundoOperando;
  let mensaje;

  primerOperando = parseInt(document.getElementById("txtIdNumeroUno").value);
  segundoOperando = parseInt(document.getElementById("txtIdNumeroDos").value);
  mensaje = primerOperando + segundoOperando;

  alert(`El resultado de la suma es: ${mensaje}`);
}

function restar() {
  let primerOperando;
  let segundoOperando;
  let mensaje;

  primerOperando = parseInt(document.getElementById("txtIdNumeroUno").value);
  segundoOperando = parseInt(document.getElementById("txtIdNumeroDos").value);
  mensaje = primerOperando - segundoOperando;

  alert(`El resultado de la resta es: ${mensaje}`);
}

function multiplicar() {
  let primerOperando;
  let segundoOperando;
  let mensaje;

  primerOperando = parseInt(document.getElementById("txtIdNumeroUno").value);
  segundoOperando = parseInt(document.getElementById("txtIdNumeroDos").value);
  mensaje = primerOperando * segundoOperando;

  alert(`El resultado de la multiplicación es: ${mensaje}`);
}

function dividir() {
  let primerOperando;
  let segundoOperando;
  let mensaje;
  let resto;

  primerOperando = parseFloat(document.getElementById("txtIdNumeroUno").value);
  segundoOperando = parseFloat(document.getElementById("txtIdNumeroDos").value);
  mensaje = primerOperando / segundoOperando;
  resto = primerOperando % segundoOperando;

  // Error pendiente en la división por cero!

  alert(`El resultado de la división es: ${mensaje} y el resto es: ${resto}`);
}
