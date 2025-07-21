import React from "react";
import Logo from "../assets/logo.svg";
import MedIcon from "../assets/med.svg";
import Ecart from "../assets/e-cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <div className="headNav">
        <header>
          <div className="text-center bg-white">
            <div className="container">
              <div className="row">
                {/* <!-- Left elements --> */}
                <div className="col-md-3 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                  <Link to="/" className="ms-md-2"><img src={Logo} alt="FunduPedia" /></Link>
                </div>
                {/* <!-- Left elements --> */}

                {/* <!-- Center elements --> */}
                <div className="col-md-6">
                  <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                    <input
                      autocomplete="off"
                      type="search"
                      className="form-control"
                      placeholder="Search PYQ..."
                    />
                    <span className="input-group-text d-none d-lg-flex">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                  </form>
                </div>
                {/* <!-- Center elements --> */}

                {/* <!-- Right elements --> */}
                <div className="col-md-3 d-flex justify-content-md-end">
                  <div className="d-flex gap-5">
                    {/* <!-- User --> */}
                    <ul class="nav usercta">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle p-0"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Hello Students!
                          <font>
                            Sign In <FontAwesomeIcon icon={faAngleDown} />
                          </font>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Logout
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>

                    {/* <!-- Cart --> */}
                    <div className="cart">
                      <a href="#offcanvasRight" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasRight">
                        <div className="quant">
                          <div className="quantText">0</div>
                        </div>
                        <div className="cartText">Cart</div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- Right elements --> */}
              </div>
            </div>
          </div>
        </header>

        <nav className="navbar navbar-expand-lg p-0">
          <div className="container">
            <button
              className="navbar-toggler m-3 w-100"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              Menu
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav d-flex justify-content-between">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={MedIcon} alt="Academic Clinic" /> Academic Clinic
                  </a>
                  <ul className="dropdown-menu">
                    <li>                      
                      <Link to="/queslisting" className="dropdown-item">Book an Appointment</Link>                      
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">Share Academic Problem</Link>                      
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={Ecart} alt="PYQ Study Material" /> PYQ Study Material
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Books
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        DPPs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Question Banks
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mind Maps
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Notes
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PYQ Test Series
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        JEE Main
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        JEE Advanced
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        JEE Main & Advanced
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        NEET - UG
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CBSE - X Boards
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CBSE - XII Boards
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CUET
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Archive
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/archivejeemain" className="dropdown-item">JEE Main</Link>                      
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        JEE Advanced
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        NEET - UG
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CUET
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CBSE - X Boards
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CBSE - XII Boards
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Fundu Videos
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Concept Videos
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Quick Revision Videos
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    NCERT Digest
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Theory
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Solved Examples
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Exercises Solutions
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Exemplar Solutions
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Colleges
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Engineering
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Medical
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Research Colleges
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
