//Các hàm tiện ích để xử lý phản hồi (response)
function sendResponse(res, status, message, data) {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message, data }));
}

module.exports = { sendResponse };
