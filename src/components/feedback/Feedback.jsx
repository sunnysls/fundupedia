import React from "react";
import FeedbackCard from "./FeedbackCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]   
  };  
  return (
    <>
      <div className="feedbackFlex">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="feedbackTittle">
                <span class="whySubtitle bg-primary-opacity">
                  EDUCATION FOR EVERYONE
                </span>
                <h2 class="Whytitle">
                  Student's <span>Feedback</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">                
                <Slider {...settings}>
                    <div>
                        <FeedbackCard />
                    </div>
                    <div>
                        <FeedbackCard />
                    </div>
                    <div>
                        <FeedbackCard />
                    </div>
                    <div>
                        <FeedbackCard />
                    </div>
                    <div>
                        <FeedbackCard />
                    </div>                    
                </Slider>
            </div>
          </div>          
        </div>
      </div>
    </>
  );
}

export default Feedback;
