import { FC } from "react";
import HomePage1 from '../../../assets/images/homepage1.png';
import HomePage2 from '../../../assets/images/homepage2.png';
import HomePage3 from '../../../assets/images/homepage3.png';

const FrontSection: FC = function () {
    return (
        <div className="container">
            <div className="w-full flex items-center py-16">
                <div className="w-1/2 flex flex-col justify-center">
                    <h1 className="text-white text-[calc(4vw_+_20px)] font-bold mb-10 leading-[1]">Mixer Without a Trace</h1>
                    <p className="text-textLightPrimary font-light text-base xl:text-2xl mb-6">After performing a HoudiniMixer, there will be no traceable connection between the sending wallet and receiving wallet. Poof, your crypto is anonymous.</p>
                    <div className="flex text-textLightPrimary">
                        <button className="bg-primary text-white px-6 py-1.5 border border-primary rounded uppercase font-medium text-base xl:text-xl mr-2">Mix Now</button>
                        <button className="bg-transparent text-primary px-6 py-1.5 border border-primary rounded uppercase font-medium text-base xl:text-xl">How It Works</button>
                    </div>
                </div>
                <div className="w-1/2 aspect-[1/1] flex relative">
                    <img className="absolute -right-24 top-0 w-[110%]" src={HomePage2} alt='HomePage2' />
                    <img className="absolute -right-16 top-0 w-[82%]" src={HomePage1} alt='HomePage1' />
                    <img className="absolute -right16 top-0 w-[82%]" src={HomePage3} alt='HomePage3' />
                </div>
            </div>
        </div>
    )
}

export default FrontSection;