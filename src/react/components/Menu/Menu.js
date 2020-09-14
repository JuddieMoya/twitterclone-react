import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { connect } from "react-redux";
import { logout } from "../../../redux";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
  Avatar,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div>
        <div id="menu">
          <Typography variant="h1" component="h2">
            &nbsp; &nbsp; &nbsp; &nbsp;Kwitter
          </Typography>
        </div>

        <Drawer
          className="drawer"
          variant="persistent"
          anchor="left"
          open={true}
        >
          <Avatar
            alt="kwitterlogo"
            src="https://egu2016.eu/egu2016_twitter_no.png"
            className="logo"
          />
          <List>
            <Link to="/" className="link">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/messagefeed" className="link">
              <ListItem button>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Messages"} />
              </ListItem>
            </Link>
            <Link to="/" onClick={this.handleLogout} className="link">
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    result: state.auth.logout.result,
    loading: state.auth.logout.loading,
    error: state.auth.logout.error,
  }),
  { logout }
)(Menu);
