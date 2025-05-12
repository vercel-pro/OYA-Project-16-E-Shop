import React, { useState } from 'react';

const TopRightBar = () => {

    const [selectedCountry, setSelectedCountry] = useState(null);

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


    return (
        <>
            <div className="flex justify-end items-center gap-x-[49px]">
                <div>usd</div>
                <div className='relative before:content-[""] before:absolute before:w-[1px] before:h-8 before:bg-[#BFBFBF] before:-left-6 before:top-1/2 before:-translate-1/2 after:content-[""] after:absolute after:w-[1px] after:h-8 after:bg-[#BFBFBF] after:-right-6 after:top-1/2 after:-translate-1/2'>
                    <select 
                    className='w-[112px] text-right hidden'
                    name="country"
                    value={selectedCountry?.value || ''}
                    onChange={(e)=>{
                        const country = countries.find((c)=>c.value === e.target.value)
                    }}>
                        {
                            countries.map((country, index) => (
                                <option value={country.value}><img src='https://flagcdn.com/256x192/ua.png'/> {country.name}</option>

                            ))
                        }
                        <option value={""}><img src='https://flagcdn.com/256x192/ua.png'/> English</option>
                    </select>
                    
                    {/* Custom Dropdown */}
                    <div className="border border-red-500 p-2 bg-green-500 cursor-pointer flex items-center"></div>



                </div>
                <div>social meida</div>
            </div>
        </>
    );
};

export default TopRightBar;
 