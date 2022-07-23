/*
	Gustavo Petrov - Div D
	IF - Ejercicio 8
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar() {
  let edad;
  let estadoC;
  let mensaje;

  mensaje = "Es soltero y no es menor";
  estadoC = estadoCivil.value;
  edad = txtIdEdad.value;

  edad = parseInt(edad);

  if (estadoC == "Soltero" && edad > 17) {
    alert(mensaje);
  }
} //FIN DE LA FUNCIÓN
