import React, { useState } from 'react';

function AdminPanel() {
    return (
        <div class="admin-panel">
            <h2>This is the Admin Panel</h2>
        </div>
    )
}

function LoginForm() {
    return (
        <div class="admin-panel">
            <h2>This is the Login Form</h2>
        </div>
    )
}

const ConditionalLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    }
    return (
        <div class="conditional-rendering">
            <h1>Conditional Rendering</h1>
            <label class="switch" >
                <input 
                    type="checkbox"
                    checked={isLoggedIn}
                    onChange={handleLogin}
                />
                <span class="slider round"></span>
            </label>
            {isLoggedIn ? <AdminPanel /> : <LoginForm />}
        </div>
    )
}

export default ConditionalLogin