import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import Container from '../commonLayouts/Container';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <>
            <div className="border-b border-[red] border-solid py-[22px]">
                <Container>
                    <div className="flex justify-between items-center">
                        <div className='flex items-center gap-x-[50px] font-["Montserrat"] font-normal text-sm relative after:content-[""] after:absolute after:w-[1px] after:h-8 after:bg-[#BFBFBF] after-left-0 after:top-1/2 -translate-1/2'>
                            <Link href="https://maps.app.goo.gl/2SjFb6hPT9c5pebh9" target='_blank' className='flex items-center'>
                                <IoLocationOutline/>
                                123 Main Street, Anytown USA
                            </Link>
                            <Link href="tel:+11234567" className='flex items-center'>
                                <FiPhone/>
                                +1 (555) 123-4567
                            </Link>
                        </div>
                        <div className="right"></div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default TopBar;