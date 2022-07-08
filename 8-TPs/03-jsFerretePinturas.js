/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

    let fahrenheit;

    let centigrados;

    let calculo;

    fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);

    calculo = (fahrenheit - 32) * 5/9;

    centigrados = calculo;

    alert(fahrenheit + " Fahrenheit son " + centigrados + " centigrados");

}

function CentigradosFahrenheit () 
{
	
    let fahrenheit;

    let centigrados;

    let calculo;

    centigrados = parseInt(document.getElementById("txtIdTemperatura").value);

    calculo = (centigrados * 9/5) + 32;

    fahrenheit = calculo;

    alert(centigrados + " Centigrados son " + fahrenheit + " fahrenheit");

}
