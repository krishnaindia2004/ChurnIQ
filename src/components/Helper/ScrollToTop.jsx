import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children, }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return children?children:null;
};

export default ScrollToTop;
