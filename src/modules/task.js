import LocalStorage from './local_storage.js';
import Status from './status.js';

const mainListCard = document.querySelector('.main-list-card');

// create object from  localStorage
const localS = new LocalStorage();

// create status object from Status
const status = new Status();

class Task {
  // eslint-disable-next-line class-methods-use-this
  createTask = (task) => {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo');

    // add element to todo
    todoCard.innerHTML = `<div class="class-sep">
            <input type="checkbox" id="${task.index}">
            <input class="input-type" size="50"  type="text" id="${task.index}"  value="${task.description}">
        </div>
        <button class="remove-task" id="${task.index}">
            <i class="fa-solid fa-trash-can"></i>
        </button>`;

    todoCard.addEventListener('click', (e) => {
      this.removeTask(e.target);
    });

    todoCard.addEventListener('keypress', (e) => {
      this.updateTask(e.target.value, Number(e.target.id));
    });

    // for the checkbox
    todoCard.addEventListener('click', (e) => {
      if (e.target.getAttribute('type') === 'checkbox') {
        if (e.target.checked === true) {
          console.log('it is checked');
          console.log(e.target.id);
          console.log(localS.getLocalStorage());
          status.updateTaskCompletedStatus(Number(e.target.id), 1);
        } else {
          status.updateTaskCompletedStatus(Number(e.target.id), 0);
        }
      }
    });

    mainListCard.appendChild(todoCard);
  }

  generateTodo = () => {
    const todo = localS.getLocalStorage();
    let counter = 0;
    mainListCard.innerHTML = '';
    while (counter < todo.length) {
      this.createTask(todo[counter]);
      counter += 1;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  removeTask = (t) => {
    if (t.classList.contains('fa-trash-can')) {
      t.parentElement.parentElement.remove();
      localS.removeLocalStorage((t.parentElement.id));
    }
  }

  updateTask = (val, index) => {
    const todo = localS.getLocalStorage();
    todo[index].description = val;
    localStorage.setItem('todo', JSON.stringify(todo));
  }
}

export default Task;