'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TASK_REQUEST } from '../../redux/actions/task.action';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const { loading, error } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    const task = {
      title: taskTitle,
      completed: false,
    };
    if (taskTitle) {
      dispatch({ type: ADD_TASK_REQUEST, payload: task });
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task title"
        required
      />
      {loading && <p>Loading tasks...</p>}
      {error && <p>Error adding task: {error}</p>}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
