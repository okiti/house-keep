import React, { Component } from "react";
import Logo from "../../../asset/logo.png";
import "../../../asset/css/eric.css";
import "../../../asset/css/signin.css";
import { Link } from "react-router-dom";

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
      <div className='mar-tb-30'>
        <div className="flex justify-content-center">
          <div className="flex column nowrap align-items-center">
            <section className="flex column nowrap align-items-center">
              <img src={Logo} alt="Logo" className="form-img" />
              <div className="flex column nowrap align-items-center mar-tb-15">
                <p className="text-20 strong">Sign In</p>
              </div>
            </section>
            <section className="flex nowrap align-items-center">
              <form className='flex column nowrap' onSubmit={this.handleSubmit}>
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
                <div className='flex align-items-center nowrap'>
                <input
                  type="checkbox"
                  name="remember"
                  value="remember"
                  id="remember"
                  checked
                  onChange={this.handleChange}
                />&nbsp;&nbsp;&nbsp;
                Remember me <br />
                </div>
                
                <button type="submit">SIGN IN</button>
              </form>
            </section>
            <section className="flex column nowrap align-items-center">
              <Link>
                <p className='text-12'>Forgot password?</p>
              </Link>
              <Link>
                <p>Don't have an account? Sign Up</p>
              </Link>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
