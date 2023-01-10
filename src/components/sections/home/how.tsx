import { FC, useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Manipulation, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import Slider from "react-slick";


import { currencyTypes } from "../../../config/constant";
import { currencyTypeInterface } from "../../interface";
import way1 from "../../../assets/images/way1.png";
import way2 from "../../../assets/images/way2.png";
import way3 from "../../../assets/images/way3.png";
import way4 from "../../../assets/images/way4.png";

const HowSection: FC = function () {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        initialSlide: 0,
        slidesToScroll: 1
    }

    return (
        <div className="w-full flex flex-col items-center relative py-16">
            <div className="container">
                <h2 className="text-5xl text-center font-semibold text-white mb-6">How To Mixer</h2>

                <div className="w-full flex justify-between mb-6">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 5000
                        }}
                        loop={true}
                        navigation={{
                            nextEl: '.review-swiper-how-button-next',
                            prevEl: '.review-swiper-how-button-prev',
                        }}
                        modules={[Autoplay, Manipulation, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="py-4 px-2 rounded">
                            <div className="w-full h-full flex">
                                <div className="w-1/2 flex flex-col items-start justify-between pr-16 py-8">
                                    <div className="">
                                        <h5 className="text-primary text-xl font-medium mb-4">01. Step</h5>
                                        <h2 className="text-[60px] leading-none text-left font-semibold text-white mb-8">Choose the crypto Mixer pair</h2>
                                        <span className="text-xl text-textDarkPrimary mb-1">For example, let's Mixer Bitcoin to Ethereum. In the "You Send" field, choose "BTC" from the drop-down menu and type the amount of coins you would like to exchange. Then, in the "You Get" field, select "ETH". After that, the "You Get" field will automatically calculate the amount you will receive. Then click the "Exchange" button.</span>
                                    </div>
                                    <div className="w-full flexr">
                                        <button className="review-swiper-how-button-prev p-2.5 transition-colors rounded-full bg-warning hover:bg-info mr-[30px]">
                                            <svg width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.3989 9.4552H1.42871" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.59835 1.28564L1.42871 9.45529L9.59835 17.6249" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <button className="review-swiper-how-button-next p-2.5 transition-colors rounded-full bg-warning hover:bg-info">
                                            <svg width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.60105 9.5448L21.5713 9.5448" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.4016 17.7144L21.5713 9.54471L13.4016 1.37507" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col items-center rounded-lg bg-[#1B1928] p-6">
                                    <img className="w-full h-full rounded-lg" src={way1} alt={'way1'} />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="py-4 px-2 rounded">
                            <div className="w-full h-full flex">
                                <div className="w-1/2 flex flex-col items-start justify-between pr-16 py-8">
                                    <div className="">
                                        <h5 className="text-primary text-xl font-medium mb-4">02. Step</h5>
                                        <h2 className="text-[60px] leading-none text-left font-semibold text-white mb-8">Deposit</h2>
                                        <span className="text-xl text-textDarkPrimary mb-1">Mixer will generate the Bitcoin deposit address for you. Send the necessary amount of the cryptocurrency to it and after we receive your coins, the exchange process will begin.</span>
                                    </div>
                                    <div className="w-full flexr">
                                        <button className="review-swiper-how-button-prev p-2.5 transition-colors rounded-full bg-warning hover:bg-info mr-[30px]">
                                            <svg width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.3989 9.4552H1.42871" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.59835 1.28564L1.42871 9.45529L9.59835 17.6249" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <button className="review-swiper-how-button-next p-2.5 transition-colors rounded-full bg-warning hover:bg-info">
                                            <svg width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.60105 9.5448L21.5713 9.5448" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.4016 17.7144L21.5713 9.54471L13.4016 1.37507" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-1/2 flex items-center">
                                    <div className=" rounded-lg bg-[#1B1928] p-6">
                                        <img className="w-full rounded-lg" src={way2} alt={'way2'} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="py-4 px-2 rounded">
                            <div className="w-full h-full flex">
                                <div className="w-1/2 flex flex-col items-start justify-between pr-16 py-8">
                                    <div className="">
                                        <h5 className="text-primary text-xl font-medium mb-4">03. Step</h5>
                                        <h2 className="text-[60px] leading-none text-left font-semibold text-white mb-8">Waiting Convertation</h2>
                                        <span className="text-xl text-textDarkPrimary mb-1">Let Mixer do all work to find the best rates on the market and process the exchange as fast as possible. Your ETH will be sent to you just in a few minutes.</span>
                                    </div>
                                    <div className="w-full flexr">
                                        <button className="review-swiper-how-button-prev p-2.5 transition-colors rounded-full bg-warning hover:bg-info mr-[30px]">
                                            <svg width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.3989 9.4552H1.42871" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.59835 1.28564L1.42871 9.45529L9.59835 17.6249" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <button className="review-swiper-how-button-next p-2.5 transition-colors rounded-full bg-warning hover:bg-info">
                                            <svg width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.60105 9.5448L21.5713 9.5448" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.4016 17.7144L21.5713 9.54471L13.4016 1.37507" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-1/2 flex items-center">
                                    <div className=" rounded-lg">
                                        <img className="w-full rounded-lg" src={way3} alt={'way3'} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="py-4 px-2 rounded">
                            <div className="w-full h-full flex">
                                <div className="w-1/2 flex flex-col items-start justify-between pr-16 py-8">
                                    <div className="">
                                        <h5 className="text-primary text-xl font-medium mb-4">04. Step</h5>
                                        <h2 className="text-[60px] leading-none text-left font-semibold text-white mb-8">Complete</h2>
                                        <span className="text-xl text-textDarkPrimary mb-1">After the exchange finished you will see all transaction details. And that’s it!</span>
                                    </div>
                                    <div className="w-full flexr">
                                        <button className="review-swiper-how-button-prev p-2.5 transition-colors rounded-full bg-warning hover:bg-info mr-[30px]">
                                            <svg width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.3989 9.4552H1.42871" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.59835 1.28564L1.42871 9.45529L9.59835 17.6249" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <button className="review-swiper-how-button-next p-2.5 transition-colors rounded-full bg-warning hover:bg-info">
                                            <svg width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.60105 9.5448L21.5713 9.5448" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.4016 17.7144L21.5713 9.54471L13.4016 1.37507" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-1/2 flex items-center">
                                    <div className=" rounded-lg">
                                        <img className="w-full rounded-lg" src={way4} alt={'way4'} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default HowSection;