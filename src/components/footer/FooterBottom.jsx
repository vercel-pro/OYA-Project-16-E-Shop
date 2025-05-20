import React from 'react';
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { FiPhone } from 'react-icons/fi';
import VisaIcon from '../../assets/icons/VisaIcon';
import MasterCardIcon from '../../assets/icons/MasterCardIcon';
import ApplePayIcon from '../../assets/icons/ApplePayIcon';
import PayPleIcon from '../../assets/icons/PayPleIcon';

const FooterBottom = () => {
    return (
        <>
            <div className="mt-[100px]">
                <Container>
                    <div className="flex justify-between border-b border-[#30303040] pb-20">
                        <div className="">
                            <Link to={"/"}>
                                <img src="images/logo.svg" alt="logo" />
                            </Link>
                                <ul className='mt-[158px] flex flex-col gap-y-3'>
                                    <li>
                                        <Link to="tel:11234567" className='relative pl-4'>
                                            <FiPhone className='absolute left-0 top-1/2 -translate-1/2'/>
                                            +15551234567
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="mailto:information@eshop.com" className='relative pl-4'>
                                            <IoIosMail className='absolute left-0 top-1/2 -translate-1/2'/>
                                            information@eshop.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://maps.app.goo.gl/2SjFb6hPT9c5pebh9" target='_blank' className='relative pl-4'>
                                            <IoLocationOutline className='absolute left-0 top-1/2 -translate-1/2'/>
                                            123 Main Street, Suite 105, Anytown USA
                                        </Link>
                                    </li>
                                </ul>
                            
                        </div>
                        <div className="w-[1000px] flex justify-between">
                            <div className="mr-[96px]">
                                <h4 className='font-["Poppins"] font-semibold  text-xl'>Links</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <Link to={"/"}></Link>
                                    <Link to={"/"}>Products List</Link>
                                    <Link to={"/"}>Order Tracking</Link>
                                    <Link to={"/"}>Products Guide</Link>
                                    <Link to={"/"}>Shopping Cart</Link>
                                    <Link to={"/"}>Tech Blog</Link>
                                </ul>
                            </div>
                            <div className="mr-[96px]">
                                <h4 className='font-["Poppins"] font-semibold  text-xl'>Supports</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <Link to={"/"}>About Us</Link>
                                    <Link to={"/"}>Privacy Policy</Link>
                                    <Link to={"/"}>Return Policy</Link>
                                    <Link to={"/"}>Help Centre</Link>
                                    <Link to={"/"}>Store Locations</Link>
                                    <Link to={"/"}>Careers</Link>
                                </ul>
                            </div>
                            <div className="mr-[80px]">
                                <h4 className='font-["Poppins"] font-semibold  text-xl'>Categories</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <Link to={"/"}> Computers & Tablets</Link>
                                    <Link to={"/"}> Mobile Phones & Accessories</Link>
                                    <Link to={"/"}> TV & Home Theater</Link>
                                    <Link to={"/"}> Audio & Headphones</Link>
                                    <Link to={"/"}> Cameras & Camcorders</Link>
                                    <Link to={"/"}> Gaming Equipment</Link>
                                    <Link to={"/"}> Home Appliances</Link>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className='font-["Poppins"] font-semibold text-xl'>Payments</h4>
                                <div className="flex gap-x-8 mt-8">
                                    <Link to={"/"}><VisaIcon/></Link>
                                    <Link to={"/"}><MasterCardIcon/></Link>
                                    <Link to={"/"}><ApplePayIcon/></Link>
                                    <Link to={"/"}><PayPleIcon/></Link>
                                </div>
                                <h4 className='font-["Poppins"] font-semibold text-xl mt-[73px]'>Follow Us</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <Link to={"/"}>Twitter</Link>
                                    <Link to={"/"}>Instagram</Link>
                                    <Link to={"/"}>Facebook</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 mb-20 text-base text-[#303030] font-['Montserrat'] font-normal">
                        <span>Copyright © 2023 E-Shop. All Rights Reserved. </span>
                        <div className="flex justify-end gap-x-6">
                            <Link to={"/"} >Privacy Policy</Link>
                            <Link to={"/"} className='relative before:content[""] before:w-[1px] before:h-[90%] before:bg-[#303030bf] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 after:content[""] after:w-[1px] after:h-[90%] after:bg-[#303030bf] after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2'>Terms & Condition</Link>
                            <Link to={"/"}>Sitemap</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default FooterBottom;