import React, { Component } from "react";
import Nav from "../Nav/nav";
import "./chat.css";
import ChatBody from "./../chatBody/chatBody";

class Chat extends Component {
  constructor(props) {
    super(props);
    let name = localStorage.getItem("name");
    let room = localStorage.getItem("room");
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
