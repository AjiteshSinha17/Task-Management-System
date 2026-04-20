import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [dark, setDark] = useState(true);

  const reload = () => setRefresh(!refresh);

  return (
    <div className={dark ? "app dark" : "app light"}>
      
      <div className="top-bar">
        <h1>Task Manager</h1>

        <label className="switch">
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <TaskForm refresh={reload} />
      <TaskList refresh={refresh} />
    </div>
  );
}

export default App;