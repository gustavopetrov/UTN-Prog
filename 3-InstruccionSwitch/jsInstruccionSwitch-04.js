/*
	Gustavo Petrov - Div D
	Switch - Ejercicio 4

Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar() {
  var mesDelAnio;
  var mensaje;

  //tomo el mes
  mesDelAnio = txtIdMes.value;

  switch (mesDelAnio) {
    case "Febrero":
      mensaje = "Febrero tiene 28 días";
      break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
      mensaje = mesDelAnio + " tiene 30 días.";
      break;
    default:
      mensaje = mesDelAnio + " tiene 31 días";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
