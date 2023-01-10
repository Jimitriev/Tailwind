import { FC, useState, useEffect } from 'react';

import HowCurrentSelector from "../../wizards/HowCurrencySelector";
import Input from '../../wizards/Input';
import Button from '../../wizards/Button';

import { howCurrencyTypes } from '../../../config/constant';
import { howCurrencyTypeInterface } from '../../interface';
import swap from "../../../assets/images/swap.png";

 const Createorder: FC = function () {
    const [toggleSwap, setToggleSwap] = useState(true);
    const [typeIn, setTypeIn] = useState(howCurrencyTypes[0] as howCurrencyTypeInterface);
    const [typeOut, setTypeOut] = useState(howCurrencyTypes[1] as howCurrencyTypeInterface);

    const swapHandle = () => {
        setToggleSwap(!toggleSwap);
    }

    useEffect(() => {
    }, [typeIn, typeOut])

    return(
        <div className="container">
            <div className='w-full border-b-2 border-dark-200 flex justify-between py-10'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h5 className='text-primary text-xl font-medium mb-4'>01. Step</h5>
                    <h2 className='text-5xl font-semibold text-white mb-6'>Create the order</h2>
                    <p className='text-textDarkPrimary font-light mb-6'>For example, let's Mixer Bitcoin to Ethereum. In the "You Send" field, choose "BTC" from the drop-down menu and type the amount of coins you would like to exchange. Then, in the "You Get" field, select "ETH". After that, the "You Get" field will automatically calculate the amount you will receive. Then click the "Exchange" button.</p>
                </div>
                <div className='w-[600px] flex flex-col justify-center items-center rounded-lg bg-[#64618742]'>
                    <div className='w-full flex flex-col py-6 px-10 '>
                        <div className='w-full relative pb-6'>
                            <HowCurrentSelector type={typeIn} setType={(e: howCurrencyTypeInterface) => setTypeIn(e)} typeOut={typeOut} label="Send: " />
                            <button className='z-10 absolute -bottom-2 left-[calc(50%-22px)] transition-colors p-2.5 rounded-full bg-primary hover:bg-warning' onClick={() => swapHandle()}>
                                <img className={`transition-all w-[24px] h-[24px] ${toggleSwap ? 'rotate-180' : ''}`} src={swap} alt='swap' />
                            </button>
                        </div>
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
    )
 }
 export default Createorder