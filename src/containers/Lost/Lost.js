import React from "react";
import "./Lost.css";
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";

function Lost() {
  return (
    <Layout>
      <Section id="lost" className="lost">
        <h1 className="gigantic">404...</h1>
        <h3>
          Alice: “Would you tell me, please, which way I ought to go from here?”
        </h3>
        <h3>
          The Cheshire Cat: “That depends a good deal on where you want to get
          to.”
        </h3>
        <h3>
          Alice: “I don’t much care where.” The Cheshire Cat: “Then it doesn’t
          matter which way you go.”
        </h3>
      </Section>
    </Layout>
  );
}

export default Lost;
