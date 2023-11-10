import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from "framer-motion";

const GenerationSection = () => {
    const refAdvantages = useRef(null)
    const { scrollYProgress: scrollYProgressAdvantages } = useScroll({
        target: refAdvantages,
        offset: ["start end", "end end"]
    })
    const scaleAdvantages = useTransform(scrollYProgressAdvantages, [2, 0], [0, 2]);

    scrollYProgressAdvantages.on('change', (value) => {
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

    return (
        <section className="generation-sec">
            <motion.div
                ref={refAdvantages}
                className="generation-sec__container"
                style={{
                    scale: scaleAdvantages
                }}
            >
                <div className="generation-sec__info">
                    <h2 className="page-title">If you can't find reference you can <i>generate</i> it</h2>
                </div>
            </motion.div>
        </section>
    );
};

export default GenerationSection;