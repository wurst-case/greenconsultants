import React from "react";
import "./Home.css";
import Section from "../../components/Section/Section";

function Home() {
  return (
    <div className="home">
      <Section>
        <div className="home-copy">
          <h2>Is your business a green business?</h2>
          <p>
            We are a management consulting firm committed to helping your
            business thrive. Our consultants have tackled the most complex
            projects and transformed challenges into opportunities while
            inspiring leadership and igniting the passion of employees. We
            specialize in sustainability, change management and training.
          </p>

          {/* <a href="mailto:info@greenconsultants.com">
            <button>Contact Us</button>
          </a> */}
        </div>
      </Section>
    </div>
  );
}

export default Home;
