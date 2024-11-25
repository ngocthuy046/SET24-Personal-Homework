'use client'

import AddTask from '../components/addTask'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_TASKS_REQUEST } from '../../redux/actions/task.action';

export default function Home() {
  const { tasks, loading, error } = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: FETCH_TASKS_REQUEST });
  }, [dispatch]);

  return (
    <div>
      <h1>Todo App React</h1>
      <AddTask/>
      {loading && <p>Loading tasks...</p>}
      {error && <p>Error fetching tasks: {error}</p>}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            </li>
        ))}
      </ul>
    </div>
    
  );
}
