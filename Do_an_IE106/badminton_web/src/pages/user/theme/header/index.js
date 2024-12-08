import {memo} from 'react'
import "./style.scss"
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ROUTERS } from '../../../../utils/router';
import React, { useState } from 'react';



const Header = () =>{
    const [menus, setMenus] = useState ([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Cửa Hàng",
            path: ROUTERS.USER.PRODUCTS
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Vợt cầu lông",
                    path: "",
                },
                {
                    name: "Giày cầu lông",
                    path: "",
                },
                {
                    name: "Lưới cầu lông",
                    path: "",
                },
            ]
        },
        {
            name: "Bài viết",
            path: ""
        },
        {
            name: "Liên hệ",
            path: ""
        },
    ])
    
    return (
    <>
        <div className='header_top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 header_top_left'>
                        <ul>
                            <li>
                                <AiFillMail />
                                hello @gmail.com
                            </li>
                            <li>
                                Miễn phí ship đơn từ 200.000 đ
                            </li>
                        </ul>
                    </div>
                    <div className='col-6 header_top_right'>
                        <ul>
                            <li><BsFacebook /></li>
                            <li><BsLinkedin /></li>
                            <li><BsInstagram /></li>
                            <li><BsTwitter /></li>
                            <li><BsFillPersonFill />
                            <span>Đăng Nhập</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-3'>
                    <div className='header_logo'>
                        <h1>Smash Shop</h1>
                    </div>
                </div>
                <div className='col-xl-6'>
                    <div className='header_menu'>
                        <ul>
                            {menus?.map((menu,menuKey)=>(
                                    <li key={menuKey} className={menuKey === 0 ? "active": ""}>                                        <Link to ={menu?.path}>: 
                                            {menu?.name}
                                        </Link>
                                    </li>
                                ))}
                            {/* <li>
                                
                                <ul>
                                    <li>Vợt cầu lông</li>
                                    <li>Vợt cầu lông</li>
                                    <li>Vợt cầu lông</li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className='col-xl-3'>
                    <div className='header_cart'>
                        <div className='header_cart_price'>
                            <span>
                                100 đ
                            </span>
                        </div>
                        <ul>
                            <li>
                                <Link to ='#'>
                                <AiOutlineShoppingCart /> <span>5</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default memo(Header);