import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Search />
    </nav>
  );
};

export default NavBar;
