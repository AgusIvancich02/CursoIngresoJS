function mostrar()
{
let numerouno;

let numerodos;

let suma;

let resta;

let resultado;

numerouno = prompt("Ingrese el primer numero");

numerodos = prompt("Ingrese el segundo numero");

numerouno = parseInt(numerouno);

numerodos = parseInt(numerodos);

if(numerouno == numerodos)
{
    alert("" + numerouno + numerodos);
}
else
{
    if(numerouno > numerodos)
    {
        resta = numerouno - numerodos;
    }
    else
    {
        suma = numerouno + numerodos;
    }
    if(suma > 10)
    {
        alert("La suma es " + suma + " y supero el 10");
    }
}
}
