import React from "react";
import { Link } from "react-router-dom";

const LoggedOutNavBar = () => {
  return (
    <>
      <div className="log-out">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </>
  );
};

export default LoggedOutNavBar;
