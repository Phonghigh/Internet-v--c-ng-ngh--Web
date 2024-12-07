import {memo} from 'react'
import "./style.scss"
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () =>{
    return (
        <div className='header_top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>Trai</div>
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
    );
};

export default memo(Header);