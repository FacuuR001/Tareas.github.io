import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
evento.preventDefault(); //Remueve las caracteristicas por defecto de los input.
const input = document.querySelector('[data-form-input]');  //Selecciona el input y obtiene el valor.
const value = input.value;
const list = document.querySelector('[data-list]');  //Selecciona el ul.
const task = document.createElement('li'); //crea un elementi li .
task.classList.add('card'); //agrega la clase card en el elemento li creado anteriormente.
input.value = ''; //sirve que para que cuando hagamos click en el boton el valor del input quede vacio.

const taskContent = document.createElement('div');
const titleTask = document.createElement('span');

titleTask.classList.add('task');
titleTask.innerText = value;

taskContent.appendChild(checkComplete());
taskContent.appendChild(titleTask);
    
//task.innerHTML = content; agregamos al elemento li que creamos la estructura anterior.
task.appendChild(taskContent);
task.appendChild(deleteIcon());
list.appendChild(task); //Le decimos al componente del ul que agregue el li con la estructura una debajo de otra.
};

btn.addEventListener("click", createTask); //Evento de click al boton.

    