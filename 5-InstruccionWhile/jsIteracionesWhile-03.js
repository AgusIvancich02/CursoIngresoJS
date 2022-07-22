/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("ingrese clave.");

	while(claveIngresada !="utn750")
	{
		claveIngresada = prompt("reingrese clave.");
	}

	alert("Contraseña correcta");
	
}//FIN DE LA FUNCIÓN
