// utils/auth.js
export function getAuthToken() {
    return localStorage.getItem('token'); // Trả về token lưu trong localStorage
  }
  