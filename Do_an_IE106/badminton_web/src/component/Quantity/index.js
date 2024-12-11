import { memo } from "react";
import "./style.scss";
import {React,  useState } from "react";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";
const Quantity = ({ quantity = 1, hasAddCart = true }) => {
    const [value, setValue] = useState(quantity); 

    const handleDecrease = () => {
        setValue((prev) => Math.max(1, prev - 1)); 
    };

    const handleIncrease = () => {
        setValue((prev) => prev + 1); 
    };

    const handleChange = (e) => {
        const newValue = Math.max(1, Number(e.target.value));
        setValue(newValue);
    };

    return (
        <div className="quantity_container">
            <div className="quantity">
                <span className="qtybtn" onClick={handleDecrease}>-</span>
                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                    min="1"
                />
                <span className="qtybtn" onClick={handleIncrease}>+</span>
            </div>
            {hasAddCart && (
                <Link to={ROUTERS.USER.PAYMENT} className="button_submit">
                    Thêm giỏ hàng
                </Link>
            )}
        </div>
    );
};

export default memo(Quantity);