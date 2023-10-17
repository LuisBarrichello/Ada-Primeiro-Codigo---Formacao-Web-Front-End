class Task {
    static id = 0;
    constructor(descriptionTask, dueDate, priority) {
        this.id = Task.id++;
        this.descriptionTask = descriptionTask;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

export {Task}