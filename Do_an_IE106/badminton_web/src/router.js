import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/user/homePage";
import ProPage  from "./pages/user/ProfilePage"
import Masterlayout from "./pages/user/theme/masterlayout";
import ProductsPage from "./pages/user/ProductsPage";
import ProductDetailPage from "./pages/user/ProductPage";
import ShoppingCart from "./pages/user/ShoppingCartPage";
import PaymentPage from "./pages/user/PaymentPage";
import ContactPage from "./pages/user/ContactPage";
import Article from "./pages/user/Article";

const renderUserRouter =() =>{
    const userRouters =[
        {
            path: ROUTERS.USER.HOME,
            component: HomePage
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: ProPage
        },
        {
            path: ROUTERS.USER.PRODUCTS,
            component: ProductsPage
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: ProductDetailPage
        },
        {
            path: ROUTERS.USER.SHOPPINGCART,
            component: ShoppingCart
        },
        {
            path: ROUTERS.USER.PAYMENT,
            component: PaymentPage
        },
        {
            path: ROUTERS.USER.CONTACT,
            component: ContactPage
        },
        {
            path: ROUTERS.USER.ARTICLE,
            component: Article
        },
    ];

    return(
        <Masterlayout>
            <Routes>{
                    userRouters.map((item, key) => 
                    (<Route key ={key} path ={item.path} element={<item.component/>} />))
                }
            </Routes>
        </Masterlayout>
    );
};

const RouterCustom =() => {
    return renderUserRouter();
}

export default RouterCustom;