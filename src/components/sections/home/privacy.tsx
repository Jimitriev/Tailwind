import { FC } from "react";

import homepage6 from "../../../assets/images/homepage6.png";
import homepage7 from "../../../assets/images/homepage7.png";

const PrivacySection: FC = function () {
    return (
        <div className="w-full bg-privacy bg-[length:100%_100%] relative">
            <div className="w-full flex flex-col items-center bg-privacyGradient">
                <div className="container flex items-center justify-between py-16 z-20">
                    <img className="w-[35%]" src={homepage6} alt="homepage6" />
                    <div className="pl-12">
                        <h5 className="text-primary text-xl font-medium mb-4">Privacy Mix</h5>
                        <h2 className="text-5xl font-semibold text-white mb-6">Privacy Mixer</h2>
                        <p className="text-textDarkPrimary font-light mb-6">Mixer is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
                        <p className="text-textDarkPrimary font-light mb-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
                    </div>
                </div>
                <div className="container flex items-center justify-between py-16 z-20">
                    <div className="pr-12">
                        <h5 className="text-primary text-xl font-medium mb-4">Explore Endless</h5>
                        <h2 className="text-5xl font-semibold text-white mb-6">Possibilities with Enefti</h2>
                        <p className="text-textDarkPrimary font-light mb-6">Connect our AI to your exchange account and invest crypto automatically. Enefti app work while you just live.</p>
                        <div className="ml-2">
                            <div className="flex items-center mb-2">
                                <svg className="mr-2" width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.60105 9.5448L21.5713 9.5448" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.4016 17.7144L21.5713 9.54471L13.4016 1.37507" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-textDarkPrimary font-light">Dive into the world</p>
                            </div>
                            <div className="flex items-center mb-2">
                                <svg className="mr-2" width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.60105 9.5448L21.5713 9.5448" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.4016 17.7144L21.5713 9.54471L13.4016 1.37507" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-textDarkPrimary font-light">Grow your business with Mixer Pay</p>
                            </div>
                            <div className="flex items-center mb-2">
                                <svg className="mr-2" width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.60105 9.5448L21.5713 9.5448" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.4016 17.7144L21.5713 9.54471L13.4016 1.37507" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-textDarkPrimary font-light">Mixer Earn - Start earning</p>
                            </div>
                        </div>
                    </div>
                    <img className="w-[30%] ml-12" src={homepage7} alt="homepage7" />
                </div>
            </div>
        </div>
    )
}

export default PrivacySection;