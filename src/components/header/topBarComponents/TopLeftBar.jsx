import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const TopLeftBar = () => {
    return (
        <>
             <div className='flex items-center gap-x-[50px]'>
                <Link to="https://maps.app.goo.gl/2SjFb6hPT9c5pebh9" target='_blank' className='flex items-center gap-x-2 relative after:content-[""] after:absolute after:w-[1px] after:h-8 after:bg-[#BFBFBF] after:-right-6 after:top-1/2 after:-translate-1/2'>
                    <IoLocationOutline/>
                    123 Main Street, Anytown USA
                </Link>
                <Link to="tel:+11234567" className='flex items-center gap-x-2'>
                    <FiPhone/>
                    +1 (555) 123-4567
                </Link>
            </div>
        </>
    );
};

export default TopLeftBar;