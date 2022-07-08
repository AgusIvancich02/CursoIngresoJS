/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
    let preciouno;

    let preciodos;

    let preciotres;

    let resultado;

    preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);

    preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);

    preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultado = preciouno + preciodos + preciotres;

    alert(resultado);

}
function Promedio () 
{
	
    let preciouno;

    let preciodos;

    let preciotres;

    let resultado;

    let promedio;

    preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);

    preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);

    preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultado = preciouno + preciodos + preciotres;

    promedio = resultado /3;

    alert(promedio);

}
function PrecioFinal () 
{
	
    let preciouno;

    let preciodos;

    let preciotres;

    let resultado;

    let iva;

    let aumento;

    let preciofinal;

    preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);

    preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);

    preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultado = preciouno + preciodos + preciotres;

    iva = 21;

    aumento = resultado * iva / 100;

    preciofinal = resultado + aumento;

    alert(preciofinal);

}