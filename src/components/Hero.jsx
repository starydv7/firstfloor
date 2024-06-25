import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

const Hero = () => {
  return (
    <div className="container mx-auto mt-10 w-full">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        className="rounded-lg overflow-hidden"
      >
        <div className="w-full h-96">
          <img src={p1} alt="p1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-96">
          <img src={p2} alt="p2" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-96">
          <img src={p3} alt="p3" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-96">
          <img src={p4} alt="p4" className="w-full h-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
