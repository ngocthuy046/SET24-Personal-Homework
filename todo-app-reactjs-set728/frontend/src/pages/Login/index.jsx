import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../redux/actions/user.action";
// import { userActions } from "../../redux/actions/user.action";

import { LeftContent } from "../../components/LeftContent";

export function Login() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const [user_email, setUserEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        
        if (!user_email || !password) {
            alert("Please fill all the fields");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const checkUser = users.find((user) => user.user_email === user_email && user.password === password);

        if (!checkUser) {
            alert("User not found");
            return;
        } else {
            dispatch(LoginUser(checkUser));
            console.log(user)
            alert("Login Successful");
        }
        setUserEmail('')
        setPassword('')
    }

    return (
        <div className="login">
            <LeftContent />
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">
                    <h2 className="welcome-message__title">Welcome back!</h2>
                    <p className="p">Login to Get Started</p>
                </div>
                <div className="form-field">
                    <div className="input-field">
                        <label className="label">Email</label>
                        <input
                            className="input-content"
                            type="email"
                            placeholder="Enter your Email"
                            value={user_email}
                            onChange={(event) => setUserEmail(event.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label className="label">Password</label>
                        <input
                            className="input-content"
                            type="password"
                            placeholder="At least 4 characters"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                </div>
                <div className="form-bottom">
                    <div >
                        <p className="internal-link-text">
                            Already have an account?
                            <a href="/login" className="button__link">Login here</a>
                        </p>
                    </div>
                    <button
                        className="button"
                        type="submit"
                    >Login</button>
                </div>
            </form>
        </div>
    );
};
