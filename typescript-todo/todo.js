"use strict";
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Todo"] = 0] = "Todo";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Done"] = 2] = "Done";
})(TaskStatus || (TaskStatus = {}));
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
}
