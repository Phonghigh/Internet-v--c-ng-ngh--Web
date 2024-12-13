import React from "react";
import "./style.scss";

const Setting = () => {
  return (
    <div className="setting">
      <h1>Cài đặt tài khoản</h1>
      <p>Quản lý thông tin cá nhân, đổi mật khẩu, và các tùy chọn khác.</p>
      {/* Form Setting */}
      <form>
        <div className="form-group">
          <label htmlFor="username">Tên tài khoản</label>
          <input type="text" id="username" placeholder="Phong Long Nhong" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="phonglongnhong@gmail.com" />
        </div>
        <div className="form-group">
          <button type="submit">Lưu thay đổi</button>
        </div>
      </form>
    </div>
  );
};

export default Setting;
