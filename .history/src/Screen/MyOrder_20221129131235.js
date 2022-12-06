/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Oil.png";

import img3 from '../Assets/Vitamin C.png'
import img4 from '../Assets/618-39BSrgL._SL1500_.png'
import img5 from '../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png'

const MyOrder = () => {
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1>MY ORDERS</h1>
      </div>

      <div className="MyOrderFour">
        <h3>All Orders</h3>
        <h3>InTransit</h3>
        <h3>Canceled</h3>
        <h3 className="special">Buy it Again</h3>
      </div>

      <div className="MyOrderPlaced">
        <h2>
          {" "}
          <span style={{ fontWeight: "700" }}>18 orders </span> placed in{" "}
        </h2>
        <select>
          <option>Last 30 days</option>
        </select>
      </div>

      <hr className="MyOrderHr" />

      <div className="MyOrderTwoSec">
        <div className="left">
          <input type={"checkbox"}  />
          <img src={img2} alt="" />
          <div>
            <h2>SOLGAR</h2>
            <p>
              Solgar B-Complex "100", 100 Vegetable Capsules Non GMO, Vegan,
              Gluten Free, Dairy Free, Kosher, Halal - 100 Servings.
            </p>
            <p>₹1,965.00</p>
            <span>[ ALL TAXES & IMPORT DUTY INCLUDED ]</span>
          </div>
          <div>
            <h3>Why are you returning this?</h3>
            <select>
              <option>Last 30 days</option>
            </select>
          </div>
        </div>
        <div className="right">
            <button>CONTINUE</button>
            <hr />
            <div>
                <img src={img3} alt ='' className="MyOrder-img" />
                <img src={img4} alt =''  className="MyOrder-img"/>
                <img src={img5} alt ='' className="MyOrder-img" />
            </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
