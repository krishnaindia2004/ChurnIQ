import React from 'react';
import teamOne from '../../assets/images/team/team-1.jpg';
import teamTwo from '../../assets/images/team/team-2.jpg';
import teamThree from '../../assets/images/team/team-3.jpg';
import teamFour from '../../assets/images/team/team-4.jpg';
import emailSVG from '../../assets/images/icon/email.svg';
function TeamHomeOne({ className }) {
    return (
        <>
            <section className={`appie-team-area pt-90 pb-100 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Meet our Team Members</h3>
                                <p>"Four Minds, One Vision: Driving Innovation Together."</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                    <img style={{ border: "solid black", borderRadius: "16px" }} src={teamOne} alt="" />
                                    <ul>
                                        <li>
                                            <a href="http://www.linkedin.com/in/krishna2004">
                                                <i className="fab fa-linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a style={{ display: 'flex' }} href="krishnaindia065@gmail.com">
                                                <img style={{ alignSelf: "center", height: "15px", width: "36px" }} src={emailSVG} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.github.com/krishna-mfai-ad">
                                                <i className="fab fa-github" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Krishna Rajeshkumar</h5>
                                    <span>Frontend Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb">
                                    <img style={{ border: "solid black", borderRadius: "16px" }} src={teamTwo} alt="" />
                                    <ul>
                                        <li>
                                            <a href="https://www.linkedin.com/in/rahul-i-">
                                                <i className="fab fa-linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a style={{ display: 'flex' }} href="donrahul648@gmail.com">
                                                <img style={{ alignSelf: "center", height: "15px", width: "36px" }} src={emailSVG} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/RudyRahul">
                                                <i className="fab fa-github" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Rahul Ilamurugan</h5>
                                    <span>Python Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="thumb">
                                    <img style={{ border: "solid black", borderRadius: "16px" }} src={teamThree} alt="" />
                                    <ul>
                                        <li>
                                            <a href="https://www.linkedin.com/in/keerti-balaji-m">
                                                <i className="fab fa-linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a style={{ display: 'flex' }} href="keertibalaji05@gmail.com">
                                                <img style={{ alignSelf: "center", height: "15px", width: "36px" }} src={emailSVG} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-github" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Keerti Balaji M</h5>
                                    <span>Data Analyst</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="800ms"
                            >
                                <div className="thumb">
                                    <img style={{ border: "solid black", borderRadius: "16px" }} src={teamFour} alt="" />
                                    <ul>
                                        <li>
                                            <a href="https://www.linkedin.com/in/kunguma-dharshan-ks">
                                                <i className="fab fa-linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a style={{ display: 'flex' }} href="dharshankd57@gmail.com">
                                                <img style={{ alignSelf: "center", height: "15px", width: "36px" }} src={emailSVG} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Dharshankd">
                                                <i className="fab fa-github" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Kungumadharshan K S</h5>
                                    <span>Documentation</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-12">
                            <div className="team-btn text-center mt-50">
                                <a className="main-btn" href="#">
                                    {' '}
                                    View all Members <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamHomeOne;
