const express = require('express');
const mongoose = require('mongoose');

const tasksRouter = require('./src/routes/tasksRouter')
const usersRouter = require('./src/routes/usersRouter')

const app = express();
app.use(express.json());

// Kết nối tới MongoDB
mongoose.connect('mongodb+srv://thuy46:mypassword@mongo.ycn9h.mongodb.net/todo_app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Kết nối MongoDB thành công!');
    })
    .catch((err) => {
        console.error('Lỗi kết nối MongoDB:', err);
    });

// Sử dụng tasksRouter
app.use('/tasks', tasksRouter);
app.use('/users', usersRouter)

// Khởi chạy server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://127.0.0.1:${PORT}`);
});

