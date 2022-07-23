/*
Lo reenvio para corregir mi error :p
	Gustavo Petrov - Div D
	IF - Ejercicio 5
Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
 */

function mostrar() {
  var edad;

  edad = txtIdEdad.value;
  edad = parseInt(edad);

  if (edad < 13 || edad > 17) {
    alert("No es adolecente");
  }
} //FIN DE LA FUNCIÓN
