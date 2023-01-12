//Using map
// import { platformTypes } from "../../../config/constant";
// import { platformTypeInterface } from "../../interface";
import { FC } from "react";
import affordable from '../../../assets/images/platform/affordable.png';
import fast from '../../../assets/images/platform/fast.png';
import professionals from '../../../assets/images/platform/professionals.png';
import svgviewer from '../../../assets/images/platform/svgviewer.png';
import transparent from '../../../assets/images/platform/transparent.png';
import user from '../../../assets/images/platform/user.png';

const BestPlatform: FC = function (){
    return (
        <div className="container">
            <div className="w-full pb-16 flex flex-col justify-between items-center">
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-white text-5xl font-medium ">What Makes the Best Platform to Buy Cryptocurrency?</h3>
                    <p className="font-medium text-2xl text-[#9586FC]">We are not afraid to claim that Mixer is one of the best crypto-buying platforms available on the market; neither should you.</p>
                </div>
                <div className="w-full flex justify-between max-lg:flex-col">
                    <div className="w-[32%] px-8 rounded-lg justify-center flex flex-col items-center bg-[#171735] pb-9 max-lg:w-full mt-6">
                        <img className=' w-20 flex items-center justify-center pt-4' src={svgviewer} alt='Complete anonymity'/>
                        <h4 className='text-2xl text-white font-semibold text-center'>Complete anonymity</h4>
                        <p className='text-lg font-normal text-slate-500 text-center'>We maintain the highest standards of confidentiality as the main idea of cryptocurrency</p>
                    </div>       
                    <div className="w-[32%] px-8 rounded-lg justify-center flex flex-col items-center bg-[#171735] pb-9 max-lg:w-full mt-6">
                        <img className=' w-25 h-15 flex items-center justify-center pt-4' src={transparent} alt='Transparent'/>
                        <h4 className='text-2xl text-white font-semibold text-center'>Transparent</h4>
                        <p className='text-lg font-normal text-slate-500 text-center'>We make sure the whole exchange process is straightforward, so users have the option to track a transaction’s status.</p>
                    </div>
                    <div className="w-[32%] px-8 rounded-lg justify-center flex flex-col items-center bg-[#171735] pb-9 max-lg:w-full mt-6">
                        <img className=' w-25 flex items-center justify-center pt-4' src={affordable} alt='Affordable'/>
                        <h4 className='text-2xl text-white font-semibold text-center'>Affordable</h4>
                        <p className='text-lg font-normal text-slate-500 text-center'>Take advantage of the crypto platform with the most attractive and favorable service charges.</p>
                    </div>
                </div>
                <div className="w-full flex justify-between max-lg:flex-col">
                    <div className="w-[32%] px-8 rounded-lg justify-center flex flex-col items-center bg-[#171735] pb-9 max-lg:w-full mt-6">
                        <img className=' w-25 flex items-center justify-center pt-4' src={fast} alt='Fast'/>
                        <h4 className='text-2xl text-white font-semibold text-center'>Fast</h4>
                        <p className='text-lg font-normal text-slate-500 text-center'>Our service maintains high transaction processing speed: it takes 5 to 30 minutes to process a transaction, depending on the volume of pending requests.</p>
                    </div>
                    <div className="w-[32%] px-8 rounded-lg justify-center flex flex-col items-center bg-[#171735] pb-9 max-lg:w-full mt-6">
                        <img className=' w-25 flex items-center justify-center pt-4' src={user} alt='User-frendly'/>
                        <h4 className='text-2xl text-white font-semibold text-center'>User-frendly</h4>
                        <p className='text-lg font-normal text-slate-500 text-center'>The service was created by a group of experts from the blockchain industry; they were eager to deliver the most convenient and user-friendly platform to buy cryptocurrency.</p>
                    </div>
                    <div className="w-[32%] px-8 rounded-lg justify-center flex flex-col items-center bg-[#171735] pb-9 max-lg:w-full mt-6">
                        <img className=' w-25 flex items-center justify-center pt-4' src={professionals} alt='Professionals'/>
                        <h4 className='text-2xl text-white font-semibold text-center'>Transparent</h4>
                        <p className='text-lg font-normal text-slate-500 text-center'>Our online support service is always here to assist you. Get answers to any questions 24/7.</p>
                    </div>
                </div>
        </div>
        </div>

    )
}
export default BestPlatform
                        

// Using map
// {
//     platformTypes.map((item: platformTypeInterface, index) => {
//         return(
//             <div className="w-[32%] px-8 rounded-lg justify-center flex flex-col items-center bg-[#171735] pb-9 max-lg:w-full mt-6">
//                 <img className=' w-25 flex items-end justify-end pt-4' src={item.logo} alt='{item.name}'/>
//                 <h4 className='text-2xl text-white font-semibold text-center'>'{item.title}'</h4>
//                 <p className='text-lg font-normal text-slate-500 text-center'>{item.description}</p>
//             </div>
//             )   
//     })
// }
