import React from 'react';

const PlanPriceSection = () => {
    return (
        <section className="plan-price-sec">
            <div className="dc8 decor"></div>
            <div className="decor dc11-big"></div>
            <div className="container">

                <h2 className="sec-title">Choose your plan</h2>
                <div className="plan-price-sec__controll-line">
                    <div className="plan-price-sec__button-controll">Annual -38%</div>
                    <div className="plan-price-sec__button-controll plan-price-sec__button-controll_active">Monthly
                    </div>
                </div>

                <div className="plan-price-sec__row slider-price-pc">
                    <div className="plan-price-sec__element price-element">
                        <div className="price-element__top">
                            <div className="price-element__header">
                                <h3 className="price-element__title">Basic</h3>
                                <p className="price-element__subtitle">Gallery</p>
                                <p className="price-element__price"><b>5.99 $</b>/ mo</p>
                            </div>
                            <div className="price-element__body">
                                <ul className="price-element__list">
                                    <li className="price-element__list-element">Access to <b> 3,000,000</b> shots</li>
                                    <li className="price-element__list-element">Collaborate</li>
                                    <li className="price-element__list-element">Search by image</li>
                                    <li className="price-element__list-element">Up to 15* boards</li>
                                    <li className="price-element__list-element">Export mood board template</li>
                                </ul>
                            </div>
                        </div>
                        <div className="price-element__down">
                            <a href="" className="price-element__button">
                                Start now
                                <svg width="17" height="13" viewBox="0 0 17 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.8984 12.8984L9.50713 11.5071L13.2754 7.88395L10.6376 7.88395L0.898438 7.88395V5.91293L13.2754 5.91293L9.50713 2.28974L10.8984 0.898437L16.8984 6.89844L10.8984 12.8984Z"
                                        fill="black"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="plan-price-sec__element price-element">
                        <div className="price-element__top">
                            <div className="price-element__header">
                                <h3 className="price-element__title">Pro</h3>
                                <p className="price-element__subtitle">Gallery + GIF</p>
                                <p className="price-element__price"><b>14.99 $</b>/ mo</p>
                            </div>
                            <div className="price-element__body">
                                <ul className="price-element__list">
                                    <li className="price-element__list-element">Include <b>BASIC</b> plan</li>
                                    <li className="price-element__list-element">Access to <b>3,000,000</b> GIF shots
                                    </li>
                                    <li className="price-element__list-element">Export as JPG, GIF, PDF, MP4</li>
                                    <li className="price-element__list-element">UnlimitedBbords</li>
                                </ul>
                            </div>
                        </div>
                        <div className="price-element__down">
                            <a href="" className="price-element__button">
                                Start now
                                <svg width="17" height="13" viewBox="0 0 17 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.8984 12.8984L9.50713 11.5071L13.2754 7.88395L10.6376 7.88395L0.898438 7.88395V5.91293L13.2754 5.91293L9.50713 2.28974L10.8984 0.898437L16.8984 6.89844L10.8984 12.8984Z"
                                        fill="black"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="plan-price-sec__element price-element price-element__white">
                        <div className="price-element__top">
                            <div className="price-element__header">
                                <h3 className="price-element__title">Studio</h3>
                                <p className="price-element__subtitle">Gallery + AI</p>
                                <p className="price-element__price"><b>24.99 $</b>/ mo</p>
                            </div>
                            <div className="price-element__body">
                                <ul className="price-element__list">
                                    <li className="price-element__list-element">Include <b>BASIC</b> and <b>PRO</b> plan
                                    </li>
                                    <li className="price-element__list-element"><b>1,000</b> image generation
                                        <div className="price-element__list-element-img-counter img-counter">
                                            <div className="img-counter__row">
                                                <div className="img-counter__btn img-counter__btn_active">1,000</div>
                                                <div className="img-counter__btn">2,000</div>
                                                <div className="img-counter__btn">4,000</div>
                                            </div>
                                            <div className="img-counter__custom">
                                                <input type="text" className="img-counter__inp" placeholder="Custom"/>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="price-element__list-element">Sketch Transform</li>
                                    <li className="price-element__list-element">Image to Image generation</li>
                                    <li className="price-element__list-element">AI image Editing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="price-element__down">
                            <a href="" className="price-element__button">
                                Start now
                                <svg width="17" height="13" viewBox="0 0 17 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.8984 12.8984L9.50713 11.5071L13.2754 7.88395L10.6376 7.88395L0.898438 7.88395V5.91293L13.2754 5.91293L9.50713 2.28974L10.8984 0.898437L16.8984 6.89844L10.8984 12.8984Z"
                                        fill="black"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-price-mob__container">
                <div className="slider-price-mob__box">
                    <div className="swiper-price slider-price-mob">
                        <div className="plan-price-sec__row swiper-wrapper">
                            <div className="plan-price-sec__element price-element swiper-slide">
                                <div className="price-element__top">
                                    <div className="price-element__header">
                                        <h3 className="price-element__title">Basic</h3>
                                        <p className="price-element__subtitle">Gallery</p>
                                        <p className="price-element__price"><b>5.99 $</b>/ mo</p>
                                    </div>
                                    <div className="price-element__body">
                                        <ul className="price-element__list">
                                            <li className="price-element__list-element">Access to <b> 3,000,000</b>
                                                shots
                                            </li>
                                            <li className="price-element__list-element">Collaborate</li>
                                            <li className="price-element__list-element">Search by image</li>
                                            <li className="price-element__list-element">Up to 15* boards</li>
                                            <li className="price-element__list-element">Export mood board template</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="price-element__down">
                                    <a href="" className="price-element__button">
                                        Start now
                                        <svg width="17" height="13" viewBox="0 0 17 13" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.8984 12.8984L9.50713 11.5071L13.2754 7.88395L10.6376 7.88395L0.898438 7.88395V5.91293L13.2754 5.91293L9.50713 2.28974L10.8984 0.898437L16.8984 6.89844L10.8984 12.8984Z"
                                                fill="black"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="plan-price-sec__element price-element price-element__white swiper-slide">
                                <div className="price-element__top">
                                    <div className="price-element__header">
                                        <h3 className="price-element__title">Studio</h3>
                                        <p className="price-element__subtitle">Gallery + AI</p>
                                        <p className="price-element__price"><b>24.99 $</b>/ mo</p>
                                    </div>
                                    <div className="price-element__body">
                                        <ul className="price-element__list">
                                            <li className="price-element__list-element">Include <b>BASIC</b> and
                                                <b>PRO</b>
                                                plan
                                            </li>
                                            <li className="price-element__list-element"><b>1,000</b> image generation
                                                <div className="price-element__list-element-img-counter img-counter">
                                                    <div className="img-counter__row">
                                                        <div className="img-counter__btn img-counter__btn_active">1,000
                                                        </div>
                                                        <div className="img-counter__btn">2,000</div>
                                                        <div className="img-counter__btn">4,000</div>
                                                    </div>
                                                    <div className="img-counter__custom">
                                                        <input type="text" className="img-counter__inp"
                                                               placeholder="Custom"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="price-element__list-element">Sketch Transform</li>
                                            <li className="price-element__list-element">Image to Image generation</li>
                                            <li className="price-element__list-element">AI image Editing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="price-element__down">
                                    <a href="" className="price-element__button">
                                        Start now
                                        <svg width="17" height="13" viewBox="0 0 17 13" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.8984 12.8984L9.50713 11.5071L13.2754 7.88395L10.6376 7.88395L0.898438 7.88395V5.91293L13.2754 5.91293L9.50713 2.28974L10.8984 0.898437L16.8984 6.89844L10.8984 12.8984Z"
                                                fill="black"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="plan-price-sec__element price-element swiper-slide">
                                <div className="price-element__top">
                                    <div className="price-element__header">
                                        <h3 className="price-element__title">Pro</h3>
                                        <p className="price-element__subtitle">Gallery + GIF</p>
                                        <p className="price-element__price"><b>14.99 $</b>/ mo</p>
                                    </div>
                                    <div className="price-element__body">
                                        <ul className="price-element__list">
                                            <li className="price-element__list-element">Include <b>BASIC</b> plan</li>
                                            <li className="price-element__list-element">Access to <b>3,000,000</b> GIF
                                                shots
                                            </li>
                                            <li className="price-element__list-element">Export as JPG, GIF, PDF, MP4
                                            </li>
                                            <li className="price-element__list-element">UnlimitedBbords</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="price-element__down">
                                    <a href="" className="price-element__button">
                                        Start now
                                        <svg width="17" height="13" viewBox="0 0 17 13" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.8984 12.8984L9.50713 11.5071L13.2754 7.88395L10.6376 7.88395L0.898438 7.88395V5.91293L13.2754 5.91293L9.50713 2.28974L10.8984 0.898437L16.8984 6.89844L10.8984 12.8984Z"
                                                fill="black"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanPriceSection;