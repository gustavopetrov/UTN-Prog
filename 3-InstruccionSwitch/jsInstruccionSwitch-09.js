/*
	Gustavo Petrov - Div D
	Switch - Ejercicio 9

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar() {
  var estacionIngresada;
  var lugarDestino;
  var valorEstadia;
  var valorAumento;
  var valorDescuento;
  var valorPorcentaje;
  var precioFinal;

  valorEstadia = 15000;

  estacionIngresada = txtIdEstacion.value;
  lugarDestino = txtIdDestino.value;

  switch (estacionIngresada) {
    case "Invierno":
      /*
      Bariloche: 20% de aumento
      mar del plata: 20% de descuento
      cataratas y córdoba: 10% de descuento
    */
      switch (lugarDestino) {
        case "Bariloche":
          valorPorcentaje = 0.2;
          valorAumento = valorEstadia * valorPorcentaje; // ? = 15000 * 0.20
          precioFinal = valorEstadia + valorAumento; // ? = 15000 + aumento
          break;
        case "Mar del plata":
          valorPorcentaje = 0.2;
          valorDescuento = valorEstadia * valorPorcentaje;
          precioFinal = valorEstadia - valorDescuento;
          break;

        default: // cataratas y córdoba
          valorPorcentaje = 0.1;
          valorDescuento = valorEstadia * valorPorcentaje;
          precioFinal = valorEstadia + valorDescuento;
          break;
      }
      break;
    case "Verano":
      /*
    Bariloche: 20% de Descuento
    mar del plata: 20% de aumento
    cataratas y córdoba: 10% de aumento
    */
      switch (lugarDestino) {
        case "Bariloche":
          valorPorcentaje = 0.2;
          valorDescuento = valorEstadia * valorPorcentaje;
          precioFinal = valorEstadia - valorDescuento;
          break;

        case "Mar del plata":
          valorPorcentaje = 0.2;
          valorAumento = valorEstadia * valorPorcentaje;
          precioFinal = valorEstadia + valorAumento;
          break;

        default:
          valorPorcentaje = 0.1;
          valorAumento = valorEstadia * valorPorcentaje;
          precioFinal = valorEstadia + valorAumento;
          break;
      }

    default:
      /*
      Bariloche/cataratas/mar del plata: 10% de aumento
      cordoba: 0
    */
      switch (lugarDestino) {
        case "Cordoba":
          precioFinal = valorEstadia;
          break;

        default:
          valorPorcentaje = 0.1;
          valorAumento = valorEstadia * valorPorcentaje;
          precioFinal = valorEstadia + valorAumento;
          break;
      }
  }
  alert(
    "Su localidad para vacacionar segun la estacion ingresada costara " +
      precioFinal +
      " pesos"
  );
} //FIN DE LA FUNCIÓN
