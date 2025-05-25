import React from 'react';
import Container from './commonLayouts/Container';
import Slider from 'react-slick';
import ProductLayout from './commonLayouts/ProductLayout';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

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
                    <div className="flex justify-start items-end gap-x-[127px]">
                        <div className={`w-[402px] border`}>s</div>
                        <div className={`w-[950px]`}>
                            <Slider {...settings} className='flex justify-center gap-1 my-7'>
                                {
                                    springSaleData.map((item,index)=>(
                                        <ProductLayout width='w-[463px]' percentTag={item.percentTag} categories={item.categories} title={item.title} rating={item.rating} totalRating={item.totalRating} price={item.price} bg={item.bg} border={item.border} stock={item.stock} stockAmount={item.stockAmount}/>
                                        
                                    ))
                                }
                            </Slider>
                        </div>

                    </div>
                </Container>
            </div>
        </>
    );
};

export default SpringSale;