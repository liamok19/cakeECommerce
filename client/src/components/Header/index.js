import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/cake_logo.png";

import Auth from "../../utils/auth";

const styles = {
  mainContainer: {
    zIndex: 10000,
    },
  loginStyling: {
    marginTop:"38px",
    textDecoration: "none",
  },
  btnStyling: {
    marginLeft: 40,
    textDecoration: "none",
    color: "#36454F",
  },
  logoStyling: {
   
  }, 
  containerStyling: {
    marginBottom: "5vh",
  },
  logoutStyling: {
    marginLeft: "13vw",
    fontSize: "3vw", 
    textDecoration: "none",
    color: "black"
  }
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  //

  return (
    <header
      
      className="bg-primary text-light mb-4 py-3 flex-row align-center"
    >
      <div  
      style={styles.mainContainer} 
      className="container flex-row justify-space-between-lg justify-center align-center">
        <div style={styles.containerStyling}>
        <h2  
        className="fontstyle textStamp"
        >Let them Eat Cake</h2>
          <Link to="/">
            <img 
              className="logoStylingHeader"
              src={logo} 
              alt="logo">
            </img>
          </Link>
          <div style={styles.loginStyling}>
          {Auth.loggedIn() ? (
            <>
              <Link style={styles.btnStyling} className="btn btn-lg btn-info m-2 fontstyle" to="/me">
                {Auth.getUser().data.username}'s profile
              </Link>
              <button style={styles.btnStyling} className="btn btn-lg btn-light m-2 fontstyle" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                style={styles.btnStyling}
                className="btn btn-lg btn-info m-2 fontstyle"
                to="/login"
              >
                Login
              </Link>
              <Link
                style={styles.btnStyling}
                className="btn btn-lg btn-light m-2 fontstyle"
                to="/signup"
              >
                Signup
              </Link>
            </>
          )}
          {/* <p style={styles.textStyling} className="m-0">
            Ecletic Cakes for every occasion. We do mean every oCakesion
          </p> */}
        </div>
        
        </div>
      </div>
    </header>
  );
};

export default Header;
