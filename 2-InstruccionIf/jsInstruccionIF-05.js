/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.
Agustin Ivancich
Ejercicio 5
Div C*/

function mostrar()
{
	//tomo la edad
	
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(!(edad > 12 && edad < 18))
	{

		alert("La persona no es adolescente");

	}

	alert("Funciona");

}//FIN DE LA FUNCIÓN