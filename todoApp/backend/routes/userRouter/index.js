//Định nghĩa các route liên quan đến đăng ký và đăng nhập
const { register, login } = require('../../controllers/users/index');

module.exports = function (req, res) {
    const url = req.url.split('/');
    if (url[1] === 'register' && req.method === 'POST') {
        register(req, res);
    } else if (url[1] === 'login' && req.method === 'POST') {
        login(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
};

// var routerMethods = require('../methods')
// var routes = require('../routes')

// const {
//     getUsers,
//     addUsers,
//     deleteUsers
// } = require('../../controller/users/index');

// var userRouter = {
//     run(req, res) {
//         routerMethods.get(req, res, routes.user.value, getUsers),
//         routerMethods.put(req, res, routes.user.value, addUsers),
//         routerMethods.delete(req, res, routes.user.value, deleteUsers)
//     },
// };

// module.exports = userRouter;