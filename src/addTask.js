/* eslint-disable import/no-cycle */

import { getStorage, saveStorage } from './storage.js';
import populateList from './index.js';

const addTask = (input) => {
  const taskList = getStorage();
  const task = {
    index: taskList.length + 1,
    completed: false,
    description: input.value,
  };

  if (input.value === '') {
    return;
  }
  taskList.push(task);
  saveStorage(taskList);

  input.value = '';

  populateList();
};

export default addTask;