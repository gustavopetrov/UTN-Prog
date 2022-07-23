/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  var contador;
  var acumulador;
  var respuesta;
  var valorIngresado;
  contador = 0;
  acumulador = 0;
  respuesta = true;
  valorIngresado = 0;

  while (respuesta == true) {
    valorIngresado = prompt("Ingrese un número");
    valorIngresado = parseInt(valorIngresado);
    acumulador = acumulador + valorIngresado;
    contador++;
    // console.log(valorIngresado);
    // console.log(respuesta);
    // console.log(acumulador);
    respuesta = confirm("Desea ingresar otro numero?");
  }

  txtIdSuma.value = acumulador;
  txtIdPromedio.value = acumulador / contador;
} //FIN DE LA FUNCIÓN
