/*
	Gustavo Petrov - Div D
	Switch - Ejercicio 2

Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar() {
  var mesDelAnio;
  var mensaje;
  //tomo el mes
  mesDelAnio = txtIdMes.value;

  switch (mesDelAnio) {
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
      mensaje = "Falta para el invierno.";
      break;
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
      mensaje = "Abrigate que hace frio.";
      break;

    default:
      mensaje = "Ya pasamos el frio, ahora calor!!!.";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
