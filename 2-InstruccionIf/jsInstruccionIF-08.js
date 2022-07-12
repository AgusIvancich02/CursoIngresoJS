/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.
Agustin Ivancich
Ejercicio 8
Div C*/

function mostrar()
{
	//tomo la edad

	let edad;

	let estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	estado = document.getElementById("estadoCivil").value;

	if(edad > 17 && estado == "Soltero")
	{
		alert("Es soltero y no es menor");
	}

	alert("Funciona");
	


}//FIN DE LA FUNCIÓN