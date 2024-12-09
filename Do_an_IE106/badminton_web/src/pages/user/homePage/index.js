import {memo} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import feature1Img from "../../../assets/user/images/feature/feature-1.jpg"
import feature2Img from "../../../assets/user/images/feature/feature-2.jpg"
import feature3Img from "../../../assets/user/images/feature/feature-3.jpg"
import "./style.scss";
import { Tabs,TabList,TabPanel,Tab } from 'react-tabs';

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
                
            ],
        },
    }

    const renderFeatureProduct = (data) => {
        const tablist = [];
        const tabPanels = [];
    
        Object.keys(data).forEach((key, index) => {
            tablist.push(<Tab key={index}>{data[key].title}</Tab>);
            
            // Tạo nội dung cho từng tabPanel
            const tabPanel = data[key].products.map((item, j) => (
                <div key={j} className="featured_product_item">
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.price.toLocaleString()} VND</p>
                </div>
            ));
            tabPanels.push(tabPanel);
        });
    
        return (
            <Tabs>
                <TabList>{tablist}</TabList>
                {tabPanels.map((content, key) => (
                    <TabPanel key={key}>
                        <div className="featured_product_container">
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
    </>
    )
};

export default memo(HomePage);