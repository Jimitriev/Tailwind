import { FC } from 'react'
import BTC from "../../../assets/images/currency/BTC.png";
import ETH from "../../../assets/images/currency/ETH.png";


 const Watingconv: FC = function () {
    return(
        <div className="container">
            <div className='w-full border-b-2 border-dark-500 flex items-center justify-between py-10'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h5 className='text-primary text-xl font-medium mb-4'>03. Step</h5>
                    <h2 className='text-5xl font-semibold text-white mb-6'>Waiting<br/>Convertation</h2>
                    <p className='text-textDarkPrimary font-light mb-6'>Let Mixer do all work to find the best rates on the market and process the exchange as fast as possible. Your ETH will be sent to you just in a few minutes.</p>
                </div>
                <div className='w-[600px] flex flex-col justify-center items-center rounded-lg bg-[#64618742]'>
                    <div className='w-full flex flex-col px-10 py-10'>    
                        <div className='text-white text-2xl Medium mb-3'>Convertation <span className='text-primary text-2xl medium'>BTC to ETH </span></div>
                        <p className='text-textDarkPrimary ont-light text-sm mb-3'>Please, wait. The exchange process will take from 15 min to 2 hours.</p>
                        <div className='flex justify-between'>  
                            <div className='w-1/2 mr-2 justify-between'>
                                <p className='text-textDarkPrimary  Medium mb-2'>You send </p>
                                <div className=' flex items-center mb-2 rounded-lg justify-between'>
                                    <div className='w-full px-3 rounded-lg py-3 bg-blue-900 flex items-center'>
                                        <img className=' w-[28px] h-[28px] ' src={BTC} alt='Bitcoin logo' />
                                        <div className='flex w-full justify-between'>
                                            <span className='font-medium text-lg  text-textDarkPrimary px-2'>3.145</span>
                                            <span className='font-medium text-lg  text-textDarkPrimary px-2'>BTC</span>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-textDarkPrimary  Light'>Minimum amount 0.002 BTC</p>
                            </div>  
                            <div className='w-1/2 ml-2 justify-between'>
                                <p className='text-textDarkPrimary  Medium mb-2'>You get</p>
                                <div className=' flex items-center mb-2 rounded-lg justify-between'>
                                    <div className='w-full px-3 rounded-lg py-3 bg-blue-900 flex items-center'>
                                        <img className=' w-[28px] h-[28px] ' src={ETH} alt='Ethereum logo' />
                                        <div className='flex w-full justify-between'>
                                            <span className='font-medium text-lg  text-textDarkPrimary px-2'>13.645354</span>
                                            <span className='font-medium text-lg  text-textDarkPrimary px-2'>ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-textDarkPrimary  Light'>1 BTC ≈ 13.644784 ETH</p>
                            </div>  
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
 }
 export default Watingconv