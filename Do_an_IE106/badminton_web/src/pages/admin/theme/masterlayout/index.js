import {memo} from 'react'
import Footer from '../../../common/footer';
import { ROUTERS } from '../../../../utils/router';
import { useLocation } from 'react-router-dom';
const MasterAdlayout = ({children, ...props}) =>{
    const location = useLocation();
    const isLoginRouters = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN);

    return  (
    <div {...props}>
        {children}
    {!isLoginRouters && <Footer/>}
    </div>
    );
};

export default memo(MasterAdlayout);