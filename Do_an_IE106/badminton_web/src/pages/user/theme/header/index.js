import {memo, useEffect} from 'react'
import "./style.scss"
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail, AiOutlineDownCircle, AiOutlinePhone, AiOutlineUpCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { Link,useLocation } from 'react-router-dom';
import { ROUTERS } from '../../../../utils/router';
import React, { useState } from 'react';
import { formatter } from '../../../../utils/formatter';
import { BiUser } from 'react-icons/bi';
import { FaEnvelope } from "react-icons/fa";
import { useTotalPrice } from '../../../../component/TotalPrice';

export const categories =[
    "Vợt cầu lông",
    "Giày cầu lông",
    "Lưới cầu lông",
    "Quấn cán cầu lông",
];

const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const status = sessionStorage.getItem("isLoggedIn");
        if (status === "true") {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
        }, []); // Chạy chỉ một lần khi component mount

        const handleLogin = () => {
        sessionStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true); // Đảm bảo UI được cập nhật
        };

        const handleLogout = () => {
        sessionStorage.setItem("isLoggedIn", "false");
        setIsLoggedIn(false); // Đảm bảo UI được cập nhật
        };

    const location = useLocation();
    const [isHome,setHome] = useState(location.pathname.length <=1);
    const [isShowCategories,setShowCategories] = useState(isHome);
    const [isShowHumberger,setShowHumberger] = useState(false);
    const [menus,setMenus] = useState ([
        {
            name: "TRANG CHỦ",
            path: ROUTERS.USER.HOME
        },
        {
            name: "CỬA HÀNG",
            path: ROUTERS.USER.PRODUCTS
        },
        {
            name: "SẢN PHẨM",
            path: ROUTERS.USER.PRODUCT,
            isShowSubmenu: false,
            child: [
                {
                    name: "Vợt cầu lông",
                    path: ROUTERS.USER.PRODUCT,
                },
                {
                    name: "Giày cầu lông",
                    path: ROUTERS.USER.PRODUCT,
                },
                {
                    name: "Lưới cầu lông",
                    path: ROUTERS.USER.PRODUCT,
                },
                {
                    name: "Quấn cán cầu lông",
                    path: ROUTERS.USER.PRODUCT,
                },
            ]
        },
        {
            name: "BÀI VIẾT",
            path: ROUTERS.USER.ARTICLE,
        },
        {
            name: "LIÊN HỆ",
            path: ROUTERS.USER.CONTACT,
        },
    ]);
    
    const { totalPrice, updateTotalPrice } = useTotalPrice(); // Lấy totalPrice từ context
    const [storedTotalPrice, setStoredTotalPrice] = useState(0);


    useEffect(() => {
        const sessionTotalPrice = sessionStorage.getItem('totalPrice');
        if (storedTotalPrice) {
            setStoredTotalPrice(Number(sessionTotalPrice));
            updateTotalPrice(Number(sessionTotalPrice)); // Cập nhật giá trị từ sessionStorage vào context
        }
    }, []);

    useEffect(() => {
        const isHome = location.pathname.length <=1;
        setHome(isHome);
        setShowCategories(isHome);
    }, [location.pathname.length]);

    return (
    <>
        <div className={`humberger_menu_overlay ${isShowHumberger ? "active":""}`}>

        </div>

        <div className={`humberger_menu_wrapper ${isShowHumberger ? "show":""}`}>
            <div className='header_logo'>
                <h1>Smash Shop</h1>
            </div>
            <div className='humberger_menu_cart'>
                <ul>
                    <li>
                        <Link to={ROUTERS.USER.SHOPPINGCART}>
                            <AiOutlineShoppingCart /> <span>4</span>
                        </Link>
                        
                    </li>
                </ul>
                <div className='header_cart_price'>
                    Giỏ hàng: <span>{formatter(1001230)}</span>
                </div>
            </div>
            <div className='humberger_menu_widget'>
                <div className='header_top_right_auth'>
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>
                            <BiUser /> Đăng xuất
                        </button>
                    ) : (
                        <Link to="/login">
                            <BiUser /> Đăng nhập
                        </Link>
                    )}
                </div>
            </div>
            <div className='humberger_menu_nav'>
                <ul>
                    {menus?.map((menu, menuKey) =>(
                        <li key={menuKey} to ={menu.path}>
                            <Link  to= {ROUTERS.USER.PRODUCT} onClick={() =>{
                                const newMenus = [...menus];
                                newMenus[menuKey].isShowSubmenu = !newMenus[menuKey].isShowSubmenu;
                                setMenus(newMenus);
                            }}>
                            {menu.name}
                            {menu.child && (menu.isShowSubmenu? (<AiOutlineDownCircle></AiOutlineDownCircle>) : (<AiOutlineUpCircle></AiOutlineUpCircle>) )}
                            </Link>
                            {menu.child && (
                                <ul className={`header_menu_dropdown ${menu.isShowSubmenu ? "show_submenu" : ""}`}>
                                    {menu.child.map((childItem,childKey)=>(
                                        <li key={`${menuKey}-${childKey}`}>
                                            <Link to={childItem.path}>{childItem.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='header_top_right_social'>
                <Link to={""}><BsFacebook /></Link>
                <Link to={""}><BsLinkedin /></Link>
                <Link to={""}><BsInstagram /></Link>
                <Link to={""}><BsTwitter /></Link>
                <Link to={""}><BsFillPersonFill /></Link>
            </div>
            <div className='humberger_menu_contact'>
                <ul>
                    <li>
                        <FaEnvelope /> Smash@gmail.com

                    </li>
                    <li>
                        Miễn phí đơn từ {formatter(200000)}
                    </li>
                </ul>
            </div>
        </div>


        <div className='header_top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 header_top_left'>
                        <ul>
                            <li>
                                <AiFillMail />
                                hello @gmail.com
                            </li>x``
                            <li>
                                Miễn phí ship đơn từ {formatter(200000)}
                            </li>
                        </ul>
                    </div>
                    <div className='col-6 header_top_right'>
                        <ul>
                            <li><BsFacebook /></li>
                            <li><BsLinkedin /></li>
                            <li><BsInstagram /></li>
                            <li><BsTwitter /></li>
                            <li>
                            {isLoggedIn ? (
                                <Link onClick={handleLogout}>
                                    <BiUser /> Đăng xuất
                                </Link>
                            ) : (
                                <Link to={ROUTERS.USER.LOGIN}>
                                    <BiUser /> Đăng nhập
                                </Link>
                            )}
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row tablet'>
                <div className='col-xl-3'>
                    <div className='header_logo'>
                        <h1>Smash Shop</h1>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='header_menu'>
                        <ul>
                        {menus?.map((menu, menuKey) => {
                            const isActive = location.pathname === menu.path; // Kiểm tra menu hiện tại có đang được active không
                            return (
                                <li key={menuKey} className={isActive ? "active" : ""}>
                                <Link to={menu?.path}>{menu?.name}</Link>
                                {menu.child && (
                                    <ul className="header_menu_dropdown">
                                    {menu.child.map((childItem, childKey) => (
                                        <li key={`${menuKey}-${childKey}`}>
                                        <Link to={childItem.path}>{childItem.name}</Link>
                                        </li>
                                    ))}
                                    </ul>
                                )}
                                </li>
                            );
                            })}
                        </ul>
                    </div>
                </div>
                <div className='col-xl-3'>
                    <div className='header_cart'>
                        <div className='header_cart_price'>
                            <span>
                                {formatter(totalPrice) }
                            </span>
                        </div>
                        <ul>
                            <li>
                                <Link to ={ROUTERS.USER.SHOPPINGCART}>
                                <AiOutlineShoppingCart /> <span>4</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='humberger_open'>
                        <AiOutlineMenu onClick={()=>
                            setShowHumberger(!isShowHumberger)}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row hero_categories_container'>
                <div className='col-lg-3 col-md-12 col-xs-12 col-sm-12 hero_categories'>
                    <div className='hero_categories_all' onClick={()=> setShowCategories(!isShowCategories)}>
                        <AiOutlineMenu />
                        Danh sách sản phẩm
                    </div>
                    <ul className={isShowCategories? "": "hidden"}>
                        {/* {
                            categories.map((category,key) =>{
                                <li key={key}>

                                </li>
                            })
                        } */}
                        <li>
                            <Link to={ROUTERS.USER.PRODUCT}>Vợt cầu lông</Link>
                        </li>
                        <li>
                            <Link to={ROUTERS.USER.PRODUCT}>Giày cầu lông</Link>
                        </li>
                        <li>
                            <Link to={ROUTERS.USER.PRODUCT}>Lưới cầu lông</Link>
                        </li>
                        <li>
                            <Link to={ROUTERS.USER.PRODUCT}>Quấn cán cầu lông</Link>
                        </li>
                        
                    </ul>
                </div>
            <div className='col-lg-9 col-xl-12 col-xs-12 col-md-12 col-sm-12 hero_search_container'>
                <div className='hero_search'>
                    <div className='hero_search_form'>
                        <form>
                            <input type="" name='' value='' placeholder='Bạn đang tìm gì'></input>
                            <button type="submit">Tìm Kiếm</button>
                        </form>
                    </div>
                    <div className='hero_search_phone'>
                        <div className='hero_search_phone_icon'>
                            <AiOutlinePhone />
                        </div>
                        <div className='hero_search_phone_text'>
                            <p>0337.803.499</p>
                            <span>Hỗ trợ 24/7</span>
                        </div>
                    </div>
                </div>
                {
                    isHome && (<div className='hero_item'>
                        <div className='hero_text'>
                            <span>Trải nghiệm tuyệt vời</span>
                            <h2>
                                Phong cách<br/>
                                Chất
                            </h2>
                            <p>Bạn gái có thể không có<br />Vợt cầu lông nhất định phải có</p>
                            <Link to={ROUTERS.USER.PRODUCTS} className='primary_btn'>
                                Mua Ngay
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            </div>
        </div>
    </>
    );
};

export default memo(Header);