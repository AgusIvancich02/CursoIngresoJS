/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
/*Agustin Ivancich*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("reingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN