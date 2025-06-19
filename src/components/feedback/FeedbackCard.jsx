import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ClientImg1 from "../../assets/client-1.jpg";

function FeedbackCard() {
  return (
    <>
      <div className="rbt-feedback-box">
        <div className="inner">
          <div className="clint-info-wrapper">
            <div className="thumb">
              <img                
                src={ClientImg1}
                title=""
                alt=""
              />
            </div>
            <div className="client-info">
              <h5 className="title">Martha Maldonado</h5>
              <span>Executive Chairman @ Google</span>
            </div>
          </div>
          <div className="description">
            <p className="subtitle-3">
              After the launch, vulputate at sapien sit amet, auctor iaculis
              lorem. In vel hend rerit nisi. Vestibulum eget risus velit.
            </p>
            <ul className="item-rating rating mt--20 d-flex list-unstyled g-10">
              <li className="has-rating">
                <FontAwesomeIcon icon={faStar} />
              </li>
              <li className="has-rating">
                <FontAwesomeIcon icon={faStar} />
              </li>
              <li className="has-rating">
                <FontAwesomeIcon icon={faStar} />
              </li>
              <li className="has-rating">
                <FontAwesomeIcon icon={faStar} />
              </li>
              <li className="has-rating">
                <FontAwesomeIcon icon={faStar} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedbackCard;
