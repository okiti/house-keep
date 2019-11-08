import React, { Component } from "react";
import Logo from "../../../asset/logo.png";
import "../../../asset/css/eric.css";
import "../../../asset/css/signin.css";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Temmietayo/house-keep">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    remember: ""
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="flex column justify-content-center">
          <div className="flex column nowrap">
            <section className="flex nowrap align-items-center">
              <img src={Logo} alt="Logo" className="form-img" />
              <div className="flex column nowrap align-items-center mar-tb-15">
                <p className="text-20 strong">Sign In</p>
              </div>
            </section>
            <section className="flex nowrap align-items-center">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address*"
                  required
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password*"
                  required
                  onChange={this.handleChange}
                />
                <input
                  type="checkbox"
                  name="remember"
                  value="remember"
                  id="remember"
                  checked
                  onChange={this.handleChange}
                />
                Remember me <br />
                <button type="submit">SIGN IN</button>
              </form>
            </section>
            <section className="flex nowrap align-items-center">
              <Link>
                <p>Forgot password?</p>
              </Link>
              <Link>
                <p>Don't have an account? Sign Up</p>
              </Link>
            </section>
            <Box mt={8}>
              <Copyright />
            </Box>
          </div>
        </div>
      </Container>
    );
  }
}
export default SignIn;
