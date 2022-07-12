/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
Agustin Ivancich
Ejercicio 7
Div C*/

function mostrar()
{
	//tomo la edad
	
	let edad;

	let estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	estado = document.getElementById("estadoCivil").value;

	if(edad < 18 && estado != "Soltero") 
	{
		alert("Es muy pequeño para no ser soltero");
	}

	alert("Funciona");
	


}//FIN DE LA FUNCIÓN