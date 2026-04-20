import Task from "../models/Task.js";

// GET all tasks
export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// CREATE task
export const createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
};

// UPDATE 
export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  task.status =
    task.status === "Pending" ? "Completed" : "Pending";

  await task.save();
  res.json(task);
};

// TOGGLE ACTIVE
export const toggleActive = async (req, res) => {
  const task = await Task.findById(req.params.id);

  task.isActive = !task.isActive;

  await task.save();
  res.json(task);
};

// DELETE task
export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};