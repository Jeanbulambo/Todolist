import './style.css';

let todoList = [
  {
    description: 'Giving Feedback',
    isCompleted: false,
    index: 3,
  },
  {
    description: 'Going on field',
    isCompleted: false,
    index: 2,
  },
  {
    description: 'Tasks dispatching',
    isCompleted: false,
    index: 1,
  },
  {
    description: 'Meeting',
    isCompleted: false,
    index: 0,
  },
];

localStorage.setItem('todo', JSON.stringify(todoList));

const todoContainer = document.querySelector('#todo');
const populateList = () => {
  todoList = JSON.parse(localStorage.getItem('todo'));
  todoList.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<button class="check-item">
            <i class="fa-regular fa-square">
            </i>${item.description}</button>
            <button class="move-item">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>`;
    todoContainer.insertBefore(li, todoContainer.children[item.index]);
  });
};
populateList();