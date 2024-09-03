//Dịch vụ liên quan đến xác thực và cấp JWT
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');

function generateToken(username) {
    return jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
}

module.exports = { generateToken };
