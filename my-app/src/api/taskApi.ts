import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 10); // Simulate getting 10 tasks
};

export const addTask = async (task: { title: string }) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const deleteTask = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
