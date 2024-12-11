import {memo} from 'react'
import BreadCrumb from '../theme/breadCrumb';
import "./style.scss"
import { formatter } from '../../../utils/formatter';
import feature4Img from "../../../assets/user/images/feature/feature-4.webp";
import feature5Img from "../../../assets/user/images/feature/feature-5.webp";
import feature6Img from "../../../assets/user/images/feature/feature-6.webp";
import feature7Img from "../../../assets/user/images/feature/feature-7.webp";
import Quantity from '../../../component/Quantity';
import DiscountForm from '../../../component/DiscountForm';

const ShoppingCart = () =>{
    return <>
        <BreadCrumb name="Giỏ hàng"/>
        <div className='container'>
            <div className='table_cart'>
                <table>
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={feature4Img}></img>
                                <h2>LI-NING NO.4 BOOST STRING</h2>
                            </td>
                            <td>{formatter(900000)}</td>
                            <td><Quantity quantity={2} hasAddCart={false}/></td>
                            <td>{formatter(1800000)}</td>
                            <td><button>Xóa</button></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={feature5Img}></img>
                                <h2>Vợt Cầu Lông Yonex Nanoflare 1000Z Trắng</h2>
                            </td>
                            <td>{formatter(15000000)}</td>
                            <td><Quantity quantity="1" hasAddCart={false}/></td>
                            <td>{formatter(15000000)}</td>
                            <td><button>Xóa</button></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={feature6Img}></img>
                                <h2>Set vợt cầu lông Lining Halbertec 9000 Limited - Olympic Paris 2024</h2>
                            </td>
                            <td>{formatter(16000000)}</td>
                            <td><Quantity quantity="1" hasAddCart={false}/></td>
                            <td>{formatter(16000000)}</td>
                            <td><button>Xóa</button></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={feature7Img}></img>
                                <h2>Quấn cán Yonex xịn AC130-3EX (3in1) chính hãng</h2>
                            </td>
                            <td>{formatter(100000)}</td>
                            <td><Quantity quantity="2" hasAddCart={false}/></td>
                            <td>{formatter(200000)}</td>
                            <td><button>Xóa</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className='total_price'>
                    Tổng tiền: <span>{formatter(32000000)}</span>
                </div>
            </div>
        </div>
        {/* <div></div> */}
        <div >
            <div>
                <DiscountForm/>
            </div>
        </div>
    </>
};

export default memo(ShoppingCart);