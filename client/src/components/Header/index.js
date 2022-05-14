import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/cake_logo.png";

import Auth from "../../utils/auth";

const styles = {
  // background: {
  //   backgroundColor: "pink",
  // },
  textStyling: {
    textAlign: "center",
    textDecoration: "none",
    color: "#36454F",
  },
  btnStyling: {
    marginLeft: 40,
    textDecoration: "none",
    color: "#36454F",
  },
  logoStyling: {
    alignContent: "center", 
    width: "250px", 
    height: "250px",
  }, 
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  //

  return (
    <header
      // style={styles.background}
      className="bg-primary text-light mb-4 py-3 flex-row align-center"
    >
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link style={styles.logoStyling} className="text-light" to="/">
            {/* <h1 style={styles.textStyling} className="m-0">
              Let them Eat Cake
            </h1> */}
            <img 
              style={styles.logoStyling} 
              src={logo} 
              alt="logo">
            </img>
          </Link>
          <p style={styles.textStyling} className="m-0">
            Ecletic Cakes for every occasion. We do mean every oCakesion
          </p>
        </div>
        <div style={styles.textStyling}>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getUser().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                style={styles.btnStyling}
                className="btn btn-lg btn-info m-2"
                to="/login"
              >
                Login
              </Link>
              <Link
                style={styles.btnStyling}
                className="btn btn-lg btn-light m-2"
                to="/signup"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
