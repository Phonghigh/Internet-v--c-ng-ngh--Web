import { memo } from "react";
import "./style.scss";
import {React,  useState } from "react";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";
const Quantity = ({ quantity = 1, hasAddCart = true, onQuantityChange }) => {
    const [value, setValue] = useState(Number(quantity));

    const handleDecrease = () => {
        setValue((prev) => {
            const newValue = Math.max(1, prev - 1);
            if (onQuantityChange) onQuantityChange(newValue); // Gọi callback
            return newValue;
        });
    };

    const handleIncrease = () => {
        setValue((prev) => {
            const newValue = prev + 1;
            if (onQuantityChange) onQuantityChange(newValue); // Gọi callback
            return newValue;
        });
    };

    const handleChange = (e) => {
        const newValue = Math.max(1, Number(e.target.value));
        setValue(newValue);
        if (onQuantityChange) onQuantityChange(newValue); // Gọi callback
    };

    return (
        <div className="quantity_container">
            <div className="quantity">
                <span className="qtybtn" onClick={handleDecrease}>
                    -
                </span>
                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                    min="1"
                />
                <span className="qtybtn" onClick={handleIncrease}>
                    +
                </span>
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