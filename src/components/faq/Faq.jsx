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
    const [openAccordion, setOpenAccordion] = useState(null)



    return (
        <>
            <div className="mt-16">
                <Container>
                    <div className="flex justify-between">
                        <div className="max-w-[902px] border">
                            {
                                accordionData.map((item,index)=>(
                                    <div key={index}>
                                        <AccordionItem/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="max-w-[544px] border">
                            <img src="../../public/images/" alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Faq;