import React from "react";
import "./Nav.css";
import { NavHashLink as Link } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../assets/hamburger.svg";
import { ReactComponent as Exit } from "../../assets/exit.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function Nav() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  function openMenu() {
    document.getElementById("menu").style.display = "flex";
  }

  function closeMenu() {
    document.getElementById("menu").style.display = "none";
  }

  return (
    <nav>
      <div className="wrapper">
        <Logo className="logo" id="logo" onClick={handleClick} />
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
              to={"/benefits"}
              activeClassName="selected"
              className="nav-button"
            >
              Benefits
            </Link>
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

        <Hamburger className="hamburger" onClick={openMenu} id="hamburger" />
        <div className="menu" id="menu">
          <Exit className="exit" onClick={closeMenu} id="exit" />
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                to={"/home"}
                activeClassName="selected"
                className="nav-button"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                smooth
                to={"/services#top"}
                className="nav-button"
                activeClassName="selected"
              >
                Services
              </Link>
            </li>
            <li className="sub">
              <Link onClick={closeMenu} smooth to={"/services#sustainability"}>
                Sustainability
              </Link>
            </li>
            <li className="sub">
              <Link onClick={closeMenu} smooth to={"/services#mgmt"}>
                Change Management and Training
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                to={"/clients"}
                activeClassName="selected"
                className="nav-button"
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                smooth
                to={"/about-us#top"}
                activeClassName="selected"
                className="nav-button"
              >
                About Us
              </Link>
            </li>
            <li className="sub">
              <Link onClick={closeMenu} smooth to={"/about-us#founder"}>
                Our Founder
              </Link>
            </li>
            <li className="sub">
              <Link onClick={closeMenu} smooth to={"/about-us#values"}>
                Our Values
              </Link>
            </li>
            <li className="sub">
              <Link onClick={closeMenu} smooth to={"/about-us#sustainability"}>
                Our Sustainability
              </Link>
            </li>
            <li className="sub">
              <Link onClick={closeMenu} smooth to={"/about-us#contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
