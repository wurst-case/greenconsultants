import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

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
            <Link to={"/home"}>Home</Link>
          </li>
          <li class="dropdown">
            <Link to={"/services"} class="dropbtn">
              Services
            </Link>
            <div class="dropdown-content">
              <a href="#">Sustainability</a>
              <a href="#">Change Management and Training</a>
            </div>
          </li>
          <li>
            <Link to={"/sustainability"}>Sustainability</Link>
          </li>
          <li>
            <Link to={"/clients"}>Clients</Link>
          </li>
          <li class="dropdown">
            <Link to={"/about-us"}>About Us</Link>
            <div class="dropdown-content">
              <a href="#">Our Founder</a>
              <a href="#">Our Values</a>
              <a href="#">Contact Us</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
