import axios from 'axios'

const API_URL = 'http://127.0.0.1:3000/api'

const axiosInstance = axios.create({
    baseURL: API_URL, // Thay đổi URL này theo backend của bạn
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export default axiosInstance;