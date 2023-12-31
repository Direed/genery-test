import React, {useEffect, useRef, useState} from 'react';
import {circOut, motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import useVerticalScroll from "@/hooks/useVerticalScroll";

const MobileAnimation = () => {
    const [isOpenFullSpaceButtons, setIsOpenFullSpaceButtons] = useState(false);
    const refSpaceSection = useRef(null)
    const refScaleSpaceSection = useRef(null)
    const refScaleGalleryGenerationSection = useRef(null)
    const refOpacityEasilySwitchSection = useRef(null)
    const refTransformXGenerationButton = useRef(null)
    const refTransformXGalleryButton = useRef(null)
    const refZeroOpacityEasilySwitchSection = useRef(null)
    const refTransformXParametersSection = useRef(null)
    const refOpacityParametersText = useRef(null)

    const refTransformXEasyControl = useRef(null)
    const refOpacityEasyControlText = useRef(null)

    const refTransformXGeneratedByImage = useRef(null)
    const refOpacityGeneratedByImageText = useRef(null)

    const refWidthAdvancedTools = useRef(null)
    const refAdvancedToolsPicture = useRef(null)
    const [widthAdvancedToolsPicture, setWidthAdvancedToolsPicture] = useState(null);
    const refOpacityAdvancedToolsFooter = useRef(null)
    const refOpacityAdvancedToolsText = useRef(null)



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

    const y = useVerticalScroll({ref: refScaleSpaceSection, limit: 100, springConfig: {mass: 0.01, stiffness: 2, damping: 1 }})
    const x = useVerticalScroll({ref: refScaleGalleryGenerationSection, limit: 100, springConfig: {mass: 0.01, stiffness: 2, damping: 1 }})
    // useVerticalScroll(refScaleGalleryGenerationSection)
    // useVerticalScroll(refOpacityEasilySwitchSection)
    console.log('y', y)
    y.on('change', (value) => {

        const getTransformValue = (initial, final) => initial - (initial - final) * (-value) / 100
        const updatedScale = getTransformValue(1, 1)
        const updatedTransformX = getTransformValue(0, 0)
        const updatedTransformY = getTransformValue(0, 0)
        const updatedHeaderScale = getTransformValue(3, 0.95)
        const updatedHeaderTransformY = getTransformValue(-10, 62)
        const updatedButtonsScale = getTransformValue(3, 1)
        const updatedButtonsTransformY = getTransformValue(50, -10)

        const element = document.querySelector('.space-section-container')
        const headerElement = document.querySelector('.header-container')
        const buttonsElement = document.querySelector('.space-buttons')

        // element.style.scale = updatedScale
        element.style.transform = `translateX(${updatedTransformX}px) translateY(${updatedTransformY}px) scale(${updatedScale}) translateY(0px)`
        // headerElement.style.transform = `translateX(0px) translateY(${updatedHeaderTransformY}vh) scale(${updatedHeaderScale}) translateY(0px)`
        // buttonsElement.style.transform = `translateX(0px) translateY(${updatedButtonsTransformY}vh) scale(${updatedButtonsScale}) translateY(0px)`

        // element.style.translateY = `${updatedTransformY}%`
        console.log('value', value)
    })

    useEffect(() => {
        setWidthAdvancedToolsPicture(refAdvancedToolsPicture.current.offsetWidth)
    }, [])

    // x.on('change', (value) => {
    //
    //     const getTransformValue = (initial, final) => initial - (initial - final) * (-value) / 100
    //     const updatedWidth = getTransformValue(100, 360)
    //
    //     const headerWidthContainer = document.querySelector('.header-width-container')
    //
    //     headerWidthContainer.style.width = `${updatedWidth}%`
    // })

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

    const { scrollYProgress: scrollYProgressTransformXGenerationButton } = useScroll({
        target: refTransformXGenerationButton,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressTransformXGalleryButton } = useScroll({
        target: refTransformXGalleryButton,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressZeroOpacityEasilySwitchSection } = useScroll({
        target: refZeroOpacityEasilySwitchSection,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressTransformXParametersSection } = useScroll({
        target: refTransformXParametersSection,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressOpacityParametersText } = useScroll({
        target: refOpacityParametersText,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressTransformXEasyControl } = useScroll({
        target: refTransformXEasyControl,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressOpacityEasyControlText } = useScroll({
        target: refOpacityEasyControlText,
        offset: ["start end", "end end"]
    })


    const { scrollYProgress: scrollYProgressTransformXGeneratedByImage } = useScroll({
        target: refTransformXGeneratedByImage,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressOpacityGeneratedByImageText } = useScroll({
        target: refOpacityGeneratedByImageText,
        offset: ["start end", "end end"]
    })


    const { scrollYProgress: scrollYProgressWidthAdvancedTools } = useScroll({
        target: refWidthAdvancedTools,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressOpacityAdvancedToolsFooter } = useScroll({
        target: refOpacityAdvancedToolsFooter,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressOpacityAdvancedToolsText } = useScroll({
        target: refOpacityAdvancedToolsText,
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

    const widthSpaceSection = useTransform(scrollYProgressSpaceSection, [1, 0], ['400%', '600%'],{
        ease: circOut
    }); ////////

    const scaleGalleryGenerationSection = useTransform(scrollYProgressScaleGalleryGenerationSection, [1, 0], ['1', '3'],{
        ease: circOut
    }); ////////
    const transformYGalleryGenerationSection = useTransform(scrollYProgressScaleGalleryGenerationSection, [1, 0], ['30vh', '0vh'],{
        ease: circOut
    }); ////////

    const transformXSpaceSection = useTransform(scrollYProgressScaleSpaceSection, [1, 0], ['-40%', '0%'], {
        ease: circOut
    });



    const transformYSpaceSection = useTransform(scrollYProgressScaleSpaceSection, [1, 0], ['33%', '0%'], {
        ease: circOut
    });
    const scaleSpaceSection = useTransform(scrollYProgressScaleSpaceSection, [1, 0], [0.6, 1], {
        ease: circOut
    });
    const opacitySpaceSection = useTransform(scrollYProgressScaleSpaceSection, [1, 0], [0.4, 1], {
        ease: circOut
    }); ////////



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

    // const opacityEasyControlText = useTransform(scrollYProgressTransformXEasyControlSection, [3, 0], [1, 0],{
    //     ease: circOut
    // });

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
    // const opacityGenerateByImageText = useTransform(scrollYProgressTransformXEasyControlSection, [3.5, 0], [3, 0],{
    //     ease: circOut
    // });

    // const zeroOpacityGenerateByImageText = useTransform(scrollYProgressScaleAdvancedToolsSection, [0.5, 0], [0, 1],{
    //     ease: circOut
    // });

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

    //Generation button

    const transformXGenerationButton = useTransform(scrollYProgressTransformXGenerationButton, [1, 0], ['-35vw', '0%'],{
        ease: circOut
    });


    //Gallery button
    const transformXGalleryButton = useTransform(scrollYProgressTransformXGalleryButton, [1, 0], ['35vw', '-0vw'],{
        ease: circOut
    });

    //Switch text - opacity zero
    const zeroOpacitySwitchText = useTransform(scrollYProgressZeroOpacityEasilySwitchSection, [1, 0], [0, 1],{
        ease: circOut
    });

    //Parameters section

    const transformXParametersSection = useTransform(scrollYProgressTransformXParametersSection, [1, 0], ['-100vw', '0vw'],{
        ease: circOut
    });

    const opacityParametersDropdown = useTransform(scrollYProgressTransformXParametersSection, [1, 0], [1, 0],{
        ease: circOut
    });

    const opacityParametersText = useTransform(scrollYProgressOpacityParametersText, [1, 0], [1, 0],{
        ease: circOut
    });


    //Easy control
    const transformXEasyControl = useTransform(scrollYProgressTransformXEasyControl, [1, 0], ['-105vw', '-0vw'],{
        ease: circOut
    });

    const transformXEasyControlTitle = useTransform(scrollYProgressTransformXEasyControl, [1, 0], ['105vw', '0vw'],{
        ease: circOut
    });

    const transformXEasyControlFooter = useTransform(scrollYProgressTransformXEasyControl, [1, 0], ['105vw', '0vw'],{
        ease: circOut
    });

    const zeroOpacityParametersText = useTransform(scrollYProgressTransformXEasyControl, [0.5, 0], [0, 1],{
        ease: circOut
    });

    const opacityEasyControl = useTransform(scrollYProgressTransformXEasyControl, [1, 0], [1, 0],{
        ease: circOut
    });

    const opacityEasyControlText = useTransform(scrollYProgressOpacityEasyControlText, [1, 0], [1, 0],{
        ease: circOut
    });


    //Generate by image
    const transformXGenerateByImage = useTransform(scrollYProgressTransformXGeneratedByImage, [1, 0], ['105vw', '0%'],{
        ease: circOut
    });

    const transformXGenerateByImageTitle = useTransform(scrollYProgressTransformXGeneratedByImage, [1, 0], ['-105vw', '0vw'],{
        ease: circOut
    });

    const transformXGenerateByImageFooter = useTransform(scrollYProgressTransformXGeneratedByImage, [1, 0], ['-105vw', '0vw'],{
        ease: circOut
    });

    const zeroOpacityEasyControlText = useTransform(scrollYProgressTransformXGeneratedByImage, [0.5, 0], [0, 1],{
        ease: circOut
    });

    const opacityGenerateByImage = useTransform(scrollYProgressTransformXGeneratedByImage, [1, 0], [1, 0],{
        ease: circOut
    });

    const opacityGenerateByImageText = useTransform(scrollYProgressOpacityGeneratedByImageText, [1, 0], [1, 0],{
        ease: circOut
    });

    //Advanced tools
    const widthAdvancedTools = useTransform(scrollYProgressWidthAdvancedTools, [1, 0], ['37.5%', '100%'],{
        ease: circOut
    });

    const blurAdvancedTools = useTransform(scrollYProgressWidthAdvancedTools, [1, 0], ['0px', '8px'],{
        ease: circOut
    });

    const transformYAdvancedToolsNavBar = useTransform(scrollYProgressWidthAdvancedTools, [1, 0], ['-100vh', '0vh'],{
        ease: circOut
    });

    const transformXAdvancedToolsNavBar = useTransform(scrollYProgressWidthAdvancedTools, [1, 0], ['-35%', '0%'],{
        ease: circOut
    });

    const widthAdvancedToolsNavBar = useTransform(scrollYProgressWidthAdvancedTools, [1, 0], ['37.5%', '100%'],{
        ease: circOut
    });

    const zeroOpacityAdvancedToolsNavBar = useTransform(scrollYProgressWidthAdvancedTools, [0.1, 0], [0, 1],{
        ease: circOut
    });

    const widthAdvancedToolsFooter= useTransform(scrollYProgressOpacityAdvancedToolsFooter, [1, 0], ['37.5%', '100%'],{
        ease: circOut
    });

    const opacityAdvancedToolsFooter = useTransform(scrollYProgressOpacityAdvancedToolsFooter, [1, 0], [1, 0],{
        ease: circOut
    });

    const zeroOpacityGenerateByImageText = useTransform(scrollYProgressWidthAdvancedTools, [1, 0], [0, 1],{
        ease: circOut
    });

    const opacityAdvancedToolsText = useTransform(scrollYProgressOpacityAdvancedToolsText, [1, 0], [1, 0],{
        ease: circOut
    });



    scrollYProgressWidthAdvancedTools.on('change', value => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        console.log(value, 'value')
        console.log(refAdvancedToolsPicture.current.style.width, 'refAdvancedToolsPicture.current.style.width')
        console.log(refAdvancedToolsPicture.current.offsetWidth, 'refAdvancedToolsPicture.current.offsetWidth')
        console.log(widthAdvancedToolsPicture, 'widthAdvancedToolsPicture')



        const width = ((vw - 60) / (value + widthAdvancedToolsPicture));
        refAdvancedToolsPicture.current.style.width = `${width}px`
        refAdvancedToolsPicture.current.style.filter = `blur(${(1 - value) * 8}px)`
    })




    scrollYProgressSpaceSection.on('change', value => {
        refSpaceImg.current.style.filter = `blur(${(1 - value) * 40}px)`
    })

    scrollYProgressScaleSpaceSection.on('change', value => {
        refSpaceImg.current.style.filter = `blur(${value * 40}px)`
    })

    // scrollYProgressScaleFlexibilitySection.on('change', value => {
    //     console.log(value, 'value')
    //     refSpaceImg.current.style.filter = `blur(${(1 - (1 - value)) * 40}px)`
    //     if(value > 0.10 ) {
    //         refGirlImg.current.style.opacity = 1
    //         refGirlImg.current.style.filter = `blur(${(1 - value) * 1000}px)`
    //     } else {
    //         refGirlImg.current.style.opacity = 0.4
    //         refGirlImg.current.style.filter = `blur(${(1 - value) * 400}px)`
    //     }
    // })

    scrollYProgressScaleGalleryGenerationSection.on('change', value => {
        if(value === 0) {
            refSpaceImg.current.style.opacity = 1
        } else {
            if((1 - value) > 0.4) refSpaceImg.current.style.opacity = 1 - value;
        }
    })

    scrollYProgressScaleAdvancedToolsSection.on('change', value => {
        if(value <= 0.6) {
            refSpaceImg.current.style.opacity = 0.4 + value;
            setIsOpenFullSpaceButtons(false)
        } else {
            refSpaceImg.current.style.opacity = 1
            setIsOpenFullSpaceButtons(true)
        }
    })

    // scrollYProgressOpacityAdvancedToolsTextSection.on('change', value => {
    //     refGirlImg.current.style.opacity = 0
    //     refGirlImg.current.style.filter = `blur(${value}px)`
    // })
    //
    // scrollYProgressTransformXEasyControlSection.on('change', value => {
    //     if(value === 0) {
    //         refHiddenBlock.current.style.display = 'none'
    //     } else {
    //         refHiddenBlock.current.style.display = 'block'
    //     }
    // })


    return (
        <section style={{ height: '760vh', transform: 'translateY(-100vh)', marginBottom: '-100vh'}} className={"space-section"}>
            <div style={{ height: '10vh', position: 'absolute' }} ref={refSpaceSection} />
            <div style={{ height: '50vh', top: '10vh', position: 'absolute' }} ref={refScaleSpaceSection} />
            <div style={{ height: '50vh', top: '0vh', position: 'absolute' }} ref={refScaleGalleryGenerationSection} />
            <div style={{ height: '50vh', top: '30vh', position: 'absolute' }} ref={refOpacityEasilySwitchSection} />
            <div style={{ height: '50vh', top: '50vh', position: 'absolute' }} ref={refTransformXGenerationButton} />
            <div style={{ height: '50vh', top: '110vh', position: 'absolute' }} ref={refTransformXGalleryButton} />
            <div style={{ height: '50vh', top: '115vh', position: 'absolute' }} ref={refZeroOpacityEasilySwitchSection} />
            <div style={{ height: '50vh', top: '120vh', position: 'absolute' }} ref={refTransformXParametersSection} />
            <div style={{ height: '50vh', top: '180vh', position: 'absolute' }} ref={refOpacityParametersText} />

            <div style={{ height: '50vh', top: '230vh', position: 'absolute' }} ref={refTransformXEasyControl} />
            <div style={{ height: '50vh', top: '280vh', position: 'absolute' }} ref={refOpacityEasyControlText} />


            <div style={{ height: '50vh', top: '330vh', position: 'absolute' }} ref={refTransformXGeneratedByImage} />
            <div style={{ height: '50vh', top: '380vh', position: 'absolute' }} ref={refOpacityGeneratedByImageText} />

            <div style={{ height: '50vh', top: '430vh', position: 'absolute' }} ref={refWidthAdvancedTools} />
            <div style={{ height: '25vh', top: '455vh', position: 'absolute' }} ref={refOpacityAdvancedToolsFooter} />
            <div style={{ height: '50vh', top: '490vh', position: 'absolute' }} ref={refOpacityAdvancedToolsText} />






            <div style={{ height: '50vh', top: '170vh', position: 'absolute' }} ref={refOpacityLightenDropdownSection} />
            <div style={{ height: '50vh', top: '220vh', position: 'absolute' }} ref={refOpacityLightenDropdownSection} />
            <div style={{height: '50vh', top: '270vh', position: 'absolute'}} ref={refOpacityParametersTextSection} />
            <div style={{height: '50vh', top: '320vh', position: 'absolute'}} ref={refTransformXEasyControlSection} />
            <div style={{height: '50vh', top: '370vh', position: 'absolute'}} ref={refTransformXGenerateByImageSection} />
            <div style={{height: '50vh', top: '420vh', position: 'absolute'}} ref={refScaleAdvancedToolsSection} />
            <div style={{height: '50vh', top: '470vh', position: 'absolute'}} ref={refOpacityAdvancedToolsTextSection} />
            <div style={{height: '50vh', top: '520vh', position: 'absolute'}} ref={refZeroOpacityAdvancedToolsTextSection} />
            <div style={{height: '50vh', top: '570vh', position: 'absolute'}} ref={refScaleFlexibilitySection} />
            <div style={{height: '50vh', top: '620vh', position: 'absolute'}} ref={refOpacityFlexibilityTextSection} />

            <div style={{ position: 'sticky', top: '100vh', height: '100vh', width: '100%'}}>
                <motion.div
                    className={"space-section-container"}
                    style={{
                        translateX: transformXParametersSection,
                        width: widthSpaceSection,
                        position: 'relative'

                    }}
                >
                    <motion.img
                        style={{ width: '100%', position: 'absolute', left: '-40%', opacity: opacitySpaceSection}}
                        ref={refSpaceImg}
                        src={"/images/_src/Space.webp"}
                        alt=""
                    />
                </motion.div>
                <motion.div style={{ translateX: transformXParametersSection }}>
                    <motion.div style={{ scale: scaleGalleryGenerationSection, width: '100%', position: 'absolute', left: '17.5vw', top: transformYGalleryGenerationSection, maxWidth: '65vw', height: '50px', borderRadius: '100px', background: 'rgba(255, 255, 255, 0.05)', alignItems: 'center'}}>
                        <div style={{position: 'relative', display: 'flex', width: '100%', justifyContent: 'space-between', height: '100%', zIndex: '2', gap: '20px'}}>
                            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                Gallery
                            </div>
                            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                Generation
                            </div>
                        </div>
                        <motion.div style={{position: 'absolute', translateX: transformXGalleryButton, top: '7.5%', zIndex: '1', width: '100%'}}>
                            <motion.div style={{position: 'absolute', translateX: transformXGenerationButton, top: '7.5%', zIndex: '1', width: '100%'}}>
                                <div style={{position: 'absolute', height: '42px', width: '100%', maxWidth: 'calc(32.5vw - 20px)', background: 'linear-gradient(99deg, #92ACA1 8.37%, #667770 89.81%)', borderRadius: '100px', top: '7.5%', zIndex: '1', right: '2.5%'}} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div style={{opacity: zeroOpacitySwitchText}}>
                        <motion.div style={{position: 'absolute', top: '40vh', width: '100vw', opacity: opacityEasilySwitchSection}}>
                            <h2 style={{fontSize: '40px'}} className="page-title">easily switch from <br /><i>gallery</i> to <i>generation</i></h2>
                        </motion.div>
                    </motion.div>
                </motion.div>


                <motion.div style={{position: 'absolute', left: '100vw', height: '100vh', translateX: transformXParametersSection, padding: '50px 30px'}}>
                    <motion.div style={{translateX: transformXGenerateByImage}}>
                    <motion.div style={{translateX: transformXEasyControl}}>
                        <motion.div style={{translateX: transformXGenerateByImageTitle}}>
                            <motion.div style={{paddingBottom: '30px', width: 'calc(100vw - 60px)', textAlign: 'center', translateX: transformXEasyControlTitle, position: 'relative'}}>
                                <motion.div style={{opacity: zeroOpacityParametersText}}>
                                    <motion.h3 style={{opacity: opacityParametersText}} className="sec-title">Parameters</motion.h3>
                                </motion.div>
                                <motion.div style={{width: '100%', position: 'absolute', top: '0px', opacity: zeroOpacityEasyControlText}}>
                                    <motion.h3 style={{opacity: opacityEasyControlText}} className="sec-title">Easy control</motion.h3>
                                </motion.div>
                                <motion.div style={{width: '100%', position: 'absolute', top: '0px', opacity: zeroOpacityGenerateByImageText}}>
                                    <motion.h3 style={{opacity: opacityGenerateByImageText}} className="sec-title">Generate by image</motion.h3>
                                </motion.div>
                                <motion.div style={{width: '100%', position: 'absolute', top: '0px'}}>
                                    <motion.h3 style={{opacity: opacityAdvancedToolsText}} className="sec-title">Advanced tools</motion.h3>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    <motion.div style={{position: "relative", zIndex: 3, opacity: opacityParametersDropdown}}>
                        <motion.img style={{scale: widthAdvancedToolsNavBar, opacity: zeroOpacityAdvancedToolsNavBar, translateY: transformYAdvancedToolsNavBar, translateX: transformXAdvancedToolsNavBar}} src={"/images/_src/animations/search-bar-mobile.png"} />
                        <motion.img
                            style={{width: '80vw', position: "absolute", top: '7.5vh', left: 0, zIndex: 2, opacity: zeroOpacityParametersText}}
                            src={"/images/_src/animations/lighten-dropdown.png"}
                        />
                        <motion.div style={{opacity: zeroOpacityEasyControlText}}>
                            <motion.img
                                style={{ width: '27.5vw', position: "absolute", top: '1.4vh', left: '59%', zIndex: 2, opacity: opacityEasyControl}}
                                src={"/images/_src/easy-controls-dropdown.png"}
                                alt=""
                            />
                        </motion.div>
                        <motion.div style={{opacity: zeroOpacityAdvancedToolsNavBar}}>
                            <motion.img
                                style={{ width: '80vw', position: "absolute", top: '7.5vh', zIndex: 2, opacity: opacityGenerateByImage, scale: widthAdvancedToolsNavBar, translateY: transformYAdvancedToolsNavBar, translateX: transformXAdvancedToolsNavBar}}
                                src={"/images/_src/generate-by-image-popup.webp"}
                                alt=""
                            />
                        </motion.div>
                    </motion.div>
                    <motion.img
                        ref={refAdvancedToolsPicture}
                        style={{ zIndex: '1', width: widthAdvancedTools, marginTop: '10px', filter: 'blur(8px)'}}
                        src={"/images/_src/Space.webp"}
                        alt=""
                    />
                        <motion.div style={{display: 'flex', width: widthAdvancedToolsFooter, position: 'relative', opacity: opacityAdvancedToolsFooter}}>
                            <div style={{display: 'flex', gap: '10px', marginRight: 'auto'}}>
                                <img style={{width: '30px', height: '30px'}} src={"/images/_src/animations/edit-light.png"} alt=""/>
                                <img style={{width: '30px', height: '30px'}} src={"/images/_src/animations/resize.png"} alt=""/>
                                <img style={{width: '30px', height: '30px'}} src={"/images/_src/animations/paint.png"} alt=""/>
                            </div>
                            <div style={{display: 'flex', gap: '10px'}}>
                                <img style={{width: '30px', height: '30px'}} src={"/images/_src/animations/arrow-down.png"} alt=""/>
                                <img style={{width: '30px', height: '30px'}} src={"/images/_src/animations/save.png"} alt=""/>
                            </div>
                            <div style={{position: "absolute", top: '-465%', left: '45%', display: 'flex', flexDirection: 'column'}}>
                                <img style={{height: '30px'}} src={"/images/_src/animations/tip.png"} alt=""/>
                                <img style={{width: '60px', marginTop: '10px'}} src={"/images/_src/animations/area.png"} alt=""/>
                            </div>
                        </motion.div>
                        <motion.div style={{position: 'absolute', top: '72.5vh', width: '80vw', opacity: opacityParametersText, translateX: transformXEasyControlFooter}}>
                            <motion.div style={{opacity: zeroOpacityParametersText}}>
                                <p style={{position: "absolute", textAlign: "center", top: '0'}} className="sec-subtitle">You can use the cinematic parameters we have prepared, on which
                                    our artificial intelligence was trained.
                                </p>
                            </motion.div>
                        </motion.div>
                        <motion.div style={{position: 'absolute', top: '60vh', width: '100vw', padding: '0px 50px', left: '100vw', opacity: opacityEasyControlText, translateX: transformXGenerateByImageFooter}}>
                            <motion.div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: zeroOpacityEasyControlText}}>
                                <p style={{textAlign: "center", top: '0'}} className="sec-subtitle">
                                    Easily manage parameters directly from the search bar
                                </p>
                                <div className="interface-sec-3__btn-container">
                                    <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div style={{position: 'absolute', top: '60vh', width: '80vw', opacity: opacityGenerateByImageText}}>
                            <motion.div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: zeroOpacityGenerateByImageText}}>
                                <p style={{textAlign: "center", top: '0'}} className="sec-subtitle">You can upload your pictures or any picture from the Internet to
                                    generate similar ones, or improve and edit the image</p>
                                <div className="interface-sec-3__btn-container">
                                    <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div style={{position: 'absolute', top: '60vh', width: '80vw', opacity: opacityAdvancedToolsText}}>
                            <motion.div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <p style={{textAlign: "center", top: '0'}} className="sec-subtitle">You can edit your picture using advanced tools to achieve even
                                    better results.</p>
                                <div className="interface-sec-3__btn-container">
                                    <a href="" className="btnV2">Try Genery for <b>FREE</b> </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default MobileAnimation;