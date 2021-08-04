import React, { Component } from "react";
import Nav from "../Nav/nav";
import "./chat.css";
import ChatBody from "./../chatBody/chatBody";

class Chat extends Component {
  constructor(props) {
    super(props);
    const user = JSON.parse(localStorage.getItem("user"));
    let name = user.user.userName;
    let room = user.roomName;
    this.state = {
      name: name,
      room: room,
    };
  }
  render() {
    return (
      <div className="__main ">
        <Nav />
        <ChatBody name={this.state.name} room={this.state.room} />
      </div>
    );
  }
}

export default Chat;
