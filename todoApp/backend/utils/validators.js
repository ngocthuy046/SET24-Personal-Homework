//Các hàm tiện ích để kiểm tra dữ liệu đầu vào
function validateRegistration(username, password) {
    return username && password && password.length >= 6;
}

function validateLogin(username, password) {
    return username && password;
}

module.exports = { validateRegistration, validateLogin };
