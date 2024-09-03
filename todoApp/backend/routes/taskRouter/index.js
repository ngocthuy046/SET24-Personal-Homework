//Định nghĩa các route liên quan đến quản lý nhiệm vụ
const { createTask, updateTask, deleteTask, getTasks } = require('../../controllers/tasks/index');

module.exports = function (req, res) {
    const url = req.url.split('/');
    if (req.method === 'POST' && url[1] === 'tasks') {
        createTask(req, res);
    } else if (req.method === 'PUT' && url[1] === 'tasks' && url[2]) {
        updateTask(req, res);
    } else if (req.method === 'DELETE' && url[1] === 'tasks' && url[2]) {
        deleteTask(req, res);
    } else if (req.method === 'GET' && url[1] === 'tasks') {
        getTasks(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
};
