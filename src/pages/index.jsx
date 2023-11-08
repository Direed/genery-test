'use client'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import {useEffect, useRef, useState} from "react";

import { motion, circOut, useTransform, useScroll, easeInOut, easeIn } from "framer-motion";
import Gallery from "@/components/gallery";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [mediaQuery, setMediaQuery] = useState(0);
  const [mediaQuery750, setMediaQuery750] = useState(0);
  const refAdvantages = useRef(null)
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
  const refGirlImg = useRef(null)
  const refSpaceHeader = useRef(null)
  const { scrollYProgress: scrollYProgressAdvantages } = useScroll({
    target: refAdvantages,
    offset: ["start end", "end end"]
  })
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
  scrollYProgressAdvantages.on('change', (value) => {

    console.log('value', value)
    if (value === 1) {

      const generationSectionImages = document.querySelector(".generation-sec");
      generationSectionImages.style.opacity = 0
      const spaceSectionImages = document.querySelector(".space-section");
      spaceSectionImages.style.opacity = 1
    } else {

      const generationSectionImages = document.querySelector(".generation-sec");
      generationSectionImages.style.opacity = 1
      const spaceSectionImages = document.querySelector(".space-section");
      spaceSectionImages.style.opacity = 0
    }
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

  const scaleAdvantages = useTransform(scrollYProgressAdvantages, [2, 0], [0, 2]);

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

  // scrollYProgressScaleFlexibilitySection.on('change', value => {
  //   console.log(value, 'value in flexibility')
  //   refSpaceImg.current.style.filter = `blur(${(1 - value) * 40}px)`
  //   refSpaceImg.current.src = value > 0.20 ? "/images/_src/flex/anamorphic, close-up, high angle 2.jpg" : '/images/_src/Space.svg'
  //
  // })

  let flexRow1 = 0
  let flexRow2 = 1
  let flexRow3 = null

  function firstScrean() {
    let bgImage = document.querySelector('.front-sec__bg-img')

    if (bgImage != null) {
      let container = document.querySelector('.front-sec')
      let heightContainer = container.offsetHeight
      let windowHeight = window.innerHeight
      let maxScrollValue = heightContainer - windowHeight
      console.log(window.scrollY)

      window.addEventListener("scroll", function (event) {
        let skrillValue = window.scrollY
        let currentSkrollValue = skrillValue / +maxScrollValue

        if (currentSkrollValue <= 1) {
          if (mediaQuery750.matches) {
            currentSkrollValue = currentSkrollValue / 2
            bgImage.style.transform = `scale(${1.5 - currentSkrollValue})`
          }
          else {
            bgImage.style.transform = `scale(${2 - currentSkrollValue})`
          }
        }
        else {
          if (mediaQuery750.matches) {
            currentSkrollValue = currentSkrollValue / 2
            bgImage.style.transform = `scale(${1})`
          }
          else {
            bgImage.style.transform = `scale(${1})`
          }
        }



      });

    }
  }

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

    //anim first screan
    firstScrean()

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

          <section className="front-sec">
            <div className="decor dc1"></div>
            <div className="decor dc2"></div>
            <div className="front-sec__bg-img-container">
              <img src="/images/_src/front-sec-home2.jpg" alt="" className="front-sec__bg-img"/>
            </div>
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

          <section className="advantages-sec">
            <div className="decor dc3"></div>
            <div className="decor dc3-v2"></div>
            <div className="decor dc3-mob"></div>
            <div className="container">
              <div className="advantages-sec__v1 adv">
                <img src="/images/_src/adv1.jpg" alt="" className="adv__img"/>
                  <div className="adv__text-wrapper">
                    <h3 className="adv__title">All</h3>
                    <p className="adv__big-text gradient-text">3,000,000+</p>
                    <h3 className="adv__title">shots available in GIF </h3>
                  </div>
              </div>
              <div className="advantages-sec__col">
                <div className="advantages-sec__v2 adv">
                  <img src="/images/_src/form.png" alt="" className="advantages-sec__v2-form"/>

                    <div className="advantages-sec__v2-wrapper">
                      <p className="adv__big-text gradient-text">70+</p>
                      <h3 className="adv__title">Full searchable cinematography parameters</h3>
                      {/*<p class="adv__subtitle">Creating visual references with the help of text prompts.</p>*/}
                    </div>

                </div>

                <div className="advantages-sec__v3 adv">
                  <img src="/images/_src/adv3.png" alt="" className="adv__imgV3"/>
                    <h3 className="adv__title">Creating custom board</h3>
                    <p className="adv__subtitle">The ability to create custom boards for your projects</p>
                </div>

                <div className="advantages-sec__row advantages-sec__row5">
                  <div className="advantages-sec__v4 adv">
                    <img src="/images/_src/adv4.svg" alt="" className="advantages-sec__v4-img"/>
                      <h3 className="adv__title2">Tech info</h3>
                      <p className="adv__subtitle">Detailed information about the camera, lenses, crew, etc</p>
                  </div>

                  <div className="advantages-sec__v4 advantages-sec__v5 adv">
                    <img src="/images/_src/adv5.svg" alt="" className="advantages-sec__v4-img"/>
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
                  <img src="/images/_src/adv7.png" alt="" className="adv__img-v7"/>
                    <div className="adv__info-v7">
                      <h3 className="adv__title">Search by image</h3>
                      <p className="adv__subtitle">The ability to upload your image and find a similar one in our
                        gallery</p>
                    </div>
                </div>

                <div className="advantages-sec__v8 adv">
                  <img src="/images/_src/advV8.svg" alt="" className="adv__img-v8"/>
                    <div className="adv__info-v8">
                      <h3 className="adv__title">Neural engine for better searching</h3>
                    </div>
                </div>

                <div className="advantages-sec__row advantages-sec__row9">
                  <div className="advantages-sec__v9 adv">
                    <img src="/images/_src/adv9.png" alt="" className="advantages-sec__v9-img"/>
                      <h3 className="adv__title2">Color palette</h3>
                  </div>
                  <div className="advantages-sec__v9 advantages-sec__v10 adv">
                    <img src="/images/_src/adv10.png" alt="" className="advantages-sec__v9-img"/>
                      <h3 className="adv__title2">High quality </h3>
                  </div>
                </div>

                <div className="advantages-sec__v11  adv">
                  <div className="adv__img-container-v11">
                    <img src="/images/_src/adv11-x1.png" alt="" className="adv__imgV11-x"/>
                      <img src="/images/_src/adv11-x2.png" alt="" className="adv__imgV11-x"/>
                        <img src="/images/_src/adv11-x3.png" alt="" className="adv__imgV11-x"/>
                  </div>
                  <h3 className="adv__title">Moodboard template for export</h3>
                  <p className="adv__subtitle">Export boards as mood boards with our templates</p>
                </div>
              </div>
            </div>
          </section>

          <section className="generation-sec">
            <motion.div
                ref={refAdvantages}
                className="generation-sec__container"
                style={{
                  scale: scaleAdvantages
                }}
            >
              <div class="generation-sec__info">
                  <h2 class="page-title">If you can't find reference you can <i>generate</i> it</h2>
              </div>
            </motion.div>
          </section>

          <section style={{ height: '375vh', transform: 'translateY(-100vh)'}} className={"space-section"}>

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

                    <motion.div style={{opacity: opacityZeroParametersText, position: "absolute", top: "170%", left: "5%" }}>
                      <motion.div style={{ opacity: opacityParametersTextSection, position: "absolute", top: '170%', left: "5%"}}>

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

                    <motion.div style={{ opacity: opacityEasyControlText, position: "absolute", top: '170%', left: "80%"}}>

                      <div style={{maxWidth: '480px'}}>
                          <h3 className="sec-title">Easy control</h3>
                          <p className="sec-subtitle">Easily manage parameters directly from the search bar</p>
                          <div className="interface-sec-3__btn-container">
                            <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                          </div>
                      </div>
                    </motion.div>

                    <motion.div style={{ opacity: opacityGenerateByImageText, position: "absolute", top: '170%', left: "5%"}}>
                      <div style={{maxWidth: '480px'}}>
                        <h3 className="sec-title">Generate by image</h3>
                        <p className="sec-subtitle">You can upload your pictures or any picture from the Internet to
                          generate similar ones, or improve and edit the image</p>
                        <div className="interface-sec-3__btn-container">
                          <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div style={{opacity: opacitySpaceLightingDropdown}}>
                      <motion.div style={{opacity: opacityLightenDropdownSection, position: "absolute", top: "50%", left: "20%" }}>
                        <img
                          style={{ width: '100%'}}
                          src={"/images/_src/Space_lighten_dropdown.png"}
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div style={{opacity: opacityEasyControlDropdown, position: "absolute", top: "20%", left: "61.25%" }}>
                      <img
                          style={{ width: '100%'}}
                          src={"/images/_src/easy-controls-dropdown.png"}
                      />
                    </motion.div>

                    <motion.div style={{opacity: opacityGenerateByImagePopup, position: "absolute", top: "100%", left: "22.5%" }}>
                      <img
                          style={{ width: '100%'}}
                          src={"/images/_src/generate-by-image-popup.png"}
                      />
                    </motion.div>

                    <img
                      style={{ width: '100%'}}
                      ref={refSpaceHeader}
                      src={"/images/_src/Barbar_1.svg"}
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
                            src={"/images/_src/Space.svg"}
                        />
                        <img
                            style={{ width: '100%', position: 'absolute', left: 0, opacity: 0}}
                            ref={refGirlImg}
                            className={'flexibility-section-img'}
                            src={"/images/_src/flex/anamorphic, close-up, high angle 2.jpg"}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      style={{
                        scale: scaleSpaceButtonsSection,
                        translateY: transformYSpaceButtonsSection
                      }}
                    >
                      <div style={{display: 'flex', width: '100%', padding: '0 20px', height: '80px'}}>
                        <img style={{marginRight: 'auto'}} src={"/images/_src/animations/edit.png"} />
                        <div style={{display: 'flex', gap: '10px'}}>
                          <img src={"/images/_src/animations/arrow-down.png"}/>
                          <img src={"/images/_src/animations/save.png"}/>
                        </div>
                      </div>
                      {/*<img*/}
                      {/*  style={{ width: '100%'}}*/}
                      {/*  src={"/images/_src/Space_buttons.png"}*/}
                      {/*/>*/}
                    </motion.div>
                  </motion.div>
                  </motion.div>
                  </motion.div>


                  <motion.div style={{
                    opacity: zeroOpacityAdvancedToolsTextSection
                  }}>
                    <motion.div style={{ opacity: opacityAdvancedToolsTextSection, position: "absolute", top: '85%', left: "250%"}}>
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
                    <motion.div style={{opacity: opacityEasilySwitchSection, position: "absolute", top: "20%", left: "50%" }}>
                      <h2 className="page-title">easily switch from <br /><i>gallery</i> to <i>generation</i></h2>
                    </motion.div>
                  </motion.div>


                  <motion.div style={{
                    opacity: opacityFlexibilityTextSection,
                    position: "absolute",
                    top: '85%',
                    left: "20%"
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


          <section className="infographix-sec">
            <div className="container">
              <div className="infographix-sec__row">
                <div className="infographix-sec__element">
                  <p className="infographix-sec__title gradient-text">
                    2<span className="infographix-sec__title-small">k</span>
                  </p>
                  <p className="infographix-sec__subtitle">resolution</p>
                </div>

                <div className="infographix-sec__element">
                  <p className="infographix-sec__title gradient-text">
                    95<span className="infographix-sec__title-small">%</span>
                  </p>
                  <p className="infographix-sec__subtitle">accuracy</p>
                </div>

                <div className="infographix-sec__element">
                  <p className="infographix-sec__title gradient-text">
                    8<span className="infographix-sec__title-small">s</span>
                  </p>
                  <p className="infographix-sec__subtitle">generation time</p>
                </div>

                <div className="infographix-sec__element">
                  <p className="infographix-sec__title gradient-text">
                    2.35
                  </p>
                  <p className="infographix-sec__subtitle">Aspect ratio</p>
                </div>
              </div>
            </div>
          </section>

          <section className="previews-sec">

            <div className="previews-sec__wrapper">

              <div className="previews-sec__element previews-sec__el1">
                <div className="container">
                  <div
                      className="previews-sec__fixed-image-wrapper fixed-image-wrapper__v1 fixed-image-wrapper__mob">
                    <div className="fixed-image-wrapper__box  swipe-anim-container">

                      <div className="swipe-anim-container__img swipe-anim-container__active">
                        <img className="swipe-anim-container__img-element " src="/images/_src/swipe-1-act.JPG" alt=""/>
                      </div>

                      <div className="swipe-anim-container__img swipe-anim-container__def">
                        <img className="swipe-anim-container__img-element " src="/images/_src/swipe-1-def.png" alt=""/>
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
                      <img src="/images/_src/viev-2.jpg" alt=""/>
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
                        <img className="swipe-anim-container__img-element " src="/images/_src/viev-3-v2.jpeg"
                             alt=""/>
                      </div>

                      <div className="swipe-anim-container__img swipe-anim-container__def">
                        <img className="swipe-anim-container__img-element " src="/images/_src/viev-3.jpg"
                             alt=""/>
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
                        <img className="swipe-anim-container__img-element " src="/images/_src/swipe-1-act.JPG"
                             alt=""/>
                      </div>

                      <div className="swipe-anim-container__img swipe-anim-container__def">
                        <img className="swipe-anim-container__img-element " src="/images/_src/swipe-1-def.png"
                             alt=""/>
                      </div>


                      <div className="swipe-anim-container__line-controll"></div>
                    </div>

                  </div>
                  <div className="previews-sec__fixed-image-wrapper fixed-image-wrapper__v2">
                    <div className="fixed-image-wrapper__box fixed-image-wrapper__box-img">
                      <img src="/images/_src/viev-2.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="previews-sec__fixed-image-wrapper fixed-image-wrapper__v3">
                    <div className="fixed-image-wrapper__box  swipe-anim-container">

                      <div className="swipe-anim-container__img swipe-anim-container__active">
                        <img className="swipe-anim-container__img-element " src="/images/_src/viev-3-v2.jpeg"
                             alt=""/>
                      </div>

                      <div className="swipe-anim-container__img swipe-anim-container__def">
                        <img className="swipe-anim-container__img-element " src="/images/_src/viev-3.jpg"
                             alt=""/>
                      </div>


                      <div className="swipe-anim-container__line-controll"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="prompt-examples-sec">
            <div className="container">
              {/*class="container-slider*/}
              <h2 className="sec-title">Prompt examples</h2>
              {/*<p class="sec-subtitle">We resolve your problem with references. Creating visual references with the*/}
              {/*    help of text prompts.</p>*/}

              <Gallery />

            </div>
          </section>

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

          <section className="applicable-sec">
            <div className="decor dc12-big"></div>
            <div className="container">
              <div className="applicable-sec__container">
                <h2 className="sec-title">Where applicable</h2>
                <div className="applicable-sec__list-wrapper">
                  <ul className="applicable-sec__list">
                    <li className="applicable-sec__list-element"><a href="">Colorist</a></li>
                    <li className="applicable-sec__list-element"><a href="">Visual Effects</a></li>
                    <li className="applicable-sec__list-element"><a href="">Production Designer</a></li>
                    <li className="applicable-sec__list-element"><a href="">Student</a></li>
                  </ul>

                  <ul className="applicable-sec__list">
                    <li className="applicable-sec__list-element"><a href="">Editor</a></li>
                    <li className="applicable-sec__list-element"><a href="">Art Director</a></li>
                    <li className="applicable-sec__list-element"><a href="">Creative Director</a></li>
                    <li className="applicable-sec__list-element"><a href="">Producer</a></li>
                  </ul>

                  <ul className="applicable-sec__list">
                    <li className="applicable-sec__list-element"><a href="">Writer</a></li>
                    <li className="applicable-sec__list-element"><a href="">Cinematographer</a></li>
                    <li className="applicable-sec__list-element"><a href="">Director</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          <section className="sing-up-sec">
            <div className="container">
              <h2 className="sec-title">Sign up for free now</h2>
              <form action="" className="form-submit">
                <div className="form-submit__inp-wrapper">
                  <input type="text" className="form-submit__inp" placeholder="Enter your e-mail"/>
                </div>
                <div className="form-submit__btn-wrapper">
                  <button type="submit" className="form-submit__btn">Sign up</button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer__left">
              <div className="footer__col1">
                <div className="footer__logo-wrapper">
                  <img src="/images/_src/logo.svg" alt="" className="footer__logo"/>
                </div>
                <p className="footer__address">
                  <b>Kyiv, Ukraine</b><br/>
                  601 Hayhurst Lane<br/>
                  Southfield, 48075
                </p>
                <p className="footer__copy">Genery - 2023©. All rigths reserved.®</p>
              </div>
              <div className="footer__col2">
                <ul className="footer__nav-list1">
                  <li className="footer__list-element">
                    <a href="" className="footer__list-link">Gallery</a>
                  </li>
                  <li className="footer__list-element">
                    <a href="" className="footer__list-link">Generation</a>
                  </li>
                  <li className="footer__list-element">
                    <a href="" className="footer__list-link">Pricing</a>
                  </li>
                  <li className="footer__list-element">
                    <a href="" className="footer__list-link">Blog</a>
                  </li>
                </ul>

                <ul className="footer__nav-list2">
                  <li className="footer__list-element">
                    <a href="" className="footer__list-link">Privacy Policy</a>
                  </li>
                  <li className="footer__list-element">
                    <a href="" className="footer__list-link">Coocie Policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col3">
                <a href="" className="footer__networks">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                    <path
                        d="M24.0053 16.621C26.4114 16.621 26.6963 16.6316 27.6426 16.6738C28.522 16.7124 28.9969 16.8601 29.3135 16.9832C29.7321 17.145 30.0346 17.3419 30.3477 17.6548C30.6643 17.9713 30.8577 18.2702 31.0195 18.6886C31.1427 19.0051 31.2904 19.4833 31.3291 20.3589C31.3713 21.3083 31.3819 21.5931 31.3819 23.9947C31.3819 26.3999 31.3713 26.6847 31.3291 27.6306C31.2904 28.5097 31.1427 28.9844 31.0195 29.3008C30.8577 29.7193 30.6607 30.0217 30.3477 30.3346C30.0311 30.6511 29.7321 30.8445 29.3135 31.0063C28.9969 31.1293 28.5185 31.277 27.6426 31.3157C26.6928 31.3579 26.4079 31.3684 24.0053 31.3684C21.5992 31.3684 21.3142 31.3579 20.368 31.3157C19.4886 31.277 19.0137 31.1293 18.6971 31.0063C18.2785 30.8445 17.976 30.6476 17.6629 30.3346C17.3463 30.0182 17.1528 29.7193 16.991 29.3008C16.8679 28.9844 16.7201 28.5062 16.6815 27.6306C16.6392 26.6812 16.6287 26.3964 16.6287 23.9947C16.6287 21.5896 16.6392 21.3047 16.6815 20.3589C16.7201 19.4798 16.8679 19.0051 16.991 18.6886C17.1528 18.2702 17.3498 17.9678 17.6629 17.6548C17.9795 17.3383 18.2785 17.145 18.6971 16.9832C19.0137 16.8601 19.4921 16.7124 20.368 16.6738C21.3142 16.6316 21.5992 16.621 24.0053 16.621ZM24.0053 15C21.5605 15 21.2544 15.0105 20.2941 15.0527C19.3373 15.0949 18.6795 15.2497 18.1096 15.4712C17.5151 15.7033 17.0121 16.0092 16.5126 16.512C16.0096 17.0113 15.7035 17.5142 15.4714 18.1049C15.2498 18.6781 15.095 19.3321 15.0528 20.2885C15.0106 21.252 15 21.5579 15 24.0018C15 26.4456 15.0106 26.7515 15.0528 27.7115C15.095 28.6679 15.2498 29.3255 15.4714 29.8951C15.7035 30.4894 16.0096 30.9922 16.5126 31.4915C17.0121 31.9908 17.5151 32.3003 18.1061 32.5288C18.6795 32.7503 19.3338 32.9051 20.2906 32.9473C21.2509 32.9895 21.557 33 24.0018 33C26.4466 33 26.7526 32.9895 27.7129 32.9473C28.6697 32.9051 29.3275 32.7503 29.8974 32.5288C30.4884 32.3003 30.9914 31.9908 31.4909 31.4915C31.9904 30.9922 32.3 30.4894 32.5286 29.8986C32.7502 29.3255 32.905 28.6714 32.9472 27.715C32.9894 26.755 33 26.4491 33 24.0053C33 21.5614 32.9894 21.2555 32.9472 20.2956C32.905 19.3391 32.7502 18.6816 32.5286 18.1119C32.307 17.5142 32.001 17.0113 31.4979 16.512C30.9984 16.0127 30.4954 15.7033 29.9044 15.4747C29.3311 15.2532 28.6768 15.0985 27.72 15.0563C26.7561 15.0105 26.4501 15 24.0053 15Z"
                        fill="white"/>
                    <path
                        d="M24.0086 19.375C21.4547 19.375 19.3828 21.4461 19.3828 23.9989C19.3828 26.5518 21.4547 28.6229 24.0086 28.6229C26.5624 28.6229 28.6343 26.5518 28.6343 23.9989C28.6343 21.4461 26.5624 19.375 24.0086 19.375ZM24.0086 26.9984C22.3517 26.9984 21.008 25.6551 21.008 23.9989C21.008 22.3428 22.3517 20.9995 24.0086 20.9995C25.6654 20.9995 27.0092 22.3428 27.0092 23.9989C27.0092 25.6551 25.6654 26.9984 24.0086 26.9984Z"
                        fill="white"/>
                    <path
                        d="M29.8942 19.1971C29.8942 19.7951 29.4088 20.277 28.8143 20.277C28.2163 20.277 27.7344 19.7916 27.7344 19.1971C27.7344 18.5991 28.2198 18.1172 28.8143 18.1172C29.4088 18.1172 29.8942 18.6026 29.8942 19.1971Z"
                        fill="white"/>
                  </svg>

                </a>
                <a href="" className="footer__networks">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                    <path
                        d="M20.2918 32C27.8371 32 31.9652 25.8437 31.9652 20.5066C31.9652 20.3335 31.9613 20.1566 31.9535 19.9835C32.7566 19.4117 33.4496 18.7035 34 17.8921C33.2521 18.2197 32.458 18.4336 31.6449 18.5267C32.5011 18.0214 33.1421 17.2276 33.4492 16.2925C32.6438 16.7625 31.763 17.094 30.8445 17.2728C30.2257 16.6254 29.4075 16.1968 28.5164 16.0532C27.6253 15.9095 26.711 16.0589 25.9148 16.4782C25.1186 16.8975 24.4848 17.5634 24.1115 18.3729C23.7382 19.1824 23.6462 20.0904 23.8496 20.9566C22.2187 20.876 20.6233 20.4589 19.1667 19.7322C17.71 19.0056 16.4247 17.9857 15.3941 16.7386C14.8703 17.6278 14.71 18.68 14.9459 19.6814C15.1817 20.6827 15.7959 21.5581 16.6637 22.1296C16.0122 22.1092 15.375 21.9365 14.8047 21.6258V21.6758C14.8041 22.6089 15.1317 23.5134 15.7319 24.2356C16.3321 24.9578 17.1678 25.453 18.0969 25.6372C17.4934 25.7997 16.86 25.8234 16.2457 25.7064C16.5079 26.5089 17.018 27.2108 17.7048 27.7141C18.3916 28.2174 19.2209 28.497 20.077 28.514C18.6237 29.6379 16.8285 30.2476 14.9805 30.2447C14.6527 30.2442 14.3253 30.2244 14 30.1855C15.8774 31.3713 18.0613 32.0011 20.2918 32Z"
                        fill="white"/>
                  </svg>

                </a>
                <a href="" className="footer__networks">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M18.9065 16.8686C18.9065 17.8873 18.1309 18.7117 16.9179 18.7117C15.7522 18.7117 14.9765 17.8873 15.0005 16.8686C14.9765 15.8004 15.7522 15 16.9411 15C18.1309 15 18.8833 15.8004 18.9065 16.8686ZM15.0981 32.0334V20.1677H18.7857V32.0326H15.0981V32.0334Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M21.7381 23.9577C21.7381 22.4777 21.6894 21.216 21.6406 20.1725H24.8437L25.014 21.7981H25.0868C25.5721 21.0457 26.7851 19.9062 28.7505 19.9062C31.1764 19.9062 32.9962 21.5078 32.9962 25.0004V32.0382H29.3085V25.4625C29.3085 23.933 28.7752 22.8903 27.4407 22.8903C26.4213 22.8903 25.8152 23.5939 25.5729 24.2728C25.4753 24.5158 25.4273 24.8549 25.4273 25.1955V32.0382H21.7396V23.9577H21.7381Z"
                          fill="white"/>
                  </svg>

                </a>
                <a href="" className="footer__networks">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z"
                          fill="white"/>
                  </svg>

                </a>
              </div>
            </div>
            <div className="footer__right">
              <div className="footer__post">
                <div className="footer__post-header">
                  <img src="/images/_src/footer-post1.jpg" alt="" className="footer__post-img"/>
                    <div className="footer__post-info">
                      <h3 className="footer__post-title">Bohdan Popravko</h3>
                      <p className="footer__post-subtitle">Co-owner</p>
                    </div>
                </div>
                <div className="footer__body">His exquisite sincerity education shameless ten earnestly breakfast
                  add. So we me unknown as improve hastily sitting forming.
                </div>
                <a href="" className="footer__post-link">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                    <path
                        d="M29.5563 25.7267L27.5887 25.7267L27.5887 22.2014L27.7527 20.3158L27.6707 20.2748L25.8261 22.3654L18.9395 29.252L17.5458 27.8583L24.4324 20.9717L26.523 19.1271L26.482 19.0451L24.5964 19.209L21.0711 19.209L21.0711 17.2414L29.5563 17.2414L29.5563 25.7267Z"
                        fill="white"/>
                  </svg>
                </a>
              </div>

              <div className="footer__post">
                <div className="footer__post-header">
                  <img src="/images/_src/footer-post2.jpg" alt="" className="footer__post-img"/>
                    <div className="footer__post-info">
                      <h3 className="footer__post-title">Ivan Zmaev</h3>
                      <p className="footer__post-subtitle">Co-owner</p>
                    </div>
                </div>
                <div className="footer__body">Especially favourable compliment but thoroughly unreserved saw she
                  themselves. Sufficient impossible him may ten insensible put continuing.
                </div>
                <a href="" className="footer__post-link">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                    <path
                        d="M29.5563 25.7267L27.5887 25.7267L27.5887 22.2014L27.7527 20.3158L27.6707 20.2748L25.8261 22.3654L18.9395 29.252L17.5458 27.8583L24.4324 20.9717L26.523 19.1271L26.482 19.0451L24.5964 19.209L21.0711 19.209L21.0711 17.2414L29.5563 17.2414L29.5563 25.7267Z"
                        fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer__down-mob">
              <p className="down-mob__copy">Genery - 2023©. All rigths reserved.®</p>
              <ul className="footer__nav-list2">
                <li className="footer__list-element">
                  <a href="" className="footer__list-link">Privacy Policy</a>
                </li>
                <li className="footer__list-element">
                  <a href="" className="footer__list-link">Coocie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}
