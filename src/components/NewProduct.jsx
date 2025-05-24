import React, { useState } from 'react';
import ProductLayout from './commonLayouts/ProductLayout';
import Container from './commonLayouts/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Button from './Button';


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

const NewProduct = () => {

    const [newProductFilter, setNewProductFilter] = useState("")

    return (
        <>
            <div className="mt-20">
              <Container>
                <div className="flex justify-between items-center mb-12">
                  <div>
                    <h2 className='font-["Poppins"] font-semibold text-4xl leading-12 text-[#303030] capitalize'>new Products</h2>
                  </div>
                  <div className='flex items-center gap-x-2 text-[#FF624C]'>
                    <span className='font-["Montserrat"] text-[#303030] text-base'>Sort by</span>
                    <div>
                        <select
                        value={newProductFilter}
                        name="currency"
                        onChange={(e)=>{
                            const currency = currencies.find((c)=>c.category === e.target.value)
                            setNewProductFilter(currency.category)
                        }}
                        className='font-["Montserrat"] font-bold text-base'
                        >
                            {
                                currencies.map((currency,index) => (
                                    <option key={index} value={currency.category}>{currency.category}</option>
                                ))
                            }
                        </select>
                    </div>
                  </div>
                </div>
                <div className='flex justify-start gap-1 my-7'>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={2} totalRating={200} price={900} bg={"transparent"} border={true}/>
                    <ProductLayout percentTag={false} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={5} totalRating={500} price={400} bg={"transparent"} border={true}/>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={3} totalRating={300} price={562} bg={"transparent"} border={true}/>
                    <ProductLayout percentTag={false} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={4} totalRating={400} price={352} bg={"transparent"} border={true}/>
                    <ProductLayout percentTag={false} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={1} totalRating={100} price={32} bg={"transparent"} border={true}/>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={1} totalRating={100} price={50} bg={"transparent"} border={true}/>
                </div>
                <div className="flex justify-center items-center mt-20">
                    <Button text={"Load More"} bg='none' textColor={"text-[#FF624C]"} border='border-2' borderColor={'border-[#FF624C]'}/>
                </div>
              </Container>
            </div>
        </>
    );
};

export default NewProduct;