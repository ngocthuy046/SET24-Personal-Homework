const express = require('express')
const {
    getTasks,
    createTask,
    toggleTask,
    deleteTask,
    updateTaskTitle
} = require('../../controllers/tasksController')
const authenticateUser = require('../../middlewares/authMiddleware')

const router = express.Router();

// Định nghĩa các route và kết nối với controller
router.get('/', authenticateUser, getTasks); // Lấy danh sách task
router.post('/', authenticateUser, createTask); // Tạo task mới
router.patch('/:id', authenticateUser, toggleTask); // Toggle trạng thái task
router.delete('/:id', authenticateUser, deleteTask); // Xóa task
router.put('/:id', authenticateUser, updateTaskTitle); // Chỉnh sửa tiêu đề task

module.exports = router;