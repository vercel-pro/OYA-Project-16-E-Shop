import React from 'react';
import Container from './commonLayouts/Container';
import TechTalkCard from './TechTalkCard';
import { HiMiniArrowLongRight } from 'react-icons/hi2';

const TechTalk = () => {
    return (
        <>
            <div className="h-[960px] bg-white pt-20">
                <Container>
                    <h2 className={`font-["Poppins"] font-bold text-4xl leading-11 text-[#303030] capitalize`}>Tech Talk</h2>
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <p className={`font-["Montserrat"] font-normal text-[20px] leading-[30px] text-[#303030] capitalize mt-6 mb-12`}>Stay up to date with the latest trends, reviews, and insights from our experts.</p>
                        </div>
                        <div className='flex items-center gap-x-2 text-[#FF624C]'>
                            <span className='font-["Montserrat"] font-bold text-base'>View All</span>
                            <HiMiniArrowLongRight />
                        </div>
                    </div>
                    <div className={`flex flex-wrap`}>
                        <TechTalkCard/>
                        <TechTalkCard/>
                        <TechTalkCard/>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default TechTalk;