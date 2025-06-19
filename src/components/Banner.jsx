import React from "react";
import GirlImg from "../assets/girl-img.png";

function Banner() {
  return (
    <>
      <div className="bannerArea">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">

                {/* <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div> */}

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="bannerText">
                          <h1>
                            Lorem Ipsum is simply dummy <font>Education.</font>
                          </h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting lorem Ipsum has been the industry's.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="bannerImg">
                            <img src={GirlImg} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="bannerText">
                          <h1>
                            Lorem Ipsum is simply dummy <font>Education.</font>
                          </h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting lorem Ipsum has been the industry's.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="bannerImg">
                            <img src={GirlImg} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="bannerText">
                          <h1>
                            Lorem Ipsum is simply dummy <font>Education.</font>
                          </h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting lorem Ipsum has been the industry's.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="bannerImg">
                            <img src={GirlImg} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
