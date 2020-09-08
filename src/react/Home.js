import React from "react";
import { LoginForm, Menu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";



class Home extends React.Component {
  render() {
    return (
      <>
        
        
        <LoginForm />
        
      
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
