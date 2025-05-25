import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import Container from '../commonLayouts/Container';

const accordionData = [
    {
        title: "What payment methods do you accept?",
        content: `Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.`
    },
    {
        title: "How long does the product shipping take?",
        content: `Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.`
    },
    {
        title: "Do you offer international shipping?",
        content: `Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.`
    },
    {
        title: "Can I track my order?",
        content: `Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.`
    },
]

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null)

       return (
        <>
            <div className="mt-16 py-16 bg-[#F4F4F4]">
                <Container>
                    <div className="flex justify-between">
                        <div className="w-[902px]">
                            {
                                accordionData.map((item,index)=>(
                                        <AccordionItem
                                            key={index}
                                            title={item.title}
                                            content={item.content}
                                            onToggle={()=> {setOpenIndex(openIndex === index ? null : index)
                                                // console.log(openIndex, index)
                                            }}
                                            // onToggle={()=> console.log(openIndex, index)}
                                            isOpen={openIndex === index}
                                        />
                                ))
                            }
                        </div>
                        <div className="w-[544px] relative border">
                            <img src="../../../public/images/faqDots.svg" alt="Dots" className='absolute top-0 right-0'/>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Faq;