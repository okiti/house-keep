import React, { Component } from "react";
import ProfileList from "../pages/profile/ProfileList";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ProfileList />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    profiles: state.profile.profiles
  };
};

export default connect(mapStateToProps)(Profile);
