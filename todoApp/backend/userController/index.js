document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('register-form');
    const registrationButton = document.getElementById('registration-button');

    registrationButton.addEventListener('click', () => {
        const name = document.getElementById('registration-name').value;
        const email = document.getElementById('registration-email').value;
        const password = document.getElementById('registration-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        if (name && email && password) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(user => user.email === email);

            if (userExists) {
                alert('User already exists');
            } else {
                const userId = generateUserId();

                users.push({ id: userId, name, email, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('User registed successfull')
            }
        } else {
            alert('Please fill in all fields.')
        }
    })
    function generateUserId() {
        return 'user-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    }
})

document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            console.log('Users in LocalStorage:', users);

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                alert('Login successful!');
                loginForm.reset();
            } else {
                alert('Invalid email or password!');
            }
        } else {
            alert('Please fill in all fields.');
        }
    });
})