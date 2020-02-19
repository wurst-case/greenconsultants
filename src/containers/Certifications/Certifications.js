import React from "react";
import "./Certifications.css";
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";
import greenBizLogo from "../../assets/cagbn_sf_logo.png";

function Certifications() {
  return (
    <Layout>
      <Section id="">
        <h1>Certifications</h1>
        <p>
          Green Consultants conducts all of our business activities through the
          lens of sustainability stewardship. We strive to inspire other
          companies through our own socially responsible practices and
          environmental leadership.
        </p>
        <p>
          Our business completed a comprehensive green business certification
          through the{" "}
          <a
            className="inline"
            href="https://sfenvironment.org/green-businesses"
          >
            San Francisco Green Business Program
          </a>
          . We were the 39th business in San Francisco to receive this
          certification and the first management consulting firm to do so. We
          were also one of the first 50 small businesses to join the EPA Climate
          Leaders Small Business Network and successfully submit our GHG
          inventory.
        </p>

        <h4>Our sustainability objectives include:</h4>
        <div className="col2">
          <ul className="bullet left">
            <li>
              Apply the principles of reduce, reuse and recycle to all our
              business operations
            </li>
            <li>Measure our carbon footprint annually</li>
            <li>Maintain net zero U.S. GHG emissions </li>
            <li>
              Obtain third-party green certifications to validate our
              environmental operations
            </li>
            <li>Purchase green products from green suppliers and vendors</li>
            <li>Promote environmental awareness</li>
            <li>Donate up to 10% of our time to pro bono projects</li>
          </ul>
          <div className="right">
            <img
              src={greenBizLogo}
              alt="Calironia Green Business Netowork Logo"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export default Certifications;
