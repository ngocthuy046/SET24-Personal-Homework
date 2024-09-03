//Tệp chính khởi tạo ứng dụng và cấu hình server
// const router = require('./router/index.js')
// const createServer = require('http').createServer;

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//     router.run(req, res);
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`)
// });
const http = require('http');
const { MongoClient } = require('mongodb');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const { connectToDatabase } = require('./config/db');
const { authenticateJWT } = require('./middleware/authMiddleware');

const app = http.createServer(async (req, res) => {
    await connectToDatabase();
    
    if (req.url.startsWith('/auth')) {
        authRoutes(req, res);
    } else if (req.url.startsWith('/tasks')) {
        authenticateJWT(req, res, () => taskRoutes(req, res));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
