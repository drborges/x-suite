import { createReducer } from "../db"

/**
 *
 */
const reducer = createReducer("todos", {
  initialValue: []
})

export default reducer