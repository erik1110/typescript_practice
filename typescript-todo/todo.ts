interface Task {
    name: string,
    status: TaskStatus
}

enum TaskStatus {
    Todo,
    InProgress,
    Done
}

let tasks: Task[] = [];

document.querySelector(".addTask")!.addEventListener('click', ()=> {
    const taskNameInput = <HTMLInputElement>document.querySelector(".taskName");
    const taskName = taskNameInput.value;
    if (taskName) {
        const taskItem: Task = {
            name: taskName,
            status: TaskStatus.Todo,
        }
        createTask(taskItem);
    }
})

function createTask(task: Task) {
    tasks.push(task);
    console.log(tasks)
    updateTaskList();
}

function updateTaskList(){
    let taskListHTML = '';
    tasks.forEach(task =>{
        taskListHTML += `<li>${task.name} - Status: ${task.status}</li>`;
    })
    document.querySelector(".taskList")!.innerHTML = taskListHTML;
}