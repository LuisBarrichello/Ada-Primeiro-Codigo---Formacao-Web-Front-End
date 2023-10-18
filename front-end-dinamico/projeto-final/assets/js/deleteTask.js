function deleteTask() {
    const BUTTONS_DELETE_TASK = document.querySelectorAll('.button-delete-task');

    BUTTONS_DELETE_TASK.forEach((button) => {
        button.addEventListener('click', (event) => {
            removeTaskTheDOM(event);


        })
    })

}

function removeTaskTheDOM(event) {
    const elementContainerTask = event.target.closest('.container-tasks');
            const taskSelected = event.target.closest('.task')
            console.log(taskSelected)
            
            const deletedTask = elementContainerTask.removeChild(taskSelected);
}

function rmeoveTaskTheLocalStorage(event) {
    const currentUserId = localStorage.getItem('currentUserId');
    const listTask = JSON.parse(localStorage.getItem(''))
}

export { deleteTask }