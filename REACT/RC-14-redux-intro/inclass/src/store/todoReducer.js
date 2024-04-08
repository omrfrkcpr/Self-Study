const initialState = {
  todoList: [],
};

// types
const ADD = "ADD";
const DELETE = "DELETE";
const CLEAR = "CLEAR";
const TOGGLE = "TOGGLE";

//! action creators

// export const addTodo = (text) => ({type:ADD,payload:text})
export const addTodo = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};

export const clearTodo = () => ({
  type: CLEAR,
});

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE,
    payload,
  };
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { text: payload, completed: false, id: crypto.randomUUID() },
        ],
      };
    case DELETE:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };
    case CLEAR:
      return {
        ...state,
        todoList: [], //* return initialState
      };
    case TOGGLE:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state; //* olmayan bir type bilgisi geldiğinde de statei olduğu gibi döndürmelidir.
  }
};
