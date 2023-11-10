import React from 'react';
import Image from "next/image";

const PreviewsSection = () => {
    return (
        <section className="previews-sec">
            <div className="previews-sec__wrapper">
                <div className="previews-sec__element previews-sec__el1">
                    <div className="container">
                        <div
                            className="previews-sec__fixed-image-wrapper fixed-image-wrapper__v1 fixed-image-wrapper__mob">
                            <div className="fixed-image-wrapper__box  swipe-anim-container">
                                <div className="swipe-anim-container__img swipe-anim-container__active">
                                    <Image
                                        src="/images/_src/swipe-1-act.webp"
                                        alt=""
                                        className="swipe-anim-container__img-element"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="swipe-anim-container__img swipe-anim-container__def">
                                    <Image
                                        src="/images/_src/swipe-1-def.webp"
                                        alt=""
                                        className="swipe-anim-container__img-element"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="swipe-anim-container__line-controll"></div>
                            </div>
                        </div>
                        <div className="previews-sec__element-info">
                            <h2 className="sec-title"><i>Transform</i> your storyboard into cinematic</h2>
                            {/*<p class="sec-subtitle">Creating visual references with the help of text prompts</p>*/}
                        </div>
                    </div>
                </div>

                <div className="previews-sec__element previews-sec__el2">
                    <div className="container">
                        <div
                            className="previews-sec__fixed-image-wrapper fixed-image-wrapper__v2 fixed-image-wrapper__mob">
                            <div className="fixed-image-wrapper__box fixed-image-wrapper__box-img">
                                <Image
                                    src="/images/_src/viev-2.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                        </div>
                        <div className="previews-sec__element-info">
                            <h2 className="sec-title">With different light, colour, atmosphere</h2>
                            {/*<p class="sec-subtitle">Creating visual references with thes help of text prompts</p>*/}
                        </div>
                    </div>
                </div>

                <div className="previews-sec__element previews-sec__el3">
                    <div className="container">
                        <div
                            className="previews-sec__fixed-image-wrapper fixed-image-wrapper__v3 fixed-image-wrapper__mob">
                            <div className="fixed-image-wrapper__box  swipe-anim-container">
                                <div className="swipe-anim-container__img swipe-anim-container__active">
                                    <Image
                                        src="/images/_src/viev-3-v2.webp"
                                        alt=""
                                        className="swipe-anim-container__img-element"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="swipe-anim-container__img swipe-anim-container__def">
                                    <Image
                                        src="/images/_src/viev-3.webp"
                                        alt=""
                                        className="swipe-anim-container__img-element"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="swipe-anim-container__line-controll"></div>
                            </div>
                        </div>
                        <div className="previews-sec__element-info">
                            <h2 className="sec-title">Or <i>change</i> something on an existing frame</h2>
                            {/*<p class="sec-subtitle">Creating visual references with the help of text prompts</p>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="previews-body">
                <div className="previews-sec__fixed-container">
                    <div className="previews-sec__fixed-wrapper">
                        <div className="previews-sec__fixed-image-wrapper fixed-image-wrapper__v1">
                            <div className="fixed-image-wrapper__box  swipe-anim-container">
                                <div className="swipe-anim-container__img swipe-anim-container__active">
                                    <Image
                                        src="/images/_src/swipe-1-act.webp"
                                        alt=""
                                        className="swipe-anim-container__img-element"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="swipe-anim-container__img swipe-anim-container__def">
                                    <Image
                                        src="/images/_src/swipe-1-def.webp"
                                        alt=""
                                        className="swipe-anim-container__img-element"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="swipe-anim-container__line-controll"></div>
                            </div>
                        </div>
                        <div className="previews-sec__fixed-image-wrapper fixed-image-wrapper__v2">
                            <div className="fixed-image-wrapper__box fixed-image-wrapper__box-img">
                                <Image
                                    src="/images/_src/viev-2.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                        </div>
                        <div className="previews-sec__fixed-image-wrapper fixed-image-wrapper__v3">
                            <div className="fixed-image-wrapper__box  swipe-anim-container">
                                <div className="swipe-anim-container__img swipe-anim-container__active">
                                    <Image
                                        src="/images/_src/viev-3-v2.webp"
                                        alt=""
                                        className="swipe-anim-container__img-element"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="swipe-anim-container__img swipe-anim-container__def">
                                    <Image
                                        src="/images/_src/viev-3.webp"
                                        alt=""
                                        className="swipe-anim-container__img-element"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="swipe-anim-container__line-controll"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreviewsSection;