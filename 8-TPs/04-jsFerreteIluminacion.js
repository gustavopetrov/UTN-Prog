/*.Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

function CalcularPrecio() {
  let cantidadLamparas;
  let marca;
  let totalSinDescuento;
  let porcentajeDescuento;
  let valorDescuento;
  let precioFinal;
  let impuesto;
  let mensaje;
  const PRECIO = 35;
  porcentajeDescuento = 0;

  cantidadLamparas = document.getElementById("txtIdCantidad").value;
  cantidadLamparas = parseInt(cantidadLamparas);
  marca = document.getElementById("Marca").value;

  totalSinDescuento = cantidadLamparas * PRECIO;

  //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
  if (cantidadLamparas > 5) {
    porcentajeDescuento = 0.5;
  } else {
    if (cantidadLamparas == 5) {
      if (marca == "ArgentinaLuz") {
        porcentajeDescuento = 0.4;
      } else {
        porcentajeDescuento = 0.3;
      }
    } else {
      if (cantidadLamparas == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
          porcentajeDescuento = 0.25;
        } else {
          porcentajeDescuento = 0.2;
        }
      } else {
        if (cantidadLamparas == 3) {
          if (marca == "ArgentinaLuz") {
            porcentajeDescuento = 0.15;
          } else {
            if (marca == "FelipeLamparas") {
              porcentajeDescuento = 0.1;
            } else {
              porcentajeDescuento = 0.05;
            }
          }
        }
      }
    }
  }

  valorDescuento = totalSinDescuento * porcentajeDescuento;
  precioFinal = totalSinDescuento - valorDescuento;

  if (precioFinal > 120) {
    impuesto = precioFinal * 0.1;
    precioFinal = impuesto + precioFinal;
    mensaje = "Usted pago $" + impuesto + " de IIBB";
    alert(mensaje);
  }
  document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal;

  //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
}

/*
entradas: precio de lamparas, marcas, cant de lamparas, 
procesos: condiciones, descuento, precio descuento, 
salidas: precio final
*/
