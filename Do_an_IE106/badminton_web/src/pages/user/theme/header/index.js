import {memo} from 'react'
import "./style.scss"
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";


const Header = () =>{
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
        <div className='row'>
            <div className='col-xl-3'>
            LOGO
            </div>
            <div className='col-xl-6'>
            MENU
            </div>
            <div className='col-xl-3'>
            PHONE
            </div>

        </div>
    </>
    );
};

export default memo(Header);