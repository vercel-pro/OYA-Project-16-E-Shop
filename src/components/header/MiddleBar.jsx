import React from 'react';
import Container from '../commonLayouts/Container';
import { IoSearchSharp } from "react-icons/io5";
import CartIcon from '../../assets/icons/CartIcon';
import UserIcon from '../../assets/icons/UserIcon';
import { Link } from 'react-router-dom';

const MiddleBar = () => {
    return (
        <>
            <Container>
                <div className="flex justify-between items-center py-8">
                    <div>
                        <Link to={"/"}>
                            <img src="images/logo.svg" alt="logo" />
                        </Link>
                    </div>
                    <div className='flex justify-end items-center'>
                        <div className='relative mr-2'>
                            <input 
                            type="text"
                            className='w-[332px] border border-[#cccccc] py-[18px] px-6 rounded-[10px]'
                            placeholder='Search Products ...'/>
                            <IoSearchSharp className='text-3xl absolute top-1/2 right-6 -translate-y-1/2'/>
                        </div>
                        <div className='w-[150px] relative pl-[50px] mr-16'>
                            <CartIcon width={35} height={35} color="#303030"/>
                            <div className='absolute top-1/2 -translate-y-1/2 left-24'>
                                <p className='font-["Montserrat"] font-normal text-base leading-6'>cart</p>
                                <span className='font-["Montserrat"] font-bold text-base leading-5' >$150,000</span>
                            </div>
                        </div>
                        <div className='w-[170px] relative pl-[50px] after:content-[""] after:w-[1px] after:h-8 after:bg-[#303030] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2'>
                            <UserIcon width={28} height={28} color="#303030"/>
                            <div className='absolute top-1/2 -translate-y-1/2 left-24'>
                                <p className='font-["Montserrat"] font-normal text-base leading-6'>User</p>
                                <span className='font-["Montserrat"] font-bold text-base leading-5' >Account</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default MiddleBar;