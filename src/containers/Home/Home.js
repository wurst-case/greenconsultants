import React from "react";
import "./Home.css";
import leaf from "../../assets/GreenLeaf_HOMEPAGE_Footer.png";

function Home() {
  return (
    <div className="Home">
      <div className="content">
        <h1>
          Wherever you are on your business change journey, there are many
          options for improving performance - with more emerging every day.
        </h1>
        <p>
          How can you minimize disruption during business transitions? What do
          employees and customers expect from you? What delivers the highest
          value? Green Consultants helps you cut through the confusion to
          understand and embrace change management and sustainability as
          powerful business opportunities.
        </p>
        <p>
          We are a management consulting firm committed to helping your business
          thrive. Our consultants have tackled the most complex projects and
          transformed challenges into opportunities while inspiring leadership
          and igniting the passion of employees. We specialize in
          sustainability, change management and training.
        </p>
      </div>
      <div className="home-footer">
        <ul>
          <li>©2020 Green Consultants Inc. All rights reserved.</li>
          <li>
            <img src={leaf} />
            +1 (415) 681-4944
          </li>
          <li>
            <img src={leaf} />
            info@greenconsultants.com
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
