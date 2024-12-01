import React, { useState } from 'react';

function TaskItem({ task, onDelete, onToggleComplete, onEditTitle, isEditing, setNewTitle, newTitle, setEditingTaskId }) {
  const { _id, title, completed } = task;
  const [editingValue, setEditingValue] = useState(title);

  const handleEditChange = (e) => {
    setEditingValue(e.target.value);
  };

  const handleEditSubmit = () => {
    if (editingValue !== title) {
      onEditTitle(_id, editingValue);  // Gọi hàm chỉnh sửa tiêu đề
    }
    setEditingTaskId(null); // Đóng chế độ chỉnh sửa sau khi lưu
  };

  return (
    <div className="task-item">
      <div className="task-info">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(_id)} // Cập nhật trạng thái hoàn thành
          className="task-checkbox"
        />
        {isEditing ? (
          <input
            type="text"
            value={editingValue}
            onChange={handleEditChange}
            onBlur={handleEditSubmit} // Khi mất focus, tự động lưu
            autoFocus
            className="task-edit-input"
          />
        ) : (
          <span className={`task-title ${completed ? 'completed' : ''}`}>{title}</span>
        )}
      </div>
      <button
        onClick={() => onDelete(_id)} // Xóa task
        className="task-delete-button"
      >
        Delete
      </button>
      {!isEditing && (
        <button
          onClick={() => setEditingTaskId(_id)} // Bật chế độ chỉnh sửa khi nhấn vào "Edit"
          className="task-edit-button"
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default TaskItem;
