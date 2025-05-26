import React from 'react';
import ProductLayout from './commonLayouts/ProductLayout';
import Container from './commonLayouts/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { HiMiniArrowLongRight } from 'react-icons/hi2';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "#30303040", color:"black", width: "40px", height:"40px", display: "flex", justifyContent:"center", alignItems:"center", borderRadius:"50%"}}
    //   onClick={onClick}
    // />
    <div className={className} style={{ ...style, color:"#303030", fontSize:"20px", border:"1px solid #303030", borderRadius:"50%", width: "40px", height:"40px", display: "flex", justifyContent:"center", alignItems:"center", position:"absolute", left:"calc(50% - 803px)", zIndex:"99"}} onClick={onClick}>
      <MdArrowBackIosNew />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "#30303040", color:"black", width: "40px", height:"40px", display: "flex", justifyContent:"center", alignItems:"center", borderRadius:"50%"}}
    //   onClick={onClick}
    // />
    <div className={className} style={{ ...style, color:"#303030", fontSize:"20px", border:"1px solid #303030", borderRadius:"50%", width: "40px", height:"40px", display: "flex", justifyContent:"center", alignItems:"center", position:"absolute", left:"calc(50% + 745px)", zIndex:"99"}} onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );
}

const FeaturedProduct = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


    return (
        <>
            <div className="mt-20">
              <Container>
                <div className="flex justify-between items-center mb-12">
                  <div>
                    <h2 className='font-["Poppins"] font-semibold text-4xl leading-12 text-[#303030] capitalize'>Featured Products</h2>
                  </div>
                  <div className='flex items-center gap-x-2 text-[#FF624C]'>
                    <span className='font-["Montserrat"] font-bold text-base'>View All</span>
                    <HiMiniArrowLongRight />
                  </div>
                </div>
                <Slider {...settings} className='flex justify-center gap-1 my-7'>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={2} totalRating={200} price={900} bg={"transparent"} border={true}/>
                    <ProductLayout percentTag={false} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={5} totalRating={500} price={400} bg={"transparent"} border={true}/>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={3} totalRating={300} price={562} bg={"transparent"} border={true}/>
                    <ProductLayout percentTag={false} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={4} totalRating={400} price={352} bg={"transparent"} border={true}/>
                    <ProductLayout percentTag={false} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={1} totalRating={100} price={32} bg={"transparent"} border={true}/>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={1} totalRating={100} price={50} bg={"transparent"} border={true}/>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={1} totalRating={100} price={50} bg={"transparent"} border={true}/>
                  </Slider>
              </Container>
            </div>
        </>
    );
};

export default FeaturedProduct;