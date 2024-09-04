//Tệp chính khởi tạo ứng dụng và cấu hình server
const http = require('http');
const router = require('./router/index')

const server = http.createServer(async (req, res) => {
    router.run(req, res);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
