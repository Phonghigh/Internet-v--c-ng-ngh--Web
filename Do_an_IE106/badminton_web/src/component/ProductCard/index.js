import { Link } from "react-router-dom"
import { formatter } from "../../utils/formatter"
import { AiOutlineEye,AiOutlineShoppingCart } from "react-icons/ai"
import { memo } from "react";
import "./style.scss"

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
                            <AiOutlineEye></AiOutlineEye>
                        </li>
                        <li>
                            <AiOutlineShoppingCart></AiOutlineShoppingCart>
                        </li>
                    </ul>
                </div>
                <div className='featured_item_text'>
                    <h6>
                        <Link to="" className='featured_item_text_title'>{name}</Link>
                    </h6>
                    <h5>{formatter(price)}</h5>
                </div>
            </div>

        </>
    );
};

export default memo(ProductCard);