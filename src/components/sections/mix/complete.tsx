import { FC } from 'react'
import BTC from "../../../assets/images/currency/BTC.png";
import ETH from "../../../assets/images/currency/ETH.png";
import CheckCircle from "../../../assets/images/currency/CheckCircle.png";
import CaretDoubleRight from "../../../assets/images/currency/CaretDoubleRight.png";


 const Complete: FC = function () {
    return(
        <div className="container">
            <div className='w-full border-b-2 border-dark-500 items-start flex justify-between py-10 max-lg:flex-col'>
                <div className='w-1/2 flex-col flex max:flex-col justify-center max-lg:w-full'>
                    <h5 className='text-primary text-xl font-medium mb-4'>04. Step</h5>
                    <h2 className='text-5xl font-semibold text-white mb-6'>Complete</h2>
                    <p className='text-textDarkPrimary font-light mb-6'>After the exchange finished you will see all transaction details. And that’s it!</p>
                </div>
                <div className='w-1/2 flex flex-col justify-center items-center rounded-lg bg-[#64618742] max-lg:w-full'>
                    <div className='w-full flex flex-col px-10 py-10'>    
                        <div className='flex justify-between items-center'>
                            <div className='flex mb-3 items-center'>
                                <img className=' w-[24px] h-[24px] ' src={CheckCircle} alt='Check Circle'/>
                                <div className='text-white text-2xl Medium '>Your transaction is complete!</div>
                            </div>
                            <p className='text-textDarkPrimary ont-light text-sm mb-3'><span className='text-[#979797]'>Transaction ID:</span>  74holjeruewrowfjsd</p>
                        </div>  
                        <p className='text-textDarkPrimary ont-light text-sm mb-3'>ETH is being sent to your wallet. As soon as the transactionis completed. you will receive the exchanged amount.</p>
                        
                        <div className='flex flex-col '>  
                            <div className='w-full mb-4'>
                                <div className='flex justify-between mb-1'>    
                                    <div className='flex items-center mb-1'>
                                        <div className='rounded-lg bg-slate-600 justify-center items-center w-[51px] h-[51px]'>
                                            <img className=' w-[28px] h-[28px] m-3' src={BTC} alt='Bitcoin logo' />
                                        </div>
                                        <div className='flex flex-col ml-4'>
                                            <p className='text-slate-400 text-md'>You send </p>
                                            <p className='text-textDarkPrimary  text-2xl'>3.145 BTC</p>
                                        </div>
                                    </div>
                                    <div className='items-center mb-1'>
                                        <div className='flex items-center justfy-center'>
                                            <img className='w-[15px] h-[15px]' src={CaretDoubleRight} alt='CaretDoubleRight'/>                                        <p className=''></p>
                                            <p className='text-slate-400 text-md'>Input hash</p>
                                        </div>
                                        <p className='text-white text-md'>bc1qsntwe23j8g5dy4e9w8679afz5l4</p>
                                    </div>
                                </div>
                                <p className='text-slate-500 text-md ml-[4.2rem]'>bc1qsntwe23j8g5dy4e9w8679afz5l4nx6lvwfp33a</p> 
                            </div> 

                            <div className='w-full mb-4'>
                                <div className='flex justify-between mb-1'>    
                                    <div className='flex items-center mb-1'>
                                        <div className='rounded-lg bg-slate-600 justify-center items-center w-[51px] h-[51px]'>
                                            <img className=' w-[28px] h-[28px] m-3' src={ETH} alt='Ethereum logo'/>
                                        </div>
                                        <div className='flex flex-col ml-4'>
                                            <p className='text-slate-400 text-md'>You get </p>
                                            <p className='text-textDarkPrimary  text-2xl'>3.145 BTC</p>
                                        </div>
                                    </div>
                                    <div className='items-center mb-1'>
                                        <div className='flex items-center justfy-center'>
                                            <img className='w-[15px] h-[15px]' src={CaretDoubleRight} alt='CaretDoubleRight'/>                                        <p className=''></p>
                                            <p className='text-slate-400 text-md'>Input hash</p>
                                        </div>
                                        <p className='text-white text-md'>bc1qsntwe23j8g5dy4e9w8679afz5l4</p>
                                    </div>
                                </div>
                                <p className='text-slate-500 text-md ml-[4.2rem]'>bc1qsntwe23j8g5dy4e9w8679afz5l4nx6lvwfp33a</p> 
                                        {/* <img className=' w-[28px] h-[28px] ' src={ETH} alt='Ethereum logo' />
                                <p className='text-textDarkPrimary  Light'>Minimum amount 0.002 BTC</p> */}
                            </div> 
                             
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
 }
 export default Complete