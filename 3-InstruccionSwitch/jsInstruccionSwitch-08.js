/*
	Gustavo Petrov - Div D
	Switch - Ejercicio 8

Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar() {
  var destinoIngresado;
  var mensaje;
  destinoIngresado = txtIdDestino.value;

  switch (destinoIngresado) {
    case "Bariloche":
    case "Ushuaia":
      mensaje = "Hace frío";
      break;

    default:
      mensaje = "Hace calor";
      break;
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
