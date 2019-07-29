import { createAddAction, createDeleteAction, createToggleAction } from "../db"

export const addTodo = createAddAction("todos", { completed: false })
export const removeTodo = createDeleteAction("todos")
export const toggleTodo = createToggleAction("todos", { field: "completed" })
