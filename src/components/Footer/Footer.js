import React from "react";
import "./Footer.css";
import leaf from "../../assets/GreenLeaf_HOMEPAGE_Footer.png";
import tree from "../../assets/tree.svg";
import road from "../../assets/road-fade.svg";

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
      {/* GreenGeeks Seal */}
      <div className="gg-seal">
        <a href="https://www.greengeeks.com" onclick="ggs_ggseal()">
          <img
            src="https://static.websitehostserver.net/ggseal/Green_11.png"
            alt="This Site is 300% Green"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
