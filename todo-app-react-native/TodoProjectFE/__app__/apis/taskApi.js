import axios from 'axios';
const API_URL = 'http://10.0.2.2:3000'

//TODO: 6- fetchTasksAPI
export async function fetchTasksAPI() {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error.message)
    throw error;
  }
}

//TODO: 7- addTaskAPI
export async function addTaskAPI(task) {
  try {
    const response = await axios.post(`${API_URL}/tasks`, task);

    return response.data;
  } catch (error) {
    console.error('Error adding task:', error.message);
    throw error;
  }
}

//TODO: 8- deleteTaskAPI

export async function deleteTaskAPI(id) {
  try {
    const response = await axios.delete(`${API_URL}/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error.message);
    throw error;
  }
}

// updateTaskAPI
export async function updateTaskAPI(id, updatedTask) {
  try {
    const response = await axios.patch(`${API_URL}/tasks/${id}`, updatedTask);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error.message);
    throw error;
  }
}




