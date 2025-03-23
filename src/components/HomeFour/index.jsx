import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import PricingHomeOne from '../HomeOne/PricingHomeOne.jsx';
import ServicesHomeOne from '../HomeOne/ServicesHomeOne.jsx';
import TestimonialHomeOne from '../HomeOne/TestimonialHomeOne.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import ProjectHomeThree from '../HomeThree/ProjectHomeThree.jsx';
import CounterArea from '../HomeTwo/CounterArea.jsx';
import VideoPlayerHomeTwo from '../HomeTwo/VideoPlayerHomeTwo.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import FeaturesHomeFour from './FeaturesHomeFour.jsx';
import HeaderHomeFour from './HeaderHomeFour.jsx';
import HeroHomeFour from './HeroHomeFour.jsx';

function HomeFour() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeFour action={drawerAction.toggle} />
            <HeroHomeFour />
            <ServicesHomeOne className="pt-190" />
            <FeaturesHomeFour />
            <CounterArea style={{ backgroundColor: '#EEF1F6' }} />
            <TestimonialHomeOne />
            <VideoPlayerHomeTwo className="pt-100" />
            <PricingHomeOne />
            <ProjectHomeThree className="home-four-project" />
            <FooterHomeThree className="home-four-footer" />
            <BackToTop className="back-to-top-3" />
        </>
    );
}

export default HomeFour;
