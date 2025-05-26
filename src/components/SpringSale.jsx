import React, { useEffect, useState } from 'react';
import Container from './commonLayouts/Container';
import Slider from 'react-slick';
import ProductLayout from './commonLayouts/ProductLayout';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Button from './Button';

const springSaleData = [
    {
        image:"",
        percentTag:true,
        categories:"TELEVISION",
        title:"LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie ...",
        rating: 1,
        totalRating:50,
        price:310,
        bg:"white",
        border: true,
        stock:true,
        stockAmount: 20
    },
    {
        image:"",
        percentTag:true,
        categories:"CAMERA",
        title:"VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha ...",
        rating: 2,
        totalRating:100,
        price:320,
        bg:"white",
        border: false,
        stock:true,
        stockAmount: 50
    },
    {
        image:"",
        percentTag:true,
        categories:"TELEVISION",
        title:"LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie ...",
        rating: 3,
        totalRating:200,
        price:330,
        bg:"white",
        border: true,
        stock:true,
        stockAmount: 20
    },
    {
        image:"",
        percentTag:true,
        categories:"TELEVISION",
        title:"LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie ...",
        rating: 4,
        totalRating:250,
        price:340,
        bg:"white",
        border: true,
        stock:true,
        stockAmount: 100
    },
    {
        image:"",
        percentTag:true,
        categories:"TELEVISION",
        title:"LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie ...",
        rating: 5,
        totalRating:300,
        price:350,
        bg:"white",
        border: true,
        stock:true,
        stockAmount: 20
    },
]

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, color:"#303030", fontSize:"20px", border:"1px solid #303030", borderRadius:"50%", width: "40px", height:"40px", display: "flex", justifyContent:"center", alignItems:"center", position:"absolute", left:"calc(50% - 803px)", zIndex:"99"}} onClick={onClick}>
      <MdArrowBackIosNew />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, background:"white", color:"#303030", fontSize:"20px", border:"1px solid #303030", borderRadius:"50%", width: "40px", height:"40px", display: "flex", justifyContent:"center", alignItems:"center", position:"absolute", right:"0", translate: "10px", zIndex:"99"}} onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );
}

const SpringSale = () => {

    const [timerLeft,setTimerLeft] = useState(calculateTimeLeft())

    function calculateTimeLeft (){
        const saleEndDate = new Date('May 31, 2025 10:00 AM +06').getTime()
        const now = new Date().getTime()
        const difference = saleEndDate - now;

        if( difference < 0 ){
            return {days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return {
            days : Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours : Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes : Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds : Math.floor((difference % (1000 * 60) / 1000)),
        }
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimerLeft(calculateTimeLeft());
        },1000)

        return () => clearInterval(timer);
    },[])

     const formatTime = (value) => String(value).padStart(2, '0');

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />
  };

    return (
        <>
            <div className={`bg-[#F4F4F4] mt-20 py-16`}>
                <Container>
                    <div className="flex justify-start items-center gap-x-[127px] relative">
                        <div className={`w-[402px] flex flex-col justify-center gap-10 items-center`}>
                            <h2 className={`font-["Poppins"] font-bold text-[56px] text-[#303030]`}>Spring Sale</h2>
                            <div className={`flex justify-center items-start gap-x-3 font-["Poppins"] font-semibold text-[36px] text-[#FF624C]`}>
                                <p className='flex flex-col items-center'>{formatTime(timerLeft.days)} <span className={`font-["Montserrat"] font-normal text-base text-[#303030]`}>Days</span></p>:
                                <p className='flex flex-col items-center'>{formatTime(timerLeft.hours)} <span className={`font-["Montserrat"] font-normal text-base text-[#303030]`}>Hours</span></p>:
                                <p className='flex flex-col items-center'>{formatTime(timerLeft.minutes)} <span className={`font-["Montserrat"] font-normal text-base text-[#303030]`}>Minutes</span></p>:
                                <p className='flex flex-col items-center'>{formatTime(timerLeft.seconds)} <span className={`font-["Montserrat"] font-normal text-base text-[#303030]`}>Seconds</span></p>
                            </div>
                            <div className='w-full pl-10'>
                                <Button text={"Shop Now"}/>
                            </div>
                        </div>
                        <div className={`w-[950px]`}>
                            <Slider {...settings} className='flex justify-center gap-1 my-7'>
                                {
                                    springSaleData.map((item,index)=>(
                                        <ProductLayout key={index} width='w-[463px]' percentTag={item.percentTag} rounded={true} categories={item.categories} title={item.title} rating={item.rating} totalRating={item.totalRating} price={item.price} bg={item.bg} border={item.border} stock={item.stock} stockAmount={item.stockAmount}/>
                                        
                                    ))
                                }
                            </Slider>
                        </div>
                        <img src="images/SpringDots.svg" alt="SpringDots" className={`absolute left-10 bottom-0`}/>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default SpringSale;