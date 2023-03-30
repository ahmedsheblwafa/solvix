import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Slider.styles.scss'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

export default function Slider() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: true
            }}
            pagination={{
                clickable: true
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="./images/containers.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/containers.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/containers.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/containers.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/containers.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/containers.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/containers.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/containers.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/containers.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}
