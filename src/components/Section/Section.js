import React from "react";
import Anchor from "../Anchor/Anchor";
import "./Section.css";

const Section = props => {
  return (
    <div
      className={
        "section" +
        (props.alt === undefined ? "" : " alt") +
        (props.banner === undefined ? "" : " banner")
      }
    >
      <Anchor id={props.id} />
      {props.children}
    </div>
  );
};

export default Section;
