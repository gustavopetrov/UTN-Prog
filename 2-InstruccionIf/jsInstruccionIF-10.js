/*
	Gustavo Petrov - Div D
	IF - Ejercicio 10
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
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

  if (resultado > 8) {
    alert("Excelente");
  } else if (resultado > 3) {
    alert("Aprobó");
  } else {
    alert("Vamos, la próxima se puede");
  }
} //FIN DE LA FUNCIÓN
