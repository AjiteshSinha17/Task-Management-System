import React, { useEffect, useState } from "react";
import {
  getTasks,
  deleteTask,
  updateTask,
  toggleActive,
  editTask,
} from "../services/api";

function TaskList({ refresh }) {
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
  });

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const handleEdit = (task) => {
    setEditId(task._id);
    setEditData({
      title: task.title,
      description: task.description,
    });
  };

  const handleSave = async (id) => {
    await editTask(id, editData);
    setEditId(null);
    fetchTasks();
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>✔</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td>{index + 1}</td>

              {/* CHECKBOX */}
              <td>
                <input
                  type="checkbox"
                  checked={task.status === "Completed"}
                  onChange={async () => {
                    await updateTask(task._id);
                    fetchTasks();
                  }}
                />
              </td>

              {/* EDIT MODE */}
              {editId === task._id ? (
                <>
                  <td>
                    <input
                      value={editData.title}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          title: e.target.value,
                        })
                      }
                    />
                  </td>

                  <td>
                    <input
                      value={editData.description}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          description: e.target.value,
                        })
                      }
                    />
                  </td>
                </>
              ) : (
                <>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                </>
              )}

              <td className={task.status === "Completed" ? "done" : ""}>
                {task.status}
              </td>

              {/* ACTIVE SWITCH */}
              <td>
                <label className="switch green">
                  <input
                    type="checkbox"
                    checked={task.isActive}
                    onChange={async () => {
                      await toggleActive(task._id);
                      fetchTasks();
                    }}
                  />
                  <span className="slider"></span>
                </label>
              </td>

              {/* 🔥 IMPROVED ACTION BUTTONS */}
              <td className="actions">
                {editId === task._id ? (
                  <button
                    className="save-btn"
                    onClick={() => handleSave(task._id)}
                  >
                    ✔ Save
                  </button>
                ) : (
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(task)}
                  >
                    ✏ Edit
                  </button>
                )}

                <button
                  className="delete-btn"
                  onClick={async () => {
                    await deleteTask(task._id);
                    fetchTasks();
                  }}
                >
                  🗑 Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;