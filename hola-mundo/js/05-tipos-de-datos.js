'use strict'

// Operadores
/* los operadores sirven para sumar restar, multiplicar, entre otras cosas */ /* veamos un ejemplo de operadores y su aplicación */
var numero1 = 7;/* al colocar el valor de la variable sin comillas el código interpreta que se trata de un número */
var numero2 = 12;/* los nombres de las variables no puden llevar tildes osea no llevan acentos ni se les escribe la letra "ñ" */

var operacion = numero1 * numero2; /* Los operadores que se pueden usar en javascript son: +, -, *, /, y el de % que es el resto de la división del primer número con el segundo */

alert("El resultado de la operacion es: "+operacion); /* En javascript el concatenador es el "+" a diferencia de php que es el "." */

// Tipos de datos
/* los tipos de datos son el entero, el string o la cadena de texto, la coma flotante o el decimal, el tipo de dato booleano, y arrays y objetos, los arrays y los objetos los veremos más adelante */
/* ahora vermos un ejemplo de cada uno de los tipos de datos */

var numero_entero = 44;
var cadena_texto = "Hola 'que' tal";/* las cadenas de texto van entre comillas */ /* Para escribir el  string, podemos hacer uso de comillas simples como comillas dobles, la única diferencia importante es que las comillas dobles tienen mayor importancia que las comillas simples */
/* si yo escribo "Hola 'que' tal" esto va a funcionar perfectamente */ /* tambien lo podría hacer así 'Hola "que" tal' lo que no puedo hacer es esto 'Hola 'que' tal' o "Hola "que" tal" porque así si me daría error  */
var verdadero_o_falso=true; /* puede ser true or false */

/* tambien existen las funciones que nos ayudan a cambiar de un tipod e dato a otro, como por ejemplo las siguientes */

var numero_falso = "33";

console.log(cadena_texto);
console.log(verdadero_o_falso);
console.log(numero_falso+7);/* esto no me lo va a sumar, sino que más bien me lo va a concatenar, porque numero falso, a pesar de ser un número me lo toma como un string, ya que se encuentra entre comillas dobles y javascript lo interpreta como un string */
/* para poder sumarlo debemos hacer uso de la palabra reservada Number de la siguiente forma */

console.log(Number(numero_falso)+7);

/* con la función parseInt paso la variable a un número entero, mientras que con Number puede cambiar a entero o a decimal */

console.log(parseInt(numero_falso)+7);

/* y la palabra parseFloat me lo convierte tipo de dato decimal */

console.log(parseFloat(numero_falso)+7);

/* la diferencia en este último caso es que me lo sumaría si lo coloco en decimal, a continuación un ejemplo de ello  */

console.log(parseFloat(numero_falso)+7.86);

/* si lo dejamos con parseInt en lugar de parseFloat lo que hace es redondearnos el valor pero no con valores aproximados y colocarlo entero, un ejemplo de ello */

console.log(parseInt(numero_falso)+parseInt(7.96));

/* tambien puedo hacer lo contrario, que sería pasar y transformar un número a string para no sumar, sino más bien concatenarlo a otro valor */

console.log(numero_entero+7);

/* si yo quiero que un número sea un string tengo que anteponerle a la variable o al número la palabra reservada String como se muestra acontinuación */

console.log(String(numero_entero)+7);
