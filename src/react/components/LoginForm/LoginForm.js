import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../../redux";
import "./LoginForm.css";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <Grid container component="main" className="main">
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className="side-image" />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className="paper">
              <Avatar
                alt="Kwitter Logo"
                src="https://egu2016.eu/egu2016_twitter_no.png"
              />
              <Typography component="h1" variant="h5">
                Kwitter
              </Typography>
              <form className="login-form" onSubmit={this.handleLogin}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="text"
                  name="username"
                  label="Username"
                  autoFocus
                  required
                  onChange={this.handleChange}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="password"
                  name="password"
                  label="Password"
                  required
                  onChange={this.handleChange}
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="login-button"
                >
                  Sign In
                </Button>

                <Link href="/signUp" variant="body2">
                  {"Don't have an account?"}
                </Link>
              </form>
            </div>

            {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => ({
    result: state.auth.login.result,
    loading: state.auth.login.loading,
    error: state.auth.login.error,
  }),
  { login }
)(LoginForm);
