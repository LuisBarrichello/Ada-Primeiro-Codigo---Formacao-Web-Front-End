function completeTask() {
    const BUTTONS_COMPLETE_TASK = document.querySelectorAll('.button-task-checkbox');
    
    BUTTONS_COMPLETE_TASK.forEach((button) => {
        let indexCurrent = 1;
        button.addEventListener('click', (event) => {
            const parentElementDivTask = event.target.closest('.task');
            const description = parentElementDivTask.querySelector('.description-task');
            const dueDate = parentElementDivTask.querySelector('.info-due-date');
            const priority = parentElementDivTask.querySelector('.info-priority');

            description.classList.toggle('done');
            dueDate.classList.toggle('done');
            priority.classList.toggle('done')

            const imgSrc = event.target;
            const SVG = ['./assets/img/circle-blue.svg', './assets/img/circle-purple-done.svg']
            imgSrc.setAttribute('src', SVG[indexCurrent])
            indexCurrent = (indexCurrent + 1) % SVG.length;
        })
    })
}

export { completeTask }