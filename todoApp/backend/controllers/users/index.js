//user controller: register, login, logout
async function register(req, res) {
    res.end('User register successfully');
}

async function login(req, res) {
    res.end('User login successfully');
}

module.exports = {
    register,
    login
}