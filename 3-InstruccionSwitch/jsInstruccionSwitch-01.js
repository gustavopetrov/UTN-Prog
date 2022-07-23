/*
	Gustavo Petrov - Div D
	Switch - Ejercicio 1

al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar() {
  var mesDelAnio;
  var mensaje;
  //tomo el mes
  mesDelAnio = txtIdMes.value;

  switch (mesDelAnio) {
    case "Enero":
      mensaje = "Que comiences bien el año!!!.";
      break;
    case "Marzo":
      mensaje = "A clases!!!.";
      break;
    case "Julio":
      mensaje = "se vienen las vacaciones!!!.";
      break;
    case "Diciembre":
      mensaje = "Felices fiestas!!!.";
      break;

    default:
      mensaje = "Mes de transición";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
