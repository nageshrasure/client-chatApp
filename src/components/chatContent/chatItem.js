import React from "react";

import "./chatContent.css";

const ChatItem = ({ historyOfMessages, message, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (name === trimmedName) {
    isSentByCurrentUser = true;
  }

  // return
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{historyOfMessages}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <p className="sentText pl-10 ">{name}</p>
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{historyOfMessages}</p>
      </div>
    </div>
  );
};

export default ChatItem;
