'use strict'
//pruebas con Let y Var

alert("Hola");

//Prueba con var
var numero = 40;
console.log(numero); // valor 40


if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

//Prueba con let
var texto = "Curso";
console.log(texto); // valor "Curso"

if(true){
    let texto = "Curso otro";
    console.log(texto); // valor "Curso otro"

}

console.log(texto); // valor "Curso"
/* esto sucede porque let sólo es una variable que aplica al bloque donde la estemos ejecutando, por ende no cambia el valor de la variable en su ámbito externo */

/* entonces, la principal diferencia entre let y var radica en que con let limitamos, osea, creamos una variable con alcance limitado adentro del bloque de código donde esté y var define una variable global la cual, si yo camio el valor en cualquier punto, ese valor siempre va a actualizarse globlamente, osea se cambia el valor en todo el código y de ahí vamos a poder cambiarlo a medida que ejecutemos el código y en esto radica la principal diferencia entre tel y var */
