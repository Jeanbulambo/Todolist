class LocalStorage {
  // eslint-disable-next-line class-methods-use-this
  getLocalStorage = () => {
    let todo;
    if (localStorage.getItem('todo') === null) {
      todo = [];
    } else {
      todo = JSON.parse(localStorage.getItem('todo'));
    }

    return todo;
  }

   setStorage = (singleTodo) => {
     const todo = this.getLocalStorage();
     todo.push(singleTodo);
     localStorage.setItem('todo', JSON.stringify(todo));
   };

  removeLocalStorage = (index) => {
    const todo = this.getLocalStorage();
    todo.splice(index, 1);
    for (let i = 0; i < todo.length; i += 1) {
      todo[i].index = i;
    }
    localStorage.setItem('todo', JSON.stringify(todo));
  }
}

export default LocalStorage;
