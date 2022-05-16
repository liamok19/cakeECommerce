import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const styles = {
  headerPositioning: {
    marginLeft: "12.5vw",
    marginBottom: "-14px",
    marginTop: "-60px",
  },
  bodyPositioning: {
    marginLeft: "0.2vw",
    fontSize: "3vw",
  },
  firstBodyPosition: {
    marginLeft: "12vw",
    fontSize: "3vw",
  }
}

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main style={styles.background} className="flex-row justify-center mb-4">
      <div>
        <div>
          <h4 style={styles.headerPositioning} className=" fontstyle">Sign Up</h4>
          <div style={styles.bodyPositioning}>
            {data ? (
              <p className=" fontstyle">
                Success! You may now head{' '}
                <Link className=" fontstyle" to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input fontstyle"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  style={styles.firstBodyPosition}
                />
                <input
                  className="form-input fontstyle"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  style={styles.bodyPositioning}
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
                  style={{ cursor: 'pointer' }}
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

export default Signup;
