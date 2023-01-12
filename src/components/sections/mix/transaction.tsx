import { FC } from "react";
import WETH from "../../../assets/images/currency/WETH.png";
import USDT from "../../../assets/images/currency/USDT.png";
import ADA from "../../../assets/images/currency/ADA.png";
import BTC from "../../../assets/images/currency/BTC.png";
import triangle from "../../../assets/images/platform/triangle.png";
import direction from "../../../assets/images/currency/direction.png";
import Button from "../../wizards/Button";

const Transaction: FC = function (){
    return (
        <div className="container">
            <div className="w-full pb-16 flex flex-col justify-between items-center">
                <div className="flex flex-col items-center text-center mb-10">
                    <h3 className="text-white text-5xl font-medium ">Trending Exchange Pairs</h3>
                    <p className="font-medium text-2xl text-[#9586FC]">Analyze trending cryptocurrency exchange pairs in real time</p>
                </div>
                <div className="w-full flex">
                    <div className="w-full flex-col items-center justify-between px-4">
                        <div className="bg-[#101127] w-full flex justify-between py-4 px-4 rounded-lg">
                            <p className="text-white text-xl text-left w-1/3 ">Coin</p>
                            <p className="text-white text-xl text-left w-1/4">Amount</p>
                            <p className="text-white text-xl">to</p>
                            <p className="text-white text-xl text-left w-1/3">Coin</p>
                            <p className="text-white text-xl text-left w-1/4">Amount</p>
                            <p className="text-white text-xl text-right">Time</p>
                            
                        </div>
                        <div className="flex justify-between py-4 border-b-2 border-indigo-500 px-4">
                            <div className="flex w-[20%] h-10">
                                <img src={USDT} alt='USTD'/>
                                <p className="text-white text-xl text-left">TetherUS(USDT)</p>
                            </div>
                            <p className="text-[#FEB966] w-[20%] text-left text-xl">0.00005879 BTC</p>
                            <div className="">
                                <img src={direction} alt='direction button'/>
                            </div>  
                            <div className="flex w-[20%] h-10">
                                <img src={BTC} alt='BTC'/>
                                <p className="text-white text-xl text-left">Bitcoin(BTC)</p>
                            </div>
                            <p className="text-[#FEB966] w-[20%] text-left text-xl">0.0001 BTC</p>
                            <div className='flex justify-end items-center' >
                                <Button text='Just' className="w-20 bg-[#1E2056]" onClick={() => {}}  />
                            </div>  
                        </div>
                        <div className="flex justify-between py-4 border-b-2 border-indigo-500 px-4">
                            <div className="flex w-[20%] h-10">
                                <img src={BTC} alt='BTC'/>
                                <p className="text-white text-xl text-left">Bitcoin(BTC) </p>
                            </div>
                            <p className="text-[#FEB966] w-[20%] text-left text-xl">13.570947 ETH</p>
                            <div className="">
                                <img src={direction} alt='direction button'/>
                            </div>  
                            <div className="flex w-[20%] h-10">
                                <img src={WETH} alt='BTC'/>
                                <p className="text-white text-xl text-left">Ethereum(ETH)</p>
                            </div>
                            <p className="text-[#FEB966] w-[20%] text-left text-xl">0.00083417  ETH</p>
                            <div className='flex justify-end items-center' >
                                <Button text='3 min ago' className="bg-[#1E2056] w-20" onClick={() => {}}  />
                            </div>  
                        </div>
                        <div className="flex justify-between py-4 border-b-2 border-indigo-500 px-4">
                            <div className="flex w-[20%] h-10">
                                <img src={USDT} alt='USDT'/>
                                <p className="text-white text-xl text-left">TetherUS(USDT) </p>
                            </div>
                            <p className="text-[#FEB966] w-[20%] text-left text-xl">0.00083417 ETH</p>
                            <div className="">
                                <img src={direction} alt='direction button'/>
                            </div>  
                            <div className="flex w-[20%] h-10">
                                <img src={WETH} alt='BTC'/>
                                <p className="text-white text-xl text-left">Ethereum(ETH)</p>
                            </div>
                            <p className="text-[#FEB966] w-[20%] text-left text-xl">0.0 ETH</p>
                            <div className='flex justify-end items-center' >
                                <Button text='' className="bg-[#1E2056] w-20" onClick={() => {}}  />
                            </div> 
                        </div>
                        <div className="flex justify-between py-4 border-b-2 border-indigo-500 px-4">
                            <div className="flex w-[20%] h-10">
                                <img src={BTC} alt='BTC'/>
                                <p className="text-white text-xl text-left">Bitcoin(BTC) </p>
                            </div>
                            <p className="text-[#FEB966] w-[20%] text-left text-xl">51443.4895538 ADA</p>
                            <div className="">
                                <img src={direction} alt='direction button'/>
                            </div>  
                            <div className="flex w-[20%] h-10">
                                <img src={ADA} alt='ADA'/>
                                <p className="text-white text-xl text-left">Cardano(ADA)</p>
                            </div>
                            <p className="text-[#FEB966] w-[20%] text-left text-xl">0.3 ADA</p>
                            <div className='flex justify-end items-center' >
                                <Button text='2022/12/12' className="bg-[#1E2056] w-20" onClick={() => {}}  />
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
export default Transaction


                            
                            
                            // <p className="text-[#FEB966] w-[20%] text-left text-xl">13.570947 ETH</p>
                            // <p className="text-[#FEB966] w-[20%] text-left text-xl">0.001 ETH</p>
                            // <p className="text-[#FEB966] w-[20%] text-left text-xl">0.00083417 ETH</p>
                            // <p className="text-[#FEB966] w-[20%] text-left text-xl">0.0 ETH</p>
                            // <p className="text-[#FEB966] w-[20%] text-left text-xl">51443.4895538 ADA</p>
                            // <p className="text-[#FEB966] w-[20%] text-left text-xl">0.3 ADA</p>