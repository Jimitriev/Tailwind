import { FC } from "react";
import WETH from "../../../assets/images/currency/WETH.png";
import USDT from "../../../assets/images/currency/USDT.png";
import ADA from "../../../assets/images/currency/ADA.png";
import BTC from "../../../assets/images/currency/BTC.png";
import triangle from "../../../assets/images/platform/triangle.png";
import circle from "../../../assets/images/platform/circle.png";
import Button from "../../wizards/Button";

const Trending: FC = function (){
    return (
        <div className="container">
            <div className="w-full pb-16 flex flex-col justify-between items-center">
                <div className="flex flex-col items-center text-center mb-10">
                    <h3 className="text-white text-5xl font-medium ">Trending Exchange Pairs</h3>
                    <p className="font-medium text-2xl text-[#9586FC]">Analyze trending cryptocurrency exchange pairs in real time</p>
                </div>
                <div className="w-full flex-col justify-center items-center">
                    <div className="w-full flex-col items-center justify-between px-4 mb-4">
                        <div className="bg-[#101127] w-full flex justify-between py-4 px-4 rounded-lg">
                            <p className="text-white text-xl text-left w-[30%]">Coin</p>
                            <p className="text-white text-xl text-right">to</p>
                            <p className="text-white text-xl text-left w-[30%]">Coin</p>
                            <p className="text-white text-xl text-right">to</p>
                        </div>
                        <div className="flex justify-between py-4 border-b-2 border-indigo-500 px-4">
                            <div className="flex w-[30%] h-10">
                                <img src={USDT} alt='USTD'/>
                                <p className="text-white text-xl text-left">TetherUS(USDT)</p>
                            </div>
                            <div className="">
                                <img src={circle} alt='Circle button'/>
                            </div>  
                            <div className="flex w-[30%] h-10">
                                <img src={BTC} alt='BTC'/>
                                <p className="text-white text-xl text-left">Bitcoin(BTC)</p>
                            </div>
                            <div className="">
                                <img src={triangle} alt='triangle button'/>
                            </div>  
                        </div>
                        <div className="flex justify-between py-4 border-b-2 border-indigo-500 px-4">
                            <div className="flex w-[30%] h-10">
                                <img src={BTC} alt='BTC'/>
                                <p className="text-white text-xl text-left">Bitcoin(BTC) </p>
                            </div>
                            <div className="">
                                <img src={circle} alt='Circle button'/>
                            </div>  
                            <div className="flex w-[30%] h-10">
                                <img src={WETH} alt='BTC'/>
                                <p className="text-white text-xl text-left">Ethereum(ETH)</p>
                            </div>
                            <div className="">
                                <img src={triangle} alt='triangle button'/>
                            </div>  
                        </div>
                        <div className="flex justify-between py-4 border-b-2 border-indigo-500 px-4">
                            <div className="flex w-[30%] h-10">
                                <img src={USDT} alt='USDT'/>
                                <p className="text-white text-xl text-left">TetherUS(USDT) </p>
                            </div>
                            <div className="">
                                <img src={circle} alt='Circle button'/>
                            </div>  
                            <div className="flex w-[30%] h-10">
                                <img src={WETH} alt='BTC'/>
                                <p className="text-white text-xl text-left">Ethereum(ETH)</p>
                            </div>
                            <div className="">
                                <img src={triangle} alt='triangle button'/>
                            </div>  
                        </div>
                        <div className="flex justify-between py-4 border-b-2 border-indigo-500 px-4">
                            <div className="flex w-[30%] h-10">
                                <img src={BTC} alt='BTC'/>
                                <p className="text-white text-xl text-left">Bitcoin(BTC) </p>
                            </div>
                            <div className="">
                                <img src={circle} alt='Circle button'/>
                            </div>  
                            <div className="flex w-[30%] h-10">
                                <img src={ADA} alt='ADA'/>
                                <p className="text-white text-xl text-left">Cardano(ADA)</p>
                            </div>
                            <div className="">
                                <img src={triangle} alt='triangle button'/>
                            </div>  
                        </div>
                    </div>
                    <div className='flex  mb-8 justify-center items-center' >
                        <Button text='Show All Pairs' className="w-[50%]" onClick={() => {}}  />
                    </div>
                    
                </div>
            </div>
        </div>  
    )
}
export default Trending