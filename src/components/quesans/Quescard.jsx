import React from "react";
import QuesImg from "../../assets/ques.jpg";
import { Link } from "react-router";

function Quescard() {
  return (
    <>
      <div className="col-md-6">
        <div className="quescard_flex">
          <Link to="/mainques">
            <div className="quescontent">
              <div className="quesheading">Maths</div>
              <div className="quesImg">
                <figure>
                  <img src={QuesImg} alt="" />
                </figure>
              </div>
            </div>
            <div className="quesfooter">
              <div className="quesdate">Date : October 30, 2024</div>
              <div className="quesadmin">By admin</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Quescard;
