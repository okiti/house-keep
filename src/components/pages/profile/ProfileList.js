import React from "react";
import ProfileSummary from "./ProfileSummary";
import { Link } from "react-router-dom";

const ProfileList = ({ profiles }) => {
  return (
    <div>
      {profiles &&
        profiles.map(profile => {
          return (
            <Link to={"/profile/" + profile.id}>
              <ProfileSummary profile={profile} key={profile.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProfileList;
