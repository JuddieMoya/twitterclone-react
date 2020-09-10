import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UsersList from "./components/Users/UserList";



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
       }) 
      .catch(err => console.log(err))
 }
  
 handleDeleteUser = username => {
   const request = {
     method: "DELETE"
   }
   fetch("https://kwitter-api.herokuapp.com/users/" + {username}, request)
   .then((response) => {
     return response.json()
   })
   .then((result) => {
     console.log(result)
   })
 }


  render() {
    return (
      <>
      {this.state  && this.state.user.user &&
      <>
        <Menu displayName={this.state.user.user.displayName} isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
      {/* <h2>{this.state.user.user.displayName}</h2>     */}
      <Grid container>
      <Card style={{
        backgroundColor: "#33C1FF"
      }} >
      <CardActionArea>
      <CardMedia
          component="img"
          alt="Avatar"
          height="140"
          title="Default Avatar"
        />
       <CardContent>
       <Typography  component="h1" variant="h6">
       Display Name : {this.state.user.user.displayName}
       </Typography>
     </CardContent>
      </CardActionArea>
     <Button>Edit Profile</Button>
     <Button style={{color: "#FF3333"}}
     onClick={() => { this.handleDeleteUser(this.state.user.user )}}
     >Delete Profile
     </Button>
   </Card>
   </Grid>
      </> 
  }
  <h2>Other Users</h2>
  <UsersList/>
      </>
    );
  }
}


export default userIsAuthenticated(Profile);
