// Display username onto the dashboard
const usernameDisplay = document.getElementById('username-display');

const displayUser = () => {
    const userDataString = localStorage.getItem("userDetails");
    const userData = JSON.parse(userDataString);
    const currentUser = userData[0];
    
    if (currentUser) {
        usernameDisplay.textContent = currentUser.username;
    }
};

document.addEventListener("DOMContentLoaded", displayUser);

// Displaying random tips on user dashboard
const tipText = document.getElementById('tip-text');

const tips = [
    "Set clear goals to stay focused.",
    "Take short breaks to recharge your mind.",
    "Use a to-do list to keep track of tasks.",
    "Strive for progress, not perfection, to avoid getting stuck on minor details.",
    "Don't overload your list; keep it manageable to prevent overwhelm and burnout."
];

const randomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipText.textContent = `Tip of the Day:  ${tips[randomIndex]}`;
}

randomTip();

// Function to handle user adding task
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

        const deleteIcon = document.createElement('i'); // Added delete icon to task container so user is able to delete tasks
        deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');
        deleteIcon.addEventListener("click", () => {
            removeTasks(taskElementContainer);
        });

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

// Display task onto the dashboard page
const displayTasks = () => {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    dateDisplay.textContent = formattedDate;
}

// Remove tasks
const removeTasks = (taskElement) => {
    taskDisplayContainer.removeChild(taskElement);
}

addIcon.addEventListener("click", addTask);