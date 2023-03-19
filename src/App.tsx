import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState<any[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodoItems([...todoItems, newTodo.trim()]);
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
        <input type="text" placeholder="Enter a new todo item" value={newTodo} onChange={handleNewTodoChange} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
