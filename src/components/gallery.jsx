import React, {useEffect, useState} from 'react';
import Swiper from 'swiper';
import {Swiper as SwiperComponent} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";

const Gallery = ({mediaQuery, mediaQuery750}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbsSwiper1, setThumbsSwiper1] = useState(null);
    const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
    const [thumbsSwiper3, setThumbsSwiper3] = useState(null);
    useEffect(() => {

        if (mediaQuery750 && mediaQuery750.matches) {
            var swiper3 = new Swiper(".swiper-text", {
                spaceBetween: 0,
                thumbs: {
                    swiper: swiper
                },
                navigation: {
                    nextEl: ".swiper-text__controll-wrapper .swiper-button-next",
                    prevEl: ".swiper-text__controll-wrapper .swiper-button-prev",
                },
            });
            swiper3.controller.control = swiper2;
            swiper2.controller.control = swiper3;
        }

        if (mediaQuery && mediaQuery.matches) {
            var swipe4 = new Swiper(".swiper-price", {
                slidesPerView: 1,
                centeredSlides: true,
                // slidesPerView: "auto",
                initialSlide: 1,
                autoHeight: false,
                spaceBetween: 32,
            });
        }
    }, [mediaQuery750, mediaQuery])

    return (
        <>
            <div className="swiper swiper-img prompt-examples-sec__slider">
                <SwiperComponent
                    spaceBetween={0}
                    navigation={{
                        nextEl: ".xs2 .swiper-button-next",
                        prevEl: ".xs2 .swiper-button-prev",
                    }}
                    thumbs={{
                        swiper: thumbsSwiper
                    }}
                    // onSwiper={setThumbsSwiper3}
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
                            <img className="swiper-slide__image" src="/images/_src/slide-image1.jpg" alt=""/>
                            <div className="prompt-examples-sec__slider-fixed-text">
                                We resolve your problem with references. Creating visual references with the help of
                                text
                                prompts
                            </div>
                        </SwiperSlide>
                    ))}
                </SwiperComponent>

                <div className="swiper-nav__controll-wrapper xs2">
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


            <div className="swiper-nav__container">
                <div thumbsSlider="" className="swiper-nav swiper prompt-examples-sec__swiper-nav">
                    <SwiperComponent
                        spaceBetween={20}
                        slidesPerView={2}
                        freeMode={true}
                        watchSlidesProgress={true}
                        thumbs={{
                            swiper: thumbsSwiper3
                        }}
                        onSwipe={setThumbsSwiper}
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
                            <SwiperSlide>
                                <img className="swiper-nav__image" src="/images/_src/slide-image1.jpg" alt=""/>
                            </SwiperSlide>
                        ))}
                    </SwiperComponent>
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


            <div className="swiper-text__container">
                <div className="swiper-text swiper swiper">
                    <SwiperComponent
                        spaceBetween={0}
                        thumbs={{
                            swiper: thumbsSwiper
                        }}
                        // onSwiper={setThumbsSwiper3}
                        navigation={{
                            nextEl: ".swiper-text__controll-wrapper .swiper-button-next",
                            prevEl: ".swiper-text__controll-wrapper .swiper-button-prev",
                        }}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="swiper-text__element">
                                    We resolve your problem with references. Creating visual references with the
                                    help of text prompts
                                </div>
                            </SwiperSlide>
                        ))}
                    </SwiperComponent>
                </div>

                <div className="swiper-text__controll-wrapper">
                    <div className="swiper-button swiper-button-prev">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="36" cy="36" r="36" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"
                                    fill="white" fill-opacity="0.1"/>
                            <path
                                d="M33.1083 43.3349L34.8323 41.6108L30.1628 37.1211L33.4315 37.1211L45.5 37.1211L45.5 34.6787L30.1628 34.6787L34.8324 30.1889L33.1083 28.4648L25.6733 35.8999L33.1083 43.3349Z"
                                fill="white"/>
                        </svg>
                    </div>
                    <div className="swiper-button swiper-button-next">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="36" cy="36" r="36" fill="white" fill-opacity="0.1"/>
                            <path
                                d="M38.3761 43.0263L36.652 41.3022L41.3215 36.8125L38.0528 36.8125H25.9844V34.3701L41.3215 34.3701L36.652 29.8803L38.3761 28.1562L45.8111 35.5913L38.3761 43.0263Z"
                                fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;