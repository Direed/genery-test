import React, {useRef, useState} from 'react';
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

    //Generation button

    const transformXGenerationButton = useTransform(scrollYProgressTransformXGenerationButton, [1, 0], ['-35vw', '0%'],{
        ease: circOut
    });



    scrollYProgressSpaceSection.on('change', value => {
        refSpaceImg.current.style.filter = `blur(${(1 - value) * 40}px)`
    })

    scrollYProgressScaleSpaceSection.on('change', value => {
        refSpaceImg.current.style.filter = `blur(${value * 40}px)`
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

    scrollYProgressOpacityAdvancedToolsTextSection.on('change', value => {
        refGirlImg.current.style.opacity = 0
        refGirlImg.current.style.filter = `blur(${value}px)`
    })

    scrollYProgressTransformXEasyControlSection.on('change', value => {
        if(value === 0) {
            refHiddenBlock.current.style.display = 'none'
        } else {
            refHiddenBlock.current.style.display = 'block'
        }
    })


    return (
        <section style={{ height: '760vh', transform: 'translateY(-100vh)', marginBottom: '-100vh'}} className={"space-section"}>
            <div style={{ height: '10vh', position: 'absolute' }} ref={refSpaceSection} />
            <div style={{ height: '50vh', top: '10vh', position: 'absolute' }} ref={refScaleSpaceSection} />
            <div style={{ height: '50vh', top: '0vh', position: 'absolute' }} ref={refScaleGalleryGenerationSection} />
            <div style={{ height: '50vh', top: '30vh', position: 'absolute' }} ref={refOpacityEasilySwitchSection} />
            <div style={{ height: '50vh', top: '50vh', position: 'absolute' }} ref={refTransformXGenerationButton} />

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
                        // translateX: transformXSpaceSection,
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
                <motion.div style={{}}>
                    <motion.div style={{ scale: scaleGalleryGenerationSection, width: '100%', position: 'absolute', left: '17.5vw', top: transformYGalleryGenerationSection, maxWidth: '65vw', height: '50px', borderRadius: '100px', background: 'rgba(255, 255, 255, 0.05)', alignItems: 'center'}}>
                        <div style={{position: 'relative', display: 'flex', width: '100%', justifyContent: 'space-between', height: '100%', zIndex: '2', gap: '20px'}}>
                            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                Gallery
                            </div>
                            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                Generation
                            </div>
                        </div>
                        <motion.div style={{position: 'absolute', translateX: transformXGenerationButton, top: '7.5%', zIndex: '1', width: '100%'}}>
                            <div style={{position: 'absolute', height: '42px', width: '100%', maxWidth: 'calc(32.5vw - 20px)', background: 'linear-gradient(99deg, #92ACA1 8.37%, #667770 89.81%)', borderRadius: '100px', top: '7.5%', zIndex: '1', right: '2.5%'}} />
                        </motion.div>
                    </motion.div>
                    <motion.div style={{position: 'absolute', top: '40vh', left: '7.5vw', opacity: opacityEasilySwitchSection}}>
                        <h2 style={{fontSize: '40px'}} className="page-title">easily switch from <br /><i>gallery</i> to <i>generation</i></h2>
                    </motion.div>
                </motion.div>


            </div>
        </section>
    );
};

export default MobileAnimation;