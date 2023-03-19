import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React State Management</h1>
      <p>
        Hello, this is a project which have its own react state managment instead of using redux zustand or anyother
        third package library.
      </p>
      <p>So, stick around and enjoy this project</p>
    </div>
  );
}

export default App;
