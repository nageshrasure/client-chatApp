import React from "react";
import "./chatList.css";
import { useState, useEffect } from "react";
import ChatListItems from "./chatListItem";
import axios from "axios";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
const ChatList = (props) => {
  const room = [
    {
      id: 1,
      roomName: 'Room 1'
    },
    {
      id: 2,
      roomName: 'Room 2'
    },
    {
      id: 3,
      roomName: 'Room 3'
    },
    {
      id: 4,
      roomName: 'Room 4'
    },
    {
      id: 5,
      roomName: 'Room 5'
    }
  ]
  const handleOnSearch = (string, results) => {
    
    console.log(string, results)
  }

  

  const handleOnSelect = (item) => {
    
    console.log(item)
  }

  
  const formatResult = (item) => {
    return item;
   
  }
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
      <ReactSearchAutocomplete
            items={room}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            formatResult={formatResult}
          />
      <div className="chatlist__items">
        <ChatListItems room={props.room} />
      </div>
    </div>
  );
};
export default ChatList;