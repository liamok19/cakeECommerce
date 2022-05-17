import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
const styles = {
  headerPositioning: {
    marginLeft: "12vw",
    marginBottom: "-14px",
    marginTop: "-60px",
  },
  firstBodyPosition: {
    // marginLeft: "10vw",
    fontSize: "3vw",
    display: "flex",
    flexDirection: "column",
  },
  buttonPosition: {
    marginLeft: "160px",
  },
};

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main style={styles.background} className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4
            style={styles.headerPositioning}
            className="card-header bg-dark text-light p-2 fontstyle"
          >
            Login
          </h4>
          <div style={styles.firstBodyPosition} className="card-body fontstyle">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form style={styles.buttonPosition} onSubmit={handleFormSubmit}>
                <input
                  className="form-input fontstyle loginBtn"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  style={styles.firstBodyPosition}
                />
                <input
                  className="form-input fontstyle loginBtn"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  style={styles.firstBodyPosition}
                />
                <button
                  className="btn btn-block btn-primary fontstyle loginBtn"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
