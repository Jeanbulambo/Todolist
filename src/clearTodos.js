import showTasks from './showTodos.js';
import { setLocalStorage } from './settingup__localstorage.js';
import getTasksFromLocalStorage from './getTodos.js';
// eslint-disable-next-line import/no-cycle
import setIndex from './index.js';

const removeCompletedTasks = () => {
  let tasks = getTasksFromLocalStorage();

  tasks = tasks.filter((item) => item.completed === false);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};

export default removeCompletedTasks;