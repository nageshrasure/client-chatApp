import React, { useState, useEffect } from "react";
import UserProfile from "../userProfile/userProfile";
import ChatList from "./../chatlist/chatList";
import ChatContent from "./../chatContent/chatContent";
import "./../chatContent/chatContent.css";
import "./chatBody.css";
import moment from "moment";

import axios from "axios";

const ChatBody = (props) => {
  let [message, setMessage] = useState("");
  let [historyOfMessages, setHistoryOfMessages] = useState([]);

  useEffect(() => {
    async function fetchMessageHistory() {
      const user = JSON.parse(localStorage.getItem("user"));
      let roomId = user.user.roomId;
      await axios
        .get("https://chat-uber.herokuapp.com/rooms/messageshistory/" + roomId)
        .then((response) => {
          if (response.status === 200 && response.data.success) {
            console.log(response);
            setHistoryOfMessages(
              response.data.data.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="chat__item__content">
                      <span className="name" >{item.userId.userName}</span>
                      <span className="date" >{moment(item.createdAt).format("LTS")}</span>
                      <div className="chat__msg" >{item.message}</div>
                    </div>
                    <div className="chat__meta">
                      {/* <span className="date">{index.createdAt}</span> */}
                    </div>
                  </div>
                );
              })
            );
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchMessageHistory();
   
    
  }, []);

  const sendMessage = async (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    let userId = user.user._id;
    let roomId = user.user.roomId;
    await axios
      .post("https://chat-uber.herokuapp.com/rooms/sendmessage", {
        roomId: roomId,
        userId: userId,
        message: message,
      })
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          setMessage(response.data.data.message);
          console.log(response, "deliverd");
          setMessage("");
          
        }
      })
      
      
      .catch((error) => {
        console.log(error);
      });
      
      
   
  };

  return (
    <div className="main__chatbody">
      <ChatList name={props.name} room={props.room} />
      <ChatContent
        name={props.name}
        room={props.room}
        historyOfMessages={historyOfMessages}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        setHistoryOfMessages={setHistoryOfMessages}
      />
      <UserProfile name={props.name} />
    </div>
  );
};

export default ChatBody;
