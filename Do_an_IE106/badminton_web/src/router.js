import { Routes, Route, useLocation } from "react-router-dom";
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
import LoginPage from "./pages/admin/LoginPage";
import { admin_path } from "./utils/router";
import MasterAdlayout from "./pages/admin/theme/masterlayout";
import LoginPage_User from "./pages/user/LoginPage";

const renderAdminRouter =() =>{
    const adminRouters = [
        {
            path: ROUTERS.ADMIN.LOGIN,
            component: LoginPage
        }
    ];

    return(
        <MasterAdlayout>
            <Routes>{
                    adminRouters.map((item, key) => 
                    (<Route key ={key} path ={item.path} element={<item.component/>} />))
                }
            </Routes>
        </MasterAdlayout >
        
    );
};

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
        {
            path: ROUTERS.USER.LOGIN,
            component: LoginPage_User
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
    const location = useLocation();
    const isAdminRouters = location.pathname.startsWith(admin_path);
    return isAdminRouters? renderAdminRouter() : renderUserRouter();
}

export default RouterCustom;