/** @format */

import React from "react";
import Hero from "../Component/Hero";
import Mask2 from "../Assets/Mask Group 2.png";
import Cam from "../Assets/Canon EF 70-200mm f2.8L IS III USM Lens for Canon.png";
import Carioke from "../Assets/Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 2933.png";
import Watch from "../Assets/71LKSq7g51L._AC_SL1500_.png";
import Bud from "../Assets/61tE7IcuLmL._SL1500_.png";
import { Card } from "react-bootstrap";

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
          <button>View all</button>
        </div>
      </div>

      <div className="product">
        <Card className="ProductCard">
          <Card.Body>
            <img src={Cam} alt="" className="camera" />
          </Card.Body>
        </Card>

        <Card className="ProductCard">
          <Card.Body>
            <img src={Carioke} alt="" className="carioke" />
          </Card.Body>
        </Card>
        <Card className="ProductCard">
          <Card.Body>
            <img src={Watch} alt="" />
          </Card.Body>
        </Card>
        <Card className="ProductCard">
          <Card.Body>
            <img src={Bud} alt="" />
          </Card.Body>
        </Card>
      </div>


      <div className="Desc">
        <p>
        Meta Quest 2 — Advanced All-In-One Virtual Reality

          <br />
          Header --128 GB
          <br />
          <soan>
          ₹31,970.00
          </soan>
        </p>{" "}
        <p>
        Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4

          <br />
          3200MHz C16 LED Desktop Memory - Black
          <br />
          <soan>
          ₹31,970.00
          </soan>
        </p>{" "}
        <p>
          Meta Quest2 -Advanced All in One Virtual Reality
          <br />
          Header --128 GB
          <br />
          <soan>
          ₹31,970.00
          </soan>
        </p>{" "}
        <p>
          Meta Quest2 -Advanced All in One Virtual Reality
          <br />
          Header --128 GB
          <br />
          <soan>
          ₹31,970.00
          </soan>
        </p>
      </div>
    </>
  );
};

export default HomeScreen;
