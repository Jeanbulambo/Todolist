import populateList from './index.js';
import { saveStorage } from './storage.js';

const editTask = (text, tasks, task) => {
  const taskToEdit = tasks[task.index - 1];

  taskToEdit.description = text.textContent;
  saveStorage(tasks);
  populateList();
};

export default editTask;