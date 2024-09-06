import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://todo-server-task.vercel.app/api';

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

export const updateTask = async (taskId, updatedFields) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/${taskId}`, updatedFields, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};