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
    const updatedTodos = state.todos.filter(todo => todo.id !== action.id);
      return {
        ...state,
        todos: updatedTodos
      }
    case 'TOGGLE_TODO':
    const allTodos = [...state.todos],
          index = allTodos.findIndex(todo => todo.id === action.id),
          thisTodo = allTodos[index];

    thisTodo.done = !thisTodo.done;
    allTodos[index] = thisTodo;

      return {
        ...state,
        todos: allTodos
      }
    default:
      return state;
  }
}

export default reducer