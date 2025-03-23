// import React, { useState } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Cart from '../Cart/index.jsx';
import TestimonialHomeOne from '../HomeOne/TestimonialHomeOne.jsx';
import DownloadHomeThree from '../HomeThree/DownloadHomeThree.jsx';
import ServicesHomeThree from '../HomeThree/ServicesHomeThree.jsx';
import ShowCaseHomeThree from '../HomeThree/ShowCaseHomeThree.jsx';
import FeaturesHomeTwo from '../HomeTwo/FeaturesHomeTwo.jsx';
import SponserHomeTwo from '../HomeTwo/SponserHomeTwo.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import SearchModule from '../SearchModule/index.jsx';
import FooterHomeFive from './FooterHomeFive.jsx';
import HeaderHomeFive from './HeaderHomeFive.jsx';
import HeroHomeFive from './HeroHomeFive.jsx';

function HomeFive() {
    const [search, searchAction] = useToggle(false);
    const [cart, cartAction] = useToggle(false);
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <SearchModule value={search} searchToggle={searchAction.toggle} />
            <Cart value={cart} action={cartAction.toggle} />
            <HeaderHomeFive
                action={drawerAction.toggle}
                cartToggle={cartAction.toggle}
                searchToggle={searchAction.toggle}
            />
            <HeroHomeFive />
            <ServicesHomeThree />
            <FeaturesHomeTwo />
            <DownloadHomeThree className="pb-90" />
            <ShowCaseHomeThree />
            <TestimonialHomeOne />
            <SponserHomeTwo className="pt-90" />
            <FooterHomeFive />
            <BackToTop className="back-to-top-5" />
        </>
    );
}

export default HomeFive;
