import { FC } from 'react'
import icon1 from '../../../assets/images/currency/icon1.png'
import icon2 from '../../../assets/images/currency/icon2.png'
import icon3 from '../../../assets/images/currency/icon3.png'
import edge from '../../../assets/images/currency/edge.png'
 const Private: FC = function () {
    return(
        <div className="container">
            <div className="w-full pb-16">
                <div className="w-full flex justify-between max-lg:flex-col">
                    <div className="w-[32%] rounded-lg  bg-[#171735]  mt-6 pb-7 max-lg:w-full">
                        <div className='w-full flex justify-end'>
                            <div className='w-[55%] flex justify-between items-end'>
                                <img className='pb-5' src={icon1} alt='icon1'/>
                                <div className=''>
                                    <img className='w-35 ' src={edge} alt='edge'/>
                                    {/* <p className='text-white text-lg rotate-45'>Any amount</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-centerpx-7 pb-7">
                            <h4 className='text-2xl text-3 text-white font-semibold text-center'>No limitsNo limits</h4>
                            <p className='text-lg font-normal text-slate-500 text-center'>We do not have maximum limits, which allows everyone to exchange any amount of cryptocurrencies</p>
                        </div>
                    </div>
                    <div className="w-[32%] rounded-lg bg-[#171735] mt-6 pb-7 max-lg:w-full">
                        <div className='w-full flex justify-end'>
                            <div className='w-[55%] flex justify-between items-end'>
                                <img className='pb-5' src={icon2} alt='icon2'/>
                                <div className=''>
                                    <img className='w-35 ' src={edge} alt='edge'/>
                                    {/* <p className='text-white text-lg rotate-45'>Any amount</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#171735] px-7 pb-7">
                            <h4 className='text-2xl text-3 text-white font-semibold text-center'>Private & Secure</h4>
                            <p className='text-lg font-normal text-slate-500 text-center'>We do not have maximum limits, which allows everyone to exchange any amount of cryptocurrencies</p>
                        </div>
                    </div>
                    <div className="w-[32%] rounded-lg bg-[#171735] mt-6 pb-7 max-lg:w-full">
                        <div className='w-full flex justify-end'>
                            <div className='w-[55%] flex justify-between items-end'>
                                <img className='pb-5' src={icon3} alt='icon3'/>
                                <div className=''>
                                    <img className='w-35 ' src={edge} alt='edge'/>
                                    {/* <p className='text-white text-lg rotate-45'>No KYC</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#171735] px-7 pb-7">
                            <h4 className='text-2xl text-3 text-white font-semibold text-center'>Fixed rate</h4>
                            <p className='text-lg font-normal text-slate-500 text-center'>We do not have maximum limits, which allows everyone to exchange any amount of cryptocurrencies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    )
 }
 export default Private