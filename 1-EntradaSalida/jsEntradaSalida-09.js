/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let numerouno;

	let aumento;

	let resultado;

	numerouno = document.getElementById("txtIdSueldo").value;

	numerouno = parseInt(numerouno);

	aumento = numerouno * 10/100;

	resultado = numerouno + aumento;

	document.getElementById("txtIdResultado").value = resultado;

	//alert("ok");

}
