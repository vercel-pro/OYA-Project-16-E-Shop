import React, { useEffect, useRef, useState } from 'react';
import Container from '../commonLayouts/Container';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoHandLeft } from 'react-icons/io5';
import { RiArrowDownSLine } from 'react-icons/ri';

const NavBar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null)

    useEffect(()=>{
        const handleClickOutSide = (event)=>{
            if( dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutSide)
        return()=>{
            document.removeEventListener('mousedown', handleClickOutSide)
        }
    },[])

    const handleProductDropdown = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
    }


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
                                <li ref={dropdownRef} className='relative'>
                                    <button onClick={handleProductDropdown} className='cursor-pointer flex items-center gap-x-1'>Products <RiArrowDownSLine className={`text-2xl ${isDropdownOpen && "rotate-180"}`}/></button>
                                    {
                                        isDropdownOpen && (
                                            <div className="w-48 bg-white absolute z-10 mt-2 rounded-md shadow-lg overflow-hidden">
                                                <ul className='py-2 font-["Montserrat] font-normal text-base leading-6 text-[#303030]'>
                                                    <li className='px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer'>Product-1</li>
                                                    <li className='px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer'>Product-2</li>
                                                    <li className='px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer'>Product-3</li>
                                                    <li className='px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer'>Product-4</li>
                                                    <li className='px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer'>Product-5</li>
                                                    <li className='px-4 py-2 transition-all duration-200 hover:bg-gray-200 cursor-pointer'>Product-6</li>
                                                </ul>
                                            </div>
                                        )
                                    }
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