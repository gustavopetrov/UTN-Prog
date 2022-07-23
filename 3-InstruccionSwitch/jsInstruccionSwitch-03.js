/*
	Gustavo Petrov - Div D
	Switch - Ejercicio 3

Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar() {
  var mesDelAnio;
  var mensaje;

  //tomo el mes
  mesDelAnio = txtIdMes.value;

  switch (mesDelAnio) {
    case "Febrero":
      mensaje = " Este mes no tiene más de 29 días.";
      break;

    default:
      mensaje = "Este mes tiene 30 o más días";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
