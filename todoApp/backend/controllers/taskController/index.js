document.addEventListener("DOMContentLoaded", function () {
    let todos = loadTodosFromLocalStorage() || [];
    const currentUserId = getCurrentUserId();

    const taskNameInput = document.getElementById("task-name");
    const createButton = document.getElementById("create-task");
    const cancelButton = document.getElementById("cancel-all-change");
    const todoList = document.getElementById("todo-list");

    const filter = document.getElementById("filter");
    const todofilterValue = Object.freeze({
        ALL: 'all',
        DONE: 'done',
        UNDONE: 'undone'
    });

    createButton.addEventListener("click", addTask);
    cancelButton.addEventListener("click", cancelAllChange);
    filter.addEventListener("change", renderTodoList);

    function addTask() {
        const taskName = taskNameInput.value.trim();
        if (taskName === '') {
            alert('Please input a task');
            return;
        }
        if (!currentUserId) {
            alert('No user logged in');
            return;
        }
        todos.unshift({
            name: taskName,
            done: false,
            userId: currentUserId
        });
        saveTodosToLocalStorage();
        taskNameInput.value = "";
        renderTodoList();
    }

    function cancelAllChange() {
        taskNameInput.value = "";
    }

    function editTask(index) {
        const editItem = document.querySelector(`.taskName-${index}`);
        const editingValue = editItem.innerHTML;
        const inputElement = document.createElement('input');
        inputElement.value = editingValue;
        editItem.replaceWith(inputElement);
        inputElement.focus();
        inputElement.addEventListener("blur", () => {
            const updateValue = inputElement.value.trim();
            if (updateValue) {
                todos[index].name = updateValue;
                saveTodosToLocalStorage();
                renderTodoList();
            }
        });
    }

    function deleteTask(index) {
        todos.splice(index, 1);
        saveTodosToLocalStorage();
        renderTodoList();
    }

    function toggleTask(index) {
        const selectedTodo = todos[index];
        todos.splice(index, 1);
        selectedTodo.done = !selectedTodo.done;
        todos.push(selectedTodo);
        saveTodosToLocalStorage();
        renderTodoList();
    }

    function getFilteredTodo() {
        const filterValue = filter.value;
        let filteredTodos = todos.filter(todo => todo.userId === currentUserId);
        
        if (filterValue === todofilterValue.DONE) {
            filteredTodos = filteredTodos.filter(todo => todo.done);
        } else if (filterValue === todofilterValue.UNDONE) {
            filteredTodos = filteredTodos.filter(todo => !todo.done);
        }
        
        return filteredTodos;
    }

    function renderTodoList() {
        todoList.innerHTML = "";
        getFilteredTodo().forEach((todo, index) => {
            const li = document.createElement("li");
            li.className = todo.done ? "done" : "";
            li.innerHTML = `
                <input type="checkbox" class="check-box" onclick="toggleTask(${index})" ${todo.done ? "checked" : ""}>
                <span class="taskName-${index}">${todo.name}</span>
                <div>
                    <button type="edit" class="edit" onclick="editTask(${index})">Edit</button>
                    <button type="delete" class="delete" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            todoList.appendChild(li);
        });
    }

    function saveTodosToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodosFromLocalStorage() {
        return JSON.parse(localStorage.getItem('todos'));
    }

    function getCurrentUserId() {
        return localStorage.getItem('currentUserId');
    }

    window.editTask = editTask;
    window.deleteTask = deleteTask;
    window.toggleTask = toggleTask;

    renderTodoList();
});
