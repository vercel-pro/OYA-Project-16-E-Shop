import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const countries = [
    { name: "United States", value: "US", flag: "https://flagcdn.com/16x12/us.png" },
    { name: "Canada", value: "CA", flag: "https://flagcdn.com/16x12/ca.png" },
    { name: "United Kingdom", value: "GB", flag: "https://flagcdn.com/16x12/gb.png" },
    { name: "Germany", value: "DE", flag: "https://flagcdn.com/16x12/de.png" },
    { name: "France", value: "FR", flag: "https://flagcdn.com/16x12/fr.png" },
    { name: "Italy", value: "IT", flag: "https://flagcdn.com/16x12/it.png" },
    { name: "Spain", value: "ES", flag: "https://flagcdn.com/16x12/es.png" },
    { name: "Australia", value: "AU", flag: "https://flagcdn.com/16x12/au.png" },
    { name: "Brazil", value: "BR", flag: "https://flagcdn.com/16x12/br.png" },
    { name: "India", value: "IN", flag: "https://flagcdn.com/16x12/in.png" },
    { name: "Japan", value: "JP", flag: "https://flagcdn.com/16x12/jp.png" },
    { name: "China", value: "CN", flag: "https://flagcdn.com/16x12/cn.png" },
    { name: "Russia", value: "RU", flag: "https://flagcdn.com/16x12/ru.png" },
    { name: "Mexico", value: "MX", flag: "https://flagcdn.com/16x12/mx.png" },
    { name: "South Korea", value: "KR", flag: "https://flagcdn.com/16x12/kr.png" },
    { name: "South Africa", value: "ZA", flag: "https://flagcdn.com/16x12/za.png" },
    { name: "Saudi Arabia", value: "SA", flag: "https://flagcdn.com/16x12/sa.png" },
    { name: "Netherlands", value: "NL", flag: "https://flagcdn.com/16x12/nl.png" },
    { name: "Sweden", value: "SE", flag: "https://flagcdn.com/16x12/se.png" },
    { name: "Argentina", value: "AR", flag: "https://flagcdn.com/16x12/ar.png" }
];

const currencies = [
    {
    "name": "Bangladeshi Taka",
    "code": "BDT",
    "symbol": "৳",
    "country": "Bangladesh",
    "exchange_rate_to_usd": 0.0091
    },
    {
    "name": "United States Dollar",
    "code": "USD",
    "symbol": "$",
    "country": "United States",
    "exchange_rate_to_usd": 1
    },
    {
    "name": "Euro",
    "code": "EUR",
    "symbol": "€",
    "country": "European Union",
    "exchange_rate_to_usd": 1.08
    },
    {
    "name": "British Pound",
    "code": "GBP",
    "symbol": "£",
    "country": "United Kingdom",
    "exchange_rate_to_usd": 1.25
    },
    {
    "name": "Japanese Yen",
    "code": "JPY",
    "symbol": "¥",
    "country": "Japan",
    "exchange_rate_to_usd": 0.0064
    },
    {
    "name": "Indian Rupee",
    "code": "INR",
    "symbol": "₹",
    "country": "India",
    "exchange_rate_to_usd": 0.012
    }
]

const TopRightBar = () => {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].code);
    // const [isOpenCurrency, setIsOpenCurrency] = useState(false);

    const handleSelect = (country)=>{
        setSelectedCountry(country)
        setIsOpen(false)
    }

    return (
        <>
            <div className="flex justify-end items-center gap-x-[49px]">

                {/* Custom Dropdown for currency*/}
                <div>
                    <select
                    value={selectedCurrency}
                    name="currency"
                    onChange={(e)=>{
                        const currency = currencies.find((c)=>c.code === e.target.value)
                        setSelectedCurrency(currency.code)
                        console.log(selectedCurrency)
                    }}
                    >
                        {
                            currencies.map((currency,index) => (
                                <option key={index} value={currency.code}>{currency.symbol} {currency.code}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='relative before:content-[""] before:absolute before:w-[1px] before:h-8 before:bg-[#BFBFBF] before:-left-6 before:top-1/2 before:-translate-1/2 after:content-[""] after:absolute after:w-[1px] after:h-8 after:bg-[#BFBFBF] after:-right-6 after:top-1/2 after:-translate-1/2'>
                    <select 
                    name="country"
                    className='w-[170px] text-right hidden'
                    value={selectedCountry?.value || ''}
                    onChange={(e)=>{
                        const country = countries.find((c)=>c.value === e.target.value)
                    }}>
                        {
                            countries.map((country, index) => (
                                <option key={index} value={country.value}>{country.name}</option>
                            ))
                        }
                    </select>
                    
                    {/* Custom Dropdown Country*/}
                    <div onClick={()=>setIsOpen(!isOpen)} className="w-[170px]  p-2 cursor-pointer flex items-center">
                        {
                            selectedCountry ? 
                            <>
                                <img src={selectedCountry?.flag} alt={selectedCountry?.name} className='w-5 h-4 mr-2'/>
                                <span className='mr-6'>{selectedCountry?.name}</span>
                                <FaAngleDown />
                            </> : 
                            <span className='flex items-center gap-x-2'>Select a country <FaAngleDown /></span>
                        }
                    </div>

                    {/* Option list */}
                    {
                        isOpen && (
                            <ul className='absolute w-full border border-gray-300 bg-white shadow-lg z-10'>
                                {
                                    countries.map((country, index) => (
                                        <li key={index} onClick={()=> handleSelect(country)} className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>
                                            <img src={country?.flag} alt={country?.name} className='w-5 h-4 mr-2'/>
                                            {
                                                 country.name
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }


                </div>
                <div className='flex justify-end items-center gap-x-3'>
                    <Link to={"#"}>
                        <FaFacebookF />
                    </Link>
                    <Link to={"#"}>
                        <FaTwitter />
                    </Link>
                    <Link to={"#"}>
                        <FaInstagram />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TopRightBar;
 