import {memo} from 'react'
import BreadCrumb from '../theme/breadCrumb';
import { Link } from 'react-router-dom';
import "./style.scss"
import { categories } from '../theme/header';
import { ROUTERS } from '../../../utils/router';
import cat1Img from "../../../assets/user/images/categories/cat-6.webp";
import cat2Img from "../../../assets/user/images/categories/cat-7.webp";
import cat3Img from "../../../assets/user/images/categories/cat-3.webp";
import cat4Img from "../../../assets/user/images/categories/cat-8.webp";
import cat5Img from "../../../assets/user/images/categories/cat-9.webp";
import { ImGlass } from 'react-icons/im';
import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMessage } from 'react-icons/ai';
import { formatter } from '../../../utils/formatter';


const ProductDetailPage = () =>{
    const imgs =[cat2Img,cat4Img,cat5Img];

    return (
    <>
        <BreadCrumb name="Chi Tiết Sản Phẩm" />
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 product_detail_pic'>
                    <img src={cat1Img} alt=''></img>
                    <div className='main'>
                        {imgs.map((item,key)=>(
                            <img src={item} alt='product-img' key={key}></img>
                        ))}
                    </div>
                </div>
                <div className='col-lg-6 product_detail_text'>
                    <h2>Vợt cầu lông</h2>
                    <div className='seen-icon'>
                        <AiOutlineEye/>
                        {`10 người xem`}
                    </div>
                    <h3>{formatter(1490000)}</h3>
                    <p><b>Vợt cầu lông Victor CLS</b> (Control Light Speed) là dòng vợt được thiết kế để đáp ứng nhu cầu của những người chơi ưu tiên tốc độ và khả năng kiểm soát trong từng cú đánh</p>
                    <ul>
                        <li>
                            <b>Tình Trạng:</b>
                            <span>Còn hàng</span>
                        </li>
                        <li>
                            <b>Số lượng:</b>
                            <span>20</span>
                        </li>
                        <li>
                            <b>Chia sẽ:</b>{" "}
                            <span>
                                <AiOutlineFacebook/>
                                <AiOutlineInstagram/>
                                <AiOutlineCopy/>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </>
    );
};

export default memo(ProductDetailPage);