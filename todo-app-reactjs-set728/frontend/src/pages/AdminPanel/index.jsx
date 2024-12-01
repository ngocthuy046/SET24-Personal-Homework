import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'
import TaskManager from '../../components/TaskManager';

export default function AdminPanel() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Lấy token từ localStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      console.log('Token not found, user might need to log in.');
    }
  }, []);

  if (!token) {
    return <div>Please log in to view tasks</div>;
  }

  return (
    <div className="main-section">
      <Header />
      <TaskManager token={token} />
    </div>
  );
}
