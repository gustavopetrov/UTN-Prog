/*

Gustavo Petrov - Div D
E/S Ejercicio 8

Enunciado:
----------
Debemos lograr tomar Los numeros por ID.value , transformarlos a enteros "parseInt()",realizar la operación correcta y mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."

*/

// txtIdNumeroUno;
// txtIdNumeroDos;
// let primerOperando;
// let segundoOperando;
// let resto
// let mensaje;

function SacarResto() {
  let dividendo;
  let divisor;
  let resto;
  let mensaje;

  dividendo = document.getElementById("txtIdNumeroDividendo").value;
  divisor = document.getElementById("txtIdNumeroDivisor").value;

  dividendo = parseInt(dividendo);
  divisor = parseInt(divisor);

  resto = dividendo % divisor;

  mensaje = `El resto de la disión entre ${dividendo} y ${divisor} es: ${resto}`;
  alert(mensaje);
}
