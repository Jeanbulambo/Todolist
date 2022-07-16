/* eslint-disable import/no-cycle */
import './style.css';
import showTasks from './showTodos.js';
import { saveTodoInLocalStorage } from './settingup__localstorage.js';
import getTasksFromLocalStorage from './getTodos.js';
import removeTodo from './remove.js';
import removeCompletedTasks from './clearTodos.js';

const input = document.querySelector('.text');
const form = document.getElementById('form');
const removeCompleted = document.querySelector('.clear-completed');

function clearInput() {
  input.value = '';
}

const addTodoTask = (e) => {
  const tasks = getTasksFromLocalStorage();
  e.preventDefault();

  if (input.value === '') {
    return;
  }

  const todo = {
    description: input.value,
    completed: false,
    index: tasks.length + 1,
  };

  clearInput();
  saveTodoInLocalStorage(todo);
  showTasks();
};

const setIndex = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
};

form.addEventListener('submit', addTodoTask);

const myTodoList = document.getElementById('todoList');
myTodoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-task')) {
    const listKey = event.target.parentElement.parentElement.dataset.key;
    removeTodo(listKey);
  }
});
removeCompleted.addEventListener('click', removeCompletedTasks);

showTasks();

export default setIndex;