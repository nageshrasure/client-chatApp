import React from "react";
import { useHistory } from "react-router";
import "./userProfile.css";
import LetteredAvatar from "react-lettered-avatar";

const UserProfile = (props) => {
  const history = useHistory("");
  const routeHandle = () => {
    let path = "/";
    history.push(path);
  };
  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <LetteredAvatar name={props.name} />
        </div>
        <h4>{props.name}</h4>
      </div>
      <button onClick={routeHandle} className="bttn">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
