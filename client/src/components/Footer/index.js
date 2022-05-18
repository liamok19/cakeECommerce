import React from "react";
import logo from "../../assets/cake_logo.png";

export default function Footer() {
  return (
    <div>
      <div className="footerBG">
        <img className="logoStyling" src={logo} alt="logo"></img>
        <div className="buffer"></div>
        <div>
          <p>Contact details</p>
          <p> Email: letthemeeatCake@yumtreats.com </p>
          <p> Phone: +61 412 345 678 </p>
          <p>Contact details</p>
        </div>
      </div>
      <div className="coprightStyling">
        Copyright @ LetthemEatCake 2022. All rights reserved
      </div>
    </div>
  );
}
