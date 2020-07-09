import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
