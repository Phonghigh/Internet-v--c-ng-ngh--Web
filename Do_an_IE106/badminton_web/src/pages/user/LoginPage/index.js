import {memo} from 'react'
// import BreadCrumb from '../theme/breadCrumb';
import "./style.scss"
// import { formatter } from '../../../utils/formatter';
import React, { useState } from "react";



const LoginPage_User = () =>{
    const [isLogin, setIsLogin] = useState(true);
    const toggleForm = () => {
    setIsLogin(!isLogin);
    };

    return (
    <div className={`container_login ${isLogin ? "login-mode" : "register-mode"}`}>
        <div className="form-section">
            {isLogin ? (
            <div className="form login-form">
                <h2>Login</h2>
                <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
                </form>
                <p>
                Don't have an account?{" "}
                <span onClick={toggleForm} className="toggle-link">
                    Register
                </span>
                </p>
            </div>
            ) : (
            <div className="form register-form">
                <h2>Register</h2>
                <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Register</button>
                </form>
                <p>
                Already have an account?{" "}
                <span onClick={toggleForm} className="toggle-link">
                    Login
                </span>
                </p>
            </div>
            )}
        </div>
    </div>
    );
};

export default memo(LoginPage_User);