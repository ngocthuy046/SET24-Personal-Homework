const express = require('express')
const { registerUser, loginUser, logoutUser } = require('../../controllers/usersController')
const authenticateUser = require('../../middlewares/authMiddleware')

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.delete('/logout', authenticateUser, logoutUser)

module.exports = router;