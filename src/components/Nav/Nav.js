import React from "react";
import "./Nav.css";
import { NavHashLink as Link } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import logo from "../../assets/GC_Letter_Logo.svg";
import logopng from "../../assets/GC_Letter_Logo.png";

function Nav() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <nav>
      <div className="wrapper">
        <div className="svg-wrap" onClick={handleClick}>
          <button className="svg" onClick={handleClick}>
            <div />
          </button>
          <object className="logo" data={logo} type="image/svg+xml">
            <img
              className="logo"
              src={logopng}
              alt="Green Consultants - Strategies & Tactics to Help Organizations Thrive"
            />
          </object>
        </div>
        <ul className="nav-buttons">
          <li>
            <Link
              to={"/home"}
              activeClassName="selected"
              className="nav-button"
            >
              Home
            </Link>
          </li>
          <li className="dropdown">
            <Link
              smooth
              to={"/services#top"}
              className="dropbtn nav-button"
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
            <Link
              to={"/clients"}
              activeClassName="selected"
              className="nav-button"
            >
              Clients
            </Link>
          </li>
          <li className="dropdown last-link">
            <Link
              smooth
              to={"/about-us#top"}
              activeClassName="selected"
              className="nav-button"
            >
              About Us
            </Link>
            <div className="dropdown-content">
              <Link smooth to={"/about-us#founder"} activeClassName="selected">
                Our Founder
              </Link>
              <Link smooth to={"/about-us#values"} activeClassName="selected">
                Our Values
              </Link>
              <Link
                smooth
                to={"/about-us#sustainability"}
                activeClassName="selected"
              >
                Our Sustainability
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
