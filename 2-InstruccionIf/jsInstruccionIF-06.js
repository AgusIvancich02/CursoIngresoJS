/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
Agustin Ivancich
Ejercicio 6
Div C */

function mostrar()
{
	//tomo la edad
	
	/*let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18)
	{

		alert("La persona es mayor de edad");

	}
	else 
	{
		if(edad >= 13 && edad <= 17)
		{

			alert("La persona es adolescente");

		}
		else
		{

			alert("La persona es niño");
			
		}

	}
	

	alert("Funciona");*/

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if(edad >= 60)
	{
		alert("La persona es anciano y tiene " + edad + " años");
	}
	else
	{
		if(edad >= 18)
		{
			alert("La persona es adulto y tiene " + edad + " años");
		}
		else
		{
			if(edad >= 13 && edad <=17)
			{
				alert("La persona es adolescente y tiene " + edad + " años");
			}
			else
			{
				if(edad >= 5 && edad <=12)
				{
					alert("La persona es niño y tiene " + edad + " años");
				}
				else
				{
					alert("La persona es bebe y tiene " + edad + " años");
				}
			}
		}
	}



}//FIN DE LA FUNCIÓN*/

