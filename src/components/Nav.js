import React from "react";
import "./Nav.css";
import { NavHashLink as Link } from "react-router-hash-link";

function Nav() {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <h2>Green Consultants</h2>
          <h4>Strategies & Tactics to Help Organizations Thrive</h4>
        </div>
        <ul>
          <li>
            <Link to={"/home"} activeClassName="selected">
              Home
            </Link>
          </li>
          <li className="dropdown">
            <Link
              smooth
              to={"/services#top"}
              className="dropbtn"
              activeClassName="selected"
            >
              Services
            </Link>
            <div className="dropdown-content">
              <Link
                smooth
                to={"/services#sustainability"}
                activeClassName="selected"
              >
                Sustainability
              </Link>
              <Link smooth to={"/services#mgmt"} activeClassName="selected">
                Change Management and Training
              </Link>
            </div>
          </li>
          <li>
            <Link to={"/certifications"} activeClassName="selected">
              Certifications
            </Link>
          </li>
          <li>
            <Link to={"/clients"} activeClassName="selected">
              Clients
            </Link>
          </li>
          <li className="dropdown">
            <Link smooth to={"/about-us#top"} activeClassName="selected">
              About Us
            </Link>
            <div className="dropdown-content">
              <Link smooth to={"/about-us#founder"} activeClassName="selected">
                Our Founder
              </Link>
              <Link smooth to={"/about-us#values"} activeClassName="selected">
                Our Values
              </Link>
              <Link smooth to={"/about-us#contact"} activeClassName="selected">
                Contact
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
