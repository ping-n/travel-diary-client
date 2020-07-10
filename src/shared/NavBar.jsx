import React from "react";
import LoggedInNavBar from "./LoggedInNavBar";
import LoggedOutNavBar from "./LoggedOutNavBar";

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        {localStorage.getItem("token") ? (
          <>
            <LoggedInNavBar history={this.props.history} />
          </>
        ) : (
          <>
            <LoggedOutNavBar />
          </>
        )}
      </nav>
    );
  }
}

export default NavBar;
