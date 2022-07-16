import showTasks from './task.js';
import { setLocalStorage } from './Local_storage.js';
import getTasksFromLocalStorage from './todoTask.js';
// eslint-disable-next-line import/no-cycle
import setIndex from './index.js';
// Remove Completed Tasks
const removeCompletedTasks = () => {
  let tasks = getTasksFromLocalStorage();

  tasks = tasks.filter((item) => item.completed === false);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};

export default removeCompletedTasks;