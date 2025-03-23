import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import BlogHomeOne from './BlogHomeOne.jsx';
import FaqHomeOne from './FaqHomeOne.jsx';
import FeaturesHomeOne from './FeaturesHomeOne.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import HeroHomeOne from './HeroHomeOne.jsx';
import HomeOneHeader from './HomeOneHeader.jsx';
import PricingHomeOne from './PricingHomeOne.jsx';
import ProjectHomeOne from './ProjectHomeOne.jsx';
import ServicesHomeOne from './ServicesHomeOne.jsx';
import TeamHomeOne from './TeamHomeOne.jsx';
import TestimonialHomeOne from './TestimonialHomeOne.jsx';
import TrafficHomeOne from './TrafficHomeOne.jsx';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroHomeOne />
            <ServicesHomeOne />
            <FeaturesHomeOne />
            <TrafficHomeOne />
            <TestimonialHomeOne />
            <TeamHomeOne />
            <PricingHomeOne />
            <FaqHomeOne />
            <BlogHomeOne />
            <ProjectHomeOne />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;
