document.addEventListener("DOMContentLoaded", function () {
    let todos = loadTodosFromLocalStorage() || [];

    const taskNameInput = document.getElementById("task-name");
    const createButton = document.getElementById("create-task");
    const cancelButton = document.getElementById("cancel-all-change");
    const todoList = document.getElementById("todo-list");

    const filter = document.getElementById("filter");
    const filterValueIsAll = 'all';
    const filterValueIsDone = 'done';
    const filterValueIsUndone = 'undone';

    createButton.addEventListener("click", addTask);
    cancelButton.addEventListener("click", cancelAllChange);
    filter.addEventListener("change", renderTodoList);

    function addTask() {
        const taskName = taskNameInput.value.trim();
        if (taskName === '') {
            return 'Please input a task';
        } else {
            todos.unshift({
                name: taskName,
                done: false
            });
            saveTodosToLocalStorage();
        }
        taskNameInput.value = "";
        renderTodoList();
    }

    function cancelAllChange() {
        taskNameInput.value = ""; // Reset button text if it was changed
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
        selectedTodo.done = !selectedTodo.done;
        saveTodosToLocalStorage();
        renderTodoList();
    }

    function getFilteredTodo() {
        const filterValue = filter.value;
        if (filterValue === filterValueIsAll) {
            return todos;
        } else if (filterValue === filterValueIsDone) {
            return todos.filter(todo => todo.done);
        } else {
            return todos.filter(todo => !todo.done);
        }
    }

    function renderTodoList() {
        const filterValue = filter.value;
        todoList.innerHTML = "";
        getFilteredTodo().forEach((todo, index) => {
            const li = document.createElement("li");
            li.className = todo.done ? "done" : "";
            li.innerHTML = `
                <input type="checkbox" class="check-box" onclick="toggleTask(${index})" ${todo.done ? "checked" : ""}>
                <span class="taskName-${index}">${todo.name}</span>
                <div>
                    <button class="edit" onclick="editTask(${index})">Edit</button>
                    <button class="delete" onclick="deleteTask(${index})">Delete</button>
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

    window.editTask = editTask;
    window.deleteTask = deleteTask;
    window.toggleTask = toggleTask;

    renderTodoList();
});
