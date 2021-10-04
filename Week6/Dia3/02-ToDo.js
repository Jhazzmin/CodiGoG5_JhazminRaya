/**
 * 1) Que Datos Necesito?
 * -la tares(string), estado de la tarea(bool)
 * -referencia del formulario
 * -referencia de la lista
 * 2) como obtengo los datos
 * -evento click, tomando el value del input 
 * -crear un li
 */

let formToDo = document.getElementById("formToDo");

let ulTareas = document.getElementById("tareas");

let tareas = [];//aqui almacenare las tareas a mostrar

//a) vamos a obtener el valor del input y agregarlo a tareas[]

formToDo.addEventListener("submit", function(ev){
  //evento
  ev.preventDefault();
  //formulario.name_input.value
  let nuevaTarea = formToDo.tarea.value;
  //console.log(nuevaTarea);
  tareas.push(nuevaTarea);
  console.log(tareas);
  //reset(), reinicia todo el formulario
  formToDo.reset();
  dibujarTareas();
});

function dibujarTareas(){
  //cada vez que se ejecute dibujarTareas lo primero
  //que hago es decir que el contenido HTML va a ser "" nada 
  ulTareas.innerHTML="";
  //se va a encargar de dibujar las tareas
  tareas.forEach(function(item, posicion){
    let li = document.createElement("li");
    li.innerHTML = item;
    ulTareas.appendChild(li);

    //Agregar 01 evento por cada item
    li.addEventListener("dblclick", function(){
      //la idea es que esto nos permita eliminar una tarea
      tareas.splice(posicion, 1); //splice(posicion actual, cantidad a eliminar)
      //console.log("despues de eliminar", tareas);

      dibujarTareas();
    })
  })
}