import React from "react";
import "./Home.css";
// import leaf from "../../assets/GreenLeaf_HOMEPAGE_Footer.png";
import tree from "../../assets/just_tree.png";
import Section from "../../components/Section/Section";
import Layout from "../../components/Layout/Layout";

function Home() {
  return (
    <Layout className="bg">
      <Section className="home">
        <div className="home-copy">
          <div>
            <h2>Is your business a green business?</h2>
            <p>
              Wherever you are on your business change journey, there are many
              options for improving performance - with more emerging every day.
              How can you minimize disruption during business transitions? What
              do employees and customers expect from you?
            </p>
          </div>
          <img src={tree} alt="tree" />
        </div>
      </Section>
      {/* <div className="home-footer">
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
        </div> */}
    </Layout>
  );
}

export default Home;
