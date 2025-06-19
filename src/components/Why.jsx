import React from "react";
import Rocket from "../assets/rocket.svg";
import PurpleCricle from "../assets/purple-circle.svg";
import whyDots from "../assets/dots.svg";
import WhyGirlImg from "../assets/why-img.png";
import Scale from "../assets/scale.png";

function Why() {
  return (
    <>
      <div className="whyFlex">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="whyMainContent">
                <span class="whySubtitle bg-primary-opacity">
                  Explore Fundupedia
                </span>
                <h2 class="Whytitle">
                  Why Choose <span>Fundupedia?</span>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  lorem Ipsum.
                </p>
                <ul className="whyUl">
                  <li>Comprehensive Exam Coverage</li>
                  <li>Accurate and Detailed Answers</li>
                  <li>Exam Oriented Approach</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="whyImg">
                <div className="why-dots">
                  <img src={whyDots} alt="" />
                </div>
                <div className="purple-circle">
                  <img src={PurpleCricle} alt="" />
                </div>
                <div className="rocket">
                  <img src={Rocket} alt="" />
                </div>
                <div className="why-girl-img">
                  <img src={WhyGirlImg} alt="" />
                </div>
                <div className="why-qutote">
                  <img src={Scale} alt="" /> <span>Quality Education</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Why;
