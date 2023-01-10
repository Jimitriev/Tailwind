import { FC, useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Manipulation, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import Slider from "react-slick";


import { currencyTypes } from "../../../config/constant";
import { currencyTypeInterface } from "../../interface";
import swap from "../../../assets/images/swap.png";

const PairSection: FC = function () {
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
                <h5 className="text-primary text-center text-xl font-medium mb-4">SECURELY EXCHANGE, MIX</h5>
                <h2 className="text-5xl text-center font-semibold text-white mb-8">Buy crypto at true cost</h2>

                <div className="w-full flex justify-between mb-6">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        autoplay={{
                            delay: 5000
                        }}
                        loop={true}
                        navigation={{
                            nextEl: '.review-swiper-pair-button-next',
                            prevEl: '.review-swiper-pair-button-prev',
                        }}
                        modules={[Autoplay, Manipulation, Navigation]}
                        className="mySwiper"
                    >
                        {
                            currencyTypes.map((item: currencyTypeInterface, index) => {
                                return (
                                    <SwiperSlide key={index + "_pair"} className="py-4 px-2 bg-[#0F0B44] rounded">
                                        <div className="w-full flex">
                                            <div className="w-full flex flex-col items-center">
                                                <div className="rounded-full min-w-[64px] h-[64px] overflow-hidden mb-2">
                                                    <img className="w-full h-full" src={item.logo} alt={item.name} />
                                                </div>
                                                <span className="text-xs text-textDarkPrimary mb-1">Bitcoin</span>
                                                <p className="text-sm text-white">${"16,972.61"}</p>
                                            </div>
                                            <div className="mt-[20px]">
                                                <img className={`transition-all min-w-[24px] h-[24px] rotate-90`} src={swap} alt='swap' />
                                            </div>
                                            <div className="w-full flex flex-col items-center">
                                                <div className="rounded-full min-w-[64px] h-[64px] overflow-hidden mb-2">
                                                    <img className="w-full h-full" src={item.logo} alt={item.name} />
                                                </div>
                                                <span className="text-xs text-textDarkPrimary mb-1">Bitcoin</span>
                                                <p className="text-sm text-white">${"16,972.61"}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className="w-full flex justify-center">
                    <button className="review-swiper-pair-button-prev p-2.5 transition-colors rounded-full bg-warning hover:bg-info mr-[30px]">
                        <svg width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.3989 9.4552H1.42871" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.59835 1.28564L1.42871 9.45529L9.59835 17.6249" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="review-swiper-pair-button-next p-2.5 transition-colors rounded-full bg-warning hover:bg-info">
                        <svg width="16" height="16" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.60105 9.5448L21.5713 9.5448" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.4016 17.7144L21.5713 9.54471L13.4016 1.37507" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default PairSection;