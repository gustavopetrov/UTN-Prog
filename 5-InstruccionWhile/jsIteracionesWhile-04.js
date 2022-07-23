/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
  var numeroIngresado;
  numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
  numeroIngresado = parseInt(numeroIngresado);
  //        -5 V
  while (numeroIngresado < 0 || numeroIngresado > 9) {
    numeroIngresado = prompt("Numero ingresado incorrecto, pruebe nuevamente.");
    numeroIngresado = parseInt(numeroIngresado);
  }
  alert("El numero ingresado es correcto.");
  txtIdNumero.value = numeroIngresado;
} //FIN DE LA FUNCIÓN
/*

EN LOS WHILE BUSCO EL FALSO PARA SALIR DE MI BUCLE.

caso1 => entrada = Verde;
caso2 => entrada = Amarillo;

while(color !="Azul" && color != "Rojo" && color != "Amarillo")
caso1 => Cuando mi entrada es verde, al hacer la primer comparación : Color != "Azul" obtengo FALSO y mi condición esta conectada por &&, por ende , cuando uno es F, el resto ya es F. Al ser Falsa la condición NO salgo del bloque y pido otro color, hasta conseguir un valor verdadero que me permita romper la condición.
caso2 => Cuando mi color de entrada es Amarillo reviso individualmente cada condición, amarillo != azul=> V | Amarillo != rojo => V | Amarillo != Amarillo => F.
Se rompe mi condición y salgo del bucle.

*/
