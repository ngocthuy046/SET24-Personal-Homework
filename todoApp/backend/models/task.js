//Mô hình dữ liệu nhiệm vụ
const { connectToDatabase } = require('../config/db');

async function getTaskModel() {
    const db = await connectToDatabase();
    return db.collection('tasks');
}

module.exports = { getTaskModel };
