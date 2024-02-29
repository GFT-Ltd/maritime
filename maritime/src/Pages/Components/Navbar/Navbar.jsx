import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Navbar-Logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        {" "}
        {/* Added navbar-light class */}
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="navbar-logo" src={Logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link active" to="/services">
                Services
              </Link>
              <Link className="nav-link active" to="/about">
                About Us
              </Link>
              <Link className="nav-link active" to="/#">
                Careers
              </Link>
            </div>
            <div className="d-flex ms-auto flex-row-reverse">
              <button className="sign-in-button">
                Join Us
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
