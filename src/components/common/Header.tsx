import { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import FullLogo from '../../assets/images/logo-mixer.png';

type propType = {
    home: Boolean
}

const Header = (props: propType) => {
    return (
        <header className='w-full flex justify-around'>
            <div className='container flex relative'>
                <div className='z-0 absolute -left-[100px] -top-[150px] w-[400px] h-[400px] bg-[#8F8FDC] blur-[140px]'></div>
                <div className='w-full flex justify-between z-10'>
                    {
                        props.home ? (
                            <div className='logo w-[170px] h-[100px] relative'>
                                <Link className='w-[300px] absolute left-0 top-2' to={'/'}>
                                    <img className='w-full' src={FullLogo} alt='logo' />
                                </Link>
                            </div>
                        ) : (
                            <div className='logo w-[170px]'>
                                <Link to={'/'}>
                                    <img className='w-full' src={Logo} alt='logo' />
                                </Link>
                            </div>
                        )
                    }
                    <div className='flex items-center'>
                        <Link className='text-white ml-12 font-medium hover:text-info transition-colors' to={'/'}>Home</Link>
                        <Link className='text-white ml-12 font-medium hover:text-info transition-colors' to={'/mix'}>Mix</Link>
                        <Link className='text-white ml-12 font-medium hover:text-info transition-colors' to={'/works'}>How it works</Link>
                        <Link className='text-white ml-12 font-medium hover:text-info transition-colors' to={'/cli'}>CLI</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;