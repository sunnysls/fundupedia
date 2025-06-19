import React from "react";
import Logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="footer__maintext-box">
                <figure>
                  <a href="#">
                    <img src={Logo} alt="FunduPedia" />
                  </a>
                </figure>
                <p>
                  Fundupedia is dedicated to empowering students preparing for
                  competitive exams with accurate and accessible content through
                  a user-friendly platform.
                </p>
                <div className="footerCta">
                  <a href="#">
                    Contact With Us <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="footer_heading">Our Company</div>
              <ul className="footer_tabs">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Fundu Videos</a>
                </li>
                <li>
                  <a href="#">Downloads</a>
                </li>
                <li>
                  <a href="#">Q n A</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="footer_heading">Useful Links</div>
              <ul className="footer_tabs">
                <li>
                  <a href="#">Academic Clinic</a>
                </li>
                <li>
                  <a href="#">PYQ Test Series</a>
                </li>
                <li>
                  <a href="#">PYQ Study Material</a>
                </li>
                <li>
                  <a href="#">Archive</a>
                </li>
                <li>
                  <a href="#">Colleges</a>
                </li>
                <li>
                  <a href="#">NCERT Digest</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="footer_heading">Get Contact</div>
              <ul className="footer_tabs">
                <li>
                  <a href="#">Phone: (406) 555-0120</a>
                </li>
                <li>
                  <a href="#">E-mail: fundupedia@example.com</a>
                </li>
              </ul>
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="last-footer">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <ul className="privacy_list">
                  <li>
                    <a href="#">Terms &amp; Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12">
                <p>
                  Copyright@ 2025 <span>Fundupedia</span>. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
