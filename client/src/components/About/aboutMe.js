import React from "react";
import { Link } from "react-router-dom";
import webb from "../../../src/assets/webb.png";
import cake01 from "../../assets/theLastSupperCake.png";

const styles = {
  background: {
    // backgroundColor: "pink",
    //   position: 'relative',
    // border: "dotted",
    width: "25vw",
    height: "25vh",
    display: "flex",
    alignContent: "space-evenly",
  },
  wrapContainer: {
    display: "flex",
    flexDirection: "space-evenly",
  },

};

export default function aboutMe() {
  return (
    <div className="container wrapper" style={styles.wrapContainer}>
      <div className="col-6 bufferColumn" ></div>
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
      <h2 className="aboutUs" style={{ position: "absolute" }}>
        Our Vision
        <p className="aboutBody">
          We make cakes. Buy the cake, buy the collection, because you
          are...exactly
        </p>
      </h2>
    </div>
  );
}
