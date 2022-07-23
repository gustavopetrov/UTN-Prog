/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata 
tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata
tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del 
plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento


Entradas: estacion, destino
Proceso: Calcular descuento/aumento segun la estacion y el destino
Salida: Mostrar el precio del pasaje segun descuento/aumento 
*/

function mostrar() {
  var estacionIngresada;
  var destino;
  var porcentaje; //+ o -
  var precioFinal;
  const PRECIO_ESTADIA = 15000;

  estacionIngresada = txtIdEstacion.value;
  destino = txtIdDestino.value;

  switch (estacionIngresada) {
    case "Invierno":
      switch (destino) {
        case "Bariloche":
          porcentaje = 20;
          break;
        case "Mar del plata":
          porcentaje = -20;
          break;
        default: //cataratas y cordoba
          porcentaje = -10;
          break;
      }
      break;
    case "Verano":
      switch (destino) {
        case "Bariloche":
          porcentaje = -20;
          break;
        case "Mar del plata":
          porcentaje = 20;
          break;
        default: //cataratas y cordoba
          porcentaje = 10;
          break;
      }
      break;
    default: //Otoño o Primavera
      switch (destino) {
        case "Cordoba":
          porcentaje = 0;
          break;
        default:
          porcentaje = 10;
          break;
      }
      break;
  }

  precioFinal = PRECIO_ESTADIA + (PRECIO_ESTADIA * porcentaje) / 100;

  alert("El precio final de la estadia es: " + precioFinal);

  /*
	casos de prueba: 
	1) Invierno y Bariloche : 18000 ok
	2) Verano y Cordoba: 16500 ok
	3) Otoño y Mar del plata: 16500 ok
	4) Primavera y cordoba: 15000 ok
	5) Verano y Bariloche: 12000 ok


	*/
} //FIN DE LA FUNCIÓN
