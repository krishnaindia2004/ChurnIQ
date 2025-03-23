import React from 'react';
import projectThumb from '../../assets/images/seven/SubscribeChurnIQ.png';

function ProjectHomeOne({ className }) {
    return (
        <>
            <section style={{margin:"50px 0px 0px"}} className={`appie-project-area pb-50 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-project-box wow animated slideInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="appie-project-content">
                                            <h3 className="title">
                                                Start your Rentention with ChurnIQ.
                                            </h3>
                                            <p>We will email you only about this product!</p>
                                            <form action="#">
                                                <div className="input-box mt-30">
                                                    <input type="text" placeholder="Your Email" />
                                                    <button type="button">Subscribe</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="appie-project-thumb">
                                    <img style={{borderRadius:"16px"}} src={projectThumb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeOne;
