import {memo} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import cat1Img from "/assets/user/images/categories/cat-1.webp"
import "./style.scss";

const HomePage = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
            </Carousel>
        </div>
    </>
    )
};

export default memo(HomePage);