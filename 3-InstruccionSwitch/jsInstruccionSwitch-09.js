function mostrar()
{
	let estacionIngresada;

	let precioestadia;

	let destinoIngresado;

	let aumento;

	let descuento;

	let preciodescuento;

	let precioaumento;

	let preciofinal;

	let mensaje;

	let precio;

	estacionIngresada = document.getElementById("txtIdEstacion").value;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	precioestadia = 15000;

	aumento = 0;

	descuento = 0;

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado == "Bariloche")
			{
				aumento = 20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					descuento = 20;
				}
				else
				{
					descuento = 10;
				}
			}
			break;
		case "Verano":
			if(destinoIngresado == "Bariloche")
			{
				descuento = 20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					aumento = 20;
				}
				else
				{
					aumento = 10;
				}
			}
			break;
		default:
			if(destinoIngresado == "Cordoba")
			{
				descuento = 0;
			}
			else
			{
				aumento = 10;
			}
			break;
	}

	if(aumento !=0)
	{
		precioaumento = precioestadia * aumento/100;
		preciofinal = precioestadia + precioaumento;
	}
	else
	{
		if(descuento !=0)
		{
			preciodescuento = precioestadia * descuento/100;
			preciofinal = precioestadia - preciodescuento;
		}
	}

	alert(preciofinal);

}//FIN DE LA FUNCIÓN