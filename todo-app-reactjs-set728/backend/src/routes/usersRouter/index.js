const express = require('express')
const { registerUser, loginUser, logoutUser } = require('../../controllers/usersController')
const authenticateUser = require('../../middlewares/authMiddleware')

const router = express.Router();

// Route đăng ký người dùng
router.post('/register', registerUser);

// Route đăng nhập người dùng
router.post('/login', loginUser);

// Route đăng xuất người dùng
router.delete('/logout', authenticateUser, logoutUser)

module.exports = router;