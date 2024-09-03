//Task Management function
const { getTaskModel } = require('../../models/task');

async function createTask(req, res) {
    const { title, description } = req.body;
    
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    
    const taskCollection = await getTaskModel();
    const newTask = { title, description, completed: false, userId: req.user.username };
    await taskCollection.insertOne(newTask);
    
    res.status(201).json({ message: 'Task created successfully', task: newTask });
}

async function updateTask(req, res) {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    
    const taskCollection = await getTaskModel();
    const updatedTask = await taskCollection.findOneAndUpdate(
        { _id: new require('mongodb').ObjectId(id), userId: req.user.username },
        { $set: { title, description, completed } },
        { returnOriginal: false }
    );
    
    if (!updatedTask.value) {
        return res.status(404).json({ message: 'Task not found or not authorized' });
    }
    
    res.json({ message: 'Task updated successfully', task: updatedTask.value });
}

async function deleteTask(req, res) {
    const { id } = req.params;
    
    const taskCollection = await getTaskModel();
    const result = await taskCollection.deleteOne({ _id: new require('mongodb').ObjectId(id), userId: req.user.username });
    
    if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Task not found or not authorized' });
    }
    
    res.json({ message: 'Task deleted successfully' });
}

async function getTasks(req, res) {
    const { completed } = req.query;
    const taskCollection = await getTaskModel();
    
    const filter = { userId: req.user.username };
    if (completed !== undefined) {
        filter.completed = completed === 'true';
    }
    
    const tasks = await taskCollection.find(filter).toArray();
    res.json({ tasks });
}

module.exports = { createTask, updateTask, deleteTask, getTasks };
