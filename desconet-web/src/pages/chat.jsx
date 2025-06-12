import React, { useState } from "react";
import "../styles/chat.css";
import { FaArrowLeft, FaPaperPlane, FaSmile } from "react-icons/fa";

// Mock para mensagens de outras pessoas e do usuário
const initialMessages = [
  { user: "Maria", text: "Oi, como você está?", isUser: false, avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { user: "Você", text: "Estou bem! E você?", isUser: true, avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  { user: "Maria", text: "Estou pensando em passar o dia offline", isUser: false, avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { user: "Você", text: "Boa ideia! Vamos tentar um desafio offline?", isUser: true, avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
];

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { user: "Você", text: message, isUser: true, avatar: "https://randomuser.me/api/portraits/men/3.jpg" }]);
      setMessage("");
    }
  };

  const handleEmojiSelect = (emoji) => {
    setMessage(message + emoji);
    setEmojiPickerVisible(false);
  };

  const emojis = ["😀", "😂", "😍", "😭", "😎", "😜", "🥺", "🤔"];

  return (
    <div className="chat-page">
      <div className="chat-header">
        <button className="back-button">
          <FaArrowLeft size={20} color="#fff" />
        </button>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.isUser ? "user-message" : "other-message"}`}
          >
            <img src={msg.avatar} alt="avatar" className="message-avatar" />
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
      </div>

      {emojiPickerVisible && (
        <div className="emoji-picker">
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className="emoji"
              onClick={() => handleEmojiSelect(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}

      <div className="chat-input">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="chat-buttons">
          <button
            className="emoji-button"
            onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}
          >
            <FaSmile size={20} />
          </button>
          <button className="send-button" onClick={handleSendMessage}>
            <FaPaperPlane size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
