import React from 'react';
import ProductLayout from './commonLayouts/ProductLayout';
import Container from './commonLayouts/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#30303040", color:"black", width: "40px", height:"40px", display: "flex", justifyContent:"center", alignItems:"center", borderRadius:"50%"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#30303040", color:"black", width: "40px", height:"40px", display: "flex", justifyContent:"center", alignItems:"center", borderRadius:"50%"}}
      onClick={onClick}
    />
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
            <Container>
                {/* <div className="flex gap-1 my-7"> */}
                <Slider {...settings} className='flex justify-center gap-1 my-7'>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={2} totalRating={200} price={900} bg={"transparent"} border={true} stock={true} stockAmount={50}/>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={5} totalRating={500} price={400} bg={"transparent"} border={true} stock={true} stockAmount={50}/>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={3} totalRating={300} price={562} bg={"transparent"} border={true} stock={true} stockAmount={50}/>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={4} totalRating={400} price={352} bg={"transparent"} border={true} stock={true} stockAmount={50}/>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={1} totalRating={100} price={32} bg={"transparent"} border={true} stock={true} stockAmount={50}/>
                    <ProductLayout percentTag={true} categories={"Laptop"} title={"JPhone 13 High Quality Value Buy Best Cam..."} rating={1} totalRating={100} price={50} bg={"transparent"} border={true} stock={true} stockAmount={300}/>
                    </Slider>
                {/* </div> */}
            </Container>
        </>
    );
};

export default FeaturedProduct;