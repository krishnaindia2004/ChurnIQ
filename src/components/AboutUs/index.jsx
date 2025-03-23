import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import SignupHomeEight from '../HomeEight/SignupHomeEight.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import SponserHomeTwo from '../HomeTwo/SponserHomeTwo.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderAbout from './HeaderAbout.jsx';
import HeroAbout from './HeroAbout.jsx';
import ServicesAbout from './ServicesAbout.jsx';
import TeamAbout from './TeamAbout.jsx';

function AboutUs() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderAbout drawer={drawer} action={drawerAction.toggle} />
            <HeroAbout />
            <ServicesAbout />
            <TeamAbout />
            <SponserHomeTwo />
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default AboutUs;
