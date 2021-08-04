import React from "react";
import Avatar from "./Avatar";

const ChatListItems = (props) => {
  return (
    <div
      className="userMeta chatlist__item "
      style={{ animationDelay: `0.${props.animationDelay}s` }}
    >
      <Avatar room={props.room} />
      <p>{props.room}</p>
    </div>
  );
};

export default ChatListItems;
