import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/api/users';

export const registerUser = async (name, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { name, email, password });
        return response.data;
    } catch (error) {
        throw error; 
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};
  
export const logoutUser = async (token) => {
    try {
        const response = await axios.delete(`${API_URL}/logout`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to logout');
    }
};
