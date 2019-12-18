export const types = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  COMPLETE: "COMPLETE"
}

export const actionCreators = {
  add: todo => ({
    type: types.ADD,
    payload: todo
  }),
  remove: id => ({
    type: types.REMOVE,
    payload: id
  }),
  complete: id => ({
    type: types.COMPLETE,
    payload: id
  })
}

const initialState = {
  todos: [
    {
      id: 349534,
      name: "Buy water",
      completed: false
    },
    {
      id: 348234,
      name: "Buy bread",
      completed: true
    },
    {
      id: 348814,
      name: "Buy coffee",
      completed: false
    }
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD: return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: Math.random(),
          name: action.payload,
          completed: false
        }
      ]
    }
    case types.REMOVE: return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.payload)
    }
    case types.COMPLETE: return {
      ...state,
      todos: state.todos.map(todo => ({
        ...todo,
        completed: todo.id === action.payload ? !todo.completed : todo.completed,
      }))
    }
    default: return state
  }
}