import React from "react";
import logo from "../../assets/cake_logo.png";

const styles = {
  background: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "pink",
    position: "sticky",
  },
  logoStyling: {
    width: "10vw",
    height: "20vh",
    marginLeft: "9vw",
  },
  buffer: {
    marginLeft: "50vw",
  },
  coprightStyling: {
   textAlign: "center",

  },
};

export default function Footer() {
  return (
    <div>
      <div style={styles.background}>
        <img style={styles.logoStyling} src={logo} alt="logo"></img>
        <div style={styles.buffer}></div>
        <div>
          <p>Contact details</p>
        </div>
      </div>
      <div style={styles.coprightStyling}>Copyright @ LetthemEatCake 2022. All rights reserved</div>
    </div>
  );
}
