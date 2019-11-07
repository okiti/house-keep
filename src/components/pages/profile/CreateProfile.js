import React, { Component } from "react";

export default class CreateProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Please Input your Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="age">Please Enter your Age</label>
          <input type="number" id="age" name="age" />
          <label type="work">Years of work experience</label>
          <input type="text" id="work" name="work" />
        </form>
      </div>
    );
  }
}
