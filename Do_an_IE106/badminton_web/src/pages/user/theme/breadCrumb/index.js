import {memo} from 'react'
import { ROUTERS } from '../../../../utils/router';
import { Link } from 'react-router-dom';
import "./style.scss"

const BreadCrumb = (props) =>{
    return (
    <div className='breadcrumb'>
        <div className='breadcrumb_text'>
            <h2>SMASH SHOP</h2>
            <div className='breaddrumb_option'>
                <ul>
                    <li className='link'>
                        <Link to = {ROUTERS.USER.HOME}>TRANG CHỦ </Link>
                    </li>
                    <li className='link'>{props.name}</li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default memo(BreadCrumb);