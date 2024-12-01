const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const tasksRouter = require('./src/routes/tasksRouter')
const usersRouter = require('./src/routes/usersRouter')

// Khởi tạo dotenv để sử dụng biến môi trường
dotenv.config();

const app = express();

// Sử dụng body-parser để đọc dữ liệu JSON trong body của request
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// or enable CORS for a specific origin
app.use(cors({
  origin: 'http://localhost:3001'  // Allow requests only from this origin
}));

// Kết nối tới MongoDB
mongoose.connect('mongodb+srv://thuy46:mypassword@mongo.ycn9h.mongodb.net/todo_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Kết nối MongoDB thành công!');
    })
    .catch((err) => {
        console.error('Lỗi kết nối MongoDB:', err);
    });

// Đăng ký route quản lý task
app.use('/api/tasks', tasksRouter);

// Kết nối router vào ứng dụng Express
app.use('/api/users', usersRouter);

// Khởi chạy server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://127.0.0.1:${PORT}`);
});

