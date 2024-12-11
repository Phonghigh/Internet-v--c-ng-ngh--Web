import { generatePath, Link } from "react-router-dom"
import { formatter } from "../../utils/formatter"
import { AiOutlineEye,AiOutlineShoppingCart } from "react-icons/ai"
import { memo } from "react";
import "./style.scss"
import { ROUTERS } from "../../utils/router";

const Quantity= ({ hasAddCart = true}) =>{
    return(
        <div className="quantity_container">
            <div className="quantity">
                <span className="qtybtn">-</span>
                <input type="number" defaultValue={1}></input>
                <span className="qtybtn">+</span>
            </div>
            {hasAddCart && (
                <button type="submit" className="button_submit">
                    Thêm giỏ hàng
                </button>
            )}
        </div>
    );
};

export default memo(Quantity);