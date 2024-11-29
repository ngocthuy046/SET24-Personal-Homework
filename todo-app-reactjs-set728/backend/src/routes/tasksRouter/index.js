const express = require('express')
const Task = require('../../models/taskModel')

const router = express.Router();

// Lấy danh sách task
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find(); // Lấy tất cả task từ MongoDB
        res.json(tasks); // Trả về danh sách task
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách task', error });
    }
});

// Thêm task mới
router.post('/', async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ message: 'Vui lòng cung cấp tiêu đề task.' });
        }

        const newTask = new Task({ title }); // Tạo task mới
        await newTask.save(); // Lưu task vào MongoDB
        res.status(201).json(newTask); // Trả về task mới tạo
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi thêm task mới', error });
    }
});

// Toggle trạng thái hoàn thành của task
router.patch('/:id/toggle', async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findById(id); // Tìm task theo ID
        if (!task) {
            return res.status(404).json({ message: 'Task không tồn tại.' });
        }

        task.completed = !task.completed; // Đảo ngược trạng thái hoàn thành
        await task.save(); // Lưu thay đổi vào MongoDB
        res.json(task); // Trả về task đã cập nhật
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi toggle trạng thái task', error });
    }
});

// Xóa task
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findByIdAndDelete(id); // Xóa task theo ID
        if (!task) {
            return res.status(404).json({ message: 'Task không tồn tại.' });
        }

        res.json({ message: 'Đã xóa task thành công.', task });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa task', error });
    }
});

// Chỉnh sửa tiêu đề của task
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Vui lòng cung cấp tiêu đề task mới.' });
        }

        const task = await Task.findById(id); // Tìm task theo ID
        if (!task) {
            return res.status(404).json({ message: 'Task không tồn tại.' });
        }

        task.title = title; // Cập nhật tiêu đề
        await task.save(); // Lưu thay đổi vào MongoDB
        res.json(task); // Trả về task đã cập nhật
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi chỉnh sửa tiêu đề task', error });
    }
});

module.exports = router;