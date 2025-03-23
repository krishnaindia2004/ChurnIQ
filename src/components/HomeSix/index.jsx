import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FeaturesHomeOne from '../HomeOne/FeaturesHomeOne.jsx';
import PricingHomeOne from '../HomeOne/PricingHomeOne.jsx';
import BlogHomeThree from '../HomeThree/BlogHomeThree.jsx';
import DownloadHomeThree from '../HomeThree/DownloadHomeThree.jsx';
import CounterArea from '../HomeTwo/CounterArea.jsx';
import ServicesHomeTwo from '../HomeTwo/ServicesHomeTwo.jsx';
import VideoPlayerHomeTwo from '../HomeTwo/VideoPlayerHomeTwo.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import FooterHomeSix from './FooterHomeSix.jsx';
import HeaderHomeSix from './HeaderHomeSix.jsx';
import HeroHomeSix from './HeroHomeSix.jsx';

function HomeSix() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeSix action={drawerAction.toggle} />
            <HeroHomeSix />
            <ServicesHomeTwo className="pt-90" />
            <BackToTop className="back-to-top-6" />
            <FeaturesHomeOne className="appie-features-6-area" />
            <CounterArea />
            <VideoPlayerHomeTwo />
            <DownloadHomeThree className="pt-0 pb-100" />
            <PricingHomeOne className="appie-pricing-6-area" />
            <BlogHomeThree />
            <FooterHomeSix />
        </>
    );
}

export default HomeSix;
