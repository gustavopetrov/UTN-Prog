/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  // declarar variables
  var banderaDelPrimero;
  var numeroIngresado;
  var numeroMaximo;
  var numeroMinimo;
  var respuesta;
  //iniciar variables
  numeroMaximo = 0;
  numeroMinimo = 999;
  //   banderaDelPrimero = "es el primero";
  respuesta = true;
  while (respuesta == true) {
    numeroIngresado = prompt("Ingrese un numero");
    numeroIngresado = parseInt(numeroIngresado);
    if (numeroIngresado > numeroMaximo) {
      numeroMaximo = numeroIngresado;
    } else {
      if (numeroIngresado < numeroMinimo) {
        numeroMinimo = numeroIngresado;
      }
    }
    respuesta = confirm("Desea ingresar otro número?");
  }
  txtIdMaximo.value = numeroMaximo;
  txtIdMinimo.value = numeroMinimo;
} //FIN DE LA FUNCIÓN
/*
	Para que sirve la bandera / Flag
	Para la primera iteración.
	Cuando tratamos con máximos y mínimos, es conveniente usar una bandera para indicar que es la primera carga, ya que por tecnisismo el valor de la primera carga es el máximo y el mínimo.

	if (banderaDelPrimero == false){
		numeroMaximo = numeroIngresado
		numeroMinimo = numeroIngresado
		banderaDelPrimero == true
	}
	Luego de obtener estos valores levantamos la bandera setteandola en true y podemos continuar con el algoritmo ya teniendo definidos los primeros valores.
	
	OBS:
	----
	El objetivo es poder utilizar cualquier rango de números sin tener que inicializar la variable con valores fijos para un máximo y un mínimo.
	
	Eficiencia:
	-----------
	El bloque donde contemplo la bandera se puede unir con el bloque condicional (IF) para hacer el programa más eficiente.

	En este primer IF checkeo el estado de la bandera. Sí es mi primer caso va a estar en false y va a entrar a la condición, si no es mi primera iteración (mi primera carga) va a ingresar solamente si mi número ingresado efectivamente es un número máximo.

	if( numeroIngresado > numeroMáximo || banderaDelPrimero == false){
		numeroMáximo = numeroIngresado;
	}

	En este segundo IF checkeo el estado de la bandera y verifico si mi bandera esta en true o en false. 
	Si esta en FALSE, es por que es mi primera carga y entra por la condición, de ser así, la setteo en true.
	Si NO ES mi primera carga solo va a entrar si el número Ingresado es mi numeroMínimo.

	if(numeroIngresado < numeroMínimo ||  banderaDelPrimero == false){
		numeroMínimo = numeroIngresado;
		banderaDelPrimero = true;
	}

	VALIDACIONES CON WHILE
*/
