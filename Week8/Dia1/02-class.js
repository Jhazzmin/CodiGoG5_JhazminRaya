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
    //1ero se construye
    //2do ejecuta lo que le ponga despues 
    this.aparecer();
  }
  aparecer(){
    console.log(`Un ${this.Nombre} salvaje aparecio`);
  }
  atacar(){
    console.log(`${this.Nombre} ataca con ${this.Ataque}`);
  }
}
//instancia
let pokemon1 = new Pokemon("Pikachu","Electrico",30,20,60);

let pokemon2 = new Pokemon("Dragonite","Dragon",70,80,120);

console.log(pokemon1.Tipo);
console.log(pokemon2.atacar());
