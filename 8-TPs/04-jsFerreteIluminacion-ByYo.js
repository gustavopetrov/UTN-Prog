/*
    Gustavo Petrov - Div D
    TP 4 ferrete iluminación

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40% y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
  var precioDeLamparitas;
  var cantidadDelamparitas;
  var porcentajeDescuento;
  var mensaje;
  var precioSinDescuento;
  var valorDescuento;
  var precioFinal;
  var marcaLamparita;
  var porcentajeAumento;
  var valorAumento;

  //ENTRADA DE DATOS:
  precioDeLamparitas = 35; /*Las lamparas en oferta salen $35*/
  porcentajeAumento = 0.1;
  cantidadDelamparitas = txtIdCantidad.value;
  cantidadDelamparitas = parseInt(cantidadDelamparitas);
  marcaLamparita = Marca.value;

  //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.

  if (cantidadDelamparitas >= 6) {
    porcentajeDescuento = 0.5;
  }
  //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
  else {
    if (cantidadDelamparitas == 5) {
      if (marcaLamparita == "ArgentinaLuz") {
        porcentajeDescuento = 0.4;
      } else {
        porcentajeDescuento = 0.3;
      }
    }
  }
  //C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

  if (cantidadDelamparitas == 4) {
    if (
      marcaLamparita == "ArgentinaLuz" ||
      marcaLamparita == "FelipeLamparas"
    ) {
      porcentajeDescuento = 0.25;
    } else {
      porcentajeDescuento = 0.2;
    }
  }

  //D. Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
  //si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

  if (cantidadDelamparitas == 3) {
    if (marcaLamparita == "ArgentinaLuz") {
      porcentajeDescuento = 0.15;
    } else if (marcaLamparita == "FelipeLamparas") {
      porcentajeDescuento = 0.1;
    } else {
      porcentajeDescuento = 0.05;
    }
  }

  precioSinDescuento = cantidadDelamparitas * precioDeLamparitas; //precio total sin el descuento (3 * 35) 105
  valorDescuento = precioSinDescuento * porcentajeDescuento; // se le calcula el porcentaje de descuento al precio total (105 * 0,05) 5,25
  precioFinal = precioSinDescuento - valorDescuento; // (105 - 5,25)99,75

  //E.Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos
  //	e informar del impuesto con el siguiente mensaje:
  //	”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

  if (precioFinal > 120) {
    valorAumento = precioFinal * porcentajeAumento; //130*0,1=13
    precioFinal = precioFinal + valorAumento; //130+13=143

    mensaje = "Usted pago " + valorAumento + " de IIBB";
    alert(mensaje);
  }

  //SALIDA DE DATOS:

  txtIdprecioDescuento.value = precioFinal;
}
