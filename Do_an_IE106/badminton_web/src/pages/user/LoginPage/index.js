import {memo} from 'react'
import BreadCrumb from '../theme/breadCrumb';
import "./style.scss"
import { formatter } from '../../../utils/formatter';

const Payment = () =>{
    return <>
        <BreadCrumb name="Giỏ hàng"/>
        <div className='container'>
            <div class="order-container">
                <div class="order-form">
                    <h3>Thông tin đặt hàng:</h3>
                    <form>
                    <div class="form-group">
                        <label for="name">Họ và tên: *</label>
                        <input type="text" id="name" placeholder="Nhập họ và tên" required />
                    </div>
                    <div class="form-group">
                        <label for="address">Địa chỉ: *</label>
                        <input type="text" id="address" placeholder="Nhập địa chỉ" required />
                    </div>
                    <div class="form-group">
                        <label for="phone">Điện thoại: *</label>
                        <input type="text" id="phone" placeholder="Nhập số điện thoại" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email: *</label>
                        <input type="email" id="email" placeholder="Nhập email" required />
                    </div>
                    <div class="form-group">
                        <label for="note">Ghi chú:</label>
                        <textarea id="note" placeholder="Ghi chú về đơn hàng"></textarea>
                    </div>
                    </form>
                </div>
    
                <div class="order-summary">
                    <h3>Đơn hàng:</h3>
                    <div class="item">
                        <span>LI-NING NO.4 BOOST STRING</span>
                        <span>{formatter(1800000)} </span>
                    </div>
                    <div class="item">
                        <span>Yonex Nanoflare 1000Z Trắng</span>
                        <span>{formatter(15000000)}</span>
                    </div>
                    <div class="item">
                        <span>Lining Halbertec 9000</span>
                        <span>{formatter(16000000)}</span>
                    </div>
                    <div class="item">
                        <span>Yonex AC130-3EX</span>
                        <span>{formatter(200000)}</span>
                    </div>
                    <div class="item">
                        <span><b>Mã Giảm Giá</b></span>
                        <span>SALE10</span>
                    </div>
                    <div class="total">
                        <span>Tổng đơn:</span>
                        <span class="total-price">{formatter(28800000)}</span>
                    </div>
                    <button class="order-button">ĐẶT HÀNG</button>
                </div>
            </div>
        </div>
    </>
};

export default memo(Payment);