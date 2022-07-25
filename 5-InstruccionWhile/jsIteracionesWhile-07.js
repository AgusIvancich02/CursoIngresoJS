/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;

	let acumulador;

	let respuesta;

	let numeroIngresado;

	let promedio;

	contador=0;

	acumulador=0;

	respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");

		numeroIngresado = parseInt(numeroIngresado);

		acumulador += numeroIngresado;

		contador = contador + 1;

		respuesta = prompt("Queres ingresar otro numero?");

	}

	promedio = acumulador/contador;

	document.getElementById("txtIdSuma").value = acumulador;

	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN