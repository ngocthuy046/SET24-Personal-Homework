const Task = require('../../models/taskModel')

// Lấy danh sách task của người dùng
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user._id }); // Lọc task theo userId
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tạo task mới
const createTask = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        const newTask = new Task({
            title,
            userId: req.user._id // Gắn userId từ token
        });

        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật trạng thái hoàn thành của task (toggle)
const toggleTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, userId: req.user._id });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.completed = !task.completed;
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Xóa task
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user._id });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Cập nhật tiêu đề task
const updateTaskTitle = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        const task = await Task.findOne({ _id: req.params.id, userId: req.user._id });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.title = title;
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTasks,
    createTask,
    toggleTask,
    deleteTask,
    updateTaskTitle
};