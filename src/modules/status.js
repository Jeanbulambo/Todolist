import LocalStorage from './local_storage.js';

const localS = new LocalStorage();

class Status {
    updateTaskCompletedStatus = (index, status) => {
      const todo = localS.getLocalStorage();
      todo[index].completed = status;
      localStorage.setItem('todo', JSON.stringify(todo));
    }

    clearTaskCompleted = () => {
      const todo = localS.getLocalStorage();

      const newTodo = todo.filter((task) => task.completed === 0);
      localStorage.setItem('todo', JSON.stringify(newTodo));
    }
}

export default Status;