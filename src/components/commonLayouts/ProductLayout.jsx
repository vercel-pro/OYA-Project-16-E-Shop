import React, { useState } from 'react';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { IoCartOutline, IoShareSocialOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProductLayout = ({ width="w-[284px]", percentTag=false, rounded=false, categories="Category Not available",title="Title Not available",rating,totalRating,price,bg, border,stock=false,stockAmount=0 }) => {

    let [ratingValue, setRatingValue] = useState(new Array(rating).fill(rating))
    
    return (
        <div style={{background:bg}} className={`${width} border-2 border-transparent p-6 overflow-hidden rounded-lg transition-all duration-300 group hover:border-[#C3C3C3]`}>
            <div className='relative'>
                
                <img src="images/productImage-1.png" alt="productImages" className='w-full' />
                {
                    percentTag && 
                    <>
                    {
                        rounded ?
                        <span className='bg-[#FF624c] w-[100px] h-[100px] text-base font-["Montserrat"] font-bold text-white rounded-full text-center absolute -top-2 -right-2 flex justify-center items-center'>50%</span>
                        :
                        <span className='bg-[#FF624c] py-[7px] px-5 text-base font-["Montserrat"] font-bold text-white rounded-md text-center absolute -top-2 -right-2'>50%</span>
                    }
                    </>
                }
                <div className='flex justify-center items-center gap-x-4 absolute left-1/2 -translate-x-1/2 bottom-1 scale-0 transition-all duration-300 group-hover:scale-100'>
                    <Link to={"/"} className="w-[50px] h-[50px] transition-all duration-300 border border-[#FF624C] bg-white text-[#FF624C] hover:bg-[#FF624C] rounded-full hover:text-white text-2xl flex justify-center items-center">
                        <IoCartOutline />
                    </Link>
                    <Link to={"/"} className="w-[50px] h-[50px] transition-all duration-300 border border-[#FF624C] bg-white text-[#FF624C] hover:bg-[#FF624C] rounded-full hover:text-white text-2xl flex justify-center items-center">
                        <FaRegHeart />
                    </Link>
                    <Link to={"/"} className="w-[50px] h-[50px] transition-all duration-300 border border-[#FF624C] bg-white text-[#FF624C] hover:bg-[#FF624C] rounded-full hover:text-white text-2xl flex justify-center items-center">
                        <IoShareSocialOutline />
                    </Link>
                </div>
                
            </div>
            <div>
                <p className='font-["Montserrat"] font-normal text-sm leading-5 tracking-[5px] uppercase mt-11 mb-4'>{categories}</p>
                <h3 className='font-["Poppins"] font-semibold text-xl leading-[30px] transition-all duration-300 group-hover:text-[#FF624C] group-hover:underline'>{title}</h3>
                <div className="flex items-center gap-2 text-[#FED550] mt-1">
                    {
                        ratingValue.map((item, index)=>(
                            <FaStar key={index}/>
                        ))
                    }
                    <span className='font-["Montserrat"] font-normal text-base text-[#303030]'> ( {totalRating} )</span>
                </div>
                <p className='font-["Poppins"] font-semibold text-2xl'>${price}</p>
                {
                    stock && 
                    <div className="w-full h-[30px] bg-[#dddddd] rounded-3xl mt-8 relative">
                        <span className='absolute top-1/2 left-1/2 -translate-1/2 text-white font-["Montserrat"] text-sm font-bold uppercase'>{stockAmount} AVAILABLE</span>
                        <div className="w-6/10 h-[30px] bg-[#333333] rounded-3xl mt-8"></div>
                    </div>

                }
            </div>
        </div>
    );
};

export default ProductLayout;