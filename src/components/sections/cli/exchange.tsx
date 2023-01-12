
import { FC, useState, useEffect } from 'react';
import HowCurrentSelector from "../../wizards/HowCurrencySelector";
import Input from '../../wizards/Input';
import Button from '../../wizards/Button';
import { howCurrencyTypes } from '../../../config/constant';
import { howCurrencyTypeInterface } from '../../interface';
import swap from "../../../assets/images/swap.png";

const Exchange: FC = function () {
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
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex flex-col mb-2">
                    <h2 className="text-5xl text-center text-white font-bold">Exchange BTC to ETH</h2>
                    <p className=" text-base font-light text-slate-400 text-center">Fast, secure and privacy-oriented BTC to ETH exchange. Mixer BTC to ETH at the best exchange rate with Mixer.</p>
                </div>
                <div className="">

                </div>

                <div className="w-full flex ">
                <div className='w-full flex flex-col justify-center items-center'>
                        <div className='w-full flex max-lg:flex-col  bg-slate-800 rounded-xl'>    
                            <div className='w-1/2 bg-slate-700 rounded-l-xl max-lg:w-full'>   
                                <div className='px-9 py-9 '>
                                    <HowCurrentSelector type={typeIn} setType={(e: howCurrencyTypeInterface) => setTypeIn(e)} typeOut={typeOut} label="Send: " />
                                </div>
                            </div>
                        <button className=' mt-12 w-10 h-10 transition-colors p-2.5 rounded-full bg-primary hover:bg-warning' onClick={() => swapHandle()}>
                            <img className={`transition-all w-[24px] h-[24px] ${toggleSwap ? 'rotate-180' : ''}`} src={swap} alt='swap' />
                        </button>
                            <div className='w-1/2 bg-slate-800 rounded-r-xl max-lg:w-full'>
                                <div className='px-9 py-9'>    
                                    <HowCurrentSelector type={typeOut} setType={(e: howCurrencyTypeInterface) => setTypeOut(e)} typeOut={typeIn} label="Receive: " />
                                    <div className='mt-6 mb-6'>
                                        <p className='text-textDarkPrimary text-left font-light mb-2'>{`Receiving Wallet (${typeOut.name}) Address:`}</p>
                                        <Input value={''} className='mb-2' placeholder={`Receiving Wallet (${typeOut.name}) Address:`} />
                                        <p className='text-textDarkPrimary text-left font-light text-sm mb-2'>*Only send from wallets. Transactions sent from a Smart Contract are not accepted.</p>
                                    </div>
                                    <Button text='Swap Now' onClick={() => {}}  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Exchange

 