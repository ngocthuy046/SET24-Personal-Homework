import axios from "axios";
import { getAuthToken } from '../../utils/auth'; // Tạo hàm lấy token từ localStorage (nếu chưa có)
const API_URL = 'http://127.0.0.1:3000/api'

// Hàm lấy tất cả tasks với filter trạng thái
export async function fetchTasks(filter = 'all') {
  try {
    let url = '/tasks';
    if (filter === 'done') {
      url = '/tasks?completed=true';
    } else if (filter === 'undone') {
      url = '/tasks?completed=false';
    }

    // Lấy token từ localStorage
    const token = getAuthToken();

    // Tạo axios instance với header Authorization
    const response = await axios.get(`${API_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Thêm token vào header
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

// Hàm cập nhật trạng thái task (toggle hoàn thành)
export async function toggleTaskComplete(taskId, updatedTask) {
  try {
    const token = getAuthToken();
    const response = await axios.put(`${API_URL}/tasks/${taskId}`, updatedTask, {
      headers: {
        Authorization: `Bearer ${token}`,  // Thêm token vào header
      }
    });
    console.log('response', response)
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Hàm sửa tiêu đề task
export async function editTaskTitle(taskId, newTitle) {
  try {
    const updatedTask = { title: newTitle };
    const token = getAuthToken();
    const response = await axios.put(`${API_URL}/tasks/${taskId}`, updatedTask, {
      headers: {
        Authorization: `Bearer ${token}`,  // Thêm token vào header
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Hàm xóa task
export async function deleteTask(taskId) {
  try {
    const token = getAuthToken();
    await axios.delete(`${API_URL}/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Thêm token vào header
      }
    });
  } catch (error) {
    throw error;
  }
}

// Hàm thêm mới task
export async function addTask(newTask) {
  try {
    const token = getAuthToken();
    const response = await axios.post(`${API_URL}/tasks`, newTask, {
      headers: {
        Authorization: `Bearer ${token}`,  // Thêm token vào header
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
