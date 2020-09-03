import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import Messages from "./components/Messages.js"

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <Messages/>
      </>
      
        
    );
  }
}

export default userIsAuthenticated(Profile);
