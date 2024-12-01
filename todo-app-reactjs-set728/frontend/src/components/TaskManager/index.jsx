import React, { useState, useEffect } from 'react';
import { getTasks, createTask, toggleTask, deleteTask, updateTaskTitle } from '../../_apis/taskApi';

const TaskManager = ({ token }) => {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingTitle, setEditingTitle] = useState('');

    useEffect(() => {
        // Fetch tasks when the component mounts
        const fetchTasks = async () => {
            try {
                const data = await getTasks(token);
                setTasks(data);
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
            }
        };
        fetchTasks();
    }, [token]);

    const handleCreateTask = async () => {
        if (!newTaskTitle) return;
        try {
            const newTask = await createTask({ title: newTaskTitle }, token);
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTaskTitle('');
        } catch (error) {
            console.error('Failed to create task:', error);
        }
    };

    const handleToggleTask = async (taskId) => {
        try {
          const updatedTask = await toggleTask(taskId, token);
          setTasks((prevTasks) =>
            prevTasks.map((task) =>
              task._id === taskId ? updatedTask : task
            )
          );
        } catch (error) {
          console.error('Error toggling task:', error);
        }
      };

    const handleDeleteTask = async (taskId) => {
        try {
            await deleteTask(taskId, token);
            setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    const handleUpdateTaskTitle = async (taskId) => {
        if (!editingTitle) return;
        try {
            const updatedTask = await updateTaskTitle(taskId, editingTitle, token);
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task._id === updatedTask._id ? updatedTask : task
                )
            );
            setEditingTaskId(null);
            setEditingTitle('');
        } catch (error) {
            console.error('Failed to update task title:', error);
        }
    };

    return (
        <div>
            <h2>Task Manager</h2>
            <div>
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="New task title"
                />
                <button onClick={handleCreateTask}>Create Task</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        {editingTaskId === task._id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editingTitle}
                                    onChange={(e) => setEditingTitle(e.target.value)}
                                    placeholder="Edit task title"
                                />
                                <button onClick={() => handleUpdateTaskTitle(task._id)}>
                                    Update
                                </button>
                            </div>
                        ) : (
                            <div>
                                <span
                                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                    onClick={() => handleToggleTask(task._id)}
                                >
                                    {task.title}
                                </span>
                                <button onClick={() => setEditingTaskId(task._id)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
