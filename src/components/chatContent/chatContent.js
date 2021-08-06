import React from "react";
import ReactScrollToBottom from "react-scroll-to-bottom";
import "./chatContent.css";

const ChatContent = ({
  setMessage,
  sendMessage,
  message,
  room,
  historyOfMessages,
  setHistoryOfMessages,
  name,
}) => {
  
   
  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <h3>{room}</h3>
            
          </div>
        </div>
      </div>
      <div className="content__body" style={{ overflow: "scroll" }}>
        <div className="chat__items">
          <div>
            <ReactScrollToBottom> {historyOfMessages}</ReactScrollToBottom>
          </div>
          <div />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={(event) =>
              event.key === "Enter" ? sendMessage(event) : null
            }
          />
          <button
            className="btnSendMsg"
            id="sendMsgBtn"
            onClick={(e) => sendMessage(e)}
          >
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatContent;
