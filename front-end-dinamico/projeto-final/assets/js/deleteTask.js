import { getCurrentUser } from "./createNewTask.js";

function deleteTask() {
    const BUTTONS_DELETE_TASK = document.querySelectorAll('.button-delete-task');

    BUTTONS_DELETE_TASK.forEach((button) => {
        button.addEventListener('click', (event) => {
            removeTaskTheDOM(event);
            
            removeTaskTheLocalStorage(event)
        })
    })

}

function removeTaskTheDOM(event) {
    const elementContainerTask = event.target.closest('.container-tasks');
    const taskSelected = event.target.closest('.task')
    
    elementContainerTask.removeChild(taskSelected);
}

function removeTaskTheLocalStorage(event) {
    const taskSelected = event.target.closest('.task')
    const taskSelectedDescription = taskSelected.querySelector('.description-task').textContent.trim().toLowerCase();
    const currentUserId = getCurrentUser()
    const listTask = JSON.parse(localStorage.getItem(`taskUser: ${currentUserId}`))

    const listTaskDeletedTaskSelected = listTask.filter((task) => {
        return task.descriptionTask.trim().toLowerCase() !== taskSelectedDescription
    })

    const listTaskStringify = JSON.stringify(listTaskDeletedTaskSelected)

    localStorage.setItem(`taskUser: ${currentUserId}`, `${listTaskStringify}`);
}

export { deleteTask }