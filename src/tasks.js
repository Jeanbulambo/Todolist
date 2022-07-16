import showTasks from './task.js';
import { setLocalStorage } from './Local_storage.js';
import getTasksFromLocalStorage from './todoTask.js';
// eslint-disable-next-line import/no-cycle
import setIndex from './index.js';

const removeTodo = (key) => {
  const tasks = getTasksFromLocalStorage();
  tasks.splice((key - 1), 1);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};
export default removeTodo;