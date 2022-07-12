/*Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
Agustin Ivancich
Ejercicio 9
Div C*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	let random;

	let minimo;

	let maximo;

	minimo = 1;

	maximo = 10;

	random = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

	alert(random);	

}//FIN DE LA FUNCIÓN