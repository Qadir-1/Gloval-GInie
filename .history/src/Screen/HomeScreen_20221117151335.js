/** @format */

import React from "react";
import Hero from "../Component/Hero";
import Mask2 from '../Assets/Mask Group 2.png'

const HomeScreen = () => {
  return (
    <>
      <Hero />

      <div className="tow-sec">
    <div className="left">
    <img src={Mask2} alt='' />
    </div>
    <div className="right">
    <h1>RHE STYLE ESSENTILAS</h1>
    </div>
      </div>
    </>
  );
};

export default HomeScreen;