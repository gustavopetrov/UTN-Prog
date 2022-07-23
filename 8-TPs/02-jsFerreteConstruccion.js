/*
    Gustavo Petrov - Div D
    TP 2
Enunciado:
----------
2. Para el departamento de Construcción:
A. mostrar la cantidad de alambre a comprar si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B. mostrar la cantidad de alambre a comprar si se ingresara el radio de un terreno circular y se debe alambra con tres hilos de alambre.
C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular.
*/

// A. mostrar la cantidad de alambre a comprar si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de
function Rectangulo() {
  let largo;
  let ancho;
  let perimetro;
  let hiladas;
  let alambre;

  hiladas = 3;

  largo = document.getElementById("txtIdLargo").value;
  ancho = document.getElementById("txtIdAncho").value;

  largo = parseFloat(largo);
  ancho = parseFloat(ancho);

  //perimetro: suma de todos los lados;
  //perimetro= largo + largo + ancho + ancho;
  //perimetro= (2 * largo) + (2 * ancho);
  perimetro = (largo + ancho) * 2;

  alambre = perimetro * hiladas;

  alert("Se necesita " + alambre.toFixed(2) + " metros de alambre");
}

/*
entradas: largo y ancho, cantidad de hiladas/vueltas (3)
procesos: calcular el perimetro por la cantidad de vueltas 
salidas: mensaje mostrando el resultado
*/
// B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
function Circulo() {
  let radio;
  let cantidadAComprar;
  const PI = Math.PI;

  radio = document.getElementById("txtIdRadio").value;
  radio = parseFloat(radio);

  cantidadAComprar = 2 * PI * radio * 3;

  alert("Cantidad de alambre a comprar: " + cantidadAComprar.toFixed());
}

// C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular.

function Materiales() {
  var largo;
  var ancho;
  var area;
  var bolsaCemento;
  var bolsaCal;
  var mensaje;

  largo = txtIdLargo.value;
  ancho = txtIdAncho.value;

  area = largo * ancho;
  console.log(area);

  bolsaCemento = area * 2;
  bolsaCal = area * 3;

  mensaje = `Se necesitan ${bolsaCemento} bolsas de cemento y ${bolsaCal} bolsas de cal.`;
  alert(mensaje);
}
