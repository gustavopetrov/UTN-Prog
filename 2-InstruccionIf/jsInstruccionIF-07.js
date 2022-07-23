/*
	Gustavo Petrov - Div D
	IF - Ejercicio 7
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar() {
  let edad;
  let estadoC;

  //estadoC = document.getElementById("estadoCivil").value;
  estadoC = estadoCivil.value;
  edad = txtIdEdad.value;
  edad = parseInt(edad);

  if (edad < 18 && estadoC != "Soltero") {
    alert("Es muy pequeño para NO ser soltero");
  }
} //FIN DE LA FUNCIÓN
