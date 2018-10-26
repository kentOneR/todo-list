const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    case 'REMOVE_TODO':
    const updatedTodos = state.todos.filter(todo => todo.id !== action.id)
      return {
        ...state,
        todos: updatedTodos
      }
    default:
      return state;
  }
}

export default reducer