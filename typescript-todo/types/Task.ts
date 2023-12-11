import { TaskStatus } from "./TaskStatus.js"

export interface Task {
    name: string,
    status: TaskStatus
}