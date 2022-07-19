function mostrar()
{
	let destinoIngresado;

	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Frio";
			break;
		case "Cataratas":
			mensaje = "Calor";
			break;
		case "Mar del plata":
			mensaje = "Calor";
			break;
		case "Ushuaia":
			mensaje = "Frio";
			break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN