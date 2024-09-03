//Cấu hình kết nối MongoDB
const { MongoClient } = require('mongodb');
const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true });

let db = null;

async function connectToDatabase() {
    if (db) return db;
    await client.connect();
    db = client.db('todoapp');
    return db;
}

module.exports = { connectToDatabase };
