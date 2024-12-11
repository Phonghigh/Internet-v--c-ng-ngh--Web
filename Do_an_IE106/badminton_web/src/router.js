import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/user/homePage";
import ProPage  from "./pages/user/ProfilePage"
import Masterlayout from "./pages/user/theme/masterlayout";
import ProductsPage from "./pages/user/ProductsPage";

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