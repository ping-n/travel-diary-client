import React from "react";
import GetData from "./GetData";
import Search from "./Search";
import NavBar from "../shared/NavBar";
import "../styles/App.css";

function App() {
  return (
    <>
      <NavBar />
      <GetData />
      <Search />
    </>
  );
}

export default App;
