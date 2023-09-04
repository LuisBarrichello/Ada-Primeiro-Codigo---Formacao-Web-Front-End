/* 
ESCOLHER UM TEMA E CRIAR UMA CLASS COM POO

class Tarefa --> 
 */

class Task  {
    constructor(taskName, description, creationDate = new Date(), dueDate = null, priority = 3, status = 'pendente') {
        this.taskName = taskName;
        this.description = description;
        this.creationDate= creationDate;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }
    formatDate() {
        let day = this.creationDate.getDate().toString().padStart(2, '0');
        let month = (this.creationDate.getMonth() + 1).toString().padStart(2, '0');
        let year  =this.creationDate.getFullYear();
        let date = `${day}/${month}/${year}`

        return date
    }

    changeStatus() {
        let confirmChangeStatus = confirm(`O status dessa tarefa é ${this.status.toLocaleUpperCase()}, deseja alterar?`);
        if(confirmChangeStatus) {
            let newStatus = prompt(`digite novo status para tarefa: ${this.taskName} \n
            Sendo eles: pendente, pausado ou finalizado`)
            if(newStatus !== 'pendente' && newStatus !== 'pausado' && newStatus !== 'finalizado') {
                throw new Error('digite um status válido')
            } else {
                this.status = newStatus
                alert(`novo status para tarefa: ${this.taskName} é ${this.status.toUpperCase()}`)
            }
        }
    }

    changePriority() {
        let confirmChangePriority = confirm(`A prioridade dessa tarefa é ${this.priority}, deseja alterar?`);
        if(confirmChangePriority) {
            let newPriority = Number(prompt(`Digite a nova prioridade para tarefa: ${this.taskName} \n
            Sendo as prioridades: \n
            1 -> alta
            2 -> média
            3 -> baixa
            `))
            if(newPriority !== 1 && newPriority !== 2 && newPriority !== 3) {
                throw new Error('digite um valor válido para prioridade')
            } else {
                this.priority = newPriority
                alert(`A nova prioridade para tarefa: ${this.taskName} é ${this.priority}`)
            }
        }
    }

    editDescription() {
        let confirmEditDescription = confirm(`deseja alterar descrição desta tarefa?\n
        Tarefa: ${task.taskName}\n
        Descrição: ${task.description}`)
        if(confirmEditDescription) {
            let newDescription = prompt(`Digite a nova descrição: `)
            task.description = newDescription;
            alert(`Nova descrição: ${task.description}`)
        }
    }

    showDetails() {
        console.log(`Descrição: ${this.description}`);
        console.log(`Data de Criação: ${this.creationDate}`);
        console.log(`Data de Conclusão: ${this.dueDate}`);
        console.log(`Prioridade: ${this.priority}`);
        console.log(`Status: ${this.status}`);
    }
}

const task = new Task('criar uma class tema livre', 'criar uma class de tema livre para segunda feira')
console.log(task.formatDate())