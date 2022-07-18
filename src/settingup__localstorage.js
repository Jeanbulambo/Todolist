import getTasksFromLocalStorage from './getTodos.js';

const setLocalStorage = (lists) => {
  localStorage.setItem('allTasks', JSON.stringify(lists));
};

const saveTodoInLocalStorage = (item) => {
  const tasks = getTasksFromLocalStorage();
  tasks.push(item);
  setLocalStorage(tasks);
};

export { setLocalStorage, saveTodoInLocalStorage };