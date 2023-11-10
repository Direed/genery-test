import React from 'react';

const InfographixSection = () => {
    return (
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
    );
};

export default InfographixSection;