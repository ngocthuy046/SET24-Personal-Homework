import axios from 'axios';
const API_URL = 'http://10.0.2.2:3000/tasks'

export async function fetchTaskAPI() {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function addTaskAPI(data) {
  try {
    const response = await axios.post(API_URL, data);
    return response;
  } catch (error) {
    throw error;
  }
}