import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const BasicSlider = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='mt-20 px-8 max-w-[800px] mx-auto rounded-md'>
            <h1 className="text-3xl font-bold text-center my-4">Swiper Slider</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    data.map((data, index) => (
                        <div className="relative">
                            <SwiperSlide key={index}>
                                <img className="w-full md:h-[60vh] object-cover rounded-md" src={data.img} alt="" />
                                <p className="absolute text-red-600 top-[40%] rounded-xl md:text-4xl text-lg p-3 font-bold  bg-slate-400 left-[40%]">{data.title}</p>
                            </SwiperSlide>
                        </div>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default BasicSlider;