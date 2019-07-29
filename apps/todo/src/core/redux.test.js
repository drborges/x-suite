import { createStore } from "./redux"
import { addTodo, removeTodo, toggleTodo } from "./entities/todos/actions"
import { addUser, patchUser, removeUser } from "./entities/users/actions"

const createInitialState = () => ({
  entities: {
    todos: [
      { id: 1, text: "Clean the house", completed: false, owner: 1 },
      { id: 2, text: "Walk the dog", completed: false, owner: 1 },
      { id: 3, text: "Do the dishes", completed: false, owner: 2 },
      { id: 4, text: "Take the trash out", completed: false, owner: 1 },
    ],
    users: [
      { id: 1, name: "Diego Borges" },
      { id: 2, name: "Bianca Pacheco" },
    ]
  }
})

describe("todos", () => {
  it('initializes store with default initial state', () => {
    const store = createStore()

    expect(store.getState()).toEqual({
      entities: {
        todos: [],
        users: [],
      }
    })
  })

  it('add todo', () => {
    const store = createStore(createInitialState())

    expect(store.getState()).toEqual(createInitialState())

    store.dispatch(addTodo({ text: "Clean office table", owner: 2 }))

    expect(store.getState()).toEqual({
      entities: {
        todos: [
          { id: 1, text: "Clean the house", completed: false, owner: 1 },
          { id: 2, text: "Walk the dog", completed: false, owner: 1 },
          { id: 3, text: "Do the dishes", completed: false, owner: 2 },
          { id: 4, text: "Take the trash out", completed: false, owner: 1 },
          { id: 5, text: "Clean office table", completed: false, owner: 2 },
        ],
        users: [
          { id: 1, name: "Diego Borges" },
          { id: 2, name: "Bianca Pacheco" },
        ]
      }
    })
  });

  it('remove todo', () => {
    const store = createStore(createInitialState())

    expect(store.getState()).toEqual(createInitialState())

    store.dispatch(removeTodo(2))

    expect(store.getState()).toEqual({
      entities: {
        todos: [
          { id: 1, text: "Clean the house", completed: false, owner: 1 },
          { id: 3, text: "Do the dishes", completed: false, owner: 2 },
          { id: 4, text: "Take the trash out", completed: false, owner: 1 },
        ],
        users: [
          { id: 1, name: "Diego Borges" },
          { id: 2, name: "Bianca Pacheco" },
        ]
      }
    })
  });

  it('toggle todo', () => {
    const store = createStore(createInitialState())

    expect(store.getState()).toEqual(createInitialState())

    store.dispatch(toggleTodo(2))

    expect(store.getState()).toEqual({
      entities: {
        todos: [
          { id: 1, text: "Clean the house", completed: false, owner: 1 },
          { id: 2, text: "Walk the dog", completed: true, owner: 1 },
          { id: 3, text: "Do the dishes", completed: false, owner: 2 },
          { id: 4, text: "Take the trash out", completed: false, owner: 1 },
        ],
        users: [
          { id: 1, name: "Diego Borges" },
          { id: 2, name: "Bianca Pacheco" },
        ]
      }
    })
  });
})

describe("users", () => {
  it("add user", () => {
    const store = createStore(createInitialState())

    expect(store.getState()).toEqual(createInitialState())

    store.dispatch(addUser({ name: "Hernando Borges" }))

    expect(store.getState()).toEqual({
      entities: {
        todos: [
          { id: 1, text: "Clean the house", completed: false, owner: 1 },
          { id: 2, text: "Walk the dog", completed: false, owner: 1 },
          { id: 3, text: "Do the dishes", completed: false, owner: 2 },
          { id: 4, text: "Take the trash out", completed: false, owner: 1 },
        ],
        users: [
          { id: 1, name: "Diego Borges" },
          { id: 2, name: "Bianca Pacheco" },
          { id: 3, name: "Hernando Borges" },
        ]
      }
    })
  })

  it("remove user", () => {
    const store = createStore(createInitialState())

    expect(store.getState()).toEqual(createInitialState())

    store.dispatch(removeUser(1))

    expect(store.getState()).toEqual({
      entities: {
        todos: [
          { id: 1, text: "Clean the house", completed: false, owner: 1 },
          { id: 2, text: "Walk the dog", completed: false, owner: 1 },
          { id: 3, text: "Do the dishes", completed: false, owner: 2 },
          { id: 4, text: "Take the trash out", completed: false, owner: 1 },
        ],
        users: [
          { id: 2, name: "Bianca Pacheco" },
        ]
      }
    })
  })

  it("patch user", () => {
    const store = createStore(createInitialState())

    expect(store.getState()).toEqual(createInitialState())

    store.dispatch(patchUser({ id: 1, name: "Diego R. Borges" }))

    expect(store.getState()).toEqual({
      entities: {
        todos: [
          { id: 1, text: "Clean the house", completed: false, owner: 1 },
          { id: 2, text: "Walk the dog", completed: false, owner: 1 },
          { id: 3, text: "Do the dishes", completed: false, owner: 2 },
          { id: 4, text: "Take the trash out", completed: false, owner: 1 },
        ],
        users: [
          { id: 1, name: "Diego R. Borges" },
          { id: 2, name: "Bianca Pacheco" },
        ]
      }
    })
  })
})