import { Task } from "./classTask.js";
import { createBodyTask, getCurrentUser, loadTaskSaved } from "./createNewTask.js";
import { completeTask } from "./completeTask.js";
import { deleteTask } from "./deleteTask.js";
import { editTask } from "./editTask.js";

function saveTaskLocalStorage(listTaskCurrentUser, user) {
    return localStorage.setItem(`taskUser: ${user}`, listTaskCurrentUser);
}

async function loadTasksFromLocalStorage() {
    const user = getCurrentUser(); // Obtém o ID do usuário atual
    const taskList = await getTaskListFromLocalStorage(user);

    const CONTAINER_TASK = document.querySelector('.container-tasks');

    CONTAINER_TASK.innerHTML = '';

    for (const taskData of taskList) {
        const task = new Task(taskData.descriptionTask, taskData.dueDate, taskData.priority);
        const taskElement = createBodyTask(task.descriptionTask, task.dueDate, task.priority);
        CONTAINER_TASK.appendChild(taskElement);
    }
    completeTask()
    deleteTask()
    editTask()
}

async function getTaskListFromLocalStorage(user) {
    return new Promise((resolve, reject) => {
        const taskList = JSON.parse(localStorage.getItem(`taskUser: ${user}`)) || [];
        resolve(taskList);
    });
}

export { saveTaskLocalStorage, loadTasksFromLocalStorage }

