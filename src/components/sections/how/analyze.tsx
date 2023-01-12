import BTC from "../../../assets/images/currency/BTC.png";
import WETH from "../../../assets/images/currency/WETH.png";
import LTC from "../../../assets/images/currency/LTC.png";
import React, { FC } from "react";
const Analyze : FC = function(){
    return (
        <div className="container">
            <div className="w-full pb-16 justify-center items-center flex flex-col">
                <h3 className="text-3xl mb-8 text-white font-medium ">Analyze trending cryptocurrencies in real time</h3>
                <div className="w-full flex justify-between max-lg:flex-col">
                    <div className="w-[32%] rounded-lg bg-[#171735] mt-6 max-lg:w-full">
                        <div className='px-6 py-6'>
                            <div className='w-full flex justify-between mb-12'>
                                <h4 className="text-white text-medium font-semibold text-4xl">Bitcoin</h4>
                                <img src={BTC} alt='Beatcoin' className="w-16 h-16"/>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xl text-white">+ 2.396<br/> <span className=" text-lg text-[#7F7FAA] font-normal">24 hours change</span></p>
                                <p className="text-2xl text-[#7B69F8]">Exchange now→</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[32%] rounded-lg bg-[#171735] mt-6 max-lg:w-full">
                        <div className='px-6 py-6'>
                            <div className='w-full flex justify-between mb-12'>
                                <h4 className="text-white text-medium font-semibold text-4xl">Ethereum</h4>
                                <img src={WETH} alt='Ethereum' className="w-16 h-16"/>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xl text-white">+ 1.544<br/> <span className=" text-lg text-[#7F7FAA] font-normal">24 hours change</span></p>
                                <p className="text-2xl text-[#7B69F8]">Exchange now→</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[32%] rounded-lg bg-[#171735] mt-6 max-lg:w-full">
                        <div className='px-6 py-6'>
                            <div className='w-full flex justify-between mb-12'>
                                <h4 className="text-white text-medium font-semibold text-4xl">Litecoin</h4>
                                <img src={LTC} alt='Ethereum' className="w-16 h-16"/>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xl text-white">+ 0.128<br/> <span className=" text-lg text-[#7F7FAA] font-normal">24 hours change</span></p>
                                <p className="text-2xl text-[#7B69F8]">Exchange now→</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default Analyze
                            