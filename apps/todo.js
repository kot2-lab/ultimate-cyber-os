import { createWindow } from '../core/windowManager.js';
import { saveData, loadData } from '../core/storage.js';

let todos = loadData('todos') || [];

const todoHTML = `
<input id="todoInput" placeholder="New Task">
<button class="cyber-btn" id="addTodo">ADD</button>
<ul id="todoList"></ul>
`;

const todoWindow = createWindow('Todo', todoHTML);

document.getElementById('desktop').appendChild(todoWindow);

const list = todoWindow.querySelector('#todoList');

function renderTodos() {

    list.innerHTML = '';

    todos.forEach((todo, index) => {

        const li = document.createElement('li');

        li.innerHTML = `
        ${todo}
        <button data-index="${index}">❌</button>
        `;

        li.querySelector('button').onclick = () => {

            todos.splice(index, 1);

            saveData('todos', todos);

            renderTodos();
        };

        list.appendChild(li);

    });
}

renderTodos();

todoWindow.querySelector('#addTodo').onclick = () => {

    const input = todoWindow.querySelector('#todoInput');

    if (input.value.trim()) {

        todos.push(input.value);

        saveData('todos', todos);

        renderTodos();

        input.value = '';
    }
};
import { registerApp }
from '../system/appRegistry.js';

registerApp('todo', () => {

    document
    .getElementById('desktop')
    .appendChild(todoWindow);
});
