/** @format */

import React from "react";
import img from "../Assets/Search ICon.png";

const FAQ = () => {
  return (
    <>
      <div className="FAQ">
        <h2>ABOUT US & FREQUENTLY ASKED QUESTIONS</h2>
        <p>Search product info, Q&A, reviews</p>
      </div>
      <div className="FAQInput">
        <input type="text" placeholder="Type a Keyword" />
        <img src={img} alt="" />
      </div>

      <div className="FAQtwosec">
        <div className="left">
          <ul>
            <li>
              <strong>Product FAQs</strong>
            </li>
            <li>Ordering FAQs</li>
            <li>Shipping FAQs</li>
            <li>
              Refund & <br /> Cancellation FAQs
            </li>
            <li>Return FAQs</li>
            <li>Other FAQs</li>
          </ul>
        </div>
        <div className="right"
      </div>
    </>
  );
};

export default FAQ;
