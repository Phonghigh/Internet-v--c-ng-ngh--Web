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
import { featproducts } from '../../../utils/common';
import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMessage } from 'react-icons/ai';
import { formatter } from '../../../utils/formatter';
import ProductCard from '../../../component/ProductCard';
import { ImOpt } from 'react-icons/im';


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
                    <h2>Vợt cầu lông Victor CLS</h2>
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
        <div className='col-lg-6 product_detail_tab'>
            <h1>Thông tin chi tiết</h1>
            <div>
                <h2>1. Đặc điểm nổi bật:</h2>
                <ul>
                    <li><strong>Khung vợt khí động học:</strong> Giảm lực cản không khí, giúp tăng tốc độ vung vợt.</li>
                    <li><strong>Cân bằng nhẹ đầu (Head Light):</strong> Phù hợp với người chơi yêu thích lối đánh phản tạt nhanh, điều cầu linh hoạt.</li>
                    <li><strong>Độ cứng trục (Shaft Stiffness):</strong> Có thể từ trung bình đến cứng, tùy phiên bản, giúp tối ưu hóa lực kiểm soát khi đánh cầu.</li>
                    <li><strong>Công nghệ tiên tiến của Victor:</strong>
                        <ul>
                            <li><strong>Nano Fortify:</strong> Tăng cường độ bền và độ ổn định của khung vợt.</li>
                            <li><strong>Hard Cored Technology:</strong> Tăng khả năng chịu lực và độ bền của vợt.</li>
                            <li><strong>Free Core Handle (ở một số phiên bản):</strong> Cải thiện cảm giác cầm nắm, mang lại sự thoải mái khi chơi lâu.</li>
                        </ul>
                    </li>
                </ul>

                <h2>2. Đối tượng phù hợp:</h2>
                <ul>
                    <li>Người chơi ở trình độ trung cấp đến nâng cao.</li>
                    <li>Phù hợp với lối chơi phản tạt, phòng thủ hoặc kiểm soát lưới, nơi yêu cầu tốc độ xoay chuyển nhanh.</li>
                </ul>

                <h2>3. Ưu điểm:</h2>
                <ul>
                    <li>Nhẹ, dễ xoay chuyển, giúp giảm mệt mỏi khi chơi lâu.</li>
                    <li>Tăng cường độ chính xác trong các pha điều cầu và phòng thủ.</li>
                </ul>

                <h2>4. Một số mẫu Victor CLS nổi bật:</h2>
                <ul>
                    <li>Victor DriveX CLS</li>
                    <li>Victor Thruster K CLS</li>
                </ul>
            </div>
            <div className='section-title'>
                <h1>Sản phẩm tương tự</h1>
            </div>
    
            <div className='row'>
                {
                    featproducts.all.products.map((item,key)=>(
                        <div key={key} className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <ProductCard img={item.img} name={item.name} price={item.price} />
                        </div>
                    ))
                }
                <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                        <ProductCard />
                </div>
            </div>
        </div>
    </>
    );
};

export default memo(ProductDetailPage);