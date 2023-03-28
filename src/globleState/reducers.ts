import { myInitialState } from "./initialState";
export const myReducer = (state = myInitialState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { title: action.title, id: Math.random(), done: false }],
      };
    default:
      return state;
  }
};
export const todoFunction = {
  name: "addTodo",
  myInitialState,
  reducers: {
    addNewTodo: (action: any, state: any = myInitialState) => {
      return (state.todos = [...state.todos, { title: action.title, id: Math.random(), done: false }]);
    },
    InitialTodos: (state: any) => {
      state.todos = { ...myInitialState };
    },
  },
};
export const { addNewTodo, InitialTodos } = todoFunction.reducers;

export const combineReducers = {
  addNewTodo,
  InitialTodos,
};
