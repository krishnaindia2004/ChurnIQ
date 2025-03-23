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
import BlogHomeRtl from './BlogHomeRtl.jsx';
import FaqHomeRtl from './FaqHomeRtl.jsx';
import FeaturesHomeRtl from './FeaturesHomeRtl.jsx';
import FooterHomeRtl from './FooterHomeRtl.jsx';
import HeaderHomeRtl from './HeaderHomeRtl.jsx';
import HeroHomeRtl from './HeroHomeRtl.jsx';
import PricingHomeRtl from './PricingHomeRtl.jsx';
import ProjectHomeRtl from './ProjectHomeRtl.jsx';
import ServicesHomeRtl from './ServicesHomeRtl.jsx';
import TeamHomeRtl from './TeamHomeRtl.jsx';
import TestimonialHomeRtl from './TestimonialHomeRtl.jsx';
import TrafficHomeRtl from './TrafficHomeRtl.jsx';

function HomeRtl() {
    const html = document.getElementsByTagName('html');
    const [lang, setLang] = useToggle(true);
    const [drawer, drawerAction] = useToggle(false);
    useEffect(() => {
        if (lang) {
            html[0].lang = 'ar';
            html[0].dir = 'rtl';
        } else {
            html[0].lang = 'en';
            html[0].dir = '';
        }
        return () => {
            html[0].lang = 'en';
            html[0].dir = '';
        };
    });
    return (
        <>
            {lang ? (
                <>
                    <Drawer lang={lang} drawer={drawer} action={drawerAction.toggle} />
                    <HeaderHomeRtl
                        lang={lang}
                        langEnabled="true"
                        changeModeLan={setLang.toggle}
                        action={drawerAction.toggle}
                        className="appie-header-area-rtl"
                    />
                    <HeroHomeRtl />
                    <ServicesHomeRtl />
                    <FeaturesHomeRtl />
                    <TrafficHomeRtl className="appie-traffic-area-rtl" />
                    <TestimonialHomeRtl />
                    <TeamHomeRtl />
                    <PricingHomeRtl />
                    <FaqHomeRtl className="appie-faq-area-rtl" />
                    <BlogHomeRtl />
                    <ProjectHomeRtl className="appie-project-area-rtl" />
                    <FooterHomeRtl />
                    <BackToTop />
                </>
            ) : (
                <>
                    <Drawer drawer={drawer} action={drawerAction.toggle} />
                    <HomeOneHeader
                        langEnabled="true"
                        lang={lang}
                        changeModeLan={setLang.toggle}
                        action={drawerAction.toggle}
                    />
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
            )}
        </>
    );
}

export default HomeRtl;
