import { FC } from "react";

import homepage4 from "../../../assets/images/homepage4.png";

const QualitySection: FC = function () {
    return (
        <div className="w-full bg-quality bg-[length:100%_100%] bg-[#ffffff8c] relative">
            <div className="w-full flex flex-col items-center bg-qualityGradient">
                <div className="container flex items-center justify-between py-16 z-20">
                    <div className="pr-12">
                        <h5 className="text-primary text-xl font-medium mb-4">About us</h5>
                        <h2 className="text-5xl font-semibold text-white mb-6">High Quality Mix</h2>
                        <p className="text-textDarkPrimary font-light mb-6">Mixer is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
                        <p className="text-textDarkPrimary font-light mb-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
                    </div>
                    <img className="w-[35%]" src={homepage4} alt="homepage4" />
                </div>
            </div>
        </div>
    )
}

export default QualitySection;