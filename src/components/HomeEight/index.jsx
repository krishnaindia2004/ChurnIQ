import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import AboutHomeEight from './AboutHomeEight.jsx';
import BlogHomeEight from './BlogHomeEight.jsx';
import FaqHomeEight from './FaqHomeEight.jsx';
import FooterHomeEight from './FooterHomeEight.jsx';
import HeaderHomeEight from './HeaderHomeEight.jsx';
import HeroHomeEight from './HeroHomeEight.jsx';
import ServicesHomeEight from './ServicesHomeEight.jsx';
import SignupHomeEight from './SignupHomeEight.jsx';
import TeamHomeEight from './TeamHomeEight.jsx';
import TestimonialHomeEight from './TestimonialHomeEight.jsx';
import WorkPartHomeEight from './WorkPartHomeEight.jsx';

function HomeEight() {
    const [drawer, setDrawer] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={setDrawer.toggle} />
            <HeaderHomeEight drawer={drawer} action={setDrawer.toggle} />
            <HeroHomeEight />
            <AboutHomeEight />
            <ServicesHomeEight />
            <WorkPartHomeEight />
            <FaqHomeEight />
            <TeamHomeEight />
            <TestimonialHomeEight />
            <BlogHomeEight />
            <SignupHomeEight className="appie-signup-8-area" />
            <FooterHomeEight />
            <BackToTop className="back-to-top-8" />
        </>
    );
}

export default HomeEight;
