/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numerouno;

	let numerodos;

	numerouno = document.getElementById("txtIdNumeroDividendo").value;

	numerodos = document.getElementById("txtIdNumeroDivisor").value;

	numerouno = parseInt(numerouno);

	numerodos = parseInt(numerodos);

	alert("El resto es " + (numerouno % numerodos));

}
