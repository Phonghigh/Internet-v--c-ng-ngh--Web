import { generatePath, Link } from "react-router-dom"
import { formatter } from "../../utils/formatter"
import { AiOutlineEye,AiOutlineShoppingCart } from "react-icons/ai"
import { memo } from "react";
import "./style.scss"
import { ROUTERS } from "../../utils/router";

const ProductCard= ({img,name, price}) =>{
    return(
        <>
            <div className='featured_item p1-r-10'>
                <div className='featured_item_pic'
                    style={{
                        backgroundImage: `url(${img })`,
                    }}
                >
                    <ul className='featured_item_pic_hover'>
                        <li>
                            <Link to={ROUTERS.USER.PRODUCT}><AiOutlineEye></AiOutlineEye></Link>
                        </li>
                        <li>
                            <Link to={ROUTERS.USER.SHOPPINGCART}><AiOutlineShoppingCart></AiOutlineShoppingCart></Link>
                        </li>
                    </ul>
                </div>
                <div className='featured_item_text'>
                    <h6>
                        <Link to={generatePath(ROUTERS.USER.PRODUCT,{id: 1} )} className='featured_item_text_title'>
                        {name}
                        </Link>
                    </h6>
                    <h5>{formatter(price)}</h5>
                </div>
            </div>

        </>
    );
};

export default memo(ProductCard);