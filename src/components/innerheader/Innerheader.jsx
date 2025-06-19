import React from "react";
import FunduBigAvatar from "../../assets/big-avatar.svg";
import { Link } from "react-router";

function Innerheader() {
  return (
    <>
      <div className="inner_header">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="innerHead_text">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>                      
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Questions Listing
                    </li>
                  </ol>

                <h1>Maths Questions</h1>

                <p>
                  JEE Main 2025 (Online) 8th April Evening Shift
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="big_avatar">
                <img src={FunduBigAvatar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Innerheader;
