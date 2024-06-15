import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import './Slider.scss'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000 // 3 saniyə
    };

    const slides = [
        {
          text: "First Slide",
          img: "https://kargolux.az/kargolux/assets/images/img/1-03.svg"
        },
        {
          text: "Second Slide",
          img: "https://kargolux.az/kargolux/assets/images/img/1-05.svg"
        },
        {
          text: "Third Slide",
          img: "https://kargolux.az/kargolux/assets/images/slider/tedbiq.png"
        }
      ];
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div style={{width:"80%", display:'flex', justifyContent:'center', alignItems:'center'}} key={index}>
            <h3>{slide.text}</h3>
            <img style={{width:"20%"}} src={slide.img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel