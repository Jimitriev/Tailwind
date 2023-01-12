import { useState, useEffect } from 'react';
import { howCurrencyTypes } from "../../config/constant";
import { howCurrencyTypeInterface } from '../interface';

type propsType = {
    label?: String,
    className?: String,
    type?: howCurrencyTypeInterface,
    setType?: (e: howCurrencyTypeInterface) => void
    amount?: number,
    setAmount?: (e?: any) => void,
    balance?: number,
    typeOut?: howCurrencyTypeInterface
}

const HowCurrentSelector = (props: propsType) => {
    console.log(props.type?.name);
    const [toggle, setToggle] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        document.addEventListener('click', (e: any) => {
            if (!e.target.closest('.currencySelectorDropDownMenu')) {
                setToggle(false);
            }
        })
    }, [])

    const showDropDownHandle = (e: any) => {
        e.stopPropagation();
        setToggle(!toggle);
    }

    const changeAmountHandle = (v: string) => {
        if (props.setAmount) props.setAmount(Number(v));
    }

    const changeTypeHandle = (newType: howCurrencyTypeInterface) => {
        if (props.setType) props.setType(newType);
        setToggle(false)
    }

    return (
        <div className={`bg-input relative rounded px-4 py-2.5 ${props.className} ${toggle ? 'z-20' : ''}`}>
            <div className="w-full flex items-center justify-between mb-2 text-textDarkPrimary">
                <label htmlFor={'input_' + props.type?.name} className="text-textDarkPrimary font-light">{props.label} </label>
                <div className="flex items-center cursor-pointer" onClick={(e) => showDropDownHandle(e)}>
                    <img className="w-[20px] h-[20px] rounded-full mr-2" src={props.type?.logo} alt="currency" />
                    <span className='font-light mr-2'>{props.type?.name}</span>
                    <svg className='relative rotate-90 scale-75' width="11" height="17" viewBox="0 0 11 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill='currentColor' d="M0.910522 2.76611L6.83758 8.70611L0.910522 14.6461L2.73523 16.4708L10.4999 8.70611L2.73523 0.941406L0.910522 2.76611Z" />
                    </svg>
                </div>
            </div>
            <div className="w-full flex items-center justify-between">
                <input id={'input_' + props.type?.name} className="text-[#FFE600] text-xl bg-transparent max-lg:w-1/2" value={props.amount ? props.amount : 0} onChange={(e: any) => changeAmountHandle(e.target.value)} />
                <span className='text-textDarkPrimary font-light'>1 {props.type?.name} = 0 {props.typeOut?.name}</span>
            </div>

            {
                toggle ?
                    <div className='currencySelectorDropDownMenu w-full z-20 absolute left-0 top-[80px] bg-[#201B55] p-1'>
                        <div className='w-full relative flex items-center p-1'>
                            <input className='w-full px-2 py-1 text-textDarkPrimary rounded bg-[#3F3A71]' placeholder='Search' value={search} onChange={(e: any) => setSearch(e.target.value)} />
                            <svg className='absolute right-3' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9873 12.988L17 17.0008" stroke="#7866F8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.02229 15.0446C11.9006 15.0446 15.0446 11.9006 15.0446 8.02229C15.0446 4.14399 11.9006 1 8.02229 1C4.14399 1 1 4.14399 1 8.02229C1 11.9006 4.14399 15.0446 8.02229 15.0446Z" stroke="#7866F8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='w-full overflow-x-hidden overflow-y-auto max-h-[250px] scrollbar-w-[4px] scroll-smooth scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent scrollbar-corner-transparent scrollbar-thumb-rounded-full scrollbar-track-p-2'>
                            {
                                howCurrencyTypes.filter((item: howCurrencyTypeInterface) => {
                                    return !search.length || item.symbol.toLowerCase().indexOf(search.toLowerCase()) !== -1 || item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || item.address.toLowerCase().indexOf(search.toLowerCase()) !== -1
                                }).map((item: howCurrencyTypeInterface, index) => {
                                    return (
                                        <div key={index + "_currency"} className={`w-full flex items-center justify-between cursor-pointer transition-colors hover:bg-primary px-3 py-3 ${howCurrencyTypes.length - 1 !== index ? 'border-b border-[#3B3B77]' : ''}`}
                                            onClick={() => changeTypeHandle(item)}
                                        >
                                            <div className='flex items-center'>
                                                <img className='w-[28px] h-[28px] rounded-full mr-2' src={item.logo} alt={item.name} />
                                                <span className='font-medium text-lg mr-2 text-white'>{item.symbol}</span>
                                                <span className='text-textDarkPrimary'>{item.name}</span>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className='flex flex-col items-end'>
                                                    <h4 className='text-white text-sm'>ERC20</h4>
                                                    <span className='text-textDarkPrimary text-xs'>BNB Beacon Chain (BEP2)</span>
                                                </div>
                                                {
                                                    item.symbol === props.type?.symbol ?
                                                        <div className='flex items-center justify-around ml-2'>
                                                            <svg className='text-[#11D96D]' width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 1L6 11L1 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div> : ''
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {
                                !howCurrencyTypes.filter((item: howCurrencyTypeInterface) => {
                                    return !search.length || item.symbol.toLowerCase().indexOf(search.toLowerCase()) !== -1 || item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || item.address.toLowerCase().indexOf(search.toLowerCase()) !== -1
                                }).length && (
                                    <div className={`w-full flex items-center justify-between transition-colors px-3 py-3`}>
                                        <div className='flex items-center text-textDarkPrimary'>
                                            Coin not found...
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div> : ""
            }
        </div>
    )
}

export default HowCurrentSelector;