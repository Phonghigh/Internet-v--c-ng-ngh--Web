import React, { useState } from "react";
import "./style.scss"; // Thêm file CSS riêng
import { formatter } from "../../utils/formatter";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";
const DiscountForm = () => {
const [discountCode, setDiscountCode] = useState("");
const [totalQuantity, setTotalQuantity] = useState(4); // Ví dụ số lượng
const [totalPrice, setTotalPrice] = useState(32000000); // Tổng tiền mặc định (VNĐ)

const handleApplyDiscount = () => {

    if (discountCode === "SALE10") {
        setTotalPrice((prev) => Math.max(0, prev * 0.9)); // Giảm 10%
        alert("Mã giảm giá áp dụng thành công!");
    } else {
        alert("Mã giảm giá không hợp lệ!");
    }
};

    return (
    <div className="container discount_form_container">
        <div className="discount_input">
            <label htmlFor="discountCode">Mã giảm giá:</label>
            <input
            type="text"
            id="discountCode"
            placeholder="Nhập mã giảm giá"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button onClick={handleApplyDiscount}>ÁP DỤNG</button>
        </div>
        <div className="order_summary">
            <h3>Tổng đơn:</h3>
            <p>Số lượng: <span>{totalQuantity}</span></p>
            <p>Thành tiền: <span>{formatter(totalPrice)}</span> đ</p>
            <p className="checkout_button"><Link to={ROUTERS.USER.PAYMENT} >THANH TOÁN</Link></p>
        </div>
    </div>
);
};

export default DiscountForm;
