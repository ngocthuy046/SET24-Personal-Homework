function getUsers(req, res) {
    res.end('Get User Successfully');
};

function addUsers(req, res) {
    res.end('Add User Successfully');
};

function deleteUsers(req, res) {
    res.end('Delete User Successfully');
};

module.exports = {
    getUsers,
    addUsers,
    deleteUsers
};