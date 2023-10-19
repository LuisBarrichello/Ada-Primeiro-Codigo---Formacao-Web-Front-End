function editTask() {
    const BUTTONS_EDIT_TASK = document.querySelectorAll('.button-edit-task');

    BUTTONS_EDIT_TASK.forEach((button) => {
        button.addEventListener('click', (event) => {
            createModal()
        })
    })
}

function createModal() {
    const templateModal = 
    `
    <div id="editTaskModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Editar Tarefa</h2>
            <input type="text" id="editTaskDescription" placeholder="Descrição da Tarefa">
            <input type="date" id="editTaskDueDate">
            <select id="editTaskPriority">
                <option value="priority-1">Priority 1</option>
                <option value="priority-2">Priority 2</option>
                <option value="priority-3">Priority 3</option>
                <option value="priority-4">Priority 4</option>
            </select>
            <button id="saveTaskChanges">Salvar</button>
        </div>
    </div>
    `;
}