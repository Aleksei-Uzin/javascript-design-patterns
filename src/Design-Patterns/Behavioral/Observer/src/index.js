import CheckboxObserver from './observers/CheckboxObserver.js';
import SpanObserver from './observers/SpanObserver.js';
import TaskSubject from './TaskSubject.js';
import createObservedElement from './utils/createObservedElement.js';
import './styles/style.css';

const form = document.querySelector('#task-info');
const tasksList = document.querySelector('#tasks-list');
const controlSubject = new TaskSubject(document.querySelector('#controlCheckbox'));
const INITIAL_TASKS = ['Eat', 'Sleep', 'Repeat'];

function createTaskItem(description) {
  const span = createObservedElement('span', SpanObserver, controlSubject, el => {
    el.textContent = description;
  });

  const checkbox = createObservedElement('input', CheckboxObserver, controlSubject, el => {
    el.type = 'checkbox';
  });

  const li = document.createElement('li');
  li.append(span, checkbox);

  return li;
}

function addTask(description) {
  const taskItem = createTaskItem(description);
  tasksList.appendChild(taskItem);
}

INITIAL_TASKS.forEach(addTask);

form.addEventListener('submit', e => {
  e.preventDefault();

  const description = new FormData(form).get('newTaskInput');
  addTask(description);
});
