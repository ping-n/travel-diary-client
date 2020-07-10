import React from "react";
import SearchData from "./SearchData";
import { Header } from "semantic-ui-react";

const Home = () => {
  return (
    <>
      <Header as="h1" textAlign="left" size="large" className="hero-text">Welcome to our App</Header>
      <SearchData />
    </>
  );
};

export default Home;
