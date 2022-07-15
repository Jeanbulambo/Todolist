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
      // for (let i = 0; i < todo.length; i += 1) {
      //     todo[i].index = i;
      // }
      const newTodo = todo.filter((task) => task.completed === 0);
      localStorage.setItem('todo', JSON.stringify(newTodo));
    }
}

export default Status;