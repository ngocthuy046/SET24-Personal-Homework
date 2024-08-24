document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('#register-form form');
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
                registrationForm.setAttribute('action', '/frontend/pages/login.html')
            }
        } else {
            alert('Please fill in all fields.')
        }
        
    })

    

    function generateUserId() {
        return 'user-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    }
})