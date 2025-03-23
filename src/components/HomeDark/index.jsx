import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import BlogHomeOne from '../HomeOne/BlogHomeOne.jsx';
import FaqHomeOne from '../HomeOne/FaqHomeOne.jsx';
import FeaturesHomeOne from '../HomeOne/FeaturesHomeOne.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroHomeOne from '../HomeOne/HeroHomeOne.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import PricingHomeOne from '../HomeOne/PricingHomeOne.jsx';
import ProjectHomeOne from '../HomeOne/ProjectHomeOne.jsx';
import ServicesHomeOne from '../HomeOne/ServicesHomeOne.jsx';
import TeamHomeOne from '../HomeOne/TeamHomeOne.jsx';
import TestimonialHomeOne from '../HomeOne/TestimonialHomeOne.jsx';
import TrafficHomeOne from '../HomeOne/TrafficHomeOne.jsx';
import Drawer from '../Mobile/Drawer.jsx';

function HomeDark() {
    const [drawer, drawerAction] = useToggle(false);
    const [darkMode, setDarkMode] = useToggle(true);

    useEffect(() => {
        document.body.classList.add('appie-init');
        if (darkMode) {
            document.body.classList.add('appie-dark');
        } else {
            document.body.classList.remove('appie-dark');
        }
        return () => {
            document.body.classList.remove('appie-dark');
        };
    });

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader
                className={darkMode ? 'appie-header-area-dark' : ''}
                dark={darkMode}
                darkEnable
                changeMode={setDarkMode.toggle}
                action={drawerAction.toggle}
            />
            <HeroHomeOne className={darkMode ? 'appie-hero-area-dark' : ''} />
            <ServicesHomeOne className={darkMode ? 'appie-service-area-dark' : ''} />
            <FeaturesHomeOne className={darkMode ? 'appie-features-area-dark' : ''} />
            <TrafficHomeOne className={darkMode ? 'appie-traffic-area-dark' : ''} />
            <TestimonialHomeOne />
            <TeamHomeOne className={darkMode ? 'appie-team-area-dark' : ''} />
            <PricingHomeOne className={darkMode ? 'appie-pricing-area-dark' : ''} />
            <FaqHomeOne className={darkMode ? 'appie-faq-area-dark' : ''} />
            <BlogHomeOne className={darkMode ? 'appie-blog-area-dark' : ''} />
            <ProjectHomeOne />
            <FooterHomeOne className={darkMode ? 'appie-footer-area-dark' : ''} />
            <BackToTop />
        </>
    );
}

export default HomeDark;
