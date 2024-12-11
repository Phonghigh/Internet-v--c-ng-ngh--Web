import {memo} from 'react'
import BreadCrumb from '../theme/breadCrumb';
import "./style.scss"
import { formatter } from '../../../utils/formatter';
import { ROUTERS } from '../../../utils/router';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ContactPage = () =>{
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Cảm ơn bạn đã liên hệ! Email: ${email}, Tin nhắn: ${message}`);
        // Xử lý gửi thông tin ở đây
    };
    return <>
        <BreadCrumb name="Liên hệ"/>
        <div className='container'>
            <div className="contact-container">
                <h1 className="contact-title">Liên Hệ SMASH SHOP</h1>
                <p className="contact-address">
                    <strong>Địa chỉ:</strong> 4 Einstein Bình Thọ, Thủ Đức, Bình Dương
                </p>
                <p className="contact-phone">
                    <strong>Phone:</strong> 0557-843-408
                </p>
                <p className="contact-email">
                    <strong>Email:</strong> Smashshop@gmail.com
                </p>
    
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="email">Nhập email của bạn:</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Tin nhắn:</label>
                        <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Gửi</button>
                    </form>
            </div>
        </div>
    </div>
    </>
};

export default memo(ContactPage);