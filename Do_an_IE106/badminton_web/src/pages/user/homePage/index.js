import {memo} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import feature1Img from "../../../assets/user/images/feature/feature-1.jpg"
import feature2Img from "../../../assets/user/images/feature/feature-2.jpg"
import feature3Img from "../../../assets/user/images/feature/feature-3.jpg"
import banner1Img from "../../../assets/user/images/feature/banner-1.webp"
import banner2Img from "../../../assets/user/images/feature/banner-2.webp"
import feature4Img from "../../../assets/user/images/feature/feature-4.webp"
import feature5Img from "../../../assets/user/images/feature/feature-5.webp"
import feature6Img from "../../../assets/user/images/feature/feature-6.webp"
import feature7Img from "../../../assets/user/images/feature/feature-7.webp"
import feature8Img from "../../../assets/user/images/feature/feature-8.webp"
import feature9Img from "../../../assets/user/images/feature/feature-9.webp"
import feature10Img from "../../../assets/user/images/feature/feature-10.webp"
import feature11Img from "../../../assets/user/images/feature/feature-11.webp"
import feature12Img from "../../../assets/user/images/feature/feature-12.webp"
import feature13Img from "../../../assets/user/images/feature/feature-13.webp"
import feature14Img from "../../../assets/user/images/feature/14.webp"
import {formatter} from "../../../utils/formatter.js"


import "./style.scss";
import { Tabs,TabList,TabPanel,Tab } from 'react-tabs';
import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const HomePage = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const featproducts ={
        all: {
            title: "Toàn bộ",
            products: [
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
                {
                    img: feature9Img,
                    name: "Quấn cán vợt cầu lông Yonex AC148-15 (1 cuộn) chính hãng",
                    price: 950000,
                },
                {
                    img: feature10Img,
                    name: "Quấn cán vợt cầu lông Lining GP100-3",
                    price: 90000,
                },
                {
                    img: feature11Img,
                    name: "Quấn cán vợt cầu lông vải",
                    price: 100000,
                },
                {
                    img: feature12Img,
                    name: "Lưới BG-9",
                    price: 200000,
                },
            ],
        },
        racket: {
            title: "Vợt cầu lông",
            products: [
                {
                    img: feature1Img,
                    name: "LI-NING AXFORCE BLAST",
                    price: 2000000,
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
                
            ],
        },
        Accessories: {
            title: "Quấn cán",
            products: [
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
                {
                    img: feature9Img,
                    name: "Quấn cán vợt cầu lông Yonex AC148-15 (1 cuộn) chính hãng",
                    price: 950000,
                },
                {
                    img: feature10Img,
                    name: "Quấn cán vợt cầu lông Lining GP100-3",
                    price: 90000,
                },
                {
                    img: feature11Img,
                    name: "Quấn cán vợt cầu lông vải",
                    price: 100000,
                },
            ],
        },
        strings: {
            title: "Lưới cầu lông",
            products: [
                {
                    img: feature12Img,
                    name: "Lưới BG-9",
                    price: 200000,
                },
                {
                    img: feature13Img,
                    name: "Lưới Victor-shin",
                    price: 150000,
                },
                {
                    img: feature14Img,
                    name: "Lưới Spin control",
                    price: 150000,
                },
                
            ],
        },
    }

    const renderFeatureProduct = (data) => {
        const tablist = [];
        const tabPanels = [];
    
        Object.keys(data).forEach((key, index) => {
            tablist.push(<Tab key={index}>{data[key].title}</Tab>);
            
            // Tạo nội dung cho từng tabPanel
            const tabPanel = [];
            data[key].products.forEach((item, j) =>{
                tabPanel.push(
                <div className='col-lg-3' key={j}>
                    <div className='featured_item'>
                        <div className='featured_item_pic'
                            style={{
                                backgroundImage: `url(${item.img })`,
                            }}
                        >
                            <ul className='featured_item_pic_hover'>
                                <li>
                                    <AiOutlineEye></AiOutlineEye>
                                </li>
                                <li>
                                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                                </li>
                            </ul>
                        </div>
                        <div className='featured_item_text'>
                            <h6>
                                <Link to="" className='featured_item_text_title'>{item.name}</Link>
                            </h6>
                            <h5>{formatter(item.price)}</h5>
                        </div>
                    </div>
                </div>);
            });
            tabPanels.push(tabPanel);
        });
    
        return (
            <Tabs>
                <TabList>{tablist}</TabList>
                {tabPanels.map((content, key) => (
                    <TabPanel key={key}>
                        <div className="row">
                            {content}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        );
    };
    return (
    <>
        <div className='container container_categories_slider'>
            <Carousel responsive={responsive} className='categories_slider'>
                <div className='categories_slider_item' id='item_1'>
                    <p>Vợt cầu lông</p>
                </div>
                <div className='categories_slider_item' id='item_2'>
                    <p>Giày cầu lông</p>
                </div>
                <div className='categories_slider_item' id='item_3'>
                    <p>Quấn cán</p>
                </div>
                <div className='categories_slider_item' id='item_4'>
                    <p>Lưới cầu lông</p>
                </div>
                <div className='categories_slider_item' id='item_5'>
                    <p>Túi cầu lông</p>
                </div>
            </Carousel>
        </div>
        <div className='container'>
            <div className='featured'>
                <div className="section_title">
                    <h2>Sản Phẩm Nổi Bật</h2>
                </div>
                {renderFeatureProduct(featproducts)}
            </div>
        </div>
        <div className='container'>
            <div className='banner'>
                <div className='banner_pic'>
                    <img src={banner1Img} alt='banner'></img>
                </div>
                <div className='banner_pic'>
                    <img src={banner2Img} alt='banner'></img>
                </div>
            </div>
        </div>
    </>
    )
};

export default memo(HomePage);