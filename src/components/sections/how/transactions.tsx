import { FC } from 'react'
import Vector from '../../../assets/images/currency/Vector.png'
 
 const Transations: FC = function () {
    return(
        <div className="container">
            <div className='w-full flex flex-col justify-center mt-16'>   
                <div className='text-white text-4xl font-semibold mb-5'>Transactions</div>
                <div className=' bg-slate-900 rounded-xl justify-between mb-3'>
                    <div className='flex items-center justify-between w-full rounded-lg pl-6 py-3 pr-8 mb-2 '>
                        <div className='text-xl text-white font-medium'>Wallet address</div>
                        <button><img className='w-[20px] h-[10px] flex' typeof='button' src={Vector} alt='Vector'/></button>
                    </div>
                        <div className='text-lg text-slate-400 font-normal pl-6 py-3 pr-8 mb-4'>A wallet is a digital place where you can store your cryptocurrency coins. As a rule, each coin has its own official wallet which you can find on the official website of the coin.<br/><br/>Each cryptocurrency wallet address has a unique combination of numbers and letters in the length of 26-35 characters or a tag with a private key.
                </div>
                </div>
                <div className=' bg-slate-900 rounded-xl justify-between mb-3'>
                    <div className='flex items-center justify-between w-full rounded-lg pl-6 py-3 pr-8 mb-2 '>
                        <div className='text-xl text-white font-medium'>The recipient’s address</div>
                        <button><img className='w-[20px] h-[10px] flex' typeof='button' src={Vector} alt='Vector'/></button>
                    </div>
                </div>
                <div className=' bg-slate-900 rounded-xl justify-between mb-3'>
                    <div className='flex items-center justify-between w-full rounded-lg pl-6 py-3 pr-8 mb-2 '>
                        <div className='text-xl text-white font-medium'>How quick will my transaction be processed?</div>
                        <button><img className='w-[20px] h-[10px] flex' typeof='button' src={Vector} alt='Vector'/></button>
                    </div>
                </div>
                <div className=' bg-slate-900 rounded-xl justify-between mb-3'>
                    <div className='flex items-center justify-between w-full rounded-lg pl-6 py-3 pr-8 mb-2 '>
                        <div className='text-xl text-white font-medium'>Transaction Hash</div>
                        <button><img className='w-[20px] h-[10px] flex' typeof='button' src={Vector} alt='Vector'/></button>
                    </div>
                </div>
                <div className=' bg-slate-900 rounded-xl justify-between mb-3'>
                    <div className='flex items-center justify-between w-full rounded-lg pl-6 py-3 pr-8 mb-2 '>
                        <div className='text-xl text-white font-medium'>Transaction ID</div>
                        <button><img className='w-[20px] h-[10px] flex' typeof='button' src={Vector} alt='Vector'/></button>
                    </div>
                </div>
                <div className=' bg-slate-900 rounded-xl justify-between mb-3'>
                    <div className='flex items-center justify-between w-full rounded-lg pl-6 py-3 pr-8 mb-2 '>
                        <div className='text-xl text-white font-medium'>Can I cancel a transaction?</div>
                        <button><img className='w-[20px] h-[10px] flex' typeof='button' src={Vector} alt='Vector'/></button>
                    </div>
                </div>
                <div className=' bg-slate-900 rounded-xl justify-between mb-3'>
                    <div className='flex items-center justify-between w-full rounded-lg pl-6 py-3 pr-8 mb-2 '>
                        <div className='text-xl text-white font-medium'>What are the deposit/withdrawal fees?</div>
                        <button><img className='w-[20px] h-[10px] flex' typeof='button' src={Vector} alt='Vector'/></button>
                    </div>
                </div>
            </div> 
        </div>
    )
 }
 export default Transations