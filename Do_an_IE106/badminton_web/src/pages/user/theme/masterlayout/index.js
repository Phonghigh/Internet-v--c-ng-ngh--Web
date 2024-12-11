import {memo} from 'react'
import Header from '../header';
import Footer from '../../../common/footer';
import { useLocation } from 'react-router-dom';
import { ROUTERS } from '../../../../utils/router';
import { TotalPriceProvider } from '../../../../component/TotalPrice';


const Masterlayout = ({children, ...props}) =>{
    const location = useLocation();
    const isLoginRouters = location.pathname.startsWith(ROUTERS.USER.LOGIN);

    return  (
    <TotalPriceProvider>
        <div {...props}>
            <Header />
            {children}
            {!isLoginRouters && <Footer/>}
        </div>
    </TotalPriceProvider>
    );
};

export default memo(Masterlayout);