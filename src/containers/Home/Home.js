import React from "react";
import "./Home.css";
import Section from "../../components/Section/Section";

function Home() {
  return (
    <div className="home">
      <Section>
        <div className="home-copy">
          <h2>Is your organization thriving?</h2>
          <p>
            Wherever you are on your business change journey, there are many
            options for improving performance - with more emerging every day.
            How can you minimize disruption during business transitions? What do
            employees and customers expect from you? What delivers the highest
            value? Green Consultants helps you cut through the confusion to
            understand and embrace change management and sustainability as
            powerful business opportunities.
          </p>
          <p>
            We are a management consulting firm committed to making your
            business thrive. Our consultants have tackled the most complex
            projects and transformed challenges into opportunities while
            inspiring leadership and igniting the passion of employees.
          </p>
          <p>
            Our bottom line? We can boost your business through our
            sustainability, change management and training services.
          </p>
        </div>
      </Section>
    </div>
  );
}

export default Home;
