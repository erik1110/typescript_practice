import { TaskStatus } from "./types/TaskStatus.js";
let tasks = [];
document.querySelector(".addTask").addEventListener('click', () => {
    const taskNameInput = document.querySelector(".taskName");
    const taskName = taskNameInput.value;
    if (taskName) {
        const taskItem = {
            name: taskName,
            status: TaskStatus.Todo,
        };
        createTask(taskItem);
    }
});
function createTask(task) {
    tasks.push(task);
    console.log(tasks);
    updateTaskList();
}
function updateTaskList() {
    let taskListHTML = '';
    tasks.forEach(task => {
        taskListHTML += `<li>${task.name} - Status: ${TaskStatus[task.status]}</li>`;
    });
    document.querySelector(".taskList").innerHTML = taskListHTML;
}
