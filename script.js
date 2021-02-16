const todoButton = document.querySelector('.todo-btn');
const todoInput = document.querySelector('.form-input');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todos');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

function addTodo(e) {
	e.preventDefault();

	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');

	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	const checkBtn = document.createElement('button');
	checkBtn.classList.add('check');
	checkBtn.innerHTML = 'DONE';
	todoDiv.appendChild(checkBtn);

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = 'DELETE';
	todoDiv.appendChild(deleteBtn);

	todoList.appendChild(todoDiv);
	todoInput.value = '';
}

function deleteCheck(e) {
	const item = e.target;
	if (item.classList[0] === 'delete') {
		const todo = item.parentElement;
		todo.classList.add('fall');
		todo.addEventListener('transitionend', function () {
			todo.remove();
		});
	}
	if (item.classList[0] === 'check') {
		const todo = item.parentElement;
		todo.classList.toggle('complited');
	}
}

function filterTodo(e) {
	const todos = todoList.childNodes;
	let todosId = [];
	todos.forEach((item) => {
		todosId.push(item);
	});
}

// switch (e.target.value) {
// 	case 'all':
// 		break;
// 	case 'complited':
// 		if (item.classList.contains('complited')) {
// 			item.style.display = 'flex	';
// 		} else {
// 			item.style.display = 'none';
// 		}
// 		break;
// 	case 'uncomplited':
// 		if (!item.classList.contains('complited')) {
// 			item.style.display = 'flex	';
// 		} else {
// 			item.style.display = 'none';
// 		}
// 		break;
// }
