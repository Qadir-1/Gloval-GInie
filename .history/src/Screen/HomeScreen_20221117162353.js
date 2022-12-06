/** @format */

import React from "react";
import Hero from "../Component/Hero";
import Mask2 from "../Assets/Mask Group 2.png";

const HomeScreen = () => {
  return (
    <>
      <Hero />

      <div className="two-sec">
        <div className="left">
          <img src={Mask2} alt="" />
        </div>
        <div className="right">
          <h1>THE STYLE ESSENTIALS</h1>
          <p>
            Allow notifications for tailored new arrivals <br />
            exicting launches and promotions
          </p>
          <button>Explore More</button>
        </div>
      </div>

      <div className="pro">
        <div className="left">
            <h1>WHAT'S TRENDING</h1>
        </div>
        <div className="right">
        <button>
            View all
        </button>
        </div>
      </div>

      <div className="product">
        <div>
            <img src="" alt='' />
        </div>
        <div>
            <img src="" alt='' />
        </div>
        <div>
            <img src="" alt='' />
        </div>
        <div>
            <img src="" alt='' />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;