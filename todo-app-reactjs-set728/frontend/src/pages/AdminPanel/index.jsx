import React, { useState, useEffect } from 'react';
import axiosInstance from "../../_apis/userApis"; 
import TaskItem from '../../components/TaskItem';
import { fetchTasks, toggleTaskComplete, deleteTask, editTaskTitle } from '../../_apis/taskApis'; // Import các hàm từ taskApis

const Header = () => {

  return (
    <header className="header">
      <div className="user-information">
        <div className="user">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6a2da0ed470c0d685115f59a09380b651780ed1c1e2895db906bf53a1d4f9e?apiKey=7a3c0c6db776404c888c5b6f6be62ebf&"
            alt="User avatar"
            className="user-avatar"
          />
          <p className="user-name">Hello</p>
        </div>
        <button
          className="logout-button"
          aria-label="Logout"

        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/afe2cbf71a0db6c57345383707991726983b9709c8f59f27ed25cee221643e12?apiKey=7a3c0c6db776404c888c5b6f6be62ebf&"
            alt="Logout icon"
            className="object-contain w-6 aspect-square"
          />
        </button>
      </div>
    </header>
  );
}

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // Lưu trạng thái lọc
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  // Lấy danh sách tasks khi component được render hoặc khi filter thay đổi
  useEffect(() => {
    async function fetchAllTasks() {
      try {
        const tasksData = await fetchTasks(filter);
        setTasks(tasksData);
      } catch (err) {
        console.error('Failed to fetch tasks:', err);
      }
    }
    fetchAllTasks();
  }, [filter]);

  // Hàm xử lý thay đổi trạng thái hoàn thành của task
  async function handleToggleComplete(taskId) {
    try {
      const updatedTask = tasks.find(task => task._id === taskId);
      updatedTask.completed = !updatedTask.completed; // Toggle trạng thái hoàn thành
      await toggleTaskComplete(taskId, updatedTask); // Gửi request cập nhật task
      setTasks(tasks.map(task => task._id === taskId ? updatedTask : task)); // Cập nhật lại trạng thái tasks
    } catch (err) {
      console.error('Failed to update task:', err);
    }
  }

  // Hàm xử lý xóa task
  async function handleDelete(taskId) {
    try {
      await deleteTask(taskId); // Gửi request xóa task
      setTasks(tasks.filter(task => task._id !== taskId)); // Cập nhật lại danh sách tasks
    } catch (err) {
      console.error('Failed to delete task:', err);
    }
  }

  // Hàm xử lý sửa tiêu đề task
  async function handleEditTitle(taskId) {
    if (!newTitle) return;

    try {
      await editTaskTitle(taskId, newTitle); // Gửi yêu cầu sửa tiêu đề
      setTasks(tasks.map(task =>
        task._id === taskId ? { ...task, title: newTitle } : task
      ));
      setNewTitle('');
      setEditingTaskId(null); // Tắt chế độ chỉnh sửa
    } catch (err) {
      console.error('Failed to edit task title:', err);
    }
  }

  return (
    <div className="dashboard">
      <h1>Your Tasks</h1>

      {/* Filter Tasks */}
      <div className="filter">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('undone')}>Undone</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          tasks.map(task => (
            <TaskItem
              key={task._id}
              task={task}
              onDelete={handleDelete}
              onToggleComplete={handleToggleComplete}
              onEditTitle={handleEditTitle}
              isEditing={editingTaskId === task._id}
              setNewTitle={setNewTitle}
              newTitle={newTitle}
              setEditingTaskId={setEditingTaskId}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default function AdminPanel() {
  return (
    <div className="main-section">
      <Header />
      <TaskManager />
    </div>
  );
};
