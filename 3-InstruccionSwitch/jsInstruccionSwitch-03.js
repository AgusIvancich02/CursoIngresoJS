function mostrar()
{
	//tomo el mes
	let mes;

	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 dias";
			break;
		default:
			mensaje = "Este mes tiene 30 o mas dias";
			break;
	}

	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN