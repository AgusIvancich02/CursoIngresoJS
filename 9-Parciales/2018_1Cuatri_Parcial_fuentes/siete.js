/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
Agustin Ivancich
Ejercicio 7*/
function mostrar()
{
    let notaingresada;

    let acumuladornotas;

    let contadornotas;

    let promedionotas;

    let sexoingresado;

    let banderadelPrimero;

    let notaminima;

    let sexo;

    let varones;

    contador = 0;

    contadornotas = 0;

    acumuladornotas = 0;

    varones = 0;

    banderadelPrimero = "Este es el primero"

    while(contador < 5)
    {
        notaingresada = prompt("Ingrese un numero entre 0 y 10");

        notaingresada = parseInt(notaingresada);

        while(notaingresada < 0 || notaingresada > 10)
        {
            notaingresada = prompt("Reingrese numero");

            notaingresada = parseInt(notaingresada);
        }
        
        sexoingresado = prompt("Ingrese f o m");

        while(sexoingresado !="f" && sexoingresado !="m")
        {
            sexoingresado = prompt("Ingrese f o m");
        }

        if(banderadelPrimero == "Este es el primero")
        {
            notaminima = notaingresada;

            sexo = sexoingresado;

            banderadelPrimero = "Ya se cargo";
        }
        else
        {
            if(notaingresada < notaminima)
            {
                notaminima = notaingresada;

                sexo = sexoingresado;
            }
        }

        if(notaingresada >= 6 && sexoingresado == "m")
        {
        varones ++;
        }

        acumuladornotas += notaingresada;

        contadornotas ++;
        
        contador ++;
    }
    promedionotas = acumuladornotas / contadornotas;
    
    document.write("El promedio de las notas es :" + promedionotas + "<br>");
    document.write("La nota mas baja es: " + notaminima + " y es " + sexo + "<br>");
    document.write("La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + varones + "<br>");

}
