//Variables
let L; //Cantidad de litros que produce tipo entero
let PG; //Precio del galon tipo real
let TG; //Cantidad de galones que produce tipo real
let GA; //Cantidad de galones que produce tipo real
let GalonALitros = 3.785; //Conversion de 1 galon es 3.785 litros

//Consultas
PG = +prompt("Precio del Galon:");
L = +prompt("Litros producidos hoy:")

//Asignacion de Formulas
TG = L/3.785;
GA = TG*PG;



//Resultado en consola
console.log('Por producir ',L," litros de leche a un precio del galon de ",PG," soles, entonces ganara en un dia de produccion ",GA," soles.");