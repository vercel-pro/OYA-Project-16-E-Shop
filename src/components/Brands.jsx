import React from 'react';
import Container from './commonLayouts/Container';
import BrandIconOne from '../assets/icons/BrandIconOne';
import BrandIconTwo from '../assets/icons/BrandIconTwo';
import BrandIconThree from '../assets/icons/BrandIconThree';
import BrandIconFour from '../assets/icons/BrandIconFour';
import BrandIconFive from '../assets/icons/BrandIconFive';

const Brands = () => {
    return (
        <>
            <div className="mt-12 mb-24">
                <Container>
                    <div className="flex justify-between items-center">
                        <BrandIconOne/>
                        <BrandIconTwo/>
                        <BrandIconThree/>
                        <BrandIconFour/>
                        <BrandIconFive/>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Brands;