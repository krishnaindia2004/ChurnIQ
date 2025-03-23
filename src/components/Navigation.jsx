import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ lang = false }) {
    return (
        <>
            {(
                <ul>
                    <li>
                        <a href="/">
                            Home <i className="fal" />
                        </a>
                    </li>
                    <li>
                        <Link to="/service">Service</Link>
                    </li>
                    <li>
                        <Link to="/model">
                            Model
                        </Link>
                        {/* <ul className="sub-menu">
                            <li>
                                <Link to="/about-us">About</Link>
                            </li>
                            <li>
                                <Link to="/about-us-another">About 2</Link>
                            </li>
                            <li>
                                <Link to="/error">Error</Link>
                            </li>
                            <li>
                                <Link to="/shops">Shops</Link>
                            </li>
                            <li>
                                <Link to="/shops/shop-details">Shop details</Link>
                            </li>
                        </ul> */}
                    </li>
                    {/* <li>
                        <a href="#">
                            News <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/news">News Page</Link>
                            </li>
                            <li>
                                <Link to="/news/single-news">Single News</Link>
                            </li>
                        </ul>
                    </li> */}
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Navigation;
