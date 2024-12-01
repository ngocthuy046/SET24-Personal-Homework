import React, { useState } from "react";
import { loginUser } from "../../_apis/userApi"; 
import { useNavigate } from 'react-router-dom';
import { LeftContent } from "../../components/LeftContent"; 

function LoginForm() {
    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    async function handleLogin(event) {
        event.preventDefault();

        if (!email || !password) {
            alert("Please fill all the fields");
            return;
        }

        try {
            const response = await loginUser(email, password);

            alert('Login successfull!');
            console.log(response)
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify({ name: response.user.name })); 
            navigate('/admin'); 
        } catch (err) {
            setError('Đăng nhập thất bại, vui lòng kiểm tra lại thông tin!');
            console.error('Error during login:', err);
        }
    }

    const handleRegisterRedirect = () => {
        navigate('/register'); 
    }

    return (
        <form className="form" onSubmit={handleLogin}>
            <div>
                <div className="form-title">
                    <h1 className="text-3xl font-extrabold dark:text-white">
                        Welcome Back!
                    </h1>
                    <p className="p">Login to Your Account</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>

                <div className="form-actions">
                    <div className="flex items-start mb-5">
                        <label htmlFor="register-page" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Not have an account?
                            <span
                                onClick={handleRegisterRedirect}
                                className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">
                                Register Now
                            </span>
                        </label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </form>
    );
};

export default function LoginPage() {
    return (
        <div className="login">
            <LeftContent />
            <LoginForm />
        </div>
    );
}
