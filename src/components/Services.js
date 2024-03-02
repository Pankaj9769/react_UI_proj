import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/9.png";
import img2 from "../assets/10.webp";
import img3 from "../assets/12.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={2000}
        showThumbs={false}
        stopOnHover={false}
        
      >
        <div>
          <img src={img1} alt="loading"></img>
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="loading"></img>
          <p className="legend">Web Dev</p>
        </div>
        <div>
          <img src={img3} alt="loading"></img>
          <p className="legend">DSA</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
