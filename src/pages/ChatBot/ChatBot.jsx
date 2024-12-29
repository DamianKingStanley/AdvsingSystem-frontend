import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatMessage from "../../component/ChatMessage/ChatMessage";
import "./ChatBot.css";
import thera from "../../assest/thera.jpg";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("studentData"));
    if (userData && userData.id) {
      setUserId(userData.id);
    }
  }, []);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "user", message: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://academic-advise-server.onrender.com/chatbot",
        {
          input_text: input,
          userId: userId,
        }
      );
      const botMessage = { sender: "bot", message: response.data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        sender: "bot",
        message: "Sorry, I am having trouble understanding your request.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setLoading(false);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <Navbar />
      <Navibar />
      <div className="headerChat">
        <img src={thera} alt="Therapist" />
        <p>Therapist</p>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} message={msg.message} />
        ))}
        {loading && (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>The bot is loading, please wait...</p>
          </div>
        )}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? handleSend() : null)}
          placeholder="What is on your mind?..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
