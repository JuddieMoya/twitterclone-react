import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Avatar, CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import UsersList from "./components/Users/UserList";
import defaultPicture from "../img/avatar.png"
import { domain } from "../redux/helpers"


class Profile extends React.Component {
  state = {
    user: {}
  }
  componentDidMount() {
    const userName = this.props.location.pathname.split("/")[2]
    fetch("https://kwitter-api.herokuapp.com/users/" + userName)
      .then(response => response.json())
      .then((data) => {
        console.log(data.user.pictureLocation)
        this.setState({
          user: data
        })
       }) 
      .catch(err => console.log(err))
 }

    handleUploadPicture = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      console.log(formData)
     this.state.uploadPicture(formData);
   };

  
  render() {
    const pictureSource = this.state.pictureLocation
      ? domain + this.state.pictureLocation
      : defaultPicture;
    return (
      <>
      {this.state  && this.state.user.user &&
      <>
        <Menu displayName={this.state.user.user.displayName} isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
      <Grid container>
      <Card style={{
        backgroundColor: "#33C1FF"
       }} >
        {/* user info */}
        <Avatar 
         size='large' 
          style={{}}
          src={pictureSource}
          alt="Default user profile"
          variant="square"
       />
       <CardContent>
       <Typography  component="h1" variant="h6">
         Display Name : {this.state.user.user.displayName}
       </Typography>
       </CardContent>
     </Card>
   </Grid>
      </> 
  }
  <h2>Users List</h2>
  <UsersList/>
      </>
    );
  }
}



export default userIsAuthenticated(Profile);
