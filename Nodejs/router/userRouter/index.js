var routes = require('../routes')
const {
    getUsers,
    addUsers,
    deleteUsers
} = require('../../controller/users');

var userRouter = {
    run(req, res) {
        routerMethods.get(req, res, routes.user.value, getUsers),
        routerMethods.put(req, res, routes.user.value, addUsers),
        routerMethods.delete(req, res, routes.user.value, deleteUsers)
    },
};

module.exports = {
    userRouter,
};