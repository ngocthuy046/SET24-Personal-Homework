const mongoose = require('mongoose');

// Định nghĩa schema cho Task
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Liên kết với model User
        required: true
    },
}, { versionKey: false }, { timestamps: true } ); // Tắt versioning (__v sẽ không được tạo)


// Tạo model từ schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
