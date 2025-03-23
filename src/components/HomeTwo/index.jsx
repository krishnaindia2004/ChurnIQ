import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import AboutHomeTwo from './AboutHomeTwo.jsx';
import CounterArea from './CounterArea.jsx';
import DownloadHomeTwo from './DownloadHomeTwo.jsx';
import FeaturesHomeTwo from './FeaturesHomeTwo.jsx';
import FooterHomeTwo from './FooterHomeTwo.jsx';
import HeaderHomeTwo from './HeaderHomeTwo.jsx';
import HeroHomeTwo from './HeroHomeTwo.jsx';
import PricingHomeTwo from './PricingHomeTwo.jsx';
import ServicesHomeTwo from './ServicesHomeTwo.jsx';
import SponserHomeTwo from './SponserHomeTwo.jsx';
import TestimonialHomeTwo from './TestimonialHomeTwo.jsx';
import VideoPlayerHomeTwo from './VideoPlayerHomeTwo.jsx';

function HomeTwo() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeTwo action={drawerAction.toggle} />
            <HeroHomeTwo />
            <ServicesHomeTwo />
            <AboutHomeTwo />
            <FeaturesHomeTwo />
            <CounterArea />
            <VideoPlayerHomeTwo />
            <DownloadHomeTwo />
            <PricingHomeTwo />
            <TestimonialHomeTwo />
            <SponserHomeTwo />
            <FooterHomeTwo />
            <BackToTop className="back-to-top-2" />
        </>
    );
}

export default HomeTwo;
