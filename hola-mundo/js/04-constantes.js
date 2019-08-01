'use strict'

//Constantes
/* una constante no es más que un contenedor de datos al igual que una variable, la diferencia radica en que ese valor no va a poder ser modificable en nuestro programa, osea es como una variable, la única diferencia es que su valor nunca va a poder cambiar */

var web = "https://google.com";

//para definir una constante debemos hacer uso de la palabra reservada const

const ip = "192.88.0.12";

web = "https://google.co.ve";
/* ip = "1213123"; */ /* esto no se puede hacer, porque no podemos asignarle nuevos valores a las constantes que hayamos definido, por eso son constantes, si deseamos cambiar ese valor, debemos cambiarlo a variable y obviamente, si lo hacemos nos va a arrojar un error */

console.log(web, ip);