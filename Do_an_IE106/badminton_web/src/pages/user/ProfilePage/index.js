import {memo} from 'react'
import Dashboard from '../../../component/ProfilePages/Dashboard';

const ProPage = () =>{
    return (
        <div className='container'>
        <Dashboard />
        </div>
    )
};

export default memo(ProPage);