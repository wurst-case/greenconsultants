import React from "react";
import "./Clients.css";
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";

let clientsArray = [
  "Aftelier Perfumes",
  "Another Planet Entertainment (The Independent)",
  "Applied Materials",
  "AT&T (Pacific Bell)",
  "Autodesk",
  "Blue Shield",
  "Business Council for Climate Change",
  "Bytemobile",
  "California Clean Tech Open",
  "Chevron",
  "Cisco",
  "City of San Francisco",
  "DW Morgan",
  "Entrepreneurs Foundation",
  "First Data",
  "Freeman",
  "Gap",
  "The Guardian",
  "Green Spa Network",
  "GXS",
  "Heffernan Insurance",
  "John Muir Health",
  "Kearsley",
  "Laney College",
  "Nissan",
  "Pacific Gas & Electric",
  "Qwest",
  "Sonoma International Film Festival",
  "Team San Jose",
  "Tom's of Maine",
  "University of California - San Francisco",
  "Women in Public Policy (WIPP)"
];

function Clients() {
  return (
    <Layout>
      <Section id="clients">
        <h1>Clients</h1>
        {/* <div className="client-list">
          <ul className="left">
            {clientsArray.map((client, i) => {
              if (i >= clientsArray.length / 2) return <></>;
              return <li>{client}</li>;
            })}
          </ul>
          <ul className="right">
            {clientsArray.map((client, i) => {
              if (i < clientsArray.length / 2) return <></>;
              return <li>{client}</li>;
            })}
          </ul>
        </div> */}
        <ul className="client-list-dynamic">
          {clientsArray.map(client => (
            <li>{client}</li>
          ))}
        </ul>
      </Section>
      <Section banner id="probono">
        <h4>Pro Bono</h4>
        <span>
          Our team donates 10% of their consulting time to pro-bono projects.
        </span>
        <br />
        <span>Contact us to be considered for 2020 pro-bono consulting.</span>
      </Section>
    </Layout>
  );
}

export default Clients;
