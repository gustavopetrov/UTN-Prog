/*
  Al comenzar el juego generamos un número secreto del 1 al 100, 
  en la pantalla del juego
  dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 

    “Usted es un ganador!!! y en solo X intentos”.

  de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroRandom;
var contadorIntentos;
var numeroIngresado;
var mensaje;
contadorIntentos = 0;
// txtIdIntentos
function comenzar() {
  //Generamos un numero del 1 - 100
  numeroRandom = Math.floor(Math.random() * 100 + 1);
  alert("Ya se genero el numero Aleatorio");
}

function verificar() {
  numeroIngresado = txtIdNumero.value; // Obtengo el numero del campo
  numeroIngresado = parseInt(numeroIngresado);

  if (numeroIngresado == numeroRandom) {
    // Verifico si el numero es el correcto
    mensaje = "Eres GANADOR!! En " + contadorIntentos + " intentos.";
  } else {
    // Sino es el igual entonces...
    contadorIntentos++; // --> contadorIntentos = contadorIntentos + 1; | contadorIntentos += contadorIntentos;
    if (numeroIngresado < numeroRandom) {
      mensaje = "Falta poquito bro";
    } else {
      mensaje = "Te pasaste kpo";
    }
  }
  alert(mensaje);
  txtIdIntentos.value = contadorIntentos;
}
