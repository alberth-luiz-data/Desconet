import React, { useState } from "react";
import "../styles/chat-group.css";
import { FaArrowLeft, FaPaperPlane, FaSmile } from "react-icons/fa";

// Mock de mensagens do grupo
const initialMessages = [
  { user: "Maria", text: "Oi, pessoal! Como vocês estão?", isUser: false, avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { user: "Você", text: "Tudo ótimo! E vocês?", isUser: true, avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  { user: "Carlos", text: "Estou aqui! Vamos desconectar um pouco da internet?", isUser: false, avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
  { user: "Você", text: "Boa ideia! Qual desafio vamos tentar?", isUser: true, avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
];

export default function ChatGroup() {
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
    <div className="chat-group-page">
      <div className="chat-group-header">
        <button className="back-button">
          <FaArrowLeft size={20} color="#fff" />
        </button>
        <h2></h2>
      </div>

      <div className="chat-group-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`group-message ${msg.isUser ? "user-message" : "other-message"}`}
          >
            <img src={msg.avatar} alt="avatar" className="group-message-avatar" />
            <div className="group-message-details">
              <div className="group-message-user">{msg.user}</div>
              <div className="group-message-text">{msg.text}</div>
            </div>
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

      <div className="chat-group-input">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="chat-group-buttons">
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
