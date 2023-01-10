import { FC, useState, useEffect } from 'react';

import CurrentSelector from "../../wizards/CurrencySelector";
import Input from '../../wizards/Input';
import Button from '../../wizards/Button';

import { currencyTypes } from '../../../config/constant';
import { currencyTypeInterface } from '../../interface';
import swap from "../../../assets/images/swap.png";

const MixSection: FC = () => {
    const [toggleSwap, setToggleSwap] = useState(true);
    const [typeIn, setTypeIn] = useState(currencyTypes[0] as currencyTypeInterface);
    const [typeOut, setTypeOut] = useState(currencyTypes[1] as currencyTypeInterface);

    const swapHandle = () => {
        setToggleSwap(!toggleSwap);
    }

    useEffect(() => {
    }, [typeIn, typeOut])

    return (
        <div className="w-full flex flex-col items-center py-16 bg-homeMix">
            <div className="container flex flex-col items-center">
                <h5 className='text-primary text-center text-xl mb-4'>Exchange cryptocurrency</h5>
                <h2 className='text-white font-semibold leading-[1] text-center text-5xl mb-6'>Raul Mixer - Free</h2>
                <p className='text-textDarkPrimary font-light text-center mb-4'>Anonymous, Secure, Not KYC, Free.</p>

                <div className='w-[600px] flex flex-col'>
                    <div className='w-full relative pb-6'>
                        <CurrentSelector type={typeIn} setType={(e: currencyTypeInterface) => setTypeIn(e)} typeOut={typeOut} label="Send: " />
                        <button className='z-10 absolute -bottom-2 left-[calc(50%-22px)] transition-colors p-2.5 rounded-full bg-primary hover:bg-warning' onClick={() => swapHandle()}>
                            <img className={`transition-all w-[24px] h-[24px] ${toggleSwap ? 'rotate-180' : ''}`} src={swap} alt='swap' />
                        </button>
                    </div>
                    <CurrentSelector type={typeOut} setType={(e: currencyTypeInterface) => setTypeOut(e)} typeOut={typeIn} label="Receive: " />
                    <div className='mt-6 mb-6'>
                        <p className='text-textDarkPrimary text-left font-light mb-2'>{`Receiving Wallet (${typeOut.name}) Address:`}</p>
                        <Input value={''} className='mb-2' placeholder={`Receiving Wallet (${typeOut.name}) Address:`} />
                        <p className='text-textDarkPrimary text-left font-light text-sm mb-2'>*Only send from wallets. Transactions sent from a Smart Contract are not accepted.</p>
                    </div>
                    <Button text='Swap Now' onClick={() => {}}  />
                </div>
            </div>
        </div>
    )
}

export default MixSection;