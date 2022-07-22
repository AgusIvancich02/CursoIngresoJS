/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;

let maximo;

let minimo;

let mensaje;

let random;

let piedra;

let papel;

let tijera;

minimo = 1;

maximo = 3;

random = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

function comenzar()
{
	


}//FIN DE LA FUNCIÓN
function piedra()
{
	piedra = document.getElementById("piedra").value;

}//FIN DE LA FUNCIÓN
function papel()
{
    papel = document.getElementById("papel").value;


}//FIN DE LA FUNCIÓN
function tijera()
{
    tijera = document.getElementById("tijera").value;
	

}//FIN DE LA FUNCIÓN