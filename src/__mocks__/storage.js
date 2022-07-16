let todo = [];

function saveStorage(items) {
  todo = items;
}

function getStorage() {
  return todo;
}
export { saveStorage, getStorage };