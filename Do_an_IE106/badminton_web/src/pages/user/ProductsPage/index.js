import {memo} from 'react'
import BreadCrumb from '../theme/breadCrumb';
import { Link } from 'react-router-dom';
import "./style.scss"
import { categories } from '../theme/header';
import { ROUTERS } from '../../../utils/router';

const ProductsPage = () =>{

    const sorts =[
        "Giá thấp đến cao",
        "Giá cao đến thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá",
    ];

    return (
    <>
        <BreadCrumb name="Danh Sách Sản Phẩm" />
        <div className='container'>
            <div className='row'>
                <div className='col-log-3'>
                    <div className='slidebar'>
                        <div className='slidebar_item'>
                            <h2>Tìm Kiếm</h2>
                            <input type='text'></input>
                        </div>
                        <div className='slidebar_item'>
                            <h2>Mức Giá</h2>
                            <div className='price_range_wrap'>
                                <div>
                                    <p>Từ:</p>
                                    <input type='number' min={0}></input>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Đến:</p>
                                    <input type='number' min={0}></input>
                                </div>
                            </div>
                        </div>
                        <div className='slidebar_item'>
                            <h2>Sắp Xếp</h2>
                            <div className='tags'>
                                {sorts.map((item,key)=>(
                                    <div className={`tag ${key ===0? "active" : ""}`} key={key}>
                                    {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='slidebar_item'>
                            <h2>Thể loại khác</h2>
                            <ul>
                                {categories.map((name,key)=>(
                                    <li key={key}>
                                        <Link to={ROUTERS.USER.PRODUCTS}>{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-9'>Danh sách</div>
                </div>
            </div>

        </div>
    </>
    );
};

export default memo(ProductsPage);