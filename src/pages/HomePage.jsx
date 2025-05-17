import React from 'react';
import BannerComponent from '../components/BannerComponent';
import FacilityComponent from '../components/FacilityComponent';
import FeaturedProduct from '../components/FeaturedProduct';


const HomePage = () => {
    return (
        <>
            <BannerComponent/>
            <FacilityComponent/>
            <FeaturedProduct/>
        </>
    );
};

export default HomePage;