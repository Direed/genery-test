'use client'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import {useEffect, useRef, useState} from "react";

import { motion, circOut, useTransform, useScroll, easeIn } from "framer-motion";
import Gallery from "@/components/gallery";
import FrontSection from "@/components/components/FrontSection";
import AdvantagesSection from "@/components/components/AdvantagesSection";
import GenerationSection from "@/components/components/GenerationSection";
import Footer from "@/components/components/Footer";
import SignUpSection from "@/components/components/SignUpSection";
import ApplicableSection from "@/components/components/ApplicableSection";
import PlanPriceSection from "@/components/components/PlanPriceSection";
import PromptExamplesSection from "@/components/components/PromptExamplesSection";
import PreviewsSection from "@/components/components/PreviewsSection";
import InfographixSection from "@/components/components/InfographixSection";
import Image from "next/image";
import DesktopAnimation from "@/components/components/DesktopAnimation";
import MobileAnimation from "@/components/components/MobileAnimation";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [mediaQuery, setMediaQuery] = useState(0);
  const [mediaQuery750, setMediaQuery750] = useState(0);

  console.log(mediaQuery750, 'mediaQuery750')

  let flexRow1 = 0
  let flexRow2 = 1
  let flexRow3 = null

  function flexFunction() {
    let lensBtn = document.querySelectorAll('.filtr-row2-v1 .flexibility-sec__btn')
    let closeBtn = document.querySelectorAll('.filtr-row2-v2 .flexibility-sec__btn')
    let angleBtn = document.querySelectorAll('.filtr-row2-v3 .flexibility-sec__btn')

    if (lensBtn.length > 0 && closeBtn.length > 0 && angleBtn.length > 0) {

      for (let i = 0; i < lensBtn.length; i++) {
        lensBtn[i].addEventListener('click', function () {
          for (let x = 0; x < lensBtn.length; x++) {
            lensBtn[x].classList.remove('flexibility-sec__btn_active')
          }
          lensBtn[i].classList.add('flexibility-sec__btn_active')
          flexRow1 = i

          imageFlexChange()
        })
      }

      for (let i = 0; i < closeBtn.length; i++) {
        closeBtn[i].addEventListener('click', function () {
          for (let x = 0; x < closeBtn.length; x++) {
            closeBtn[x].classList.remove('flexibility-sec__btn_active')
          }
          closeBtn[i].classList.add('flexibility-sec__btn_active')
          flexRow2 = i

          imageFlexChange()
        })
      }

      for (let i = 0; i < angleBtn.length; i++) {
        angleBtn[i].addEventListener('click', function () {

          if (angleBtn[i].classList.contains('flexibility-sec__btn_active')) {
            angleBtn[i].classList.remove('flexibility-sec__btn_active')
            flexRow3 = null
          }
          else {

            for (let x = 0; x < angleBtn.length; x++) {
              angleBtn[x].classList.remove('flexibility-sec__btn_active')
            }

            angleBtn[i].classList.add('flexibility-sec__btn_active')
            flexRow3 = i
          }

          imageFlexChange()
        })
      }
    }
  }

  function imageFlexChange() {
    let img = document.querySelector('.flexibility-section-img')

    if (img != null) {

      if (flexRow1 == 0 && flexRow2 == 1 && flexRow3 == null) {
        img.src = '/images/_src/flex/anamorphic, close-up 2.jpg'
      }

      else if (flexRow1 == 0 && flexRow2 == 1 && flexRow3 == 0) {
        img.src = '/images/_src/flex/anamorphic, close-up, high angle 2.jpg'
      }

      else if (flexRow1 == 0 && flexRow2 == 1 && flexRow3 == 1) {
        img.src = '/images/_src/flex/anamorphic, close-up, low angle 2.jpg'
      }

      else if (flexRow1 == 0 && flexRow2 == 0 && flexRow3 == null) {
        img.src = '/images/_src/flex/anamorphic, extreme close-up 2.jpg'
      }

      else if (flexRow1 == 0 && flexRow2 == 0 && flexRow3 == 0) {
        img.src = '/images/_src/flex/anamorphic, extreme close-up, high angle 2.jpg'
      }

      else if (flexRow1 == 0 && flexRow2 == 0 && flexRow3 == 1) {
        img.src = '/images/_src/flex/anamorphic, extreme close-up, low angle 2.jpg'
      }

      else if (flexRow1 == 0 && flexRow2 == 2 && flexRow3 == null) {
        img.src = '/images/_src/flex/anamorphic, medium 2.jpg'
      }

      else if (flexRow1 == 0 && flexRow2 == 2 && flexRow3 == 0) {
        img.src = '/images/_src/flex/anamorphic, medium, high angle 2.jpg'
      }

      else if (flexRow1 == 0 && flexRow2 == 2 && flexRow3 == 1) {
        img.src = '/images/_src/flex/anamorphic, medium, low angle 2.jpg'
      }

      else if (flexRow1 == 1 && flexRow2 == 1 && flexRow3 == null) {
        img.src = '/images/_src/flex/spherical, close-up 2.jpg'
      }

      else if (flexRow1 == 1 && flexRow2 == 1 && flexRow3 == 0) {
        img.src = '/images/_src/flex/spherical, close-up, high angle 2.jpg'
      }

      else if (flexRow1 == 1 && flexRow2 == 1 && flexRow3 == 1) {
        img.src = '/images/_src/flex/spherical, close-up, low angle 2.jpg'
      }

      else if (flexRow1 == 1 && flexRow2 == 0 && flexRow3 == null) {
        img.src = '/images/_src/flex/spherical, extreme close-up 2.jpg'
      }

      else if (flexRow1 == 1 && flexRow2 == 0 && flexRow3 == 0) {
        img.src = '/images/_src/flex/spherical, extreme close-up, high angle 2.jpg'
      }

      else if (flexRow1 == 1 && flexRow2 == 0 && flexRow3 == 1) {
        img.src = '/images/_src/flex/spherical, extreme close-up, low angle 2.jpg'
      }

      else if (flexRow1 == 1 && flexRow2 == 2 && flexRow3 == null) {
        img.src = '/images/_src/flex/spherical, medium 2.jpg'
      }

      else if (flexRow1 == 1 && flexRow2 == 2 && flexRow3 == 0) {
        img.src = '/images/_src/flex/spherical, medium, high angle 2.jpg'
      }

      else if (flexRow1 == 1 && flexRow2 == 2 && flexRow3 == 1) {
        img.src = '/images/_src/flex/spherical, medium, low angle 2.jpg'
      }

      // console.log(flexRow1, flexRow2, flexRow3)
    }
  }

  function fixedChangeImage() {
    let imgBody = document.querySelector('.previews-body')
    if (imgBody != null) {

      let allTextElements = document.querySelectorAll('.previews-sec__element')
      let allImages = document.querySelectorAll('.previews-body .previews-sec__fixed-image-wrapper')
      let imageContainer = document.querySelector('.previews-body .previews-sec__fixed-container')
      let windowHeight = allTextElements[0].offsetHeight
      let imageContainerHeight = imageContainer.offsetHeight
      let distanceToBlock = allTextElements[0].getBoundingClientRect().top + window.scrollY;
      let distanceToBlock2 = allTextElements[1].getBoundingClientRect().top + window.scrollY;
      let cofPaddingValue = (windowHeight - imageContainerHeight) / 2

      imageContainer.style.top = `calc(50% - ${imageContainerHeight / 2}px)`
      imgBody.style.height = `calc(100% - ${cofPaddingValue + cofPaddingValue}px)`

      window.addEventListener("scroll", function (event) {

        let skrillValue = window.scrollY

        let vwStart = +distanceToBlock + +cofPaddingValue
        let vw1 = window.scrollY - vwStart
        let currentTranslateY_1 = imageContainerHeight - vw1


        let vwStart2 = +distanceToBlock2 + +cofPaddingValue
        let vw2 = window.scrollY - vwStart2
        let currentTranslateY_2 = imageContainerHeight - vw2

        if (currentTranslateY_1 <= 0) {
          currentTranslateY_1 = 0
        }
        else if (currentTranslateY_1 >= imageContainerHeight) {
          currentTranslateY_1 = imageContainerHeight
        }
        else {
          currentTranslateY_1 = imageContainerHeight - vw1
        }


        if (currentTranslateY_2 <= 0) {
          currentTranslateY_2 = 0
        }
        else if (currentTranslateY_2 >= imageContainerHeight) {
          currentTranslateY_2 = imageContainerHeight
        }
        else {
          currentTranslateY_2 = imageContainerHeight - vw2
        }

        if (skrillValue >= vwStart) {
          allImages[1].querySelector('.fixed-image-wrapper__box').style.transform = `translateY(${currentTranslateY_1}px)`
          allImages[0].style.zIndex = 2
          allImages[1].style.zIndex = 3
          allImages[2].style.zIndex = 1
        }
        else {
          allImages[1].querySelector('.fixed-image-wrapper__box').style.transform = `translateY(${imageContainerHeight}px)`
          allImages[1].querySelector('.fixed-image-wrapper__box').style.transform = `translateY(${currentTranslateY_1}px)`

        }

        if (skrillValue >= vwStart2) {
          allImages[2].querySelector('.fixed-image-wrapper__box').style.transform = `translateY(${currentTranslateY_2}px)`
          allImages[0].style.zIndex = 2
          allImages[1].style.zIndex = 3
          allImages[2].style.zIndex = 5
        }

        else {
          allImages[2].querySelector('.fixed-image-wrapper__box').style.transform = `translateY(${imageContainerHeight}px)`

        }
      });

    }
  }

  function filtrScript() {
    let allBodyElements = document.querySelectorAll('.swipe-anim-container');

    allBodyElements.forEach(function (element) {
      let controlElement = element.querySelector('.swipe-anim-container__line-controll');
      let rect = element.getBoundingClientRect();
      let distanceFromLeftElement = rect.x;
      let controlElementWidth = element.clientWidth;
      let activeElement = element.querySelector('.swipe-anim-container__active');

      let isDragging = false;
      let startX;

      let movableElement = controlElement;

      movableElement.addEventListener("mouseenter", function () {
        document.addEventListener("mousemove", onMouseMove);
      });

      document.addEventListener("mouseleave", function () {
        document.removeEventListener("mousemove", onMouseMove);
      });

      function onMouseMove(event) {
        if (isDragging) {
          console.log(event.clientX, 'event.clientX')
          var deltaX = event.clientX - startX;
          var newLeft = movableElement.offsetLeft + deltaX;
          movableElement.style.left = newLeft + "px";

          let currentWidth = startX - distanceFromLeftElement;
          activeElement.style.width = currentWidth + 'px';

          if (currentWidth >= controlElementWidth) {
            currentWidth = controlElementWidth - 15;
            movableElement.style.left = currentWidth + "px";
          } else if (currentWidth <= 10) {
            currentWidth = 10;
            movableElement.style.left = 8 + "px";
          } else {
            activeElement.style.width = currentWidth + 'px';
            startX = event.clientX;
            movableElement.style.left = currentWidth + "px";
          }
        }
      }

      movableElement.addEventListener("mousedown", function (event) {
        isDragging = true;
        startX = event.clientX;
        let distanceFromLeft = startX - movableElement.getBoundingClientRect().left;
        event.preventDefault();
      });

      document.addEventListener("mouseup", function () {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
      });
    });
  }

  function filtrScriptMob() {
    let allBodyElements = document.querySelectorAll('.swipe-anim-container');

    allBodyElements.forEach(function (element) {
      let controlElement = element.querySelector('.swipe-anim-container__line-controll');
      let rect = element.getBoundingClientRect();
      let distanceFromLeftElement = rect.x;
      let controlElementWidth = element.clientWidth;
      let activeElement = element.querySelector('.swipe-anim-container__active');

      let isDragging = false;
      let startX;

      let movableElement = controlElement;

      let bodyContainerWidth = element.offsetWidth
      let oneProcent = bodyContainerWidth / 100

      console.log(bodyContainerWidth, oneProcent)

      movableElement.addEventListener("touchstart", function (event) {
        isDragging = true;
        startX = event.touches[0].clientX;
        distanceFromLeftElement = startX - movableElement.getBoundingClientRect().left;
        event.preventDefault();
      });

      document.addEventListener("touchend", function (event) {
        isDragging = false;
      });

      document.addEventListener("touchmove", function (event) {
        if (isDragging) {
          var deltaX = event.touches[0].clientX - startX;
          var newLeft = movableElement.offsetLeft + deltaX;
          let currentWidth = startX - distanceFromLeftElement;

          if (currentWidth >= controlElementWidth - 40) {
            currentWidth = controlElementWidth - 50;
            movableElement.style.left = currentWidth - 2 + "px";
          } else if (currentWidth <= 30) {
            movableElement.style.left = 28 + "px";
          } else {
            let currentProcent = newLeft / oneProcent / 4
            activeElement.style.width = currentProcent + '%';
            startX = event.touches[0].clientX;
            movableElement.style.left = newLeft + "px";
          }
        }


      });

      // document.addEventListener("touchend", function (event) {
      //     let leftSize = controlElement.style.left
      //     let startX = event;

      //     console.log(leftSize, startX.target.offsetLeft)
      //     activeElement.style.width = leftSize + 'px';
      // });
    });
  }

  function mobMeny() {
    let burger = document.querySelector('.header__burger')
    let header = document.querySelector('.header')
    let mobMeny = document.querySelector('.mob-meny')

    if (burger != null) {
      burger.addEventListener('click', function () {
        mobMeny.classList.toggle('mob-meny_active')
        header.classList.toggle('header_active')
      })
    }
  }

  useEffect(() => {
    const mediaQueryValue = window.matchMedia("(max-width: 1150px)");
    const mediaQuery750Value = window.matchMedia("(max-width: 750px)");
    setMediaQuery(mediaQueryValue);
    setMediaQuery750(mediaQuery750Value)
  }, [])

  useEffect(() => {

    //flex sec change

    flexFunction()

    //flext image current
    imageFlexChange()

    //fixed change image anim

    if (mediaQuery.matches) {

    }
    else {
      fixedChangeImage()
    }

    //filtr script
    if (mediaQuery.matches) {
      filtrScriptMob()
    }
    else {
      filtrScript()
    }
    //mob meny
    mobMeny()
  }, [mediaQuery, mediaQuery750])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        {/*<header className="header">*/}
        {/*  <div className="container">*/}
        {/*    <a href="" className="header__logo">*/}
        {/*      <img src="/images/_src/logo.svg" alt="" className="header__logo-img"/>*/}
        {/*    </a>*/}
        {/*    <nav className="header__nav">*/}
        {/*      <ul className="header__nav-list">*/}
        {/*        <li className="header__nav-element">*/}
        {/*          <a href="" className="header__nav-link nav-link">*/}
        {/*            <span className="nav-link__text nav-link__active">Gallery</span>*/}
        {/*            <span className="nav-link__text nav-link__def">Gallery</span>*/}
        {/*            <span className="nav-link__text nav-link__hidden">Gallery</span>*/}
        {/*          </a>*/}
        {/*        </li>*/}

        {/*        <li className="header__nav-element">*/}
        {/*          <a href="" className="header__nav-link nav-link">*/}
        {/*            <span className="nav-link__text nav-link__active">Generation</span>*/}
        {/*            <span className="nav-link__text nav-link__def">Generation</span>*/}
        {/*            <span className="nav-link__text nav-link__hidden">Generation</span>*/}
        {/*          </a>*/}
        {/*        </li>*/}

        {/*        <li className="header__nav-element">*/}
        {/*          <a href="" className="header__nav-link nav-link">*/}
        {/*            <span className="nav-link__text nav-link__active">Pricing</span>*/}
        {/*            <span className="nav-link__text nav-link__def">Pricing</span>*/}
        {/*            <span className="nav-link__text nav-link__hidden">Pricing</span>*/}
        {/*          </a>*/}
        {/*        </li>*/}

        {/*        <li className="header__nav-element">*/}
        {/*          <a href="" className="header__nav-link nav-link">*/}
        {/*            <span className="nav-link__text nav-link__active">Blog</span>*/}
        {/*            <span className="nav-link__text nav-link__def">Blog</span>*/}
        {/*            <span className="nav-link__text nav-link__hidden">Blog</span>*/}
        {/*          </a>*/}
        {/*        </li>*/}
        {/*      </ul>*/}
        {/*    </nav>*/}
        {/*    <div className="header__user-container">*/}
        {/*      <a href="" className="header__user-login">Log in</a>*/}
        {/*      <button className="btnV1">*/}
        {/*        <div className="nav-link">*/}
        {/*          <span className="nav-link__text nav-link__active">Sign up</span>*/}
        {/*          <span className="nav-link__text nav-link__def">Sign up</span>*/}
        {/*          <span className="nav-link__text nav-link__hidden">Sign up</span>*/}
        {/*        </div>*/}
        {/*      </button>*/}
        {/*    </div>*/}

        {/*    <div className="header__burger">*/}
        {/*      <svg className="header__burger-def" width="29" height="32" viewBox="0 0 29 32" fill="none"*/}
        {/*           xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <rect y="32" width="32" height="3" rx="1.5" transform="rotate(-90 0 32)" fill="white"/>*/}
        {/*        <rect x="13" y="32" width="16" height="3" rx="1.5" transform="rotate(-90 13 32)" fill="white"/>*/}
        {/*        <rect x="26" y="32" width="32" height="3" rx="1.5" transform="rotate(-90 26 32)" fill="white"/>*/}
        {/*      </svg>*/}
        {/*      <svg className="header__burger-activ" width="29" height="32" viewBox="0 0 29 32" fill="none"*/}
        {/*           xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <rect x="25" y="28.375" width="32" height="3" rx="1.5" transform="rotate(-135 25 28.375)"*/}
        {/*              fill="white"/>*/}
        {/*        <rect x="13" y="17" width="1" height="3" rx="0.5" transform="rotate(-90 13 17)" fill="white"/>*/}
        {/*        <rect x="2" y="26.25" width="32" height="3" rx="1.5" transform="rotate(-45 2 26.25)"*/}
        {/*              fill="white"/>*/}
        {/*      </svg>*/}

        {/*    </div>*/}
        {/*  </div>*/}
        {/*</header>*/}

        <div className="mob-meny">
          <div className="container">
            <div className="mob-meny__wrapper">

              <ul className="header__nav-list">
                <li className="header__nav-element">
                  <a href="" className="header__nav-link nav-link">
                    <span className="nav-link__text nav-link__active">Gallery</span>
                    <span className="nav-link__text nav-link__def">Gallery</span>
                    <span className="nav-link__text nav-link__hidden">Gallery</span>
                  </a>
                </li>

                <li className="header__nav-element">
                  <a href="" className="header__nav-link nav-link">
                    <span className="nav-link__text nav-link__active">Generation</span>
                    <span className="nav-link__text nav-link__def">Generation</span>
                    <span className="nav-link__text nav-link__hidden">Generation</span>
                  </a>
                </li>

                <li className="header__nav-element">
                  <a href="" className="header__nav-link nav-link">
                    <span className="nav-link__text nav-link__active">Pricing</span>
                    <span className="nav-link__text nav-link__def">Pricing</span>
                    <span className="nav-link__text nav-link__hidden">Pricing</span>
                  </a>
                </li>

                <li className="header__nav-element">
                  <a href="" className="header__nav-link nav-link">
                    <span className="nav-link__text nav-link__active">Blog</span>
                    <span className="nav-link__text nav-link__def">Blog</span>
                    <span className="nav-link__text nav-link__hidden">Blog</span>
                  </a>
                </li>
              </ul>

              <div className="mob-meny__line"></div>


              <div className="header__user-container">
                <a href="" className="header__user-login">Log in</a>
                <button className="btnV1">
                  <div className="nav-link">
                    <span className="nav-link__text nav-link__active">Sign up</span>
                    <span className="nav-link__text nav-link__def">Sign up</span>
                    <span className="nav-link__text nav-link__hidden">Sign up</span>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>

        <main className="main" id="main-top">
          <FrontSection />
          <AdvantagesSection />
          <GenerationSection />

          {mediaQuery750?.matches ? <MobileAnimation /> : <DesktopAnimation />}

          <InfographixSection />
          <PreviewsSection />
          <PromptExamplesSection mediaQuery={mediaQuery} mediaQuery750={mediaQuery750}/>
          <PlanPriceSection />
          <ApplicableSection />
          <SignUpSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
