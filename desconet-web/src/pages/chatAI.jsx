import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdSend } from 'react-icons/md';
import ReactMarkdown from 'react-markdown';
import { sendMessageToN8N, getErrorMessage, generateUserId, generateSessionId } from '../services/apiAI';
import styles from '../styles/ChatAI.module.css';

const ChatAI = () => {
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [sessionId] = useState(() => generateSessionId());
  const [userId] = useState(() => generateUserId());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    initializeChat();
  }, []);
  
  const initializeChat = async () => {
    try {
      setIsLoading(true);
      const response = await sendMessageToN8N('', sessionId, 'Will', userId, true);
      
      setMessages([{
        id: Date.now(),
        text: response,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;
    
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsLoading(true);
    setError('');
    
    try {
      const response = await sendMessageToN8N(currentInput, sessionId, 'Will', userId, false);
      
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleTouchStart = (e) => {
    if (e.target.closest(`.${styles.sendButton}`)) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.wrapper} onTouchStart={handleTouchStart}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button 
            className={styles.backButton}
            onClick={() => navigate('/')}
            title="Voltar ao início"
          >
            <MdArrowBack />
          </button>
          <h1 className={styles.title}>Chat Desconet AI</h1>
        </div>
        
        <div className={styles.messagesContainer}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${message.isUser ? styles.userMessage : styles.botMessage}`}
            >
              <div className={styles.messageContent}>
                {message.isUser ? (
                  <div>{message.text}</div>
                ) : (
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer" />
                      )
                    }}
                  >
                    {message.text}
                  </ReactMarkdown>
                )}
              </div>
              <div className={styles.timestamp}>
                {message.timestamp}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className={`${styles.message} ${styles.botMessage}`}>
              <div className={styles.loadingMessage}>
                <span>Desconet está digitando</span>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem..."
            className={styles.input}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className={styles.sendButton}
            title="Enviar mensagem"
          >
            <MdSend className={styles.sendIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAI;
