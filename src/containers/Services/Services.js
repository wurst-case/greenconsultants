import React from "react";
import "./Services.css";
import Section from "../../components/Section/Section";
import Layout from "../../components/Layout/Layout";
import tree4 from "../../assets/tree.svg";
import tree3 from "../../assets/tree-3of4.svg";
import tree2 from "../../assets/tree-2of4.svg";
import tree1 from "../../assets/tree-1of4.svg";
import arrow from "../../assets/arrow.png";

function Services() {
  return (
    <Layout>
      <Section id="sustainability">
        <div className="green-col">
          <div className="green-left">
            <h3>Sustainability</h3>
            <p>
              Boost your business performance by integrating new environmental,
              social and economic practices into your daily operations and
              business decision making. Sustainability provides an unprecedented
              opportunity to increase profitability, drive innovation, increase
              efficiency, and attract and retain top talent. Turn good intention
              into profitable action while setting your business apart in the
              eyes of customers, prospects and employees.
            </p>
            <p>
              Sustainable business is smart business. Going green provides
              bottom line cost savings, as well as a competitive advantage in
              the marketplace. It allows your company to act proactively to
              address new environmental requirements from vendors and suppliers,
              while getting ahead of upcoming legislation. A solid environmental
              program also attracts the highest quality employees to your
              company and keeps those that you have happy and healthy. Green
              companies operate their businesses to meet their needs, without
              compromising the ability of future generations to meet their own.
            </p>
            <p>
              Green Consultants services and training offerings utilize our
              proprietary Green Path Methodology™ and Toolkit, saving hundreds
              of hours of consulting time. Our consulting offerings are quickly
              customizable to meet the needs of your company. We offer a unique
              change management focus to ensure your programs are rapidly
              adopted and sustainable over the long term.
            </p>
          </div>
          <div className="green-right">
            <h4>Sustainability Consulting Services</h4>
            <span>
              Wherever you are on your sustainability path, we have services to
              help you along your journey!
            </span>
            <ul className="bullet">
              <li>Green Strategy Development and Refinement </li>
              <li>Green Business Audits</li>
              <li>Sustainability Research and Competitive Positioning </li>
              <li>
                Customer, Supplier, Vendor, and Employee Outreach and Vetting
                Programs
              </li>
              <li>Sustainable Business Change Consulting</li>
              <li> Corporate Environmental Training Programs </li>
              <li>Footprint Assessments and Reporting </li>
              <li>Implementation and Program Management</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section alt id="bottom-line">
        <p>
          Our bottom line? <br />
          We can boost your business performance through sustainability.
        </p>
        <div className="growth">
          <img src={tree1} alt="Grow" className="growing-tree" />
          <img src={arrow} alt="->" className="icon" />
          <img src={tree2} alt="Grow" className="growing-tree" />
          <img src={arrow} alt="->" className="icon" />
          <img src={tree3} alt="Grow" className="growing-tree" />
          <img src={arrow} alt="->" className="icon" />
          <img src={tree4} alt="Grow" className="growing-tree" />
        </div>
      </Section>
      <Section id="mgmt">
        <div className="green-col">
          <div className="green-left">
            <h3>Change Management and Training</h3>
            <p>
              Are you deploying new technology, changing business processes, or
              implementing new or complex strategic objectives? If so, our
              services can help you implement the change and deliver sustainable
              value.
            </p>
            <p>
              The execution of every strategic project requires people to change
              in some way. Your organization won’t gain competitive advantage
              from a good idea or solution, but from successfully and
              effectively implementing that idea. This shift requires that
              people understand, adopt and adapt to the changes. All involved
              must understand how their behaviors and actions align to the
              goals.
            </p>
            <p>
              Getting people to make behavioral changes is often more difficult
              than designing and developing the business solution itself.
              Resistance to change results in increased turnover, lower
              productivity, and wasted resources.
            </p>
            <p>
              It is just as important to have a strategy for developing
              acceptance and skills as it is to have a plan for implementing the
              solution. Training is absolutely critical. Employees that are
              prepared for change will remain productive and more fully
              contribute to the overall goals of the project and organization.
            </p>
          </div>
          <div className="green-right">
            <h4>Change Management Services</h4>
            <ul className="bullet">
              <li>Change Management Strategy and Planning</li>
              <li>Change Impact and Business Readiness Assessments</li>
              <li>Business Process Design</li>
              <li>Sponsor/Stakeholder Engagement</li>
              <li>Communications</li>
              <li>Change Methodology and Toolkits</li>
              <li>Program Management</li>
              <li>AGILE Change Management</li>
            </ul>

            <h4>Training Services</h4>
            <ul className="bullet">
              <li>Training Analysis and Strategy</li>
              <li>Curriculum Development</li>
              <li>Content Design and Development</li>
              <li>Process Design and Documentation</li>
              <li>eLearning Development</li>
              <li>Mobile/Responsive Training Development</li>
              <li>Instructor Led Training/Workshop Facilitation</li>
              <li>Virtual Classrooms</li>
              <li>Micro Learning</li>
              <li>Business Simulations (Adobe Captivate)</li>
              <li>Voiceover</li>
              <li>Sales Enablement</li>
            </ul>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export default Services;
