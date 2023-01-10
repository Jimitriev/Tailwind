import { FC } from "react";

import instagram from '../../assets/images/social/instagram.png';
import linkedin from '../../assets/images/social/linkedin.png';
import facebook from '../../assets/images/social/facebook.png';
import twitter from '../../assets/images/social/twitter.png';
import Button from "../wizards/Button";

const Footer: FC = function () {
    return (
        <div className="w-full flex flex-col items-center py-12">
            <div className="container flex flex-col">
                <div className="w-full flex items-center justify-center mb-8">
                    <a className="mr-12" href="">
                        <div className="w-[28px] h-[28px] flex items-center justify-around">
                            <img src={instagram} alt='instagram' />
                        </div>
                    </a>
                    <a className="mr-12" href="">
                        <div className="w-[26px] h-[26px] flex items-center justify-around">
                            <img src={linkedin} alt='linkedin' />
                        </div>
                    </a>
                    <a className="mr-12" href="">
                        <div className="w-[24px] h-[24px] flex items-center justify-around">
                            <img src={facebook} alt='facebook' />
                        </div>
                    </a>
                    <a className="" href="">
                        <div className="w-[28px] h-[28px] flex items-center justify-around">
                            <img src={twitter} alt='twitter' />
                        </div>
                    </a>
                </div>
                <div className="w-full flex justify-around mb-12">
                    <div className="w-[450px] relative overflow-hidden rounded">
                        <input className="w-full h-[48px] bg-[#323234] text-[#FFFFFFD9] p-2" placeholder="Email Address" />
                        <Button text="SUBMIT" className="!absolute h-[calc(100%_-_12px)] right-1 top-[6px] w-[80px]" />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex flex-col items-start mr-32">
                        <h5 className="text-white font-bold mb-2">PRODUCTS</h5>
                        <a className="text-textDarkPrimary mb-2">Exchange</a>
                        <a className="text-textDarkPrimary mb-2">Liquidity</a>
                        <a className="text-textDarkPrimary mb-2">Migrate</a>
                        <a className="text-textDarkPrimary mb-2">String Holders Pools</a>
                        <a className="text-textDarkPrimary mb-2">Analytics</a>
                    </div>
                    <div className="flex flex-col items-start mr-32">
                        <h5 className="text-white font-bold mb-2">TOOLS</h5>
                        <a className="text-textDarkPrimary mb-2">BscScan</a>
                        <a className="text-textDarkPrimary mb-2">Github</a>
                        <a className="text-textDarkPrimary mb-2">Coingecko</a>
                        <a className="text-textDarkPrimary mb-2">Defi Liama</a>
                        <a className="text-textDarkPrimary mb-2">PooCoin</a>
                    </div>
                    <div className="flex flex-col items-start">
                        <h5 className="text-white font-bold mb-2">ABOUT</h5>
                        <a className="text-textDarkPrimary mb-2">Roadmap</a>
                        <a className="text-textDarkPrimary mb-2">Blog</a>
                        <a className="text-textDarkPrimary mb-2">FAQs</a>
                        <a className="text-textDarkPrimary mb-2">Media Kit</a>
                        <a className="text-textDarkPrimary mb-2">Careers</a>
                        <a className="text-textDarkPrimary mb-2">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;