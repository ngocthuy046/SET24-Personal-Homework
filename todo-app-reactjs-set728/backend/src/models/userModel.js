const mongoose = require('mongoose');

// Định nghĩa schema cho người dùng
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Trường name bắt buộc
        trim: true // Loại bỏ khoảng trắng thừa
    },
    email: {
        type: String,
        required: true, // Trường email bắt buộc
        unique: true, // Đảm bảo email là duy nhất
        trim: true // Loại bỏ khoảng trắng thừa
    },
    password: {
        type: String,
        required: true, // Trường password bắt buộc
        minlength: 6 // Đảm bảo mật khẩu có ít nhất 6 ký tự
    }
}, { timestamps: true }, { versionKey: false }); // Tạo trường createdAt và updatedAt tự động

// Tạo mô hình từ schema
const User = mongoose.model('User', userSchema);

module.exports = User;