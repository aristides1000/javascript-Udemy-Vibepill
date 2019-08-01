/* el modo esctricto de javascript nos permite hacer un uso de un código más estricto y apegado de forma más restrictiva */
/* el modo estricto de javascript nos permite acceder a nuevas funcionalidades del código javascript */
/* la forma de usar el modo estricto es de la siguiente forma */
'use strict'

//Variables
//Una variable es un contenedor de información

//de esta forma se definen variables en javascript
var pais = "España";
var continente = "Europa";
var antiguedad = 2019;
let prueba = "hola";
alert(prueba);

/* diferencia entre el uso de let y el uso de var para la declaración de variables */
/* "let" permite definir variables limitando su alcance al bloque de declaración o expresión donde se esté usando */
/* y "var" define una variable local o global sin importar el ámbito del bloque  */

/* tambien se pueden concatenar dos strings de la siguiente manera */
var pais_y_continente = pais+' '+continente; /* de esta forma se concatenan cadenas de caractéres o strings, y ojo, sólo de esta forma */

pais = "Mexico";
continente = "latinoamérica";

/* estar pendiente, ya que por consola podemos cambiar el valor de las variables */

console.log(pais, continente, antiguedad);
alert(pais_y_continente);