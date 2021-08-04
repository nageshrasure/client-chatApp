import React from "react";
import axios from "axios";
import "./userProfile.css";
import LetteredAvatar from "react-lettered-avatar";
//import { useHistory } from "react-router";

const UserProfile = (props) => {
  const routeHandle = async (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    let userId = user.user._id;
    await axios
      .delete("https://chat-uber.herokuapp.com/rooms/" + userId, {
        userId: { userId },
      })
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          localStorage.clear();
          window.location.href = "/";
        }
      });
    // let path = "/";
    // history.push(path);
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
