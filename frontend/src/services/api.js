import axios from "axios";

const API = "http://localhost:5000/api/tasks";

export const getTasks = () => axios.get(API);
export const addTask = (task) => axios.post(API, task);
export const updateTask = (id) => axios.put(`${API}/${id}`);
export const deleteTask = (id) => axios.delete(`${API}/${id}`);
export const toggleActive = (id) => axios.put(`${API}/active/${id}`);
export const editTask = (id, data) => axios.put(`${API}/${id}`, data);