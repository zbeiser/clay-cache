import React, { useState, useEffect } from "react";
import Auth from "../../utils/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    //if user is logged in, go to the dashboard
    if (Auth.loggedIn()) {
      navigate('/dashboard');
      return;
    }
  }, []);

  return (
    <main>
      <h1>Clay Cache</h1>
      <h2>
        A place to log your ceramic projects and search for them by keywords.
      </h2>
      <section>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
      </section>
    </main>
  );

}
