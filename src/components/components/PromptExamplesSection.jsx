import React from 'react';
import Gallery from "@/components/gallery";

const PromptExamplesSection = ({mediaQuery, mediaQuery750}) => {
    return (
        <section className="prompt-examples-sec">
            <div className="container">
                {/*class="container-slider*/}
                <h2 className="sec-title">Prompt examples</h2>
                {/*<p class="sec-subtitle">We resolve your problem with references. Creating visual references with the*/}
                {/*    help of text prompts.</p>*/}
                <Gallery mediaQuery={mediaQuery} mediaQuery750={mediaQuery750}/>
            </div>
        </section>
    );
};

export default PromptExamplesSection;