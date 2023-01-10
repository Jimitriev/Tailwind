import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/common/Footer';

import Header from "../components/common/Header"

const DefaultLayout: FC = () => {
    const location  = useLocation();

    return (
        <div className='w-full bg-pageGradient'>
            <Header home={location.pathname == '/'} />
            <div className='w-full'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout;