import React, { useState } from 'react';
import { FaPaperclip } from "react-icons/fa";
import './chatpop.css';

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey, what can I help you with today?", from: "bot", time: "18:36 PM" }
  ]);
  const [input, setInput] = useState('');

  const togglePopup = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { text: input, from: "user", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // You can handle file upload or preview here
    }
  };
  

  return (
    <>
      <button className="chat-button" onClick={togglePopup}>
        💬 Chat
      </button>

      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <span>Chat with Ova</span>
            <button className="chat-close" onClick={togglePopup}>×</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.from}`}>
                <p>{msg.text}</p>
                <span className="chat-time">{msg.time}</span>
              </div>
            ))}
          </div>

          <div className="chat-input">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
    placeholder="Ask anything you want....."
  />

  <label className="file-button">
    <FaPaperclip size={20} />
    <input type="file" onChange={handleFileChange} style={{ display: "none" }} />
  </label>

  <button className="send-button" onClick={sendMessage}>➤</button>
</div>


          <div className="chat-footer">
            Powered by ChurnIQ
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPopup;
