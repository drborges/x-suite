import { add, patch, remove, createReducer } from "../db"

/**
 *
 */
const reducer = createReducer("users", {
 initialValue: []
})

export default reducer
