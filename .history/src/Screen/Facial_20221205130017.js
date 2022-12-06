/** @format */

import React from "react";
import img from "../Assets/Banner  012.png";
import img1 from "../Assets/Mask Group 21.png";

const Facial = () => {
  return (
    <>
      <div className="facial">
        <img src={img} alt="" />
      </div>

      <p className="facialH1">
        <strong>Rejuvenate & Reinvent</strong>
        Your Facial Skin With <strong>The Ordinary.</strong>
      </p>

      <div className="facialAdd">
        <p>
          March 23, 2022 <br />
          By: TGG Editorial Team
        </p>
        <hr
          style={{
            border: "1px solid black",
            color: "black",
            backgroundColor: "black",
          }}
        />
      </div>

      <div className="facialDesc">
        <h4>Tell us: What does being a TGG trainer mean to you?</h4>
        <p>
          {" "}
          <strong>KE: </strong> In 2016, I heard about the TA trainer auditions
          from choreographer Tony G. I thought what an amazing opportunity that{" "}
          would be! I’ve always been into fitness and with my background of
          cheer, dance, and gymnastics, I figured this would be perfect.
          However, it seemed so far-fetched at the time. In 2013, I had a
          traumatic cheerleading injury to my right elbow, resulting in multiple
          surgeries. After years of recovering, I went to the trainer auditions
          in September 2016, and just weeks later, received the offer. I was
          thrilled! I knew how fulfilling it would feel to be able to call
          myself a TA trainer.{" "}
        </p>
        <p>
          After my injury, I had developed a lot of anxiety and depression. As
          an athlete and not being able to live your life how you want to live
          it, it can really take its toll on you. It’s almost like you lose a
          sense of self worth and identity. With Tracy’s Method, I feel as{" "}
          though I’ve gained a lot of that back. I’ve grown tremendously
          mentally, physically, and emotionally. Tracy’s Method helped me
          overcome obstacles that have seemed impossible and the fact that I can
          help others do the same is so rewarding.
        </p>
      </div>

      <div className="facialTwosec">
        <div className="left">
          <img src={img1} alt="" />
        </div>
        <div className="right">
          <h5>
            Do you have any advice for someone who’s interested in the workout
            but <br />
            hesitant to start?
          </h5>
          <p>
            <strong>KE:</strong>
            Just start! We all had to start somewhere and we were all beginners
            at one <br /> point. You can’t judge yourself or compare yourself to
            anyone else because we <br /> all have different journeys and
            experiences. You have to set your ego aside and <br /> embrace
            change. I know change can be scary, but it’s so rewarding in the
            end. <br /> Tracy’s Method allows for so much change and expansion
            in your mind, body, <br /> and soul, but only you can be the one to
            show up and make that happen.
          </p>
        </div>
      </div>

      <div className="facialCon">
        <p>
          After my injury, I had developed a lot of anxiety and depression. As
          an athlete and not being able to live your life how you want to live
          it, it can really take its toll on you. It’s almost like you lose a
          sense of self worth and identity. With Tracy’s Method, I feel as
          though I’ve gained a lot of that back. I’ve grown tremendously
          mentally, physically, and emotionally. Tracy’s Method helped me
          overcome obstacles that have seemed impossible and the fact that I can
          help others do the same is so rewarding.
        </p>
      </div>

      <div className="facialDesc">
        <h4>Tell us: What does being a TGG trainer mean to you?</h4>
        <p>
          {" "}
          <strong>KE: </strong> In 2016, I heard about the TA trainer auditions
          from choreographer Tony G. I thought what an amazing opportunity that{" "}
          would be! I’ve always been into fitness and with my background of
          cheer, dance, and gymnastics, I figured this would be perfect.
          However, it seemed so far-fetched at the time. In 2013, I had a
          traumatic cheerleading injury to my right elbow, resulting in multiple
          surgeries. After years of recovering, I went to the trainer auditions
          in September 2016, and just weeks later, received the offer. I was
          thrilled! I knew how fulfilling it would feel to be able to call
          myself a TA trainer.{" "}
        </p>
      </div>

      <div className="facialThreeSec" > 
      <div ></div>
      <h4>RELATED ARTICLES</h4>
      <div></div>
      </div>
    </>
  );
};

export default Facial;
