import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import image1 from "../../Assets/image1.jpeg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.jpeg";
import image4 from "../../Assets/image4.png";
import image5 from "../../Assets/image5.jpeg";
import image6 from "../../Assets/image6.jpeg";
import image7 from "../../Assets/image7.jpg";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={image1} alt="Slide 1" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image2} alt="Slide 2" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image3} alt="Slide 3" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image4} alt="Slide 4" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image5} alt="Slide 5" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image6} alt="Slide 6" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image7} alt="Slide 7" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
