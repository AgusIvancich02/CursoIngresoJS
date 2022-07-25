/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contadorNegativos;

	let respuesta;

	let sumaPositivos;

	let multiplicacionNegativos;

	let numeroIngresado;

	contadorNegativos = 0;

	sumaPositivos=0;

	multiplicacionNegativos=1;

	respuesta='si';

	while(respuesta =="si")
	{
		numeroIngresado = prompt("Ingrese un numero");

		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado < 0)
		{
			multiplicacionNegativos *= numeroIngresado;

			contadorNegativos++;
		}
		else
		{
			sumaPositivos += numeroIngresado;
		}

		respuesta = prompt("Queres ingresar otro numero?");
	}

	if(contadorNegativos == 0)
	{
		multiplicacionNegativos = 0;
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;

	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN