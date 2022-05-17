import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
const styles = {
  headerPositioning: {
    marginLeft: "12.5vw",
    marginBottom: "-14px",
    marginTop: "-60px",
  },
  firstBodyPosition: {
    marginLeft: "12vw",
    fontSize: "3vw",
  },
  bodyPositioning: {
    marginLeft: "0.2vw",
    fontSize: "3vw",
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
      <div>
        <div>
          <h4
            style={styles.headerPositioning}
            className="fontstyle"
          >
            Login
          </h4>
          <div style={styles.bodyPositioning} className="fontstyle">
            {data ? (
              <p className="fontstyle">
                Success! You may now head{" "}
                <Link className=" fontstyle"  to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input fontstyle"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  style={styles.firstBodyPosition}
                />
                <input
                  className="form-input fontstyle"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  style={styles.bodyPositioning}
                />
                <button
                  className="btn btn-block btn-primary fontstyle submitPositioning"
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
