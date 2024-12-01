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

router.get('/', authenticateUser, getTasks); 
router.post('/', authenticateUser, createTask); 
router.patch('/:id', authenticateUser, toggleTask); 
router.delete('/:id', authenticateUser, deleteTask); 
router.put('/:id', authenticateUser, updateTaskTitle); 

module.exports = router;