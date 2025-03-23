import React, { useState } from 'react';

function FaqHomeOne({ className }) {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };
    return (
        <>
            <section className={`appie-faq-area pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Frequently asked questions</h3>
                                <p>Different layouts and styles for team sections.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(1)}
                                        className={`accrodion ${showQues === 1 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>What is customer churn prediction?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    It is the process of identifying customers likely to stop using a product or service.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(2)}
                                        className={`accrodion ${showQues === 2 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Why is churn prediction important for businesses?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    It helps businesses retain customers and maximize revenue.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(3)}
                                        className={`accrodion ${showQues === 3 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>What data is required for churn prediction models?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 3 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Customer behavior, transaction history, and demographic data are commonly used.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(4)}
                                        className={`accrodion ${showQues === 4 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Which algorithms work best for churn prediction?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 4 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Popular choices include Random Forest, Logistic Regression, and XGBoost.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="faq-text text-center pt-40">
                                <p>
                                    Can't find an answer?{' '}
                                    <a href="krishnaindia065@gmail.com">Email us</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqHomeOne;
