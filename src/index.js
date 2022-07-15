import TodoTask from './modules/todoTask.js';
import LocalStorage from './modules/local_storage.js';
import Task from './modules/task.js';
import './style.css';

const inputTodo = document.getElementById('input-todo');
const addTodo = document.querySelector('.add-todo');
const error = document.querySelector('.error-msg');
const reload = document.querySelector('.reload');
const clearCompleted = document.querySelector('.clear');

// create a todo task object
const todo = (index, description, completed) => new TodoTask(index, description, completed);

const localS = new LocalStorage();

const task = new Task();

const status = new Status();

const getTodoLastIndex = () => localS.getLocalStorage().length;

addTodo.addEventListener('click', (e) => {
  e.preventDefault();
  const msg = [];

  if (inputTodo.value === '') {
    msg.push('Empty field!');
    error.innerText = msg.join(', ');
  } else {
    localS.setStorage(todo(getTodoLastIndex(), inputTodo.value, 0));
    task.createTask(todo(getTodoLastIndex(), inputTodo.value, 0));
  }
  inputTodo.value = '';
});

const handleChange = () => {
  const tempDescription = inputTodo.value;
  localStorage.setItem('tempDescription', JSON.stringify(tempDescription));
};

inputTodo.onkeyup = handleChange;

const getChange = () => {
  const tempDescription = localStorage.getItem('tempDescription');
  if (tempDescription) {
    inputTodo.value = JSON.parse(tempDescription);
  }
};

window.addEventListener('load', () => {
  task.generateTodo();
  getChange();
});

reload.addEventListener('click', () => {
  task.generateTodo();
});

clearCompleted.addEventListener('click', () => {
  status.clearTaskCompleted();
  task.generateTodo();
});
