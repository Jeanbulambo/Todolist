/* eslint-disable import/no-cycle */
import './style.css';
import showTasks from './task.js';
import saveTodoInLocalStorage from './Local_storage.js';
import getTasksFromLocalStorage from './todoTask.js';

import removeTodo from './tasks.js';
import removeCompletedTasks from './removetask.js';

const input = document.querySelector('.text');
const form = document.getElementById('form-container');
const removeCompleted = document.querySelector('.clear');

function clearInput() {
  input.value = '';
}

// Adding task

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

const myTodoList = document.getElementById('section-list');
myTodoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-task')) {
    const listKey = event.target.parentElement.parentElement.dataset.key;
    removeTodo(listKey);
  }
});
removeCompleted.addEventListener('click', removeCompletedTasks);

showTasks();

export default setIndex;