/*
	Gustavo Petrov - Div D
	Switch - Ejercicio 5

Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar() {
  var horaDelDia;
  var mensaje;

  //tomo la hora
  horaDelDia = txtIdHora.value;
  horaDelDia = parseInt(horaDelDia);

  switch (horaDelDia) {
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      mensaje = "Es de mañana";
      alert(mensaje);
    default:
      break;
  }
} //FIN DE LA FUNCIÓN
