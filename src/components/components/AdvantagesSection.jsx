import React from 'react';
import Image from "next/image";

const AdvantagesSection = () => {
    return (
        <section className="advantages-sec">
            <div className="decor dc3"></div>
            <div className="decor dc3-v2"></div>
            <div className="decor dc3-mob"></div>
            <div className="container">
                <div className="advantages-sec__v1 adv">
                    <Image
                        src="/images/_src/adv1.webp"
                        alt=""
                        className="adv__img"
                        width={0}
                        height={0}
                        sizes="100%"
                    />
                    <div className="adv__text-wrapper">
                        <h3 className="adv__title">All</h3>
                        <p className="adv__big-text gradient-text">3,000,000+</p>
                        <div className="adv__title">shots available in GIF </div>
                    </div>
                </div>
                <div className="advantages-sec__col">
                    <div className="advantages-sec__v2 adv">
                        <Image
                            src="/images/_src/form.png"
                            alt=""
                            className="advantages-sec__v2-form"
                            width={0}
                            height={0}
                            sizes="100%"
                        />

                        <div className="advantages-sec__v2-wrapper">
                            <p className="adv__big-text gradient-text">70+</p>
                            <h3 className="adv__title">Full searchable cinematography parameters</h3>
                            {/*<p class="adv__subtitle">Creating visual references with the help of text prompts.</p>*/}
                        </div>

                    </div>

                    <div className="advantages-sec__v3 adv">
                        <Image
                            src="/images/_src/adv3.webp"
                            alt=""
                            className="adv__imgV3"
                            width={0}
                            height={0}
                            sizes="100%"
                        />
                        <h3 className="adv__title">Creating custom board</h3>
                        <p className="adv__subtitle">The ability to create custom boards for your projects</p>
                    </div>

                    <div className="advantages-sec__row advantages-sec__row5">
                        <div className="advantages-sec__v4 adv">
                            <Image
                                src="/images/_src/adv4.svg"
                                alt=""
                                className="advantages-sec__v4-img"
                                width={0}
                                height={0}
                                sizes="100%"
                            />
                            <h3 className="adv__title2">Tech info</h3>
                            <p className="adv__subtitle">Detailed information about the camera, lenses, crew, etc</p>
                        </div>

                        <div className="advantages-sec__v4 advantages-sec__v5 adv">
                            <Image
                                src="/images/_src/adv5.svg"
                                alt=""
                                className="advantages-sec__v4-img"
                                width={0}
                                height={0}
                                sizes="100%"
                            />
                            <h3 className="adv__title2">Team collaboration</h3>
                            <p className="adv__subtitle">Share and create boards in collaboration</p>
                        </div>
                    </div>

                    <div className="advantages-sec__v6 adv">
                        <div className="adv__row-type">
                            <div className="adv__type-element">
                                <p className="adv__type-element-text gradient-text">PDF</p>
                            </div>
                            <div className="adv__type-element">
                                <p className="adv__type-element-text gradient-text">GIF</p>
                            </div>
                            <div className="adv__type-element">
                                <p className="adv__type-element-text gradient-text">JPG</p>
                            </div>
                            <div className="adv__type-element">
                                <p className="adv__type-element-text gradient-text">MP4</p>
                            </div>
                        </div>
                        <h3 className="adv__title">Export</h3>
                        <p className="adv__subtitle">Export the board or a single shot</p>
                    </div>
                </div>
                <div className="advantages-sec__col">
                    <div className="advantages-sec__v7 adv">
                        <Image
                            src="/images/_src/adv7.webp"
                            alt=""
                            className="adv__img-v7"
                            width={0}
                            height={0}
                            sizes="100%"
                        />
                        <div className="adv__info-v7">
                            <h3 className="adv__title">Search by image</h3>
                            <p className="adv__subtitle">The ability to upload your image and find a similar one in our
                                gallery</p>
                        </div>
                    </div>

                    <div className="advantages-sec__v8 adv">
                        <Image
                            src="/images/_src/advV8.svg"
                            alt=""
                            className="adv__img-v8"
                            width={0}
                            height={0}
                            sizes="100%"
                        />
                        <div className="adv__info-v8">
                            <h3 className="adv__title">Neural engine for better searching</h3>
                        </div>
                    </div>

                    <div className="advantages-sec__row advantages-sec__row9">
                        <div className="advantages-sec__v9 adv">
                            <Image
                                src="/images/_src/adv9.webp"
                                alt=""
                                className="advantages-sec__v9-img"
                                width={0}
                                height={0}
                                sizes="100%"
                            />
                            <h3 className="adv__title2">Color palette</h3>
                        </div>
                        <div className="advantages-sec__v9 advantages-sec__v10 adv">
                            <Image
                                src="/images/_src/adv10.webp"
                                alt=""
                                className="advantages-sec__v9-img"
                                width={0}
                                height={0}
                                sizes="100%"
                            />
                            <h3 className="adv__title2">High quality </h3>
                        </div>
                    </div>

                    <div className="advantages-sec__v11  adv">
                        <div className="adv__img-container-v11">
                            <Image
                                src="/images/_src/adv11-x1.webp"
                                alt=""
                                className="adv__imgV11-x"
                                width={0}
                                height={0}
                                sizes="100%"
                            />
                            <Image
                                src="/images/_src/adv11-x2.webp"
                                alt=""
                                className="adv__imgV11-x"
                                width={0}
                                height={0}
                                sizes="100%"
                            />
                            <Image
                                src="/images/_src/adv11-x3.webp"
                                alt=""
                                className="adv__imgV11-x"
                                width={0}
                                height={0}
                                sizes="100%"
                            />
                        </div>
                        <h3 className="adv__title">Moodboard template for export</h3>
                        <p className="adv__subtitle">Export boards as mood boards with our templates</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;