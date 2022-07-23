/*
	Gustavo Petrov - Div D
	IF - Ejercicio 9
Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar() {
  let numeroAleatorio;
  let resultado;

  //   Obtengo un numero aleatorio entre 0 y 1
  numeroAleatorio = Math.random();
  console.log(numeroAleatorio);
  //   Lo multiplico por 10
  numeroAleatorio = numeroAleatorio * 10;
  console.log(numeroAleatorio);
  //   Trunco la cadena
  numeroAleatorio = Math.trunc(numeroAleatorio);
  console.log(numeroAleatorio);
  //   Le sumo 1 para quedar en rango de 1 y 10
  resultado = numeroAleatorio + 1;
  console.log(resultado);
  //Genero el número RANDOM entre 1 y 10
} //FIN DE LA FUNCIÓN
