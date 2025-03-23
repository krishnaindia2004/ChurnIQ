import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BlogHomeOne from '../HomeOne/BlogHomeOne.jsx';
import FaqHomeOne from '../HomeOne/FaqHomeOne.jsx';
import FeaturesHomeOne from '../HomeOne/FeaturesHomeOne.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import ProjectHomeOne from '../HomeOne/ProjectHomeOne.jsx';
import TeamHomeOne from '../HomeOne/TeamHomeOne.jsx';
import CounterArea from '../HomeTwo/CounterArea.jsx';
import DownloadHomeTwo from '../HomeTwo/DownloadHomeTwo.jsx';
import PricingHomeTwo from '../HomeTwo/PricingHomeTwo.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderHomeSeven from './HeaderHomeSeven.jsx';
import HeroHomeSeven from './HeroHomeSeven.jsx';

function HomeSeven() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeSeven action={drawerAction.toggle} />
            <HeroHomeSeven />
            <FeaturesHomeOne />
            <CounterArea />
            {/* <DownloadHomeTwo className="mb-0" /> */}
            <TeamHomeOne />
            {/* <PricingHomeTwo /> */}
            <FaqHomeOne className="pt-90" />
            {/* <BlogHomeOne /> */}
            <ProjectHomeOne />
            <FooterHomeOne />
        </>
    );
}

export default HomeSeven;
