function mostrar()
{
	let estacionIngresada;

	let destinoIngresado;

	let mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado == "Bariloche")
			{
				mensaje = "Se viaja";
			}
			else
			{
				mensaje = "No se viaja";
			}
			break;
		case "Verano":
			if(destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas")
			{
				mensaje = "Se viaja";
			}
			else
			{
				mensaje = "No se viaja";
			}
			break;
		case "Otoño":
			mensaje = "Se viaja";
			break;
		default:
			if(destinoIngresado == "Bariloche")
			{
				mensaje = "No se viaja";
			}
			else
			{
				mensaje = "Se viaja";
			}
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN