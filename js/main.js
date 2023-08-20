const task = document.getElementById('single-task');
const taskDisplayContainer = document.querySelector('.listed-tasks')
const dateDisplay = document.getElementById('date');
const addIcon = document.getElementById('plus-icon');

const addTask = (event) => {
    const taskInput = task.value.trim();

    if (taskInput !== ""){
        const taskElementContainer = document.createElement('div');
        taskElementContainer.classList.add('singular-listed-task');

        const taskText = document.createElement('p');
        taskText.classList.add('task-content');
        taskText.innerText= `${taskInput}`;

        taskElementContainer.appendChild(taskText);
        taskDisplayContainer.appendChild(taskElementContainer);


        taskDisplayContainer.classList.add('show');
        dateDisplay.classList.add('show');
    }

    task.value="";
};

const displayTasks = (event) => {

}

addIcon.addEventListener("click", addTask);