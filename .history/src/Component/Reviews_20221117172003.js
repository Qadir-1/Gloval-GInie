/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import Rating from "../Assets/Ratings.png";
import User from '../Assets/'

const images = [
  {
    text: "Wyze Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera",
    author: "React",
  },
  {
    text: "Wyze Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera",
    author: "Node",
  },
];

const Reviews = () => {
  return (
    <>
      <Carousel
        autoPlay
        className="ImageCarousel"
        showThumbs={false}
        infiniteLoop
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <i
                className="fa-solid fa-arrow-left arrow"
                onClick={clickHandler}
              ></i>
            )
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <i
                className="fa-solid fa-arrow-right arrow"
                onClick={clickHandler}
              ></i>
            )
          );
        }}
      >
        {images.map((i, index) => (
          <div key={index}>
            <div className="Review">
              <img src={Rating} alt="" className="Review" />
            </div>
            <div className="customerR">
              <p>
                Wyze Cam v3 with Color Night Vision, Wired 1080p HD <br />
                Indoor/Outdoor Video Camera
              </p>
            </div>
            <div className="ReviewImage">
            
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Reviews;
