const taskList = document.querySelector(`.main-box__tasks`);
const addButton = document.getElementById(`addButton`);
const deleteButton = document.getElementById(`delete`);
const taskInput = document.getElementById(`addTask`);


addButton.addEventListener(`click`, function() {
    const taskText = taskInput.value;
    const newTask = document.createElement(`li`);
    newTask.textContent = taskText;
    if (taskText != "") {
    taskList.append(newTask);
    taskInput.value = " ";
    }
})

deleteButton.addEventListener (`click`, function() {
    const lastItem = document.querySelector('ul > li:last-child');
    lastItem.remove();
    taskInput.value = " ";
})

taskList.addEventListener(`click`, function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle(`crossed`);
    }
})