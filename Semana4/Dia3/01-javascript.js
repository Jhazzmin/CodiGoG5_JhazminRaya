//console.log permite mostraar en la consola de JS, la 
//que se nos antoje es muy util para saber que esta
//pasando internamente dentro de JS
console.log("Hola Mundo!");

//Variables
//Palabras reservadas, JS las usa
var nombre = "Jhazmin";
console.log(nombre); //Solamente para mostrar algo

//Tipos de datos - Texto, Numeros, Booleanos, 

var nombre2 = "Silene";

//Number - numero
var edad = 31;

console.log(edad);

//Boolean - booleana
var esDeNoche = true; //true o false
console.log(esDeNoche);

//para cambiar de valor a una variable, me basta con llamarla, esta variable tiene exisir antes

edad = 25;

console.log(edad);

nombre ="Eduardo";

console.log(nombre);

//Cambiar de tipo de dato

var anio = 2021;

anio = "dos mil veintidos";

console.log(anio);

//JS es un lenguaje que es tipado, no pre declaramos los tipos de datos

//VALORES RAROS EN VARIABLES

var nota; //undefinied, no esta definido

console.log(nota);

var nulo = null; //deberia haber algo, pero no esta

console.log(nulo);

//Not a Number = NaN
var rareza = 100 / "cebollas";

console.log(rareza);

var infinito = 100/0;


console.log(infinito);


console.log(typeof infinito);
