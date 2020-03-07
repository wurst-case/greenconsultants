import React from "react";
import "./Benefits.css";
import Section from "../../components/Section/Section";
import Layout from "../../components/Layout/Layout";

function Benefits() {
  return (
    <Layout>
      <Section>
        <h4>Change Management and Training Benefits</h4>
        <ul className="bullet">
          <li>
            Increases likelihood and speed of project success by increasing
            adoption and long term sustainability
          </li>
          <li>
            Increases the speed of change while minimizing business disruption
          </li>
          <li>
            Builds the case for change and allows people to understand, accept
            and support the change
          </li>
          <li>Ensures clear direction from sponsor</li>
          <li>Gains commitment and promotes buy-in from stakeholders</li>
          <li>
            Outlines stakeholder messaging and educate specifics about impacts
            and what’s in it for me (WIIFM)
          </li>
          <li>
            Enables desired outcomes and behaviors because people understand
            exactly what to do and how to recognize when they do it
          </li>
          <li>
            Helps manage expectations and reinforce the behaviors that will
            produce the right business results
          </li>
          <li>Builds support for the initiative and reduces risk</li>
          <li>Develops sufficient capability to perform responsibilities</li>
          <li>Enhances quality of concept and execution</li>
        </ul>
      </Section>
    </Layout>
  );
}

export default Benefits;
