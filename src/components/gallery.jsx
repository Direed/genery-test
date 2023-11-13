'use client'

import React, {useState} from 'react';
import {Swiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import {SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y, Thumbs, FreeMode} from 'swiper/modules';
import Image from "next/image";

const Gallery = ({mediaQuery, mediaQuery750}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                className={`swiper-img prompt-examples-sec__slider`}
                modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
                spaceBetween={0}
                navigation={{
                    nextEl: ".xs2 .swiper-button-next",
                    prevEl: ".xs2 .swiper-button-prev",
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                breakpoints={{
                    250: {
                        simulateTouch: false
                    },
                    1150: {
                        navigation: {
                            nextEl: ".xs1 .swiper-button-next",
                            prevEl: ".xs1 .swiper-button-prev",
                        },
                    }
                }}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src="/images/_src/slide-image1.webp"
                            alt=""
                            className="swiper-slide__image"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                        <div className="prompt-examples-sec__slider-fixed-text">
                            We resolve your problem with references. Creating visual references with the help of
                            text
                            prompts
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-nav__container">
                <div className="swiper-nav prompt-examples-sec__swiper-nav">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={2}
                        freeMode={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        watchSlidesProgress={true}
                        onSwiper={setThumbsSwiper}
                        breakpoints={{
                            320: {
                                spaceBetween: 14,
                                slidesPerView: 3,
                            },
                            410: {
                                spaceBetween: 20,
                                slidesPerView: 3,
                            },
                            550: {
                                spaceBetween: 20,
                                slidesPerView: 4,
                            },
                            750: {
                                spaceBetween: 20,
                                slidesPerView: 3,
                            },
                            980: {
                                spaceBetween: 20,
                                slidesPerView: 4,
                            },
                            1150: {
                                spaceBetween: 20,
                                slidesPerView: 7,
                            }
                        }}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src="/images/_src/slide-image1.webp"
                                    alt=""
                                    className="swiper-nav__image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="swiper-nav__controll-wrapper xs1">
                    <div className="swiper-button swiper-button-prev">
                        <svg width="27" height="21" viewBox="0 0 27 21" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.4767 20.635L12.7755 18.3361L6.54947 12.3495L10.9078 12.3495L26.999 12.3495L26.999 9.09273L6.54947 9.09273L12.7755 3.10609L10.4767 0.807219L0.563365 10.7211L10.4767 20.635Z"
                                fill="white"/>
                        </svg>
                    </div>
                    <div className="swiper-button swiper-button-next">
                        <svg width="28" height="21" viewBox="0 0 28 21" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5125 20.2236L15.2138 17.9248L21.4398 11.9381H17.0815L0.990234 11.9381L0.990234 8.6814L21.4398 8.6814L15.2138 2.69476L17.5125 0.395889L27.4259 10.3098L17.5125 20.2236Z"
                                fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;