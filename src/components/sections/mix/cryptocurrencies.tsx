
import { FC, useState, useEffect } from 'react';
import HowCurrentSelector from "../../wizards/HowCurrencySelector";
import Button from '../../wizards/Button';
import { howCurrencyTypes } from '../../../config/constant';
import { howCurrencyTypeInterface } from '../../interface';
import swap from "../../../assets/images/swap.png";

const Cryptocurrencies: FC = function () {
    const [toggleSwap, setToggleSwap] = useState(true);
    const [typeIn, setTypeIn] = useState(howCurrencyTypes[0] as howCurrencyTypeInterface);
    const [typeOut, setTypeOut] = useState(howCurrencyTypes[1] as howCurrencyTypeInterface);

    const swapHandle = () => {
        setToggleSwap(!toggleSwap);
    }

    useEffect(() => {
    }, [typeIn, typeOut])

    return (
        <div className="container">
            <div className="w-full flex flex-col items-center justify-center mb-20">
                <div className="w-full flex flex-col mb-10">
                    <h2 className="text-5xl text-center text-white font-bold"><span className=' text-purple-700'>350+ </span> Crypto Currencies Instantly</h2>
                </div>
                <div className="w-full flex flex-col">
                    <div className='mb-2 w-full flex flex-col justify-center items-center rounded-lg bg-slate-800 '>
                        <div className='w-full flex max-lg:flex-col '>    
                            <div className=''></div>    
                                <div className='px-9 py-9 w-1/2 rounded-l-xl max-lg:w-full'>
                                    <HowCurrentSelector type={typeIn} setType={(e: howCurrencyTypeInterface) => setTypeIn(e)} typeOut={typeOut} label="Send: " />
                                    <p className='text-slate-500 font-normal text-left mt-3'>Minimum amount 0.002 BTC</p>
                                </div>
                                <button className=' mt-12 w-10 h-10 rotate-90 transition-colors p-2.5 rounded-full bg-primary hover:bg-warning' onClick={() => swapHandle()}>
                                    <img className={`transition-all w-[24px] h-[24px] ${toggleSwap ? 'rotate-180' : ''}`} src={swap} alt='swap' />
                                </button>
                                <div className='px-9 py-9 w-1/2 rounded-r-xl max-lg:w-full'>    
                                    <HowCurrentSelector type={typeOut} setType={(e: howCurrencyTypeInterface) => setTypeOut(e)} typeOut={typeIn} label="Receive: " />                                   
                                    <p className='text-slate-400 font-normal text-left mt-3'>1 BTC ≈ 13.858684 ETH</p>
                                </div>
                        </div>
                        <div className='w-[70%] mb-8'>
                            <Button text='Mixer Now' onClick={() => {}}  />
                        </div>
                    </div>
                    <p className='text-slate-300 text-left font-normal'>By clicking Exchange you agree with Terms of Use and Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}
export default Cryptocurrencies

 
                            