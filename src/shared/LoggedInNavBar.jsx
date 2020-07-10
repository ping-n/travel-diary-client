import React from "react";
import { Link } from "react-router-dom";

const handleLogout = (props) => {
  localStorage.removeItem("token");
  localStorage.removeItem("auth");
  props.history.push("/");
};

const LoggedInNavBar = (props) => {
  
  return (
    <>
      <div className="log-in">
        <Link to="/">Home</Link>
        <button onClick={() => handleLogout(props)}>DESTROY LOGIN STATUS!</button>
      </div>
      
    </>
  );
};

export default LoggedInNavBar;
