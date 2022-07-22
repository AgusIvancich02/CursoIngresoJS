/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/
/*Agustin Ivancich*/
function mostrar()
{
	let numeros;

	let acumulador;

	let contador;

	contador = 0

	acumulador = 0;

	while(contador < 5)
	{
		numeros = parseInt(prompt("Ingrese numero"));

		acumulador += numeros;
		
		contador ++;
	}

	document.getElementById("txtIdSuma").value = acumulador;

	document.getElementById("txtIdPromedio").value = acumulador / 5;

}//FIN DE LA FUNCIÓN