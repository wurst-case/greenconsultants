import React from "react";
import "./HomeFooter.css";
import leaf from "../../assets/GreenLeaf_HOMEPAGE_Footer.png";

function HomeFooter() {
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
    </div>
  );
}

export default HomeFooter;
