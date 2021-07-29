import React from "react";
import LetteredAvatar from "react-lettered-avatar";
import SelectRoom from "../select/select";

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
