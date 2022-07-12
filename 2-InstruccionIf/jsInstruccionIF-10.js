/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
Agustin Ivancich
Ejercicio 10
Div C*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	
	let random;

	let minimo;

	let maximo;

	minimo = 1;

	maximo = 10;

	random = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

	if(random >= 9)
	{
		alert("Excelente");
	}
	else
	{
		if(random >= 4)
		{
			alert("Aprobo");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}

	alert("Funciona");

}//FIN DE LA FUNCIÓN