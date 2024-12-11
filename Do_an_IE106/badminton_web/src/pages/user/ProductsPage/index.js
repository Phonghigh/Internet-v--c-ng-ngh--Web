import {memo} from 'react'
import BreadCrumb from '../theme/breadCrumb';
import { Link } from 'react-router-dom';
import "./style.scss"
import { categories } from '../theme/header';
import { ROUTERS } from '../../../utils/router';
import feature1Img from "../../../assets/user/images/feature/feature-1.jpg";
import feature2Img from "../../../assets/user/images/feature/feature-2.jpg";
import feature3Img from "../../../assets/user/images/feature/feature-3.jpg";
import banner1Img from "../../../assets/user/images/feature/banner-1.webp";
import banner2Img from "../../../assets/user/images/feature/banner-2.webp";
import feature4Img from "../../../assets/user/images/feature/feature-4.webp";
import feature5Img from "../../../assets/user/images/feature/feature-5.webp";
import feature6Img from "../../../assets/user/images/feature/feature-6.webp";
import feature7Img from "../../../assets/user/images/feature/feature-7.webp";
import feature8Img from "../../../assets/user/images/feature/feature-8.webp";
import feature9Img from "../../../assets/user/images/feature/feature-9.webp";
import feature10Img from "../../../assets/user/images/feature/feature-10.webp";
import feature11Img from "../../../assets/user/images/feature/feature-11.webp";
import feature12Img from "../../../assets/user/images/feature/feature-12.webp";
import feature13Img from "../../../assets/user/images/feature/feature-13.webp";
import feature14Img from "../../../assets/user/images/feature/14.webp";
import ProductCard from '../../../component/ProductCard';
const ProductsPage = () =>{

    const sorts =[
        "Giá thấp đến cao",
        "Giá cao đến thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá",
    ];

    const products =[
            {
                img: feature1Img,
                name: "LI-NING AXFORCE BLAST",
                price: 2000000,
            },
            {
                img: feature2Img,
                name: "LI-NING JIMMY BUTLER 2 HALO",
                price: 1000000,
            },
            {
                img: feature3Img,
                name: "LI-NING NO.3 BOOST STRING",
                price: 150000,
            },
            {
                img: feature4Img,
                name: "LI-NING NO.4 BOOST STRING",
                price: 250000,
            },
            {
                img: feature5Img,
                name: "Vợt Cầu Lông Yonex Nanoflare 1000Z Trắng",
                price: 1500000,
            },
            {
                img: feature6Img,
                name: "Set vợt cầu lông Lining Halbertec 9000 Limited - Olympic Paris 2024",
                price: 1500000,
            },
            {
                img: feature7Img,
                name: "Quấn cán Yonex xịn AC130-3EX (3in1) chính hãng",
                price: 200000,
            },
            {
                img: feature8Img,
                name: "Quấn cán Yonex xịn AC149-15 EX (1 cuộn) chính hãng",
                price: 850000,
            },
    ]

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
                </div>
                    <div className='col-lg-9'>
                        <div className='row'>
                            { products.map((item,key) =>(
                                <div className='col-lg-3 col-md-4' >
                                    <ProductCard name={item.name} img={item.img} price={item.price} />
                                </div>
                            ))}
                        </div>
                    </div>
            </div>

        </div>
    </>
    );
};

export default memo(ProductsPage);