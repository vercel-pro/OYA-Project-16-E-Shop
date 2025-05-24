import React, { useState } from 'react';
import Container from './commonLayouts/Container';
import ProductLayout from './commonLayouts/ProductLayout';
import { HiMiniArrowLongRight } from 'react-icons/hi2';

const currencies = [
    {
    "category": "All Categories",
    },
    {
    "category": "New Product",
    },
    {
    "category": "Up Coming",
    },
]

const BestSeller = () => {

    const [newProductFilter, setNewProductFilter] = useState("")

    return (
        <>
            <div className="mt-20">
                <Container>
                    <div className="flex justify-between ">
                        <div className="max-w-[902px] p-6">
                            <div className="flex justify-between items-center mb-12">
                                <div>
                                    <h2 className='font-["Poppins"] font-semibold text-4xl leading-12 text-[#303030] capitalize'>Best Seller</h2>
                                </div>
                                <div className='flex items-center gap-x-2 text-[#FF624C]'>
                                    <span className='font-["Montserrat"] font-bold text-base'>View All</span>
                                    <HiMiniArrowLongRight />
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={2} totalRating={200} price={900} bg={"transparent"} border={true}/>
                                <ProductLayout percentTag={false} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={5} totalRating={500} price={400} bg={"transparent"} border={true}/>
                                <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={3} totalRating={300} price={562} bg={"transparent"} border={true}/>
                                <ProductLayout percentTag={false} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={4} totalRating={400} price={352} bg={"transparent"} border={true}/>
                                <ProductLayout percentTag={false} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={1} totalRating={100} price={32} bg={"transparent"} border={true}/>
                                <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={1} totalRating={100} price={50} bg={"transparent"} border={true}/>
                            </div>
                        </div>
                        <div className="max-w-[544px]">
                            <img src="images/promoBanner.svg" alt="promoBannerImage" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default BestSeller;