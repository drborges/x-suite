import { createAddAction, createDeleteAction, createPatchAction } from "../db"

export const addUser = createAddAction("users")
export const removeUser = createDeleteAction("users")
export const patchUser = createPatchAction("users")
