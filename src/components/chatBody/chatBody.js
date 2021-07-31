import React, { useState, useEffect } from "react";
import UserProfile from "../userProfile/userProfile";
import ChatList from "./../chatlist/chatList";
import ChatContent from "./../chatContent/chatContent";
import "./chatBody.css";
import io from "socket.io-client";

import axios from "axios";



const ENDPOINT = "https://uber-chat.herokuapp.com/rooms/sendmessage";
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
//const data = { username: 'example' };

// fetch('https://uber-chat.herokuapp.com/rooms/sendmessage', {
//   method: 'POST', 
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });


  return (
    <div className="main__chatbody">
      <ChatList name={props.name} room={props.room} />
      <ChatContent
        name={props.name}
        room={props.room}
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
