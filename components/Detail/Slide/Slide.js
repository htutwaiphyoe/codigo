import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([EffectFade, Navigation, Pagination]);

import classes from "./Slide.module.scss";

const Slide = (props) => {
    return (
        <div className={`${classes.slide}`}>
            <div className={`${classes.slide__circle}`}></div>
            <div className={`${classes.slide__swiper}`}>
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                    }}
                    speed={1000}
                    fadeEffect={{
                        crossFade: true,
                    }}
                >
                    <SwiperSlide>
                        <img src="/images/site/detail/slide1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/site/detail/slide2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/site/detail/slide3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/site/detail/slide5.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/site/detail/slide4.png" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slide;
