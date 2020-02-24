import React from "react";
import "./Footer.css";
import leaf from "../../assets/GreenLeaf_HOMEPAGE_Footer.png";
import tree from "../../assets/Asset 5.svg";
import road from "../../assets/Asset 7.svg";

function Footer() {
  return (
    <div className="foot">
      <ul>
        <li>©2020 Green Consultants Inc. All rights reserved.</li>
        <li>
          <img src={leaf} alt="•" />
          +1 (415) 681-4944
        </li>
        <li>
          <img src={leaf} alt="•" />
          info@greenconsultants.com
        </li>
      </ul>
      <img src={tree} className="tree" alt="tree" />
      <img src={road} className="road" alt="road" />
    </div>
  );
}

export default Footer;
