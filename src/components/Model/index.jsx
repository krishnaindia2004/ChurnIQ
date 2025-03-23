import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderNews from '../News/HeaderNews.jsx';
import HeroNews from '../News/HeroNews.jsx';
import ChurnPrediction from './ChurnPrediction.jsx'
function Model() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Churn Prediction Here!"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
           <ChurnPrediction/>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Model;
