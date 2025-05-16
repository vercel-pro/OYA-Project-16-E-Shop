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
                                <ul className='mt-[158px] flex flex-col gap-y-3'>
                                    <li>
                                        <Link to="tel:+11234567" className='relative pl-4'>
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
                            </Link>
                        </div>
                        <div className="w-[1000px] flex justify-between">
                            <div className="mr-[96px]">
                                <h4 className='font-["Poppins"] font-semibold  text-xl'>Links</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <li>Products List</li>
                                    <li>Order Tracking</li>
                                    <li>Products Guide</li>
                                    <li>Shopping Cart</li>
                                    <li>Tech Blog</li>
                                </ul>
                            </div>
                            <div className="mr-[96px]">
                                <h4 className='font-["Poppins"] font-semibold  text-xl'>Supports</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <li>About Us</li>
                                    <li>Privacy Policy</li>
                                    <li>Return Policy</li>
                                    <li>Help Centre</li>
                                    <li>Store Locations</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                            <div className="mr-[80px]">
                                <h4 className='font-["Poppins"] font-semibold  text-xl'>Categories</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <li> Computers & Tablets</li>
                                    <li> Mobile Phones & Accessories</li>
                                    <li> TV & Home Theater</li>
                                    <li> Audio & Headphones</li>
                                    <li> Cameras & Camcorders</li>
                                    <li> Gaming Equipment</li>
                                    <li> Home Appliances</li>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className='font-["Poppins"] font-semibold text-xl'>Payments</h4>
                                <div className="flex gap-x-8 mt-8">
                                    <VisaIcon/>
                                    <MasterCardIcon/>
                                    <ApplePayIcon/>
                                    <PayPleIcon/>
                                </div>
                                <h4 className='font-["Poppins"] font-semibold text-xl mt-[73px]'>Follow Us</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                    <li>Facebook</li>
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