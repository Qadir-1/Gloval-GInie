/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from '../Assets/Group 166.png'

const Shopping = () => {
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
      </div>

      <div className="shopping">
      <div>
      <h1>
          THANK YOU <br />
          FOR YOUR ORDER
        </h1>
        <h2>Confirmation will be sent to your registered email ID.</h2>
      </div>
       
        <img src={img2} alt='' />
      </div>


      <h2 className="shoppingH2">YOUR ORDER HAS BEEN SUCCESSFULLY PLACED,</h2>

      <div className="shoppingAddress"> 
      <h1></h1>
      </div>
    </>
  );
};

export default Shopping;
