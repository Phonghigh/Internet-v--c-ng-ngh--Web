import {memo} from 'react'
// import BreadCrumb from '../theme/breadCrumb';
import "./style.scss"
// import { formatter } from '../../../utils/formatter';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoginPage_User = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // Kiểm tra tài khoản đăng nhập (chỉ ví dụ, cần xác thực thực tế từ backend)
        if (email === "22521082@gm.uit.edu.vn" && password === "123") {
            sessionStorage.setItem("isLoggedIn", "true");
            navigate('/thong-tin-ca-nhan');  // Điều hướng đến trang profile
        } else {
            alert("Invalid credentials!");
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();
        // Đăng ký tài khoản mới (cần xác thực và lưu thông tin vào backend)
        alert("Registration successful! You can now log in.");
        toggleForm();  // Chuyển về form đăng nhập sau khi đăng ký thành công
    };

    return (
        <div className={`container_login ${isLogin ? "login-mode" : "register-mode"}`}>
            <div className="form-section">
                {isLogin ? (
                    <div className="form login-form">
                        <h2>Login</h2>
                        <form onSubmit={handleLogin}>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
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
                        <form onSubmit={handleRegister}>
                            <input type="text" placeholder="Full Name" required />
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
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