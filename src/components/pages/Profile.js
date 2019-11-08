import React, { Component } from "react";
import ProfileList from "../pages/profile/ProfileList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Profile extends Component {
  render() {
    console.log(this.props);
    const { profiles } = this.props;
    return (
      <div>
        <ProfileList profiles={profiles} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    profiles: state.firestore.ordered.profiles
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "profiles" }])
)(Profile);
