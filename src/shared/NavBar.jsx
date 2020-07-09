import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/sign-up">Sign Up</Link>
      
    </nav>
  );
};

export default NavBar;
