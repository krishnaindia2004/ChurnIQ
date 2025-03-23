import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import AboutHomeThree from './AboutHomeThree.jsx';
import BlogHomeThree from './BlogHomeThree.jsx';
import DownloadHomeThree from './DownloadHomeThree.jsx';
import FooterHomeThree from './FooterHomeThree.jsx';
import FunFactHomeThree from './FunFactHomeThree.jsx';
import HeaderHomeThree from './HeaderHomeThree.jsx';
import HeroHomeThree from './HeroHomeThree.jsx';
import ProjectHomeThree from './ProjectHomeThree.jsx';
import ServicesHomeThree from './ServicesHomeThree.jsx';
import ShowCaseHomeThree from './ShowCaseHomeThree.jsx';

function HomeThree() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroHomeThree />
            <ServicesHomeThree />
            <FunFactHomeThree />
            <AboutHomeThree />
            <ShowCaseHomeThree />
            <DownloadHomeThree />
            <BlogHomeThree />
            <ProjectHomeThree />
            <FooterHomeThree />
            <BackToTop className="back-to-top-3" />
        </>
    );
}

export default HomeThree;
