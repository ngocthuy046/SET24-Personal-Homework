//Định nghĩa các route liên quan đến đăng ký và đăng nhập
const { 
    register,
    login,
} = require('../../controllers/users/index');
const { httpMethods } = require('../../constants');

var userRouter = function (req, res) {
    const url = req.url.split('/');
    if (req.method === httpMethods.POST && url[1] === 'users' && url[2] === 'register') {
        register(req, res);
    } else if (req.method === httpMethods.POST && url[1] === 'users' && url[2] === 'login') {
        login(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
}

module.exports = userRouter;