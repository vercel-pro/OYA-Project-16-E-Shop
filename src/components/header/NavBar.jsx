import React from 'react';
import Container from '../commonLayouts/Container';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoHandLeft } from 'react-icons/io5';

const NavBar = () => {
    return (
        <>
            <div className="bg-[#FF624C] py-6 text-white">
                <Container>
                    <div className="flex justify-between items-center font-['Montserrat'] font-bold text-sm">
                        <div>
                            <ul className='flex items-center gap-x-20'>
                                <li className='flex items-center gap-x-4 cursor-pointer'>
                                    <FaBars />
                                    <Link to={"/product-list"}>All Categories</Link>
                                </li>
                                <li>
                                    <Link to={"/product-list"}>Products</Link>
                                </li>
                                <li>
                                    <Link to={"/blogs"}>Blogs</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex items-center gap-x-20'>
                                <li className='flex items-center gap-x-1 cursor-pointer'>
                                    <Link to={"/product-list"}>LIMITED SALE</Link>
                                    <IoHandLeft />
                                </li>
                                <li>
                                    <Link to={"/product-list"}>Best Seller</Link>
                                </li>
                                <li>
                                    <Link to={"/blogs"}>New Arrival</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default NavBar;