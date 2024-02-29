import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Navbar-Logo.png";
import "./NavbarTwo.css";
import { HiHome } from "react-icons/hi2";
import { IoMdArrowRoundBack } from "react-icons/io";

function NavbarTwo() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light nav-two">
        <div className="container-fluid">
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
              <Link
                className="nav-link active"
                style={{ paddingTop: 0 }}
                to="/"
              >
                <span className="home-button">
                  <HiHome />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarTwo;
