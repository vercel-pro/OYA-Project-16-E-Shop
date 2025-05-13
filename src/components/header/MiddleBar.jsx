import React from 'react';
import Container from '../commonLayouts/Container';
import { IoSearchSharp } from "react-icons/io5";
// import cartIcon from './../../assets/icons/cartIcon';

const MiddleBar = () => {
    return (
        <>
            <Container>
                <div className="flex justify-between items-center py-8">
                    <div>
                        <img src="images/logo.svg" alt="logo" />
                    </div>
                    <div className='flex justify-end items-center'>
                        <div className='relative mr-12'>
                            <input 
                            type="text"
                            className='w-[332px] border border-[#cccccc] py-[18px] px-6 rounded-[10px]'
                            placeholder='Search Products ...'/>
                            <IoSearchSharp className='w-4 text-3xl absolute top-1/2 right-6 -translate-y-1/2'/>
                        </div>
                        <div>
                            <cartIcon/>
                        </div>
                        <div>accounts Section</div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default MiddleBar;