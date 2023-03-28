import { Link } from "react-router-dom";
import { useSelector } from "../../globleState/createStore";

function TodoListContainer() {
  const todos: any[] = useSelector((state: any) => state.todos);

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <Link to={"/"}>Go Back</Link>
    </div>
  );
}

export default TodoListContainer;
