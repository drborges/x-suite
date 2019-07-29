import { createStore as createReduxStore, combineReducers } from "redux"

import entities from "./entities"

const appReducer = combineReducers({
  entities
})

export const createStore = initialState => {
  return createReduxStore(appReducer, initialState)
}
