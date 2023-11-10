import React from 'react';

const ApplicableSection = () => {
    return (
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
    );
};

export default ApplicableSection;