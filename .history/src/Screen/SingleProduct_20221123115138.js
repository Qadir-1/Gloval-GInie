/** @format */

import React from "react";
import Oil from "../Assets/Solgar, Omega-3 EPA & DHA, Triple Strength, 950 mg, 100 Softgels.jpg";
import Heart from "../Assets/Heart.jpg";
import thumn from '../Assets/01.png'
import img from '../Assets/02.png'
import img1 from '../Assets/03.png'

const SingleProduct = () => {
  return (
    <>
      <div className="SingleP">
        <div className="nnn">
          <div className="BP">
            <img src={Oil} alt="" className="img-thumbnail img-fluid" />
          </div>
          <div className="BP">
            {" "}
            <img src={thumn} alt="" className="img-thumbnail img-fluid" />
          </div>
          <div className="BP">
            <img src={img} alt="" className="img-thumbnail img-fluid" />
          </div>
          <div className="BP">
            <img src={img1} alt="" className="img-thumbnail img-fluid" />
          </div>
        </div>
        <div className="mid">
          <img src={Oil} alt="" />
        </div>
        <div className="right">
          <div className="left">
            {/* <i class="fa-solid fa-star" style={{ color: "#F07F29" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#F07F29" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#F07F29" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#F07F29" }}>
              {" "}
            </i>
            <i class="fa-solid fa-star"></i> */}
            {/* <img src={Heart} alt="" /> */}
          </div>
          <div className="mid">
            <h2>
              Solgar Glucosamine, Hyaluronic Acid, Chondroitin and MSM
              <br />
              Tablets 120 Tablets
            </h2>
            <div>

            </div>
            <span>[ ALL TAXES & IMPORT DUTY INCLUDED ]</span>
            <div className="hi">
              <div className="dd"></div>
              <div className="dd"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;