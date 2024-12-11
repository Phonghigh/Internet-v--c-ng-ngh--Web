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
import { useState,useEffect } from 'react';
import { useTotalPrice } from '../../../component/TotalPrice'; // Import context

const ShoppingCart = () => {
    // Danh sách sản phẩm ban đầu
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            img: feature4Img,
            name: "LI-NING NO.4 BOOST STRING",
            price: 900000,
            quantity: 2,
        },
        {
            id: 2,
            img: feature5Img,
            name: "Vợt Cầu Lông Yonex Nanoflare 1000Z Trắng",
            price: 15000000,
            quantity: 1,
        },
        {
            id: 3,
            img: feature6Img,
            name: "Set vợt cầu lông Lining Halbertec 9000 Limited - Olympic Paris 2024",
            price: 16000000,
            quantity: 1,
        },
        {
            id: 4,
            img: feature7Img,
            name: "Quấn cán Yonex xịn AC130-3EX (3in1) chính hãng",
            price: 100000,
            quantity: 2,
        },
    ]);

    // Hàm xử lý xóa sản phẩm
    const handleRemove = (id) => {
        const row = document.querySelector(`tr[data-id='${id}']`);
        if (row) {
            row.classList.add("removing"); // Thêm lớp hiệu ứng
            setTimeout(() => {
                // Xóa sản phẩm sau khi hiệu ứng kết thúc
                setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
            }, 300); // Thời gian trùng với thời gian hiệu ứng CSS (0.3s)
        }
    };
    
    const handleQuantityChange = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };
    
    const calculateTotalPrice = () => 
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());
    const { updateTotalPrice } = useTotalPrice();
    useEffect(() => {
        const total = calculateTotalPrice();
        setTotalPrice(total);
        updateTotalPrice(total);
        sessionStorage.setItem('totalPrice', total);
    }, [cartItems]); // Sẽ cập nhật khi cartItems thay đổi


    const calculateTotalQuantity = () => 
        cartItems.reduce((total, item) => total + item.quantity, 0);
    
    const [totalQuantity, setTotalQuantity] = useState(calculateTotalQuantity());

    useEffect(() => {
        setTotalQuantity(calculateTotalQuantity());
    }, [cartItems]); // Sẽ cập nhật khi cartItems thay đổi

    return (
        <>
            <BreadCrumb name="Giỏ hàng" />
            <div className="container">
                <div className="table_cart">
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
                            {cartItems.map((item) => (
                                <tr key={item.id} className="cart_item" data-id={item.id}>
                                    <td>
                                        <img src={item.img} alt={item.name} />
                                        <h2>{item.name}</h2>
                                    </td>
                                    <td>{formatter(item.price)}</td>
                                    <td>
                                        <Quantity
                                                quantity={item.quantity}
                                                hasAddCart={false}
                                                onQuantityChange={(newQuantity) =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        newQuantity
                                                    )
                                                }
                                            />
                                    </td>
                                    <td>{formatter(item.price * item.quantity)}</td>
                                    <td>
                                        <button onClick={() => handleRemove(item.id)}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="total_price">
                        Tổng tiền: <span>{formatter(totalPrice)}</span>
                    </div>
                </div>
            </div>
            <div>
                <DiscountForm total_price={totalPrice} total_Quantity={totalQuantity}/>
            </div>
        </>
    );
};
export default memo(ShoppingCart);