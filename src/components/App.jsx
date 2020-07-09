import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import SiteLayOut from "../layout/SiteLayout";

function App() {
  return (
    <>
      <Route component={NavBar} />
      <SiteLayOut>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/" component={Home} />
        </Switch>
      </SiteLayOut>
    </>
  );
}

export default App;
