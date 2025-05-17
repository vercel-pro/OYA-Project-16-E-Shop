import React from 'react';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { IoCartOutline, IoShareSocialOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProductLayout = () => {
    return (
        <div className='border-2 border-transparent p-6 overflow-hidden rounded-lg transition-all duration-300 group hover:border-[#C3C3C3]'>
            <div className='relative'>
                
                <img src="images/productImage-1.png" alt="productImages" />
                <span className='bg-[#FF624c] py-[7px] px-5 text-base font-["Montserrat"] font-bold text-white rounded-md text-center absolute -top-2 -right-2'>50%</span>
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
                <p className='font-["Montserrat"] font-normal text-sm leading-5 tracking-[5px] uppercase mt-11 mb-4'>Laptop</p>
                <h3 className='font-["Poppins"] font-semibold text-xl leading-[30px] transition-all duration-300 group-hover:text-[#FF624C] group-hover:underline'>JPhone 13 High Quality Value Buy Best Cam...</h3>
                <div className="flex items-center gap-2 text-[#FED550] mt-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className='font-["Montserrat"] font-normal text-base text-[#303030]'> ( 100 )</span>
                </div>
                <p className='font-["Poppins"] font-semibold text-2xl'>$999.00</p>
            </div>
        </div>
    );
};

export default ProductLayout;