import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";

export default function Dashboard({ username }) {
  username = Auth.getProfile().data.username;

  return (
    <main>
      <h1> Hi {username}</h1>
      <button onClick={() => Auth.logout()}>
        Logout
      </button>
    </main>
  );
}
