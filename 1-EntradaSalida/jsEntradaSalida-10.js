/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let numerouno;

	let descuento;

	let resultado;

	numerouno = document.getElementById("txtIdImporte").value;

	numerouno = parseInt(numerouno);

	descuento = numerouno * 25/100;

	resultado = numerouno - descuento;

	document.getElementById("txtIdResultado").value = resultado;

	//alert("ok");

}
