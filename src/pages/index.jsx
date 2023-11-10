'use client'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import {useEffect, useRef, useState} from "react";

import { motion, circOut, useTransform, useScroll, easeInOut, easeIn } from "framer-motion";
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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [mediaQuery, setMediaQuery] = useState(0);
  const [mediaQuery750, setMediaQuery750] = useState(0);
  const refSpaceSection = useRef(null)
  const refScaleSpaceSection = useRef(null)
  const refScaleGalleryGenerationSection = useRef(null)
  const refOpacityEasilySwitchSection = useRef(null)
  const refOpacityLightenDropdownSection = useRef(null)
  const refOpacityParametersTextSection = useRef(null)
  const refTransformXEasyControlSection = useRef(null)
  const refTransformXGenerateByImageSection = useRef(null)

  const refScaleAdvancedToolsSection = useRef(null)
  const refOpacityAdvancedToolsTextSection = useRef(null)
  const refZeroOpacityAdvancedToolsTextSection = useRef(null)
  const refScaleFlexibilitySection = useRef(null)
  const refOpacityFlexibilityTextSection = useRef(null)

  const refSpaceImg = useRef(null)
  const refSpaceButtons = useRef(null)
  const refGirlImg = useRef(null)
  const refSpaceHeader = useRef(null)

  const { scrollYProgress: scrollYProgressSpaceSection } = useScroll({
    target: refSpaceSection,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: scrollYProgressScaleSpaceSection } = useScroll({
    target: refScaleSpaceSection,
    offset: ["start end", "end end"]
  })


  const { scrollYProgress: scrollYProgressScaleGalleryGenerationSection } = useScroll({
    target: refScaleGalleryGenerationSection,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: scrollYProgressOpacityEasilySwitchSection } = useScroll({
    target: refOpacityEasilySwitchSection,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: scrollYProgressOpacityLightenDropdownSection } = useScroll({
    target: refOpacityLightenDropdownSection,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: scrollYProgressOpacityParametersTextSection } = useScroll({
    target: refOpacityParametersTextSection,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: scrollYProgressTransformXEasyControlSection } = useScroll({
    target: refTransformXEasyControlSection,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: scrollYProgressTransformXGenerateByImageSection } = useScroll({
    target: refTransformXGenerateByImageSection,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: scrollYProgressScaleAdvancedToolsSection } = useScroll({
    target: refScaleAdvancedToolsSection,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: scrollYProgressOpacityAdvancedToolsTextSection } = useScroll({
    target: refOpacityAdvancedToolsTextSection,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: scrollYProgressZeroOpacityAdvancedToolsTextSection } = useScroll({
    target: refZeroOpacityAdvancedToolsTextSection,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: scrollYProgressScaleFlexibilitySection } = useScroll({
    target: refScaleFlexibilitySection,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: scrollYProgressOpacityFlexibilityTextSection } = useScroll({
    target: refOpacityFlexibilityTextSection,
    offset: ["start end", "end end"]
  })



  const { scrollYProgress: scrollYProgressSpaceImg } = useScroll({
    target: refSpaceImg,
    offset: ["start end", "end end"]
  })
  const { scrollYProgress: scrollYProgressSpaceHeader } = useScroll({
    target: refSpaceHeader,
    offset: ["start end", "end end"]
  })

  scrollYProgressScaleGalleryGenerationSection.on('change', () => {

  })


  //TODO: logic for scaling container to left top section
  // scrollYProgressSpaceSection.on('change', (value) => {
  //
  //   console.log('value', value)
  //   if (value === 1) {
  //
  //     const generationSectionImages = document.querySelector(".generation-sec");
  //     generationSectionImages.style.opacity = 0
  //     const spaceSectionImages = document.querySelector(".space-section");
  //     spaceSectionImages.style.opacity = 1
  //   } else {
  //
  //     const generationSectionImages = document.querySelector(".generation-sec");
  //     generationSectionImages.style.opacity = 1
  //     const spaceSectionImages = document.querySelector(".space-section");
  //     spaceSectionImages.style.opacity = 0
  //   }
  // })

  const widthSpaceSection = useTransform(scrollYProgressSpaceSection, [1, 0], ['100%', '600%'],{
    ease: circOut
  });
  // const filterSpaceSection = useTransform(scrollYProgressSpaceSection, [1, 0], [0, 40]);
  // const transformXSpaceSection = useTransform(scrollYProgressSpaceSection, [1, 0], ['0%', '150%']);

  const transformXSpaceSection = useTransform(scrollYProgressScaleSpaceSection, [1, 0], ['4%', '-10%'], {
    ease: circOut
  });
  const transformYSpaceSection = useTransform(scrollYProgressScaleSpaceSection, [1, 0], ['33%', '0%'], {
    ease: circOut
  });
  const scaleSpaceSection = useTransform(scrollYProgressScaleSpaceSection, [1, 0], [0.6, 1], {
    ease: circOut
  });




  const transformYSpaceHeaderSection = useTransform(scrollYProgressScaleSpaceSection, [1, 0], ['62vh', '-10vh'], {
    ease: circOut
  });
  const scaleSpaceHeaderSection = useTransform(scrollYProgressScaleSpaceSection, [1, 0], [0.95, 3], {
    ease: circOut
  });

  const transformYSpaceButtonsSection = useTransform(scrollYProgressScaleSpaceSection, [1, 0], ['-10vh', '50vh'], {
    ease: circOut
  });
  const scaleSpaceButtonsSection = useTransform(scrollYProgressScaleSpaceSection, [1, 0], [1, 3], {
    ease: circOut
  });

  // GalleryGeneration
  const widthSpaceGalleryGenerationSection = useTransform(scrollYProgressScaleGalleryGenerationSection, [1, 0], ['365%', '100%'],{
    ease: circOut
  });

  const opacityEasilySwitchSection = useTransform(scrollYProgressOpacityEasilySwitchSection, [1, 0], [1, 0],{
    ease: circOut
  });

  const opacityEasilySwitchDropdownSection = useTransform(scrollYProgressOpacityLightenDropdownSection, [1, 0], [0, 1],{
    ease: circOut
  });

  // lighten dropdown
  const opacityLightenDropdownSection = useTransform(scrollYProgressOpacityLightenDropdownSection, [1, 0], [1, 0],{
    ease: circOut
  });
  const widthLightenDropdownSection = useTransform(scrollYProgressOpacityLightenDropdownSection, [1, 0], ['50%', '100%'],{
    ease: circOut
  });

  // parameters text
  const opacityParametersTextSection = useTransform(scrollYProgressOpacityParametersTextSection, [1, 0], [1, 0],{
    ease: circOut
  });

  //easy control
  const transformXEasyControlSection = useTransform(scrollYProgressTransformXEasyControlSection, [1, 0], ['-165%', '0%'],{
    ease: circOut
  });

  const opacityEasyControlDropdown = useTransform(scrollYProgressTransformXEasyControlSection, [1, 0], [1, 0],{
    ease: circOut
  });

  const opacitySpaceLightingDropdown = useTransform(scrollYProgressTransformXEasyControlSection, [0.5, 0], [0, 1],{
    ease: circOut
  });

  const opacityEasyControlText = useTransform(scrollYProgressTransformXEasyControlSection, [3, 0], [1, 0],{
    ease: circOut
  });

  const opacityZeroParametersText = useTransform(scrollYProgressTransformXEasyControlSection, [0.5, 0], [0, 1], {
    ease: circOut
  });

  //generate by image
  const transformXGenerateByImageSection = useTransform(scrollYProgressTransformXGenerateByImageSection, [1, 0], ['165%', '0%'],{
    ease: circOut
  });

  const opacityGenerateByImagePopup = useTransform(scrollYProgressTransformXGenerateByImageSection, [1, 0], [1, 0],{
    ease: circOut
  });

  //generate by image text
  const opacityGenerateByImageText = useTransform(scrollYProgressTransformXEasyControlSection, [3.5, 0], [3, 0],{
    ease: circOut
  });

  const zeroOpacityGenerateByImageText = useTransform(scrollYProgressScaleAdvancedToolsSection, [0.5, 0], [0, 1],{
    ease: circOut
  });

  //advanced tools
  const widthAdvancedToolsSection = useTransform(scrollYProgressScaleAdvancedToolsSection, [1, 0], ['50%', '100%'],{
    ease: circOut
  });
  const transformXAdvancedToolsSection = useTransform(scrollYProgressScaleAdvancedToolsSection, [1, 0], ['-20%', '0%'],{
    ease: circOut
  });
  const transformYAdvancedToolsSection = useTransform(scrollYProgressScaleAdvancedToolsSection, [1, 0], ['15%', '0%'],{
    ease: circOut
  });
  const opacityAdvancedToolsSection = useTransform(scrollYProgressScaleAdvancedToolsSection, [1, 0], [0, 1],{
    ease: circOut
  });

  //advanced tools text
  const opacityAdvancedToolsTextSection = useTransform(scrollYProgressOpacityAdvancedToolsTextSection, [1, 0], [1, 0],{
    ease: circOut
  });

  const zeroOpacityAdvancedToolsTextSection = useTransform(scrollYProgressZeroOpacityAdvancedToolsTextSection, [1, 0], [0, 1],{
    ease: circOut
  });

  //flexibility
  const transformXAdvancedToolsInFlexibilitySection = useTransform(scrollYProgressScaleFlexibilitySection, [1, 0], ['42%', '0%'],{
    ease: circOut
  });

  const zeroOpacityAdvancedToolsSection = useTransform(scrollYProgressScaleFlexibilitySection, [1, 0], [0, 1],{
    ease: circOut
  });

  const transformXFlexibilityInAdvancedToolsSection = useTransform(scrollYProgressScaleFlexibilitySection, [1, 0], ['150%', '0%'],{
    ease: circOut
  });

  const opacityFlexibilitySection = useTransform(scrollYProgressScaleFlexibilitySection, [1, 0], [1, 0],{
    ease: circOut
  });

  const opacityFlexibilityTextSection = useTransform(scrollYProgressOpacityFlexibilityTextSection, [1, 0], [1, 0],{
    ease: circOut
  });

  const opacitySpaceButtonsSection = useTransform(scrollYProgressScaleFlexibilitySection, [1, 0], [0, 1],{
    ease: circOut
  });




  scrollYProgressSpaceSection.on('change', value => {
    refSpaceImg.current.style.filter = `blur(${(1 - value) * 40}px)`
  })

  scrollYProgressScaleFlexibilitySection.on('change', value => {
    console.log(value, 'value')
    refSpaceImg.current.style.filter = `blur(${(1 - (1 - value)) * 40}px)`
    if(value > 0.10 ) {
      refGirlImg.current.style.opacity = 1
      refGirlImg.current.style.filter = `blur(${(1 - value) * 1000}px)`
    } else {
      refGirlImg.current.style.opacity = 0.4
      refGirlImg.current.style.filter = `blur(${(1 - value) * 400}px)`
    }
  })

  scrollYProgressScaleGalleryGenerationSection.on('change', value => {
    refSpaceImg.current.style.opacity = 0.4
  })

  // scrollYProgressGe

  // scrollYProgressScaleFlexibilitySection.on('change', value => {
  //   console.log(value, 'value in flexibility')
  //   refSpaceImg.current.style.filter = `blur(${(1 - value) * 40}px)`
  //   refSpaceImg.current.src = value > 0.20 ? "/images/_src/flex/anamorphic, close-up, high angle 2.jpg" : '/images/_src/Space.webp'
  //
  // })

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


  // function animationAfterAdvantages() {
  //   const advantagesSection = document.querySelector(".advantages-sec .container");
  //   console.log(advantagesSection.getBoundingClientRect().top + window.scrollY + advantagesSection.scrollHeight, 'advantagesSection.scrollHeight')
  //   let scrollPosition = document.documentElement.scrollTop;
  //   console.log(scrollPosition, 'scrollPosition')
  //   const generationSection = document.querySelector(".generation-sec__container");
  //
  //   console.log(generationSection.style, 'generationSection')
  //
  //   if(scrollPosition > advantagesSection.getBoundingClientRect().top + window.scrollY + advantagesSection.scrollHeight - 380) {
  //     generationSection.style.transform = `scale(${(generationSection.getBoundingClientRect().width / generationSection.offsetWidth) - 0.1})`
  //   }
  //
  // }
  //
  //
  // useEffect(() => {
  //
  //   window.addEventListener("scroll", animationAfterAdvantages)
  //
  //   // return window.removeEventListener('scroll', animationAfterAdvantages)
  // }, [])

  useEffect(() => {

    function sssss() {
      const generationSection = document.querySelector(".generation-sec__container");
      const generationSectionInfo = document.querySelector(".generation-sec__container");
      const spaceSectionImages = document.querySelector(".space-section");


      let scrollPosition = document.documentElement.scrollTop;

      if(scrollPosition >= document.documentElement.scrollTop + generationSection.getBoundingClientRect().top) {
        // generationSectionInfo.style.display = "none"
        // spaceSectionImages.style.display = "flex"
        // generationSectionInfo.style.position = "absolute"
        // spaceSectionImages.style.position = "relative"
        // generationSectionInfo.style.opacity = "0"
        // spaceSectionImages.style.opacity = "1"
        // generationSectionInfo.style.height = "calc(100% - 100vh)"
        // document.documentElement.scrollTop = document.documentElement.scrollTop + generationSection.getBoundingClientRect().top + spaceSectionImages.scrollHeight
      } else {
        // generationSectionInfo.style.height = "100vh"
        // generationSectionInfo.style.display = "initial"
        // spaceSectionImages.style.display = "none"
        // generationSectionInfo.style.position = "relative"
        // spaceSectionImages.style.position = "absolute"
        // generationSectionInfo.style.opacity = "1"
        // spaceSectionImages.style.opacity = "0"
      }
    }

    window.addEventListener('scroll',sssss)

  }, [])


  console.log(zeroOpacityAdvancedToolsSection, 'zeroOpacityAdvancedToolsSection')

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

          <section style={{ height: '375vh', transform: 'translateY(-100vh)', marginBottom: '-100vh'}} className={"space-section"}>
            <div style={{ height: '10vh', position: 'absolute' }} ref={refSpaceSection} />
            <div style={{ height: '50vh', top: '10vh', position: 'absolute' }} ref={refScaleSpaceSection} />
            <div style={{ height: '50vh', top: '70vh', position: 'absolute' }} ref={refScaleGalleryGenerationSection} />
            <div style={{ height: '15vh', top: '120vh', position: 'absolute' }} ref={refOpacityEasilySwitchSection} />
            <div style={{ height: '15vh', top: '140vh', position: 'absolute' }} ref={refOpacityLightenDropdownSection} />
            <div style={{ height: '15vh', top: '140vh', position: 'absolute' }} ref={refOpacityLightenDropdownSection} />
            <div style={{height: '15vh', top: '160vh', position: 'absolute'}} ref={refOpacityParametersTextSection} />
            <div style={{height: '15vh', top: '180vh', position: 'absolute'}} ref={refTransformXEasyControlSection} />
            <div style={{height: '15vh', top: '200vh', position: 'absolute'}} ref={refTransformXGenerateByImageSection} />
            <div style={{height: '15vh', top: '220vh', position: 'absolute'}} ref={refScaleAdvancedToolsSection} />
            <div style={{height: '15vh', top: '230vh', position: 'absolute'}} ref={refOpacityAdvancedToolsTextSection} />
            <div style={{height: '15vh', top: '240vh', position: 'absolute'}} ref={refZeroOpacityAdvancedToolsTextSection} />
            <div style={{height: '15vh', top: '260vh', position: 'absolute'}} ref={refScaleFlexibilitySection} />
            <div style={{height: '15vh', top: '280vh', position: 'absolute'}} ref={refOpacityFlexibilityTextSection} />

            <div style={{ position: 'sticky', top: '40vh', height: '150vh', width: '100%'}}>
              <motion.div
                style={{
                  width: widthLightenDropdownSection,
                }}
              >
                <motion.div style={{
                  width: widthAdvancedToolsSection,
                }}>
                <motion.div style={{
                  translateX: transformXGenerateByImageSection
                }}>
                <motion.div style={{
                  translateX: transformXEasyControlSection
                }}>
                <motion.div
                  style={{
                    width: widthSpaceGalleryGenerationSection,
                  }}
                >
                  <motion.div
                    style={{
                      zIndex: 100,
                      position: 'relative',
                      scale: scaleSpaceHeaderSection,
                      translateY: transformYSpaceHeaderSection,
                      opacity: opacityAdvancedToolsSection,
                    }}
                  >
                    {/*<motion.div style={{opacity: opacityEasilySwitchDropdownSection}}>*/}
                    {/*  <motion.div style={{opacity: opacityEasilySwitchSection, position: "absolute", top: "170%", left: "6.5%" }}>*/}
                    {/*    <h2 className="page-title">easily switch from <br /><i>gallery</i> to <i>generation</i></h2>*/}
                    {/*  </motion.div>*/}
                    {/*</motion.div>*/}

                    {/*<motion.div style={{opacity: opacityZeroParametersText, position: "absolute", top: "170%", left: "5%" }}>*/}
                    {/*  <motion.div style={{ opacity: opacityParametersTextSection, position: "absolute", top: '170%', left: "5%"}}>*/}

                    {/*    <div style={{maxWidth: '480px'}}>*/}
                    {/*      <h3 className="sec-title">Parameters</h3>*/}
                    {/*      <p className="sec-subtitle">You can use the cinematic parameters we have prepared, on which*/}
                    {/*        our artificial intelligence was trained. All parameters work both in the gallery tab*/}
                    {/*        and in the generation.</p>*/}
                    {/*      <div className="interface-sec-3__btn-container">*/}
                    {/*        <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>*/}
                    {/*      </div>*/}
                    {/*    </div>*/}
                    {/*  </motion.div>*/}
                    {/*</motion.div>*/}

                    <motion.div style={{ opacity: opacityEasyControlText, position: "absolute", top: '170%', left: "80%"}}>

                      <div style={{maxWidth: '480px'}}>
                          <h3 className="sec-title">Easy control</h3>
                          <p className="sec-subtitle">Easily manage parameters directly from the search bar</p>
                          <div className="interface-sec-3__btn-container">
                            <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                          </div>
                      </div>
                    </motion.div>

                    {/*<motion.div style={{ opacity: opacityGenerateByImageText, position: "absolute", top: '170%', left: "5%"}}>*/}
                    {/*  <div style={{maxWidth: '480px'}}>*/}
                    {/*    <h3 className="sec-title">Generate by image</h3>*/}
                    {/*    <p className="sec-subtitle">You can upload your pictures or any picture from the Internet to*/}
                    {/*      generate similar ones, or improve and edit the image</p>*/}
                    {/*    <div className="interface-sec-3__btn-container">*/}
                    {/*      <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>*/}
                    {/*    </div>*/}
                    {/*  </div>*/}
                    {/*</motion.div>*/}

                    <motion.div style={{opacity: opacitySpaceLightingDropdown}}>
                      <motion.div style={{opacity: opacityLightenDropdownSection, position: "absolute", top: "50%", left: "20%" }}>
                        <img
                          style={{ width: '100%'}}
                          src={"/images/_src/Space_lighten_dropdown.webp"}
                          alt=""
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div style={{opacity: opacityEasyControlDropdown, position: "absolute", top: "20%", left: "61.25%" }}>
                      <img
                          style={{ width: '100%'}}
                          src={"/images/_src/easy-controls-dropdown.png"}
                          alt=""
                      />
                    </motion.div>

                    <motion.div style={{opacity: opacityGenerateByImagePopup, position: "absolute", top: "100%", left: "22.5%" }}>
                      <img
                          style={{ width: '100%'}}
                          src={"/images/_src/generate-by-image-popup.webp"}
                          alt=""
                      />
                    </motion.div>

                    <img
                      style={{ width: '100%'}}
                      ref={refSpaceHeader}
                      src={"/images/_src/Barbar_1.svg"}
                      alt=""
                    />
                  </motion.div>


                  <motion.div style={{
                    translateX: transformXAdvancedToolsInFlexibilitySection,
                  }}>
                  <motion.div style={{
                    translateX: transformXAdvancedToolsSection,
                    translateY: transformYAdvancedToolsSection,
                  }}>
                  <motion.div
                      className={"space-section-container"}
                      style={{
                        scale: scaleSpaceSection,
                        translateX: transformXSpaceSection,
                        translateY: transformYSpaceSection,
                      }}>
                    <div className={"space-section-images"}>

                      <motion.div
                        style={{
                          width: widthSpaceSection,
                        }}
                      >
                        <img
                            style={{ width: '100%'}}
                            ref={refSpaceImg}
                            src={"/images/_src/Space.webp"}
                            alt=""
                        />
                        <img
                            style={{ width: '100%', position: 'absolute', left: 0, opacity: 0}}
                            ref={refGirlImg}
                            className={'flexibility-section-img'}
                            src={"/images/_src/flex/anamorphic, close-up, high angle 2.jpg"}
                            alt=""
                        />


                        {/*<motion.div style={{*/}
                        {/*  position: "absolute", top: '40%', left: "105%", width: '365%',*/}
                        {/*  opacity: zeroOpacityAdvancedToolsTextSection*/}
                        {/*}}>*/}
                        {/*  <motion.div style={{ opacity: opacityAdvancedToolsTextSection}}>*/}
                        {/*    <div>*/}
                        {/*      <h3 className="sec-title">Advanced tools</h3>*/}
                        {/*      <p className="sec-subtitle">you can edit your picture using advanced tools to achieve even*/}
                        {/*        better results.</p>*/}
                        {/*      <div className="interface-sec-3__btn-container">*/}
                        {/*        <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>*/}
                        {/*      </div>*/}
                        {/*    </div>*/}
                        {/*  </motion.div>*/}
                        {/*</motion.div>*/}

                      </motion.div>
                    </div>

                    <motion.div
                      style={{
                        opacity: opacitySpaceButtonsSection,
                        scale: scaleSpaceButtonsSection,
                        translateY: transformYSpaceButtonsSection
                      }}
                    >
                      <div ref={refSpaceButtons} style={{display: 'flex', width: '100%', padding: '0 20px', height: '80px'}}>
                        <img style={{marginRight: 'auto'}} src={"/images/_src/animations/edit.png"} alt=""/>
                        <div style={{display: 'flex', gap: '10px'}}>
                          <img src={"/images/_src/animations/arrow-down.png"} alt=""/>
                          <img src={"/images/_src/animations/save.png"} alt=""/>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  </motion.div>
                  </motion.div>


                  <motion.div style={{
                    position: "absolute", top: 'calc((375vh - 275vh) * 0.9)', left: "65vw", width: '100%',
                    opacity: zeroOpacityAdvancedToolsTextSection
                  }}>
                    <motion.div style={{ opacity: opacityAdvancedToolsTextSection}}>
                      <div>
                        <h3 className="sec-title">Advanced tools</h3>
                        <p className="sec-subtitle">you can edit your picture using advanced tools to achieve even
                          better results.</p>
                        <div className="interface-sec-3__btn-container">
                          <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>



                  <motion.div style={{opacity: opacityEasilySwitchDropdownSection}}>
                    <motion.div style={{opacity: opacityEasilySwitchSection, position: "absolute", top: "25%", width: '100%', paddingLeft: '8%' }}>
                      <h2 className="page-title">easily switch from <br /><i>gallery</i> to <i>generation</i></h2>
                    </motion.div>
                  </motion.div>

                  <motion.div style={{opacity: opacityZeroParametersText }}>
                    <motion.div style={{ opacity: opacityParametersTextSection, position: "absolute", top: '37%', left: "10%"}}>

                      <div style={{maxWidth: '480px'}}>
                        <h3 className="sec-title">Parameters</h3>
                        <p className="sec-subtitle">You can use the cinematic parameters we have prepared, on which
                          our artificial intelligence was trained. All parameters work both in the gallery tab
                          and in the generation.</p>
                        <div className="interface-sec-3__btn-container">
                          <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>



                  <motion.div style={{opacity: zeroOpacityGenerateByImageText}}>
                    <motion.div style={{ opacity: opacityGenerateByImageText, position: "absolute", top: '37%', left: "10%"}}>
                      <div style={{maxWidth: '480px'}}>
                        <h3 className="sec-title">Generate by image</h3>
                        <p className="sec-subtitle">You can upload your pictures or any picture from the Internet to
                          generate similar ones, or improve and edit the image</p>
                        <div className="interface-sec-3__btn-container">
                          <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>





                  <motion.div style={{
                    opacity: opacityFlexibilityTextSection,
                    position: "absolute",
                    top: '75%',
                    left: "20%",
                    width: "100%"
                  }}>
                    <div>
                      <div className="flexibility-sec__text">
                        <div className="flexibility-sec__text-wrapper">
                          <h2 className="sec-title">Flexibility</h2>
                          <p className="sec-subtitle">You can test the flexibility of our AI by changing parameters
                          </p>
                        </div>

                        <div className="flexibility-sec__filtr">
                          <div className="flexibility-sec__filtr-rov1">
                            <span className="flexibility-sec__filtr-number">01</span>
                            <span className="flexibility-sec__filtr-line"></span>
                          </div>

                          <div className="flexibility-sec__filtr-row2 filtr-row2-v1">
                            <div className="flexibility-sec__btn flexibility-sec__btn_active">Anamorphic lens</div>
                            <div className="flexibility-sec__btn">Spherical lens</div>
                          </div>

                          <div className="flexibility-sec__filtr-rov1">
                            <span className="flexibility-sec__filtr-number">02</span>
                            <span className="flexibility-sec__filtr-line"></span>
                          </div>

                          <div className="flexibility-sec__filtr-row2 filtr-row2-v2">
                            <div className="flexibility-sec__btn">Extreme close</div>
                            <div className="flexibility-sec__btn flexibility-sec__btn_active">Close-up</div>
                            <div className="flexibility-sec__btn">Medium</div>
                          </div>

                          <div className="flexibility-sec__filtr-rov1">
                            <span className="flexibility-sec__filtr-number">03</span>
                            <span className="flexibility-sec__filtr-line"></span>
                          </div>

                          <div className="flexibility-sec__filtr-row2 filtr-row2-v3">
                            <div className="flexibility-sec__btn ">Hight angle</div>
                            <div className="flexibility-sec__btn">Low angle</div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </motion.div>




                </motion.div>
                </motion.div>
                </motion.div>
              </motion.div>
              </motion.div>


            </div>
          </section>

          <InfographixSection />
          <PreviewsSection />
          <PromptExamplesSection />
          <PlanPriceSection />
          <ApplicableSection />
          <SignUpSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
