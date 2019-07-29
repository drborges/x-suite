/**
 *
 * @param {*} list
 * @param {*} item
 */
export const add = (list, item) => {
  return list.concat({
    ...item,
    id: list.length + 1,
  })
}

/**
 *
 * @param {*} list
 * @param {*} data
 */
export const patch = (list, data) => {
  const item = list.find(item => item.id === data.id)
  const index = list.findIndex(item => item.id === data.id)

  return [
    ...list.slice(0, index),
    { ...item, ...data },
    ...list.slice(index + 1),
  ]
}

/**
 *
 * @param {*} list
 * @param {*} payload
 */
export const remove = (list, { id }) => {
  return list.filter(item => item.id !== id)
}

/**
 *
 * @param {*} list
 * @param {*} payload
 */
export const toggle = (list, { id, field }) => {
  const item = list.find(item => item.id === id)
  const index = list.findIndex(item => item.id === id)

  return [
    ...list.slice(0, index),
    { ...item, [field]: !item[field] },
    ...list.slice(index + 1)
  ]
}

/**
 *
 * @param {*} entityName
 * @param {*} defaultPayloadValues
 */
export const createAddAction = (entityName, defaultPayloadValues = {}) => payload => ({
  type: `@redux-db/ADD ${entityName}`,
  payload: {
    ...payload,
    ...defaultPayloadValues,
  },
})

/**
 *
 * @param {*} entityName
 * @param {*} defaultPayloadValues
 */
export const createDeleteAction = (entityName, defaultPayloadValues = {}) => id => ({
  type: `@redux-db/DELETE ${entityName}[:id]`,
  payload: {
    id,
    ...defaultPayloadValues,
  },
})

/**
 *
 * @param {*} entityName
 * @param {*} defaultPayloadValues
 */
export const createToggleAction = (entityName, defaultPayloadValues = {}) => id => ({
  type: `@redux-db/TOGGLE ${entityName}[:id]`,
  payload: {
    id,
    ...defaultPayloadValues,
  },
})

/**
 *
 * @param {*} entityName
 * @param {*} defaultPayloadValues
 */
export const createPatchAction = (entityName, defaultPayloadValues = {}) => payload => ({
  type: `@redux-db/PATCH ${entityName}[:id]`,
  payload: {
    ...payload,
    ...defaultPayloadValues,
  },
})

const defaultActions = [
  "ADD",
  "DELETE",
  "PATCH",
  "TOGGLE",
]

export const createReducer = (entityName, { actions = defaultActions, initialValue }) => (state = initialValue, action) => {
  switch(action.type) {
    case `@redux-db/ADD ${entityName}`: return actions.includes("ADD") ? add(state, action.payload) : state
    case `@redux-db/DELETE ${entityName}[:id]`: return actions.includes("DELETE") ? remove(state, action.payload) : state
    case `@redux-db/TOGGLE ${entityName}[:id]`: return actions.includes("TOGGLE") ? toggle(state, action.payload) : state
    case `@redux-db/PATCH ${entityName}[:id]`: return actions.includes("PATCH") ? patch(state, action.payload) : state
    default: return state
  }
}
