import React from 'react';

const SignUpSection = () => {
    return (
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
    );
};

export default SignUpSection;