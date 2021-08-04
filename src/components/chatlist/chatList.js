import React from "react";
import "./chatList.css";
import ChatListItems from "./chatListItem";

const ChatList = (props) => {
  return (
    <div className="main__chatlist">
      <button className="btn">
        <i className="fa fa-plus"></i>
        <input
          type="text"
          placeholder="New conversation"
          style={{
            outline: "none",
            border: "none",
            marginTop: "15px",
            marginLeft: "10px",
          }}
        />
      </button>
      <div className="chatlist__heading">
        <h2>Rooms</h2>
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <input type="text" placeholder="Search Here" required />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="chatlist__items">
        <ChatListItems room={props.room} />
      </div>
    </div>
  );
};

export default ChatList;
