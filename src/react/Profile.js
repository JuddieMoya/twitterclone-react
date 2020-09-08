import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";

class Profile extends React.Component {
  state = {
    user: {}
  }
  componentDidMount() {
    const userName = this.props.location.pathname.split("/")[2]
    fetch("https://kwitter-api.herokuapp.com/users/" + userName)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          user: data
        })
        console.log(this.state)
       }) 
      .catch(err => console.log(err))
 }


  render() {
    return (
      <>
      {this.state  && this.state.user.user &&
      <>
        <Menu displayName={this.state.user.user.displayName} isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
      <h2>{this.state.user.user.displayName}</h2>    
      </> 
  }
      </>
    );
  }
}


export default userIsAuthenticated(Profile);
