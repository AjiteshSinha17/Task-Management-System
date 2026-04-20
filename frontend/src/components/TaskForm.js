import React, { useState } from "react";
import { addTask } from "../services/api";

function TaskForm({ refresh }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.title || !task.description) {
      alert("Please fill all fields");
      return;
    }

    await addTask(task);

    setTask({ title: "", description: "" });
    refresh();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Task Title"
        value={task.title}
        onChange={(e) =>
          setTask({ ...task, title: e.target.value })
        }
      />

      <input
        placeholder="Description"
        value={task.description}
        onChange={(e) =>
          setTask({ ...task, description: e.target.value })
        }
      />

      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;