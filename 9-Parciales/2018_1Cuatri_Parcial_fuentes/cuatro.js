function mostrar()
{
let numerouno;

let numerodos;

let suma;

let resta;

let resultado;

numerouno = prompt("Ingrese el primer numero");

numerodos = prompt("Ingrese el segundo numero");

if(numerouno == numerodos)
{
    alert(numerouno + numerodos);
}
else
{
    numerouno = parseInt(numerouno);

    numerodos = parseInt(numerodos);

    if(numerouno > numerodos)
    {
        resultado = numerouno - numerodos;
    }
    else
    {
        resultado = numerouno + numerodos;
    }
        if(resultado > 10)
        {
            alert("La suma es " + resultado + " y supero el 10");
        }
        
        alert(resultado);
        
}

}
