import { FC } from 'react'
import BTC from "../../../assets/images/currency/BTC.png";

 const Deposit: FC = function () {
    return(
        <div className="container">
            <div className='w-full border-b-2 border-dark-500 flex items-center justify-between py-10'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h5 className='text-primary text-xl font-medium mb-4'>02. Step</h5>
                    <h2 className='text-5xl font-semibold text-white mb-6'>Deposit</h2>
                    <p className='text-textDarkPrimary font-light mb-6'>Mixer will generate the Bitcoin deposit address for you. Send the necessary amount of the cryptocurrency to it and after we receive your coins, the exchange process will begin.</p>
                </div>
                <div className='w-[600px] flex flex-col justify-center items-center rounded-lg bg-[#64618742]'>
                    <div className='w-full flex flex-col px-10 py-10'>    
                        <div className='text-white text-2xl Medium mb-2'>Send by one transaction <span className='text-primary text-2xl medium'>3.145</span> BTC</div>
                        <p className='text-textDarkPrimary ont-light text-sm mb-3'>Fixed rate: 1 BTC = <span className='text-white'>0.01025235</span> <span> | </span>ETH Transaction ID: <span className='text-white'>74holjeruewrowfjsd</span> </p>
                        <p className='text-textDarkPrimary  Medium mb-3'>Deposit BTC Address</p>
                        <div className='flex items-center bg-blue-900 rounded-lg justify-between'>
                            <div className='flex items-center ml-2'>
                                <img className='rounded w-[28px] h-[28px]' src={BTC} alt='Bitcoin logo' />
                                <span className='font-medium text-lg  text-textDarkPrimary px-2'>bc1qsntwe23j8g5dy4e9w8679afz5l4nx6lvwfp33a</span>
                                <button className='w-full transition-all px-5 rounded-r-lg text-white h-[60px] bg-primary text-textDarkPrimary' >Copy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }
 export default Deposit