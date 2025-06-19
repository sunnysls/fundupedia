import React from 'react';
import Bannerone from "../../assets/banner1.jpg";
import Bannertwo from "../../assets/banner2.jpg";
import Bannerthree from "../../assets/banner3.jpg";
import Medwhite from "../../assets/med-white.svg";

function Quesbanner() {
  return (
    <>
        <div className="quesbanner_flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <figure>
                            <a href="#"><img src={Bannerone} alt="" /></a>
                        </figure>
                    </div>                    
                    <div className="col-md-4">
                        <figure>
                            <a href="#"><img src={Bannertwo} alt="" /></a>
                        </figure>
                    </div>                    
                    <div className="col-md-4">
                        <figure>
                            <a href="#"><img src={Bannerthree} alt="" /></a>
                        </figure>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="clinic_text">
                            <p>Facing a Problem in Any Topic??</p>
                            <div className="clinic_cta">
                                <a href="#">Visit India's First Academic Clinic <img src={Medwhite} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Quesbanner