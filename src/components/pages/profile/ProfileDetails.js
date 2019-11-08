import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProfileDetails = props => {
  const { profile } = props;
  if (profile) {
    return (
      <div>
        <div>
          <div>
            <span>{profile.name}</span>
            <p>{profile.skills}</p>
          </div>
          <div>
            <div>{profile.age}</div>
            <div>{profile.work}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  //   console.log(state);
  const id = ownProps.match.params.id;
  const profiles = state.firestore.data.profiles;
  const profile = profiles ? profiles[id] : null;
  return {
    profile: profile
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "profiles" }])
)(ProfileDetails);
