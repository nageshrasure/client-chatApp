import React from "react";
import Avatar from "./Avatar";
import SelectRoom from "../select/select";

const ChatListItems = (props) => {
  return (
    <div
      className="userMeta chatlist__item "
      style={{ animationDelay: `0.${props.animationDelay}s` }}
    >
      <Avatar roomName={props.roomName} />
      <p>{props.roomName}</p>
    </div>
  );
};

export default ChatListItems;
