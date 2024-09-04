//Tệp chính khởi tạo ứng dụng và cấu hình server
const { connectToDatabase } = require('./config/db') ;
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const http = require('http');
const router = require('./router/index')

const server = http.createServer(async (req, res) => {
    router.run(req, res);
});

server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
