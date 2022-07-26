/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;

	let numeroIngresado;

	let acumuladorNegativos = 0;

	let acumuladorPositivos = 0;

	let ceros;

	let positivos;

	let negativos;

	let mensaje;

	let promediopositivos;
	
	let promedionegativos;

	let diferencia;

	positivos = 0;

	negativos = 0;

	ceros = 0;

	pares = 0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");

		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado <= -1)
		{
			acumuladorNegativos += numeroIngresado;
			negativos ++;
			console.log("la suma de negativos es :" + acumuladorNegativos);
			console.log("la cantidad de negativos es :" + negativos);
		}
		else
		{
			if(numeroIngresado >= 1)
			{
				acumuladorPositivos += numeroIngresado;
				positivos ++;
				console.log("la suma de positivos es :" + acumuladorPositivos);
				console.log("la cantidad de positivos es :" + positivos);
			}
			else
			{
				ceros ++;
				console.log("la cantidad de ceros es :" + ceros);
			}
		}
		if(numeroIngresado %2 == 0)
		{
			pares ++;
			console.log("la cantidad de pares es :" + pares);
		}
		respuesta=prompt("desea continuar?");
	}//fin del while

	promediopositivos = acumuladorPositivos / positivos;

	promedionegativos = acumuladorNegativos / negativos;

	console.log("Promedio de positivos es : " + promediopositivos);

	console.log("Promedio de negativos es :" + promedionegativos);

	diferencia = acumuladorPositivos - acumuladorNegativos;

	console.log("La diferencia entre positivos y negativos es :" + diferencia);

	document.write("la suma de negativos es :" + acumuladorNegativos + "<br>");

	document.write("la suma de positivos es :" + acumuladorPositivos + "<br>");

	document.write("la cantidad de positivos es :" + positivos + "<br>");

	document.write("la cantidad de negativos es :" + negativos + "<br>");

	document.write("la cantidad de ceros es :" + ceros + "<br>");

	document.write("la cantidad de pares es :" + pares + "<br>");

	document.write("Promedio de positivos es : " + promediopositivos + "<br>");

	document.write("Promedio de negativos es :" + promedionegativos + "<br>");

	document.write("La diferencia entre positivos y negativos es :" + diferencia + "<br>");
}//FIN DE LA FUNCIÓN