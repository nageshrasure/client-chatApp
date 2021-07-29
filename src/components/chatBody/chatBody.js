import React, { useState, useEffect } from "react";
import UserProfile from "../userProfile/userProfile";
import ChatList from "./../chatlist/chatList";
import ChatContent from "./../chatContent/chatContent";
import "./chatBody.css";
import io from "socket.io-client";
import SelectRoom from "../select/select";

const ENDPOINT = "https://uber-chat.herokuapp.com/rooms";
let socket;
const ChatBody = (props) => {
  let [message, setMessage] = useState("");
  let [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="main__chatbody">
      <ChatList name={props.name} room={props.roomName} />
      <ChatContent
        name={props.name}
        room={props.roomName}
        messages={messages}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
      <UserProfile name={props.name} />
    </div>
  );
};

export default ChatBody;
