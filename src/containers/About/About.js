import React from "react";
import "./About.css";
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";
import greenBizLogo from "../../assets/cagbn_sf_logo.png";
import headshot from "../../assets/Bev-Headshot.jpg";
import sense from "../../assets/BusinessSense.png";
import credibility from "../../assets/credibility.png";
import empower from "../../assets/empower.png";
import focus from "../../assets/focus.png";

let cards = [
  <div className="card">
    <img className="icon" alt="empower" src={empower} />
    <h4>Client empowerment</h4>
    <p>
      As consultants, our role is to help you chart your course and navigate
      through the change. We will teach you the skills and provide the tools you
      need to become self-sufficient. We are successful when we enable and
      promote your success.
    </p>
  </div>,
  <div className="card">
    <img className="icon" alt="focus" src={focus} />
    <h4>Focus on driving forward without re-creating the wheel</h4>
    <p>
      It can feel overwhelming to get started. Why make it harder by creating
      all the deliverables to do it from scratch? Our Green Path Methodology™
      and Toolkit gets you on your way fast, so you spend the time on the most
      important thing -- moving your organization towards more environmentally
      and fiscally optimal business practices.
    </p>
  </div>,
  <div className="card">
    <img className="icon" alt="sense" src={sense} />
    <h4>Environmental responsibility must make sound business sense</h4>
    <p>
      Above all, a sustainability strategic shift must align with your corporate
      goals and objectives in order to propel your business towards increased
      profitability.
    </p>
  </div>,
  <div className="card">
    <img className="icon" alt="credibility" src={credibility} />
    <h4>Credibility is non-negotiable</h4>
    <p>
      Engaging in change or sustainability initiatives requires a new level of
      operational transparency. This open information sharing builds credibility
      and trust. Metrics and measurement are critical, as are reporting,
      verification, and honesty and open communication with stakeholders.
    </p>
  </div>
];

function About() {
  return (
    <Layout>
      <Section id="founder">
        {/* <h1> About Us</h1> */}
        <div className="about-bev">
          <div className="left">
            <h3>Green Consultants Founder and Chief Environmental Officer</h3>
            <p>
              Beverly Alkire Modell is the founder and Chief Environmental
              Officer of Green Consultants. She has 25 years of management
              consulting experience helping organizations and the people within
              them thrive during times of complex change.
            </p>
            <p>
              She has implemented 100+ projects across a variety of
              industries—all with exceptional quality, on time, and on budget.
              These projects have involved high visibility, enterprise-level
              strategic change initiatives, resulting in behavior changes for
              hundreds of thousands of stakeholders.
            </p>
            <p>
              Her clients range from startups to Fortune 100 companies. She was
              previously a project manager with Accenture's High Tech practice
              and an early employee of two successful start-ups.
            </p>
            <p>
              Beverly's education includes a Masters in Business from the Haas
              School of Business, University of California at Berkeley and an
              undergraduate degree in Psychology from University of North
              Carolina at Chapel Hill. She is a graduate of the Business
              Strategies for Environmental Sustainability Executive MBA Program
              at Stanford Graduate School of Business and also completed
              Acterra's year-long "Be the Change" Environmental Leadership
              Program.
            </p>
          </div>
          <div className="right">
            <div className="headshot-wrap">
              <img src={headshot} alt="Beverly Headshot" />
              <h2>Beverly Alkire Modell</h2>
              <h6>Green Consultants Founder</h6>
              <h6>and Chief Environmental Officer</h6>
            </div>
          </div>
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
        <div className="deck">
          <div className="half-deck">
            {cards[0]}
            {cards[1]}
          </div>
          <div className="half-deck">
            {cards[2]}
            {cards[3]}
          </div>
        </div>
        <div className="mobile-deck">
          {cards[0]}
          {cards[1]}
          {cards[2]}
          {cards[3]}
        </div>
      </Section>
      <Section id="sustainability">
        <h3>Our Sustainability</h3>
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

        <div className="col2">
          <div className="left">
            <h4>Our sustainability objectives include:</h4>
            <ul className="bullet">
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
          </div>
          <div className="right">
            <img
              src={greenBizLogo}
              alt="Calironia Green Business Netowork Logo"
              className="green-biz-logo"
            />
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
        </div>
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
          Call our CEO Beverly Alkire Modell at 415-681-4944 or{" "}
          <a className="inline" href="mailto:info@greenconsultants.com">
            email us
          </a>{" "}
          for a consultation.
        </p>
      </Section>
    </Layout>
  );
}

export default About;
