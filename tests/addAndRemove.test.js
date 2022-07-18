/**
 * @jest-environment jsdom
 */

import trashTask from '../src/removeTask.js';
import addTask from '../src/addTask.js';
import { getStorage, saveStorage } from '../src/storage.js';

jest.mock('../src/storage.js');
jest.mock('../src/index.js');
const inputList = document.createElement('input');
inputList.type = 'text';
inputList.value = 'read a book';

describe('Testing the addTask function', () => {
  test('test the function addList', () => {
    saveStorage([]);
    expect(addTask(inputList)).toEqual({
      description: 'read a book',
      completed: false,
      index: 1,
    });
  });

  test('Test adding and getting items from the storage ', () => {
    const inputList = document.createElement('input');
    inputList.type = 'text';
    inputList.value = 'watch a movie';
    saveStorage([]);
    addTask(inputList);
    expect(getStorage()).toEqual([{
      description: 'watch a movie',
      completed: false,
      index: 1,
    }]);
  });

  test('Test creating the elements "Dom" after adding new tasks', () => {
    saveStorage([]);
    addTask(inputList);
    addTask(inputList);
    addTask(inputList);
    const items = Array.from(document.querySelectorAll('.list-item')).length;
    expect(items).toBe(3);
  });
});

test('test the function trashTask', () => {
  saveStorage([]);
  addTask(inputList);
  addTask(inputList);
  trashTask(1);
  expect(getStorage().length).toBe(1);
  trashTask(0);
  expect(getStorage().length).toBe(0);
});