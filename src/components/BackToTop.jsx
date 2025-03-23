import React, { useEffect } from 'react';
import TopToBottom from '../lib/TopToBottom.js';

function BackToTop({ className }) {
    useEffect(() => {
        TopToBottom('.back-to-top');
    });
    return (
        <>
            <div className={`back-to-top ${className || ''}`}>
                <a href="#">
                    <i className="fal fa-arrow-up" />
                </a>
            </div>
        </>
    );
}

export default BackToTop;
