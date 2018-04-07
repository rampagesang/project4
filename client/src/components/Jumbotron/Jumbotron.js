import React from "react";

const Jumbotron = ({ children }) => (
  <div style={{ height: 300, clear: "both" }} className="jumbotron style">
    {children}
  </div>
);

export default Jumbotron;
