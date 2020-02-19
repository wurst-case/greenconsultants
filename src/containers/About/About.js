import React from "react";
import "./About.css";
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";

function About() {
  return (
    <Layout>
      <Section id="founder">
        <h1> About Us</h1>
        <h3>Our Founder</h3>
        <div className="left">
          <h4>Green Consultants Founder and Chief Environmental Officer</h4>
          <p>
            Beverly Alkire Modell is the founder and Chief Environmental Officer
            of Green Consultants. She has 25 years of management consulting
            experience helping organizations and the people within them thrive
            during times of complex change.
          </p>
          <p>
            She has implemented 100+ projects across a variety of industries—all
            with exceptional quality, on time, and on budget. These projects
            have involved high visibility, enterprise-level strategic change
            initiatives, resulting in behavior changes for hundreds of thousands
            of stakeholders.
          </p>
          <p>
            Her clients range from startups to Fortune 100 companies. She was
            previously a project manager with Accenture's High Tech practice and
            an early employee of two successful start-ups.
          </p>
          <p>
            Beverly's education includes a Masters in Business from the Haas
            School of Business, University of California at Berkeley and an
            undergraduate degree in Psychology from University of North Carolina
            at Chapel Hill. She is a graduate of the Business Strategies for
            Environmental Sustainability Executive MBA Program at Stanford
            Graduate School of Business and also completed Acterra's year-long
            "Be the Change" Environmental Leadership Program.
          </p>
        </div>
        <div className="right">
          <img src="" alt="Beverly Headshot" />
        </div>
      </Section>
      <Section id="values">
        <h3>Our Values</h3>
        <p>
          We are responsive, results oriented, practical, open, and honest. We
          do what we say and take accountability for what we do. We are equally
          energized by strategic planning and rolling up our sleeves to get the
          work done. Our sense of accomplishment is based on delivering
          measurable value, making our clients shine, and empowering people to
          become effective agents of change.
        </p>
        <h4>Client empowerment</h4>
        <p>
          As consultants, our role is to help you chart your course and navigate
          through the change. We will teach you the skills and provide the tools
          you need to become self-sufficient. We are successful when we enable
          and promote your success.
        </p>
        <h4>Focus on driving forward without re-creating the wheel</h4>
        <p>
          It can feel overwhelming to get started. Why make it harder by
          creating all the deliverables to do it from scratch? Our Green Path
          Methodology™ and Toolkit gets you on your way fast, so you spend the
          time on the most important thing -- moving your organization towards
          more environmentally and fiscally optimal business practices.
        </p>
        <h4>Environmental responsibility must make sound business sense</h4>
        <p>
          Above all, a sustainability strategic shift must align with your
          corporate goals and objectives in order to propel your business
          towards increased profitability.
        </p>
        <h4>Credibility is non-negotiable</h4>
        <p>
          Engaging in change or sustainability initiatives requires a new level
          of operational transparency. This open information sharing builds
          credibility and trust. Metrics and measurement are critical, as are
          reporting, verification, and honesty and open communication with
          stakeholders.
        </p>
      </Section>
      <Section id="contact">
        <h3>Contact Us</h3>
        <p>Jumpstart your change or sustainability journey. We offer:</p>
        <ul className="bullet">
          <li>
            <strong>Analysis</strong> of your organization's situation and
            potential
          </li>
          <li>
            <strong>Strategies</strong> to cultivate your company's
            sustainability and maximize your opportunities
          </li>
          <li>
            <strong>Tactics</strong> to engage stakeholders and improve your
            business performance
          </li>
        </ul>
        <p>
          Call our CEO Beverly Alkire at 415-681-4944 or{" "}
          <a className="inline-link" href="mailto:info@greenconsultants.com">
            email us
          </a>{" "}
          for a consultation.
        </p>
      </Section>
    </Layout>
  );
}

export default About;
