/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Oil.png";

const OrderSum = () => {
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

      {/* ------------------------------------------------------ */}

      <h2 className="OrderSum">View Order Summary</h2>
      <hr className="MyOrderHr" />

      {/* -------------------------------------------------------- */}

      <div className="OrderSumSection">
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <h5>SOLGAR</h5>
          <p>
            Solgar B-Complex "100", 100 Vegetable Capsules Non GMO, Vegan,
            Gluten Free, Dairy Free, Kosher, Halal - 100 Servings.
          </p>
        </div>
        <div>
            <p> <strong>ORDER ID :- </strong>   </p>
        </div>
      </div>
    </>
  );
};

export default OrderSum;
