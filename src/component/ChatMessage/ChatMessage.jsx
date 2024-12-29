import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ message, sender }) => {
  return (
    <div className={`chat-message ${sender}`}>
      <div className="message-content">{message}</div>
    </div>
  );
};

export default ChatMessage;
