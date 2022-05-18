import React from "react";
import Jumbotron from "../components/Jumbotron";
import cakeLoader from "../assets/cake_loader.gif";

function Success() {
  setTimeout(() => {
    window.location.assign('/');
  }, 3000);

  return (
    <div>
      <Jumbotron>
        <h1
        className="fontstyleSuccess"
        >
          Congratulations!
          <img 
            src={cakeLoader}
            alt="cakeLoader"
            className="imgSizeSuccess successContainer "
          ></img>
        </h1>

        <h2>The BAKING has begun. You are part of our journey!</h2>
        <h2>Now let's head back to the homepage</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
