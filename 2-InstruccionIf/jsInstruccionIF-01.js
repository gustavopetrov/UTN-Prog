/*
	Gustavo Petrov - Div D
	IF - Ejercicio 1

Enunciado:
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/

function mostrar() {
  var edad;

  edad = txtIdEdad.value;
  edad = parseInt(edad);

  if (edad == 15) {
    alert("niña bonita");
  }
  alert("Tu edad no es 15.");
} //FIN DE LA FUNCIÓN
