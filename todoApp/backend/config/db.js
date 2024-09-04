//Cấu hình kết nối MongoDB
const { MongoClient } = require('mongodb');
require('dotenv').config();
const url = process.env.MONGO_URL
const client = new MongoClient(url);

let database = null;

async function connectToDatabase() {
    if (database) return database;
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const databaseName = process.env.MONGO_DATABASE
        database = client.db(databaseName);

        return database;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }
}

module.exports = { connectToDatabase };
