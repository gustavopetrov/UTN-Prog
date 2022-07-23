/*
al presionar el botón pedir la CLAVE (ayuda: la clave es utn750)*/
function mostrar() {
  var claveIngresada;
  claveIngresada = prompt("ingrese el número clave.");
  while (claveIngresada != "utn750") {
    claveIngresada = prompt("Error, clave incorrecta.");
  }
  alert("Gracias por ingresar.");
} //FIN DE LA FUNCIÓN
