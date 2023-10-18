import { Task } from "./classTask.js";
import { saveTaskLocalStorage, loadTasksFromLocalStorage } from "./localStorage.js";

const CONTAINER_TASK = document.querySelector('.container-tasks')
const BUTTON_NEW_TASK = document.querySelector('.button-new-task')

BUTTON_NEW_TASK.addEventListener('click', createNewTask)

function createNewTask(event) {
    event.preventDefault();
    const contentDescriptionTask = document.getElementById('input-new-task').value;
    const contentSetDate = document.getElementById('set-date');
    const contentPriority = document.getElementById('priority')

    checkInputfilled(contentDescriptionTask)

    // Crie uma tarefa associada ao usuário.
    const user = getCurrentUser(); 


    ///****PAREI AQUI*****
    const listTaskCurrentUser = JSON.paser(localStorage.getItem(`taskUser: "${user.id}"`) || []);

    const task = new Task(contentDescriptionTask, contentSetDate, priority)

    const taskElement = createBodyTask(task.descriptionTask);

    saveTaskLocalStorage(task)

    CONTAINER_TASK.appendChild(taskElement)
}

function createBodyTask(contentDescriptionTask, contentSetDate, contentPriority) { 
    const divTask = document.createElement('div')
    divTask.classList.add('task');
    // button completed
    const buttonComplete = document.createElement('button')
    buttonComplete.classList.add('button-task-checkbox')
    const imgButtonComplete = document.createElement('img')
    imgButtonComplete.setAttribute('src', './assets/img/circle-blue.svg')
    buttonComplete.appendChild(imgButtonComplete);

    //div infos: description, dua date and priority
    const divInfos = document.createElement('div');
    divInfos.classList.add('infos')

    const descriptionTask = document.createElement('p')
    descriptionTask.classList.add('description-task')
    descriptionTask.textContent = contentDescriptionTask;

    divInfos.appendChild(descriptionTask);
    const divContainerSubInfos = document.createElement('div');
    
    const dueDate = document.createElement('span');
    dueDate.classList.add('info-due-date');
    dueDate.textContent = contentSetDate;

    const priority = document.createElement('span');
    priority.classList.add('info-priority');
    divInfos.appendChild(dueDate);
    divInfos.appendChild(priority);
    priority.textContent = contentPriority;

    divInfos.appendChild(dueDate);
    divInfos.appendChild(priority);

    const buttonDeleteTask = document.createElement('button')
    buttonDeleteTask.classList.add('button-delete-task')
    const imgButtonDeleteTask = document.createElement('img')
    imgButtonDeleteTask.setAttribute('src', './assets/img/icon-trash.svg')
    buttonDeleteTask.appendChild(imgButtonDeleteTask);

    const buttonEditTask = document.createElement('button');
    buttonEditTask.classList.add('button-edit-task');
    const imgButtonEditTask = document.createElement('img');
    imgButtonEditTask.setAttribute('src', './assets/img/edit.svg');
    buttonEditTask.appendChild(imgButtonEditTask);

    const divContainerButtons = document.createElement('div');
    divContainerButtons.appendChild(buttonDeleteTask);
    divContainerButtons.appendChild(buttonEditTask);
    
    divTask.appendChild(buttonComplete)
    divTask.appendChild(descriptionTask)
    divTask.appendChild(divInfos)
    divTask.appendChild(divContainerButtons)

    return divTask
}

function loadTaskSaved(contentTask) {
    const task = new Task(contentTask);
    const taskElement = createBodyTask(task.descriptionTask);
    CONTAINER_TASK.appendChild(taskElement)

}

function getCurrentUser() {
    return localStorage.getItem('currentUserId');
}

function checkInputfilled(contentDescriptionTask) {
    if(contentDescriptionTask === '') {
        const inputTask = document.getElementById('input-new-task')
        inputTask.style.border = '.1rem solid red';
        const erro = new Error('Campo não pode ser vazio')
        return alert(erro)
    }
}

export { createBodyTask, createNewTask, loadTaskSaved }

window.addEventListener('load', loadTasksFromLocalStorage);