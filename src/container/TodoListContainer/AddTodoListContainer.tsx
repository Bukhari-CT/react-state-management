import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { useSelector } from "../../globleState/createStore";
import { addNewTodo } from "../../globleState/reducers";

function HomePageContainer() {
  const [newTodo, setNewTodo] = useState<string>("");
  const inputRef: any = useRef(null);
  const todos: any[] = useSelector((state: any) => state.todos);
  const [todoItems, setTodoItems] = useState<any[]>([...todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const tempTodos = [...todoItems, newTodo.trim()];
      setTodoItems([tempTodos]);
      addNewTodo({
        title: newTodo,
      });
      setNewTodo("");
    }
  };

  const handleNewTodoChange = (event: any) => {
    setNewTodo(event.target.value);
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter a new todo item"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <Link to={"/todoList"}>View Complete List</Link>
    </div>
  );
}

export default HomePageContainer;
