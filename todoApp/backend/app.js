//Tệp chính khởi tạo ứng dụng và cấu hình server
const router = require('./router/index.js')
const createServer = require('http').createServer;

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    router.run(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});