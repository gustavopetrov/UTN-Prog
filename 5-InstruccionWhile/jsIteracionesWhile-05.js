/*
	Gustavo Petrov - Div D
	WHILE - Ejercicio 5
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar() {
  var sexoIngresado;
  sexoIngresado = prompt("ingrese f ó m .");
  while (sexoIngresado != "F" && sexoIngresado != "M") {}
  txtIdSexo.value = sexoIngresado;
} //FIN DE LA FUNCIÓN
