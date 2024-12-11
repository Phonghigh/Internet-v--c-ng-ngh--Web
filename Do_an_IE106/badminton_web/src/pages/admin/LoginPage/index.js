import {memo} from 'react'
import "./style.scss"
// import { Link } from 'react-router-dom';
import { useState } from 'react';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
        setError('Email và mật khẩu không được để trống');
        return;
        }
        // Xử lý đăng nhập (ví dụ gửi request API)
        setError('');
        console.log('Đăng nhập với email:', email, 'và mật khẩu:', password);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Đăng nhập</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email của bạn"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Mật khẩu:</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu của bạn"
                    />
                </div>
                <button type="submit" className="login-btn">Đăng nhập</button>
                </form>
                <div className="forgot-password">
                <a href="">Quên mật khẩu?</a>
                </div>
            </div>
        </div>
    );
};

export default memo(LoginPage);