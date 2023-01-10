import { FC } from "react";

import MixStep1 from "../../../assets/images/step1.png";
import MixStep2 from "../../../assets/images/step2.png";
import MixStep3 from "../../../assets/images/step3.png";
import MixStep4 from "../../../assets/images/step4.png";
import EffectTL from "../../../assets/images/effectTL.png";
import EffectBR from "../../../assets/images/effectBR.png";

const MixStepSection: FC = function () {
    return (
        <div className="container">
            <div className="w-full pb-16">
                <h1 className="text-white text-5xl text-center font-medium mb-10 leading-[1]">
                    How to <span className="text-primary">Mixer Trace</span> Work
                </h1>
                <div className="w-full flex justify-between">
                    <div className="w-1/4 flex p-4 flex-col items-center bg-[#171735] relative mr-6">
                        <img className="w-[80px] h-[80px] mb-4" src={MixStep1} alt='step1' />
                        <p className="font-medium text-white text-xl mb-2">Create Order</p>
                        <p className="text-white text-xl">Connect your wallet</p>
                        <img className="w-[80px] absolute -left-[12px] -top-[12px]" src={EffectTL} alt='EffectTL' />
                        <img className="w-[80px] absolute -right-[12px] -bottom-[12px]" src={EffectBR} alt='EffectBR' />
                    </div>
                    <div className="w-1/4 flex p-4 flex-col items-center bg-[#171735] relative mr-6">
                        <img className="w-[80px] h-[80px] mb-4" src={MixStep2} alt='step2' />
                        <p className="font-medium text-white text-xl mb-2">Deposit</p>
                        <p className="text-white text-xl">Select your Quantity</p>
                    </div>
                    <div className="w-1/4 flex p-4 flex-col items-center bg-[#171735] relative mr-6">
                        <img className="w-[80px] h-[80px] mb-4" src={MixStep3} alt='step1' />
                        <p className="font-medium text-white text-xl mb-2">Waiting</p>
                        <p className="text-white text-xl">Confirm The Transaction</p>
                    </div>
                    <div className="w-1/4 flex p-4 flex-col items-center bg-[#171735] relative">
                        <img className="w-[80px] h-[80px] mb-4" src={MixStep4} alt='step1' />
                        <p className="font-medium text-white text-xl mb-2">Complete</p>
                        <p className="text-white text-xl">Receive Your Money</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MixStepSection;