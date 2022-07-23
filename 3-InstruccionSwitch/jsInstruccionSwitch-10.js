/*
	Gustavo Petrov - Div D
	Switch - Ejercicio 9

Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche

*/

function mostrar() {
  var lugarDestino;
  var estacionIngresada;
  var mensaje;
  estacionIngresada = txtIdEstacion.value;
  lugarDestino = txtIdDestino.value;

  switch (estacionIngresada) {
    case "Invierno":
      // Bariloche
      switch (lugarDestino) {
        case "Bariloche":
          mensaje = "Se viaja.";
          break;

        default:
          mensaje = "No se viaja.";
          break;
      }
      break;
    case "Verano":
      /*
				Mar del plata
				Cataratas
			*/
      switch (lugarDestino) {
        case "Mar del plata":
        case "Cataratas":
          mensaje = "Se viaja.";
          break;

        default:
          mensaje = "No se viaja.";
          break;
      }
      break;
    case "Primavera":
      /*
				Cataratas
				Mar de plata
				Cordoba
			*/
      switch (lugarDestino) {
        case "Bariloche":
          mensaje = "No se viaja.";
          break;
        default:
          mensaje = "Se viaja.";
          break;
      }

      break;
    default:
      // Todos los destinos (otoño)
      mensaje = "Se viaja.";
      break;
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
