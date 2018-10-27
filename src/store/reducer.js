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
    const allToggleTodos = [...state.todos],
          toggleIndex = allToggleTodos.findIndex(todo => todo.id === action.id),
          thisToggleTodo = allToggleTodos[toggleIndex];

    thisToggleTodo.done = !thisToggleTodo.done;
    allToggleTodos[toggleIndex] = thisToggleTodo;
      return {
        ...state,
        todos: allToggleTodos
      }
    case 'UPDATE_TODO':
    const allUpdateTodos = [...state.todos],
          updateIndex = allUpdateTodos.findIndex(todo => todo.id === action.todo.id),
          thisUpdateTodo = action.todo;

    allUpdateTodos[updateIndex] = thisUpdateTodo;
      return {
        ...state,
        todos: allUpdateTodos
      }
    default:
      return state;
  }
}

export default reducer