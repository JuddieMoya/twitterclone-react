import React from "react";
import { newuser } from "../../../redux";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./SignUpForm.css";
import { ButtonGroup } from "semantic-ui-react";





class SignUpForm extends React.Component {
  state = {
    username: "",
    displayName: "",
    password: "",
  };

  handleNew = (e) => {
    e.preventDefault();
    this.props.newuser(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <React.Fragment>
          <CssBaseline />
          <div id="demo"  className="paper">
            <Avatar
              alt="Kwitter Logo"
              src="https://egu2016.eu/egu2016_twitter_no.png"
            />
            <Typography component="h1" variant="h5">
              Join Kwitter now!
            </Typography>
            <form className="register-form" onSubmit={this.handleNew}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="username"
                    autoFocus
                    required
                    label="Username"
                    onChange={this.handleChange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="displayName"
                    required
                    onChange={this.handleChange}
                    label="Display Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="password"
                    name="password"
                    required
                    onChange={this.handleChange}
                    label="Password"
                  />
                </Grid>
                
              </Grid>
              <Button
                type="submit"
                className="button"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
              
               
                
              >
                Sign-Up!
              </Button>
            </form>
            {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
            <Link href="/">Back to login</Link>
          </div>
        </React.Fragment>
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    result: state.users.newuser.result,
    loading: state.users.newuser.loading,
    error: state.users.newuser.error,
  }),
  { newuser }
)(SignUpForm);
