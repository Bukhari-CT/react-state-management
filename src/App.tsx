import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageContainer from "./container/TodoListContainer/AddTodoListContainer";
import TodoListContainer from "./container/ViewTodoListContainer/ViewTodoList";

const AppComponent: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePageContainer />} />
    </Routes>
    <Routes>
      <Route path="/todoList" element={<TodoListContainer />} />
    </Routes>
  </BrowserRouter>
);

export default AppComponent;
