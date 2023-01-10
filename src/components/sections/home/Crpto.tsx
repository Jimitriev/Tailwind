import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Manipulation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { currencyTypes } from "../../../config/constant";
import { currencyTypeInterface } from "../../interface";

import { Sparklines, SparklinesLine } from 'react-sparklines';

const CryptoSection: FC = function () {
    return (
        <div className="w-full flex flex-col items-center py-16 bg-[#0e132fd8]">
            <div className="container">
                <h1 className="text-white text-5xl text-center font-medium mb-10 leading-[1]">
                    Get Various <span className="text-primary">Crypto Coin</span>
                </h1>
                <div className="w-full flex justify-between">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        autoplay={{
                            delay: 5000
                        }}
                        loop={true}
                        modules={[Autoplay, Manipulation]}
                        className="mySwiper"
                    >
                        {
                            currencyTypes.map((item: currencyTypeInterface, index) => {
                                return (
                                    <SwiperSlide key={index + "_crypto"} className="p-4 bg-[#171735]">
                                        <div className="w-full">
                                            <div className="w-full flex items-center mb-4">
                                                <div className="rounded-full min-w-[48px] h-[48px] overflow-hidden mr-4">
                                                    <img className="w-full h-full" src={item.logo} alt={item.name} />
                                                </div>
                                                <div className="">
                                                    <div className="flex items-center mb-2">
                                                        <span className=" text-white mr-2">{item.name}</span>
                                                        <span className="text-[10px] bg-black text-white rounded px-2 py-1">{item.symbol}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="text-textLightPrimary mr-2">${'14,526.54'}</span>
                                                        <span className={`${Math.round(Math.random() * 10) > 4 ? 'text-plus' : 'text-minus'}`}>{`${Math.round(Math.random() * 10) > 4 ? '+' : '-'}`}{Math.round(Math.random() * 10)}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} height={50} margin={5}>
                                                    <SparklinesLine color={`${Math.round(Math.random() * 10) > 4 ? '#19F67F' : '#F13535'}`} />
                                                </Sparklines>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CryptoSection;