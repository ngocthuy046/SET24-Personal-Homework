//Mô hình dữ liệu người dùng
const { connectToDatabase } = require('../config/db');

async function getUserModel() {
    const db = await connectToDatabase();
    return db.collection('users');
}

module.exports = { getUserModel };
