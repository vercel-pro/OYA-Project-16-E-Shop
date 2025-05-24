import React from 'react';
import BannerComponent from '../components/BannerComponent';
import FacilityComponent from '../components/FacilityComponent';
import FeaturedProduct from '../components/FeaturedProduct';
import OfferSection from '../components/OfferSection';


const HomePage = () => {
    return (
        <>
            <BannerComponent/>
            <FacilityComponent/>
            <FeaturedProduct/>
            <OfferSection/>
        </>
    );
};

export default HomePage;