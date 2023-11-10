import React, {useRef} from 'react';
import {circOut, motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";

const FrontSection = () => {
    const refFirstScreen = useRef(null)

    const { scrollYProgress: scrollYProgressScaleFirstScreen } = useScroll({
        target: refFirstScreen,
        offset: ["start end", "end end"]
    })

    const scaleFirstScreen = useTransform(scrollYProgressScaleFirstScreen, [1, 0], [1, 2],{
        ease: circOut
    });

    return (
        <section className="front-sec">
            <div className="decor dc1"></div>
            <div className="decor dc2"></div>
            <div className="front-sec__bg-img-container">
                <motion.div style={{scale: scaleFirstScreen}}>
                    <Image
                        src="/images/_src/front-sec-home.webp"
                        alt=""
                        className="front-sec__bg-img"
                        width={0}
                        height={0}
                        sizes="100%"
                    />
                </motion.div>
            </div>
            <div style={{ width: '100%', height: '100vh', position: 'absolute' }} ref={refFirstScreen} />
            <div className="front-sec__wrapper">
                <div className="front-sec__container-content front-sec__container-content-first">
                    <div className="container">
                        <div className="front-sec__content-box">
                            <h1 className="page-title">We resolve your problem with references</h1>
                            <p className="page-subtitle">Ecosystem for searching and generating images</p>
                            <form action="" className="form-submit">
                                <div className="form-submit__inp-wrapper">
                                    <input type="text" className="form-submit__inp" placeholder="Enter your e-mail"/>
                                </div>
                                <div className="form-submit__btn-wrapper">
                                    <button type="submit" className="form-submit__btn">Sign up for <b>FREE</b></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="front-sec__container-content front-sec__container-content-second">
                    <div className="container">
                        <div className="front-sec__content-box">
                            <h1 className="page-title">Meet <i>largest</i> movie shot gallery</h1>
                            <div className="front-sec__million-down-tex-container">
                                <div className="front-sec__subtitle-blur">over <b>3 000 000</b> movie shots</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrontSection;