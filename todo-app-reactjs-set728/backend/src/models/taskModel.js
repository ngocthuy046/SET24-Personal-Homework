const mongoose = require('mongoose');

// Định nghĩa schema cho Task
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
}, { versionKey: false }); // Tắt versioning (__v sẽ không được tạo)


// Tạo model từ schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
