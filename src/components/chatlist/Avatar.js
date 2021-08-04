import React from "react";
import LetteredAvatar from "react-lettered-avatar";

const Avatar = (props) => {
  return (
    <div className="avatar">
      <div className="avatar-img">
        <LetteredAvatar name={props.room} />
      </div>
      <span></span>
    </div>
  );
};

export default Avatar;
