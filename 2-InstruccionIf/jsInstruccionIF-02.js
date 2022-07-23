/*
	Gustavo Petrov - Div D
	IF Ejercicio 2
Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar() {
  var edad;
  var esMayor;

  esMayor = 18;
  edad = txtIdEdad.value;
  edad = parseInt(edad);

  if (edad >= esMayor) {
    alert(`Podes ingresar.`);
  }
} //FIN DE LA FUNCIÓN
