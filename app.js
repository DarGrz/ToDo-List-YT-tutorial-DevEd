// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//Event Listeners 
// Add ToDo
todoButton.addEventListener('click', addTodo);
// Remove ToDo
todoList.addEventListener('click', deleteCheck);


//Functions
function addTodo(e) {
    if(todoInput.value === '') {
        alert('Please enter ToDo');
        return;
    }
    // Prevent from submitting
    e.preventDefault();
    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Trash  button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // Append to list
    todoList.appendChild(todoDiv);
    //Clear Input value
    todoInput.value = '';
};

function deleteCheck(e) {
    const item = e.target;
    // Delete todo
    if(item.classList[0] === "trash-btn") {
       const todo = item.parentElement;
       todo.remove();
    }
}

   