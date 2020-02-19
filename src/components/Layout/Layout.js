import React from "react";
import Anchor from "../Anchor/Anchor";
import "./Layout.css";

const Layout = props => {
  return (
    <div className="layout">
      <Anchor id="top" />
      {props.children}
    </div>
  );
};

export default Layout;
