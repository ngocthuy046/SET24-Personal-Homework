'use client'
import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/tasks';

export const fetchTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch');
    }
};

export const addTask = async (task) => {
    try {
        const response = await axios.post(API_URL, task, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to add task');
    }
};
