import React from 'react';
import heroThumb2 from '../../assets/images/hero-shape-2.png';
import ImgHover from '../../assets/images/seven/HeroImgSec.png'
function HeroHomeSeven() {
    return (
        <>
            <section className="appie-hero-area appie-hero-6-area h-screen appie-hero-7-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="appie-hero-content appie-hero-content-6 appie-hero-content-7">
                                <h1 className="appie-title">Revolutionize Customer Retention</h1>
                                <p>
                                Empowering e-commerce businesses to predict and prevent customer churn with  machine learning solutions. Stay one step ahead with insights that matter.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className=""></i>
                                            <span>
                                               Using Algorithms <span>Random forest & Smote</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="item-2" href="#">
                                            <i className=""></i>
                                            <span>
                                            Supported by  <span>Generative AI</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="info"></div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="appie-hero-thumb-6">
                                <div
                                    className="thumb wow animated fadeInUp text-center"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img height={450} className='border rounded-lg'  src={ImgHover} alt="" />
                                    <div className="back-image">
                                        <img src={heroThumb2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHomeSeven;
