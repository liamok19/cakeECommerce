import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 460, clear: "both", textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
