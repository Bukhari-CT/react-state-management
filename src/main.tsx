import React from "react";
import ReactDOM from "react-dom/client";
import App from "./container/TodoListContainer/AddTodoListContainer";
import AppComponent from "./App";
import "./index.css";
import { createStore, Provider } from "./globleState/createStore";
import { myInitialState } from "./globleState/initialState";
import { myReducer } from "./globleState/reducers";

const store = createStore(myReducer, myInitialState);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <AppComponent />
    </React.StrictMode>
  </Provider>
);
