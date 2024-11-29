import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../redux/actions/user.action";
import { LeftContent } from "../../components/LeftContent";

function RegisterForm() {
    const dispatch = useDispatch();

    const [user_name, setUserName] = useState('')
    const [user_email, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();

        function generateRandomId() {
            return Math.random().toString(36).substr(2, 9);
        }
        
        const user_id = generateRandomId();

        if (!user_name || !user_email || !password || !confirm_password) {
            alert("Please fill all the fields");
            return;
        }

        if (password !== confirm_password) {
            alert("Password does not match");
            return;
        }

        const newUser = {
            user_id,
            user_name,
            user_email,
            password
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        dispatch(RegisterUser(newUser));

        console.log(users)
        alert("Registration Successful");

    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <div className="form-title">
                    <h1 class="text-3xl font-extrabold dark:text-white">
                        Hello!
                    </h1>
                    <p className="p">Sign Up to Get Started</p>
                </div>
                <div class="mb-5">
                    <label for="user-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                    <input
                        type="text"
                        id="user-name"
                        placeholder="Enter your name"
                        value={user_name}
                        onChange={(e) => setUserName(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="name@example.com"
                        value={user_email}
                        onChange={(e) => setUserEmail(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="At least 4 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div class="mb-5">
                    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                    <input
                        type="password"
                        id="repeat-password"
                        placeholder="Repeat your password"
                        value={confirm_password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>

                <div class="form-actions">
                    <div class="flex items-start mb-5">
                        <div class="flex items-center h-5">
                            <input id="login-page" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="login-page" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account? <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Login here</a></label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
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