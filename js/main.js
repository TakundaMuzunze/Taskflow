const task = document.getElementById('single-task');
const taskDisplayContainer = document.querySelector('.listed-tasks')
const dateDisplay = document.querySelector('.date-display');
const addIcon = document.getElementById('plus-icon');

const addTask = (event) => {
    const taskInput = task.value.trim();

    if (taskInput !== ""){
        const taskElementContainer = document.createElement('div');
        taskElementContainer.classList.add('singular-listed-task');

        const taskText = document.createElement('p');
        taskText.classList.add('task-content');
        taskText.innerText= `${taskInput}`;

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');

        taskElementContainer.appendChild(taskText);
        taskElementContainer.appendChild(deleteIcon);
        taskDisplayContainer.appendChild(taskElementContainer);

        taskDisplayContainer.classList.add('show');
        dateDisplay.classList.add('show');
        dateDisplay.classList.add('date-heading');
    }

    displayTasks();
    task.value="";
};

const displayTasks = () => {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    dateDisplay.textContent = formattedDate;
}

const removeTasks = () => {

}

addIcon.addEventListener("click", addTask);