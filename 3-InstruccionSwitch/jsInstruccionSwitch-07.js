/*
	Gustavo Petrov - Div D
	Switch - Ejercicio 7

Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste.
*/

function mostrar() {
  var destinoIngresado;
  var mensaje;

  destinoIngresado = txtIdDestino.value;
  switch (destinoIngresado) {
    case "Bariloche":
      mensaje = "Oeste";
      break;
    case "Cataratas":
      mensaje = "Norte";
      break;
    case "Mar del plata":
      mensaje = "Este";
      break;

    default:
      mensaje = "Sur";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
