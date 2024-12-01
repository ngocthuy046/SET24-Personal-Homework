import React, { useState } from "react";
import axiosInstance from "../../_apis/userApis";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../redux/actions/user.action";
import { LeftContent } from "../../components/LeftContent";

function RegisterForm() {
    const dispatch = useDispatch();

    const [name, setUserName] = useState('')
    const [email, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [error, setError] = useState('');

    async function handleRegister(event) {
        event.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill all the fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Password does not match");
            return;
        }

        try {
            // Gửi request đăng ký tới API
            const response = await axiosInstance.post('/register', {
                name,
                email,
                password,
            });

            // Xử lý khi đăng ký thành công
            alert('Đăng ký thành công!');
            console.log(response.data);
        } catch (err) {
            // Xử lý lỗi khi đăng ký
            setError('Đăng ký thất bại, vui lòng thử lại!');
            console.error('Error during registration:', err);
        }

    }
    return (
        <form className="form" onSubmit={handleRegister}>
            <div>
                <div className="form-title">
                    <h1 className="text-3xl font-extrabold dark:text-white">
                        Hello!
                    </h1>
                    <p className="p">Sign Up to Get Started</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="user-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                    <input
                        type="text"
                        id="user-name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setUserName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
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
                        placeholder="At least 4 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                    <input
                        type="password"
                        id="repeat-password"
                        placeholder="Repeat your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>

                <div className="form-actions">
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="login-page" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                        </div>
                        <label htmlFor="login-page" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account? <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Login here</a></label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                </div>

            </div>
        </form>
    );
};

export default function RegisterPage() {
    return (
        <div className="register">
            <LeftContent />
            <RegisterForm />
        </div>
    );
}