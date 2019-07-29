import { combineReducers } from "redux"

import { reducer as todos } from "./todos"
import { reducer as users } from "./users"

const entities = combineReducers({
  todos,
  users,
})

export default entities
