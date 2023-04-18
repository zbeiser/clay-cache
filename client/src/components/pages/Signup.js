import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main>
      <h1>Signup</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              placeholder="username"
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="pswd">Password: </label>
            <input
              placeholder="********"
              name="password"
              type="password"
              id="pswd"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
          <div>
            <Link to="/login">
              <button className="button">
                Log in to an existing account
              </button>
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Signup;
