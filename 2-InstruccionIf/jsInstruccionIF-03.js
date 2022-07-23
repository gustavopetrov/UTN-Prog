/*
	Gustavo Petrov - Div D
	IF - Ejercicio 3
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

 */

function mostrar() {
  var edad;
  var esMayor;

  esMayor = 18;
  edad = txtIdEdad.value;
  edad = parseInt(edad);

  if (edad >= esMayor) {
    alert(`Sos mayor de edad.`);
  } else {
    alert(`No sos mayor de edad, tu edad es: ${edad}`);
  }
} //FIN DE LA FUNCIÓN
