//class => molde, plano, fábrica
class Pokemon{
  //Caracteristicas que tiene este plano
  Nombre;
  Tipo;
  Ataque;
  Defensa;
  PuntosVida;

  //metodos, directamente por su nombre
  //Y TODA CLASE va a tener un metodo constructor
  //este constructor se ejecuta automaticamente al momento de llamar a la clase
  constructor(nombre, tipo, ataque, defensa, puntosvida){
    //se va encargar de construi el objeto
    //this, hace referencia a si mismo
    this.Nombre = nombre;
    this.Tipo = tipo;
    this.Ataque = ataque;
    this.Defensa = defensa;
    this.PuntosVida = puntosvida;
  }
}

let pokemon1 = new Pokemon("Pikachu");

let pokemon2 = new Pokemon("Dragonite");

console.log(pokemon1);
console.log(pokemon2);
