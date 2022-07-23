/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  var contador;
  var respuesta;
  var sumaPositivos;
  var multiplicacionNegativos;
  var valorIngresado;
  contador = 0;
  sumaPositivos = 0;
  multiplicacionNegativos = 1;
  respuesta = true;

  while (respuesta == true) {
    valorIngresado = prompt("Ingrese un numero :)");
    valorIngresado = parseInt(valorIngresado);
    if (valorIngresado >= 0) {
      sumaPositivos = sumaPositivos + valorIngresado;
    } else {
      multiplicacionNegativos = multiplicacionNegativos * valorIngresado;
    }
    contador++;
    respuesta = confirm("Desea ingresar otro numero?");
  }

  txtIdSuma.value = sumaPositivos;
  txtIdProducto.value = multiplicacionNegativos;
} //FIN DE LA FUNCIÓN

/*
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var primerNegativo;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = true;
	primerNegativo = false;

	while (respuesta)
	{
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado >= 0)
		{
			sumaPositivos += numeroIngresado;
		}
		else
		{
			multiplicacionNegativos *= numeroIngresado; 
			primerNegativo = true;
		}
		
		respuesta = confirm("Quiere ingresar otro número?" + "\n" + "si/no?");
	}

	if (primerNegativo = true)
	{
		multiplicacionNegativos = 0;
	}

	txtIdSuma.value = "La suma de números positivos es: " + sumaPositivos;
	txtIdProducto.value = "La multiplicación de números negativos es: " + multiplicacionNegativos;
}
*/
