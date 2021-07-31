import React from 'react';
import Message from './message';
const Messages = ({messages})=>{
    return(
            <div className="messageSection">
                {messages.map(message=>{
                    return(
                        <div className="messageContainer">
                            <Message message={message}/>
                        </div>
                    )
                })}
            </div>
    );
};
export default Messages;