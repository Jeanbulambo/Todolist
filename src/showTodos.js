import getTasksFromLocalStorage from './getTodos.js';
import updateStaus from './status.js';
import { setLocalStorage } from './settingup__localstorage.js';

const myTodoList = document.getElementById('todoList');
const showTasks = () => {
  myTodoList.innerHTML = '';
  const tasks = getTasksFromLocalStorage();
  for (let i = 0; i < tasks.length; i += 1) {
    const holder = document.createElement('div');
    holder.innerHTML += ` <li class="task" id="${tasks[i].index}" data-key="${tasks[i].index}" draggable="true">
    <div>
      <input id="box-${i}" type="checkbox" class="box" id="list-box" name="list-box">
      <label id="label-${i}" class="form-label">${tasks[i].description}</label>
    </div>
  
    <button id="${tasks[i].index}" class="delete"><i class='fa fa-trash delete-task'></i></button>
  </li>`;

    while (holder.firstChild) {
      myTodoList.appendChild(holder.firstChild);
    }

    const label = document.getElementById(`label-${i}`);
    const box = document.getElementById(`box-${i}`);

    box.checked = tasks[i].completed;
    box.addEventListener('change', (event) => {
      updateStaus(event.target, tasks[i]);
      setLocalStorage(tasks);
    });

    label.addEventListener('dblclick', () => {
      label.setAttribute('contenteditable', 'true');
    });

    label.addEventListener('focus', () => {
      label.parentElement.parentElement.style.backgroundColor = '#dadadc';
    });

    label.addEventListener('blur', () => {
      label.parentElement.parentElement.style.backgroundColor = '#fff';
      tasks[i].description = label.innerHTML;
      setLocalStorage(tasks);
    });
  }
};

export default showTasks;