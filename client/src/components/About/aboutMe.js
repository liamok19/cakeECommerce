import React from "react";
import webb from "../../../src/assets/webb.png";
import cake01 from "../../assets/theLastSupperCake.png"

const styles = {
  background: {
    // backgroundColor: "pink",
    //   position: 'relative',
    // border: "dotted", 
    width: '25vw', 
    height: '50vh',
    display: "flex",
    alignContent: "space-evenly",
    objectFit: 'contain',
  },
  wrapContainer: {
    display: "flex",
    flexDirection: "space-evenly",
  },
  bufferColumn: {
    marginLeft: "40vw",
  },
};

export default function aboutMe() {
  return (
    <div className="container wrapper" style={styles.wrapContainer}>
      <div className="col-6" style={styles.bufferColumn}></div>
      <img
        src={webb}
        alt="webb"
        className="col-3 pattern01 aboutHover"
        style={styles.background}
      ></img>
      <img
        src={webb}
        alt="webb"
        className="col-3 aboutCard2 aboutHover"
        style={styles.background}
      ></img>
    </div>
  );
}
