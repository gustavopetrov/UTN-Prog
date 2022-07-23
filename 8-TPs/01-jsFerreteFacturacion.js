/*1.	
    Gustavo Petrov - Div D
    TP 1

Para el departamento de facturación:
------------------------------------
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  var precio1;
  var precio2;
  var precio3;
  var sumaDePrecios;
  var mensaje;

  precio1 = document.getElementById("txtIdPrecioUno").value;
  precio2 = document.getElementById("txtIdPrecioDos").value;
  precio3 = document.getElementById("txtIdPrecioTres").value;

  precio1 = parseFloat(precio1);
  precio2 = parseFloat(precio2);
  precio3 = parseFloat(precio3);

  sumaDePrecios = precio1 + precio2 + precio3;

  mensaje = "El precio final es  " + sumaDePrecios;

  alert(mensaje);
}
/*

entrada:los tres precios 
procesos:buscar los datos mediante ID, parsear los datos obtenidos, sumar los datos
salidas:muestra de resultados

 */

// B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
function Promedio() {
  var precio1;
  var precio2;
  var precio3;
  var resultado;
  var mensaje;

  precio1 = document.getElementById("txtIdPrecioUno").value;
  precio2 = document.getElementById("txtIdPrecioDos").value;
  precio3 = document.getElementById("txtIdPrecioTres").value;

  precio1 = parseFloat(precio1);
  precio2 = parseFloat(precio2);
  precio3 = parseFloat(precio3);

  resultado = (precio1 + precio2 + precio3) / 3;

  mensaje = "El promedio es: " + resultado;

  alert(mensaje);
}

/*
	entrada: declarar variables
	proceso: declarar los id, parsear los datos, sumarlos y dividirlos por la cantidad de variables
	salida: alert con el resultado
*/

// C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
function PrecioFinal() {
  var precio1;
  var precio2;
  var precio3;
  var iva;
  var resultado;
  var suma;
  var mensaje;

  iva = 21;

  precio1 = document.getElementById("txtIdPrecioUno").value;
  precio2 = document.getElementById("txtIdPrecioDos").value;
  precio3 = document.getElementById("txtIdPrecioTres").value;

  precio1 = parseFloat(precio1);
  precio2 = parseFloat(precio2);
  precio3 = parseFloat(precio3);

  suma = precio1 + precio2 + precio3;

  resultado = suma + (suma * iva) / 100;

  mensaje = "El precio final con iva incluido:  " + resultado.toFixed(2);

  alert(mensaje);
}
/*
entrada: tres precios
proceso: conversion a numemor, text id, prompt,suma de los num, calcular iva
salida: mensaje, aletr, resultado
*/
