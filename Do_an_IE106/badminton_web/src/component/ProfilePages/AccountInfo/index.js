import React from "react";
import "./style.scss";

const AccountInfo = () => {
    return (
    <div className="account-info">
        <div className="info-section">
        <h2>Thông tin tài khoản</h2>
        <p>Tên: Bùi Thanh Phong</p>
        <p>Email: 22521082@gm.uit.edu.vn</p>
        <button>Edit Account</button>
        </div>
        <div className="info-section">
        <h2>Địa chỉ giao hàng</h2>
        <p>Địa chỉ: 4 Einstein, Bình Thọ, Thủ Đức, HCM</p>
        <button>Edit Address</button>
        </div>
        <div className="info-section">
        <h2>Tổng đơn hàng</h2>
        <p>Số đơn hàng: 14</p>
        <p>Đăng giao: 1</p>
        <p>Đã giao: 13</p>
        </div>
    </div>
    );
};

export default AccountInfo;
