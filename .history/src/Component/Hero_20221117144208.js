/** @format */

import React from "react";
import Mask from "../Assets/Mask Group 1.png";
import { Carousel } from "react-responsive-carousel";
import Image from '../Assets/Get Me This.png'

const Hero = () => {
  return (
    <>
      <Carousel autoPlay className="ImageCarousel" showThumbs={false}>
        <div>
          <img alt="ds" src={Mask} />
        </div>
        <div>
          <img alt="" src={Image} />
        </div>
      </Carousel>
    </>
  );
};

export default Hero;