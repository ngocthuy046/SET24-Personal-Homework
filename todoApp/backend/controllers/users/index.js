//user controller: Add, Delete, Get
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { getUserModel } = require('../models/user');
const { JWT_SECRET, JWT_EXPIRATION } = require('../config/jwt');
const { validateRegistration, validateLogin } = require('../utils/validators');

async function register(req, res) {
    const { username, password } = req.body;
    if (!validateRegistration(username, password)) {
        return res.status(400).json({ message: 'Invalid input' });
    }
    
    const userCollection = await getUserModel();
    const existingUser = await userCollection.findOne({ username });
    
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    await userCollection.insertOne({ username, password: hashedPassword });
    
    res.status(201).json({ message: 'User registered successfully' });
}

async function login(req, res) {
    const { username, password } = req.body;
    if (!validateLogin(username, password)) {
        return res.status(400).json({ message: 'Invalid input' });
    }

    const userCollection = await getUserModel();
    const user = await userCollection.findOne({ username });
    
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
}

module.exports = { register, login };

// function getUsers(req, res) {
//     res.end('Get User Successfully');
// };

// function addUsers(req, res) {
//     res.end('Add User Successfully');
// };

// function deleteUsers(req, res) {
//     res.end('Delete User Successfully');
// };

// var login = async()

// module.exports = {
//     getUsers,
//     addUsers,
//     deleteUsers
// };