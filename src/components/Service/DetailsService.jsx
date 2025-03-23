import React from 'react';
import thumb from '../../assets/images/seven/sectionalIMG.jpg';

function DetailsService() {
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-details-sidebar mr-50">
                                <div className="service-category-widget">
                                    <ul>
                                        <li>
                                            <i className="fal fa-home"></i>Customer Churn Prediction
                                        </li>
                                        <li>
                                            <i className="fal fa-tag"></i>Churn IQ
                                        </li>
                                        <li>
                                            <i className="fal fa-user-friends"></i>4 Engineers
                                        </li>
                                        <li>
                                            <i className="fal fa-bookmark"></i>Krishna India
                                        </li>
                                        <li>
                                            <i className="fal fa-globe"></i>www.churniq.ai
                                        </li>
                                    </ul>
                                </div>
                                <div className="service-download-widget">
                                    <a href="#">
                                        <i className="fal fa-download"></i>
                                        <span>Download docs</span>
                                    </a>
                                </div>
                                <div className="service-download-widget">
                                    <a href="#">
                                        <i className="fal fa-file-pdf"></i>
                                        <span>Characteristics</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <div className="thumb">
                                    <img src={thumb} alt="" />
                                </div>
                                <div className="content">
                                    <h3 className="title">What we're Building</h3>
                                    <p>
                                        We are building a customer churn prediction solution tailored for e-commerce businesses.
                                        This system leverages machine learning models like Random Forest, combined with SMOTE,
                                        to accurately predict customers at risk of churning and provide actionable insights.
                                    </p>
                                    <span>
                                        Our user-friendly React-based interface allows businesses to upload data, visualize
                                        predictions, and access insights seamlessly, while a Gen AI-powered chatbot delivers
                                        real-time assistance and retention strategies.
                                    </span>
                                    <p>
                                        The project ensures businesses can proactively reduce churn by identifying key risk factors
                                        and acting on predictions through personalized retention campaigns. Advanced visualizations
                                        and feature importance analyses help users understand customer behavior patterns, enabling
                                        data-driven decision-making. Designed to scale with growing business needs, the system
                                        integrates predictive analytics with modern front-end technologies, offering a practical
                                        solution to enhance customer satisfaction and retention rates.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsService;
