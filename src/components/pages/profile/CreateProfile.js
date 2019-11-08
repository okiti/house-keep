import React, { Component } from "react";
import { connect } from "react-redux";
import { createProfile } from "../../../store/actions/profileActions";

class CreateProfile extends Component {
  state = {
    name: "",
    age: "",
    work: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createProfile(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Please Input your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
          />
          <label htmlFor="age">Please Enter your Age</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={this.handleChange}
          />
          <label type="work">Years of work experience</label>
          <input
            type="text"
            id="work"
            name="work"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createProfile: profile => dispatch(createProfile(profile))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProfile);
