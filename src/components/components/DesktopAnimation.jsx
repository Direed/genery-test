import React, {useEffect, useRef, useState} from 'react';
import {circOut, motion, useScroll, useTransform} from "framer-motion";
import useVerticalScroll from "@/hooks/useVerticalScroll";

const DesktopAnimation = () => {
    const [isOpenFullSpaceButtons, setIsOpenFullSpaceButtons] = useState(false);
    const [isAnimated, setIsAnimated] = useState(true)
    const [animationIndex, setAnimationIndex] = useState(1)
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
    const refHiddenBlock = useRef(null)


    const refLastScrollTop = useRef(0);

    const spaceSection = useVerticalScroll({ref: refSpaceSection, limit: 100, springConfig: {mass: 0.01}})
    const y = useVerticalScroll({ref: refScaleSpaceSection, limit: 100, springConfig: {mass: 0.01, stiffness: 2, damping: 1 }})
    const x = useVerticalScroll({ref: refScaleGalleryGenerationSection, limit: 100, springConfig: {mass: 0.01, stiffness: 2, damping: 1 }})
    const opacityEasilySwitch = useVerticalScroll({ref: refOpacityEasilySwitchSection, limit: 100, springConfig: {mass: 0.01 , stiffness: 2, damping: 1}})
    const z = useVerticalScroll({ref: refOpacityLightenDropdownSection, limit: 100, springConfig: {mass: 0.01 , stiffness: 2, damping: 1}})
    const transformXEasyControl = useVerticalScroll({ref: refTransformXEasyControlSection, limit: 100, springConfig: {mass: 0.01 , stiffness: 2, damping: 1}})
    const transformXGenerateByImage = useVerticalScroll({ref: refTransformXGenerateByImageSection, limit: 100, springConfig: {mass: 0.01 , stiffness: 2, damping: 1}})
    const scaleAdvancedToolsSection = useVerticalScroll({ref: refScaleAdvancedToolsSection, limit: 100, springConfig: {mass: 0.01 , stiffness: 2, damping: 1}})
    const scaleFlexibility = useVerticalScroll({ref: refScaleFlexibilitySection, limit: 100, springConfig: {mass: 0.01 , stiffness: 2, damping: 1}})

    spaceSection.on('change', (value) => {
        // console.log(value, 'value')

        const getTransformValue = (initial, final) => initial - (initial - final) * (-value) / 100
        const updatedWidth = getTransformValue(600, 100)
        const updatedTransformY = getTransformValue(0, -30)

        const transformSpaceSection = document.querySelector('.transform-space-section')

        // transformSpaceSection.style.width = `${updatedWidth}%`
        // transformSpaceSection.style.transform = `translateY(${updatedTransformY}%) translateZ(0px)`
    })

    scaleAdvancedToolsSection.on('change', (value) => {
        const getTransformValue = (initial, final) => initial - (initial - final) * (-value) / 100
        const updatedWidth = getTransformValue(100, 50)
        const updatedTransformX = getTransformValue(0, -20)
        const updatedTransformY = getTransformValue(0, 15)
        const updatedTransformToBottomY = getTransformValue(0, 30)

        const widthAdvancedTools = document.querySelector('.width-advanced-tools-section')
        // const transformYAdvancedTools = document.querySelector('.advanced-tools-section')
        const transformAdvancedTools = document.querySelector('.transform-advanced-tools-section')
        const transformToBottomAdvancedTools = document.querySelector('.transform-to-bottom-advanced-tools-section')

        widthAdvancedTools.style.width = `${updatedWidth}%`

        transformAdvancedTools.style.transform = `translateX(${updatedTransformX}%) translateY(${updatedTransformY}%) translateZ(0px)`
        transformToBottomAdvancedTools.style.transform = `translateY(${updatedTransformToBottomY}%) translateZ(0px)`



        const opacityGenerateByImageSection = document.querySelector('.opacity-generate-by-image');
        const opacityAdvancedToolsSection = document.querySelector('.opacity-advanced-tools');
        const dropdownGenerateByImageSection = document.querySelector('.dropdown-generate-by-image');

        const headerContainerSection = document.querySelector('.header-container');


        if (value <= -90) {
            opacityAdvancedToolsSection.style.opacity = 1
        } else {
            opacityAdvancedToolsSection.style.opacity = 0
        }
        if (value > -10) {
            opacityGenerateByImageSection.style.opacity = 1
            dropdownGenerateByImageSection.style.opacity = 1
            headerContainerSection.style.opacity = 1
        } else {
            headerContainerSection.style.opacity = 0
            dropdownGenerateByImageSection.style.opacity = 0
            opacityGenerateByImageSection.style.opacity = 0
        }
    })
    scaleFlexibility.on('change', (value) => {
        // console.log(value, 'value')

        const getTransformValue = (initial, final) => initial - (initial - final) * (-value) / 100
        const updatedTransformX = getTransformValue(0, 42)
        const updatedBlur = getTransformValue(0, 1)

        const opacityFlexibilitySection = document.querySelector('.opacity-flexibility-section\n')
        const transformXAdvancedToolsInFlexibility = document.querySelector('.transform-x-advanced-tools-in-flexibility')

        transformXAdvancedToolsInFlexibility.style.transform = `translateX(${updatedTransformX}%) translateY(0px) translateZ(0px)`



        const spaceImg = document.querySelector('.space-img')
        const spaceButtons = document.querySelector('.space-buttons')
        const opacityAdvancedToolsSection = document.querySelector('.opacity-advanced-tools');

        if (value <= -90) {
            opacityFlexibilitySection.style.opacity = 1
        } else {
            opacityFlexibilitySection.style.opacity = 0
        }

        if (value > -30) {
            // spaceImg.style.opacity = 1
            // spaceButtons.style.opacity = 1
            spaceImg.style.opacity = 1
            spaceButtons.style.opacity = 1
            opacityAdvancedToolsSection.style.opacity = 1
        } else {
            opacityAdvancedToolsSection.style.opacity = 0
            spaceImg.style.opacity = 0
            spaceButtons.style.opacity = 0
        }

        refSpaceImg.current.style.filter = `blur(${(1 - (1 - updatedBlur)) * 40}px)`
        if(updatedBlur > 0.10 ) {
            refGirlImg.current.style.opacity = 1
            refGirlImg.current.style.filter = `blur(${(1 - updatedBlur) * 1000}px)`
        } else {
            refGirlImg.current.style.opacity = 0.4
            refGirlImg.current.style.filter = `blur(${(1 - updatedBlur) * 400}px)`
        }
    })


    transformXGenerateByImage.on('change', (value) => {
        // console.log(value, 'value')

        const getTransformValue = (initial, final) => initial - (initial - final) * (-value) / 100
        const updatedTransformX = getTransformValue(0, 165)

        const transformXGenerateByImageSection = document.querySelector('.transform-x-generate-by-image-sec')

        transformXGenerateByImageSection.style.transform = `translateX(${updatedTransformX}%) translateY(0px) translateZ(0px)`

        const opacityGenerateByImageSection = document.querySelector('.opacity-generate-by-image');
        const dropdownGenerateByImageSection = document.querySelector('.dropdown-generate-by-image');
        const parametersLightenDropdownSection = document.querySelector('.paramaters-lighten-dropdown');

        const opacityEasyControlSection = document.querySelector('.opacity-easy-control');
        const dropdownEasyControlSection = document.querySelector('.dropdown-easy-control');

        if (value <= -75) {
            dropdownGenerateByImageSection.style.opacity = 1
        } else {
            dropdownGenerateByImageSection.style.opacity = 0

        }

        if (value <= -85) {
            opacityGenerateByImageSection.style.opacity = 1
        } else {
            opacityEasyControlSection.style.opacity = 0
            dropdownEasyControlSection.style.opacity = 0
            opacityGenerateByImageSection.style.opacity = 0
        }
        if (value > -5) {
            opacityEasyControlSection.style.opacity = 1
            dropdownEasyControlSection.style.opacity = 1
        }
    })

    transformXEasyControl.on('change', (value) => {
        // console.log(value, 'value')

        const getTransformValue = (initial, final) => initial - (initial - final) * (-value) / 100
        const updatedTransformX = getTransformValue(0, -165)
        const updatedTransformXDropdownEasyControl = getTransformValue(-100, 0)

        const transformXEasyControlSection = document.querySelector('.transform-x-easy-control-sec')

        transformXEasyControlSection.style.transform = `translateX(${updatedTransformX}%)  translateZ(0px)`

        const opacityLightenDropdownSection = document.querySelector('.opacity-lighten-dropdown');
        const opacityEasyControlSection = document.querySelector('.opacity-easy-control');
        const dropdownEasyControlSection = document.querySelector('.dropdown-easy-control');
        const parametersLightenDropdownSection = document.querySelector('.paramaters-lighten-dropdown');
        opacityEasyControlSection.style.transform = `translateX(${updatedTransformXDropdownEasyControl}%)  translateZ(0px)`


        if (value <= -75) {
            dropdownEasyControlSection.style.opacity = 1
        } else {
            dropdownEasyControlSection.style.opacity = 0

        }

        if (value <= -90) {
            opacityEasyControlSection.style.opacity = 1
        } else {
            parametersLightenDropdownSection.style.visibility = 'hidden'
            opacityEasyControlSection.style.opacity = 0
            opacityLightenDropdownSection.style.visibility = 'hidden'
        }
        if (value > -5) {
            opacityLightenDropdownSection.style.visibility = 'visible'
            parametersLightenDropdownSection.style.visibility = 'visible'
        }
    })


    y.on('change', (value) => {

        const getTransformValue = (initial, final) => initial - (initial - final) * (-value) / 100
        const updatedScale = getTransformValue(1, 0.6)
        const updatedTransformX = getTransformValue(-10, 4)
        const updatedTransformY = getTransformValue(0, 33)
        const updatedHeaderScale = getTransformValue(3, 0.95)
        const updatedHeaderTransformY = getTransformValue(-10, 62)
        const updatedButtonsScale = getTransformValue(3, 1)
        const updatedButtonsTransformY = getTransformValue(50, -10)

        const element = document.querySelector('.space-section-container')
        const headerElement = document.querySelector('.header-container')
        const buttonsElement = document.querySelector('.space-buttons')

        // element.style.scale = updatedScale
        element.style.transform = `translateX(${updatedTransformX}%) translateY(${updatedTransformY}%) scale(${updatedScale}) translateY(0px)`
        headerElement.style.transform = `translateX(0px) translateY(${updatedHeaderTransformY}vh) scale(${updatedHeaderScale}) translateY(0px)`
        buttonsElement.style.transform = `translateX(0px) translateY(${updatedButtonsTransformY}vh) scale(${updatedButtonsScale}) translateY(0px)`

        // element.style.translateY = `${updatedTransformY}%`
        // console.log('value', value)
    })

    x.on('change', (value) => {
        // console.log(value, 'value')

        const getTransformValue = (initial, final) => initial - (initial - final) * (-value) / 100
        const updatedWidth = getTransformValue(100, 360)

        const headerWidthContainer = document.querySelector('.header-width-container')

        headerWidthContainer.style.width = `${updatedWidth}%`

        if(value === 0) {
            refSpaceImg.current.style.opacity = 1
        } else {
            if((1 - ((-value) / 100)) > 0.4) refSpaceImg.current.style.opacity = 1 - (-value) / 100;
        }
    })

    opacityEasilySwitch.on('change', (value) => {
        console.log(value, 'value')

        const getTransformValue =(initial, final) => initial - (initial - final) * (-value) / 100
        const updatedOpacity = getTransformValue(-1, 1)
        // console.log(updatedOpacity, 'updatedOpacity')

        const opacityEasilySwitch = document.querySelector('.opacity-easily-switch')

        if (value <= -90) {
            opacityEasilySwitch.style.opacity = 1
        } else {
            opacityEasilySwitch.style.opacity = 0
        }
    })

    z.on('change', (value) => {

        // const transformYSpaceSectionToTop = useTransform(scrollYProgressOpacityLightenDropdownSection, [1, 0], ['-30%', '0%'],{
        //     ease: circOut
        // });
        // console.log(value, 'value')

        const getTransformValue =(initial, final) => initial - (initial - final) * (-value) / 100
        const updatedWidth = getTransformValue(100, 50)
        const updatedOpacityEasilySwitch = getTransformValue(1, 0);
        const updatedOpacityLightenDropdown = getTransformValue(0, 1);
        const updatedTransformXSpaceSectionToTop = getTransformValue(0, -30);

        const widthLightenDropdownSection = document.querySelector('.width-lighten-dropdown-sec')
        const opacityEasilySwitch = document.querySelector('.opacity-easily-switch');
        const opacityLightenDropdownSection = document.querySelector('.opacity-lighten-dropdown');
        const parametersLightenDropdownSection = document.querySelector('.paramaters-lighten-dropdown');


        if (value <= -90) {
            opacityLightenDropdownSection.style.opacity = 1;
            parametersLightenDropdownSection.style.opacity = 1
        } else {
            opacityEasilySwitch.style.visibility = 'hidden'
            opacityLightenDropdownSection.style.opacity = 0;
            parametersLightenDropdownSection.style.opacity = 0
        }
        if (value > -5) {
            opacityEasilySwitch.style.visibility = 'visible'
        }


        widthLightenDropdownSection.style.width = `${updatedWidth}%`;
        // opacityEasilySwitch.style.opacity = `${updatedOpacityEasilySwitch}`;
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
    const transformYSpaceSectionToTop = useTransform(scrollYProgressOpacityLightenDropdownSection, [1, 0], ['-30%', '0%'],{
        ease: circOut
    });
    const transformYSpaceSectionToBottom = useTransform(scrollYProgressScaleAdvancedToolsSection, [1, 0], ['30%', '0%'],{
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
        // console.log(value, 'value')
        // refSpaceImg.current.style.filter = `blur(${(1 - (1 - value)) * 40}px)`
        // if(value > 0.10 ) {
        //     refGirlImg.current.style.opacity = 1
        //     refGirlImg.current.style.filter = `blur(${(1 - value) * 1000}px)`
        // } else {
        //     refGirlImg.current.style.opacity = 0.4
        //     refGirlImg.current.style.filter = `blur(${(1 - value) * 400}px)`
        // }
    })

    // scrollYProgressScaleGalleryGenerationSection.on('change', value => {
    //     if(value === 0) {
    //         refSpaceImg.current.style.opacity = 1
    //     } else {
    //         if((1 - value) > 0.4) refSpaceImg.current.style.opacity = 1 - value;
    //     }
    // })

    scrollYProgressScaleAdvancedToolsSection.on('change', value => {
        if(value <= 0.6) {
            refSpaceImg.current.style.opacity = 0.4 + value;
            setIsOpenFullSpaceButtons(false)
        } else {
            refSpaceImg.current.style.opacity = 1
            setIsOpenFullSpaceButtons(true)
        }
    })

    scrollYProgressOpacityAdvancedToolsTextSection.on('change', value => {
        refGirlImg.current.style.opacity = 0
        refGirlImg.current.style.filter = `blur(${value}px)`
    })

    scrollYProgressTransformXEasyControlSection.on('change', value => {
        console.log('here')
        if(value === 0) {
            refHiddenBlock.current.style.display = 'none'
        } else {
            refHiddenBlock.current.style.display = 'block'
        }
    })

    // useEffect(() => {
    //
    //     const firstAnimation = document.querySelector('#second-animation');
    //
    //     setTimeout(() => firstAnimation.scrollIntoView(), 3000)
    // }, [])

    const scrollingToPosition = (event) => {
        const animationIndexMapping = {
            1: 'first',
            2: 'second',
            3: 'third',
            4: 'fourth',
            5: 'fifth',
            6: 'sixth',
            7: 'seventh',
            8: 'eighth',
        }
        console.log('wheel')
        const firstAnimation = document.querySelector('#first-animation');
        const finishFirstAnimation = document.querySelector('#finish-first-animation');
        const secondAnimation = document.querySelector('#second-animation');
        const finishSecondAnimation = document.querySelector('#finish-second-animation');
        const thirdAnimation = document.querySelector('#third-animation');
        const finishThirdAnimation = document.querySelector('#finish-third-animation');
        const fourthAnimation = document.querySelector('#fourth-animation');
        const fifthAnimation = document.querySelector('#fifth-animation');
        const sixthAnimation = document.querySelector('#sixth-animation');
        const seventhAnimation = document.querySelector('#seventh-animation');
        const eighthAnimation = document.querySelector('#eighth-animation');


        console.log('eighthAnimation.getBoundingClientRect().top', eighthAnimation.getBoundingClientRect().top)
        console.log('eighthAnimation.getBoundingClientRect().bottom', eighthAnimation.getBoundingClientRect().bottom)
        const isAnimationStart = firstAnimation.getBoundingClientRect().top < 0
        const isAnimationFinish = eighthAnimation.getBoundingClientRect().top > 50
        if (!isAnimationStart || !isAnimationFinish) {
            return;
        }
        event.preventDefault()
        console.log('isAnimated', isAnimated)
        if (!isAnimated) {
            return
        }
        console.log('animation proceeding')

        const isUpscroll = event.deltaY < 0
        const updatedAnimationIndex = animationIndex + (isUpscroll ? -1 : 1)
        setAnimationIndex(updatedAnimationIndex)

        const scrollIntoViewContainer = document.getElementById(`${animationIndexMapping[updatedAnimationIndex]}-animation`)
        scrollIntoViewContainer?.scrollIntoView()

        setIsAnimated(false)
        setTimeout(() => setIsAnimated(true), 700)
        // var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        //
        // if (st > refLastScrollTop.current) {
        //     // downscroll code
        //     console.log('downscroll code')
        //
        //     //conditions for first animation
        //     if(window.scrollY > firstAnimation.getBoundingClientRect().top + window.scrollY  && window.scrollY < firstAnimation.getBoundingClientRect().top + window.scrollY + 150) {
        //         secondAnimation.scrollIntoView()
        //     }
        //
        //     //conditions for second animation
        //     if(window.scrollY > secondAnimation.getBoundingClientRect().top + window.scrollY + 50  && window.scrollY < secondAnimation.getBoundingClientRect().top + window.scrollY + 150) {
        //         finishSecondAnimation.scrollIntoView()
        //     }
        //
        //     //conditions for third animation
        //     if(window.scrollY > thirdAnimation.getBoundingClientRect().top + window.scrollY  && window.scrollY < thirdAnimation.getBoundingClientRect().top + window.scrollY + 10) {
        //         fourthAnimation.scrollIntoView()
        //     }
        //
        //     //conditions for fourth animation
        //     if(window.scrollY > fourthAnimation.getBoundingClientRect().top + window.scrollY + 50  && window.scrollY < fourthAnimation.getBoundingClientRect().top + window.scrollY + 150) {
        //         fifthAnimation.scrollIntoView()
        //     }
        //
        //     //conditions for fifth animation
        //     if(window.scrollY > fifthAnimation.getBoundingClientRect().top + window.scrollY + 50  && window.scrollY < fifthAnimation.getBoundingClientRect().top + window.scrollY + 150) {
        //         sixthAnimation.scrollIntoView()
        //     }
        //
        //     //conditions for sixth animation
        //     if(window.scrollY > sixthAnimation.getBoundingClientRect().top + window.scrollY + 50  && window.scrollY < sixthAnimation.getBoundingClientRect().top + window.scrollY + 150) {
        //         seventhAnimation.scrollIntoView()
        //     }
        //
        //     //conditions for seventh animation
        //     if(window.scrollY > seventhAnimation.getBoundingClientRect().top + window.scrollY + 50  && window.scrollY < seventhAnimation.getBoundingClientRect().top + window.scrollY + 150) {
        //         eighthAnimation.scrollIntoView()
        //     }
        // } else if (st < refLastScrollTop.current) {
        //     // upscroll code
        //     console.log('upscroll code')
        //     console.log('isAnimated', isAnimated)
        //     if(isAnimated) {
        //         setIsAnimated(false)
        //         if(window.scrollY < finishFirstAnimation.getBoundingClientRect().bottom + window.scrollY && window.scrollY > firstAnimation.getBoundingClientRect().bottom + window.scrollY) {
        //             console.log('firstAnimation.scrollIntoView()')
        //             //conditions for first animation
        //             firstAnimation.scrollIntoView()
        //         } else if(window.scrollY < finishSecondAnimation.getBoundingClientRect().bottom + window.scrollY && window.scrollY > secondAnimation.getBoundingClientRect().top + window.scrollY + 300) {
        //             console.log('secondAnimation.scrollIntoView()')
        //             //conditions for second animation
        //             secondAnimation.scrollIntoView()
        //         } else if(window.scrollY < fourthAnimation.getBoundingClientRect().top + window.scrollY && window.scrollY > thirdAnimation.getBoundingClientRect().top + window.scrollY) {
        //             console.log('thirdAnimation.scrollIntoView()')
        //             //conditions for third animation
        //             thirdAnimation.scrollIntoView()
        //         } else if(window.scrollY < fifthAnimation.getBoundingClientRect().top + window.scrollY   && window.scrollY > fourthAnimation.getBoundingClientRect().bottom + window.scrollY) {
        //             console.log('fourthAnimation.scrollIntoView()')
        //             //conditions for fourth animation
        //             fourthAnimation.scrollIntoView()
        //         }
        //     } else {
        //         return;
        //     }
        //
        //
        //
        //     // //conditions for fifth animation
        //     // if(window.scrollY > fifthAnimation.getBoundingClientRect().top + window.scrollY + 50  && window.scrollY < fifthAnimation.getBoundingClientRect().top + window.scrollY + 150) {
        //     //     sixthAnimation.scrollIntoView()
        //     // }
        //     //
        //     // //conditions for sixth animation
        //     // if(window.scrollY > sixthAnimation.getBoundingClientRect().top + window.scrollY + 50  && window.scrollY < sixthAnimation.getBoundingClientRect().top + window.scrollY + 150) {
        //     //     seventhAnimation.scrollIntoView()
        //     // }
        //     //
        //     // //conditions for seventh animation
        //     // if(window.scrollY > seventhAnimation.getBoundingClientRect().top + window.scrollY + 50  && window.scrollY < seventhAnimation.getBoundingClientRect().top + window.scrollY + 150) {
        //     //     eighthAnimation.scrollIntoView()
        //     // }
        //
        //
        // } // else was horizontal scroll
        // refLastScrollTop.current = st <= 0 ? 0 : st; // For Mobile or negative scrolling


        // console.log('Current scroll from the top: ', window.pageYOffset)
        // console.log('window.scrollY', window.scrollY)
        //
        // console.log(firstAnimation.getBoundingClientRect().top + window.scrollY, 'firstAnimation.getBoundingClientRect().top + window.scrollY')
        // console.log(finishFirstAnimation.getBoundingClientRect().bottom + window.scrollY, 'finishFirstAnimation.getBoundingClientRect().bottom + window.scrollY')
        //
        // console.log(secondAnimation.getBoundingClientRect().top + window.scrollY, 'secondAnimation.getBoundingClientRect().top + window.scrollY')
        // console.log(thirdAnimation.getBoundingClientRect().top + window.scrollY, 'thirdAnimation.getBoundingClientRect().top + window.scrollY')



        // console.log(firstAnimation.offsetTop, 'firstAnimation.offsetTop')
        // console.log(secondAnimation.offsetTop, 'secondAnimation.offsetTop')
        // console.log(thirdAnimation.offsetTop, 'thirdAnimation.offsetTop')
    }

    useEffect(() => {
        window.addEventListener('wheel', scrollingToPosition, {
            passive: false
        });
        return () => window.removeEventListener('wheel', scrollingToPosition)
    }, [isAnimated, animationIndex])


    return (
        <section style={{ height: '715vh', transform: 'translateY(-100vh)', marginBottom: '-100vh'}} className={"space-section"}>
            <div id={'first-animation'} style={{ height: '10vh', position: 'absolute' }} ref={refSpaceSection} />
            <div id={'finish-first-animation'} style={{ height: '50vh', top: '10vh', position: 'absolute' }} ref={refScaleSpaceSection} />
            <div id={'second-animation'} style={{ height: '50vh', top: '70vh', position: 'absolute' }} ref={refScaleGalleryGenerationSection} />
            <div style={{ height: '50vh', top: '120vh', position: 'absolute' }} ref={refOpacityEasilySwitchSection} />
            <div id={'finish-second-animation'} style={{ height: '50vh', top: '170vh', position: 'absolute' }} ref={refOpacityLightenDropdownSection} />
            <div id={'third-animation'} style={{ height: '50vh', top: '220vh', position: 'absolute' }} ref={refOpacityLightenDropdownSection} />
            <div id={'fourth-animation'} style={{height: '50vh', top: '270vh', position: 'absolute'}} ref={refOpacityParametersTextSection} />
            <div style={{height: '50vh', top: '320vh', position: 'absolute'}} ref={refTransformXEasyControlSection} />
            <div id={'fifth-animation'} style={{height: '50vh', top: '370vh', position: 'absolute'}} ref={refTransformXGenerateByImageSection} />
            <div id={'sixth-animation'} style={{height: '50vh', top: '420vh', position: 'absolute'}} ref={refScaleAdvancedToolsSection} />
            <div style={{height: '50vh', top: '470vh', position: 'absolute'}} ref={refOpacityAdvancedToolsTextSection} />
            <div style={{height: '50vh', top: '520vh', position: 'absolute'}} ref={refZeroOpacityAdvancedToolsTextSection} />
            <div id={'seventh-animation'} style={{height: '50vh', top: '570vh', position: 'absolute'}} ref={refScaleFlexibilitySection} />
            <div id={'eighth-animation'} style={{height: '50vh', top: '620vh', position: 'absolute'}} ref={refOpacityFlexibilityTextSection} />

            <div style={{ position: 'sticky', top: '40vh', height: '150vh', width: '100%'}}>
                <div
                    className={`width-lighten-dropdown-sec`}
                    style={{
                        // width: widthLightenDropdownSection,
                    }}
                >
                    <div className="width-advanced-tools-section">
                        <div
                            className={'transform-x-generate-by-image-sec'}
                            style={{
                                transform: `translateX(0%)  translateZ(0px)`

                                // translateX: transformXGenerateByImageSection
                        }}>
                            <div
                                className={'transform-x-easy-control-sec'}
                                style={{
                                // translateX: transformXEasyControlSection
                            }}>
                                <div
                                    className={'header-width-container'}
                                    // style={{
                                    //   width: widthSpaceGalleryGenerationSection,
                                    // }}
                                >
                                    <div
                                        className={'header-container'}
                                        style={{
                                            transition: 'opacity ease 0.3s',
                                            zIndex: 100,
                                            position: 'relative',
                                            // scale: scaleSpaceHeaderSection,
                                            // translateY: transformYSpaceHeaderSection,
                                            opacity: 1,
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

                                        <div className="opacity-easy-control" style={{ opacity: 0, transition: 'opacity easy 0.3s', position: "absolute", top: '170%', left: "80%"}}>

                                            <div style={{maxWidth: '480px'}}>
                                                <h3 className="sec-title">Easy control</h3>
                                                <p className="sec-subtitle">Easily manage parameters directly from the search bar</p>
                                                <div className="interface-sec-3__btn-container">
                                                    <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                                                </div>
                                            </div>
                                        </div>

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

                                        <div
                                            className={'opacity-lighten-dropdown'}
                                            style={{
                                                opacity: 0,
                                                transition: 'opacity ease 0.3s',
                                                position: "absolute",
                                                top: "calc(60% - 30px)",
                                                left: "calc(24% - 130px)",
                                            }}
                                        >
                                            <img
                                                style={{ width: '100%'}}
                                                src={"/images/_src/Space_lighten_dropdown.webp"}
                                                alt=""
                                            />
                                        </div>

                                        <div style={{position: "absolute", top: "19%", left: "60.75%"}}>
                                            <div className="dropdown-easy-control" style={{opacity: 0, transition: 'opacity ease 0.3s', position: "absolute", top: "19%", left: "60.75%", zIndex: '2' }}>
                                                <img
                                                    style={{ width: '15vw'}}
                                                    src={"/images/_src/easy-controls-dropdown.png"}
                                                    alt=""
                                                />
                                            </div>
                                            <div ref={refHiddenBlock} style={{position: "absolute", top: "-1px", left: "0", backgroundColor: '#0A0A07', width: '15.1vw', height: '10vh', display: 'none', zIndex: '1'}}></div>
                                        </div>

                                        <div className="dropdown-generate-by-image" style={{opacity: 0, transition: 'opacity ease 0.3s', position: "absolute", top: "100%", left: "22.5%" }}>
                                            <img
                                                style={{ width: '100%'}}
                                                src={"/images/_src/generate-by-image-popup.webp"}
                                                alt=""
                                            />
                                        </div>

                                        <img
                                            style={{ width: '100%'}}
                                            ref={refSpaceHeader}
                                            src={"/images/_src/Barbar_1.svg"}
                                            alt=""
                                        />
                                    </div>


                                    <div
                                        className={'transform-x-advanced-tools-in-flexibility'}
                                        style={{
                                            // translateX: transformXAdvancedToolsInFlexibilitySection,
                                        }}
                                    >
                                        <div className="transform-advanced-tools-section">
                                            <div
                                                className={"space-section-container"}
                                                style={{
                                                    // scale: scaleSpaceSection,
                                                    // translateX: transformXSpaceSection,
                                                    // translateY: transformYSpaceSection,
                                                }}>
                                                <div className={"space-section-images"}>

                                                    <div className="transform-to-bottom-advanced-tools-section">
                                                        <motion.div
                                                          className="transform-space-section"
                                                            style={{
                                                                translateY: transformYSpaceSectionToTop,
                                                                // width: widthSpaceSection,
                                                            }}
                                                        >
                                                            <img
                                                              className="space-img"
                                                                style={{ width: '100%', transition: 'opacity ease 0.3s'}}
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
                                                </div>

                                                <motion.div
                                                    className={"space-buttons"}
                                                    style={{
                                                        opacity: opacitySpaceButtonsSection,
                                                        // scale: scaleSpaceButtonsSection,
                                                        // translateY: transformYSpaceButtonsSection
                                                    }}
                                                >
                                                    <div ref={refSpaceButtons} style={{display: 'flex', width: '100%', padding: '0 20px', height: '80px', position: 'relative'}}>
                                                        <div style={{display: 'flex', gap: '10px', marginRight: 'auto'}}>
                                                            {isOpenFullSpaceButtons
                                                                ? <img src={"/images/_src/animations/edit-light.png"} alt=""/>
                                                                : <img src={"/images/_src/animations/edit.png"} alt=""/>
                                                            }
                                                            {isOpenFullSpaceButtons && <img src={"/images/_src/animations/resize.png"} alt=""/>}
                                                            {isOpenFullSpaceButtons && <img src={"/images/_src/animations/paint.png"} alt=""/>}
                                                        </div>
                                                        <div style={{display: 'flex', gap: '10px'}}>
                                                            <img src={"/images/_src/animations/arrow-down.png"} alt=""/>
                                                            <img src={"/images/_src/animations/save.png"} alt=""/>
                                                        </div>
                                                        {isOpenFullSpaceButtons && <div style={{position: "absolute", top: '-300%', left: '53%', scale: '1.3', display: 'flex', alignItems: 'flex-start'}}>
                                                            <img style={{marginRight: '30px'}} src={"/images/_src/animations/area.png"} alt=""/>
                                                            <img src={"/images/_src/animations/tip.png"} alt=""/>
                                                        </div>}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>


                                    <div
                                      className="opacity-advanced-tools"
                                      style={{
                                        position: "absolute",
                                        top: 'calc(100% - 200px)', left: "65vw", width: '100%',
                                        opacity: 0
                                    }}>
                                        <div>
                                            <h3 className="sec-title">Advanced tools</h3>
                                            <p className="sec-subtitle">you can edit your picture using advanced tools to achieve even
                                                better results.</p>
                                            <div className="interface-sec-3__btn-container">
                                                <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                                            </div>
                                        </div>
                                    </div>



                                    <div
                                        className={'opacity-easily-switch-dropdown'}
                                        style={{opacity: 1}}
                                        // style={{opacity: opacityEasilySwitchDropdownSection}}
                                    >
                                        <div
                                            className={'opacity-easily-switch'}
                                            style={{
                                                // opacity: opacityEasilySwitchSection,
                                                transition: 'opacity ease 0.3s',
                                                opacity: 0,
                                                position: "absolute",
                                                top: "calc(80vh + 5%)",
                                                width: '100%',
                                                paddingLeft: '8%',
                                            }}
                                        >
                                            <h2 className="page-title">easily switch from <br /><i>gallery</i> to <i>generation</i></h2>
                                        </div>
                                    </div>

                                    <div style={{opacity: 1 }}>
                                        <div className="paramaters-lighten-dropdown" style={{ opacity: 0, transition: 'opacity ease 0.3s', position: "absolute", top: '37%', left: "10%", zIndex: '100'}}>

                                            <div style={{maxWidth: '480px'}}>
                                                <h3 className="sec-title">Parameters</h3>
                                                <p className="sec-subtitle">You can use the cinematic parameters we have prepared, on which
                                                    our artificial intelligence was trained. All parameters work both in the gallery tab
                                                    and in the generation.</p>
                                                <div className="interface-sec-3__btn-container">
                                                    <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                        <div className="opacity-generate-by-image" style={{ opacity: 0, transition: 'opacity ease 0.3s', position: "absolute", top: '37%', left: "10%"}}>
                                            <div style={{maxWidth: '480px'}}>
                                                <h3 className="sec-title">Generate by image</h3>
                                                <p className="sec-subtitle">You can upload your pictures or any picture from the Internet to
                                                    generate similar ones, or improve and edit the image</p>
                                                <div className="interface-sec-3__btn-container">
                                                    <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                                                </div>
                                            </div>
                                        </div>





                                    <div
                                      className="opacity-flexibility-section"
                                      style={{
                                        opacity: 0,
                                        transition: 'opacity ease 0.3s',
                                        position: "absolute",
                                        top: 'calc(100% - 270px)',
                                        left: "5vw",
                                        width: "30vw",
                                        minWidth: '30vw',
                                        maxWidth: '35vw',
                                        zIndex: "100"
                                    }}>
                                        <div style={{width: '100%'}}>
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
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default DesktopAnimation;